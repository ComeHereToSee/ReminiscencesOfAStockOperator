"""Build pipeline: story.js -> story.json -> TTS -> frames -> per-shot clips -> final MP4 + SRT.

Usage: python3 engine/build.py [--only SHOT_SUBSTR] [--no-render] [--episodes]
"""
import asyncio
import hashlib
import json
import os
import ssl
import subprocess
import sys
import wave
from concurrent.futures import ThreadPoolExecutor

import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.join(ROOT, 'build')
AUD = os.path.join(B, 'audio')
CLIPS = os.path.join(B, 'clips')
OUTD = os.path.join(ROOT, 'output')
FPS = 30
GAP = 0.35        # silence after each line
SHOT_TAIL = 0.45  # extra hold at the end of each shot
SR = 48000

VOICES = {
    'larry':     ('en-US-AndrewNeural', '+8%', '+0Hz'),
    'host':      ('en-US-AvaNeural', '+8%', '+0Hz'),
    'boy':       ('en-US-BrianNeural', '+6%', '+12Hz'),
    'partridge': ('en-US-RogerNeural', '-12%', '-14Hz'),
    'clerk':     ('en-US-EricNeural', '+4%', '+0Hz'),
    'broker':    ('en-US-SteffanNeural', '+0%', '-4Hz'),
    'harding':   ('en-US-ChristopherNeural', '+0%', '+0Hz'),
    'percy':     ('en-GB-ThomasNeural', '-4%', '-6Hz'),
    'banker':    ('en-US-ChristopherNeural', '-6%', '-10Hz'),
    'keene':     ('en-GB-RyanNeural', '-4%', '-8Hz'),
    'friend':    ('en-US-GuyNeural', '+4%', '+0Hz'),
    'wife':      ('en-US-EmmaNeural', '+0%', '+0Hz'),
    'mother':    ('en-US-MichelleNeural', '-4%', '+0Hz'),
    'agent':     ('en-US-RogerNeural', '+6%', '+0Hz'),
    'williamson':('en-US-SteffanNeural', '-6%', '-10Hz'),
    'wolff':     ('en-US-GuyNeural', '+8%', '-6Hz'),
}


def run(cmd, **kw):
    r = subprocess.run(cmd, capture_output=True, text=True, **kw)
    if r.returncode:
        sys.stderr.write(r.stderr[-3000:])
        raise SystemExit(f'command failed: {cmd[:6]}')
    return r.stdout


def probe_dur(p):
    return float(run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p]).strip())


# ---------------- TTS ----------------
async def tts_one(text, voice, rate, pitch, out_mp3):
    import edge_tts
    import edge_tts.communicate as comm
    comm._SSL_CTX = ssl.create_default_context(cafile=os.environ.get('CCR_CA', '/root/.ccr/ca-bundle.crt'))
    for attempt in range(5):
        try:
            c = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch)
            await c.save(out_mp3 + '.tmp')
            # guard against truncated responses: expect roughly >= 1.5 KB per word
            if os.path.getsize(out_mp3 + '.tmp') < 1500 * max(1, len(text.split()) // 2):
                raise RuntimeError(f'truncated TTS output for: {text[:40]}')
            os.replace(out_mp3 + '.tmp', out_mp3)
            return
        except Exception as e:  # network hiccups
            await asyncio.sleep(2 ** attempt)
            last = e
    raise last


async def tts_all(lines):
    sem = asyncio.Semaphore(6)

    async def job(ln):
        voice, rate, pitch = VOICES[ln['v']]
        key = hashlib.md5(f"{voice}|{rate}|{pitch}|{ln['en']}".encode()).hexdigest()[:16]
        mp3 = os.path.join(AUD, key + '.mp3')
        wav = os.path.join(AUD, key + '.wav')
        ln['wav'] = wav
        if os.path.exists(wav):
            return
        async with sem:
            if not os.path.exists(mp3) or os.path.getsize(mp3) < 1500 * max(1, len(ln['en'].split()) // 2):
                await tts_one(ln['en'], voice, rate, pitch, mp3)
        # trim edge silence, normalise, 48k mono
        run(['ffmpeg', '-y', '-v', 'error', '-i', mp3, '-af',
             'silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse,loudnorm=I=-16:TP=-1.5:LRA=11',
             '-ar', str(SR), '-ac', '1', wav])
        if probe_dur(wav) < 0.3:
            raise SystemExit(f'empty audio after processing: {ln["en"][:60]}')
    await asyncio.gather(*(job(l) for l in lines))


# ---------------- music ----------------
def synth_music(path, cycles=4):
    """Original, procedurally generated soft piano-like bed (A minor, slow), written as a seamless loop.
    Long outputs loop it with ffmpeg instead of synthesising hours of audio in memory."""
    sr = SR
    bpm = 66
    beat = 60 / bpm
    A4 = 440.0
    # chord roots relative to A4 (semitones), minor/major triads
    prog = [(-12, 'm'), (-16, 'M'), (-21, 'M'), (-14, 'M'), (-12, 'm'), (-19, 'm'), (-16, 'M'), (-17, 'M')]
    seconds = beat * 4 * len(prog) * cycles
    n = int(round(seconds * sr))
    out = np.zeros(n + sr * 6)

    def f(semi):
        return A4 * 2 ** (semi / 12)

    def note(t0, freq, dur, amp):
        i0 = int(t0 * sr)
        L = int(dur * sr)
        t = np.arange(L) / sr
        env = np.exp(-t * 2.2) * (1 - np.exp(-t * 200))
        sig = (np.sin(2 * np.pi * freq * t) + 0.35 * np.sin(2 * np.pi * 2 * freq * t) * np.exp(-t * 3)
               + 0.12 * np.sin(2 * np.pi * 3 * freq * t) * np.exp(-t * 5))
        seg = out[i0:i0 + L]
        seg += amp * env[:len(seg)] * sig[:len(seg)]

    for k in range(len(prog) * cycles):
        t = k * beat * 4
        root, q = prog[k % len(prog)]
        third = 3 if q == 'm' else 4
        tones = [root, root + third, root + 7, root + 12]
        note(t, f(root - 12), beat * 4.5, 0.20)
        for j, iv in enumerate([0, 1, 2, 3, 2, 1, 2, 3]):
            note(t + j * beat / 2, f(tones[iv]), beat * 2, 0.10 if j % 2 else 0.13)
        if k % 2 == 1:
            note(t + beat * 2.5, f(tones[3] + 7), beat * 2, 0.06)
    # simple reverb: decaying noise convolution (FFT)
    ir_len = int(sr * 1.6)
    rng = np.random.default_rng(7)
    ir = rng.standard_normal(ir_len) * np.exp(-np.arange(ir_len) / sr * 3.5) * 0.02
    ir[0] = 1.0
    nfft = 1 << (len(out) + ir_len - 1).bit_length()
    wet = np.fft.irfft(np.fft.rfft(out, nfft) * np.fft.rfft(ir, nfft), nfft)[:len(out)]
    # wrap the tail onto the head so the loop point is seamless
    sig = wet[:n].copy()
    tail = wet[n:]
    sig[:len(tail)] += tail
    sig = sig / (np.abs(sig).max() + 1e-9) * 0.5
    pcm = (sig * 32767).astype(np.int16)
    with wave.open(path, 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(pcm.tobytes())


# ---------------- assembly ----------------
def fmt_ts(t):
    ms = int(round(t * 1000))
    h, ms = divmod(ms, 3600000)
    m, ms = divmod(ms, 60000)
    s, ms = divmod(ms, 1000)
    return f'{h:02d}:{m:02d}:{s:02d},{ms:03d}'


def build_shot(shot):
    sid = shot['id']
    frames = os.path.join(B, 'frames')
    durs = []
    for ln in shot['lines']:
        d = probe_dur(ln['wav']) if not ln.get('silent') else ln.get('hold', 2.0)
        ln['adur'] = d
        durs.append(d + GAP)
    durs[-1] += SHOT_TAIL + shot.get('tail', 0)
    # quantise to frame grid so audio and video stay locked
    fr = [max(1, round(d * FPS)) for d in durs]
    total = sum(fr) / FPS
    key = hashlib.md5(json.dumps([shot, fr], sort_keys=True, default=str).encode()).hexdigest()[:12]
    for li in range(len(shot['lines'])):
        key += open(os.path.join(frames, f'{sid}__{li}.png.hash')).read()
    key = hashlib.md5(key.encode()).hexdigest()[:12]
    out = os.path.join(CLIPS, f'{sid}.mp4')
    stamp = out + '.key'
    if os.path.exists(out) and os.path.exists(stamp) and open(stamp).read() == key:
        return sid, total, fr
    # audio track
    parts = []
    for ln, n in zip(shot['lines'], fr):
        parts.append((ln, n / FPS))
    filt, inputs = [], []
    for i, (ln, slot) in enumerate(parts):
        if ln.get('silent'):
            filt.append(f'anullsrc=r={SR}:cl=mono,atrim=0:{slot:.4f}[a{i}]')
        else:
            inputs += ['-i', ln['wav']]
            idx = len(inputs) // 2 - 1
            filt.append(f'[{idx}:a]aresample={SR},apad,atrim=0:{slot:.4f}[a{i}]')
    filt.append(''.join(f'[a{i}]' for i in range(len(parts))) + f'concat=n={len(parts)}:v=0:a=1[aout]')
    wav = os.path.join(CLIPS, f'{sid}.wav')
    run(['ffmpeg', '-y', '-v', 'error', *inputs, '-filter_complex', ';'.join(filt), '-map', '[aout]', '-ac', '1', '-ar', str(SR), wav])
    # video: image sequence with per-line holds
    lst = os.path.join(CLIPS, f'{sid}.txt')
    with open(lst, 'w') as fh:
        for li, n in enumerate(fr):
            fh.write(f"file '{os.path.join(frames, f'{sid}__{li}.png')}'\nduration {n / FPS:.6f}\n")
        fh.write(f"file '{os.path.join(frames, f'{sid}__{len(fr) - 1}.png')}'\n")
    move = shot.get('move', 'zoom' if shot['kind'] in ('comic', 'title') else 'none')
    if move == 'zoom':
        z = 0.045 if shot['kind'] == 'comic' else 0.03
        vf = (f"fps={FPS},split[a][b];[a]crop=1920:850:0:0,scale=w='trunc(1920*(1+{z}*t/{total:.3f})/2)*2':h=-2:eval=frame,"
              f"crop=1920:850:(iw-1920)/2:(ih-850)/2[top];[b][top]overlay=0:0,format=yuv420p")
    else:
        vf = f'fps={FPS},format=yuv420p'
    run(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-i', wav,
         '-filter_complex', f'[0:v]{vf}[v]', '-map', '[v]', '-map', '1:a', '-t', f'{total:.4f}',
         '-c:v', 'libx264', '-preset', 'medium', '-crf', '20', '-tune', 'animation', '-r', str(FPS),
         '-c:a', 'aac', '-b:a', '160k', '-ar', str(SR), out])
    open(stamp, 'w').write(key)
    return sid, total, fr


def main():
    args = sys.argv[1:]
    only = args[args.index('--only') + 1] if '--only' in args else None
    for d in (AUD, CLIPS, OUTD):
        os.makedirs(d, exist_ok=True)
    run(['node', os.path.join(ROOT, 'engine', 'story.js')])
    story = json.load(open(os.path.join(B, 'story.json')))
    shots = [s for s in story['shots'] if not only or only in s['id']]
    lines = [l for s in shots for l in s['lines'] if not l.get('silent')]
    print(f'{len(shots)} shots, {len(lines)} voiced lines, {sum(len(l["en"].split()) for l in lines)} words')
    asyncio.run(tts_all(lines))
    print('tts done')
    if '--no-render' not in args:
        env = dict(os.environ, NODE_PATH='/opt/node22/lib/node_modules')
        r = subprocess.run(['node', os.path.join(ROOT, 'engine', 'render.js')] + ([only] if only else []), env=env)
        if r.returncode:
            raise SystemExit('render failed')
    with ThreadPoolExecutor(4) as ex:
        results = list(ex.map(build_shot, shots))
    timing = {sid: (tot, fr) for sid, tot, fr in results}
    if only:
        print('partial build done')
        return
    music = os.path.join(B, 'music_loop.wav')
    if not os.path.exists(music):
        synth_music(music)
    name = 'Reminiscences_of_a_Stock_Operator_Motion_Comic'
    episodes = sorted({s['ep'] for s in shots})
    ep_names = {0: 'EP00_Prologue', 13: 'EP13_Finale'}
    parts = [('ALL', name, shots)] + [(e, f"{name}_{ep_names.get(e, f'EP{e:02d}')}", [s for s in shots if s['ep'] == e]) for e in episodes]
    for tag, base, group in parts:
        assemble(group, timing, base, music, with_chapters=(tag == 'ALL'))
    print(f'final: {len(parts)} files in {OUTD}')


def assemble(group, timing, base, music, with_chapters=False):
    """Concatenate shot clips into one MP4, add the music bed, and write SRTs (+ chapter list)."""
    t = 0.0
    srt_bi, srt_en, srt_zh, chapters = [], [], [], []
    k = 1
    concat = os.path.join(CLIPS, base + '.txt')
    with open(concat, 'w') as fh:
        for s in group:
            tot, fr = timing[s['id']]
            fh.write(f"file '{os.path.join(CLIPS, s['id'] + '.mp4')}'\n")
            if s.get('chapter'):
                chapters.append((t, s['chapter']))
            lt = t
            for ln, n in zip(s['lines'], fr):
                if not ln.get('silent'):
                    a, b = fmt_ts(lt), fmt_ts(lt + ln['adur'] + 0.1)
                    srt_bi.append(f"{k}\n{a} --> {b}\n{ln['en']}\n{ln['zh']}\n")
                    srt_en.append(f"{k}\n{a} --> {b}\n{ln['en']}\n")
                    srt_zh.append(f"{k}\n{a} --> {b}\n{ln['zh']}\n")
                    k += 1
                lt += n / FPS
            t += tot
    for suf, data in (('bilingual', srt_bi), ('en', srt_en), ('zh', srt_zh)):
        open(os.path.join(OUTD, f'{base}.{suf}.srt'), 'w', encoding='utf-8').write('\n'.join(data))
    if with_chapters:
        with open(os.path.join(OUTD, 'chapters.txt'), 'w', encoding='utf-8') as fh:
            for ct, title in chapters:
                m, s_ = divmod(int(ct), 60)
                h, m = divmod(m, 60)
                fh.write(f'{h:d}:{m:02d}:{s_:02d} {title}\n')
    joined = os.path.join(B, base + '.joined.mp4')
    run(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', concat, '-c', 'copy', joined])
    dur = probe_dur(joined)
    final = os.path.join(OUTD, f'{base}.mp4')
    run(['ffmpeg', '-y', '-v', 'error', '-i', joined, '-stream_loop', '-1', '-i', music, '-filter_complex',
         f'[1:a]volume=0.10,afade=t=in:d=3,afade=t=out:st={max(0, dur - 4):.2f}:d=4[m];'
         '[0:a][m]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.95[a]',
         '-map', '0:v', '-map', '[a]', '-t', f'{dur:.3f}', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k',
         '-movflags', '+faststart', final])
    os.remove(joined)
    print(f'  {os.path.basename(final)}  {dur / 60:.1f} min')


if __name__ == '__main__':
    main()
