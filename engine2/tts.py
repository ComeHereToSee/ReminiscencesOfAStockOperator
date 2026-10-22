"""engine2 TTS: Kokoro voices (Apache-2.0, synthetic speakers) with word timestamps and lip-sync envelopes.

synth(lines, fps) -> fills each line dict with: wav, dur, words [(word, start, end)], env [0..1 per frame]
"""
import hashlib
import json
import os
import re

import numpy as np
import soundfile as sf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, 'build', 'v2', 'tts')
SR = 24000

# voice cast: (lang, [(voice, weight), ...], speed)
VOICES = {
    'nar':        ('a', [('am_santa', .6), ('bm_george', .4)], 0.86),   # the old Livingston: aged, steady, weathered
    'larry':      ('a', [('am_santa', .6), ('bm_george', .4)], 0.92),   # remembered dialogue, same man
    'boy':        ('a', [('am_echo', 1)], 1.04),                        # office boys / young voices
    'partridge':  ('b', [('bm_george', 1)], 0.80),                      # Old Partridge
    'harding':    ('a', [('am_michael', 1)], 0.96),                     # Ed Harding
    'fullerton':  ('a', [('am_onyx', .6), ('am_michael', .4)], 0.90),
    'percy':      ('b', [('bm_lewis', 1)], 0.90),                       # Percy Thomas
    'williamson': ('a', [('am_eric', 1)], 0.92),                        # Dan Williamson
    'keene':      ('b', [('bm_george', .5), ('bm_lewis', .5)], 0.90),   # James R. Keene
    'banker':     ('a', [('am_adam', 1)], 0.95),
    'clerk':      ('a', [('am_puck', 1)], 1.02),
    'manager':    ('a', [('am_liam', 1)], 1.0),
    'friend':     ('a', [('am_liam', .6), ('am_michael', .4)], 1.0),
    'trader':     ('a', [('am_fenrir', 1)], 1.02),
    'gates':      ('a', [('am_adam', .5), ('am_onyx', .5)], 0.98),
    'wolff':      ('a', [('am_fenrir', .6), ('am_onyx', .4)], 1.02),
    'wife':       ('a', [('af_heart', 1)], 0.96),
    'mother':     ('a', [('af_sarah', 1)], 0.90),
    'dressmaker': ('b', [('bf_isabella', 1)], 1.0),
    'woman':      ('a', [('af_bella', 1)], 1.0),
}

FR = {'¼': (1, 4), '½': (1, 2), '¾': (3, 4), '⅛': (1, 8), '⅜': (3, 8), '⅝': (5, 8), '⅞': (7, 8)}
FR_WORD = {(1, 4): 'a quarter', (1, 2): 'a half', (3, 4): 'three quarters', (1, 8): 'an eighth', (3, 8): 'three eighths', (5, 8): 'five eighths', (7, 8): 'seven eighths'}
ONES = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split()
TENS = 'zero ten twenty thirty forty fifty sixty seventy eighty ninety'.split()


def two(n):
    if n < 20:
        return ONES[n]
    return TENS[n // 10] + ('-' + ONES[n % 10] if n % 10 else '')


def year(y):
    a, b = divmod(y, 100)
    if b == 0:
        return two(a) + ' hundred'
    if b < 10:
        return two(a) + ' oh ' + ONES[b]
    return two(a) + ' ' + two(b)


def speakable(text):
    s = text
    s = s.replace('—', ', ').replace('…', '... ').replace('×', ' times ').replace('≈', 'about ').replace('→', ' to ').replace('&', ' and ')
    s = re.sub(r'(\d)\s*[–-]\s*(\$?\d)', r'\1 to \2', s)            # ranges 1.10–1.20
    s = s.replace('–', ', ')
    # money with cents and optional fraction: $1.20½ -> one dollar twenty and a half
    def cash(m):
        d, c, f = int(m.group(1)), m.group(2), m.group(3)
        out = ('a dollar' if d == 1 else f'{d} dollars') + (f' {two(int(c))}' if c and int(c) else '')
        if f:
            out += ' and ' + FR_WORD[FR[f]]
        return out
    s = re.sub(r'\$(\d+)\.(\d\d)([¼½¾⅛⅜⅝⅞])?', cash, s)
    s = re.sub(r'(\d+)([¼½¾⅛⅜⅝⅞])', lambda m: f"{m.group(1)} and {FR_WORD[FR[m.group(2)]]}", s)
    s = re.sub(r'([¼½¾⅛⅜⅝⅞])', lambda m: FR_WORD[FR[m.group(1)]], s)
    s = re.sub(r'(\d+)¢', r'\1 cents', s)
    s = re.sub(r'(\d+(?:\.\d+)?)%', r'\1 percent', s)
    # years 1800-1999 standing alone (not part of 1,000 or $)
    s = re.sub(r'(?<![\d,$.])(1[89]\d\d)(?![\d,])', lambda m: year(int(m.group(1))), s)
    s = re.sub(r"(\d)s\b", r"\1s", s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s


_PIPES = {}
_VOICE_CACHE = {}


def _pipe(lang):
    if lang not in _PIPES:
        from kokoro import KPipeline
        _PIPES[lang] = KPipeline(lang_code=lang, repo_id='hexgrad/Kokoro-82M')
    return _PIPES[lang]


def _voice(lang, mix):
    key = (lang, tuple(mix))
    if key not in _VOICE_CACHE:
        p = _pipe(lang)
        v = None
        for name, w in mix:
            t = p.load_voice(name) * w
            v = t if v is None else v + t
        _VOICE_CACHE[key] = v
    return _VOICE_CACHE[key]


def _norm_word(w):
    return re.sub(r"[^a-z0-9]", '', w.lower())


def synth_line(line, fps):
    vid = line.get('v', 'nar')
    lang, mix, speed = VOICES.get(vid, VOICES['nar'])
    speed = speed * line.get('speed', 1.0)
    text = line.get('say') or speakable(line['en'])
    key = hashlib.md5(json.dumps([lang, mix, speed, text, 3]).encode()).hexdigest()[:16]
    wav = os.path.join(CACHE, key + '.wav')
    meta = os.path.join(CACHE, key + '.json')
    if not (os.path.exists(wav) and os.path.exists(meta)):
        os.makedirs(CACHE, exist_ok=True)
        pipe = _pipe(lang)
        voice = _voice(lang, mix)
        chunks, words, off = [], [], 0.0
        for r in pipe(text, voice=voice, speed=speed):
            a = r.audio.numpy() if hasattr(r.audio, 'numpy') else np.asarray(r.audio)
            for tk in (r.tokens or []):
                if tk.start_ts is not None and tk.end_ts is not None and _norm_word(tk.text):
                    words.append((tk.text, off + tk.start_ts, off + tk.end_ts))
            chunks.append(a)
            off += len(a) / SR
        audio = np.concatenate(chunks) if chunks else np.zeros(SR // 2, dtype=np.float32)
        # trim leading/trailing silence, keep 40 ms margins
        thr = 0.012
        idx = np.where(np.abs(audio) > thr)[0]
        if len(idx):
            a0 = max(0, idx[0] - int(0.04 * SR))
            a1 = min(len(audio), idx[-1] + int(0.06 * SR))
            audio = audio[a0:a1]
            words = [(w, s - a0 / SR, e - a0 / SR) for w, s, e in words]
        peak = np.max(np.abs(audio)) + 1e-9
        audio = (audio / peak * 0.89).astype(np.float32)
        sf.write(wav, audio, SR)
        json.dump({'words': words, 'dur': len(audio) / SR, 'text': text}, open(meta, 'w'))
    m = json.load(open(meta))
    line['wav'] = wav
    line['dur'] = m['dur']
    line['words'] = m['words']
    line['spoken'] = m['text']
    # lip-sync envelope at the video frame rate
    audio, _ = sf.read(wav, dtype='float32')
    hop = SR / fps
    n = int(np.ceil(len(audio) / hop))
    env = np.array([np.sqrt(np.mean(audio[int(i * hop):int((i + 1) * hop)] ** 2) + 1e-12) for i in range(n)])
    if len(env):
        env = np.clip(env / (np.percentile(env, 95) + 1e-6), 0, 1)
        env = np.convolve(env, [0.25, 0.5, 0.25], mode='same')
    line['env'] = [round(float(x), 3) for x in env]
    return line


def synth(lines, fps):
    for i, ln in enumerate(lines):
        synth_line(ln, fps)
    return lines
