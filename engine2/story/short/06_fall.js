// 30-minute version, part 6: the fall (Book ch. XI–XIII)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, title, photo, PD } = h;
  chapter('6 · The Fall', '六 · 坠落');
  music('dark');
  title({ id: 's_t6', kicker: 'PART 6 · 第六部分', en: 'The Fall', zh: '坠落', color: '#3a3d46',
    sub: ['Book chapters XI–XIII · c. 1908–1914', '原著第十一至十三章 · 约1908–1914年'],
    lines: [N('Part six. The fall.', '第六部分：坠落。')] });
  shot({ id: 's_cottonking', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['JULY COTTON', 'OCT COTTON', 'WHEAT', 'CORN', 'STEEL'], ['12.40', '11.80', '1.05', '.68', '48¼'], ['12.38', '11.78', '1.04⅞', '.67⅞', '48']],
      boardSeq: [{ t: 'L1', r: 1, c: 0, v: '12.95' }, { t: 'L1@sold', r: 1, c: 0, v: '13.10' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 1300, y: 560, z: 1.25, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [{ id: 'larry', x: 640, y: 890, s: 1.2, pose: 'chin', expr: 'think', prop: { t: 'paper', text: 'THE WORLD' }, acts: [{ t: 'L1', pose: 'hold', expr: 'shock' }, { t: 'L1@sold', pose: 'point', expr: 'determined' }] }],
    items: [{ type: 'newspaper', at: 'L1', x: 1300, y: 560, w: 760, h: 520, paper: 'The World', en: 'JULY COTTON CORNERED BY LARRY LIVINGSTON', zh: '拉瑞·利文斯顿逼空七月棉花', size: 54 },
      { type: 'counter', at: 'L1@sold', x: 400, y: 280, from: 140000, to: 0, size: 90, suffix: ' bales', dur: 2.2, label: ['sold by 10:10 a.m.', '上午10:10前全部卖出'] }],
    lines: [
      N('After the panic I quietly bought up July cotton, a hundred and forty thousand bales. Then I saw a problem: no market could take that much back without breaking.', '恐慌过后，我悄悄买进了七月棉花，十四万包。然后我发现一个问题：没有哪个市场能一下子吞下这么多而不崩盘。'),
      N('One morning a newspaper ran a story that I had cornered July cotton. I had nothing to do with it. The shorts rushed to buy, and by ten past ten I had sold every bale, at the top.', '一天早上，一家报纸登出消息，说我逼空了七月棉花。这与我毫无关系。空头蜂拥买入，十点十分之前，我在最高价附近卖光了每一包。'),
      N('The lesson: a big line cannot sneak out. You sell when the market can absorb it, not when you want to.', '教训是：大仓位无法悄悄撤出。你必须在市场能够承接时卖出，而不是在你想卖的时候。'),
    ] });
  shot({ id: 's_percy', set: 'study', trans: 'dip', music: 'dark', setOpts: { night: true, lampX: 1650 },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'percy', z: 1.4, dur: 1.4 }, { t: 'L2', on: 'larry', z: 1.45, dur: 1.4 }],
    cast: [{ id: 'percy', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'smile', acts: [{ t: 'L1', pose: 'explainR' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'cross', expr: 'neutral', acts: [{ t: 'L1e', pose: 'chin', expr: 'worry' }, { t: 'L2', expr: 'tired' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Percy Thomas, famous cotton operator: brilliant, magnetic, and bullish.', zh: '珀西·托马斯，著名棉花投机商：才华横溢、富有魅力，而且看涨。', w: 680 },
      { type: 'bubble', at: 'L1', until: 'L2e', x: 1060, y: 60, w: 640, en: 'My information comes from ten thousand correspondents all over the South. Cotton must go up!', zh: '我的消息来自遍布南方的一万名通讯员。棉花一定会涨！', tx: 1250, ty: 400 }],
    lines: [
      N('Then I met Percy Thomas, the most magnetic man I ever knew. He was bullish on cotton. I was bearish, and short.', '后来我结识了珀西·托马斯，我见过的最有魅力的人。他看涨棉花。我看跌，并且做空。'),
      L('percy', 'My information comes from ten thousand correspondents all over the South. Cotton must go up!', '我的消息来自遍布南方的一万名通讯员。棉花一定会涨！', { speak: 'percy' }),
      N('He never convinced me. But he made me unsure, which is worse. I stopped doing my own thinking, covered, and went long.', '他从未说服我。但他让我动摇了，这更糟。我不再独立思考，平掉空单，转而做多。'),
    ] });
  lesson(h, { id: 's_reverse', tag: ['THE FATAL MISTAKE', '致命错误'], tagColor: '#b3302a', title: ['He Kept the Loser and Sold the Winner', '他留下亏损的，卖掉盈利的'], music: 'dark',
    gest: ['explain', 'point', 'despair', 'explain'],
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 760, h: 620, title: ['Cotton he held (bales)', '他持有的棉花（包）'], max: 440000, vsize: 30,
        bars: [{ v: 60000, vl: '60,000', en: 'First long', zh: '首次做多', at: 'L0', color: '#c9a26a' }, { v: 150000, vl: '150,000', en: 'Buying to hold the price', zh: '为托价而买', at: 'L0@more', color: '#b3302a' }, { v: 440000, vl: '440,000', en: 'Before he sold out', zh: '最终清仓前', at: 'L2', color: '#b3302a' }] },
      { type: 'table', at: 'L1', x: 1260, y: 220, w: 620, widths: [0.3, 0.35, 0.35], size: 27, bottom: 640,
        cols: [['', ''], ['Cotton', '棉花'], ['Wheat', '小麦']],
        rows: [[['Showed', '账面'], ['A loss', '亏损'], ['A profit', '盈利']], [['He', '他的做法'], ['Kept it, bought more', '留着，还加仓'], ['Sold it', '卖掉了']], [['Then', '后来'], ['Kept falling', '继续下跌'], ['Rose 20¢: ~$8M missed', '涨了20美分：错过约800万美元']]],
        rowAt: ['L1', 'L1@kept', 'L2'], hl: [null, 'L1@reverse', null] },
      { type: 'note', at: 'L3', x: 1260, y: 670, w: 620, h: 160, size: 28, fill: '#f6d77a', en: 'Sell what shows a loss. Keep what shows a profit.', zh: '卖掉亏损的，留住盈利的。', anim: 'slideU' }],
    lines: [
      N('I went long sixty thousand bales, then bought more to hold the price up, a hundred and fifty thousand. I was also carrying wheat, with a fine profit.', '我做多了六万包，后来为了托住价格又不断加仓，到了十五万包。同时我还持有小麦，账面利润可观。'),
      N('Feeling my load was too big, I sold the wheat, which showed a profit, and kept the cotton, which showed a loss. Exactly the reverse of what I should do.', '我觉得仓位太重，于是卖掉了盈利的小麦，留下了亏损的棉花。这和我应该做的恰恰相反。'),
      N('Wheat went up twenty cents; by my reckoning that was eight million dollars. I kept buying cotton to support it, up to four hundred and forty thousand bales, before I finally sold out.', '小麦后来涨了二十美分，按我的估算那是八百万美元。我却一直买棉花来托市，直到四十四万包，才最终清仓。'),
      N('More than nine tenths of my stake was gone. I sold my yachts. Always sell what shows you a loss, and keep what shows you a profit.', '我九成以上的本钱没了，只好卖掉游艇。永远卖掉让你亏损的，留住让你盈利的。'),
    ] });
  shot({ id: 's_williamson', set: 'office', trans: 'wipe', music: 'dark',
    setOpts: { board: [['CHES. & ATL.', 'SO. ATLANTIC', 'UNION PAC', 'READING', 'STEEL'], ['76', '58', '172', '148', '62'], ['75½', '57¾', '171½', '147¾', '61¾']], boardSeq: [{ t: 'L2', r: 1, c: 0, v: '79' }] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'williamson', z: 1.4, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [{ id: 'williamson', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'smile', acts: [{ t: 'L2', pose: 'explain', expr: 'sly' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'relaxed', expr: 'neutral', acts: [{ t: 'L1', pose: 'hold', expr: 'smile' }, { t: 'L2e', pose: 'despair', expr: 'shock' }, { t: 'L3', pose: 'chin', expr: 'sad' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Dan Williamson, a powerful Wall Street banker.', zh: '丹·威廉森，华尔街有权势的银行家。' },
      { type: 'counter', at: 'L1', x: 1000, y: 240, from: 25000, to: 112000, prefix: '$', size: 90, dur: 2, color: '#2f6b3d', label: ['his $25,000 stake, three weeks later', '2.5万美元本金，三周之后'], until: 'L2' },
      { type: 'bubble', at: 'L2', until: 'L3', x: 1050, y: 60, w: 600, en: 'Larry, I covered your short this morning in London and went long.', zh: '拉瑞，今早我在伦敦帮你平了空单，还做了多。', tx: 1250, ty: 400 },
      { type: 'counter', at: 'L3', x: 960, y: 260, from: 0, to: -150000, fmt: '$', size: 90, dur: 1.6, color: '#b3302a', label: ['what he soon owed', '他很快欠下的债'] }],
    lines: [
      N('Broke and in debt, I got an offer from a banker, Dan Williamson. He gave me an account and a check for twenty-five thousand dollars.', '我破产又负债，这时银行家丹·威廉森向我提出合作。他为我开了户，还给了我一张两万五千美元的支票。'),
      N('In three weeks I turned it into a profit of a hundred and twelve thousand. When I tried to repay him, he waved me away. Not insisting was the mistake I regret most.', '三周内，我用它赚了十一万二千美元。我要还钱时，他摆手拒绝了。没有坚持还钱，是我最后悔的错误。'),
      L('williamson', 'Larry, I covered your short this morning in London, and went long. I know something you couldn\'t know.', '拉瑞，今早我在伦敦帮你平了空单，还做了多。我知道一些你不可能知道的事。', { speak: 'williamson' }),
      N('Out of gratitude, I let him trade against my judgment. My profits vanished, and I owed a hundred and fifty thousand. I was his smoke screen: my name covered the selling of a dying insider\'s stock.', '出于感激，我任由他违背我的判断去交易。利润化为乌有，我还欠了十五万。我成了他的烟幕：我的名字掩护了一位垂危内部人的抛售。'),
    ] });
  lesson(h, { id: 's_lean', tag: ['THE LEAN YEARS', '低谷岁月'], title: ['Debt, Worry, and Bankruptcy', '债务、焦虑与破产'], music: 'dark',
    gest: ['explain', 'chin', 'explain', 'explainR'],
    items: [
      { type: 'timeline', at: 0.4, x: 520, y: 330, w: 1320, range: [1908, 1916],
        ticks: [[1908, 'Cotton King', '棉花大王', 'L0'], [1910, 'Williamson', '威廉森', 'L0@Williamson'], [1912, 'Lean years', '低谷', 'L1'], [1914, '>$1M debt · bankrupt', '负债超百万·破产', 'L2'], [1915, 'Comeback', '东山再起', 'L3e']],
        marker: [['L0', 1908], ['L1', 1912], ['L2', 1914], ['L3e', 1915]] },
      { type: 'photo', at: 'L2@Exchange', x: 520, y: 500, w: 420, h: 260, rot: -2, src: `${PD}/nyse_trading_floor_1922.jpg`, en: 'NYSE closed: Jul 31 – Dec 1914', zh: '纽交所停市：1914年7月31日至12月' },
      { type: 'note', at: 'L3', x: 1020, y: 500, w: 820, h: 260, size: 30, fill: '#f6d77a', en: 'He studied himself like a market: the problem wasn\'t the market, it was worry about debts. A speculator needs his whole mind.', zh: '他像研究市场一样研究自己：问题不在市场，而在对债务的焦虑。投机者需要全神贯注。', anim: 'slideU' }],
    lines: [
      N('From 1911 to 1914 the market was flat, and I kept trying to force it to give what it did not have. I lost in every office I tried.', '1911到1914年，市场一潭死水，我却一直想逼它给出它没有的东西。我在每一家营业部都输钱。'),
      N('When I finally stopped trading on credit, I owed well over a million dollars.', '当我终于停止用借来的钱交易时，我已欠下一百多万美元。'),
      N('In 1914 I went through bankruptcy. That same summer the war closed the Stock Exchange from July thirty-first until December.', '1914年，我申请了破产。同年夏天，战争使证券交易所从7月31日一直关闭到12月。'),
      N('I had studied myself the way I study a market. The trouble was not the market. It was worry. A speculator must give his whole mind to the work.', '我像研究市场一样研究了自己。问题不在市场，而在焦虑。投机者必须把全部心思放在工作上。'),
    ] });
};
