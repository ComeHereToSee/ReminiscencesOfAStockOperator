"""engine2 build orchestrator (run with /opt/ttsenv/bin/python).

  python engine2/build.py <version> [--only SUBSTR] [--workers N] [--no-render] [--no-assemble]

version = 'short' (one 30-minute film) or 'full' (prologue + episodes + finale, plus a combined file).
Pipeline: story (node) -> TTS + word timings -> cue resolution, camera, lip-sync, subtitles -> plan.json
          -> render.mjs (silent clips) -> per-shot sound mix -> per-output assembly (music, ASS subs, film look).
"""
import json
import math
import os
import re
import shutil
import subprocess
import sys

import numpy as np
import soundfile as sf

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts  # noqa: E402
import sfx  # noqa: E402

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FPS = 24
SR = 48000
GAP = 0.38       # silence between lines
TAIL = 0.75      # hold after the last line of a shot


def run(cmd, **kw):
    r = subprocess.run(cmd, capture_output=True, text=True, **kw)
    if r.returncode:
        sys.stderr.write(r.stdout[-2000:] + r.stderr[-4000:])
        raise SystemExit(f'failed: {cmd[:5]}')
    return r.stdout


# ---------------- cues ----------------
CUE = re.compile(r'^(start|end|L(\d+)(e|@([^+%]+?)|%(\d+(?:\.\d+)?))?)([+-]\d+(?:\.\d+)?)?$')


def resolve_cue(v, shot):
    if isinstance(v, (int, float)):
        return float(v)
    if not isinstance(v, str):
        return v
    s = v.strip()
    try:
        return float(s)
    except ValueError:
        pass
    m = CUE.match(s)
    if not m:
        raise SystemExit(f'bad cue "{v}" in shot {shot["id"]}')
    base, li, kind, word, pct, off = m.group(1), m.group(2), m.group(3), m.group(4), m.group(5), m.group(6)
    off = float(off) if off else 0.0
    if base == 'start':
        return off
    if base == 'end':
        return shot['dur'] + off
    li = int(li)
    if li >= len(shot['lines']):
        raise SystemExit(f'cue "{v}" refers to missing line in shot {shot["id"]}')
    ln = shot['lines'][li]
    t0, d = ln['t0'], ln['dur']
    if not kind:
        return t0 + off
    if kind == 'e':
        return t0 + d + off
    if pct is not None:
        return t0 + d * float(pct) / 100 + off
    # word cue: first spoken token that starts with the cue word
    w = re.sub(r'[^a-z0-9]', '', word.lower())
    for tok, a, b in ln['words']:
        if re.sub(r'[^a-z0-9]', '', tok.lower()).startswith(w):
            return t0 + a + off
    # fall back: position of the word in the display text
    disp = ln['en'].lower()
    k = disp.find(word.lower())
    if k < 0:
        print(f'  ! cue word "{word}" not found in line {li} of {shot["id"]}; using line start')
        return t0 + off
    return t0 + d * k / max(len(disp), 1) + off


CUE_KEYS = {'at', 'until', 't', 'hl', 'pulse', 'stamp'}


def resolve_all(obj, shot, key=None):
    if isinstance(obj, dict):
        for k, v in list(obj.items()):
            if k == 't' and isinstance(v, str) and not CUE.match(v.strip()) and not re.match(r'^-?\d+(\.\d+)?$', v.strip()):
                continue  # 't' is also display text (sfx lettering, equation terms)
            if k in CUE_KEYS and isinstance(v, (str, int, float)) and not isinstance(v, bool):
                obj[k] = resolve_cue(v, shot)
            elif k in ('draw', 'marker') and isinstance(v, list):
                obj[k] = [[resolve_cue(p[0], shot)] + list(p[1:]) for p in v]
            elif k in ('rowAt',) and isinstance(v, list):
                obj[k] = [resolve_cue(x, shot) if x is not None else None for x in v]
            elif k == 'hl' and isinstance(v, list):
                obj[k] = [resolve_cue(x, shot) if x is not None else None for x in v]
            elif k == 'ticks' and isinstance(v, list) and v and isinstance(v[0], list):
                obj[k] = [p[:3] + [resolve_cue(p[3], shot)] if len(p) > 3 else p for p in v]
            elif k in ('lines', 'en', 'zh', 'text', 'say', 'src'):
                continue
            else:
                resolve_all(v, shot, k)
    elif isinstance(obj, list):
        for x in obj:
            resolve_all(x, shot, key)


# ---------------- subtitles ----------------
def split_sent(text, cjk=False):
    if cjk:
        parts = re.findall(r'[^。！？；]+[。！？；]?[」”"]?', text)
    else:
        parts = re.findall(r'.+?(?:[.!?](?=\s|$)[”"]?|$)', text)
    return [p.strip() for p in parts if p.strip()]


def line_subs(ln):
    en, zh = split_sent(ln['en']), split_sent(ln['zh'], True)
    if len(en) != len(zh) or len(en) == 1:
        return [(ln['t0'], ln['t0'] + ln['dur'], ln['en'], ln['zh'])]
    lens = [len(tts.speakable(s)) for s in en]
    tot = sum(lens)
    out, acc = [], 0
    for s, z, L in zip(en, zh, lens):
        a = ln['t0'] + ln['dur'] * acc / tot
        acc += L
        b = ln['t0'] + ln['dur'] * acc / tot
        out.append((a, b, s, z))
    return out


# ---------------- shot timing / camera / lip ----------------
TRANS_DEFAULT = {'type': 'fade', 'dur': 0.4}


def prepare_shot(sh):
    tr = sh.get('trans', TRANS_DEFAULT)
    if isinstance(tr, str):
        tr = {'type': tr, 'dur': 0.35 if tr in ('cut',) else (0.5 if tr in ('fade', 'dip', 'flash') else 0.65)}
    if tr['type'] == 'cut':
        tr = None
    sh['trans'] = tr
    lead = sh.get('lead', (tr['dur'] + 0.15) if tr else 0.45)
    t = lead
    for ln in sh['lines']:
        t += ln.get('pause', 0)
        ln['t0'] = t
        t += ln['dur'] + GAP
    dur = t - GAP + TAIL + sh.get('hold', 0)
    sh['dur'] = math.ceil(dur * FPS) / FPS
    # cues everywhere
    for k in ('cast', 'items', 'cam', 'shakes', 'setOpts', 'sounds'):
        if k in sh:
            resolve_all(sh[k], sh)
    for ln in sh['lines']:
        if 'cam' in ln:
            resolve_all(ln['cam'], sh)
    # camera keyframes
    cast = {c.get('key', c['id']): c for c in sh.get('cast', [])}

    def frame_on(key, z):
        c = cast[key]
        s = c.get('s', 1)
        return {'x': c['x'], 'y': c['y'] - 215 * s, 'z': z}

    keys = []
    cam = sh.get('cam')
    if cam == 'static':
        keys = [{'t': 0, 'x': 960, 'y': 540, 'z': 1}]
    elif isinstance(cam, list):
        for k in cam:
            kk = dict(k)
            kk['t'] = resolve_cue(kk.get('t', 0), sh) if isinstance(kk.get('t', 0), str) else kk.get('t', 0)
            if 'on' in kk:
                kk.update({a: b for a, b in frame_on(kk.pop('on'), kk.get('z', 1.5)).items() if a not in kk or a == 'z'})
            keys.append(kk)
    else:
        z0 = sh.get('z0', 1.0)
        z1 = sh.get('z1', 1.08)
        dx = sh.get('drift', 40)
        keys = [{'t': 0, 'x': 960 - dx, 'y': 540, 'z': z0}, {'t': sh['dur'], 'x': 960 + dx, 'y': 530, 'z': z1, 'ease': 'sine'}]
    # line-level camera moves
    for ln in sh['lines']:
        if 'cam' in ln:
            k = dict(ln['cam'])
            if 'on' in k:
                z = k.get('z', 1.5)
                k.update(frame_on(k.pop('on'), z))
            k['t'] = ln['t0'] + k.pop('delay', 0) + k.get('dur', 1.1)
            k.setdefault('dur', 1.1)
            k.setdefault('ease', 'inOut')
            keys.append(k)
    keys.sort(key=lambda k: k['t'])
    # carry forward missing props
    last = {'x': 960, 'y': 540, 'z': 1}
    for k in keys:
        for p in ('x', 'y', 'z'):
            if p not in k:
                k[p] = last[p]
        last = {p: k[p] for p in ('x', 'y', 'z')}
    if keys and keys[0]['t'] > 0:
        keys.insert(0, dict(keys[0], t=0))
    sh['camKeys'] = keys
    # shakes from impact items
    shakes = list(sh.get('shakes', []))
    for w in sh.get('items', []):
        if w.get('shake') or (w.get('type') in ('stamp',) and w.get('shake') is not False):
            shakes.append({'t': w.get('at', 0) + (0.25 if w.get('type') == 'stamp' else 0.05), 'dur': 0.45, 'amp': w.get('shakeAmp', 16)})
    sh['shakes'] = shakes
    # lip sync
    n = int(round(sh['dur'] * FPS))
    env = [0.0] * n
    spk = [''] * n
    nar_on = 'nar' in cast
    for ln in sh['lines']:
        who = ln.get('speak') or ('nar' if nar_on and ln['v'] in ('nar',) else None)
        if not who:
            continue
        f0 = int(round(ln['t0'] * FPS))
        for i, e in enumerate(ln['env']):
            if 0 <= f0 + i < n:
                env[f0 + i] = e
                spk[f0 + i] = who
    sh['lip'] = {'env': env, 'spk': spk}
    sh['fps'] = FPS
    # caption & overlay defaults
    lesson_like = sh.get('set') in ('paper', 'chalk', 'dark', 'burst', 'photo')
    has_bubble = any(w.get('type') == 'bubble' for w in sh.get('items', []))
    for w in sh.get('items', []):
        if w.get('type') in ('caption',) and 'screen' not in w:
            w['screen'] = True
            # establishing captions step aside once dialogue starts, so they never sit on top of speech bubbles
            if has_bubble and 'until' not in w and len(sh['lines']) >= 2:
                w['until'] = sh['lines'][1]['t0'] + 0.6
        # explanatory graphics in story scenes stay fixed on screen while the camera moves, on a legible panel
        if not lesson_like and w.get('type') in ('counter', 'note', 'equation', 'rule', 'table', 'chart', 'bars', 'flow') and 'screen' not in w:
            w['screen'] = True
            if w['type'] == 'counter' and 'panel' not in w:
                w['panel'] = True
    # subtitles
    subs = []
    for ln in sh['lines']:
        if ln.get('nosub'):
            continue
        subs.extend(line_subs(ln))
    sh['subs'] = subs
    return sh


# ---------------- sound ----------------
AMB = {
    'office': [('amb_ticker', .22), ('amb_room', .5)], 'bucketshop': [('amb_crowd', .16), ('amb_ticker', .18)],
    'street': [('amb_street', .22)], 'floor': [('amb_crowd_loud', .26)], 'study': [('amb_clock', .3)],
    'beach': [('amb_waves', .25)], 'boardwalk': [('amb_waves', .2), ('amb_crowd', .06)], 'yacht': [('amb_waves', .28)],
    'veranda': [('amb_wind', .14)], 'train': [('amb_train', .3)], 'warehouse': [('amb_room', .4), ('amb_wind', .06)],
    'wheat': [('amb_wind', .22)], 'ruins': [('amb_fire', .3)], 'night': [('amb_rain', .16)], 'court': [('amb_room', .4)],
    'home': [('amb_clock', .2)], 'capitol': [('amb_wind', .1)], 'paper': [('amb_room', .25)], 'chalk': [('amb_room', .25)],
}
SFX_CACHE = {}


def snd(name):
    if name not in SFX_CACHE:
        a, sr = sf.read(os.path.join(ROOT, 'build', 'v2', 'sfx', name + '.wav'), dtype='float32')
        SFX_CACHE[name] = a
    return SFX_CACHE[name]


def place(buf, a, t, vol):
    i = int(t * SR)
    if i >= len(buf) or i + len(a) <= 0:
        return
    j = min(len(buf), i + len(a))
    if i < 0:
        a, i = a[-i:], 0
    buf[i:j] += a[:j - i] * vol


def shot_sfx_events(sh):
    ev = []
    tr = sh.get('trans')
    if tr and tr['type'] in ('whip', 'whipL', 'wipe', 'wipeL', 'ink', 'page', 'push', 'zoom', 'iris', 'drop'):
        ev.append((0.0, 'whoosh', 0.45))
    if tr and tr['type'] == 'flash':
        ev.append((tr['dur'] * 0.4, 'hit', 0.5))
    for w in sh.get('items', []):
        at = w.get('at', 0)
        ty = w.get('type')
        if w.get('sound') is False:
            continue
        if w.get('sound'):
            ev.append((at, w['sound'], w.get('vol', 0.6)))
            continue
        if ty == 'bubble':
            ev.append((at, 'pop', 0.35))
        elif ty == 'sfx':
            ev.append((at, 'hit', 0.55))
        elif ty == 'stamp':
            ev.append((at + 0.2, 'stamp', 0.75))
        elif ty == 'newspaper':
            ev.append((at, 'whoosh', 0.4)); ev.append((at + 0.75, 'paper', 0.5))
        elif ty in ('ticket', 'caption'):
            ev.append((at, 'paper', 0.25 if ty == 'caption' else 0.45))
        elif ty in ('note', 'rule'):
            ev.append((at, 'pop', 0.18))
        elif ty == 'money':
            ev.append((at + 0.3, 'ching', 0.35))
        elif ty == 'equation':
            for tm in w.get('terms', []):
                ev.append((tm.get('at', at), 'ching' if tm.get('hl') else 'tick', 0.3 if tm.get('hl') else 0.35))
        elif ty == 'chart':
            for m in w.get('marks', []):
                ev.append((m.get('at', at), 'pop', 0.18))
        elif ty == 'table':
            for x in (w.get('rowAt') or []):
                if x is not None:
                    ev.append((x, 'tick', 0.3))
        elif ty == 'flow':
            for nd in w.get('nodes', []):
                if 'at' in nd:
                    ev.append((nd['at'], 'pop', 0.16))
    for e in (sh.get('setOpts') or {}).get('boardSeq', []):
        ev.append((e['t'], 'click', 0.45))
    for s in sh.get('shakes', []):
        if not any(abs(s['t'] - e[0]) < 0.3 for e in ev):
            ev.append((s['t'], 'hit', 0.4))
    for s in sh.get('sounds', []):
        ev.append((s['t'], s['s'], s.get('vol', 0.5)))
    return ev


def mix_shot(sh, path):
    n = int(round(sh['dur'] * FPS)) * SR // FPS
    vox = np.zeros(n, dtype=np.float32)
    fx = np.zeros(n, dtype=np.float32)
    for ln in sh['lines']:
        a, sr = sf.read(ln['wav'], dtype='float32')
        a = np.interp(np.arange(int(len(a) * SR / sr)) * sr / SR, np.arange(len(a)), a).astype(np.float32)
        place(vox, a, ln['t0'], ln.get('vol', 1.0))
    for t, name, vol in shot_sfx_events(sh):
        place(fx, snd(name), t, vol)
    amb = sh.get('amb', AMB.get(sh.get('set'), []))
    for name, vol in amb:
        a = snd(name)
        reps = int(np.ceil(n / len(a))) + 1
        loop = np.tile(a, reps)[:n]
        k = min(int(0.25 * SR), n // 4)
        ramp = np.ones(n, dtype=np.float32)
        ramp[:k] = np.linspace(0, 1, k); ramp[-k:] = np.linspace(1, 0, k)
        fx += loop * ramp * vol
    sf.write(path, np.stack([vox, fx], axis=1), SR, subtype='FLOAT')


# ---------------- music ----------------
def music_track(moods, total, out):
    """moods: [(t0, t1, mood)] ; builds a continuous bed with crossfades from assets/pd/music/moods.json."""
    cfg_p = os.path.join(ROOT, 'assets', 'pd', 'music', 'moods.json')
    cfg = json.load(open(cfg_p)) if os.path.exists(cfg_p) else {}
    n = int(total * SR)
    buf = np.zeros(n, dtype=np.float32)
    cache = {}

    def load(f):
        if f not in cache:
            p = os.path.join(ROOT, 'assets', 'pd', 'music', f)
            wav = p + '.48k.wav'
            if not os.path.exists(wav):
                run(['ffmpeg', '-y', '-v', 'error', '-i', p, '-ac', '1', '-ar', str(SR), '-af', 'loudnorm=I=-20', wav])
            cache[f] = sf.read(wav, dtype='float32')[0]
        return cache[f]
    use = {}
    for t0, t1, mood in moods:
        files = cfg.get(mood, {}).get('files', []) if mood != 'none' else []
        if not files:
            continue
        k = use.get(mood, 0)
        use[mood] = k + 1
        f = files[k % len(files)]
        a = load(f)
        gain = cfg.get(mood, {}).get('gain', 1.0)
        i0, i1 = int(t0 * SR), min(n, int(t1 * SR))
        L = i1 - i0
        if L <= 0:
            continue
        start = int(cfg.get(mood, {}).get('offset', 0) * SR) % max(1, len(a) - 1)
        seg = np.tile(a, int(np.ceil((L + start) / len(a))) + 1)[start:start + L]
        fade = min(int(2.0 * SR), L // 3)
        w = np.ones(L, dtype=np.float32)
        w[:fade] = np.linspace(0, 1, fade); w[-fade:] = np.linspace(1, 0, fade)
        buf[i0:i1] += seg * w * gain
    sf.write(out, buf, SR)


# ---------------- ASS subtitles ----------------
def ass_time(t):
    t = max(0, t)
    h = int(t // 3600); m = int(t % 3600 // 60); s = t % 60
    return f'{h}:{m:02d}:{s:05.2f}'


def write_ass(events, path):
    head = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Sub,Oswald,66,&H00FFFFFF,&H00FFFFFF,&H00101010,&H96000000,0,0,0,0,100,100,0,0,1,3.6,1.8,2,140,140,40,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    lines = []
    for a, b, en, zh in events:
        en = en.replace('\n', ' ').replace('{', '(').replace('}', ')')
        zh = zh.replace('\n', ' ').replace('{', '(').replace('}', ')')
        lines.append(f'Dialogue: 0,{ass_time(a)},{ass_time(b)},Sub,,0,0,0,,{en}\\N{{\\fnNoto Sans SC\\fs58\\b1\\c&H6BD8FF&}}{zh}')
    open(path, 'w', encoding='utf-8').write(head + '\n'.join(lines) + '\n')


def srt_time(t):
    ms = int(round(max(0, t) * 1000))
    h, ms = divmod(ms, 3600000); m, ms = divmod(ms, 60000); s, ms = divmod(ms, 1000)
    return f'{h:02d}:{m:02d}:{s:02d},{ms:03d}'


# ---------------- assembly ----------------
def assemble(name, shots, vdir, adir, odir, chapters=False):
    total = sum(s['dur'] for s in shots)
    lst = os.path.join(vdir, name + '.txt')
    open(lst, 'w').write(''.join(f"file '{os.path.join(vdir, s['id'] + '.mp4')}'\n" for s in shots))
    vjoin = os.path.join(adir, name + '.video.mp4')
    run(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', vjoin])
    # audio: concatenate shot mixes
    parts = [sf.read(os.path.join(adir, s['id'] + '.wav'), dtype='float32')[0] for s in shots]
    stem = np.concatenate(parts)
    vox, fx = stem[:, 0], stem[:, 1]
    sf.write(os.path.join(adir, name + '.vox.wav'), vox, SR)
    sf.write(os.path.join(adir, name + '.fx.wav'), fx, SR)
    # music moods
    moods, t = [], 0.0
    for s in shots:
        m = s.get('music', 'calm')
        if moods and moods[-1][2] == m:
            moods[-1][1] = t + s['dur']
        else:
            moods.append([t, t + s['dur'], m])
        t += s['dur']
    music_track(moods, total, os.path.join(adir, name + '.music.wav'))
    # subtitles + chapters
    ev, t, ch = [], 0.0, []
    srt = []
    for s in shots:
        if s.get('chapter'):
            ch.append((t, s['chapter']))
        for a, b, en, zh in s['subs']:
            ev.append((t + a, t + b + 0.12, en, zh))
        t += s['dur']
    ass = os.path.join(adir, name + '.ass')
    write_ass(ev, ass)
    for i, (a, b, en, zh) in enumerate(ev, 1):
        srt.append(f'{i}\n{srt_time(a)} --> {srt_time(b)}\n{en}\n{zh}\n')
    open(os.path.join(odir, name + '.bilingual.srt'), 'w', encoding='utf-8').write('\n'.join(srt))
    open(os.path.join(odir, name + '.en.srt'), 'w', encoding='utf-8').write('\n'.join(f'{i}\n{srt_time(a)} --> {srt_time(b)}\n{en}\n' for i, (a, b, en, zh) in enumerate(ev, 1)))
    open(os.path.join(odir, name + '.zh.srt'), 'w', encoding='utf-8').write('\n'.join(f'{i}\n{srt_time(a)} --> {srt_time(b)}\n{zh}\n' for i, (a, b, en, zh) in enumerate(ev, 1)))
    if chapters:
        with open(os.path.join(odir, name + '.chapters.txt'), 'w', encoding='utf-8') as f:
            for a, title in ch:
                f.write(f'{int(a // 3600)}:{int(a % 3600 // 60):02d}:{int(a % 60):02d} {title}\n')
    fontsdir = os.path.join(ROOT, 'assets', 'fonts')
    vf = (f"noise=alls=3:allf=t,vignette=angle=PI/5.2,colorbalance=rs=.035:gs=.01:bs=-.045,"
          f"eq=brightness='0.006*sin(t*29)*sin(t*7.3)':eval=frame,"
          f"subtitles='{ass}':fontsdir='{fontsdir}'")
    af = ('[1:a]volume=1.0,asplit=2[vox1][vox2];[2:a]volume=0.85[fxa];[3:a]volume=0.30[mus0];'
          '[mus0][vox1]sidechaincompress=threshold=0.02:ratio=5:attack=30:release=600[mus];'
          '[vox2][fxa][mus]amix=inputs=3:normalize=0,alimiter=limit=0.95[aout]')
    out = os.path.join(odir, name + '.mp4')
    run(['ffmpeg', '-y', '-v', 'error', '-i', vjoin, '-i', os.path.join(adir, name + '.vox.wav'), '-i', os.path.join(adir, name + '.fx.wav'),
         '-i', os.path.join(adir, name + '.music.wav'), '-filter_complex', af, '-vf', vf, '-map', '0:v', '-map', '[aout]',
         '-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-tune', 'animation', '-pix_fmt', 'yuv420p',
         '-c:a', 'aac', '-b:a', '192k', '-movflags', '+faststart', out])
    print(f'  -> {out}  ({total / 60:.1f} min)')


def contact_sheets(sd, out, per=12):
    """Tile review stills (960x540 each) into numbered 3x4 sheets."""
    from PIL import Image, ImageDraw
    os.makedirs(out, exist_ok=True)
    for f in os.listdir(out):
        os.remove(os.path.join(out, f))
    files = sorted(f for f in os.listdir(sd) if f.endswith('.jpg'))
    for k in range(0, len(files), per):
        sheet = Image.new('RGB', (3 * 960, 4 * 540), 'black')
        for i, f in enumerate(files[k:k + per]):
            im = Image.open(os.path.join(sd, f))
            x, y = (i % 3) * 960, (i // 3) * 540
            sheet.paste(im, (x, y))
            ImageDraw.Draw(sheet).text((x + 8, y + 6), f[:-4], fill='yellow')
        sheet.save(os.path.join(out, f'sheet_{k // per:03d}.jpg'), quality=82)
    print(f'{len(files)} stills -> {out}')


def main():
    args = sys.argv[1:]
    version = args[0]
    only = args[args.index('--only') + 1] if '--only' in args else None
    workers = args[args.index('--workers') + 1] if '--workers' in args else '4'
    B = os.path.join(ROOT, 'build', 'v2', version)
    vdir, adir = os.path.join(B, 'clips'), os.path.join(B, 'audio')
    odir = os.path.join(ROOT, 'output', 'v2', version)
    for d in (B, vdir, adir, odir):
        os.makedirs(d, exist_ok=True)
    sfx.make_all(os.path.join(ROOT, 'build', 'v2', 'sfx'))
    run(['node', os.path.join(ROOT, 'engine2', 'story.js'), version, os.path.join(B, 'story.json')])
    story = json.load(open(os.path.join(B, 'story.json')))
    shots = [s for s in story['shots'] if not only or only in s['id']]
    lines = [ln for s in shots for ln in s['lines']]
    print(f'{len(shots)} shots, {len(lines)} lines, {sum(len(l["en"].split()) for l in lines)} words')
    tts.synth(lines, FPS)
    print('tts done')
    for s in shots:
        prepare_shot(s)
    total = sum(s['dur'] for s in shots)
    print(f'duration {total / 60:.1f} min')
    plan = {'fps': FPS, 'shots': [{k: v for k, v in s.items() if k not in ('lines', 'subs')} | {'subs': [], 'lt': [[l['t0'], l['dur']] for l in s['lines']]} for s in shots]}
    json.dump(plan, open(os.path.join(B, 'plan.json'), 'w'))
    json.dump([{'id': s['id'], 'dur': s['dur'], 'subs': s['subs']} for s in shots], open(os.path.join(B, 'timing.json'), 'w'), ensure_ascii=False)
    if '--stills' in args:
        sd = os.path.join(B, 'stills')
        shutil.rmtree(sd, ignore_errors=True)
        subprocess.run(['node', os.path.join(ROOT, 'engine2', 'render.mjs'), os.path.join(B, 'plan.json'), vdir, workers] + ([only] if only else []), env=dict(os.environ, STILLS=sd))
        contact_sheets(sd, os.path.join(odir, 'review'))
        return
    if '--no-render' not in args:
        r = subprocess.run(['node', os.path.join(ROOT, 'engine2', 'render.mjs'), os.path.join(B, 'plan.json'), vdir, workers] + ([only] if only else []))
        if r.returncode:
            raise SystemExit('render failed')
    for s in shots:
        mix_shot(s, os.path.join(adir, s['id'] + '.wav'))
    if '--no-assemble' in args:
        return
    if only:
        assemble('preview_' + re.sub(r'\W', '_', only), shots, vdir, adir, odir)
        return
    groups = story.get('outputs') or [{'name': version, 'shots': [s['id'] for s in shots], 'chapters': True}]
    byid = {s['id']: s for s in shots}
    for g in groups:
        assemble(g['name'], [byid[i] for i in g['shots']], vdir, adir, odir, g.get('chapters', False))


if __name__ == '__main__':
    main()
