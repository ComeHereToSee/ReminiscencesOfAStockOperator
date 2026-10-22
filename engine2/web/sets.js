// engine2 sets: period environments drawn as parallax layers with ambient motion.
// drawSet(name, o, t) -> [{depth, svg}] ; depth 0.25 = far background, 1 = action plane, 1.15 = foreground.
'use strict';

// halftone dot tiles are pre-rendered bitmaps (vector dot patterns are slow to paint full-screen)
let DOT_TILE = '', DOT_TILE_L = '';
function makeDotTiles() {
  const mk = (size, step, r, op, offset) => { const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d'); g.fillStyle = `rgba(0,0,0,${op})`;
    for (let y = 0; y < size; y += step) for (let x = 0; x < size; x += step) { g.beginPath(); g.arc(x + step / 4, y + step / 4, r, 0, 7); g.fill(); if (offset) { g.beginPath(); g.arc(x + step * 3 / 4, y + step * 3 / 4, r, 0, 7); g.fill(); } }
    return c.toDataURL('image/png'); };
  DOT_TILE = mk(96, 12, 2, 0.16, true); DOT_TILE_L = mk(90, 9, 1.3, 0.1, false);
}
function defsGlobal() {
  if (!DOT_TILE) makeDotTiles();
  return `<defs>
  <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fb8c8"/><stop offset=".7" stop-color="#e9d9b2"/><stop offset="1" stop-color="#f2e2bd"/></linearGradient>
  <linearGradient id="gDusk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d2036"/><stop offset=".6" stop-color="#5a3c4a"/><stop offset="1" stop-color="#b8693f"/></linearGradient>
  <linearGradient id="gNight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e1222"/><stop offset="1" stop-color="#2c2840"/></linearGradient>
  <linearGradient id="gSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a98a8"/><stop offset="1" stop-color="#1c4f60"/></linearGradient>
  <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9b28a"/><stop offset="1" stop-color="#a88e64"/></linearGradient>
  <linearGradient id="gWallD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6e5a40"/><stop offset="1" stop-color="#3e3122"/></linearGradient>
  <linearGradient id="gWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a4f2c"/><stop offset="1" stop-color="#4a2e18"/></linearGradient>
  <linearGradient id="gPaper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7ecd2"/><stop offset="1" stop-color="#e9d6ae"/></linearGradient>
  <linearGradient id="gShaft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff3c8" stop-opacity=".55"/><stop offset="1" stop-color="#fff3c8" stop-opacity="0"/></linearGradient>
  <radialGradient id="gLamp" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe7a0" stop-opacity=".85"/><stop offset="1" stop-color="#ffe7a0" stop-opacity="0"/></radialGradient>
  <radialGradient id="gFire" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffb04a" stop-opacity=".9"/><stop offset="1" stop-color="#ff5a1a" stop-opacity="0"/></radialGradient>
  <radialGradient id="gSpot" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>
  <pattern id="pDots" width="96" height="96" patternUnits="userSpaceOnUse"><image href="${DOT_TILE}" width="96" height="96"/></pattern>
  <pattern id="pDotsL" width="90" height="90" patternUnits="userSpaceOnUse"><image href="${DOT_TILE_L}" width="90" height="90"/></pattern>
  <pattern id="pBoards" width="200" height="40" patternUnits="userSpaceOnUse"><rect width="200" height="40" fill="#6e4628"/><path d="M0 39 H200 M120 0 V40" stroke="#4a2e18" stroke-width="3"/><path d="M0 14 Q50 8 100 15 T200 12" stroke="#5a3a20" stroke-width="2" fill="none"/></pattern>
  <pattern id="pPanel" width="240" height="300" patternUnits="userSpaceOnUse"><rect width="240" height="300" fill="#5b3a20"/><rect x="18" y="18" width="204" height="264" fill="#6b4528" stroke="#3e2512" stroke-width="5"/><rect x="30" y="30" width="180" height="240" fill="none" stroke="#7c5332" stroke-width="3"/></pattern>
  <pattern id="pPaperTex" width="300" height="300" patternUnits="userSpaceOnUse"><rect width="300" height="300" fill="#f3e6c6"/><path d="M0 50 Q80 40 150 55 T300 47 M0 160 Q90 150 180 166 T300 158 M0 240 Q70 250 150 236 T300 246" stroke="#cdb689" stroke-width="1" fill="none" opacity=".5"/></pattern>
  <pattern id="pChalk" width="400" height="300" patternUnits="userSpaceOnUse"><rect width="400" height="300" fill="#1f3a2d"/><path d="M20 60 q60 -10 120 4 M220 200 q80 -14 150 6 M60 250 q40 8 90 -4" stroke="#fff" stroke-width="2" opacity=".05" fill="none"/></pattern>
  <filter id="fShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="7" dy="9" stdDeviation="0" flood-color="#000" flood-opacity=".45"/></filter>
  <filter id="fSoftShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000" flood-opacity=".35"/></filter>
  <filter id="fBlur6"><feGaussianBlur stdDeviation="6"/></filter>
  <filter id="fBlur2"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>`;
}

// ---------- reusable pieces ----------
function quoteBoardSvg(x, y, w, h, rows, t, o = {}) {
  // rows[0] = headers; values may change over time via o.seq: [{t, r, c, v}]
  const cols = rows[0].length;
  const cw = w / cols, rh = h / rows.length;
  let s = `<g transform="translate(${x} ${y})"><rect x="-16" y="-16" width="${w + 32}" height="${h + 32}" fill="#5e3c20" stroke="${PAL.ink}" stroke-width="6"/><rect width="${w}" height="${h}" fill="${o.color || PAL.board}" stroke="${PAL.ink}" stroke-width="4"/>`;
  s += `<rect width="${w}" height="${h}" fill="url(#gSpot)"/>`;
  for (let r = 0; r < rows.length; r++) for (let c = 0; c < cols; c++) {
    let v = rows[r][c], prevV = null, ch = -1;
    for (const e of (o.seq || [])) if (e.r === r && e.c === c && t >= e.t) { prevV = v; v = e.v; ch = e.t; }
    const hl = (o.hl && o.hl[0] === r && o.hl[1] === c) || (ch >= 0 && t - ch < 1.2);
    const cx = c * cw + cw / 2, cy = r * rh + rh * 0.68;
    const fs = Math.min(rh * 0.56, cw * 0.28, 44);
    if (hl) s += `<rect x="${c * cw + 5}" y="${r * rh + 5}" width="${cw - 10}" height="${rh - 10}" fill="${PAL.gold}" opacity="${ch >= 0 ? clamp(1.2 - (t - ch)) * 0.9 : 0.85}"/>`;
    const font = r === 0 ? F.cond : "'Special Elite', monospace";
    const col = r === 0 ? '#f0e2b0' : (hl ? PAL.ink : '#f4f1e6');
    if (ch >= 0 && t - ch < 0.35 && prevV !== null) {
      const p = (t - ch) / 0.35;
      s += `<g opacity="${1 - p}"><text x="${cx}" y="${cy - p * rh * 0.5}" text-anchor="middle" font-family="${font}" font-size="${fs}" fill="${col}">${esc(prevV)}</text></g>`;
      s += `<g opacity="${p}"><text x="${cx}" y="${cy + (1 - p) * rh * 0.5}" text-anchor="middle" font-family="${font}" font-size="${fs}" fill="${col}">${esc(v)}</text></g>`;
    } else s += `<text x="${cx}" y="${cy}" text-anchor="middle" font-family="${font}" font-size="${fs}" fill="${col}" ${r === 0 ? 'font-weight="700"' : ''}>${esc(v)}</text>`;
  }
  for (let c = 1; c < cols; c++) s += `<line x1="${c * cw}" y1="0" x2="${c * cw}" y2="${h}" stroke="#fff" opacity=".18" stroke-width="2"/>`;
  s += `<line x1="0" y1="${rh}" x2="${w}" y2="${rh}" stroke="#fff" opacity=".4" stroke-width="3"/></g>`;
  return s;
}
function tickerSvg(x, y, s, t, o = {}) {
  // glass-dome stock ticker with tape feeding out; tape text scrolls
  const sp = o.speed ?? 60;
  const tape = o.tape || 'SUG 105¼ · BRT 72⅛ · UP 160½ · NP 110 · STL 45¾ · ACP 101 · RDG 111 · ';
  const off = (t * sp) % 600;
  let g = `<g transform="translate(${x} ${y}) scale(${s})">
  <rect x="-40" y="120" width="80" height="230" fill="#5b3a1e" stroke="${PAL.ink}" stroke-width="5"/>
  <rect x="-112" y="100" width="224" height="30" rx="6" fill="#7a5230" stroke="${PAL.ink}" stroke-width="5"/>
  <rect x="-60" y="10" width="120" height="84" fill="#a77b3a" stroke="${PAL.ink}" stroke-width="4"/>
  <g transform="rotate(${(t * 720) % 360} -25 44)"><circle cx="-25" cy="44" r="22" fill="#d9a441" stroke="${PAL.ink}" stroke-width="4"/><path d="M-25 26 V62 M-43 44 H-7" stroke="${PAL.ink}" stroke-width="3"/></g>
  <g transform="rotate(${-(t * 900) % 360} 25 44)"><circle cx="25" cy="44" r="15" fill="#d9a441" stroke="${PAL.ink}" stroke-width="4"/><path d="M25 31 V57" stroke="${PAL.ink}" stroke-width="3"/></g>
  <path d="M -92 100 L -92 -40 Q -92 -134 0 -134 Q 92 -134 92 -40 L 92 100 Z" fill="#cfe6ea" fill-opacity=".35" stroke="${PAL.ink}" stroke-width="5"/>
  <path d="M -62 -94 Q -42 -114 -10 -116" stroke="#fff" stroke-width="9" fill="none" opacity=".75"/>`;
  const path = 'M 60 52 Q 150 60 160 140 Q 170 250 280 270 Q 350 282 380 360';
  g += `<path id="tp${Math.round(x)}" d="${path}" fill="none" stroke="${PAL.ink}" stroke-width="30"/><path d="${path}" fill="none" stroke="#f8f2dc" stroke-width="22"/>`;
  g += `<text font-family="'Special Elite', monospace" font-size="15" fill="#333"><textPath href="#tp${Math.round(x)}" startOffset="${-off}">${esc(tape.repeat(4))}</textPath></text>`;
  return g + '</g>';
}
function clockSvg(x, y, r, t, o = {}) {
  const base = o.time ?? 10.25; // hours
  const hrs = base + t / 3600 * (o.speed || 60);
  const ma = (hrs % 1) * 360, ha = (hrs % 12) / 12 * 360;
  let s = `<g transform="translate(${x} ${y})"><circle r="${r + 10}" fill="#5b3a1e" stroke="${PAL.ink}" stroke-width="5"/><circle r="${r}" fill="#f4ecd6" stroke="${PAL.ink}" stroke-width="4"/>`;
  for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; s += `<line x1="${Math.sin(a) * r * 0.82}" y1="${-Math.cos(a) * r * 0.82}" x2="${Math.sin(a) * r * 0.95}" y2="${-Math.cos(a) * r * 0.95}" stroke="${PAL.ink}" stroke-width="${i % 3 ? 2 : 4}"/>`; }
  s += `<line x1="0" y1="0" x2="${Math.sin(ha * Math.PI / 180) * r * 0.5}" y2="${-Math.cos(ha * Math.PI / 180) * r * 0.5}" stroke="${PAL.ink}" stroke-width="6" stroke-linecap="round"/><line x1="0" y1="0" x2="${Math.sin(ma * Math.PI / 180) * r * 0.78}" y2="${-Math.cos(ma * Math.PI / 180) * r * 0.78}" stroke="${PAL.ink}" stroke-width="3.5" stroke-linecap="round"/><circle r="5" fill="${PAL.ink}"/></g>`;
  return s;
}
function dustSvg(t, n, x0, y0, w, h, seed = 1) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const px = x0 + ((hash(i * 3 + seed) * w + t * (8 + hash(i) * 12)) % w);
    const py = y0 + ((hash(i * 7 + seed) * h + Math.sin(t * 0.5 + i) * 30 + t * 5) % h);
    s += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${(1.5 + hash(i * 11) * 2.5).toFixed(1)}" fill="#fff6d0" opacity="${(0.25 + 0.4 * Math.abs(Math.sin(t + i))).toFixed(2)}"/>`;
  }
  return s;
}
function smokeSvg(t, x, y, n = 6, col = '#d8d0c0', scale = 1, op = 0.35) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const life = ((t * 0.18 + i / n) % 1);
    const r = (40 + life * 140) * scale;
    s += `<circle cx="${x + Math.sin(i * 2 + t * 0.4) * 40 * scale + life * 60 * scale}" cy="${y - life * 360 * scale}" r="${r}" fill="${col}" opacity="${(op * (1 - life)).toFixed(3)}" filter="url(#fBlur6)"/>`;
  }
  return s;
}
function paperRain(t, n, w = 1920, h = 1080, seed = 0) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const sp = 70 + hash(i * 5 + seed) * 90;
    const x = (hash(i * 13 + seed) * w + Math.sin(t * 1.3 + i) * 50) % w;
    const y = ((hash(i * 17 + seed) * h + t * sp) % (h + 100)) - 50;
    const rot = (t * (60 + hash(i) * 200) + i * 40) % 360;
    s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="26" height="18" fill="#f6f0dc" stroke="${PAL.ink}" stroke-width="2" transform="rotate(${rot.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}) scale(1 ${Math.abs(Math.cos(t * 3 + i)).toFixed(2)})"/>`;
  }
  return s;
}
function windowSvg(x, y, w, h, inner) {
  return `<g><rect x="${x - 14}" y="${y - 14}" width="${w + 28}" height="${h + 28}" fill="#4a2e18" stroke="${PAL.ink}" stroke-width="6"/><svg x="${x}" y="${y}" width="${w}" height="${h}" overflow="hidden">${inner}</svg><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${PAL.ink}" stroke-width="4"/><line x1="${x + w / 2}" y1="${y}" x2="${x + w / 2}" y2="${y + h}" stroke="#4a2e18" stroke-width="10"/><line x1="${x}" y1="${y + h * 0.42}" x2="${x + w}" y2="${y + h * 0.42}" stroke="#4a2e18" stroke-width="10"/></g>`;
}
function skylineSvg(w, h, t, o = {}) {
  let s = `<rect width="${w}" height="${h}" fill="${o.night ? 'url(#gNight)' : 'url(#gSky)'}"/>`;
  for (let i = 0; i < 5; i++) { const cx = ((hash(i) * w * 1.4 + t * (6 + i * 2)) % (w * 1.4)) - w * 0.2; s += `<ellipse cx="${cx}" cy="${h * (0.12 + hash(i * 3) * 0.2)}" rx="${80 + hash(i) * 70}" ry="${18 + hash(i * 2) * 10}" fill="#fff" opacity="${o.night ? 0.05 : 0.5}"/>`; }
  for (let i = 0; i < 9; i++) {
    const bx = i * w / 9 - 10, bh = h * (0.35 + hash(i * 5.5) * 0.45), bw = w / 9 + 14;
    s += `<rect x="${bx}" y="${h - bh}" width="${bw}" height="${bh}" fill="${o.night ? '#151826' : (i % 2 ? '#8d8a86' : '#a19d96')}" stroke="${PAL.ink}" stroke-width="2.5"/>`;
    for (let r = 0; r < 8; r++) for (let c = 0; c < 3; c++) {
      const lit = o.night ? hash(i * 31 + r * 7 + c) > 0.55 : false;
      s += `<rect x="${bx + 10 + c * (bw - 20) / 3}" y="${h - bh + 16 + r * 28}" width="${(bw - 20) / 3 - 8}" height="15" fill="${lit ? '#ffd77a' : (o.night ? '#22263a' : '#5d6a72')}" opacity="${lit ? 0.75 + 0.25 * Math.sin(t * 2 + r + c) : 0.8}"/>`;
    }
  }
  return s;
}

// ---------- sets ----------
const SETS = {};

SETS.office = (o, t) => {
  const L = [];
  let bg = `<rect x="-400" y="-200" width="2720" height="1480" fill="url(#gWall)"/><rect x="-400" y="-200" width="2720" height="1480" fill="url(#pDotsL)"/>`;
  for (const wx of (o.windows || [-260, 2000])) bg += windowSvg(wx, 80, 200, 520, skylineSvg(200, 520, 0));
  bg += `<rect x="-400" y="700" width="2720" height="600" fill="url(#pPanel)"/><rect x="-400" y="690" width="2720" height="16" fill="#3e2512"/>`;
  L.push({ depth: 0.55, svg: bg, static: true });
  let dyn = clockSvg(o.clockX ?? 1720, 150, 62, t, { time: o.time });
  dyn += quoteBoardSvg(o.boardX ?? 220, o.boardY ?? 110, o.boardW ?? 1480, o.boardH ?? 470, o.board || [['SUGAR', 'B.R.T.', 'UNION PAC', 'N. PAC', 'STEEL'], ['105¼', '72⅛', '160½', '110', '45¾'], ['105⅛', '72', '160⅝', '110⅛', '45⅝']], t, { seq: o.boardSeq, hl: o.hl });
  L.push({ depth: 0.55, svg: dyn });
  let mid = '';
  for (const sx of (o.shafts || [-160, 2100])) mid += `<path d="M ${sx} 80 L ${sx + 200} 80 L ${sx + 700} 1080 L ${sx + 200} 1080 Z" fill="url(#gShaft)" opacity="${0.55 + 0.1 * Math.sin(t * 0.7)}"/>`;
  mid += dustSvg(t, 26, 0, 100, 1920, 900, 3);
  if (o.ticker !== false) mid += tickerSvg(o.tickerX ?? 1640, o.tickerY ?? 560, 0.95, t, { tape: o.tape });
  if (o.crowd) mid += crowdSvg({ n: o.crowd, y: 900, w: 1920, color: '#2e2418', bob: 3 }, t);
  L.push({ depth: 0.85, svg: mid });
  if (o.chairs !== false) L.push({ depth: 1.2, svg: crowdSvg({ n: 5, y: 1060, w: 2200, x: -140, color: '#15100b', bob: 2, s: 1.3 }, t) });
  return L;
};

SETS.bucketshop = (o, t) => {
  const L = [];
  const flick = 0.85 + 0.15 * noise1(t * 6, 2);
  let bg = `<rect x="-400" y="-200" width="2720" height="1480" fill="url(#gWallD)"/><rect x="-400" y="-200" width="2720" height="1480" fill="url(#pDots)" opacity=".5"/>`;
  // posters
  bg += `<g transform="translate(-300 520) rotate(-3)"><rect width="300" height="200" fill="#e8d9b4" stroke="${PAL.ink}" stroke-width="4"/><text x="150" y="70" text-anchor="middle" font-family="${F.fell}" font-size="34" fill="${PAL.redD}">${esc(o.shopName || 'COSMOPOLITAN')}</text><text x="150" y="112" text-anchor="middle" font-family="${F.fell}" font-size="24">STOCK BROKERAGE</text><text x="150" y="150" text-anchor="middle" font-family="${F.cond}" font-size="22">ONE POINT MARGIN</text></g>`;
  // cashier cage
  bg += `<g transform="translate(${o.cageX ?? 1530} 560)"><rect width="330" height="420" fill="#3a2a1a" stroke="${PAL.ink}" stroke-width="6"/><rect x="20" y="20" width="290" height="160" fill="#c9b28a"/>${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="${36 + i * 36}" y1="20" x2="${36 + i * 36}" y2="180" stroke="#2a1d10" stroke-width="7"/>`).join('')}<rect x="20" y="20" width="290" height="160" fill="none" stroke="${PAL.ink}" stroke-width="4"/><text x="165" y="230" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="34" fill="${PAL.goldL}">CASHIER</text></g>`;
  bg += `<rect x="-400" y="760" width="2720" height="600" fill="url(#pBoards)"/>`;
  L.push({ depth: 0.55, svg: bg, static: true });
  L.push({ depth: 0.55, svg: quoteBoardSvg(o.boardX ?? 160, o.boardY ?? 90, o.boardW ?? 1600, o.boardH ?? 400, o.board || [['SUGAR', 'B.R.T.', 'WHEAT', 'COTTON', 'BURL.'], ['105¼', '72⅛', '74¼', '8.12', '113½'], ['104⅞', '72', '74⅛', '8.10', '113¾']], t, { seq: o.boardSeq, hl: o.hl, color: '#18261e' }) });
  let mid = '';
  for (const lx of [420, 1100, 1700]) mid += `<g transform="translate(${lx} 40)"><line x1="0" y1="-60" x2="0" y2="40" stroke="#222" stroke-width="5"/><path d="M -30 40 L 30 40 L 18 90 L -18 90 Z" fill="#7a6a40" stroke="${PAL.ink}" stroke-width="4"/><circle cy="96" r="${170 * flick}" fill="url(#gLamp)"/><circle cy="80" r="14" fill="#fff2b0" opacity="${flick}"/></g>`;
  mid += smokeSvg(t, 600, 520, 5, '#bdb3a2', 1.4, 0.18) + smokeSvg(t + 3, 1300, 560, 5, '#bdb3a2', 1.2, 0.15);
  if (o.ticker !== false) mid += tickerSvg(o.tickerX ?? 120, o.tickerY ?? 600, 0.9, t, { tape: o.tape });
  L.push({ depth: 0.8, svg: mid });
  if (o.crowd !== false) L.push({ depth: 1.0, svg: crowdSvg({ n: o.crowd || 8, y: 860, w: 2000, x: -40, color: '#2a2016', bob: 4 }, t) });
  L.push({ depth: 1.25, svg: `<rect x="-400" y="${1080 - 40}" width="2720" height="200" fill="#120d08" opacity=".9"/>` + (o.tickets ? [0, 1, 2, 3, 4, 5].map(i => `<rect x="${200 + i * 300}" y="${1000 + (i % 2) * 20}" width="70" height="44" fill="#f3b9c6" stroke="${PAL.ink}" stroke-width="2" transform="rotate(${(i * 37) % 60 - 30} ${200 + i * 300} 1000)"/>`).join('') : '') });
  return L;
};

SETS.street = (o, t) => {
  const L = [];
  // far: sky + Trinity Church spire at the end of Wall Street
  L.push({ depth: 0.2, svg: `<rect x="-600" y="-300" width="3120" height="1700" fill="url(#gSky)"/>`, static: true, box: [-600, -300, 3120, 1700] });
  let far = '';
  for (let i = 0; i < 6; i++) { const cx = ((hash(i) * 3000 + t * (10 + i * 3)) % 3200) - 600; far += `<ellipse cx="${cx}" cy="${80 + hash(i * 3) * 160}" rx="${120 + hash(i) * 90}" ry="${24 + hash(i * 2) * 14}" fill="#fff" opacity=".55"/>`; }
  far += `<g transform="translate(960 0)"><path d="M -70 760 L -70 330 L -40 300 L -40 200 L 0 40 L 40 200 L 40 300 L 70 330 L 70 760 Z" fill="#7d6a58" stroke="${PAL.ink}" stroke-width="5"/><path d="M -20 360 Q 0 330 20 360 L 20 420 L -20 420 Z" fill="#3a3028"/><circle cx="0" cy="250" r="18" fill="#e8dcc0" stroke="${PAL.ink}" stroke-width="3"/></g>`;
  L.push({ depth: 0.2, svg: far });
  // mid: two walls of buildings in perspective
  let mid = '';
  const side = (sd) => {
    let s = '';
    for (let i = 0; i < 5; i++) {
      const x0 = sd < 0 ? -500 + i * 230 : 2420 - i * 230;
      const x1 = sd < 0 ? x0 + 230 : x0 - 230;
      const top = 40 + i * 70 + hash(i * 3 + (sd > 0 ? 9 : 0)) * 60;
      const bot = 1000 - i * 40;
      const col = ['#cdbb99', '#b9a684', '#d6c6a4', '#a99878', '#c4b08e'][i];
      s += `<path d="M ${x0} ${top - (sd < 0 ? 0 : 0)} L ${x1} ${top + 50} L ${x1} ${bot - 30} L ${x0} ${bot} Z" fill="${col}" stroke="${PAL.ink}" stroke-width="4"/>`;
      for (let r = 0; r < 7; r++) {
        const yy = top + 60 + r * ((bot - top - 120) / 7);
        s += `<path d="M ${lerp(x0, x1, 0.18)} ${yy + 8} L ${lerp(x0, x1, 0.82)} ${yy + 14} L ${lerp(x0, x1, 0.82)} ${yy + 46} L ${lerp(x0, x1, 0.18)} ${yy + 42} Z" fill="#4e5c66" stroke="${PAL.ink}" stroke-width="2" opacity=".85"/>`;
      }
      if (i === 1) { // flag
        const fx = lerp(x0, x1, 0.5), fy = top + 10; const wv = Math.sin(t * 4) * 8;
        s += `<line x1="${fx}" y1="${fy}" x2="${fx}" y2="${fy - 110}" stroke="${PAL.ink}" stroke-width="5"/><path d="M ${fx} ${fy - 110} Q ${fx + sd * -40} ${fy - 100 + wv} ${fx + sd * -90} ${fy - 106} L ${fx + sd * -90} ${fy - 64} Q ${fx + sd * -40} ${fy - 58 + wv} ${fx} ${fy - 70} Z" fill="${PAL.red}" stroke="${PAL.ink}" stroke-width="3"/>`;
      }
    }
    return s;
  };
  mid += side(-1) + side(1);
  mid += `<path d="M -600 1000 L 2520 1000 L 2520 1400 L -600 1400 Z" fill="#8a8172"/><path d="M 700 1000 L 1220 1000 L 1700 1400 L 220 1400 Z" fill="#9a9182"/>`;
  // walkers crossing
  for (let i = 0; i < (o.walkers ?? 7); i++) {
    const dir = i % 2 ? 1 : -1, sp = 40 + hash(i) * 50;
    const x = ((hash(i * 9) * 2600 + dir * t * sp) % 2600 + 2600) % 2600 - 340;
    const y = 960 + hash(i * 4) * 70, sc = 0.32 + hash(i * 6) * 0.1;
    const leg = Math.sin(t * 6 + i) * 10;
    mid += `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) scale(${sc})" fill="#2a241c"><ellipse cx="0" cy="-260" rx="26" ry="32"/><ellipse cx="0" cy="-292" rx="40" ry="8"/><path d="M -26 -292 Q 0 -330 26 -292 Z"/><path d="M -56 -226 Q 0 -246 56 -226 L 62 -40 L -62 -40 Z"/><path d="M -28 -50 L ${-30 + leg} 40 L ${-8 + leg} 40 L 0 -50 Z M 28 -50 L ${30 - leg} 40 L ${8 - leg} 40 L 0 -50 Z"/></g>`;
  }
  L.push({ depth: 0.7, svg: mid });
  if (o.crowd) L.push({ depth: 1.0, svg: crowdSvg({ n: o.crowd, y: 940, w: 2100, x: -90, color: '#2a241c', agitated: o.agitated, bob: 5 }, t) });
  return L;
};

SETS.floor = (o, t) => {
  const L = [];
  let bg = `<rect x="-500" y="-300" width="2920" height="1700" fill="#b9a47e"/><rect x="-500" y="-300" width="2920" height="440" fill="#8c7a58"/>`;
  for (let i = 0; i < 9; i++) bg += `<rect x="${-400 + i * 330}" y="-300" width="150" height="440" fill="#d9caa4" opacity=".55"/>`; // tall windows
  bg += `<rect x="-500" y="140" width="2920" height="30" fill="#5b3a1e"/><rect x="-500" y="160" width="2920" height="40" fill="url(#pPanel)"/>`;
  for (let i = 0; i < 5; i++) { const px = -200 + i * 560; bg += `<g transform="translate(${px} 300)"><rect x="-26" y="-60" width="52" height="560" fill="#d6c7a2" stroke="${PAL.ink}" stroke-width="4"/><rect x="-110" y="-40" width="220" height="90" fill="${PAL.board}" stroke="${PAL.ink}" stroke-width="5"/><text x="0" y="18" text-anchor="middle" font-family="${F.type}" font-size="34" fill="#eee">${esc((o.posts || ['N. PAC', 'U.P.', 'STEEL', 'SUGAR', 'RDG'])[i])}</text></g>`; }
  L.push({ depth: 0.45, svg: bg, static: true, box: [-500, -300, 2920, 1700] });
  L.push({ depth: 0.8, svg: crowdSvg({ n: 14, y: 760, w: 2400, x: -240, color: '#3a3024', agitated: o.agitated ?? true, bob: 6, speed: 3 }, t) });
  L.push({ depth: 1.05, svg: crowdSvg({ n: 9, y: 980, w: 2300, x: -190, color: '#1d1710', agitated: o.agitated ?? true, bob: 8, s: 1.3, speed: 3.5 }, t) });
  if (o.paper !== false) L.push({ depth: 1.2, svg: paperRain(t, o.paperN || 24, 2200, 1100, 3) });
  return L;
};

SETS.study = (o, t) => {
  const L = [];
  let bg = `<rect x="-400" y="-200" width="2720" height="1480" fill="url(#pPanel)"/>`;
  bg += windowSvg(o.winX ?? 1080, 120, o.winW ?? 640, 500, skylineSvg(o.winW ?? 640, 500, 0, { night: o.night }));
  // bookshelves
  bg += `<g transform="translate(-260 80)"><rect width="520" height="760" fill="#3e2512" stroke="${PAL.ink}" stroke-width="6"/>`;
  for (let r = 0; r < 5; r++) { bg += `<rect x="16" y="${16 + r * 148}" width="488" height="132" fill="#2a170a"/>`; for (let b = 0; b < 14; b++) bg += `<rect x="${24 + b * 34}" y="${36 + r * 148 + (b % 3) * 6}" width="28" height="${108 - (b % 3) * 6}" fill="${['#7a2a22', '#2f4a5a', '#5a4a2a', '#3a5a3a', '#6a5a3a'][(b + r) % 5]}" stroke="${PAL.ink}" stroke-width="2"/>`; }
  bg += `</g>`;
  L.push({ depth: 0.5, svg: bg, static: true });
  L.push({ depth: 0.5, svg: clockSvg(o.clockX ?? 870, 210, 58, t, { time: o.time ?? 15.4 }) });
  L.push({ depth: 0.9, svg: `<rect x="-400" y="${o.deskY ?? 820}" width="2720" height="500" fill="url(#gWood)" stroke="${PAL.ink}" stroke-width="6"/>`, static: true, alpha: true });
  let mid = '';
  if (o.lamp !== false) mid += `<g transform="translate(${o.lampX ?? 1580} ${o.deskY ?? 820})"><circle cx="0" cy="-160" r="260" fill="url(#gLamp)" opacity=".6"/><rect x="-10" y="-150" width="20" height="150" fill="#b8862a" stroke="${PAL.ink}" stroke-width="4"/><path d="M -80 -150 L 80 -150 L 50 -220 L -50 -220 Z" fill="#2f6b3d" stroke="${PAL.ink}" stroke-width="5"/><ellipse cx="0" cy="0" rx="70" ry="14" fill="#8a6a2a" stroke="${PAL.ink}" stroke-width="4"/></g>`;
  if (o.ticker) mid += tickerSvg(o.tickerX ?? 330, (o.deskY ?? 820) - 340, 0.85, t, { tape: o.tape });
  L.push({ depth: 0.9, svg: mid });
  return L;
};

SETS.beach = (o, t) => {
  const L = [];
  L.push({ depth: 0.15, svg: `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gSky)"/><circle cx="${o.sunX ?? 1500}" cy="200" r="90" fill="#ffe08a" stroke="${PAL.ink}" stroke-width="4"/><circle cx="${o.sunX ?? 1500}" cy="200" r="190" fill="#fff3c0" opacity=".25"/>`, static: true, box: [-500, -300, 2920, 1700] });
  let far = '';
  for (let i = 0; i < 4; i++) { const cx = ((hash(i) * 2900 + t * (8 + i * 3)) % 3000) - 500; far += `<ellipse cx="${cx}" cy="${120 + hash(i * 3) * 140}" rx="${140 + hash(i) * 80}" ry="22" fill="#fff" opacity=".6"/>`; }
  L.push({ depth: 0.15, svg: far });
  let sea = `<rect x="-500" y="520" width="2920" height="280" fill="url(#gSea)"/>`;
  for (let r = 0; r < 6; r++) { let d = `M -500 ${540 + r * 42}`; for (let x = -500; x <= 2420; x += 60) d += ` Q ${x + 30} ${540 + r * 42 + Math.sin(t * 1.4 + x / 90 + r) * 8 - 8} ${x + 60} ${540 + r * 42}`; sea += `<path d="${d}" stroke="#d6eef0" stroke-width="${3 - r * 0.3}" fill="none" opacity="${0.75 - r * 0.08}"/>`; }
  if (o.yacht !== false) { const bob = Math.sin(t * 1.2) * 6; sea += `<g transform="translate(${o.yachtX ?? 520} ${590 + bob}) rotate(${Math.sin(t * 1.2) * 1.5})"><path d="M -160 0 L 160 0 L 120 50 L -130 50 Z" fill="#f4f1ea" stroke="${PAL.ink}" stroke-width="5"/><rect x="-70" y="-50" width="140" height="50" fill="#e2d6b8" stroke="${PAL.ink}" stroke-width="4"/><line x1="0" y1="-50" x2="0" y2="-210" stroke="${PAL.ink}" stroke-width="6"/><path d="M 0 -200 L 80 -190 L 0 -170 Z" fill="${PAL.red}"/></g>`; }
  L.push({ depth: 0.4, svg: sea });
  let near = `<path d="M -500 800 Q 960 760 2420 800 L 2420 1400 L -500 1400 Z" fill="#e7cf96"/>`;
  const palm = (px, ph, k) => {
    const sw = Math.sin(t * 0.9 + k) * 4;
    let s = `<path d="M ${px} 1100 Q ${px - 30} ${1100 - ph / 2} ${px + 20 + sw} ${1100 - ph}" stroke="${PAL.ink}" stroke-width="34" fill="none"/><path d="M ${px} 1100 Q ${px - 30} ${1100 - ph / 2} ${px + 20 + sw} ${1100 - ph}" stroke="#8a6a3a" stroke-width="24" fill="none"/>`;
    for (let i = 0; i < 7; i++) { const a = (i * 52 + sw * 3) * Math.PI / 180; const ex = px + 20 + sw + Math.cos(a) * 260, ey = 1100 - ph + Math.sin(a) * 90 + 70; s += `<path d="M ${px + 20 + sw} ${1100 - ph} Q ${(px + 20 + sw + ex) / 2} ${1100 - ph - 70} ${ex} ${ey}" stroke="${PAL.ink}" stroke-width="30" fill="none" stroke-linecap="round"/><path d="M ${px + 20 + sw} ${1100 - ph} Q ${(px + 20 + sw + ex) / 2} ${1100 - ph - 70} ${ex} ${ey}" stroke="#3f7a3a" stroke-width="20" fill="none" stroke-linecap="round"/>`; }
    return s;
  };
  for (const [px, ph, k] of (o.palms || [[60, 760, 0], [1860, 680, 2]])) near += palm(px, ph, k);
  L.push({ depth: 1.1, svg: near });
  return L;
};

SETS.boardwalk = (o, t) => {
  const L = [];
  let far = `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gSky)"/><rect x="-500" y="400" width="2920" height="240" fill="url(#gSea)"/>`;
  for (let r = 0; r < 4; r++) { let d = `M -500 ${420 + r * 50}`; for (let x = -500; x <= 2420; x += 80) d += ` Q ${x + 40} ${420 + r * 50 + Math.sin(t * 1.3 + x / 110 + r) * 8 - 8} ${x + 80} ${420 + r * 50}`; far += `<path d="${d}" stroke="#d6eef0" stroke-width="3" fill="none" opacity=".7"/>`; }
  L.push({ depth: 0.3, svg: far });
  let mid = `<rect x="-500" y="640" width="2920" height="700" fill="#b98a52"/>`;
  for (let i = 0; i < 40; i++) mid += `<line x1="${-500 + i * 80}" y1="640" x2="${-700 + i * 80 - (i - 20) * 30}" y2="1400" stroke="#7a5530" stroke-width="4"/>`;
  mid += `<g transform="translate(${o.shopX ?? 1180} 0)"><rect x="0" y="130" width="760" height="520" fill="#e7dcc0" stroke="${PAL.ink}" stroke-width="6"/><rect x="24" y="170" width="712" height="100" fill="${PAL.navy}"/><text x="380" y="240" text-anchor="middle" font-family="${F.fell}" font-size="62" fill="#f1e6c8">${esc(o.sign || 'HARDING BROS.')}</text><rect x="60" y="320" width="270" height="330" fill="#5a6a72" stroke="${PAL.ink}" stroke-width="5"/><rect x="430" y="320" width="270" height="330" fill="#5a6a72" stroke="${PAL.ink}" stroke-width="5"/></g>`;
  for (let i = 0; i < 5; i++) { const sp = 30 + hash(i) * 30, dir = i % 2 ? 1 : -1; const x = ((hash(i * 9) * 2600 + dir * t * sp) % 2600 + 2600) % 2600 - 340; mid += `<g transform="translate(${x} ${700 + hash(i) * 40}) scale(.4)" fill="#3a3028"><ellipse cx="0" cy="-260" rx="26" ry="32"/><ellipse cx="0" cy="-292" rx="46" ry="9" fill="#d8c27a"/><path d="M -56 -226 Q 0 -246 56 -226 L 70 40 L -70 40 Z"/></g>`; }
  L.push({ depth: 0.75, svg: mid });
  return L;
};

SETS.veranda = (o, t) => {
  const L = [];
  let far = `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gSky)"/>`;
  for (let i = 0; i < 7; i++) { const x = -300 + i * 380, sw = Math.sin(t * 0.8 + i) * 8; far += `<ellipse cx="${x + sw}" cy="520" rx="210" ry="260" fill="${i % 2 ? '#4f7a46' : '#3f6a3a'}" stroke="${PAL.ink}" stroke-width="4"/><rect x="${x - 18}" y="700" width="36" height="200" fill="#5a3a20"/>`; }
  L.push({ depth: 0.3, svg: far });
  let mid = `<rect x="-500" y="-200" width="2920" height="170" fill="#efe6d0" stroke="${PAL.ink}" stroke-width="6"/>`;
  for (let i = 0; i < 8; i++) mid += `<rect x="${-380 + i * 380}" y="-40" width="60" height="1000" fill="#f4ede0" stroke="${PAL.ink}" stroke-width="5"/>`;
  mid += `<rect x="-500" y="900" width="2920" height="400" fill="#a8916c"/><rect x="-500" y="860" width="2920" height="40" fill="#efe6d0" stroke="${PAL.ink}" stroke-width="5"/>`;
  for (let i = 0; i < 60; i++) mid += `<rect x="${-500 + i * 50}" y="800" width="12" height="70" fill="#efe6d0" stroke="${PAL.ink}" stroke-width="2"/>`;
  L.push({ depth: 0.8, svg: mid, static: true, alpha: true, box: [-500, -300, 2920, 1700] });
  return L;
};

SETS.train = (o, t) => {
  const L = [];
  let out = `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gSky)"/><path d="M -500 600 Q 0 500 600 590 T 1800 560 T 2900 600 L 2900 1400 L -500 1400 Z" fill="#6a8a5a"/>`;
  for (let i = 0; i < 10; i++) { const x = ((i * 420 - t * 900) % 4200 + 4200) % 4200 - 900; out += `<line x1="${x}" y1="300" x2="${x}" y2="700" stroke="#3a2a1a" stroke-width="12"/><line x1="${x - 40}" y1="330" x2="${x + 40}" y2="330" stroke="#3a2a1a" stroke-width="8"/>`; }
  L.push({ depth: 0.3, svg: out });
  let mid = `<path d="M -500 -300 H 2420 V 1400 H -500 Z M 160 120 H 1760 V 640 H 160 Z" fill="#6a3a2a" fill-rule="evenodd" stroke="${PAL.ink}" stroke-width="10"/><rect x="-500" y="700" width="2920" height="700" fill="#5a2a1e"/><rect x="160" y="640" width="1600" height="30" fill="#3a1e12"/>`;
  L.push({ depth: 0.85, svg: `<g transform="translate(0 ${Math.sin(t * 9) * 2})">${mid}</g>` });
  return L;
};

SETS.night = (o, t) => [{ depth: 0.3, static: true, box: [-500, -300, 2880, 1620], svg: `<g transform="translate(-500 -300) scale(1.5)">${skylineSvg(1920, 1080, 0, { night: true })}</g>` },
  { depth: 1.1, svg: o.rain ? Array.from({ length: 80 }, (_, i) => { const x = (hash(i) * 2400 + t * 200) % 2400 - 240, y = (hash(i * 3) * 1300 + t * 1600) % 1300 - 120; return `<line x1="${x}" y1="${y}" x2="${x - 12}" y2="${y + 50}" stroke="#9fb0d0" stroke-width="2" opacity=".5"/>`; }).join('') : '' }];

SETS.court = (o, t) => {
  let bg = `<rect x="-400" y="-200" width="2720" height="1480" fill="#cbb894"/>`;
  for (let i = 0; i < 6; i++) bg += `<rect x="${-200 + i * 400}" y="-100" width="120" height="900" fill="#b8a27a" stroke="${PAL.ink}" stroke-width="4"/>`;
  bg += `<rect x="560" y="80" width="800" height="120" fill="#5b3a1e" stroke="${PAL.ink}" stroke-width="5"/><text x="960" y="160" text-anchor="middle" font-family="${F.fell}" font-size="54" fill="${PAL.goldL}">${esc(o.sign || 'U.S. DISTRICT COURT')}</text>`;
  bg += `<rect x="-400" y="760" width="2720" height="600" fill="url(#gWood)"/>`;
  return [{ depth: 0.55, svg: bg, static: true }, { depth: 0.9, svg: `<rect x="300" y="620" width="1320" height="500" fill="#4a2e18" stroke="${PAL.ink}" stroke-width="6"/>` }];
};

SETS.warehouse = (o, t) => {
  // cotton / coffee / grain
  const kind = o.kind || 'cotton';
  let bg = `<rect x="-400" y="-200" width="2720" height="1480" fill="#a88a62"/>`;
  for (let i = 0; i < 10; i++) bg += `<line x1="${-300 + i * 280}" y1="-200" x2="${-300 + i * 280}" y2="1280" stroke="#7a5a3a" stroke-width="18" opacity=".5"/>`;
  bg += `<path d="M -400 -200 L 2320 -200 L 2320 40 L -400 40 Z" fill="#6a4a2a"/>`;
  for (const sx of [300, 1300]) bg += `<path d="M ${sx} 40 L ${sx + 240} 40 L ${sx + 600} 1080 L ${sx - 100} 1080 Z" fill="url(#gShaft)" opacity=".5"/>`;
  const dust = dustSvg(t, 30, 0, 50, 1920, 1000, 7);
  let mid = `<rect x="-400" y="860" width="2720" height="500" fill="#6a4a2e"/>`;
  for (let i = 0; i < 26; i++) {
    const r = Math.floor(i / 9), c = i % 9; const bx = -260 + c * 260 + (r % 2) * 120, by = 760 - r * 150;
    if (kind === 'coffee') mid += `<g transform="translate(${bx} ${by})"><path d="M 10 0 Q 0 70 8 140 L 200 140 Q 212 70 200 0 Q 104 -18 10 0 Z" fill="#b89462" stroke="${PAL.ink}" stroke-width="5"/><text x="104" y="84" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="28" fill="#5b3a1e">${o.label || 'SANTOS'}</text></g>`;
    else if (kind === 'grain') mid += `<g transform="translate(${bx} ${by})"><path d="M 20 0 Q 0 80 14 140 L 196 140 Q 210 80 190 0 Q 104 -24 20 0 Z" fill="#d7c08a" stroke="${PAL.ink}" stroke-width="5"/><text x="104" y="84" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="26" fill="#6a4a2a">${o.label || 'WHEAT'}</text></g>`;
    else mid += `<g transform="translate(${bx} ${by})"><rect width="220" height="140" rx="14" fill="#efe9da" stroke="${PAL.ink}" stroke-width="5"/><line x1="0" y1="44" x2="220" y2="44" stroke="#8a6a3a" stroke-width="6"/><line x1="0" y1="96" x2="220" y2="96" stroke="#8a6a3a" stroke-width="6"/><text x="110" y="80" text-anchor="middle" font-family="${F.cond}" font-size="24" fill="#6a5a3a">${o.label || 'COTTON'}</text></g>`;
  }
  return [{ depth: 0.5, svg: bg, static: true }, { depth: 0.6, svg: dust }, { depth: 0.85, svg: mid, static: true, alpha: true }];
};

SETS.wheat = (o, t) => {
  let far = `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gSky)"/><rect x="1320" y="260" width="200" height="320" fill="#9a4a3a" stroke="${PAL.ink}" stroke-width="5"/><path d="M 1290 260 L 1420 120 L 1550 260 Z" fill="#6a2a2a" stroke="${PAL.ink}" stroke-width="5"/><rect x="1560" y="200" width="90" height="380" fill="#b8b0a0" stroke="${PAL.ink}" stroke-width="5"/>`;
  let field = `<rect x="-500" y="560" width="2920" height="800" fill="#d6a441"/>`;
  for (let i = 0; i < 140; i++) { const x = -400 + (i * 97) % 2700, y = 580 + (i * 53) % 560; const sway = Math.sin(t * 2 + x / 140) * 10; field += `<path d="M ${x} ${y + 60} Q ${x + sway * 0.5} ${y + 20} ${x + sway} ${y - 30}" stroke="#8a5a2b" stroke-width="4" fill="none"/><ellipse cx="${x + sway}" cy="${y - 38}" rx="8" ry="18" fill="#efc76a" stroke="#8a5a2b" stroke-width="3" transform="rotate(${sway} ${x + sway} ${y - 38})"/>`; }
  return [{ depth: 0.25, svg: far }, { depth: 0.9, svg: field }];
};

SETS.ruins = (o, t) => {
  let far = `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gDusk)"/>`;
  far += smokeSvg(t, 300, 640, 7, '#5a5050', 2.4, 0.55) + smokeSvg(t + 2, 1100, 660, 7, '#4a4040', 2.8, 0.55) + smokeSvg(t + 5, 1700, 650, 7, '#5a5050', 2.2, 0.5);
  let bld = '';
  for (let i = 0; i < 11; i++) { const bx = -300 + i * 240, bh = 300 + hash(i * 3.1) * 360; bld += `<path d="M ${bx} 1100 L ${bx} ${1100 - bh} L ${bx + 50} ${1100 - bh - 40} L ${bx + 90} ${1100 - bh + 30} L ${bx + 150} ${1100 - bh - 10} L ${bx + 240} ${1100 - bh + 50} L ${bx + 240} 1100 Z" fill="#221a18" stroke="${PAL.ink}" stroke-width="3"/>`; }
  let mid = '';
  for (let i = 0; i < 6; i++) { const fx = 100 + i * 330, fl = 0.7 + 0.3 * noise1(t * 4 + i, i); mid += `<ellipse cx="${fx}" cy="900" rx="${160 * fl}" ry="${110 * fl}" fill="url(#gFire)"/><path d="M ${fx - 30} 930 Q ${fx - 50} ${860 - fl * 40} ${fx} ${800 - fl * 70} Q ${fx + 50} ${860 - fl * 40} ${fx + 30} 930 Z" fill="#ffb04a" opacity="${0.8 * fl}"/>`; }
  return [{ depth: 0.3, svg: far }, { depth: 0.85, svg: bld, static: true, alpha: true }, { depth: 0.85, svg: mid }];
};

SETS.home = (o, t) => {
  let bg = `<rect x="-400" y="-200" width="2720" height="1480" fill="#c7a98a"/><rect x="-400" y="-200" width="2720" height="1480" fill="url(#pDotsL)"/>`;
  bg += windowSvg(o.winX ?? 120, 140, 460, 500, skylineSvg(460, 500, t));
  bg += `<rect x="1300" y="160" width="300" height="380" fill="#e6d8b8" stroke="#6a4a2a" stroke-width="14"/><ellipse cx="1450" cy="330" rx="90" ry="120" fill="#b9a07a" opacity=".6"/>`;
  bg += `<rect x="-400" y="780" width="2720" height="600" fill="#8a5a3a"/>`;
  return [{ depth: 0.55, svg: bg, static: true }, { depth: 0.9, svg: `<path d="M -400 960 Q 960 900 2320 960 L 2320 1300 L -400 1300 Z" fill="#7a3a3a" opacity=".6"/>` }];
};

SETS.capitol = (o, t) => {
  let far = `<rect x="-500" y="-300" width="2920" height="1700" fill="url(#gSky)"/>`;
  far += `<g transform="translate(960 640)"><rect x="-520" y="-120" width="1040" height="240" fill="#efe9dc" stroke="${PAL.ink}" stroke-width="5"/><rect x="-140" y="-300" width="280" height="190" fill="#efe9dc" stroke="${PAL.ink}" stroke-width="5"/><path d="M -150 -300 Q 0 -560 150 -300 Z" fill="#efe9dc" stroke="${PAL.ink}" stroke-width="5"/><rect x="-10" y="-600" width="20" height="90" fill="#efe9dc" stroke="${PAL.ink}" stroke-width="4"/>${[...Array(12)].map((_, i) => `<rect x="${-500 + i * 88}" y="-100" width="20" height="200" fill="#d9d2c2" stroke="${PAL.ink}" stroke-width="2"/>`).join('')}</g>`;
  return [{ depth: 0.3, svg: far, static: true, box: [-500, -300, 2920, 1700] }, { depth: 0.9, svg: `<rect x="-500" y="760" width="2920" height="600" fill="#6a8a5a"/>` }];
};

SETS.paper = (o, t) => {
  // lesson page: aged paper desk-pad with a faint ledger grid and a moving light
  let s = `<rect x="-400" y="-300" width="2720" height="1680" fill="url(#pPaperTex)"/>`;
  if (o.grid !== false) for (let i = 0; i < 40; i++) s += `<line x1="-400" y1="${-300 + i * 44}" x2="2320" y2="${-300 + i * 44}" stroke="#7aa0b8" stroke-width="1.2" opacity=".18"/>`;
  s += `<line x1="${o.margin ?? 40}" y1="-300" x2="${o.margin ?? 40}" y2="1380" stroke="${PAL.red}" stroke-width="2" opacity=".3"/>`;
  return [{ depth: 0.6, svg: s, static: true, box: [-400, -300, 2720, 1680] }, { depth: 0.6, svg: `<ellipse cx="${960 + Math.sin(t * 0.2) * 300}" cy="${420 + Math.cos(t * 0.17) * 120}" rx="1100" ry="700" fill="url(#gSpot)" opacity=".9"/>` }];
};

SETS.chalk = (o, t) => [{ depth: 0.6, static: true, box: [-400, -300, 2720, 1680], svg: `<rect x="-400" y="-300" width="2720" height="1680" fill="#5b3a1e"/><rect x="-360" y="-260" width="2640" height="1600" fill="url(#pChalk)" stroke="#3e2512" stroke-width="30"/>` }];

SETS.dark = (o, t) => [{ depth: 0.5, svg: `<rect x="-500" y="-300" width="2920" height="1700" fill="${o.color || '#211b16'}"/><rect x="-500" y="-300" width="2920" height="1700" fill="url(#pDots)" opacity=".5"/><ellipse cx="960" cy="540" rx="${700 + Math.sin(t) * 20}" ry="460" fill="#fff" opacity=".04"/>` }];

SETS.burst = (o, t) => {
  let s = `<rect x="-500" y="-300" width="2920" height="1700" fill="${o.color || PAL.red}"/>`;
  const rot = t * (o.spin ?? 4);
  s += `<g transform="translate(960 540) rotate(${rot})">`;
  for (let i = 0; i < 36; i++) { const a = i * 10 * Math.PI / 180, a2 = (i * 10 + 5) * Math.PI / 180; s += `<path d="M 0 0 L ${Math.cos(a) * 3000} ${Math.sin(a) * 3000} L ${Math.cos(a2) * 3000} ${Math.sin(a2) * 3000} Z" fill="#fff" opacity=".16"/>`; }
  s += `</g><rect x="-500" y="-300" width="2920" height="1700" fill="url(#pDots)"/>`;
  return [{ depth: 0.3, svg: s }];
};

function drawSet(name, o, t) { return (SETS[name] || SETS.dark)(o || {}, t); }
