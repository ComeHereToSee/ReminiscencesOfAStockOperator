// Full version, episode 2: Wall Street Is Not a Bucket Shop (Book ch. III–IV, c. 1898–1902).
// Every number is from the book; computed figures (1,100 ÷ 1,100, +500 − 100 = +400, 20 + 15 = 35) are arithmetic on the book's numbers.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(2, 'Reminiscences_E02_Wall_Street_Is_Not_a_Bucket_Shop');
  chapter('Chapter III · The Right Side', '第三章 · 正确的一边');
  music('rag');
  title({ id: 'e02_title', kicker: 'EPISODE 2 · 第二集', en: 'Wall Street Is Not a Bucket Shop', zh: '华尔街不是对赌行', size: 100, color: '#2f5d8a',
    sub: ['Book chapters III–IV · c. 1898–1902', '原著第三至四章 · 约1898–1902年'],
    lines: [N('Episode two. Wall Street is not a bucket shop.', '第二集：华尔街不是对赌行。')] });

  // ---- the duelist: paper profits prove nothing ----
  shot({ id: 'e02_duel', set: 'night', trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'second', z: 1.3, dur: 1 }, { t: 'L2', on: 'duelist', z: 1.3, dur: 1 }, { t: 'L3', on: 'second', z: 1.45, dur: 0.8 },
      { t: 'L4', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'generic', key: 'duelist', x: 700, y: 890, s: 1.15, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L2', pose: 'hips', expr: 'smile' }, { t: 'L3@pistol', pose: 'idle', expr: 'shock' }, { t: 'L4', pose: 'despair', expr: 'worry' }] },
      { id: 'friend', key: 'second', x: 1250, y: 890, s: 1.15, flip: true, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L3', pose: 'point', expr: 'sly' }, { t: 'L4', pose: 'cross', expr: 'neutral' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'An old story from the book: the duelist and his second.', zh: '书中的一个老故事：决斗者和他的副手。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1040, y: 80, w: 420, en: 'Are you a good shot?', zh: '你枪法好吗？', tx: 1250, ty: 602 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 440, y: 70, w: 520, en: 'I can snap the stem of a wineglass at twenty paces.', zh: '二十步外，我能打断酒杯的细脚。', tx: 700, ty: 602 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 940, y: 60, w: 620, en: 'But can you do it while the wineglass points a loaded pistol at your heart?', zh: '可要是那只酒杯正拿着上了膛的手枪对准你的心口，你还打得断吗？', tx: 1250, ty: 602 },
      { type: 'note', at: 'L4', x: 560, y: 100, w: 800, h: 150, size: 32, align: 'center', fill: '#f6d77a', anim: 'pop',
        en: 'Paper trading proves nothing. Only real money tests you.', zh: '纸上交易证明不了什么。只有真金白银才能检验你。' }],
    lines: [
      N('Some people trade imaginary money to prove how right they are. It\'s like the man who was going to fight a duel.', '有些人用假想的钱交易，来证明自己多么正确。这让我想起那个要去决斗的人。'),
      L('friend', 'Are you a good shot?', '你枪法好吗？', { speak: 'second' }),
      L('trader', 'I can snap the stem of a wineglass at twenty paces.', '二十步外，我能打断酒杯的细脚。', { speak: 'duelist' }),
      L('friend', 'But can you snap it while the wineglass is pointing a loaded pistol straight at your heart?', '可要是那只酒杯正拿着上了膛的手枪对准你的心口，你还打得断吗？', { speak: 'second' }),
      N('So I back my opinions with money. Only losing money convinces me I\'m wrong.', '所以我用钱来支持我的观点。只有亏钱才能让我相信自己错了。'),
    ] });

  lesson(h, { id: 'e02_rightside', tag: ['LESSON · 教训', '正确的一边与自己的判断'], title: ['The Right Side, and Your Own Judgment', '正确的一边，与你自己的判断'],
    gest: ['pointUp', 'explain', 'explainR', 'relaxed'],
    items: [
      { type: 'note', at: 'L0', x: 470, y: 220, w: 1420, h: 160, size: 34, align: 'center', fill: '#f6d77a', anim: 'pop',
        en: '"There is only one side to the stock market: not the bull side or the bear side, but the right side."', zh: '"股市只有一边：不是多头那边，也不是空头那边，而是正确的那边。"' },
      { type: 'flow', at: 'L1', x: 470, y: 410, w: 1000, bh: 180, gap: 50, size: 28, nodes: [
        { en: 'Buy on Smith\'s tip', zh: '听史密斯的消息买入', at: 'L1@Smith' },
        { en: 'Must sell on Smith\'s tip', zh: '也得听他的消息卖出', at: 'L1@sell' },
        { en: 'Smith is on holiday. Now what?', zh: '史密斯去度假了。怎么办？', at: 'L1@holiday', color: '#f3c6c0' }] },
      { type: 'counter', at: 'L3@five', x: 1690, y: 480, from: 0, to: 5, suffix: ' years', size: 100, dur: 1.2, label: ['to play it intelligently', '才学会聪明地玩'] },
      { type: 'rule', at: 'L2', x: 470, y: 630, w: 1420, h: 170, n: '!', size: 32, tag: '#b3302a',
        en: 'Don\'t advance until you\'re sure you won\'t have to retreat. Limit losses, but without indecision.', zh: '在确信不必撤退之前不要前进。要限制亏损，但不能因此犹豫不决。' }],
    lines: [
      N('There is only one side to the stock market. Not the bull side or the bear side, but the right side.', '股市只有一边。不是多头那边，也不是空头那边，而是正确的那边。'),
      N('So, no tips. If I buy on Smith\'s tip, I must sell on Smith\'s tip. Suppose Smith is on holiday?', '所以，不听消息。如果我听史密斯的消息买入，就得听他的消息卖出。万一那时史密斯去度假了呢？'),
      N('Don\'t advance until you\'re sure you won\'t have to retreat. Limit your losses, but don\'t let that breed indecision.', '在确信不必撤退之前，不要前进。要限制亏损，但别因此变得犹豫不决。'),
      N('Even so, it took me five years to learn to make big money when I was right.', '即便如此，我也花了五年，才学会在判断正确时赚到大钱。'),
    ] });

  // ---- first day at a real broker ----
  shot({ id: 'e02_harding', set: 'office', trans: 'whip', music: 'rag',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'MANHATTAN', 'ST. PAUL', 'T.C.&I.'], ['134¼', '72⅛', '110½', '121', '58¼'], ['134', '72', '110⅜', '120¾', '58']],
      boardSeq: [{ t: 'L1', r: 1, c: 1, v: '72⅜' }, { t: 'L1@sold', r: 1, c: 3, v: '121¼' }, { t: 'L2', r: 1, c: 0, v: '133⅞' }, { t: 'L2@lost', r: 1, c: 2, v: '110⅛' }] },
    cam: [{ t: 0, x: 960, y: 480, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L2', x: 1000, y: 500, z: 1.05, dur: 1 }],
    cast: [{ id: 'larry', x: 820, y: 890, s: 1.2, pose: 'hips', expr: 'smile',
        acts: [{ t: 'L1', pose: 'point', expr: 'grin' }, { t: 'L2@lost', pose: 'chin', expr: 'worry' }, { t: 'L3', pose: 'shrug', expr: 'think' }] },
      { id: 'officeboy', x: 1450, y: 900, s: 1.05, flip: true, pose: 'pointUp', expr: 'neutral', lookY: -1, acts: [{ t: 'L2', pose: 'write', lookY: 0 }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'New York, day one · Harding Brothers, members of the Stock Exchange', zh: '纽约第一天 · 哈丁兄弟行，证券交易所会员' },
      { type: 'note', at: 'L1@84', x: 80, y: 110, w: 520, h: 130, size: 30, fill: '#cfe3c4', anim: 'slideL', en: 'Bought 100 @ 84 → sold @ 85: +1 point', zh: '84买入100股→85卖出：赚1点' },
      { type: 'note', at: 'L2@lost', x: 80, y: 270, w: 520, h: 190, size: 29, fill: '#f3c6c0', anim: 'slideL',
        en: '$1,100 ÷ 1,100 shares = $1 a share: a full point lost, on average.', zh: '1,100美元÷1,100股＝每股1美元：平均每股亏了整整1个点。' },
      { type: 'counter', at: 'L2@lost', x: 1560, y: 290, from: 2500, to: 1400, prefix: '$', size: 96, dur: 1.6, color: '#b3302a', label: ['his stake after two hours', '两小时后的本金'] }],
    lines: [
      N('Back to my first day in New York. By one o\'clock I had an account at Harding Brothers, members of the Stock Exchange.', '回到我在纽约的第一天。不到下午一点，我就在证券交易所会员哈丁兄弟行开好了户。'),
      N('Same board, same ticker. I bought a hundred at 84 and sold at 85 within half an hour.', '一样的报价板，一样的行情机。我在84买进一百股，不到半小时就在85卖出。'),
      N('In two hours I traded eleven hundred shares, in and out, and lost exactly eleven hundred dollars: nearly half my stake.', '两个小时里，我进进出出做了一千一百股，结果正好亏了一千一百美元：将近一半本金。'),
      N('In the old Cosmopolitan I\'d have come out ahead. Here the ticker didn\'t help as it should.', '要是在老"大都会"，同样的操作我会赚钱。在这里，行情机却不像该有的那样帮我。'),
    ] });

  // ---- the 1901 boom ----
  photo({ id: 'e02_boom', src: `${PD}/nyse_exterior_c1904_detroit.jpg`, credit: 'New York Stock Exchange, c.1904 · Detroit Publishing Co. (public domain)', music: 'rag',
    cap: ['The New York Stock Exchange, around 1904.', '纽约证券交易所，约1904年。'],
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 14, x: 930, y: 500, z: 1.15 }],
    items: [
      { type: 'bars', screen: true, at: 'L0', until: 'L1@Keene', x: 1240, y: 250, w: 620, h: 520, title: ['Shares traded on a big day', '大日子的成交量'], max: 3000000, vsize: 30,
        bars: [{ v: 250000, vl: '250,000', en: 'old boasts', zh: '过去的夸口', at: 'L0@quarter', color: '#9a9182' }, { v: 3000000, vl: '3,000,000', en: '1901', zh: '1901年', at: 'L0@three', color: '#2f6b3d' }] },
      { type: 'note', screen: true, at: 'L1', x: 60, y: 560, w: 780, h: 250, size: 28, fill: '#efe3c4', anim: 'slideU',
        en: 'High rollers: John W. Gates ("Bet-you-a-million"), Drake, Loyal Smith · the Reid-Leeds-Moore crowd · Schwab, Frick, Phipps',
        zh: '豪客云集：约翰·W·盖茨（"赌你一百万"）、德雷克、洛亚尔·史密斯 · 里德-利兹-穆尔集团 · 施瓦布、弗里克、菲普斯' },
      { type: 'photo', screen: true, at: 'L1@Keene', until: 'L2', x: 1360, y: 230, w: 420, h: 440, rot: 3, src: `${PD}/portrait_james_r_keene_1901_worldswork.jpg`, en: 'James R. Keene', zh: '詹姆斯·R·基恩' },
      { type: 'counter', screen: true, panel: true, at: 'L2', x: 1560, y: 400, from: 0, to: 100000, suffix: ' sh', size: 90, dur: 1.4, label: ['sold by one broker in minutes', '一位经纪人几分钟内卖出'] }],
    lines: [
      N('Then came the boom of 1901. Wall Street used to brag of quarter-million-share days. In 1901 we had a three-million-share day.', '接着是1901年的大繁荣。华尔街过去夸口的是日成交二十五万股，1901年却出现了日成交三百万股。'),
      N('The steel crowd came to town, John W. Gates of Bet-you-a-million fame among them. Keene made a market for U.S. Steel.', '钢铁大亨们涌进城来，其中就有以"赌你一百万"闻名的约翰·W·盖茨。基恩为美国钢铁的股票做市。'),
      N('One broker sold a hundred thousand shares in a few minutes. Everybody was making money.', '一位经纪人几分钟内就卖出了十万股。人人都在赚钱。'),
    ] });

  lesson(h, { id: 'e02_np', tag: ['CASE STUDY · 1901', '案例 · 1901年'], title: ['Wrong Too Early, Right on One Stock', '整体看空太早，单只股票看对了'],
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 960, h: 610, xr: [0, 10], yr: [75, 115], yTicks: [80, 90, 100, 110], illustrative: true, cursorFmt: 'int',
        title: ['Northern Pacific common, 1901 (entry = 110 − 30)', '北太平洋普通股，1901年（买入价＝110−30）'],
        series: [{ pts: [[0, 80], [2, 85], [3, 83.5], [5, 92], [6, 90], [8, 102], [9, 106], [10, 110]], color: '#2f5d8a', draw: [['L1', 3], ['L1@held', 5], ['L2', 7]] }],
        marks: [{ x: 0, y: 80, at: 'L1@held', en: 'Long 1,000 near 80', zh: '约80做多1,000股', dx: 0, dy: -200, w: 230 },
          { x: 10, y: 110, at: 'L2@grabbed', en: 'Sold near 110: +30 pts', zh: '约110卖出：赚30点', dx: -420, dy: -50, w: 250, fill: '#cfe3c4' }],
        pnl: { entry: 80, shares: 1000, side: 'long', at: 'L1@held', exitAt: 'L2@grabbed+0.8', exit: 110, x: 560, y: 300 } },
      { type: 'note', at: 'L0', x: 1460, y: 220, w: 430, h: 240, size: 29, fill: '#f3c6c0', anim: 'slideU',
        en: 'Bearish too early on "A.O.T.", Any Old Thing: every short lost money.', zh: '对"随便什么股"过早看空：每次做空都亏钱。' },
      { type: 'counter', at: 'L2@fifty', x: 1675, y: 560, from: 0, to: 50000, prefix: '≈$', size: 80, dur: 1.4, color: '#2f6b3d', label: ['his balance', '他的账户余额'] },
      { type: 'note', at: 'L2e', x: 1460, y: 670, w: 430, h: 160, size: 28, fill: '#cfe3c4', anim: 'pop',
        en: 'General opinion: early. The tape on one stock: right.', zh: '整体判断：太早。单只股票的纸带：正确。' }],
    lines: [
      N('I knew the crazy buying of Any Old Thing had to end, and I got bearish too early. Every time I sold, I lost money.', '我知道，对"随便什么股"的疯狂买入总有尽头，于是过早地看空了。每次卖空都亏钱。'),
      N('But Northern Pacific kept acting as if it would go higher. I held a thousand shares against the advice of everybody in the office.', '但北太平洋的走势一直像是还要涨。我不顾营业部里所有人的劝告，持有一千股。'),
      N('Near 110 I had thirty points profit, and I grabbed it. My balance: nearly fifty thousand dollars, the most I\'d ever had.', '涨到110附近时，我有了三十个点的利润，立刻落袋为安。账户里有了将近五万美元，是我有生以来最多的一次。'),
    ] });

  shot({ id: 'e02_corner', set: 'dark', trans: 'dip', music: 'tense', cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 540, z: 1.06 }],
    items: [
      { type: 'text', at: 0.2, x: 960, y: 40, size: 50, font: 'serif', fill: '#f1ead6', zfill: '#f6d77a', en: 'May 1901: the fight for Northern Pacific', zh: '1901年5月：北太平洋铁路控制权之争' },
      { type: 'photo', at: 'L0@Harriman', x: 130, y: 190, w: 400, h: 380, rot: -3, src: `${PD}/portrait_eh_harriman_1908_bain.jpg`, en: 'E. H. Harriman', zh: '哈里曼' },
      { type: 'photo', at: 'L0@Morgan', x: 760, y: 190, w: 400, h: 380, rot: 2, src: `${PD}/portrait_jp_morgan_1902.jpg`, en: 'J. P. Morgan', zh: 'J. P. 摩根' },
      { type: 'photo', at: 'L0@Keene', x: 1390, y: 190, w: 400, h: 380, rot: -2, src: `${PD}/portrait_james_r_keene_1901_worldswork.jpg`, en: 'James R. Keene', zh: '詹姆斯·R·基恩' },
      { type: 'note', at: 'L1@battle', x: 260, y: 690, w: 1400, h: 120, size: 28, fill: '#efe3c4', anim: 'slideU',
        en: 'Historical note: on May 9 N.P. traded as high as $1,000. Short sellers dumped everything else to raise cash.', zh: '历史注：5月9日北太平洋一度涨到1,000美元。卖空者为筹现金抛售其他一切股票。' },
      { type: 'text', screen: true, at: 0.3, x: 1880, y: 1000, align: 'right', font: 'cond', size: 20, weight: 500, fill: '#e8dcc0',
        en: 'Harriman: Bain News Service · Morgan: c.1902 · Keene: The World\'s Work, 1901 (all public domain)' }],
    lines: [
      N('We know now that Harriman\'s crowd was quietly buying Northern Pacific. The Morgan people had Keene buy too, and his broker took a hundred thousand shares.', '后来我们才知道，哈里曼一伙一直在悄悄吸纳北太平洋。摩根一方也让基恩买入，他的经纪人一口气吃进了十万股。'),
      N('The famous corner followed. After the close on May 8, 1901, the whole world knew that a battle of financial giants was on.', '著名的逼空随之而来。1901年5月8日收盘后，全世界都知道一场金融巨头之战已经打响。'),
    ] });

  // ---- May 9, 1901 ----
  shot({ id: 'e02_may9', set: 'office', trans: 'flash', music: 'tense',
    setOpts: { crowd: 6, time: 10.0, board: [['N. PAC', 'UNION PAC', 'STEEL', 'ST. PAUL', 'SUGAR'], ['160', '110', '46', '170', '145'], ['155', '108', '45', '168', '144']],
      boardSeq: [{ t: 'L2@boiled', r: 1, c: 0, v: '300' }, { t: 'L2@boiled+0.4', r: 1, c: 1, v: '90' }, { t: 'L2@boiled+0.8', r: 1, c: 2, v: '32' }, { t: 'L2@orders', r: 1, c: 3, v: '140' },
        { t: 'L2@orders+0.4', r: 1, c: 4, v: '125' }, { t: 'L3', r: 1, c: 0, v: '700' }] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0', on: 'larry', z: 1.3, dur: 1.5 }, { t: 'L2', x: 960, y: 420, z: 1.15, dur: 1 }, { t: 'L3', on: 'larry', z: 1.5, dur: 1.2 }],
    cast: [{ id: 'larry', x: 760, y: 890, s: 1.2, pose: 'hips', expr: 'determined',
        acts: [{ t: 'L1', pose: 'explain', expr: 'sly' }, { t: 'L2@orders', pose: 'point', expr: 'shout' }, { t: 'L3@lost', pose: 'despair', expr: 'shock' }] },
      { id: 'clerk', x: 1300, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral', prop: { t: 'phone' },
        acts: [{ t: 'L2@orders', pose: 'phone', expr: 'worry' }, { t: 'L3', pose: 'despair', expr: 'shock' }] }],
    items: [
      { type: 'counter', at: 'L0@fifty', until: 'L3@lost', x: 1560, y: 280, from: 0, to: 50000, prefix: '≈$', size: 90, dur: 1.4, label: ['cash, no stocks', '现金，没有持股'] },
      { type: 'counter', at: 'L3@lost', x: 1560, y: 280, from: 50000, to: 0, prefix: '$', size: 96, dur: 1.4, color: '#b3302a', label: ['his account, by the end of May 9', '5月9日结束时的账户'] },
      { type: 'bubble', at: 'L2@orders', until: 'L3', x: 480, y: 80, w: 420, kind: 'shout', en: 'Sell! At the market!', zh: '卖！按市价！', tx: 760, ty: 590 }],
    lines: [
      N('May ninth: I had nearly fifty thousand dollars in cash and no stocks. I knew what was coming: an awful break, then bargains.', '5月9日：我手里有将近五万美元现金，没有持股。我知道接下来会发生什么：一场可怕的暴跌，然后是遍地便宜货。'),
      N('Sell short into the break, then buy the bargains for the quick recovery. Big money, and sure money.', '在暴跌中卖空，再买进便宜货等待快速反弹。既是大钱，又是稳钱。'),
      N('The market boiled, as I expected. I sent in a lot of selling orders, at the market.', '市场果然如我所料地沸腾了。我按市价下了一大堆卖单。'),
      N('Everything happened as I had foreseen. I was dead right, and I lost every cent I had.', '一切都如我所料。我的判断完全正确，却输掉了每一分钱。'),
    ] });

  lesson(h, { id: 'e02_lag', tag: ['CASE STUDY · MAY 9, 1901', '案例 · 1901年5月9日'], title: ['Trading on Prices That No Longer Exist', '按已经不存在的价格交易'], music: 'tense',
    gest: ['explain', 'point', 'despair', 'explainR'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 610, xr: [0, 10], yr: [70, 118], yTicks: [80, 90, 100, 110], illustrative: true, cursor: false,
        xTicks: [[0, 'prev. close', '前收盘'], [5, 'midday', '中午'], [10, 'close', '收盘']], title: ['A typical stock that day', '当天一只典型股票'],
        hlines: [{ v: 112, at: 'L1', color: '#6d665c', en: 'previous close', zh: '前一日收盘', below: true }],
        series: [
          { pts: [[0, 112], [1.5, 100], [3, 90], [4, 81], [5, 79], [6, 86], [7, 95], [8.5, 97], [10, 98]], color: '#b3302a', label: ['Real price on the floor', '场内真实价格'], draw: [['L0', 4], ['L1', 5], ['L1@covered', 7], ['L2', 8]] },
          { pts: [[0, 112], [1.5, 106], [3, 100], [4, 97], [5, 90], [6, 84], [7, 80], [8.5, 88], [10, 96]], color: '#2f5d8a', dash: '16 10', width: 5, cursor: false, label: ['Printed tape (minutes late)', '纸带报价（晚了几分钟）'], labelBelow: true, draw: [['L0', 4], ['L1', 5], ['L1@covered', 7], ['L2', 8]] }],
        marks: [{ x: 4, y: 81, at: 'L0@80', en: 'Tape: 100. Filled ≈80: −20 pts', zh: '纸带100，实际成交约80：−20点', dx: -420, dy: 30, w: 420, fill: '#f3c6c0' },
          { x: 7, y: 95, at: 'L2', en: 'Figured ≈80. Bought ≈15 pts higher', zh: '按约80计算，买入却贵了约15点', dx: -430, dy: -180, w: 380, fill: '#f3c6c0' }] },
      { type: 'equation', at: 'L0@80', x: 1690, y: 380, size: 56, terms: [{ t: '−20', zh: '卖出滑点', at: 'L0@80' }, { t: '−15', zh: '买入滑点', at: 'L2@fifteen' }] },
      { type: 'equation', at: 'L2@Thirty', x: 1690, y: 520, size: 62, terms: [{ t: '= −35 pts', zh: '一天亏35点', at: 'L2@Thirty', hl: true }] },
      { type: 'note', at: 'L3', x: 1500, y: 600, w: 390, h: 230, size: 28, fill: '#f6d77a', anim: 'slideU',
        en: 'In a fast market the tape shows prices that no longer exist.', zh: '行情剧烈时，纸带显示的是已经不存在的价格。' }],
    lines: [
      N('The tape was way behind the market. When it said, say, 100, my stocks were actually sold around 80.', '纸带远远落后于市场。纸带上显示，比如说100，我的股票实际却是在80左右卖出的。'),
      N('At those prices my shorts were already the bargains I\'d planned to buy. So I covered at once and went long.', '在那个价位，我卖空的股票已经是我打算买进的便宜货了。于是我立刻平仓，转而做多。'),
      N('My buys filled about fifteen points above what I had figured. Thirty-five points lost in one day.', '我的买单成交价比我算的高了约十五个点。一天之内亏了三十五个点。'),
      N('The same gap between printed and real prices had beaten me at Fullerton\'s. Tape reading is not enough: anticipate the big move.', '在富勒顿那里打败我的，正是纸带价格和真实价格之间的这个差距。光会读纸带不够：要预判大行情。'),
    ] });

  shot({ id: 'e02_limit', set: 'office', trans: 'wipe', music: 'calm',
    setOpts: { board: [['N. PAC', 'UNION PAC', 'STEEL', 'ST. PAUL', 'SUGAR'], ['150', '102', '44', '165', '140'], ['149', '101', '43¾', '164', '139']] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L1', x: 960, y: 500, z: 1.05, dur: 1.2 }, { t: 'L2@cleaned', on: 'larry', z: 1.4, dur: 1 }],
    cast: [{ id: 'larry', x: 760, y: 890, s: 1.2, pose: 'explain', expr: 'determined',
        acts: [{ t: 'L0@sell', pose: 'point', expr: 'determined' }, { t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'shrug', expr: 'neutral' }, { t: 'L2@cleaned', pose: 'despair', expr: 'sad' }] },
      { id: 'clerk', x: 1300, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral', acts: [{ t: 'L0@sell', pose: 'phone' }, { t: 'L2', pose: 'write' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L2', en: 'After May 9. That summer he lived well on the Jersey coast.', zh: '5月9日之后。那年夏天，他在泽西海岸过得很阔绰。' },
      { type: 'note', at: 'L2', x: 1180, y: 100, w: 700, h: 210, size: 30, fill: '#f6d77a', anim: 'pop',
        en: '"My old shotgun and BB shot could not do the work of a high-power repeating rifle against big game."', zh: '"我那杆老式猎枪和鸟弹，打不了大猎物，比不上高威力的连发步枪。"' },
      { type: 'stamp', at: 'L2@cleaned', x: 420, y: 420, en: 'CLEANED OUT', zh: '再次清零', size: 64, rot: -8 }],
    lines: [
      N('I never could trade with a limit. When I think I should sell, I sell. I\'m trying to beat the market, not a particular price.', '我从来做不了限价单。我认为该卖，就卖。我要战胜的是市场，而不是某一个价格。'),
      N('Limit orders would only have been my bucket-shop method, badly adapted. When I tried them, the market simply got away from me.', '限价单不过是把我的对赌行打法生搬硬套过来。我试过，结果市场就这么从我手边溜走了。'),
      N('So I plugged along with a modified but still defective method. Early that fall I was cleaned out again.', '于是我用一套修修补补、但仍有缺陷的方法勉强撑着。那年初秋，我又一次输光了。'),
    ] });

  // ---- chapter IV: skinning the skinners ----
  chapter('Chapter IV · Skinning the Skinners', '第四章 · 以其人之道');
  shot({ id: 'e02_home', set: 'bucketshop', trans: 'whip', music: 'rag',
    setOpts: { shopName: 'STOCKS · GRAIN', crowd: 6, board: [['ST. PAUL', 'SUGAR', 'B.R.T.', 'WHEAT', 'COTTON'], ['165', '124', '68', '72¼', '8.40'], ['164¾', '123¾', '67⅞', '72⅛', '8.38']], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'pal', z: 1.3, dur: 1 }, { t: 'L2', on: 'joe', z: 1.35, dur: 1 }, { t: 'end', x: 960, y: 500, z: 1.05 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 480, y: 890, s: 1.15, pose: 'cross', expr: 'neutral', acts: [{ t: 'L2', pose: 'cross', expr: 'frown' }] },
      { id: 'friend', key: 'pal', x: 900, y: 890, s: 1.15, pose: 'hold', expr: 'smile', prop: { t: 'money' }, acts: [{ t: 'L1@clerk', pose: 'shrug', expr: 'angry' }, { t: 'L2', expr: 'shock' }] },
      { id: 'clerk', key: 'joe', x: 1350, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral', acts: [{ t: 'L1@clerk', pose: 'hips', expr: 'frown' }, { t: 'L2', pose: 'pointL', expr: 'angry' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Back home. The new shops thought twenty shares was plenty for any gentleman.', zh: '回到家乡。新开的对赌行觉得，一位绅士买二十股就够多了。' },
      { type: 'bubble', at: 'L2', x: 1080, y: 60, w: 620, en: 'You never do a thing here unless your friend Livingston\'s around. We don\'t fall for Livingston tipping you off!', zh: '利文斯顿不在，你就什么都不做。我们可不吃利文斯顿给你递消息这一套！', tx: 1350, ty: 602, size: 28 }],
    lines: [
      N('Broke again, I went home. The shops that remembered me wouldn\'t take my business, so a friend traded for me, on a code.', '我又输光了，只好回家。记得我的对赌行都不接我的单，于是我让一个朋友按暗号替我交易。'),
      N('One day he tried to sell a hundred St. Paul, with my hundred dollars. The clerk, Joe, came out from behind his cage.', '有一天，他拿着我的一百美元，想卖空一百股圣保罗。职员乔从柜台后面走了出来。'),
      L('clerk', 'You never do a thing here unless your friend Livingston\'s around. We don\'t fall for Livingston tipping you off!', '你的朋友利文斯顿不在，你就什么都不做。我们可不吃利文斯顿给你递消息这一套！', { speak: 'joe' }),
    ] });

  shot({ id: 'e02_roberts', set: 'veranda', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'roberts', z: 1.3, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.2, pose: 'chin', expr: 'neutral', acts: [{ t: 'L1', pose: 'cross', expr: 'sly' }, { t: 'L2', pose: 'hips', expr: 'sly' }] },
      { id: 'trader', key: 'roberts', x: 1250, y: 890, s: 1.2, flip: true, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L1', pose: 'explain', expr: 'grin' }, { t: 'L1@memberships', pose: 'explainR', expr: 'sly' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'A hotel lobby, back home. A friendly stranger named Roberts.', zh: '家乡的一家酒店大堂。一个叫罗伯茨的热心陌生人。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 960, y: 60, w: 640, size: 28, en: 'The biggest brokerage firm in the country! Branches in seventy-eight cities!', zh: '全国最大的经纪行！在七十八个城市有分号！', tx: 1250, ty: 590 },
      { type: 'note', at: 'L1@memberships', x: 80, y: 110, w: 600, h: 190, size: 28, fill: '#efe3c4', anim: 'slideL',
        en: 'Real NYSE houses charged ⅛ point and never split it. These "wire houses" took an extra 1/32 on some business.', zh: '真正的交易所会员行收⅛点佣金，从不打折；这些"电报经纪行"对某些生意还额外加收1/32。' },
      { type: 'stamp', at: 'L2@phony', x: 1560, y: 380, en: 'BUCKETEERS', zh: '冒牌经纪行', size: 64, rot: -8 }],
    lines: [
      N('In a hotel lobby I complained about the rotten execution you get at the market. A friendly stranger named Roberts took me aside.', '在一家酒店大堂里，我抱怨按市价交易时成交太烂。一个叫罗伯茨的热心陌生人把我拉到一边。'),
      L('trader', 'I know the biggest brokerage firm in the country. Branches in seventy-eight cities, and memberships in every exchange, in their own name or on the quiet.', '我认识全国最大的经纪行。在七十八个城市有分号，各大交易所都有席位，有的用自己的名义，有的不声不响。', { speak: 'roberts' }),
      N('He was touting for bucketeers: phony brokers who bucketed your orders, dressed up as the real thing.', '他是在替冒牌经纪行拉客：它们把你的订单拿来对赌，却打扮得像正规经纪行。'),
    ] });

  lesson(h, { id: 'e02_wirehouse', tag: ['HOW THEY FLEECED', '他们怎样宰客'], title: ['Inside a Wire House', '电报经纪行的内幕'], music: 'tense',
    gest: ['explain', 'point', 'explainR', 'despair'],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 220, w: 1420, bh: 190, gap: 50, size: 27, nodes: [
        { num: 1, en: '600 wires: BUY it. 600 wires: SELL it.', zh: '600封电报：买；600封电报：卖', at: 'L0' },
        { num: 2, en: 'Next day: close everything, switch stocks', zh: '第二天：全部平仓，换一只股票', at: 'L1' },
        { num: 3, en: 'Winners and losers both cut off', zh: '赚的赔的统统被斩断', at: 'L1@killing', color: '#f3c6c0' },
        { num: 4, en: '"They lose anyway. Then find a new crop."', zh: '"他们反正要输光。再找下一批。"', at: 'L2' }] },
      { type: 'note', at: 'L3', x: 470, y: 470, w: 690, h: 210, size: 28, anim: 'slideU',
        en: 'Cover story: trade some real shares through an Exchange firm, and show the report to any doubter.', zh: '掩护：通过交易所会员行做一点真实交易，把成交回报拿给起疑的客户看。' },
      { type: 'note', at: 'L3@discretionary', x: 1200, y: 470, w: 690, h: 210, size: 28, fill: '#f3c6c0', anim: 'slideU',
        en: 'Discretionary pools: customers sign over authority; a stock is bulled on paper, then a drive wipes them out.', zh: '全权委托资金池：客户书面授权；先在纸面上做多一只股票，再来一次洗盘把他们清光。' },
      { type: 'note', at: 'L3e', x: 470, y: 710, w: 1420, h: 110, size: 29, fill: '#f6d77a', anim: 'pop',
        en: '"Copper your customers and grow rich," says the old adage. They didn\'t stop at plain bucketing.', zh: '老话说："跟客户对赌就能发财。"他们却连单纯的对赌都不满足。' }],
    lines: [
      N('Their tricks: hundreds of telegrams told some customers to buy a stock, and hundreds told others to sell it.', '他们的把戏是：几百封电报叫一部分客户买某只股票，又有几百封电报叫另一部分客户卖同一只股票。'),
      N('The next day they told everyone to close out and switch to another stock, killing winners and losers alike.', '第二天，他们又叫所有人平仓，换一只股票，赚的赔的统统被斩断。'),
      N('The senior partner explained: customers lose anyway, so get all their money you can, then look for a new crop.', '高级合伙人解释说：客户反正要输光，那就尽量把他们的钱都弄过来，然后再找下一批。'),
      N('They waved real reports from an honest firm at doubters. And their discretionary pools wiped out accounts customers had signed over.', '他们拿正规经纪行的真实回报给起疑的人看。他们的全权委托资金池，则把客户签字交出的账户统统洗光。'),
    ] });

  shot({ id: 'e02_wires', set: 'study', setOpts: { night: false, ticker: true, tickerX: 330, lampX: 1650 }, trans: 'push', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'larry', z: 1.25, dur: 1.2 }, { t: 'L1', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [{ id: 'larry', x: 620, y: 880, s: 1.2, pose: 'phone', expr: 'think', prop: { t: 'phone' },
      acts: [{ t: 'L0@bucket', pose: 'chin', expr: 'sly' }, { t: 'L1', pose: 'phone', expr: 'determined' }, { t: 'L2', pose: 'hips', expr: 'smile' }, { t: 'L2@errors', pose: 'cross', expr: 'frown' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'His own small office, with direct wires to the brokers.', zh: '他自己的小办公室，有直通各家经纪行的电报线。' },
      { type: 'table', at: 'L1', x: 1000, y: 110, w: 880, widths: [0.38, 0.62], size: 28, bottom: 470,
        cols: [['Account', '账户'], ['How his orders filled', '订单怎样成交']],
        rows: [[['5 wire houses', '5家电报经纪行'], ['At the next tape price: bucketed', '按纸带下一个价格：对赌']], [['1 honest firm', '1家正规经纪行'], ['Real orders on the Exchange', '在交易所真实成交']]],
        rowAt: ['L1@five', 'L1@honest'], hl: [null, 'L1@honest'] },
      { type: 'note', at: 'L2@errors', x: 1000, y: 500, w: 880, h: 130, size: 29, fill: '#f3c6c0', anim: 'slideU',
        en: 'Their errors always ran against him. He fought for his own, and usually won.', zh: '他们的"差错"总是对他不利。他据理力争，通常都能讨回来。' }],
    lines: [
      N('Their manager offered to fill me at the next price over the wire. In other words, a bucket shop in all but name.', '他们的经理答应按电报传来的下一个价格给我成交。换句话说，除了名字，这就是一家对赌行。'),
      N('I opened accounts with five such houses, wired to my little office, plus one honest firm connected to the Exchange.', '我在五家这样的公司开了户，电报线直通我的小办公室；另外还有一家与交易所相连的正规经纪行。'),
      N('I won on balance, week in and week out. Their errors always happened to be against me, and they tried the old tricks.', '一周又一周，我总体上是赢的。他们的"差错"总是恰好对我不利，还会耍些老把戏。'),
    ] });

  lesson(h, { id: 'e02_trick', tag: ['HOW IT WORKED', '机制拆解'], title: ['Turning the Wire Houses\' Rule Against Them', '以其人之道，还治其人之身'], titleSize: 50, music: 'tense',
    gest: ['explain', 'point', 'explainR', 'despair'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 820, h: 380, xr: [0, 10], yr: [0, 10], yTicks: [], illustrative: true, cursorLabel: false,
        title: ['A dull stock, one day', '一只冷门股，一天之内'], xTicks: [],
        series: [{ pts: [[0, 5], [2, 5.1], [3, 4.9], [3.6, 3.4], [4.5, 4.7], [6, 5], [7.5, 5.1], [8.6, 7.4], [10, 6.6]], color: '#7a4a22', draw: [['L0', 2], ['L1@printed', 3], ['L1@printed+1', 5], ['L2', 6], ['L2@jumped', 7], ['L2@sold', 8]] }],
        marks: [{ x: 3.6, y: 3.4, at: 'L1@printed', en: 'Low print = his buy price at 5 shops', zh: '低价＝5家店的买入价', dx: 80, dy: 30, w: 270, fill: '#f6d77a' },
          { x: 8.6, y: 7.4, at: 'L2@jumped', en: 'Rush buy-back: the jump', zh: '急买推高价格', dx: -380, dy: -60, w: 330, fill: '#cfe3c4' }] },
      { type: 'flow', dir: 'v', at: 'L0', x: 1320, y: 220, w: 570, bh: 126, gap: 40, size: 25, nodes: [
        { en: '1 · Buy 100 at each of 5 wire houses', zh: '在5家电报经纪行各买100股', at: 'L0@each' },
        { en: '2 · Honest firm: SELL 100 at the market, urgently', zh: '正规经纪行：按市价急卖100股', at: 'L1' },
        { en: '3 · Near the close: BUY 100 back at any price', zh: '临近收盘：不计价买回100股', at: 'L2' },
        { en: '4 · Sell the 500 bucketed shares into the jump', zh: '在冲高时卖出被对赌的500股', at: 'L2@sold', color: '#cfe3c4' }] },
      { type: 'equation', at: 'L1@buying', x: 880, y: 665, size: 50, terms: [
        { t: '+500', zh: '5家各买100', at: 'L1@buying' }, { t: '− 100', zh: '真实卖出', at: 'L1@buying+0.4' }, { t: '= +400', zh: '净多头', at: 'L1@buying+0.8', hl: true }] },
      { type: 'note', at: 'L3', x: 470, y: 720, w: 820, h: 115, size: 27, fill: '#f3c6c0', anim: 'slideU',
        en: '≈$600–800 clear per crack. This is manipulation: illegal today.', zh: '每次净赚约600–800美元。这是操纵，如今违法。' }],
    lines: [
      N('So I turned their rule against them. I bought a hundred shares of a dull, once-popular stock at each of the five houses.', '于是我用他们自己的规则反制他们。我在五家公司各买了一百股一只曾经热门、如今冷清的股票。'),
      N('Through the honest firm I sold a hundred at the market, urgently. The thin stock printed low: my buying price at all five.', '同时通过正规经纪行，按市价急卖一百股。这只冷门股于是打出一个低价：这就是我在五家店的买入价。'),
      N('Near the close I bought that hundred back at any price. The stock jumped, and I sold the five hundred bucketed shares.', '临近收盘，我不计价格买回那一百股。股价一下跳高，我随即卖出那五百股被对赌的股票。'),
      N('Six or eight hundred dollars a crack. Be clear: this is manipulation, and it is illegal today.', '每次净赚六到八百美元。说清楚：这是操纵市场，如今是违法的。'),
    ] });

  shot({ id: 'e02_fictitious', set: 'office', trans: 'whipL', music: 'rag',
    setOpts: { board: [['SUGAR', 'ST. PAUL', 'B.R.T.', 'UNION PAC', 'STEEL'], ['124', '165', '68', '102', '44'], ['123¾', '164¾', '67⅞', '101¾', '43⅞']] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'manager', z: 1.35, dur: 1 }, { t: 'L2', on: 'larry', z: 1.35, dur: 1 }, { t: 'L3', x: 960, y: 500, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 720, y: 890, s: 1.2, pose: 'hips', expr: 'neutral',
        acts: [{ t: 'L2', pose: 'point', expr: 'determined' }, { t: 'L3@paid', pose: 'hold', expr: 'smile' }] },
      { id: 'manager', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'frown',
        acts: [{ t: 'L1', pose: 'fist', expr: 'angry' }, { t: 'L2', pose: 'cross', expr: 'frown' }, { t: 'L3@paid', pose: 'despair', expr: 'sad' }] }],
    items: [
      { type: 'note', at: 'L0@ten', until: 'L1', x: 80, y: 110, w: 580, h: 170, size: 28, fill: '#efe3c4', anim: 'slideL',
        en: 'Usual: 100 shares a shop, 1–2 points. That day: a 10-point swing, 200 shares at one shop.', zh: '平常：每家100股，赚1–2点。那天：10个点的波动，有一家是200股。' },
      { type: 'sfx', at: 'L0@ten', until: 'L1', x: 1520, y: 320, text: '10 PTS!', zh: '十个点！', size: 110, color: '#2f6b3d', font: 'cond' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 960, y: 60, w: 600, kind: 'shout', en: 'That was a fictitious market! We won\'t pay you a cent!', zh: '那是虚假行情！我们一分钱也不付！', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 420, y: 60, w: 600, en: 'You let me in then, all right. Now you\'ve got to let me out.', zh: '当初你让我进场了。现在就得让我出场。', tx: 720, ty: 590 },
      { type: 'stamp', at: 'L3@paid', x: 1500, y: 380, en: 'PAID', zh: '照付', size: 80, rot: -10 }],
    lines: [
      N('One day the trick ran far beyond my plan, a ten-point swing. And at one house I happened to have two hundred shares.', '有一天，这一招远远超出了我的计划：十个点的波动。而在其中一家，我碰巧持有两百股。'),
      L('manager', 'That was a fictitious market for that stock, and we won\'t pay you a cent!', '那只股票的行情是假的，我们一分钱也不付！', { speak: 'manager' }),
      L('larry', 'It wasn\'t fictitious when you accepted my order to buy. You let me in; now you\'ve got to let me out.', '你接我买单的时候，可没说它是假的。你让我进场了，现在就得让我出场。', { speak: 'larry' }),
      N('He blustered, but he paid. They all paid. But that jump ended the game: now they watched for their own trick.', '他咆哮了一阵，最后还是付了。他们全都付了。但那次暴涨也让这场游戏到此为止：他们开始提防自己发明的把戏了。'),
    ] });

  shot({ id: 'e02_newhaven', set: 'bucketshop', trans: 'whip', music: 'rag',
    setOpts: { shopName: 'NEW HAVEN', crowd: 5, board: [['SUGAR', 'STEEL', 'B.R.T.', 'ST. PAUL', 'WHEAT'], ['124', '44', '68', '165', '72¼'], ['123¾', '43⅞', '67⅞', '164¾', '72⅛']],
      boardSeq: [{ t: 'L2', r: 1, c: 0, v: '123' }, { t: 'L2@more', r: 1, c: 0, v: '122⅞' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'orator', z: 1.3, dur: 1.2 }, { t: 'L2', x: 960, y: 500, z: 1.05, dur: 1 }, { t: 'L3', on: 'orator', z: 1.45, dur: 0.8 }],
    cast: [{ id: 'friend', key: 'pal', x: 400, y: 890, s: 1.1, pose: 'hips', expr: 'grin', acts: [{ t: 'L3', pose: 'shrug', expr: 'laugh' }] },
      { id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.15, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L1@cleaned', pose: 'hold', expr: 'grin' }, { t: 'L2@Steel', pose: 'explain', expr: 'sly' }, { t: 'L3', pose: 'hips', expr: 'laugh' }] },
      { id: 'manager', key: 'orator', x: 1300, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'grin',
        acts: [{ t: 'L1@orator', pose: 'explainR', expr: 'smile' }, { t: 'L2', pose: 'cross', expr: 'frown' }, { t: 'L3', pose: 'fist', expr: 'angry' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'New Haven, on the drive to New York.', zh: '纽黑文，开车去纽约的途中。' },
      { type: 'counter', at: 'L1@fifteen', until: 'L2', x: 1560, y: 280, from: 0, to: 1500, prefix: '+≈$', size: 90, dur: 1.4, color: '#2f6b3d', label: ['one morning', '一个上午'] },
      { type: 'counter', at: 'L2@five', until: 'L3', x: 1560, y: 280, from: 0, to: 500, prefix: '+$', size: 90, dur: 1.2, color: '#2f6b3d', label: ['short 500 Sugar, down a point', '空500股糖业，跌了1点'] },
      { type: 'bubble', at: 'L3', x: 960, y: 60, w: 640, kind: 'shout', en: 'Students? You two are the biggest sharks in the United States of America!', zh: '学生？你们俩是全美国最大的鲨鱼！', tx: 1300, ty: 590 }],
    lines: [
      N('After a year I had a fair roll and an automobile. Driving to New York with a friend, we stopped at a New Haven bucket shop.', '一年后，我攒下了一笔可观的钱，还买了辆汽车。和一个朋友开车去纽约的路上，我们在纽黑文的一家对赌行停了下来。'),
      N('The manager, a real orator, took us for a couple of Yale boys. The next morning I cleaned up nearly fifteen hundred dollars.', '经理是个十足的演说家，把我们当成了两个耶鲁学生。第二天上午，我赚了将近一千五百美元。'),
      N('The day after, five hundred Sugar made me five hundred more. When I asked to sell Steel, he gave his verdict.', '再过一天，卖空五百股糖业又让我赚了五百美元。当我要卖空钢铁时，他宣布了他的结论。'),
      L('manager', 'Students? You two are the biggest sharks in the United States of America!', '学生？你们俩是全美国最大的鲨鱼！', { speak: 'orator' }),
    ] });

  // ---- the post-mortem ----
  shot({ id: 'e02_postmortem', set: 'street', setOpts: { walkers: 5 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L3', x: 900, y: 500, z: 1.06, dur: 2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 420, y: 900, s: 1.2, pose: 'chin', expr: 'think',
      acts: [{ t: 'L1', pose: 'despair', expr: 'sad' }, { t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L3', pose: 'fist', expr: 'determined' }] }],
    items: [
      { type: 'table', at: 'L0@twenty', until: 'L3', x: 780, y: 110, w: 1100, widths: [0.34, 0.66], size: 28, bottom: 600,
        cols: [['Loss', '亏损'], ['Why', '原因']],
        rows: [
          [['Age 20: −$10,000', '20岁：−1万美元'], ['Traded out of season: gambled without a signal', '不合时宜地交易：没有信号也去赌']],
          [['May 9, 1901: −$50,000', '1901.5.9：−5万美元'], ['Laggard tape, violent market', '纸带滞后，行情剧烈']],
          [['Other losses', '其他亏损'], ['Not known yet: theories, no practice', '原因未明：有理论，缺实践']]],
        rowAt: ['L0@twenty', 'L2', 'L2@Other'], hl: [null, null, 'L2@Other'] },
      { type: 'note', at: 'L3', x: 780, y: 160, w: 1100, h: 230, size: 36, align: 'center', fill: '#f6d77a', anim: 'pop',
        en: '"There is nothing like losing all you have in the world for teaching you what not to do."', zh: '"没有什么比输掉你在世上的一切，更能教会你什么不该做。"' }],
    lines: [
      N('So I came back to Wall Street, studying my defeats. At twenty I lost my first ten thousand by trading out of season.', '就这样，我回到了华尔街，一路复盘自己的失败。二十岁时，我输掉了第一个一万美元，因为我总在不该交易的时候交易。'),
      N('When my system gave no signal, I gambled. I hoped to win, instead of knowing I ought to win on form.', '当我的方法没有给出信号时，我就去赌。我是在指望赢，而不是根据走势知道自己应该赢。'),
      N('On May ninth the laggard tape took my fifty thousand. Other losses I couldn\'t yet explain.', '5月9日，滞后的纸带拿走了我的五万美元。其他的亏损，我当时还解释不了。'),
      N('There is nothing like losing all you have for teaching you what not to do. Then you begin to learn what to do to win.', '没有什么比输光一切，更能教会你什么不该做。然后，你才开始学会怎样做才能赢。'),
    ] });

  // ---- takeaways ----
  const R = (n, at, y, en, zh, tag, fill) => ({ type: 'rule', at, x: 470, y, w: 1420, h: 112, n: String(n), size: 30, en, zh, tag, fill });
  lesson(h, { id: 'e02_rules', tag: ['TAKEAWAYS', '要点'], title: ['What Episode Two Teaches', '第二集的要点'], music: 'calm',
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      R(1, 'L0@right', 220, 'There is only one side to the market: the right side.', '市场只有一边：正确的一边。'),
      R(2, 'L0@fill', 342, 'Real fills are not tape prices. In a panic the gap can be 20 points.', '真实成交价不是纸带价格。恐慌时差距可达20点。'),
      R(3, 'L1', 464, 'Anticipate the big move. Don\'t bet on the next few quotations.', '预判大行情，别赌接下来几个报价。'),
      R(4, 'L1@judgment', 586, 'Back your own judgment with real money. No tips; paper trading proves nothing.', '用真金白银支持自己的判断。不听消息；纸上交易证明不了什么。'),
      R(5, 'L2', 708, 'Name the cause of every loss. Losing teaches what not to do.', '找出每次亏损的原因。亏损教你什么不该做。', '#2f6b3d', '#cfe3c4')],
    lines: [
      N('Episode two, in five rules. Be on the right side, not the bull or bear side. Expect your fill to differ from the tape.', '第二集的五条规则。站在正确的一边，而不是多头或空头一边。还要预料到你的成交价会和纸带不同。'),
      N('Play for the big move, not the next quotation. Back your own judgment with real money, never tips.', '做大行情，而不是下一个报价。用真金白银支持你自己的判断，绝不靠小道消息。'),
      N('And name the cause of every loss. That is how losing teaches you what not to do.', '还要找出每一次亏损的原因。亏损正是这样教会你什么不该做的。'),
    ] });

  const T = (en, zh) => [en, zh];
  lesson(h, { id: 'e02_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: '#b3302a', title: ['Mistakes of Chapters III–IV', '第三、四章的错误'], music: 'calm',
    gest: ['explain', 'point'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 220, w: 1420, widths: [0.36, 0.32, 0.32], size: 28, bottom: 840,
      cols: [T('Mistake', '错误'), T('Cause', '原因'), T('Rule', '规则')],
      rows: [
        [T('Scalped at Harding\'s as in a bucket shop', '在哈丁兄弟行照对赌行那样炒短线'), T('The tape lagged the real market', '纸带落后于真实市场'), T('Learn the new game before playing it', '先弄懂新游戏再下场')],
        [T('Bearish too early in the 1901 boom', '1901年繁荣中过早看空'), T('Opinion ran ahead of the market', '观点跑在了市场前面'), T('Be on the right side, not the bear side', '站在正确的一边，而不是空头一边')],
        [T('May 9: market orders on a lagging tape', '5月9日：纸带滞后时按市价下单'), T('Sold 20 pts low, bought 15 pts high', '卖低了20点，买高了15点'), T('Anticipate the big move; don\'t chase quotes', '预判大行情，别追报价')],
        [T('Kept a defective method after May 9', '5月9日后仍沿用有缺陷的方法'), T('Some winnings hid the flaw', '偶尔赚钱掩盖了缺陷'), T('Find the exact cause of each loss', '找出每次亏损的确切原因')]],
      rowAt: ['L0+0.3', 'L0+0.9', 'L0+1.5', 'L0@last'], hl: [null, null, null, 'L0@learning'] }],
    lines: [
      N('And the mistakes of chapters three and four. Notice the last one: making some money slowed my learning.', '还有第三、四章的错误。注意最后一条：偶尔赚到钱，反而拖慢了我的学习。'),
    ] });
};
