"""engine2 procedural sound design. Every sound is synthesised here (no third-party samples).
make_all(dir) writes 48 kHz mono WAVs: one-shots (pop, hit, whoosh, ...) and ambience loops (ticker, crowd, waves, ...).
"""
import os
import numpy as np
import soundfile as sf

SR = 48000
rng = np.random.default_rng(11)


def env_ad(n, a=0.005, d=0.2):
    t = np.arange(n) / SR
    return np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / max(d, 1e-4))


def noise(n):
    return rng.standard_normal(n)


def lowpass(x, fc):
    # one-pole low-pass applied twice
    a = np.exp(-2 * np.pi * fc / SR)
    y = np.empty_like(x); s = 0.0
    for _ in range(2):
        s = 0.0
        for i in range(len(x)):
            s = (1 - a) * x[i] + a * s
            y[i] = s
        x = y.copy()
    return y


def lp_fast(x, fc):
    # FFT brick-ish low-pass (fast for long signals)
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= 1 / (1 + (f / fc) ** 4)
    return np.fft.irfft(X, len(x))


def bp_fast(x, lo, hi):
    X = np.fft.rfft(x)
    f = np.fft.rfftfreq(len(x), 1 / SR)
    X *= (1 / (1 + (lo / np.maximum(f, 1)) ** 4)) * (1 / (1 + (f / hi) ** 4))
    return np.fft.irfft(X, len(x))


def norm(x, peak=0.8):
    return (x / (np.max(np.abs(x)) + 1e-9) * peak).astype(np.float32)


def sweep(f0, f1, dur, wave='sine'):
    n = int(dur * SR)
    f = np.linspace(f0, f1, n)
    ph = 2 * np.pi * np.cumsum(f) / SR
    return np.sin(ph)


def pop():
    n = int(0.09 * SR)
    return norm(sweep(380, 950, 0.09) * env_ad(n, 0.002, 0.03), 0.5)


def hit():
    n = int(0.6 * SR)
    t = np.arange(n) / SR
    body = np.sin(2 * np.pi * (70 - 30 * t) * t) * np.exp(-t / 0.18)
    crack = lp_fast(noise(n), 2500) * np.exp(-t / 0.03)
    return norm(body + 0.6 * crack, 0.9)


def stamp():
    n = int(0.35 * SR)
    t = np.arange(n) / SR
    thump = np.sin(2 * np.pi * 95 * t) * np.exp(-t / 0.06)
    slap = bp_fast(noise(n), 400, 4000) * np.exp(-t / 0.02)
    return norm(thump + 0.8 * slap, 0.9)


def whoosh(dur=0.6):
    n = int(dur * SR)
    t = np.linspace(0, 1, n)
    x = noise(n)
    # moving band-pass via segment filtering
    out = np.zeros(n)
    segs = 24
    for k in range(segs):
        a, b = k * n // segs, (k + 1) * n // segs
        fc = 300 + 2600 * np.sin(np.pi * (k + .5) / segs)
        out[a:b] = bp_fast(x, fc * 0.5, fc * 1.6)[a:b]
    return norm(out * np.sin(np.pi * t) ** 1.5, 0.55)


def paper():
    n = int(0.45 * SR)
    x = np.zeros(n)
    for _ in range(40):
        p = rng.integers(0, n - 2000)
        L = rng.integers(200, 1600)
        x[p:p + L] += noise(L) * np.exp(-np.arange(L) / (L / 3)) * rng.uniform(0.2, 1)
    return norm(bp_fast(x, 1200, 9000) * np.hanning(n) ** 0.3, 0.45)


def click():
    n = int(0.03 * SR)
    t = np.arange(n) / SR
    return norm(bp_fast(noise(n), 1500, 7000) * np.exp(-t / 0.004), 0.5)


def tick():
    n = int(0.02 * SR)
    t = np.arange(n) / SR
    return norm(np.sin(2 * np.pi * 2400 * t) * np.exp(-t / 0.003), 0.25)


def ching():
    n = int(1.2 * SR)
    t = np.arange(n) / SR
    parts = [(2093, 1), (2637, .6), (3136, .5), (4186, .3), (5274, .2)]
    x = sum(a * np.sin(2 * np.pi * f * t) * np.exp(-t / (0.5 / (i + 1) + 0.1)) for i, (f, a) in enumerate(parts))
    return norm(x * env_ad(n, 0.002, 0.6), 0.45)


def bell():
    n = int(2.5 * SR)
    t = np.arange(n) / SR
    parts = [(523, 1), (1046, .5), (1318, .35), (1567, .25), (2093, .2)]
    x = sum(a * np.sin(2 * np.pi * f * t) * np.exp(-t / 1.2) for f, a in parts)
    rings = (np.sin(2 * np.pi * 14 * t) > 0).astype(float) * 0.3 + 0.7
    return norm(x * rings * env_ad(n, 0.003, 1.4), 0.5)


def heartbeat():
    n = int(1.0 * SR)
    t = np.arange(n) / SR
    beat = lambda t0: np.sin(2 * np.pi * 50 * (t - t0)) * np.exp(-np.maximum(t - t0, 0) / 0.06) * (t >= t0)
    return norm(beat(0) + 0.7 * beat(0.25), 0.7)


# ---------- ambience loops (8–12 s, seamless by crossfading the ends) ----------
def loopify(x, xf=0.5):
    k = int(xf * SR)
    head, tail = x[:k], x[-k:]
    w = np.linspace(0, 1, k)
    x = x.copy()
    x[:k] = head * w + tail * (1 - w)
    return x[:-k]


def amb_room(dur=10):
    n = int(dur * SR)
    return norm(loopify(lp_fast(noise(n + SR // 2), 400)), 0.12)


def amb_ticker(dur=10):
    n = int(dur * SR) + SR // 2
    x = np.zeros(n)
    t = 0
    while t < n - 3000:
        L = 900
        k = np.arange(L) / SR
        x[t:t + L] += bp_fast(noise(L), 2000, 8000) * np.exp(-k / 0.004) * rng.uniform(0.4, 1)
        t += int(rng.choice([0.045, 0.06, 0.09, 0.12, 0.35]) * SR)
    return norm(loopify(x + amb_room(dur + 0.5)[:n] * 0.5 if len(amb_room(dur + 0.5)) >= n else x), 0.3)


def amb_crowd(dur=12, loud=False):
    n = int(dur * SR) + SR // 2
    out = np.zeros(n)
    for k in range(10 if loud else 6):
        # each "voice" = formant-band noise with syllable-rate modulation
        lo = rng.uniform(250, 600); hi = lo * rng.uniform(2.5, 4)
        v = bp_fast(noise(n), lo, hi)
        mod = lp_fast(np.abs(noise(n)), rng.uniform(3, 6))
        mod = mod / (mod.max() + 1e-9)
        out += v * (0.3 + mod) * rng.uniform(0.5, 1)
    return norm(loopify(out), 0.5 if loud else 0.3)


def amb_waves(dur=12):
    n = int(dur * SR) + SR // 2
    t = np.arange(n) / SR
    swell = 0.5 + 0.5 * np.sin(2 * np.pi * t / 6.0) ** 2
    return norm(loopify(lp_fast(noise(n), 900) * swell + 0.3 * bp_fast(noise(n), 2000, 7000) * swell ** 3), 0.35)


def amb_wind(dur=12):
    n = int(dur * SR) + SR // 2
    t = np.arange(n) / SR
    g = 0.6 + 0.4 * np.sin(2 * np.pi * t / 5.3) * np.sin(2 * np.pi * t / 3.1)
    return norm(loopify(bp_fast(noise(n), 200, 1200) * g), 0.25)


def amb_street(dur=12):
    n = int(dur * SR) + SR // 2
    x = lp_fast(noise(n), 300) * 0.5
    t = 0
    while t < n - SR:  # hoof clops
        for d in (0, 0.18, 0.42, 0.6):
            p = t + int(d * SR)
            L = 1600
            k = np.arange(L) / SR
            x[p:p + L] += np.sin(2 * np.pi * 900 * k) * np.exp(-k / 0.01) * 0.6 + bp_fast(noise(L), 800, 3000) * np.exp(-k / 0.008) * 0.4
        t += int(rng.uniform(0.9, 1.4) * SR)
    return norm(loopify(x + amb_crowd(dur + 0.5)[:n] * 0.4), 0.3)


def amb_fire(dur=10):
    n = int(dur * SR) + SR // 2
    x = lp_fast(noise(n), 500) * 0.6
    for _ in range(int(dur * 25)):
        p = rng.integers(0, n - 800)
        L = rng.integers(100, 700)
        x[p:p + L] += noise(L) * np.exp(-np.arange(L) / (L / 4)) * rng.uniform(0.3, 1.5)
    return norm(loopify(x), 0.35)


def amb_train(dur=10):
    n = int(dur * SR) + SR // 2
    t = np.arange(n) / SR
    x = lp_fast(noise(n), 250) * 0.7
    for b in np.arange(0, dur, 0.55):
        for d in (0, 0.12):
            p = int((b + d) * SR)
            if p + 3000 < n:
                k = np.arange(3000) / SR
                x[p:p + 3000] += np.sin(2 * np.pi * 120 * k) * np.exp(-k / 0.02) * 0.8
    return norm(loopify(x), 0.35)


def amb_clock(dur=8):
    n = int(dur * SR) + SR // 2
    x = amb_room(dur + 0.5)[:n] * 0.6
    for b in np.arange(0, dur + 0.5, 1.0):
        p = int(b * SR)
        L = 1200
        if p + L < n:
            k = np.arange(L) / SR
            f = 3200 if int(b) % 2 else 2600
            x[p:p + L] += np.sin(2 * np.pi * f * k) * np.exp(-k / 0.004) * 0.4
    return norm(loopify(x), 0.2)


def amb_rain(dur=10):
    n = int(dur * SR) + SR // 2
    return norm(loopify(bp_fast(noise(n), 1500, 9000) * 0.6 + lp_fast(noise(n), 300) * 0.4), 0.3)


SOUNDS = {
    'pop': pop, 'hit': hit, 'stamp': stamp, 'whoosh': whoosh, 'paper': paper, 'click': click, 'tick': tick,
    'ching': ching, 'bell': bell, 'heartbeat': heartbeat,
    'amb_room': amb_room, 'amb_ticker': amb_ticker, 'amb_crowd': amb_crowd, 'amb_crowd_loud': lambda: amb_crowd(12, True),
    'amb_waves': amb_waves, 'amb_wind': amb_wind, 'amb_street': amb_street, 'amb_fire': amb_fire, 'amb_train': amb_train,
    'amb_clock': amb_clock, 'amb_rain': amb_rain,
}


def make_all(d):
    os.makedirs(d, exist_ok=True)
    for k, fn in SOUNDS.items():
        p = os.path.join(d, k + '.wav')
        if not os.path.exists(p):
            sf.write(p, fn(), SR)
    return d


if __name__ == '__main__':
    import sys
    make_all(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'build', 'v2', 'sfx'))
    print('ok')
