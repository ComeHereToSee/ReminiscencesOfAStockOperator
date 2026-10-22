// engine2 characters: rigged, original period figures (c. 1890–1920).
// A character is drawn at (x, y) = waist point; head centre is ~330 px above at scale 1.
// Animated per frame: blink, breathing, idle sway, lip-sync (mouth from speech envelope),
// head nod/tilt/turn, eye look, expression blending and arm gestures (pose interpolation).
'use strict';

const LOOKS = {
  // the narrator at different ages (original design: fair hair, lean face, sharp eyes)
  boy:      { skin: '#f3cfa6', hair: '#d9b25e', hairStyle: 'boy', hat: 'cap', hatColor: '#5a4a3a', coat: '#6d5a44', vest: '#8c7a5c', collar: 'round', tie: 'bow', tieColor: '#7a2a22', jaw: 'young', nose: 'small', youth: true, iris: '#4f7fa8' },
  larry:    { skin: '#f0c79c', hair: '#d2a64e', hairStyle: 'side', coat: '#22355a', vest: '#2b3f66', collar: 'wing', tie: 'four', tieColor: '#a8322a', jaw: 'lean', nose: 'straight', iris: '#4f7fa8', chain: true },
  larryHat: { skin: '#f0c79c', hair: '#d2a64e', hairStyle: 'side', hat: 'fedora', hatColor: '#3a3632', coat: '#2c303b', vest: '#3a3f4c', collar: 'wing', tie: 'four', tieColor: '#a8322a', jaw: 'lean', nose: 'straight', iris: '#4f7fa8', chain: true },
  larryOld: { skin: '#ecc19a', hair: '#c9b48a', hairStyle: 'sideThin', coat: '#3a3d46', vest: '#55534c', collar: 'wing', tie: 'four', tieColor: '#6e1e1a', jaw: 'lean', nose: 'straight', iris: '#5d7f9a', age: 2, chain: true, pocket: true },
  // others (book characters; original designs)
  partridge:{ skin: '#ecc39d', hair: '#ece8df', hairStyle: 'bald', coat: '#4d4237', vest: '#6a5a46', collar: 'wing', tie: 'bow', tieColor: '#2a2a2a', mus: 'walrus', musColor: '#ece8df', glasses: 'pince', jaw: 'round', nose: 'round', age: 3, stout: true, chain: true },
  harding:  { skin: '#ecc19a', hair: '#5a3c22', hairStyle: 'center', coat: '#262833', vest: '#3a3c4a', collar: 'wing', tie: 'four', tieColor: '#5a2a6a', mus: 'thin', jaw: 'square', nose: 'straight', age: 1, glasses: 'round' },
  fullerton:{ skin: '#ecc09a', hair: '#bdb6aa', hairStyle: 'gray', coat: '#2e2a26', vest: '#4a443c', collar: 'wing', tie: 'ascot', tieColor: '#55606a', beard: 'chops', beardColor: '#bdb6aa', jaw: 'round', nose: 'round', age: 2, stout: true },
  percy:    { skin: '#efc5a0', hair: '#d9d4ca', hairStyle: 'gray', coat: '#ece5d2', vest: '#d8ceb5', collar: 'wing', tie: 'string', tieColor: '#222', mus: 'thin', musColor: '#d9d4ca', beard: 'goatee', beardColor: '#d9d4ca', jaw: 'lean', nose: 'hook', age: 2 },
  williamson:{ skin: '#ebc099', hair: '#8a7a68', hairStyle: 'gray', coat: '#1e2230', vest: '#2b3042', collar: 'wing', tie: 'four', tieColor: '#2f5a3a', mus: 'walrus', musColor: '#8a7a68', jaw: 'square', nose: 'round', age: 2, stout: true, glasses: 'pince', chain: true },
  keene:    { skin: '#efc59c', hair: '#c7c7c2', hairStyle: 'gray', coat: '#2c2c33', vest: '#3d3d46', collar: 'wing', tie: 'four', tieColor: '#2a2a2a', beard: 'full', beardColor: '#c7c7c2', mus: 'walrus', musColor: '#c7c7c2', jaw: 'lean', nose: 'hook', age: 2 },
  morgan:   { skin: '#e6b18c', hair: '#d8d8d2', hairStyle: 'bald', coat: '#1b1b1f', vest: '#2a2a30', collar: 'wing', tie: 'ascot', tieColor: '#4a3a2a', mus: 'walrus', musColor: '#d8d8d2', jaw: 'square', nose: 'big', age: 3, stout: true, hat: 'top', hatColor: '#141414', chain: true },
  clerk:    { skin: '#efc29a', hair: '#3a2a1a', hairStyle: 'center', hat: 'visor', hatColor: '#2f7a4a', coat: null, shirt: '#f2ede2', sleeves: true, vest: '#4a4a4a', collar: 'round', tie: 'bow', tieColor: '#222', mus: 'thin', jaw: 'lean', nose: 'straight', garters: true },
  manager:  { skin: '#eab88f', hair: '#4a3420', hairStyle: 'center', hat: 'bowler', hatColor: '#1d1d1d', coat: '#3b3b3b', vest: '#5a4a3a', collar: 'wing', tie: 'four', tieColor: '#2f5d8a', mus: 'walrus', musColor: '#4a3420', jaw: 'round', nose: 'round', stout: true, age: 1, chain: true },
  trader:   { skin: '#e6b48a', hair: '#1f1a14', hairStyle: 'side', hat: 'bowler', hatColor: '#222', coat: '#4a4a52', vest: '#5d5d66', collar: 'wing', tie: 'four', tieColor: '#a03028', mus: 'walrus', musColor: '#1f1a14', jaw: 'square', nose: 'straight' },
  friend:   { skin: '#e9b98f', hair: '#2a1d12', hairStyle: 'side', hat: 'boater', hatColor: '#e0c27a', coat: '#6b4a2e', vest: '#8a6a44', collar: 'wing', tie: 'four', tieColor: '#2f6f73', mus: 'thin', jaw: 'square', nose: 'straight' },
  officeboy:{ skin: '#f0c49a', hair: '#7a4a22', hairStyle: 'boy', hat: 'cap', hatColor: '#4a5a6a', coat: '#5a4a3a', vest: '#7a6a4a', collar: 'round', tie: 'bow', tieColor: '#334', jaw: 'young', nose: 'small', youth: true },
  wife:     { skin: '#f3cfae', hair: '#6a3e22', hairStyle: 'gibson', female: true, dress: '#6a2f4a', blouse: '#f4ece0', jaw: 'female', nose: 'small', iris: '#5a4a3a', brooch: true },
  mother:   { skin: '#efc6a2', hair: '#9a8c7c', hairStyle: 'bunLow', female: true, dress: '#3e3a52', blouse: '#e8e0d0', jaw: 'female', nose: 'small', age: 2, shawl: '#7a5a4a' },
  dressmaker:{ skin: '#f0caa6', hair: '#3a2a1e', hairStyle: 'gibson', female: true, dress: '#4a5a3a', blouse: '#efe6d6', jaw: 'female', nose: 'small', age: 1 },
  gates:    { skin: '#ebbd92', hair: '#5a4632', hairStyle: 'center', coat: '#3a3a40', vest: '#a08850', collar: 'wing', tie: 'four', tieColor: '#b8862a', mus: 'walrus', musColor: '#5a4632', jaw: 'round', nose: 'round', stout: true, age: 1, hat: 'bowler', hatColor: '#2a2a2a', chain: true },
  wolff:    { skin: '#e6b48a', hair: '#2a1e14', hairStyle: 'center', coat: '#5a4a40', vest: '#6a5a4a', collar: 'wing', tie: 'bow', tieColor: '#a83a2a', mus: 'walrus', musColor: '#2a1e14', jaw: 'round', nose: 'big', stout: true, hat: 'bowler', hatColor: '#222' },
  generic:  { skin: '#ecc09a', hair: '#4a3a2a', hairStyle: 'side', coat: '#3a3a44', vest: '#4a4a55', collar: 'wing', tie: 'four', tieColor: '#5a3a2a', jaw: 'square', nose: 'straight' },
};

// arm poses: [shoulderL, elbowL, shoulderR, elbowR] in degrees.
// shoulder: 0 = hanging down, + = swung outward/up away from the body; elbow: bend, negative folds forearm toward the centre.
const POSES = {
  idle:    [8, -8, 8, -8],
  relaxed: [6, -20, 6, -20],
  explain: [22, -95, 30, -110],
  explainR:[8, -8, 34, -118],
  point:   [8, -8, 96, -6],
  pointL:  [96, -6, 8, -8],
  pointUp: [8, -8, 150, -12],
  chin:    [10, -10, 18, -158],
  think:   [24, -112, 18, -158],
  up:      [150, 12, 150, 12],
  fist:    [8, -8, 148, -40],
  hips:    [42, -88, 42, -88],
  shrug:   [44, -70, 44, -70],
  hold:    [24, -100, 24, -100],
  holdR:   [8, -8, 26, -104],
  phone:   [26, -100, 30, -150],
  write:   [10, -10, 18, -78],
  wave:    [8, -8, 140, -50],
  grab:    [40, -40, 40, -40],
  despair: [30, -160, 30, -160],
  cross:   [0, 0, 0, 0], // drawn specially
};

function lookOf(c) { return Object.assign({}, LOOKS.generic, LOOKS[c.id] || {}, c.look || {}, c); }

// compute animated state of a character at time t (all times already in seconds)
function charState(c, t, ctx) {
  const L = lookOf(c);
  const seed = strSeed(c.id + (c.key || ''));
  // pose/expression/turn keyed by acts: [{t, pose, expr, turn, lookX, lookY, x, y, s}]
  let pose = c.pose || 'idle', prevPose = pose, poseP = 1;
  let expr = c.expr || 'neutral', prevExpr = expr, exprP = 1;
  let x = c.x, y = c.y, s = c.s || 1, turn = c.turn || 0, lx = c.lookX || 0, ly = c.lookY || 0, flip = !!c.flip;
  let walk = 0;
  for (const a of (c.acts || [])) {
    if (a.t === undefined || t < a.t) continue;
    if (a.pose && a.pose !== pose) { prevPose = pose; pose = a.pose; poseP = EASE.inOut(clamp((t - a.t) / (a.dur || 0.45))); }
    if (a.expr && a.expr !== expr) { prevExpr = expr; expr = a.expr; exprP = EASE.out(clamp((t - a.t) / 0.25)); }
  }
  // movement acts with explicit target positions
  const mv = (c.acts || []).filter(a => a.t !== undefined && (a.x !== undefined || a.y !== undefined || a.s !== undefined || a.turn !== undefined || a.lookX !== undefined));
  let cx = c.x, cy = c.y, cs = c.s || 1, ct = c.turn || 0, clx = c.lookX || 0, cly = c.lookY || 0;
  for (const a of mv) {
    if (t < a.t) break;
    const p = EASE[a.ease || 'inOut'](clamp((t - a.t) / (a.dur || 0.8)));
    if (a.x !== undefined) { if (p < 1 && a.walk !== false && Math.abs(a.x - cx) > 40) walk = (t - a.t) * 6; cx = lerp(cx, a.x, p); }
    if (a.y !== undefined) cy = lerp(cy, a.y, p);
    if (a.s !== undefined) cs = lerp(cs, a.s, p);
    if (a.turn !== undefined) ct = lerp(ct, a.turn, p);
    if (a.lookX !== undefined) clx = lerp(clx, a.lookX, p);
    if (a.lookY !== undefined) cly = lerp(cly, a.lookY, p);
  }
  x = cx; y = cy; s = cs; turn = ct; lx = clx; ly = cly;
  // speech
  const speaking = ctx.speaker && ctx.speaker === (c.key || c.id);
  const env = speaking ? (ctx.env || 0) : 0;
  // blink every 2.5–5.5 s, plus a blink when expression changes
  const period = 2.6 + hash(seed) * 3;
  const ph = ((t + hash(seed + 3) * period) % period);
  let blink = ph < 0.13 ? Math.sin(ph / 0.13 * Math.PI) : 0;
  if (c.eyesClosed) blink = 1;
  const breathe = Math.sin(t * 1.7 + seed) * 0.5 + 0.5;
  const sway = Math.sin(t * 0.6 + seed) * 2.2;
  // speech-driven head motion
  const nod = (speaking ? Math.sin(t * 7.3) * env * 5 : 0) + (c.nod ? Math.sin(t * 5) * 4 : 0);
  const tilt = (speaking ? noise1(t * 1.6, seed) * 6 - 3 : noise1(t * 0.5, seed) * 3 - 1.5) + (c.tilt || 0);
  return { L, x, y, s, flip, pose, prevPose, poseP, expr, prevExpr, exprP, turn, lx, ly, blink, breathe, sway, env, speaking, nod, tilt, walk, seed };
}

function poseAngles(st) {
  const a = POSES[st.prevPose] || POSES.idle, b = POSES[st.pose] || POSES.idle;
  return a.map((v, i) => lerp(v, b[i], st.poseP));
}

const EXPR = { // brows: [innerLift, outerLift, angle]; eyes: openness; mouth base: curve (+smile)
  neutral:    { brow: 0, browA: 0, eye: 1, curve: 0.05, wide: 0 },
  smile:      { brow: 2, browA: 0, eye: 0.85, curve: 0.8, wide: 0.2 },
  grin:       { brow: 4, browA: 0, eye: 0.7, curve: 1, wide: 0.9, teeth: 1 },
  laugh:      { brow: 6, browA: 0, eye: 0.35, curve: 1, wide: 1, teeth: 1 },
  frown:      { brow: -4, browA: 10, eye: 0.9, curve: -0.6, wide: 0 },
  angry:      { brow: -8, browA: 22, eye: 0.85, curve: -0.7, wide: 0.6, teeth: 1 },
  shock:      { brow: 14, browA: -6, eye: 1.35, curve: 0, wide: 0.2, o: 1 },
  worry:      { brow: 8, browA: -16, eye: 1, curve: -0.35, wide: 0 },
  sad:        { brow: 6, browA: -20, eye: 0.75, curve: -0.6, wide: 0 },
  think:      { brow: 4, browA: 8, eye: 0.85, curve: -0.1, wide: 0, side: 1 },
  determined: { brow: -5, browA: 14, eye: 0.8, curve: -0.05, wide: 0 },
  tired:      { brow: 2, browA: -8, eye: 0.55, curve: -0.2, wide: 0 },
  sly:        { brow: -2, browA: 6, eye: 0.7, curve: 0.5, wide: 0, side: 1 },
  shout:      { brow: -6, browA: 18, eye: 1.1, curve: 0, wide: 1, o: 1 },
};
function exprMix(st) {
  const a = EXPR[st.prevExpr] || EXPR.neutral, b = EXPR[st.expr] || EXPR.neutral, p = st.exprP;
  const r = {};
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) r[k] = lerp(a[k] || 0, b[k] || 0, p);
  return r;
}

const INK = '#17120c';
function sleeve(pts, color, w) {
  const d = 'M' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');
  return `<path d="${d}" fill="none" stroke="${INK}" stroke-width="${w + 12}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function handSvg(x, y, ang, skin, kind = 'open', s = 1) {
  // ang: direction of forearm (deg, 0 = pointing down)
  let g = `<g transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${ang.toFixed(1)}) scale(${s})">`;
  if (kind === 'fist') g += `<rect x="-22" y="-6" width="44" height="40" rx="16" fill="${skin}" stroke="${INK}" stroke-width="5"/><path d="M-12 8 h24 M-12 20 h24" stroke="${INK}" stroke-width="2.5" opacity=".5"/>`;
  else if (kind === 'point') g += `<rect x="-20" y="-6" width="40" height="34" rx="14" fill="${skin}" stroke="${INK}" stroke-width="5"/><rect x="-6" y="20" width="13" height="40" rx="6" fill="${skin}" stroke="${INK}" stroke-width="4.5"/>`;
  else g += `<path d="M-22 -6 Q-26 26 -14 44 Q0 54 14 44 Q26 26 22 -6 Z" fill="${skin}" stroke="${INK}" stroke-width="5"/><path d="M-8 30 v14 M2 32 v15 M12 28 v13" stroke="${INK}" stroke-width="2.5" opacity=".45"/><path d="M-22 6 Q-36 14 -34 26" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>`;
  return g + '</g>';
}

// arm geometry from shoulder S with angles (deg). side: -1 left, +1 right (screen space before flip)
function armPts(S, sh, el, side, ua = 150, fa = 138) {
  const r1 = (side * sh) * Math.PI / 180;
  const E = [S[0] + Math.sin(r1) * ua * 1, S[1] + Math.cos(r1) * ua];
  const r2 = (side * (sh + el)) * Math.PI / 180;
  const Wr = [E[0] + Math.sin(r2) * fa, E[1] + Math.cos(r2) * fa];
  return { E, W: Wr, ang: -(side * (sh + el)) };
}

function drawChar(c, t, ctx) {
  const st = charState(c, t, ctx);
  const L = st.L, ink = INK, sk = L.skin;
  const shade = 'rgba(110,55,25,0.22)';
  const bw = L.stout ? 168 : (L.youth ? 124 : (L.female ? 120 : 146));
  const ang = poseAngles(st);
  const ex = exprMix(st);
  let back = '', body = '', head = '', front = '';
  const by = -st.breathe * 3; // chest rise
  // ----- legs (full body) -----
  if (c.full) {
    const ph = st.walk;
    const sw = st.walk ? Math.sin(ph) * 18 : 0;
    const pants = L.pants || (L.female ? L.dress : '#2b2b30');
    if (L.female) body += `<path d="M ${-bw + 4} 0 L ${-bw - 40} 430 L ${bw + 40} 430 L ${bw - 4} 0 Z" fill="${L.dress}" stroke="${ink}" stroke-width="6"/><path d="M ${-bw + 40} 60 L ${-bw + 10} 420 M 0 60 L 0 425 M ${bw - 40} 60 L ${bw - 10} 420" stroke="${ink}" stroke-width="3" opacity=".25"/>`;
    else for (const sd of [-1, 1]) {
      const a = sd * sw;
      body += `<g transform="rotate(${a} ${sd * 52} 0)"><path d="M ${sd * 52 - 44} -10 L ${sd * 52 - 40} 400 L ${sd * 52 + 40} 400 L ${sd * 52 + 44} -10 Z" fill="${pants}" stroke="${ink}" stroke-width="6"/><path d="M ${sd * 52 - 48} 400 Q ${sd * 52 + (sd > 0 ? 70 : -70)} 392 ${sd * 52 + (sd > 0 ? 74 : -74)} 428 L ${sd * 52 - 48} 430 Z" fill="#1a1612" stroke="${ink}" stroke-width="5"/></g>`;
    }
  }
  // ----- torso -----
  const coat = L.coat;
  if (L.female) {
    body += `<path d="M ${-bw + 6} -104 Q ${-bw - 20} -96 ${-bw - 26} -40 L ${-bw - 34} 300 L ${bw + 34} 300 L ${bw + 26} -40 Q ${bw + 20} -96 ${bw - 6} -104 L 34 -132 L -34 -132 Z" fill="${L.blouse}" stroke="${ink}" stroke-width="6" transform="translate(0 ${by})"/>`;
    body += `<path d="M ${-bw - 30} 40 Q 0 70 ${bw + 30} 40 L ${bw + 36} 300 L ${-bw - 36} 300 Z" fill="${L.dress}" stroke="${ink}" stroke-width="6"/>`;
    body += `<path d="M -30 -132 Q 0 -96 30 -132 L 26 -168 L -26 -168 Z" fill="${L.blouse}" stroke="${ink}" stroke-width="5"/>`; // high collar
    body += `<path d="M -26 -160 Q 0 -150 26 -160 M -28 -146 Q 0 -136 28 -146" stroke="${ink}" stroke-width="2" fill="none" opacity=".4"/>`;
    if (L.shawl) body += `<path d="M ${-bw - 10} -90 Q 0 40 ${bw + 10} -90 L ${bw + 22} -40 Q 0 110 ${-bw - 22} -40 Z" fill="${L.shawl}" stroke="${ink}" stroke-width="5"/>`;
    if (L.brooch) body += `<circle cx="0" cy="-122" r="10" fill="${PAL.gold}" stroke="${ink}" stroke-width="3"/>`;
  } else {
    const shirt = L.shirt || '#f6f1e6';
    if (!L.sleeves) {
      body += `<path d="M ${-bw} -100 Q ${-bw - 20} -92 ${-bw - 27} -42 L ${-bw - 40} 300 L ${bw + 40} 300 L ${bw + 27} -42 Q ${bw + 20} -92 ${bw} -100 L 44 -128 L -44 -128 Z" fill="${coat}" stroke="${ink}" stroke-width="6" transform="translate(0 ${by})"/>`;
      body += `<path d="M ${bw - 34} -96 Q ${bw + 12} -64 ${bw + 22} 40 L ${bw + 36} 300 L ${bw - 8} 300 Z" fill="#000" opacity=".2"/>`;
    } else {
      body += `<path d="M ${-bw} -100 Q ${-bw - 20} -92 ${-bw - 27} -42 L ${-bw - 40} 300 L ${bw + 40} 300 L ${bw + 27} -42 Q ${bw + 20} -92 ${bw} -100 L 44 -128 L -44 -128 Z" fill="${shirt}" stroke="${ink}" stroke-width="6" transform="translate(0 ${by})"/>`;
    }
    // waistcoat
    if (L.vest) {
      body += `<path d="M -66 -118 L -74 300 L 74 300 L 66 -118 L 0 30 Z" fill="${L.vest}" stroke="${ink}" stroke-width="5"/>`;
      for (let i = 0; i < 4; i++) body += `<circle cx="${i % 2 ? 0 : 0}" cy="${60 + i * 48}" r="6" fill="${PAL.goldL}" stroke="${ink}" stroke-width="2.5"/>`;
      if (L.chain) body += `<path d="M 6 110 Q 40 140 62 118" stroke="${PAL.gold}" stroke-width="4" fill="none"/><circle cx="62" cy="118" r="5" fill="${PAL.gold}"/>`;
    }
    // shirt front and collar
    body += `<path d="M -44 -128 L 0 30 L 44 -128 Z" fill="${shirt}" stroke="${ink}" stroke-width="4"/>`;
    if (L.collar === 'wing') body += `<path d="M -30 -150 L -30 -122 L -10 -112 L 0 -124 L 10 -112 L 30 -122 L 30 -150 Q 0 -140 -30 -150 Z" fill="${shirt}" stroke="${ink}" stroke-width="4"/><path d="M -10 -112 L -20 -102 L -4 -106 Z M 10 -112 L 20 -102 L 4 -106 Z" fill="${shirt}" stroke="${ink}" stroke-width="3"/>`;
    else body += `<path d="M -32 -142 L -36 -118 L -6 -104 L 0 -118 L 6 -104 L 36 -118 L 32 -142 Q 0 -132 -32 -142 Z" fill="${shirt}" stroke="${ink}" stroke-width="4"/>`;
    const tc = L.tieColor;
    if (L.tie === 'four') body += `<path d="M -11 -110 L 11 -110 L 15 -94 L 24 22 L 0 48 L -24 22 L -15 -94 Z" fill="${tc}" stroke="${ink}" stroke-width="4"/><path d="M -8 -92 L 8 -92" stroke="${ink}" stroke-width="2" opacity=".5"/>`;
    if (L.tie === 'bow') body += `<path d="M 0 -108 L -32 -124 L -32 -90 Z M 0 -108 L 32 -124 L 32 -90 Z" fill="${tc}" stroke="${ink}" stroke-width="4"/><circle cx="0" cy="-108" r="8" fill="${tc}" stroke="${ink}" stroke-width="3"/>`;
    if (L.tie === 'ascot') body += `<path d="M -18 -112 Q 0 -100 18 -112 L 22 -40 Q 0 -20 -22 -40 Z" fill="${tc}" stroke="${ink}" stroke-width="4"/><circle cx="0" cy="-74" r="5" fill="${PAL.goldL}" stroke="${ink}" stroke-width="2"/>`;
    if (L.tie === 'string') body += `<path d="M 0 -106 L -18 -116 L -16 -96 Z M 0 -106 L 18 -116 L 16 -96 Z M -4 -104 L -10 -20 M 4 -104 L 10 -20" fill="${tc}" stroke="${ink}" stroke-width="4"/>`;
    if (!L.sleeves) {
      body += `<path d="M -44 -128 L -84 -52 L -50 -42 L -8 40" fill="none" stroke="${ink}" stroke-width="5"/><path d="M 44 -128 L 84 -52 L 50 -42 L 8 40" fill="none" stroke="${ink}" stroke-width="5"/>`;
      body += `<path d="M -44 -128 L -84 -52 L -50 -42 L -8 40 L -40 -128 Z" fill="${coat}" opacity=".0"/>`;
      if (L.pocket) body += `<path d="M ${bw - 74} -38 L ${bw - 24} -44 L ${bw - 30} -26 L ${bw - 72} -22 Z" fill="${PAL.cream}" stroke="${ink}" stroke-width="3"/>`;
    }
    if (L.garters) body += `<rect x="${-bw - 30}" y="-20" width="40" height="12" fill="#a83a2a" stroke="${ink}" stroke-width="3" transform="rotate(-8)"/><rect x="${bw - 10}" y="-20" width="40" height="12" fill="#a83a2a" stroke="${ink}" stroke-width="3" transform="rotate(8)"/>`;
  }
  // ----- neck -----
  const nw = L.female ? 22 : (L.stout ? 32 : 27);
  body += `<path d="M ${-nw} -176 L ${-nw} -136 Q 0 -122 ${nw} -136 L ${nw} -176 Z" fill="${sk}" stroke="${ink}" stroke-width="5"/>`;
  // ----- arms -----
  const armCol = L.female ? L.blouse : (L.sleeves ? (L.shirt || '#f6f1e6') : coat);
  const SL = [-bw + 18, -96 + by], SR = [bw - 18, -96 + by];
  const armW = L.youth ? 50 : (L.female ? 46 : 60);
  const handKind = { point: 'point', pointL: 'point', pointUp: 'point', fist: 'fist' }[st.pose] || 'open';
  if (st.pose === 'cross' && st.poseP > 0.5) {
    front += sleeve([[SL[0] + 6, SL[1] + 20], [SL[0] + 10, SL[1] + 160], [SR[0] - 40, SR[1] + 140]], armCol, armW);
    front += sleeve([[SR[0] - 6, SR[1] + 20], [SR[0] - 10, SR[1] + 176], [SL[0] + 44, SL[1] + 156]], armCol, armW);
    front += handSvg(SR[0] - 36, SR[1] + 132, -100, sk, 'open', 0.9) + handSvg(SL[0] + 44, SL[1] + 150, 100, sk, 'open', 0.9);
  } else {
    // gesture wobble while speaking
    const wob = st.speaking ? Math.sin(t * 3.1 + st.seed) * 6 * st.env : 0;
    const aL = armPts(SL, ang[0], ang[1] + wob, -1, L.youth ? 132 : 150, L.youth ? 120 : 138);
    const aR = armPts(SR, ang[2], ang[3] - wob, 1, L.youth ? 132 : 150, L.youth ? 120 : 138);
    const raisedL = aL.W[1] < SL[1] + 40, raisedR = aR.W[1] < SR[1] + 40;
    const drawArm = (S, a, sd, kind) => {
      let g = sleeve([S, a.E, a.W], armCol, armW);
      const cuff = [lerp(a.E[0], a.W[0], 0.86), lerp(a.E[1], a.W[1], 0.86)];
      g += `<circle cx="${cuff[0].toFixed(1)}" cy="${cuff[1].toFixed(1)}" r="${armW / 2 - 2}" fill="${L.female ? L.blouse : '#f6f1e6'}" stroke="${ink}" stroke-width="4"/>`;
      g += handSvg(a.W[0], a.W[1], a.ang, sk, kind, L.youth ? 0.85 : 1);
      return g;
    };
    const armL = drawArm(SL, aL, -1, ['pointL'].includes(st.pose) ? 'point' : (st.pose === 'up' ? 'open' : 'open'));
    const armR = drawArm(SR, aR, 1, handKind);
    // arms hanging go behind the hips edge but in front of the torso
    front += armL + armR;
  }
  // ----- head -----
  const hy = -262, turnX = st.turn * 16;
  head += `<g transform="translate(${(st.sway * 0.4).toFixed(1)} ${(st.nod - st.breathe * 2).toFixed(1)}) rotate(${st.tilt.toFixed(2)} 0 ${hy + 60})">`;
  // ears
  const earL = st.turn > 0.5 ? '' : `<ellipse cx="${-66 + turnX * 0.3}" cy="${hy + 8}" rx="13" ry="22" fill="${sk}" stroke="${ink}" stroke-width="5"/>`;
  const earR = st.turn < -0.5 ? '' : `<ellipse cx="${66 + turnX * 0.3}" cy="${hy + 8}" rx="13" ry="22" fill="${sk}" stroke="${ink}" stroke-width="5"/>`;
  head += earL + earR;
  // skull + jaw
  const jaw = { lean: [62, 92, 26], square: [66, 88, 36], round: [70, 84, 44], young: [62, 80, 38], female: [58, 84, 26] }[L.jaw] || [64, 88, 32];
  const [hx, hh, jw] = jaw;
  const headPath = `M ${-hx} ${hy - 20} Q ${-hx - 2} ${hy - 104} 0 ${hy - 106} Q ${hx + 2} ${hy - 104} ${hx} ${hy - 20} Q ${hx} ${hy + hh * 0.55} ${jw} ${hy + hh * 0.86} Q 0 ${hy + hh * 1.02} ${-jw} ${hy + hh * 0.86} Q ${-hx} ${hy + hh * 0.55} ${-hx} ${hy - 20} Z`;
  head += `<path d="${headPath}" fill="${sk}" stroke="${ink}" stroke-width="6"/>`;
  head += `<clipPath id="hc${st.seed}"><path d="${headPath}"/></clipPath>`;
  head += `<g clip-path="url(#hc${st.seed})"><path d="M ${20 + turnX} ${hy - 120} Q ${hx + 30} ${hy - 40} ${hx + 6} ${hy + 30} Q ${hx - 10} ${hy + hh} ${-10 + turnX} ${hy + hh + 10} Q ${40 + turnX} ${hy + 30} ${36 + turnX} ${hy - 30} Z" fill="${shade}"/><ellipse cx="${-34 + turnX}" cy="${hy + 30}" rx="18" ry="10" fill="#e88a7a" opacity="${L.female ? 0.35 : 0.18}"/><ellipse cx="${34 + turnX}" cy="${hy + 30}" rx="18" ry="10" fill="#e88a7a" opacity="${L.female ? 0.35 : 0.18}"/></g>`;
  // age lines
  if (L.age >= 1) head += `<path d="M ${-34 + turnX} ${hy - 56} q 34 -8 68 0" stroke="${ink}" stroke-width="2.4" fill="none" opacity=".35"/>`;
  if (L.age >= 2) head += `<path d="M ${-30 + turnX} ${hy - 46} q 30 -6 60 0 M ${-40 + turnX} ${hy + 36} q -8 22 4 40 M ${40 + turnX} ${hy + 36} q 8 22 -4 40 M ${-50 + turnX} ${hy - 4} l -8 -6 M ${50 + turnX} ${hy - 4} l 8 -6" stroke="${ink}" stroke-width="2.6" fill="none" opacity=".4"/>`;
  if (L.age >= 3) head += `<path d="M ${-26 + turnX} ${hy + 20} q -6 6 -4 14 M ${26 + turnX} ${hy + 20} q 6 6 4 14" stroke="${ink}" stroke-width="2" fill="none" opacity=".35"/>`;
  // eyes
  const ey = hy - 6;
  const eo = clamp(ex.eye * (1 - st.blink), 0, 1.4);
  for (const sd of [-1, 1]) {
    const ex0 = sd * 27 + turnX;
    const rx = (L.female ? 13 : 12) * (1 - Math.abs(st.turn) * 0.15 * (sd * st.turn > 0 ? -1 : 1));
    const ry = 9 * eo;
    if (ry < 1.2) head += `<path d="M ${ex0 - rx} ${ey} Q ${ex0} ${ey + 4} ${ex0 + rx} ${ey}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    else {
      const px = ex0 + st.lx * 5 + (ex.side ? 4 : 0), py = ey + st.ly * 3;
      head += `<ellipse cx="${ex0}" cy="${ey}" rx="${rx}" ry="${ry}" fill="#fff" stroke="${ink}" stroke-width="3.5"/>`;
      head += `<clipPath id="ec${st.seed}${sd}"><ellipse cx="${ex0}" cy="${ey}" rx="${rx}" ry="${ry}"/></clipPath><g clip-path="url(#ec${st.seed}${sd})"><circle cx="${px}" cy="${py}" r="7.2" fill="${L.iris || '#5a4a3a'}"/><circle cx="${px}" cy="${py}" r="3.6" fill="${ink}"/><circle cx="${px + 2.5}" cy="${py - 2.5}" r="1.8" fill="#fff"/></g>`;
      head += `<path d="M ${ex0 - rx - 2} ${ey - ry * 0.4} Q ${ex0} ${ey - ry - 4} ${ex0 + rx + 2} ${ey - ry * 0.4}" stroke="${ink}" stroke-width="${L.female ? 4.5 : 3.5}" fill="none" stroke-linecap="round"/>`;
      if (L.age >= 2) head += `<path d="M ${ex0 - rx} ${ey + ry + 4} Q ${ex0} ${ey + ry + 8} ${ex0 + rx} ${ey + ry + 4}" stroke="${ink}" stroke-width="1.8" fill="none" opacity=".4"/>`;
    }
    // brows
    const bc = L.hairStyle === 'bald' ? '#cfc8bd' : (L.age >= 2 ? '#cbc3b5' : (L.browColor || PAL.ink));
    const lift = ex.brow + (st.speaking ? st.env * 3 : 0);
    const inner = ey - 24 - lift + sd * 0 - (ex.browA * -0.25);
    const outer = ey - 24 - lift - ex.browA * 0.3;
    const thick = L.female ? 4 : (L.age >= 2 ? 7 : 6);
    head += `<path d="M ${ex0 - sd * 15} ${(ey - 22 - lift + ex.browA * 0.35).toFixed(1)} Q ${ex0} ${(ey - 30 - lift).toFixed(1)} ${ex0 + sd * 16} ${(ey - 24 - lift - ex.browA * 0.2).toFixed(1)}" stroke="${bc}" stroke-width="${thick}" stroke-linecap="round" fill="none"/>`;
  }
  // glasses
  if (L.glasses === 'round') head += `<circle cx="${-27 + turnX}" cy="${ey}" r="19" fill="#bfe0ea" fill-opacity=".18" stroke="${ink}" stroke-width="3.5"/><circle cx="${27 + turnX}" cy="${ey}" r="19" fill="#bfe0ea" fill-opacity=".18" stroke="${ink}" stroke-width="3.5"/><path d="M ${-8 + turnX} ${ey} L ${8 + turnX} ${ey}" stroke="${ink}" stroke-width="3.5"/>`;
  if (L.glasses === 'pince') head += `<ellipse cx="${-26 + turnX}" cy="${ey + 2}" rx="17" ry="14" fill="#bfe0ea" fill-opacity=".18" stroke="${ink}" stroke-width="3"/><ellipse cx="${26 + turnX}" cy="${ey + 2}" rx="17" ry="14" fill="#bfe0ea" fill-opacity=".18" stroke="${ink}" stroke-width="3"/><path d="M ${-9 + turnX} ${ey} Q ${turnX} ${ey - 6} ${9 + turnX} ${ey} M ${43 + turnX} ${ey} Q ${70} ${ey + 40} ${60} ${ey + 120}" stroke="${ink}" stroke-width="2.5" fill="none"/>`;
  // nose
  const nx = turnX * 1.3;
  const noses = {
    straight: `M ${2 + nx} ${hy - 4} L ${-6 + nx} ${hy + 30} Q ${2 + nx} ${hy + 38} ${12 + nx} ${hy + 31}`,
    small: `M ${-4 + nx} ${hy + 22} Q ${2 + nx} ${hy + 30} ${8 + nx} ${hy + 22}`,
    round: `M ${2 + nx} ${hy} Q ${-12 + nx} ${hy + 26} ${-6 + nx} ${hy + 34} Q ${4 + nx} ${hy + 42} ${14 + nx} ${hy + 33}`,
    hook: `M ${4 + nx} ${hy - 6} Q ${16 + nx} ${hy + 10} ${4 + nx} ${hy + 34} Q ${0 + nx} ${hy + 40} ${12 + nx} ${hy + 34}`,
    big: `M ${4 + nx} ${hy - 6} Q ${-18 + nx} ${hy + 30} ${-6 + nx} ${hy + 40} Q ${8 + nx} ${hy + 50} ${20 + nx} ${hy + 38}`,
  };
  head += `<path d="${noses[L.nose] || noses.straight}" stroke="${ink}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
  // mouth (expression + lip-sync)
  const my = hy + 56, mx = turnX * 1.1;
  const open = clamp(st.env * 1.15 + (ex.o || 0) * 0.8 + (ex.wide > 0.8 ? 0.25 : 0), 0, 1.2);
  const mw = (L.female ? 18 : 22) + ex.wide * 8 + open * 4;
  const curve = ex.curve * 12;
  if (open < 0.08) head += `<path d="M ${mx - mw} ${my - curve * 0.3} Q ${mx} ${my + curve} ${mx + mw} ${my - curve * 0.3}" stroke="${ink}" stroke-width="4.5" fill="none" stroke-linecap="round"/>`;
  else {
    const oh = 4 + open * 22;
    head += `<path d="M ${mx - mw} ${my - curve * 0.3} Q ${mx} ${my - 4 + curve * 0.5} ${mx + mw} ${my - curve * 0.3} Q ${mx + mw * 0.7} ${my + oh} ${mx} ${my + oh + curve * 0.3} Q ${mx - mw * 0.7} ${my + oh} ${mx - mw} ${my - curve * 0.3} Z" fill="#5a1a18" stroke="${ink}" stroke-width="4.5" stroke-linejoin="round"/>`;
    if (ex.teeth || open > 0.4) head += `<path d="M ${mx - mw * 0.75} ${my - 1} Q ${mx} ${my + 3} ${mx + mw * 0.75} ${my - 1} L ${mx + mw * 0.6} ${my + 5} Q ${mx} ${my + 8} ${mx - mw * 0.6} ${my + 5} Z" fill="#fff"/>`;
    if (open > 0.5) head += `<ellipse cx="${mx}" cy="${my + oh * 0.7}" rx="${mw * 0.45}" ry="${oh * 0.25}" fill="#b0453c"/>`;
  }
  if (L.female) head += `<path d="M ${mx - mw * 0.6} ${my - 2} Q ${mx} ${my - 7} ${mx + mw * 0.6} ${my - 2}" stroke="#b5544a" stroke-width="3" fill="none" opacity=".55"/>`;
  // facial hair
  if (L.mus === 'walrus') head += `<path d="M ${mx - 40} ${my + 2} Q ${mx - 34} ${my - 22} ${mx} ${my - 16} Q ${mx + 34} ${my - 22} ${mx + 40} ${my + 2} Q ${mx + 22} ${my - 4} ${mx} ${my - 4} Q ${mx - 22} ${my - 4} ${mx - 40} ${my + 2} Z" fill="${L.musColor || L.hair}" stroke="${ink}" stroke-width="4"/>`;
  if (L.mus === 'thin') head += `<path d="M ${mx - 26} ${my - 6} Q ${mx} ${my - 18} ${mx + 26} ${my - 6}" stroke="${L.musColor || L.hair}" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M ${mx - 26} ${my - 6} Q ${mx} ${my - 18} ${mx + 26} ${my - 6}" stroke="${ink}" stroke-width="1.5" fill="none" opacity=".5"/>`;
  if (L.beard === 'goatee') head += `<path d="M ${mx - 14} ${my + 22} Q ${mx} ${my + 64} ${mx + 14} ${my + 22} Z" fill="${L.beardColor}" stroke="${ink}" stroke-width="4"/>`;
  if (L.beard === 'full') head += `<path d="M ${-hx} ${hy + 4} Q ${-hx - 4} ${hy + hh + 28} 0 ${hy + hh + 50} Q ${hx + 4} ${hy + hh + 28} ${hx} ${hy + 4} Q ${hx - 8} ${hy + 60} ${mx + 34} ${my + 18} Q ${mx} ${my + 30} ${mx - 34} ${my + 18} Q ${-hx + 8} ${hy + 60} ${-hx} ${hy + 4} Z" fill="${L.beardColor}" stroke="${ink}" stroke-width="5"/>`;
  if (L.beard === 'chops') head += `<path d="M ${-hx} ${hy - 10} Q ${-hx - 6} ${hy + 50} ${-30} ${hy + 76} L ${-34} ${hy + 30} Z M ${hx} ${hy - 10} Q ${hx + 6} ${hy + 50} ${30} ${hy + 76} L ${34} ${hy + 30} Z" fill="${L.beardColor}" stroke="${ink}" stroke-width="4"/>`;
  // hair
  const hc = L.hair;
  const hs = L.hairStyle;
  if (hs === 'side' || hs === 'sideThin') head += `<path d="M ${-hx - 3} ${hy - 6} Q ${-hx - 10} ${hy - 116} ${10} ${hy - 116} Q ${hx + 10} ${hy - 112} ${hx + 4} ${hy - 6} Q ${hx - 2} ${hy - 58} ${hx - 22} ${hy - 72} Q ${10} ${hy - 58} ${-30} ${hy - 82} Q ${-52} ${hy - 62} ${-hx - 3} ${hy - 6} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/><path d="M ${-30} ${hy - 82} Q ${-14} ${hy - 108} ${36} ${hy - 110} M ${-10} ${hy - 76} Q ${20} ${hy - 98} ${60} ${hy - 86}" stroke="${ink}" stroke-width="2.4" fill="none" opacity=".45"/><path d="M ${-40} ${hy - 96} Q ${-20} ${hy - 110} ${10} ${hy - 108}" stroke="#fff" stroke-width="5" opacity=".28" fill="none"/>`;
  if (hs === 'sideThin') head += `<path d="M ${-hx + 6} ${hy - 30} q 10 -20 30 -30" stroke="${sk}" stroke-width="6" opacity=".35" fill="none"/>`;
  if (hs === 'center' || hs === 'gray') head += `<path d="M ${-hx - 3} ${hy - 4} Q ${-hx - 8} ${hy - 114} 0 ${hy - 116} Q ${hx + 8} ${hy - 114} ${hx + 3} ${hy - 4} Q ${hx - 6} ${hy - 62} ${12} ${hy - 76} L 0 ${hy - 92} L ${-12} ${hy - 76} Q ${-hx + 6} ${hy - 62} ${-hx - 3} ${hy - 4} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/><path d="M 0 ${hy - 92} L 0 ${hy - 114}" stroke="${ink}" stroke-width="2.5" opacity=".5"/><path d="M ${-50} ${hy - 90} Q ${-30} ${hy - 108} ${-6} ${hy - 110}" stroke="#fff" stroke-width="5" opacity=".25" fill="none"/>`;
  if (hs === 'bald') head += `<path d="M ${-hx} ${hy + 12} Q ${-hx - 10} ${hy - 44} ${-hx + 16} ${hy - 58} L ${-hx + 22} ${hy - 6} Z M ${hx} ${hy + 12} Q ${hx + 10} ${hy - 44} ${hx - 16} ${hy - 58} L ${hx - 22} ${hy - 6} Z" fill="${hc}" stroke="${ink}" stroke-width="4"/><path d="M ${-24} ${hy - 92} q 18 -10 40 -4" stroke="#fff" stroke-width="6" opacity=".55" fill="none"/>`;
  if (hs === 'boy') head += `<path d="M ${-hx - 3} ${hy - 2} Q ${-hx - 12} ${hy - 118} 0 ${hy - 120} Q ${hx + 12} ${hy - 118} ${hx + 3} ${hy - 2} L ${hx - 10} ${hy - 44} L ${hx - 24} ${hy - 60} L ${26} ${hy - 48} L ${10} ${hy - 66} L ${-8} ${hy - 50} L ${-26} ${hy - 66} L ${-44} ${hy - 48} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/>`;
  if (hs === 'gibson') head += `<path d="M ${-hx - 18} ${hy + 14} Q ${-hx - 30} ${hy - 140} 0 ${hy - 142} Q ${hx + 30} ${hy - 140} ${hx + 18} ${hy + 14} Q ${hx - 2} ${hy - 50} ${0} ${hy - 66} Q ${-hx + 2} ${hy - 50} ${-hx - 18} ${hy + 14} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/><ellipse cx="0" cy="${hy - 146}" rx="40" ry="26" fill="${hc}" stroke="${ink}" stroke-width="5"/><path d="M ${-40} ${hy - 110} Q 0 ${hy - 130} ${40} ${hy - 110}" stroke="${ink}" stroke-width="2.5" opacity=".4" fill="none"/>`;
  if (hs === 'bunLow') head += `<path d="M ${-hx - 8} ${hy + 20} Q ${-hx - 16} ${hy - 120} 0 ${hy - 120} Q ${hx + 16} ${hy - 120} ${hx + 8} ${hy + 20} Q ${hx - 6} ${hy - 56} 0 ${hy - 68} Q ${-hx + 6} ${hy - 56} ${-hx - 8} ${hy + 20} Z" fill="${hc}" stroke="${ink}" stroke-width="5"/>`;
  // hats
  const hk = L.hatColor;
  if (L.hat === 'bowler') head += `<ellipse cx="0" cy="${hy - 72}" rx="98" ry="17" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -64 ${hy - 74} Q -68 ${hy - 160} 0 ${hy - 162} Q 68 ${hy - 160} 64 ${hy - 74} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -62 ${hy - 88} Q 0 ${hy - 78} 62 ${hy - 88}" stroke="#4a4a4a" stroke-width="8" fill="none"/><path d="M -30 ${hy - 140} q 20 -10 40 -6" stroke="#fff" stroke-width="5" opacity=".22" fill="none"/>`;
  if (L.hat === 'fedora') head += `<path d="M -116 ${hy - 64} Q 0 ${hy - 96} 116 ${hy - 70} Q 84 ${hy - 50} 0 ${hy - 58} Q -84 ${hy - 48} -116 ${hy - 64} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -66 ${hy - 70} Q -72 ${hy - 148} -20 ${hy - 154} Q 0 ${hy - 136} 20 ${hy - 154} Q 72 ${hy - 148} 66 ${hy - 74} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -66 ${hy - 86} Q 0 ${hy - 76} 66 ${hy - 90} L 66 ${hy - 74} Q 0 ${hy - 62} -66 ${hy - 72} Z" fill="#1a1a1a"/>`;
  if (L.hat === 'top') head += `<ellipse cx="0" cy="${hy - 74}" rx="94" ry="15" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -58 ${hy - 76} L -62 ${hy - 214} L 62 ${hy - 214} L 58 ${hy - 76} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><ellipse cx="0" cy="${hy - 214}" rx="62" ry="11" fill="#2a2a2a" stroke="${ink}" stroke-width="5"/><path d="M -59 ${hy - 96} L 59 ${hy - 96}" stroke="#555" stroke-width="12"/><path d="M -40 ${hy - 200} L -42 ${hy - 110}" stroke="#fff" stroke-width="6" opacity=".15"/>`;
  if (L.hat === 'cap') head += `<path d="M -74 ${hy - 52} Q -80 ${hy - 128} 0 ${hy - 130} Q 84 ${hy - 128} 78 ${hy - 58} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -10 ${hy - 58} Q 64 ${hy - 74} 116 ${hy - 52} Q 74 ${hy - 36} -10 ${hy - 46} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><circle cx="0" cy="${hy - 128}" r="7" fill="${ink}"/>`;
  if (L.hat === 'boater') head += `<ellipse cx="0" cy="${hy - 74}" rx="108" ry="19" fill="${hk}" stroke="${ink}" stroke-width="5"/><path d="M -64 ${hy - 76} L -62 ${hy - 126} L 62 ${hy - 126} L 64 ${hy - 76} Z" fill="${hk}" stroke="${ink}" stroke-width="5"/><ellipse cx="0" cy="${hy - 126}" rx="62" ry="11" fill="${hk}" stroke="${ink}" stroke-width="4"/><path d="M -63 ${hy - 92} L 63 ${hy - 92}" stroke="${PAL.navy}" stroke-width="13"/>`;
  if (L.hat === 'visor') head += `<path d="M -70 ${hy - 74} Q 0 ${hy - 92} 70 ${hy - 74} L 96 ${hy - 46} Q 0 ${hy - 70} -96 ${hy - 46} Z" fill="${hk}" stroke="${ink}" stroke-width="5" opacity=".9"/>`;
  // emotion marks
  if (st.expr === 'shock' || st.expr === 'worry') head += `<path d="M ${hx + 6} ${hy - 56} q 9 16 0 25 q -9 -9 0 -25 Z" fill="#9fd3ef" stroke="${ink}" stroke-width="3"/>`;
  head += `</g>`;
  // ----- props in hands -----
  let prop = '';
  if (c.prop) {
    const aR = armPts(SR, ang[2], ang[3], 1), aL = armPts(SL, ang[0], ang[1], -1);
    const mid = [(aR.W[0] + aL.W[0]) / 2, (aR.W[1] + aL.W[1]) / 2];
    if (c.prop.t === 'paper') prop = `<g transform="translate(${mid[0]} ${mid[1] - 10}) rotate(-3)"><rect x="-170" y="-120" width="340" height="230" fill="#f1ead6" stroke="${ink}" stroke-width="5"/><rect x="-156" y="-106" width="312" height="40" fill="${ink}"/><text x="0" y="-77" text-anchor="middle" font-family="${F.serif}" font-weight="900" font-size="26" fill="#f1ead6">${esc(c.prop.text || 'EXTRA!')}</text>${[0, 1, 2, 3, 4].map(i => `<line x1="-150" y1="${-44 + i * 26}" x2="${i % 2 ? 40 : 150}" y2="${-44 + i * 26}" stroke="#8a8274" stroke-width="7"/>`).join('')}</g>`;
    if (c.prop.t === 'ticket') prop = `<g transform="translate(${aR.W[0]} ${aR.W[1] - 30}) rotate(8)"><rect x="-80" y="-56" width="160" height="104" fill="#f3b9c6" stroke="${ink}" stroke-width="4"/><text x="0" y="-14" text-anchor="middle" font-family="${F.type}" font-size="22">${esc(c.prop.text || 'SUGAR 105¼')}</text><text x="0" y="20" text-anchor="middle" font-family="${F.type}" font-size="18">${esc(c.prop.sub || '500 SH')}</text></g>`;
    if (c.prop.t === 'tape') prop = `<path d="M ${aL.W[0]} ${aL.W[1]} Q ${mid[0]} ${mid[1] - 30} ${aR.W[0]} ${aR.W[1]} Q ${aR.W[0] + 40} ${aR.W[1] + 120} ${aR.W[0] - 20} ${aR.W[1] + 260}" fill="none" stroke="${ink}" stroke-width="40"/><path d="M ${aL.W[0]} ${aL.W[1]} Q ${mid[0]} ${mid[1] - 30} ${aR.W[0]} ${aR.W[1]} Q ${aR.W[0] + 40} ${aR.W[1] + 120} ${aR.W[0] - 20} ${aR.W[1] + 260}" fill="none" stroke="#f8f2dc" stroke-width="32"/>`;
    if (c.prop.t === 'money') prop = `<g transform="translate(${mid[0]} ${mid[1]})"><rect x="-100" y="-44" width="200" height="88" rx="6" fill="#9cc49a" stroke="${ink}" stroke-width="4"/><circle cx="0" cy="0" r="26" fill="none" stroke="${ink}" stroke-width="3"/><text x="0" y="12" text-anchor="middle" font-family="${F.serif}" font-weight="900" font-size="34">$</text></g>`;
    if (c.prop.t === 'phone') prop = `<g transform="translate(${aL.W[0]} ${aL.W[1]})"><rect x="-14" y="-20" width="28" height="150" fill="#222" stroke="${ink}" stroke-width="4"/><ellipse cx="0" cy="-26" rx="30" ry="12" fill="#333" stroke="${ink}" stroke-width="4"/><ellipse cx="0" cy="134" rx="44" ry="12" fill="#222" stroke="${ink}" stroke-width="4"/></g><rect x="${aR.W[0] - 12}" y="${aR.W[1] - 50}" width="24" height="54" rx="8" fill="#222" stroke="${ink}" stroke-width="4"/>`;
    if (c.prop.t === 'cigar') prop = `<g transform="translate(${aR.W[0]} ${aR.W[1]}) rotate(${aR.ang + 90})"><rect x="0" y="-6" width="60" height="12" rx="5" fill="#6a4426" stroke="${ink}" stroke-width="3"/><circle cx="60" cy="0" r="5" fill="#e8742a"/></g>`;
    if (c.prop.t === 'pen') prop = `<rect x="${aR.W[0] - 4}" y="${aR.W[1] + 10}" width="8" height="46" fill="#222" transform="rotate(-30 ${aR.W[0]} ${aR.W[1]})"/>`;
  }
  const s = st.s;
  const sc = st.flip ? `scale(${-s} ${s})` : `scale(${s})`;
  return `<g transform="translate(${(st.x + st.sway * s).toFixed(1)} ${st.y.toFixed(1)}) ${sc}">${back}${body}${head}${front}${prop}</g>`;
}

// silhouettes for crowds, with bobbing; deterministic by index
function crowdSvg(o, t) {
  const n = o.n || 10, w = o.w || 1920, y = o.y || 900, col = o.color || '#2a221a';
  let s = '';
  for (let i = 0; i < n; i++) {
    const x = (o.x || 0) + (i + 0.5) * w / n + (hash(i * 3.1) - 0.5) * (w / n) * 0.6;
    const sc = (o.s || 1) * (0.8 + hash(i * 7.7) * 0.4);
    const bob = Math.sin(t * (o.speed || 2.2) + i * 1.7) * (o.bob ?? 4) + (o.agitated ? Math.abs(Math.sin(t * 5 + i)) * -14 : 0);
    const hat = ['bowler', 'top', 'boater', 'none', 'bowler'][Math.floor(hash(i * 5.3) * 5)];
    const arm = o.agitated && hash(i * 9.1) > 0.45 ? `<path d="M ${hash(i) > .5 ? 40 : -40} -10 L ${hash(i) > .5 ? 70 : -70} ${-90 - Math.abs(Math.sin(t * 6 + i)) * 50}" stroke="${col}" stroke-width="24" stroke-linecap="round"/>` : '';
    s += `<g transform="translate(${x.toFixed(1)} ${(y + bob + hash(i * 2.3) * 30).toFixed(1)}) scale(${sc.toFixed(3)})" fill="${col}" opacity="${o.op ?? 1}">${arm}<ellipse cx="0" cy="-64" rx="27" ry="33"/><path d="M -64 -24 Q 0 -46 64 -24 L 84 220 L -84 220 Z"/>${hat === 'bowler' ? '<ellipse cx="0" cy="-90" rx="42" ry="9"/><path d="M -28 -90 Q 0 -132 28 -90 Z"/>' : hat === 'top' ? '<ellipse cx="0" cy="-90" rx="40" ry="8"/><rect x="-25" y="-146" width="50" height="58"/>' : hat === 'boater' ? '<ellipse cx="0" cy="-90" rx="44" ry="9"/><rect x="-27" y="-116" width="54" height="27"/>' : ''}</g>`;
  }
  return s;
}
