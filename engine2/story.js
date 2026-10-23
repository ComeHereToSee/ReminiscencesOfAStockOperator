// engine2 story loader.  node engine2/story.js <version> <out.json>
// version 'short' loads engine2/story/short/*.js ; 'full' loads engine2/story/full/*.js (sorted).
// Each module exports (h) => { ... } and builds shots with the helpers below.
// Narration is an original adaptation of Edwin Lefèvre's "Reminiscences of a Stock Operator" (1923, public domain).
const fs = require('fs');
const path = require('path');

const [version = 'short', outPath] = process.argv.slice(2);
const WHO = {
  nar: ['LARRY LIVINGSTON (JESSE LIVERMORE)', '拉瑞·利文斯顿（杰西·利弗莫尔）'],
};
const shots = [];
const outputs = [];
let EP = null, CH = null, MUSIC = 'calm';

// a voiced line: v = voice id (see engine2/tts.py VOICES), opts: speak, cam, say, pause, speed, nosub, vol
const L = (v, en, zh, o = {}) => Object.assign({ v, en, zh }, o);
const N = (en, zh, o = {}) => L('nar', en, zh, o);           // the old narrator (default voice of the film)

function shot(o) {
  if (!o.id) throw new Error('shot without id');
  if (shots.some(s => s.id === o.id)) throw new Error('duplicate shot id ' + o.id);
  if (!o.lines || !o.lines.length) throw new Error('shot without lines: ' + o.id);
  for (const ln of o.lines) if (!ln.en || !ln.zh) throw new Error('line missing en/zh in ' + o.id);
  for (const w of o.items || []) {
    if (w.type === 'chart') for (const se of w.series) for (const d of se.draw || []) if (d[1] > se.pts.length - 1) throw new Error(`${o.id}: chart draw index ${d[1]} beyond ${se.pts.length - 1}`);
    if (w.type === 'table' && w.rowAt && w.rowAt.length !== w.rows.length) throw new Error(`${o.id}: table rowAt has ${w.rowAt.length} cues for ${w.rows.length} rows`);
    if (w.type === 'sfx' && w.t !== undefined && w.text === undefined) throw new Error(`${o.id}: sfx needs text, not t`);
  }
  o.music = o.music || MUSIC;
  o.ep = EP;
  if (CH) { o.chapter = CH; CH = null; }
  o.items = o.items || [];
  o.cast = o.cast || [];
  shots.push(o);
  return o;
}
// chapter marker for the next shot + music mood for following shots
function chapter(en, zh) { CH = `${en} / ${zh}`; }
function music(m) { MUSIC = m; }
function episode(n, name) { EP = n; if (name) outputs.push({ name, shots: [], ep: n, chapters: true }); }

// ---------- convenience builders ----------
// Title card: burst background + kinetic title.
function title(o) {
  return shot(Object.assign({
    set: 'burst', setOpts: { color: o.color || '#b3302a' }, cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 540, z: 1.06 }],
    trans: o.trans || 'flash', music: o.music,
    items: [{ type: 'title', at: 0.2, kicker: o.kicker, en: o.en, zh: o.zh, sub: o.sub, size: o.size }].concat(o.items || []),
  }, { id: o.id, lines: o.lines, chapter: undefined }));
}
// Historical photograph with slow Ken Burns move and a caption + credit.
function photo(o) {
  const items = [{ type: 'caption', at: o.capAt ?? 0.4, x: 60, y: 60, w: o.capW || 640, en: o.cap[0], zh: o.cap[1], color: '#f1ead6' }];
  if (o.credit) items.push({ type: 'text', screen: true, at: 0.3, x: 1880, y: 1000, align: 'right', font: 'cond', size: 20, weight: 500, en: o.credit, fill: '#e8dcc0' });
  return shot(Object.assign({ set: 'photo', setOpts: { src: o.src, kb: o.kb, sepia: o.sepia }, cam: 'static', trans: o.trans || 'dip' }, o, { items: items.concat(o.items || []) }));
}

const h = { shot, L, N, chapter, music, episode, title, photo, WHO, PD: path.join(__dirname, '..', 'assets', 'pd', 'photos') };

const dir = path.join(__dirname, 'story', version);
let failed = 0;
for (const f of fs.readdirSync(dir).filter(f => /\.js$/.test(f)).sort()) {
  try { require(path.join(dir, f))(h); } catch (e) { failed++; console.error(`!! ${f}: ${e.stack.split('\n').slice(0, 4).join(' | ')}`); }
}
// output groups: one per episode() call (full version); the build also makes a combined file.
for (const g of outputs) g.shots = shots.filter(s => s.ep === g.ep).map(s => s.id);
const groups = outputs.filter(g => g.shots.length);
if (groups.length && process.env.COMBINED) groups.push({ name: `Reminiscences_${version}_complete`, shots: shots.map(s => s.id), chapters: true });
const out = outPath || path.join(__dirname, '..', 'build', 'v2', version, 'story.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ shots, outputs: groups.length ? groups : null }, null, 1));
const words = shots.reduce((a, s) => a + s.lines.reduce((b, l) => b + l.en.split(/\s+/).length, 0), 0);
console.log(`${version}: ${shots.length} shots, ${shots.reduce((a, s) => a + s.lines.length, 0)} lines, ${words} words${failed ? `, ${failed} FILE(S) FAILED` : ''}`);
if (failed) process.exit(1);
