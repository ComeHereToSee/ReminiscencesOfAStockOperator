// Episode 5 — Chapters IX–X. The Panic of 1907.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const OLLIE = { who: { en: 'OLLIE BLACK', zh: '奥利·布莱克' } };
  const ATT = { who: { en: 'JOHN T. ATTERBURY', zh: '约翰·T·阿特伯里' } };

  episode(5, 'The Panic of 1907', '1907年大恐慌', { en: 'Chapters IX – X', zh: '原著第九至十章' }, '#7a1f1a', [
    L('host', 'Episode five. The panic of 1907.', '第五集：1907年大恐慌。'),
  ]);

  // ---------------------------------------------------------------- Ch IX: Anaconda
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p05_palm', kind: 'comic', panels: [
      P(a, { bg: 'yacht', chars: [ch('larryHat', a, 0.42, 1.0, { expr: 'think', pose: 'paper', headline: 'BIG RALLY', hat: 'boater', hatColor: '#e0c27a', hy: 0.42, exprAt: { 1: 'determined' } })] }),
      P(b, { at: 1, bg: 'office', bgo: { board: [['ANACONDA', 'U.P.'], ['299⅞', '…'], ['300 ↑', '…']], hl: [2, 0] } }),
      P(c, { at: 3, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(355 150)"><text text-anchor="middle" font-family="Oswald" font-weight="700" font-size="64" fill="#fff" stroke="#16130f" stroke-width="8" paint-order="stroke">32,000 quarter shares</text><text y="80" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="64" fill="#f6d77a" stroke="#16130f" stroke-width="8" paint-order="stroke">= 8,000 full shares</text><text y="150" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="44" fill="#fff" stroke="#16130f" stroke-width="7" paint-order="stroke">3.2万股四分之一股＝8千整股</text></g>' }] }),
    ], caps: [{ x: 70, y: 70, w: 420, en: 'Off Palm Beach, 1907.', zh: '1907年，棕榈滩外海。' }],
    sfx: [{ at: 4, x: 820, y: 720, t: 'TARGET 340', zh: '目标340', size: 70, color: '#f6d77a', font: 'cond' }], lines: [
      L('larry', 'In 1907 I was fishing off Palm Beach. A friend\'s newspaper showed a big rally, but the bear market wasn\'t over.', '1907年，我在棕榈滩外海钓鱼。朋友带来的报纸显示市场大幅反弹，可熊市还没结束。'),
      L('larry', 'I went ashore to Harding Brothers\' branch office. Anaconda was on the point of crossing 300.', '我上岸去了哈丁兄弟公司的分部。阿纳康达正要突破300。'),
      L('larry', 'An old theory of mine: when a stock first crosses 100, 200 or 300, it usually runs well past the round number.', '我有个老理论：股票第一次突破100、200或300时，通常会远远冲过整数关口。'),
      L('larry', 'Anaconda was quarter stock, twenty-five dollar par. I bought thirty-two thousand shares, equal to eight thousand full shares.', '阿纳康达是"四分之一股"，面值25美元。我买了三万两千股，相当于八千股整股。'),
      L('host', 'He expected about 340 quickly. Bearish on the market, bullish on one stock: the profit would pay his wages while he waited to sell short.', '他预计股价很快会到340左右。看空大盘、看多个股：这笔利润就当是等待做空期间给自己发的工资。'),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p05_storm', kind: 'comic', panels: [
      P(a, { bg: 'night', props: [{ t: 'svg', svg: '<g transform="translate(452 300)"><text text-anchor="middle" font-family="Bangers" font-size="120" fill="#fff" stroke="#16130f" stroke-width="10" paint-order="stroke">WIRES DOWN</text><text y="90" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="56" fill="#f6d77a" stroke="#16130f" stroke-width="8" paint-order="stroke">电报线中断</text><text y="210" text-anchor="middle" font-family="Special Elite" font-size="80" fill="#fff">ANA … 292</text></g>' }] }),
      P(b, { at: 1, bg: 'office', chars: [ch('larryHat', b, 0.3, 0.9, { expr: 'smile', hy: 0.5 }), ch('broker', b, 0.75, 0.9, { expr: 'worry', hy: 0.5, flip: true })] }),
    ], bubbles: [{ at: 1, x: 1000, y: 70, w: 440, en: 'Don\'t you worry, John. It will be all right tomorrow.', zh: '别担心，约翰。明天就没事了。', tx: 1220, ty: 250 }],
    lines: [
      L('larry', 'The next day a storm brought the wires down. All day we got one quotation: Anaconda, 292. A paper loss of nearly a hundred thousand dollars.', '第二天，一场风暴弄断了电报线。一整天只收到一个报价：阿纳康达，292。账面亏损将近十万美元。'),
      L('larry', 'A broker friend nearly had a fit. I told him not to worry. I had wanted quick action, and I was getting it.', '一位经纪人朋友急坏了。我叫他别担心。我想要快节奏，这下可真够快的。'),
    ] });
  }
  shot({ id: 'p05_anachart', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'Decide Your Failure Point in Advance', zh: '事先设定"判错点"' }, els: [
    { type: 'line', x: 70, y: 255, w: 1200, h: 555, xr: [0, 10], yr: [288, 314], yTicks: [290, 295, 300, 305, 310], yLabel: ['Anaconda', '阿纳康达'], illustrative: true,
      xTicks: [[0.5, 'Buy day', '买入日'], [2, 'Storm', '风暴日'], [5.5, 'Test day', '检验日'], [9.2, 'Next day', '次日']],
      hlines: [{ at: 1, v: 310, label: ['Real breakout: straight to 310', '真突破：直冲310'], color: '#2f7d3a' }, { at: 1, v: 301, below: true, label: ['Failure point 301', '判错点301'], color: '#b8322a' }],
      series: [{ pts: [[0, 299.5], [1, 300.5], [2, 292], [3.5, 298], [5, 302.75], [6.5, 301], [7.4, 298.75], [9, 295.5], [10, 293]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 2, 2, 3, 3] }],
      notes: [{ x: 2, y: 292, en: 'Only quote: 292', zh: '唯一报价：292', dx: 30, dy: 10, w: 200 }, { x: 5, y: 302.75, en: 'Opens 298, high 302¾, fades', zh: '开298，高302¾，回落', dx: -330, dy: -40, w: 250 }, { x: 6.5, y: 301, at: 2, en: 'Touches 301 → SELL ALL at market', zh: '触及301→全部市价卖出', dx: 30, dy: -150, w: 260 }, { x: 9, y: 295.5, at: 3, en: 'Opens below 296', zh: '低于296开盘', dx: -250, dy: 30, w: 200 }] },
    { type: 'cards', x: 1310, y: 255, w: 540, ch: 165, cols: 1, items: [
      { en: 'Write down what "wrong" looks like before you trade.', zh: '交易前写下"错了"是什么样子。', at: 1 },
      { en: 'When the test fails, exit at once, at the market.', zh: '检验失败就立即以市价离场。', at: 2 },
      { en: 'Being wrong is normal. Staying wrong is the sin.', zh: '犯错很正常，执迷不悟才是大忌。', at: 3 },
    ] },
  ], lines: [
    L('host', 'When the wires came back, Anaconda opened at 298, reached 302¾, then began to fade. He had already set his test.', '电报恢复后，阿纳康达开盘298，冲到302¾，随后开始回落。他早已设好检验标准。'),
    L('host', 'A real breakout should run to 310 without stopping. A fall back to 301 would mean the move was a fake, and he was wrong.', '真突破应该一口气冲到310。如果回落到301，就说明这是假突破，他错了。'),
    L('host', 'It touched 301. He told the operator to sell all eight thousand shares at the market. The man was horrified.', '它触及301。他让报务员以市价卖出全部八千股。报务员大惊失色。'),
    L('larry', 'When a man is wrong, the only thing to do is "to be right by ceasing to be wrong."', '一个人犯了错，唯一该做的就是"停止犯错，从而变得正确"。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p05_ollie', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { ticker: false }, props: [{ t: 'desk', x: 380, y: 520, w: 480, h: 250 }, { t: 'telegraph', x: 620, y: 500 }],
        chars: [ch('clerk', a, 0.72, 0.85, { expr: 'shock', hy: 0.42 }), ch('larryHat', a, 0.28, 0.95, { expr: 'determined', hy: 0.45 })] }),
      P(b, { at: 1, bg: 'office', chars: [ch('friend', b, 0.5, 1.0, { expr: 'grin', hat: 'none', hair: '#2a1d12', mus: 'walrus', suit: '#3b3346', hy: 0.52 })] }),
    ], bubbles: [
      { at: 0, x: 70, y: 70, w: 420, en: 'Sell all my Anaconda. All I\'ve got!', zh: '卖掉我所有的阿纳康达，全部！', tx: 300, ty: 300 },
      { at: 1, x: 1010, y: 70, w: 560, en: 'You\'ll be paying 320 for it tomorrow. It\'s going to 500.', zh: '明天你得花320买回来。它要涨到500。', tx: 1400, ty: 330 },
    ], caps: [{ at: 2, x: 1010, y: 650, w: 840, en: 'He read the order from the clicks of the telegraph key.', zh: '他从电报机的嘀嗒声里"听"出了这笔单子。', size: 26, zsize: 22 }], lines: [
      L('larry', 'I gave the order in a low voice. I didn\'t want anybody else to know.', '我压低声音下了单，不想让任何人知道。'),
      L('friend', 'You\'ll be sorry, Larry. You\'ll be buying it back tomorrow at 320.', '你会后悔的，拉瑞。明天你就得花320买回来。', OLLIE),
      L('larry', 'Ollie Black, of the Chicago wheat-plunging Black brothers, knew telegraphy. He had heard every word the operator sent.', '奥利·布莱克出身在芝加哥小麦市场豪赌的布莱克兄弟，他懂电报。报务员发出的每个字他都听见了。'),
    ] });
  }
  shot({ id: 'p05_fills', kind: 'info', tag: { en: 'EXECUTION', zh: '执行' }, title: { en: 'Selling 8,000 Shares at the Market', zh: '以市价卖出八千股' }, els: [
    { type: 'table', x: 70, y: 255, w: 820, widths: [0.5, 0.5], reveal: true, rowAt: [0, 0, 0, 0, 0, 1, 1], hl: [6], size: 27, cols: [['Full shares', '整股数'], ['Price', '成交价']], rows: [
      [['500', ''], ['299¾', '']],
      [['1,000', ''], ['299⅝', '']],
      [['100', ''], ['299½', '']],
      [['200', ''], ['299⅜', '']],
      [['200', ''], ['299¼', '']],
      [['… the rest …', '……其余……'], ['lower', '更低']],
      [['Last 100 (took 15 minutes)', '最后100股（耗时15分钟）'], ['298¾', '']],
    ] },
    { type: 'box', at: 2, x: 940, y: 255, w: 910, color: '#f3c6c0', en: 'A limit at 300 would never have been filled. He would still own the stock.', zh: '若限价300，单子根本成交不了，他至今还拿着这只股票。', size: 30 },
    { type: 'quote', at: 2, x: 940, y: 420, w: 910, size: 44, en: 'When you want to get out, get out.', zh: '想出场时，就出场。', src: 'Ch. IX', bottom: 640 },
    { type: 'box', at: 3, x: 940, y: 655, w: 910, color: '#cfe3c4', en: 'Next day: opened below 296, then "no market at all." It fell until the big break that fall.', zh: '次日：低于296开盘，后来"根本没有买盘"。一路跌到当年秋天的大崩盘。', size: 27 },
  ], lines: [
    L('host', 'His cost was about 300. The fills came back: 299¾, 299⅝, and lower.', '他的成本约300。成交回报陆续传来：299¾、299⅝，越来越低。'),
    L('host', 'The last lot went at 298¾. Harding\'s best floor man needed fifteen minutes to sell the final hundred shares without cracking the price.', '最后一批成交在298¾。哈丁公司最能干的场内交易员花了十五分钟，才在不砸穿价格的情况下卖掉最后一百股。'),
    L('larry', 'That\'s why I never trade at limits. When you want to get out, get out.', '这就是我从不下限价单的原因。想出场时，就出场。'),
    L('host', 'Next day Anaconda opened below 296, and it kept falling until the big break that fall.', '第二天阿纳康达低于296开盘，并一路下跌，直到那年秋天的大崩盘。'),
  ] });

  // ---------------------------------------------------------------- Ch IX: the bear campaign
  {
    const [a, b] = HALF;
    shot({ id: 'p05_aix', kind: 'comic', panels: [
      P(a, { bg: 'beach', chars: [ch('larryHat', a, 0.55, 1.0, { expr: 'think', pose: 'paper', headline: 'SMELTERS +DIV', hat: 'boater', hatColor: '#e0c27a', hy: 0.48, exprAt: { 2: 'angry' } })] }),
      P(b, { at: 3, bg: 'yacht', chars: [ch('larryHat', b, 0.5, 0.9, { expr: 'determined', hy: 0.42 })] }),
    ], caps: [{ x: 70, y: 70, w: 460, en: 'Aix-les-Bains, summer 1907.', zh: '1907年夏，艾克斯莱班。' }, { at: 3, x: 1005, y: 70, w: 460, en: 'Home a month early.', zh: '提前一个月回国。' }], lines: [
      L('larry', 'Back in New York, I traded short for about four months, covering on rallies and selling again.', '回到纽约，我做了大约四个月空头，反弹时回补，然后再卖空。'),
      L('larry', 'When summer went dull, I cleaned up a little over three-quarters of a million ahead, and sailed for Europe.', '夏天市场转淡，我清了仓，赚了七十五万美元出头，然后乘船去了欧洲。'),
      L('larry', 'At Aix-les-Bains, the Paris Herald said Smelters had declared an extra dividend. On the eve of a money panic, insiders were marking prices up to unload.', '在艾克斯莱班，《巴黎先驱报》说冶炼公司宣布了额外分红。金融恐慌在即，内部人却在拉抬股价，好趁机出货。'),
      L('larry', 'I cabled orders to sell Smelters. My fills came six points below the Herald\'s price. I took the next fast boat home.', '我发电报卖空冶炼公司，成交价比报上的价格低了六点。我搭上下一班快船回了国。'),
    ] });
  }
  shot({ id: 'p05_ledger', kind: 'info', tag: { en: 'KEEPING SCORE', zh: '记账' }, title: { en: 'From Broke to a Million, 1906–1907', zh: '从破产到百万：1906–1907' }, els: [
    { type: 'timeline', x: 70, y: 255, w: 1780, h: 400, minLog: 4.6, vsize: 28, lsize: 22, items: [
      { v: 300000, vl: '$300,000', en: '1906 quake profit', zh: '1906年地震获利', color: '#8a8a8a' },
      { v: 0, vl: 'all lost', en: 'Shorted too soon; broke', zh: '卖空太早，破产', at: 0 },
      { v: 750000, vl: '> $750,000', en: 'Summer 1907, after ~4 months short', zh: '1907年夏，做空约四个月后', at: 1 },
      { v: 500000, vl: '> $500,000 cash', en: 'Margin cash on return', zh: '回国时可用保证金现金', at: 2, color: '#d9a441' },
      { v: 1000000, vl: '> $1,000,000', en: 'Close of Oct. 24, 1907', zh: '1907年10月24日收盘', at: 2, color: '#2f7d3a' },
    ] },
    { type: 'box', x: 70, y: 680, w: 1780, color: '#fbf3df', en: 'Note: Chapter IX says $300,000 was lost; Chapter VIII puts the earthquake profit at $250,000.', zh: '注：第九章说亏掉的是30万美元；第八章则说地震获利25万美元。', size: 25 },
  ], lines: [
    L('host', 'Keep score. Selling too soon, he had lost his whole 1906 earthquake profit: three hundred thousand here, two hundred fifty thousand in another chapter.', '记一下账。因卖空太早，他亏光了1906年地震中赚的钱：本章说三十万美元，另一章说二十五万。'),
    L('host', 'Burned once, he played safe in 1907. By summer he was a little over seven hundred fifty thousand ahead.', '吃过亏后，他在1907年求稳。到夏天，他已赚了七十五万美元出头。'),
    L('host', 'He came home with well over half a million in cash for margin. By the close of October 24, he was worth over a million.', '他带着五十多万美元现金回国作保证金。到10月24日收盘，他的身家已超过一百万美元。'),
  ] });
  shot({ id: 'p05_money', kind: 'info', tag: { en: 'CONDITIONS', zh: '基本状况' }, title: { en: 'October 1907: The Money Post Runs Dry', zh: '1907年10月：资金柱前无钱可借' }, els: [
    { type: 'flow', x: 70, y: 255, w: 900, dir: 'v', bh: 105, max: 30, nodes: [
      { en: 'Normally: surplus cash lent openly at the Money Post', zh: '平时：富余资金在资金柱前公开放贷', at: 0 },
      { en: 'Two commission houses grab every offer — and never repay', zh: '两家佣金行抢走每笔资金，且不归还', at: 0 },
      { en: 'Lenders avoid the Post; whisper "Want a hundred?"', zh: '放贷者绕开资金柱，私下问"要十万吗？"', at: 0 },
      { en: 'Borrowers name their own rate: 100–150% a year', zh: '借款人自己报利率：年息100%–150%', at: 1, color: '#f3c6c0' },
    ] },
    { type: 'bars', at: 1, x: 1010, y: 255, w: 840, h: 360, max: 160, bars: [
      { v: 6, vl: '6%', en: 'National City Bank\'s boast', zh: '国民城市银行自夸的上限', color: '#2f7d3a' },
      { v: 150, vl: '100–150%', en: 'Call money, Oct. 1907', zh: '1907年10月拆借年息', color: '#b8322a' },
    ] },
    { type: 'box', at: 2, x: 1010, y: 640, w: 840, color: '#f6d77a', anchor: 'middle', en: 'Money tighter → call rates higher → stocks lower', zh: '资金越紧→拆借利率越高→股价越低', size: 30 },
  ], lines: [
    L('host', 'Loans were made openly at the Money Post. By October, a couple of houses grabbed every offer and never repaid, so lenders whispered offers on the floor instead.', '借贷原本在"资金柱"前公开进行。到十月，有几家公司抢走每笔资金且拒不归还，放贷者只好改在场内私下询问。'),
    L('host', 'National City Bank boasted it never lent above six percent. Now borrowers named their own rate: one hundred to one hundred fifty percent a year.', '国民城市银行自夸放贷利率从不超过6%。如今借款人自己报利率：年息100%到150%。'),
    L('larry', 'As money got tighter, call rates went higher and stock prices lower. I had foreseen it.', '资金越紧，拆借利率越高，股价越低。这一切我早就预见到了。'),
  ] });
  shot({ id: 'p05_rescue', kind: 'info', tag: { en: 'OCTOBER 24, 1907', zh: '1907年10月24日' }, title: { en: 'How the Stock Market Was Saved', zh: '股市是如何被救下的' }, els: [
    { type: 'flow', x: 70, y: 260, w: 1780, bh: 290, nodes: [
      { num: 1, en: 'Exchange president R. H. Thomas goes for help', zh: '交易所总裁R·H·托马斯出门求援', at: 1 },
      { num: 2, en: 'James Stillman (National City): "See Mr. Morgan"', zh: '斯蒂尔曼（国民城市银行）："去见摩根"', at: 1 },
      { num: 3, en: 'J. P. Morgan: "There will be money for them"', zh: 'J·P·摩根："会有钱给他们的"', at: 2 },
      { num: 4, en: 'Atterbury at the Money Post: "$10 million"', zh: '阿特伯里在资金柱前："一千万美元"', at: 3, color: '#f6d77a' },
      { num: 5, en: 'Banks use reserves: about $20 million', zh: '银行动用准备金：约两千万美元', at: 4, color: '#cfe3c4' },
    ] },
    { type: 'box', at: 4, x: 70, y: 600, w: 1780, anchor: 'middle', color: '#fbf3df', en: 'It saved the stock market. The bank panic did not come until the following week.', zh: '股市得救了。银行恐慌直到下一周才爆发。', size: 32 },
  ], lines: [
    L('host', 'October 24. A hundred brokers crowded the Money Post, and there was no money at all.', '10月24日。约一百名经纪人挤在资金柱前，却一分钱也借不到。'),
    L('host', 'Exchange president R. H. Thomas went to James Stillman of National City Bank. Stillman said they must see J. P. Morgan.', '交易所总裁R·H·托马斯去找国民城市银行的詹姆斯·斯蒂尔曼。斯蒂尔曼说，他们得去见J·P·摩根。'),
    L('host', 'Morgan said there would be money. Before half past two, his man John T. Atterbury raised his hand at the Money Post.', '摩根说：会有钱的。两点半之前，他的代表约翰·T·阿特伯里在资金柱前举起了手。'),
    L('banker', 'I am authorized to lend ten million dollars. Take it easy! There will be enough for everybody!', '我受权放贷一千万美元。别慌！每个人都够！', ATT),
    L('host', 'Morgan ordered the banks to use their reserves, though already below the legal limit. About twenty million dollars came out.', '摩根命令各银行动用准备金，尽管它们已低于法定下限。约两千万美元由此流出。'),
  ] });
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p05_king', kind: 'comic', panels: [
      P(a, { bg: 'floor', bgo: { crowd: true }, props: [{ t: 'sign', x: 560, y: 260, w: 460, en: 'UNION PACIFIC: NO BID', zh: '联合太平洋：无人出价', color: '#7a1f1a' }], chars: [ch('larry', a, 0.3, 1.0, { expr: 'think', pose: 'chin', hy: 0.5, exprAt: { 1: 'determined' } })] }),
      P(b, { at: 2, bg: 'study', chars: [ch('broker', b, 0.3, 0.75, { expr: 'worry', hy: 0.42 }), ch('larry', b, 0.75, 0.75, { expr: 'smile', hy: 0.42, flip: true })] }),
      P(c, { at: 3, bg: 'burst', chars: [ch('larry', c, 0.5, 0.75, { expr: 'grin', pose: 'up', hy: 0.5 })] }),
    ], bubbles: [{ at: 2, x: 1190, y: 60, w: 420, en: 'They hope you won\'t sell any more stocks today.', zh: '他们希望你今天别再卖了。', tx: 1300, ty: 200, size: 26, zsize: 22 }],
    sfx: [{ at: 3, x: 1525, y: 540, t: 'BUY 100,000', zh: '买入十万股', size: 64, color: '#f6d77a', font: 'cond' }, { at: 4, x: 600, y: 160, t: 'KING FOR A DAY', zh: '一日之王', size: 80, color: '#f6d77a' }], lines: [
      L('larry', 'At one point there was no bid for Union Pacific at any price. A few more sell orders might have forced the Exchange to close.', '有一刻，联合太平洋任何价位都没有买盘。再多几张卖单，交易所就可能被迫关门。'),
      L('larry', 'But paper profits might never become cash, and a deeper break would hurt the country and the recovery. Staying short was illogical. I began to buy.', '但账面利润可能永远变不成现金，进一步暴跌还会伤害国家、拖延复苏。继续做空不合逻辑。我开始买入。'),
      L('larry', 'Soon a leading banker asked, through a friend, that I sell no more that day. I said I\'d buy all I could carry.', '不久，一位大银行家托朋友请我当天别再卖。我说我还要尽力买进。'),
      L('larry', 'I bought a hundred thousand shares for the long account, at bottom prices, and didn\'t sell another stock short for nine months.', '我那天买进十万股做多，买在最低价附近，此后九个月没再卖空过一只股票。'),
      L('larry', 'After the close I was worth over a million dollars. The market had been at my mercy. For one day, I was king.', '收盘后，我的身家超过一百万美元。那天市场任我摆布。有那么一天，我是国王。'),
    ] });
  }
  shot({ id: 'p05_pillars', kind: 'info', tag: { en: 'FRAMEWORK', zh: '框架' }, title: { en: 'His Four Pillars', zh: '他的四大支柱' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 140, cols: 2, items: [
      { en: 'Read the tape.', zh: '读盘。' },
      { en: 'Begin at the right time.', zh: '在正确的时机进场。' },
      { en: 'Stick to your position.', zh: '坚守你的仓位。' },
      { en: 'Study general conditions to anticipate probabilities — his greatest discovery.', zh: '研究整体状况以预判概率——他最重要的发现。', color: '#f6d77a', at: 1 },
    ] },
    { type: 'quote', at: 2, x: 160, y: 590, w: 1600, size: 38, zsize: 32, en: 'What is the use of being right unless you get all the good possible out of it?', zh: '如果不能把"正确"的好处用到极致，正确又有什么用？', src: 'Ch. IX' },
  ], lines: [
    L('host', 'His summing-up: tape reading matters, so does beginning at the right time, so does sticking to your position.', '他的总结：读盘很重要，在正确的时机进场很重要，坚守仓位也很重要。'),
    L('host', 'But his greatest discovery: study general conditions to anticipate probabilities. He called himself permanently out of the gambler class.', '但他最重要的发现是：研究整体状况以预判概率。他说自己从此永远脱离了赌徒之列。'),
    L('larry', 'What is the use of being right unless you get all the good possible out of it?', '如果不能把"正确"的好处用到极致，正确又有什么用？'),
  ] });

  // ---------------------------------------------------------------- Ch X
  {
    const [a, b] = HALF;
    shot({ id: 'p05_sleep', kind: 'comic', panels: [
      P(a, { bg: 'night', props: [{ t: 'bales', x: 120, y: 650, n: 10 }], chars: [ch('trader', a, 0.5, 0.9, { expr: 'tired', hy: 0.36 })] }),
      P(b, { at: 1, bg: 'study', chars: [ch('friend', b, 0.5, 1.0, { expr: 'smile', pose: 'point', hy: 0.5 })] }),
    ], bubbles: [
      { at: 0, x: 80, y: 70, w: 520, en: 'I\'m carrying so much cotton I can\'t sleep!', zh: '我手里的棉花太多，睡不着觉！', tx: 420, ty: 200, kind: 'thought' },
      { at: 1, x: 1040, y: 70, w: 520, en: 'Sell down to the sleeping point.', zh: '卖到你睡得着为止。', tx: 1380, ty: 260, kind: 'shout' },
    ], lines: [
      L('host', 'Chapter ten opens with mistakes. A loss taken never bothers him. What does the damage is being wrong and not taking it.', '第十章从错误谈起。认了的亏损从不困扰他。真正伤人的，是错了却不认亏。'),
      L('host', 'He recalls Dickson G. Watts\'s story of a man too worried about his cotton to sleep. His friend\'s advice: "Sell down to the sleeping point."', '他想起迪克森·G·瓦茨讲的故事：有人因持有太多棉花而失眠。朋友的建议是："卖到你睡得着为止。"'),
    ] });
  }
  shot({ id: 'p05_commod', kind: 'info', tag: { en: 'WHY COMMODITIES', zh: '为何偏爱商品' }, title: { en: 'Facts Prevail — and the Trend Filters the News', zh: '事实终将胜出——趋势会过滤新闻' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.2, 0.4, 0.4], size: 24, cols: [['', ''], ['Stocks', '股票'], ['Commodities', '商品']], rows: [
      [['What drives price', '驱动价格的'], ['A dozen guesses; inside cliques', '十几种猜测；内部集团'], ['One law: supply and demand', '一条规律：供求']],
      [['Surprises', '意外'], ['Dividends passed or raised overnight', '分红一夜之间取消或提高'], ['No dividends to juggle', '没有分红可以操弄']],
      [['Your edge', '你的优势'], ['Hard to know what insiders know', '很难知道内部人知道什么'], ['Study pays: facts win in the end', '研究有回报：事实终将胜出']],
    ] },
    { type: 'table', at: 2, x: 70, y: 600, w: 1780, widths: [0.2, 0.4, 0.4], size: 25, headColor: '#5b3a1e', cols: [['Market', '市场'], ['Bullish news', '利多消息'], ['Bearish news', '利空消息']], rows: [
      [['Bull market 牛市', ''], ['Exaggerated 被夸大', ''], ['Ignored 被忽视', '']],
      [['Bear market 熊市', ''], ['Ignored 被忽视', ''], ['Exaggerated 被夸大', '']],
    ] },
  ], lines: [
    L('larry', 'I\'d rather trade commodities. In the long run they obey one law, supply and demand, and in the end the facts prevail.', '我更愿意做商品。长期来看，商品只服从一条规律——供求，而事实终将胜出。'),
    L('host', 'No clique can pass a dividend on cotton. The trader\'s job is to learn present and future supply and demand.', '没有哪个集团能取消棉花的分红。交易者要做的，就是弄清当前和未来的供求。'),
    L('host', 'And the trend forms before the news. In a bull market, bear news is ignored and bull news exaggerated. In a bear market, the reverse.', '而且趋势先于新闻形成。牛市里，利空被忽视、利多被夸大；熊市里则正好相反。'),
  ] });
  shot({ id: 'p05_lolr', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'The Line of Least Resistance', zh: '最小阻力线' }, els: [
    { type: 'line', x: 70, y: 255, w: 1200, h: 555, xr: [0, 20], yr: [114, 142], yTicks: [120, 125, 130, 135, 140], yLabel: ['Price', '价格'], illustrative: true,
      bands: [{ y0: 120, y1: 130, x1: 12.5, color: '#d9a441' }],
      hlines: [{ at: 1, v: 130, label: ['130: selling > buying', '130：卖压＞买盘'], color: '#b8322a', x1: 12.5, lx: 9 }, { at: 1, v: 120, below: true, label: ['120: buying > selling', '120：买盘＞卖压'], color: '#2f7d3a', x1: 12.5, lx: 9 }],
      series: [{ pts: [[0, 122], [1.5, 129], [3, 121], [4.5, 129.5], [6, 120.5], [7.5, 128.5], [9, 121.5], [10.5, 129], [12, 125], [13, 131], [14.5, 134], [16, 133], [18, 137.5], [20, 140]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 3, 3] }],
      notes: [{ x: 13, y: 131, at: 2, en: 'Breaks the limit: now act', zh: '突破边界：此时行动', dx: -330, dy: -150, w: 260 }, { x: 18, y: 137.5, at: 3, en: 'Wrong-side traders turn, pushing it on', zh: '站错边的人反手，推动价格', dx: -330, dy: -80, w: 270 }] },
    { type: 'cards', x: 1310, y: 255, w: 540, ch: 165, cols: 1, items: [
      { en: 'Don\'t trade on how it looks: weak at 120, strong at 130.', zh: '别看"样子"交易：120看着弱，130看着强。', at: 1 },
      { en: 'Wait until the price breaks through a limit.', zh: '等价格突破边界。', at: 2 },
      { en: 'Two allies: basic conditions, and the men who are wrong.', zh: '两个盟友：基本状况，以及判断错误的人。', at: 4, color: '#f6d77a' },
    ] },
  ], lines: [
    L('larry', 'Prices go wherever resistance is least: up if rising is easier than falling, down if falling is easier.', '价格总是往阻力最小的方向走：上涨比下跌容易就涨，下跌比上涨容易就跌。'),
    L('host', 'Between swings, a stock may run from 120 to 130. At 130 selling beats buying; at 120 buying wins.', '大行情之间，股价可能在120到130间来回。到130卖压胜过买盘；到120买盘占优。'),
    L('host', 'Don\'t guess which way it will break. Wait until the price breaks through a limit. That is your signal.', '不要猜它会往哪边突破。等价格突破边界，那才是你的信号。'),
    L('host', 'Then those who sold at 120 or bought at 130 must turn or get out, and that pushes the price further.', '这时，在120卖出或在130买入的人必须反手或离场，这又把价格推得更远。'),
    L('host', 'So the right man always has two forces working for him: basic conditions, and the men who are wrong.', '所以，判断正确的人总有两股力量相助：基本状况，以及判断错误的人。'),
  ] });
  shot({ id: 'p05_accident', kind: 'info', tag: { en: 'ON THE LINE', zh: '顺着阻力线' }, title: { en: 'The Unexpected Helps the Man on the Line', zh: '意外总会帮助顺势的人' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 150, cols: 2, items: [
      { en: 'Saratoga: long Union Pacific because the tape said up — then a surprise dividend raise and a 30-point rise.', zh: '萨拉托加：因盘面向上而做多联合太平洋——随后意外提高分红，大涨30点。', n: 'UP', at: 0 },
      { en: 'Before the war: short 150,000 shares in a weak market. Germany\'s submarine announcement came. Covered that day.', zh: '一战前：在疲弱市场做空15万股。德国宣布潜艇政策。当天回补。', n: 'WW', at: 1, tagColor: '#b8322a' },
    ] },
    { type: 'quote', at: 2, x: 160, y: 470, w: 1600, size: 44, zsize: 36, en: 'Stocks are never too high to buy or too low to sell.', zh: '股票永远不会高到不能买，也不会低到不能卖。', src: 'Ch. X' },
  ], lines: [
    L('larry', 'The unexpected has always helped me when I was on the line of least resistance. At Saratoga, the tape had said up.', '只要我顺着最小阻力线，意外总是帮我。在萨拉托加，盘面说的就是"向上"。'),
    L('larry', 'Before the war I was short a hundred fifty thousand shares in a weak market. Then Germany announced its submarine policy. I covered that day.', '一战前，市场疲弱，我做空了十五万股。随后德国宣布潜艇政策。我当天就回补了。'),
    L('larry', 'The price itself sets nothing. Stocks are never too high to buy or too low to sell.', '价格本身决定不了什么。股票永远不会高到不能买，也不会低到不能卖。'),
  ] });
  shot({ id: 'p05_cotmistake', kind: 'info', tag: { en: 'MISTAKE', zh: '错误' }, title: { en: 'Trying to Start the Move Himself', zh: '想亲手启动行情' }, els: [
    { type: 'line', x: 70, y: 255, w: 1150, h: 555, xr: [0, 20], yr: [0, 10], yTicks: [], yLabel: ['Cotton, near 12¢', '棉花，约12美分'], illustrative: true,
      bands: [{ y0: 2.5, y1: 5, x1: 15, lx: 12.9, label: ['Narrow range', '窄幅区间'], color: '#d9a441' }],
      series: [{ pts: [[0, 3.5], [1, 3], [2, 5.8], [3.2, 3.6], [4.2, 3.4], [5.2, 6], [6.4, 3.5], [7.4, 3.3], [8.4, 6.1], [9.6, 3.4], [10.6, 3.2], [11.6, 5.9], [12.8, 3.3], [15, 3.6], [16.5, 5.5], [18, 7.5], [20, 9.3]], color: '#8a5a2b', reveal: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2] }],
      notes: [{ x: 2, y: 5.8, at: 1, en: 'He buys: it rises', zh: '他买：就涨', dx: -40, dy: -130, w: 190 }, { x: 3.2, y: 3.6, at: 1, en: 'He stops: it sinks', zh: '他停：就跌', dx: 60, dy: 90, w: 230 }, { x: 20, y: 9.3, at: 2, en: 'Later: the real move, without him', zh: '后来：真行情来了，他不在场', dx: -380, dy: 0, w: 280 }] },
    { type: 'box', at: 1, x: 1260, y: 255, w: 590, color: '#f3c6c0', en: 'Bought 50,000 bales to push it through, 4–5 times. Cost ≈ $200,000.', zh: '买五万包想推过去，反复四五次。损失约20万美元。', size: 28 },
    { type: 'box', at: 3, x: 1260, y: 520, w: 590, color: '#cfe3c4', en: 'RULE: In a narrow market, don\'t anticipate. Mark the limits; act only on a break.', zh: '规则：窄幅市场里别抢跑。标出边界，只在突破时行动。', size: 28 },
  ], lines: [
    L('larry', 'I once tried to anticipate the starting signal. Cotton hung around twelve cents in a narrow range, and I was very bullish.', '我曾想抢在信号之前出手。棉花在12美分附近窄幅震荡，而我非常看多。'),
    L('larry', 'I bought fifty thousand bales to give it a push. It rose while I bought, and sank when I stopped. I did that four or five times.', '我买了五万包想推它一把。我买它就涨，我一停它就跌。如此反复四五次。'),
    L('larry', 'It cost me about two hundred thousand dollars. Not long after I quit in disgust, it went up and never stopped.', '损失约二十万美元。我灰心收手后没多久，它就一路上涨，再没停下。'),
    L('host', 'Rule: in a narrow market, don\'t guess the next move. Mark the limits and wait for a break.', '规则：窄幅市场里不要猜下一步。标出边界，等待突破。'),
  ] });
  shot({ id: 'p05_wheat', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Wheat: Buy Only Above $1.20', zh: '小麦：只在1.20美元上方买入' }, els: [
    { type: 'line', x: 70, y: 255, w: 1780, h: 555, xr: [0, 34], yr: [1.07, 1.30], yTicks: [1.10, 1.15, 1.20, 1.25], yDec: 2, yPre: '$', yLabel: ['Wheat, $/bushel', '小麦 美元/蒲式耳'], illustrative: true,
      bands: [{ y0: 1.10, y1: 1.20, x1: 22 }],
      hlines: [{ v: 1.20, label: ['Buy only above $1.20', '只在1.20上方买'], color: '#b8322a', x1: 22, lx: 12 }],
      series: [{ pts: [[0, 1.12], [3, 1.18], [6, 1.11], [9, 1.17], [12, 1.12], [15, 1.14], [18, 1.17], [21, 1.192], [22, 1.205], [24, 1.21], [26, 1.22], [28, 1.23], [30, 1.25], [32, 1.26], [33, 1.28]], color: '#8a5a2b', reveal: [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3] }],
      notes: [{ x: 6, y: 1.11, en: 'For months: $1.10–$1.20', zh: '数月：1.10–1.20美元', dx: 40, dy: 25, w: 250 }, { x: 15, y: 1.14, en: '$1.14: "Why not buy now?"', zh: '1.14："为什么不现在买？"', dx: -150, dy: 60, w: 280 }, { x: 22, y: 1.205, at: 2, en: 'Closes > $1.19; opens $1.20½ → BUY', zh: '收于1.19上方；开盘1.20½→买入', dx: -400, dy: -120, w: 300 }, { x: 30, y: 1.25, at: 2, en: '$1.21 · 1.22 · 1.23 · 1.25', zh: '1.21·1.22·1.23·1.25', dx: -120, dy: 70, w: 230 }, { x: 33, y: 1.28, at: 3, en: 'US holiday: Winnipeg +6¢; next day US +6¢', zh: '美国假日：温尼伯+6美分；次日美国+6美分', dx: -480, dy: -60, w: 330 }] },
  ], lines: [
    L('larry', 'Friends once asked about wheat. For months it had sold between $1.10 and $1.20. At $1.14, one asked why not buy now.', '有一次朋友问起小麦。它已在1.10到1.20美元之间徘徊了好几个月。1.14时，有人问为什么不现在买。'),
    L('larry', 'Because I didn\'t know yet that it was going up. Buy when it crosses $1.20: a smaller profit, but a far more probable one.', '因为我还不知道它会不会涨。等它突破1.20再买：利润小一些，但把握大得多。'),
    L('larry', 'One day it closed above $1.19. Next day it opened at $1.20½, and I bought. It went to $1.21, $1.22, $1.23, $1.25.', '有一天它收在1.19上方。第二天开盘1.20½，我买入。它涨到1.21、1.22、1.23、1.25。'),
    L('host', 'Europe had been buying quietly, and many were short near $1.19. On one US holiday, Winnipeg opened six cents up; next day, so did we.', '原来欧洲一直在悄悄买入，很多人在1.19附近做空。有一次美国放假，温尼伯高开六美分；第二天美国也高开六美分。'),
  ] });
  shot({ id: 'p05_system', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'Building a Cotton Line: Probe First, Then Load', zh: '建立棉花仓位：先试探，再加码' }, els: [
    { type: 'table', x: 70, y: 255, w: 1100, widths: [0.38, 0.32, 0.3], reveal: true, rowAt: [0, 1, 1, 2, 3], hl: [3], size: 26, cols: [['Condition', '条件'], ['Action', '操作'], ['Line', '累计']], rows: [
      [['Line of least resistance points up', '最小阻力线向上'], ['Buy 10,000 bales', '买1万包'], ['10,000', '1万']],
      [['Up 10 points from first buy', '比首笔高10点'], ['Buy 10,000 more', '再买1万包'], ['20,000', '2万']],
      [['Up 20 points ($1 a bale)', '高20点（每包赚1美元）'], ['Buy 20,000 more', '再买2万包'], ['40,000 = full line', '4万＝满仓']],
      [['First 10–20,000 show a LOSS', '最初1–2万包出现亏损'], ['GET OUT — you started wrong', '离场——开局就错了'], ['0', '0']],
      [['Cost of these probes', '试探成本'], ['$50,000–60,000', '5–6万美元'], ['cheap', '很便宜']],
    ] },
    { type: 'cards', at: 0, x: 1210, y: 255, w: 640, ch: 160, cols: 1, items: [
      { en: 'Start with one-fifth of the full line.', zh: '先建满仓的五分之一。', n: '⅕' },
      { en: 'No profit? Add nothing. "Up" has become "not yet."', zh: '没盈利？不加仓。"向上"变成了"还没到"。', at: 3, tagColor: '#b8322a' },
      { en: 'Big bet only when winning; small bet when losing.', zh: '赢时才下大注；输时只输小注。', at: 4, tagColor: '#2f7d3a' },
    ] },
  ], lines: [
    L('host', 'His proper method: accumulate on the way up, even paying top prices. Begin with about one-fifth of the full line.', '他的正确方法：在上涨途中逐步建仓，哪怕买在高价。先建大约满仓的五分之一。'),
    L('host', 'For a forty-to-fifty-thousand-bale line: buy ten thousand. Up ten points, ten thousand more. At twenty points, a dollar a bale, twenty thousand more.', '假如满仓是四五万包：先买一万包；涨十点，再买一万；涨二十点、即每包赚一美元时，再买两万。'),
    L('host', 'If the first ten or twenty thousand show a loss, get out. You may be only temporarily wrong, but it never pays to start wrong.', '如果最初的一两万包出现亏损，就离场。也许只是暂时错了，但开局就错，永远不划算。'),
    L('host', 'Those probes might cost fifty or sixty thousand dollars, recovered almost at once when the real move starts. Bet big only when winning.', '这些试探可能花掉五六万美元，真行情一来几乎立刻赚回。只在赢的时候下大注。'),
  ] });
  shot({ id: 'p05_hearne', kind: 'info', tag: { en: 'A SYSTEM — AND ITS DESERTER', zh: '一套方法——以及背弃它的人' }, title: { en: 'Pat Hearne: "You Can\'t Tell Till You Bet"', zh: '帕特·赫恩："不下注就无从知道"' }, els: [
    { type: 'line', x: 70, y: 255, w: 1000, h: 555, xr: [0, 10], yr: [99, 106], yTicks: [100, 101, 102, 103, 104, 105], yLabel: ['Price (points)', '价格（点）'], illustrative: true,
      series: [{ pts: [[0, 100], [2, 101], [4, 102], [6, 103], [7, 104], [8.2, 103.5], [9, 103], [10, 102.5]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 1, 1, 1, 1] },
        { pts: [[0, 99], [2, 99], [2, 100], [4, 100], [4, 101], [6, 101], [6, 102], [7, 102], [7, 103], [9, 103]], color: '#b8322a', dash: '10 8', width: 4, reveal: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1], label: ['Stop', '止损'], labelBelow: true }],
      notes: [{ x: 0, y: 100, en: 'Buy 100', zh: '买100股', dx: 10, dy: -110, w: 150 }, { x: 2, y: 101, en: '+1: buy 100 more', zh: '+1点：再买100', dx: -20, dy: -120, w: 200 }, { x: 9, y: 103, at: 1, en: '1-point reaction: stopped out', zh: '回落1点：止损出局', dx: -240, dy: 100, w: 230 }] },
    { type: 'box', at: 2, x: 1110, y: 255, w: 740, color: '#cfe3c4', en: 'His follower: made over $100,000 in Lackawanna with it. Then dropped it, let losses run — lost it all.', zh: '他的追随者：用这套方法在拉卡瓦纳赚了10万多美元。后来抛弃它，任由亏损扩大——输光一切。', size: 26 },
    { type: 'box', at: 3, x: 1110, y: 520, w: 740, color: '#f3c6c0', en: 'Same man, 1875: short Lake Shore, +$15,000 in 4 days, no stop. By mid-September: borrowed $10 for a baby carriage.', zh: '同一个人，1875年：做空湖岸铁路，4天赚1.5万美元，不设止损。到9月中旬：借10美元买婴儿车。', size: 26 },
  ], lines: [
    L('host', 'An old-timer told him about the gambler Pat Hearne. Asked for tips, Hearne would only say: you can\'t tell till you bet.', '一位老前辈给他讲起赌客帕特·赫恩。有人向赫恩讨消息，他只说：不下注就无从知道。'),
    L('host', 'Hearne bought a hundred shares, and another hundred on each one-point rise. His stop trailed one point below his last purchase. A one-point reaction took him out.', '赫恩先买一百股，每涨一点再加一百股，止损始终跟在最后一笔买价下方一点。回落一点，他就出局。'),
    L('host', 'A customer who copied him made over a hundred thousand in Lackawanna, then dropped the system, let losses run, and lost it all.', '有位客户照搬这套方法，在拉卡瓦纳赚了十万多美元，后来抛弃它、任由亏损扩大，输得精光。'),
    L('host', 'In 1875 the same man, Roberts, shorted Lake Shore: fifteen thousand profit in four days, but no stop. By mid-September he borrowed ten dollars for a baby carriage.', '1875年，这位罗伯茨做空湖岸铁路：四天赚了一万五千美元，却不设止损。到九月中旬，他借了十美元买婴儿车。'),
  ] });
  shot({ id: 'p05_hope', kind: 'info', tag: { en: 'PSYCHOLOGY', zh: '交易心理' }, title: { en: 'Hope and Fear, Reversed', zh: '把希望与恐惧颠倒过来' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.2, 0.4, 0.4], reveal: true, rowAt: [0, 1], size: 28, cols: [['', ''], ['Natural instinct', '天性'], ['What the trader must do', '交易者该做的']], rows: [
      [['Trade goes against you', '交易亏损时'], ['HOPE each day is the last bad one → loses more than he should', '希望明天就会好转→亏得比应有的多'], ['FEAR the loss will grow → cut it', '恐惧亏损会扩大→砍掉它']],
      [['Trade goes your way', '交易盈利时'], ['FEAR tomorrow takes the profit → gets out too soon', '害怕明天利润没了→过早离场'], ['HOPE the profit will grow → hold it', '希望利润会扩大→拿住它']],
    ] },
    { type: 'box', at: 2, x: 70, y: 620, w: 1780, anchor: 'middle', color: '#f6d77a', en: 'The speculator\'s chief enemies work from inside him.', zh: '投机者最大的敌人，在他自己心里。', size: 34 },
  ], lines: [
    L('host', 'On a losing trade you hope each day is the last bad one, and lose more than you should.', '亏损时，你总希望明天就会好转，结果亏得比应有的多。'),
    L('host', 'When it goes your way, you fear the next day will take your profit, so you get out too soon.', '交易盈利时，你又害怕明天利润会消失，于是过早离场。'),
    L('host', 'The trader must reverse both instincts: fear that a loss will grow, and cut it; hope that a profit will grow, and hold it.', '交易者必须把这两种本能颠倒过来：恐惧亏损扩大，所以砍掉它；希望利润扩大，所以拿住它。'),
  ] });
  shot({ id: 'p05_beat', kind: 'info', tag: { en: 'AFTER NEARLY 30 YEARS', zh: '近三十年的结论' }, title: { en: 'You Can Beat a Race, Not Racing', zh: '能赢一场赛马，赢不了赛马本身' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 150, cols: 2, items: [
      { en: 'CAN beat: a stock, or a group, at a certain time.', zh: '能赢：某只股票或某个板块，在某个时段。', tagColor: '#2f7d3a', n: '✓' },
      { en: 'CANNOT beat: the stock market itself.', zh: '赢不了：股市本身。', tagColor: '#b8322a', n: '✗' },
      { en: 'CAN win: individual deals in cotton or grain.', zh: '能赢：棉花或谷物的单笔交易。', tagColor: '#2f7d3a', n: '✓', at: 1 },
      { en: 'CANNOT beat: the cotton market or the grain market.', zh: '赢不了：棉花市场或谷物市场。', tagColor: '#b8322a', n: '✗', at: 1 },
    ] },
    { type: 'box', at: 1, x: 70, y: 620, w: 1780, anchor: 'middle', color: '#fbf3df', en: 'A man may beat a horse race, but he cannot beat horse racing.', zh: '人可以赢一场赛马，却赢不了赛马这件事。', size: 34 },
  ], lines: [
    L('larry', 'After nearly thirty years, my conclusion: a man may beat a stock or a group for a time, but no man can beat the stock market.', '近三十年下来，我的结论是：一个人可以一时赢某只股票或某个板块，但没有人能战胜股市。'),
    L('larry', 'You may make money on deals in cotton or grain, but not beat those markets. A man may beat a horse race, but not horse racing.', '你可以在棉花或谷物的单笔交易上赚钱，却赢不了这些市场。人可以赢一场赛马，却赢不了赛马。'),
  ] });

  // ---------------------------------------------------------------- wrap-up
  shot({ id: 'p05_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode Five Teaches', zh: '第五集的教训' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, items: [
      { en: 'Set your "I\'m wrong" point before you trade. Exit at the market.', zh: '交易前设好"判错点"，以市价离场。' },
      { en: 'Study general conditions: money, rates, the big picture.', zh: '研究整体状况：资金、利率、大局。' },
      { en: 'Wait for the line of least resistance; never force a breakout.', zh: '等待最小阻力线成形；绝不强推突破。', at: 1 },
      { en: 'Probe with one-fifth; add only on profit.', zh: '先用五分之一试探；盈利才加仓。', at: 1 },
      { en: 'Keep your system after it makes you rich.', zh: '赚了大钱后，也要坚持你的方法。', at: 2 },
      { en: 'Fear the loss, hope for the profit.', zh: '对亏损心存恐惧，对盈利心怀希望。', at: 2 },
    ] },
  ], lines: [
    L('host', 'In brief: know in advance what proves you wrong, and get out at the market. Study conditions, as he studied money in 1907.', '小结：事先知道什么能证明你错了，并以市价离场。像他在1907年研究资金那样研究整体状况。'),
    L('host', 'Wait for the line of least resistance to define itself, and build your line only as the market proves you right.', '等最小阻力线自己显现，只在市场证明你正确时才逐步建仓。'),
    L('host', 'Stick to a system that works, and turn your instincts around: fear the loss, hope for the profit.', '坚持行之有效的方法，并把本能颠倒过来：对亏损恐惧，对盈利怀抱希望。'),
  ] });
  shot({ id: 'p05_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistakes in Chapters IX – X', zh: '第九至十章中的错误' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, widths: [0.34, 0.31, 0.35], reveal: true, rowAt: [0, 0, 1, 1, 1], size: 25, zsize: 22, cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Lost the 1906 earthquake profit by shorting too soon', '过早做空，亏掉1906年地震利润'], ['Right on direction, wrong on timing', '方向对，时机错'], ['Be right at exactly the right time', '要在恰当的时机正确']],
      [['Bought the Anaconda breakout; it failed', '买入阿纳康达突破，结果失败'], ['The precedent didn\'t hold this time', '这一次惯例失灵'], ['Pre-set a failure point; sell at the market, no limit', '预设判错点；市价卖出，不设限价']],
      [['Pushed cotton near 12¢ (−$200,000)', '在12美分附近强推棉花（亏20万美元）'], ['Tried to start the move himself', '想亲手启动行情'], ['In a narrow range, wait for the break', '窄幅震荡时，等突破']],
      [['Roberts abandoned Hearne\'s stops', '罗伯茨抛弃赫恩的止损法'], ['Success bred overconfidence and hope', '成功滋生自负与侥幸'], ['Keep the system that made you money', '坚持让你赚钱的方法']],
      [['Holding losers, cutting winners', '拿住亏损，砍掉盈利'], ['Hope and fear in the wrong places', '希望与恐惧用错了地方'], ['Fear the loss; hope for the profit', '对亏损恐惧，对盈利希望']],
    ] },
  ], lines: [
    L('host', 'Mistake review. Shorting too soon in 1906, and a breakout that failed: the cure is timing, and a failure point set in advance.', '错误复盘。1906年过早做空、阿纳康达假突破：对策是把握时机，并事先设好判错点。'),
    L('host', 'Forcing cotton cost two hundred thousand. Roberts abandoned a winning system. And instinct holds losers while cutting winners.', '强推棉花亏了二十万。罗伯茨抛弃了赚钱的方法。而本能总是拿住亏损、砍掉盈利。'),
  ] });
};
