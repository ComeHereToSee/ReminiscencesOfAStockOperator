// Renders every (shot, line) frame of build/story.json to PNG via headless Chromium.
// Usage: node engine/render.js [shotIdFilter]
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { chromium } = require(process.env.PW_MODULE || 'playwright');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'build', 'frames');
const story = JSON.parse(fs.readFileSync(path.join(ROOT, 'build', 'story.json'), 'utf8'));
const filter = process.argv[2];

const fontCss = `
@font-face{font-family:'Bangers';src:url('file://${ROOT}/assets/fonts/Bangers-Regular.ttf')}
@font-face{font-family:'Comic Neue';font-weight:400;src:url('file://${ROOT}/assets/fonts/ComicNeue-Regular.ttf')}
@font-face{font-family:'Comic Neue';font-weight:700;src:url('file://${ROOT}/assets/fonts/ComicNeue-Bold.ttf')}
@font-face{font-family:'Oswald';font-weight:200 700;src:url('file://${ROOT}/assets/fonts/Oswald[wght].ttf')}
@font-face{font-family:'Playfair Display';font-weight:400 900;src:url('file://${ROOT}/assets/fonts/PlayfairDisplay[wght].ttf')}
@font-face{font-family:'Noto Sans SC';font-weight:100 900;src:url('file://${ROOT}/assets/fonts/NotoSansSC[wght].ttf')}
@font-face{font-family:'Noto Serif SC';font-weight:200 900;src:url('file://${ROOT}/assets/fonts/NotoSerifSC[wght].ttf')}
@font-face{font-family:'Special Elite';src:url('file://${ROOT}/assets/fonts/SpecialElite-Regular.ttf')}
html,body{margin:0;background:#000}`;

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>${fontCss}</style></head><body>
  <div id="warm" style="position:absolute;opacity:0">
  <span style="font-family:Bangers">A</span><span style="font-family:'Comic Neue';font-weight:700">A</span><span style="font-family:'Comic Neue'">A</span>
  <span style="font-family:Oswald;font-weight:700">A</span><span style="font-family:Oswald;font-weight:500">A</span><span style="font-family:'Playfair Display';font-weight:900">A</span>
  <span style="font-family:'Noto Sans SC';font-weight:500">中</span><span style="font-family:'Noto Sans SC';font-weight:900">中</span><span style="font-family:'Noto Serif SC';font-weight:700">中</span><span style="font-family:'Special Elite'">A</span></div>
  <div id="stage"></div><script src="file://${ROOT}/engine/lib.js"></script></body></html>`;
  const tmp = path.join(ROOT, 'build', 'page.html');
  fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  const manifest = [];
  let done = 0, skipped = 0;
  for (const [si, shot] of story.shots.entries()) {
    if (filter && !shot.id.includes(filter)) continue;
    for (let li = 0; li < shot.lines.length; li++) {
      const line = shot.lines[li];
      const step = line.step ?? li;
      const svg = await page.evaluate(([s, st, ln, meta]) => window.renderFrame(s, st, ln, meta), [shot, step, line, { ep: shot.epLabel }]);
      const hash = crypto.createHash('md5').update(svg).digest('hex').slice(0, 12);
      const file = path.join(OUT, `${shot.id}__${li}.png`);
      const hfile = file + '.hash';
      if (fs.existsSync(file) && fs.existsSync(hfile) && fs.readFileSync(hfile, 'utf8') === hash) { skipped++; continue; }
      await page.evaluate((svg) => { document.getElementById('stage').innerHTML = svg; }, svg);
      const el = await page.$('#stage svg');
      await el.screenshot({ path: file });
      fs.writeFileSync(hfile, hash);
      done++;
    }
  }
  console.log(`rendered ${done}, cached ${skipped}`);
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
