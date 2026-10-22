// Episode 2 — Chapters III–IV. Narration is an original adaptation of Lefèvre's text; short quotes are marked.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  episode(2, 'Wall Street Is Not a Bucket Shop', '华尔街不是对赌行', { en: 'Chapters III – IV', zh: '原著第三至四章' }, '#2f5d8a', [
    L('host', 'Episode two. Wall Street is not a bucket shop.', '第二集：华尔街不是对赌行。'),
  ]);

  // ------------------------------------------------------------------ CHAPTER III
  {
    const [a, b] = HALF;
    shot({ id: 'p02_harding', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('larry', a, 0.5, 1.05, { expr: 'smile', hy: 0.5, exprAt: { 1: 'grin' } })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['SUGAR', 'STEEL'], ['—', '—']] }, chars: [ch('larry', b, 0.5, 1.05, { expr: 'worry', hy: 0.5, exprAt: { 3: 'sad' } })] }),
    ], caps: [
      { x: 70, y: 70, w: 520, en: 'Chapter III. First day in New York: Harding Brothers.', zh: '第三章。在纽约的第一天：哈丁兄弟公司。' },
      { at: 1, x: 70, y: 700, w: 440, en: 'Bought 100 at 84 → sold at 85', zh: '84买入100股→85卖出' },
      { at: 2, x: 1005, y: 70, w: 460, en: 'Two hours. 1,100 shares, in and out.', zh: '两小时，进进出出共1,100股。' },
    ],
    sfx: [{ at: 2, x: 1650, y: 330, t: '−$1,100', zh: '当天净亏', size: 96, font: 'cond' }],
    lines: [
      L('larry', 'My first day in New York, before one o\'clock, I opened an account at Harding Brothers, members of the Stock Exchange.', '到纽约的第一天，不到一点钟，我就在证券交易所会员哈丁兄弟公司开了户。'),
      L('larry', 'Same quotation board, same ticker, same kind of customers. I bought a hundred at 84 and sold at 85 within half an hour.', '同样的报价板、同样的行情机、同样的客户。我在84买了一百股，不到半小时就在85卖掉。'),
      L('larry', 'In two hours I traded eleven hundred shares, jumping in and out. Some trades made money. I still lost exactly eleven hundred dollars.', '两小时内我进进出出做了一千一百股。有几笔是赚的，可我还是整整亏了一千一百美元。'),
      L('larry', 'Nearly half my stake, gone on day one. In the old Cosmopolitan, the same moves would have come out ahead.', '第一天就亏掉将近一半本钱。同样的操作，放在当年的"大都会"是会赚钱的。'),
    ] });
  }

  {
    const [a, b, c] = BIGR;
    shot({ id: 'p02_boom', kind: 'comic', panels: [
      P(a, { bg: 'floor' }),
      P(b, { at: 1, bg: 'office', chars: [ch('trader', b, 0.5, 0.62, { hat: 'top', hatColor: '#141414', mus: 'walrus', expr: 'grin', stout: true, hy: 0.58 })] }),
      P(c, { at: 2, bg: 'floor', chars: [ch('keene', c, 0.5, 0.62, { expr: 'determined', hy: 0.58 })] }),
    ], caps: [
      { x: 810, y: 70, w: 560, en: '1901: the public goes stock mad.', zh: '1901年：公众为股票疯狂。' },
      { at: 1, x: 810, y: 640, w: 1040, size: 24, zsize: 21, en: 'High rollers: Gates, Drake, Loyal Smith · the Reid-Leeds-Moore crowd · Schwab, Frick, Phipps and the Pittsburgh coterie', zh: '豪赌客：盖茨、德雷克、洛亚尔·史密斯·里德-利兹-摩尔集团·施瓦布、弗里克、菲普斯与匹兹堡帮' },
      { at: 1, x: 60, y: 60, w: 420, size: 22, zsize: 19, en: 'John W. Gates · "Bet-you-a-million"', zh: '约翰·W·盖茨·"赌你一百万"' },
      { at: 2, x: 60, y: 460, w: 420, size: 22, zsize: 19, en: 'James R. Keene · making the U.S. Steel market', zh: '詹姆斯·R·基恩·为美国钢铁做市' },
    ],
    sfx: [{ x: 1330, y: 330, t: '3,000,000 SHARES', zh: '单日成交三百万股', size: 74, color: '#f6d77a', rot: -4, font: 'cond' }],
    lines: [
      L('larry', 'Then came the boom of 1901. The Street once bragged of quarter-million-share days. Now we had a three-million-share day.', '接着是1901年的大牛市。华尔街过去以单日成交二十五万股为傲，如今出现了单日三百万股。'),
      L('larry', 'The steel crowd came to town: John W. Gates of Bet-you-a-million fame, the Reid-Leeds-Moore crowd, and the Pittsburgh coterie.', '钢铁帮进城了：以"赌你一百万"闻名的约翰·W·盖茨、里德-利兹-摩尔集团，还有匹兹堡帮。'),
      L('larry', 'Keene made the market for U.S. Steel. One broker sold a hundred thousand shares in a few minutes.', '基恩为美国钢铁做市。一位经纪人几分钟内就卖出了十万股。'),
    ] });
  }

  shot({ id: 'p02_np', kind: 'info', tag: { en: '1901', zh: '1901年' }, title: { en: 'Wrong Too Early, Right on One Stock', zh: '看空太早，却做对了一只股票' }, els: [
    { type: 'cards', x: 70, y: 265, w: 760, ch: 160, cols: 1, max: 28, items: [
      { at: 0, n: '✘', tagColor: '#b8322a', en: 'Bearish too early on the buying of "A.O.T.", Any Old Thing. Every short lost money.', zh: '对"随便什么股（A.O.T.）"的疯狂买入看空太早。每次做空都亏钱。' },
      { at: 1, n: '✔', tagColor: '#2f7d3a', en: 'Northern Pacific kept acting as if it would go higher. Held 1,000 shares against the office\'s advice.', zh: '北太平洋的走势显示还会涨。他不顾办公室所有人的劝告，持有1,000股。' },
      { at: 2, n: '$', tagColor: '#d9a441', en: 'Sold near 110 with a 30-point profit. Balance: nearly $50,000.', zh: '在110附近卖出，赚30点。账户余额：将近五万美元。' },
    ] },
    { type: 'line', at: 1, x: 870, y: 265, w: 980, h: 545, xr: [0, 10], yr: [72, 118], yTicks: [80, 90, 100, 110], yLabel: ['Northern Pacific', '北太平洋'],
      series: [{ pts: [[0, 80], [1.5, 82], [3, 87], [4.5, 86], [6, 95], [7.5, 101], [9, 110]], color: '#2f7d3a', reveal: [1, 1, 1, 1, 1, 1, 2] }],
      hlines: [{ v: 110, at: 2, label: ['Sold near 110', '约110卖出'], color: '#2f7d3a', x1: 8.6 }],
      notes: [
        { x: 0, y: 80, at: 1, en: 'Long 1,000 shares (about 30 points below the sale)', zh: '做多1,000股（约比卖价低30点）', dx: 30, dy: 30, w: 320 },
        { x: 9, y: 110, at: 2, en: '+30 points', zh: '赚30点', dx: -200, dy: 60, w: 160 },
      ], illustrative: true },
  ], lines: [
    L('larry', 'Old stagers said everybody had gone crazy. I got bearish too early on the buying of Any Old Thing. Every time I sold, I lost.', '老手们说大家都疯了。我对"随便什么股都买"的风气看空得太早，每次做空都亏钱。'),
    L('larry', 'But Northern Pacific acted as if it would go higher. I held a thousand shares against the advice of everyone in the office.', '可北太平洋的走势显示它还会涨。我不顾办公室所有人的劝告，拿着一千股不放。'),
    L('larry', 'Near 110 I had thirty points profit, and grabbed it. My balance was nearly fifty thousand dollars, my biggest yet.', '涨到110附近，我有三十点利润，果断落袋。账户上将近五万美元，是我攒过最多的钱。'),
    L('host', 'Note the split. His general opinion was early and costly. His tape reading on one stock was right.', '注意这个反差：他对大势的判断过早，代价不小；他对单只股票的读盘却是对的。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p02_corner', kind: 'comic', panels: [
      P(a, { bg: 'floor', tint: '#b8322a', props: [{ t: 'paper', x: 150, y: 220, w: 600, h: 380, en: 'HARRIMAN vs. MORGAN: N.P. CORNERED', zh: '哈里曼对摩根：北太平洋遭逼空', paper: 'MAY 9, 1901', size: 52 }] }),
      P(b, { at: 1, bg: 'office', bgo: { board: [['N. PAC'], ['?']], hl: [1, 0] }, chars: [ch('larry', b, 0.5, 1.05, { expr: 'determined', hy: 0.5 })] }),
    ], caps: [
      { x: 70, y: 70, w: 560, en: 'May 8, 1901: a battle of financial giants.', zh: '1901年5月8日：金融巨头之战。' },
      { at: 1, x: 1005, y: 70, w: 420, en: '≈$50,000 in cash. No stocks.', zh: '约五万美元现金，没有持股。' },
    ],
    lines: [
      L('larry', 'Harriman\'s crowd and the Morgan people fought for control of Northern Pacific. Keene\'s broker bought a hundred thousand shares. A corner followed.', '哈里曼集团与摩根一方争夺北太平洋的控制权。基恩的经纪人买进了十万股，随后形成逼空。'),
      L('larry', 'On May ninth, I had nearly fifty thousand in cash and no stocks. I knew what would come: an awful break, then bargains.', '5月9日，我手里有将近五万美元现金，没有任何股票。我知道接下来会怎样：先是暴跌，然后遍地便宜货。'),
      L('larry', 'Sell short into the break, then buy the bargains for the quick recovery. Big money, and sure money.', '在暴跌中做空，再买进便宜货等快速反弹。这是大钱，而且是稳钱。'),
    ] });
  }

  {
    const [a, b] = HALF;
    shot({ id: 'p02_may9', kind: 'comic', panels: [
      P(a, { bg: 'floor', tint: '#b8322a' }),
      P(b, { at: 1, bg: 'dark', chars: [ch('larry', b, 0.5, 1.15, { expr: 'shock', pose: 'tape', exprAt: { 2: 'determined', 3: 'shock', 4: 'sad' } })] }),
    ], caps: [{ x: 70, y: 70, w: 520, en: 'May 9, 1901. The market boils.', zh: '1901年5月9日，市场沸腾。' }],
    sfx: [
      { at: 1, x: 1180, y: 160, t: 'TAPE: 100', zh: '纸带：100', size: 64, color: '#fff', rot: -10, font: 'cond' },
      { at: 1, x: 1700, y: 240, t: 'FILL: ~80', zh: '成交：约80', size: 64, color: '#b8322a', rot: 8, font: 'cond' },
      { at: 3, x: 480, y: 420, t: '−35 POINTS', zh: '一天亏35点', size: 110, color: '#fff', rot: -6, font: 'cond' },
    ],
    lines: [
      L('larry', 'The market boiled, just as I expected. I put in a lot of selling orders, at the market.', '市场果然如我所料地沸腾了。我以市价下了大量卖单。'),
      L('larry', 'The tape said 100. My stocks were sold around 80, twenty points lower, thirty or forty below the previous close.', '纸带上是100，我的股票却在80左右成交，低了二十点，比前一晚收盘低三四十点。'),
      L('larry', 'At those levels my shorts were the very bargains I\'d planned to buy. So I covered at once and went long.', '在那个价位，我卖空的股票正是我打算买的便宜货。于是我立刻回补，并转为做多。'),
      L('larry', 'My brokers paid fifteen points more than I\'d figured. Thirty-five points lost in one day. I was wiped out.', '经纪人买进的价格比我预计的高了十五点。一天亏了三十五点，我输光了。'),
      L('larry', 'I was dead right, and I lost every cent I had.', '我判断完全正确——却输掉了我的每一分钱。'),
    ] });
  }

  shot({ id: 'p02_lag', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例分析' }, title: { en: 'Trading on Prices That No Longer Exist', zh: '用已不存在的价格做决策' }, els: [
    { type: 'line', x: 70, y: 260, w: 1040, h: 555, xr: [0, 10], yr: [70, 115], yTicks: [80, 90, 100, 110], yLabel: ['Price (illustrative)', '价格（示意）'],
      series: [
        { pts: [[0, 110], [2, 106], [4, 100], [6, 97], [8, 95], [10, 94]], color: '#2f5d8a', label: ['Tape (lagging)', '纸带（滞后）'] },
        { pts: [[0, 108], [2, 96], [4, 81], [5, 79], [6, 86], [8, 96], [10, 99]], color: '#b8322a', label: ['Real floor price', '场内真实价格'], labelBelow: true, at: 1 },
      ],
      notes: [
        { x: 4, y: 100, at: 1, en: 'He sees 100 and sells', zh: '他看到100就卖', dx: 30, dy: -95, w: 230 },
        { x: 4, y: 81, at: 1, en: 'Filled ≈ 80', zh: '实际成交≈80', dx: -250, dy: 10, w: 190 },
        { x: 8, y: 96, at: 1, en: 'His buy orders: 15 points above his figure', zh: '买单：比预计高15点', dx: -330, dy: -170, w: 290 },
      ], illustrative: true },
    { type: 'bars', at: 1, x: 1150, y: 260, w: 700, h: 555, max: 40, vsize: 30, bars: [
      { v: 20, vl: '20 pts', en: 'Selling: fills vs tape', zh: '卖出：成交比纸带低', color: '#b8322a', at: 1 },
      { v: 15, vl: '15 pts', en: 'Buying: fills vs plan', zh: '买入：成交比预计高', color: '#b8322a', at: 1 },
      { v: 35, vl: '35 pts', en: 'Lost in one day', zh: '一天的损失', color: '#5b3a1e', at: 1 },
    ] },
  ], lines: [
    L('host', 'What happened? In a panic, the ticker falls far behind the floor. He was deciding on prices that no longer existed.', '发生了什么？恐慌中，行情机远远落后于场内。他是根据已经不存在的价格做决策。'),
    L('host', 'His sell orders lost about twenty points against the tape. His buy orders cost fifteen more than he figured. Thirty-five points.', '卖单比纸带价低了约二十点，买单又比他预计的高了十五点。合计三十五点。'),
    L('host', 'The same thing had beaten him at Fullerton\'s: the gap between printed and actual prices, now at its most violent.', '在富勒顿打败他的，正是同一样东西：打印价格与真实价格之间的落差，这次达到了最猛烈的程度。'),
    L('host', 'His conclusion, years later: tape reading alone is not enough. The game was to anticipate the big move, not bet on the next few quotes.', '多年后他的结论是：光会读盘是不够的。真正的功夫是预判大行情，而不是赌接下来几笔报价。'),
  ] });

  shot({ id: 'p02_limit', kind: 'info', tag: { en: 'LESSON', zh: '要点' }, title: { en: 'Why He Refused Limit Orders', zh: '他为什么不用限价单' }, els: [
    { type: 'table', x: 70, y: 265, w: 1780, size: 28, widths: [0.24, 0.38, 0.38], cols: [['', ''], ['Limit order', '限价单'], ['At the market (his way)', '市价单（他的做法）']], rows: [
      [['What it tries to beat', '想战胜什么'], ['A particular price', '某个特定价格'], ['The market', '市场本身']],
      [['When the ticker lags', '行情机滞后时'], ['The market gets away from you', '市场从你手边溜走'], ['You get in or out, at a cost', '一定能进出，但有代价']],
      [['What it really was for him', '对他来说意味着什么'], ['The old bucket-shop method, poorly adapted', '把老一套对赌行打法生搬硬套'], ['Taking his chances with the market', '在市场里承担应有的风险']],
    ], reveal: true, rowAt: [0, 1, 1] },
    { type: 'box', at: 2, x: 70, y: 640, w: 1780, h: 140, anchor: 'middle', color: '#f3c6c0', size: 32, en: 'But he kept trading in and out with "a modified but still defective method". By early fall, cleaned out again.', zh: '但他仍用一套"改良过却依然有缺陷的方法"进进出出。到初秋，他再次输光。' },
  ], lines: [
    L('larry', 'I never could trade with a limit. I\'m trying to beat the market, not a particular price. When I think I should sell, I sell.', '我从来没法用限价单交易。我要战胜的是市场，而不是某个特定价格。我认为该卖，就卖。'),
    L('host', 'For him, limit orders were just the bucket-shop method, poorly adapted. When he tried them, the market simply got away from him.', '对他来说，限价单不过是把对赌行的老办法生搬硬套。他一用，市场就从他手边溜走。'),
    L('host', 'So he kept trading in and out with a modified but still defective method. By early fall, he was cleaned out again.', '于是他继续用一套改良过却依然有缺陷的方法进进出出。到初秋，他再次输光。'),
  ] });

  shot({ id: 'p02_capital', kind: 'info', tag: { en: 'THE RIDE SO FAR', zh: '一路起伏' }, title: { en: 'His Money, Age 14 to 22', zh: '他的资金：14岁到22岁' }, els: [
    { type: 'timeline', x: 70, y: 265, w: 1780, h: 545, lsize: 20, vsize: 24, items: [
      { v: 3.12, vl: '+$3.12', en: 'Age 14: first trade', zh: '14岁：第一笔' },
      { v: 1000, vl: '$1,000', en: 'Age 15', zh: '15岁' },
      { v: 10000, vl: '$10,000', en: 'Age 20', zh: '20岁' },
      { v: 2500, vl: '$2,500', en: 'Age 21: to New York', zh: '21岁：去纽约' },
      { v: 0, vl: 'broke', en: 'Fullerton\'s, 6 months', zh: '富勒顿，六个月' },
      { v: 500, vl: '$500 loan', en: 'From Fullerton', zh: '向富勒顿借' },
      { v: 2800, vl: '+$2,800', en: 'St. Louis, 2 days', zh: '圣路易斯，两天' },
      { v: 50000, vl: '≈$50,000', en: '1901: N.P.', zh: '1901年：北太平洋', color: '#d9a441' },
      { v: 0, vl: '$0', en: 'May 9, 1901', zh: '1901年5月9日' },
      { v: 0, vl: '$0', en: 'Fall 1901: cleaned out again', zh: '1901年秋：再次输光', at: 1 },
    ] },
  ], lines: [
    L('host', 'Look at the ride so far, on a log scale. The peaks came from tape reading. The crashes came from a game he didn\'t yet understand.', '用对数刻度看看这一路起伏。高峰来自读盘，崩溃来自一场他还没弄懂的游戏。'),
    L('larry', 'I\'d been trading since fourteen. After several years I was back where I began. No, worse: I had habits that needed money.', '我从十四岁就开始交易。好几年过去，我又回到了起点。不，更糟：我已经养成了花钱的习惯。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p02_duel', kind: 'comic', panels: [
      P(a, { bg: 'night', chars: [ch('friend', a, 0.28, 0.95, { hat: 'top', hatColor: '#141414', expr: 'neutral', exprAt: { 3: 'frown' } }), ch('agent', a, 0.72, 0.95, { hat: 'none', mus: 'thin', expr: 'smile', flip: true, exprAt: { 3: 'shock' } })] }),
      P(b, { at: 4, bg: 'office', chars: [ch('larry', b, 0.5, 1.0, { expr: 'determined', pose: 'money', hy: 0.5 })] }),
    ], caps: [
      { x: 70, y: 730, w: 360, en: 'The duelist and his second', zh: '决斗者与他的副手' },
      { at: 4, x: 1005, y: 70, w: 460, en: 'Back your opinions with money.', zh: '用真金白银为判断买单。' },
    ],
    bubbles: [
      { at: 1, until: 1, x: 70, y: 80, w: 380, en: 'Are you a good shot?', zh: '你枪法好吗？', tx: 250, ty: 290 },
      { at: 2, until: 2, x: 440, y: 80, w: 470, en: 'I can snap the stem of a wineglass at twenty paces.', zh: '二十步外，我能打断酒杯的细脚。', tx: 660, ty: 290 },
      { at: 3, x: 70, y: 80, w: 520, en: 'But can you do it while the wineglass points a loaded pistol at your heart?', zh: '可要是那只酒杯正拿着上了膛的手枪对准你的心口呢？', tx: 250, ty: 290 },
    ],
    lines: [
      L('larry', 'Some people trade imaginary money to prove how right they are. It\'s like the old story of the man who was to fight a duel.', '有些人用想象中的钱做交易，来证明自己多么正确。这让我想起那个要去决斗的人的老故事。'),
      L('friend', 'Are you a good shot?', '你枪法好吗？', { who: { en: 'THE SECOND', zh: '副手' } }),
      L('agent', 'I can snap the stem of a wineglass at twenty paces.', '二十步外，我能打断酒杯的细脚。', { who: { en: 'THE DUELIST', zh: '决斗者' } }),
      L('friend', 'But can you do it while the wineglass is pointing a loaded pistol at your heart?', '可要是那只酒杯正拿着上了膛的手枪对准你的心口呢？', { who: { en: 'THE SECOND', zh: '副手' } }),
      L('larry', 'I must back my opinions with my money. Only losing money convinces me I\'m wrong.', '我必须拿钱为自己的判断下注。只有亏钱，才能让我相信自己错了。'),
    ] });
  }

  shot({ id: 'p02_right', kind: 'info', tag: { en: 'LESSON', zh: '要点' }, title: { en: 'The Right Side, and Your Own Judgment', zh: '正确的一边，与你自己的判断' }, els: [
    { type: 'quote', x: 160, y: 265, w: 1600, size: 42, zsize: 34, bottom: 500, en: 'There is only one side to the stock market; and it is not the bull side or the bear side, but the right side.', zh: '股市只有一边：不是多头那边，也不是空头那边，而是正确的那边。', src: 'Ch. III' },
    { type: 'cards', x: 70, y: 520, w: 1780, ch: 130, cols: 2, max: 28, items: [
      { at: 1, en: 'No tips. Buy on Smith\'s tip and you must sell on Smith\'s tip. What if Smith is away on holiday?', zh: '不听消息。按史密斯的消息买，就得按史密斯的消息卖。他要是去度假了呢？' },
      { at: 2, en: 'It took him five years to play intelligently enough to make big money when he was right.', zh: '他花了五年时间，才学会在判断正确时赚到大钱。' },
      { at: 3, en: 'Don\'t advance until you\'re sure you won\'t have to retreat.', zh: '在确信不必后撤之前，不要贸然前进。' },
      { at: 3, en: 'Limit your losses when wrong, but don\'t let that breed indecision.', zh: '错了就止损，但别因此变得优柔寡断。' },
    ] },
  ], lines: [
    L('larry', 'There is only one side to the stock market. Not the bull side or the bear side, but the right side.', '股市只有一边。不是多头那边，也不是空头那边，而是正确的那边。'),
    L('larry', 'That\'s why I don\'t believe in tips. If I buy on Smith\'s tip, I must sell on Smith\'s tip. Suppose Smith is away on holiday?', '所以我不信消息。按史密斯的消息买，就得按史密斯的消息卖。要是那时史密斯去度假了呢？'),
    L('larry', 'Nobody\'s tips can make me more money than my own judgment. It took me five years to play intelligently enough to make big money.', '谁的消息都不会比我自己的判断让我赚得更多。我花了五年，才学会聪明地交易、赚到大钱。'),
    L('host', 'And when wrong, limit the loss. But don\'t let that breed indecision.', '错了就要止损。但不要因此变得优柔寡断。'),
  ] });

  // ------------------------------------------------------------------ CHAPTER IV
  {
    const [a, b] = HALF;
    shot({ id: 'p02_home', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', chars: [ch('clerk', a, 0.28, 0.95, { expr: 'angry', pose: 'cross' }), ch('friend', a, 0.72, 0.95, { expr: 'shock', flip: true })] }),
      P(b, { at: 1, bg: 'office', chars: [ch('agent', b, 0.3, 0.95, { expr: 'grin', pose: 'point', hat: 'bowler' }), ch('larry', b, 0.74, 0.95, { expr: 'think', pose: 'chin', flip: true, exprAt: { 3: 'frown' } })] }),
    ], caps: [
      { x: 70, y: 730, w: 420, en: 'Chapter IV. Back home.', zh: '第四章。回到家乡。' },
      { at: 1, x: 1005, y: 730, w: 420, en: 'A hotel lobby: "Roberts"', zh: '酒店大堂："罗伯茨"' },
    ],
    bubbles: [
      { at: 0, x: 70, y: 80, w: 470, size: 26, zsize: 22, en: 'We\'re not taking any selling orders in St. Paul. Not from you.', zh: '圣保罗的卖单我们不接。你的不接。', tx: 260, ty: 290, kind: 'shout' },
      { at: 2, x: 1010, y: 70, w: 520, size: 26, zsize: 22, en: 'The biggest brokerage firm in the country! Branches in seventy-eight cities!', zh: '全国最大的经纪公司！78个城市有分行！', tx: 1250, ty: 290 },
    ],
    lines: [
      L('larry', 'Broke again, I went home. The shops that remembered me wouldn\'t let me trade, and a friend trading on my signals was soon shut out too.', '再次输光后，我回到家乡。认得我的对赌行不让我交易，替我照信号下单的朋友也很快被拒之门外。'),
      L('larry', 'In a hotel lobby I complained about rotten execution at the market. A friendly stranger named Roberts took me aside.', '在一家酒店大堂，我抱怨市价单成交太差。一个名叫罗伯茨的热心陌生人把我拉到一边。'),
      L('agent', 'I know the biggest brokerage firm in the country. Branches in seventy-eight cities, and memberships in every exchange, one way or another.', '我认识全国最大的经纪公司。七十八个城市有分行，各个交易所都有席位，明的暗的都有。', { who: { en: 'ROBERTS', zh: '罗伯茨' } }),
      L('larry', 'I knew he was touting for phony brokers: bucketeers who bucketed orders but dressed up as real brokers.', '我知道他是在替冒牌经纪商拉客。这些"对赌经纪商"私下对赌客户订单，却装扮成正规经纪行。'),
    ] });
  }

  shot({ id: 'p02_swindle', kind: 'info', tag: { en: 'HOW THEY FLEECED', zh: '骗术拆解' }, title: { en: 'Inside a Wire House', zh: '电报经纪行内幕' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, size: 24, widths: [0.18, 0.47, 0.35], cols: [['Trick', '手法'], ['How it worked', '怎么做'], ['Result', '结果']], rows: [
      [['Split tips', '对开消息'], ['600 telegrams say "buy" a stock; 600 others say "sell" the same stock', '600封电报叫人"买"某股，另外600封叫人"卖"同一只股'], ['Half the customers win on paper, for a while', '一半客户暂时有账面盈利']],
      [['The switch', '换股'], ['Next day: everyone is told to close out and jump into another stock', '第二天：通知所有人平仓，换到另一只股票'], ['Winners and losers alike are killed', '赢家输家一起被杀']],
      [['A genuine report', '真回报'], ['Trade, say, 1,000 shares through a real Exchange firm', '通过正规交易所会员行真实买卖比如1,000股'], ['A real report to show any doubter', '拿真回报给起疑的人看']],
      [['Discretionary pools', '全权委托'], ['Customers sign written authority; the firm bulls a stock on paper, then runs a drive', '客户书面授权；公司在账面上做多某股，然后来一次洗盘'], ['Shoestring margins wiped out, with no legal redress', '薄保证金被洗光，客户无法律追索']],
    ], reveal: true, rowAt: [0, 1, 3, 4], hl: [1] },
    { type: 'box', at: 5, x: 70, y: 700, w: 1780, h: 100, anchor: 'middle', color: '#f6d77a', size: 30, en: 'Old adage: "Copper your customers and grow rich." They didn\'t stop at plain bucketing.', zh: '老话说："跟客户对着赌，就能发财。"他们却不满足于单纯的对赌。' },
  ], lines: [
    L('host', 'How did wire houses fleece the public? First, split tips: six hundred telegrams said buy a stock, six hundred said sell it.', '电报经纪行怎么坑客户？第一招，对开消息：六百封电报叫人买某只股，另外六百封叫人卖同一只。'),
    L('host', 'The next day, everyone was told to close out and switch to another stock. That killed winners and losers alike.', '第二天，又通知所有人平仓、换到另一只股票。赢家输家一起被杀。'),
    L('host', 'The senior partner\'s reasoning: customers lose anyway. So take as much of their money as you can, then find a new crop.', '老板的逻辑是：客户反正会亏光。那就尽量多拿他们的钱，然后再找一批新的。'),
    L('host', 'They also traded some real shares through an Exchange house, just to wave a genuine report at any doubter.', '他们也会通过交易所会员行真实买卖一些股票，好拿一份真回报给起疑的人看。'),
    L('host', 'And discretionary pools: customers signed over trading authority, the firm bulled a stock on paper, then ran a drive and wiped them out.', '还有全权委托：客户签字授权，公司在账面上做多某股，然后来一次洗盘，把他们洗光。'),
    L('larry', 'Copper your customers and grow rich, goes the old saying. These people didn\'t stop at plain bucketing.', '老话说"跟客户对着赌，就能发财"。可这些人不满足于单纯的对赌。'),
  ] });

  shot({ id: 'p02_trick', kind: 'info', tag: { en: 'HOW IT WORKED', zh: '手法拆解' }, title: { en: 'Turning the Wire Houses\' Rules Against Them', zh: '用电报行自己的规则反制他们' }, els: [
    { type: 'line', x: 70, y: 260, w: 1000, h: 440, xr: [0, 10], yr: [-3, 3.6], yTicks: [0], yLabel: ['A dull, inactive stock', '一只冷门股'],
      xTicks: [[0.5, 'Morning', '上午'], [9.5, 'Close', '收盘']],
      series: [{ pts: [[0, 0], [1.5, 0], [2.5, -1.6], [4, -1.5], [6, -1.4], [7.5, -1.4], [8.5, 1.6], [10, 1.6]], color: '#5b3a1e', reveal: [0, 0, 2, 2, 2, 2, 3, 3] }],
      notes: [
        { x: 2.5, y: -1.6, at: 2, en: 'His real sale of 100 prints low = his buy price at 5 shops', zh: '真实卖出100股打出低价＝他在5家的买入价', dx: 40, dy: 25, w: 380 },
        { x: 8.5, y: 1.6, at: 3, en: 'Real buy-back: the price jumps', zh: '真实买回：价格跳升', dx: -340, dy: -20, w: 260 },
      ], illustrative: true },
    { type: 'cards', x: 1110, y: 260, w: 740, ch: 118, cols: 1, max: 25, items: [
      { at: 1, en: 'Buy 100 of a once-popular, now inactive stock at each of 5 wire houses. They fill at the next tape price.', zh: '在5家电报行各买100股一只曾经热门、如今冷清的股票。成交价＝纸带下一笔价格。' },
      { at: 2, en: 'Via the honest Exchange house: SELL 100 at the market, urgently. Net long 400 at a low price.', zh: '通过正规交易所会员行急速市价卖出100股。净多400股，价格很低。' },
      { at: 3, en: 'Just before the close: BUY the 100 back at any price. The thin stock jumps.', zh: '临近收盘：不计价买回100股。冷门股随即跳升。' },
      { at: 4, en: 'Sell the 500 bucketed shares at the jump. A point or two each: $600–800 per crack.', zh: '在高点卖出被对赌的500股。每家一两个点：每次净赚600–800美元。', color: '#cfe3c4' },
    ] },
    { type: 'box', at: 5, x: 70, y: 715, w: 1000, h: 95, anchor: 'middle', color: '#f3c6c0', size: 26, en: '⚠ This is market manipulation, illegal today.', zh: '⚠ 这是操纵市场，在今天属于违法行为。' },
  ], lines: [
    L('larry', 'I opened accounts with five wire houses, plus one honest firm wired to a Stock Exchange member. Their errors were always against me.', '我在五家电报行开了户，另外还有一家连着交易所会员的正规公司。电报行的账目差错总是对我不利。'),
    L('host', 'So he used their own rule, fills at the next printed price. Step one: buy a hundred of a dull, once-popular stock at each wire house.', '于是他利用他们自己的规则：按纸带下一笔价格成交。第一步：在每家电报行各买一百股一只曾经热门、如今冷清的股票。'),
    L('host', 'Step two: through the honest firm, sell a hundred at the market, urgently. In a thin stock that prints low, and sets his buying price everywhere.', '第二步：通过正规公司急速市价卖出一百股。冷门股一砸就打出低价，这就成了他在各家的买入价。'),
    L('host', 'Step three: just before the close, buy that hundred back at any price. The urgent order jumps the thin stock up.', '第三步：临近收盘，不计价格买回那一百股。这笔急单让冷门股跳升。'),
    L('host', 'Step four: sell the five hundred bucketed shares into the jump. Seldom more than a point or two: six to eight hundred dollars a crack.', '第四步：在跳升时卖出被对赌的五百股。很少超过一两个点，每次赚六到八百美元。'),
    L('host', 'Be clear: this is market manipulation, illegal today. Its value here is showing how easily thin markets and printed prices can be gamed.', '必须说清楚：这是操纵市场，如今属于违法。它在这里的价值，是让你看清冷门股和打印价格多么容易被利用。'),
  ] });

  {
    const [a, b] = HALF;
    const car = `<g transform="translate(150 470)"><rect x="40" y="0" width="520" height="110" rx="20" fill="#7a1f1a" stroke="#16130f" stroke-width="6"/><path d="M 140 0 L 190 -90 L 400 -90 L 440 0 Z" fill="#2a2420" stroke="#16130f" stroke-width="6"/><rect x="0" y="40" width="60" height="40" fill="#d9a441" stroke="#16130f" stroke-width="5"/><circle cx="150" cy="120" r="62" fill="#2a2420" stroke="#16130f" stroke-width="6"/><circle cx="150" cy="120" r="24" fill="#d9a441" stroke="#16130f" stroke-width="5"/><circle cx="460" cy="120" r="62" fill="#2a2420" stroke="#16130f" stroke-width="6"/><circle cx="460" cy="120" r="24" fill="#d9a441" stroke="#16130f" stroke-width="5"/></g>`;
    shot({ id: 'p02_fictitious', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', chars: [ch('agent', a, 0.28, 0.95, { hat: 'none', expr: 'angry', pose: 'fist', exprAt: { 3: 'sad' } }), ch('larry', a, 0.74, 0.95, { expr: 'determined', flip: true, exprAt: { 3: 'smile' } })] }),
      P(b, { at: 4, bg: 'street', bgo: { crowd: false }, props: [{ t: 'svg', svg: car }], chars: [ch('larry', b, 0.5, 0.75, { hat: 'boater', hatColor: '#e0c27a', expr: 'grin', hy: 0.3 })] }),
    ], caps: [
      { x: 70, y: 730, w: 440, en: 'The day of the 10-point swing', zh: '那天，股价摆动了10点' },
      { at: 4, x: 1005, y: 70, w: 520, en: 'Over a year: a fair-sized roll, and an automobile.', zh: '一年多：攒下一笔不小的本钱，还买了辆汽车。' },
    ],
    bubbles: [
      { at: 1, until: 1, x: 70, y: 80, w: 500, en: 'That was a fictitious market! We won\'t pay you a cent!', zh: '那是虚假行情！一分钱都不给你！', tx: 250, ty: 300, kind: 'shout' },
      { at: 2, until: 3, x: 400, y: 80, w: 520, en: 'You let me in. Now you\'ve got to let me out.', zh: '你让我进了场，现在就得让我出场。', tx: 660, ty: 300 },
    ],
    sfx: [{ at: 3, x: 480, y: 560, t: 'PAID', zh: '照付', size: 120, color: '#d9a441', rot: -8 }],
    lines: [
      L('larry', 'One day the trick ran far beyond my plan: a ten-point swing. And at one broker I happened to hold two hundred shares.', '有一天，这招远远超出了我的预期：价格摆动了十点。而且我在其中一家碰巧持有两百股。'),
      L('agent', 'That was a fictitious market for that stock, and we won\'t pay you a cent!', '那是虚假行情，我们一分钱都不给你！', { who: { en: 'WIRE-HOUSE MANAGER', zh: '电报行经理' } }),
      L('larry', 'It wasn\'t fictitious when you accepted my order to buy. You let me in; now you\'ve got to let me out.', '你接我买单的时候，可不是虚假行情。你让我进了场，现在就得让我出场。'),
      L('larry', 'He blustered, but he paid. They all paid. But that jump ended the game; now they watched for their own trick.', '他吵了一阵，还是付了钱。各家都付了。但那次跳升也让这游戏到头了，他们开始提防自己的老把戏。'),
      L('larry', 'I\'d been at it over a year. I lived well, bought an automobile, and still saved a fair-sized roll. Time for New York.', '我干了一年多，日子过得不错，买了辆汽车，还攒下一笔不小的本钱。该回纽约了。'),
    ] });
  }

  {
    const [a, b] = HALF;
    shot({ id: 'p02_newhaven', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', chars: [ch('agent', a, 0.24, 0.9, { hat: 'none', mus: 'walrus', expr: 'grin', pose: 'up', hair: '#5a4a3a' }), ch('larry', a, 0.58, 0.85, { expr: 'smile', flip: true, hat: 'boater', hatColor: '#e0c27a' }), ch('friend', a, 0.84, 0.85, { expr: 'grin', flip: true })] }),
      P(b, { at: 2, bg: 'bucketshop', chars: [ch('agent', b, 0.5, 1.0, { hat: 'none', mus: 'walrus', expr: 'frown', pose: 'cross', hair: '#5a4a3a', hy: 0.5, exprAt: { 3: 'shout' } })] }),
    ], caps: [
      { x: 70, y: 730, w: 470, en: 'New Haven: "a couple of Yale boys"', zh: '纽黑文："两个耶鲁学生"' },
    ],
    bubbles: [
      { at: 3, x: 1010, y: 70, w: 560, en: 'Students? You two are the biggest sharks in the United States of America!', zh: '学生？你们俩是全美国最大的鲨鱼！', tx: 1400, ty: 280, kind: 'shout' },
    ],
    sfx: [
      { at: 1, x: 500, y: 200, t: '≈+$1,500', zh: '一个上午', size: 70, color: '#d9a441', font: 'cond' },
      { at: 1, x: 760, y: 360, t: '+$500', zh: '空500股糖业', size: 56, color: '#d9a441', rot: 6, font: 'cond' },
    ],
    lines: [
      L('larry', 'Driving to New York with a trader friend, we stopped at a New Haven bucket shop. The orator running it took us for Yale boys.', '我和一位交易员朋友开车去纽约，途中在纽黑文一家对赌行停下。那位口若悬河的经理把我们当成了耶鲁学生。'),
      L('larry', 'One morning I cleaned up within a few dollars of fifteen hundred. The next, I sold five hundred Sugar short and made five hundred more.', '一个上午我就赚了将近一千五百美元。第二天，我卖空五百股糖业，又赚了五百。'),
      L('larry', 'When I asked to sell Steel, he refused, and delivered his verdict.', '我再要卖空钢铁股时，他拒绝了，并给出了他的结论。'),
      L('agent', 'Students? You two are the biggest sharks in the United States of America!', '学生？你们俩是全美国最大的鲨鱼！', { who: { en: 'THE NEW HAVEN MANAGER', zh: '纽黑文的经理' } }),
    ] });
  }

  shot({ id: 'p02_postmortem', kind: 'info', tag: { en: 'POST-MORTEM', zh: '自我复盘' }, title: { en: 'He Knew Why He Had Lost, Mostly', zh: '他大致知道自己为什么输' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, size: 26, widths: [0.22, 0.18, 0.6], cols: [['When', '何时'], ['Lost', '损失'], ['Why, in his own diagnosis', '他自己的诊断']], rows: [
      [['Age 20', '20岁'], ['His first $10,000', '第一个一万美元'], ['Traded out of season. When his system gave no signal, he gambled. He hoped to win instead of knowing he ought to win on form.', '不合时宜地交易。方法没给信号时，他就去赌。他是在希望赢，而不是确知按形态应该赢。']],
      [['About 22: May 9, 1901', '约22岁：1901年5月9日'], ['≈$50,000', '约五万美元'], ['The laggard tape, and the unprecedented violence of that day.', '滞后的纸带，以及那天前所未有的剧烈波动。']],
      [['After St. Louis; after May 9', '圣路易斯之后；5月9日之后'], ['Again', '再次亏损'], ['He did not yet know why. He had theories; he needed practice.', '他还不知道原因。他有一些理论，但需要实践。']],
    ], reveal: true, rowAt: [0, 2, 3], hl: [0] },
    { type: 'quote', at: 4, x: 160, y: 615, w: 1600, size: 36, zsize: 30, en: 'There is nothing like losing all you have in the world for teaching you what not to do.', zh: '没有什么比输光你在世上的一切，更能教会你什么不该做。', src: 'Ch. IV' },
  ], lines: [
    L('larry', 'On my way back to Wall Street, I studied my defeats. At twenty I lost my first ten thousand by trading out of season.', '在重返华尔街的路上，我研究自己的失败。二十岁时我输掉第一个一万美元，是因为不合时宜地交易。'),
    L('larry', 'When my system gave no signal, I went in and gambled. I hoped to win, instead of knowing I ought to win on form.', '方法没给信号时，我就进场去赌。我是希望赢，而不是确知按形态应该赢。'),
    L('larry', 'At about twenty-two I lost fifty thousand on May ninth, to the laggard tape and the violence of that day.', '大约二十二岁时，我在5月9日输掉五万美元，败给了滞后的纸带和那天的剧烈波动。'),
    L('larry', 'Other losses I couldn\'t yet explain. I had theories. I needed practice.', '其他几次亏损，我当时还解释不了。我有一些理论，但需要实践。'),
    L('larry', 'There is nothing like losing all you have for teaching you what not to do. Then you begin to learn what to do to win.', '没有什么比输光一切更能教会你什么不该做。知道了不该做什么，你才开始学会怎样去赢。'),
  ] });

  shot({ id: 'p02_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode Two Teaches', zh: '第二集的要点' }, els: [
    { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { at: 0, en: 'There is only one side to the market: the right side.', zh: '市场只有一边：正确的一边。' },
      { at: 0, en: 'Real fills are not tape prices. In a panic the gap can be 20 points.', zh: '真实成交不等于纸带价格。恐慌中落差可达20点。' },
      { at: 0, en: 'Anticipate the big move. Don\'t bet on the next few quotations.', zh: '预判大行情，别赌接下来几笔报价。' },
      { at: 1, en: 'Trade on your own judgment, never on tips.', zh: '靠自己的判断交易，绝不靠消息。' },
      { at: 1, en: 'Paper trading proves nothing. Only real money tests you.', zh: '纸上交易什么也证明不了。只有真金白银才能检验你。' },
      { at: 1, en: 'Name the cause of every loss. Losing teaches what not to do.', zh: '说清每一次亏损的原因。亏损教会你什么不该做。' },
    ] },
  ], lines: [
    L('host', 'In brief: be on the right side, expect real fills to differ from the tape, and play for the big move, not the next quote.', '小结：站在正确的一边，预料真实成交会和纸带不同，做大行情，而不是下一笔报价。'),
    L('host', 'Trust your own judgment, not tips or paper profits. And make every loss tell you its cause.', '相信自己的判断，不信消息，也不信纸上利润。并且让每一次亏损都说出它的原因。'),
  ] });

  shot({ id: 'p02_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistakes of Chapters III – IV', zh: '第三、四章的错误' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, size: 23, widths: [0.3, 0.37, 0.33], cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Day one at Harding\'s: scalping as in a bucket shop', '在哈丁的第一天：照对赌行的方式抢短线'], ['Real fills differ from the tape; small gains vanish', '真实成交与纸带不同，小利润被吃掉'], ['Learn the new market\'s mechanics first', '先弄懂新市场的机制']],
      [['Bearish on "A.O.T." too early in 1901', '1901年过早看空"随便什么股"'], ['An opinion with no timing; the boom ran on', '有观点却没有时机，牛市继续'], ['Only one side: the right side', '只有一边：正确的一边']],
      [['May 9: market orders on a lagging tape', '5月9日：照着滞后的纸带下市价单'], ['The panic tape was 20 points behind; he reversed at once', '恐慌中纸带落后20点；他立刻反手'], ['In violent markets, the printed price is history', '剧烈行情中，打印价格只是历史']],
      [['Trading out of season, at 20', '20岁时不合时宜地交易'], ['He gambled when his system gave no signal', '方法没信号时他就去赌'], ['Trade only on form; otherwise stay out', '只按形态交易，否则空仓']],
      [['Keeping a defective method because it paid some of the time', '因为偶尔赚钱而保留有缺陷的方法'], ['Winnings and good living delayed finding the flaw', '盈利和享受推迟了他找出毛病'], ['Find the exact cause of a loss before trading on', '先找出亏损的确切原因，再继续交易']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 1] },
  ], lines: [
    L('host', 'The mistakes of chapters three and four, with the cause and the rule for each.', '第三、四章的错误，以及各自的原因和规则。'),
    L('host', 'He even notes that making some money slowed his learning. A method that pays sometimes can hide its flaw for years.', '他甚至说，偶尔赚钱反而拖慢了他的学习。时灵时不灵的方法，可能把毛病藏上好几年。'),
  ] });
};
