// Episode 9 — Chapters XVII–XVIII. Narration is an original adaptation of Lefèvre's
// "Reminiscences of a Stock Operator" (1923, public domain); short quotations are marked.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const CAT = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M 60 40 Q 130 30 120 -60 Q 118 -90 100 -96" stroke="#16130f" stroke-width="16" fill="none" stroke-linecap="round"/><ellipse cx="0" cy="0" rx="70" ry="52" fill="#1a1714" stroke="#16130f" stroke-width="5"/><circle cx="-58" cy="-58" r="40" fill="#1a1714" stroke="#16130f" stroke-width="5"/><path d="M -92 -80 L -86 -120 L -66 -92 Z M -48 -92 L -30 -122 L -24 -84 Z" fill="#1a1714" stroke="#16130f" stroke-width="4"/><ellipse cx="-72" cy="-62" rx="7" ry="9" fill="#e8d34a"/><ellipse cx="-46" cy="-62" rx="7" ry="9" fill="#e8d34a"/><circle cx="-72" cy="-61" r="3" fill="#16130f"/><circle cx="-46" cy="-61" r="3" fill="#16130f"/></g>`;

  episode(9, 'Warnings, Not Breaks', '留意警告，而非暴跌', { en: 'Chapters XVII – XVIII', zh: '原著第十七至十八章' }, '#5a2a6a', [
    L('host', 'Episode nine. Warnings, not breaks.', '第九集：留意警告，而非暴跌。'),
  ]);

  // ---------------- Chapter XVII ----------------
  {
    const [a, b] = HALF;
    shot({ id: 'p09_blackcat', kind: 'comic', panels: [
      P(a, { bg: 'home', props: [{ t: 'desk', x: 0, y: 560, w: 905, h: 210 }, { t: 'svg', svg: CAT(790, 520, 0.8) }],
        chars: [ch('friend', a, 0.28, 0.95, { expr: 'grin', pose: 'point', hy: 0.42 })] }),
      P(b, { at: 1, bg: 'court', props: [{ t: 'sign', x: 150, y: 40, w: 600, en: 'COMMITTEE · TAX ON STOCK SALES', zh: '国会委员会 · 股票交易税', size: 30, zsize: 26, color: '#5b3a1e' }],
        chars: [ch('larryOld', b, 0.5, 0.95, { expr: 'frown', pose: 'cross', hy: 0.52, exprAt: { 2: 'think', 3: 'think' } })] }),
    ], caps: [{ x: 70, y: 70, w: 420, en: 'The "black cat" story.', zh: '"黑猫"的故事。' }],
    bubbles: [{ at: 0, until: 0, x: 380, y: 150, w: 400, en: 'The cat told him to sell!', zh: '是猫叫他卖的！', tx: 640, ty: 420 }], lines: [
      L('larry', 'A close friend loves to tell how a black cat at his breakfast table told me to sell my whole line, and I got nearly the top prices.', '一位好友总爱讲：在他家早餐桌旁，一只黑猫"告诉"我卖掉全部持仓，结果我几乎卖在了最高价。'),
      L('larry', 'The truth is duller. I was in Washington, urging Congressmen to tax stock trading fairly, not to death. They weren\'t convinced, so I was grumpy.', '真相平淡得多。我当时在华盛顿，劝说国会议员对股票交易公平征税，而不是把我们税死。他们没被说服，所以我心情不好。'),
      L('larry', 'I do get sudden urges to get out. I think they come from many small warning signals, none strong enough alone to give a definite reason.', '我确实会突然产生离场的冲动。我认为那来自许多微小的警告信号，单独哪一个都不足以构成明确的理由。'),
      L('host', 'Old traders called it ticker-sense, and said James R. Keene had plenty. A hunch is experience working faster than words.', '老交易员称之为"盘感"，说詹姆斯·R·基恩极富盘感。所谓直觉，不过是比语言更快的经验。'),
    ] });
  }

  shot({ id: 'p09_steel', kind: 'info', tag: { en: 'SELLING A BIG LINE', zh: '卖出大仓位' }, title: { en: 'Steel and Utah Copper: Add Only to What Acts Right', zh: '钢铁与犹他铜业：只加仓走势正确的' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.18, 0.22, 0.32, 0.28], reveal: true, rowAt: [0, 1], cols: [['Stock', '股票'], ['Behaviour', '走势'], ['Position', '仓位'], ['Selling day', '卖出当天']], rows: [
      [['Utah Copper', '犹他铜业'], ['Did not act right', '走势不对'], ['5,000 sh @ ≈114, never added', '约114买5,000股，从未加仓'], ['Broke 5 pts as he sold', '他一卖就跌了5点']],
      [['U.S. Steel', '美国钢铁'], ['Acted right', '走势正确'], ['20,000 day one → 72,000', '首日2万股→7.2万股'], ['All sold, avg 1 pt below the top', '全部卖出，均价仅比顶部低1点']],
    ] },
    { type: 'bars', at: 1, x: 70, y: 545, w: 760, h: 270, max: 80000, vsize: 26, bars: [
      { v: 5000, vl: '5,000', en: 'Utah Copper', zh: '犹他铜业', color: '#b8322a' },
      { v: 72000, vl: '72,000', en: 'U.S. Steel', zh: '美国钢铁', color: '#2f7d3a' },
    ] },
    { type: 'box', at: 2, x: 870, y: 545, w: 980, h: 120, color: '#cfe3c4', en: 'A huge market that could absorb anything → sold all 72,000. Profit ≈ $1,500,000.', zh: '市场巨大、承接力极强→卖出全部7.2万股。利润约150万美元。', size: 30 },
    { type: 'box', at: 4, x: 870, y: 685, w: 980, h: 130, color: '#f6d77a', en: 'The chance to turn paper profit into cash usually comes at the end of the move. Sell when the market can take it.', zh: '把账面利润变现的机会通常出现在行情末端。在市场接得住时卖出。', size: 28 },
  ], lines: [
    L('larry', 'Early in that bull market I bought 5,000 Utah Copper around 114, and stopped. It didn\'t act right.', '那轮牛市初期，我在114左右买了五千股犹他铜业，然后停手了。它走势不对。'),
    L('larry', 'I began U.S. Steel at almost the same price: 20,000 shares the first day, because it did act right. I kept adding until I held 72,000.', '我以差不多的价格开始买美国钢铁：首日两万股，因为它走势正确。我一路加仓，直到持有七万二千股。'),
    L('larry', 'That morning I saw a great big market with tremendous power of absorption. I sold all my Steel at an average one point from the top.', '那天早上，我看到一个承接力巨大的市场。我卖掉全部钢铁股，均价离顶部只有一个点。'),
    L('larry', 'In the same hour, my 5,000 Utah broke five points as I sold. My profit was about one and a half million dollars.', '就在同一个小时，我卖那五千股犹他铜业时，它跌了五个点。我的总利润约一百五十万美元。'),
    L('host', 'Add only to what acts right. Sell a big line when the market can absorb it, usually near the end of the move.', '只加仓走势正确的股票。在市场能承接时卖出大仓位，这通常出现在行情末端。'),
  ] });

  shot({ id: 'p09_doctor', kind: 'info', tag: { en: 'THE PROFESSIONAL ATTITUDE', zh: '职业态度' }, title: { en: 'Trained Like a Doctor', zh: '像医生一样受训' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 150, max: 30, nodes: [
      { num: 1, en: 'Learn the theory', zh: '学习理论' },
      { num: 2, en: 'Observe & classify cases', zh: '观察并归类病例', at: 0 },
      { num: 3, en: 'Diagnose', zh: '诊断', at: 0 },
      { num: 4, en: 'Treat at once, from experience', zh: '凭经验立即施治', at: 1 },
    ] },
    { type: 'quote', at: 2, x: 70, y: 430, w: 900, size: 34, zsize: 28, bottom: 815, en: 'A man may know what to do and lose money — if he doesn\'t do it quickly enough.', zh: '一个人可能知道该做什么却仍然亏钱——如果他做得不够快。', src: 'Ch. XVII' },
    { type: 'cards', at: 3, x: 1010, y: 430, w: 840, ch: 175, cols: 2, max: 34, items: [
      { en: 'Observation', zh: '观察', at: 3 },
      { en: 'Experience', zh: '经验', at: 3 },
      { en: 'Memory', zh: '记忆', at: 3 },
      { en: 'Mathematics', zh: '数学：事实与数字', at: 3 },
    ] },
  ], lines: [
    L('host', 'He compares a trader\'s training to a doctor\'s. Learn the theory, then spend years observing and classifying cases until you can diagnose.', '他把交易者的训练比作医生的训练。先学理论，再用多年观察、归类病例，直到能够诊断。'),
    L('host', 'A seasoned doctor acts at once, and people call it instinct. It\'s really years of remembered cases. Facts can be taught; experience can\'t.', '老练的医生当即施治，人们称之为本能。其实那是多年病例的记忆。事实可以传授，经验不能。'),
    L('larry', 'A man may know what to do and lose money, if he doesn\'t do it quickly enough.', '一个人可能知道该做什么却仍然亏钱——如果他做得不够快。'),
    L('host', 'His four tools: observation, experience, memory and mathematics. Bet on probabilities, never on the unexpected, and never stop studying general conditions.', '他的四件工具：观察、经验、记忆和数学。押注概率，绝不押注意外；永远不停地研究整体形势。'),
  ] });

  shot({ id: 'p09_wheatwhy', kind: 'info', tag: { en: 'WHEAT, c. 1922', zh: '小麦，约1922年' }, title: { en: 'From Facts to a Position', zh: '从事实到头寸' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 290, max: 30, nodes: [
      { num: 1, en: 'Government reports: winter wheat ≈ last year; spring crop bigger than 1921; early harvest.', zh: '政府报告：冬小麦≈去年；春小麦多于1921年；收获提前。' },
      { num: 2, en: 'Coal miners\' and railroad shopmen\'s strikes cripple freight.', zh: '煤矿工人和铁路车间工人罢工，货运瘫痪。', at: 1 },
      { num: 3, en: 'Delayed winter wheat and early spring wheat reach market together.', zh: '延误的冬小麦和提前的春小麦将同时涌入市场。', at: 1 },
      { num: 4, en: 'Traders won\'t buy → no buying power → price should fall.', zh: '交易者不会买入→没有买盘→价格理应下跌。', at: 2 },
    ] },
    { type: 'quote', at: 3, x: 260, y: 585, w: 1400, size: 40, zsize: 32, en: 'You can\'t tell till you bet.', zh: '不下注，你就无从知道。', src: 'Pat Hearne, quoted in Ch. XVII' },
  ], lines: [
    L('host', 'The professional attitude in practice: wheat, around 1922. Government reports pointed to a normal winter crop, and a bigger, earlier spring crop.', '职业态度的实战：约1922年的小麦。政府报告显示冬小麦产量正常，春小麦产量更大、收获更早。'),
    L('host', 'He also thought of the coal and railroad shopmen\'s strikes. With freight crippled, delayed winter wheat would arrive together with the early spring crop.', '他还想到了煤矿和铁路车间工人的罢工。货运瘫痪，延误的冬小麦将与提前的春小麦同时到达市场。'),
    L('host', 'With a flood of wheat coming, traders won\'t buy. No buying power: the price should fall.', '大批小麦即将涌来，交易者不会买。没有买盘：价格理应下跌。'),
    L('larry', 'But as old Pat Hearne used to say, "You can\'t tell till you bet." Between being bearish and selling, there\'s no time to waste.', '但正如老帕特·赫恩常说的："不下注，你就无从知道。"从看空到卖出，不必浪费时间。'),
  ] });

  shot({ id: 'p09_wheattest', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'Test the Market\'s Absorbing Power', zh: '测试市场的承接力' }, els: [
    { type: 'table', x: 70, y: 255, w: 1180, widths: [0.38, 0.27, 0.35], reveal: true, rowAt: [0, 1, 2, 3], cols: [['Wheat sold (bushels)', '卖出小麦（蒲式耳）'], ['Price move', '价格变动'], ['Reading', '解读']], rows: [
      [['Normal market: 1,000,000', '正常市场：100万'], ['within ¼¢', '¼美分以内'], ['benchmark', '基准']],
      [['Test 1: 250,000', '测试1：25万'], ['−¼¢', '−¼美分'], ['not conclusive', '尚无定论']],
      [['Test 2: 250,000, taken in driblets of 10–15,000', '测试2：25万，以1–1.5万的零星小单承接'], ['−1¼¢', '−1¼美分'], ['no buying power', '没有买盘']],
      [['Then 2,000,000 + 2,000,000', '然后200万+200万'], ['broke 6¢, kept falling', '暴跌6美分并续跌'], ['confirmed', '确认']],
    ], hl: [2] },
    { type: 'bars', at: 1, x: 1290, y: 255, w: 560, h: 400, max: 1.4, vsize: 26, bars: [
      { v: 0.25, vl: '¼¢', en: 'Test 1', zh: '测试1', color: '#d9a441', at: 1 },
      { v: 1.25, vl: '1¼¢', en: 'Test 2', zh: '测试2', color: '#b8322a', at: 2 },
    ] },
    { type: 'box', at: 2, x: 1290, y: 675, w: 560, h: 140, color: '#f3c6c0', en: 'Same size, 5× the drop: a fever reading.', zh: '同样的量，5倍的跌幅：发烧的读数。', size: 28 },
  ], lines: [
    L('host', 'Read the market like a patient\'s pulse. Normally a million bushels can be bought or sold within a quarter of a cent.', '像给病人号脉一样读市场。正常情况下，一百万蒲式耳的买卖价格变动在四分之一美分以内。'),
    L('host', 'His first test: 250,000 bushels. The price dropped a quarter cent. Not conclusive.', '第一次测试：二十五万蒲式耳。价格跌了四分之一美分。尚无定论。'),
    L('host', 'The second 250,000 was taken in driblets of ten or fifteen thousand, and fell a cent and a quarter. A drop out of proportion: no buying power.', '第二批二十五万只被一万到一万五的零星小单接走，价格跌了一又四分之一美分。跌幅不成比例：没有买盘。'),
    L('host', 'So he sold two million bushels, and days later two million more. Wheat broke six cents, and kept sliding with short-lived rallies.', '于是他卖出两百万蒲式耳，几天后又卖两百万。小麦暴跌六美分，并在短暂反弹中持续下滑。'),
    L('larry', 'Following experience may fool you now and then. Not following it fools you every time.', '遵循经验偶尔会让你上当。不遵循经验，则每次都会让你出丑。'),
  ] });

  shot({ id: 'p09_groups', kind: 'info', tag: { en: 'GROUP BEHAVIOUR', zh: '板块行为' }, title: { en: 'Blackwood Leads, Chester Lags: the Laggard Is a Warning', zh: '布莱克伍德领涨，切斯特掉队：落后股是警告' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 570, xr: [0, 10], yr: [0, 100], yTicks: [], yLabel: ['Motor group (illustrative shapes, no prices in the book)', '汽车板块（示意形态，原书无价格）'], illustrative: true,
      xTicks: [[1, 'leader rises', '龙头上涨'], [4.5, 'public buys laggard', '公众买落后股'], [9, 'break', '暴跌']],
      series: [
        { pts: [[0, 30], [2, 42], [4, 55], [6, 68], [8, 78], [10, 86]], color: '#2f7d3a', label: ['Blackwood Motors', '布莱克伍德汽车'] },
        { pts: [[0, 28], [2, 30], [4, 29], [6, 26], [7.5, 24], [8.3, 14], [10, 8]], color: '#b8322a', reveal: [1, 1, 1, 2, 2, 3, 3], label: ['Chester', '切斯特'] },
      ],
      notes: [{ x: 6, y: 26, at: 2, en: 'Public buys; it falls anyway', zh: '公众买入，它仍下跌', dx: -330, dy: 30, w: 260 }, { x: 8.3, y: 14, at: 3, en: 'He shorts → breaks wide open', zh: '他做空→暴跌', dx: -120, dy: -170, w: 250 }] },
    { type: 'cards', x: 1290, y: 250, w: 560, ch: 175, cols: 1, max: 28, items: [
      { en: 'Brokers\' tip: buy the laggard, it must catch up.', zh: '经纪行的建议：买落后股，它总会补涨。', at: 0 },
      { en: 'In a bull market insiders could easily lift it. They didn\'t: they were selling.', zh: '牛市中内部人很容易拉抬它。他们没有：他们在卖。', at: 2 },
      { en: 'Beware a stock that refuses to follow its group leader.', zh: '当心拒绝跟随板块龙头的股票。', at: 3, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'Stocks in a group tend to move together. So brokers tell customers to buy the laggard, the one that hasn\'t caught up yet.', '同一板块的股票往往同涨同跌。所以经纪行总劝客户买落后股，也就是还没补涨的那只。'),
    L('larry', 'I was long Blackwood Motors. It rose one to three points a day and lifted the motor group, all but Chester.', '我做多布莱克伍德汽车。它每天涨一到三个点，带动了汽车板块，唯独切斯特例外。'),
    L('larry', 'The public bought Chester as the cheap one that must catch up. Instead it declined. In that market, its insiders could easily have put it up.', '公众把切斯特当作必然补涨的便宜货买入。它反而下跌了。在那样的市场里，内部人本可以轻松拉抬它。'),
    L('larry', 'When the men who ought to want a stock don\'t want it, why should I? There was inside selling. I sold Chester short, and it broke wide open.', '如果最该想要这只股票的人都不想要它，我为什么要？内部人在卖。我做空切斯特，它随后暴跌。'),
    L('larry', 'The reason came out after the break. But the warning came before it. "I don\'t look out for the breaks; I look out for the warnings."', '原因在暴跌之后才公布，但警告在暴跌之前就出现了。"我不是在等暴跌，我是在留意警告。"'),
  ] });

  shot({ id: 'p09_guiana', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Guiana Gold, Part 1: How the Stock Reached the Public', zh: '圭亚那黄金（上）：股票如何到了公众手里' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.07, 0.6, 0.33], reveal: true, rowAt: [0, 1, 2, 2, 3], size: 26, cols: [['#', '#'], ['Step', '步骤'], ['Price / numbers', '价格 / 数字']], rows: [
      [['1', '1'], ['Belle Isle Exploration advances Guiana cash; receives bonds + shares', '贝尔岛勘探公司向圭亚那预付现金；换得债券和股份'], ['> $10M · 250,000 of 1,000,000 sh', '逾1000万美元 · 100万股中的25万股']],
      [['2', '2'], ['Belle Isle gives the bankers a call on its 250,000 shares', '贝尔岛给银行家们一份25万股的看涨期权'], ['call at 36', '行权价36']],
      [['3', '3'], ['A professional\'s deal (⅓ of profit above 36) is drawn up, then dropped to save the fee', '与职业操盘手的协议（36以上利润的三分之一）已拟好，却为省费用而作罢'], ['—', '—']],
      [['4', '4'], ['Bankers form an inside pool, which takes the stock from its own colleagues', '银行家组成内部资金池，从自己同伙手中接过股票'], ['at 41: a 5-pt gift', '41：白送5个点']],
      [['5', '5'], ['Bull market, leading group, dividends, famous sponsors: the public buys', '牛市、领涨板块、分红、知名发起人：公众买入'], ['≈400,000 sh up to 47', '约40万股，最高47']],
    ], hl: [4] },
  ], lines: [
    L('host', 'Now a full case: Guiana Gold. Belle Isle Exploration advanced the company over ten million dollars, for bonds and 250,000 of its million shares.', '下面是一个完整案例：圭亚那黄金。贝尔岛勘探公司向它预付了一千多万美元，换得债券和一百万股中的二十五万股。'),
    L('host', 'Belle Isle gave the bankers a call on those shares at 36. A professional was to sell them for a third of the profit above 36.', '贝尔岛把这批股票以36的价格给了银行家们作看涨期权。原本请一位职业操盘手来卖，报酬是36以上利润的三分之一。'),
    L('host', 'At the last minute the bankers dropped him to save the fee, and formed their own inside pool.', '最后一刻，银行家们为了省下这笔费用撤掉了他，自己组建了内部资金池。'),
    L('host', 'The pool took the stock at 41, paying their own banking colleagues a five-point profit to start with.', '资金池以41接过股票，一开始就让自己的银行同伙白赚了五个点。'),
    L('host', 'With dividends and famous sponsors, the public bought about 400,000 shares, up to 47. He later says almost half a million.', '有分红、有知名发起人，公众买进了约四十万股，最高到47。他后来又说接近五十万股。'),
  ] });

  shot({ id: 'p09_guiana2', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Guiana Gold, Part 2: No Inside Buying', zh: '圭亚那黄金（下）：没有内部人买入' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 570, xr: [0, 10], yr: [12, 56], yTicks: [20, 30, 35, 41, 47, 50], yLabel: ['Guiana Gold (stated levels; path illustrative)', '圭亚那黄金（价位据原书；路径为示意）'], illustrative: true,
      series: [{ pts: [[0, 41], [1.5, 47], [2.5, 50], [3.8, 44], [4.6, 40], [5.6, 35], [7, 30], [8.5, 24], [10, 18]], color: '#b8322a', reveal: [0, 0, 0, 1, 1, 2, 3, 3, 4] }],
      notes: [
        { x: 2.5, y: 50, en: 'Curb ≈50', zh: '场外≈50', dx: 30, dy: -20, w: 150 },
        { x: 4.6, y: 40, at: 1, en: 'Sags 10 pts: he tests, sells, sells more', zh: '下跌10点：他测试、卖出、再卖', dx: 40, dy: -150, w: 300 },
        { x: 5.6, y: 35, at: 2, en: 'Listed ≈35: "cheap" to outsiders', zh: '上市约35：外行觉得"便宜"', dx: -440, dy: 30, w: 300 },
        { x: 10, y: 18, at: 4, en: 'News: barren rock. Breaks 20', zh: '消息：贫瘠岩石。跌破20', dx: -330, dy: -150, w: 290 },
      ] },
    { type: 'cards', at: 3, x: 1290, y: 250, w: 560, ch: 175, cols: 1, max: 28, items: [
      { en: 'The one sign he looked for: inside buying. There was none.', zh: '他只看一个信号：内部人买入。没有。', at: 3 },
      { en: 'He sold on behaviour, long before the news.', zh: '他根据走势卖出，远在消息之前。', at: 4 },
      { en: 'After that, stock only moves from one set of outsiders to another.', zh: '此后，股票只在一批批外行之间换手。', at: 4, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'The gold group stayed strong, but Guiana sagged ten points. Fine, if the pool was still distributing.', '黄金板块依旧强势，圭亚那却跌了十个点。如果资金池还在派发，这倒也正常。'),
    L('larry', 'It was acting just like Chester. I tested it: I sold, and it went down. I sold more, and it went lower still.', '它的表现和切斯特如出一辙。我测试它：卖出，它跌了；再卖，它跌得更低。'),
    L('larry', 'Outsiders bought it as a bargain. Having sold at 45 and up, it looked cheap at 35 and lower. And the dividend was still being paid.', '外行把它当便宜货买。它曾卖到45以上，到35以下就显得便宜了。何况股息还在照付。'),
    L('larry', 'I looked for one sign: inside buying. There wasn\'t any. Insiders who won\'t buy their own stock in a bull market know why.', '我只看一个信号：内部人买入。一点都没有。牛市中不肯买自家股票的内部人，自己心里清楚原因。'),
    L('host', 'Then the news: the mine had struck barren rock instead of rich ore. Listed near 35, it broke 20. He had sold long before, on behaviour.', '随后消息传来：矿山挖到的是贫瘠岩石，而不是富矿。上市时约35，后来跌破20。他早就根据走势卖出了。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p09_cotton', kind: 'comic', panels: [
      P(a, { bg: 'cotton', bgo: { label: 'COTTON' }, props: [{ t: 'sign', x: 150, y: 60, w: 600, en: 'SHORT 50,000 BALES · LOSS $250,000', zh: '做空5万包 · 亏损25万美元', size: 30, zsize: 26, color: '#7a1f1a' }],
        chars: [ch('larryOld', a, 0.5, 0.9, { expr: 'neutral', pose: 'paper', headline: 'STOCKS: PROFIT', hy: 0.45, exprAt: { 1: 'worry' } })] }),
      P(b, { at: 1, bg: 'office', bgo: { board: [['COTTON: NEW HIGH'], ['LOSS ≈ $1,000,000']], hl: [1, 0] },
        chars: [ch('larryOld', b, 0.3, 0.8, { expr: 'tired', hy: 0.74, exprAt: { 2: 'determined', 3: 'think' } })] }),
    ], caps: [{ at: 1, x: 1005, y: 70, w: 300, en: 'Hot Springs.', zh: '温泉城。' }],
    sfx: [{ at: 2, x: 1640, y: 620, t: 'COVERED', zh: '回补止损', size: 80, color: '#f6d77a' }], lines: [
      L('larry', 'I was bearish, short some stocks and 50,000 bales of cotton. I neglected the cotton, waiting for a reaction to cover. Soon it showed a $250,000 loss.', '我看空，做空了一些股票和五万包棉花。我冷落了棉花，总想等回调再回补。很快它就亏了二十五万美元。'),
            L('larry', 'I closed my stocks at a handsome profit and went to Hot Springs. Days later I was a million to the bad.', '我把股票平仓，获利丰厚，去了温泉城。几天后，我在棉花上亏了一百万。'),
      L('larry', 'I told myself I must be wrong. With me, feeling wrong and getting out are one act. I covered, at a loss of about a million.', '我对自己说：我一定是错了。对我来说，觉得错了和离场是同一个动作。我回补了，亏损约一百万。'),
      L('larry', 'Next day, after golf, I glanced at the quotes. Cotton was off 50 points. But it had not rallied, as it had always done for weeks.', '第二天打完高尔夫，我瞄了一眼报价。棉花跌了五十点。但它没有反弹——而几周来它每次都会反弹。'),
    ] });
  }

  shot({ id: 'p09_cottonre', kind: 'info', tag: { en: 'WHEN THE EVIDENCE FLIPS', zh: '当证据反转' }, title: { en: 'Cotton: Wrong, Out, Then Right', zh: '棉花：错了、离场、再做对' }, els: [
    { type: 'table', x: 70, y: 255, w: 1180, widths: [0.32, 0.36, 0.32], reveal: true, rowAt: [0, 1, 1, 2, 3], size: 26, cols: [['Action', '操作'], ['Where', '地点'], ['Market response', '市场反应']], rows: [
      [['Cover 50,000 bales', '回补5万包'], ['Hot Springs', '温泉城'], ['loss ≈ $1,000,000', '亏损约100万美元']],
      [['Sell 10,000', '卖出1万包'], ['Hot Springs, before lunch', '温泉城，午餐前'], ['−50 pts, no rally', '−50点，无反弹']],
      [['Sell 10,000 more', '再卖1万包'], ['jumped up from the lunch table', '从餐桌旁跳起来'], ['−40 pts more', '再跌40点']],
      [['Sell 40,000', '卖出4万包'], ['Washington, at Tucker\'s office', '华盛顿，塔克的经纪行'], ['−75 pts; closes lower', '−75点；收盘更低']],
      [['Cover all 60,000 by phone', '电话回补全部6万包'], ['Philadelphia: a small panic', '费城：小型恐慌'], ['loss practically made up', '亏损基本赚回']],
    ], hl: [4] },
    { type: 'bars', at: 3, x: 1290, y: 255, w: 560, h: 380, max: 1000000, vsize: 24, bars: [
      { v: -1000000, vl: '≈ −$1M', en: 'First trade', zh: '第一笔', color: '#b8322a' },
      { v: 1000000, vl: '≈ +$1M', en: 'Re-short', zh: '再次做空', color: '#2f7d3a' },
    ] },
    { type: 'box', at: 4, x: 1290, y: 655, w: 560, h: 160, color: '#f6d77a', en: 'Not a hunch: a change in behaviour. No grudge, no pride.', zh: '不是直觉：是走势变了。不记恨，也不自得。', size: 28 },
  ], lines: [
    L('host', 'He had covered because cotton always rallied after any selling. Now that habit was gone, and so was his reason for being out.', '他之前回补，是因为棉花每遇抛压都会反弹。现在这个习性消失了，他离场的理由也就不复存在。'),
    L('larry', 'I sold 10,000 bales: down 50, no rally. At lunch I jumped up before I was served and sold 10,000 more. It fell another 40.', '我卖出一万包：跌五十点，没反弹。午餐时，菜还没上我就跳起来又卖了一万包。它又跌了四十点。'),
    L('larry', 'That night I left for Washington. There I sold 40,000 bales, and it dropped 75 points. The old buying power was plainly gone.', '当晚我动身去华盛顿。在那里我卖出四万包，价格跌了七十五点。原先的买盘显然已经消失。'),
    L('larry', 'Driving to New York, I found a small panic in cotton at Philadelphia. I phoned and covered. I had practically made up my million.', '开车回纽约途中，我在费城发现棉花出现了小型恐慌。我打电话回补了。那一百万基本赚回来了。'),
    L('host', 'Not a hunch: a change in behaviour. No grudge for the loss, no pride in the recovery.', '这不是直觉，而是走势变了。不为亏损记恨，也不为扳回自得。'),
  ] });

  // ---------------- Chapter XVIII ----------------
  {
    const [a, b] = HALF;
    shot({ id: 'p09_ttfish', kind: 'comic', panels: [
      P(a, { bg: 'beach', props: [{ t: 'paper', x: 480, y: 330, w: 380, h: 270, en: 'TROPICAL TRADING 155', zh: '热带贸易 155', size: 34, rot: 4 }],
        chars: [ch('larryOld', a, 0.33, 0.9, { expr: 'neutral', hat: 'boater', hatColor: '#e0c27a', hy: 0.5, exprAt: { 1: 'think', 2: 'determined' } })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['TROP. TRADING'], ['SOLD 2,000 @ 153'], ['SHORT 30,000 @ 133']], hl: [1, 0] }, props: [{ t: 'telegraph', x: 760, y: 650 }],
        chars: [ch('larryOld', b, 0.4, 0.8, { expr: 'determined', pose: 'paper', headline: 'SELL 2,000 TT', hy: 0.74 })] }),
    ], caps: [{ x: 70, y: 70, w: 380, en: 'Florida, fishing.', zh: '佛罗里达，钓鱼中。' }],
    lines: [
      L('host', 'Chapter eighteen. Tropical Trading\'s insiders were famous for squeezing bears, better at it, one broker said, than Drew in Erie or Havemeyer in Sugar.', '第十八章。热带贸易的内部人以轧空空头闻名。一位经纪人说，连伊利铁路的德鲁、糖业的哈夫迈耶都不如他们。'),
      L('larry', 'I was fishing in Florida, expecting a bear market. A newspaper showed TT at 155, up from about 140, while the general list was heavy.', '我在佛罗里达钓鱼，预计熊市将至。报纸显示热带贸易涨到155，此前约140，而整个大盘却很沉重。'),
      L('larry', 'Marking a stock up against a heavy market looked like a capital blunder. I couldn\'t fish. I wired my brokers to sell 2,000. They got 153.', '在沉重的大盘中拉抬个股，在我看来是个大错。我没心思钓鱼了，发电报让经纪人卖出两千股。成交价153。'),
      L('larry', 'I moved to Palm Beach for the direct wire and kept selling, 2,000 at a time. It declined on my selling. Soon I was short 10,000.', '我搬到有直通电报线的棕榈滩，每次两千股继续卖。它随我的卖出而下跌。很快我就空了一万股。'),
      L('larry', 'In New York, the company\'s business confirmed my view. I kept testing and selling until, at 133, I was short 30,000 shares.', '回到纽约，公司的经营状况印证了我的判断。我不断测试、卖出，到133时，已做空三万股。'),
    ] });
  }

  const TT = [[0, 140], [1, 155], [1.6, 153], [4, 133], [5.4, 150], [6.4, 139], [7.4, 149], [9, 125], [10.4, 147], [12, 119], [13, 109], [14, 99], [15, 89]];
  const ttChart = (reveal, notes, extra = {}) => Object.assign({ type: 'line', x: 70, y: 250, w: 1180, h: 570, xr: [0, 15], yr: [82, 162], yTicks: [90, 100, 110, 120, 133, 150], yLabel: ['Tropical Trading (stated levels; timing illustrative)', '热带贸易（价位据原书；时间为示意）'], illustrative: true,
    series: [{ pts: TT, color: '#7a1f1a', reveal }], notes }, extra);

  shot({ id: 'p09_tt', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Tropical Trading: Holding Through the Squeeze', zh: '热带贸易：在轧空中坚守' }, els: [
    ttChart([0, 0, 0, 0, 0, 3, 3, 9, 9, 9, 9, 9, 9], [
      { x: 1.6, y: 153, en: 'First 2,000 @ 153', zh: '首批2,000股@153', dx: 30, dy: -20, w: 230 },
      { x: 4, y: 133, en: 'Short 30,000 by 133', zh: '到133共空3万股', dx: -200, dy: 100, w: 230 },
      { x: 5.4, y: 150, at: 0, en: 'Squeezed to 150: stays pat', zh: '被轧到150：按兵不动', dx: 30, dy: 40, w: 250 },
      { x: 7.4, y: 149, at: 3, en: '+10 on bull rumours → 149', zh: '利好传言拉升10点→149', dx: 170, dy: 40, w: 260 },
    ]),
    { type: 'cards', at: 1, x: 1290, y: 250, w: 560, ch: 175, cols: 1, max: 28, items: [
      { en: 'Courage = confidence to act on the decision of your mind (Dickson G. Watts).', zh: '勇气＝按自己的判断行事的信心（迪克森·G·沃茨）。', at: 1 },
      { en: 'Price alone doesn\'t prove you wrong; the character of the move does.', zh: '价格本身证明不了你错；走势的性质才能。', at: 2 },
      { en: 'Reasons for the short still there? Then the rally is noise.', zh: '做空的理由还在？那反弹就只是噪音。', at: 3, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'The public bought the dip as a bargain, shrinking the floating supply. Seeing many shorts, the insiders squeezed, running it up to 150. He stayed pat.', '公众把回调当便宜货买入，流通筹码减少。内部人见空头众多，便发动轧空，把价格拉到150。他按兵不动。'),
    L('larry', 'Dickson G. Watts said courage is just confidence to act on your own decision. I never think I\'m wrong until I\'m proven wrong.', '迪克森·G·沃茨说，勇气就是按自己判断行事的信心。在被证明错之前，我从不认为自己错了。'),
    L('larry', 'The price at a given moment doesn\'t prove me wrong. The character of the advance or decline does. Nothing in that rally frightened me.', '某一时刻的价格证明不了我错，涨跌的性质才能。那次反弹的性质毫无可怕之处。'),
    L('host', 'It broke 140. Then insiders bid it up ten points on a flood of rumours: fabulous profits, a bigger dividend, the squeeze of the century.', '它跌破140。随后内部人在铺天盖地的传言中将它拉高十点：利润惊人、要加息、世纪大轧空。'),
  ] });

  shot({ id: 'p09_equatorial', kind: 'info', tag: { en: 'TACTICS', zh: '战术' }, title: { en: 'Answer the Rumours on the Tape: Sell Equatorial', zh: '用纸带回应传言：卖空赤道商业' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 300, max: 28, nodes: [
      { num: 1, en: 'TT pushed to 149 on bull talk. Nobody believes a man who is short.', zh: '利好传言把热带贸易推到149。没人相信空头的话。' },
      { num: 2, en: 'He does NOT add to TT: 30,000 is a prudent share of the floating supply.', zh: '他不加空热带贸易：3万股已是流通盘中审慎的份额。', at: 1 },
      { num: 3, en: 'He sells ≈10,000 Equatorial Commercial, a big TT holder. It breaks.', zh: '他卖空约1万股赤道商业（热带贸易大股东）。它应声下跌。', at: 2 },
      { num: 4, en: 'Traders read the TT rally as a smoke screen; they sell TT. Support goes; TT falls.', zh: '交易员认定热带贸易的反弹是烟幕，纷纷卖出。托盘撤走，股价下跌。', at: 3 },
    ] },
    { type: 'box', at: 4, x: 70, y: 590, w: 1780, h: 105, color: '#f6d77a', anchor: 'middle', en: 'Same idea as selling oats to make traders bearish on corn in the Stratton corner.', zh: '与斯特拉顿逼空玉米时卖燕麦、让交易员看空玉米是同一思路。', size: 30 },
    { type: 'box', at: 4, x: 70, y: 710, w: 1780, h: 105, color: '#fbf3df', anchor: 'middle', en: 'He covered Equatorial at a small profit. It was a tool, not a bet.', zh: '他小赚回补了赤道商业。那是工具，不是赌注。', size: 28 },
  ], lines: [
    L('larry', 'At 149, I didn\'t want the Street to swallow the bull talk. Nobody believes a man short 30,000 shares. But people believe the tape.', '到149时，我不想让华尔街全盘相信那些利好。没人会相信一个空了三万股的人说的话，但人们相信纸带。'),
    L('larry', 'I didn\'t sell more TT. Thirty thousand was as big a share of the floating supply as I thought wise.', '我没有加空热带贸易。三万股已是我认为流通盘中明智的上限。'),
    L('larry', 'Instead I sold about 10,000 Equatorial Commercial, which owned a large block of TT. It was less active, and it broke badly.', '我转而卖空约一万股赤道商业，这家公司持有大量热带贸易的股票。它不太活跃，应声大跌。'),
    L('host', 'Traders concluded the TT rally was a smoke screen for insiders unloading Equatorial. They sold TT, the insiders stopped supporting it, and it fell.', '交易员断定，热带贸易的反弹是内部人抛售赤道商业的烟幕。他们卖出热带贸易，内部人停止托盘，股价下跌。'),
    L('host', 'The same trick as selling oats during the Stratton corn corner. He covered Equatorial at a small profit.', '这与斯特拉顿逼空玉米时他卖燕麦是同一招。他小赚回补了赤道商业。'),
  ] });

  shot({ id: 'p09_ttend', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Tropical Trading: Covering Into Weakness', zh: '热带贸易：在疲弱中回补' }, els: [
    ttChart([0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3], [
      { x: 9, y: 125, en: '125: big short interest', zh: '125：空头仓位巨大', dx: -320, dy: 30, w: 240 },
      { x: 10.4, y: 147, at: 1, en: '+20–25 squeeze; he sells Equatorial again', zh: '轧空+20–25点；他再卖赤道', dx: 30, dy: -30, w: 270 },
      { x: 15, y: 89, at: 3, en: 'Breaks 90: covers all 30,000. > $1M', zh: '跌破90：回补全部3万股。逾100万美元', dx: -400, dy: -40, w: 280 },
    ]),
    { type: 'cards', at: 3, x: 1290, y: 250, w: 560, ch: 175, cols: 1, max: 28, items: [
      { en: 'With the general market and basic conditions, not against them.', zh: '顺着大势和基本面，而不是逆着。', at: 3 },
      { en: 'Cover into a big, weak market to keep the profit.', zh: '在又大又弱的市场里回补，保住利润。', at: 3 },
      { en: 'Not trying to catch the bottom.', zh: '不是为了抄到最低点。', at: 3, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('larry', 'Every time insiders pushed TT up, I sold Equatorial, and covered when TT reacted and dragged it down.', '每当内部人拉抬热带贸易，我就卖空赤道商业，等热带贸易回落、拖累它下跌时再回补。'),
    L('larry', 'At 125 the short interest grew so big they ran it up 20 or 25 points. A fair squeeze. I didn\'t cover. I sold more Equatorial instead.', '到125时，空头仓位大到让他们能拉升二十到二十五点。这次轧空合情合理。我没有回补，而是又卖空了赤道商业。'),
    L('host', 'Meanwhile the general market weakened. TT went below 120 for the first time in years, then 110, then par.', '与此同时，大盘转弱。热带贸易多年来首次跌破120，然后是110，再跌破100。'),
    L('larry', 'On a demoralised day TT broke 90. I covered all 30,000 near the lows, to keep my profit. Over a million.', '在一片溃败的一天，它跌破90。我在低点附近回补全部三万股，保住了利润。获利一百多万。'),
      ] });

  shot({ id: 'p09_ttlater', kind: 'info', tag: { en: 'A YEAR LATER', zh: '一年后' }, title: { en: 'Tropical Trading Again: When the Buying Changes', zh: '再战热带贸易：当买盘性质改变' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 570, xr: [0, 10], yr: [138, 212], yTicks: [150, 160, 180, 200], yLabel: ['Tropical Trading (stated levels; path illustrative)', '热带贸易（价位据原书；路径为示意）'], illustrative: true,
      series: [{ pts: [[0, 150], [2.5, 150.5], [3.4, 145], [4.2, 147], [5, 153], [5.6, 156], [7.5, 180], [10, 205]], color: '#2f5d8a', reveal: [0, 0, 0, 1, 2, 2, 3, 3] }],
      notes: [
        { x: 2.5, y: 150.5, en: 'Two weeks near 150: starts a 10,000 short', zh: '在150附近两周：开始做空1万股', dx: -190, dy: -150, w: 280 },
        { x: 4.2, y: 147, at: 1, en: 'Buying changes: insider support', zh: '买盘性质变了：内部人托盘', dx: -100, dy: -260, w: 260 },
        { x: 5.6, y: 156, at: 2, en: 'Covers 153, long 156', zh: '153回补，156做多', dx: 60, dy: 10, w: 220 },
        { x: 10, y: 205, at: 3, en: 'Above 200', zh: '超过200', dx: -200, dy: 20, w: 150 },
      ] },
    { type: 'cards', at: 3, x: 1290, y: 250, w: 560, ch: 175, cols: 1, max: 28, items: [
      { en: 'Rumour: squeezed for $8–9 million. Fact: long all the way up.', zh: '传言：他被轧空损失800–900万美元。事实：他一路做多。', at: 3 },
      { en: 'A fact about one stock beats a theory about the market.', zh: '一只股票的事实，胜过对大盘的理论。', at: 2 },
      { en: 'Mistake: held too long, assuming insiders would act as he would.', zh: '错误：持有太久，假设内部人会像他那样行事。', at: 4, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('larry', 'A year later TT hung at 150 for two weeks. The market had stopped rising and its group had poor business. I began selling.', '一年后，热带贸易在150停留了两周。大盘已涨不动，它所在板块生意又差。我开始卖出。'),
    L('larry', 'I planned 10,000 shares. It broke on my selling. Then suddenly the character of the buying changed: insiders were supporting it in a falling market.', '我计划空一万股。我一卖它就跌。随后，买盘的性质突然变了：内部人在下跌的市场中托盘。'),
    L('larry', 'At 153 I covered, and at 156 I went long. The line of least resistance was up.', '我在153回补，在156做多。最小阻力线向上。'),
    L('host', 'It went above 200. Reports said he\'d been squeezed for eight or nine million. In fact he was long all the way.', '它涨过200。传闻说他被轧空了八九百万美元。事实上，他一路都在做多。'),
    L('larry', 'But I held too long and gave back some profit, assuming the insiders would do what I\'d do. I should have stuck to the facts.', '但我持有太久，回吐了部分利润，因为我以为内部人会像我那样做。我本该紧盯事实。'),
  ] });

  shot({ id: 'p09_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'Episode 9 Takeaways', zh: '第九集要点' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { en: 'A hunch is experience: many small warnings adding up. Act on it quickly.', zh: '直觉就是经验：许多小警告的叠加。要快速行动。', at: 0 },
      { en: 'Add only to what acts right; sell a big line when the market can absorb it.', zh: '只加仓走势正确的；在市场能承接时卖出大仓位。', at: 0 },
      { en: 'Test with small lots; let the market\'s response decide whether to press.', zh: '用小单测试；让市场的反应决定是否加码。', at: 0 },
      { en: 'A laggard that won\'t follow its group, or a stock insiders won\'t buy, is a warning.', zh: '不跟随板块的落后股、内部人不肯买的股票，都是警告。', at: 1 },
      { en: 'Judge the character of a move; keep a short within the floating supply.', zh: '判断走势的性质；空单规模不超出流通盘的审慎比例。', at: 2 },
      { en: 'Trade the facts in front of you, not what others ought to do.', zh: '按眼前的事实交易，而不是按别人"应该"怎么做。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Takeaways. A hunch is experience adding up. Add only to what acts right, and test with small lots before you press.', '本集要点。直觉是经验的累积。只加仓走势正确的，加码前先用小单测试。'),
    L('host', 'A laggard that won\'t follow its group, or a stock its insiders won\'t buy, is a warning. Watch for warnings, not breaks.', '不跟随板块的落后股，或内部人不肯买的股票，都是警告。留意警告，而非暴跌。'),
    L('host', 'Judge the character of a move, keep your size within the floating supply, and trade the facts, not what others ought to do.', '判断走势的性质，仓位不超出流通盘的审慎比例，按事实交易，而不是按别人应该怎么做。'),
  ] });

  shot({ id: 'p09_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'What Went Wrong, and the Rule', zh: '哪里错了，规则是什么' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.32, 0.34, 0.34], reveal: true, rowAt: [0, 1, 2, 3], size: 25, cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Neglected a 50,000-bale cotton short', '冷落了5万包棉花空单'], ['Busy with winning stocks; kept waiting for a reaction to cover', '忙于盈利的股票；一直等回调再回补'], ['Every open position needs attention. Waiting out a loss is hoping.', '每个持仓都需要关注。硬扛亏损就是在指望。']],
      [['Stayed short while cotton kept making new highs', '棉花不断创新高时仍持空'], ['Ignored the line of least resistance: up. Cost ≈ $1M', '无视向上的最小阻力线。代价约100万美元'], ['Rallies to new highs after every sell-off = trend up. Get out.', '每次抛压后都反弹创新高＝趋势向上。离场。']],
      [['Held the TT long too long', '热带贸易多单持有太久'], ['Assumed insiders would act as he would', '假设内部人会像他那样行事'], ['Stick to the facts before you, not what others ought to do.', '紧盯眼前的事实，而不是别人应该怎么做。']],
      [['Kept Utah Copper though it never acted right', '犹他铜业从未走好却仍持有'], ['Liked the copper trade; thought it couldn\'t hurt much', '看好铜业；以为不会伤多少'], ['Cut what doesn\'t act right early. It broke 5 pts when sold.', '尽早砍掉走势不对的。卖时它跌了5点。']],
    ] },
  ], lines: [
    L('host', 'Mistake review. In cotton he neglected a losing short while his stocks did well, waiting for a reaction to cover.', '错误复盘。在棉花上，他因股票做得顺而冷落了一笔亏损的空单，一直等回调再回补。'),
    L('host', 'Cotton made new highs after every sell-off. Ignoring that line of least resistance cost a million.', '棉花每遭抛压后都创新高。无视这条最小阻力线，代价是一百万。'),
    L('host', 'In TT he held too long, assuming insiders would act as he would. Trade what you see.', '在热带贸易上，他持有太久，以为内部人会像他那样做。按你看到的交易。'),
    L('host', 'And he kept Utah Copper, which never acted right. It broke five points as he sold.', '他还留着从未走好的犹他铜业。他卖出时它跌了五个点。'),
  ] });
};
