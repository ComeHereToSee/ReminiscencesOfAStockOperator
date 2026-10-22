// Full version, episode 8: the unexpectable (coffee, bear-raid excuses) and the tip (Borneo Tin, Westlake, the W.A.R. hat,
// Atlantic & Southern, the Pennsylvania Dutchman). Book chapters XV–XVI.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(8, 'Reminiscences_E08_The_Unexpectable_and_the_Tip');
  chapter('Chapter XV · The Unexpectable', '第十五章 · 无法预料之事');
  music('calm');
  title({ id: 'e08_title', kicker: 'EPISODE 8 · 第8集', en: 'The Unexpectable and the Tip', zh: '意外之事与内幕消息', size: 104, color: '#7a4a22',
    sub: ['Book chapters XV–XVI · c. 1915–1918', '原著第十五至十六章 · 约1915–1918年'],
    lines: [N('Episode eight. The unexpectable, and the tip.', '第八集：无法预料之事，与内幕消息。')] });

  // ---- the hazards; Baruch's recipe ----
  photo({ id: 'e08_baruch', src: `${PD}/portrait_bernard_baruch_1917_bain.jpg`, credit: 'Bernard M. Baruch, 1917 · Bain News Service, Library of Congress (public domain)',
    cap: ['Bernard M. Baruch, 1917. The narrator quotes his recipe: stick to facts, and facts only.', '伯纳德·M·巴鲁克，1917年。叙述者引用他的秘诀：只认事实。'], capW: 620,
    kb: [{ t: 0, x: 960, y: 500, z: 1.02 }, { t: 14, x: 960, y: 450, z: 1.14 }],
    items: [
      { type: 'note', at: 'L0@unexpectable', x: 1240, y: 430, w: 620, h: 170, size: 32, fill: '#f6d77a', anim: 'slideU',
        en: 'Hazards: the unexpected… and the UNEXPECTABLE', zh: '风险：意外之事……以及无法预料之事' },
      { type: 'note', at: 'L3@safe', x: 1240, y: 630, w: 620, h: 170, size: 32, fill: '#f3c6c0', anim: 'slideU',
        en: 'No profit is safe until it is in your bank.', zh: '利润进了银行，才算安全。' }],
    lines: [
      N('Among the hazards of speculation, the unexpected ranks high. I might even say, the unexpectable.', '在投机的种种风险中，意外之事名列前茅。我甚至要说：无法预料之事。'),
      N('Wall Street is no battlefield. I fight nobody. I merely differ in my reading of basic conditions.', '华尔街不是战场。我不跟任何人作对，只是对基本形势有不同的解读。'),
      N('I stick to facts, and facts only: Bernard Baruch\'s recipe. When I miss them, I lose.', '我只认事实，别的都不认：这是伯纳德·巴鲁克的秘诀。没看清事实，我就亏钱。'),
      N('But I object to losing money when I am right. No profit is safe until it is in your bank.', '但我无法接受判断正确时还亏钱。利润进了你的银行账户，才算安全。'),
    ] });

  // ---- coffee: the thesis ----
  lesson(h, { id: 'e08_coffee', tag: ['CASE STUDY · COFFEE, 1917', '案例 · 1917年咖啡'], title: ['The One Commodity That Had Not Risen', '唯一没有上涨的商品'], titleSize: 50,
    gest: ['explain', 'point', 'explainR', 'up'],
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 600, h: 620, title: ['Price vs. pre-war level', '相对战前的价格变化'], max: 400, vsize: 32,
        bars: [{ v: 100, vl: '+100%', en: 'Others, low end', zh: '其他商品·低端', at: 'L0@hundred', color: '#c9a26a' },
          { v: 400, vl: '+400%', en: 'Others, high end', zh: '其他商品·高端', at: 'L0@four', color: '#b8862a' },
          { v: -40, vl: 'below', en: 'Coffee', zh: '咖啡', at: 'L1', color: '#b3302a' }] },
      { type: 'flow', dir: 'v', at: 'L1@war', x: 1110, y: 220, w: 780, bh: 104, gap: 44, size: 28, nodes: [
        { en: 'War closes Europe: cargoes pile up in the U.S.', zh: '战争关闭欧洲市场：咖啡涌入美国', at: 'L1@war' },
        { en: 'A huge surplus keeps coffee cheap', zh: '巨量库存压低咖啡价格', at: 'L1@surplus' },
        { en: 'U-boats sink ships: imports must dwindle', zh: '潜艇击沉货船：进口必然减少', at: 'L2' },
        { en: 'Surplus used up → the price must rise', zh: '库存消化完→价格必然上涨', at: 'L2@gone', color: '#cfe3c4' }] },
      { type: 'note', at: 'L3', x: 1110, y: 745, w: 780, h: 95, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: '"An investment… a banker\'s act, not a gambler\'s play."', zh: '"这是投资……是银行家的做法，不是赌徒的玩法。"' }],
    lines: [
      N('By 1917 my debts were paid. Most commodities stood a hundred to four hundred percent above pre-war prices.', '到1917年，我的债务已经还清。大多数商品比战前高出百分之一百到四百。'),
      N('Coffee was the exception, still below pre-war. The war had closed Europe, so cargoes poured into America, piling up a surplus.', '咖啡是例外，仍低于战前价格。战争关闭了欧洲市场，货物涌入美国，堆成了巨量库存。'),
      N('But German and Austrian submarines were sinking ships. Imports had to shrink, and once the surplus was gone, coffee had to rise.', '但德国和奥地利的潜艇不断击沉货船。进口必然萎缩，库存一旦消化完，咖啡就必然上涨。'),
      N('It took no Sherlock Holmes. I called it an investment.', '这不需要福尔摩斯也看得出来。我把它当作一笔投资。'),
    ] });
  photo({ id: 'e08_santos', src: `${PD}/coffee_santos_unloading_1916.jpg`, credit: 'Coffee at Santos, Brazil, 1916 · Library of Congress (public domain)',
    cap: ['Santos, Brazil, 1916. Coffee was plentiful there. Ships to carry it north were not.', '1916年，巴西桑托斯。那里咖啡充足，北运的船却奇缺。'], capW: 660,
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 10, x: 1000, y: 500, z: 1.15 }],
    items: [{ type: 'counter', at: 'L0@nine', x: 1520, y: 430, from: 0, to: 9, suffix: ' months', size: 110, dur: 1.4, panel: true, color: '#b3302a', label: ['carried to no purpose', '白白扛着仓位'] }],
    lines: [N('I began buying in the winter of 1917. The market did nothing. For nine long months I carried my line to no purpose.', '1917年冬天，我开始买入。市场毫无动静。漫长的九个月里，我白白扛着这批仓位。')] });

  // ---- coffee: the campaign ----
  lesson(h, { id: 'e08_campaign', tag: ['THE COFFEE CAMPAIGN', '咖啡战役'], title: ['Wrong on Time, Then Right, Then Stopped', '时机错了，后来对了，却被叫停'], titleSize: 50,
    gest: ['despair', 'pointUp', 'up', 'explain'], expr: ['sad', null, 'smile', 'tired'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 980, h: 620, xr: [0, 20], yr: [0, 10], yTicks: [], illustrative: true, cursorLabel: false,
        title: ['Coffee futures, as he describes them', '他所描述的咖啡期货走势'], xTicks: [[0, 'winter 1917', '1917年冬']],
        series: [{ pts: [[0, 3], [1.5, 3.3], [3, 2.8], [4.5, 3.1], [6, 2.7], [7.5, 3], [9, 2.6], [10, 2.8], [12, 4], [14, 5.6], [16, 7.2], [17, 7.6]], color: '#7a4a22', draw: [['L0', 7], ['L1', 8], ['L2', 11]] }],
        hlines: [{ v: 7.9, x0: 15, at: 'L3@never', color: '#b3302a', en: 'Price fixed, contracts closed', zh: '限价，合约强制了结' }],
        marks: [{ x: 0, y: 3, at: 'L0', en: 'Try 1: buys', zh: '第一次：买入', dx: 20, dy: -110, w: 200 },
          { x: 9, y: 2.6, at: 'L0@loss', en: 'After 9 months: sells at a big loss', zh: '九个月后：合约到期，大亏卖出', dx: -120, dy: 50, w: 280, fill: '#f3c6c0' },
          { x: 10, y: 2.8, at: 'L1', en: 'Try 2: 3× the line, far-off months', zh: '第二次：三倍仓位，远期月份', dx: -380, dy: -260, w: 260, fill: '#cfe3c4' },
          { x: 14, y: 5.6, at: 'L2', en: 'Rises at once', zh: '立刻上涨', dx: 30, dy: 40, w: 180 }] },
      { type: 'bars', at: 'L1', x: 1480, y: 220, w: 410, h: 400, title: ['Size of his line', '仓位大小'], max: 3, vsize: 36,
        bars: [{ v: 1, vl: '1×', en: 'Try 1', zh: '第一次', at: 'L1', color: '#9a9182' }, { v: 3, vl: '3×', en: 'Try 2', zh: '第二次', at: 'L1@three', color: '#2f6b3d' }] },
      { type: 'note', at: 'L2@hundred', x: 1480, y: 640, w: 410, h: 200, size: 29, fill: '#f6d77a', anim: 'slideU',
        en: 'Several hundred thousand bags, with an ample margin of safety', zh: '几十万袋，并留有充足的安全边际' }],
    lines: [
      N('When the contracts expired I sold out, at a whopping loss. I was wrong on time, not on the facts.', '合约到期时，我认赔卖出，亏损巨大。我错在时机，而不是事实。'),
      N('So I bought again at once, three times as much, in the most distant months I could get.', '于是我立刻重新买入，仓位是原来的三倍，并且尽量买最远的月份。'),
      N('This time it rose. I carried several hundred thousand bags, so a small advance meant millions.', '这一次市场涨了。我持有几十万袋咖啡，稍涨一点就是数百万美元。'),
      N('The profit was coming, sure and fast. It never reached me.', '利润来了，又稳又快。可它始终没有落到我手里。'),
    ] });
  shot({ id: 'e08_washington', set: 'capitol', trans: 'whip', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'roaster', z: 1.35, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [
      { id: 'wolff', key: 'roaster2', x: 360, y: 900, s: 1.1, z: -1, pose: 'cross', expr: 'sly', acts: [{ t: 'L1', pose: 'point', expr: 'angry' }, { t: 'L3', pose: 'hips', expr: 'smile' }] },
      { id: 'trader', key: 'roaster', x: 640, y: 890, s: 1.2, pose: 'explain', expr: 'worry',
        acts: [{ t: 'L1', pose: 'pointUp', expr: 'shout' }, { t: 'L1e', pose: 'explainR', expr: 'sly' }, { t: 'L3', pose: 'hips', expr: 'grin' }] },
      { id: 'generic', key: 'board', look: { hair: '#d8d8d2', hairStyle: 'gray', glasses: 'pince', mus: 'walrus', musColor: '#d8d8d2', age: 2, coat: '#26262e' },
        x: 1180, y: 890, s: 1.2, flip: true, pose: 'chin', expr: 'think',
        acts: [{ t: 'L1e', pose: 'think', expr: 'frown' }, { t: 'L2@maximum', pose: 'pointUp', expr: 'determined' }, { t: 'L3', pose: 'cross', expr: 'neutral' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'Washington. The coffee shorts take their case to the government.', zh: '华盛顿。咖啡空头向政府求助。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 300, y: 70, w: 700, kind: 'shout', size: 30, tx: 640, ty: 590,
        en: 'One Lawrence Livingston has cornered coffee, or is about to! Protect the American breakfaster!', zh: '有个叫劳伦斯·利文斯顿的人已经或即将逼空咖啡！保护美国人的早餐！' },
      { type: 'stamp', screen: true, at: 'L2@maximum', x: 1560, y: 200, en: 'MAXIMUM PRICE FIXED', zh: '规定最高价', size: 56 },
      { type: 'stamp', screen: true, at: 'L2@deadline', x: 1580, y: 410, en: 'ALL CONTRACTS CLOSED', zh: '所有合约限期了结', size: 50, rot: -6 }],
    lines: [
      N('My sellers were roasters, holding coffee in Brazil with no ships to bring it. They ran to Washington.', '卖给我合约的是咖啡烘焙商。他们的咖啡在巴西，却没有船运回来。于是他们跑去了华盛顿。'),
      L('trader', 'A speculator, one Lawrence Livingston, has cornered coffee, or is about to! Protect the American breakfaster!', '有个投机者，叫劳伦斯·利文斯顿，已经或即将逼空咖啡！请保护美国人的早餐！', { speak: 'roaster' }),
      N('The Price Fixing Committee of the War Industries Board fixed a maximum price, and a deadline for closing all contracts.', '战时工业委员会下属的价格管制委员会规定了最高价，并限期了结所有合约。'),
      N('That shut the Coffee Exchange. There was only one thing to do. I sold out.', '咖啡交易所因此只能停业。我别无选择：全部卖出。'),
    ] });
  lesson(h, { id: 'e08_result', tag: ['THE UNEXPECTABLE', '无法预料之事'], tagColor: '#b3302a', title: ['Right on the Facts and the Time, Still Not Paid', '事实对了，时机对了，钱却没拿到'], titleSize: 46, music: 'dark',
    gest: ['explain', 'point', 'shrug', 'explainR'], expr: [null, null, 'sad', 'determined'],
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 620, h: 620, title: ['Green coffee, cents per pound', '生咖啡，美分/磅'], max: 23, vsize: 40,
        bars: [{ v: 9, vl: '≈9¢', en: 'Under the fixed price', zh: '限价期间', at: 'L0@nine', color: '#9a9182' },
          { v: 23, vl: '23¢', en: 'After the Exchange reopened', zh: '交易所重开后', at: 'L1@twenty', color: '#2f6b3d' }] },
      { type: 'note', at: 'L0@roasted', x: 1120, y: 220, w: 770, h: 140, size: 30, anim: 'slideU',
        en: 'Roasted coffee rose with everything else. Only the roasters gained.', zh: '烘焙咖啡照样随百物上涨。只有烘焙商得了好处。' },
      { type: 'note', at: 'L1@low', x: 1120, y: 380, w: 770, h: 140, size: 30, fill: '#f3c6c0', anim: 'slideU',
        en: 'Fixed too low to pay ocean freight → less supply → 23¢', zh: '限价太低，付不起海运费→供应减少→23美分' },
      { type: 'note', at: 'L2', x: 1120, y: 540, w: 770, h: 140, size: 30, fill: '#cfe3c4', anim: 'slideU',
        en: '+2–3¢ a pound = several millions for him, less cost to the public', zh: '只要涨2–3美分，他就能赚几百万，公众的代价也更小' },
      { type: 'rule', at: 'L3@unexpectable', x: 1120, y: 700, w: 770, h: 140, n: '!', tag: '#b3302a', fill: '#f6d77a', size: 32,
        en: 'Add the UNEXPECTABLE to your list of hazards.', zh: '把"无法预料之事"加进你的风险清单。' }],
    lines: [
      N('Under the fixed price, green coffee hung around nine cents. Roasted coffee rose anyway. Only the roasters gained.', '限价期间，生咖啡在九美分左右徘徊。烘焙咖啡照涨不误。只有烘焙商得了好处。'),
      N('When the Exchange reopened, coffee sold at twenty-three cents. The fixed price had been too low to pay ocean freight.', '交易所重开后，咖啡卖到了二十三美分。之前的限价太低，付不起远洋运费，货源因此短缺。'),
      N('A rise of two or three cents would have made me several millions, and cost the public less.', '只要涨两三美分，我就能赚几百万，公众付出的代价还更小。'),
      N('Committees have changed the rules on me twice more. So I added the unexpectable to my list of hazards.', '另外还有两次，交易所委员会事先不打招呼就改了规则。于是我把"无法预料之事"列进了风险清单。'),
    ] });

  // ---- the "raid" excuse ----
  shot({ id: 'e08_gossip', set: 'street', setOpts: { crowd: 4, agitated: true }, trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'broker', z: 1.35, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'friend', key: 'cust', x: 700, y: 890, s: 1.15, pose: 'hold', expr: 'worry', prop: { t: 'paper', text: 'RAID!' },
        acts: [{ t: 'L1e', pose: 'relaxed', expr: 'smile' }, { t: 'L2@keeps', pose: 'despair', expr: 'shock' }] },
      { id: 'manager', key: 'broker', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'smile',
        acts: [{ t: 'L1', pose: 'pointUp', expr: 'sly' }, { t: 'L2', pose: 'shrug', expr: 'neutral' }] }],
    items: [
      { type: 'newspaper', screen: true, at: 'L0@blamed', until: 'L1', x: 1620, y: 300, w: 500, h: 360, paper: 'The Daily Chronicle', en: 'BREAK BLAMED ON LIVINGSTON RAID', zh: '暴跌归咎于利文斯顿打压', size: 44 },
      { type: 'bubble', at: 'L1', until: 'L2e', x: 860, y: 70, w: 620, tx: 1250, ty: 590,
        en: 'It\'s only a Livingston raid. Hold on! The moment he stops, it must rebound.', zh: '这只是利文斯顿在打压。拿住！他一停手，价格必然反弹。' },
      { type: 'stamp', screen: true, at: 'L2@inverted', x: 420, y: 230, en: 'INVERTED TIP', zh: '反向消息', size: 70 }],
    lines: [
      N('After coffee I did well on the short side. Soon every break in prices was blamed on my raids.', '咖啡之后，我在空头这边做得不错。很快，每一次下跌都被归咎于我的"打压"。'),
      L('manager', 'It\'s only a Livingston raid. Hold on! The moment he stops, the price must rebound.', '这只是利文斯顿在打压。拿住！他一停手，价格必然反弹。', { speak: 'broker' }),
      N('That excuse is an inverted tip. It keeps you from selling when you should.', '这种说法是一种"反向消息"：它让你在该卖的时候不卖。'),
    ] });
  lesson(h, { id: 'e08_raids', tag: ['THE "BEAR RAID" MYTH', '"空头打压"的迷思'], title: ['Why a Raid Can\'t Keep a Stock Down', '打压为什么压不住股价'],
    gest: ['explain', 'pointUp', 'point', 'explainR', 'fist'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 940, h: 620, xr: [0, 10], yr: [60, 105], yTicks: [], illustrative: true, cursorLabel: false,
        title: ['Two kinds of break', '两种下跌'],
        series: [
          { pts: [[0, 100], [1.5, 96], [3, 82], [4, 80], [5.5, 90], [7, 97], [8.5, 99], [10, 100]], color: '#2f6b3d', label: ['A raid: insiders buy', '打压：内部人买入'], draw: [['L0', 3], ['L1', 7]] },
          { pts: [[0, 100], [1.5, 95], [3, 84], [4, 82], [5.5, 80], [7, 74], [8.5, 70], [10, 65]], color: '#b3302a', dash: '16 10', label: ['Real decline: no rally', '真正的下跌：不反弹'], draw: [['L2', 3], ['L2@fails', 7]] }],
        marks: [{ x: 4, y: 80, at: 'L0@worth', en: 'Below value: insiders buy', zh: '低于价值：内部人买进', dx: -270, dy: 70, w: 260, fill: '#cfe3c4' },
          { x: 7, y: 97, at: 'L1', en: 'Raider stops: price rebounds', zh: '打压者一停：价格反弹', dx: 20, dy: 40, w: 240 },
          { x: 8.5, y: 70, at: 'L2@inside', en: 'No rally = no inside buying', zh: '不反弹＝没有内部人买盘', dx: -330, dy: 30, w: 270, fill: '#f3c6c0' }] },
      { type: 'rule', at: 'L3', x: 1440, y: 220, w: 450, h: 290, n: '99', size: 32,
        en: '99 "raids" in 100 are legitimate declines.', zh: '一百次"打压"里，九十九次是正常下跌。' },
      { type: 'rule', at: 'L4', x: 1440, y: 540, w: 450, h: 300, n: '!', tag: '#b3302a', fill: '#f6d77a', size: 32,
        en: 'It breaks badly and won\'t rally? There is a good reason. Get out.', zh: '暴跌且不反弹？必有充分的理由。离场。' }],
    lines: [
      N('No manipulation can put a stock down and keep it down. Below its value, those who know its worth will buy it.', '任何操纵都无法把一只股票打下去并一直压住。一旦低于价值，懂行的人就会买进。'),
      N('So the moment the raider stops, the price rebounds.', '所以打压者一停手，价格就会反弹。'),
      N('But a stock that breaks and fails to rally is getting no inside buying. Conditions are not bull conditions.', '而暴跌后迟迟不反弹的股票，说明没有内部人买入。形势并不看涨。'),
      N('Ninety-nine so-called raids in a hundred are legitimate declines, not caused by any trader.', '所谓的打压，一百次里有九十九次是正常的下跌，并非哪个交易者造成的。'),
      N('When a stock breaks badly, there is a reason, unknown but good. Get out.', '股票暴跌，必有原因：你不知道，但理由充分。离场。'),
    ] });

  // ---- chapter XVI: tips ----
  chapter('Chapter XVI · Tips', '第十六章 · 内幕消息');
  shot({ id: 'e08_tips', set: 'floor', setOpts: { paperN: 10 }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L3', on: 'larry', z: 1.35, dur: 0.8 }, { t: 'L4', on: 'trader', z: 1.3, dur: 1.0 }],
    cast: [
      { id: 'larry', x: 720, y: 890, s: 1.2, pose: 'explain', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'explainR', expr: 'sly' }, { t: 'L2', pose: 'explain', expr: 'think' }, { t: 'L3', pose: 'point', expr: 'sly' }, { t: 'L4', pose: 'cross', expr: 'tired' }] },
      { id: 'trader', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'neutral',
        acts: [{ t: 'L2@glares', pose: 'cross', expr: 'angry' }, { t: 'L3e', pose: 'up', expr: 'grin' }, { t: 'L4@spot', x: 1450, pose: 'wave', expr: 'laugh', dur: 1.2 }] }],
    items: [
      { type: 'flow', at: 'L0', until: 'L2', x: 470, y: 110, w: 1400, bh: 140, gap: 50, size: 28, nodes: [
        { en: 'Everyone craves tips', zh: '人人都想要消息', at: 'L0' },
        { en: 'Greed and vanity', zh: '贪婪与虚荣', at: 'L0@greed' },
        { en: 'Every taker passes it on', zh: '听到的人再传出去', at: 'L1' },
        { en: 'Endless-chain advertising', zh: '无穷无尽的连锁广告', at: 'L1@endless', color: '#f3c6c0' }] },
      { type: 'bubble', at: 'L2', until: 'L3', x: 300, y: 70, w: 620, tx: 720, ty: 590,
        en: 'I\'m bearish on the whole market, and here are my reasons…', zh: '我看空整个市场，理由如下……' },
      { type: 'bubble', at: 'L3', x: 330, y: 80, w: 560, kind: 'shout', tx: 720, ty: 590, en: 'Sell yourself 5,000 Steel!', zh: '给自己卖空5,000股钢铁！' },
      { type: 'note', at: 'L4@hope', x: 1240, y: 120, w: 620, h: 170, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'Not greed so much as hope, bandaged by an unwillingness to think.', zh: '与其说是贪婪，不如说是被"懒得思考"蒙住了眼的希望。' }],
    lines: [
      N('Tips! How people love to get them, and to give them. There is greed in it, and vanity.', '内幕消息！人们多么爱听消息，又多么爱传消息。这里面有贪婪，也有虚荣。'),
      N('Promoters know it. Every tip-taker passes the tip on, so tips become endless-chain advertising.', '操盘的推手深谙此道。每个听消息的人都会再传出去，消息就成了无穷无尽的连锁广告。'),
      N('Floor traders are no better. Give one my reasons, and he glares at me. But tell him this:', '场内交易员也好不到哪去。跟他讲我的理由，他会瞪我。可要是我说：'),
      L('larry', 'Sell yourself five thousand Steel!', '给自己卖空五千股钢铁！', { speak: 'larry' }),
      N('And he does it on the spot. It is hope, bandaged by an unwillingness to think.', '他当场就照办。那是被"懒得思考"蒙住了眼睛的希望。'),
    ] });

  // ---- Borneo Tin: the pool ----
  lesson(h, { id: 'e08_borneo', tag: ['CASE STUDY · BORNEO TIN', '案例 · 婆罗洲锡业'], title: ['Riding a Pool, and Leaving Before It Does', '搭资金池的车，并抢先下车'], titleSize: 50, music: 'calm',
    gest: ['explain', 'point', 'cross', 'up', 'explainR'], expr: [null, 'sly', 'determined', 'smile', null],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1020, h: 620, xr: [0, 12], yr: [70, 160], yTicks: [120, 130, 150], illustrative: true, cursorLabel: false,
        title: ['Borneo Tin in the war boom', '战争繁荣中的婆罗洲锡业'],
        series: [{ pts: [[0, 92], [1, 98], [2, 90], [3, 100], [4, 110], [5, 120], [6, 112], [7.5, 128], [8.5, 150], [9.5, 140], [10.5, 130], [12, 118]], color: '#7a4a22',
          draw: [['L1', 1], ['L2', 3], ['L3', 5], ['L4', 8], ['L4@way', 11]] }],
        marks: [{ x: 1, y: 98, at: 'L1@ten', en: 'Buys 10,000 in the first hour', zh: '第一个小时买入1万股', dx: -70, dy: -250, w: 270 },
          { x: 2, y: 90, at: 'L2', en: 'Shake-out: he sits tight', zh: '震仓：他坐着不动', dx: -40, dy: 50, w: 240, fill: '#f3c6c0' },
          { x: 5, y: 120, at: 'L3', en: 'Sells his 10,000 at 120', zh: '在120卖出1万股', dx: 30, dy: 80, w: 250, fill: '#f6d77a' },
          { x: 10.5, y: 130, at: 'L4@cheap', en: '"Cheap at 130!"', zh: '"130真便宜！"', dx: -90, dy: 100, w: 200, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L0@three', x: 1520, y: 220, w: 370, h: 300, size: 30, anim: 'slideU',
        en: 'Opening price marked up 3 times before the first recorded sale', zh: '首笔成交之前，开盘价被调高了三次' },
      { type: 'note', at: 'L4', x: 1520, y: 540, w: 370, h: 300, size: 30, fill: '#f3c6c0', anim: 'slideU',
        en: 'The pool marks it to 150, then has to sell on the way down', zh: '资金池推到150，然后只能在下跌途中出货' }],
    lines: [
      N('Borneo Tin came out at the height of the war boom. Its pool marked up the opening price three times before the first sale.', '婆罗洲锡业在战争繁荣的顶峰上市。资金池在第一笔成交之前，把开盘价连调了三次。'),
      N('I had refused to join the pool. Knowing its plans and the public, I bought ten thousand shares in the first hour.', '我拒绝了加入资金池的邀请。但我了解他们的计划，也了解公众，于是在第一个小时就买了一万股。'),
      N('They tried to shake me out. I sat tight.', '他们想把我震出去。我坐着不动。'),
      N('At 120 I let them have my ten thousand shares.', '到120时，我把一万股全部卖给了他们。'),
      N('Later they got it to 150, but the boom was over. They sold on the way down, to buyers who thought 130 was cheap.', '后来他们把价格推到150，可繁荣已经结束。他们只能在下跌途中出货，卖给那些觉得130很便宜的人。'),
    ] });

  // ---- Borneo Tin: the wife's tip ----
  photo({ id: 'e08_palm', src: `${PD}/palmbeach_royal_poinciana_1910_detroit.jpg`, credit: 'Royal Poinciana Hotel, Palm Beach · Detroit Publishing Co. (public domain)',
    cap: ['Palm Beach. The president of Borneo Tin, who also ran its pool, arranged a seat at dinner.', '棕榈滩。婆罗洲锡业的总裁、也是资金池经理，特意安排了晚宴座位。'], capW: 660,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 920, y: 520, z: 1.12 }],
    items: [{ type: 'counter', at: 'L0@five', x: 1540, y: 420, from: 0, to: 500, prefix: '$', size: 110, dur: 1.2, panel: true, color: '#2f6b3d', label: ['a gift to his wife', '给妻子的零花钱'] }],
    lines: [N('In Palm Beach I gave my wife a five-hundred-dollar bill. That night Mr. Wisenstein, president of Borneo Tin and manager of its pool, arranged to sit beside her at dinner.', '在棕榈滩，我给了妻子一张五百美元的钞票。当晚，婆罗洲锡业的总裁、也是资金池经理的魏森斯坦先生，特意安排坐在她身旁用餐。')] });
  shot({ id: 'e08_dinner', set: 'home', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'wis', z: 1.3, dur: 1.4 }, { t: 'L1', on: 'wife', z: 1.35, dur: 1.2 }],
    cast: [
      { id: 'wife', x: 700, y: 890, s: 1.15, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L0@only', pose: 'hold', expr: 'shock' }, { t: 'L0e', pose: 'chin', expr: 'think' }, { t: 'L1', pose: 'hips', expr: 'grin' }] },
      { id: 'generic', key: 'wis', look: { hair: '#2a1e14', hairStyle: 'center', mus: 'thin', musColor: '#2a1e14', beard: 'goatee', beardColor: '#2a1e14', coat: '#1d1d24', vest: '#3a3a46', tieColor: '#b8862a' },
        x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'smile',
        acts: [{ t: 'L0@only', pose: 'pointUp', expr: 'sly' }, { t: 'L0@Absolutely', pose: 'explainR', expr: 'grin' }, { t: 'L1', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L0', en: 'That night, at dinner.', zh: '当晚，晚宴上。' },
      { type: 'bubble', at: 'L0', until: 'L1', x: 940, y: 60, w: 720, size: 30, tx: 1250, ty: 590,
        en: 'If you buy some Borneo Tin, you will make a great deal of money. You are the only person I have told. Absolutely the only one!', zh: '只要买些婆罗洲锡业，您就会赚大钱。这事我只告诉了您。绝对只有您一个人！' },
      { type: 'bubble', at: 'L1', kind: 'thought', x: 260, y: 70, w: 600, tx: 700, ty: 570,
        en: 'I\'ll make money on my own, and tell him afterwards!', zh: '我要靠自己赚一笔，事后再告诉他！' }],
    lines: [
      L('banker', 'If you buy some Borneo Tin, you will make a great deal of money. You are the only person I have told. Absolutely the only one!', '只要买些婆罗洲锡业，您就会赚大钱。这事我只告诉了您。绝对只有您一个人！', { speak: 'wis' }),
      N('She decided to make some money on her own, and tell me all about it afterwards.', '她决定靠自己赚一笔，事后再一五一十地告诉我。'),
    ] });
  shot({ id: 'e08_haley', set: 'office', trans: 'wipe', music: 'tense',
    setOpts: { board: [['BORNEO TIN', 'DAY'], ['108', '1']], boardSeq: [{ t: 'L1', r: 1, c: 1, v: '3' }, { t: 'L1+0.4', r: 1, c: 0, v: '102' }, { t: 'L2e', r: 1, c: 0, v: '100' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L2', on: 'haley', z: 1.35, dur: 1.2 }],
    cast: [
      { id: 'wife', x: 650, y: 890, s: 1.15, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L1', pose: 'hold', expr: 'worry' }, { t: 'L2@margin', pose: 'despair', expr: 'shock' }] },
      { id: 'manager', key: 'haley', x: 1100, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral', acts: [{ t: 'L1', pose: 'explain', expr: 'worry' }, { t: 'L2@margin', pose: 'shrug', expr: 'sad' }] },
      { id: 'larry', x: 1650, y: 900, s: 1.0, flip: true, z: -1, pose: 'chin', expr: 'think', lookX: -1 }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'Harding Brothers\' Palm Beach branch. Her "special account".', zh: '哈丁兄弟公司棕榈滩分部。她的"单独账户"。' },
      { type: 'bubble', at: 'L2', x: 760, y: 70, w: 640, tx: 1100, ty: 600,
        en: 'Mrs. Livingston, if you want me to carry that hundred shares, you will have to give me more margin.', zh: '利文斯顿夫人，您要是想让我继续持有那一百股，就得再追加保证金。' }],
    lines: [
      N('Next morning she had Haley, the branch manager, buy her a hundred shares in a special account. She paid about 108.', '第二天早上，她让分部经理黑利用一个单独账户替她买了一百股，成交价约108。'),
      N('On the third morning, Haley took her aside.', '第三天早上，黑利把她拉到一边。'),
      L('manager', 'Mrs. Livingston, if you want me to carry that hundred shares, you will have to give me more margin.', '利文斯顿夫人，您要是想让我继续持有那一百股，就得再追加保证金。', { speak: 'haley' }),
    ] });
  lesson(h, { id: 'e08_days', tag: ['THE TIP THAT BACKFIRED', '适得其反的内幕消息'], title: ['Three Days in Borneo Tin', '婆罗洲锡业的三天'],
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'table', at: 0.4, x: 470, y: 220, w: 1420, widths: [0.1, 0.34, 0.56], size: 30, bottom: 650,
        cols: [['Day', '天'], ['Mrs. Livingston', '利文斯顿夫人'], ['Livingston: bearish on everything', '利文斯顿：看空整个市场']],
        rows: [
          [['1', '第1天'], ['Buys 100 at about 108', '约108买入100股'], ['Sells ≈10,000. Closes +3, not +5 or 6', '卖出约1万股。收涨3点，而非5–6点']],
          [['2', '第2天'], ['Holds', '持有'], ['Sells 2,000 at the open, 2,000 at the close: 102', '开盘卖2,000股，收盘前再卖2,000股：102']],
          [['3', '第3天'], ['Margin call. Tells him all', '被追保证金，向他坦白'], ['Gives back her $500. Stock at par (100)', '还她500美元。股价跌到面值100']]],
        rowAt: ['L0', 'L1', 'L2'], hl: ['L0@ten', 'L1@102', null] },
      { type: 'note', at: 'L3', x: 470, y: 680, w: 1420, h: 150, size: 32, fill: '#f6d77a', align: 'center', anim: 'slideU',
        en: 'The activity meant to lure him in was exactly why he picked Borneo to sell.', zh: '本想引他上钩的活跃走势，恰恰是他选中婆罗洲来做空的原因。' }],
    lines: [
      N('From my side: bearish on everything, I noticed Borneo\'s unusual activity, and sold about ten thousand that first day.', '再看我这边：我看空整个市场，注意到婆罗洲锡业异常活跃，第一天就卖出了大约一万股。'),
      N('It closed up three, not five or six. Next day I sold two thousand at the open, two more at the close. It broke to 102.', '它收涨三点，而不是五六点。第二天我开盘卖两千股，收盘前再卖两千股，股价跌到102。'),
      N('By the third day it was at par. I gave my wife back her five hundred, kept selling, and covered at a handsome profit.', '到第三天，它已跌到面值。我把五百美元还给妻子，继续卖空，最后以丰厚的利润平仓。'),
      N('Wisenstein expected me to buy. The activity meant to lure me in was exactly why I sold.', '魏森斯坦以为我会买进。可他用来引我上钩的活跃走势，恰恰是我卖空它的原因。'),
    ] });

  // ---- a gallery of tips ----
  shot({ id: 'e08_westlake', set: 'street', setOpts: { walkers: 3 }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'west', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'gates', z: 1.4, dur: 1.2 }],
    cast: [
      { id: 'gates', x: 700, y: 890, s: 1.2, pose: 'hips', expr: 'smile', acts: [{ t: 'L1@sell', pose: 'relaxed', expr: 'sly' }, { t: 'L2', pose: 'wave', expr: 'laugh' }, { t: 'L2@coppering', pose: 'point', expr: 'grin' }] },
      { id: 'generic', key: 'west', look: { hair: '#e0ddd5', hairStyle: 'gray', mus: 'walrus', musColor: '#e0ddd5', beard: 'chops', beardColor: '#e0ddd5', age: 3, stout: true, hat: 'top', hatColor: '#1a1a1a', glasses: 'pince' },
        x: 1250, y: 890, s: 1.2, flip: true, pose: 'cross', expr: 'frown',
        acts: [{ t: 'L1@sell', pose: 'pointUp', expr: 'determined' }, { t: 'L2', pose: 'idle', expr: 'shock' }, { t: 'L2e', pose: 'shrug', expr: 'think' }] }],
    items: [
      { type: 'counter', at: 'L0@thirty', until: 'L1', x: 1500, y: 300, from: 0, to: -3500, fmt: '$', size: 90, dur: 1.2, color: '#b3302a', label: ['G.O.H. tip, 1,000 shares', 'G.O.H.消息，1,000股'] },
      { type: 'bubble', at: 'L1@sell', until: 'L2', x: 980, y: 70, w: 540, tx: 1250, ty: 590, en: 'Sell Reading! 25 points, absolutely certain.', zh: '卖出瑞丁！25个点，十拿九稳。' },
      { type: 'counter', at: 'L1@hundred', until: 'L2', x: 400, y: 330, from: 0, to: 100, prefix: '+', suffix: ' pts', size: 90, dur: 1.4, color: '#2f6b3d', label: ['Reading, in a few weeks', '瑞丁，短短几周'] },
      { type: 'bubble', at: 'L2', x: 260, y: 60, w: 680, kind: 'shout', size: 30, tx: 700, ty: 590,
        en: 'You told me to sell Reading, so I bought it! I\'ve always made money coppering your tips!', zh: '你叫我卖瑞丁，所以我买了！反着你的消息做，我从来都赚钱！' },
      { type: 'counter', at: 'L2@sixty', x: 1560, y: 300, from: 0, to: 60000, prefix: '+$', size: 90, dur: 1.2, color: '#2f6b3d', label: ['Gates, buying', '盖茨反向买入'] }],
    lines: [
      N('A broker I know lost thirty-five hundred dollars on a tip about G.O.H. The good source was his own father-in-law, Westlake.', '我认识的一位经纪人，听了一条G.O.H.的消息，亏了三千五百美元。那个"可靠来源"，竟是他的岳父韦斯特莱克。'),
      N('Westlake knew Reading inside out. He told John W. Gates to sell it: twenty-five points, absolutely certain. Reading rose about a hundred points in a few weeks.', '韦斯特莱克对瑞丁铁路了如指掌。他叫约翰·W·盖茨卖出：二十五个点，十拿九稳。结果瑞丁几周内涨了约一百点。'),
      L('gates', 'You told me to sell Reading, so I bought it! Sixty thousand dollars. I\'ve always made money coppering your tips!', '你叫我卖瑞丁，所以我买了！赚了六万美元。反着你的消息做，我从来都赚钱！', { speak: 'gates' }),
    ] });
  shot({ id: 'e08_hat', set: 'floor', setOpts: { paperN: 6 }, trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'broker', z: 1.35, dur: 1.4 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'broker', look: { hat: 'bowler', hatColor: '#2a2a2a', mus: 'thin' }, x: 900, y: 890, s: 1.25, pose: 'chin', expr: 'worry', until: 'L1@took',
        acts: [{ t: 'L1', pose: 'think', expr: 'worry' }] },
      { id: 'generic', key: 'broker', look: { mus: 'thin' }, x: 900, y: 890, s: 1.25, pose: 'up', expr: 'shock', at: 'L1@took',
        acts: [{ t: 'L1@gold+0.6', pose: 'point', expr: 'grin' }, { t: 'L2', pose: 'fist', expr: 'laugh' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'New York, 1898: war with Spain, or not?', zh: '1898年，纽约：会不会和西班牙开战？' },
      { type: 'bubble', kind: 'thought', at: 'L1', until: 'L1@took', x: 1120, y: 90, w: 520, tx: 960, ty: 560, en: 'War or peace? Buy or sell?', zh: '开战还是和平？买还是卖？' },
      { type: 'sfx', screen: true, at: 'L1@gold+0.6', x: 1450, y: 330, text: 'W·A·R', zh: '战争', size: 140, color: '#d6a441', font: 'cond' },
      { type: 'note', at: 'L2@Rogers', x: 1220, y: 520, w: 640, h: 130, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'W. A. R. = the initials of W. A. Rogers', zh: 'W.A.R.＝W·A·罗杰斯的姓名缩写' }],
    lines: [
      N('Cartoonist W. A. Rogers told me this. Just before the war with Spain, he left a broker friend\'s house in the wrong derby.', '漫画家W·A·罗杰斯给我讲过一件事。美西战争前夕，他从一位经纪人朋友家离开时，戴错了圆顶礼帽。'),
      N('Next day the broker couldn\'t decide: war or peace? He took off his hat. Inside, in gold letters: WAR.', '第二天，那位经纪人拿不定主意：开战还是和平？他摘下帽子，帽里烫着三个金字母：WAR（战争）。'),
      N('He sold a raft of stock and made a killing. It was Rogers\' hat. He never got it back.', '他大举卖出，狠赚了一笔。那是罗杰斯的帽子，他再也没能要回来。'),
    ] });
  lesson(h, { id: 'e08_atlantic', tag: ['THE PRIZE TIP STORY', '最妙的内幕消息故事'], title: ['Atlantic & Southern: Two Tips, Two Losses', '大西洋与南方铁路：两次消息，两次亏损'], titleSize: 50,
    gest: ['explain', 'despair', 'point', 'shrug'], expr: [null, 'shock', null, 'smile'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 980, h: 620, xr: [0, 10], yr: [-26, 12], yTicks: [0, -15], ySuf: ' pts', illustrative: true, cursorLabel: false,
        title: ['A. & S., points from their first buy', '大西洋与南方：相对首次买入价'],
        series: [{ pts: [[0, 0], [1, -1], [2, -0.5], [3, -1.5], [3.6, -7.5], [4.6, -9], [5.6, -13], [6.4, -15], [7.4, -17], [8.4, -21], [10, -24]], color: '#b3302a',
          draw: [['L0', 3], ['L1@six', 4], ['L2', 7], ['L2@broke', 10]] }],
        marks: [{ x: 0, y: 0, at: 'L0@twenty', en: 'Tip 1: each buys ≈2,000. "At least +25"', zh: '消息一：各买约2,000股。"至少涨25点"', dx: 30, dy: -140, w: 300 },
          { x: 3.6, y: -7.5, at: 'L1@six', en: 'Dividend passed: −6 in 6 minutes', zh: '取消分红：6分钟跌6点', dx: 60, dy: -150, w: 280, fill: '#f3c6c0' },
          { x: 6.4, y: -15, at: 'L2@fifteen', en: 'Tip 2: buy 5,000 jointly', zh: '消息二：合买5,000股', dx: -340, dy: 20, w: 250 },
          { x: 8.4, y: -21, at: 'L2@broke', en: 'Breaks on inside selling', zh: '内部人抛售，再次暴跌', dx: -120, dy: -220, w: 250, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L3', x: 1480, y: 220, w: 410, h: 400, size: 32, fill: '#f6d77a', anim: 'pop',
        en: '"Don\'t send it, Bert! We\'ll never get another tip from him!"', zh: '"别发，伯特！发了的话，他就再也不给我们消息了！"' },
      { type: 'note', at: 'L3e', x: 1480, y: 640, w: 410, h: 200, size: 28, anim: 'slideU',
        en: 'Insiders change plans, and forget whom they tipped.', zh: '内部人会改计划，也会忘了告诉过谁。' }],
    lines: [
      N('My prize tip story. A grateful director told floor trader Bert Walker to buy Atlantic and Southern: at least twenty-five points. Walker and J. T. Hood each bought a couple of thousand.', '我收藏的最妙的消息故事：一位心存感激的董事告诉场内交易员伯特·沃克，买入大西洋与南方铁路，至少涨二十五点。沃克和J·T·胡德各买了两千股左右。'),
      N('That Thursday the directors passed the dividend. Friday it broke six points in the first six minutes.', '那个星期四，董事会决定取消分红。星期五开盘六分钟，股价就跌了六个点。'),
      N('The penitent director gave a second tip: a cinch now. Fifteen points lower, they bought five thousand jointly, and it broke again on inside selling.', '懊悔的董事又给了第二个消息：这回万无一失。他们在低了十五点的位置合买了五千股，结果内部人抛售，股价再次暴跌。'),
      N('Walker drafted a furious telegram. Hood stopped him: we\'d never get another tip from him!', '沃克拟了一封痛骂对方的电报。胡德一本正经地拦住他：发了的话，他就再也不会给我们消息了！'),
    ] });
  shot({ id: 'e08_dutchman', set: 'study', setOpts: { lampX: 1700 }, trans: 'push', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'pres', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'sloan', z: 1.3, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'dutch', look: { hair: '#8a7a68', hairStyle: 'gray', beard: 'full', beardColor: '#8a7a68', age: 2, glasses: 'round', coat: '#3a2e22', vest: '#5a4a36' },
        x: 650, y: 890, s: 1.2, pose: 'chin', expr: 'think',
        acts: [{ t: 'L1@crumpling', pose: 'think', expr: 'frown' }, { t: 'L1@sold', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'chin', expr: 'smile' }, { t: 'L3', pose: 'hold', expr: 'grin' }] },
      { id: 'harding', key: 'pres', look: { coat: '#2a2a40', tieColor: '#8a2a5a' }, x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'smile', prop: { t: 'paper', text: 'A.T. & S.F.' }, until: 'L2',
        acts: [{ t: 'L1@crumpling', pose: 'explainR', expr: 'grin' }] },
      { id: 'fullerton', key: 'sloan', x: 1250, y: 890, s: 1.2, flip: true, pose: 'write', expr: 'neutral', at: 'L2',
        acts: [{ t: 'L2@ripping', pose: 'hold', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'A Pennsylvania Dutchman who did his own seeing.', zh: '一位凡事亲眼去看的宾夕法尼亚荷兰裔。' },
      { type: 'sfx', screen: true, at: 'L1@crumpling', until: 'L2', x: 1600, y: 300, text: 'CRUMPLE!', zh: '揉成一团！', size: 90, color: '#b3302a', font: 'cond' },
      { type: 'stamp', screen: true, at: 'L1@sold', until: 'L2', x: 400, y: 230, en: 'SELL ATCHISON', zh: '卖出艾奇逊', size: 56 },
      { type: 'stamp', screen: true, at: 'L2@bought', x: 400, y: 230, en: 'BUY D. L. & W.', zh: '买入拉克万纳', size: 56, color: '#2f6b3d' },
      { type: 'equation', at: 'L3@dividends', x: 1430, y: 330, size: 48, terms: [
        { t: 'Yearly dividend', zh: '每年股息', at: 'L3@dividends' }, { t: '=', at: 'L3@dividends' }, { t: '100% of cost', zh: '相当于当初全部投资', at: 'L3@equal', hl: true }] }],
    lines: [
      N('The wisest investor I knew was a Pennsylvania Dutchman who did his own seeing. Told Atchison was run extravagantly, he went to see its president.', '我认识的最精明的投资者，是一位凡事亲眼去看的宾夕法尼亚荷兰裔。听说艾奇逊铁路管理铺张，他亲自去见了总裁。'),
      N('Reinhart proved his thrift with figures on costly engraved notepaper, crumpling sheet after sheet. The Dutchman sold all his Atchison.', '莱因哈特总裁拿数字证明公司节俭，用的却是昂贵的烫金信笺，写几笔就揉成一团扔掉。荷兰人随即卖光了艾奇逊股票。'),
      N('At the Lackawanna, old Sam Sloan sat behind an open door, ripping used envelopes into scratch paper. The Dutchman bought all he could.', '在拉克万纳铁路，老萨姆·斯隆坐在敞开的门后，把用过的信封拆开当草稿纸。荷兰人尽其所能地买进了这家公司的股票。'),
      N('Atchison soon went into receivership. His Lackawanna dividends came to equal his original investment every year.', '不久，艾奇逊铁路被法院接管。而他的拉克万纳股票，每年的股息就相当于当初的全部投资。'),
    ] });

  // ---- episode summary ----
  lesson(h, { id: 'e08_rules', tag: ['TAKEAWAYS · EPISODE 8', '第8集要点'], title: ['Five Rules from Coffee and the Tips', '咖啡与内幕消息的五条规则'], titleSize: 50, music: 'calm',
    gest: ['explain', 'pointUp', 'explainR', 'explain'],
    items: [
      { type: 'rule', at: 'L0@unexpectable', x: 470, y: 220, w: 1420, h: 108, n: '1', size: 32, en: 'Add the unexpectable to your hazards. No profit is safe until banked.', zh: '把无法预料之事列入风险。利润进了银行才算数。' },
      { type: 'rule', at: 'L0@facts', x: 470, y: 344, w: 1420, h: 108, n: '2', size: 32, en: 'Right on the facts can still be wrong on time. Keep a wide margin.', zh: '事实判断对，时机仍可能错。留足安全边际。' },
      { type: 'rule', at: 'L1', x: 470, y: 468, w: 1420, h: 108, n: '3', size: 32, en: 'A stock that breaks and won\'t rally has a reason. Don\'t blame a raid.', zh: '暴跌后不反弹必有原因。别把它怪到"打压"头上。' },
      { type: 'rule', at: 'L2', x: 470, y: 592, w: 1420, h: 108, n: '4', size: 32, en: 'A tip serves the giver: pools unload, insiders change plans.', zh: '消息只为给消息的人服务：资金池出货，内部人变卦。' },
      { type: 'rule', at: 'L3', x: 470, y: 716, w: 1420, h: 108, n: '5', size: 32, tag: '#2f6b3d', fill: '#cfe3c4', en: 'Do your own seeing. Judge people by what they do.', zh: '亲眼去看。看人要看他做什么。' }],
    lines: [
      N('Five rules. Add the unexpectable to your hazards. Being right on the facts is not being right on time.', '五条规则。把无法预料之事列入风险。事实判断对了，不等于时机对了。'),
      N('A stock that breaks and won\'t rally has a reason. Don\'t let a raid story keep you in.', '暴跌后不反弹的股票必有原因。别让"打压"的说法把你留在场内。'),
      N('A tip serves the man who gives it. Pools unload on tip-takers, and insiders change their plans.', '消息只为给消息的人服务。资金池把股票倒给听消息的人，内部人也会改变计划。'),
      N('And do your own seeing, like the Dutchman. Watch what people do, not what they say.', '还有，要像那位荷兰人一样亲眼去看：看人们做什么，而不是说什么。'),
    ] });
  lesson(h, { id: 'e08_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: '#b3302a', title: ['What Went Wrong, and the Rule', '错在哪里，规则是什么'],
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'table', at: 0.4, x: 470, y: 220, w: 1420, widths: [0.36, 0.32, 0.32], size: 29, bottom: 700,
        cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
        rows: [
          [['Coffee, try 1: nine dead months', '咖啡第一次：九个月白等'], ['Right on facts, early on time', '事实对，时机早'], ['Let the market confirm the timing', '让市场确认时机']],
          [['Coffee, try 2: lost to a ruling', '咖啡第二次：败给一纸规定'], ['The unexpectable: rules changed', '无法预料：规则被改'], ['Count no profit until banked', '利润进银行才算数']],
          [['Mrs. L buys Borneo on a tip', '利文斯顿夫人听消息买入'], ['A pool manager\'s planned "secret"', '资金池经理设计的"秘密"'], ['A tip is someone else\'s plan', '消息是别人的计划']],
          [['Hood and Walker buy twice', '胡德和沃克两次买入'], ['Hope: the same tipster, again', '希望：同一个人的又一条消息'], ['Judge the stock, not the promise', '看股票本身，不看承诺']]],
        rowAt: ['L0', 'L0@ruling', 'L1', 'L1@twice'] },
      { type: 'note', at: 'L2', x: 470, y: 720, w: 1420, h: 110, size: 30, fill: '#f6d77a', align: 'center', anim: 'slideU',
        en: 'Rothschild: "I never buy at the bottom and I always sell too soon."', zh: '罗斯柴尔德："我从不在最低点买入，而且总是卖得太早。"' }],
    lines: [
      N('Mistake review. In coffee I was early, then cut off by a ruling. Count nothing until it is banked.', '错误复盘。咖啡上，我先是时机太早，后又被一纸规定断送。利润进银行之前，都不算数。'),
      N('The tip-takers trusted someone else\'s plan, and Hood and Walker came back twice.', '听消息的人都把别人的计划当成了自己的，胡德和沃克还上了两次当。'),
      N('Baron Rothschild had the better recipe: I never buy at the bottom, and I always sell too soon.', '罗斯柴尔德男爵的秘诀更高明："我从不在最低点买入，而且总是卖得太早。"'),
    ] });
};
