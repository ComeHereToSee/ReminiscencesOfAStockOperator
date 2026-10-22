// 30-minute version, part 7: the comeback (Book ch. XIII–XIV)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, chapter, music, title, photo, PD } = h;
  chapter('7 · The Comeback', '七 · 东山再起');
  music('calm');
  title({ id: 's_t7', kicker: 'PART 7 · 第七部分', en: 'The Comeback', zh: '东山再起', color: '#2f6b3d',
    sub: ['Book chapters XIII–XIV · 1915–1917', '原著第十三至十四章 · 1915–1917年'],
    lines: [N('Part seven. The comeback.', '第七部分：东山再起。')] });
  lesson(h, { id: 's_bethlehem', tag: ['CASE STUDY · 1915', '案例 · 1915年'], title: ['Bethlehem Steel: Six Weeks of Waiting', '伯利恒钢铁：六周的等待'],
    gest: ['explain', 'chin', 'pointUp', 'up', 'explain'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1050, h: 620, xr: [0, 10], yr: [80, 150], yTicks: [90, 100, 110, 120, 130, 140], illustrative: true, cursorFmt: 'int',
        title: ['Bethlehem Steel, early 1915', '伯利恒钢铁，1915年初'],
        hlines: [{ v: 100, at: 'L1', color: '#2f6b3d', en: 'His trigger: par (100)', zh: '他的触发点：面值100', below: true }],
        series: [{ pts: [[0, 82], [2, 86], [4, 90], [5.5, 94], [6.6, 98.5], [7.4, 114.5], [8.5, 135], [9.4, 145], [10, 146]], color: '#2f6b3d', draw: [['L1', 3], ['L2', 4], ['L3', 6], ['L3@next', 8]] }],
        marks: [{ x: 4, y: 90, at: 'L2', en: '"Sweating blood": each point waited = $500', zh: '"急得冒血汗"：每等一个点＝500美元', dx: -60, dy: -170, w: 300, fill: '#f3c6c0' },
          { x: 6.6, y: 98.5, at: 'L3', en: 'Buys 500 at 98–99', zh: '在98–99买500股', dx: 30, dy: 40, w: 200 },
          { x: 7.4, y: 114.5, at: 'L3@bought', en: 'Closes ~114: buys 500 more', zh: '收于114附近：再买500股', dx: -330, dy: -40, w: 260 },
          { x: 9.4, y: 145, at: 'L3@next', en: 'Next day: 145', zh: '次日：145', dx: -240, dy: 40, w: 170, fill: '#f6d77a' }] },
      { type: 'note', at: 'L4', x: 1550, y: 260, w: 330, h: 560, size: 28, fill: '#cfe3c4', en: 'With a small stake, the first trade must be nearly certain. Fix the pivotal point in advance, wait for it, then act at once.', zh: '本金很少时，第一笔交易必须几乎稳赢。事先确定关键点，耐心等待，到点立刻行动。', anim: 'slideU' }],
    lines: [
      N('In February 1915, Dan Williamson let me trade five hundred shares again. With so little, my very first trade had to make real money.', '1915年2月，丹·威廉森又让我交易五百股。本钱这么少，我的第一笔交易就必须赚到真钱。'),
      N('I was most bullish on Bethlehem Steel, but I decided to wait until it crossed par, 100. For six weeks I stayed away from the office.', '我最看好伯利恒钢铁，但我决定等它突破面值100再动手。整整六个星期，我没去营业部。'),
      N('Every point it rose while I waited cost me five hundred dollars. At 90 I was sweating blood. But I held myself in check.', '我等待时它每涨一个点，我就少赚五百美元。到90时我急得冒血汗。但我忍住了。'),
      N('At 98 I bought five hundred. It closed around 114, and I bought five hundred more. The next day it was 145.', '在98，我买了五百股。它收在114左右，我又买了五百股。第二天，它到了145。'),
      N('The hardest six weeks of my life gave me my stake back. Fix the point in advance, wait for it, then act.', '我一生中最难熬的六个星期，让我赚回了本钱。事先确定关键点，等待它，然后行动。'),
    ] });
  photo({ id: 's_lusitania', src: `${PD}/newspaper_nytribune_lusitania_1915-05-08.jpg`, credit: 'New-York Tribune, May 8, 1915 · Library of Congress, Chronicling America (public domain)', music: 'dark',
    cap: ['May 7, 1915: a German submarine sinks the Lusitania. Stocks break.', '1915年5月7日：德国潜艇击沉卢西塔尼亚号。股市暴跌。'],
    kb: [{ t: 0, x: 960, y: 420, z: 1.05 }, { t: 9, x: 960, y: 360, z: 1.25 }],
    lines: [N('Then the Lusitania was sunk, and the market broke. Accidents happen to every trader. I ended 1915 with about a hundred and forty thousand dollars.', '后来卢西塔尼亚号被击沉，市场暴跌。每个交易者都会遭遇意外。到1915年底，我有了大约十四万美元。')] });
  lesson(h, { id: 's_tops', tag: ['METHOD 8 · READ THE TOP FROM THE LEADERS', '方法八 · 从龙头股判断顶部'], title: ['1916: The Leaders Stop Coming Back', '1916年：龙头股不再涨回去'], titleSize: 50, music: 'tense',
    gest: ['explain', 'point', 'explainR', 'up', 'explain'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 900, h: 620, xr: [0, 10], yr: [80, 125], yTicks: [90, 100, 110, 120], illustrative: true, cursorLabel: false,
        title: ['A typical war-boom leader', '一只典型的战争繁荣龙头股'],
        series: [{ pts: [[0, 88], [1.5, 100], [2.2, 94], [3.5, 108], [4.2, 102], [5.6, 118], [6.4, 111.5], [7.2, 114], [8, 108], [9, 100], [10, 92]], color: '#b3302a', draw: [['L0', 5], ['L1', 7], ['L2', 10]] }],
        marks: [{ x: 2.2, y: 94, at: 'L0', en: 'Reactions always came back', zh: '以往回调总会涨回', dx: 20, dy: 40, w: 240 },
          { x: 7.2, y: 114, at: 'L1', en: 'Reacts 6–7 pts… and does NOT come back', zh: '回调6–7点……却没有再涨回去', dx: -360, dy: -170, w: 280, fill: '#f3c6c0' }] },
      { type: 'equation', at: 'L2@sixty', x: 1630, y: 330, size: 50, terms: [{ t: '60,000 sh', zh: '12只股票共6万股', at: 'L2@sixty' }] },
      { type: 'equation', at: 'L3', x: 1630, y: 470, size: 50, terms: [{ t: '×2 = 120,000', zh: '各盈利4点后加倍', at: 'L3', hl: true }] },
      { type: 'counter', at: 'L4', x: 1630, y: 680, from: 0, to: 3000000, prefix: '≈$', size: 80, dur: 1.8, color: '#2f6b3d', label: ['his result for 1916', '1916年的成绩'] }],
    lines: [
      N('1916 was a war-boom bull market, and I rode it. Then, late in the year, the leaders began to fail.', '1916年是战争繁荣带来的牛市，我顺势而为。到了年底，龙头股开始走弱。'),
      N('One after another they reacted six or seven points, and for the first time in months, did not come back.', '它们一只接一只地回调六七个点，而且几个月来第一次没有再涨回去。'),
      N('I sold five thousand shares of each tired leader. In about a month I was short sixty thousand shares in twelve stocks.', '我把每只走弱的龙头股各卖空五千股。大约一个月后，我在十二只股票上共做空了六万股。'),
      N('When all twelve showed at least four points of profit, I doubled, to a hundred and twenty thousand.', '当十二只股票都有了至少四个点的盈利，我把仓位加倍到十二万股。'),
      N('A leak about a peace note from President Wilson broke the market, and I covered. For 1916 I made about three million dollars.', '有关威尔逊总统和平照会的消息走漏，市场大跌，我顺势平仓。1916年，我赚了大约三百万美元。'),
    ] });
  lesson(h, { id: 's_1917', tag: ['CASE STUDY · FEBRUARY 1917', '案例 · 1917年2月'], title: ['Conditions vs. an Outside Bet', '依据形势 vs. 押注外部事件'], music: 'tense',
    items: [
      { type: 'photo', at: 0.4, x: 1430, y: 220, w: 440, h: 330, rot: 3, src: `${PD}/newsboy_us_at_war_1917_npco.jpg`, en: 'April 1917: the U.S. enters the war', zh: '1917年4月：美国参战' },
      { type: 'table', at: 'L0', x: 470, y: 220, w: 920, widths: [0.26, 0.37, 0.37], size: 28, bottom: 820,
        cols: [['Position', '仓位'], ['Based on', '依据'], ['After the submarine note', '潜艇照会之后']],
        rows: [[['Short stocks', '做空股票'], ['Market conditions', '市场形势'], ['Covered into the panic', '在恐慌中平仓']],
          [['Short wheat', '做空小麦'], ['Market conditions', '市场形势'], ['Profit with stocks: ≈ $1.5M', '与股票合计盈利约150万美元']],
          [['Long cotton, 15,000 bales', '做多棉花1.5万包'], ['A bet on peace', '押注和平'], ['Opened 500 pts down: ≈ −$375,000', '开盘跌500点：约亏37.5万美元']]],
        rowAt: ['L0', 'L0+0.5', 'L1'], hl: ['L2', 'L2', 'L1@cotton'] },
      { type: 'note', at: 'L3', x: 1430, y: 620, w: 440, h: 210, size: 27, fill: '#f6d77a', en: 'Positions built on conditions survived the shock. The bet on an event lost.', zh: '依据形势建立的仓位扛住了冲击。押注事件的仓位亏了。', anim: 'slideU' }],
    lines: [
      N('Winter 1917, Palm Beach. I was short stocks and wheat on market conditions. Expecting peace, I also bought fifteen thousand bales of cotton.', '1917年冬，棕榈滩。我根据市场形势做空股票和小麦。因为预期和平，我还买了一万五千包棉花。'),
      N('After the close, Germany announced unrestricted submarine warfare. The next morning cotton opened five hundred points down.', '收盘后，德国宣布无限制潜艇战。第二天早上，棉花开盘就跌了五百点。'),
      N('I covered my stocks and wheat into the panic, about one and a half million dollars of profit. The cotton cost me about three hundred seventy-five thousand.', '我在恐慌中平掉股票和小麦，获利约一百五十万美元。棉花让我亏了约三十七万五千美元。'),
      N('The positions based on conditions paid. The one based on an outside event lost.', '依据形势的仓位赚了钱，押注外部事件的那一笔亏了。'),
    ] });
  shot({ id: 's_repay', set: 'home', trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 960, y: 500, z: 1.12, dur: 2 }],
    cast: [{ id: 'larry', x: 760, y: 890, s: 1.2, pose: 'hold', expr: 'smile', prop: { t: 'paper', text: 'PAID IN FULL' }, acts: [{ t: 'L1', pose: 'relaxed', expr: 'smile' }] },
      { id: 'wife', x: 1200, y: 890, s: 1.15, flip: true, pose: 'relaxed', expr: 'smile', at: 'L1' }],
    items: [{ type: 'stamp', at: 'L0@paid', x: 1450, y: 300, en: 'DEBTS > $1,000,000 PAID', zh: '超百万债务全部还清', size: 60 },
      { type: 'note', at: 'L1@annuities', x: 1180, y: 420, w: 640, h: 170, size: 28, fill: '#cfe3c4', en: 'Money management: put part of your capital beyond the reach of your own future mistakes.', zh: '资金管理：把一部分资本放到你自己将来的错误够不着的地方。', anim: 'slideU' }],
    lines: [
      N('Back in New York in 1917, I paid every old debt in full, over a million dollars, even to the creditors who had released me.', '1917年回到纽约，我还清了所有旧债，超过一百万美元，连那些已经免除我债务的债权人也一并还清。'),
      N('Then I bought annuities and set up trusts for my wife and son, safe from my market needs, safe even from me.', '然后我为妻子和儿子购买了年金，设立了信托，不受我交易需要的影响，甚至连我自己也动不了。'),
    ] });
};
