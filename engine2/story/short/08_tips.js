// 30-minute version, part 8: the unexpectable, tips, insiders and manipulation (Book ch. XV–XXIV) + finale
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, chapter, music, title, photo, PD } = h;
  chapter('8 · Tips, Insiders and Manipulation', '八 · 内幕消息、内部人与操纵');
  music('calm');
  title({ id: 's_t8', kicker: 'PART 8 · 第八部分', en: 'Tips, Insiders and Manipulation', zh: '内幕消息、内部人与操纵', size: 104, color: '#7a4a22',
    sub: ['Book chapters XV–XXIV · 1917–1922', '原著第十五至二十四章 · 1917–1922年'],
    lines: [N('Part eight. Tips, insiders, and manipulation.', '第八部分：内幕消息、内部人与操纵。')] });
  lesson(h, { id: 's_coffee', tag: ['THE UNEXPECTABLE · COFFEE 1917–18', '意外之事 · 1917–18年咖啡'], title: ['Right on the Facts, and Still Not Paid', '事实判断对了，依然没赚到'], titleSize: 50,
    gest: ['explain', 'chin', 'explainR', 'despair', 'explain'],
    items: [
      { type: 'photo', at: 0.4, x: 1460, y: 220, w: 420, h: 300, rot: 3, src: `${PD}/coffee_santos_unloading_1916.jpg`, en: 'Coffee at Santos, Brazil, 1916', zh: '巴西桑托斯港的咖啡，1916年' },
      { type: 'flow', dir: 'v', at: 'L0', x: 470, y: 220, w: 900, bh: 92, gap: 34, size: 26, nodes: [
        { en: 'Other commodities: 100–400% above pre-war. Coffee: below', zh: '其他商品比战前高100–400%，咖啡却更低', at: 'L0' },
        { en: 'U-boats sink ships → imports must shrink → surplus used up', zh: '潜艇击沉货船→进口必然减少→库存被消化', at: 'L0@submarines' },
        { en: 'Try 1: nothing for 9 months. Sold at a big loss (wrong on time)', zh: '第一次：九个月毫无动静，大亏离场（时机错了）', at: 'L1', color: '#f3c6c0' },
        { en: 'Try 2: three times the size, distant months. Price rises', zh: '第二次：三倍仓位，远期合约。价格上涨', at: 'L2', color: '#cfe3c4' },
        { en: 'Shorts appeal to Washington: price capped, trading ordered closed', zh: '空头求助华盛顿：价格被限，交易被勒令了结', at: 'L3', color: '#f3c6c0' }] },
      { type: 'bars', at: 'L4', x: 1460, y: 560, w: 420, h: 280, max: 23, vsize: 28, title: ['Green coffee, ¢ per lb', '生咖啡，美分/磅'],
        bars: [{ v: 9, vl: '≈9¢', en: 'under the cap', zh: '限价期间', at: 'L4', color: '#9a9182' }, { v: 23, vl: '23¢', en: 'after reopening', zh: '交易所重开后', at: 'L4+0.6', color: '#2f6b3d' }] }],
    lines: [
      N('By 1917 most commodities stood a hundred to four hundred percent above pre-war prices. Coffee was below. With submarines sinking ships, imports had to shrink.', '到1917年，大多数商品比战前高出百分之一百到四百，咖啡却更低。潜艇不断击沉货船，进口必然减少。'),
      N('I bought, and for nine months nothing happened. I sold at a whopping loss. I had been wrong on time, not on the facts.', '我买入了，九个月毫无动静。我大亏离场。我错在时机，而不是事实。'),
      N('I bought again, three times as much, in distant months. This time the market rose at once.', '我再次买入，仓位是原来的三倍，用的是远期合约。这一次，市场立刻上涨。'),
      N('The shorts ran to Washington. A war committee fixed a maximum price and ordered all contracts closed. Millions in profit never came.', '空头跑去了华盛顿。一个战时委员会规定了最高价，并下令了结所有合约。数以百万计的利润落了空。'),
      N('When the exchange reopened, coffee sold at twenty-three cents. Expect the unexpectable, and count no profit until it is in the bank.', '交易所重开后，咖啡卖到了二十三美分。要预料到无法预料之事；利润在进银行之前，都不算数。'),
    ] });
  lesson(h, { id: 's_insiders', tag: ['THE INSIDER CYCLE', '内部人的循环'], title: ['How the Public Pays Twice', '公众怎样付出两次代价'], music: 'tense',
    gest: ['explain', 'explainR', 'point', 'despair', 'explain'],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 220, w: 1400, bh: 190, gap: 50, size: 25, nodes: [
        { num: 1, en: 'Business improves. Insiders buy quietly', zh: '业务好转，内部人悄悄买入', at: 'L0' },
        { num: 2, en: '"We know of no reason for the rise"', zh: '"我们不知道上涨的原因"', at: 'L0@reason' },
        { num: 3, en: 'Anonymous bullish news. The public buys', zh: '匿名利好满天飞，公众买入', at: 'L1' },
        { num: 4, en: 'Insiders sell silently. "It\'s a bear raid!"', zh: '内部人悄悄卖出。"这是空头打压！"', at: 'L1@silently', color: '#f3c6c0' }] },
      { type: 'chart', at: 'L2', x: 470, y: 440, w: 960, h: 400, xr: [0, 10], yr: [0, 280], yTicks: [50, 150, 250], cursorFmt: 'int', illustrative: true, title: ['New Haven railroad: 255 → 12', '纽黑文铁路：255→12'],
        xTicks: [[0, '1902', ''], [10, 'by 1922', '至1922年']],
        series: [{ pts: [[0, 255], [1, 215], [2, 225], [3, 160], [4, 180], [5, 140], [6, 110], [7, 70], [8, 55], [9, 30], [10, 12]], color: '#b3302a', draw: [['L2', 4], ['L3', 10]] }],
        marks: [{ x: 0, y: 255, at: 'L2', en: '255: "as safe as Gibraltar"', zh: '255："像直布罗陀一样稳"', dx: 30, dy: 10, w: 250 }, { x: 10, y: 12, at: 'L3@twelve', en: '12', zh: '', dx: -120, dy: -90, w: 80, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L4', x: 1460, y: 440, w: 410, h: 400, size: 28, fill: '#f6d77a', en: 'A long decline is never just a bear raid. When a stock keeps falling, something is wrong. Get out.', zh: '长期下跌从来不只是空头打压。股票持续下跌，必有问题。离场。', anim: 'slideU' }],
    lines: [
      N('Here is the cycle. Business improves. Insiders know first, say nothing, and buy. Asked why the stock is rising, they know of no reason.', '循环是这样的。业务好转，内部人最先知道，一声不吭地买入。被问到股价为何上涨，他们说不知道原因。'),
      N('When they hold all they want, unsigned bullish news fills the tickers, and the public buys. When business turns down, they sell, silently, and blame bear raids.', '等他们吃够了货，匿名的利好消息就塞满了行情机，公众纷纷买入。业务转差时，他们悄悄卖出，再把下跌归咎于空头打压。'),
      N('The New Haven railroad sold at 255 in 1902, New England\'s premier investment. Insiders saw trouble first, and sold.', '纽黑文铁路1902年卖到255，是新英格兰首屈一指的投资品。内部人最先看出问题，并卖出了。'),
      N('The public was told it was bear selling, and held. The stock fell to twelve. At 250 or 100 or 25, it was still too high.', '公众被告知这是空头卖压，于是继续持有。股价跌到了十二。无论是250、100还是25，它都还是太高了。'),
      N('So a long decline is never just a raid. When a stock keeps falling, something is wrong. Get out, and ask why later.', '所以，长期下跌从来不只是打压。股票持续下跌，必有问题。先离场，原因以后再问。'),
    ] });
  photo({ id: 's_keene', src: `${PD}/portrait_james_r_keene_1901_worldswork.jpg`, credit: 'James R. Keene · The World\'s Work, 1901 (public domain)', music: 'tense',
    cap: ['James R. Keene (1838–1913), the greatest market manipulator of his day.', '詹姆斯·R·基恩（1838–1913），当时最伟大的市场操纵者。'], capW: 600,
    kb: [{ t: 0, x: 960, y: 500, z: 1.02 }, { t: 14, x: 960, y: 430, z: 1.15 }],
    items: [{ type: 'note', screen: true, at: 'L2', x: 1220, y: 640, w: 640, h: 200, size: 28, fill: '#f3c6c0', en: 'Most of these practices are illegal today. Study them only to recognize them.', zh: '这些做法如今大多违法。学习它们只为了识别它们。', anim: 'slideU' }],
    lines: [
      N('James R. Keene marketed big blocks of stock for insiders, including U.S. Steel in 1901. To him manipulation was selling, through advertising on the tape.', '詹姆斯·R·基恩为内部人推销大宗股票，包括1901年的美国钢铁。在他看来，操纵就是销售，通过纸带做广告。'),
      N('Make a stock active, so traders notice it. Mark it as high as possible, then sell it to the public on the way down. And quit the moment the tape says no.', '先让股票活跃起来，引起交易者注意；把价格推到尽可能高，然后在下跌途中卖给公众。一旦纸带说"不"，立刻收手。'),
      N('Most of this is illegal today. Learn it so you can recognize it, from the buyer\'s side.', '这些做法如今大多违法。学会它，是为了站在买方的位置上识别它。'),
    ] });
  // ---- finale ----
  chapter('Finale · Twelve Rules', '尾声 · 十二条规则');
  const R = (n, at, en, zh, col, row) => ({ type: 'rule', at, x: col ? 1190 : 470, y: 205 + row * 106, w: 700, h: 96, n: String(n), size: 26, en, zh });
  lesson(h, { id: 's_rules', tag: ['THE WHOLE BOOK IN TWELVE RULES', '全书浓缩为十二条'], title: ['What It Cost Me to Learn', '我付出代价学到的东西'], music: 'calm', titleSize: 48,
    gest: ['explain', 'explainR', 'pointUp', 'explain', 'relaxed'],
    items: [
      R(1, 'L0', 'Watch what prices do, not why', '看价格做了什么，别问为什么', 0, 0),
      R(2, 'L0@game', 'Know your game: your fill is not the tape', '弄清游戏：成交价≠纸带价', 0, 1),
      R(3, 'L0@every', 'Don\'t trade every day', '不要天天交易', 0, 2),
      R(4, 'L1', 'Wait for the line of least resistance', '等待最小阻力线', 0, 3),
      R(5, 'L1@small', 'Start small; add only when it shows a profit', '先小仓位，有盈利才加仓', 0, 4),
      R(6, 'L1@wrong', 'Decide in advance what proves you wrong', '事先确定认错点', 0, 5),
      R(7, 'L2', 'The big money is in sitting tight', '大钱靠坐得住', 1, 0),
      R(8, 'L2@sell', 'Sell the loser, keep the winner', '卖掉亏损的，留住盈利的', 1, 1),
      R(9, 'L2@conditions', 'Study general conditions, and money', '研究整体形势，尤其是资金', 1, 2),
      R(10, 'L3', 'Trust your own judgment: no tips', '相信自己的判断：不听消息', 1, 3),
      R(11, 'L3@favours', 'Never trade for gratitude, or to pay a bill', '不为人情交易，不靠市场付账', 1, 4),
      R(12, 'L3@protect', 'Protect capital from your own mistakes', '保护资本，防范自己的错误', 1, 5)],
    lines: [
      N('If you remember nothing else: watch what prices do, not why. Know which game you are in. Don\'t trade every day.', '如果别的都记不住，请记住这些：看价格做了什么，别问为什么。弄清你在玩哪种游戏。不要天天交易。'),
      N('Wait for the line of least resistance. Start small, and add only when you show a profit. Decide in advance what will prove you wrong.', '等待最小阻力线。从小仓位开始，有了盈利才加仓。事先确定什么情况证明你错了。'),
      N('Once you are right, sit tight. Sell what shows a loss and keep what shows a profit. Study general conditions, and above all, money.', '一旦做对，就坐得住。卖掉亏损的，留住盈利的。研究整体形势，尤其是资金。'),
      N('Trust your own judgment: no tips, and no trades out of favours or to pay a bill. And protect your capital, even from yourself.', '相信自己的判断：不听小道消息，不为人情交易，也不指望市场替你付账。还要保护你的资本，甚至要防着你自己。'),
    ] });
  shot({ id: 's_end', set: 'study', setOpts: { night: true, ticker: true, tickerX: 300 }, trans: 'dip', music: 'calm', hold: 1.5,
    cam: [{ t: 0, x: 1080, y: 460, z: 1.3 }, { t: 'end', x: 960, y: 520, z: 1.0, ease: 'sine' }],
    cast: [{ id: 'larryOld', key: 'nar', x: 1080, y: 870, s: 1.25, pose: 'relaxed', expr: 'smile', lookX: -0.3, acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] }],
    items: [{ type: 'text', screen: true, at: 'L2e', x: 960, y: 860, size: 26, font: 'cond', fill: '#f1ead6', zfill: '#f6d77a', w: 1700,
      en: 'Adapted from Edwin Lefèvre, Reminiscences of a Stock Operator (1923, public domain). Photos: Library of Congress, Detroit Publishing Co., Bain News Service. Music: Musopen (CC0), pre-1923 recordings.',
      zh: '改编自埃德温·勒菲弗《股票大作手回忆录》（1923，公有领域）。图片：美国国会图书馆等；音乐：Musopen（CC0）及1923年前录音。' }],
    lines: [
      N('Every lesson in this story cost me money. Some of them cost me everything I had.', '这个故事里的每一个教训都让我付出了金钱。有些让我输掉了全部家当。'),
      N('There is nothing new in Wall Street. Whatever happens in the market today has happened before, and will happen again.', '华尔街没有新鲜事。今天市场上发生的一切，以前都发生过，以后还会再发生。'),
      N('The faces change. Human nature does not. That is why these lessons still hold.', '面孔会变，人性不会变。这就是为什么这些教训至今依然有效。'),
    ] });
};
