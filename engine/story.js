// Storyboard framework. Each episode lives in engine/story/epNN.js and exports `(h) => { ... }`,
// using the helpers below. Narration is an original adaptation of Edwin Lefèvre's
// "Reminiscences of a Stock Operator" (1923, public domain); short quotations are marked as quotes.
// Run with node to write build/story.json.
const fs = require('fs');
const path = require('path');

const WHO = {
  larry: { en: 'LARRY LIVINGSTON (JESSE LIVERMORE)', zh: '拉瑞·利文斯顿（杰西·利弗莫尔）' },
  host: { en: 'LESSON', zh: '要点讲解' },
  boy: { en: 'OFFICE BOY', zh: '办公室小弟' },
  partridge: { en: 'OLD PARTRIDGE', zh: '老帕特里奇' },
  clerk: { en: 'CLERK', zh: '职员' },
  broker: { en: 'BROKER', zh: '经纪人' },
  harding: { en: 'ED HARDING', zh: '艾德·哈丁' },
  percy: { en: 'PERCY THOMAS', zh: '珀西·托马斯' },
  banker: { en: 'BANKER', zh: '银行家' },
  keene: { en: 'JAMES R. KEENE', zh: '詹姆斯·R·基恩' },
  friend: { en: 'A FRIEND', zh: '朋友' },
  wife: { en: 'MRS. LIVINGSTON', zh: '利文斯顿夫人' },
  mother: { en: 'HIS MOTHER', zh: '母亲' },
  agent: { en: 'AGENT', zh: '推销员' },
  williamson: { en: 'DAN WILLIAMSON', zh: '丹·威廉森' },
  wolff: { en: 'JOSHUA WOLFF', zh: '约书亚·沃尔夫' },
};
const shots = [];
let EP = '', EPN = 0, CH = null;
// L(voice, english, chinese, {who: {en, zh}, ...}) — `who` overrides the speaker label
const L = (v, en, zh, o = {}) => Object.assign({ v, en, zh, who: WHO[v] }, o);
function shot(o) {
  if (shots.some(s => s.id === o.id)) throw new Error('duplicate shot id ' + o.id);
  o.epLabel = EP; o.ep = EPN;
  if (CH) { o.chapter = CH; CH = null; }
  shots.push(o);
}
const NUM = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
function episode(n, en, zh, chap, color, intro) {
  EPN = n;
  EP = n > 12 ? 'FINALE' : n ? `EP${n} · ${en.toUpperCase()}` : '';
  CH = n > 12 ? `Finale: ${en} / 终章：${zh}` : n ? `EP${n} ${en} / 第${NUM[n - 1]}集 ${zh}` : `${en} / ${zh}`;
  shot({ id: `ep${String(n).padStart(2, '0')}_title`, kind: 'title', color,
    kicker: n > 12 ? { en: 'FINALE', zh: '终章' } : n ? { en: `EPISODE ${n}`, zh: `第${NUM[n - 1]}集` } : { en: 'A MOTION COMIC', zh: '漫剧' },
    en, zh, sub: chap, lines: intro });
}
// panel layouts (page coordinates; the stage is 1920 x 850, subtitles live below)
const FULL = { x: 40, y: 40, w: 1840, h: 770 };
const HALF = [{ x: 40, y: 40, w: 905, h: 770 }, { x: 975, y: 40, w: 905, h: 770 }];
const BIGL = [{ x: 40, y: 40, w: 1100, h: 770 }, { x: 1170, y: 40, w: 710, h: 370 }, { x: 1170, y: 440, w: 710, h: 370 }];
const BIGR = [{ x: 780, y: 40, w: 1100, h: 770 }, { x: 40, y: 40, w: 710, h: 370 }, { x: 40, y: 440, w: 710, h: 370 }];
const THREE = [{ x: 40, y: 40, w: 593, h: 770 }, { x: 663, y: 40, w: 593, h: 770 }, { x: 1286, y: 40, w: 594, h: 770 }];
const P = (base, o) => Object.assign({}, base, o);
// character placed in a panel: head centred at ~44% of panel height (override with o.hy)
const ch = (id, pn, xf, s, o = {}) => Object.assign({ id, x: pn.w * xf, y: pn.h * (o.hy || 0.44) + 228 * s, s }, o);

const h = { shot, L, episode, WHO, FULL, HALF, BIGL, BIGR, THREE, P, ch };
const dir = path.join(__dirname, 'story');
let failed = 0;
for (const f of fs.readdirSync(dir).filter(f => /^ep\d+\.js$/.test(f)).sort()) {
  try {
    delete require.cache[require.resolve(path.join(dir, f))];
    require(path.join(dir, f))(h);
  } catch (e) {
    failed++;
    console.error(`!! ${f}: ${e.stack.split('\n').slice(0, 3).join(' | ')}`);
  }
}
const out = path.join(__dirname, '..', 'build', 'story.json');
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out + '.tmp' + process.pid, JSON.stringify({ shots }, null, 1));
fs.renameSync(out + '.tmp' + process.pid, out);
const words = shots.reduce((a, s) => a + s.lines.reduce((b, l) => b + (l.silent ? 0 : l.en.split(/\s+/).length), 0), 0);
const byEp = {};
shots.forEach(s => { byEp[s.ep] = (byEp[s.ep] || 0) + s.lines.reduce((b, l) => b + l.en.split(/\s+/).length, 0); });
console.log(`${shots.length} shots, ${shots.reduce((a, s) => a + s.lines.length, 0)} lines, ${words} words; per episode: ${JSON.stringify(byEp)}${failed ? `; ${failed} FILE(S) FAILED` : ''}`);
