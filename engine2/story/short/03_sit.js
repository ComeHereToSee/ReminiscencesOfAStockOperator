// 30-minute version, part 3: sit tight (Book ch. V–VI)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, title, photo, PD } = h;
  chapter('3 · Sit Tight', '三 · 坐得住');
  music('calm');
  title({ id: 's_t3', kicker: 'PART 3 · 第三部分', en: 'Sit Tight', zh: '坐得住', color: '#2f6b3d',
    sub: ['Book chapters V–VI · c. 1901–1906', '原著第五至六章 · 约1901–1906年'],
    lines: [N('Part three. Sit tight.', '第三部分：坐得住。')] });
  shot({ id: 's_partridge', set: 'office', trans: 'wipe',
    setOpts: { board: [['CLIMAX MOT.', 'UNION PAC', 'N. PAC', 'STEEL', 'READING'], ['57', '160½', '110', '45¾', '96'], ['56½', '160', '109⅞', '45⅝', '95½']], boardSeq: [{ t: 'L1', r: 1, c: 0, v: '64' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'friend', z: 1.4, dur: 1.2 }, { t: 'L2', on: 'partridge', z: 1.45, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.1, dur: 1.5 }],
    cast: [{ id: 'partridge', x: 760, y: 890, s: 1.2, pose: 'hold', expr: 'smile', nod: false, acts: [{ t: 'L2', pose: 'explain', expr: 'smile' }] },
      { id: 'friend', x: 1250, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'grin', acts: [{ t: 'L2e', expr: 'shock', pose: 'shrug' }] },
      { id: 'larry', x: 1650, y: 900, s: 1.0, flip: true, pose: 'chin', expr: 'think', lookX: -1, z: -1 }],
    items: [{ type: 'caption', at: 0.3, en: 'Old Partridge, nicknamed "Turkey". Long 500 Climax Motors, up 7 points.', zh: '老帕特里奇，绰号"火鸡"。持有500股克莱麦克斯汽车，已涨7点。', w: 700 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1030, y: 60, w: 560, en: 'Sell now and buy it back on the reaction!', zh: '现在卖掉，等回调再买回来！', tx: 1250, ty: 400 },
      { type: 'bubble', at: 'L2', x: 330, y: 60, w: 640, en: 'If I sold that stock now I\'d lose my position. And then where would I be?', zh: '我要是现在卖了，就会丢掉我的仓位。那我还剩什么？', tx: 760, ty: 410 }],
    lines: [
      N('In that office was an old customer we called Turkey. Whatever you asked him, he answered: "You know, it\'s a bull market!"', '那间营业部里有位老客户，我们叫他"火鸡"。不管你问他什么，他都回答："你知道的，这是牛市！"'),
      L('friend', 'Mr. Partridge, sell your Climax Motors now and buy it back on the reaction!', '帕特里奇先生，现在卖掉您的克莱麦克斯汽车，等回调再买回来！', { speak: 'friend' }),
      L('partridge', 'My dear boy, if I sold that stock now, I would lose my position. And then where would I be?', '亲爱的孩子，我要是现在卖了那只股票，就会丢掉我的仓位。那我还剩什么？', { speak: 'partridge' }),
      N('It took me years to understand him.', '我花了好多年才懂他。'),
    ] });
  lesson(h, { id: 's_sitting', tag: ['METHOD 2 · SIT TIGHT', '方法二 · 坐得住'], title: ['The Big Money Is in the Big Move', '大钱在大行情里'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 950, h: 610, xr: [0, 12], yr: [95, 165], yTicks: [100, 120, 140, 160], illustrative: true, cursorLabel: false,
        title: ['A bull market and its reactions', '牛市与其中的回调'], xTicks: [[0, 'start', '起点'], [12, 'top', '顶部']],
        series: [{ pts: [[0, 100], [1, 108], [1.6, 104], [3, 118], [3.7, 112], [5, 128], [5.7, 121], [7, 138], [7.8, 131], [9.5, 152], [10.3, 146], [12, 160]], color: '#2f6b3d', draw: [['L0', 3], ['L1', 5], ['L2', 11]] }],
        bands: [{ x0: 1, x1: 1.6, y0: 100, y1: 165, color: '#b3302a', at: 'L1' }, { x0: 3, x1: 3.7, y0: 100, y1: 165, color: '#b3302a', at: 'L1+0.4' }],
        marks: [{ x: 1, y: 108, at: 'L1', en: 'Take 4 pts, wait for a dip...', zh: '赚4点就跑，等回调……', dx: -60, dy: -150, w: 250, fill: '#f3c6c0' },
          { x: 3, y: 118, at: 'L1@ten', en: '...and it runs on without you', zh: '……它却甩下你继续上涨', dx: 30, dy: -170, w: 260, fill: '#f3c6c0' }] },
      { type: 'bars', at: 'L2', x: 1450, y: 220, w: 430, h: 400, title: ['His own tally', '他自己的账'], max: 20000, vsize: 30,
        bars: [{ v: 20000, vl: '$20,000', en: 'should have made', zh: '本该赚', at: 'L2+0.3', color: '#2f6b3d' }, { v: 2000, vl: '$2,000', en: 'did make', zh: '实际赚', at: 'L2+0.9', color: '#b3302a' }] },
      { type: 'note', at: 'L3', x: 1450, y: 640, w: 430, h: 190, size: 27, fill: '#f6d77a', anim: 'slideU', en: '"It never was my thinking that made the big money for me. It always was my sitting."', zh: '"让我赚大钱的从来不是我的想法，而是我坐得住。"' }],
    lines: [
      N('Partridge meant this: the big money is not in the small swings. It is in the main movement.', '帕特里奇的意思是：大钱不在小波动里，而在主要趋势里。'),
      N('I used to take four points and wait for a reaction to buy back. The reaction never came, and the stock went ten points higher without me.', '我过去常常赚四个点就卖，等回调再买回来。回调却没来，股票甩下我又涨了十个点。'),
      N('Where I should have made twenty thousand dollars, I made two thousand. Nobody can catch every fluctuation. Step out, and you lose your position.', '本该赚两万美元的地方，我只赚了两千。没人能抓住每一次波动。一旦下车，你就丢掉了仓位。'),
      N('The lesson took me years: it never was my thinking that made the big money. It was my sitting. Being right and sitting tight together is rare.', '这个教训我花了好多年才学会：让我赚大钱的从来不是我的想法，而是我坐得住。既判断正确又坐得住，这样的人很少。'),
    ] });
  // ---- 1906: the earthquake short ----
  photo({ id: 's_ac', src: `${PD}/atlantic_city_boardwalk_1904_detroit.jpg`, credit: 'Atlantic City boardwalk, 1904 · Detroit Publishing Co. (public domain)', music: 'rag',
    cap: ['Spring 1906, Atlantic City. On vacation, out of the market.', '1906年春，大西洋城。度假中，空仓。'],
    lines: [N('Spring of 1906. I was on vacation in Atlantic City, out of the market, when a friend and I dropped into a broker\'s branch on the Boardwalk.', '1906年春天，我在大西洋城度假，没有持仓。我和一位朋友顺路走进了木板路上的一家经纪行分部。')] });
  shot({ id: 's_hunch', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { windows: [-260, 2000], board: [['UNION PAC', 'READING', 'STEEL', 'N. PAC', 'SUGAR'], ['162', '137', '46', '205', '138'], ['161¾', '136½', '45¾', '204', '137½']],
      boardSeq: [{ t: 'L2@slipped', r: 1, c: 0, v: '160⅝' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0', on: 'larry', z: 1.4, dur: 1.2 }, { t: 'L1', on: 'friend', z: 1.4, dur: 1 }, { t: 'L2', x: 700, y: 330, z: 1.3, dur: 1.3 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.2, pose: 'chin', expr: 'think', acts: [{ t: 'L0@sell', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'cross', expr: 'neutral' }] },
      { id: 'friend', x: 1250, y: 890, s: 1.15, flip: true, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L1', pose: 'shrug', expr: 'shock' }] }],
    items: [{ type: 'ticket', at: 'L0@thousand', x: 330, y: 760, lines: ['UNION PACIFIC', 'SOLD 1,000 @ MKT', '× 3'], head: 'HARDING BROS. · BOARDWALK', color: '#efe3c4', rot: -6 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1080, y: 70, w: 520, en: 'What did you hear? Then why in blazes are you selling?', zh: '你听到什么了？那你到底为什么要卖？', tx: 1250, ty: 400 },
      { type: 'counter', at: 'L2@five', x: 1550, y: 330, from: 3000, to: 5000, size: 100, suffix: ' sh', label: ['short Union Pacific', '做空联合太平洋'] }],
    lines: [
      N('The market was strong. I looked at Union Pacific and felt I ought to sell it. I could not find a single reason. I sold a thousand, then another, then a third.', '市场很强。我看着联合太平洋，觉得应该卖掉它。我找不到任何理由。我卖了一千股，又一千，再一千。'),
      L('friend', 'What did you hear? Then why in blazes are you selling?', '你听到什么了？那你到底为什么要卖？', { speak: 'friend' }),
      N('Next day the stock slipped below my average price, and only then did I sell two thousand more. Five thousand shares short, all my margin allowed.', '第二天，股价跌破了我的平均卖价，我这才又卖了两千股。共做空五千股，这是我的保证金允许的上限。'),
    ] });
  photo({ id: 's_quake', src: `${PD}/sf_earthquake_cityhall_1906_detroit.jpg`, credit: 'San Francisco City Hall after the earthquake, 1906 · Detroit Publishing Co. (public domain)', music: 'tense',
    cap: ['April 18, 1906: the San Francisco earthquake and fire. Union Pacific\'s lines served the West.', '1906年4月18日：旧金山大地震与大火。联合太平洋的铁路网覆盖西部。'], capW: 700,
    lines: [
      N('The next day came news of the San Francisco earthquake. Yet the market opened down only a couple of points, and came back before the close.', '第二天传来旧金山大地震的消息。可是市场开盘只跌了几个点，收盘前又涨了回来。'),
      N('When the Street is bullish it does not want to see a disaster, so at first it does not. Then fuller reports came in, and prices began to slide.', '当华尔街一片看涨时，它不想看见灾难，所以一开始真的视而不见。随后更完整的报道传来，价格开始下滑。'),
    ] });
  lesson(h, { id: 's_pyramid', tag: ['METHOD 3 · PYRAMID ON CONFIRMATION', '方法三 · 确认后加码'], title: ['How the Earthquake Short Was Built', '地震空单是怎样建立的'], music: 'tense',
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 900, h: 610, title: ['Shares short of Union Pacific', '联合太平洋空头持股'], max: 20000, vsize: 30,
        bars: [{ v: 3000, vl: '3,000', en: 'Day 1: a hunch', zh: '第1天：直觉', at: 'L0', color: '#c9a26a' },
          { v: 5000, vl: '5,000', en: 'Day 2: breaks below his average', zh: '第2天：跌破均价', at: 'L1', color: '#c9a26a' },
          { v: 5000, vl: '5,000', en: 'Quake day: market holds. Adds nothing', zh: '地震当天：市场没跌，不加', at: 'L2', color: '#9a9182' },
          { v: 10000, vl: '10,000', en: 'Prices slide: doubles', zh: '开始下滑：加倍', at: 'L3', color: '#b3302a' },
          { v: 20000, vl: '20,000+', en: 'Keeps selling', zh: '继续卖出', at: 'L3@ten', color: '#b3302a' }] },
      { type: 'counter', at: 'L4', x: 1640, y: 420, from: 0, to: 250000, prefix: '+$', size: 96, dur: 1.8, color: '#2f6b3d', label: ['the clean-up', '最终获利'] },
      { type: 'note', at: 'L4@small', x: 1420, y: 560, w: 460, h: 220, size: 30, fill: '#f6d77a', en: 'Small while unproven. Big once proven.', zh: '未经证实时小仓位，得到证实后大仓位。', anim: 'pop' }],
    lines: [
      N('Look at how the position was built. Three thousand on a feeling.', '看看这个仓位是怎样建立的。凭感觉先卖三千股。'),
      N('Two thousand more only after the stock broke below my average: the market agreed with me.', '直到股价跌破我的均价，也就是市场认同了我，才再加两千股。'),
      N('On the earthquake day itself I added nothing. The market had not confirmed me yet.', '地震当天我一股没加，因为市场还没有确认我的判断。'),
      N('When prices began to slide, I doubled, with five thousand more, then ten thousand more, and kept selling.', '当价格开始下滑，我加倍了：先加五千股，再加一万股，并继续卖出。'),
      N('I cleaned up a quarter of a million dollars. The rule: small while unproven, big once proven.', '我赚了二十五万美元。规则是：未经证实时小仓位，得到证实后大仓位。'),
    ] });
  // ---- Saratoga ----
  shot({ id: 's_saratoga', set: 'veranda', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.45, dur: 1.4 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 900, y: 880, s: 1.2, pose: 'chin', expr: 'neutral', prop: { t: 'phone' },
      acts: [{ t: 'L1', pose: 'phone', expr: 'think' }, { t: 'L2', expr: 'worry' }, { t: 'L3', pose: 'despair', expr: 'shock' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Summer 1906, Saratoga Springs.', zh: '1906年夏，萨拉托加温泉。' },
      { type: 'tape', at: 0.6, y: 120, h: 64, speed: 200, items: [['UP', '160'], ['UP', '160⅜'], ['UP', '160¾'], ['UP', '161¼'], ['UP', '161½'], ['UP', '162']], hl: [5] },
      { type: 'bubble', at: 'L1@telephoned', until: 'L3', x: 1180, y: 230, w: 620, kind: 'shout', en: 'It isn\'t a case of margin, but of being a plain sucker! The insiders are feeding it out to you.', zh: '这不是保证金的问题，是你当了冤大头！内部人在把股票倒给你。', tx: 1010, ty: 500, size: 28 },
      { type: 'newspaper', at: 'L3', x: 1420, y: 560, w: 700, h: 470, paper: 'The Evening Post', date: 'AUGUST 1906', en: 'U.P. DECLARES 10% DIVIDEND', zh: '联合太平洋宣布10%股息', size: 52 }],
    lines: [
      N('That summer at Saratoga, Union Pacific acted as if somebody big were accumulating it. I began buying at about 160, five hundred shares at a time.', '那年夏天在萨拉托加，联合太平洋的走势就像有大户在吸筹。我从160左右开始买入，每次五百股。'),
      N('Then my broker and friend, Ed Harding, telephoned from New York.', '这时，我的经纪人兼朋友埃德·哈丁从纽约打来电话。'),
      N('He was clever, well informed and a real friend. I let him shake me. I sold out, and went short four thousand shares at around 162.', '他聪明、消息灵通，是真正的朋友。我被他说动了。我卖光了多头，又在162左右做空了四千股。'),
      N('The next day the directors declared a ten percent dividend, and the stock shot up.', '第二天，董事会宣布派发10%的股息，股价飞涨。'),
    ] });
  lesson(h, { id: 's_courage', tag: ['MISTAKE · 错误', '放弃自己的判断'], title: ['The Price of Doubting Your Own Reading', '怀疑自己判断的代价'], tagColor: '#b3302a',
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 950, h: 610, xr: [0, 10], yr: [155, 178], yTicks: [160, 165, 170, 175], illustrative: true, cursorFmt: 'frac',
        title: ['Union Pacific, Saratoga 1906', '联合太平洋，1906年萨拉托加'],
        series: [{ pts: [[0, 158], [2, 160], [4, 161], [5, 162], [6, 162.3], [7, 165], [8, 172], [9, 174], [10, 173]], color: '#2f5d8a', draw: [['L0', 3], ['L0@short', 5], ['L1', 7], ['L1@fills', 8]] }],
        marks: [{ x: 2, y: 160, at: 'L0', en: 'His own reading: buy ~160', zh: '自己的判断：160左右买入', dx: 20, dy: 40, w: 250 },
          { x: 5, y: 162, at: 'L0@short', en: 'On a friend\'s fear: short 4,000 ~162', zh: '因朋友的担心：162左右做空4,000股', dx: -140, dy: -170, w: 280, fill: '#f3c6c0' },
          { x: 7, y: 165, at: 'L1', en: 'Cover order sent ~165', zh: '在165左右发出平仓指令', dx: -330, dy: -40, w: 250 },
          { x: 9, y: 174, at: 'L1@fills', en: 'Filled as high as 172–174', zh: '成交价高达172–174', dx: -300, dy: 20, w: 240, fill: '#f3c6c0' }],
        pnl: { entry: 162, shares: 4000, side: 'short', at: 'L0@short', exitAt: 'L1@fills+1.2', exit: 172, x: 1040, y: 640 } },
      { type: 'counter', at: 'L2', x: 1650, y: 380, from: 0, to: -40000, prefix: '', fmt: '$', size: 90, dur: 1.4, color: '#b3302a', label: ['the cost', '代价'] },
      { type: 'note', at: 'L3', x: 1450, y: 520, w: 430, h: 290, size: 27, fill: '#f6d77a', anim: 'slideU', en: '"A low price for a man to pay for not having the courage of his own convictions."', zh: '"对一个没有勇气坚持自己信念的人来说，这代价算便宜的。"' }],
    lines: [
      N('My own reading said buy. A friend\'s suspicion made me sell short four thousand at about 162.', '我自己的判断是买入。可朋友的怀疑让我在162左右做空了四千股。'),
      N('I sent the order to cover with the stock near 165, but in the rush my fills came as high as 172 and 174.', '股价在165附近时我发出了平仓指令，可在一片混乱中，我的成交价高达172和174。'),
      N('It cost me forty thousand dollars. I then bought on the tape\'s signal and made it all back, with a little more.', '这让我亏了四万美元。随后我按纸带的信号买入，把亏损全赚了回来，还多赚了一些。'),
      N('A low price to pay for not having the courage of my own convictions. From then on I trusted my own reading of conditions, not tips or a friend\'s fears.', '对一个没有勇气坚持自己信念的人来说，这代价算便宜的。从那以后，我只相信自己对形势的判断，不信小道消息，也不信朋友的担忧。'),
    ] });
};
