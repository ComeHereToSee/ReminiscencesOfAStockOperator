# Storyboard guide (for writing an episode file)

Project: a ~2-hour bilingual motion comic + trader study guide of *Reminiscences of a Stock Operator*
(Edwin Lefèvre, 1923, public domain). English voice-over, English+Chinese subtitles, and **every piece of
on-screen text is bilingual** (English + Simplified Chinese). The book is first-person: narrator "Larry
Livingston", widely understood to be Jesse Livermore. Use the book's own names for people and firms.

## Hard rules
1. **Faithful.** Follow the book. No invented events, no fantasy. Dialogue bubbles may only paraphrase things
   the book says were said. Every number must come from the text. If a chart needs an invented path between
   stated prices, mark it `illustrative: true` (it prints "ILLUSTRATIVE · 示意图") and keep stated levels exact.
   Where the book contradicts itself, use the main figure and you may note the other one.
2. **Own words.** Write narration in your own words. You may quote the book briefly (each quote under 25 words,
   at most ~4 per episode), marked with quotation marks / a `quote` element.
3. **Complete.** Cover every item in your assignment checklist. Teaching parts (method, case studies, mistakes,
   lessons) get the most screen time, with tables/charts and step-by-step explanation. Anecdotes stay brief but
   must be present.
4. **Length.** Target **1,400–1,700 English words of narration per episode** (≈10–11 min). Each voiced line:
   ≤ 32 English words, one or two sentences, natural spoken English. Chinese translation: accurate, natural,
   concise. ≤ 6 lines per shot (each line = one reveal step).
5. Voices (`L(voice, en, zh, opts)`): `larry` (first-person story, the main narrator), `host` (lesson explainer),
   and for brief dialogue: `boy partridge clerk broker harding percy banker keene friend wife mother agent
   williamson wolff`. Override the speaker label with `{ who: { en: 'JOHN W. GATES', zh: '约翰·W·盖茨' } }`.
   Keep dialogue sparse; most lines are `larry` or `host`.
6. Each episode must end with: (a) a **Takeaways card** shot (`本集要点`), and (b) if the episode's chapters
   contain mistakes, a **Mistake review table** with three columns: Mistake 错误 → Why 原因 → Rule 规则.

## File format
Create `engine/story/epNN.js` (NN = your episode number, 2 digits):
```js
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  episode(3, 'Sit Tight', '坐得住', { en: 'Chapters V – VI', zh: '原著第五至六章' }, '#2c4a3a', [
    L('host', 'Episode three. Sit tight.', '第三集：坐得住。'),
  ]);
  // ... shots
};
```
**Shot ids must start with your prefix `pNN_`** (e.g. `p03_partridge`) and be unique.
`engine/story_v1_reference.js` is the previous, shorter version of the whole film. **Read it first**: it shows
every helper in real use, and its shots for your chapters should be reused or improved, not dropped.
Renderer source: `engine/lib.js` (read it for exact element options).

### Shot kinds
- `kind: 'comic'`: `panels: [P(layout, { bg, bgo, chars, props, at, tint })]`, `caps` (yellow narration boxes
  `{x,y,w,en,zh,at,size,zsize,color}`), `bubbles` (`{x,y,w,en,zh,tx,ty,kind:'speech'|'shout'|'thought',at}`;
  tx/ty = tail tip, page coords), `sfx` (`{x,y,t,zh,size,color,rot,at,font:'cond'}`; use `font:'cond'` for any
  sfx containing digits, because the comic font makes 7 look like 1).
  - Layouts: `FULL, HALF[0..1], BIGL[0..2], BIGR[0..2], THREE[0..2]`. Place characters with
    `ch(id, panel, xFraction, scale, opts)`; opts: `expr` (neutral smile grin frown sad tired shock angry shout
    think determined worry), `pose` (idle point pointL up fist chin cross tape paper ticket money phone),
    `flip`, `hy` (head height fraction), `headline` (for pose paper), `ticketText`, `exprAt: {step: expr}`, plus
    look overrides (`hat`: none bowler fedora top cap boater visor; `hatColor`, `mus`, `beard`, `glasses`,
    `suit`, `tie`, `hair`, `hairStyle`). Character ids: boy larry larryHat larryOld partridge clerk broker
    harding percy banker keene friend trader williamson wife mother agent. Customise looks for other people.
    Livingston's age: `boy` (14–15), `larry`/`larryHat` (20s–30s), `larryOld` (40s).
  - Backgrounds (`bg`): office bucketshop street floor study beach boardwalk yacht train cotton wheat coffee court
    night ruins burst dark home. `bgo`: `{ board: [['HEAD',...],['row',...]], hl: [row,col], crowd, ticker:false,
    color, label }`.
  - Props (`{t:...}` in panel coords): ticker, board, paper (newspaper: x,y,w,h,en,zh,paper,size,rot), bales,
    sacks, money, crowd, sign (x,y,w,en,zh,color), desk, telegraph, tickets, svg (raw SVG string).
- `kind: 'info'`: paper-page lesson. `tag: {en, zh}`, `title: {en, zh}`, `els: [...]`. **Content area is
  y 250 to 815, x 70 to 1850.** Elements (all take `at` = step when it appears):
  - `table {x,y,w,widths:[fractions],cols:[[en,zh],...],rows:[[[en,zh],...],...],hl:[rowIdx],reveal:true,rowAt:[...],size,headColor}`
  - `line {x,y,w,h,xr:[x0,x1],yr:[y0,y1],yTicks,yDec,yPre,yLabel:[en,zh],xTicks:[[v,en,zh]],series:[{pts,color,reveal:[stepPerPoint],label:[en,zh],at}],hlines:[{v,label,color,below,x0,x1,lx,at}],bands:[{y0,y1,x0,x1,label,at}],notes:[{x,y,en,zh,dx,dy,w,at}],illustrative}`.
    Note boxes are placed at (point + dx, point + dy). Keep them inside the chart and away from each other.
  - `bars {x,y,w,h,max,bars:[{v,vl,en,zh,color,at}],vsize}`
  - `timeline {x,y,w,h,items:[{v,vl,en,zh,at,color}]}` (log-scaled money bars; negative v = debt)
  - `flow {x,y,w,bh,dir:'h'|'v',nodes:[{num,en,zh,at,color}]}` (text auto-fits the box)
  - `cards {x,y,w,ch,cols,items:[{en,zh,at,n,color,tagColor}]}` (text auto-fits; default at = 0)
  - `quote {x,y,w,size,en,zh,src,bottom}` (auto-shrinks to fit above `bottom`, default 815)
  - `box {x,y,w,h,en,zh,color,anchor,size}` (give `h` to auto-fit)
  - `text`, `person`, `svg`
- `kind: 'title'`: made by `episode(...)`.

## Check your work (required)
```bash
cd /home/user/ReminiscencesOfAStockOperator
node engine/story.js                     # prints totals per episode; fix any "!! epNN.js" error
NODE_PATH=/opt/node22/lib/node_modules node engine/render.js pNN_   # render only your shots (~1 s/frame)
python3 engine/sheet.py pNN_             # contact sheets -> build/sheets/pNN__00.png ...
```
Open every contact sheet with the Read tool and fix overlaps, text overflowing boxes, clipped labels, notes
covering each other, and anything placed outside the content area. Iterate until clean. Also open a few
intermediate frames (`build/frames/<id>__<i>.png`) to check that the step-by-step reveals make sense with the
narration. Other agents are editing other episode files at the same time. Only edit your own file, and if
`node engine/story.js` reports another file failing, ignore it.

Do not run engine/build.py, do not commit, and do not edit lib.js, render.js or story.js. If you need a
renderer feature, describe it in your final report instead.

## Final report
Return: your file path, word count, shot count, and the checklist with each item marked done (and which shot
covers it). Also list any facts you were unsure about, with the chapter text that supports your choice.
