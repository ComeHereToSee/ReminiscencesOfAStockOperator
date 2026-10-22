// Full version, episode 4: Right and Busted (Book ch. VII–VIII, 1906–1907)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  const RED = '#b3302a', GREEN = '#2f6b3d', BLUE = '#2f5d8a', YEL = '#f6d77a', PINK = '#f3c6c0', MINT = '#cfe3c4';
  const DEACON = { hair: '#dcd7cc', hairStyle: 'gray', glasses: 'round', mus: 'walrus', musColor: '#dcd7cc', beard: 'chops', beardColor: '#dcd7cc', age: 3, coat: '#2a2a30', vest: '#3a3a44' };
  const OLDTIMER = { hair: '#e2ddd2', hairStyle: 'bald', mus: 'walrus', musColor: '#e2ddd2', age: 3, coat: '#4a4038', vest: '#5a4e40', glasses: 'pince' };
  episode(4, 'Reminiscences_E04_Right_and_Busted');

  // ================= Chapter VII =================
  chapter('Chapter VII · Buy on a Rising Scale', '第七章 · 越涨越买');
  music('calm');
  title({ id: 'e04_title', kicker: 'EPISODE 4 · 第4集', en: 'Right and Busted', zh: '看对了，却破产', color: BLUE,
    sub: ['Book chapters VII–VIII · 1906–1907', '原著第七至八章 · 1906–1907年'],
    lines: [N('Episode four. Right, and busted: a method for building a position, and a costly lesson in timing.', '第四集：看对了，却破产。一套建仓方法，和一堂昂贵的时机课。')] });

  // ---- the rising scale ----
  lesson(h, { id: 'e04_scale', tag: ['METHOD · BUY ON A RISING SCALE', '方法 · 越涨越买'], title: ['Buy as It Rises, Not as It Falls', '涨着买，不跌着买'],
    gest: ['explain', 'pointUp', 'up', 'point'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 10], yr: [108.5, 120], yTicks: [110, 112, 114, 116, 118], cursorFmt: 'frac',
        title: ["The book's own example (ch. VII)", '原书中的例子（第七章）'],
        series: [{ pts: [[0, 110], [1.5, 111], [3, 112.5], [4.2, 114], [5.5, 112.25], [6.6, 113.75]], color: GREEN,
          draw: [['L1', 1], ['L2', 2], ['L2@114', 3], ['L3', 4], ['L3@113', 5]] }],
        marks: [{ x: 1.5, y: 111, at: 'L1', en: 'Buy 2,000 @ 110, then 2,000 @ 111', zh: '110买2,000股，111再买2,000股', dx: -107, dy: -260, w: 260 },
          { x: 4.2, y: 114, at: 'L2@114', en: 'Long 6,000, avg 111¾. Stop and wait', zh: '持有6,000股，均价111¾。停下等待', dx: -40, dy: -240, w: 300, fill: YEL },
          { x: 5.5, y: 112.25, at: 'L3', en: 'Reaction to 112¼', zh: '回调到112¼', dx: 20, dy: 60, w: 260 },
          { x: 6.6, y: 113.75, at: 'L3@113', en: 'Buy 4,000 at market', zh: '按市价买4,000股', dx: 10, dy: 14, w: 280, fill: YEL }] },
      { type: 'note', at: 'L0', x: 1500, y: 220, w: 390, h: 300, size: 32, fill: MINT,
        en: 'Buy on a rising scale. Short? Sell on a falling one: each sale lower than the last.', zh: '越涨越买。做空呢？越跌越卖：每一笔都比上一笔低。' },
      { type: 'note', at: 'L2@wait', x: 1500, y: 545, w: 390, h: 295, size: 32, fill: YEL, anim: 'slideU',
        en: 'Then stop. A reaction will come. Watch how the stock takes care of itself.', zh: '然后停手。回调会来。看这只股票自己怎么应对。' }],
    lines: [
      N('The point is not to buy cheapest, but at the right time: on a rising scale. Selling short, on a falling one.', '关键不是买得最便宜，而是买在对的时候：越涨越买。做空则越跌越卖。'),
      N("Say I buy two thousand at 110. At 111 I'm right, at least for now, so I buy two thousand more.", '假设我在110买入两千股。涨到111，我就是对的，至少暂时如此，于是再买两千股。'),
      N('Still rising, a third lot. At 114 I hold six thousand at an average of 111¾. Then I stop and wait.', '还在涨，买第三批。到114时，我持有六千股，均价111¾。然后我停下来，等待。'),
      N('Say it falls back to 112¼, then rallies. As it gets back to 113¾, I order four thousand more, at the market.', '假设它回落到112¼，然后反弹。当它回到113¾时，我按市价再下单买四千股。'),
    ] });

  // ---- reading the fills ----
  shot({ id: 'e04_fills', set: 'office', trans: 'wipe', music: 'calm',
    setOpts: { boardW: 1000, board: [['THE STOCK', 'YOUR ORDER', 'FILLED'], ['113¾', 'BUY 4,000 MKT', '—'], ['', '', '']],
      boardSeq: [{ t: 'L0@all', r: 1, c: 2, v: '4,000 @ 113¾' }, { t: 'L1', r: 1, c: 2, v: '2,000 @ 114' }, { t: 'L1', r: 1, c: 0, v: '114' },
        { t: 'L1@hundred', r: 1, c: 0, v: '114½' }, { t: 'L1@hundred', r: 1, c: 2, v: '500 @ 114½' }, { t: 'L1@last', r: 1, c: 0, v: '115½' }, { t: 'L1@last', r: 1, c: 2, v: '500 @ 115½' }],
      hl: [1, 2], ticker: false },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', x: 760, y: 380, z: 1.15, dur: 1.2 }, { t: 'L2', on: 'larry', z: 1.35, dur: 1.4 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.2, pose: 'chin', expr: 'think',
      acts: [{ t: 'L0@easy', pose: 'shrug', expr: 'frown' }, { t: 'L1', pose: 'hold', expr: 'think' }, { t: 'L1@right', pose: 'fist', expr: 'smile' }, { t: 'L2', pose: 'explain', expr: 'determined' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'His example, continued: how the 4,000-share order is filled.', zh: '他的例子（续）：4,000股的买单是怎样成交的。' },
      { type: 'note', at: 'L0@easy', x: 1260, y: 110, w: 620, h: 200, size: 30, fill: PINK,
        en: 'All 4,000 at 113¾? Too easy: supply is plentiful. Test it: sell 1,000.', zh: '4,000股全在113¾成交？太容易：卖盘充足。试探：卖出1,000股。' },
      { type: 'note', at: 'L1@right', x: 1260, y: 330, w: 620, h: 200, size: 30, fill: MINT,
        en: 'Fills climbing to 115½? Buyers are competing with you. You are right.', zh: '成交价一路升到115½？有买家在和你抢。你是对的。' }],
    lines: [
      N('Now the test. If all four thousand fill at 113¾, it was too easy. Something is wrong: I test by selling a thousand.', '接下来是检验。如果四千股全在113¾成交，那就太容易了。一定有问题：我卖出一千股来试探。'),
      N('But if I get two thousand at 114, five hundred at 114½, and the last five hundred at 115½, I know I am right.', '但如果有两千股成交在114，五百股在114½，最后五百股在115½，我就知道自己对了。'),
      N('This assumes conditions are bullish. I never want to buy stocks too cheap, or too easily.', '这一切的前提是整体形势看涨。我从不想买得太便宜，也不想买得太容易。'),
    ] });

  // ---- Deacon S. V. White tests a tip ----
  shot({ id: 'e04_deacon1', set: 'office', trans: 'whip', music: 'rag', setOpts: { tickerX: 420 },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'tipster', z: 1.35, dur: 1 }, { t: 'L2', on: 'deacon', z: 1.45, dur: 0.9 }, { t: 'L3', on: 'tipster', z: 1.4, dur: 0.6 }, { t: 'L4', x: 960, y: 520, z: 1.08, dur: 1 }],
    cast: [{ id: 'generic', key: 'deacon', look: DEACON, x: 760, y: 890, s: 1.2, pose: 'chin', expr: 'neutral', lookX: -0.4,
        acts: [{ t: 'L1', expr: 'think', lookX: 0.5 }, { t: 'L2', pose: 'point', expr: 'determined' }, { t: 'L4', pose: 'relaxed', expr: 'smile' }] },
      { id: 'trader', key: 'tipster', x: 1250, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'grin',
        acts: [{ t: 'L1', pose: 'explainR', expr: 'grin' }, { t: 'L3', pose: 'despair', expr: 'shock' }, { t: 'L4', pose: 'shrug', expr: 'angry' }] },
      { id: 'clerk', key: 'frank', x: 1680, y: 890, s: 1.05, pose: 'idle', expr: 'neutral', z: -1, at: 'L2', acts: [{ t: 'L4@haste', x: 2250, dur: 1.4 }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Deacon S. V. White, a great operator of an earlier day. H. O. Havemeyer ran the Sugar company.', zh: '迪肯·S·V·怀特，早年的大作手。H·O·哈夫迈耶执掌糖业公司。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 960, y: 70, w: 620, en: 'Deacon, H. O. Havemeyer is buying Sugar, all he can get! A sure thirty points for a starter!', zh: '迪肯，H·O·哈夫迈耶在买糖业，能买多少买多少！起码稳赚三十个点！', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 320, y: 80, w: 540, en: 'Frank! Go over to the Board and sell ten thousand Sugar.', zh: '弗兰克！去交易所卖出一万股糖业。', tx: 760, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 1000, y: 90, w: 520, kind: 'shout', en: 'Sell? But I told you Havemeyer was buying it!', zh: '卖？可我告诉你哈夫迈耶在买啊！', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L4', x: 320, y: 80, w: 540, en: 'I know you did, my friend. Make haste, Frank!', zh: '我知道，我的朋友。快去，弗兰克！', tx: 760, ty: 590 }],
    lines: [
      N("An old story: Deacon S. V. White, in the days when H. O. Havemeyer's insiders ruled Sugar.", '讲一个老故事：迪肯·S·V·怀特，那时H·O·哈夫迈耶和他的内部人掌控着糖业股。'),
      L('trader', 'Deacon, H. O. Havemeyer is buying Sugar, all he can get! A sure thirty points for a starter!', '迪肯，H·O·哈夫迈耶在买糖业，能买多少买多少！起码稳赚三十个点！', { speak: 'tipster' }),
      L('fullerton', 'Frank! Go over to the Board and sell ten thousand Sugar.', '弗兰克！去交易所卖出一万股糖业。', { speak: 'deacon' }),
      L('trader', 'Sell? But I told you Havemeyer was buying it!', '卖？可我告诉你哈夫迈耶在买啊！', { speak: 'tipster' }),
      L('fullerton', 'I know you did, my friend. Make haste, Frank!', '我知道，我的朋友。快去，弗兰克！', { speak: 'deacon' }),
    ] });

  shot({ id: 'e04_deacon2', set: 'office', trans: 'cut', music: 'rag', setOpts: { tickerX: 420 },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 960, y: 500, z: 1.08, dur: 1 }, { t: 'L2', on: 'deacon', z: 1.4, dur: 1 }, { t: 'L3', on: 'tipster', z: 1.4, dur: 1 }],
    cast: [{ id: 'generic', key: 'deacon', look: DEACON, x: 760, y: 890, s: 1.2, pose: 'chin', expr: 'think', lookX: -0.6,
        acts: [{ t: 'L1', pose: 'point', expr: 'determined', lookX: 0.4 }, { t: 'L2', pose: 'explain', expr: 'smile' }, { t: 'L3', pose: 'relaxed', expr: 'laugh' }] },
      { id: 'trader', key: 'tipster', x: 1250, y: 890, s: 1.15, flip: true, pose: 'idle', expr: 'worry',
        acts: [{ t: 'L1', pose: 'despair', expr: 'shock' }, { t: 'L2', pose: 'idle', expr: 'think' }, { t: 'L3', pose: 'shrug', expr: 'sad' }] }],
    items: [{ type: 'counter', at: 0.4, until: 'L2', x: 1560, y: 300, from: -10000, to: -10000, steps: [{ t: 'L0@another', v: -20000, dur: 1 }, { t: 'L1@thirty', v: 10000, dur: 1.4 }],
        size: 86, suffix: ' sh', label: ["the deacon's net Sugar position", '迪肯的糖业净头寸'] },
      { type: 'bubble', at: 'L2', until: 'L3', x: 280, y: 70, w: 660, en: 'The way twenty thousand were taken proved somebody wanted all that was offered. Your tip was good, as far as it went.', zh: '两万股被这样接走，证明确实有人愿意吃下所有抛出的股票。你的消息是好的，就它说到的而言。', tx: 760, ty: 590 },
      { type: 'bubble', at: 'L3', x: 980, y: 70, w: 620, en: "Deacon, won't you sell mine when you sell yours? I don't know as much as I thought I did.", zh: '迪肯，您卖的时候能不能顺便把我的也卖了？我懂的没我以为的那么多。', tx: 1250, ty: 600 }],
    lines: [
      N('He watched the tape fill his order, then told the clerk: sell another ten thousand.', '他盯着纸带看自己的卖单怎样成交，然后吩咐职员：再卖一万股。'),
      N('At the next report he said: now buy thirty thousand Sugar. Thirty thousand!', '下一份回报来了，他说：现在买入三万股糖业。三万股！'),
      L('fullerton', 'The way twenty thousand were taken proved somebody wanted all that was offered. Your tip was good, as far as it went.', '两万股被这样接走，证明确实有人愿意吃下所有抛出的股票。你的消息是好的，就它说到的而言。', { speak: 'deacon' }),
      L('trader', "Deacon, won't you sell mine when you sell yours? I don't know as much as I thought I did.", '迪肯，您卖的时候能不能顺便把我的也卖了？我懂的没我以为的那么多。', { speak: 'tipster' }),
    ] });

  lesson(h, { id: 'e04_testtip', tag: ['ANALYSIS', '分析'], title: ['A Tip Is a Hypothesis. Test It with Orders.', '消息只是假设：用订单去检验'], titleSize: 50,
    gest: ['explain', 'point', 'up', 'explainR'],
    items: [
      { type: 'flow', at: 'L1', x: 470, y: 225, w: 1420, bh: 200, gap: 60, size: 30, nodes: [
        { num: 1, en: 'Sell 10,000: goes fairly easily. Not conclusive', zh: '卖1万股：相当顺利。还不能下结论', at: 'L1' },
        { num: 2, en: 'Sell 10,000 more: absorbed, and the price keeps rising', zh: '再卖1万股：被吸收，价格还在涨', at: 'L1@second', color: MINT },
        { num: 3, en: 'Somebody takes all that is offered: buy 30,000', zh: '有人照单全收：买入3万股', at: 'L2', color: YEL }] },
      { type: 'equation', at: 'L2@thirty', x: 1180, y: 560, size: 54, terms: [{ t: '−10,000', zh: '卖', at: 'L2@thirty' }, { t: '−10,000', zh: '再卖', at: 'L2@thirty+0.3' },
        { t: '+30,000', zh: '买', at: 'L2@thirty+0.6' }, { t: '= +10,000 long', zh: '净多头1万股', at: 'L2@ten', hl: true, color: GREEN }] },
      { type: 'note', at: 'L2@cheap', x: 470, y: 650, w: 690, h: 188, size: 30, fill: YEL,
        en: '"That is why I never buy stocks cheap." How the market takes your order tells you more than any name.', zh: '“这就是我从不买便宜股票的原因。”市场怎样接你的单，比任何名字都更能说明问题。' },
      { type: 'note', at: 'L3', x: 1190, y: 650, w: 700, h: 188, size: 30, fill: MINT,
        en: 'Big lines: 100 shares sell easily, 50,000 do not. Sell when you can, not when you want.', zh: '大仓位：100股好卖，5万股难卖。能卖的时候就卖，别等想卖的时候。' }],
    lines: [
      N('Read it as an experiment: selling into a rumoured buyer tests whether he is real.', '把它当成一次实验：向传闻中的买家卖出，就能检验这个买家是否真实存在。'),
      N('The first ten thousand went fairly easily: not conclusive. The second ten thousand was absorbed by a market that kept rising.', '第一个一万股卖得相当顺利：还不能下结论。第二个一万股被一个持续上涨的市场吸收了。'),
      N('Buying thirty thousand covered his twenty thousand short and left him long ten thousand. That is why I never buy stocks cheap.', '买入三万股，平掉了两万股空头，还留下一万股多头。这就是我从不买便宜股票的原因。'),
      N('Big lines add a rule: a market takes a hundred shares easily, fifty thousand not. Sell when you can, not when you want.', '大仓位还要多一条规则：市场吃下一百股很容易，五万股就不行。能卖的时候就卖，而不是想卖的时候。'),
    ] });

  photo({ id: 'e04_nyse', src: `${PD}/nyse_exterior_c1904_detroit.jpg`, credit: 'New York Stock Exchange, c.1900–05 · Detroit Publishing Co. (public domain)', music: 'calm',
    cap: ['The New York Stock Exchange, Broad Street, c. 1900–1905.', '约1900–1905年，布罗德街上的纽约证券交易所。'],
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 960, y: 500, z: 1.14 }],
    items: [{ type: 'note', at: 'L0@never', x: 1160, y: 560, w: 700, h: 160, size: 32, fill: YEL, en: 'Never too high to begin buying. Never too low to begin selling.', zh: '没有太高而不能开始买的价格，也没有太低而不能开始卖的价格。' }],
    lines: [
      N('Remember: stocks are never too high to begin buying, or too low to begin selling.', '记住：股票永远不会高到不能开始买，也不会低到不能开始卖。'),
      N("But after the first trade, don't make a second unless the first shows a profit. Wait, and watch.", '但第一笔交易之后，除非它有盈利，否则不要做第二笔。等待，观察。'),
    ] });

  lesson(h, { id: 'e04_probe', tag: ['RULE', '规则'], title: ['Your First Trade Must Pay Before Your Second', '第一笔盈利，才做第二笔'], titleSize: 50,
    gest: ['explain', 'despair', 'up'], expr: [null, 'worry', 'smile'],
    items: [
      { type: 'bars', at: 'L0', x: 470, y: 220, w: 900, h: 620, title: ['A 500-share line, built in steps', '分步建立500股的仓位'], max: 500, vsize: 32,
        bars: [{ v: 100, vl: '100', en: '1st lot', zh: '第1批', at: 'L1', color: '#c9a26a' },
          { v: 200, vl: '200', en: '+100 if profit', zh: '盈利才+100', at: 'L2', color: GREEN },
          { v: 300, vl: '300', en: '+100 if profit', zh: '盈利才+100', at: 'L2+0.5', color: GREEN },
          { v: 400, vl: '400', en: '+100 if profit', zh: '盈利才+100', at: 'L2+1', color: GREEN },
          { v: 500, vl: '500', en: 'full line', zh: '满仓', at: 'L2+1.5', color: GREEN }] },
      { type: 'stamp', at: 'L0@gambling', until: 'L1', x: 1640, y: 360, en: "GAMBLING? DON'T!", zh: '赌博？别赌！', size: 52 },
      { type: 'note', at: 'L1@loss', x: 1400, y: 220, w: 490, h: 200, size: 30, fill: PINK, icon: '!',
        en: "First lot shows a loss? Stop. You're wrong, at least for now.", zh: '第一批就亏？停手。你错了，至少暂时如此。' },
      { type: 'note', at: 'L2', x: 1400, y: 440, w: 490, h: 180, size: 30, fill: MINT,
        en: 'Shows a profit? Then, and only then, the next lot.', zh: '有盈利？那时，也只有那时，才买下一批。' },
      { type: 'note', at: 'L2@years', x: 1400, y: 640, w: 490, h: 200, size: 30, fill: YEL,
        en: 'Start at the right time, not at the cheapest price.', zh: '要在对的时间开始，而不是在最便宜的价格。' }],
    lines: [
      N("Say your full line is five hundred shares. Speculating, don't buy it all at once. Merely gambling? My only advice is: don't!", '假设你的满仓是五百股。如果是投机，不要一次买完。只是在赌？我唯一的建议是：别赌！'),
      N('Buy the first hundred. If it promptly shows a loss, why buy more? You are wrong, at least for now.', '先买第一个一百股。如果它马上出现亏损，为什么还要加仓？你错了，至少暂时错了。'),
      N('If it shows a profit, buy the next. Beginning at exactly the right time took me years, and hundreds of thousands of dollars, to learn.', '如果有盈利，再买下一批。恰好在对的时间开始，这一点我花了好多年、几十万美元才学会。'),
    ] });

  // ================= Chapter VIII =================
  chapter('Chapter VIII · Right and Busted', '第八章 · 看对了却破产');
  shot({ id: 'e04_lungs', set: 'study', setOpts: { night: true, lampX: 1650 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'nar', z: 1.3, dur: 1.4 }, { t: 'L2@angry', on: 'nar', z: 1.45, dur: 0.8 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 640, y: 880, s: 1.25, pose: 'relaxed', expr: 'neutral',
      acts: [{ t: 'L0', pose: 'explain', expr: 'determined' }, { t: 'L1', pose: 'chin', expr: 'sly' }, { t: 'L2', pose: 'explainR', expr: 'neutral' }, { t: 'L2@pneumonia', pose: 'shrug', expr: 'laugh' }] }],
    items: [
      { type: 'note', at: 'L0@prejudice', x: 1200, y: 110, w: 680, h: 150, size: 32, fill: YEL, en: 'One steadfast prejudice: against being wrong.', zh: '唯一坚定的偏见：反对犯错。' },
      { type: 'note', at: 'L1', x: 1200, y: 285, w: 680, h: 150, size: 30, fill: PINK, en: "Bullish because you own stocks? Don't let your holdings think for you.", zh: '因为持有股票而看涨？别让持仓替你思考。' },
      { type: 'note', at: 'L2', x: 1200, y: 460, w: 680, h: 170, size: 30, fill: MINT, en: 'Never argue with the tape. Anger at the market = anger at your lungs for pneumonia.', zh: '永远不跟纸带争辩。对市场生气，就像因肺炎对自己的肺发火。' }],
    lines: [
      N('Saratoga made me more independent than ever of tips and talk. My one steadfast prejudice is against being wrong.', '萨拉托加之后，我比以往任何时候都更不依赖消息和传言。我唯一坚定的偏见，就是反对犯错。'),
      N("Many men are bullish because they own stocks. I don't let my holdings do my thinking.", '很多人看涨，是因为他们手里有股票。我不让我的持仓替我思考。'),
      N('And I never argue with the tape. Being angry at the market is like getting mad at your lungs because you have pneumonia.', '我也从不跟纸带争辩。对市场生气，就像因为得了肺炎而对自己的肺发火。'),
    ] });

  lesson(h, { id: 'e04_swing', tag: ['KEY IDEA', '核心思想'], title: ['Trade the Big Swing in the General List', '做整体市场的大波段'], titleSize: 52,
    gest: ['explain', 'shrug', 'point', 'pointUp'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 225, w: 1420, widths: [0.24, 0.38, 0.38], size: 30, bottom: 690,
        cols: [['', ''], ['One stock', '单只股票'], ['The general list', '整体市场']],
        rows: [[['What drives it', '驱动力'], ['Pools, tips, insiders', '资金池、消息、内部人'], ['Basic conditions: the main current', '基本形势：主流']],
          [['A big short line', '大额空头'], ['Holders can squeeze or corner you', '持股者能逼空或垄断你'], ['A million shares, no squeeze', '一百万股也不怕逼空']],
          [['The rule', '规则'], ['Easy to think about; small money', '容易想；赚小钱'], ['Bullish in a bull market, bearish in a bear', '牛市看涨，熊市看跌']]],
        rowAt: ['L0', 'L2', 'L3'], hl: [null, 'L2@million', 'L3@practice'] },
      { type: 'note', at: 'L3@practice', x: 470, y: 712, w: 1420, h: 124, size: 32, fill: YEL, align: 'center', anim: 'slideU',
        en: 'Anticipate probabilities: the weeks to come matter more than the week that has passed.', zh: '预判概率：未来几周比已经过去的一周更重要。' }],
    lines: [
      N('The big money is in the big swing. Pools may start it; basic conditions decide how far it runs.', '大钱在大波段里。资金池也许能挑起行情，但它走多远，由基本形势决定。'),
      N("So I'll tell people whether I'm bullish or bearish, never which stock: in a bear market they all go down.", '所以我只告诉别人我看涨还是看跌，从不说买哪只股票：熊市里，所有股票都会跌。'),
      N("Short too much of one stock, and its holders can squeeze you. A million shares of the general list, they can't.", '某只股票做空太多，持股者就能逼空你。可卖空一百万股的整体市场，他们就没办法。'),
      N('So: bullish in a bull market, bearish in a bear market. In practice, that means anticipating probabilities.', '所以：牛市看涨，熊市看跌。在实践中，这意味着预判概率。'),
    ] });

  photo({ id: 'e04_1906', src: `${PD}/wallst_trinity_1903_detroit.jpg`, credit: 'Wall St. and Trinity Church, c.1903 · Detroit Publishing Co. (public domain)', music: 'tense',
    cap: ['1906: his reading of conditions.', '1906年：他对形势的判断。'],
    kb: [{ t: 0, x: 960, y: 420, z: 1.04 }, { t: 14, x: 960, y: 600, z: 1.14 }],
    items: [{ type: 'note', at: 'L1', x: 1160, y: 520, w: 700, h: 250, size: 30, fill: YEL,
      en: 'Ordinary hard times: a $10,000 house swapped for $8,000 of race horses. 1906: the house burned, the horses wrecked.', zh: '普通的萧条：一万美元的房子换成八千美元的赛马。1906年：房子烧了，马也毁了。' }],
    lines: [
      N('In 1906 the money outlook looked serious. Real wealth had been destroyed: by the Boer War, then the San Francisco earthquake.', '1906年，资金面形势严峻。大量真实财富已被毁掉：先是布尔战争，接着是旧金山地震。'),
      N('Not a ten-thousand-dollar house traded for eight thousand dollars of race horses, but the house burned and the horses wrecked. So: sell stocks!', '这不是拿一万美元的房子换了八千美元的赛马，而是房子烧了，马也毁了。所以：卖出股票！'),
    ] });

  lesson(h, { id: 'e04_busted', tag: ['MISTAKE', '错误'], tagColor: RED, title: ['Right on Direction, Wrong on Timing', '方向对了，时机错了'],
    gest: ['explain', 'point', 'shrug', 'despair', 'chin'], expr: [null, 'frown', 'worry', 'sad', 'think'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 10], yr: [84, 118], yTicks: [], illustrative: true, cursor: false,
        title: ['His 1906 short campaign', '他1906年的做空战役'],
        series: [{ pts: [[0, 100], [1, 96], [2, 103], [2.6, 101], [3, 99], [3.8, 104], [4.4, 102], [5, 100], [6, 106], [6.6, 103], [7.2, 101], [8.2, 107], [9, 105], [10, 110]], color: BLUE,
          draw: [['L0', 2], ['L2', 10], ['L3', 13]] }],
        marks: [{ x: 0, y: 100, at: 'L0@plunged', en: 'Plunges short', zh: '重仓做空', dx: 20, dy: 76, w: 260, fill: PINK },
          { x: 2, y: 103, at: 'L1', en: 'Rally: covers', zh: '反弹：平仓', dx: -90, dy: -142, w: 260 },
          { x: 3, y: 99, at: 'L2@exactly', en: 'Right for one day', zh: '只对了一天', dx: 65, dy: 62, w: 260 },
          { x: 10, y: 110, at: 'L3@cleaned', en: 'Rally: cleaned out', zh: '反弹：被洗光', dx: -330, dy: -108, w: 260, fill: PINK }] },
      { type: 'note', at: 'L1@position', x: 1500, y: 220, w: 390, h: 300, size: 30, fill: YEL,
        en: '"My position was right, but my play was wrong." Selling only into a falling market: wrong, but not hurt.', zh: '“立场是对的，打法错了。”只在下跌中卖出：会错，但不会受伤。' },
      { type: 'note', at: 'L3@twenty', x: 1500, y: 540, w: 390, h: 300, size: 32, fill: PINK, anim: 'slideU',
        en: 'Nearly 27, twelve years in the game: right, and busted. He saw the storm through a telescope.', zh: '快27岁，入行12年：看对了，却破产了。他是用望远镜看的风暴。' }],
    lines: [
      N('My first trades usually showed a profit, so I plunged short. The market went off, came back, then rose steadily.', '我的第一笔交易通常会有盈利，于是我重仓做空。市场跌了，又涨回来，然后稳步上涨。'),
      N("I covered; holding on, I couldn't have bought a postcard. My position was right, my play wrong: I'd sold too soon.", '我平了仓；要是扛着不平，我连一张明信片都买不起了。立场是对的，打法错了：我卖得太早。'),
      N('When the rally faltered I sold again, and was right for exactly one whole day. Rally after rally took another bite.', '反弹乏力时我又卖空，结果只对了整整一天。一次又一次的反弹，每次都咬掉我一块。'),
      N('At last I sold all I could; stocks rallied once more, and it cleaned me out. Nearly twenty-seven: right, and busted!', '最后我卖空了能卖的全部；股市又一次反弹，把我洗光了。快二十七岁：看对了，却破产了！'),
      N("I'd been looking through a telescope: the storm was much farther off than it seemed.", '我一直是在用望远镜看：风暴比看上去远得多。'),
    ] });

  // ---- the dollar heap ----
  const CART = `<g transform="translate(1000 610)"><rect x="0" y="0" width="360" height="150" rx="10" fill="#8a3a2a" stroke="#17120c" stroke-width="6"/>`
    + `<text x="180" y="46" text-anchor="middle" font-family="'Oswald', sans-serif" font-weight="700" font-size="24" fill="#f6d77a">LAWRENCE LIVINGSTON</text>`
    + `<text x="180" y="80" text-anchor="middle" font-family="'Oswald', sans-serif" font-weight="700" font-size="24" fill="#f6d77a">TRUCKING CORPORATION</text>`
    + `<text x="180" y="118" text-anchor="middle" font-family="'Noto Sans SC', sans-serif" font-weight="700" font-size="22" fill="#fbf4e2">劳伦斯·利文斯顿运输公司</text>`
    + `<circle cx="80" cy="160" r="36" fill="#3a2a1a" stroke="#17120c" stroke-width="6"/><circle cx="280" cy="160" r="36" fill="#3a2a1a" stroke="#17120c" stroke-width="6"/>`
    + `<path d="M 0 40 L -70 10" stroke="#17120c" stroke-width="10" stroke-linecap="round"/></g>`;
  const SIGN = `<g transform="translate(1400 330)"><rect x="140" y="110" width="16" height="170" fill="#5b3a1e" stroke="#17120c" stroke-width="4"/><rect x="0" y="0" width="300" height="120" rx="8" fill="#efe3c4" stroke="#17120c" stroke-width="6"/>`
    + `<text x="150" y="58" text-anchor="middle" font-family="'Bangers', sans-serif" font-size="46" fill="#b3302a">HELP YOURSELF</text>`
    + `<text x="150" y="100" text-anchor="middle" font-family="'Noto Sans SC', sans-serif" font-weight="900" font-size="30" fill="#17120c">请自取</text></g>`;
  shot({ id: 'e04_heap', set: 'dark', setOpts: { color: '#1f2433' }, trans: 'iris', music: 'dark',
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'L2', x: 760, y: 560, z: 1.12, dur: 2.5 }, { t: 'L3', x: 960, y: 540, z: 1.0, dur: 1.5 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 260, y: 900, s: 1.1, pose: 'hold', expr: 'smile',
      acts: [{ t: 'L0@pile', pose: 'pointUp', expr: 'grin' }, { t: 'L2@ran', x: 800, dur: 2.2, pose: 'grab', expr: 'determined' }, { t: 'L2@wind', pose: 'despair', expr: 'tired' }, { t: 'L3', pose: 'despair', expr: 'sad' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'How "right and busted" felt to him: his own picture of it.', zh: '“看对了却破产”是什么滋味：他自己的比喻。' },
      { type: 'svg', at: 'L0@sign', svg: SIGN },
      { type: 'money', at: 'L0@pile', x: 1460, y: 790, n: 14 },
      { type: 'svg', at: 'L1', until: 'L3@wagon', svg: CART },
      { type: 'sfx', at: 'L2@wind', x: 980, y: 560, text: 'PUFF!', zh: '喘不上气', size: 90, color: '#f6d77a' }],
    lines: [
      N('Picture it: a big pile of dollars ahead, with a sign in huge letters: Help yourself.', '想象一下：前方有一大堆美元，插着一块大字招牌：请自取。'),
      N('Beside it stood a cart painted Lawrence Livingston Trucking Corporation. I had a new shovel, and no competition.', '旁边停着一辆车，车身漆着“劳伦斯·利文斯顿运输公司”。我手里有把新铁锹，四下无人与我争抢。'),
      N("The first time I'd seen big money ahead, I ran for it. Before I got there, my wind gave out and I fell.", '那是我第一次看见前方的大钱，于是我拼命跑过去。还没跑到，我就喘不上气，摔倒了。'),
      N("The pile was still there, but I'd lost the shovel, and the wagon was gone. I should have walked, not sprinted.", '那堆钱还在，可我丢了铁锹，车也不见了。我应该走过去，而不是冲过去。'),
    ] });

  // ---- the signal ----
  shot({ id: 'e04_signal', set: 'office', trans: 'wipe', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 1200, y: 480, z: 1.12, dur: 1.2 }, { t: 'L2', on: 'larry', z: 1.4, dur: 1 }, { t: 'L3', on: 'harding', z: 1.4, dur: 1 }, { t: 'L4', x: 960, y: 520, z: 1.05, dur: 1 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.2, pose: 'hold', expr: 'think', prop: { t: 'paper', text: 'FINANCIAL PAGE' },
        acts: [{ t: 'L1', pose: 'hold', expr: 'shock' }, { t: 'L2', pose: 'point', expr: 'determined' }, { t: 'L3', pose: 'cross', expr: 'frown' }, { t: 'L4', pose: 'shrug', expr: 'tired' }] },
      { id: 'harding', x: 1250, y: 890, s: 1.15, flip: true, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L3', pose: 'explain', expr: 'worry' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Harding Brothers, New York. He waits, watchfully.', zh: '纽约，哈丁兄弟公司。他小心地等待着。' },
      { type: 'newspaper', screen: true, at: 'L1', until: 'L2', x: 1480, y: 290, w: 620, h: 380, rot: 4, paper: 'Financial Notices', en: 'GREAT NORTHERN & NORTHERN PACIFIC: NEW STOCK, PAYABLE IN INSTALLMENTS', zh: '大北方与北太平洋：发行新股，可分期缴款', size: 34 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 280, y: 70, w: 620, en: "Ed, the time to sell is right now. That ad is the bankers' signed confession. What they fear is what I hope.", zh: '埃德，现在就是卖出的时候。这则广告等于银行家们签字画押的供状。他们害怕的，正是我所盼望的。', tx: 700, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 960, y: 80, w: 600, en: 'Wait. This market has big rallies. Prices may be lower, but the operation will be safer.', zh: '等一等。这个市场常有大反弹。等下去价格也许更低，但操作更安全。', tx: 1250, ty: 600 },
      { type: 'stamp', screen: true, at: 'L4', x: 1450, y: 330, en: 'SOLD: TOO LITTLE', zh: '卖了：太少', size: 66 }],
    lines: [
      N('I waited watchfully, as I should have before. Then one morning came the sign.', '我小心地等待，这本是我一开始就该做的。然后一天早上，信号出现了。'),
      N('Great Northern and Northern Pacific announced new stock, payable in installments. That was something new in Wall Street.', '大北方和北太平洋宣布发行新股，可以分期缴款。这在华尔街是前所未有的。'),
      L('larry', "Ed, the time to sell is right now. That ad is the bankers' signed confession. What they fear is what I hope.", '埃德，现在就是卖出的时候。这则广告等于银行家们签字画押的供状。他们害怕的，正是我所盼望的。', { speak: 'larry' }),
      L('harding', 'Wait. This market has big rallies. Prices may be lower, but the operation will be safer.', '等一等。这个市场常有大反弹。等下去价格也许更低，但操作更安全。', { speak: 'harding' }),
      N('I sold a little; too little.', '我卖了一点；太少了。'),
    ] });

  lesson(h, { id: 'e04_race', tag: ['READING CONDITIONS', '解读形势'], title: ['The Signal: A Race for Scarce Money', '信号：争抢稀缺的资金'],
    gest: ['explain', 'explainR', 'point', 'fist'], expr: [null, null, null, 'determined'],
    items: [
      { type: 'flow', dir: 'v', at: 'L0', x: 470, y: 222, w: 900, bh: 105, gap: 40, size: 28, nodes: [
        { en: 'Old rule: rights at par were a "melon": bull news', zh: '旧惯例：按面值认购是“切瓜”，利好', at: 'L0' },
        { en: 'Now: installments. Bankers doubt holders have cash', zh: '如今：分期缴款。银行家怀疑股东没现金', at: 'L1' },
        { en: 'St. Paul sets its payment date first: a race', zh: '圣保罗把缴款日定在前面：抢钱', at: 'L2', color: PINK },
        { en: 'Money scarce now, scarcer later: SELL', zh: '现在缺钱，以后更缺：卖出', at: 'L3', color: YEL }] },
      { type: 'stamp', at: 'L1@330', x: 1640, y: 330, en: 'GT. NOR. PFD ~330', zh: '大北方优先股约330', size: 50 },
      { type: 'note', at: 'L3@Sell', x: 1410, y: 520, w: 480, h: 300, size: 32, fill: YEL, anim: 'slideU',
        en: '"The public saw little that week. The wise stock operators saw much that year."', zh: '“那一周，公众看到的很少；那一年，聪明的作手看到的很多。”' }],
    lines: [
      N('For years new Great Northern stock was a melon, a bull item: holders subscribed at par, far below the market.', '多年来，大北方发行新股一向是“切瓜分红”，是利好：股东按面值认购，远低于市价。'),
      N('Now the strongest bankers doubted the holders could pay cash. And Great Northern preferred was selling at about 330!', '如今，最有实力的银行家都怀疑股东拿不出现金。而大北方优先股当时卖到330左右！'),
      N('Days later St. Paul announced its own issue, payable first. It was racing them for what little money there was.', '几天后，圣保罗铁路也宣布发行，缴款日比那两家还早。它是在跟它们抢那点仅有的资金。'),
      N("If money was that scarce now, what about later? Sell 'em! I sold Great Northern preferred around 330, and others high.", '如果现在资金就这么紧，以后会怎样？卖！我在330左右卖空大北方优先股，也在高位卖空了其他股票。'),
    ] });

  shot({ id: 'e04_corpses', set: 'office', trans: 'whip', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'friend', z: 1.35, dur: 1 }, { t: 'L2', on: 'larry', z: 1.45, dur: 1 }, { t: 'L3', on: 'oldtimer', z: 1.3, dur: 1.2 }, { t: 'L4', x: 1100, y: 500, z: 1.1, dur: 1 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 640, y: 890, s: 1.2, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L2', pose: 'explain', expr: 'sly' }, { t: 'L3', pose: 'relaxed', expr: 'smile' }, { t: 'L4', pose: 'relaxed', expr: 'laugh' }] },
      { id: 'friend', x: 1120, y: 890, s: 1.15, flip: true, pose: 'despair', expr: 'worry',
        acts: [{ t: 'L1', pose: 'explain', expr: 'worry' }, { t: 'L2e', pose: 'chin', expr: 'frown' }, { t: 'L4', pose: 'shrug', expr: 'smile' }] },
      { id: 'generic', key: 'oldtimer', look: OLDTIMER, x: 1600, y: 890, s: 1.1, flip: true, pose: 'idle', expr: 'neutral',
        acts: [{ t: 'L3', pose: 'explain', expr: 'grin' }, { t: 'L4', pose: 'pointUp', expr: 'laugh' }] }],
    items: [{ type: 'note', at: 0.3, until: 'L1', x: 1250, y: 110, w: 630, h: 190, size: 30, fill: PINK,
        en: 'After a 15–20 point break, a 3-point rally "proves" the bottom to hopeful holders.', zh: '暴跌15–20点之后，一次3点的反弹，就让抱着希望的持股人认定已经见底。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 860, y: 80, w: 560, en: "Have you covered? They've touched bottom, and what goes down must come up!", zh: '你平仓了吗？它们已经见底了，跌下去的总要涨回来！', tx: 1120, ty: 600 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 240, y: 70, w: 620, en: "First they sink to the bottom. They come up, but not right away. These corpses aren't quite dead yet.", zh: '先是沉到底，然后才会浮上来，但不是马上。这些尸体还没死透呢。', tx: 640, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 1200, y: 80, w: 560, en: 'Travers: "Y-yes! Th-the s-stiffness of d-death!"', zh: '特拉弗斯："是、是啊！那、那是死人的僵、僵硬！"', tx: 1600, ty: 615 },
      { type: 'bubble', at: 'L4', x: 1200, y: 80, w: 560, en: 'Travers: "I sh-should say I had! I\'m sh-short twenty thousand sh-shares!"', zh: '特拉弗斯："当、当然有！我、我做空了两万股！"', tx: 1600, ty: 615 }],
    lines: [
      N('The list was soft as mush. My Atlantic City friend hated my saying all stocks must fall.', '整个市场软得像烂泥。我那位大西洋城的朋友，最受不了我说所有股票都要跌。'),
      L('friend', "Have you covered? They've touched bottom, and what goes down must come up!", '你平仓了吗？它们已经见底了，跌下去的总要涨回来！', { speak: 'friend' }),
      L('larry', "First they sink to the bottom. They come up, but not right away. These corpses aren't quite dead yet.", '先是沉到底，然后才会浮上来，但不是马上。这些尸体还没死透呢。', { speak: 'larry' }),
      N('An old-timer recalled the bear William R. Travers, asked how he could be bearish with the market so stiff: the stiffness of death!', '一位老行家想起了空头威廉·R·特拉弗斯：有人问他市场这么硬，他怎么还看空，他说：那是死人的僵硬！'),
      N("Travers once asked to see a company's books. His interest? He was short twenty thousand shares!", '特拉弗斯有一次要查一家公司的账。他和公司有什么利害关系？他做空了两万股！'),
    ] });

  lesson(h, { id: 'e04_reading', tag: ['CASE STUDY · READING', '案例 · 雷丁'], title: ['Reading: The Stock Everyone Feared to Sell', '雷丁：人人不敢卖空的股票'], titleSize: 50,
    gest: ['explain', 'explainR', 'point', 'fist'], expr: [null, null, 'determined', 'smile'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 960, h: 620, xr: [0, 10], yr: [86, 118], yTicks: [90, 95, 100, 105, 110, 115], illustrative: true, cursorFmt: 'frac',
        title: ['Reading: the "cornered" stock', '雷丁：所谓“被垄断”的股票'], xTicks: [[3, 'weeks: holds firm', '数周：坚挺'], [8, 'minutes', '几分钟']],
        bands: [{ x0: 0, x1: 6, y0: 109, y1: 118, color: '#9a9182', at: 'L0', en: 'Like the Rock of Gibraltar', zh: '像直布罗陀巨岩' }],
        series: [{ pts: [[0, 111.5], [1, 112], [2, 111], [3, 112.5], [4, 111.5], [5, 112], [6, 111], [6.4, 106], [6.8, 101], [7.2, 97], [7.8, 94], [8.4, 92], [10, 92]], color: '#7a4a22',
          draw: [['L0', 6], ['L3@111', 6], ['L3@111+0.6', 11], ['L3@92', 12]] }],
        marks: [{ x: 3, y: 112.5, at: 'L1@tested', en: 'Room traders test it, then give up', zh: '场内交易员试探后放弃', dx: -123, dy: 98, w: 260 },
          { x: 6, y: 111, at: 'L3@111', en: 'From 111: two brokers × 4,000 at once', zh: '从111起：两个经纪人同时各卖4,000股', dx: 44, dy: -95, w: 280, fill: YEL },
          { x: 8.4, y: 92, at: 'L3@92', en: 'Covers all at 92', zh: '在92全部平仓', dx: -400, dy: -70, w: 260, fill: MINT }] },
      { type: 'equation', at: 'L3@92', x: 1665, y: 300, size: 58, terms: [{ t: '111 → 92', zh: '卖出价→平仓价', at: 'L3@92' }] },
      { type: 'equation', at: 'L3@92+0.6', x: 1665, y: 430, size: 58, terms: [{ t: '= 19 points', zh: '几分钟赚19点', at: 'L3@92+0.6', hl: true, color: GREEN }] },
      { type: 'equation', at: 'L3@92+1.2', x: 1665, y: 540, size: 40, terms: [{ t: '= $19,000 per 1,000 sh', zh: '每1,000股赚1.9万美元', at: 'L3@92+1.2' }] },
      { type: 'note', at: 'L2', x: 1460, y: 610, w: 430, h: 228, size: 30, fill: MINT,
        en: 'Play no favourites. A stock that defies conditions may be the best short of all.', zh: '不偏袒任何股票。逆形势而行的股票，可能是最好的卖空对象。' }],
    lines: [
      N('Everything gave way except Reading. It stood like the Rock of Gibraltar. Everybody said it was cornered, and selling it was suicide.', '所有股票都垮了，只有雷丁屹立不倒，像直布罗陀巨岩。人人都说它被垄断了，卖空它等于自杀。'),
      N('The pool had cheap stock, friendly banks, a member up three million. Room traders tested it and quit. Such pools are illegal today.', '那个资金池持股成本低，和银行关系好，有个成员账面盈利超过三百万。场内交易员试探过，都放弃了。这种资金池如今是违法的。'),
      N("But conditions said down. If Reading didn't fall, my theory was wrong. I figured the Street was simply afraid to sell it.", '可形势说要跌。如果雷丁不跌，我的理论就是错的。我判断，华尔街只是不敢卖它。'),
      N('I gave two brokers each an order to sell four thousand, at once. It was 111; within minutes I covered everything at 92.', '我给两个经纪人各下一张卖四千股的单，同时下。当时它是111；几分钟之内，我在92把全部空单平掉了。'),
    ] });

  photo({ id: 'e04_florida', src: `${PD}/florida_houseboat_miami_river_1904_detroit.jpg`, credit: 'Houseboating on the Miami River, c.1904 · Detroit Publishing Co. (public domain)', music: 'calm',
    cap: ['Florida, c. 1904. "There are direct wires between Wall Street and Palm Beach."', '约1904年的佛罗里达。“华尔街和棕榈滩之间有直通电报线。”'], capW: 700,
    items: [{ type: 'note', at: 'L0@sixty', x: 1160, y: 540, w: 700, h: 230, size: 30, fill: YEL,
      en: 'Great Northern pfd: ~330, down 60–70 points by February 1907. Per 1,000 shares: $60,000–70,000.', zh: '大北方优先股：约330，到1907年2月跌了60–70点。每1,000股赚6万–7万美元。' }],
    lines: [
      N('In February 1907 I cleaned up. Great Northern preferred was down sixty or seventy points, and other stocks in proportion.', '1907年2月，我全部平仓。大北方优先股跌了六七十个点，其他股票也相应下跌。'),
      N('The decline had discounted the near future. I lost my first ten thousand trading in and out of season; not twice. I went fishing.', '这轮下跌已经消化了近期的前景。我当年的第一个一万美元，就是不分时节进进出出亏掉的；同样的错不犯第二次。我去钓鱼了。'),
    ] });

  // ---- summary ----
  lesson(h, { id: 'e04_rules', tag: ['TAKEAWAYS', '要点'], title: ['What Episode Four Teaches', '第四集的要点'],
    gest: ['explain', 'point', 'pointUp'],
    items: [
      { type: 'rule', at: 'L0@rising', x: 470, y: 222, w: 1420, h: 112, n: '1', size: 32, en: 'Buy on a rising scale; sell short on a falling one.', zh: '越涨越买；做空则越跌越卖。' },
      { type: 'rule', at: 'L0@fill', x: 470, y: 346, w: 1420, h: 112, n: '2', size: 32, en: 'Read your fills: too easy is a warning.', zh: '读懂你的成交：太容易就是警告。' },
      { type: 'rule', at: 'L1', x: 470, y: 470, w: 1420, h: 112, n: '3', size: 32, tag: GREEN, en: 'No second trade unless the first shows a profit.', zh: '第一笔没有盈利，就不做第二笔。' },
      { type: 'rule', at: 'L2', x: 470, y: 594, w: 1420, h: 112, n: '4', size: 32, tag: RED, en: "Right isn't enough: wait for the timing. Walk, don't sprint.", zh: '看对还不够：要等时机。走过去，别冲过去。' },
      { type: 'rule', at: 'L2@conditions', x: 470, y: 718, w: 1420, h: 112, n: '5', size: 32, en: 'Trade the general list. Conditions are your allies.', zh: '做整体市场。基本形势是你的盟友。' }],
    lines: [
      N('Episode four in rules. Buy on a rising scale, and let each fill tell you whether to go on.', '第四集的规则：越涨越买，让每一笔成交告诉你是否继续。'),
      N('Never make a second trade unless the first shows a profit. Test a tip with an order, not with hope.', '第一笔没有盈利，就不做第二笔。用订单去检验消息，而不是用希望。'),
      N("Being right is half the job; timing is the other half. Walk, don't sprint, and let conditions be your allies.", '判断正确只是一半，另一半是时机。要走，别冲，让形势成为你的盟友。'),
    ] });

  lesson(h, { id: 'e04_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: RED, title: ['Mistake → Cause → Rule', '错误 → 原因 → 规则'],
    gest: ['explain', 'despair', 'chin'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 225, w: 1420, widths: [0.34, 0.31, 0.35], size: 30, bottom: 835,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [[['Plunged short too soon, all at once', '过早做空，一次满仓'], ['Eager to prove the storm was real', '急于证明风暴是真的'], ['Wait for the signal; sell on a falling scale', '等信号；越跌越卖']],
        [['Resold into every rally', '每次反弹都重新卖空'], ['Right on direction, wrong on time', '方向对了，时机错了'], ['Begin right, and sitting tight is easy', '开局对了，就容易坐得住']],
        [['Sold too little on the signal', '信号出现时卖得太少'], ["Let a friend's caution override him", '让朋友的谨慎压过自己'], ['When conditions and tape agree, act', '形势与纸带一致时，就行动']]],
      rowAt: ['L0', 'L1', 'L2'] }],
    lines: [
      N('The mistakes. In 1906 I plunged short before the timing was right, and put out my whole line at once.', '错误复盘。1906年，我在时机未到时就重仓做空，而且一次把仓位全部打满。'),
      N('I covered and resold into every rally, until one cleaned me out.', '我在每一次反弹中平仓又卖空，直到有一次把我洗光。'),
      N("And with the signal in hand, I let Ed's caution talk me into selling too little.", '而在信号出现时，我又被埃德的谨慎说服，卖得太少。'),
    ] });
};
