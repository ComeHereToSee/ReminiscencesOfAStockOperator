// 30-minute version, part 1: cold open + the bucket-shop years (Book ch. I)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, title, photo, PD } = h;
  music('calm');
  chapter('Opening', '开篇');
  // ---- cold open: the old man at his desk ----
  shot({ id: 's_open', set: 'study', setOpts: { night: true, ticker: true, tickerX: 300 }, trans: 'dip',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 1060, y: 470, z: 1.22, dur: 4 }, { t: 'end', x: 1080, y: 450, z: 1.32 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 1080, y: 870, s: 1.25, pose: 'relaxed', expr: 'neutral', lookX: -0.4,
      acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'explain', expr: 'neutral' }, { t: 'L3', pose: 'relaxed', expr: 'smile' }] }],
    items: [{ type: 'caption', at: 0.6, en: 'New York, about 1922. The narrator looks back.', zh: '约1922年，纽约。叙述者回首往事。' }],
    lines: [
      N('I have made fortunes in the stock market. I have lost them, too. More than once I was wiped out completely.', '我在股市里赚到过大钱，也输掉过大钱。不止一次，我被彻底清零。'),
      N('Every time, the market sent me a bill for a lesson. I paid every one of them.', '每一次，市场都给我寄来一张学费账单。每一张，我都付了。'),
      N('This is the story of those lessons: what I did, what it cost, and the rules I took away.', '这就是那些教训的故事：我做了什么，付出了多少代价，又从中得出了哪些规则。'),
      N('In the book I am called Larry Livingston. You may know me by my real name.', '书中我叫拉瑞·利文斯顿。你也许知道我的真名。'),
    ] });
  photo({ id: 's_realman', src: `${PD}/livermore_portrait_1923_financialworld.jpg`, credit: 'Photo: Financial World, 1923 (public domain)',
    cap: ['Jesse Livermore (1877–1940). "Reminiscences of a Stock Operator" (1923) is told in his voice.', '杰西·利弗莫尔（1877–1940）。《股票大作手回忆录》（1923）以他的口吻讲述。'], capW: 720,
    kb: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 9, x: 960, y: 470, z: 1.12 }],
    lines: [N('Jesse Livermore. The writer Edwin Lefèvre set down my story in 1923 and changed the names, mine included.', '杰西·利弗莫尔。作家埃德温·勒菲弗在1923年记下了我的故事，并改换了人名，包括我自己的。')] });
  lesson(h, { id: 's_fortune', tag: ['THE WHOLE STORY IN ONE CHART', '一张图看懂全书'], title: ['Fortunes Made and Lost', '赚到又输光，一次又一次'],
    items: [{ type: 'fortune', at: 0.5, x: 470, y: 240, w: 1400, h: 580, lsize: 24, vsize: 30, items: [
      { v: 3.12, vl: '$3.12', en: 'Age 14', zh: '14岁', at: 'L0' }, { v: 10000, vl: '$10,000', en: 'Age 20', zh: '20岁', at: 'L0+0.8' },
      { v: 0, vl: 'broke', en: 'NY, age 21', zh: '21岁纽约', at: 'L1' }, { v: 50000, vl: '≈$50,000', en: '1901', zh: '1901', at: 'L1+0.6' },
      { v: 0, vl: 'wiped out', en: 'May 9, 1901', zh: '1901.5.9', at: 'L1@wiped' }, { v: 250000, vl: '+$250,000', en: '1906', zh: '1906', at: 'L2' },
      { v: 1000000, vl: '>$1M', en: 'Oct 1907', zh: '1907.10', at: 'L2@million' }, { v: -1000000, vl: 'debt >$1M', en: '1914', zh: '1914', at: 'L3' },
      { v: 3000000, vl: '≈$3M', en: '1916', zh: '1916', at: 'L3@three' }] }],
    lines: [
      N('At fourteen I made three dollars and twelve cents. By twenty I had ten thousand.', '十四岁时，我赚到3.12美元。二十岁时，我有了一万美元。'),
      N('In New York I went broke, climbed back to fifty thousand, and was wiped out in a single day.', '在纽约，我输光了，又爬回到五万美元，然后在一天之内被清零。'),
      N('An earthquake made me a quarter of a million. A panic made me a millionaire.', '一场地震让我赚了二十五万。一场恐慌让我成了百万富翁。'),
      N('Then I owed over a million and went bankrupt, and two years later I made about three million. Watch for what changed each time.', '后来我负债超过一百万，宣告破产；两年后又赚了约三百万。请留意每一次转折背后改变了什么。'),
    ] });

  // ---- chapter 1 ----
  chapter('1 · The Bucket Shop Boy', '一 · 对赌行少年');
  music('rag');
  title({ id: 's_t1', kicker: 'PART 1 · 第一部分', en: 'The Bucket Shop Boy', zh: '对赌行少年', sub: ['Book chapter I · c. 1891–1897', '原著第一章 · 约1891–1897年'],
    lines: [N('Part one. The bucket shop boy.', '第一部分：对赌行少年。')] });
  photo({ id: 's_boston', src: `${PD}/boston_state_st_1905_detroit.jpg`, credit: 'Photo: Detroit Publishing Co., c.1905 (public domain)',
    cap: ['Historical note: the real Livermore started in Boston at 14, in 1891.', '历史注：现实中的利弗莫尔1891年14岁时在波士顿入行。'],
    lines: [N('I went to work straight out of grammar school, in a stock brokerage office. I was fourteen.', '我小学一毕业就进了一家股票经纪行做事。那年我十四岁。')] });
  shot({ id: 's_board', set: 'office', trans: 'wipe', music: 'calm',
    setOpts: { boardSeq: [{ t: 'L0@called', r: 1, c: 0, v: '105⅜' }, { t: 'L0@chalked', r: 1, c: 2, v: '160¾' }, { t: 'L1', r: 1, c: 4, v: '45½' }, { t: 'L1@numbers', r: 1, c: 1, v: '72¼' }, { t: 'L2', r: 1, c: 3, v: '110¼' }] },
    cam: [{ t: 0, x: 960, y: 480, z: 1.0 }, { t: 'L1', on: 'boy', z: 1.35, dur: 2 }, { t: 'L2@habits', x: 900, y: 360, z: 1.18, dur: 1.5 }],
    cast: [{ id: 'boy', x: 820, y: 900, s: 1.25, pose: 'write', expr: 'neutral', lookY: -1,
      acts: [{ t: 'L1', pose: 'relaxed', expr: 'think', lookY: 0 }, { t: 'L2@habits', pose: 'pointUp', expr: 'smile', turn: 0.4 }] }],
    items: [{ type: 'caption', at: 0.4, en: 'Age 14. Quotation-board boy.', zh: '14岁，报价板小弟。' }],
    lines: [
      N('A customer called out prices from the ticker, and I chalked them up on the big board. They never came too fast for me.', '一位客户从行情机上念出价格，我用粉笔把它们写到大黑板上。价格来得再快我也跟得上。'),
      N('To me they were not dollars. They were numbers, always changing, and I loved figures.', '在我眼里，它们不是钱，而是一串不停变化的数字。我天生喜欢数字。'),
      N('Soon I noticed that prices had habits. Before a stock went up or down, it tended to act a certain way.', '很快我发现，价格是有"习惯"的。一只股票在上涨或下跌之前，往往会有某种特定的表现。'),
    ] });
  lesson(h, { id: 's_book', tag: ['METHOD 1 · TAPE READING', '方法一 · 读盘'], title: ['The Little Book', '那个小本子'],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 250, w: 1400, bh: 230, size: 30, nodes: [
        { num: 1, en: 'Watch how a stock acts just before it moves', zh: '观察股票在变动之前的表现', at: 'L0' },
        { num: 2, en: 'Monday: write the price and your forecast', zh: '周一：记下价格和预测', at: 'L0@wrote' },
        { num: 3, en: 'Tue & Wed: check against the tape', zh: '周二、周三：对照纸带核对', at: 'L1' },
        { num: 4, en: 'Keep score: hit or miss', zh: '记分：猜中还是猜错', at: 'L1@score' }] },
      { type: 'note', at: 'L2', x: 470, y: 530, w: 900, h: 150, en: 'Buying a trifle better than selling → the stock is about to rise. Right "seven times out of ten."', zh: '买盘略强于卖盘→即将上涨。"十次能对七次。"', icon: '!', anim: 'slideU' },
      { type: 'note', at: 'L3', x: 1400, y: 530, w: 470, h: 150, en: 'Watch WHAT happens, not WHY.', zh: '看"发生了什么"，不问"为什么"。', fill: '#f6d77a', anim: 'pop' },
      { type: 'note', at: 'L3@reason', x: 470, y: 700, w: 1400, h: 110, size: 28, en: 'Example: Hollow Tube fell 3 points while the market rose. Days later: dividend passed.', zh: '例：大盘上涨时霍洛管业跌了3点。几天后公布：取消分红。', fill: '#efe3c4', anim: 'slideU' }],
    lines: [
      N('So I kept a little book. Each Monday I wrote down a stock, its price, and what I expected it to do.', '于是我准备了一个小本子。每周一，我记下一只股票、它的价格，以及我预期它会怎么走。'),
      N('Then I checked it against the tape. I kept score, and I was right more often than not.', '然后对照纸带核对。我一直记分，结果多数时候我都猜对了。'),
      N('The pattern I trusted: when buying is a trifle better than selling, the price is about to rise.', '我信赖的模式是：当买盘稍稍强过卖盘，价格就要上涨了。'),
      N('And I never asked why. The reason comes out later, after the move. You have to act on what the tape shows now.', '而且我从不问为什么。原因总是在行情走完之后才出来。你必须根据纸带此刻显示的东西行动。'),
    ] });
  shot({ id: 's_first', set: 'bucketshop', trans: 'whip', music: 'rag',
    setOpts: { board: [['BURLINGTON', 'SUGAR', 'B.R.T.'], ['113½', '105¼', '72⅛'], ['113⅜', '105⅛', '72']], boardSeq: [{ t: 'L1@two', r: 1, c: 0, v: '115¼' }], crowd: 6 },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 960, y: 420, z: 1.15 }, { t: 'L1@profit', x: 820, y: 470, z: 1.35, dur: 0.8 }],
    cast: [{ id: 'officeboy', key: 'ob', x: 1250, y: 900, s: 1.15, pose: 'explain', expr: 'grin', flip: true },
      { id: 'boy', x: 760, y: 900, s: 1.15, pose: 'relaxed', expr: 'think', acts: [{ t: 'L0e', pose: 'hold', expr: 'determined' }, { t: 'L1@profit', pose: 'up', expr: 'laugh' }],
        prop: { t: 'money' } }],
    items: [{ type: 'bubble', at: 'L0', until: 'L1', x: 1150, y: 90, w: 480, en: 'Five dollars buys five shares at the bucket shop!', zh: '在对赌行，五块钱就能买五股！', tx: 1250, ty: 420 },
      { type: 'sfx', at: 'L1@profit', x: 1220, y: 300, text: '+$3.12', zh: '第一笔盈利', size: 120, color: '#d6a441', font: 'cond' }],
    lines: [
      L('clerk', 'Got any money? I have a tip on Burlington. Five dollars buys five shares at the bucket shop!', '你有钱吗？我得到伯灵顿的消息了。在对赌行，五块钱就能买五股！', { speak: 'ob' }),
      N('My little book said Burlington was acting the way it did before a rise. So we bought, and two days later we sold. My profit: three dollars and twelve cents.', '我的小本子显示，伯灵顿正呈现上涨前的走势。于是我们买入，两天后卖出。我赚了3.12美元。'),
    ] });
  lesson(h, { id: 's_howbucket', tag: ['HOW IT WORKED', '机制拆解'], title: ['What Was a Bucket Shop?', '什么是对赌行？'], music: 'calm',
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 240, w: 1400, bh: 190, size: 28, nodes: [
        { en: 'You hand over margin', zh: '你交保证金', at: 'L0' }, { en: 'Clerk writes a ticket at the LAST printed price', zh: '职员按纸带上最后价格开单', at: 'L0@ticket' },
        { en: 'No share is ever bought', zh: '从不真正买股票', at: 'L1', color: '#f3c6c0' }, { en: 'Move against you = margin gone, ticket dead', zh: '反向走完保证金＝单子作废', at: 'L2' }],
        tokens: [{ from: 0, to: 1, at: 'L0@ticket', dur: 1.4, label: '$' }] },
      { type: 'equation', at: 'L3', x: 1170, y: 560, size: 50, terms: [
        { t: 'Buy 100 @ 20', zh: '20买100股', at: 'L3' }, { t: '→', at: 'L3' }, { t: 'ticket 20¼', zh: '单据写20¼', at: 'L3@quarter', hl: true, color: '#b3302a' }] },
      { type: 'equation', at: 'L4', x: 1170, y: 700, size: 46, terms: [
        { t: 'win: 21¼', zh: '涨到21¼才赚1点', at: 'L4' }, { t: '·', at: 'L4' }, { t: 'lose: 19¼', zh: '跌到19¼全部输光', at: 'L4@19' }] }],
    lines: [
      N('A bucket shop looked like a broker\'s office, but it was a betting parlor. You put up margin, and the clerk wrote you a ticket at the last price on the tape.', '对赌行看上去像经纪行，其实是赌场。你交上保证金，职员按纸带上最后一个价格给你开一张单子。'),
      N('No share was ever bought or sold. You were simply betting against the house.', '从来没有真正买卖过一股。你只是在跟店家对赌。'),
      N('If the price moved against you by the amount of your margin, your ticket was finished, automatically.', '如果价格反向移动到把你的保证金吃光，你的单子就自动作废。'),
      N('Small shops even wrote a buy at 20 as 20 and a quarter, taking both commissions up front.', '小店甚至把20的买单写成20¼，提前扣走买卖两笔佣金。'),
      N('So with a one-point margin, the stock had to reach 21 and a quarter to pay you a point, but 19 and a quarter wiped you out.', '所以只交一个点保证金时，股价要涨到21¼你才能赚一个点，而跌到19¼你就输光了。'),
    ] });
  shot({ id: 's_plunger', set: 'home', trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 500, z: 1.05 }, { t: 'L1', x: 960, y: 480, z: 1.0 }],
    cast: [{ id: 'mother', x: 650, y: 860, s: 1.15, expr: 'shock', pose: 'idle', until: 'L1' },
      { id: 'boy', x: 1250, y: 860, s: 1.15, flip: true, pose: 'hold', expr: 'grin', until: 'L1', prop: { t: 'money' } },
      { id: 'clerk', at: 'L1', x: 700, y: 860, s: 1.15, pose: 'point', expr: 'angry' },
      { id: 'larry', at: 'L1', x: 1300, y: 860, s: 1.15, flip: true, pose: 'hips', expr: 'sly' }],
    items: [{ type: 'caption', at: 0.3, until: 'L1', en: 'Age 15: his first $1,000, laid in front of his mother.', zh: '15岁：他把第一个一千美元放在母亲面前。' },
      { type: 'bubble', at: 'L1@banned', x: 330, y: 80, w: 470, kind: 'shout', en: 'No more trades for the Boy Plunger!', zh: '不再接"少年赌徒"的单了！', tx: 650, ty: 360 }],
    lines: [
      N('I made more in the bucket shops than my wages, so I quit my job. At fifteen I laid my first thousand dollars in cash in front of my mother.', '我在对赌行赚的比工资还多，于是辞了工作。十五岁时，我把第一个一千美元现金放在母亲面前。'),
      N('Soon the shops banned me. They called me the Boy Plunger, and I had to trade under false names.', '很快各家对赌行都不接我的单了。他们叫我"少年赌徒"，我只好用化名去交易。'),
    ] });
  lesson(h, { id: 's_cosmo', tag: ['THE HANDICAP', '不平等条件'], title: ['The Cosmopolitan\'s Special Terms', '"大都会"对他的特殊条款'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 240, w: 860, widths: [0.34, 0.33, 0.33], size: 30,
        cols: [['Term', '条款'], ['Others', '其他客户'], ['Livingston', '利文斯顿']],
        rows: [[['Margin', '保证金'], ['1 point', '1个点'], ['3 points', '3个点']], [['Premium', '溢价'], ['none', '无'], ['½ → 1 → 1½ pts', '½→1→1½点']]],
        rowAt: ['L0@margin', 'L1'], hl: ['L0@three', null] },
      { type: 'equation', at: 'L0e', x: 1600, y: 330, size: 46, terms: [{ t: '$10,000', at: 'L0e' }, { t: '÷ $3', zh: '每股3点', at: 'L0e+0.5' }, { t: '= ⅓ the size', zh: '仓位只剩三分之一', at: 'L0e+1', hl: true }] },
      { type: 'note', at: 'L1@before', x: 1380, y: 480, w: 480, h: 170, en: 'A stock had to move up to 1½ points his way before he broke even.', zh: '股价要先朝他的方向走1½点，他才保本。', fill: '#f3c6c0' },
      { type: 'counter', at: 'L2', x: 900, y: 690, from: 0, to: 10000, prefix: '$', size: 110, dur: 1.6, label: ['By age 20, in cash', '20岁时的现金'] }],
    lines: [
      N('In the end only the Cosmopolitan, the richest bucket shop in New England, would take my business, on special terms. Three points of margin instead of one.', '最后，只剩新英格兰最有钱的对赌行"大都会"还肯接我的单，但有特殊条款：保证金三个点，而不是一个点。'),
      N('And a premium of up to one and a half points, so a stock had to move that far my way before I even broke even.', '再加最多一个半点的溢价，所以股价要先朝我的方向走那么远，我才能保本。'),
      N('I still came out ahead. By twenty I had ten thousand dollars in cash.', '即便如此，我仍然赢钱。二十岁时，我有了一万美元现金。'),
    ] });
  shot({ id: 's_sugar', set: 'bucketshop', trans: 'whip', music: 'tense',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'WHEAT'], ['105¼', '72⅛', '74¼'], ['105⅛', '72', '74⅛']], boardSeq: [{ t: 'L0@fell', r: 1, c: 0, v: '103' }, { t: 'L3@108', r: 1, c: 0, v: '108' }], crowd: 7, tickets: true },
    cam: [{ t: 0, x: 960, y: 480, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.45, dur: 1.4 }, { t: 'L3', x: 700, y: 300, z: 1.4, dur: 0.6 }, { t: 'L3@wiped', x: 1200, y: 520, z: 1.2, dur: 0.8 }],
    cast: [{ id: 'larry', x: 900, y: 880, s: 1.2, pose: 'holdR', expr: 'neutral', prop: { t: 'ticket', text: 'SHORT SUGAR', sub: '3,500 @ 105¼' },
        acts: [{ t: 'L1', expr: 'worry' }, { t: 'L2', pose: 'fist', expr: 'shout' }, { t: 'L3', pose: 'relaxed', expr: 'shock' }] },
      { id: 'trader', key: 'williams', x: 1450, y: 900, s: 1.1, flip: true, expr: 'smile', acts: [{ t: 'L3@wiped', pose: 'despair', expr: 'shock' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Short 3,500 Sugar at 105¼, on seven tickets.', zh: '在105¼做空3,500股糖业，共七张单子。' },
      { type: 'sfx', at: 'L1@clicking', x: 1520, y: 300, text: 'CLICK-CLICK', zh: '电报声', size: 70, color: '#f3d27a' },
      { type: 'bubble', at: 'L2', until: 'L3', x: 340, y: 60, w: 460, kind: 'shout', en: 'Close Sugar!', zh: '平掉糖业！', tx: 820, ty: 330 },
      { type: 'sfx', at: 'L3@108', x: 560, y: 230, text: '108!', size: 150, color: '#b3302a', font: 'cond', shake: true }],
    lines: [
      N('Once I was short thirty-five hundred shares of Sugar at a hundred and five and a quarter. It fell to 103, but the way it hesitated bothered me.', '有一次，我在105¼做空了3,500股糖业。它跌到了103，但那种犹豫不决的走法让我不安。'),
      N('Then I heard the shop\'s telegraph clicking. I did not wait for a reason. I slapped my tickets on the counter.', '接着我听到店里的电报机响个不停。我没有等待理由，把单子拍在了柜台上。'),
      L('larry', 'Close Sugar!', '平掉糖业！', { speak: 'larry' }),
      N('They had to close me at 103. Seconds later Sugar printed 108. Henry Williams, short beside me, was wiped out.', '他们只能按103给我平仓。几秒钟后，糖业打出108。在我旁边做空的亨利·威廉斯被洗光了。'),
    ] });
  lesson(h, { id: 's_drive', tag: ['CASE STUDY', '案例分析'], title: ['Anatomy of a "Bucket-Shop Drive"', '拆解"对赌行洗盘"'], music: 'calm',
    items: [{ type: 'chart', at: 0.4, x: 470, y: 230, w: 900, h: 590, xr: [0, 10], yr: [101, 109.5], yTicks: [102, 104, 106, 108], illustrative: true,
        title: ['SUGAR (illustrative)', '糖业（示意）'],
        series: [{ pts: [[0, 105.25], [2, 104.5], [3.5, 103.4], [5, 103], [6.4, 103.1], [7.2, 108], [8.4, 104.3], [10, 103.8]], color: '#b8322a', draw: [['L0', 4], ['L1', 5], ['L1@push', 6], ['L2', 7]] }],
        marks: [{ x: 0, y: 105.25, at: 'L0', en: 'Short 3,500 @ 105¼', zh: '105¼做空3,500股', dx: 20, dy: 40, w: 240 },
          { x: 5, y: 103, at: 'L0@about', en: 'Closed @ 103', zh: '103平仓', dx: -110, dy: 50, w: 190 },
          { x: 7.2, y: 108, at: 'L1@push', en: 'Pushed to 108: shorts wiped out', zh: '推到108：空头被洗光', dx: -330, dy: -10, w: 300 }],
        pnl: { entry: 105.25, shares: 3500, side: 'short', at: 'L0', exitAt: 'L0+2.5', exit: 103, x: 600, y: 300 } },
      { type: 'rule', at: 'L1', x: 1400, y: 230, w: 460, h: 175, n: '1', en: 'Too many shorts? The shop pays a broker to bid the real price up a couple of points.', zh: '空头太多？店家花钱让经纪人把真实价格推高几个点。' },
      { type: 'rule', at: 'L2', x: 1400, y: 425, w: 460, h: 175, n: '2', en: 'Thin margins vanish. Then the price drops right back.', zh: '薄薄的保证金被吃光。然后价格立刻回落。' },
      { type: 'rule', at: 'L3', x: 1400, y: 620, w: 460, h: 175, n: '3', tag: '#2f6b3d', en: 'Act on "something is wrong" before you can name it.', zh: '在说清原因之前，就按"不对劲"行动。', fill: '#cfe3c4' }],
    lines: [
      N('At 103 my ticket showed a profit of two and a quarter points on thirty-five hundred shares. About seventy-eight hundred dollars, before costs.', '在103平仓时，我的3,500股赚了2¼个点，扣除成本前大约7,800美元。'),
      N('What happened next had a name: a bucket-shop drive. When too many customers were short, the shop paid a broker to push the real price up a couple of points.', '接下来发生的事有个名字：对赌行洗盘。当太多客户做空时，店家就花钱让经纪人把真实价格推高几个点。'),
      N('Thin margins were wiped out at once, and then the price fell straight back.', '薄薄的保证金瞬间被吃光，然后价格又立刻跌回去。'),
      N('I escaped because I acted on the feeling that something was wrong, before I could say what it was.', '我之所以逃过一劫，是因为在说清楚哪里不对之前，我就按"不对劲"的感觉行动了。'),
    ] });
};
