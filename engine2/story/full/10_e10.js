// Full version, episode 10: corners and Keene. Manipulation then (wash sales, matched orders, the great corners, Drew,
// Vanderbilt, locking up money, Gould) and Keene's methods (Sugar, U.S. Steel, Amalgamated, graduated calls, stabilising,
// selling on the way down). Book chapters XIX–XX. Most of these practices are illegal today; studied only to recognise them.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(10, 'Reminiscences_E10_Corners_and_Keene');
  chapter('Chapter XIX · Corners and Old Tricks', '第十九章 · 逼空与老把戏');
  music('tense');
  title({ id: 'e10_title', kicker: 'EPISODE 10 · 第10集', en: 'Corners and Keene', zh: '逼空与基恩', color: '#5a2a6a',
    sub: ['Book chapters XIX–XX · 1860s–1922', '原著第十九至二十章 · 1860年代至1922年'],
    lines: [N('Episode ten. Corners, and Keene.', '第十集：逼空，与基恩。')] });

  // ---- read this first ----
  shot({ id: 'e10_warning', set: 'study', setOpts: { night: true, ticker: true, tickerX: 300 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 880, y: 470, z: 1.15, dur: 1.6 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.6 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 760, y: 880, s: 1.2, pose: 'explain', expr: 'neutral',
      acts: [{ t: 'L1', pose: 'pointUp', expr: 'determined' }, { t: 'L2', pose: 'explainR', expr: 'smile' }, { t: 'L3', pose: 'chin', expr: 'think' }] }],
    items: [
      { type: 'note', at: 'L0@merchandising', x: 1180, y: 100, w: 700, h: 130, size: 30, anim: 'slideU',
        en: 'Manipulation, to him: selling a big block of stock in the open market', zh: '他所说的操纵：在公开市场上卖出一大批股票' },
      { type: 'stamp', screen: true, at: 'L1@illegal', x: 1530, y: 340, en: 'ILLEGAL TODAY', zh: '如今违法', size: 76 },
      { type: 'note', at: 'L1@recognise', x: 1180, y: 470, w: 700, h: 120, size: 30, fill: '#f3c6c0', anim: 'slideU',
        en: 'Studied here only to recognise it, from the buyer\'s side', zh: '在此研究，只为站在买方的位置认出它' },
      { type: 'note', at: 'L3', x: 1180, y: 620, w: 700, h: 190, size: 29, fill: '#f6d77a', anim: 'slideU',
        en: '"People will continue in the future to make the mistakes that they have made in the past." (Thomas F. Woodlock)', zh: '"人们将来还会继续犯他们过去犯过的错误。"（托马斯·F·伍德洛克）' }],
    lines: [
      N('Now, manipulation. To me it meant merchandising: selling a big block of stock in the open market. Rigging a stock to buy it cheap is different.', '现在来谈操纵。在我看来，它指的是推销：在公开市场上卖出一大批股票。为低价吸筹而做手脚，是另一回事。'),
      N('Most of these practices are illegal today. We study them only to recognise them, from the buyer\'s side.', '这些做法如今大多是违法的。我们研究它们，只为站在买方的位置上认出它们。'),
      N('The tricks of Drew and Gould are as obsolete as archery to a West Point cadet. But fear and hope never change.', '德鲁和古尔德那些老把戏，就像射箭术之于西点军校学员一样过时了。但恐惧和希望永远不变。'),
      N('As Thomas Woodlock put it, people will keep making the mistakes they made in the past.', '正如托马斯·伍德洛克所说：人们将来还会犯他们过去犯过的错误。'),
    ] });
  shot({ id: 'e10_wash', set: 'floor', setOpts: { paperN: 12 }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'trader', z: 1.35, dur: 1.0 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'chin', expr: 'think', acts: [{ t: 'L1', pose: 'cross', expr: 'smile' }, { t: 'L2@innocent', pose: 'point', expr: 'shock' }, { t: 'L3', pose: 'shrug', expr: 'neutral' }] },
      { id: 'trader', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'grin', acts: [{ t: 'L1', pose: 'pointUp', expr: 'laugh' }, { t: 'L2', pose: 'explain', expr: 'sly' }, { t: 'L3', pose: 'despair', expr: 'shock' }] },
      { id: 'generic', key: 'g2', x: 1560, y: 900, s: 1.05, flip: true, z: -1, pose: 'idle', expr: 'neutral', acts: [{ t: 'L1e', pose: 'up', expr: 'laugh' }] }],
    items: [
      { type: 'note', at: 'L0@wash', until: 'L1', x: 1220, y: 110, w: 660, h: 190, size: 28, anim: 'slideU',
        en: 'Wash sale: trading with yourself to fake activity. Matched orders: rigged buy-and-sell pairs.', zh: '对敲：自买自卖，制造假交投。配对单：事先串通的买卖指令。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 920, y: 80, w: 520, tx: 1250, ty: 590, en: 'The laundry is active today!', zh: '今天"洗衣房"可真忙！' },
      { type: 'equation', at: 'L2@twenty', x: 1450, y: 330, size: 50, terms: [
        { t: '+25 pts', zh: '几分钟内', at: 'L2@twenty', hl: true, color: '#2f6b3d' }, { t: '→', at: 'L3' }, { t: 'broke as fast', zh: '又同样快地跌回', at: 'L3', color: '#b3302a' }] },
      { type: 'note', at: 'L3@unreliable', x: 1220, y: 110, w: 660, h: 150, size: 28, fill: '#f3c6c0', anim: 'slideU',
        en: 'Also: "bucket-shop drives", a stock offered down 2–3 points to wipe out bucket-shop longs', zh: '还有"对赌行洗盘"：把股价瞬间压低2–3点，洗掉对赌行里的多头' }],
    lines: [
      N('When I came to New York, wash sales and matched orders were already against Exchange rules. The brokers would grin and say:', '我初到纽约时，对敲和配对假单就已被交易所明令禁止。经纪人会咧嘴一笑说：'),
      L('trader', 'The laundry is active today!', '今天"洗衣房"可真忙！', { speak: 'trader' }),
      N('Once a famous operator cancelled the selling half of his matched orders, but not the buying. An innocent broker ran the price up twenty-five points in minutes.', '有一次，一位著名操盘手撤掉了配对单中的卖单，却没撤买单。一位不知情的经纪人在几分钟内把价格推高了二十五点左右。'),
      N('When the buying stopped, it broke just as fast. Fake activity is an unreliable weapon.', '买单一停，价格又以同样的速度跌了回去。虚假的活跃，是靠不住的武器。'),
    ] });

  // ---- corners ----
  lesson(h, { id: 'e10_corners', trans: 'ink', tag: ['CORNERS', '逼空'], title: ['The Great Corners: Few of Them Paid', '历史上的大逼空：赚钱的寥寥无几'],
    gest: ['explain', 'point', 'explainR', 'pointUp'], expr: [null, null, null, 'sly'],
    items: [
      { type: 'table', at: 'L1', x: 470, y: 220, w: 1000, widths: [0.34, 0.36, 0.30], size: 28, bottom: 840,
        cols: [['Corner', '逼空标的'], ['Engineer', '主导者'], ['Result', '结果']],
        rows: [
          [['Harlem', '哈莱姆铁路'], ['Commodore Vanderbilt', '范德比尔特准将'], ['Paid big', '大赚']],
          [['Northwestern', '西北铁路'], ['Jay Gould', '杰伊·古尔德'], ['Lost', '亏损']],
          [['Lackawanna', '拉克万纳铁路'], ['Deacon S. V. White', 'S·V·怀特执事'], ['Made $1 million', '赚100万美元']],
          [['Hannibal & St. Joe', '汉尼拔与圣约瑟夫'], ['James R. Keene', '詹姆斯·R·基恩'], ['Lost $1 million', '亏100万美元']],
          [['Old Southern', '老南方铁路'], ['Henry Keep', '亨利·基普'], ['Jerome lost his millions', '杰罗姆输光数百万']]],
        rowAt: ['L1@Harlem', 'L1@Gould', 'L2', 'L2@Keene', 'L2@Keep'], hl: ['L1@paid', null, null, null, null] },
      { type: 'note', at: 'L0@Northern', x: 1500, y: 220, w: 390, h: 210, size: 29, anim: 'slideU',
        en: 'Northern Pacific, May 9, 1901: competitive buying, not manipulation', zh: '1901年5月9日北太平洋：竞相买入，并非操纵' },
      { type: 'note', at: 'L3', x: 1500, y: 445, w: 390, h: 210, size: 29, fill: '#f3c6c0', anim: 'slideU',
        en: 'Pays only if the hoard sells above cost: needs a big short interest', zh: '囤货高于成本卖出才赚钱：空头仓位要够大' },
      { type: 'note', at: 'L3@vanity', x: 1500, y: 670, w: 390, h: 170, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'Aimed at professionals. Motives: vanity, or revenge', zh: '针对的是职业玩家。动机：虚荣或报复' }],
    lines: [
      N('Corners count as manipulation too, though some, like Northern Pacific in 1901, came from competitive buying.', '逼空也算操纵，尽管有些逼空，比如1901年的北太平洋，源于竞相买入。'),
      N('Very few great corners paid. Vanderbilt\'s Harlem corners did. Jay Gould lost in Northwestern.', '历史上的大逼空，赚钱的很少。范德比尔特的哈莱姆逼空赚了大钱，杰伊·古尔德在西北铁路上亏了。'),
      N('Deacon White made a million in Lackawanna, and Keene lost a million in Hannibal and St. Joe. Henry Keep squeezed Addison Jerome out of his millions in Old Southern.', '怀特执事在拉克万纳赚了一百万，基恩在汉尼拔与圣约瑟夫铁路上亏了一百万。亨利·基普在老南方铁路上逼空，把艾迪生·杰罗姆的数百万家财挤得一干二净。'),
      N('A corner pays only if you can sell your hoard above cost, so the short interest must be big. Often the real motive was vanity, or revenge.', '逼空要赚钱，就得把囤积的股票高于成本卖出，所以空头仓位必须够大。真正的动机往往是虚荣，或者报复。'),
    ] });
  shot({ id: 'e10_harlem', set: 'street', setOpts: { walkers: 2 }, trans: 'wipe', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'vand', z: 1.4, dur: 1.0 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'drew', look: { hair: '#9a9182', hairStyle: 'gray', age: 3, beard: 'goatee', beardColor: '#9a9182', coat: '#2e2a26', vest: '#4a443c', hat: 'top', hatColor: '#3a3632' },
        x: 700, y: 890, s: 1.2, pose: 'hold', expr: 'worry', acts: [{ t: 'L0@begged', pose: 'despair', expr: 'sad' }, { t: 'L1e', pose: 'despair', expr: 'shock' }, { t: 'L2', pose: 'idle', expr: 'tired' }] },
      { id: 'generic', key: 'vand', look: { hair: '#e8e4da', hairStyle: 'gray', beard: 'chops', beardColor: '#e8e4da', age: 3, hat: 'top', hatColor: '#141414', coat: '#1b1b1f', vest: '#2a2a30', tie: 'ascot', tieColor: '#4a3a2a' },
        x: 1250, y: 890, s: 1.2, flip: true, pose: 'cross', expr: 'determined', acts: [{ t: 'L1', pose: 'pointL', expr: 'grin' }, { t: 'L2', pose: 'hips', expr: 'sly' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'The 1860s: Daniel Drew and Commodore Vanderbilt.', zh: '1860年代：丹尼尔·德鲁与范德比尔特准将。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 860, y: 70, w: 700, kind: 'shout', size: 32, tx: 1250, ty: 590, en: 'He that sells what isn\'t his\'n, must buy it back or go to pris\'n!', zh: '卖了不属于自己的东西，要么买回来，要么进监狱！' },
      { type: 'note', at: 'L2@price', until: 'L3', x: 1220, y: 110, w: 660, h: 170, size: 30, anim: 'slideU',
        en: 'Harlem shorts: "it never sold so high." They thought of price; he thought of value.', zh: '哈莱姆空头："它从没这么高过。"他们想的是价格，他想的是价值。' },
      { type: 'stamp', screen: true, at: 'L3@short', x: 960, y: 300, en: 'SHORT OF HARLEM', zh: '"做空了哈莱姆"＝穷光蛋', size: 64 }],
    lines: [
      N('Old Daniel Drew loved to squeeze the boys in Erie. When Commodore Vanderbilt squeezed him in turn and Drew begged for mercy, the Commodore quoted Drew\'s own rhyme:', '老丹尼尔·德鲁最爱在伊利铁路上逼空那帮小子。后来范德比尔特准将反过来逼空了他。德鲁求饶时，准将念起了德鲁自己的打油诗：'),
      L('banker', 'He that sells what isn\'t his\'n, must buy it back or go to pris\'n!', '卖了不属于自己的东西，要么买回来，要么进监狱！', { speak: 'vand' }),
      N('The Harlem shorts sold because it had never sold so high. They were thinking of the price. The Commodore was thinking of the value.', '哈莱姆铁路的空头卖空，只因为它从没涨这么高过。他们想的是价格，准将想的是价值。'),
      N('For years afterwards, to describe abject poverty, people said: he went short of Harlem!', '此后多年，人们形容一个人穷困潦倒时就说：他做空了哈莱姆！'),
    ] });
  photo({ id: 'e10_shylock', src: `${PD}/subtreasury_wallst_c1900_detroit.jpg`, credit: 'U.S. Sub-Treasury, Wall Street, c.1900 · Detroit Publishing Co. (public domain)', music: 'tense',
    cap: ['Wall Street at Nassau and Broad, c.1900. An old broker saw the "Shylock" chase near here as a boy.', '约1900年，华尔街与拿骚街、布罗德街交口。一位老经纪人童年时在这附近目睹了"夏洛克"追逐。'], capW: 680,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 14, x: 930, y: 500, z: 1.15 }],
    items: [{ type: 'note', at: 'L1@certified', x: 1200, y: 560, w: 660, h: 210, size: 30, fill: '#f6d77a', anim: 'slideU',
      en: 'Locking up money: borrow it, hold it idle as certified checks → less for margin borrowers', zh: '锁住资金：借来后换成保付支票闲置→留给保证金借款人的钱变少' }],
    lines: [
      N('An old broker remembered the early sixties: a clique operator chasing a man down Wall Street, yelling: Shylock! What\'s the price of money?', '一位老经纪人记得，六十年代初的华尔街上，一个操纵集团的大户追着一个人大喊："夏洛克！钱什么价？"'),
      N('Cliques would borrow money and hold it idle as certified checks, so Exchange borrowers went without. That was rigging too.', '那时的集团会借入资金，换成保付支票闲置不用，让交易所的借款人借不到钱。这也是一种操纵。'),
      N('And Jay Gould, whose touch Drew called death, saw that the big money was in owning railroads, not rigging their stocks.', '还有杰伊·古尔德，德鲁说他"碰谁谁死"。他看出，大钱在于拥有铁路，而不是炒作铁路股票。'),
    ] });

  // ---- chapter XX: Keene ----
  chapter('Chapter XX · Keene and the Tape', '第二十章 · 基恩与纸带');
  photo({ id: 'e10_keene', src: `${PD}/portrait_james_r_keene_1901_worldswork.jpg`, credit: 'James R. Keene · The World\'s Work, 1901 (public domain)',
    cap: ['James R. Keene (1838–1913). The World\'s Work, 1901: "the most deft manipulator of stocks in Wall Street."', '詹姆斯·R·基恩（1838–1913）。《世界工作》1901年称他为"华尔街最灵巧的股票操纵者"。'], capW: 640,
    kb: [{ t: 0, x: 960, y: 500, z: 1.02 }, { t: 16, x: 960, y: 440, z: 1.15 }],
    items: [{ type: 'note', at: 'L2@nine', x: 1220, y: 640, w: 640, h: 140, size: 30, fill: '#f6d77a', anim: 'slideU',
      en: '1876: arrives from California, makes $9 million in two years', zh: '1876年：从加州来到纽约，两年赚了900万美元' }],
    lines: [
      N('James R. Keene was the greatest manipulator of them all. Broke at the time, he sold his services to the Havemeyers, and made Sugar a trading favourite.', '詹姆斯·R·基恩是所有操纵者中最伟大的一位。当时他正破产，于是把本事卖给了哈夫迈耶兄弟，让糖业股成了交易热门。'),
      N('In later pools he took no fee, and paid for his share like any member. His masterpiece was U.S. Steel, in the spring of 1901.', '在后来的资金池里，他从不收费，和其他成员一样掏钱认购自己那份。他的杰作，是1901年春天的美国钢铁。'),
      N('He had come from California in 1876 and made nine million dollars in two years.', '他1876年从加利福尼亚来到纽约，两年就赚了九百万美元。'),
    ] });
  lesson(h, { id: 'e10_steel', tag: ['KEENE · U.S. STEEL, 1901', '基恩 · 1901年美国钢铁'], title: ['Marked Up in a Boom, Then Undigested', '在狂热中拉高，随后"消化不良"'], titleSize: 50,
    gest: ['explain', 'up', 'point'], expr: [null, null, 'sad'],
    items: [
      { type: 'counter', at: 'L0@seven', x: 770, y: 360, from: 0, to: 750000, suffix: '+', size: 110, dur: 1.6, color: '#2f5d8a', label: ['shares sold for the underwriters, in weeks', '几周内为承销团卖出的股数'] },
      { type: 'note', at: 'L0@debt', x: 470, y: 520, w: 600, h: 140, size: 30, anim: 'slideU',
        en: 'A company capitalised above the entire U.S. national debt', zh: '公司股本超过当时美国的全部国债' },
      { type: 'note', at: 'L1@boom', x: 470, y: 680, w: 600, h: 150, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'Not just a bull market: a boom, with unlimited backing', zh: '不只是牛市：是一场狂热，背后资金无限' },
      { type: 'bars', at: 'L2', x: 1110, y: 220, w: 780, h: 620, title: ['U.S. Steel common, price', '美国钢铁普通股价格'], max: 55, vsize: 40,
        bars: [{ v: 55, vl: '55', en: '1901: marked up', zh: '1901年：被拉高', at: 'L2@55', color: '#2f6b3d' },
          { v: 10, vl: '10', en: '1903', zh: '1903年', at: 'L2@1903', color: '#b3302a' },
          { v: 8.875, vl: '8⅞', en: '1904', zh: '1904年', at: 'L2@1904', color: '#b3302a' }] }],
    lines: [
      N('In a few weeks Keene sold over seven hundred and fifty thousand shares for the underwriters, of a company capitalised above the whole national debt.', '短短几周，基恩为承销团卖出了七十五万多股。这家公司的股本，比当时美国的全部国债还多。'),
      N('The Steel magnates sold hundreds of thousands more. It was not just a bull market. It was a boom.', '与此同时，钢铁巨头们还卖出了几十万股。那不只是牛市，而是一场狂热。'),
      N('Then came the undigested-securities panic. Steel common, marked up to 55 in 1901, sold at 10 in 1903, and eight and seven-eighths in 1904.', '随后爆发了"消化不良证券"恐慌。1901年被拉到55的钢铁普通股，1903年跌到10，1904年跌到8⅞。'),
    ] });

  // ---- Amalgamated Copper ----
  shot({ id: 'e10_amalgamated', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['AMALGAMATED COPPER'], ['≈100']], boardSeq: [{ t: 'L1@ten', r: 1, c: 0, v: '≈110' }, { t: 'L3@130', r: 1, c: 0, v: '≈130' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L2', on: 'keene', z: 1.35, dur: 1.2 }, { t: 'L3', on: 'rogers', z: 1.3, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'wr', look: { hair: '#b8a27a', hairStyle: 'side', mus: 'thin', musColor: '#b8a27a', age: 2, coat: '#2e2a26' }, x: 380, y: 900, s: 1.05, z: -1, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1@public', pose: 'hips', expr: 'smile' }] },
      { id: 'generic', key: 'rogers', look: { hair: '#cfcac0', hairStyle: 'gray', mus: 'walrus', musColor: '#cfcac0', age: 2, coat: '#1e2230', vest: '#2b3042' }, x: 660, y: 890, s: 1.2, pose: 'explain', expr: 'worry',
        acts: [{ t: 'L1', pose: 'relaxed', expr: 'smile' }, { t: 'L2', pose: 'hold', expr: 'grin' }, { t: 'L3', pose: 'pointUp', expr: 'sly' }] },
      { id: 'keene', x: 1250, y: 890, s: 1.2, flip: true, pose: 'chin', expr: 'think',
        acts: [{ t: 'L1', pose: 'explainR', expr: 'determined' }, { t: 'L2@back', pose: 'shrug', expr: 'smile' }, { t: 'L3', pose: 'cross', expr: 'sly' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'H. H. Rogers and William Rockefeller ask Keene for help.', zh: 'H·H·罗杰斯和威廉·洛克菲勒请基恩出手。' },
      { type: 'counter', at: 'L1@two', until: 'L2', x: 1600, y: 250, from: 0, to: 220000, suffix: ' sh', size: 80, dur: 1.4, color: '#2f5d8a', label: ['sold around par (100)', '在面值100附近卖出'] },
      { type: 'note', at: 'L1@million', until: 'L2', x: 1400, y: 420, w: 470, h: 110, size: 32, fill: '#f6d77a', anim: 'slideU', en: '≈ $20–25 million in cash', zh: '约2000万至2500万美元现金' },
      { type: 'ticket', screen: true, at: 'L2', x: 420, y: 330, lines: ['PAY TO J. R. KEENE', '$200,000', 'H. H. ROGERS'], head: 'CHECK', color: '#cfe3c4', rot: -6, stamp: 'L2@back', stampText: 'RETURNED', stampZh: '退回' },
      { type: 'stamp', screen: true, at: 'L3@friendly', x: 1560, y: 230, en: 'A FRIENDLY TIP?', zh: '"好心"的消息？', size: 60 }],
    lines: [
      N('Amalgamated Copper. H. H. Rogers and William Rockefeller, with all their money and prestige, had failed to sell their surplus stock. So they went to Keene.', '再看联合铜业。H·H·罗杰斯和威廉·洛克菲勒有钱有势，却卖不掉手里多余的股票，只好去找基恩。'),
      N('In a bull market he sold two hundred and twenty thousand shares around par, for twenty to twenty-five million dollars. The public kept buying, ten points higher.', '借着牛市，他在面值附近卖出了二十二万股，回笼两三千万美元现金。公众继续买进，价格又涨了十个点。'),
      N('Rogers sent him a check for two hundred thousand dollars. Keene sent it back: he was not a stockbroker.', '罗杰斯给他寄去一张二十万美元的支票。基恩把支票退了回去：他说自己不是股票经纪人。'),
      N('Soon after, Rogers gave him a friendly tip: buy Amalgamated, at around 130!', '不久之后，罗杰斯"好心"给了他一个消息：在130左右买进联合铜业！'),
    ] });
  lesson(h, { id: 'e10_tactics', tag: ['KEENE\'S METHOD', '基恩的手法'], title: ['Tactics Change Daily; the Strategy Never Does', '战术天天变，战略永不变'], titleSize: 48,
    gest: ['explain', 'pointUp', 'explainR'], expr: [null, 'determined', 'smile'],
    items: [
      { type: 'flow', at: 'L0@almost', x: 470, y: 220, w: 1420, bh: 170, gap: 44, size: 28, nodes: [
        { num: 1, en: 'Almost out of the stock he took marking it up', zh: '拉抬时接下的筹码几乎卖光', at: 'L0@almost' },
        { num: 2, en: 'Buys back thousands of shares', zh: '买回几千股', at: 'L0@next' },
        { num: 3, en: 'Sells on balance', zh: '净卖出', at: 'L0@after' },
        { num: 4, en: 'Leaves it alone, to see how it acts', zh: '放手不管，看它怎么走', at: 'L1' }] },
      { type: 'note', at: 'L1@strategy', x: 470, y: 430, w: 1420, h: 120, size: 34, fill: '#f6d77a', align: 'center', anim: 'slideU',
        en: 'STRATEGY: do the big selling on the way down, after the big rise', zh: '战略：大涨之后，在下跌途中大量出货' },
      { type: 'table', at: 'L2', x: 470, y: 580, w: 900, widths: [0.4, 0.6], size: 30, bottom: 840,
        cols: [['Keene\'s temper', '基恩的脾气'], ['', '']],
        rows: [[['When winning', '赢的时候'], ['Irritable, sardonic', '暴躁、尖刻']], [['When losing', '输的时候'], ['Charming, witty company', '风趣迷人']]],
        rowAt: ['L2', 'L2@Losing'] },
      { type: 'rule', at: 'L2@tape', x: 1400, y: 580, w: 490, h: 250, n: '!', tag: '#2f6b3d', fill: '#cfe3c4', size: 30,
        en: 'Never argued with the tape. Fearless, never reckless; turned in a twinkling.', zh: '从不跟纸带争辩。无所畏惧却不鲁莽，错了瞬间掉头。' }],
    lines: [
      N('His confidential man described the tactics. One day Keene was almost out of stock. The next, he bought back thousands. The day after, he sold on balance.', '他的心腹描述过这些战术：某天基恩手里几乎没货了；第二天，他又买回几千股；第三天，他净卖出。'),
      N('Then he left it alone, to see how it would take care of itself. Tactics changed daily. The strategy never did: sell on the way down, after the big rise.', '然后他放手不管，看它自己会怎么走。战术天天在变，战略从来不变：大涨之后，在下跌途中出货。'),
      N('Winning, he was irritable. Losing, he was charming. He never argued with the tape: fearless, never reckless, and he could turn in a twinkling.', '赢的时候他脾气暴躁，输的时候却风趣迷人。他从不跟纸带争辩：无所畏惧却从不鲁莽，发现错了能瞬间掉头。'),
    ] });
  shot({ id: 'e10_connor', set: 'floor', setOpts: { agitated: true, paperN: 14 }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0@bid', on: 'connor', z: 1.3, dur: 1.0 }, { t: 'L1', on: 'tr', z: 1.35, dur: 1.0 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'connor', look: { hair: '#9a9182', hairStyle: 'gray', mus: 'walrus', musColor: '#9a9182', age: 2, hat: 'top', hatColor: '#1a1a1a', coat: '#26262e' },
        x: 720, y: 890, s: 1.2, pose: 'idle', expr: 'neutral', acts: [{ t: 'L0@bid', pose: 'pointUp', expr: 'determined' }, { t: 'L2', pose: 'hold', expr: 'sly' }] },
      { id: 'trader', key: 'tr', x: 1250, y: 890, s: 1.2, flip: true, pose: 'cross', expr: 'neutral', acts: [{ t: 'L0@bid', pose: 'hips', expr: 'grin' }, { t: 'L1', pose: 'pointL', expr: 'laugh' }, { t: 'L2@manipulation', pose: 'shrug', expr: 'think' }] },
      { id: 'friend', key: 'tr2', x: 1540, y: 900, s: 1.05, flip: true, z: -1, pose: 'idle', expr: 'neutral', acts: [{ t: 'L1e', pose: 'up', expr: 'laugh' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'The Western Union post on the Exchange floor.', zh: '交易所场内的西联电报交易台。' },
      { type: 'sfx', screen: true, at: 'L0@bid', until: 'L1', x: 420, y: 300, text: 'BID!', zh: '出价！', size: 100, color: '#2f6b3d', font: 'cond' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 900, y: 70, w: 600, tx: 1250, ty: 590, en: 'Does he think we\'re that simple? Sell him all he wants!', zh: '他以为我们那么好骗？他要多少就卖他多少！' },
      { type: 'stamp', screen: true, at: 'L2@yes', x: 1000, y: 260, en: 'NO, AND YES!', zh: '不算，也算！', size: 70 }],
    lines: [
      N('When Jay Gould wanted to cinch control of Western Union, Washington E. Connor, unseen on the floor for years, suddenly turned up at the post and began to bid.', '杰伊·古尔德想牢牢控制西联电报公司时，多年不在场内露面的华盛顿·E·康纳突然出现在交易台前，开始出价买入。'),
      L('trader', 'Does he think we\'re that simple? Sell him all he wants!', '他以为我们那么好骗？他要多少就卖他多少！', { speak: 'tr' }),
      N('They laughed at so raw a trick, and sold him all the stock he wanted. Was that manipulation? No, and yes!', '他们笑这把戏太拙劣，痛痛快快地把他要的股票全卖给了他。这算不算操纵？不算，也算！'),
    ] });
  lesson(h, { id: 'e10_tapead', tag: ['WHAT MANIPULATION IS FOR', '操纵的目的'], title: ['Advertising Through the Tape', '借纸带做广告'],
    gest: ['explain', 'explainR', 'pointUp', 'fist'], expr: [null, null, 'sly', 'determined'],
    items: [
      { type: 'photo', at: 0.4, x: 1440, y: 220, w: 440, h: 240, rot: 2, src: `${PD}/stock_ticker_edison_smithsonian.jpg`, en: '"The greatest publicity agent in the wide world"', zh: '"世界上最伟大的宣传员"' },
      { type: 'rule', at: 'L0', x: 470, y: 220, w: 920, h: 130, n: '1', size: 30, en: 'The tape tells a story. The truer it is, the better it sells.', zh: '纸带讲一个故事。越真实，越好卖。' },
      { type: 'rule', at: 'L0@look', x: 470, y: 366, w: 920, h: 130, n: '2', size: 30, en: 'Not only look strong: BE strong. A trader first.', zh: '不仅要看起来强，还要真的强。先是交易者。' },
      { type: 'rule', at: 'L1', x: 470, y: 512, w: 920, h: 130, n: '3', size: 30, en: 'Goal: marketability, and a thousand holders, not one.', zh: '目标：可售性，以及一千个股东，而不是一个。' },
      { type: 'rule', at: 'L2', x: 470, y: 658, w: 920, h: 130, n: '4', size: 30, tag: '#b3302a', fill: '#f3c6c0', en: 'Mark it up as high as possible, then sell on the way down.', zh: '尽量拉到最高，然后在下跌途中出货。' },
      { type: 'stamp', at: 'L3@illegal', x: 1640, y: 690, en: 'ILLEGAL TODAY', zh: '认清模式，别做最后接盘者', size: 60 }],
    lines: [
      N('Manipulation is the art of advertising through the tape. The truer the story, the better. A stock must not only look strong, but be strong.', '操纵就是借纸带做广告的艺术。故事越真实越好。股票不仅要看起来强，还得真的强。'),
      N('The usual object is marketability, the power to sell fair-sized blocks at any time, and wide distribution. A thousand holders beat one.', '通常的目的是可售性，即随时都能卖出相当数量的股票，以及广泛分散持股。一千个股东胜过一个。'),
      N('And the rule Keene knew: stocks are manipulated to the highest point possible, then sold to the public on the way down.', '还有基恩深知的规则：股票要被操纵到尽可能高的价位，然后在下跌途中卖给公众。'),
      N('Today, painting false pictures on the tape is illegal. Learn the pattern, so you are never the buyer at the end.', '如今，在纸带上制造假象是违法的。学会认出这种模式，你就不会成为最后接盘的人。'),
    ] });

  // ---- how a pool was run (then) ----
  shot({ id: 'e10_visit', set: 'study', setOpts: { lampX: 1700 }, trans: 'push', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'visitor', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'nar', z: 1.3, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'visitor', look: { hair: '#4a3420', hairStyle: 'center', mus: 'walrus', musColor: '#4a3420', hat: 'bowler', hatColor: '#1d1d1d', coat: '#3b3b3b', stout: true, age: 1 },
        x: 700, y: 890, s: 1.2, pose: 'hold', expr: 'worry', prop: { t: 'paper', text: 'POOL STOCK' }, acts: [{ t: 'L1', pose: 'explain', expr: 'worry' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] },
      { id: 'larryOld', key: 'nar', x: 1250, y: 880, s: 1.2, flip: true, pose: 'chin', expr: 'think',
        acts: [{ t: 'L0@study', pose: 'explainR', expr: 'neutral' }, { t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'explain', expr: 'determined' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'His method as of 1922, told so it can be recognised. Illegal today.', zh: '他在1922年的做法，讲出来是为了便于识别。如今违法。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 300, y: 70, w: 640, tx: 700, ty: 590, en: 'We can\'t move it on the Exchange. Will you take charge of the market?', zh: '我们在交易所里卖不动。您愿意来接手操盘吗？' },
      { type: 'note', at: 'L2@graduated', x: 240, y: 110, w: 640, h: 150, size: 30, fill: '#f6d77a', anim: 'slideU', en: 'Graduated calls + a fee that depends on success', zh: '分级认购权＋按成败计酬' }],
    lines: [
      N('Say a pool that cannot sell its stock comes to me, the way a sick man goes to a doctor. First I study the stock, and current conditions.', '假设一个卖不掉股票的资金池来找我，就像病人去找医生。我先研究这只股票，以及当前的形势。'),
      L('banker', 'We can\'t move it on the Exchange. Will you take charge of the market?', '我们在交易所里卖不动。您愿意来接手操盘吗？', { speak: 'visitor' }),
      N('If I accept, I take calls on a block of stock, graduated in price. My fee depends on my success.', '如果我接下来，就会拿一批分级定价的认购权。我的报酬取决于成败。'),
    ] });
  lesson(h, { id: 'e10_calls', tag: ['HOW IT WAS DONE (THEN)', '当年的做法'], title: ['Graduated Calls: Paid Only If It Works', '分级认购权：成功才有报酬'],
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 1000, h: 620, title: ['Call prices on 100,000 shares, with the stock at 40', '10万股认购权的行权价（股价40时）'], max: 80, vsize: 34,
        bars: [{ v: 35, vl: '35', en: 'some thousands', zh: '几千股', at: 'L0@35', color: '#c9a26a' },
          { v: 37, vl: '37', en: 'more', zh: '再一批', at: 'L0@37', color: '#c9a26a' },
          { v: 40, vl: '40', en: 'at the market', zh: '平价', at: 'L0@37+0.7', color: '#9a9182' },
          { v: 45, vl: '45', en: 'above', zh: '高于市价', at: 'L0@45', color: '#2f6b3d' },
          { v: 50, vl: '50', en: 'above', zh: '高于市价', at: 'L0@50', color: '#2f6b3d' },
          { v: 80, vl: '75–80', en: '…up to', zh: '……直到', at: 'L0@75', color: '#2f6b3d' }] },
      { type: 'note', at: 'L1', x: 1500, y: 220, w: 390, h: 300, size: 30, fill: '#cfe3c4', anim: 'slideU',
        en: 'Price rises with real demand → he calls the stock. Clients profit too.', zh: '价格在真实需求下上涨→他行使认购权。客户也赚钱。' },
      { type: 'note', at: 'L2', x: 1500, y: 540, w: 390, h: 300, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'The calls let him sell short safely: he is selling against them.', zh: '认购权让他能放心卖空：他是凭认购权在卖。' }],
    lines: [
      N('Say calls on a hundred thousand shares, with the stock at 40. Some thousands at 35, more at 37, at 40, 45, 50, and so on up to 75 or 80.', '比如，股价40时，拿十万股的认购权：几千股定在35，再一批定在37，然后40、45、50，依次往上，直到75或80。'),
      N('If my work lifts the price and there is real demand up there, I call the stock. I make money, and so do my clients.', '如果我的操作把价格抬上去，而高位确有真实需求，我就行使认购权。我赚钱，客户也赚钱。'),
      N('And the calls protect me: I can sell stock short against them, safely.', '而且这些认购权保护着我：我可以凭它们放心地卖空。'),
    ] });
  shot({ id: 'e10_active', set: 'floor', setOpts: { agitated: true, paperN: 18 }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'a', z: 1.3, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'generic', key: 'c', x: 420, y: 900, s: 1.05, z: -1, pose: 'idle', expr: 'neutral', acts: [{ t: 'L2', pose: 'up', expr: 'grin' }] },
      { id: 'larryOld', key: 'nar', x: 760, y: 880, s: 1.2, pose: 'explain', expr: 'neutral',
        acts: [{ t: 'L0@explanations', pose: 'pointUp', expr: 'sly' }, { t: 'L1', pose: 'explainR', expr: 'neutral' }, { t: 'L2', pose: 'point', expr: 'determined' }] },
      { id: 'trader', key: 'a', x: 1250, y: 890, s: 1.2, flip: true, pose: 'idle', expr: 'neutral', acts: [{ t: 'L0@active', pose: 'up', expr: 'grin' }, { t: 'L1', pose: 'wave', expr: 'laugh' }] },
      { id: 'friend', key: 'b', x: 1560, y: 900, s: 1.05, flip: true, z: -1, pose: 'idle', expr: 'neutral', acts: [{ t: 'L2', pose: 'up', expr: 'smile' }] }],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 110, w: 1400, bh: 140, gap: 50, size: 28, nodes: [
        { en: 'Make it active and strong', zh: '让它活跃、强势', at: 'L0' },
        { en: 'Explanations appear by themselves', zh: '解释自己冒出来', at: 'L0@explanations' },
        { en: 'Room traders: the first buyers', zh: '场内交易员：第一批买家', at: 'L1' },
        { en: 'Public follows: he sells on balance', zh: '公众跟进：他净卖出', at: 'L2', color: '#f3c6c0' }] },
      { type: 'note', at: 'L1@Keene', x: 1220, y: 290, w: 660, h: 140, size: 29, fill: '#f6d77a', anim: 'slideU',
        en: 'Keene gave the busiest room traders verbal calls above the market', zh: '基恩给最活跃的场内交易员高于市价的口头认购权' }],
    lines: [
      N('Step one: make the stock active. The ticker is the greatest publicity agent in the world. When there is activity, explanations supply themselves.', '第一步：让股票活跃起来。行情机是世界上最伟大的宣传员。只要交投活跃，各种解释自己就会冒出来。'),
      N('Floor traders ask only for activity. They are the first crop of buyers. Keene even gave the busiest ones verbal calls above the market.', '场内交易员只要求交投活跃，他们是第一批买家。基恩甚至给最活跃的那些人高于市价的口头认购权。'),
      N('Then the public follows them in. I fill that demand, selling on balance, and if it takes more than I hold, I sell short, against my calls.', '接着公众跟进。我满足这些需求，净卖出；如果需求超过我的持仓，我就凭认购权卖空。'),
    ] });
  lesson(h, { id: 'e10_stabilise', tag: ['HOW IT WAS DONE (THEN)', '当年的做法'], title: ['Stabilise, Then Sell on the Way Down', '先稳住，再在下跌途中出货'],
    gest: ['explain', 'explainR', 'point'], expr: [null, 'sly', 'determined'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 12], yr: [30, 75], yTicks: [], illustrative: true, cursorLabel: false,
        title: ['A pool stock, start to finish', '一只资金池股票的全过程'],
        series: [{ pts: [[0, 40], [1, 44], [2, 42], [3, 48], [4, 46], [5, 54], [6, 52], [7, 62], [8, 66], [8.8, 63], [9.6, 65], [10.4, 58], [11.2, 60], [12, 50]], color: '#5a2a6a',
          draw: [['L0', 4], ['L1', 8], ['L2', 13]] }],
        marks: [{ x: 2, y: 42, at: 'L0', en: 'Weak day: he buys back (covers)', zh: '疲软日：他买回（回补）', dx: -100, dy: 50, w: 270, fill: '#cfe3c4' },
          { x: 5, y: 54, at: 'L1', en: 'Sells on the way up, never enough to stop it', zh: '上涨途中卖出，但不压住涨势', dx: -330, dy: -150, w: 270 },
          { x: 8, y: 66, at: 'L2', en: 'Demand fades: the rise stops', zh: '需求减弱：涨势停止', dx: -250, dy: -130, w: 270 },
          { x: 11.2, y: 60, at: 'L2@decline', en: 'Rallies on the way down: most stock sold here', zh: '下跌途中的反弹：大部分筹码在这里卖出', dx: -300, dy: 90, w: 270, fill: '#f3c6c0' }] },
      { type: 'rule', at: 'L1@riskless', x: 1500, y: 220, w: 390, h: 290, n: '$', size: 30, en: 'Always a little short = riskless buying power for weak days', zh: '始终保持少量空头＝应对疲软日的无风险买盘' },
      { type: 'note', at: 'L2@astonishing', x: 1500, y: 540, w: 390, h: 300, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: '"It is perfectly astonishing how much stock a man can get rid of on a decline."', zh: '"在下跌途中能脱手多少股票，实在令人吃惊。"' }],
    lines: [
      N('On a weak day I buy, covering stock I sold higher. That supports the price without adding to my line. I call it the stabilising process.', '在疲软的日子里，我买进，回补之前在高位卖空的股票。这样既托住了价格，又不增加我的持仓。我称之为"稳定过程"。'),
      N('As it broadens, I sell on the way up, but never enough to check the rise. Always a little short, I have riskless buying power for weak days.', '市场扩大后，我在上涨途中卖出，但绝不多到压住涨势。始终保持少量空头，我就有了应对疲软日的"无风险买盘"。'),
      N('The public thinks the selling is done at the top. It isn\'t. It is astonishing how much stock a man can get rid of on a decline.', '公众以为出货都在顶部完成。其实不然。在下跌途中能脱手多少股票，多得惊人。'),
    ] });
  shot({ id: 'e10_quit', set: 'study', setOpts: { night: true, ticker: true, tickerX: 300 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L2', x: 1000, y: 470, z: 1.2, dur: 2 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 1000, y: 870, s: 1.25, pose: 'hold', expr: 'neutral', prop: { t: 'tape' },
      acts: [{ t: 'L0@confidence', pose: 'hold', expr: 'smile' }, { t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L1@sell', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'fist', expr: 'determined' }] }],
    items: [
      { type: 'note', at: 'L0@confidence', x: 1240, y: 110, w: 640, h: 140, size: 30, fill: '#cfe3c4', anim: 'slideU',
        en: 'It rises on his buying → he buys with confidence', zh: '他一买就涨→放心买进' },
      { type: 'note', at: 'L1', x: 1240, y: 270, w: 640, h: 140, size: 30, fill: '#f3c6c0', anim: 'slideU',
        en: 'Waterlogged: buying no longer lifts it → stop, sell it down', zh: '"吸饱了水"：买进推不动→停手，转而卖出' },
      { type: 'rule', at: 'L2', x: 1240, y: 430, w: 640, h: 170, n: '!', tag: '#b3302a', fill: '#f6d77a', size: 32,
        en: 'It doesn\'t act as it should? QUIT. Don\'t argue with the tape.', zh: '走势不对？收手。不要跟纸带争辩。' }],
    lines: [
      N('As long as the stock goes up on my buying, I buy with confidence. That is the line of least resistance.', '只要我买进时股价上涨，我就放心地买。那就是最小阻力线。'),
      N('When my buying no longer puts it up, I stop, and sell it down, exactly as I would if I were not manipulating it.', '当我的买进不再推高股价，我就停手，转而把它卖下去，和我没在操纵它时的做法一模一样。'),
      N('When a stock doesn\'t act as it should, quit. Don\'t argue with the tape. Quit while quitting is cheap.', '股票走势不对，就收手。不要跟纸带争辩。趁着收手的代价还小，赶紧收手。'),
    ] });

  // ---- episode summary ----
  lesson(h, { id: 'e10_rules', tag: ['TAKEAWAYS · EPISODE 10', '第10集要点'], title: ['Five Rules from the Manipulators', '从操纵者身上学到的五条规则'], titleSize: 50, music: 'calm',
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      { type: 'rule', at: 'L0', x: 470, y: 220, w: 1420, h: 108, n: '1', size: 32, en: 'Weapons change; human nature doesn\'t. People repeat their mistakes.', zh: '武器会变，人性不变。人们总在重复犯错。' },
      { type: 'rule', at: 'L0@corners', x: 470, y: 344, w: 1420, h: 108, n: '2', size: 32, en: 'Corners rarely paid. Shorting a price only because it looks "too high" can ruin you.', zh: '逼空很少赚钱。只因价格"太高"就做空，可能倾家荡产。' },
      { type: 'rule', at: 'L1', x: 470, y: 468, w: 1420, h: 108, n: '3', size: 32, en: 'Activity is advertising. Ask who needs the activity.', zh: '交投就是广告。问问是谁需要这份活跃。' },
      { type: 'rule', at: 'L2', x: 470, y: 592, w: 1420, h: 108, n: '4', size: 32, en: 'The big selling happens on the way down, into hopeful rallies.', zh: '大规模出货发生在下跌途中，卖进满怀希望的反弹。' },
      { type: 'rule', at: 'L2@quits', x: 470, y: 716, w: 1420, h: 108, n: '5', size: 32, tag: '#2f6b3d', fill: '#cfe3c4', en: 'Even a manipulator quits when the tape says no. Most of this is illegal today.', zh: '连操纵者也会在纸带说"不"时收手。这些做法如今大多违法。' }],
    lines: [
      N('Five rules. Weapons change, but human nature doesn\'t. And corners punished men who sold only because a price looked too high.', '五条规则。武器会变，人性不变。逼空惩罚的，正是那些只因价格看起来太高就卖空的人。'),
      N('Activity is advertising: a busy tape invents its own reasons. Always ask who needs the activity.', '交投就是广告：繁忙的纸带会自己编出理由。永远要问：是谁需要这份活跃？'),
      N('The big selling happens on the way down. And even a manipulator quits when the tape says no.', '大规模出货发生在下跌途中。而且，连操纵者也会在纸带说"不"的时候收手。'),
    ] });
  lesson(h, { id: 'e10_mistakes', tag: ['MISTAKE REVIEW · THE BUYER\'S SIDE', '错误复盘 · 买方视角'], tagColor: '#b3302a', title: ['What Went Wrong, and the Rule', '错在哪里，规则是什么'],
    gest: ['explain', 'point'],
    items: [
      { type: 'table', at: 0.4, x: 470, y: 220, w: 1420, widths: [0.36, 0.32, 0.32], size: 29, bottom: 820,
        cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
        rows: [
          [['Shorting Harlem: "never so high"', '做空哈莱姆："从没这么高过"'], ['Thought of price, not value', '只看价格，不看价值'], ['"Too high" is no reason to sell', '"太高"不是卖空的理由']],
          [['Selling Connor all he wanted', '把股票全卖给康纳'], ['Judged the bidder, not the buying', '看出价的人，不看买盘'], ['Let the buying speak for itself', '让买盘本身说话']],
          [['Buying Steel near 55 in the boom', '狂热中在55附近买钢铁'], ['A busy tape and a boom mood', '活跃的纸带与狂热情绪'], ['Activity is not value', '活跃不等于价值']],
          [['Buying "bargains" on the way down', '在下跌途中"捡便宜"'], ['Rallies look like support', '反弹看起来像支撑'], ['Weak rallies feed distribution', '无力的反弹是在供人出货']]],
        rowAt: ['L0', 'L0@Connor', 'L1', 'L1@bargains'] }],
    lines: [
      N('Mistake review, from the buyer\'s side. The Harlem shorts sold a price, not a value. The traders who sold to Connor judged the bidder, not the buying.', '错误复盘，站在买方的角度看。做空哈莱姆的人卖的是价格，不是价值。把股票卖给康纳的交易员，看的是出价的人，而不是买盘本身。'),
      N('The public bought Steel near 55 in a boom, and bargains on the way down. The tricks are illegal now. The mistakes still happen every day.', '公众在狂热中于55附近买进钢铁，又在下跌途中"捡便宜"。那些把戏如今已经违法，但这些错误每天仍在发生。'),
    ] });
};
