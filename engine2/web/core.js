// engine2 core: timing, easing, deterministic noise, text measurement, palette.
// Every frame is a pure function of (shot, t): no state is kept between frames.
'use strict';
const W = 1920, H = 1080;
const PAL = {
  ink: '#17120c', paper: '#f2e6c9', paper2: '#e6d4ab', cream: '#fbf4e2', sepia: '#8a5a2b', brown: '#5b3a1e',
  wood: '#6b4528', woodD: '#4a2e18', red: '#b3302a', redD: '#7c1f1a', gold: '#d6a441', goldL: '#f3d27a',
  navy: '#1e3253', blue: '#2f5d8a', teal: '#2f6f73', green: '#2f6b3d', board: '#203a2e', up: '#2f7d3a', down: '#b8322a',
  grey: '#6d665c', skin: '#eec39a', sky1: '#9cc2cf', sky2: '#efdcb3', night1: '#1c2036', night2: '#4a3a52',
};
const F = {
  title: "'Bangers', 'Noto Sans SC', sans-serif",
  comic: "'Comic Neue', 'Noto Sans SC', sans-serif",
  serif: "'Playfair Display', 'Noto Serif SC', serif",
  fell: "'IM FELL English', 'Playfair Display', 'Noto Serif SC', serif",
  cond: "'Oswald', 'Noto Sans SC', sans-serif",
  zh: "'Noto Sans SC', sans-serif",
  zhs: "'Noto Serif SC', serif",
  type: "'Special Elite', 'Courier New', 'Noto Serif SC', monospace",
};

// ---------- easing ----------
const EASE = {
  lin: t => t,
  in: t => t * t * t,
  out: t => 1 - Math.pow(1 - t, 3),
  inOut: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  sine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  back: t => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  backStrong: t => { const c1 = 2.6, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  elastic: t => t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - .75) * (2 * Math.PI) / 3) + 1,
  bounce: t => { const n = 7.5625, d = 2.75; if (t < 1 / d) return n * t * t; if (t < 2 / d) return n * (t -= 1.5 / d) * t + .75; if (t < 2.5 / d) return n * (t -= 2.25 / d) * t + .9375; return n * (t -= 2.625 / d) * t + .984375; },
};
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const lerp = (a, b, p) => a + (b - a) * p;
// progress of an animation that starts at t0 and lasts dur
function prog(t, t0, dur = 0.5, ease = 'out') { if (t0 === undefined || t0 === null) return 1; return EASE[ease](clamp((t - t0) / Math.max(dur, 1e-6))); }
// visible window with fade in/out: returns 0..1
function vis(t, at = 0, until, fin = 0.35, fout = 0.3) {
  const a = prog(t, at, fin, 'out');
  const b = until === undefined || until === null ? 1 : 1 - prog(t, until - fout, fout, 'in');
  return Math.min(a, b);
}
// keyframes: [{t, ...props, ease}] -> interpolated props at time t
function keyed(t, keys, def = {}) {
  if (!keys || !keys.length) return Object.assign({}, def);
  const ks = keys.slice().sort((a, b) => a.t - b.t);
  if (t <= ks[0].t) return Object.assign({}, def, ks[0]);
  for (let i = 0; i < ks.length - 1; i++) {
    const a = ks[i], b = ks[i + 1];
    if (t >= a.t && t <= b.t) {
      const dur = b.dur ?? (b.t - a.t);
      const start = b.t - dur >= a.t ? b.t - dur : a.t;
      const p = EASE[b.ease || 'inOut'](clamp((t - start) / Math.max(b.t - start, 1e-6)));
      const out = Object.assign({}, def, a);
      for (const k in b) if (typeof b[k] === 'number' && typeof a[k] === 'number' && k !== 't') out[k] = lerp(a[k], b[k], p);
      return out;
    }
  }
  return Object.assign({}, def, ks[ks.length - 1]);
}
// deterministic hash noise
function hash(n) { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); }
function noise1(x, seed = 0) { const i = Math.floor(x), f = x - i; const u = f * f * (3 - 2 * f); return lerp(hash(i + seed * 57), hash(i + 1 + seed * 57), u); }
function strSeed(s) { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) | 0; return Math.abs(h % 9973); }

// ---------- text ----------
const _cv = document.createElement('canvas').getContext('2d');
function measure(t, size, font, weight = 400) { _cv.font = `${weight} ${size}px ${font}`; return _cv.measureText(t).width; }
function esc(s) { return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function wrap(text, size, font, maxW, weight = 400) {
  text = String(text ?? '');
  const out = [];
  for (const para of text.split('\n')) {
    const cjk = /[　-鿿＀-￯]/.test(para);
    const tokens = cjk ? (para.match(/[A-Za-z0-9$%.,'’\-+/:½¼¾⅛⅜⅝⅞~×.]+|./g) || []) : para.split(/(\s+)/);
    let cur = '';
    for (const tk of tokens) {
      const test = cur + tk;
      if (measure(test.trim(), size, font, weight) > maxW && cur.trim()) {
        out.push(cur.trim()); cur = /^\s+$/.test(tk) ? '' : tk;
        if (cjk && /^[，。、！？；：）」』”]$/.test(cur) && out.length) { out[out.length - 1] += cur; cur = ''; }
      } else cur = test;
    }
    out.push(cur.trim());
  }
  return out.filter((l, i, a) => l || (i > 0 && i < a.length - 1));
}
// text block as SVG; returns {svg, h, w}
function tb(text, x, y, o = {}) {
  const size = o.size || 30, font = o.font || F.comic, weight = o.weight || 400, lh = o.lh || size * 1.22;
  const lines = o.maxW ? wrap(text, size, font, o.maxW, weight) : String(text ?? '').split('\n');
  const anchor = o.anchor || 'start';
  let s = `<text font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${o.fill || PAL.ink}" text-anchor="${anchor}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 6}" paint-order="stroke" stroke-linejoin="round"` : ''}${o.opacity !== undefined ? ` opacity="${o.opacity}"` : ''}${o.italic ? ' font-style="italic"' : ''}>`;
  lines.forEach((l, i) => { s += `<tspan x="${x}" y="${(y + size * 0.84 + i * lh).toFixed(1)}">${esc(l)}</tspan>`; });
  s += '</text>';
  const w = Math.max(0, ...lines.map(l => measure(l, size, font, weight)));
  return { svg: s, h: lines.length * lh, w, lines };
}
// English + Chinese pair
function bi(en, zh, x, y, o = {}) {
  const size = o.size || 30;
  const a = tb(en, x, y, Object.assign({}, o, { size, font: o.font || F.comic, weight: o.weight || 700 }));
  const zs = o.zsize || Math.round(size * 0.86);
  const gap = o.gap ?? Math.round(size * 0.12);
  const b = zh ? tb(zh, x, y + a.h + gap, { size: zs, font: o.zfont || F.zh, weight: o.zweight || 500, maxW: o.maxW, fill: o.zfill || o.fill || '#3b3226', anchor: o.anchor, lh: zs * 1.32, stroke: o.stroke, sw: o.sw }) : { svg: '', h: 0, w: 0 };
  return { svg: a.svg + b.svg, h: a.h + (zh ? gap + b.h : 0), w: Math.max(a.w, b.w) };
}
// largest size that fits a box
function fitBi(en, zh, x, y, maxW, maxH, o = {}) {
  let t; for (let sz = o.max || 40; sz >= (o.min || 16); sz -= 1) {
    t = bi(en, zh, x, y, Object.assign({}, o, { size: sz, zsize: Math.round(sz * (o.zr || 0.86)), maxW }));
    if (t.h <= maxH) return t;
  }
  return t;
}
// price formatting with eighths: 105.25 -> 105¼
function frac(v, opts = {}) {
  const neg = v < 0; v = Math.abs(v);
  const whole = Math.floor(v + 1e-9); const r = Math.round((v - whole) * 8);
  const F8 = ['', '⅛', '¼', '⅜', '½', '⅝', '¾', '⅞'];
  let s = r === 8 ? String(whole + 1) : String(whole) + F8[r];
  return (neg ? '−' : '') + s;
}
function money(v, opts = {}) {
  const neg = v < 0; v = Math.abs(v);
  const s = opts.cents ? v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : Math.round(v).toLocaleString('en-US');
  return (neg ? '−$' : (opts.plus ? '+$' : '$')) + s;
}
function fmtNum(v, fmt) {
  if (typeof fmt === 'function') return fmt(v);
  if (fmt === 'frac') return frac(v);
  if (fmt === '$') return money(v);
  if (fmt === '$c') return money(v, { cents: true });
  if (fmt === '+$') return money(v, { plus: true });
  if (fmt === 'cents') return Math.round(v) + '¢';
  if (fmt === '$2') return '$' + v.toFixed(2);
  if (fmt === '%') return Math.round(v) + '%';
  if (fmt === 'int') return Math.round(v).toLocaleString('en-US');
  if (typeof fmt === 'string' && fmt.startsWith('d')) return v.toFixed(+fmt.slice(1));
  return Math.round(v * 100) / 100 + '';
}
