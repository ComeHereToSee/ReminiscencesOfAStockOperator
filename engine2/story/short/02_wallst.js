// 30-minute version, part 2: Wall Street is not a bucket shop (Book ch. II–IV)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, title, photo, PD } = h;
  chapter('2 · Wall Street Is Not a Bucket Shop', '二 · 华尔街不是对赌行');
  music('rag');
  title({ id: 's_t2', kicker: 'PART 2 · 第二部分', en: 'Wall Street Is Not a Bucket Shop', zh: '华尔街不是对赌行', size: 110, color: '#2f5d8a',
    sub: ['Book chapters II–IV · c. 1898–1901', '原著第二至四章 · 约1898–1901年'],
    lines: [N('Part two. Wall Street is not a bucket shop.', '第二部分：华尔街不是对赌行。')] });
  photo({ id: 's_wallst', src: `${PD}/wallst_1901_detroit.jpg`, credit: 'Wall Street, c.1901 · Detroit Publishing Co. (public domain)',
    cap: ['Wall Street around 1901. Trinity Church at the end of the street.', '约1901年的华尔街，街道尽头是三一教堂。'],
    kb: [{ t: 0, x: 960, y: 560, z: 1.02 }, { t: 12, x: 930, y: 500, z: 1.16 }],
    lines: [
      N('At twenty-one I came to New York with everything I had: twenty-five hundred dollars.', '二十一岁时，我带着全部家当来到纽约：两千五百美元。'),
      N('I opened an account with a real broker, a member of the Stock Exchange. They called me the Boy Trader.', '我在一家真正的经纪行开了户，那是证券交易所的会员。他们叫我"少年交易员"。'),
    ] });
  shot({ id: 's_broke1', set: 'office', trans: 'wipe',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'UNION PAC', 'N. PAC', 'STEEL'], ['105', '72⅛', '160½', '110', '45¾'], ['104', '71', '159', '109', '45']],
      boardSeq: [{ t: 'L0@tape', r: 1, c: 0, v: '104' }, { t: 'L0@tape+0.6', r: 1, c: 0, v: '103' }, { t: 'L1', r: 1, c: 2, v: '157' }] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.4, dur: 1.5 }],
    cast: [{ id: 'larry', x: 900, y: 890, s: 1.2, pose: 'chin', expr: 'think', acts: [{ t: 'L0@tape', pose: 'point', expr: 'worry' }, { t: 'L1', pose: 'despair', expr: 'sad' }] },
      { id: 'clerk', x: 1460, y: 890, s: 1.1, flip: true, pose: 'write', expr: 'neutral', lookX: -0.5 }],
    items: [{ type: 'counter', at: 'L1', x: 1500, y: 300, from: 2500, to: 0, prefix: '$', size: 120, dur: 2.2, color: '#b3302a', label: ['his stake after six months', '六个月后的本金'] }],
    lines: [
      N('I traded the way I always had, reading the tape. But here the tape was late. By the time it printed a price, the floor had moved on.', '我照老办法交易，读纸带。可在这里，纸带是滞后的。等它打出价格时，交易所里的价格早已变了。'),
      N('Within six months I was broke, and owed the firm a few hundred dollars. My success in the bucket shops had taught me the wrong game.', '不到六个月我就输光了，还欠公司几百美元。我在对赌行的成功，教会我的是一场错误的游戏。'),
    ] });
  lesson(h, { id: 's_diff', tag: ['WHY HE LOST', '为什么会输'], title: ['Two Different Games', '两种完全不同的游戏'], music: 'calm',
    items: [{ type: 'table', at: 'L0', x: 470, y: 230, w: 1400, widths: [0.24, 0.38, 0.38], size: 28, bottom: 830,
      cols: [['', ''], ['Bucket shop', '对赌行'], ['Real broker (NYSE)', '真正的经纪行（纽交所）']],
      rows: [
        [['Your price', '成交价'], ['The last printed price, known before you trade', '纸带上最后的价格，下单前就知道'], ['The real price on the floor, known only after the report', '交易所的真实价格，回报后才知道']],
        [['The tape', '纸带'], ['Is the market', '就是市场本身'], ['Runs behind the floor when trading is fast', '行情一快就落后于场内']],
        [['Your order', '你的订单'], ['Moves nothing', '不影响价格'], ['A big sale pushes the price down against you', '大笔卖出会把价格压向对你不利的方向']],
        [['Margin & stops', '保证金与止损'], ['1–3 points; margin gone = trade closed', '1–3个点；保证金耗尽＝自动平仓'], ['About 10%; no automatic exit', '约10%；没有自动出场']]],
      rowAt: ['L1', 'L2', 'L3', 'L4'], hl: ['L1@learned', 'L2@103', null, null] }],
    lines: [
      N('Why did the bucket-shop champion lose? Because a real broker is a different game, and I played it ignorantly.', '对赌行的常胜将军为什么会输？因为真正的经纪行是另一种游戏，而我对它一无所知。'),
      N('In the shop I knew my price before I traded. At a real broker I learned it only when the report came back.', '在对赌行，我下单前就知道成交价。在真正的经纪行，要等回报回来才知道。'),
      N('When the tape printed Sugar at 105, the floor might already be at 104, or 103.', '当纸带打出糖业105时，场内可能已经到了104，甚至103。'),
      N('My own orders now moved the price. Selling a lot of stock pushed it down against me.', '我自己的订单如今会推动价格。大量卖出会把价格压向对我不利的方向。'),
      N('And there was no automatic exit. In the shop, when my margin ran out, the trade simply closed: the best stop-loss there is.', '而且没有自动出场。在对赌行，保证金一用完，交易就自动结束：那是最好的止损。'),
    ] });
  shot({ id: 's_kent', set: 'bucketshop', trans: 'whip', music: 'rag',
    setOpts: { shopName: 'DOLAN & CO.', crowd: 7, board: [['SUGAR', 'B.R.T.', 'T.C.&I.'], ['104⅛', '71⅞', '88'], ['104', '71¾', '87½']] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.05 }, { t: 'L1', on: 'manager', z: 1.35, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.15, pose: 'hips', expr: 'sly' },
      { id: 'manager', x: 1300, y: 890, s: 1.15, flip: true, pose: 'idle', expr: 'neutral', acts: [{ t: 'L1', pose: 'pointL', expr: 'angry' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'St. Louis. Trading under the name "Horace Kent".', zh: '圣路易斯。化名"霍勒斯·肯特"交易。' },
      { type: 'counter', at: 'L0@two', x: 400, y: 330, from: 0, to: 2800, prefix: '+$', size: 100, dur: 1.4, color: '#2f6b3d', label: ['in two days', '两天之内'] },
      { type: 'bubble', at: 'L1', x: 1150, y: 70, w: 600, kind: 'shout', en: 'You took more in two days than three hundred suckers bring me in two weeks. Toddle along!', zh: '你两天拿走的，比三百个傻瓜两周给我的还多。走吧！', tx: 1300, ty: 470, size: 28 }],
    lines: [
      N('To win back a stake, I went to the bucket shops of St. Louis under a false name. In two days I made twenty-eight hundred dollars.', '为了赢回本钱，我化名去了圣路易斯的对赌行。两天就赚了两千八百美元。'),
      N('On the third morning the owner called me in by my real name and showed me the door.', '第三天早上，老板叫出了我的真名，把我请出了门。'),
    ] });
  photo({ id: 's_boom', src: `${PD}/nyse_exterior_c1904_detroit.jpg`, credit: 'New York Stock Exchange, c.1904 · Detroit Publishing Co. (public domain)', music: 'rag',
    cap: ['Historical note: 1901 was a boom. NYSE volume passed 3 million shares in a day for the first time.', '历史注：1901年是大繁荣。纽交所日成交量首次超过300万股。'], capW: 760,
    items: [{ type: 'counter', screen: true, at: 'L1', x: 1500, y: 300, from: 0, to: 50000, prefix: '$', size: 110, dur: 1.6, color: '#f6d77a', stroke: '#17120c', label: ['his balance', '他的账户'] }],
    lines: [
      N('Back in New York, 1901 brought a boom like nothing before it. The public went stock mad.', '回到纽约，1901年迎来了前所未有的大繁荣。公众为股票疯狂。'),
      N('I held a thousand shares of Northern Pacific against everyone\'s advice, took thirty points of profit near 110, and had nearly fifty thousand dollars.', '我不顾所有人的劝告，持有一千股北太平洋，在110附近赚了30个点，账户里有了将近五万美元。'),
    ] });
  shot({ id: 's_corner', set: 'dark', trans: 'dip', music: 'tense', cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 540, z: 1.07 }],
    items: [
      { type: 'text', at: 0.2, x: 960, y: 40, size: 50, font: 'serif', fill: '#f1ead6', zfill: '#f6d77a', en: 'May 1901: the fight for Northern Pacific', zh: '1901年5月：北太平洋铁路控制权之争' },
      { type: 'photo', at: 'L0', x: 140, y: 230, w: 380, h: 470, rot: -3, src: `${PD}/portrait_eh_harriman_1908_bain.jpg`, en: 'E. H. Harriman', zh: '哈里曼（联合太平洋）' },
      { type: 'photo', at: 'L0@Hill', x: 600, y: 230, w: 380, h: 470, rot: 2, src: `${PD}/portrait_james_j_hill_c1915_bain.jpg`, en: 'James J. Hill', zh: '詹姆斯·希尔（大北方）' },
      { type: 'photo', at: 'L0@Morgan', x: 1060, y: 230, w: 380, h: 470, rot: -2, src: `${PD}/portrait_jp_morgan_1902.jpg`, en: 'J. P. Morgan', zh: 'J.P.摩根' },
      { type: 'counter', at: 'L1@shares', x: 1690, y: 470, from: 110, to: 1000, prefix: '$', size: 130, dur: 2.4, color: '#f6d77a', stroke: '#17120c', label: ['N. Pac. high, May 9', '北太平洋 5月9日最高价'] },
      { type: 'stamp', at: 'L2', x: 960, y: 800, en: 'CORNER → PANIC', zh: '逼空→恐慌', size: 80 }],
    lines: [
      N('Historical background. Harriman\'s Union Pacific group fought the Hill and Morgan interests for control of Northern Pacific.', '历史背景：哈里曼的联合太平洋集团，与希尔和摩根一方争夺北太平洋铁路的控制权。'),
      N('Both sides bought every share they could find. Short sellers could not get shares to deliver, and on May ninth the stock traded as high as a thousand dollars.', '双方见股就买。卖空者借不到股票交割，5月9日该股一度涨到一千美元。'),
      N('To raise cash, the shorts dumped everything else. The rest of the market collapsed.', '为了筹钱，空头抛售其他一切股票。整个市场随之崩溃。'),
    ] });
  lesson(h, { id: 's_may9', tag: ['CASE STUDY · MAY 9, 1901', '案例 · 1901年5月9日'], title: ['Right, and Wiped Out', '判断对了，却输光了'], music: 'tense',
    gest: ['explain', 'point', 'explainR', 'despair', 'explain'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 230, w: 1000, h: 600, xr: [0, 10], yr: [70, 106], yTicks: [75, 80, 85, 90, 95, 100, 105], illustrative: true, cursor: false,
        xTicks: [[0, 'open', '开盘'], [5, 'midday', '中午'], [10, 'close', '收盘']], title: ['A typical stock that day', '当天一只典型股票'],
        series: [
          { pts: [[0, 104], [1.5, 100], [3, 90], [4, 81], [5, 79], [6, 84], [7, 92], [8.5, 96], [10, 97]], color: '#b3302a', draw: [['L0', 4], ['L1', 5], ['L2@covered', 7], ['L3', 8]], label: ['Real price on the floor', '场内真实价格'] },
          { pts: [[0, 104], [1.5, 103], [3, 100], [4, 97], [5, 90], [6, 82], [7, 80], [8.5, 88], [10, 96]], color: '#2f5d8a', dash: '16 10', width: 5, cursor: false, draw: [['L0', 4], ['L1', 5], ['L2@covered', 7], ['L3', 8]], label: ['Printed tape (minutes late)', '纸带报价（迟了几分钟）'], labelBelow: true }],
        marks: [{ x: 4, y: 81, at: 'L1@sold', en: 'Tape says 100. His sells fill near 80: −20 pts', zh: '纸带显示100，卖单成交在80附近：亏20点', dx: 40, dy: 40, w: 330, fill: '#f3c6c0' },
          { x: 7, y: 92, at: 'L2@fifteen', en: 'He figures ~80. His buys fill ~15 pts higher', zh: '他按80左右计算，买单却高了约15点', dx: -380, dy: -150, w: 330, fill: '#f3c6c0' }] },
      { type: 'equation', at: 'L3', x: 1680, y: 380, size: 56, terms: [{ t: '−20', zh: '卖出滑点', at: 'L3' }, { t: '−15', zh: '买入滑点', at: 'L3+0.5' }] },
      { type: 'equation', at: 'L3+1', x: 1680, y: 520, size: 64, terms: [{ t: '= −35 pts', zh: '一天亏35点', at: 'L3+1', hl: true }] },
      { type: 'note', at: 'L4', x: 1500, y: 600, w: 380, h: 220, size: 28, en: 'In a fast market the tape shows prices that no longer exist.', zh: '行情剧烈时，纸带显示的是已经不存在的价格。', fill: '#f6d77a', anim: 'slideU' }],
    lines: [
      N('On May ninth I had nearly fifty thousand dollars and no stocks. I expected a terrible break, and I was right.', '5月9日，我手里有将近五万美元现金，没有持股。我预料会有一场可怕的暴跌，我判断对了。'),
      N('I sent selling orders at the market. The tape said 100, but my stocks were sold around 80, twenty points lower.', '我按市价下了卖单。纸带上是100，可我的股票是在80附近卖出的，低了20个点。'),
      N('At those prices my shorts were already the bargains I meant to buy, so I covered at once and went long. My buys cost fifteen points more than I figured.', '在那个价位，我的空单已经成了我打算买入的便宜货，于是我马上平仓并做多。买入成本却比我算的高了15个点。'),
      N('Thirty-five points lost in a single day. I was dead right about the market, and I lost every cent.', '一天之内亏了35个点。我对市场的判断完全正确，却输掉了每一分钱。'),
      N('I was trading on prices that no longer existed. Tape reading alone was not enough. I had to anticipate the big move, not bet on the next quote.', '我是在按已经不存在的价格交易。光会读纸带是不够的。我必须预判大行情，而不是赌下一个报价。'),
    ] });
  lesson(h, { id: 's_rules2', tag: ['RULES FROM PART 2', '第二部分的规则'], title: ['What the Wall Street Years Taught', '华尔街岁月的教训'], music: 'calm',
    items: [
      { type: 'rule', at: 'L0', x: 470, y: 220, w: 1400, h: 130, n: '1', en: 'Know which game you are in. Your fill is not the price on the tape.', zh: '弄清你在玩哪种游戏。你的成交价不等于纸带上的价格。' },
      { type: 'rule', at: 'L1', x: 470, y: 370, w: 1400, h: 130, n: '2', en: 'Don\'t trade every day. "The Wall Street fool thinks he must trade all the time."', zh: '不要天天交易。"华尔街的傻瓜认为自己必须一直交易。"' },
      { type: 'rule', at: 'L2', x: 470, y: 520, w: 1400, h: 130, n: '3', en: 'Back opinions with money. Only losing money proves you wrong.', zh: '用钱来支持观点。只有亏钱才能证明你错了。' },
      { type: 'rule', at: 'L3', x: 470, y: 670, w: 1400, h: 130, n: '4', tag: '#b3302a', en: 'There is only one side of the market: not bull or bear, but the right side.', zh: '市场只有一边：不是多头也不是空头，而是正确的一边。' }],
    lines: [
      N('So, the rules. Know which game you are in. On a real exchange your fill is not the price on the tape.', '规则如下。弄清你在玩哪种游戏。在真正的交易所里，你的成交价并不是纸带上的价格。'),
      N('Don\'t trade every day. Nobody has good reasons to trade every day. The Wall Street fool thinks he must trade all the time.', '不要天天交易。没有人每天都有好理由交易。华尔街的傻瓜认为自己必须一直交易。'),
      N('Back your opinions with your money. Only losing money convinced me I was wrong.', '用你的钱支持你的观点。只有亏钱才能让我相信自己错了。'),
      N('And remember: there is only one side to the stock market. Not the bull side or the bear side, but the right side.', '记住：股市只有一边。不是多头那边，也不是空头那边，而是正确的那边。'),
    ] });
};
