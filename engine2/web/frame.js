// engine2 frame compositor (runs in headless Chromium).
// setShots(cur, prev) once per shot, then drawFrame(t) per frame.
'use strict';

let CUR = null, PREV = null;
const $ = id => document.getElementById(id);

function camAt(shot, t) {
  const c = keyed(t, shot.camKeys || [], { x: 960, y: 540, z: 1, r: 0 });
  // shakes
  let sx = 0, sy = 0;
  for (const s of (shot.shakes || [])) {
    if (t < s.t || t > s.t + (s.dur || 0.5)) continue;
    const k = 1 - (t - s.t) / (s.dur || 0.5);
    sx += (noise1(t * 40, 1) - 0.5) * 2 * (s.amp || 14) * k;
    sy += (noise1(t * 40, 2) - 0.5) * 2 * (s.amp || 14) * k;
  }
  // hand-held micro drift so no frame is ever perfectly still
  sx += (noise1(t * 0.35, 5) - 0.5) * 8; sy += (noise1(t * 0.3, 7) - 0.5) * 6;
  return { x: c.x + sx, y: c.y + sy, z: c.z, r: c.r || 0 };
}
function camTf(cam, d) {
  const cx = 960 + (cam.x - 960) * d, cy = 540 + (cam.y - 540) * d, z = 1 + (cam.z - 1) * d;
  return `translate(960 540) rotate(${(cam.r * d).toFixed(3)}) scale(${z.toFixed(4)}) translate(${(-cx).toFixed(2)} ${(-cy).toFixed(2)})`;
}

function lipAt(shot, t) {
  if (!shot.lip) return { env: 0, speaker: null };
  const i = Math.floor(t * shot.fps);
  const e = shot.lip.env[i] || 0;
  return { env: e, speaker: shot.lip.spk[i] || null };
}

function renderShotSvg(shot, t) {
  const cam = camAt(shot, t);
  const lip = lipAt(shot, t);
  const ctx = { env: lip.env, speaker: lip.speaker, t };
  const layers = shot.set === 'photo' ? [] : drawSet(shot.set, shot.setOpts || {}, t);
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
  if (shot.set === 'photo') {
    const o = shot.setOpts || {};
    const kb = keyed(t, o.kb || [{ t: 0, x: 960, y: 540, z: 1.04 }, { t: shot.dur, x: 960, y: 540, z: 1.16 }], {});
    s += `<rect width="${W}" height="${H}" fill="#120e0a"/><g transform="${camTf({ x: kb.x, y: kb.y, z: kb.z, r: 0 }, 1)}"><image href="${esc(o.src)}" x="${o.x ?? -60}" y="${o.y ?? -40}" width="${o.w ?? 2040}" height="${o.h ?? 1160}" preserveAspectRatio="xMidYMid slice" style="filter:sepia(${o.sepia ?? 0.6}) contrast(1.1) brightness(${o.bright ?? 0.95})"/></g>`;
  }
  // background layers (depth < 1); static layers come from the per-shot bitmap cache
  const layerSvg = (L, i) => {
    if (L.static) { const st = STATIC[staticKey(shot, i)]; if (st) { const b = st.box; return `<image href="${st.url}" x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}" preserveAspectRatio="none"/>`; } }
    return L.svg;
  };
  layers.forEach((L, i) => { if (L.depth < 1) s += `<g transform="${camTf(cam, L.depth)}">${layerSvg(L, i)}</g>`; });
  // action plane: cast + world items, sorted by z
  const world = [];
  for (const c of (shot.cast || [])) {
    if (c.at !== undefined && t < c.at) continue;
    if (c.until !== undefined && t > c.until) continue;
    const enter = c.at !== undefined ? prog(t, c.at, 0.45, 'out') : 1;
    const leave = c.until !== undefined ? 1 - prog(t, c.until - 0.4, 0.4, 'in') : 1;
    const op = Math.min(enter, leave);
    world.push({ z: c.z ?? 0, svg: `<g opacity="${op.toFixed(3)}" transform="translate(0 ${((1 - enter) * 40).toFixed(1)})">${drawChar(c, t, ctx)}</g>` });
  }
  for (const w of (shot.items || [])) if (!w.screen) world.push({ z: w.z ?? 1, svg: drawWidget(w, t) });
  world.sort((a, b) => a.z - b.z);
  s += `<g transform="${camTf(cam, 1)}">${world.map(o => o.svg).join('')}</g>`;
  // foreground layers (depth >= 1)
  layers.forEach((L, i) => { if (L.depth >= 1) s += `<g transform="${camTf(cam, L.depth)}">${layerSvg(L, i)}</g>`; });
  // screen-space items (captions, sfx, HUD)
  for (const w of (shot.items || [])) if (w.screen) s += drawWidget(w, t);
  // tint
  if (shot.tint) s += `<rect width="${W}" height="${H}" fill="${shot.tint}" opacity="${shot.tintOp ?? 0.18}"/>`;
  return s + '</svg>';
}

// ---------- static layer bitmap cache ----------
const STATIC = {};
function staticKey(shot, i) { return shot.set + '|' + JSON.stringify(shot.setOpts || {}) + '|' + i; }
function staticJobs() {
  const jobs = [];
  for (const sh of [CUR, PREV]) {
    if (!sh || sh.set === 'photo') continue;
    const maxZ = Math.max(1, ...((sh.camKeys || []).map(k => k.z || 1)));
    drawSet(sh.set, sh.setOpts || {}, 0).forEach((L, i) => {
      if (!L.static) return;
      const key = staticKey(sh, i);
      const scale = Math.min(1.8, Math.max(1, 1 + (maxZ - 1) * L.depth) * 1.08);
      if (STATIC[key] && STATIC[key].scale >= scale - 0.01) return;
      if (jobs.some(j => j.key === key)) return;
      jobs.push({ key, svg: L.svg, box: L.box || [-400, -200, 2720, 1480], scale, alpha: !!L.alpha });
    });
  }
  return jobs;
}
function showStatic(job) {
  const b = job.box;
  $('frame').style.display = 'none';
  document.body.style.background = 'transparent';
  $('cap').style.display = 'block';
  $('cap').style.width = b[2] + 'px'; $('cap').style.height = b[3] + 'px';
  $('cap').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="${b[2]}" height="${b[3]}" viewBox="${b.join(' ')}">${job.svg}</svg>`;
}
function registerStatic(job, b64, mime) {
  const bin = atob(b64); const u = new Uint8Array(bin.length); for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  STATIC[job.key] = { url: URL.createObjectURL(new Blob([u], { type: mime })), box: job.box, scale: job.scale };
  $('cap').innerHTML = ''; $('cap').style.display = 'none'; $('frame').style.display = 'block'; document.body.style.background = '#000';
}
window.staticJobs = staticJobs; window.showStatic = showStatic; window.registerStatic = registerStatic;

// ---------- grain ----------
let GRAIN = null;
function initGrain() {
  const cv = $('grain'); const g = cv.getContext('2d');
  GRAIN = [];
  for (let k = 0; k < 8; k++) {
    const img = g.createImageData(cv.width, cv.height);
    let seed = k * 9973 + 1;
    for (let i = 0; i < img.data.length; i += 4) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      const v = 128 + ((seed >> 8) % 120) - 60;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v; img.data[i + 3] = 255;
    }
    GRAIN.push(img);
  }
}

// ---------- transitions ----------
function applyTrans(type, p) {
  const A = $('A'), B = $('B');
  A.style.cssText = ''; B.style.cssText = '';
  $('flash').style.opacity = 0; $('flash').style.background = '#fff';
  if (!type || type === 'cut' || p >= 1) { A.style.display = 'none'; return; }
  A.style.display = 'block';
  const e = EASE.inOut(p);
  switch (type) {
    case 'fade': B.style.opacity = e; break;
    case 'dip': $('flash').style.background = '#000'; $('flash').style.opacity = 1 - Math.abs(2 * p - 1); B.style.opacity = p < 0.5 ? 0 : 1; break;
    case 'flash': $('flash').style.opacity = Math.max(0, 1 - Math.abs(p - 0.45) * 3.2); B.style.opacity = p < 0.45 ? 0 : 1; break;
    case 'wipe': { const x = e * 2240 - 160; let pts = []; for (let i = 0; i <= 18; i++) { const yy = i / 18 * 1080; pts.push(`${x + Math.sin(i * 1.9) * 40 + (hash(i) - 0.5) * 50}px ${yy}px`); } B.style.clipPath = `polygon(0 0, ${pts.join(', ')}, 0 1080px)`; break; }
    case 'wipeL': { const x = 1920 - (e * 2240 - 160); let pts = []; for (let i = 18; i >= 0; i--) { const yy = i / 18 * 1080; pts.push(`${x + Math.sin(i * 1.9) * 40 + (hash(i) - 0.5) * 50}px ${yy}px`); } B.style.clipPath = `polygon(1920px 0, 1920px 1080px, ${pts.join(', ')})`; break; }
    case 'iris': B.style.clipPath = `circle(${(e * 1150).toFixed(0)}px at 50% 50%)`; break;
    case 'ink': { let pts = []; const r = e * 1300; for (let i = 0; i < 40; i++) { const a = i / 40 * Math.PI * 2; const rr = r * (0.82 + 0.3 * hash(i * 7 + 3)); pts.push(`${960 + Math.cos(a) * rr}px ${540 + Math.sin(a) * rr}px`); } B.style.clipPath = `polygon(${pts.join(', ')})`; break; }
    case 'whip': case 'whipL': { const d = type === 'whip' ? 1 : -1; const bl = Math.sin(p * Math.PI) * 26; A.style.transform = `translateX(${-d * e * 1920}px)`; B.style.transform = `translateX(${d * (1 - e) * 1920}px)`; A.style.filter = B.style.filter = `blur(${bl.toFixed(1)}px)`; break; }
    case 'push': A.style.transform = `translateX(${-e * 1920}px)`; B.style.transform = `translateX(${(1 - e) * 1920}px)`; break;
    case 'zoom': A.style.transform = `scale(${1 + e * 0.7})`; A.style.opacity = 1 - e; B.style.transform = `scale(${0.8 + 0.2 * e})`; B.style.opacity = e; break;
    case 'page': B.style.transform = `translateX(${(1 - e) * 1920}px) rotate(${(1 - e) * 3}deg)`; B.style.boxShadow = '-30px 0 60px rgba(0,0,0,.55)'; break;
    case 'drop': B.style.transform = `translateY(${(1 - EASE.bounce(p)) * -1080}px)`; break;
    default: B.style.opacity = e;
  }
}

// ---------- subtitles ----------
let SUBKEY = '';
function setSubs(t) {
  const list = CUR.subs || [];
  const s = list.find(x => t >= x.t0 && t <= x.t1);
  const key = s ? s.en + '|' + s.zh : '';
  if (key === SUBKEY) return;
  SUBKEY = key;
  $('subs').innerHTML = s ? `<div class="en">${esc(s.en)}</div><div class="zh">${esc(s.zh)}</div>` : '';
}

function setShots(cur, prev) {
  CUR = cur; PREV = prev; SUBKEY = '';
  if (!GRAIN) { GRAIN = 1; $('defs').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">${defsGlobal()}</svg>`; }
  $('A').innerHTML = '';
}

async function drawFrame(t, frameNo) {
  const tr = CUR.trans || null;
  const td = tr ? (tr.dur || 0.6) : 0;
  const p = tr && PREV ? clamp(t / td) : 1;
  $('B').innerHTML = renderShotSvg(CUR, t);
  if (PREV && p < 1) $('A').innerHTML = renderShotSvg(PREV, PREV.dur + t);
  else if ($('A').firstChild) $('A').innerHTML = '';
  applyTrans(tr ? tr.type : 'cut', PREV ? p : 1);
  // grain + flicker
  const imgs = [...document.querySelectorAll('image')];
  if (imgs.length) await Promise.all(imgs.map(i => i.decode ? i.decode().catch(() => { }) : null));
  return true;
}
window.setShots = setShots; window.drawFrame = drawFrame; window.renderShotSvg = renderShotSvg;
