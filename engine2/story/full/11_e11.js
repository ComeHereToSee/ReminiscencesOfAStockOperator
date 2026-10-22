// Full version, episode 11: Making a Market (Book ch. XXI–XXII)
// Imperial Steel (a legitimate markup on calls), the Petroleum Products pool (supporting a stock in a turning market),
// the war-boom promoters, and Consolidated Stove (the boy banker, the overhang, Wolff's tip and the dressmaker).
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  // looks for book people who have no drawn character of their own
  const SYND = { hat: 'bowler', hatColor: '#1d1d1d', hair: '#8a8478', hairStyle: 'gray', mus: 'walrus', musColor: '#8a8478', stout: true, age: 1 };
  const PRENTISS = { hair: '#3a2a1a', hairStyle: 'side', mus: 'thin', musColor: '#3a2a1a', coat: '#2a2f3a', vest: '#4a4f5a', tieColor: '#7a2a22', age: 1 };
  const BARNES = { hat: 'bowler', hatColor: '#2a2a2a', hair: '#6a4a2a', mus: 'thin', musColor: '#6a4a2a', coat: '#3a3326', vest: '#5a5040' };
  const KANE = { hair: '#4a3a2a', hairStyle: 'center', mus: 'walrus', musColor: '#4a3a2a', glasses: 'round', coat: '#2a2a33', vest: '#3a3a46' };
  const GORDON = { hair: '#d8d4cc', hairStyle: 'gray', beard: 'chops', beardColor: '#d8d4cc', stout: true, age: 2, coat: '#1e1e24' };

  episode(11, 'Reminiscences_E11_Making_a_Market');
  chapter('Chapter XXI · Imperial Steel and Petroleum Products', '第二十一章 · 帝国钢铁与石油产品');
  music('calm');
  title({ id: 'e11_title', kicker: 'EPISODE 11 · 第11集', en: 'Making a Market', zh: '造市', color: '#7a4a22',
    sub: ['Book chapters XXI–XXII · after the 1915 comeback', '原著第二十一至二十二章 · 1915年东山再起之后'],
    lines: [N('Episode eleven. Making a market: two jobs that worked, one that failed, and why.', '第十一集：造市。两次成功，一次失败，以及原因。')] });

  // ---- Imperial Steel: the offer ----
  shot({ id: 'e11_offer', set: 'study', setOpts: { ticker: true, tickerX: 1660, lamp: false }, trans: 'wipe',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L2', on: 'synd', z: 1.35, dur: 1.2 }, { t: 'L3', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L3e', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'cross', expr: 'neutral' }, { t: 'L3', pose: 'point', expr: 'determined' }] },
      { id: 'generic', key: 'synd', look: SYND, x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'idle', expr: 'worry' }, { t: 'L2', pose: 'explain', expr: 'smile' }, { t: 'L3', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.4, en: 'Imperial Steel: a sound company that nobody traded.', zh: '帝国钢铁：公司不错，却无人交易。' },
      { type: 'bars', at: 'L1@thirty', until: 'L2', x: 70, y: 200, w: 520, h: 380, max: 100, vsize: 34, title: ['Who held the stock', '谁持有这只股票'],
        bars: [{ v: 30, vl: '30%', en: 'Public', zh: '公众', at: 'L1@thirty', color: '#9a9182' }, { v: 70, vl: '70%', en: 'Syndicate', zh: '承销团', at: 'L1@seventy', color: '#7a4a22' }] },
      { type: 'bubble', at: 'L2', until: 'L3', x: 990, y: 70, w: 560, en: 'Make us a market, and sell our holdings at better prices than we could get. Your terms?', zh: '请为我们造个市场，把我们的股票卖出比我们自己卖更好的价钱。您的条件？', tx: 1250, ty: 590 },
      { type: 'note', at: 'L3@valuable', x: 1300, y: 110, w: 560, h: 150, size: 30, fill: '#cfe3c4', anim: 'slideU', en: 'Experts: valuable. A rise = the market discounting the future.', zh: '专家：确有价值。上涨＝市场提前反映未来。' }],
    lines: [
      N('Here is how a market is made. Imperial Steel was sound, but nobody traded it.', '造市是怎么回事？看帝国钢铁。这家公司不错，却没人交易。'),
      N('The public held about thirty percent; the syndicate that brought it out controlled the other seventy.', '公众持有约百分之三十，发行它的承销团控制着另外百分之七十。'),
      L('banker', 'Make us a market, and sell our holdings at better prices than we could get. Your terms?', '请为我们造个市场，把我们的股票卖出比我们自己卖更好的价钱。您的条件？', { speak: 'synd' }),
      N('My experts found it valuable, so a rise would simply be the market discounting the future. I took the job.', '我的专家查明它确有价值，所以上涨只不过是市场在提前反映未来。我接下了这份工作。'),
    ] });

  lesson(h, { id: 'e11_fee', tag: ['THE DEAL', '交易条件'], title: ['Paid Only If It Works: Calls from 70 to 100', '成功了才有报酬：70到100的看涨期权'], titleSize: 48,
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'equation', at: 'L0@calls', x: 1180, y: 330, size: 54, terms: [
        { t: 'calls on 100,000 sh', zh: '十万股看涨期权', at: 'L0@calls' }, { t: 'strikes 70 → 100', zh: '行权价从70排到100', at: 'L0@70', hl: true }] },
      { type: 'note', at: 'L1', x: 470, y: 400, w: 680, h: 190, size: 30, anim: 'slideU', en: 'A call = the right to buy at a set price. It pays only if the stock rises above it.', zh: '看涨期权＝按约定价买入的权利。股价涨过约定价才值钱。' },
      { type: 'note', at: 'L1@insiders', x: 1190, y: 400, w: 680, h: 190, size: 30, fill: '#f3c6c0', en: 'Insiders couldn\'t sell even 50,000 sh at 70. He earns only if they make millions.', zh: '内部人在70连5万股都卖不掉。他们先赚到几百万，他才有报酬。' },
      { type: 'note', at: 'L2', x: 470, y: 600, w: 1400, h: 112, size: 30, fill: '#cfe3c4', anim: 'slideU', en: 'Protection: the syndicate\'s 70% locked under a trust agreement. Nobody can dump stock on him.', zh: '自我保护：承销团的70%股票按信托协议锁定，谁也没法把股票倒给他。' },
      { type: 'note', at: 'L3', x: 470, y: 722, w: 1400, h: 116, size: 28, fill: '#f6d77a', align: 'center', en: 'Illegal today. Studied only to recognise it, from the buyer\'s side.', zh: '如今属违法行为。学习它，只为站在买方立场认出它。' }],
    lines: [
      N('My fee: no cash, only calls on a hundred thousand shares, at prices from 70 up to 100.', '我的报酬：不要现金，只要十万股的看涨期权，行权价从70排到100。'),
      N('A call pays only if the stock rises above its price, and the insiders couldn\'t sell even fifty thousand at 70.', '看涨期权只有在股价涨过约定价时才值钱。而内部人在70连五万股都卖不掉。'),
      N('To protect myself, the syndicate locked its seventy percent under a trust agreement, so nobody could dump stock on me.', '为了保护自己，我让承销团把百分之七十的股票按信托协议锁定，这样谁也没法把股票倒给我。'),
      N('Operations like this are illegal today; we study them only to recognise them, from the buyer\'s side.', '这类操作如今是违法的；我们研究它们，只是为了站在买方的位置上认出它们。'),
    ] });

  photo({ id: 'e11_floor', src: `${PD}/nyse_trading_floor_1922.jpg`, credit: 'NYSE trading floor, c.1922 · Library of Congress (public domain)', music: 'rag', trans: 'whip',
    cap: ['Nominally 70, yet not even 1,000 shares could be sold there. Step one: take every share offered.', '名义价70，却连1,000股都卖不掉。第一步：吃下全部卖盘。'], capW: 700,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 14, x: 1000, y: 500, z: 1.14 }],
    items: [{ type: 'flow', screen: true, at: 'L0@quietly', x: 120, y: 610, w: 1680, bh: 200, gap: 60, size: 28, nodes: [
      { num: 1, en: 'Take all stock offered at 70 and up', zh: '吃下70以上的全部卖盘', at: 'L0@quietly' },
      { num: 2, en: 'Supply gone: the line points up', zh: '卖压消失：阻力线向上', at: 'L1' },
      { num: 3, en: 'Floor traders start to buy', zh: '场内交易员开始买入', at: 'L1@traders' },
      { num: 4, en: 'He sells them only what they want', zh: '他们要多少，他才卖多少', at: 'L1@only', color: '#cfe3c4' }] }],
    lines: [
      N('Nominally the price was 70, but I couldn\'t have sold a thousand shares there. So I quietly took everything offered at 70 and up.', '名义上价格是70，可我在那里连一千股都卖不出去。于是我悄悄吃下了70及略高价位的全部卖盘。'),
      N('With that supply gone, the line of least resistance was plainly up. Floor traders began to buy, and I sold them only as much as they wanted.', '卖压一消失，最小阻力线明显向上。场内交易员开始买入，他们要多少，我就卖给他们多少。'),
    ] });

  lesson(h, { id: 'e11_markup', tag: ['CASE STUDY · IMPERIAL STEEL', '案例 · 帝国钢铁'], title: ['Thirty Points Up, Only 7,000 Shares Kept', '拉高三十点，只留下七千股'], titleSize: 50, music: 'calm',
    gest: ['explain', 'pointUp', 'explainR', 'relaxed'], expr: [null, null, null, 'smile'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 900, h: 620, xr: [0, 12], yr: [64, 106], yTicks: [70, 80, 90, 100], illustrative: true, cursorFmt: 'int',
        series: [{ pts: [[0, 70], [1.4, 75], [2.2, 72.5], [3.6, 79], [4.4, 76.5], [5.9, 84], [6.7, 81.5], [8.2, 90], [9, 87.5], [10.6, 96], [11.3, 94], [12, 100]], color: '#2f6b3d',
          draw: [['L0', 1], ['L0@bought', 2], ['L0@Then', 8], ['L1', 11]] }],
        hlines: [{ v: 85, at: 'L2@85', color: '#2f6b3d', en: 'His 7,000 sh: avg ≈ 85', zh: '7,000股均价约85', below: true }],
        marks: [{ x: 1.4, y: 75, at: 'L0', en: 'Sells to traders', zh: '卖给交易员', dx: -80, dy: -150, w: 200 },
          { x: 2.2, y: 72.5, at: 'L0@bought', en: 'Buys back ~2 pts lower', zh: '低两点左右买回', dx: 30, dy: 40, w: 240 },
          { x: 12, y: 100, at: 'L1@par', en: 'Par: everybody wants it', zh: '面值100：人人都想买', dx: -330, dy: -60, w: 260, fill: '#f6d77a' }] },
      { type: 'table', at: 'L2', x: 1400, y: 230, w: 470, widths: [0.46, 0.54], size: 28, bottom: 640,
        cols: [['Item', '项目'], ['Figure', '数字']],
        rows: [[['Shares kept', '留存股数'], ['7,000', '7,000股']], [['Average cost', '平均成本'], ['≈ 85', '约85']], [['All options', '全部期权'], ['Sold to a bank', '卖给一家银行']]],
        rowAt: ['L2@seven', 'L2@85', 'L3'], hl: [null, null, 'L3@enormous'] },
      { type: 'note', at: 'L3@enormous', x: 1400, y: 640, w: 470, h: 160, size: 28, fill: '#f6d77a', anim: 'pop', en: 'Sell in a lump when you can, at a good profit.', zh: '能整笔卖出、利润可观时，就卖。' }],
    lines: [
      N('When their buying stopped and disappointed bulls sold, I bought back a couple of points lower. Then again, always higher.', '等他们停止买入、失望的多头卖出时，我低两点左右再买回来。然后周而复始，一步步往上推。'),
      N('At par everybody wanted it: if it went thirty points from 70, why not thirty more?', '到了面值100，人人都想买：既然能从70涨三十点，为什么不能再涨三十点？'),
      N('In the whole markup I kept only seven thousand shares, averaging almost exactly 85.', '整个拉升过程中，我只留下七千股，均价几乎正好是85。'),
      N('Then a banking house in the syndicate, wanting control, bought all my options: an enormous profit.', '后来承销团里一家想取得控股权的银行，买下了我全部的期权：利润极为可观。'),
    ] });

  // ---- Petroleum Products: a favour against his judgment ----
  shot({ id: 'e11_prentiss', set: 'study', setOpts: { lampX: 1720, winX: 1000 }, trans: 'wipe', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'prentiss', z: 1.35, dur: 1.2 }, { t: 'L2', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L2@107', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'shrug', expr: 'worry' }, { t: 'L2@107', pose: 'explain', expr: 'neutral' }] },
      { id: 'generic', key: 'prentiss', look: PRENTISS, x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'smile',
        acts: [{ t: 'L1', pose: 'explain', expr: 'smile' }, { t: 'L2@personal', pose: 'hold', expr: 'grin' }] }],
    items: [
      { type: 'caption', at: 0.4, en: 'John Prentiss, promoter: a pool stuck with stock it could not sell.', zh: '发起人约翰·普伦蒂斯：一个卖不掉股票的资金池。' },
      { type: 'note', at: 'L0@102', until: 'L1', x: 1260, y: 120, w: 600, h: 130, size: 30, en: 'Pool: 100,000+ sh at 102–103', zh: '资金池：10万多股，价位102–103' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 990, y: 70, w: 560, en: 'Take charge of the stock and sell the pool\'s holdings. Do it as a favour to me!', zh: '请你接手这只股票，把资金池的持股卖掉。就当帮我个忙！', tx: 1250, ty: 590 },
      { type: 'counter', at: 'L2@107', x: 360, y: 300, from: 102, to: 107, size: 110, dur: 1.4, color: '#2f6b3d', label: ['Petroleum Products', '石油产品'] }],
    lines: [
      N('My friend John Prentiss ran a pool in Petroleum Products, stuck with over a hundred thousand shares at 102 to 103.', '我的朋友约翰·普伦蒂斯主持着石油产品的资金池，手里压着十万多股，价位在102到103。'),
      L('manager', 'Larry, take charge of the stock and sell the pool\'s holdings. Do it as a favour to me.', '拉瑞，请你接手这只股票，把资金池的持股卖掉。就当帮我个忙。', { speak: 'prentiss' }),
      N('The bull swing was nearly over. I declined, but he made it personal, so I agreed against my judgment. I got it to about 107.', '牛市行情已近尾声。我推辞了，可他搬出交情，我只好违心答应。我把它拉到了107左右。'),
    ] });

  shot({ id: 'e11_onlybuyer', set: 'study', setOpts: { lampX: 1720, winX: 1000 }, trans: 'cut', music: 'tense',
    cam: [{ t: 0, x: 700, y: 560, z: 1.3 }, { t: 'L1', on: 'prentiss', z: 1.35, dur: 0.8 }, { t: 'L2', on: 'larry', z: 1.35, dur: 0.8 }, { t: 'L3', on: 'prentiss', z: 1.5, dur: 0.4 }, { t: 'L4', x: 960, y: 520, z: 1.0, dur: 1.4 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'explain', expr: 'determined',
        acts: [{ t: 'L0@only', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'fist', expr: 'determined' }, { t: 'L4', pose: 'despair', expr: 'tired' }] },
      { id: 'generic', key: 'prentiss', look: PRENTISS, x: 1250, y: 890, s: 1.2, flip: true, pose: 'cross', expr: 'frown',
        acts: [{ t: 'L1', pose: 'shrug', expr: 'worry' }, { t: 'L3', pose: 'up', expr: 'shout' }, { t: 'L4', pose: 'point', expr: 'angry' }] }],
    items: [
      { type: 'bubble', at: 'L0', until: 'L1', x: 330, y: 60, w: 660, size: 30, en: 'There\'s no follow-up in your stock. The only buyer would be a fool to buy. The only way to sell is to sell.', zh: '你的股票没有跟风盘。只剩自己在买，再买就是傻瓜。要卖，唯一的办法就是卖。', tx: 700, ty: 590 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1000, y: 90, w: 500, en: 'You mean, sell for what you can get?', zh: '你是说，能卖多少算多少？', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 380, y: 90, w: 520, en: 'Right! And it\'s going to break through par.', zh: '没错！而且它会跌破面值。', tx: 700, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 1040, y: 110, w: 420, kind: 'shout', size: 40, en: 'Oh, no! Never!', zh: '不！绝对不行！', tx: 1250, ty: 590 },
      { type: 'stamp', at: 'L4@buying', x: 960, y: 260, en: 'BUYING FOR THE POOL', zh: '奉命为资金池买入', size: 56, color: '#b3302a' }],
    lines: [
      L('larry', 'Prentiss, there\'s no follow-up in your stock. When you\'re the only buyer, you\'d be a fool to buy. The only way to sell is to sell.', '普伦蒂斯，你的股票没有跟风盘。只剩你自己在买的时候，再买就是傻瓜。要卖出，唯一的办法就是卖。', { speak: 'larry' }),
      L('manager', 'You mean, sell for what you can get?', '你是说，能卖多少算多少？', { speak: 'prentiss' }),
      L('larry', 'Right! And it\'s going to break through par.', '没错！而且它会跌破面值。', { speak: 'larry' }),
      L('manager', 'Oh, no! Never!', '不！绝对不行！', { speak: 'prentiss' }),
      N('He insisted I support it. So, as a bear market began, I was buying for his pool, on his orders.', '他坚持要我护盘。于是在熊市开始的时候，我奉他的命令替资金池买进。'),
    ] });

  lesson(h, { id: 'e11_pete', tag: ['MISTAKE · PETROLEUM PRODUCTS', '错误 · 石油产品'], tagColor: '#b3302a', title: ['Supporting a Stock in a Turning Market', '在转势的市场里护盘'], titleSize: 50,
    gest: ['explain', 'point', 'despair', 'explainR'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 820, h: 620, xr: [0, 10], yr: [80, 112], yTicks: [85, 95, 105], illustrative: true, cursorFmt: 'int',
        series: [{ pts: [[0, 102.5], [1.5, 104.5], [2.5, 103.5], [3.5, 107], [4.5, 105], [5.3, 103], [6, 100.5], [7, 98], [8, 93], [9, 90], [10, 87.5]], color: '#b3302a',
          draw: [['L0', 3], ['L1', 6], ['L2', 10]] }],
        marks: [{ x: 0, y: 102.5, at: 'L0', en: 'Pool: 100,000+ sh at 102–103', zh: '资金池：10万多股，102–103', dx: 20, dy: 60, w: 250 },
          { x: 3.5, y: 107, at: 'L0@stop', en: '107: no follow-up', zh: '107：无人跟进', dx: -40, dy: -100, w: 250 },
          { x: 6, y: 100.5, at: 'L1', en: 'Pool keeps buying, on orders', zh: '资金池奉命继续买入', dx: 30, dy: -110, w: 240 },
          { x: 10, y: 87.5, at: 'L2@lower', en: 'Sold out "much lower"', zh: '最终"低得多"才卖出', dx: -290, dy: 20, w: 260, fill: '#f3c6c0' }] },
      { type: 'rule', at: 'L0@five', x: 1320, y: 230, w: 570, h: 150, n: '1', size: 28, en: 'You buy 5,000 → the public should buy 5,000 more', zh: '你买5,000股→公众应再买5,000股' },
      { type: 'rule', at: 'L0@stop', x: 1320, y: 392, w: 570, h: 112, n: '2', size: 30, en: 'The only buyer? Stop.', zh: '只剩你在买？停手。' },
      { type: 'rule', at: 'L1@big', x: 1320, y: 516, w: 570, h: 140, n: '3', size: 28, en: 'Big selling is done on the way down', zh: '大笔卖出在下跌途中完成' },
      { type: 'rule', at: 'L3', x: 1320, y: 668, w: 570, h: 150, n: '!', size: 28, tag: '#b3302a', fill: '#f3c6c0', en: 'Short because bearish, never bearish because short', zh: '因为看空才做空，绝不因为做空才看空' }],
    lines: [
      N('The pool rule: for every five thousand shares I buy, the public should buy five thousand more. The only buyer? Stop.', '资金池的规则：我每买五千股，公众就应该再买五千股。如果只剩你自己在买，就停手。'),
      N('You put a stock up to sell it, but the big selling is done on the way down.', '拉高股票是为了卖出，但大笔卖出是在下跌途中完成的。'),
      N('The market was turning. The pool bought all the way down, and finally sold much lower.', '市场正在转向。资金池一路下跌一路买，最后在低得多的价位才卖出。'),
      N('Prentiss says I wanted the break because I was short other stocks. No: I was short because I was bearish.', '普伦蒂斯说，我想让它跌，是因为我做空了别的股票。不对：我做空，是因为我看空。'),
    ] });

  // ---- why the promoters came, and the boom ----
  photo({ id: 'e11_keene', src: `${PD}/portrait_james_r_keene_1901_worldswork.jpg`, credit: 'James R. Keene · The World\'s Work, 1901 (public domain)', music: 'tense',
    cap: ['James R. Keene (1838–1913). His 1901 U.S. Steel campaign worked chiefly because the market was right.', '詹姆斯·R·基恩（1838–1913）。他1901年操作美国钢铁之所以成功，主要是因为大势对了。'], capW: 640,
    kb: [{ t: 0, x: 960, y: 500, z: 1.02 }, { t: 14, x: 960, y: 440, z: 1.14 }],
    items: [{ type: 'newspaper', screen: true, at: 'L1@papers', x: 1460, y: 560, w: 640, h: 400, rot: 4, paper: 'The Financial Page', date: 'AFTER THE COMEBACK', en: 'LIVINGSTON PAYS BACK HIS MILLIONS', zh: '利文斯顿还清数百万旧债', size: 42 }],
    lines: [
      N('No manipulator can beat the general market. Keene\'s U.S. Steel job in 1901 worked chiefly because the market and the public mood were right.', '没有哪个操纵者能战胜大盘。基恩1901年操作美国钢铁之所以成功，主要是因为大势和公众情绪都对了。'),
      N('After my comeback, the papers told how I had paid back millions. Keene was gone, so the promoters came to me.', '东山再起之后，报纸登出我还清数百万债务的故事。基恩已经不在了，于是发起人纷纷找上了我。'),
    ] });

  lesson(h, { id: 'e11_top', tag: ['PSYCHOLOGY · THE WAR BOOM', '心理 · 战争繁荣'], title: ['Where Is the Top? The Average Man\'s Answer', '顶在哪里？普通人的答案'], titleSize: 50, music: 'rag',
    gest: ['explain', 'pointUp', 'up', 'explainR'], expr: [null, null, 'grin', null],
    items: [
      { type: 'photo', at: 0.4, x: 1490, y: 220, w: 390, h: 260, rot: 2, src: `${PD}/broad_st_curb_brokers_1916.jpg`, en: 'Curb brokers, Broad Street, 1916', zh: '百老街场外经纪人，1916年' },
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 990, h: 620, xr: [0, 10], yr: [0, 95], yTicks: [15, 30, 50, 75], illustrative: true, cursorFmt: 'int', title: ['1915 war boom: the average man\'s top', '1915年战争繁荣：普通人眼中的顶'],
        series: [{ pts: [[0, 12], [1, 14], [2.3, 30], [3, 28.5], [4.3, 50], [5, 48], [5.8, 60], [6.6, 70], [7.3, 75], [8.3, 80], [9.3, 85]], color: '#2f6b3d',
          draw: [['L0e', 1], ['L1@30', 2], ['L1@50', 4], ['L2', 8], ['L2@80', 10]] }],
        marks: [{ x: 2.3, y: 30, at: 'L1@surely', en: '"Surely the top"', zh: '"这肯定是顶了"', dx: -150, dy: -130, w: 200 },
          { x: 4.3, y: 50, at: 'L1@absolutely', en: '"Absolutely the end"', zh: '"绝对到头了"', dx: -200, dy: -140, w: 230 },
          { x: 7.3, y: 75, at: 'L2@higher', en: '"Can\'t go any higher"', zh: '"不可能再涨了"', dx: -250, dy: -150, w: 240 },
          { x: 9.3, y: 85, at: 'L2@stops', en: 'Stops believing in any limit', zh: '不再相信有任何上限', dx: -260, dy: 140, w: 230, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L3', x: 1490, y: 600, w: 390, h: 230, size: 28, fill: '#f6d77a', anim: 'slideU', en: '"The top is never in sight when the vision is vitiated by hope."', zh: '"被希望蒙蔽了双眼，就永远看不见顶。"' }],
    lines: [
      N('In the 1915 war boom the public bought anything adequately touted.', '1915年的战争繁荣里，只要吹得够响，公众什么都买。'),
      N('A stock nobody wanted at twelve or fourteen jumps to 30: surely the top. Then 50: absolutely the end.', '一只在十二、十四美元都没人要的股票涨到30：这肯定是顶了。接着到50：绝对到头了。'),
      N('Then 60, 70, 75: it can\'t go any higher. Then 80, 85, and he stops believing there is any limit.', '然后60、70、75：不可能再涨了。接着80、85，他干脆不再相信有任何上限。'),
      N('He thinks of prices, never of values. The top is never in sight when hope clouds the vision.', '他只想价格，从不想价值。被希望蒙住了眼，就永远看不见顶。'),
    ] });

  // ---- chapter XXII: Consolidated Stove ----
  chapter('Chapter XXII · Consolidated Stove', '第二十二章 · 联合火炉');
  shot({ id: 'e11_barnes', set: 'study', setOpts: { winX: 1120, lampX: 260 }, trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'barnes', z: 1.35, dur: 1.2 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L2', x: 960, y: 500, z: 1.05, dur: 1.4 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L0', pose: 'chin', expr: 'think' }, { t: 'L1@consented', pose: 'shrug', expr: 'smile' }, { t: 'L2', pose: 'cross', expr: 'neutral' }] },
      { id: 'generic', key: 'barnes', look: BARNES, x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'worry',
        acts: [{ t: 'L0@favour', pose: 'explainR', expr: 'smile' }, { t: 'L1@consented', pose: 'hold', expr: 'grin' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.4, en: 'Jim Barnes: one of his principal brokers, and an intimate friend.', zh: '吉姆·巴恩斯：他的主要经纪人之一，也是挚友。' },
      { type: 'bubble', at: 'L0', until: 'L1', x: 990, y: 70, w: 540, en: 'Do me a great favour, Larry. Market a big block of Consolidated Stove for my firm.', zh: '帮我个大忙，拉瑞。替我们公司卖掉一大批联合火炉的股票。', tx: 1250, ty: 590 },
      { type: 'stamp', at: 'L2@boy', x: 960, y: 250, en: 'THE BOY BANKER', zh: '少年银行家', size: 64, color: '#7a4a22' }],
    lines: [
      L('friend', 'Larry, do me a great favour. My firm has to market a big block of Consolidated Stove.', '拉瑞，帮我个大忙。我们公司必须卖掉一大批联合火炉的股票。', { speak: 'barnes' }),
      N('Jim Barnes, one of my principal brokers, was an intimate friend. I owed him, so I consented.', '吉姆·巴恩斯是我的主要经纪人之一，也是挚友。我欠他人情，所以答应了。'),
      N('It was the age of the boy banker: banks lent freely to promoters, and youth was a bank president\'s chief qualification.', '那是"少年银行家"的时代。银行大方地借钱给发起人，年轻成了银行行长的首要条件。'),
    ] });

  lesson(h, { id: 'e11_stove', tag: ['HOW IT WAS BUILT', '结构拆解'], title: ['Consolidated Stove: New Certificates for Old', '联合火炉：旧股换新证'], titleSize: 50,
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 222, w: 1400, widths: [0.38, 0.32, 0.30], size: 28, bottom: 500,
        cols: [['Merged company', '并入的公司'], ['Old price', '原价'], ['Terms', '换股条件']],
        rows: [[['Gray Stove (paid dividends)', '格雷火炉（有分红）'], ['≈ 125', '约125'], ['4 new for 1', '一股换四股']],
          [['Midland & Western', '米德兰与西部'], ['25–30 on the Curb', '场外市场25–30'], ['1 new for 1', '一股换一股']]],
        rowAt: ['L0@Gray', 'L0@Midland'] },
      { type: 'note', at: 'L1', x: 470, y: 508, w: 1400, h: 112, size: 30, align: 'center', fill: '#efe3c4', en: '"Changing the colour of the certificates"', zh: '"换一换股票凭证的颜色"' },
      { type: 'equation', at: 'L1@Quadruple', x: 1000, y: 682, size: 50, terms: [
        { t: '4 new × 30–35', zh: '4股新股 × 30–35', at: 'L1@Quadruple' }, { t: '= 120–140', zh: '相当于旧股卖到120–140', at: 'L1@120', hl: true }] },
      { type: 'equation', at: 'L2@three', x: 1000, y: 796, size: 46, terms: [
        { t: '$3,500,000', zh: '银行贷款', at: 'L2@three' }, { t: '÷ 100,000 sh', zh: '十万股作抵押', at: 'L2@hundred' }, { t: '= $35 a share', zh: '每股35美元', at: 'L2@thirty', hl: true }] },
      { type: 'stamp', at: 'L2@below', x: 1700, y: 700, en: '"NOT BELOW 50"', zh: '"不会跌破50"', size: 40, color: '#b3302a' }],
    lines: [
      N('Barnes\'s group merged three stove companies: Gray Stove, near 125, at four new shares for one; Midland and Western, 25 to 30 on the Curb, share for share.', '巴恩斯一伙人合并了三家火炉公司。股价约125的格雷火炉按一换四并入；场外报价25到30的米德兰和西部，按一换一并入。'),
      N('An old device: change the colour of the certificates. Quadruple the shares, sell at 30 or 35, and the old stock fetches 120 to 140.', '这是老把戏：换一换股票凭证的颜色。股数翻四倍，新股卖30或35，旧股就相当于卖到了120到140。'),
      N('The Marshall National Bank lent three and a half million on a hundred thousand shares, thirty-five a share, and was told the price wouldn\'t go below 50.', '马歇尔国民银行以十万股作抵押，借出三百五十万美元，合每股35美元。银行得到的说法是：股价不会跌破50。'),
    ] });

  photo({ id: 'e11_ipo', src: `${PD}/wallst_crowd_trinity_1911_bain.jpg`, credit: 'Crowd on Wall Street, 1911 · Bain News Service (public domain)', music: 'rag', trans: 'whip',
    cap: ['The offering: heavily advertised, $50 a share.', '公开发售：大肆宣传，每股50美元。'],
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 12, x: 920, y: 520, z: 1.13 }],
    items: [
      { type: 'newspaper', screen: true, at: 'L0', x: 1420, y: 520, w: 660, h: 420, rot: 3, paper: 'The Financial Page', date: 'THE OFFERING', en: 'CONSOLIDATED STOVE AT $50 A SHARE', zh: '联合火炉每股50美元发售', size: 44 },
      { type: 'counter', screen: true, at: 'L0@oversubscribed', x: 420, y: 470, from: 0, to: 25, prefix: '+', suffix: '%', size: 120, dur: 1.2, panel: true, color: '#2f6b3d', label: ['oversubscribed', '超额认购'] }],
    lines: [
      N('Heavily advertised and offered at fifty dollars a share, it was oversubscribed by twenty-five percent.', '经过大肆宣传，以每股50美元发售，结果超额认购百分之二十五。'),
      N('Delighted, the promoters decided the public would pay any price, and they underallotted the stock.', '发起人喜出望外，认定公众出什么价都肯买，于是少配了股票。'),
    ] });

  lesson(h, { id: 'e11_blunders', tag: ['CASE STUDY · TWO CAPITAL BLUNDERS', '案例 · 两大致命错误'], tagColor: '#b3302a', title: ['Why Consolidated Stove Sank to 37', '联合火炉为何沉到37'],
    gest: ['explain', 'point', 'despair', 'explainR'], music: 'tense',
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 880, h: 620, xr: [0, 10], yr: [30, 56], yTicks: [35, 40, 45, 50, 55], illustrative: true, cursorFmt: 'int',
        series: [{ pts: [[0, 50], [0.8, 50.4], [1.6, 49], [2.6, 47], [3.4, 45], [4.4, 42], [5.4, 40.5], [6.2, 40], [7.2, 38.5], [8.2, 37], [9.2, 37], [10, 37]], color: '#7a4a22',
          draw: [['L0', 1], ['L1@fraction', 2], ['L2', 5], ['L2@40', 7], ['L2@pegged', 9], ['L2e', 11]] }],
        hlines: [{ v: 50, at: 'L0', color: '#2f5d8a', en: 'Offered at 50', zh: '发售价50' }, { v: 35, at: 'L2@loan', color: '#b3302a', en: 'Bank loan: $35 a share', zh: '银行贷款：每股35美元', below: true, labelX: 0.2 }],
        marks: [{ x: 0.8, y: 50.4, at: 'L1@fraction', en: 'Never much above 50', zh: '从未比50高多少', dx: 30, dy: 160, w: 220 },
          { x: 6.2, y: 40, at: 'L2@40', en: 'No inside support; Barnes holds 40', zh: '内部人不护盘；巴恩斯守40', dx: 20, dy: -170, w: 260 },
          { x: 9.2, y: 37, at: 'L2@pegged', en: 'Pegged at 37', zh: '钉在37', dx: -100, dy: 60, w: 170, fill: '#f3c6c0' }] },
      { type: 'table', at: 'L0@allotting', x: 1380, y: 230, w: 510, widths: [0.56, 0.44], size: 28, bottom: 570,
        cols: [['If allotted in full', '如果足额配售'], ['Result', '结果']],
        rows: [[['Sell 125%', '卖出125%'], ['Short 25%', '形成25%空头']], [['Price dips', '股价回落'], ['Cover = free support', '回补＝免费护盘']]],
        rowAt: ['L0@allotting', 'L1'] },
      { type: 'note', at: 'L2@bear', x: 1380, y: 585, w: 510, h: 115, size: 28, fill: '#f3c6c0', en: 'No inside support = a bear tip', zh: '内部人不护盘＝看跌信号' },
      { type: 'note', at: 'L2@pegged', x: 1380, y: 712, w: 510, h: 118, size: 30, fill: '#f6d77a', en: 'Eager at 50. Unwanted at 37.', zh: '50时抢着买，37时没人要。' }],
    lines: [
      N('Two blunders: they came late, into a market saturated with new issues, and by not allotting in full they gave up a free short of a quarter of the issue.', '两个错误。他们来得太晚，市场早被新股塞满；而且没有足额配售，白白放弃了相当于四分之一发行量的免费空头。'),
      N('That short would have supported the price for free. Instead it never sold more than a fraction above 50.', '有了那部分空头，他们就能不花一分钱托住价格。结果股价从未比50高出多少。'),
      N('Insiders didn\'t support it: a bear tip. Barnes had to buy to hold 40, then pegged it at 37 to protect the bank\'s loan at 35.', '内部人不护盘，这是相当可靠的看跌信号。巴恩斯只好买入守住40，后来又把它钉在37，以保护银行每股35美元的贷款。'),
    ] });

  shot({ id: 'e11_overhang', set: 'study', setOpts: { winX: 1180, lamp: false, ticker: true, tickerX: 250 }, trans: 'wipe', music: 'calm',
    cam: [{ t: 0, x: 1100, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L2', x: 1100, y: 520, z: 1.0, dur: 1.4 }],
    cast: [
      { id: 'larry', x: 520, y: 890, s: 1.15, pose: 'explain', expr: 'neutral',
        acts: [{ t: 'L0', pose: 'chin', expr: 'think' }, { t: 'L1', pose: 'explain', expr: 'determined' }, { t: 'L2', pose: 'relaxed', expr: 'sly' }] },
      { id: 'generic', key: 'kane', look: KANE, x: 1080, y: 890, s: 1.1, flip: true, pose: 'cross', expr: 'neutral', acts: [{ t: 'L1@escrow', pose: 'chin', expr: 'think' }] },
      { id: 'generic', key: 'gordon', look: GORDON, x: 1380, y: 890, s: 1.1, flip: true, pose: 'hold', expr: 'frown', acts: [{ t: 'L1@escrow', pose: 'shrug', expr: 'worry' }] },
      { id: 'wolff', x: 1680, y: 890, s: 1.1, flip: true, pose: 'hips', expr: 'sly', acts: [{ t: 'L1@escrow', pose: 'cross', expr: 'smile' }] }],
    items: [
      { type: 'text', at: 'L0@Kane', x: 1080, y: 370, size: 48, font: 'cond', align: 'center', fill: '#b3302a', en: '70,000', zh: '凯恩公司', zfill: '#5a4a36' },
      { type: 'text', at: 'L0@Gordon', x: 1380, y: 370, size: 48, font: 'cond', align: 'center', fill: '#b3302a', en: '70,000', zh: '戈登参议员', zfill: '#5a4a36' },
      { type: 'text', at: 'L0@Wolff', x: 1680, y: 370, size: 48, font: 'cond', align: 'center', fill: '#b3302a', en: '60,000', zh: '约书亚·沃尔夫', zfill: '#5a4a36' },
      { type: 'equation', at: 'L0@active', until: 'L1', x: 1250, y: 220, size: 48, terms: [{ t: '70,000 + 70,000 + 60,000', at: 'L0@active' }, { t: '= 200,000 sh', zh: '随时可能砸盘', at: 'L0@active+0.6', hl: true }] },
      { type: 'bubble', at: 'L1', until: 'L2', x: 110, y: 60, w: 660, size: 29, en: 'Raise six millions in cash. Give the syndicate a call on your 200,000 shares at 40, and put your stock in escrow.', zh: '筹六百万美元现金。把你们二十万股按40给银团一个看涨期权，股票全部交第三方托管。', tx: 520, ty: 602 },
      { type: 'note', at: 'L2', x: 100, y: 110, w: 820, h: 170, size: 28, fill: '#f6d77a', anim: 'slideU', en: 'Gates\'s verse: the tarantula on the centipede\'s back: "I\'ll poison him. If I don\'t, he\'ll poison me!"', zh: '盖茨的打油诗：狼蛛跳上蜈蚣的背："我得先毒死它，不然它就毒死我！"' }],
    lines: [
      N('The danger: Kane\'s firm held seventy thousand shares, Senator Gordon seventy thousand, Joshua Wolff sixty thousand. Make the stock active, and they\'d unload on me.', '真正的危险在于：凯恩的公司有七万股，戈登参议员七万股，约书亚·沃尔夫六万股。股票一旦活跃，他们就会把货倒给我。'),
      L('larry', 'Raise six millions in cash. Give the syndicate a call on your two hundred thousand shares at 40, and put all your stock in escrow.', '组一个银团，筹六百万美元现金。把你们的二十万股按40给银团一个看涨期权，所有股票都交第三方托管。', { speak: 'larry' }),
      N('Escrow among friends? A verse credited to John W. Gates says why: poison him before he poisons you.', '朋友之间还要托管？正如一首据说出自约翰·W·盖茨的打油诗所说：先毒死对方，免得被对方毒死。'),
    ] });

  shot({ id: 'e11_rise', set: 'floor', setOpts: { agitated: true, paperN: 18, posts: ['STEEL', 'U.P.', 'CONS. STOVE', 'SUGAR', 'RDG'] }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'L1', on: 'wolff', z: 1.35, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'trader', key: 'trader', x: 720, y: 890, s: 1.2, pose: 'chin', expr: 'think',
        acts: [{ t: 'L1@tipped', pose: 'hold', expr: 'grin' }, { t: 'L2', pose: 'up', expr: 'laugh' }] },
      { id: 'wolff', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'explain', expr: 'sly' }, { t: 'L1@buying', pose: 'pointUp', expr: 'grin' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'About $4,000,000 of the syndicate\'s cash in hand.', zh: '手握银团约400万美元现金。' },
      { type: 'counter', at: 'L0@37', until: 'L2', x: 380, y: 280, from: 37, to: 39, size: 110, dur: 1.2, steps: [{ t: 'L0@42', v: 42, dur: 1 }], label: ['Consolidated Stove', '联合火炉'] },
      { type: 'bubble', at: 'L1@tipped', until: 'L2', x: 980, y: 80, w: 540, en: 'Livingston\'s going to rush it up fifteen or twenty points!', zh: '利文斯顿要把它一口气拉高十五到二十点！', tx: 1250, ty: 590 },
      { type: 'counter', at: 'L0@selling', x: 1660, y: 600, from: 0, to: 30000, suffix: ' sh', size: 80, dur: 1.4, color: '#2f6b3d', steps: [{ t: 'L2@fifth', v: 100000, dur: 1.6 }], label: ['sold for the bank', '替银行卖出'] },
      { type: 'newspaper', screen: true, at: 'L2@papers', x: 380, y: 330, w: 500, h: 360, rot: -4, paper: 'Morning Edition', en: 'LIVINGSTON TO BULL CONSOLIDATED STOVE', zh: '利文斯顿将做多联合火炉', size: 36 }],
    lines: [
      N('With four million in hand I was ready. Before I did a thing, the stock jumped from 37 to 39, then touched 42. I began selling the bank\'s stock.', '手握四百万美元，我准备就绪。我还没动手，股价就从37跳到39，又摸到42。我开始卖出银行那批股票。'),
      N('Joshua Wolff had tipped the floor that I\'d rush it up fifteen or twenty points; his own buying started the rise.', '原来约书亚·沃尔夫向场内放风，说我要把它一口气拉高十五到二十点。最初的上涨，就是他自己买出来的。'),
      N('The papers said I\'d bull it, and orders poured in. By the fifth day I had sold all hundred thousand shares.', '报纸说我要做多它，买单蜂拥而来。到第五天，我已经把十万股全部卖完。'),
    ] });

  lesson(h, { id: 'e11_cheap', tag: ['COMPARE · THE CHEAPEST DISTRIBUTION', '对比 · 成本最低的一次派发'], title: ['Shares Traded to Sell a Block', '为卖出一批股票而成交的股数'], titleSize: 50, music: 'calm',
    gest: ['explain', 'point', 'explainR'], expr: ['smile', null, null],
    items: [
      { type: 'bars', at: 'L1', x: 470, y: 220, w: 1000, h: 620, max: 700000, vsize: 28, title: ['Sold vs. traded (shares)', '卖出量 vs. 成交量（股）'],
        bars: [{ v: 50000, vl: '50,000', en: 'Flower pool: sold', zh: '弗劳尔资金池：卖出', at: 'L1@fifty', color: '#2f5d8a' },
          { v: 250000, vl: '250,000+', en: 'Flower: commissions on', zh: '弗劳尔：收佣股数', at: 'L1@commissions', color: '#9a9182' },
          { v: 220000, vl: '220,000', en: 'Keene: distributed', zh: '基恩：派发', at: 'L2@distribute', color: '#2f5d8a' },
          { v: 700000, vl: '700,000+', en: 'Keene: traded', zh: '基恩：成交', at: 'L2', color: '#9a9182' },
          { v: 100000, vl: '100,000', en: 'Livingston: sold', zh: '利文斯顿：卖出', at: 'L2@paid', color: '#2f6b3d' },
          { v: 100000, vl: '100,000', en: 'Livingston: traded', zh: '利文斯顿：成交', at: 'L2@paid+0.5', color: '#2f6b3d' }] },
      { type: 'note', at: 'L0', x: 1490, y: 230, w: 390, h: 240, size: 28, fill: '#cfe3c4', anim: 'slideU', en: 'Bought: 0 shares. Sold: 100,000, mostly on the way UP.', zh: '买入：0股。卖出：10万股，大多在上涨途中。' },
      { type: 'note', at: 'L2e', x: 1490, y: 500, w: 390, h: 250, size: 28, fill: '#f6d77a', anim: 'pop', en: 'Flower: "The only way I know of making a stock go up is to buy it."', zh: '弗劳尔："我知道让股票上涨的唯一办法，就是买它。"' }],
    lines: [
      N('The cheapest distribution of my career: I never bought a share, and sold mostly on the way up.', '这是我生涯中成本最低的一次派发。我一股都没买，主要的卖出都在上涨途中完成。'),
      N('A Governor Flower pool in B.R.T. sold fifty thousand shares; his firm got commissions on over two hundred and fifty thousand.', '弗劳尔州长主持的一个B.R.T.资金池卖出了五万股，他的公司却收了二十五万股以上的佣金。'),
      N('Keene traded at least seven hundred thousand Amalgamated Copper to distribute two hundred and twenty thousand. I paid commissions on a hundred thousand.', '基恩为了派发二十二万股联合铜业，至少成交了七十万股。而我只为卖出的十万股付了佣金。'),
    ] });

  shot({ id: 'e11_wolff', set: 'study', setOpts: { ticker: true, tickerX: 330, lampX: 1720 }, trans: 'wipe', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'wolff', z: 1.4, dur: 0.6 }, { t: 'L2', on: 'larry', z: 1.35, dur: 0.8 }, { t: 'L3', on: 'wolff', z: 1.3, dur: 0.8 }, { t: 'L4', on: 'larry', z: 1.5, dur: 0.4 }, { t: 'L4e', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'chin', expr: 'neutral' }, { t: 'L2', pose: 'explain', expr: 'neutral' }, { t: 'L4', pose: 'point', expr: 'determined' }] },
      { id: 'wolff', x: 1250, y: 890, s: 1.2, flip: true, pose: 'idle', expr: 'angry', at: 'L0@Wolff',
        acts: [{ t: 'L1', pose: 'fist', expr: 'shout' }, { t: 'L2', pose: 'hips', expr: 'angry' }, { t: 'L3', pose: 'shrug', expr: 'smile' }, { t: 'L4', pose: 'idle', expr: 'shock' }, { t: 'L4e', x: 2150, pose: 'idle', expr: 'frown', dur: 2.5 }] }],
    items: [
      { type: 'counter', at: 'L0@40', until: 'L1', x: 1260, y: 300, from: 40, to: 32, size: 110, dur: 1.4, color: '#b3302a', label: ['Consolidated Stove, unsupported', '联合火炉，无人护盘'] },
      { type: 'sfx', at: 'L0e-0.8', until: 'L2', x: 330, y: 390, text: '31¼', zh: '最新价', size: 90, color: '#b3302a', font: 'cond', rot: -6 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 930, y: 60, w: 640, kind: 'shout', size: 28, en: 'Look at the price! I bought more, some as high as 40! You had four millions to put it up!', zh: '看看这价格！我又买了不少，有的买在40！你手里有四百万可以拉抬！', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 330, y: 80, w: 560, en: 'But I didn\'t buy a share, and the syndicate hasn\'t lost a cent.', zh: '可我一股都没买，银团也一分钱没亏。', tx: 700, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 1000, y: 90, w: 500, en: 'Aw, be a sport. What would you do in our place?', zh: '哎，够意思点。换了你是我们，会怎么做？', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L4', until: 'L4e+1', x: 440, y: 110, w: 380, kind: 'shout', size: 40, en: 'I\'d sell out!', zh: '我会卖光！', tx: 700, ty: 590 }],
    lines: [
      N('Unsupported, the stock slid below the call price of 40, to 32, its lowest ever. Then Joshua Wolff stormed in.', '没人照管，股价跌破了40的期权价，又跌到32，创下历史最低。这时约书亚·沃尔夫冲进了我的办公室。'),
      L('wolff', 'Look at the price! I bought more, some of it as high as 40! You had four millions to put it up with!', '看看这价格！我又买了不少，有的买在40！你手里有四百万可以拉抬！', { speak: 'wolff' }),
      L('larry', 'But I didn\'t buy a share, and the syndicate hasn\'t lost a cent.', '可我一股都没买，银团也一分钱没亏。', { speak: 'larry' }),
      L('wolff', 'Aw, be a sport. What would you do in our place?', '哎，够意思点。换了你是我们，会怎么做？', { speak: 'wolff' }),
      L('larry', 'I\'d sell out!', '我会卖光！', { speak: 'larry' }),
    ] });

  lesson(h, { id: 'e11_waydown', tag: ['CASE STUDY · THE WHOLE CAMPAIGN', '案例 · 全程复盘'], title: ['Selling a Block on the Way Down', '在下跌途中卖出整批股票'], titleSize: 50, music: 'calm',
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 12], yr: [22, 48], yTicks: [25, 30, 35, 40, 45], illustrative: true, cursorFmt: 'frac',
        series: [{ pts: [[0, 37], [1, 39], [2, 42], [3, 43.5], [3.8, 43.8], [5, 41], [6, 39.5], [7, 36], [8, 32], [8.6, 31.25], [10, 30]], color: '#7a4a22',
          draw: [['L0', 4], ['L0@now', 10]] }],
        hlines: [{ v: 40, at: 'L0', color: '#2f5d8a', en: 'Call price 40', zh: '期权价40' }, { v: 25.5, at: 'L0@25', color: '#2f6b3d', en: 'Pooled at 25½', zh: '按25½入池', below: true, labelX: 0.2 }],
        bands: [{ x0: 10, x1: 12, y0: 25.5, y1: 30, at: 'L1@down', color: '#2f6b3d', en: 'Sold here', zh: '在此卖出' }],
        marks: [{ x: 1, y: 39, at: 'L0', en: '37 → 39: Wolff\'s buying', zh: '37→39：沃尔夫在买', dx: 40, dy: 80, w: 230 },
          { x: 3.8, y: 43.8, at: 'L0@44', en: 'Active near 44', zh: '在44附近很活跃', dx: 40, dy: -90, w: 210 },
          { x: 10, y: 30, at: 'L0@now', en: 'Last sale ≈ 30', zh: '最后成交约30', dx: -320, dy: 40, w: 200, fill: '#f6d77a' }] },
      { type: 'note', at: 'L1', x: 1500, y: 230, w: 390, h: 210, size: 28, fill: '#cfe3c4', anim: 'slideU', en: 'His fee: half of everything he got above 25½.', zh: '他的报酬：高于25½部分的一半。' },
      { type: 'note', at: 'L1@falling', x: 1500, y: 455, w: 390, h: 170, size: 28, fill: '#f3c6c0', anim: 'slideU', en: 'Falling market: sell, regardless of price.', zh: '下跌市：不计价格地卖。' },
      { type: 'note', at: 'L2', x: 1500, y: 640, w: 390, h: 190, size: 28, fill: '#f6d77a', anim: 'pop', en: 'Bargain hunters buy 15–20 pts off the top.', zh: '抢便宜的人：比顶部低15–20点就买。' }],
    lines: [
      N('Gordon and Kane remembered the stock active near 44; now it was 30. They pooled their stock with me at 25 and a half.', '戈登和凯恩也来抱怨。他们记得股票在44附近很活跃，如今只剩30。于是他们以25½的价格把股票交给我统一处理。'),
      N('My fee: half of anything above that. In a falling market you can\'t put a stock up first, so I sold on the way down.', '我的报酬：高出部分的一半。在下跌的市场里，你没法先把股价拉上去，所以我在下跌途中卖出。'),
      N('Bargain hunters think a stock is cheap fifteen or twenty points under a recent top. They took the whole line.', '抢便宜的人总以为，比最近的顶部低十五到二十点就算便宜。资金池的全部股票，就是他们接走的。'),
    ] });

  shot({ id: 'e11_dress', set: 'home', trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'dressmaker', z: 1.35, dur: 1.4 }, { t: 'L2', on: 'wife', z: 1.3, dur: 1.4 }, { t: 'L2e', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'wife', x: 760, y: 890, s: 1.15, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L1', pose: 'chin', expr: 'neutral' }, { t: 'L1@told', pose: 'idle', expr: 'shock' }, { t: 'L2', pose: 'chin', expr: 'sad' }] },
      { id: 'dressmaker', x: 1250, y: 890, s: 1.15, flip: true, pose: 'hold', expr: 'smile', acts: [{ t: 'L1', pose: 'explain', expr: 'smile' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.4, en: 'Mrs. Livingston\'s new dressmaker, on the third or fourth visit.', zh: '利文斯顿太太新请的裁缝，第三四次见面时。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 970, y: 60, w: 580, en: 'I hope Mr. Livingston puts up Consolidated Stove soon. We bought some because we were told he would.', zh: '真希望利文斯顿先生快点把联合火炉拉上去。我们就是听说他要拉，才买了一些。', tx: 1250, ty: 602 },
      { type: 'note', at: 'L2@never', x: 1160, y: 110, w: 700, h: 140, size: 30, fill: '#f6d77a', anim: 'slideU', en: 'A tip can ruin people you will never meet.', zh: '一条小道消息，能害了你素不相识的人。' }],
    lines: [
      N('Later my wife\'s new dressmaker, a pleasant, capable woman, told her something.', '过了一阵，我妻子新请的裁缝，一位和气能干的女士，对她说了一番话。'),
      L('dressmaker', 'I hope Mr. Livingston puts up Consolidated Stove soon. We bought some because we were told he was going to.', '真希望利文斯顿先生快点把联合火炉拉上去。我们就是听说他要拉，才买了一些。', { speak: 'dressmaker' }),
      N('It isn\'t pleasant to think innocent people lose money on such a tip. That is why I never give tips.', '想到无辜的人因为这种消息赔钱，实在不是滋味。这就是我自己从不给人消息的原因。'),
    ] });

  // ---- summary ----
  const R = (n, at, en, zh, row, o = {}) => Object.assign({ type: 'rule', at, x: 470, y: 222 + row * 125, w: 1400, h: 118, n: String(n), size: 32, en, zh }, o);
  lesson(h, { id: 'e11_rules', tag: ['TAKEAWAYS · EPISODE 11', '第11集 · 要点'], title: ['What Making a Market Teaches', '造市教会我们什么'],
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      R(1, 'L0@manipulator', 'No manipulator can beat the general market. Check the trend first.', '没有操纵者能战胜大盘。先看大势。', 0),
      R(2, 'L0@rises', 'Rises on your buying: you are right. Stops responding: sell.', '你一买就涨：你对了。买了不涨：卖出。', 1),
      R(3, 'L1', 'The only buyer? Stop. The only way to sell is to sell.', '只剩你在买？停手。要卖，唯一的办法就是卖。', 2),
      R(4, 'L1@big', 'The big selling is done on the way down.', '大笔卖出在下跌途中完成。', 3),
      R(5, 'L2', 'Hope hides the top. A tip can ruin people you never meet.', '希望遮住了顶部。小道消息会害了素不相识的人。', 4, { tag: '#b3302a' })],
    lines: [
      N('In brief: no manipulator can beat the general market. A stock that rises on your buying says you are right; when it stops responding, sell.', '简而言之：没有哪个操纵者能战胜大盘。你一买它就涨，说明你对了；买了它不再响应，就卖出。'),
      N('If you are the only buyer, stop. The big selling is done on the way down.', '如果只剩你自己在买，就停手。大笔卖出是在下跌途中完成的。'),
      N('Hope hides the top. And a tip can ruin people you will never meet.', '希望会遮住顶部。而一条小道消息，能害了你素不相识的人。'),
    ] });
  lesson(h, { id: 'e11_mistakes', tag: ['MISTAKE REVIEW · CHAPTERS XXI–XXII', '错误复盘 · 第二十一至二十二章'], tagColor: '#b3302a', title: ['Mistake, Cause, Rule', '错误、原因、规则'],
    gest: ['explain', 'explainR'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 225, w: 1400, widths: [0.36, 0.30, 0.34], size: 28, bottom: 840,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [
        [['Prentiss propped up his stock as a bear market began', '普伦蒂斯在熊市初起时护盘'], ['Pride: "never below par"', '面子："绝不能跌破面值"'], ['Only buyer? Stop. Sell for what you can get', '只剩你在买？停手，能卖多少算多少']],
        [['Stove promoters came late and underallotted', '火炉发起人来得太晚，又少配股票'], ['Greed; expected the boom to last', '贪婪；以为繁荣会持续'], ['Time the issue; keep a short for support', '把握发行时机；留空头用于护盘']],
        [['Wolff bought below 40 to unload on Livingston', '沃尔夫在40以下买入，想倒给利文斯顿'], ['Counted on someone else\'s buying', '指望别人来买'], ['Trade the facts, not what others "must" do', '按事实交易，不按别人"必然"的做法']],
        [['The dressmaker bought on a famous name', '裁缝凭一个名人的名字买入'], ['A tip: who, but never why', '消息只有"谁"，没有"为什么"'], ['Never buy on a tip', '绝不凭小道消息买入']]],
      rowAt: ['L0@Prentiss', 'L0@stove', 'L1', 'L1@dressmaker'] }],
    lines: [
      N('The mistakes. Prentiss propped up his stock as the market turned. The stove promoters came late and underallotted.', '错误复盘。普伦蒂斯在市场转向时护盘。火炉发起人来得太晚，又少配了股票。'),
      N('Wolff counted on my buying. And the dressmaker bought on a famous name.', '沃尔夫指望我来接盘。而那位裁缝，只凭一个名人的名字就买了。'),
    ] });
};
