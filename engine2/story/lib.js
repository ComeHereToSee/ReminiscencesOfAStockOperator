// Shared authoring helpers for engine2 stories.
// The narrator on screen is the old Livingston (cast key 'nar'); his lines are lip-synced automatically.
const GEST = ['explain', 'explainR', 'relaxed', 'explain', 'point', 'explainR'];

// Lesson page: paper background, the old narrator at the left gesturing, title + tag at the top, widgets on the right.
function lesson(h, o) {
  const items = [];
  if (o.tag) items.push({ type: 'tag', at: 0.15, x: 470, y: 36, en: o.tag[0], zh: o.tag[1], color: o.tagColor });
  if (o.title) items.push({ type: 'text', at: 0.3, x: 470, y: 102, align: 'left', font: 'serif', size: o.titleSize || 54, en: o.title[0], zh: o.title[1], anim: 'words', w: 1400 });
  const narr = o.narr === false ? [] : [Object.assign({ id: 'larryOld', key: 'nar', x: 225, y: 905, s: 1.1, pose: 'explain', expr: 'neutral',
    acts: o.lines.map((ln, i) => ({ t: `L${i}`, pose: (o.gest && o.gest[i]) || GEST[i % GEST.length], expr: (o.expr && o.expr[i]) || undefined })).filter(a => a.pose || a.expr) }, o.narrOpts || {})];
  return h.shot({
    id: o.id, set: o.set || 'paper', setOpts: o.setOpts, cast: narr.concat(o.cast || []), items: items.concat(o.items || []),
    lines: o.lines, cam: o.cam || [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 990, y: 535, z: 1.035, ease: 'sine' }],
    trans: o.trans || 'page', music: o.music, sounds: o.sounds, hold: o.hold,
  });
}
module.exports = { lesson };
