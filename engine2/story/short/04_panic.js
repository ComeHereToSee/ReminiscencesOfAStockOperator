// 30-minute version, part 4: right and busted, then the Panic of 1907 (Book ch. VIII–IX)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, title, photo, PD } = h;
  chapter('4 · The Panic of 1907', '四 · 1907年大恐慌');
  music('tense');
  title({ id: 's_t4', kicker: 'PART 4 · 第四部分', en: 'The Panic of 1907', zh: '1907年大恐慌', color: '#5a2a6a',
    sub: ['Book chapters VIII–IX · 1906–1907', '原著第八至九章 · 1906–1907年'],
    lines: [N('Part four. Right and busted, and then the Panic of 1907.', '第四部分：看对了却破产，然后是1907年大恐慌。')] });
  lesson(h, { id: 's_busted', tag: ['MISTAKE · 错误', '时机不对'], tagColor: '#b3302a', title: ['Right on Direction, Wrong on Timing', '方向对了，时机错了'],
    gest: ['explain', 'point', 'despair', 'chin'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 610, xr: [0, 10], yr: [80, 112], yTicks: [85, 95, 105], illustrative: true, cursorLabel: false,
        title: ['His 1906 short campaign', '他1906年的做空战役'],
        series: [{ pts: [[0, 100], [1, 96], [2, 103], [3, 99], [4, 106], [5, 101], [6, 108], [7, 104], [8, 110], [9, 96], [10, 84]], color: '#2f5d8a', draw: [['L0', 2], ['L1', 6], ['L2', 8], ['L3', 10]] }],
        marks: [{ x: 1, y: 96, at: 'L0@plunged', en: 'Sells short', zh: '做空', dx: -40, dy: 50, w: 150 },
          { x: 2, y: 103, at: 'L1', en: 'Rally: covers at a loss', zh: '反弹：亏损平仓', dx: -60, dy: -130, w: 210, fill: '#f3c6c0' },
          { x: 8, y: 110, at: 'L2', en: 'Last rally: wiped out', zh: '最后一次反弹：清零', dx: -300, dy: -40, w: 230, fill: '#f3c6c0' },
          { x: 10, y: 84, at: 'L3', en: 'The fall he foresaw, months later', zh: '他预见的下跌，几个月后才来', dx: -330, dy: -140, w: 280 }] },
      { type: 'note', at: 'L3@telescope', x: 1500, y: 260, w: 380, h: 280, size: 29, fill: '#f6d77a', en: '"I had been looking through a telescope. The storm was farther off than it seemed."', zh: '"我一直在用望远镜看。风暴比看上去远得多。"', anim: 'pop' },
      { type: 'note', at: 'L3e', x: 1500, y: 570, w: 380, h: 250, size: 27, en: 'Fix: sell only into a falling market, and add only as it keeps falling.', zh: '对策：只在下跌的市场中卖出，并只在继续下跌时加码。', fill: '#cfe3c4', anim: 'slideU' }],
    lines: [
      N('In 1906 I saw a money squeeze coming. Real wealth had been destroyed by war and the earthquake. So I plunged on the short side.', '1906年，我预见到一场资金紧缩。战争和地震毁掉了大量真实财富。于是我重仓做空。'),
      N('The market dipped, then rallied. My paper profits vanished, and I covered. I sold again, and it rallied again.', '市场下跌，然后反弹。我的账面利润化为乌有，只好平仓。我再次卖空，它又一次反弹。'),
      N('Each rally took another bite, until the last one cleaned me out. I was nearly twenty-seven, twelve years in the game. Right, and busted.', '每次反弹都咬掉我一块，直到最后一次把我洗光。那年我快二十七岁，入行十二年。看对了，却破产了。'),
      N('The storm I saw was real, but I had been looking through a telescope. It was much farther off than it seemed. I had sold too soon.', '我看到的风暴是真实的，但我一直在用望远镜看。它比看上去远得多。我卖得太早了。'),
    ] });
  shot({ id: 's_signal', set: 'paper', trans: 'page', music: 'tense', cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 520, z: 1.05 }],
    items: [
      { type: 'tag', at: 0.15, x: 80, y: 36, en: 'THE SIGNAL HE WAITED FOR', zh: '他等待的信号' },
      { type: 'newspaper', at: 'L0', x: 420, y: 330, w: 640, h: 420, rot: -5, paper: 'Financial Notices', date: 'WINTER 1906–07', en: 'GREAT NORTHERN & NORTHERN PACIFIC: NEW STOCK, PAYABLE IN INSTALMENTS', zh: '大北方与北太平洋：发行新股，分期缴款', size: 36 },
      { type: 'newspaper', at: 'L1@Paul', x: 980, y: 380, w: 640, h: 420, rot: 4, spin: false, paper: 'Financial Notices', date: 'DAYS LATER', en: 'ST. PAUL ANNOUNCES ISSUE, PAYABLE BEFORE THE OTHERS', zh: '圣保罗铁路宣布发行，缴款日早于前两家', size: 36 },
      { type: 'flow', at: 'L2', x: 120, y: 690, w: 1680, bh: 170, size: 27, nodes: [
        { en: 'Railroads need cash', zh: '铁路公司急需现金', at: 'L2' }, { en: 'They race each other for scarce money', zh: '彼此抢夺稀缺的资金', at: 'L2@racing' },
        { en: 'Money is tight, and will be tighter', zh: '资金紧张，还会更紧', at: 'L2@later' }, { en: 'SELL STOCKS', zh: '卖出股票', at: 'L2@sell', color: '#f3c6c0' }] },
      { type: 'stamp', at: 'L3', x: 1600, y: 230, en: 'GN pfd ~330 → −60 to −70 pts', zh: '大北方优先股约330→跌60–70点', size: 54 }],
    lines: [
      N('This time I waited for a real signal. Great Northern and Northern Pacific announced new stock, payable in installments. That was something new.', '这一次，我等待真正的信号。大北方和北太平洋宣布发行新股，分期缴款。这是前所未有的。'),
      N('It was a signed confession that money was tight. Days later St. Paul announced an issue, payable before the other two.', '这等于白纸黑字承认资金紧张。几天后，圣保罗铁路也宣布发行新股，缴款日比前两家还早。'),
      N('St. Paul was racing the others for what little money there was. If money was that scarce now, what would it be later? Sell them!', '圣保罗在和别人抢那点仅有的资金。如果现在资金就这么紧，以后会怎样？卖！'),
      N('I sold Great Northern preferred at around 330. By February 1907 it was sixty or seventy points lower, and I covered at a big profit.', '我在330左右卖空大北方优先股。到1907年2月，它跌了六七十个点，我平仓获得了丰厚利润。'),
    ] });
  photo({ id: 's_palm', src: `${PD}/palmbeach_breakers_veranda_c1900_detroit.jpg`, credit: 'The Breakers, Palm Beach, c.1900 · Detroit Publishing Co. (public domain)', music: 'calm',
    cap: ['Spring 1907, Palm Beach. The broker\'s branch had a direct wire to Wall Street.', '1907年春，棕榈滩。经纪行分部有直通华尔街的电报线。'],
    lines: [N('In the spring of 1907 I was fishing off Palm Beach. I walked into a broker\'s branch, and saw Anaconda about to cross 300.', '1907年春，我在棕榈滩外海钓鱼。我走进一家经纪行分部，看到安纳康达铜业即将突破300。')] });
  lesson(h, { id: 's_anaconda', tag: ['METHOD 4 · SET THE FAILURE POINT FIRST', '方法四 · 事先设好认错点'], title: ['Anaconda: Being Right by Ceasing to Be Wrong', '安纳康达：停止犯错，就是做对'],
    titleSize: 48, gest: ['explain', 'point', 'explainR', 'pointUp', 'explain', 'relaxed'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1050, h: 620, xr: [0, 10], yr: [288, 314], yTicks: [290, 295, 300, 305, 310], illustrative: true, cursorFmt: 'frac',
        xTicks: [[1, 'day 1', '第1天'], [4, 'day 2', '第2天'], [7, 'day 3', '第3天'], [9.5, 'day 4', '第4天']], title: ['Anaconda Copper, 1907', '安纳康达铜业，1907年'],
        hlines: [{ v: 310, at: 'L2', color: '#2f6b3d', en: 'A real breakout runs to 310', zh: '真突破应直奔310' }, { v: 301, at: 'L2@301', color: '#b3302a', en: 'Failure point: 301', zh: '认错点：301', below: true }],
        series: [{ pts: [[0, 297], [1, 300.5], [2.5, 300], [4, 292], [5.5, 298], [6.3, 302.75], [7.2, 301], [8, 298.75], [9.5, 295.5], [10, 294]], color: '#7a4a22', draw: [['L0', 1], ['L1', 3], ['L2', 5], ['L3', 6], ['L4', 7], ['L5', 9]] }],
        marks: [{ x: 1, y: 300.5, at: 'L0@bought', en: 'Buys 8,000 (full-share equivalent) near 300', zh: '在300附近买入相当于8,000股', dx: -80, dy: -140, w: 300 },
          { x: 4, y: 292, at: 'L1@292', en: 'Wires down. Only quote: 292', zh: '电报中断，唯一报价：292', dx: 30, dy: 30, w: 260, fill: '#f3c6c0' },
          { x: 7.2, y: 301, at: 'L4', en: 'Touches 301: SELL ALL at the market', zh: '触及301：全部按市价卖出', dx: 30, dy: -150, w: 260, fill: '#f6d77a' }] },
      { type: 'table', at: 'L4@fills', x: 1560, y: 230, w: 330, widths: [0.5, 0.5], size: 26, bottom: 560,
        cols: [['Fill', '成交'], ['Price', '价格']], rows: [[['1st', '第一笔'], ['299¾', '299¾']], [['next', '随后'], ['299⅝', '299⅝']], [['last', '最后'], ['298¾', '298¾']]],
        rowAt: ['L4@fills', 'L4@fills+0.4', 'L4@fills+0.8'] },
      { type: 'note', at: 'L5', x: 1560, y: 600, w: 330, h: 230, size: 26, fill: '#f6d77a', en: '"To be right by ceasing to be wrong."', zh: '"停止犯错，就是做对。"', anim: 'pop' }],
    lines: [
      N('My theory: when a stock first crosses 100, 200 or 300, it usually runs well beyond. I bought the equivalent of eight thousand full shares. Every point was eight thousand dollars.', '我的理论是：股票第一次突破100、200或300时，通常会大幅冲过去。我买入了相当于八千整股的仓位。每一个点就是八千美元。'),
      N('The next day a storm brought the wires down. All day we had one quotation: Anaconda, 292. A paper loss of nearly a hundred thousand dollars.', '第二天，一场风暴吹断了电报线。一整天我们只收到一个报价：安纳康达，292。账面亏损将近十万美元。'),
      N('Before it reopened, I set my test. A real breakout should run straight to 310. A fall back to 301 would mean the move was a fake.', '在它恢复交易之前，我设定了检验标准。真正的突破应该直奔310。回落到301，就说明突破是假的。'),
      N('It opened at 298, climbed to 302 and three quarters, and then began to fade.', '它开盘298，涨到302¾，然后开始回落。'),
      N('When it touched 301, I sold everything at the market. My fills came back from 299 and three quarters down to 298 and three quarters.', '当它触及301时，我按市价全部卖出。成交回报从299¾一路到298¾。'),
      N('The next day it opened below 296 and kept falling. When you are wrong, the only thing to do is to be right by ceasing to be wrong.', '第二天它开盘就低于296，并一路下跌。当你犯错时，唯一该做的就是：停止犯错，这样你就对了。'),
    ] });
  photo({ id: 's_run', src: `${PD}/bank_run_19th_ward_1907_bain.jpg`, credit: 'Depositors outside a New York bank, 1907 · Bain News Service (public domain)', music: 'tense',
    cap: ['Historical note: October 1907. The Knickerbocker Trust failed on Oct 22; runs spread to other trust companies and banks.', '历史注：1907年10月。尼克博克信托于10月22日倒闭，挤兑蔓延到其他信托公司和银行。'], capW: 760,
    lines: [
      N('By the autumn I was short again, and this time the timing was right. In October came the panic: depositors lined up to pull their money out of the trust companies.', '到了秋天，我又做空了，这一次时机对了。10月，恐慌爆发：储户排起长队，从信托公司里提走存款。'),
    ] });
  lesson(h, { id: 's_callmoney', tag: ['HOW THE PANIC WORKED', '恐慌的机制'], title: ['Call Money: The Market\'s Oxygen', '活期拆借：股市的氧气'], music: 'tense',
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 760, h: 600, title: ['Interest on call loans, per year', '活期贷款年利率'], max: 150, vsize: 34,
        bars: [{ v: 6, vl: '6%', en: 'National City Bank\'s usual ceiling', zh: '花旗银行平常的上限', at: 'L0', color: '#2f6b3d' }, { v: 150, vl: '100–150%', en: 'Oct 1907: borrowers named their own rate', zh: '1907年10月：借款人自己报价', at: 'L1', color: '#b3302a' }] },
      { type: 'flow', dir: 'v', at: 'L2', x: 1290, y: 220, w: 590, bh: 120, gap: 60, size: 27, nodes: [
        { en: 'Brokers borrow "call money" daily to carry customers\' stocks', zh: '经纪商每天借活期资金来为客户持仓', at: 'L2' },
        { en: 'Money vanishes: rates explode', zh: '资金消失：利率暴涨', at: 'L2@tighter' },
        { en: 'Loans are called: stocks dumped at any price', zh: '贷款被收回：股票不计价格抛售', at: 'L2@lower' },
        { en: 'Prices fall: more loans called', zh: '价格下跌：更多贷款被收回', at: 'L3', color: '#f3c6c0' }] }],
    lines: [
      N('Brokers carried their customers\' stocks with money borrowed on call, day to day. National City Bank boasted it never lent above six percent.', '经纪商用每日可收回的活期借款，为客户持有股票。花旗银行一向夸口说它的贷款利率从不超过6%。'),
      N('In October 1907 there was almost no money at any price. Borrowers bid one hundred to one hundred and fifty percent a year.', '1907年10月，几乎任何价格都借不到钱。借款人出价年息100%到150%。'),
      N('As money got tighter, call rates went higher and stock prices lower. Loans were called, and stocks were dumped to repay them.', '资金越紧，拆借利率越高，股价越低。贷款被收回，股票被抛售还债。'),
      N('A vicious circle. I had foreseen it, and I was short.', '这是恶性循环。我早已预见到了，而且我是空头。'),
    ] });
  shot({ id: 's_oct24', set: 'floor', trans: 'whip', music: 'tense', setOpts: { agitated: true, paperN: 30 },
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'L1', on: 'banker', z: 1.4, dur: 1 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'morgan', key: 'banker', look: { hat: 'bowler', hatColor: '#1d1d1d', hair: '#5a4a3a', mus: 'walrus', musColor: '#5a4a3a', hairStyle: 'center', stout: false, age: 1 }, x: 960, y: 900, s: 1.2, pose: 'pointUp', expr: 'determined', at: 'L1' }],
    items: [{ type: 'caption', at: 0.3, en: 'October 24, 1907. The Money Post on the Exchange floor.', zh: '1907年10月24日。交易所的"资金柱"旁。' },
      { type: 'counter', screen: true, at: 'L0@no', x: 1500, y: 300, from: 6, to: 100, suffix: '%+', size: 110, dur: 1.5, color: '#f6d77a', stroke: '#17120c', label: ['call money', '拆借利率'], until: 'L1' },
      { type: 'bubble', at: 'L1', x: 1150, y: 140, w: 600, kind: 'shout', en: 'Ten million dollars to lend! Take it easy! There will be enough for everybody!', zh: '有一千万美元可贷！别慌！人人都有份！', tx: 1030, ty: 480, size: 30 },
      { type: 'stamp', at: 'L2', x: 480, y: 330, en: 'MORGAN\'S MONEY', zh: '摩根的资金', size: 70 }],
    lines: [
      N('On October twenty-fourth, a hundred brokers crowded the Money Post, and there was no money at all.', '10月24日，上百名经纪人挤在"资金柱"旁，却一分钱也借不到。'),
      L('banker', 'I am authorized to lend ten million dollars. Take it easy! There will be enough for everybody!', '我受权放贷一千万美元。别慌！人人都有份！', { speak: 'banker' }),
      N('J. P. Morgan had organized the bankers to put up the money. The worst was over.', 'J.P.摩根组织银行家们拿出了资金。最坏的时刻过去了。'),
    ] });
  lesson(h, { id: 's_king', tag: ['THE TURN', '转折'], title: ['King for a Day', '一日之王'], music: 'calm', gest: ['explain', 'explainR', 'up', 'explain'], expr: [null, null, 'smile', null],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 230, w: 1400, bh: 200, size: 28, nodes: [
        { num: 1, en: 'Short into the panic', zh: '在恐慌中做空', at: 'L0' }, { num: 2, en: 'Cover at the bottom', zh: '在底部平仓', at: 'L1' },
        { num: 3, en: 'Buy 100,000 shares long', zh: '做多买入10万股', at: 'L1@hundred', color: '#cfe3c4' }, { num: 4, en: 'No new shorts for 9 months', zh: '九个月不再做空', at: 'L1@nine' }] },
      { type: 'counter', at: 'L2', x: 1170, y: 600, from: 0, to: 1000000, prefix: '$', suffix: '+', size: 120, dur: 2, color: '#2f6b3d', label: ['his worth after the close, Oct 24', '10月24日收盘后的身家'] },
      { type: 'note', at: 'L3', x: 470, y: 760, w: 1400, h: 100, size: 30, fill: '#f6d77a', en: 'His summary: read the tape, time the start, sit tight, and above all study general conditions.', zh: '他的总结：读纸带、把握启动时机、坐得住，最重要的是研究整体形势。', anim: 'slideU' }],
    lines: [
      N('A few more sell orders and the Exchange might have had to close. Staying short would only deepen the damage. I covered, and began to buy.', '再多几笔卖单，交易所可能就得关门。继续做空只会加深伤害。我平掉空仓，开始买入。'),
      N('I bought a hundred thousand shares at bottom prices, and did not sell another stock short for nine months.', '我在最低价位买入了十万股，此后九个月没有再卖空一只股票。'),
      N('After the close I was worth over a million dollars. For one day, I was king.', '收盘后，我的身家超过一百万美元。有那么一天，我是王者。'),
      N('My greatest discovery was not tape reading. It was studying general conditions, to anticipate what was coming.', '我最大的发现不是读纸带，而是研究整体形势，以预见将要发生的事。'),
    ] });
};
