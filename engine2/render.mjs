// engine2 renderer: plan.json -> one silent H.264 clip per shot, rendered by a pool of headless Chromium workers.
// Usage: node engine2/render.mjs <plan.json> <outDir> [workers] [shotFilter]
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { spawn } from 'child_process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PW_MODULE || '/opt/node22/lib/node_modules/playwright');

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const [planPath, outDirArg, nWorkersArg, filter] = process.argv.slice(2);
const outDir = path.resolve(outDirArg);
const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
const FPS = plan.fps || 25;
const N = +(nWorkersArg || 4);
fs.mkdirSync(outDir, { recursive: true });

const webFiles = ['core.js', 'chars.js', 'sets.js', 'widgets.js', 'frame.js'].map(f => path.join(ROOT, 'engine2', 'web', f));
const engineHash = crypto.createHash('md5').update(webFiles.map(f => fs.readFileSync(f)).join('')).digest('hex').slice(0, 10);
const font = (fam, file, w = '400', st = 'normal') => `@font-face{font-family:'${fam}';font-weight:${w};font-style:${st};src:url('file://${ROOT}/assets/fonts/${file}')}`;
const html = `<!doctype html><html><head><meta charset="utf-8"><style>
${font('Bangers', 'Bangers-Regular.ttf')}${font('Comic Neue', 'ComicNeue-Regular.ttf')}${font('Comic Neue', 'ComicNeue-Bold.ttf', '700')}
${font('Oswald', 'Oswald[wght].ttf', '200 700')}${font('Playfair Display', 'PlayfairDisplay[wght].ttf', '400 900')}
${font('Noto Sans SC', 'NotoSansSC[wght].ttf', '100 900')}${font('Noto Serif SC', 'NotoSerifSC[wght].ttf', '200 900')}
${font('Special Elite', 'SpecialElite-Regular.ttf')}${font('IM FELL English', 'IMFeENrm28P.ttf')}${font('IM FELL English', 'IMFeENit28P.ttf', '400', 'italic')}
html,body{margin:0;background:#000;overflow:hidden}
#frame{position:relative;width:1920px;height:1080px;overflow:hidden;background:#000}
.layer{position:absolute;left:0;top:0;width:1920px;height:1080px;transform-origin:50% 50%}
#grain{position:absolute;left:0;top:0;width:1920px;height:1080px;mix-blend-mode:overlay;opacity:.07;pointer-events:none}
#vig{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 46%, rgba(0,0,0,0) 58%, rgba(20,10,0,.42) 100%)}
#warm{position:absolute;inset:0;background:#f6e2b8;mix-blend-mode:multiply;opacity:.13}
#flick{position:absolute;inset:0;background:#000;opacity:.03}
#flash{position:absolute;inset:0;background:#fff;opacity:0}
#subbg{position:absolute;left:0;right:0;bottom:0;height:250px;background:linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.62))}
#subs{position:absolute;left:120px;right:120px;bottom:34px;text-align:center}
#subs .en{font-family:'Oswald',sans-serif;font-weight:500;font-size:41px;line-height:1.18;color:#fff;
  text-shadow:0 0 3px #000,0 0 3px #000,2px 2px 2px #000,-2px -2px 2px #000,2px -2px 2px #000,-2px 2px 2px #000}
#subs .zh{margin-top:6px;font-family:'Noto Sans SC',sans-serif;font-weight:600;font-size:38px;line-height:1.3;color:#ffd86b;
  text-shadow:0 0 3px #000,0 0 3px #000,2px 2px 2px #000,-2px -2px 2px #000,2px -2px 2px #000,-2px 2px 2px #000}
</style></head><body><div id="warm-up" style="position:absolute;opacity:0">
<span style="font-family:Bangers">A</span><span style="font-family:'Comic Neue';font-weight:700">A</span><span style="font-family:'Comic Neue'">A</span>
<span style="font-family:Oswald;font-weight:700">A</span><span style="font-family:Oswald;font-weight:500">A</span><span style="font-family:'Playfair Display';font-weight:900">A</span><span style="font-family:'Playfair Display';font-weight:700">A</span>
<span style="font-family:'Noto Sans SC';font-weight:500">中</span><span style="font-family:'Noto Sans SC';font-weight:600">中</span><span style="font-family:'Noto Sans SC';font-weight:700">中</span><span style="font-family:'Noto Sans SC';font-weight:900">中</span><span style="font-family:'Noto Serif SC';font-weight:700">中</span>
<span style="font-family:'Special Elite'">A</span><span style="font-family:'IM FELL English'">A</span></div>
<div id="defs" style="position:absolute;width:0;height:0;overflow:hidden"></div><div id="cap" style="position:absolute;left:0;top:0;display:none"></div><div id="frame"><div id="A" class="layer"></div><div id="B" class="layer"></div><div id="flash"></div></div>
${webFiles.map(f => `<script src="file://${f}"></script>`).join('\n')}
</body></html>`;
const pagePath = path.join(outDir, '_page.html');
fs.writeFileSync(pagePath, html);

function shotKey(shot, prev) {
  return crypto.createHash('md5').update(engineHash + JSON.stringify(shot) + JSON.stringify(prev ? { dur: prev.dur, id: prev.id, k: prev._key } : null)).digest('hex').slice(0, 14);
}

const shots = plan.shots;
shots.forEach((s, i) => { s._key = shotKey(s, null); });
const jobs = [];
const STILLS = process.env.STILLS ? path.resolve(process.env.STILLS) : null; // review mode: a few JPEG stills per shot, no video
if (STILLS) fs.mkdirSync(STILLS, { recursive: true });
shots.forEach((s, i) => {
  if (filter && !s.id.includes(filter)) return;
  if (STILLS) { jobs.push({ s, prev: null, stills: true, frames: (s.lt || []).length + 1 }); return; }
  const prev = s.trans && s.trans.type !== 'cut' && i > 0 ? shots[i - 1] : null;
  const key = shotKey(s, prev);
  const out = path.join(outDir, `${s.id}.mp4`);
  if (fs.existsSync(out) && fs.existsSync(out + '.key') && fs.readFileSync(out + '.key', 'utf8') === key) return;
  jobs.push({ s, prev, out, key, frames: Math.round(s.dur * FPS) });
});
jobs.sort((a, b) => b.frames - a.frames); // longest first for better packing
const totalFrames = jobs.reduce((a, j) => a + j.frames, 0);
console.log(`render: ${jobs.length} shots to render (${totalFrames} frames), ${shots.length - jobs.length} cached, ${N} workers`);

let done = 0, t0 = Date.now();
// a capture can fail transiently (e.g. a renderer hiccup); retry a few times before giving up on the shot
async function capture(client, opts, tries = 4) {
  for (let k = 1; ; k++) {
    try { return await client.send('Page.captureScreenshot', opts); }
    catch (e) { if (k >= tries) throw e; await new Promise(r => setTimeout(r, 300 * k)); }
  }
}
let failed = 0;
async function openPage() {
  const browser = await chromium.launch({ args: ['--disable-gpu', '--font-render-hinting=none', '--allow-file-access-from-files'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('file://' + pagePath);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(500);
  const client = await page.context().newCDPSession(page);
  page.on('pageerror', e => console.log(`!! page error: ${e.message}`));
  return { browser, page, client };
}
async function worker(wi) {
  let { browser, page, client } = await openPage();
  while (jobs.length) {
    const j = jobs.shift();
    try {
      await renderJob(j, page, client, wi);
    } catch (e) {
      // the browser may be in a bad state: restart it, and re-queue the shot once
      console.log(`!! [w${wi}] ${j.s.id} failed: ${String(e.message).split('\n')[0]}`);
      try { fs.unlinkSync(j.out + '.part.mp4'); } catch { }
      j.tries = (j.tries || 0) + 1;
      if (j.tries < 3) jobs.push(j); else failed++;
      try { await browser.close(); } catch { }
      ({ browser, page, client } = await openPage());
    }
  }
  await browser.close();
}
async function renderJob(j, page, client, wi) {
  {
    await page.evaluate(([c, p]) => window.setShots(c, p), [j.s, j.prev]);
    // rasterise static background layers once (bitmap cache shared by later shots in this worker)
    const sj = await page.evaluate(() => window.staticJobs());
    for (const job of sj) {
      await page.evaluate(jb => window.showStatic(jb), job);
      if (job.alpha) await client.send('Emulation.setDefaultBackgroundColorOverride', { color: { r: 0, g: 0, b: 0, a: 0 } });
      const cap = await capture(client, { format: job.alpha ? 'png' : 'jpeg', quality: 93, clip: { x: 0, y: 0, width: job.box[2], height: job.box[3], scale: job.scale }, captureBeyondViewport: true });
      if (job.alpha) await client.send('Emulation.setDefaultBackgroundColorOverride', {});
      await page.evaluate(([jb, d, m]) => window.registerStatic(jb, d, m), [job, cap.data, job.alpha ? 'image/png' : 'image/jpeg']);
    }
    if (j.stills) {
      // one still near the end of each line (when its graphics are fully built) plus the last frame
      const ts = (j.s.lt || []).map(([a, d]) => a + d * 0.92).concat([j.s.dur - 1 / FPS]);
      for (let k = 0; k < ts.length; k++) {
        try { await page.evaluate(([t, f]) => window.drawFrame(t, f), [ts[k], Math.round(ts[k] * FPS)]); }
        catch (e) { console.log(`!! ${j.s.id} t=${ts[k].toFixed(2)}: ${e.message.split('\n')[0]}`); continue; }
        const cap = await capture(client, { format: 'jpeg', quality: 80, clip: { x: 0, y: 0, width: 1920, height: 1080, scale: 0.5 } });
        fs.writeFileSync(path.join(STILLS, `${String(shots.indexOf(j.s)).padStart(3, '0')}_${j.s.id}_${k}.jpg`), Buffer.from(cap.data, 'base64'));
      }
      done += j.frames;
      return;
    }
    const tmp = j.out + '.part.mp4';
    const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
      '-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '14', '-pix_fmt', 'yuv420p', '-r', String(FPS), tmp], { stdio: ['pipe', 'inherit', 'inherit'] });
    const ffDone = new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg ' + c))));
    ffDone.catch(() => { });
    try {
    for (let f = 0; f < j.frames; f++) {
      await page.evaluate(([t, f]) => window.drawFrame(t, f), [f / FPS, f]);
      const shot = await capture(client, { format: 'jpeg', quality: 88, clip: { x: 0, y: 0, width: 1920, height: 1080, scale: 1 }, optimizeForSpeed: true });
      const buf = Buffer.from(shot.data, 'base64');
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    } catch (e) { ff.kill('SIGKILL'); throw e; }
    ff.stdin.end();
    await ffDone;
    fs.renameSync(tmp, j.out);
    fs.writeFileSync(j.out + '.key', j.key);
    done += j.frames;
    const el = (Date.now() - t0) / 1000;
    console.log(`[w${wi}] ${j.s.id} ${j.frames}f  total ${done}/${totalFrames}  ${(done / el).toFixed(1)} fps  eta ${((totalFrames - done) / Math.max(done / el, 0.1) / 60).toFixed(1)} min`);
  }
}
await Promise.all(Array.from({ length: Math.min(N, jobs.length || 1) }, (_, i) => worker(i)));
if (failed) { console.log(`render: ${failed} shot(s) failed`); process.exit(1); }
console.log('render done');
