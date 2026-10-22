# engine2 story authoring guide

Each story file in `engine2/story/<version>/NN_name.js` exports `(h) => { ... }` and creates shots with the helpers below. Files load in sorted order. Validate with `node engine2/story.js <version> /tmp/x.json` (prints shots, lines, words; throws on missing ids or en/zh).

Reference implementation: `engine2/story/short/*.js` (the 30-minute version). Copy its patterns.

## Content rules (non-negotiable)

1. **Follow the book.** Every event, number, name, price, and quote must come from *Reminiscences of a Stock Operator* (book text in `/tmp/claude-0/book/chNN.txt`, chapter N = file N). No invented events, dialogue content, or numbers. Dialogue may be paraphrased, but only if the book says the character said that in substance.
2. **Historical background** (dates, Panic of 1907, the Northern Pacific corner, the Lusitania, and similar) may be added only if it is well established. When unsure, leave it out.
3. **Illustrative charts.** When a chart's path is not given by the book, set `illustrative: true`; it prints "ILLUSTRATIVE PATH · 示意走势". Every point the narration states, such as entry, exit, fills, or highs, must sit exactly at the book's numbers.
4. **Teaching depth.** Each method and case gets worked numbers: position size × points = dollars, fills, averages, units (cotton points, cents per bushel), and what the book says the trader concluded. Use a chart, table, flow, equation, or bars every time a number is spoken.
5. **Narration voice.**
   - The narrator is old Livingston speaking in the first person, in plain, steady, spoken English.
   - Write in our own words; keep quotes from the book short and only where they are famous.
   - About 10–28 words per line.
   - Write numbers the way they should be spoken: "a hundred and five and a quarter", "$1.20½", "1907". Fractions such as ¼ ½ ¾ ⅛ are spoken correctly.
6. **Chinese.** Natural, fluent Simplified Chinese, not word-for-word. Keep trader terms consistent: 做空 / 平仓 / 加码 / 回调 / 突破 / 最小阻力线 / 对赌行 / 纸带 / 保证金.
7. **Manipulation.** When manipulation practices appear (wire-house tricks, Keene, pools), add one clear line saying they are illegal today and are studied only to recognise them.

## Helpers

```js
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(3, 'Reminiscences_E03_Sit_Tight');   // full version only: starts output group 3 (file name)
  chapter('Chapter V · Sit Tight', '第五章 · 坐得住');  // chapter marker attached to the next shot
  music('calm');                                 // mood for following shots: calm | rag | tense | dark
  ...
};
```

- **`N(en, zh, opts)`**: a narrator line (voice `nar`, the aged Livingston).
- **`L(voice, en, zh, opts)`**: a voiced line by another character.
  - Voices: `larry` (remembered dialogue, same aged voice), `boy`, `partridge`, `harding`, `fullerton`, `percy`, `williamson`, `keene`, `banker`, `clerk`, `manager`, `friend`, `trader`, `gates`, `wolff`, `wife`, `mother`, `dressmaker`, `woman`.
  - Options: `speak: '<castKey>'` makes that cast member lip-sync; `pause: s` adds silence before the line; `say: 'text'` overrides the spoken text; `nosub: true`.
- **`shot({...})`**: the main builder. Fields:
  - `id`: unique across the version. Prefix with the episode number, for example `e03_partridge`.
  - `set`, `setOpts`, `cast`, `items`, `lines`, `cam`, `trans`, `music`, `hold` (extra seconds at the end), `sounds`.
- **`title({ id, kicker, en, zh, sub: [en, zh], color, size, lines })`**: kinetic title card on a spinning burst. Use for each episode opening and each part.
- **`photo({ id, src: `${PD}/file.jpg`, credit, cap: [en, zh], capW, kb, items, lines })`**: full-screen public-domain photo with a Ken Burns move.
  - `kb` takes keys like `[{t:0,x:960,y:540,z:1.02},{t:12,x:930,y:500,z:1.16}]`.
  - Always pass `credit`, taken from `assets/pd/credits.json`.
- **`lesson(h, { id, tag: [en, zh], tagColor, title: [en, zh], titleSize, items, lines, gest, expr, music, set, cam, trans })`**: teaching page. Old Livingston stands at the left, at x≈225, and gestures on each line.
  - `gest[i]` overrides the pose for line i; `expr[i]` overrides the expression.
  - Content area: **x 470–1890, y 220–840**.

## Cue language (all `at`, `until`, `t`, `hl`, `pulse`, `draw`, `rowAt`, `marker` values)

- **Seconds:** a number such as `0.4`.
- **Line start:** `'L0'` (lines are 0-indexed).
- **Line end:** `'L2e'`.
- **Word:** `'L1@word'`, at the first spoken token starting with *word*. Use a distinctive word that is actually in that line. For numbers, use the digits as written, e.g. `'L3@114'`.
- **Percent through a line:** `'L1%40'`.
- **Offsets:** `+0.5` or `-0.3`, e.g. `'L2+0.8'`.
- **Shot boundaries:** `'start'`, `'end'`, `'end-1'`.

Build any graphic **on the cue of the words that describe it**. Never show everything at once.

## Layout rules

- The frame is 1920×1080. **Subtitles occupy y > 860**, so keep text, numbers, and faces above y≈840.
- **Characters:** `{ id, key?, x, y, s, flip, pose, expr, lookX, lookY, turn, prop, acts:[{t, pose, expr, x, y, s, turn, lookX, dur}], at, until, z, look:{...overrides} }`.
  - `(x, y)` is the waist point; the head is about 262·s above it.
  - Use y≈880–900, s≈1.1–1.25, so heads sit around y 560–630.
  - Two people: x≈700 and x≈1250, with the right one `flip: true` to face left.
  - `key` names the cast member for `speak` and camera `on`.
  - Several people can share an `id` look if each gets its own `key`.
- **Bubbles:**
  - `{type:'bubble', at, until, x, y, w, en, zh, tx, ty, kind:'speech'|'shout'|'thought', size}`. The tail points at (tx, ty), about the speaker's mouth (x, y − 250·s).
  - Put bubbles **above heads** (y 50–200) and never over the quote board's important cells.
- **Camera:**
  - `cam: [{t:0, x:960, y:540, z:1.0}, {t:'L1', on:'larry', z:1.4, dur:1.2}, ...]`. Here `on` frames a cast member's face.
  - `'static'` holds still. The default is a gentle drift.
  - Use a push-in at dramatic lines and pull back for wide reveals. Keep z ≤ 1.5.
- **Transitions:** `trans`:
  - `'fade'`, `'dip'` (black), `'flash'`, `'wipe'`, `'wipeL'`, `'iris'`, `'ink'`, `'whip'`, `'whipL'`, `'push'`, `'zoom'`, `'page'`, `'drop'`, `'cut'`.
  - Vary them. Use `whip` for time and place jumps, `page` between lesson pages, `dip` for solemn moments, and `flash` for title cards.

### Automatic behaviour (don't fight it)
- Speech bubbles are drawn in screen space: they follow the speaker through camera moves and are clamped inside the safe area (y < 845). You still give world coordinates relative to the speaker.
- In story scenes (any set except `paper`/`chalk`/`dark`/`burst`/`photo`), `counter`, `note`, `equation`, `rule`, `table`, `chart`, `bars` and `flow` default to screen space; counters get a cream backing panel. Put them where they don't cover faces (usually upper right, x 1300–1880, y 120–520).
- A `caption` in a shot that has bubbles hides automatically shortly after line 1 starts.
- Several labelled chart series get a legend at the top right instead of end-of-line labels.
- `pnl` can freeze at the exit: `pnl: {entry, shares, side, at, exitAt: cue, exit: price, x, y}`. Place the P&L box where the line never goes.

## Characters (`id`)

- Narrator: `boy` (age 14–15), `larry` (young man), `larryHat` (with fedora), `larryOld` (narrator, about 45).
- Book people: `partridge`, `harding`, `fullerton`, `percy`, `williamson`, `keene`, `morgan`.
- Others: `clerk`, `manager`, `trader`, `friend`, `officeboy`, `wife`, `mother`, `dressmaker`, `gates`, `wolff`, `generic`.

**Poses:** `idle`, `relaxed`, `explain`, `explainR`, `point`, `pointL`, `pointUp`, `chin`, `think`, `up`, `fist`, `hips`, `shrug`, `hold`, `holdR`, `phone`, `write`, `wave`, `grab`, `despair`, `cross`.

**Expressions:** `neutral`, `smile`, `grin`, `laugh`, `frown`, `angry`, `shock`, `worry`, `sad`, `think`, `determined`, `tired`, `sly`, `shout`.

**Props:**
- `{t:'paper', text}`, `{t:'ticket', text, sub}` (use with `holdR`), `{t:'money'}` (use with `hold`), `{t:'phone'}` (use with `phone`), `{t:'tape'}`, `{t:'cigar'}`, `{t:'pen'}`.

Give every speaking character `acts` that change pose and expression on the beats of the line, so nobody stands frozen.

## Sets (`set` + `setOpts`)

- **`office`** (broker's customer room):
  - `board: [[headers...], [row1...], [row2...]]`, `boardSeq: [{t, r, c, v}]` (price flips; r ≥ 1), `hl: [r, c]`.
  - Also `ticker`, `tickerX`, `crowd: n`, `windows`, `time`.
- **`bucketshop`:** same board options, plus `shopName`, `crowd`, `tickets: true`, `cageX`.
- **`street`** (Wall St with Trinity spire): `walkers`, `crowd`, `agitated`.
- **`floor`** (exchange floor crowd): `agitated`, `paper`, `paperN`.
- **`study`** (the old man's study): `night`, `ticker`, `tickerX`, `deskY`, `lampX`, `winX`.
- **Outdoor and travel:** `beach` (`yacht`, `yachtX`, `palms`), `boardwalk` (`sign`, `shopX`), `veranda`, `train`, `night` (`rain`).
- **Interiors and places:** `court` (`sign`), `warehouse` (`kind: 'cotton'|'coffee'|'grain'`, `label`), `wheat`, `ruins` (fire), `home`, `capitol`.
- **Abstract backgrounds:** `paper` (lesson page), `chalk`, `dark` (`color`), `burst` (`color`).

## Widgets (`items: [{type, ...}]`)

All widgets take `at`, `until`, `z`, `screen: true` (stays fixed against the camera).

- **Text and captions:**
  - `text {x,y,en,zh,size,font:'serif'|'title'|'cond'|'comic'|'type'|'fell',align,anim:'words',w,fill,zfill}`.
  - `caption {en,zh,x,y,w}`: yellow narration box, automatically screen space.
  - `tag {x,y,en,zh,color}`.
- **Speech and lettering:**
  - `bubble`: see layout rules.
  - `sfx {x,y,text,zh,size,color,font:'cond',rot,shake}`: comic lettering.
  - `stamp {x,y,en,zh,size,color,rot}`: thuds and shakes the camera.
- **Cards and equations:**
  - `note {x,y,w,h,en,zh,size,fill,icon,anim,align:'center'}`.
  - `rule {x,y,w,h,n,en,zh,size,tag,fill}`: numbered rule card.
  - `equation {x,y,size,terms:[{t:'text',zh,at,hl,color,count,prefix,suffix,fmt}]}`: worked arithmetic. Terms pop in on their cues, and `count` animates a number.
  - `counter {x,y,from,to,prefix,suffix,fmt:'int'|'$'|'frac'|'%',dur,size,color,label:[en,zh]}`.
- **Charts and data:**
  - `chart`. Fields:
    - Layout and axes: `{x,y,w,h,xr,yr,yTicks,yFmt,yPre,ySuf,xTicks:[[v,en,zh]],title:[en,zh],illustrative}`.
    - `series:[{pts,color,width,dash,draw:[[cue,idx],...],label:[en,zh],labelBelow,cursor:false}]`. `draw` reveals the line up to point idx at each cue, so the line draws in sync with the narration.
    - `marks:[{x,y,at,en,zh,dx,dy,w,fill}]`: callout boxes.
    - `hlines:[{v,at,color,en,zh,below}]`, `bands:[{x0,x1,y0,y1,at,color,en,zh}]`.
    - `pnl:{entry,shares,side:'long'|'short',at,x,y,mult}`: live P&L box.
    - `cursorLabel:false`, `cursorFmt`.
  - `bars {x,y,w,h,title,max,vsize,bars:[{v,vl,en,zh,at,color}]}`: handles negative values.
  - `fortune {x,y,w,h,items:[{v,vl,en,zh,at}]}`: log-scale capital curve.
  - `table {x,y,w,widths,size,bottom,cols:[[en,zh]...],rows:[[[en,zh],...]...],rowAt:[cues],hl:[cues|null]}`: rows slide in on cue.
  - `flow {x,y,w,bh,gap,dir:'h'|'v',size,nodes:[{en,zh,at,num,color,hl}],tokens:[{from,to,at,dur,label}]}`: arrows draw between nodes.
  - `timeline {x,y,w,range:[a,b],ticks:[[v,en,zh,cue]],marker:[[cue,v]]}`.
- **Props, documents and maps:**
  - `newspaper {x,y,w,h,paper,date,en,zh,size,rot,spin:false}`.
  - `ticket {x,y,lines:[...],head,color,rot,stamp:cue,stampText,stampZh}`.
  - `tape {y,h,speed,items:[[sym,price]],hl:[idx]}`: scrolling ticker tape across the screen.
  - `board {x,y,w,h,rows,seq,hlCell}`: quote board inside a lesson.
  - `map {x,y,w,h,cities:[{lon,lat,en,zh,at,hl}],routes:[{from:[lon,lat],to:[lon,lat],at}]}`.
  - `photo {x,y,w,h,src,en,zh,rot,kb}`: framed photo.
- **Annotations and fillers:**
  - `arrow {from:[x,y],to:[x,y],curve,at,color}`, `circle {x,y,rx,ry,at}`, `highlight {x,y,w,h,at}`.
  - `money {x,y,n}` (falling bills), `bales {x,y,n}`.

## Pacing targets (full version)

- About **148 spoken words per minute** of finished video, titles and photos included.
- A regular episode runs about 8 minutes, roughly 1,150–1,250 words in 15–22 shots.
- Mix the shot types:
  - About 40% story scenes with characters and dialogue.
  - About 40% lesson and chart shots.
  - About 20% photos and title cards.
- Never put more than two lesson pages in a row. Never let a shot exceed 6 lines. Keep shots 10–40 s.
- Each episode ends with two summary shots:
  - A **takeaway card**: a lesson with 3–5 `rule` cards.
  - A **mistake review table**: columns Mistake / Cause / Rule, in English and Chinese.

## Photos available (`assets/pd/credits.json` has titles and credits)

- **Wall Street and the Exchange:**
  - `wallst_1901_detroit`, `wallst_trinity_1903_detroit`, `wallst_crowd_trinity_1911_bain`, `wallst_panic_crowd_1884_harpers`, `subtreasury_wallst_c1900_detroit`.
  - `nyse_exterior_c1904_detroit`, `nyse_trading_floor_1922`, `nyse_floor_sweeping_1908`, `nyse_panic_floor_1893_leslies`, `broad_st_curb_brokers_1916`, `broker_office_quotation_board_c1910_bain`.
- **Ticker and telegraph:** `stock_ticker_edison_smithsonian`, `lawson_ticker_tape_1904`, `telegraph_operator_1908`.
- **Portraits:**
  - `livermore_portrait_1923_financialworld`, `livermore_back_again_financialworld_1923_page`.
  - `portrait_james_r_keene_1901_worldswork`, `keene_manipulator_article_lefevre_worldswork_1901`, `portrait_james_stillman_1907_worldswork`, `portrait_jp_morgan_1902`.
  - `portrait_eh_harriman_1908_bain`, `portrait_james_j_hill_c1915_bain`, `portrait_bernard_baruch_1917_bain`, `portrait_woodrow_wilson_1916_genthe`.
- **Places:**
  - `boston_state_st_1905_detroit`, `stlouis_olive_st_c1900_detroit`, `hoboken_lackawanna_ferry_c1900_detroit`.
  - `sf_earthquake_cityhall_1906_detroit`, `atlantic_city_boardwalk_1904_detroit`.
  - `saratoga_broadway_grand_union_c1905_detroit`, `saratoga_racetrack_crowd_1913_bain`.
  - `palmbeach_royal_poinciana_1910_detroit`, `palmbeach_breakers_veranda_c1900_detroit`, `florida_houseboat_miami_river_1904_detroit`.
- **The 1907 panic:** `knickerbocker_trust_bldg_1904_detroit`, `knickerbocker_trust_reopening_1908_bain`, `bank_run_19th_ward_1907_bain`.
- **Commodities:**
  - `chicago_board_of_trade_flash_1900_lawrence`, `chicago_wheat_pit_c1920`, `wheat_harvest_kansas_c1900`.
  - `cotton_levee_new_orleans_1903_detroit`, `coffee_santos_unloading_1916`.
- **Industry and railroads:** `carnegie_steel_homestead_1905_detroit`, `steel_open_hearth_homestead_1908_detroit`, `bethlehem_steel_postcard_c1905`, `nynhh_railroad_station_torrington_1906`.
- **War years:** `lusitania_1907_detroit`, `newspaper_nytribune_lusitania_1915-05-08`, `newsboy_us_at_war_1917_npco`.

## Checklist before handing back

- [ ] `node engine2/story.js full /tmp/x.json` runs clean.
- [ ] Every word cue names a word that appears in that line.
- [ ] Every number spoken appears on screen, at the moment it is spoken.
- [ ] No graphic covers another, and nothing important sits below y 840.
- [ ] Facts are checked against the book chapter text.
