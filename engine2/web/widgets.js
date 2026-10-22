// engine2 widgets: animated explanatory graphics synced to narration cues.
// All coordinates are world coordinates (1920x1080 frame at camera z=1). Times are seconds.
'use strict';

function enterTf(w, t, kind, cx, cy) {
  // returns {tf, op} for an entrance animation
  const at = w.at ?? 0;
  const p = prog(t, at, w.inDur || 0.55, kind === 'pop' ? 'back' : 'out');
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.35, 0.35, 'in') : 1;
  const op = Math.min(clamp(p * 1.4), out);
  let tf = '';
  if (kind === 'pop') tf = `translate(${cx} ${cy}) scale(${Math.max(0.001, p)}) translate(${-cx} ${-cy})`;
  else if (kind === 'slideL') tf = `translate(${(1 - p) * -160} 0)`;
  else if (kind === 'slideR') tf = `translate(${(1 - p) * 160} 0)`;
  else if (kind === 'slideU') tf = `translate(0 ${(1 - p) * 90})`;
  else if (kind === 'drop') tf = `translate(0 ${(1 - EASE.bounce(clamp((t - at) / 0.8))) * -300})`;
  else if (kind === 'flip') tf = `translate(${cx} ${cy}) scale(1 ${Math.max(0.001, p)}) translate(${-cx} ${-cy})`;
  else if (kind === 'zoom') tf = `translate(${cx} ${cy}) scale(${lerp(1.6, 1, p)}) translate(${-cx} ${-cy})`;
  return { tf, op, p };
}
function box(x, y, w, h, o = {}) {
  return `<g ${o.shadow !== false ? 'filter="url(#fShadow)"' : ''}><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill || PAL.cream}" stroke="${PAL.ink}" stroke-width="${o.sw ?? 5}"/></g>`;
}

const WIDGETS = {};

// ---- kinetic text ----
WIDGETS.text = (w, t) => {
  const size = w.size || 54, x = w.x ?? 960, y = w.y ?? 200, maxW = w.w || 1500, anchor = w.align === 'left' ? 'start' : (w.align === 'right' ? 'end' : 'middle');
  const font = { title: F.title, serif: F.serif, fell: F.fell, cond: F.cond, comic: F.comic, type: F.type }[w.font || 'serif'];
  const enLines = wrap(w.en, size, font, maxW, w.weight || 700);
  let s = '';
  const at = w.at ?? 0;
  const per = w.per ?? 0.06;
  let k = 0;
  const lh = size * 1.18;
  enLines.forEach((ln, i) => {
    if (w.anim === 'words') {
      // word-by-word rise
      const words = ln.split(' ');
      const totalW = measure(ln, size, font, w.weight || 700);
      let cx = anchor === 'middle' ? x - totalW / 2 : (anchor === 'end' ? x - totalW : x);
      for (const wd of words) {
        const p = prog(t, at + k * per, 0.45, 'back'); k++;
        const ww = measure(wd + ' ', size, font, w.weight || 700);
        s += `<text x="${cx.toFixed(1)}" y="${(y + size * 0.84 + i * lh + (1 - p) * 40).toFixed(1)}" font-family="${font}" font-size="${size}" font-weight="${w.weight || 700}" fill="${w.fill || PAL.ink}" opacity="${clamp(p)}"${w.stroke ? ` stroke="${w.stroke}" stroke-width="${w.sw || 8}" paint-order="stroke"` : ''}>${esc(wd)}</text>`;
        cx += ww;
      }
    } else {
      const p = prog(t, at + i * 0.12, 0.5, 'out');
      s += `<text x="${x}" y="${(y + size * 0.84 + i * lh + (1 - p) * 24).toFixed(1)}" text-anchor="${anchor}" font-family="${font}" font-size="${size}" font-weight="${w.weight || 700}" fill="${w.fill || PAL.ink}" opacity="${p}"${w.stroke ? ` stroke="${w.stroke}" stroke-width="${w.sw || 8}" paint-order="stroke"` : ''}>${esc(ln)}</text>`;
    }
  });
  if (w.zh) {
    const zs = w.zsize || Math.round(size * 0.66);
    const zp = prog(t, at + (w.anim === 'words' ? k * per : 0.25), 0.5, 'out');
    s += tb(w.zh, x, y + enLines.length * lh + 10 + (1 - zp) * 20, { size: zs, font: w.zfont === 'serif' ? F.zhs : F.zh, weight: 700, maxW, anchor, fill: w.zfill || PAL.sepia, stroke: w.stroke, sw: (w.sw || 8) * 0.7, opacity: zp }).svg;
  }
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.35, 0.35, 'in') : 1;
  return `<g opacity="${out}">${s}</g>`;
};

// ---- title card with kicker ----
WIDGETS.title = (w, t) => {
  const at = w.at ?? 0;
  let s = '';
  if (w.kicker) { const p = prog(t, at, 0.5); s += `<g opacity="${p}">${tb(w.kicker, 960, 250 - (1 - p) * 30, { size: 40, font: F.cond, weight: 700, anchor: 'middle', fill: '#fff', stroke: PAL.ink, sw: 6, ls: 6 }).svg}</g>`; }
  const p = prog(t, at + 0.25, 0.7, 'backStrong');
  s += `<g transform="translate(960 420) scale(${Math.max(0.001, p)}) rotate(${(1 - p) * -8}) translate(-960 -420)">${tb(w.en, 960, 330, { size: w.size || 128, font: F.title, anchor: 'middle', fill: '#fff', stroke: PAL.ink, sw: 16, maxW: 1700, lh: (w.size || 128) * 1.0, ls: 3 }).svg}</g>`;
  const zp = prog(t, at + 0.7, 0.6);
  s += `<g opacity="${zp}">${tb(w.zh, 960, 500 + (w.en.length > 26 ? 110 : 0) + (1 - zp) * 30, { size: (w.size || 128) * 0.5, font: F.zh, weight: 900, anchor: 'middle', fill: PAL.goldL, stroke: PAL.ink, sw: 10, maxW: 1700 }).svg}</g>`;
  if (w.sub) { const sp = prog(t, at + 1.1, 0.6); s += `<g opacity="${sp}">${bi(w.sub[0], w.sub[1], 960, 660 + (w.en.length > 26 ? 110 : 0), { size: 36, font: F.serif, weight: 700, anchor: 'middle', fill: '#fff', zfill: '#fff', maxW: 1500, stroke: PAL.ink, sw: 5 }).svg}</g>`; }
  return s;
};

// ---- caption box (yellow narration box) ----
WIDGETS.caption = (w, t) => {
  const x = w.x ?? 60, y = w.y ?? 50, bw = w.w || 620, pad = 20;
  const tx = bi(w.en, w.zh, x + pad, y + pad, { size: w.size || 32, font: F.serif, weight: 700, maxW: bw - pad * 2, zfont: F.zhs, zweight: 600 });
  const { tf, op } = enterTf(w, t, w.anim || 'slideL', x, y);
  return `<g transform="${tf}" opacity="${op}"><g filter="url(#fShadow)"><rect x="${x}" y="${y}" width="${bw}" height="${tx.h + pad * 2}" fill="${w.color || '#f6d77a'}" stroke="${PAL.ink}" stroke-width="5"/></g>${tx.svg}</g>`;
};

// ---- speech / thought / shout bubbles ----
WIDGETS.bubble = (w, t) => {
  const bw = w.w || 480, pad = 26;
  const tx = bi(w.en, w.zh, w.x + bw / 2, w.y + pad, { size: w.size || 32, font: F.comic, weight: 700, maxW: bw - pad * 2, anchor: 'middle', zsize: w.zsize || Math.round((w.size || 32) * 0.84) });
  const h = tx.h + pad * 2, cx = w.x + bw / 2, cy = w.y + h / 2;
  const { tf, op } = enterTf(w, t, 'pop', w.tx ?? cx, w.ty ?? cy);
  let shape;
  if (w.kind === 'shout') {
    let pts = []; const n = 24; const jit = Math.sin(t * 30) * 3;
    for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2, r = i % 2 ? 1 : 1.2; pts.push(`${(cx + Math.cos(a) * (bw / 2 + 22) * r + jit).toFixed(1)},${(cy + Math.sin(a) * (h / 2 + 22) * r).toFixed(1)}`); }
    shape = `<polygon points="${pts.join(' ')}" fill="#fff" stroke="${PAL.ink}" stroke-width="6"/>`;
  } else if (w.kind === 'thought') shape = `<rect x="${w.x}" y="${w.y}" width="${bw}" height="${h}" rx="${h / 2}" fill="#fff" stroke="${PAL.ink}" stroke-width="5" stroke-dasharray="14 8"/>`;
  else shape = `<rect x="${w.x}" y="${w.y}" width="${bw}" height="${h}" rx="40" fill="#fff" stroke="${PAL.ink}" stroke-width="6"/>`;
  let tail = '';
  if (w.tx !== undefined) {
    const by = w.ty > cy ? w.y + h - 6 : w.y + 6;
    if (w.kind === 'thought') tail = `<circle cx="${(cx * 2 + w.tx) / 3}" cy="${(by + w.ty) / 2}" r="14" fill="#fff" stroke="${PAL.ink}" stroke-width="4"/><circle cx="${w.tx}" cy="${w.ty}" r="8" fill="#fff" stroke="${PAL.ink}" stroke-width="4"/>`;
    else tail = `<path d="M ${cx - 30} ${by} L ${w.tx} ${w.ty} L ${cx + 30} ${by} Z" fill="#fff" stroke="${PAL.ink}" stroke-width="6" stroke-linejoin="round"/>`;
  }
  const cover = w.tx !== undefined && w.kind !== 'thought' ? `<rect x="${cx - 26}" y="${w.ty > cy ? w.y + h - 14 : w.y + 4}" width="52" height="12" fill="#fff"/>` : '';
  return `<g transform="${tf}" opacity="${op}">${tail}${shape}${cover}${tx.svg}</g>`;
};

// ---- comic SFX lettering ----
WIDGETS.sfx = (w, t) => {
  const at = w.at ?? 0, size = w.size || 110;
  const p = prog(t, at, 0.5, 'backStrong');
  const wob = Math.sin((t - at) * 18) * Math.max(0, 1 - (t - at) * 2) * 6;
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.3, 0.3, 'in') : 1;
  const font = w.font === 'cond' ? F.cond : F.title;
  const a = tb(w.text ?? w.t, 0, -size * 0.5, { size, font, weight: w.font === 'cond' ? 700 : 400, anchor: 'middle', fill: w.color || PAL.red, stroke: PAL.ink, sw: 12, ls: 2 });
  const z = w.zh ? tb(w.zh, 0, size * 0.5, { size: size * 0.42, font: F.zh, weight: 900, anchor: 'middle', fill: '#fff', stroke: PAL.ink, sw: 7 }) : { svg: '' };
  return `<g transform="translate(${w.x} ${w.y}) rotate(${(w.rot ?? -8) + wob}) scale(${Math.max(0.001, p)})" opacity="${out}">${a.svg}${z.svg}</g>`;
};

// ---- stamp ----
WIDGETS.stamp = (w, t) => {
  const at = w.at ?? 0; const p = prog(t, at, 0.28, 'in');
  const s = lerp(2.4, 1, p), op = clamp(p * 2);
  const a = tb(w.en, 0, -48, { size: w.size || 84, font: F.cond, weight: 700, anchor: 'middle', fill: w.color || PAL.red, ls: 6 });
  const z = tb(w.zh || '', 0, 46, { size: (w.size || 84) * 0.5, font: F.zh, weight: 900, anchor: 'middle', fill: w.color || PAL.red });
  const bw = Math.max(a.w, z.w) + 80;
  return `<g transform="translate(${w.x} ${w.y}) rotate(${w.rot ?? -10}) scale(${s})" opacity="${op * (w.op ?? 0.92)}"><rect x="${-bw / 2}" y="-80" width="${bw}" height="${w.zh ? 190 : 120}" rx="14" fill="none" stroke="${w.color || PAL.red}" stroke-width="10"/>${a.svg}${z.svg}</g>`;
};

// ---- note card (white rounded box with bilingual text) ----
WIDGETS.note = (w, t) => {
  const x = w.x, y = w.y, bw = w.w || 520, pad = 22;
  const tx = w.h ? fitBi(w.en, w.zh, x + (w.align === 'center' ? bw / 2 : pad + (w.icon ? 62 : 0)), y + pad, bw - pad * 2 - (w.icon ? 62 : 0), w.h - pad * 2, { max: w.size || 34, font: F.comic, weight: 700, anchor: w.align === 'center' ? 'middle' : 'start' })
    : bi(w.en, w.zh, x + (w.align === 'center' ? bw / 2 : pad + (w.icon ? 62 : 0)), y + pad, { size: w.size || 32, font: F.comic, weight: 700, maxW: bw - pad * 2 - (w.icon ? 62 : 0), anchor: w.align === 'center' ? 'middle' : 'start' });
  const h = w.h || tx.h + pad * 2;
  const { tf, op } = enterTf(w, t, w.anim || 'pop', x + bw / 2, y + h / 2);
  const hl = w.pulse !== undefined && t >= w.pulse ? 0.5 + 0.5 * Math.sin((t - w.pulse) * 6) : 0;
  let ic = '';
  if (w.icon) ic = `<circle cx="${x + 40}" cy="${y + 40}" r="26" fill="${w.iconColor || PAL.red}" stroke="${PAL.ink}" stroke-width="4"/><text x="${x + 40}" y="${y + 52}" text-anchor="middle" font-family="${F.title}" font-size="34" fill="#fff">${esc(w.icon)}</text>`;
  return `<g transform="${tf}" opacity="${op}">${box(x, y, bw, h, { fill: w.fill || PAL.cream })}${hl ? `<rect x="${x - 6}" y="${y - 6}" width="${bw + 12}" height="${h + 12}" rx="16" fill="none" stroke="${PAL.gold}" stroke-width="${6 + hl * 6}"/>` : ''}${ic}${tx.svg}</g>`;
};

// ---- numbered rule card that flips in ----
WIDGETS.rule = (w, t) => {
  const x = w.x, y = w.y, bw = w.w || 820, h = w.h || 150;
  const { tf, op } = enterTf(w, t, 'flip', x + bw / 2, y + h / 2);
  const tx = fitBi(w.en, w.zh, x + 120, y + 18, bw - 150, h - 36, { max: w.size || 36, font: F.comic, weight: 700 });
  return `<g transform="${tf}" opacity="${op}">${box(x, y, bw, h, { fill: w.fill || PAL.cream })}<rect x="${x}" y="${y}" width="96" height="${h}" rx="12" fill="${w.tag || PAL.navy}" stroke="${PAL.ink}" stroke-width="5"/><text x="${x + 48}" y="${y + h / 2 + 22}" text-anchor="middle" font-family="${F.title}" font-size="60" fill="#fff">${esc(w.n ?? '')}</text><g transform="translate(0 ${(h - 36 - tx.h) / 2})">${tx.svg}</g></g>`;
};

// ---- animated counter ----
WIDGETS.counter = (w, t) => {
  const at = w.at ?? 0, dur = w.dur ?? 1.4;
  const p = prog(t, at, dur, 'out');
  let v = lerp(w.from ?? 0, w.to, p);
  if (w.steps) for (const st of w.steps) if (t >= st.t) v = lerp(v, st.v, prog(t, st.t, st.dur ?? 1, 'out'));
  const txt = (w.prefix || '') + fmtNum(v, w.fmt || 'int') + (w.suffix || '');
  const { tf, op } = enterTf(w, t, 'pop', w.x, w.y);
  const size = w.size || 120;
  let s = tb(txt, w.x, w.y - size * 0.6, { size, font: F.cond, weight: 700, anchor: w.align || 'middle', fill: w.color || PAL.ink, stroke: w.stroke, sw: 8 }).svg;
  if (w.label) s += bi(w.label[0], w.label[1], w.x, w.y + size * 0.55, { size: w.lsize || 30, font: F.cond, weight: 700, anchor: w.align || 'middle', fill: PAL.grey, zfill: PAL.grey }).svg;
  return `<g transform="${tf}" opacity="${op}">${s}</g>`;
};

// ---- worked arithmetic: terms appear one by one; result counts up ----
WIDGETS.equation = (w, t) => {
  const size = w.size || 64, y = w.y;
  const font = F.cond;
  const parts = w.terms.map(tm => ({ ...tm, wd: Math.max(measure(tm.t, size, font, 700), tm.zh ? measure(tm.zh, size * 0.42, F.zh, 600) : 0) + 34 }));
  const total = parts.reduce((a, b) => a + b.wd, 0);
  let x = (w.x ?? 960) - total / 2;
  let s = '';
  for (const tm of parts) {
    const at = tm.at ?? w.at ?? 0;
    const p = prog(t, at, 0.5, 'back');
    let txt = tm.t;
    if (tm.count) { const cp = prog(t, at, 1.2, 'out'); txt = (tm.prefix || '') + fmtNum(lerp(tm.from || 0, tm.count, cp), tm.fmt || 'int') + (tm.suffix || ''); }
    const cx = x + tm.wd / 2;
    const col = tm.hl ? (tm.color || PAL.red) : (tm.color || PAL.ink);
    if (tm.hl && p > 0.5) s += `<rect x="${x + 4}" y="${y - size * 0.95}" width="${tm.wd - 8}" height="${size * 1.25}" rx="10" fill="${PAL.goldL}" opacity="${0.8 * clamp(p)}"/>`;
    s += `<g transform="translate(${cx} ${y}) scale(${Math.max(0.001, p)}) translate(${-cx} ${-y})" opacity="${clamp(p * 1.5)}">${tb(txt, cx, y - size * 0.82, { size, font, weight: 700, anchor: 'middle', fill: col }).svg}${tm.zh ? tb(tm.zh, cx, y + 14, { size: size * 0.42, font: F.zh, weight: 600, anchor: 'middle', fill: PAL.grey }).svg : ''}</g>`;
    x += tm.wd;
  }
  return s;
};

// ---- line / price chart with progressive drawing, cursor, P&L and annotations ----
WIDGETS.chart = (w, t) => {
  const { x, y } = w; const cw = w.w, ch = w.h;
  const at = w.at ?? 0;
  const [x0, x1] = w.xr, [y0, y1] = w.yr;
  const L = x + 110, R = x + cw - 40, T = y + 70, B = y + ch - 70;
  const px = v => L + (v - x0) / (x1 - x0) * (R - L), py = v => B - (v - y0) / (y1 - y0) * (B - T);
  const ap = prog(t, at, 0.6, 'out');
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.35, 0.35, 'in') : 1;
  let s = `<g opacity="${clamp(ap * 1.3) * out}">`;
  s += box(x, y, cw, ch, { fill: w.fill || '#fbf5e3', r: 10 });
  if (w.title) s += bi(w.title[0], w.title[1], x + 24, y + 14, { size: 26, zsize: 22, font: F.cond, weight: 700, fill: PAL.ink, zfill: PAL.sepia, gap: 2 }).svg;
  if (w.illustrative) s += `<text x="${x + cw - 22}" y="${y + 34}" text-anchor="end" font-family="${F.cond}" font-size="20" fill="${PAL.grey}">ILLUSTRATIVE PATH · 示意走势</text>`;
  // axes draw in
  const axP = prog(t, at + 0.1, 0.6, 'inOut');
  s += `<line x1="${L}" y1="${B}" x2="${lerp(L, R, axP)}" y2="${B}" stroke="${PAL.ink}" stroke-width="3"/><line x1="${L}" y1="${B}" x2="${L}" y2="${lerp(B, T - 10, axP)}" stroke="${PAL.ink}" stroke-width="3"/>`;
  for (const v of (w.yTicks || [])) s += `<line x1="${L}" y1="${py(v)}" x2="${R}" y2="${py(v)}" stroke="#d6c7a2" stroke-width="2" opacity="${axP}"/><text x="${L - 14}" y="${py(v) + 9}" text-anchor="end" font-family="${F.cond}" font-size="26" fill="${PAL.grey}" opacity="${axP}">${esc((w.yPre || '') + fmtNum(v, w.yFmt || (Number.isInteger(v) ? 'int' : 'frac')) + (w.ySuf || ''))}</text>`;
  for (const [v, en, zh] of (w.xTicks || [])) s += `<text x="${px(v)}" y="${B + 32}" text-anchor="middle" font-family="${F.cond}" font-size="23" fill="${PAL.grey}" opacity="${axP}">${esc(en)}</text>${zh ? `<text x="${px(v)}" y="${B + 58}" text-anchor="middle" font-family="${F.zh}" font-size="20" fill="${PAL.grey}" opacity="${axP}">${esc(zh)}</text>` : ''}`;
  if (w.yLabel) s += `<text x="${x + 20}" y="${(T + B) / 2}" transform="rotate(-90 ${x + 20} ${(T + B) / 2})" text-anchor="middle" font-family="${F.cond}" font-size="22" fill="${PAL.grey}">${esc(w.yLabel[0] + ' · ' + w.yLabel[1])}</text>`;
  // bands and horizontal lines
  for (const b of (w.bands || [])) { const bp = prog(t, b.at ?? at, 0.6); if (bp <= 0) continue; s += `<rect x="${px(b.x0 ?? x0)}" y="${py(b.y1)}" width="${(px(b.x1 ?? x1) - px(b.x0 ?? x0)) * bp}" height="${py(b.y0) - py(b.y1)}" fill="${b.color || PAL.gold}" opacity="${0.25 * bp}"/>`; if (b.en) s += `<g opacity="${bp}">${bi(b.en, b.zh, px(b.x0 ?? x0) + 12, py(b.y1) + 8, { size: 24, zsize: 21, font: F.cond, weight: 700, fill: b.tc || PAL.brown }).svg}</g>`; }
  for (const l of (w.hlines || [])) { const lp = prog(t, l.at ?? at, 0.7, 'inOut'); if (lp <= 0) continue; const xa = px(l.x0 ?? x0), xb = px(l.x1 ?? x1); s += `<line x1="${xa}" y1="${py(l.v)}" x2="${lerp(xa, xb, lp)}" y2="${py(l.v)}" stroke="${l.color || PAL.red}" stroke-width="4" stroke-dasharray="14 9"/>`; if (l.en) s += `<g opacity="${lp}">${bi(l.en, l.zh, (l.labelX !== undefined ? px(l.labelX) : xb) - 6, py(l.v) + (l.below ? 10 : -58), { size: 24, zsize: 21, font: F.cond, weight: 700, fill: l.color || PAL.red, anchor: l.labelX !== undefined ? 'start' : 'end' }).svg}</g>`; }
  // series with progressive reveal: draw: [[t, idx], ...]
  let head = null;
  for (const se of w.series) {
    const pts = se.pts;
    let k = pts.length - 1;
    if (se.draw) {
      k = 0;
      let prevK = 0;
      for (const [dt, idx] of se.draw) { if (t >= dt) { const p = prog(t, dt, se.drawDur ?? Math.max(0.6, (idx - prevK) * 0.35), 'inOut'); k = prevK + (idx - prevK) * p; prevK = idx; } }
    } else { const p = prog(t, se.at ?? at + 0.4, se.drawDur ?? 1.6, 'inOut'); k = p * (pts.length - 1); }
    if ((se.at ?? 0) > t || k <= 0) continue;
    const kk = Math.floor(k), fr = k - kk;
    const vis = pts.slice(0, kk + 1).map(p => [px(p[0]), py(p[1])]);
    if (kk < pts.length - 1 && fr > 0) vis.push([lerp(px(pts[kk][0]), px(pts[kk + 1][0]), fr), lerp(py(pts[kk][1]), py(pts[kk + 1][1]), fr)]);
    const d = vis.map((p, i) => `${i ? 'L' : 'M'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
    if (se.fill) s += `<path d="${d} L ${vis[vis.length - 1][0]} ${B} L ${vis[0][0]} ${B} Z" fill="${se.color || PAL.blue}" opacity=".12"/>`;
    s += `<path d="${d}" fill="none" stroke="${PAL.ink}" stroke-width="${(se.width || 6) + 4}" stroke-linejoin="round" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${se.color || PAL.blue}" stroke-width="${se.width || 6}" stroke-linejoin="round" stroke-linecap="round"${se.dash ? ` stroke-dasharray="${se.dash}"` : ''}/>`;
    const last = vis[vis.length - 1];
    const lastV = kk < pts.length - 1 ? lerp(pts[kk][1], pts[kk + 1][1], fr) : pts[kk][1];
    if (se.label && k >= pts.length - 1.01) s += bi(se.label[0], se.label[1], last[0] - 8, last[1] + (se.labelBelow ? 18 : -66), { size: 24, zsize: 21, font: F.cond, weight: 700, fill: se.color || PAL.blue, anchor: 'end' }).svg;
    if (se.cursor !== false && !head) head = { X: last[0], Y: last[1], v: lastV, color: se.color || PAL.blue, se };
  }
  // annotation marks (pop in at their cue)
  for (const m of (w.marks || [])) {
    const mp = prog(t, m.at ?? at, 0.5, 'back'); if (mp <= 0) continue;
    if (m.until !== undefined && t > m.until) continue;
    const X = px(m.x), Y = py(m.y), bw = m.w || 280;
    const bx = X + (m.dx ?? 24), by = Y + (m.dy ?? -120);
    const tx = bi(m.en, m.zh, bx + 12, by + 10, { size: m.size || 25, zsize: Math.round((m.size || 25) * 0.86), font: F.comic, weight: 700, maxW: bw - 24 });
    s += `<g opacity="${clamp(mp)}"><circle cx="${X}" cy="${Y}" r="${12 * mp}" fill="${m.color || PAL.red}" stroke="${PAL.ink}" stroke-width="4"/><line x1="${X}" y1="${Y}" x2="${bx + bw / 2}" y2="${by + (by < Y ? tx.h + 20 : 0)}" stroke="${PAL.ink}" stroke-width="3"/><g transform="translate(${bx + bw / 2} ${by + tx.h / 2}) scale(${Math.max(0.001, mp)}) translate(${-(bx + bw / 2)} ${-(by + tx.h / 2)})"><rect x="${bx}" y="${by}" width="${bw}" height="${tx.h + 20}" rx="9" fill="${m.fill || '#fff'}" stroke="${PAL.ink}" stroke-width="3.5"/>${tx.svg}</g></g>`;
  }
  // moving cursor + price label + optional live P&L
  if (head && w.cursor !== false) {
    const pulse = 1 + 0.25 * Math.sin(t * 8);
    s += `<circle cx="${head.X}" cy="${head.Y}" r="${11 * pulse}" fill="${head.color}" stroke="#fff" stroke-width="4"/>`;
    if (w.cursorLabel !== false) s += `<g transform="translate(${head.X + 18} ${head.Y - 22})"><rect x="0" y="-22" width="${measure((w.yPre || '') + fmtNum(head.v, w.cursorFmt || w.yFmt || 'frac'), 26, F.cond, 700) + 22}" height="38" rx="6" fill="${PAL.ink}"/><text x="11" y="6" font-family="${F.cond}" font-weight="700" font-size="26" fill="#fff">${esc((w.yPre || '') + fmtNum(head.v, w.cursorFmt || w.yFmt || 'frac'))}</text></g>`;
    if (w.pnl && t >= (w.pnl.at ?? at)) {
      const side = w.pnl.side === 'short' ? -1 : 1;
      const pl = (head.v - w.pnl.entry) * side * w.pnl.shares * (w.pnl.mult || 1);
      const bx = w.pnl.x ?? (R - 330), by = w.pnl.y ?? (T + 6);
      s += `<g>${box(bx, by, 320, 100, { fill: PAL.ink, r: 10 })}<text x="${bx + 18}" y="${by + 34}" font-family="${F.cond}" font-size="22" fill="#bbb">${esc(w.pnl.label || (side < 0 ? 'SHORT' : 'LONG') + ' ' + (w.pnl.shares).toLocaleString('en-US') + ' · P&L 盈亏')}</text><text x="${bx + 18}" y="${by + 82}" font-family="${F.cond}" font-weight="700" font-size="46" fill="${pl >= 0 ? '#7fd38a' : '#ff7a6a'}">${esc((pl >= 0 ? '+' : '') + money(pl))}</text></g>`;
    }
  }
  return s + '</g>';
};

// ---- bar chart (bars grow at cues; value counts) ----
WIDGETS.bars = (w, t) => {
  const { x, y } = w; const bw0 = w.w, bh0 = w.h; const at = w.at ?? 0;
  const max = w.max || Math.max(...w.bars.map(b => Math.abs(b.v)));
  const hasNeg = w.bars.some(b => b.v < 0);
  const base = hasNeg ? y + bh0 * 0.56 : y + bh0 - 96;
  const sc = (hasNeg ? bh0 * 0.38 : bh0 - 180) / max;
  const slot = (bw0 - 60) / w.bars.length;
  const ap = prog(t, at, 0.5);
  let s = `<g opacity="${ap}">` + box(x, y, bw0, bh0, { fill: w.fill || '#fbf5e3', r: 10 });
  if (w.title) s += bi(w.title[0], w.title[1], x + 24, y + 14, { size: 26, zsize: 22, font: F.cond, weight: 700, zfill: PAL.sepia, gap: 2 }).svg;
  s += `<line x1="${x + 20}" y1="${base}" x2="${x + bw0 - 20}" y2="${base}" stroke="${PAL.ink}" stroke-width="3"/>`;
  w.bars.forEach((b, i) => {
    const bat = b.at ?? at + 0.2 + i * 0.25; const p = prog(t, bat, 0.9, 'out'); if (p <= 0) return;
    const v = b.v * p, bh = Math.abs(v) * sc, bx = x + 30 + i * slot + slot * 0.17, ww = slot * 0.66, by = v >= 0 ? base - bh : base;
    s += `<rect x="${bx}" y="${by}" width="${ww}" height="${Math.max(bh, 2)}" fill="${b.color || (b.v >= 0 ? PAL.up : PAL.down)}" stroke="${PAL.ink}" stroke-width="4"/>`;
    s += `<text x="${bx + ww / 2}" y="${v >= 0 ? by - 14 : by + bh + 38}" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="${w.vsize || 32}" fill="${PAL.ink}">${esc(b.vl !== undefined && p >= 1 ? b.vl : fmtNum(v, w.fmt || 'int'))}</text>`;
    s += bi(b.en, b.zh, bx + ww / 2, hasNeg ? (b.v >= 0 ? base + 12 : base - 76) : base + 10, { size: 25, zsize: 22, font: F.cond, weight: 700, anchor: 'middle', maxW: slot - 6 }).svg;
  });
  return s + '</g>';
};

// ---- flow diagram with nodes appearing and tokens travelling ----
WIDGETS.flow = (w, t) => {
  const n = w.nodes.length, dir = w.dir || 'h';
  const gap = w.gap ?? 70;
  const bw = w.bw || (dir === 'h' ? (w.w - (n - 1) * gap) / n : w.w), bh = w.bh || 210;
  const pos = i => dir === 'h' ? [w.x + i * (bw + gap), w.y] : [w.x, w.y + i * (bh + gap * 0.6)];
  let s = '';
  w.nodes.forEach((nd, i) => {
    const at = nd.at ?? (w.at ?? 0) + i * 0.4; const p = prog(t, at, 0.55, 'back'); if (p <= 0) return;
    const [bx, by] = pos(i);
    const top = nd.num !== undefined ? 64 : 18;
    const tx = fitBi(nd.en, nd.zh, bx + bw / 2, by + top, bw - 34, bh - top - 16, { max: w.size || 32, font: F.comic, weight: 700, anchor: 'middle' });
    const hl = nd.hl !== undefined && t >= nd.hl;
    s += `<g transform="translate(${bx + bw / 2} ${by + bh / 2}) scale(${Math.max(0.001, p)}) translate(${-(bx + bw / 2)} ${-(by + bh / 2)})">${box(bx, by, bw, bh, { fill: hl ? PAL.goldL : (nd.color || PAL.cream) })}`;
    if (nd.num !== undefined) s += `<circle cx="${bx + 36}" cy="${by + 36}" r="26" fill="${PAL.red}" stroke="${PAL.ink}" stroke-width="4"/><text x="${bx + 36}" y="${by + 48}" text-anchor="middle" font-family="${F.title}" font-size="32" fill="#fff">${esc(nd.num)}</text>`;
    s += `<g transform="translate(0 ${(bh - top - 16 - tx.h) / 2})">${tx.svg}</g></g>`;
    if (i < n - 1) {
      const nat = w.nodes[i + 1].at ?? (w.at ?? 0) + (i + 1) * 0.4; const ap = prog(t, nat - 0.25, 0.4, 'inOut'); if (ap <= 0) return;
      const [ax, ay] = pos(i);
      let x1, y1, x2, y2;
      if (dir === 'h') { x1 = ax + bw + 8; y1 = ay + bh / 2; x2 = ax + bw + gap - 8; y2 = y1; } else { x1 = ax + bw / 2; y1 = ay + bh + 6; x2 = x1; y2 = ay + bh + gap * 0.6 - 6; }
      const xe = lerp(x1, x2, ap), ye = lerp(y1, y2, ap);
      s += `<line x1="${x1}" y1="${y1}" x2="${xe}" y2="${ye}" stroke="${PAL.ink}" stroke-width="8"/>`;
      if (ap > 0.9) s += dir === 'h' ? `<path d="M ${x2 - 14} ${y2 - 16} L ${x2 + 6} ${y2} L ${x2 - 14} ${y2 + 16} Z" fill="${PAL.ink}"/>` : `<path d="M ${x2 - 16} ${y2 - 14} L ${x2} ${y2 + 6} L ${x2 + 16} ${y2 - 14} Z" fill="${PAL.ink}"/>`;
    }
  });
  // travelling tokens: {from, to, at, dur, label}
  for (const tk of (w.tokens || [])) {
    const p = prog(t, tk.at, tk.dur || 1.6, 'inOut'); if (p <= 0 || (tk.until !== undefined && t > tk.until)) continue;
    const [ax, ay] = pos(tk.from), [bx2, by2] = pos(tk.to);
    const X = lerp(ax + bw / 2, bx2 + bw / 2, p), Y = lerp(ay + bh / 2, by2 + bh / 2, p) - Math.sin(p * Math.PI) * (dir === 'h' ? 90 : 0);
    s += `<g transform="translate(${X} ${Y})"><circle r="26" fill="${tk.color || PAL.gold}" stroke="${PAL.ink}" stroke-width="4"/>${tk.label ? `<text y="9" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="24">${esc(tk.label)}</text>` : ''}</g>`;
  }
  return s;
};

// ---- table with rows sliding in and highlight pulses ----
WIDGETS.table = (w, t) => {
  const { x, y } = w; const tw = w.w; const n = w.cols.length;
  const widths = w.widths ? w.widths.map(f => f * tw) : w.cols.map(() => tw / n);
  const at = w.at ?? 0;
  let size = w.size || 30;
  const bottom = w.bottom || 1000;
  const cell = (en, zh, cx, cw, head, yy, sz) => bi(en, zh, cx + 16, yy, { size: sz, font: head ? F.cond : F.comic, weight: 700, maxW: cw - 32, zsize: Math.round(sz * 0.84), fill: head ? '#fff' : PAL.ink, zfill: head ? '#ffe3a0' : '#5a4a36', lh: sz * 1.18 });
  const rows = [{ cells: w.cols, head: true }, ...w.rows.map((r, i) => ({ cells: r, i }))];
  const heights = sz => rows.map(r => Math.max(...r.cells.map((c, i) => cell(c[0], c[1], 0, widths[i], r.head, 0, sz).h)) + 24);
  for (; size > 16; size--) { if (y + heights(size).reduce((a, b) => a + b, 0) <= bottom) break; }
  const hs = heights(size);
  let s = '', yy = y;
  rows.forEach((r, ri) => {
    const rat = r.head ? at : (w.rowAt ? w.rowAt[ri - 1] : at + 0.3 + (ri - 1) * 0.3);
    const p = prog(t, rat, 0.5, 'out'); const h = hs[ri];
    if (p > 0) {
      const hlAt = !r.head && w.hl ? w.hl[ri - 1] : undefined;
      const hl = hlAt !== undefined && hlAt !== null && t >= hlAt;
      const fill = r.head ? (w.headColor || PAL.navy) : (hl ? PAL.goldL : (ri % 2 ? '#fbf3df' : '#efe3c4'));
      s += `<g transform="translate(${(1 - p) * -60} 0)" opacity="${p}"><rect x="${x}" y="${yy}" width="${tw}" height="${h}" fill="${fill}" stroke="${PAL.ink}" stroke-width="3"/>`;
      if (hl) s += `<rect x="${x - 4}" y="${yy - 4}" width="${tw + 8}" height="${h + 8}" fill="none" stroke="${PAL.red}" stroke-width="${4 + 3 * Math.abs(Math.sin((t - hlAt) * 4))}"/>`;
      let cx = x;
      r.cells.forEach((c, i) => { s += cell(c[0], c[1], cx, widths[i], r.head, yy + 12, size).svg; if (i) s += `<line x1="${cx}" y1="${yy}" x2="${cx}" y2="${yy + h}" stroke="${PAL.ink}" stroke-width="2" opacity=".45"/>`; cx += widths[i]; });
      s += `</g>`;
    }
    yy += h;
  });
  return s;
};

// ---- life timeline with moving marker ----
WIDGETS.timeline = (w, t) => {
  const { x, y } = w; const tw = w.w; const [a, b] = w.range;
  const px = v => x + (v - a) / (b - a) * tw;
  const ap = prog(t, w.at ?? 0, 0.8, 'inOut');
  let s = `<line x1="${x}" y1="${y}" x2="${x + tw * ap}" y2="${y}" stroke="${PAL.ink}" stroke-width="8" stroke-linecap="round"/>`;
  for (const [v, en, zh, at] of (w.ticks || [])) { const p = prog(t, at ?? (w.at ?? 0) + 0.4, 0.4, 'back'); if (p <= 0) continue; s += `<g opacity="${p}"><line x1="${px(v)}" y1="${y - 16}" x2="${px(v)}" y2="${y + 16}" stroke="${PAL.ink}" stroke-width="4"/>${bi(en, zh, px(v), y + 26, { size: 24, zsize: 20, font: F.cond, weight: 700, anchor: 'middle' }).svg}</g>`; }
  if (w.marker) { let mv = w.marker[0][1]; for (const [mt, v] of w.marker) if (t >= mt) mv = lerp(mv, v, prog(t, mt, 1.2, 'inOut')); s += `<g transform="translate(${px(mv)} ${y})"><circle r="20" fill="${PAL.red}" stroke="${PAL.ink}" stroke-width="5"/><path d="M -14 -40 L 14 -40 L 0 -22 Z" fill="${PAL.red}" stroke="${PAL.ink}" stroke-width="3"/><text y="-50" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="32">${esc(Math.round(mv))}</text></g>`; }
  return s;
};

// ---- spinning newspaper ----
WIDGETS.newspaper = (w, t) => {
  const at = w.at ?? 0, p = prog(t, at, w.spin === false ? 0.5 : 0.9, 'out');
  const rot = w.spin === false ? (w.rot ?? -3) : lerp(720, w.rot ?? -3, p);
  const s0 = w.spin === false ? 1 : lerp(0.05, 1, p);
  const bw = w.w || 860, bh = w.h || 640, x = w.x ?? 960, y = w.y ?? 520;
  let g = `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s0})" opacity="${clamp(p * 2)}"><g transform="translate(${-bw / 2} ${-bh / 2})" filter="url(#fShadow)"><rect width="${bw}" height="${bh}" fill="#f1ead6" stroke="${PAL.ink}" stroke-width="5"/></g><g transform="translate(${-bw / 2} ${-bh / 2})">`;
  g += `<text x="${bw / 2}" y="62" text-anchor="middle" font-family="${F.fell}" font-size="54" fill="${PAL.ink}">${esc(w.paper || 'The Daily Chronicle')}</text><line x1="24" y1="80" x2="${bw - 24}" y2="80" stroke="${PAL.ink}" stroke-width="4"/><line x1="24" y1="88" x2="${bw - 24}" y2="88" stroke="${PAL.ink}" stroke-width="2"/>`;
  if (w.date) g += `<text x="${bw / 2}" y="112" text-anchor="middle" font-family="${F.type}" font-size="20">${esc(w.date)}</text>`;
  const hb = tb(w.en, bw / 2, 126, { size: w.size || 60, font: F.serif, weight: 900, maxW: bw - 60, anchor: 'middle', lh: (w.size || 60) * 1.04 });
  g += hb.svg;
  const zb = tb(w.zh, bw / 2, 136 + hb.h, { size: 36, font: F.zhs, weight: 700, maxW: bw - 60, anchor: 'middle', fill: PAL.red });
  g += zb.svg;
  const top = 160 + hb.h + zb.h;
  for (let c = 0; c < 3; c++) for (let i = 0; top + i * 24 < bh - 24; i++) g += `<line x1="${28 + c * (bw - 40) / 3}" y1="${top + i * 24}" x2="${28 + (c + 1) * (bw - 40) / 3 - 22}" y2="${top + i * 24}" stroke="#9a9182" stroke-width="8"/>`;
  return g + '</g></g>';
};

// ---- bucket-shop ticket ----
WIDGETS.ticket = (w, t) => {
  const { tf, op, p } = enterTf(w, t, 'drop', w.x, w.y);
  const rot = (w.rot ?? 6) + (1 - p) * 20;
  const lines = w.lines || ['SUGAR', 'SOLD 500 @ 105¼', '10:42'];
  let g = `<g transform="${tf} translate(${w.x} ${w.y}) rotate(${rot})" opacity="${op}"><rect x="-150" y="-90" width="300" height="180" fill="${w.color || '#f3b9c6'}" stroke="${PAL.ink}" stroke-width="5" filter="url(#fShadow)"/><text x="0" y="-52" text-anchor="middle" font-family="${F.fell}" font-size="26">${esc(w.head || 'COSMOPOLITAN STOCK BROKERAGE CO.')}</text><line x1="-130" y1="-38" x2="130" y2="-38" stroke="${PAL.ink}" stroke-width="2"/>`;
  lines.forEach((l, i) => { g += `<text x="0" y="${-2 + i * 34}" text-anchor="middle" font-family="${F.type}" font-size="${i === 1 ? 30 : 24}">${esc(l)}</text>`; });
  if (w.stamp && t >= w.stamp) g += WIDGETS.stamp({ x: 0, y: 10, at: w.stamp, en: w.stampText || 'CLOSED', zh: w.stampZh, size: 46, rot: -14 }, t);
  return g + '</g>';
};

// ---- ticker tape strip scrolling across the screen ----
WIDGETS.tape = (w, t) => {
  const y = w.y ?? 140, h = w.h || 70, sp = w.speed ?? 220;
  const at = w.at ?? 0, p = prog(t, at, 0.5);
  const items = w.items || [['SUG', '105¼'], ['BRT', '72⅛'], ['UP', '160½'], ['NP', '110']];
  let s = `<g opacity="${p}"><rect x="-200" y="${y}" width="2320" height="${h}" fill="#f8f2dc" stroke="${PAL.ink}" stroke-width="5"/>`;
  let x = 1920 - ((t - at) * sp) % 99999;
  let k = 0;
  while (x < 2200 && k < 400) {
    const [sym, val] = items[k % items.length];
    const hl = w.hl && w.hl.includes(k % items.length);
    const txt = sym + '  ' + val;
    const ww = measure(txt, h * 0.5, F.type) + 80;
    if (x + ww > -200) s += `<text x="${x}" y="${y + h * 0.68}" font-family="${F.type}" font-size="${h * 0.5}" fill="${hl ? PAL.red : '#2a2a2a'}">${esc(txt)}</text><circle cx="${x + ww - 40}" cy="${y + h / 2}" r="4" fill="#888"/>`;
    x += ww; k++;
  }
  return s + '</g>';
};

// ---- map of the US (stylised) with cities and animated routes ----
const US_OUTLINE = [[-124.7, 48.4], [-123, 46.2], [-124.1, 42], [-122.4, 37.8], [-120.6, 34.6], [-117.1, 32.5], [-114.7, 32.7], [-111, 31.3], [-108.2, 31.8], [-106.5, 31.8], [-104.4, 29.5], [-103, 29], [-101.4, 29.8], [-99.5, 27.5], [-97.4, 25.9], [-97.2, 27.7], [-94.7, 29.3], [-93.8, 29.7], [-91.5, 29.5], [-89.4, 29.2], [-89.2, 30.3], [-87.5, 30.3], [-85.2, 29.7], [-83.7, 29.9], [-82.6, 27.9], [-81.8, 26.1], [-80.4, 25.2], [-80.1, 26.7], [-80.6, 28.4], [-81.4, 30.4], [-81.1, 31.9], [-79.2, 33.2], [-77.9, 34], [-75.5, 35.2], [-76.3, 37], [-75.9, 37.9], [-75, 38.8], [-74.1, 39.7], [-74, 40.6], [-72, 41], [-70, 41.6], [-70.6, 42.6], [-70.2, 43.7], [-67, 44.8], [-67.8, 47.1], [-69.2, 47.4], [-71.5, 45], [-74.9, 45], [-76.4, 44.1], [-79.1, 43.3], [-79, 42.9], [-82.4, 41.7], [-83.5, 42.1], [-82.5, 43], [-82.4, 45.4], [-84.6, 46.4], [-88.4, 48.3], [-95.2, 49], [-123.3, 49]];
WIDGETS.map = (w, t) => {
  const { x, y } = w; const mw = w.w || 1300, mh = w.h || 760;
  const [lo0, lo1, la0, la1] = w.bounds || [-125, -66, 24, 50];
  const P = (lon, lat) => [x + (lon - lo0) / (lo1 - lo0) * mw, y + (la1 - lat) / (la1 - la0) * mh];
  const ap = prog(t, w.at ?? 0, 0.8);
  let s = `<g opacity="${ap}">`;
  s += `<path d="M ${US_OUTLINE.map(p => P(p[0], p[1]).map(v => v.toFixed(1)).join(' ')).join(' L ')} Z" fill="#e8d6a8" stroke="${PAL.ink}" stroke-width="5" filter="url(#fShadow)"/>`;
  for (const c of (w.cities || [])) {
    const cp = prog(t, c.at ?? w.at ?? 0, 0.5, 'back'); if (cp <= 0) continue;
    const [X, Y] = P(c.lon, c.lat);
    const hl = c.hl !== undefined && t >= c.hl;
    s += `<g opacity="${cp}"><circle cx="${X}" cy="${Y}" r="${(hl ? 14 + 4 * Math.sin(t * 6) : 10) * cp}" fill="${hl ? PAL.red : PAL.ink}" stroke="#fff" stroke-width="3"/>${bi(c.en, c.zh, X + (c.dx ?? 16), Y + (c.dy ?? -18), { size: 24, zsize: 20, font: F.cond, weight: 700, anchor: c.anchor || 'start', stroke: '#fbf4e2', sw: 5 }).svg}</g>`;
  }
  for (const r of (w.routes || [])) {
    const rp = prog(t, r.at, r.dur || 1.4, 'inOut'); if (rp <= 0) continue;
    const a = P(r.from[0], r.from[1]), b = P(r.to[0], r.to[1]);
    const mx = (a[0] + b[0]) / 2, my = Math.min(a[1], b[1]) - (r.arc ?? 120);
    const pt = p => [(1 - p) * (1 - p) * a[0] + 2 * (1 - p) * p * mx + p * p * b[0], (1 - p) * (1 - p) * a[1] + 2 * (1 - p) * p * my + p * p * b[1]];
    let d = `M ${a[0]} ${a[1]}`; for (let i = 1; i <= 30; i++) { const q = pt(rp * i / 30); d += ` L ${q[0].toFixed(1)} ${q[1].toFixed(1)}`; }
    s += `<path d="${d}" fill="none" stroke="${r.color || PAL.red}" stroke-width="6" stroke-dasharray="16 10"/>`;
    const e = pt(rp); s += `<circle cx="${e[0]}" cy="${e[1]}" r="10" fill="${r.color || PAL.red}" stroke="#fff" stroke-width="3"/>`;
  }
  return s + '</g>';
};

// ---- photo frame (public-domain photograph) ----
WIDGETS.photo = (w, t) => {
  const { tf, op } = enterTf(w, t, w.anim || 'pop', w.x + w.w / 2, w.y + w.h / 2);
  const kb = w.kb ? prog(t, w.at ?? 0, w.kbDur || 10, 'lin') : 0;
  const z = 1 + kb * 0.08;
  let s = `<g transform="${tf}" opacity="${op}"><g transform="rotate(${w.rot ?? 0} ${w.x + w.w / 2} ${w.y + w.h / 2})"><rect x="${w.x - 16}" y="${w.y - 16}" width="${w.w + 32}" height="${w.h + 32 + (w.en ? 70 : 0)}" fill="#f6efdc" stroke="${PAL.ink}" stroke-width="4" filter="url(#fShadow)"/><svg x="${w.x}" y="${w.y}" width="${w.w}" height="${w.h}" viewBox="${(w.w - w.w / z) / 2} ${(w.h - w.h / z) / 2} ${w.w / z} ${w.h / z}" preserveAspectRatio="xMidYMid slice"><image href="${esc(w.src)}" x="0" y="0" width="${w.w}" height="${w.h}" preserveAspectRatio="xMidYMid slice" style="filter:sepia(.55) contrast(1.08)"/></svg>`;
  if (w.en) s += bi(w.en, w.zh, w.x + w.w / 2, w.y + w.h + 10, { size: 24, zsize: 20, font: F.serif, weight: 700, anchor: 'middle', maxW: w.w }).svg;
  return s + '</g></g>';
};

// ---- arrow / circle / underline annotations that draw themselves ----
WIDGETS.arrow = (w, t) => {
  const p = prog(t, w.at ?? 0, w.dur || 0.6, 'inOut'); if (p <= 0) return '';
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.3, 0.3, 'in') : 1;
  const [x1, y1] = w.from, [x2, y2] = w.to; const cx = w.curve ? (x1 + x2) / 2 + w.curve : (x1 + x2) / 2, cy = w.curve ? (y1 + y2) / 2 - Math.abs(w.curve) : (y1 + y2) / 2;
  const pt = q => [(1 - q) * (1 - q) * x1 + 2 * (1 - q) * q * cx + q * q * x2, (1 - q) * (1 - q) * y1 + 2 * (1 - q) * q * cy + q * q * y2];
  let d = `M ${x1} ${y1}`; for (let i = 1; i <= 24; i++) { const q = pt(p * i / 24); d += ` L ${q[0].toFixed(1)} ${q[1].toFixed(1)}`; }
  const e = pt(p), e0 = pt(Math.max(0, p - 0.05)); const a = Math.atan2(e[1] - e0[1], e[0] - e0[0]) * 180 / Math.PI;
  return `<g opacity="${out}"><path d="${d}" fill="none" stroke="${w.color || PAL.red}" stroke-width="${w.width || 8}" stroke-linecap="round"/>${p > 0.85 ? `<path d="M 0 0 L -28 -16 L -28 16 Z" fill="${w.color || PAL.red}" transform="translate(${e[0]} ${e[1]}) rotate(${a})"/>` : ''}</g>`;
};
WIDGETS.circle = (w, t) => {
  const p = prog(t, w.at ?? 0, 0.6, 'inOut'); if (p <= 0) return '';
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.3, 0.3, 'in') : 1;
  const rx = w.rx || 120, ry = w.ry || 60, C = 2 * Math.PI * Math.sqrt((rx * rx + ry * ry) / 2) * 1.1;
  return `<ellipse cx="${w.x}" cy="${w.y}" rx="${rx}" ry="${ry}" fill="none" stroke="${w.color || PAL.red}" stroke-width="${w.width || 7}" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - p)}" transform="rotate(-6 ${w.x} ${w.y})" opacity="${out}"/>`;
};
WIDGETS.highlight = (w, t) => {
  const p = prog(t, w.at ?? 0, 0.5, 'out'); if (p <= 0) return '';
  const out = w.until !== undefined ? 1 - prog(t, w.until - 0.3, 0.3, 'in') : 1;
  return `<rect x="${w.x}" y="${w.y}" width="${w.w * p}" height="${w.h}" fill="${w.color || PAL.goldL}" opacity="${0.55 * out}" rx="6"/>`;
};
// ---- quote board as a widget (for lessons) ----
WIDGETS.board = (w, t) => { const { tf, op } = enterTf(w, t, 'pop', w.x + w.w / 2, w.y + w.h / 2); return `<g transform="${tf}" opacity="${op}">${quoteBoardSvg(w.x, w.y, w.w, w.h, w.rows, t, { seq: w.seq, hl: w.hlCell })}</g>`; };
WIDGETS.ticker = (w, t) => tickerSvg(w.x, w.y, w.s || 1, t, { tape: w.tape });
WIDGETS.money = (w, t) => {
  let s = ''; const n = w.n || 8;
  for (let i = 0; i < n; i++) { const p = prog(t, (w.at ?? 0) + i * 0.08, 0.4, 'bounce'); if (p <= 0) continue; s += `<g transform="translate(${w.x + (i % 4) * 8} ${w.y - i * 20 - (1 - p) * 200})"><rect width="210" height="24" rx="4" fill="#8fbf8a" stroke="${PAL.ink}" stroke-width="4"/><rect x="85" y="0" width="40" height="24" fill="#e6dcb0" stroke="${PAL.ink}" stroke-width="3"/></g>`; }
  return s;
};
WIDGETS.bales = (w, t) => { let s = ''; for (let i = 0; i < (w.n || 6); i++) { const p = prog(t, (w.at ?? 0) + i * 0.1, 0.5, 'bounce'); if (p <= 0) continue; const r = Math.floor(i / 4), c = i % 4; s += `<g transform="translate(${w.x + c * 130 + (r % 2) * 60} ${w.y - r * 92 - (1 - p) * 200})"><rect width="120" height="86" rx="10" fill="#efe9da" stroke="${PAL.ink}" stroke-width="5"/><line x1="0" y1="28" x2="120" y2="28" stroke="#8a6a3a" stroke-width="5"/><line x1="0" y1="58" x2="120" y2="58" stroke="#8a6a3a" stroke-width="5"/></g>`; } return s; };

// ---- section tag (red label) ----
WIDGETS.tag = (w, t) => {
  const p = prog(t, w.at ?? 0, 0.45, 'out');
  const ew = measure(w.en, 30, F.cond, 700), zw = measure(w.zh || '', 28, F.zh, 700);
  const bw = ew + zw + 80;
  return `<g opacity="${p}" transform="translate(${(1 - p) * -60} 0)"><rect x="${w.x}" y="${w.y}" width="${bw}" height="54" fill="${w.color || PAL.red}" stroke="${PAL.ink}" stroke-width="4"/><text x="${w.x + 20}" y="${w.y + 38}" font-family="${F.cond}" font-weight="700" font-size="30" fill="#fff" letter-spacing="2">${esc(w.en)}</text><text x="${w.x + 50 + ew}" y="${w.y + 38}" font-family="${F.zh}" font-weight="700" font-size="28" fill="#ffe9b0">${esc(w.zh || '')}</text></g>`;
};
// ---- fortune curve: log-scaled bars (debts below the axis) appearing in sequence ----
WIDGETS.fortune = (w, t) => {
  const { x, y } = w; const fw = w.w, fh = w.h; const n = w.items.length; const bw = (fw - 40) / n;
  const maxLog = Math.log10(Math.max(...w.items.map(i => Math.abs(i.v) || 1)));
  const base = y + fh * (w.items.some(i => i.v < 0) ? 0.64 : 0.82);
  const upH = base - y - 80, dnH = y + fh - base - 70;
  const sc = v => Math.max(0.02, Math.log10(Math.max(Math.abs(v), 1)) / maxLog);
  const ap = prog(t, w.at ?? 0, 0.5);
  let s = `<g opacity="${ap}">` + box(x, y, fw, fh, { fill: '#fbf5e3', r: 10 }) + `<line x1="${x + 10}" y1="${base}" x2="${x + fw - 10}" y2="${base}" stroke="${PAL.ink}" stroke-width="3"/>`;
  let prev = null;
  w.items.forEach((it, i) => {
    const at = it.at ?? (w.at ?? 0) + 0.3 + i * 0.3; const p = prog(t, at, 0.7, 'out'); if (p <= 0) return;
    const cx = x + 20 + i * bw + bw / 2, ww = bw * 0.6;
    const hh = (it.v === 0 ? 4 : sc(it.v) * (it.v >= 0 ? upH : dnH)) * p;
    const top = it.v >= 0 ? base - hh : base;
    const col = it.color || (it.v < 0 ? PAL.down : it.v === 0 ? PAL.grey : PAL.up);
    s += `<rect x="${cx - ww / 2}" y="${top}" width="${ww}" height="${Math.max(hh, 4)}" fill="${col}" stroke="${PAL.ink}" stroke-width="3"/>`;
    s += `<text x="${cx}" y="${it.v >= 0 ? top - 12 : top + hh + 30}" text-anchor="middle" font-family="${F.cond}" font-weight="700" font-size="${w.vsize || 26}" fill="${PAL.ink}" opacity="${p}">${esc(it.vl)}</text>`;
    const pt = [cx, it.v >= 0 ? top : top + hh];
    if (prev && p > 0.6) s += `<line x1="${prev[0]}" y1="${prev[1]}" x2="${pt[0]}" y2="${pt[1]}" stroke="${PAL.sepia}" stroke-width="3" stroke-dasharray="7 6"/>`;
    prev = pt;
    const ly = it.v >= 0 ? base + 10 : base - 12 - (w.lsize || 20) * 2.4;
    s += `<g opacity="${p}">${bi(it.en, it.zh, cx, ly, { size: w.lsize || 20, zsize: (w.lsize || 20) - 2, font: F.cond, weight: 700, anchor: 'middle', maxW: bw - 4 }).svg}</g>`;
  });
  return s + '</g>';
};

WIDGETS.svg = (w, t) => typeof w.svg === 'function' ? w.svg(t) : w.svg;

function drawWidget(w, t) {
  if (w.at !== undefined && t < w.at - 0.001 && !['text', 'title'].includes(w.type)) return '';
  if (w.until !== undefined && t > w.until + 0.01) return '';
  const fn = WIDGETS[w.type];
  return fn ? fn(w, t) : '';
}
