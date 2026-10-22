// Motion-comic renderer: turns a shot description + step index into a 1920x1080 SVG.
// All drawing is original vector art. Loaded in Chromium by render.js.
'use strict';
const W = 1920, H = 1080, STAGE_H = 850;
const C = {
  ink: '#16130f', paper: '#f4e8cc', paper2: '#e8d6ad', sepia: '#8a5a2b', brown: '#5b3a1e',
  teal: '#2f6f73', red: '#b8322a', gold: '#d9a441', navy: '#1f3354', green: '#2c4a3a',
  cream: '#fff8e6', grey: '#6b6b6b', up: '#2f7d3a', down: '#b8322a', blue: '#2f5d8a',
};
const F = {
  title: "'Bangers', 'Noto Sans SC', sans-serif",
  comic: "'Comic Neue', 'Noto Sans SC', sans-serif",
  serif: "'Playfair Display', 'Noto Serif SC', serif",
  cond: "'Oswald', 'Noto Sans SC', sans-serif",
  zh: "'Noto Sans SC', sans-serif",
  zhs: "'Noto Serif SC', serif",
  type: "'Special Elite', 'Noto Serif SC', monospace",
};

// ---------- text helpers ----------
const _cv = document.createElement('canvas').getContext('2d');
function measure(t, size, font, weight = 400) { _cv.font = `${weight} ${size}px ${font}`; return _cv.measureText(t).width; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function wrap(text, size, font, maxW, weight = 400) {
  text = String(text);
  const cjk = /[　-鿿＀-￯]/.test(text);
  const tokens = cjk ? text.match(/[A-Za-z0-9$%.,'’\-+/:½¼¾⅛⅜⅝⅞~×]+|./g) : text.split(/(\s+)/);
  const lines = []; let cur = '';
  for (const tk of tokens) {
    if (tk === '\n') { lines.push(cur); cur = ''; continue; }
    const test = cur + tk;
    if (measure(test.trim(), size, font, weight) > maxW && cur.trim()) {
      lines.push(cur.trim()); cur = /^\s+$/.test(tk) ? '' : tk;
      // keep CJK closing punctuation off the line start
      if (cjk && /^[，。、！？；：）」』”]$/.test(cur) && lines.length) { lines[lines.length - 1] += cur; cur = ''; }
    } else cur = test;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}
// Multi-line text block. Returns {svg, h}
function tblock(text, x, y, o = {}) {
  const size = o.size || 30, font = o.font || F.comic, weight = o.weight || 400, lh = o.lh || size * 1.25;
  const lines = o.maxW ? wrap(text, size, font, o.maxW, weight) : String(text).split('\n');
  const anchor = o.anchor || 'start';
  let s = `<text font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${o.fill || C.ink}" text-anchor="${anchor}"${o.ls ? ` letter-spacing="${o.ls}"` : ''}${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 6}" paint-order="stroke" stroke-linejoin="round"` : ''}${o.style ? ` style="${o.style}"` : ''}>`;
  lines.forEach((l, i) => { s += `<tspan x="${x}" y="${y + size * 0.85 + i * lh}">${esc(l)}</tspan>`; });
  s += '</text>';
  return { svg: s, h: lines.length * lh, lines };
}
// English line + Chinese line pair
function bi(en, zh, x, y, o = {}) {
  const a = tblock(en, x, y, { size: o.size || 30, font: o.font || F.comic, weight: o.weight || 700, maxW: o.maxW, fill: o.fill || C.ink, anchor: o.anchor, lh: o.lh });
  const zs = o.zsize || Math.round((o.size || 30) * 0.88);
  const b = zh ? tblock(zh, x, y + a.h + (o.gap ?? 4), { size: zs, font: o.zfont || F.zh, weight: o.zweight || 500, maxW: o.maxW, fill: o.zfill || o.fill || '#3d3428', anchor: o.anchor, lh: zs * 1.3 }) : { svg: '', h: 0 };
  return { svg: a.svg + b.svg, h: a.h + (zh ? (o.gap ?? 4) + b.h : 0) };
}
// Largest bilingual block (size from max down to min) that fits maxW x maxH
function fitBi(en, zh, x, y, maxW, maxH, o = {}) {
  const max = o.max || 34, min = o.min || 18, zr = o.zr || 0.88;
  let t;
  for (let sz = max; sz >= min; sz -= 1) {
    t = bi(en, zh, x, y, Object.assign({}, o, { size: sz, zsize: Math.round(sz * zr), maxW }));
    if (t.h <= maxH) return t;
  }
  return t;
}
function fmtMoney(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

// ---------- defs (patterns, filters) ----------
function defs() {
  return `<defs>
  <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="2.2" fill="#000" opacity="0.18"/><circle cx="9" cy="9" r="2.2" fill="#000" opacity="0.18"/></pattern>
  <pattern id="dotsL" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1.5" fill="#000" opacity="0.10"/></pattern>
  <pattern id="paperTex" width="240" height="240" patternUnits="userSpaceOnUse"><rect width="240" height="240" fill="${C.paper}"/>
    <path d="M0 40 Q60 30 120 44 T240 38 M0 130 Q80 120 160 136 T240 128 M0 200 Q70 210 140 196 T240 206" stroke="#c9b48a" stroke-width="1" fill="none" opacity="0.45"/></pattern>
  <pattern id="wood" width="160" height="40" patternUnits="userSpaceOnUse"><rect width="160" height="40" fill="#6a4426"/><path d="M0 12 Q40 6 80 14 T160 10 M0 30 Q50 26 100 32 T160 28" stroke="#53331b" stroke-width="2" fill="none"/></pattern>
  <pattern id="hatch" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="#000" stroke-width="2" opacity="0.12"/></pattern>
  <radialGradient id="vign" cx="50%" cy="45%" r="75%"><stop offset="60%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.45"/></radialGradient>
  <radialGradient id="lamp" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffe9a8" stop-opacity="0.75"/><stop offset="100%" stop-color="#ffe9a8" stop-opacity="0"/></radialGradient>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9cc3cf"/><stop offset="1" stop-color="#f1dfb5"/></linearGradient>
  <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b2f4a"/><stop offset="1" stop-color="#b86a4a"/></linearGradient>
  <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f8ea0"/><stop offset="1" stop-color="#1f5566"/></linearGradient>
  <linearGradient id="band" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14110d"/><stop offset="1" stop-color="#050403"/></linearGradient>
  <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%"><feDropShadow dx="8" dy="10" stdDeviation="0" flood-color="#000" flood-opacity="0.55"/></filter>
  <filter id="soft"><feGaussianBlur stdDeviation="6"/></filter>
  <filter id="rough"><feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
  </defs>`;
}

// ---------- characters ----------
const CHAR = {
  boy:      { skin: '#f3cfa6', hair: '#d2a85a', hairStyle: 'boy', hat: 'cap', hatColor: '#5a4a3a', suit: '#6d5a44', vest: true, tie: '#7a2a22', tieType: 'bow', youth: true },
  larry:    { skin: '#f1c9a0', hair: '#cfa54e', hairStyle: 'part', hat: 'none', suit: '#22355a', tie: '#b8322a' },
  larryHat: { skin: '#f1c9a0', hair: '#cfa54e', hairStyle: 'part', hat: 'fedora', hatColor: '#3b3a3a', suit: '#2c2f3a', tie: '#b8322a' },
  larryOld: { skin: '#efc59c', hair: '#c49a4a', hairStyle: 'part', hat: 'none', suit: '#3a3d46', tie: '#7a1f1a', vest: true, age: 1 },
  partridge:{ skin: '#ecc39d', hair: '#e8e4dc', hairStyle: 'bald', hat: 'none', mus: 'walrus', musColor: '#e8e4dc', glasses: true, suit: '#4a4036', tie: '#2a2a2a', tieType: 'bow', age: 2, stout: true },
  clerk:    { skin: '#efc29a', hair: '#3a2a1a', hairStyle: 'slick', hat: 'visor', hatColor: '#2f7a4a', mus: 'thin', suit: '#f0ebe0', sleeves: true, tie: '#2a2a2a', tieType: 'bow' },
  broker:   { skin: '#eab88f', hair: '#4a3420', hairStyle: 'slick', hat: 'bowler', hatColor: '#1d1d1d', mus: 'walrus', musColor: '#4a3420', suit: '#3b3b3b', tie: '#2f5d8a', stout: true, age: 1 },
  harding:  { skin: '#ecc19a', hair: '#6a4a2a', hairStyle: 'slick', mus: 'thin', suit: '#2b2b33', tie: '#5a2a6a', age: 1, glasses: true },
  percy:    { skin: '#f0c7a0', hair: '#cfcac0', hairStyle: 'gray', mus: 'thin', beard: 'goatee', beardColor: '#cfcac0', suit: '#e9e2d0', tie: '#2a2a2a', tieType: 'string', age: 2 },
  banker:   { skin: '#ecc19a', hair: '#9a9a9a', hairStyle: 'gray', hat: 'top', hatColor: '#141414', mus: 'walrus', musColor: '#9a9a9a', suit: '#1b1b1f', tie: '#7a6a2a', age: 2, stout: true },
  keene:    { skin: '#efc59c', hair: '#bdbdbd', hairStyle: 'gray', beard: 'full', beardColor: '#bdbdbd', mus: 'walrus', musColor: '#bdbdbd', suit: '#2f2f35', tie: '#2a2a2a', age: 2 },
  friend:   { skin: '#e9b98f', hair: '#2a1d12', hairStyle: 'slick', hat: 'boater', hatColor: '#e0c27a', mus: 'thin', suit: '#6b4a2e', tie: '#2f6f73' },
  trader:   { skin: '#e6b48a', hair: '#1f1a14', hairStyle: 'slick', hat: 'bowler', hatColor: '#222', suit: '#4a4a52', tie: '#a03028', mus: 'walrus', musColor: '#1f1a14' },
  williamson:{ skin: '#ecc19a', hair: '#7a6a5a', hairStyle: 'gray', mus: 'walrus', musColor: '#7a6a5a', suit: '#1e2230', tie: '#3a5a3a', age: 1, stout: true, glasses: true },
  wife:     { skin: '#f3cfae', hair: '#6a3e22', hairStyle: 'bun', suit: '#6a2f4a', tie: null, female: true },
  mother:   { skin: '#f0c8a4', hair: '#8a7a6a', hairStyle: 'bun', suit: '#3e3a52', tie: null, female: true, age: 1 },
  agent:    { skin: '#efc29a', hair: '#2a1d12', hairStyle: 'part', hat: 'bowler', hatColor: '#2a2a2a', suit: '#5a4a3a', tie: '#c08a2a' },
};

function person(o) {
  const c = Object.assign({ skin: '#f1c9a0', hair: '#c9a44c', hairStyle: 'part', hat: 'none', hatColor: '#2a2a2a', mus: 'none', beard: 'none', glasses: false, suit: '#1f3354', shirt: '#f6f2e8', tie: '#b8322a', tieType: 'tie', vest: false, expr: 'neutral', pose: 'idle', age: 0, stout: false, look: 0, prop: null }, CHAR[o.id] || {}, o);
  const sk = c.skin, ink = C.ink;
  const shade = 'rgba(120,60,30,0.22)';
  const bw = c.stout ? 175 : (c.youth ? 130 : 150);
  let g = '';
  const sleeve = (pts) => `<path d="${pts}" fill="none" stroke="${ink}" stroke-width="${c.youth ? 64 : 76}" stroke-linecap="round" stroke-linejoin="round"/><path d="${pts}" fill="none" stroke="${c.sleeves ? c.shirt : c.suit}" stroke-width="${c.youth ? 52 : 64}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const hand = (x, y, r = 25) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${sk}" stroke="${ink}" stroke-width="5"/><path d="M${x - 10} ${y - 4} q10 -8 20 0" stroke="${ink}" stroke-width="3" fill="none" opacity="0.5"/>`;
  const L = -bw + 20, R = bw - 20;
  // back arms for poses
  const pose = c.pose;
  let front = '';
  if (pose === 'point') front += sleeve(`M${R} -80 L ${R + 110} -60 L ${R + 230} -150`) + hand(R + 245, -160);
  if (pose === 'pointL') front += sleeve(`M${L} -80 L ${L - 110} -60 L ${L - 230} -150`) + hand(L - 245, -160);
  if (pose === 'up') front += sleeve(`M${L} -80 L ${L - 80} -180 L ${L - 60} -300`) + hand(L - 60, -320) + sleeve(`M${R} -80 L ${R + 80} -180 L ${R + 60} -300`) + hand(R + 60, -320);
  if (pose === 'fist') front += sleeve(`M${R} -80 L ${R + 70} -170 L ${R + 40} -300`) + hand(R + 40, -318, 30);
  if (pose === 'chin') front += sleeve(`M${R} -60 L ${R - 10} 60 L 40 -120`) + hand(30, -140);
  if (pose === 'cross') front += sleeve(`M${L + 10} -70 L ${L + 20} 60 L ${R - 40} 40`) + sleeve(`M${R - 10} -70 L ${R - 20} 70 L ${L + 40} 50`) + hand(R - 40, 40, 22) + hand(L + 40, 52, 22);
  if (pose === 'tape' || pose === 'paper' || pose === 'ticket' || pose === 'money' || pose === 'phone') {
    front += sleeve(`M${L + 5} -70 L ${L - 10} 40 L -55 20`) + sleeve(`M${R - 5} -70 L ${R + 10} 40 L 55 20`);
  }
  // torso
  if (c.female) {
    g += `<path d="M ${-bw + 10} -95 Q ${-bw - 10} -90 ${-bw - 20} -40 L ${-bw - 40} 300 L ${bw + 40} 300 L ${bw + 20} -40 Q ${bw + 10} -90 ${bw - 10} -95 L 30 -125 L -30 -125 Z" fill="${c.suit}" stroke="${ink}" stroke-width="6"/>`;
    g += `<path d="M -36 -122 Q 0 -80 36 -122" fill="${c.shirt}" stroke="${ink}" stroke-width="4"/>`;
    g += `<circle cx="0" cy="-70" r="9" fill="${C.gold}" stroke="${ink}" stroke-width="3"/>`;
  } else {
    g += `<path d="M ${-bw} -95 Q ${-bw - 18} -88 ${-bw - 25} -40 L ${-bw - 40} 300 L ${bw + 40} 300 L ${bw + 25} -40 Q ${bw + 18} -88 ${bw} -95 L 42 -122 L -42 -122 Z" fill="${c.sleeves ? c.shirt : c.suit}" stroke="${ink}" stroke-width="6"/>`;
    g += `<path d="M ${bw - 30} -90 Q ${bw + 10} -60 ${bw + 20} 40 L ${bw + 35} 300 L ${bw - 10} 300 Z" fill="#000" opacity="0.18"/>`;
    if (c.vest || c.sleeves) g += `<path d="M -62 -110 L -70 300 L 70 300 L 62 -110 L 0 40 Z" fill="${c.sleeves ? '#4a4a4a' : '#8a7a5a'}" stroke="${ink}" stroke-width="5"/>`;
    g += `<path d="M -44 -122 L 0 30 L 44 -122 Z" fill="${c.shirt}" stroke="${ink}" stroke-width="4"/>`;
    g += `<path d="M -44 -122 L -18 -92 L 0 -112 L 18 -92 L 44 -122 L 22 -128 L 0 -118 L -22 -128 Z" fill="${c.shirt}" stroke="${ink}" stroke-width="4"/>`;
    if (c.tie && c.tieType === 'tie') g += `<path d="M -12 -112 L 12 -112 L 16 -96 L 26 10 L 0 40 L -26 10 L -16 -96 Z" fill="${c.tie}" stroke="${ink}" stroke-width="4"/>`;
    if (c.tie && c.tieType === 'bow') g += `<path d="M 0 -104 L -34 -122 L -34 -86 Z M 0 -104 L 34 -122 L 34 -86 Z" fill="${c.tie}" stroke="${ink}" stroke-width="4"/><circle cx="0" cy="-104" r="8" fill="${c.tie}" stroke="${ink}" stroke-width="3"/>`;
    if (c.tie && c.tieType === 'string') g += `<path d="M 0 -106 L -20 -116 L -18 -96 Z M 0 -106 L 20 -116 L 18 -96 Z M -4 -104 L -10 -20 M 4 -104 L 10 -20" fill="${c.tie}" stroke="${ink}" stroke-width="4"/>`;
    if (!c.sleeves) {
      g += `<path d="M -44 -122 L -82 -50 L -48 -40 L -8 40" fill="none" stroke="${ink}" stroke-width="5"/><path d="M 44 -122 L 82 -50 L 48 -40 L 8 40" fill="none" stroke="${ink}" stroke-width="5"/>`;
      g += `<circle cx="-2" cy="90" r="7" fill="${ink}"/><circle cx="-2" cy="150" r="7" fill="${ink}"/>`;
      g += `<path d="M ${bw - 70} -40 L ${bw - 20} -46 L ${bw - 28} -30 L ${bw - 70} -26 Z" fill="${c.shirt}" stroke="${ink}" stroke-width="3"/>`;
    }
  }
  // neck
  g += `<path d="M -28 -160 L -28 -112 Q 0 -96 28 -112 L 28 -160 Z" fill="${sk}" stroke="${ink}" stroke-width="5"/><path d="M -28 -140 Q 0 -120 28 -140 L 28 -112 Q 0 -100 -28 -112 Z" fill="${shade}"/>`;
  // head
  const hy = -228;
  g += `<g transform="translate(${c.look * 6},0)">`;
  g += `<ellipse cx="-62" cy="${hy + 6}" rx="13" ry="20" fill="${sk}" stroke="${ink}" stroke-width="5"/><ellipse cx="62" cy="${hy + 6}" rx="13" ry="20" fill="${sk}" stroke="${ink}" stroke-width="5"/>`;
  g += `<path d="M -60 ${hy - 20} Q -62 ${hy - 92} 0 ${hy - 94} Q 62 ${hy - 92} 60 ${hy - 20} Q 60 ${hy + 44} 30 ${hy + 70} Q 0 ${hy + 86} -30 ${hy + 70} Q -60 ${hy + 44} -60 ${hy - 20} Z" fill="${sk}" stroke="${ink}" stroke-width="6"/>`;
  g += `<path d="M 20 ${hy - 90} Q 62 ${hy - 88} 60 ${hy - 20} Q 60 ${hy + 44} 30 ${hy + 70} Q 0 ${hy + 86} -10 ${hy + 80} Q 40 ${hy + 40} 36 ${hy - 20} Q 34 ${hy - 70} 20 ${hy - 90} Z" fill="${shade}"/>`;
  // hair
  const hc = c.hair;
  if (c.hairStyle === 'part' || c.hairStyle === 'slick' || c.hairStyle === 'gray')
    g += `<path d="M -64 ${hy - 4} Q -72 ${hy - 104} 0 ${hy - 104} Q 70 ${hy - 104} 66 ${hy - 4} Q 58 ${hy - 54} 40 ${hy - 64} Q -10 ${hy - 50} -26 ${hy - 70} Q -50 ${hy - 50} -64 ${hy - 4} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/><path d="M -24 ${hy - 70} Q -10 ${hy - 96} 30 ${hy - 98}" stroke="${ink}" stroke-width="3" fill="none" opacity="0.6"/>`;
  if (c.hairStyle === 'boy')
    g += `<path d="M -64 ${hy - 2} Q -74 ${hy - 104} 0 ${hy - 106} Q 72 ${hy - 104} 66 ${hy - 2} L 54 ${hy - 40} L 40 ${hy - 56} L 24 ${hy - 44} L 8 ${hy - 60} L -10 ${hy - 46} L -28 ${hy - 60} L -44 ${hy - 44} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/>`;
  if (c.hairStyle === 'bald')
    g += `<path d="M -62 ${hy + 10} Q -70 ${hy - 40} -50 ${hy - 50} L -46 ${hy - 10} Z M 62 ${hy + 10} Q 70 ${hy - 40} 50 ${hy - 50} L 46 ${hy - 10} Z" fill="${hc}" stroke="${ink}" stroke-width="4"/><path d="M -20 ${hy - 80} q 14 -8 30 -2" stroke="#fff" stroke-width="5" opacity="0.6" fill="none"/>`;
  if (c.hairStyle === 'bun')
    g += `<circle cx="0" cy="${hy - 104}" r="34" fill="${hc}" stroke="${ink}" stroke-width="5"/><path d="M -66 ${hy + 20} Q -78 ${hy - 104} 0 ${hy - 100} Q 78 ${hy - 104} 66 ${hy + 20} Q 56 ${hy - 50} 0 ${hy - 62} Q -56 ${hy - 50} -66 ${hy + 20} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/>`;
  if (c.age >= 1) g += `<path d="M -30 ${hy - 46} q 30 -8 60 0 M -24 ${hy - 36} q 24 -6 48 0" stroke="${ink}" stroke-width="2.5" fill="none" opacity="0.4"/><path d="M -36 ${hy + 30} q -6 18 4 32 M 36 ${hy + 30} q 6 18 -4 32" stroke="${ink}" stroke-width="3" fill="none" opacity="0.45"/>`;
  // eyes
  const e = c.expr;
  const ey = hy - 8;
  const eyeR = e === 'shock' ? 13 : 10, eyeRy = e === 'shock' ? 13 : (e === 'smile' || e === 'grin' ? 5 : 8);
  for (const sx of [-1, 1]) {
    const ex = sx * 26;
    if (e === 'smile' || e === 'grin') g += `<path d="M ${ex - 13} ${ey + 2} Q ${ex} ${ey - 10} ${ex + 13} ${ey + 2}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    else if (e === 'sad' || e === 'tired') g += `<ellipse cx="${ex}" cy="${ey}" rx="${eyeR}" ry="${eyeRy - 2}" fill="#fff" stroke="${ink}" stroke-width="4"/><circle cx="${ex + c.look * 2}" cy="${ey + 2}" r="5" fill="${ink}"/><path d="M ${ex - 13} ${ey - 2} L ${ex + 13} ${ey - 2}" stroke="${ink}" stroke-width="4"/>`;
    else g += `<ellipse cx="${ex}" cy="${ey}" rx="${eyeR}" ry="${eyeRy}" fill="#fff" stroke="${ink}" stroke-width="4"/><circle cx="${ex + c.look * 3}" cy="${ey + 1}" r="${e === 'shock' ? 5 : 5.5}" fill="${ink}"/>`;
    // brows
    let b;
    if (e === 'angry' || e === 'determined') b = `M ${ex - 16 * sx} ${ey - 22} L ${ex + 14 * sx} ${ey - 14}`;
    else if (e === 'sad' || e === 'worry') b = `M ${ex - 16 * sx} ${ey - 16} L ${ex + 14 * sx} ${ey - 26}`;
    else if (e === 'shock') b = `M ${ex - 15} ${ey - 30} Q ${ex} ${ey - 38} ${ex + 15} ${ey - 30}`;
    else if (e === 'think') b = sx < 0 ? `M ${ex - 15} ${ey - 20} L ${ex + 15} ${ey - 20}` : `M ${ex - 15} ${ey - 26} Q ${ex} ${ey - 32} ${ex + 15} ${ey - 24}`;
    else b = `M ${ex - 15} ${ey - 22} Q ${ex} ${ey - 28} ${ex + 15} ${ey - 22}`;
    g += `<path d="${b}" stroke="${c.hairStyle === 'bald' ? '#bbb' : (c.age >= 2 ? '#bdb6aa' : ink)}" stroke-width="6" stroke-linecap="round" fill="none"/>`;
  }
  if (c.glasses) g += `<circle cx="-26" cy="${ey}" r="18" fill="none" stroke="${ink}" stroke-width="3.5"/><circle cx="26" cy="${ey}" r="18" fill="none" stroke="${ink}" stroke-width="3.5"/><path d="M -8 ${ey} L 8 ${ey}" stroke="${ink}" stroke-width="3.5"/>`;
  // nose
  g += `<path d="M 2 ${hy - 2} Q -8 ${hy + 24} -6 ${hy + 28} Q 2 ${hy + 34} 10 ${hy + 28}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  // mouth
  const my = hy + 48;
  const mouths = {
    neutral: `<path d="M -16 ${my} Q 0 ${my + 4} 16 ${my}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    smile: `<path d="M -22 ${my - 4} Q 0 ${my + 16} 22 ${my - 4}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    grin: `<path d="M -26 ${my - 6} Q 0 ${my + 26} 26 ${my - 6} Z" fill="#fff" stroke="${ink}" stroke-width="5"/>`,
    frown: `<path d="M -18 ${my + 6} Q 0 ${my - 8} 18 ${my + 6}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    sad: `<path d="M -16 ${my + 6} Q 0 ${my - 4} 16 ${my + 6}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    tired: `<path d="M -14 ${my + 2} L 14 ${my + 2}" stroke="${ink}" stroke-width="5" stroke-linecap="round"/>`,
    shock: `<ellipse cx="0" cy="${my + 4}" rx="13" ry="17" fill="#5a1a1a" stroke="${ink}" stroke-width="5"/>`,
    angry: `<path d="M -24 ${my + 6} Q 0 ${my - 10} 24 ${my + 6} L 18 ${my + 14} Q 0 ${my + 4} -18 ${my + 14} Z" fill="#fff" stroke="${ink}" stroke-width="5"/>`,
    shout: `<path d="M -26 ${my - 6} Q 0 ${my - 12} 26 ${my - 6} Q 20 ${my + 30} 0 ${my + 32} Q -20 ${my + 30} -26 ${my - 6} Z" fill="#5a1a1a" stroke="${ink}" stroke-width="5"/>`,
    think: `<path d="M -14 ${my + 2} Q 4 ${my - 2} 18 ${my - 6}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
    determined: `<path d="M -18 ${my + 2} L 18 ${my + 2}" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>`,
    worry: `<path d="M -16 ${my + 4} Q -8 ${my - 2} 0 ${my + 4} Q 8 ${my + 10} 16 ${my + 2}" stroke="${ink}" stroke-width="5" fill="none" stroke-linecap="round"/>`,
  };
  g += mouths[e] || mouths.neutral;
  if (c.mus === 'walrus') g += `<path d="M -36 ${my - 4} Q -30 ${my - 22} 0 ${my - 18} Q 30 ${my - 22} 36 ${my - 4} Q 20 ${my - 8} 0 ${my - 6} Q -20 ${my - 8} -36 ${my - 4} Z" fill="${c.musColor || c.hair}" stroke="${ink}" stroke-width="4"/>`;
  if (c.mus === 'thin') g += `<path d="M -24 ${my - 12} Q 0 ${my - 22} 24 ${my - 12}" stroke="${c.musColor || c.hair === '#cfcac0' ? '#cfcac0' : ink}" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  if (c.beard === 'goatee') g += `<path d="M -14 ${my + 18} Q 0 ${my + 56} 14 ${my + 18} Z" fill="${c.beardColor}" stroke="${ink}" stroke-width="4"/>`;
  if (c.beard === 'full') g += `<path d="M -60 ${hy + 0} Q -62 ${hy + 90} 0 ${hy + 112} Q 62 ${hy + 90} 60 ${hy + 0} Q 50 ${hy + 50} 30 ${hy + 60} Q 0 ${hy + 70} -30 ${hy + 60} Q -50 ${hy + 50} -60 ${hy + 0} Z" fill="${c.beardColor}" stroke="${ink}" stroke-width="5"/>${mouths[e] ? '' : ''}`;
  if (e === 'shock' || e === 'worry') g += `<path d="M 66 ${hy - 50} q 8 14 0 22 q -8 -8 0 -22 Z" fill="#9fd3ef" stroke="${ink}" stroke-width="3"/>`;
  if (e === 'angry') g += `<path d="M 44 ${hy - 70} l 10 -10 m 0 10 l -10 -10 M 56 ${hy - 82} l 8 8" stroke="${C.red}" stroke-width="5"/>`;
  // hats
  const hcol = c.hatColor;
  if (c.hat === 'bowler') g += `<ellipse cx="0" cy="${hy - 66}" rx="94" ry="16" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -62 ${hy - 68} Q -66 ${hy - 150} 0 ${hy - 152} Q 66 ${hy - 150} 62 ${hy - 68} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -60 ${hy - 82} Q 0 ${hy - 72} 60 ${hy - 82}" stroke="#555" stroke-width="7" fill="none"/><path d="M -30 ${hy - 132} q 20 -10 40 -6" stroke="#fff" stroke-width="5" opacity="0.25" fill="none"/>`;
  if (c.hat === 'fedora') g += `<path d="M -110 ${hy - 60} Q 0 ${hy - 90} 110 ${hy - 66} Q 80 ${hy - 48} 0 ${hy - 56} Q -80 ${hy - 46} -110 ${hy - 60} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -64 ${hy - 66} Q -70 ${hy - 140} -20 ${hy - 146} Q 0 ${hy - 128} 20 ${hy - 146} Q 70 ${hy - 140} 64 ${hy - 70} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -64 ${hy - 82} Q 0 ${hy - 72} 64 ${hy - 86} L 64 ${hy - 72} Q 0 ${hy - 60} -64 ${hy - 68} Z" fill="#1a1a1a"/>`;
  if (c.hat === 'top') g += `<ellipse cx="0" cy="${hy - 70}" rx="90" ry="14" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -56 ${hy - 72} L -60 ${hy - 200} L 60 ${hy - 200} L 56 ${hy - 72} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><ellipse cx="0" cy="${hy - 200}" rx="60" ry="10" fill="#2a2a2a" stroke="${ink}" stroke-width="5"/><path d="M -57 ${hy - 90} L 57 ${hy - 90}" stroke="#555" stroke-width="10"/>`;
  if (c.hat === 'cap') g += `<path d="M -70 ${hy - 50} Q -76 ${hy - 120} 0 ${hy - 122} Q 80 ${hy - 120} 74 ${hy - 56} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -10 ${hy - 56} Q 60 ${hy - 70} 110 ${hy - 50} Q 70 ${hy - 36} -10 ${hy - 44} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><circle cx="0" cy="${hy - 120}" r="7" fill="${ink}"/>`;
  if (c.hat === 'boater') g += `<ellipse cx="0" cy="${hy - 70}" rx="104" ry="18" fill="${hcol}" stroke="${ink}" stroke-width="5"/><path d="M -62 ${hy - 72} L -60 ${hy - 120} L 60 ${hy - 120} L 62 ${hy - 72} Z" fill="${hcol}" stroke="${ink}" stroke-width="5"/><ellipse cx="0" cy="${hy - 120}" rx="60" ry="10" fill="${hcol}" stroke="${ink}" stroke-width="4"/><path d="M -61 ${hy - 88} L 61 ${hy - 88}" stroke="${C.navy}" stroke-width="12"/>`;
  if (c.hat === 'visor') g += `<path d="M -66 ${hy - 70} Q 0 ${hy - 86} 66 ${hy - 70} L 90 ${hy - 44} Q 0 ${hy - 66} -90 ${hy - 44} Z" fill="${hcol}" stroke="${ink}" stroke-width="5" opacity="0.92"/>`;
  g += `</g>`;
  // props in hands
  if (pose === 'tape') front += `<path d="M -70 10 Q -20 -10 30 14 Q 80 40 60 120 Q 40 200 90 260" fill="none" stroke="${ink}" stroke-width="40"/><path d="M -70 10 Q -20 -10 30 14 Q 80 40 60 120 Q 40 200 90 260" fill="none" stroke="#f8f2dc" stroke-width="32"/><text font-family="${F.type}" font-size="18" fill="#333" transform="translate(-60 14) rotate(4)">UP 160 ¼ ... SUG 105</text>` + hand(-60, 20) + hand(60, 24);
  if (pose === 'paper') front += `<g transform="translate(-10 40) rotate(-4)"><rect x="-150" y="-110" width="300" height="200" fill="#f1ead6" stroke="${ink}" stroke-width="5"/><rect x="-136" y="-96" width="272" height="34" fill="${ink}"/><text x="0" y="-70" text-anchor="middle" font-family="${F.serif}" font-weight="900" font-size="26" fill="#f1ead6">${esc(c.headline || 'EXTRA!')}</text>${[0, 1, 2, 3, 4].map(i => `<line x1="-130" y1="${-40 + i * 24}" x2="${i % 2 ? 40 : 130}" y2="${-40 + i * 24}" stroke="#777" stroke-width="6"/>`).join('')}</g>` + hand(-140, 50) + hand(140, 30);
  if (pose === 'ticket') front += `<g transform="translate(0 30) rotate(6)"><rect x="-70" y="-50" width="140" height="90" fill="#f5b8c6" stroke="${ink}" stroke-width="4"/><text x="0" y="-12" text-anchor="middle" font-family="${F.type}" font-size="22">${esc(c.ticketText || 'SUGAR 105¼')}</text><text x="0" y="18" text-anchor="middle" font-family="${F.type}" font-size="18">500 SH</text></g>` + hand(-60, 40) + hand(60, 30);
  if (pose === 'money') front += `<g transform="translate(0 20)"><rect x="-90" y="-40" width="180" height="80" rx="6" fill="#9cc49a" stroke="${ink}" stroke-width="4"/><circle cx="0" cy="0" r="24" fill="none" stroke="${ink}" stroke-width="3"/><text x="0" y="10" text-anchor="middle" font-family="${F.serif}" font-weight="900" font-size="30">$</text></g>` + hand(-80, 26) + hand(80, 26);
  if (pose === 'phone') front += `<g><rect x="-20" y="-20" width="40" height="150" fill="#222" stroke="${ink}" stroke-width="4"/><ellipse cx="0" cy="-26" rx="34" ry="14" fill="#333" stroke="${ink}" stroke-width="4"/></g><path d="M 80 -160 L 70 -200" stroke="#222" stroke-width="18"/>` + hand(-50, 40) + hand(60, 30);
  const s = c.s || 1;
  return `<g transform="translate(${c.x},${c.y}) scale(${c.flip ? -s : s},${s})">${g}${front}</g>`;
}

// Crowd of silhouettes
function crowd(w, y, n, o = {}) {
  let s = ''; const col = o.color || '#2a221a';
  for (let i = 0; i < n; i++) {
    const x = (i + 0.5) * w / n + ((i * 37) % 23) - 11, sc = 0.8 + ((i * 53) % 30) / 100, yy = y + ((i * 29) % 30);
    const hat = ['bowler', 'top', 'boater', 'none'][i % 4];
    s += `<g transform="translate(${x} ${yy}) scale(${sc})" fill="${col}" opacity="${o.op || 1}"><ellipse cx="0" cy="-60" rx="26" ry="32"/><path d="M -60 -20 Q 0 -40 60 -20 L 80 200 L -80 200 Z"/>${hat === 'bowler' ? '<ellipse cx="0" cy="-86" rx="40" ry="8"/><path d="M -26 -86 Q 0 -126 26 -86 Z"/>' : hat === 'top' ? '<ellipse cx="0" cy="-86" rx="38" ry="7"/><rect x="-24" y="-140" width="48" height="56"/>' : hat === 'boater' ? '<ellipse cx="0" cy="-86" rx="42" ry="8"/><rect x="-26" y="-112" width="52" height="26"/>' : ''}</g>`;
  }
  return s;
}

// ---------- props ----------
function ticker(x, y, s = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s})">
  <rect x="-40" y="120" width="80" height="220" fill="#5b3a1e" stroke="${C.ink}" stroke-width="5"/>
  <rect x="-110" y="100" width="220" height="30" rx="6" fill="#7a5230" stroke="${C.ink}" stroke-width="5"/>
  <path d="M -90 100 L -90 -40 Q -90 -130 0 -130 Q 90 -130 90 -40 L 90 100 Z" fill="#cfe6ea" fill-opacity="0.45" stroke="${C.ink}" stroke-width="5"/>
  <path d="M -60 -90 Q -40 -110 -10 -112" stroke="#fff" stroke-width="8" fill="none" opacity="0.8"/>
  <rect x="-60" y="10" width="120" height="80" fill="#a77b3a" stroke="${C.ink}" stroke-width="4"/>
  <circle cx="-25" cy="40" r="20" fill="#d9a441" stroke="${C.ink}" stroke-width="4"/><circle cx="25" cy="40" r="14" fill="#d9a441" stroke="${C.ink}" stroke-width="4"/>
  <path d="M 60 50 Q 140 60 150 140 Q 160 240 260 260 Q 320 270 340 330" fill="none" stroke="${C.ink}" stroke-width="26"/>
  <path d="M 60 50 Q 140 60 150 140 Q 160 240 260 260 Q 320 270 340 330" fill="none" stroke="#f8f2dc" stroke-width="20"/>
  </g>`;
}
function quoteBoard(x, y, w, h, rows, o = {}) {
  const cols = rows[0].length;
  let s = `<g transform="translate(${x} ${y})"><rect x="-14" y="-14" width="${w + 28}" height="${h + 28}" fill="#6a4426" stroke="${C.ink}" stroke-width="6"/><rect width="${w}" height="${h}" fill="${o.color || '#22362c'}" stroke="${C.ink}" stroke-width="4"/>`;
  const cw = w / cols, rh = h / rows.length;
  rows.forEach((r, i) => r.forEach((v, j) => {
    const hl = o.hl && o.hl[0] === i && o.hl[1] === j;
    if (hl) s += `<rect x="${j * cw + 4}" y="${i * rh + 4}" width="${cw - 8}" height="${rh - 8}" fill="${C.gold}" opacity="0.85"/>`;
    s += `<text x="${j * cw + cw / 2}" y="${i * rh + rh * 0.68}" text-anchor="middle" font-family="${i === 0 ? F.cond : F.type}" font-size="${Math.min(rh * 0.55, 40)}" fill="${hl ? C.ink : (i === 0 ? '#f0e2b0' : '#f4f1e6')}" ${i === 0 ? 'font-weight="700"' : ''}>${esc(v)}</text>`;
  }));
  for (let j = 1; j < cols; j++) s += `<line x1="${j * cw}" y1="0" x2="${j * cw}" y2="${h}" stroke="#fff" opacity="0.2" stroke-width="2"/>`;
  s += `<line x1="0" y1="${rh}" x2="${w}" y2="${rh}" stroke="#fff" opacity="0.4" stroke-width="3"/></g>`;
  return s;
}
function newspaper(x, y, w, h, head, zh, o = {}) {
  let s = `<g transform="translate(${x} ${y}) rotate(${o.rot || -3})" filter="url(#shadow)"><rect width="${w}" height="${h}" fill="#f1ead6" stroke="${C.ink}" stroke-width="5"/>`;
  s += `<text x="${w / 2}" y="54" text-anchor="middle" font-family="${F.serif}" font-weight="900" font-size="44" fill="${C.ink}">${esc(o.paper || 'THE DAILY NEWS')}</text><line x1="20" y1="70" x2="${w - 20}" y2="70" stroke="${C.ink}" stroke-width="4"/><line x1="20" y1="78" x2="${w - 20}" y2="78" stroke="${C.ink}" stroke-width="2"/>`;
  const hb = tblock(head, w / 2, 92, { size: o.size || 58, font: F.serif, weight: 900, maxW: w - 50, anchor: 'middle', lh: (o.size || 58) * 1.05 });
  s += hb.svg;
  const zb = tblock(zh, w / 2, 100 + hb.h, { size: 34, font: F.zhs, weight: 700, maxW: w - 60, anchor: 'middle', fill: C.red });
  s += zb.svg;
  const top = 120 + hb.h + zb.h;
  for (let c = 0; c < 3; c++) for (let i = 0; top + i * 22 < h - 20; i++) s += `<line x1="${24 + c * (w - 40) / 3}" y1="${top + i * 22}" x2="${24 + (c + 1) * (w - 40) / 3 - 20}" y2="${top + i * 22}" stroke="#9a9182" stroke-width="7"/>`;
  return s + '</g>';
}
function bales(x, y, n, label = 'COTTON') {
  let s = '';
  for (let i = 0; i < n; i++) { const r = Math.floor(i / 5), cI = i % 5; const bx = x + cI * 130 + (r % 2) * 60, by = y - r * 90;
    s += `<g transform="translate(${bx} ${by})"><rect width="120" height="86" rx="10" fill="#efe9da" stroke="${C.ink}" stroke-width="5"/><line x1="0" y1="28" x2="120" y2="28" stroke="#8a6a3a" stroke-width="5"/><line x1="0" y1="58" x2="120" y2="58" stroke="#8a6a3a" stroke-width="5"/><text x="60" y="52" text-anchor="middle" font-family="${F.cond}" font-size="18" fill="#6a5a3a">${label}</text></g>`; }
  return s;
}
function sacks(x, y, n, label = 'COFFEE') {
  let s = '';
  for (let i = 0; i < n; i++) { const r = Math.floor(i / 5), cI = i % 5; const bx = x + cI * 120 + (r % 2) * 55, by = y - r * 100;
    s += `<g transform="translate(${bx} ${by})"><path d="M 10 0 Q 0 50 8 100 L 104 100 Q 116 50 104 0 Q 56 -14 10 0 Z" fill="#b89462" stroke="${C.ink}" stroke-width="5"/><text x="56" y="60" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="20" fill="#5b3a1e">${label}</text></g>`; }
  return s;
}
function moneyStack(x, y, n, o = {}) {
  let s = '';
  for (let i = 0; i < n; i++) s += `<g transform="translate(${x + (i % 4) * 8} ${y - i * 18})"><rect width="200" height="22" rx="4" fill="#8fbf8a" stroke="${C.ink}" stroke-width="4"/><rect x="80" y="0" width="40" height="22" fill="#e6dcb0" stroke="${C.ink}" stroke-width="3"/></g>`;
  return s;
}

// ---------- backgrounds (panel-local) ----------
function bg(kind, w, h, o = {}) {
  let s = '';
  const wall = (col) => `<rect width="${w}" height="${h}" fill="${col}"/><rect width="${w}" height="${h}" fill="url(#dotsL)"/>`;
  switch (kind) {
    case 'office': {
      s += wall('#d9c49a');
      s += `<rect y="${h * 0.72}" width="${w}" height="${h * 0.28}" fill="url(#wood)"/><line x1="0" y1="${h * 0.72}" x2="${w}" y2="${h * 0.72}" stroke="${C.ink}" stroke-width="6"/>`;
      s += quoteBoard(w * 0.08, h * 0.08, w * 0.84, h * 0.5, o.board || [['SUGAR', 'B.R.T.', 'UNION PAC', 'N. PAC', 'STEEL'], ['105¼', '72⅛', '160½', '110', '45¾'], ['105⅛', '72', '160⅝', '110⅛', '45⅝'], ['105', '71⅞', '161', '110¼', '45½']], { hl: o.hl });
      break; }
    case 'bucketshop': {
      s += wall('#b9a072');
      s += quoteBoard(w * 0.06, h * 0.06, w * 0.88, h * 0.42, o.board || [['SUGAR', 'B.R.T.', 'WHEAT', 'COTTON', 'BURL.'], ['105¼', '72⅛', '74¼', '8.12', '113½'], ['104⅞', '72', '74⅛', '8.10', '113¾']], { color: '#1e2a24', hl: o.hl });
      s += `<g transform="translate(${w * 0.82} ${h * 0.56})"><rect width="${w * 0.14}" height="${h * 0.12}" fill="#f1ead6" stroke="${C.ink}" stroke-width="4"/><text x="${w * 0.07}" y="${h * 0.075}" text-anchor="middle" font-family="${F.cond}" font-size="${h * 0.04}" font-weight="700">CASHIER</text></g>`;
      s += `<circle cx="${w * 0.5}" cy="${h * 0.02}" r="${w * 0.25}" fill="url(#lamp)"/>`;
      s += `<rect y="${h * 0.75}" width="${w}" height="${h * 0.25}" fill="#5a3d22"/>`;
      if (o.crowd !== false) s += crowd(w, h * 0.86, 7, { color: '#2e2418' });
      break; }
    case 'street': {
      s += `<rect width="${w}" height="${h}" fill="url(#sky)"/>`;
      // NYSE-like temple facade, original drawing
      const fx = w * 0.18, fw = w * 0.64, fy = h * 0.18;
      s += `<rect x="${w * 0.02}" y="${h * 0.12}" width="${w * 0.14}" height="${h}" fill="#c9b893" stroke="${C.ink}" stroke-width="5"/><rect x="${w * 0.84}" y="${h * 0.08}" width="${w * 0.15}" height="${h}" fill="#bfae88" stroke="${C.ink}" stroke-width="5"/>`;
      for (let r = 0; r < 6; r++) for (let c = 0; c < 2; c++) { s += `<rect x="${w * 0.035 + c * w * 0.06}" y="${h * 0.18 + r * h * 0.11}" width="${w * 0.04}" height="${h * 0.07}" fill="#5a6a72" stroke="${C.ink}" stroke-width="3"/><rect x="${w * 0.855 + c * w * 0.065}" y="${h * 0.14 + r * h * 0.11}" width="${w * 0.04}" height="${h * 0.07}" fill="#5a6a72" stroke="${C.ink}" stroke-width="3"/>`; }
      s += `<path d="M ${fx - 20} ${fy + 90} L ${fx + fw / 2} ${fy} L ${fx + fw + 20} ${fy + 90} Z" fill="#e6dcc4" stroke="${C.ink}" stroke-width="6"/>`;
      s += `<rect x="${fx - 20}" y="${fy + 90}" width="${fw + 40}" height="40" fill="#ddd2b8" stroke="${C.ink}" stroke-width="5"/>`;
      for (let i = 0; i < 6; i++) { const cx = fx + 20 + i * (fw - 40) / 5; s += `<rect x="${cx - 22}" y="${fy + 130}" width="44" height="${h * 0.5}" fill="#ece3cd" stroke="${C.ink}" stroke-width="5"/><line x1="${cx - 8}" y1="${fy + 140}" x2="${cx - 8}" y2="${fy + 120 + h * 0.5}" stroke="#bfb397" stroke-width="4"/>`; }
      s += `<rect x="${fx - 30}" y="${fy + 130 + h * 0.5}" width="${fw + 60}" height="30" fill="#cfc4a8" stroke="${C.ink}" stroke-width="5"/>`;
      s += `<line x1="${fx + fw / 2}" y1="${fy}" x2="${fx + fw / 2}" y2="${fy - 90}" stroke="${C.ink}" stroke-width="6"/><path d="M ${fx + fw / 2} ${fy - 90} L ${fx + fw / 2 + 90} ${fy - 74} L ${fx + fw / 2} ${fy - 56} Z" fill="${C.red}" stroke="${C.ink}" stroke-width="4"/>`;
      s += `<rect y="${h * 0.88}" width="${w}" height="${h * 0.12}" fill="#8a8172"/>`;
      if (o.crowd !== false) s += crowd(w, h * 0.92, 10, { color: '#2a241c' });
      break; }
    case 'floor': {
      s += wall('#c9b48a');
      s += `<rect width="${w}" height="${h * 0.3}" fill="#9a8a6a"/>`;
      for (let i = 0; i < 4; i++) s += `<path d="M ${w * (0.1 + i * 0.27)} ${h * 0.3} L ${w * (0.1 + i * 0.27)} ${h * 0.75}" stroke="${C.ink}" stroke-width="40"/><path d="M ${w * (0.1 + i * 0.27)} ${h * 0.3} L ${w * (0.1 + i * 0.27)} ${h * 0.75}" stroke="#d9cdb0" stroke-width="30"/><rect x="${w * (0.1 + i * 0.27) - 60}" y="${h * 0.3}" width="120" height="50" fill="#2c4a3a" stroke="${C.ink}" stroke-width="4"/>`;
      s += crowd(w, h * 0.78, 12, { color: '#2a241c' }) + crowd(w, h * 0.92, 9, { color: '#15110c' });
      for (let i = 0; i < 18; i++) s += `<rect x="${(i * 157) % w}" y="${(i * 97) % (h * 0.6)}" width="26" height="18" fill="#fff" stroke="${C.ink}" stroke-width="2" transform="rotate(${(i * 41) % 90} ${(i * 157) % w} ${(i * 97) % (h * 0.6)})"/>`;
      break; }
    case 'study': {
      s += wall('#7a5a3a');
      s += `<rect x="${w * 0.55}" y="${h * 0.1}" width="${w * 0.36}" height="${h * 0.48}" fill="url(#sky)" stroke="${C.ink}" stroke-width="8"/>`;
      for (let i = 0; i < 6; i++) s += `<rect x="${w * 0.56 + i * w * 0.06}" y="${h * (0.32 + (i % 3) * 0.04)}" width="${w * 0.05}" height="${h * 0.3}" fill="#8a8a94" stroke="${C.ink}" stroke-width="3"/>`;
      s += `<line x1="${w * 0.73}" y1="${h * 0.1}" x2="${w * 0.73}" y2="${h * 0.58}" stroke="${C.ink}" stroke-width="8"/><line x1="${w * 0.55}" y1="${h * 0.34}" x2="${w * 0.91}" y2="${h * 0.34}" stroke="${C.ink}" stroke-width="8"/>`;
      s += `<rect y="${h * 0.78}" width="${w}" height="${h * 0.22}" fill="url(#wood)" stroke="${C.ink}" stroke-width="6"/>`;
      if (o.ticker !== false) s += ticker(w * 0.16, h * 0.42, h / 1100);
      break; }
    case 'beach': {
      s += `<rect width="${w}" height="${h}" fill="url(#sky)"/><circle cx="${w * 0.8}" cy="${h * 0.2}" r="${h * 0.09}" fill="#ffe08a" stroke="${C.ink}" stroke-width="4"/>`;
      s += `<rect y="${h * 0.5}" width="${w}" height="${h * 0.2}" fill="url(#sea)"/><path d="M0 ${h * 0.55} q 60 -10 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0" stroke="#e8f4f4" stroke-width="4" fill="none"/>`;
      s += `<rect y="${h * 0.7}" width="${w}" height="${h * 0.3}" fill="#e9d29a"/>`;
      s += `<path d="M ${w * 0.12} ${h} Q ${w * 0.1} ${h * 0.6} ${w * 0.16} ${h * 0.25}" stroke="${C.ink}" stroke-width="30" fill="none"/><path d="M ${w * 0.12} ${h} Q ${w * 0.1} ${h * 0.6} ${w * 0.16} ${h * 0.25}" stroke="#8a6a3a" stroke-width="22" fill="none"/>`;
      for (let i = 0; i < 6; i++) { const a = i * 60; s += `<path d="M ${w * 0.16} ${h * 0.25} q ${Math.cos(a * Math.PI / 180) * 160} ${Math.sin(a * Math.PI / 180) * 60 - 40} ${Math.cos(a * Math.PI / 180) * 260} ${Math.sin(a * Math.PI / 180) * 90 + 60}" stroke="${C.ink}" stroke-width="26" fill="none" stroke-linecap="round"/><path d="M ${w * 0.16} ${h * 0.25} q ${Math.cos(a * Math.PI / 180) * 160} ${Math.sin(a * Math.PI / 180) * 60 - 40} ${Math.cos(a * Math.PI / 180) * 260} ${Math.sin(a * Math.PI / 180) * 90 + 60}" stroke="#3f7a3a" stroke-width="18" fill="none" stroke-linecap="round"/>`; }
      break; }
    case 'boardwalk': {
      s += `<rect width="${w}" height="${h}" fill="url(#sky)"/><rect y="${h * 0.42}" width="${w}" height="${h * 0.2}" fill="url(#sea)"/>`;
      s += `<rect y="${h * 0.62}" width="${w}" height="${h * 0.38}" fill="#b98a52"/>`;
      for (let i = 0; i < 30; i++) s += `<line x1="${i * w / 30}" y1="${h * 0.62}" x2="${i * w / 30 - 80}" y2="${h}" stroke="#7a5530" stroke-width="4"/>`;
      s += `<rect x="${w * 0.55}" y="${h * 0.12}" width="${w * 0.42}" height="${h * 0.5}" fill="#e7dcc0" stroke="${C.ink}" stroke-width="6"/><rect x="${w * 0.57}" y="${h * 0.16}" width="${w * 0.38}" height="${h * 0.1}" fill="${C.navy}"/><text x="${w * 0.76}" y="${h * 0.24}" text-anchor="middle" font-family="${F.serif}" font-weight="900" font-size="${h * 0.06}" fill="#f1e6c8">HARDING BROS.</text>`;
      s += `<rect x="${w * 0.6}" y="${h * 0.32}" width="${w * 0.14}" height="${h * 0.3}" fill="#5a6a72" stroke="${C.ink}" stroke-width="4"/><rect x="${w * 0.78}" y="${h * 0.32}" width="${w * 0.14}" height="${h * 0.3}" fill="#5a6a72" stroke="${C.ink}" stroke-width="4"/>`;
      break; }
    case 'yacht': {
      s += `<rect width="${w}" height="${h}" fill="url(#sky)"/><rect y="${h * 0.45}" width="${w}" height="${h * 0.55}" fill="url(#sea)"/>`;
      s += `<path d="M ${w * 0.05} ${h * 0.7} L ${w * 0.95} ${h * 0.7} L ${w * 0.85} ${h * 0.92} L ${w * 0.12} ${h * 0.92} Z" fill="#f4f1ea" stroke="${C.ink}" stroke-width="6"/><rect x="${w * 0.3}" y="${h * 0.52}" width="${w * 0.4}" height="${h * 0.18}" fill="#e2d6b8" stroke="${C.ink}" stroke-width="5"/><line x1="${w * 0.5}" y1="${h * 0.52}" x2="${w * 0.5}" y2="${h * 0.05}" stroke="${C.ink}" stroke-width="8"/>`;
      break; }
    case 'train': {
      s += wall('#6a3a2a');
      s += `<rect x="${w * 0.1}" y="${h * 0.12}" width="${w * 0.8}" height="${h * 0.45}" rx="20" fill="url(#sky)" stroke="${C.ink}" stroke-width="10"/>`;
      s += `<path d="M ${w * 0.1} ${h * 0.45} Q ${w * 0.3} ${h * 0.35} ${w * 0.5} ${h * 0.44} T ${w * 0.9} ${h * 0.42} L ${w * 0.9} ${h * 0.57} L ${w * 0.1} ${h * 0.57} Z" fill="#6a8a5a"/>`;
      for (let i = 0; i < 8; i++) s += `<line x1="${w * 0.15 + i * w * 0.1}" y1="${h * 0.2}" x2="${w * 0.1 + i * w * 0.1}" y2="${h * 0.22}" stroke="#fff" stroke-width="4" opacity="0.6"/>`;
      s += `<rect y="${h * 0.66}" width="${w}" height="${h * 0.34}" fill="#5a2a1e"/>`;
      break; }
    case 'cotton': {
      s += wall('#c8b07c');
      for (let i = 0; i < 8; i++) s += `<line x1="${i * w / 8}" y1="0" x2="${i * w / 8}" y2="${h}" stroke="#8a6a3a" stroke-width="10" opacity="0.4"/>`;
      s += `<rect y="${h * 0.8}" width="${w}" height="${h * 0.2}" fill="#7a5a3a"/>`;
      s += bales(w * 0.05, h * 0.68, 13, o.label || 'COTTON');
      break; }
    case 'wheat': {
      s += `<rect width="${w}" height="${h}" fill="url(#sky)"/><rect y="${h * 0.5}" width="${w}" height="${h * 0.5}" fill="#d9a441"/>`;
      for (let i = 0; i < 70; i++) { const x = (i * 73) % w, y = h * 0.5 + ((i * 41) % (h * 0.5)); s += `<path d="M ${x} ${y + 40} L ${x + 4} ${y - 30}" stroke="#8a5a2b" stroke-width="4"/><ellipse cx="${x + 5}" cy="${y - 36}" rx="7" ry="16" fill="#e8c06a" stroke="#8a5a2b" stroke-width="3"/>`; }
      s += `<rect x="${w * 0.7}" y="${h * 0.2}" width="${w * 0.12}" height="${h * 0.32}" fill="#9a4a3a" stroke="${C.ink}" stroke-width="5"/><path d="M ${w * 0.68} ${h * 0.2} L ${w * 0.76} ${h * 0.08} L ${w * 0.84} ${h * 0.2} Z" fill="#6a2a2a" stroke="${C.ink}" stroke-width="5"/>`;
      break; }
    case 'coffee': {
      s += wall('#a88a62');
      s += `<rect y="${h * 0.8}" width="${w}" height="${h * 0.2}" fill="#5a3d22"/>`;
      s += sacks(w * 0.06, h * 0.7, 12, 'COFFEE');
      break; }
    case 'court': {
      s += wall('#cbb894');
      for (let i = 0; i < 5; i++) s += `<rect x="${w * (0.08 + i * 0.18)}" y="${h * 0.05}" width="${w * 0.1}" height="${h * 0.6}" fill="#b8a27a" stroke="${C.ink}" stroke-width="4"/>`;
      s += `<rect x="${w * 0.2}" y="${h * 0.55}" width="${w * 0.6}" height="${h * 0.45}" fill="#5b3a1e" stroke="${C.ink}" stroke-width="6"/>`;
      break; }
    case 'night': {
      s += `<rect width="${w}" height="${h}" fill="url(#dusk)"/>`;
      for (let i = 0; i < 10; i++) { const bx = i * w / 10, bh = h * (0.3 + ((i * 37) % 40) / 100); s += `<rect x="${bx}" y="${h - bh}" width="${w / 10 + 2}" height="${bh}" fill="#1a1a24" stroke="${C.ink}" stroke-width="3"/>`; for (let k = 0; k < 8; k++) if ((i * 7 + k * 3) % 4 === 0) s += `<rect x="${bx + 16 + (k % 3) * 40}" y="${h - bh + 30 + Math.floor(k / 3) * 60}" width="20" height="30" fill="#ffd77a"/>`; }
      break; }
    case 'ruins': {
      s += `<rect width="${w}" height="${h}" fill="url(#dusk)"/>`;
      for (let i = 0; i < 6; i++) s += `<ellipse cx="${w * (0.1 + i * 0.17)}" cy="${h * 0.35}" rx="${w * 0.12}" ry="${h * 0.12}" fill="#4a4040" opacity="0.6" filter="url(#soft)"/>`;
      for (let i = 0; i < 9; i++) { const bx = i * w / 9, bh = h * (0.25 + ((i * 31) % 35) / 100); s += `<path d="M ${bx} ${h} L ${bx} ${h - bh} L ${bx + w / 30} ${h - bh - 30} L ${bx + w / 18} ${h - bh + 20} L ${bx + w / 9} ${h - bh + 10} L ${bx + w / 9} ${h} Z" fill="#241c1c" stroke="${C.ink}" stroke-width="3"/>`; }
      for (let i = 0; i < 5; i++) s += `<path d="M ${w * (0.1 + i * 0.2)} ${h * 0.7} q 20 -60 0 -120 q 30 40 20 120 Z" fill="#e8742a" opacity="0.85"/>`;
      break; }
    case 'burst': {
      s += `<rect width="${w}" height="${h}" fill="${o.color || C.gold}"/>`;
      const cx = w / 2, cy = h / 2;
      for (let i = 0; i < 36; i++) { const a = i * 10 * Math.PI / 180, a2 = (i * 10 + 5) * Math.PI / 180; s += `<path d="M ${cx} ${cy} L ${cx + Math.cos(a) * 3000} ${cy + Math.sin(a) * 3000} L ${cx + Math.cos(a2) * 3000} ${cy + Math.sin(a2) * 3000} Z" fill="#fff" opacity="0.22"/>`; }
      s += `<rect width="${w}" height="${h}" fill="url(#dots)"/>`;
      break; }
    case 'dark': s += `<rect width="${w}" height="${h}" fill="${o.color || '#2a2420'}"/><rect width="${w}" height="${h}" fill="url(#dots)"/>`; break;
    case 'home': {
      s += wall('#c7a98a');
      s += `<rect x="${w * 0.1}" y="${h * 0.12}" width="${w * 0.28}" height="${h * 0.38}" fill="url(#sky)" stroke="${C.ink}" stroke-width="8"/><line x1="${w * 0.24}" y1="${h * 0.12}" x2="${w * 0.24}" y2="${h * 0.5}" stroke="${C.ink}" stroke-width="6"/>`;
      s += `<path d="M ${w * 0.6} ${h * 0.1} q 40 30 0 60 q -40 30 0 60" stroke="#8a4a3a" stroke-width="6" fill="none" opacity="0.5"/>`;
      s += `<rect y="${h * 0.75}" width="${w}" height="${h * 0.25}" fill="#8a5a3a"/>`;
      break; }
    default: s += wall(o.color || C.paper);
  }
  return s;
}

// ---------- comic primitives ----------
function panel(p, inner) {
  const id = 'clip' + Math.random().toString(36).slice(2, 8);
  return `<g filter="url(#shadow)"><rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="#fff"/></g><clipPath id="${id}"><rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}"/></clipPath><g clip-path="url(#${id})"><g transform="translate(${p.x} ${p.y})">${inner}</g></g><rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="none" stroke="${C.ink}" stroke-width="7"/>`;
}
function caption(c) {
  const w = c.w || 560, pad = 18;
  const t = bi(c.en, c.zh, c.x + pad, c.y + pad, { size: c.size || 28, font: F.serif, weight: 700, maxW: w - pad * 2, zsize: c.zsize || 24, zfont: F.zhs, zweight: 600 });
  return `<g filter="url(#shadow)"><rect x="${c.x}" y="${c.y}" width="${w}" height="${t.h + pad * 2}" fill="${c.color || '#f6d77a'}" stroke="${C.ink}" stroke-width="5"/></g>${t.svg}`;
}
function bubble(b) {
  const w = b.w || 460, pad = 26;
  const t = bi(b.en, b.zh, b.x + w / 2, b.y + pad, { size: b.size || 30, font: F.comic, weight: 700, maxW: w - pad * 2, anchor: 'middle', zsize: b.zsize || 25 });
  const h = t.h + pad * 2;
  const cx = b.x + w / 2, cy = b.y + h / 2;
  let shape;
  if (b.kind === 'shout') {
    let pts = []; const n = 22;
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, r = i % 2 ? 1.0 : 1.18; pts.push(`${cx + Math.cos(a) * (w / 2 + 20) * r},${cy + Math.sin(a) * (h / 2 + 20) * r}`); }
    shape = `<polygon points="${pts.join(' ')}" fill="#fff" stroke="${C.ink}" stroke-width="6"/>`;
  } else if (b.kind === 'thought') {
    shape = `<rect x="${b.x}" y="${b.y}" width="${w}" height="${h}" rx="${h / 2}" fill="#fff" stroke="${C.ink}" stroke-width="5" stroke-dasharray="14 8"/>`;
  } else shape = `<rect x="${b.x}" y="${b.y}" width="${w}" height="${h}" rx="40" fill="#fff" stroke="${C.ink}" stroke-width="6"/>`;
  let tail = '';
  if (b.tx !== undefined) {
    if (b.kind === 'thought') tail = `<circle cx="${(cx * 2 + b.tx) / 3}" cy="${(b.y + h + b.ty) / 2}" r="14" fill="#fff" stroke="${C.ink}" stroke-width="4"/><circle cx="${b.tx}" cy="${b.ty}" r="8" fill="#fff" stroke="${C.ink}" stroke-width="4"/>`;
    else { const by = b.ty > cy ? b.y + h - 8 : b.y + 8; tail = `<path d="M ${cx - 30} ${by} L ${b.tx} ${b.ty} L ${cx + 30} ${by} Z" fill="#fff" stroke="${C.ink}" stroke-width="6" stroke-linejoin="round"/><rect x="${cx - 34}" y="${by - (b.ty > cy ? 10 : -2)}" width="68" height="10" fill="#fff"/>`; }
  }
  return `<g>${tail}${shape}${b.kind === 'shout' ? '' : ''}${tail && b.kind !== 'thought' ? `<rect x="${cx - 26}" y="${(b.ty > cy ? b.y + h - 12 : b.y + 2)}" width="52" height="10" fill="#fff"/>` : ''}${t.svg}</g>`;
}
function sfx(f) {
  const t = tblock(f.t, 0, 0, { size: f.size || 90, font: f.font === 'cond' ? F.cond : F.title, weight: f.font === 'cond' ? 700 : 400, anchor: 'middle', fill: f.color || C.red, stroke: C.ink, sw: 10, ls: 3 });
  const z = f.zh ? tblock(f.zh, 0, (f.size || 90) * 1.0, { size: (f.size || 90) * 0.42, font: F.zh, weight: 900, anchor: 'middle', fill: '#fff', stroke: C.ink, sw: 6 }) : { svg: '' };
  return `<g transform="translate(${f.x} ${f.y}) rotate(${f.rot || -8})">${t.svg}${z.svg}</g>`;
}

// ---------- info primitives ----------
function header(tag, title, o = {}) {
  let s = '';
  if (tag) { const tw = measure(tag.en, 30, F.cond, 700) + 2 * 30 + measure(tag.zh, 28, F.zh, 700) + 40;
    s += `<g transform="translate(70 46)"><rect width="${Math.min(tw, 900)}" height="54" fill="${tag.color || C.red}" stroke="${C.ink}" stroke-width="4"/><text x="20" y="38" font-family="${F.cond}" font-weight="700" font-size="30" fill="#fff" letter-spacing="2">${esc(tag.en)}</text><text x="${20 + measure(tag.en, 30, F.cond, 700) + 2 * 30}" y="38" font-family="${F.zh}" font-weight="700" font-size="28" fill="#ffe9b0">${esc(tag.zh)}</text></g>`; }
  if (title) {
    const t = tblock(title.en, 70, 116, { size: o.size || 54, font: F.serif, weight: 900, maxW: 1780 });
    const z = tblock(title.zh, 70, 120 + t.h, { size: (o.size || 54) * 0.72, font: F.zhs, weight: 700, fill: C.sepia, maxW: 1780 });
    s += t.svg + z.svg;
    return { svg: s, h: 120 + t.h + z.h + 20 };
  }
  return { svg: s, h: 120 };
}
function table(e) {
  const { x, y, w } = e; const cols = e.cols; const n = cols.length;
  const widths = e.widths ? e.widths.map(f => f * w) : cols.map(() => w / n);
  const size = e.size || 28, zsize = e.zsize || Math.round(size * 0.85);
  let s = ''; let yy = y;
  const cell = (en, zh, cx, cw, isHead, yy) => bi(en, zh, cx + 16, yy, { size, font: isHead ? F.cond : F.comic, weight: 700, maxW: cw - 32, zsize, fill: isHead ? '#fff' : C.ink, zfill: isHead ? '#ffe3a0' : '#5a4a36', lh: size * 1.18 });
  const rows = [{ cells: cols, head: true }, ...e.rows.map((r, i) => ({ cells: r, i }))];
  rows.forEach((r, ri) => {
    if (!r.head && e.reveal && (e.rowAt ? e.rowAt[ri - 1] : ri - 1 + (e.at || 0)) > e.step) return;
    const h = Math.max(...r.cells.map((c, i) => cell(c[0], c[1], 0, widths[i], r.head, 0).h)) + 22;
    const hl = !r.head && e.hl && e.hl.includes(ri - 1);
    s += `<rect x="${x}" y="${yy}" width="${w}" height="${h}" fill="${r.head ? (e.headColor || C.navy) : (hl ? '#f6d77a' : (ri % 2 ? '#fbf3df' : '#efe3c4'))}" stroke="${C.ink}" stroke-width="3"/>`;
    let cx = x;
    r.cells.forEach((c, i) => {
      s += cell(c[0], c[1], cx, widths[i], r.head, yy + 11).svg;
      if (i) s += `<line x1="${cx}" y1="${yy}" x2="${cx}" y2="${yy + h}" stroke="${C.ink}" stroke-width="2" opacity="0.5"/>`;
      cx += widths[i];
    });
    yy += h;
  });
  return s;
}
// Line/price chart. series: [{pts:[[x,y]...], color, label}] ; xLabels; annotations
function lineChart(e) {
  const { x, y, w, h } = e; const step = e.step ?? 99;
  const [x0, x1] = e.xr, [y0, y1] = e.yr;
  const px = v => x + 90 + (v - x0) / (x1 - x0) * (w - 130), py = v => y + h - 60 - (v - y0) / (y1 - y0) * (h - 100);
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fbf5e4" stroke="${C.ink}" stroke-width="4"/>`;
  if (e.yLabel) s += bi(e.yLabel[0], e.yLabel[1], x + 14, y + 8, { size: 20, zsize: 18, font: F.cond, weight: 700, fill: C.grey }).svg;
  const yt = e.yTicks || [];
  yt.forEach(v => { s += `<line x1="${px(x0)}" y1="${py(v)}" x2="${x + w - 30}" y2="${py(v)}" stroke="#d8c9a6" stroke-width="2"/><text x="${px(x0) - 12}" y="${py(v) + 8}" text-anchor="end" font-family="${F.cond}" font-size="22" fill="${C.grey}">${(e.yPre || '') + (e.yDec != null ? v.toFixed(e.yDec) : v) + (e.ySuf || '')}</text>`; });
  (e.xTicks || []).forEach(([v, en, zh]) => { s += `<text x="${px(v)}" y="${y + h - 32}" text-anchor="middle" font-family="${F.cond}" font-size="20" fill="${C.grey}">${esc(en)}</text>${zh ? `<text x="${px(v)}" y="${y + h - 8}" text-anchor="middle" font-family="${F.zh}" font-size="18" fill="${C.grey}">${esc(zh)}</text>` : ''}`; });
  s += `<line x1="${px(x0)}" y1="${py(y0)}" x2="${x + w - 30}" y2="${py(y0)}" stroke="${C.ink}" stroke-width="3"/><line x1="${px(x0)}" y1="${py(y0)}" x2="${px(x0)}" y2="${y + 40}" stroke="${C.ink}" stroke-width="3"/>`;
  (e.bands || []).filter(b => (b.at || 0) <= step).forEach(b => {
    s += `<rect x="${px(b.x0 ?? x0)}" y="${py(b.y1)}" width="${px(b.x1 ?? x1) - px(b.x0 ?? x0)}" height="${py(b.y0) - py(b.y1)}" fill="${b.color || C.gold}" opacity="${b.op || 0.22}"/>`;
    if (b.label) s += bi(b.label[0], b.label[1], px(b.lx ?? (b.x0 ?? x0)) + 10, py(b.y1) + 6, { size: 23, zsize: 21, font: F.cond, weight: 700, fill: b.tc || C.brown }).svg;
  });
  (e.hlines || []).filter(l => (l.at || 0) <= step).forEach(l => {
    s += `<line x1="${px(l.x0 ?? x0)}" y1="${py(l.v)}" x2="${px(l.x1 ?? x1)}" y2="${py(l.v)}" stroke="${l.color || C.red}" stroke-width="4" stroke-dasharray="14 8"/>`;
    if (l.label) s += bi(l.label[0], l.label[1], px(l.lx ?? (l.x1 ?? x1)) - 8, py(l.v) - (l.below ? -8 : 58), { size: 23, zsize: 21, font: F.cond, weight: 700, fill: l.color || C.red, anchor: 'end' }).svg;
  });
  e.series.forEach(se => {
    const n = se.reveal ? se.reveal.filter(r => r <= step).length : se.pts.length;
    const pts = se.reveal ? se.pts.slice(0, Math.max(...se.reveal.map((r, i) => r <= step ? i + 1 : 0), 0)) : se.pts;
    if ((se.at || 0) > step || pts.length < 2) return;
    const d = pts.map((p, i) => `${i ? 'L' : 'M'} ${px(p[0]).toFixed(1)} ${py(p[1]).toFixed(1)}`).join(' ');
    s += `<path d="${d}" fill="none" stroke="${C.ink}" stroke-width="${(se.width || 6) + 4}" stroke-linejoin="round" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${se.color || C.blue}" stroke-width="${se.width || 6}" stroke-linejoin="round" stroke-linecap="round" ${se.dash ? `stroke-dasharray="${se.dash}"` : ''}/>`;
    if (se.label) { const lp = pts[pts.length - 1]; s += bi(se.label[0], se.label[1], px(lp[0]) - 6, py(lp[1]) + (se.labelBelow ? 18 : -62), { size: 24, zsize: 21, font: F.cond, weight: 700, fill: se.color || C.blue, anchor: 'end' }).svg; }
  });
  (e.notes || []).filter(nn => (nn.at || 0) <= step).forEach(nn => {
    const X = px(nn.x), Y = py(nn.y);
    s += `<circle cx="${X}" cy="${Y}" r="11" fill="${nn.color || C.red}" stroke="${C.ink}" stroke-width="4"/>`;
    const bw = nn.w || 260; const bx = X + (nn.dx ?? 20), by = Y + (nn.dy ?? -110);
    const t = bi(nn.en, nn.zh, bx + 10, by + 8, { size: 24, zsize: 21, font: F.comic, weight: 700, maxW: bw - 20 });
    s += `<line x1="${X}" y1="${Y}" x2="${bx + bw / 2}" y2="${by + (by < Y ? t.h + 16 : 0)}" stroke="${C.ink}" stroke-width="3"/><rect x="${bx}" y="${by}" width="${bw}" height="${t.h + 16}" fill="#fff" stroke="${C.ink}" stroke-width="3" rx="8"/>${t.svg}`;
  });
  if (e.illustrative) s += `<text x="${x + w - 20}" y="${y + 34}" text-anchor="end" font-family="${F.cond}" font-size="20" fill="${C.grey}">ILLUSTRATIVE · 示意图</text>`;
  return s;
}
function barChart(e) {
  const { x, y, w, h } = e; const step = e.step ?? 99;
  const max = e.max || Math.max(...e.bars.map(b => Math.abs(b.v)));
  const hasNeg = e.bars.some(b => b.v < 0);
  const base = hasNeg ? y + h * 0.55 : y + h - 96;
  const scale = (hasNeg ? h * 0.42 : h - 140) / max;
  const bw = (w - 60) / e.bars.length;
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fbf5e4" stroke="${C.ink}" stroke-width="4"/><line x1="${x + 20}" y1="${base}" x2="${x + w - 20}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  e.bars.forEach((b, i) => {
    if ((b.at || 0) > step) return;
    const bh = Math.abs(b.v) * scale, bx = x + 30 + i * bw + bw * 0.15, ww = bw * 0.7;
    const by = b.v >= 0 ? base - bh : base;
    s += `<rect x="${bx}" y="${by}" width="${ww}" height="${Math.max(bh, 3)}" fill="${b.color || (b.v >= 0 ? C.up : C.down)}" stroke="${C.ink}" stroke-width="4"/>`;
    s += `<text x="${bx + ww / 2}" y="${b.v >= 0 ? by - 12 : by + bh + 34}" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="${e.vsize || 28}" fill="${C.ink}">${esc(b.vl ?? b.v)}</text>`;
    const lb = bi(b.en, b.zh, bx + ww / 2, hasNeg ? (b.v >= 0 ? base + 10 : base - 70) : base + 8, { size: 25, zsize: 22, font: F.cond, weight: 700, anchor: 'middle', maxW: bw - 6 });
    s += lb.svg;
  });
  return s;
}
// Flow: boxes with arrows
function flow(e) {
  const step = e.step ?? 99; let s = '';
  const n = e.nodes.length; const dir = e.dir || 'h';
  const bw = e.bw || (dir === 'h' ? (e.w - (n - 1) * 60) / n : e.w), bh = e.bh || 200;
  e.nodes.forEach((nd, i) => {
    if ((nd.at ?? i) > step) return;
    const bx = dir === 'h' ? e.x + i * (bw + 60) : e.x, by = dir === 'h' ? e.y : e.y + i * (bh + 40);
    s += `<g filter="url(#shadow)"><rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="14" fill="${nd.color || '#fbf3df'}" stroke="${C.ink}" stroke-width="5"/></g>`;
    if (nd.num !== undefined) s += `<circle cx="${bx + 34}" cy="${by + 34}" r="24" fill="${C.red}" stroke="${C.ink}" stroke-width="4"/><text x="${bx + 34}" y="${by + 44}" text-anchor="middle" font-family="${F.title}" font-size="30" fill="#fff">${nd.num}</text>`;
    const top = nd.num !== undefined ? 64 : 18;
    const pre = fitBi(nd.en, nd.zh, bx + bw / 2, 0, bw - 34, bh - top - 14, { max: e.max || 32, font: F.comic, weight: 700, anchor: 'middle' });
    s += fitBi(nd.en, nd.zh, bx + bw / 2, by + top + (bh - top - 14 - pre.h) / 2, bw - 34, bh - top - 14, { max: e.max || 32, font: F.comic, weight: 700, anchor: 'middle' }).svg;
    if (i < n - 1 && (e.nodes[i + 1].at ?? i + 1) <= step) {
      if (dir === 'h') s += `<path d="M ${bx + bw + 8} ${by + bh / 2} L ${bx + bw + 48} ${by + bh / 2}" stroke="${C.ink}" stroke-width="8"/><path d="M ${bx + bw + 40} ${by + bh / 2 - 16} L ${bx + bw + 58} ${by + bh / 2} L ${bx + bw + 40} ${by + bh / 2 + 16} Z" fill="${C.ink}"/>`;
      else s += `<path d="M ${bx + bw / 2} ${by + bh + 4} L ${bx + bw / 2} ${by + bh + 30}" stroke="${C.ink}" stroke-width="8"/><path d="M ${bx + bw / 2 - 14} ${by + bh + 24} L ${bx + bw / 2} ${by + bh + 40} L ${bx + bw / 2 + 14} ${by + bh + 24} Z" fill="${C.ink}"/>`;
    }
  });
  return s;
}
function cards(e) {
  const step = e.step ?? 99; let s = '';
  const cols = e.cols || 2; const cw = (e.w - (cols - 1) * 30) / cols; const ch = e.ch || 150;
  e.items.forEach((it, i) => {
    if ((it.at ?? 0) > step) return;
    const cx = e.x + (i % cols) * (cw + 30), cy = e.y + Math.floor(i / cols) * (ch + 24);
    s += `<g filter="url(#shadow)"><rect x="${cx}" y="${cy}" width="${cw}" height="${ch}" rx="10" fill="${it.color || '#fbf3df'}" stroke="${C.ink}" stroke-width="4"/></g>`;
    s += `<rect x="${cx}" y="${cy}" width="74" height="${ch}" rx="10" fill="${it.tagColor || C.navy}" stroke="${C.ink}" stroke-width="4"/><text x="${cx + 37}" y="${cy + ch / 2 + 16}" text-anchor="middle" font-family="${F.title}" font-size="44" fill="#fff">${esc(it.n ?? i + 1)}</text>`;
    const pre = fitBi(it.en, it.zh, cx + 92, 0, cw - 116, ch - 28, { max: e.max || 34, font: F.comic, weight: 700 });
    const t = fitBi(it.en, it.zh, cx + 92, cy + (ch - pre.h) / 2, cw - 116, ch - 28, { max: e.max || 34, font: F.comic, weight: 700 });
    s += t.svg;
  });
  return s;
}
function quoteBox(e) {
  const w = e.w || 1500;
  const maxH = (e.bottom || 815) - e.y - 80 - (e.src ? 40 : 0);
  const t = fitBi(`“${e.en}”`, `「${e.zh}」`, e.x + w / 2, e.y + 40, w - 120, maxH, { max: e.size || 46, zr: (e.zsize && e.size) ? e.zsize / e.size : 0.84, font: F.serif, weight: 700, zfont: F.zhs, zweight: 700, anchor: 'middle', gap: 18, zfill: C.sepia });
  let s = `<g filter="url(#shadow)"><rect x="${e.x}" y="${e.y}" width="${w}" height="${t.h + 80 + (e.src ? 40 : 0)}" fill="${e.color || '#fbf3df'}" stroke="${C.ink}" stroke-width="5"/></g>`;
  s += `<text x="${e.x + 30}" y="${e.y + 110}" font-family="${F.serif}" font-size="160" fill="${C.gold}" opacity="0.6">“</text>`;
  s += t.svg;
  if (e.src) s += `<text x="${e.x + w - 40}" y="${e.y + t.h + 90}" text-anchor="end" font-family="${F.cond}" font-size="24" fill="${C.grey}">${esc(e.src)}</text>`;
  return s;
}
// Capital timeline: items [{en, zh, v, vl, note:[en,zh], at}] ; v<0 = debt
function timeline(e) {
  const step = e.step ?? 99; const { x, y, w, h } = e;
  const n = e.items.length, bw = (w - 40) / n;
  const maxLog = Math.log10(Math.max(...e.items.map(i => Math.abs(i.v) || 1)));
  const minLog = e.minLog ?? 0;
  const base = y + h * (e.items.some(i => i.v < 0) ? 0.62 : 0.8);
  const upH = base - y - 70, dnH = y + h - base - 90;
  const sc = v => (Math.log10(Math.max(Math.abs(v), 1)) - minLog) / (maxLog - minLog);
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#fbf5e4" stroke="${C.ink}" stroke-width="4"/><line x1="${x + 10}" y1="${base}" x2="${x + w - 10}" y2="${base}" stroke="${C.ink}" stroke-width="3"/>`;
  let prev = null;
  e.items.forEach((it, i) => {
    if ((it.at ?? 0) > step) return;
    const cx = x + 20 + i * bw + bw / 2, ww = bw * 0.62;
    const hh = Math.max(4, sc(it.v) * (it.v >= 0 ? upH : dnH));
    const top = it.v >= 0 ? base - hh : base;
    const col = it.color || (it.v < 0 ? C.down : it.v === 0 ? C.grey : C.up);
    s += `<rect x="${cx - ww / 2}" y="${top}" width="${ww}" height="${it.v === 0 ? 4 : hh}" fill="${col}" stroke="${C.ink}" stroke-width="3"/>`;
    const ty = it.v >= 0 ? top - 10 : top + hh + 26;
    s += `<text x="${cx}" y="${ty}" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="${e.vsize || 22}" fill="${C.ink}">${esc(it.vl)}</text>`;
    const pt = [cx, it.v >= 0 ? top : top + hh];
    if (prev) s += `<line x1="${prev[0]}" y1="${prev[1]}" x2="${pt[0]}" y2="${pt[1]}" stroke="${C.sepia}" stroke-width="2" stroke-dasharray="6 5"/>`;
    prev = pt;
    s += bi(it.en, it.zh, cx, it.v >= 0 ? base + 8 : base - 8 - (e.lsize || 18) * 2.3, { size: e.lsize || 18, zsize: (e.lsize || 18) - 2, font: F.cond, weight: 700, anchor: 'middle', maxW: bw - 4 }).svg;
  });
  return s;
}
function textEl(e) { return bi(e.en, e.zh, e.x, e.y, { size: e.size || 30, zsize: e.zsize, font: e.font || F.comic, weight: e.weight || 700, maxW: e.w, anchor: e.anchor, fill: e.fill, zfill: e.zfill }).svg; }
function boxEl(e) {
  const t = e.h ? fitBi(e.en, e.zh, e.x + (e.anchor === 'middle' ? e.w / 2 : 24), e.y + 16, e.w - 48, e.h - 32, { max: e.size || 28, font: F.comic, weight: 700, anchor: e.anchor })
    : bi(e.en, e.zh, e.x + (e.anchor === 'middle' ? e.w / 2 : 24), e.y + 20, { size: e.size || 28, zsize: e.zsize, font: F.comic, weight: 700, maxW: e.w - 48, anchor: e.anchor });
  return `<g filter="url(#shadow)"><rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h || t.h + 40}" rx="12" fill="${e.color || '#fbf3df'}" stroke="${C.ink}" stroke-width="5"/></g>${e.title ? '' : ''}${t.svg}`;
}

// ---------- shot renderers ----------
function stageFrame(inner, bgCol) {
  return `<rect width="${W}" height="${STAGE_H}" fill="${bgCol || '#2a2420'}"/><rect width="${W}" height="${STAGE_H}" fill="url(#dots)" opacity="0.5"/>${inner}`;
}
function renderComic(shot, step) {
  let s = '';
  (shot.panels || []).forEach(p => {
    if ((p.at || 0) > step) return;
    let inner = bg(p.bg, p.w, p.h, p.bgo || {});
    (p.props || []).filter(pr => (pr.at || 0) <= step).forEach(pr => { inner += PROPS[pr.t](pr); });
    (p.chars || []).filter(ch => (ch.at || 0) <= step && (ch.until === undefined || ch.until >= step)).forEach(ch => { inner += person(Object.assign({}, ch, (ch.exprAt && ch.exprAt[step]) ? { expr: ch.exprAt[step] } : {})); });
    if (p.tint) inner += `<rect width="${p.w}" height="${p.h}" fill="${p.tint}" opacity="0.25"/>`;
    inner += `<rect width="${p.w}" height="${p.h}" fill="url(#vign)"/>`;
    s += panel(p, inner);
  });
  (shot.sfx || []).filter(f => (f.at || 0) <= step).forEach(f => s += sfx(f));
  (shot.bubbles || []).filter(b => (b.at || 0) <= step && (b.until === undefined || b.until >= step)).forEach(b => s += bubble(b));
  (shot.caps || []).filter(c => (c.at || 0) <= step && (c.until === undefined || c.until >= step)).forEach(c => s += caption(c));
  return stageFrame(s, shot.bgCol);
}
const PROPS = {
  ticker: p => ticker(p.x, p.y, p.s || 1),
  board: p => quoteBoard(p.x, p.y, p.w, p.h, p.rows, { hl: p.hl, color: p.color }),
  paper: p => newspaper(p.x, p.y, p.w, p.h, p.en, p.zh, p),
  bales: p => bales(p.x, p.y, p.n, p.label),
  sacks: p => sacks(p.x, p.y, p.n, p.label),
  money: p => moneyStack(p.x, p.y, p.n),
  crowd: p => crowd(p.w, p.y, p.n, p),
  sign: p => { const t = bi(p.en, p.zh, p.x + p.w / 2, p.y + 14, { size: p.size || 30, zsize: p.zsize || 24, font: F.serif, weight: 900, anchor: 'middle', maxW: p.w - 30, fill: p.fill || '#f4e8cc', zfill: p.zfill || '#f6d77a' }); return `<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${t.h + 28}" fill="${p.color || C.navy}" stroke="${C.ink}" stroke-width="5"/>${t.svg}`; },
  desk: p => `<rect x="${p.x}" y="${p.y}" width="${p.w}" height="${p.h}" fill="url(#wood)" stroke="${C.ink}" stroke-width="6"/>`,
  svg: p => p.svg,
  tickets: p => { let s = ''; for (let i = 0; i < (p.n || 7); i++) s += `<g transform="translate(${p.x + i * 48} ${p.y + (i % 2) * 10}) rotate(${(i - 3) * 6})"><rect width="110" height="70" fill="#f5b8c6" stroke="${C.ink}" stroke-width="4"/><text x="55" y="30" text-anchor="middle" font-family="${F.type}" font-size="16">${esc(p.text || 'SUGAR 105¼')}</text><text x="55" y="54" text-anchor="middle" font-family="${F.type}" font-size="14">500 SH</text></g>`; return s; },
  telegraph: p => `<g transform="translate(${p.x} ${p.y})"><rect x="-80" y="0" width="160" height="40" fill="#6a4426" stroke="${C.ink}" stroke-width="4"/><rect x="-40" y="-30" width="80" height="30" fill="#b8862a" stroke="${C.ink}" stroke-width="4"/><path d="M 0 -30 L 60 -60" stroke="${C.ink}" stroke-width="8"/><circle cx="60" cy="-60" r="12" fill="#222"/></g>`,
};

function renderInfo(shot, step) {
  let s = `<rect width="${W}" height="${STAGE_H}" fill="url(#paperTex)"/>`;
  s += `<rect x="24" y="24" width="${W - 48}" height="${STAGE_H - 48}" fill="none" stroke="${C.ink}" stroke-width="5"/><rect x="34" y="34" width="${W - 68}" height="${STAGE_H - 68}" fill="none" stroke="${C.ink}" stroke-width="2"/>`;
  const hd = header(shot.tag, shot.title, { size: shot.titleSize });
  s += hd.svg;
  (shot.els || []).forEach(e => {
    if ((e.at || 0) > step || (e.until !== undefined && e.until < step)) return;
    const ee = Object.assign({ step }, e);
    s += ({ table, line: lineChart, bars: barChart, flow, cards, timeline, quote: quoteBox, text: textEl, box: boxEl, comic: el => el.svg, person: el => person(el), svg: el => el.svg })[e.type](ee);
  });
  if (shot.src) s += `<text x="${W - 60}" y="${STAGE_H - 46}" text-anchor="end" font-family="${F.cond}" font-size="22" fill="${C.grey}">${esc(shot.src)}</text>`;
  return s;
}
function renderTitle(shot, step) {
  let s = bg('burst', W, STAGE_H, { color: shot.color || C.red });
  s += `<rect width="${W}" height="${STAGE_H}" fill="#000" opacity="0.15"/>`;
  if (shot.kicker) s += tblock(shot.kicker.en + '  ·  ' + shot.kicker.zh, W / 2, 140, { size: 40, font: F.cond, weight: 700, anchor: 'middle', fill: '#fff', stroke: C.ink, sw: 6, ls: 4 }).svg;
  const t = tblock(shot.en, W / 2, 230, { size: shot.size || 130, font: F.title, anchor: 'middle', fill: '#fff', stroke: C.ink, sw: 14, maxW: 1700, ls: 3, lh: (shot.size || 130) * 1.0 });
  s += t.svg;
  s += tblock(shot.zh, W / 2, 250 + t.h, { size: (shot.size || 130) * 0.5, font: F.zh, weight: 900, anchor: 'middle', fill: '#ffe9a8', stroke: C.ink, sw: 10, maxW: 1700 }).svg;
  if (shot.sub) s += bi(shot.sub.en, shot.sub.zh, W / 2, 330 + t.h + (shot.size || 130) * 0.5, { size: 36, zsize: 32, font: F.serif, weight: 700, anchor: 'middle', fill: '#fff', zfill: '#fff', maxW: 1500 }).svg;
  (shot.chars || []).forEach(ch => s += person(ch));
  return s;
}

// Subtitle band
function subtitle(line) {
  let s = `<rect y="${STAGE_H}" width="${W}" height="${H - STAGE_H}" fill="url(#band)"/><line x1="0" y1="${STAGE_H}" x2="${W}" y2="${STAGE_H}" stroke="${C.gold}" stroke-width="4"/>`;
  if (!line) return s;
  const who = line.who ? `${line.who.en} · ${line.who.zh}` : '';
  let en = line.en, size = 38, zsize = 36;
  let ewrap = wrap(en, size, F.cond, 1700, 500), zwrap = wrap(line.zh, zsize, F.zh, 1700, 500);
  const room = (H - STAGE_H) - (who ? 58 : 20);
  const tot = () => ewrap.length * size * 1.18 + zwrap.length * zsize * 1.3 + 10;
  while (tot() > room && size > 24) { size -= 2; zsize -= 2; ewrap = wrap(en, size, F.cond, 1760, 500); zwrap = wrap(line.zh, zsize, F.zh, 1760, 500); }
  const total = tot();
  let y0 = STAGE_H + (who ? 44 : 10) + (room - total) / 2;
  if (who) s += `<text x="40" y="${STAGE_H + 34}" font-family="${F.cond}" font-weight="700" font-size="24" fill="${C.gold}" letter-spacing="2">${esc(who)}</text>`;
  s += tblock(ewrap.join('\n'), W / 2, y0, { size, font: F.cond, weight: 500, anchor: 'middle', fill: '#ffffff', lh: size * 1.18 }).svg;
  s += tblock(zwrap.join('\n'), W / 2, y0 + ewrap.length * size * 1.18 + 10, { size: zsize, font: F.zh, weight: 500, anchor: 'middle', fill: '#ffd86b', lh: zsize * 1.3 }).svg;
  return s;
}

function renderFrame(shot, step, line, meta) {
  let body;
  if (shot.kind === 'comic') body = renderComic(shot, step);
  else if (shot.kind === 'info') body = renderInfo(shot, step);
  else if (shot.kind === 'title') body = renderTitle(shot, step);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${defs()}${body}`;
  if (meta && meta.ep) s += `<g transform="translate(${W - 40} 40)"><text text-anchor="end" y="22" font-family="${F.cond}" font-weight="700" font-size="22" fill="${shot.kind === 'info' ? C.grey : '#f4e8cc'}" opacity="0.85" letter-spacing="2">${esc(meta.ep)}</text></g>`;
  s += subtitle(line);
  return s + '</svg>';
}
window.renderFrame = renderFrame;
