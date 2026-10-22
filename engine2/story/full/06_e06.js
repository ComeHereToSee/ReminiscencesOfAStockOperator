// Full version, episode 6: Cotton King, Cotton Fool (Book ch. XI–XII, c. 1907–1908)
// Cases: the Chicago corn squeeze and the oats feint; Cammack and St. Paul; the July cotton "corner";
// Percy Thomas; the book agent; wheat sold / cotton kept to 440,000 bales; the sable coat and market-paid bills.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  const RED = '#b3302a', GREEN = '#2f6b3d', BROWN = '#7a4a22', BLUE = '#2f5d8a', PINK = '#f3c6c0', MINT = '#cfe3c4', YEL = '#f6d77a';
  episode(6, 'Reminiscences_E06_Cotton_King_Cotton_Fool');

  // ======================= Chapter XI =======================
  chapter('Chapter XI · Corn, Oats and July Cotton', '第十一章 · 玉米、燕麦与七月棉花');
  music('rag');
  title({ id: 'e06_title', kicker: 'EPISODE 6 · 第6集', en: 'Cotton King, Cotton Fool', zh: '棉花大王，棉花傻瓜', color: BROWN,
    sub: ['Book chapters XI–XII · c. 1907–1908', '原著第十一至十二章 · 约1907–1908年'],
    lines: [N('Episode six. Cotton king, cotton fool.', '第六集：棉花大王，棉花傻瓜。')] });

  // ---- the yacht, and the corn that held him back ----
  shot({ id: 'e06_yacht', set: 'beach', setOpts: { yachtX: 1500 }, trans: 'whip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 990, y: 510, z: 1.06, dur: 2 }, { t: 'L2', on: 'larry', z: 1.4, dur: 1.4 }],
    cast: [{ id: 'larry', x: 640, y: 890, s: 1.2, pose: 'hips', expr: 'smile', lookX: 0.5,
      acts: [{ t: 'L1', pose: 'chin', expr: 'think', lookX: 0 }, { t: 'L1@Corn', pose: 'explain', expr: 'frown' }, { t: 'L2', pose: 'despair', expr: 'worry' }, { t: 'L2@prayed', pose: 'up', expr: 'sad' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'October 1907. A new yacht, ready for Southern waters.', zh: '1907年10月。新游艇整装待发，准备驶向南方海域。', w: 620 },
      { type: 'table', at: 'L1@wheat', x: 1150, y: 90, w: 730, widths: [0.24, 0.36, 0.4], size: 28, bottom: 380,
        cols: [['Short', '空头'], ['Size', '数量'], ['Status', '状况']],
        rows: [[['Wheat', '小麦'], ['10,000,000 bu', '1000万蒲式耳'], ['Falling: a profit', '下跌：盈利']],
          [['Corn', '玉米'], ['10,000,000 bu', '1000万蒲式耳'], ['Cornered: a loss', '被逼空：亏损']]],
        rowAt: ['L1@wheat', 'L1@Corn'], hl: [null, 'L2'] }],
    lines: [
      N('October 1907. The panic had made me a millionaire. I bought a yacht to go fishing in Southern waters.', '1907年10月。那场恐慌让我成了百万富翁。我买了一艘游艇，准备去南方海域钓鱼。'),
      N('But in Chicago I was short ten million bushels of wheat and ten million of corn. Wheat kept falling. Corn did not.', '但在芝加哥，我做空了一千万蒲式耳小麦和一千万蒲式耳玉米。小麦一路下跌，玉米却没有。'),
      N("Stratton, the biggest operator there, was cornering corn. Bad roads kept the farmers' corn from market. I prayed for a freeze.", '那里最大的炒家——我叫他斯特拉顿——正在逼空玉米。道路泥泞难行，农民的玉米运不到市场。我天天祈祷来一场冰冻。'),
    ] });

  lesson(h, { id: 'e06_corner', tag: ['THE TRAP', '陷阱'], tagColor: RED, title: ['Why He Could Not Just Buy Back', '为什么他不能直接买回'], music: 'tense',
    gest: ['explain', 'point', 'despair'],
    items: [
      { type: 'equation', at: 'L0@every', x: 1180, y: 320, size: 56, terms: [
        { t: '10,000,000 bu', zh: '一千万蒲式耳', at: 'L0@every' }, { t: '×', at: 'L0@every' }, { t: '1¢', zh: '每蒲式耳1美分', at: 'L0@cent' },
        { t: '=', at: 'L0@hundred' }, { t: '$100,000', zh: '十万美元', at: 'L0@hundred', hl: true }] },
      { type: 'flow', at: 'L1', x: 470, y: 430, w: 1420, bh: 200, gap: 70, size: 30, nodes: [
        { num: 1, en: 'He must buy back 10M bushels', zh: '他必须买回1000万蒲式耳', at: 'L1' },
        { num: 2, en: 'Stratton sells only at his own price', zh: '斯特拉顿只按自己的价格卖', at: 'L1@own' },
        { num: 3, en: 'Every bid pushes the price up on him', zh: '每一笔买单都在给自己抬价', at: 'L2', color: PINK }] },
      { type: 'note', at: 'L2@throat', x: 470, y: 690, w: 1420, h: 140, size: 32, fill: YEL, align: 'center', anim: 'slideU',
        en: '"Like cutting my own throat with my own knife." He needed other sellers.', zh: '“就像拿自己的刀割自己的喉咙。”他需要别的卖家。' }],
    lines: [
      N('I closed the wheat at a good profit. Corn was the problem. On ten million bushels, every cent is a hundred thousand dollars.', '我以可观的利润平掉了小麦。问题在玉米。一千万蒲式耳，每蒲式耳每差一美分，就是十万美元。'),
      N('Stratton knew he had me. If I bid for my corn, he would let me have it only at his own price.', '斯特拉顿知道他套住了我。如果我出价买回玉米，他只会按他自己定的价格卖给我。'),
      N('Every order I placed would push the price up on me, like cutting my own throat with my own knife.', '我下的每一张买单都会把价格推高来对付我自己，就像拿自己的刀割自己的喉咙。'),
    ] });

  photo({ id: 'e06_pit', src: `${PD}/chicago_board_of_trade_flash_1900_lawrence.jpg`, credit: 'Chicago Board of Trade in session, c.1900 · Geo. R. Lawrence (public domain)', music: 'tense',
    cap: ['The Chicago Board of Trade. Stratton also had oats "pretty well sewed up."', '芝加哥期货交易所。斯特拉顿同时也把燕麦“攥得很紧”。'], capW: 700,
    kb: [{ t: 0, x: 960, y: 540, z: 1.04 }, { t: 12, x: 1010, y: 500, z: 1.2 }],
    lines: [
      N('Stratton was also running a deal in oats. And pit gossip said the powerful Armour interests were not friendly to him.', '斯特拉顿同时还在做一笔燕麦交易。交易池里的传言说，势力强大的阿穆尔集团跟他不对付。'),
      N('So the Chicago traders, not Stratton, would have to sell me my corn. I only had to make them want to.', '所以，得让芝加哥的交易员们、而不是斯特拉顿，把玉米卖给我。我只需要让他们想卖。'),
    ] });

  // ---- the oats feint, on the floor ----
  shot({ id: 'e06_floor', set: 'floor', setOpts: { agitated: true, paperN: 24 }, trans: 'whip', music: 'tense',
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'L2', x: 760, y: 520, z: 1.18, dur: 1 }, { t: 'L3', x: 960, y: 540, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'trader', key: 'tr1', x: 520, y: 890, s: 1.15, pose: 'idle', expr: 'neutral',
        acts: [{ t: 'L1@broke', pose: 'point', expr: 'shock' }, { t: 'L2', pose: 'think', expr: 'sly' }, { t: 'L2@sold', pose: 'fist', expr: 'shout' }, { t: 'L3', pose: 'despair', expr: 'worry' }] },
      { id: 'generic', key: 'tr2', look: { hat: 'bowler', hatColor: '#2a2a2a', mus: 'thin' }, x: 880, y: 890, s: 1.15, flip: true, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L1@broke', pose: 'grab', expr: 'shock' }, { t: 'L2@sold', pose: 'wave', expr: 'shout' }, { t: 'L3', pose: 'shrug', expr: 'frown' }] }],
    items: [
      { type: 'table', at: 'L0', until: 'L2', x: 1150, y: 90, w: 730, widths: [0.52, 0.48], size: 28, bottom: 380,
        cols: [['His orders', '他的指令'], ['Size', '数量']],
        rows: [[['Buy corn at every ⅛¢ down', '玉米每跌⅛美分就买'], ['500,000 bu each', '每档50万蒲式耳']],
          [['Sell oats: 4 houses at once', '燕麦：四家行同时卖'], ['4 × 50,000 = 200,000 bu', '4×5万＝20万蒲式耳']]],
        rowAt: ['L0', 'L1'] },
      { type: 'sfx', at: 'L1@broke', until: 'L2', x: 760, y: 300, text: 'OATS BREAK!', zh: '燕麦暴跌！', size: 96, color: '#d6a441', font: 'cond' },
      { type: 'bubble', at: 'L2', until: 'L3', x: 220, y: 70, w: 600, kind: 'thought', en: 'Armour is after Stratton! Corn breaks next!', zh: '阿穆尔在对付斯特拉顿！下一个崩的就是玉米！', tx: 520, ty: 602 },
      { type: 'bubble', at: 'L2@sold', until: 'L3', x: 900, y: 170, w: 320, kind: 'shout', en: 'Sell corn!', zh: '卖玉米！', tx: 880, ty: 602 },
      { type: 'counter', at: 'L3', x: 1510, y: 520, from: 0, to: 6000000, dur: 2.2, size: 80, suffix: ' bu', color: GREEN,
        steps: [{ t: 'L3@last', v: 10000000, dur: 1 }], label: ['corn bought back', '已买回的玉米'] }],
    lines: [
      N('First I put in bids for five hundred thousand bushels of corn at every eighth of a cent down.', '首先，我挂好买单：玉米每跌八分之一美分，就买五十万蒲式耳。'),
      N('Then four houses each sold fifty thousand bushels of oats at the market, all at once. Oats broke.', '然后，四家经纪行同时按市价各卖出五万蒲式耳燕麦。燕麦应声下跌。'),
      N('The traders figured Armour was after Stratton, and corn would break next. They sold corn eagerly.', '交易员们断定阿穆尔在对付斯特拉顿，下一个崩的就是玉米。他们争先恐后地卖出玉米。'),
      N('I bought six million bushels in ten minutes. When their selling stopped, I took the last four million at the market.', '我在十分钟内买到了六百万蒲式耳。等他们的卖盘一停，我按市价买进了最后四百万。'),
    ] });

  lesson(h, { id: 'e06_oats', tag: ['TACTICS · THE OATS FEINT', '战术 · 燕麦佯攻'], title: ["Read the Crowd's Next Move", '读懂人群的下一步'], music: 'calm',
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      { type: 'flow', at: 'L0@break', x: 470, y: 220, w: 1420, bh: 150, gap: 60, size: 28, nodes: [
        { en: 'Oats break', zh: '燕麦下跌', at: 'L0@break' },
        { en: '"Armour is attacking Stratton!"', zh: '“阿穆尔在攻击斯特拉顿！”', at: 'L0@break+0.6' },
        { en: 'Corn must be next: SELL', zh: '下一个就是玉米：卖！', at: 'L0@sell', color: PINK }] },
      { type: 'table', at: 'L1', x: 470, y: 410, w: 860, widths: [0.48, 0.52], size: 28, bottom: 840,
        cols: [['Result', '结果'], ['Number', '数字']],
        rows: [[['Corn covered: 10M bu', '玉米回补：1000万蒲式耳'], ['Within ½¢ of the start', '与起点相差不到½美分']],
          [['Oats bait: 200,000 bu', '燕麦诱饵：20万蒲式耳'], ['Cost to cover: $3,000', '回补成本：3,000美元']],
          [['All grain trades, net', '全部谷物交易净额'], ['A loss of $25,000', '亏损2.5万美元']],
          [['Corn afterwards', '玉米随后'], ['Up 25¢ a bushel', '每蒲式耳涨25美分']]],
        rowAt: ['L1', 'L1@oats', 'L2', 'L2@later'], hl: [null, null, 'L2@loss', null] },
      { type: 'bars', at: 'L2', x: 1370, y: 410, w: 520, h: 430, title: ['Cost of getting out', '脱身的代价'], max: 2500000, vsize: 30,
        bars: [{ v: 25000, vl: '$25,000', en: 'His net loss', zh: '他的净亏损', at: 'L2@loss', color: GREEN },
          { v: 2500000, vl: '$2,500,000', en: '25¢ × 10M bu', zh: '25美分×1000万', at: 'L2@half', color: RED }] }],
    lines: [
      N('A professional plays for position, like a billiard player. I knew a break in oats would make the pit sell corn.', '职业交易者讲究占位，就像台球高手。我知道燕麦一跌，交易池里的人就会卖玉米。'),
      N('All ten million bushels came back within half a cent of where I began. The oats bait cost three thousand dollars to cover.', '一千万蒲式耳全部买回，价格与我开始时相差不到半美分。燕麦诱饵回补只花了三千美元。'),
      N('With the wheat profit, my net grain loss was twenty-five thousand. Corn later rose twenty-five cents: two and a half million, had I stayed short.', '算上小麦的盈利，这批谷物的净亏损只有两万五千美元。后来玉米涨了二十五美分：如果我还空着，那就是二百五十万美元。'),
    ] });

  // ---- Addison Cammack and St. Paul ----
  shot({ id: 'e06_cammack', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['ST. PAUL', 'THE MARKET'], ['IN THE 90s', 'STRONG'], ['RISING', 'RISING']], crowd: 3, ticker: false },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'joseph', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'cammack', z: 1.4, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.1, dur: 1 }, { t: 'L4', on: 'cammack', z: 1.35, dur: 1 }],
    cast: [
      { id: 'friend', key: 'joseph', x: 620, y: 890, s: 1.2, pose: 'explain', expr: 'grin',
        acts: [{ t: 'L1', pose: 'pointUp', expr: 'grin' }, { t: 'L2e', pose: 'shrug', expr: 'shock' }, { t: 'L3', pose: 'explainR', expr: 'frown' }, { t: 'L4@buying', pose: 'chin', expr: 'think' }] },
      { id: 'generic', key: 'cammack', look: { hair: '#c9c4ba', hairStyle: 'gray', mus: 'walrus', musColor: '#c9c4ba', age: 2, coat: '#2a2a30', vest: '#3a3a44', chain: true }, x: 1180, y: 890, s: 1.2, flip: true, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1e', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'point', expr: 'determined' }, { t: 'L3e', pose: 'cross', expr: 'neutral' }, { t: 'L4', pose: 'explain', expr: 'sly' }] },
      { id: 'clerk', key: 'billy', x: 1580, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral', acts: [{ t: 'L2', pose: 'relaxed', expr: 'shock' }, { t: 'L2e', pose: 'write', expr: 'neutral' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Addison Cammack, one of the ablest traders the Street ever saw, and the writer J. Arthur Joseph.', zh: '艾迪生·卡麦克——华尔街有史以来最能干的交易者之一，以及财经作家J.亚瑟·约瑟夫。', w: 700 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 280, y: 60, w: 680, en: 'The Old Man is selling St. Paul: 1,500 shares every ⅜ of a point up!', zh: '“老头子”在卖圣保罗：每涨⅜点就卖1,500股！', tx: 620, ty: 590 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 860, y: 60, w: 640, en: 'Billy, buy 1,500 St. Paul every ⅜ up.', zh: '比利，每涨⅜就买1,500股圣保罗。', tx: 1180, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 360, y: 80, w: 520, kind: 'shout', en: "Don't you mean SELL? Aren't you bearish?", zh: '你是说“卖”吧？你不是看空吗？', tx: 620, ty: 590 },
      { type: 'bubble', at: 'L4', x: 860, y: 60, w: 660, en: "That's why I'm buying. When the selling stops, tell me. Instantly!", zh: '正因如此我才买。卖盘一停，马上告诉我！', tx: 1180, ty: 590 }],
    lines: [
      N('"Don\'t sell stocks when the sap is running up the trees," Addison Cammack used to say. But late in one bull market, he was bearish.', '“树液往上涌的时候，别卖股票。”艾迪生·卡麦克常这么说。但在某次牛市的末期，他看空了。'),
      L('friend', 'Mr. Cammack, the Old Man, William Rockefeller, is selling St. Paul! Fifteen hundred shares every three-eighths up!', '卡麦克先生，“老头子”威廉·洛克菲勒在卖圣保罗！每涨八分之三点就卖一千五百股！', { speak: 'joseph' }),
      L('keene', 'Billy, go over to the board and buy fifteen hundred St. Paul every three-eighths up.', '比利，去交易台，每涨八分之三点，就买进一千五百股圣保罗。', { speak: 'cammack' }),
      L('friend', "Don't you mean sell? Aren't you bearish?", '你是说卖吧？你不是看空吗？', { speak: 'joseph' }),
      L('keene', "Yes. That's why I'm buying. When the selling stops, let me know. Instantly!", '是的。正因如此我才买。卖盘一停，马上告诉我。立刻！', { speak: 'cammack' }),
    ] });

  lesson(h, { id: 'e06_stpaul', tag: ['USING INFORMATION', '如何使用信息'], title: ['Cammack Turns a Bear Tip into Ammunition', '卡麦克把利空消息变成弹药'], titleSize: 50, music: 'tense',
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 960, h: 620, xr: [0, 10], yr: [35, 115], yTicks: [40, 60, 80, 100], illustrative: true, cursorFmt: 'int',
        title: ['St. Paul, late in a bull market', '圣保罗铁路，牛市末期'],
        series: [{ pts: [[0, 92], [1, 92.75], [2, 93.5], [3, 94.25], [4, 95], [4.6, 94.5], [5.4, 88], [6.4, 76], [7.4, 64], [8.4, 54], [9.3, 47], [10, 44]], color: BLUE,
          draw: [['L0', 4], ['L1', 5], ['L1@sold', 8], ['L1@44', 11]] }],
        marks: [
          { x: 2, y: 93.5, at: 'L0@took', en: 'Insider sells 1,500 every ⅜ up. Cammack takes it all', zh: '内部人每涨⅜卖1,500股，卡麦克全部接下', dx: -90, dy: 50, w: 300 },
          { x: 4, y: 95, at: 'L1', en: 'Selling stops: he holds ≈60,000', zh: '抛售停止：他手握约6万股', dx: -150, dy: -120, w: 260 },
          { x: 10, y: 44, at: 'L1@44', en: 'Down to 44', zh: '跌到44', dx: -430, dy: -30, w: 260, fill: PINK }] },
      { type: 'note', at: 'L1e', x: 1470, y: 220, w: 420, h: 300, size: 30, fill: MINT, anim: 'slideU',
        en: 'The tip told him WHEN to begin, and gave him the ammunition.', zh: '这条消息告诉他何时动手，还送上了弹药。' },
      { type: 'note', at: 'L2', x: 1470, y: 550, w: 420, h: 290, size: 28, fill: PINK, anim: 'slideU',
        en: 'Feints and bear raids are illegal manipulation today. Study them only to recognise them.', zh: '佯攻和打压如今属于违法的市场操纵。学习它们只为识别它们。' }],
    lines: [
      N("Why buy? The insider's steady selling was a big supply of stock. Cammack took it all, fifteen hundred shares at a time.", '为什么要买？内部人源源不断的抛售，就是一大批现成的股票供应。卡麦克把它全部接下，每次一千五百股。'),
      N('When the selling stopped, he held about sixty thousand shares. He sold them all, and more, as a lever on the whole market. St. Paul fell to 44.', '抛售一停，他手里已有大约六万股。他把这些全部卖出，还加卖了更多，用来撬动整个市场。圣保罗一路跌到了44。'),
      N("Feints like my oats sale, and raids like Cammack's, are illegal today. We study them only to recognise them.", '像我卖燕麦那样的佯攻、像卡麦克那样的打压，如今都是违法的。我们研究它们，只是为了识别它们。'),
    ] });

  // ---- Palm Beach: Percy Thomas wiped out ----
  photo({ id: 'e06_palm', src: `${PD}/palmbeach_royal_poinciana_1910_detroit.jpg`, credit: 'Royal Poinciana Hotel, Palm Beach, c.1910–20 · Detroit Publishing Co. (public domain)', music: 'calm', trans: 'iris',
    cap: ['Palm Beach. The talk ashore: Percy Thomas is wiped out in March cotton.', '棕榈滩。岸上的话题：珀西·托马斯在三月棉花上输光了。'], capW: 700,
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 12, x: 920, y: 520, z: 1.15 }],
    lines: [
      N('I cruised Florida waters without a care. Ashore at Palm Beach, everyone said Percy Thomas, the famous cotton operator, had lost every cent.', '我在佛罗里达海域巡游，无忧无虑。在棕榈滩上岸时，人人都在说：著名的棉花投机商珀西·托马斯输得一分不剩。'),
      N('I admired him. His old firm, Sheldon and Thomas, had failed for millions in a cotton corner. He came back and repaid his creditors in full, with interest.', '我很钦佩他。他原来的谢尔登与托马斯公司在一次棉花逼空中倒闭，亏了几百万。他东山再起，连本带息还清了所有债主。'),
    ] });

  // ---- July cotton ----
  lesson(h, { id: 'e06_july', tag: ['JULY COTTON · LATE MAY', '七月棉花 · 五月下旬'], title: ['Buying From a Crowd of Sellers', '从一群卖家手里买货'], music: 'rag',
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      { type: 'bars', at: 'L1', x: 470, y: 220, w: 660, h: 620, title: ['His July cotton (bales)', '他的七月棉花（包）'], max: 140000, vsize: 32,
        bars: [{ v: 100000, vl: '100,000', en: 'Bought easily', zh: '轻松买到', at: 'L1@hundred', color: '#c9a26a' },
          { v: 120000, vl: '120,000', en: 'Every floating contract', zh: '所有流通合约', at: 'L1@floating', color: GREEN }] },
      { type: 'note', at: 'L0', x: 1170, y: 220, w: 720, h: 150, size: 30, fill: YEL, anim: 'slideU',
        en: 'Everybody is selling July. But July shorts must buy back soon.', zh: '人人都在卖七月合约。但七月空头很快就得买回。' },
      { type: 'note', at: 'L2', x: 1170, y: 390, w: 720, h: 90, size: 30, fill: MINT, align: 'center', anim: 'pop',
        en: 'Then: up 40 to 50 points a day', zh: '随后：每天上涨40到50点' },
      { type: 'equation', at: 'L2@cotton', x: 1530, y: 570, size: 44, terms: [{ t: '1 pt = 1/100¢ a lb', zh: '1点＝每磅0.01美分', at: 'L2@cotton' }] },
      { type: 'equation', at: 'L2@five', x: 1530, y: 680, size: 44, terms: [{ t: '× 500 lb = 5¢ a bale', zh: '每包约500磅', at: 'L2@five' }] },
      { type: 'equation', at: 'L2@each', x: 1530, y: 790, size: 44, terms: [{ t: '× 120,000 = $6,000 / pt', zh: '整个仓位每点6,000美元', at: 'L2@each', hl: true }] }],
    lines: [
      N('Back in New York, everybody was bearish and selling July cotton. But the July shorts had little time left to cover.', '回到纽约，人人都看空棉花，都在卖七月合约。可七月合约的空头已经没多少时间回补了。'),
      N('So I bought a hundred thousand bales, easily, from so many sellers. I kept on until I held every floating contract: a hundred and twenty thousand.', '于是我买了十万包，货来得很容易，卖家太多了。我一直买，直到把市面上流通的合约全部收入囊中：十二万包。'),
      N('Then it rose forty to fifty points a day. A cotton point is five cents a bale, so on my line each point was six thousand dollars.', '随后它每天上涨四十到五十点。棉花一点相当于每包五美分，所以在我的仓位上，每一点就是六千美元。'),
    ] });

  shot({ id: 'e06_saturday', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['ORDERS', 'JULY COTTON', 'LIVERPOOL', 'HIS LINE'], ['—', 'SATURDAY', 'MONDAY', '120,000'], ['', 'LAST 10 MIN.', 'PARITY: +20', 'BALES']],
      boardSeq: [{ t: 'L1@four', r: 1, c: 0, v: '4 × 5,000' }, { t: 'L1@thirty', r: 1, c: 1, v: '+30 PTS' }, { t: 'L1@top', r: 2, c: 1, v: 'AT THE TOP' }, { t: 'L1e', r: 1, c: 3, v: '140,000' },
        { t: 'L2@fifty', r: 1, c: 2, v: '+50 PTS' }, { t: 'L3@sell', r: 2, c: 3, v: 'TO SELL' }], ticker: false },
    cam: [{ t: 0, x: 960, y: 480, z: 1.0 }, { t: 'L1', x: 760, y: 400, z: 1.15, dur: 1 }, { t: 'L2', x: 1160, y: 400, z: 1.15, dur: 1.2 }, { t: 'L3', on: 'larry', z: 1.4, dur: 1.2 }],
    cast: [
      { id: 'larryHat', key: 'larry', x: 600, y: 890, s: 1.2, pose: 'phone', expr: 'think', prop: { t: 'phone' },
        acts: [{ t: 'L1', pose: 'phone', expr: 'determined' }, { t: 'L1@top', pose: 'fist', expr: 'grin' }, { t: 'L2', pose: 'pointUp', expr: 'smile' }, { t: 'L3', pose: 'chin', expr: 'worry' }] },
      { id: 'clerk', x: 1320, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral',
        acts: [{ t: 'L1@thirty', pose: 'point', expr: 'shock' }, { t: 'L2', pose: 'write', expr: 'neutral' }, { t: 'L2@fifty', pose: 'up', expr: 'shock' }, { t: 'L3', pose: 'write', expr: 'neutral' }] }],
    lines: [
      N('Ten days in, I had to learn if any July cotton was left for sale. On Saturday I waited until the last ten minutes.', '交易进行了十天，我得弄清楚市场上还有没有七月棉花可买。周六那天，我一直等到收盘前最后十分钟。'),
      N('I sent four orders at once, five thousand bales each, at the market. The price jumped thirty points and closed at the top.', '然后我同时发出四张市价单，每张五千包。价格跳涨了三十点，收在当天最高。'),
      N('Monday, Liverpool should have opened twenty points up, to match us. It opened fifty up. I was on the line of least resistance.', '周一，利物浦本应高开二十点来与纽约持平。结果它高开了五十点。我站在了最小阻力线上。'),
      N('But now I had a hundred and forty thousand bales to sell, and no stampede of shorts.', '可现在我有十四万包要卖，眼前却看不到空头争相回补的踩踏。'),
    ] });

  shot({ id: 'e06_world', set: 'street', setOpts: { walkers: 6 }, trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'friend', z: 1.3, dur: 1 }, { t: 'L1', on: 'larry', z: 1.35, dur: 1 }, { t: 'L2', x: 1150, y: 440, z: 1.05, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.0, dur: 1 }],
    cast: [
      { id: 'larryHat', key: 'larry', x: 650, y: 890, s: 1.2, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L0e', pose: 'shrug', expr: 'think' }, { t: 'L2', pose: 'hold', expr: 'shock' }, { t: 'L3', pose: 'point', expr: 'determined' }, { t: 'L3@sold', pose: 'up', expr: 'grin' }] },
      { id: 'friend', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'grin', until: 'L2', acts: [{ t: 'L1', pose: 'shrug', expr: 'sly' }] }],
    items: [
      { type: 'bubble', at: 'L0', until: 'L1', x: 900, y: 60, w: 640, en: 'That was quite a story in the World this morning!', zh: '今天早上《世界报》上那篇报道可真够瞧的！', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 340, y: 70, w: 560, en: 'I never see the World. What is the story?', zh: '我从来不看《世界报》。什么报道？', tx: 650, ty: 590 },
      { type: 'newspaper', at: 'L2', until: 'L3', x: 1260, y: 420, w: 760, h: 520, paper: 'The World', en: 'JULY COTTON CORNERED BY LARRY LIVINGSTON', zh: '拉瑞·利文斯顿逼空七月棉花', size: 54 },
      { type: 'counter', at: 'L3', x: 1300, y: 330, from: 140000, to: 0, dur: 2.4, size: 96, suffix: ' bales', color: RED, label: ['10:00 → 10:10 a.m.: all sold', '上午10:00→10:10：全部卖出'] },
      { type: 'stamp', at: 'L3@top', x: 1300, y: 640, en: 'SOLD AT THE TOP', zh: '在高点卖光', size: 60, rot: -8 }],
    lines: [
      L('friend', 'That was quite a story in the World this morning!', '今天早上《世界报》上那篇报道可真够瞧的！', { speak: 'friend' }),
      L('larry', 'I never see the World. What is the story?', '我从来不看《世界报》。什么报道？', { speak: 'larry' }),
      N('Front page: July Cotton Cornered by Larry Livingston. I had nothing to do with it. Cabled abroad, it sent Liverpool wild.', '头版大标题：《拉瑞·利文斯顿逼空七月棉花》。这事跟我毫无关系。消息电传到海外，利物浦市场一片疯狂。'),
      N("Our market opened at ten. By ten past ten I had sold all hundred and forty thousand bales, mostly at the day's top prices.", '我们的市场十点开盘。到十点十分，十四万包我已全部卖出，大部分卖在当天的最高价。'),
    ] });

  lesson(h, { id: 'e06_absorb', tag: ['SELLING A BIG LINE', '大仓位怎么出货'], title: ['A Big Line Cannot Sneak Out', '大仓位无法悄悄溜走'], music: 'calm',
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'bars', at: 'L0', x: 470, y: 220, w: 640, h: 620, title: ['Selling 140,000 bales', '卖出14万包'], max: 140000, vsize: 32,
        bars: [{ v: 140000, vl: '140,000', en: 'His line', zh: '他的仓位', at: 'L0', color: '#c9a26a' },
          { v: 55000, vl: '50–60,000', en: 'What the market could take', zh: '市场承接得了的量', at: 'L0@fifty', color: RED }] },
      { type: 'rule', at: 'L1@absorb', x: 1150, y: 220, w: 740, h: 170, n: '1', size: 30, en: "Sell when the market can absorb your line, not when you wish. Don't hesitate.", zh: '在市场接得住时卖，而不是在你想卖时卖。不要犹豫。' },
      { type: 'rule', at: 'L2@run', x: 1150, y: 410, w: 740, h: 170, n: '2', size: 30, en: "Don't run the price up on the bears: it shrinks the market you need.", zh: '别去抬价逼空头：那会缩小你需要的承接力。' },
      { type: 'stamp', at: 'L2@Cotton', x: 1520, y: 700, en: 'COTTON KING?', zh: '棉花大王？', size: 64, rot: -8, color: BROWN }],
    lines: [
      N('A big cotton man said the market could not take over fifty or sixty thousand bales without breaking. He called my deal mighty slick.', '一位棉花界的大人物说，这个市场最多只能接五六万包而不崩。他说我这一手“真够漂亮的”。'),
      N('It was luck. But a big line cannot sneak out. You sell when the market can absorb it, and you do not hesitate.', '那是运气。但大仓位确实无法悄悄溜走。你要在市场接得住的时候卖，而且绝不能犹豫。'),
      N("Nor can you run the price up on the bears. The papers called me the Cotton King, a crown I hadn't earned.", '你也不能去抬价逼空头。报纸称我为“棉花大王”，这顶王冠我受之有愧。'),
    ] });

  // ======================= Chapter XII =======================
  chapter('Chapter XII · A Magnetic Personality', '第十二章 · 魅力人物');
  // ---- the book agent (the book says he came "not long before" Percy Thomas) ----
  shot({ id: 'e06_agent', set: 'office', trans: 'dip', music: 'rag',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'UNION PAC', 'STEEL'], ['CLOSED', 'CLOSED', 'CLOSED', 'CLOSED'], ['', '', '', '']], ticker: false },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'agent', z: 1.4, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 640, y: 890, s: 1.2, pose: 'write', expr: 'neutral', prop: { t: 'pen' },
        acts: [{ t: 'L0e', pose: 'chin', expr: 'shock' }, { t: 'L1', pose: 'hold', expr: 'sly' }, { t: 'L2', pose: 'relaxed', expr: 'shock' }, { t: 'L3', pose: 'shrug', expr: 'smile' }] },
      { id: 'generic', key: 'agent', look: { hat: 'bowler', hatColor: '#2a2a2a', coat: '#4a3a2e', vest: '#6a5a40', mus: 'thin', tieColor: '#2f5d8a' }, x: 1250, y: 890, s: 1.2, flip: true, pose: 'holdR', expr: 'smile', prop: { t: 'paper', text: 'CONTRACT · $500' },
        acts: [{ t: 'L1@refused', pose: 'shrug', expr: 'smile' }, { t: 'L1@tore', pose: 'grab', expr: 'grin' }, { t: 'L2', pose: 'explain', expr: 'smile' }, { t: 'L3', pose: 'wave', expr: 'grin' }] }],
    items: [
      { type: 'caption', at: 0.3, en: "Harding's office, just after the close. A stranger has got past the door.", zh: '哈丁的营业部，刚收盘。一个陌生人闯过了门卫。', w: 640 },
      { type: 'equation', at: 'L1@third', until: 'L2', x: 1500, y: 170, size: 50, terms: [{ t: '⅓ × $500', zh: '三分之一佣金', at: 'L1@third' }, { t: '= $166.66', at: 'L1@sixty' }] },
      { type: 'equation', at: 'L1@two', until: 'L2', x: 1500, y: 290, size: 50, terms: [{ t: 'His offer: $200 cash', zh: '他出价200美元现金', at: 'L1@two', hl: true }] },
      { type: 'sfx', at: 'L1@tore', until: 'L2', x: 1250, y: 380, text: 'RRRIP!', zh: '撕掉了！', size: 90, color: '#d6a441', font: 'cond' },
      { type: 'bubble', at: 'L2', until: 'L3', x: 900, y: 60, w: 640, en: 'Because you did not whine. You took it the way I would have taken it myself.', zh: '因为你没有抱怨。你的态度，和我自己碰上这事时一模一样。', tx: 1250, ty: 590 },
      { type: 'note', at: 'L3@Harding', x: 1180, y: 100, w: 700, h: 110, size: 32, fill: PINK, align: 'center', en: 'Ed Harding: $2,000 of books', zh: '埃德·哈丁：买了2,000美元的书' },
      { type: 'note', at: 'L3@excuse', x: 80, y: 90, w: 640, h: 170, size: 28, fill: YEL, en: 'A man can excuse his mistakes only by capitalising them to his later profit.', zh: '人只有把错误转化为日后的收益，才能为错误开脱。' }],
    lines: [
      N('Around then, a book agent got past my guards and talked me into signing for a five-hundred-dollar set of Walter Scott.', '大约那时，一个推销书的人闯过了门卫，说动我签下了一套五百美元的司各特文集。'),
      N('His commission was a third, a hundred and sixty-six dollars. I offered him two hundred cash for the contract. He refused, then tore it up.', '他的佣金是三分之一，一百六十六美元。我出两百美元现金买回那份合同。他拒绝了，然后把合同撕了。'),
      L('clerk', 'Because you did not whine. You took it the way I would have taken it myself.', '因为你没有抱怨。你的态度，和我自己碰上这事时一模一样。', { speak: 'agent' }),
      N("He then sold Ed Harding two thousand dollars' worth of books. A man can excuse a mistake only by profiting from it later.", '后来他又卖给埃德·哈丁两千美元的书。一个人要为错误开脱，只有靠日后从中获益。'),
    ] });

  // ---- Percy Thomas: the alliance refused, then the persuasion ----
  shot({ id: 'e06_thomas', set: 'study', setOpts: { night: true, lampX: 1650 }, trans: 'wipe', music: 'dark',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0@alliance', on: 'percy', z: 1.3, dur: 1.2 }, { t: 'L1', on: 'larry', z: 1.4, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 },
      { t: 'L3', on: 'percy', z: 1.4, dur: 1.4 }, { t: 'L4', on: 'larry', z: 1.45, dur: 1.4 }],
    cast: [
      { id: 'percy', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'smile',
        acts: [{ t: 'L0@alliance', pose: 'explainR', expr: 'smile' }, { t: 'L1e', pose: 'shrug', expr: 'neutral' }, { t: 'L2@magnetic', pose: 'explain', expr: 'grin' },
          { t: 'L3', pose: 'explainR', expr: 'determined' }, { t: 'L3@figures', pose: 'pointUp', expr: 'smile' }, { t: 'L4', pose: 'relaxed', expr: 'smile' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'relaxed', expr: 'neutral',
        acts: [{ t: 'L0e', pose: 'chin', expr: 'think' }, { t: 'L1', pose: 'explain', expr: 'determined' }, { t: 'L2', pose: 'cross', expr: 'smile' }, { t: 'L3', pose: 'chin', expr: 'think' },
          { t: 'L4', pose: 'chin', expr: 'worry' }, { t: 'L4@covered', pose: 'despair', expr: 'tired' }, { t: 'L4@long', pose: 'hold', expr: 'determined' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Percy Thomas: famous cotton operator, wiped out, planning his comeback.', zh: '珀西·托马斯：著名棉花投机商，刚刚输光，正筹划东山再起。', w: 640 },
      { type: 'bubble', at: 'L0@alliance', until: 'L1', x: 920, y: 60, w: 620, en: 'Let us work together: my information first, your trading.', zh: '我们合作吧：消息我先给你，交易由你来做。', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 330, y: 60, w: 640, en: 'If I fool myself, I alone suffer, and I pay the bill at once. I play a lone hand.', zh: '如果我自己骗了自己，只有我一个人受罪，而且当场付账。我单枪匹马。', tx: 680, ty: 590 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 880, y: 60, w: 700, en: 'My 10,000 correspondents across the South have proved reliable time and again. My figures are my own. Yours are public property.', zh: '我在南方的一万名通讯员屡试不爽。我的数字是独家的，你的是人人都有的。', tx: 1250, ty: 590 },
      { type: 'counter', at: 'L4@sixty', x: 420, y: 250, from: 0, to: 60000, dur: 1.4, size: 80, suffix: ' bales', color: RED, label: ['long cotton, all at once', '一次买足的棉花多头'] }],
    lines: [
      N('He was the first man to make me act against my wishes. Percy Thomas was the second. He proposed an alliance.', '他是第一个让我违背本意行事的人。珀西·托马斯是第二个。他来找我，提议结盟。'),
      L('larry', 'No. If I fool myself, I alone suffer, and I pay the bill at once. I play a lone hand.', '不。如果我自己骗了自己，只有我一个人受罪，而且当场付账。我一向单枪匹马。', { speak: 'larry' }),
      N('Yet I saw a lot of him, the most magnetic man I ever met. He was bullish on cotton. I was short.', '可我还是常和他见面，他是我见过的最有魅力的人。他看涨棉花，我却做着空。'),
      L('percy', 'My ten thousand correspondents throughout the South have proved reliable time and again. My figures are my own. Yours are public property.', '我在南方的一万名通讯员，一次又一次证明是可靠的。我的数字是独家的，你的数字是人人都有的。', { speak: 'percy' }),
      N("He couldn't convince me against my convictions. Worse, he made me uncertain, and I stopped thinking for myself. I covered, and went long sixty thousand bales.", '他没法让我违背自己的信念。更糟的是，他让我动摇了，我不再独立思考。我平掉空单，转手做多了六万包。'),
    ] });

  lesson(h, { id: 'e06_reverse', tag: ['THE FATAL MISTAKE', '致命错误'], tagColor: RED, title: ['He Sold the Winner and Kept the Loser', '他卖掉盈利的，留下亏损的'], music: 'dark',
    gest: ['explain', 'fist', 'point', 'despair', 'explain'], expr: [null, null, null, 'sad', 'tired'],
    items: [
      { type: 'bars', at: 'L0', x: 470, y: 220, w: 700, h: 620, title: ['His cotton line (bales)', '他的棉花仓位（包）'], max: 440000, vsize: 30,
        bars: [{ v: 60000, vl: '60,000', en: 'All at once', zh: '一次买足', at: 'L0@whole', color: '#c9a26a' },
          { v: 150000, vl: '150,000', en: 'To hold the price', zh: '为了托价', at: 'L1@fifty', color: RED },
          { v: 440000, vl: '440,000', en: 'Even in Liverpool', zh: '连利物浦也买', at: 'L3@four', color: RED }] },
      { type: 'table', at: 'L2', x: 1210, y: 220, w: 680, widths: [0.24, 0.38, 0.38], size: 28, bottom: 600,
        cols: [['', ''], ['Cotton', '棉花'], ['Wheat', '小麦']],
        rows: [[['Showed', '账面'], ['A loss', '亏损'], ['A profit', '盈利']],
          [['He', '他'], ['Kept it, bought more', '留着，还加仓'], ['Sold it', '卖掉了']],
          [['Then', '后来'], ['Sold out at 440,000', '44万包时清仓'], ['+20¢: ≈$8M missed', '涨20美分：错过约800万']]],
        rowAt: ['L2', 'L2@kept', 'L3'], hl: [null, 'L2@sold', 'L3'] },
      { type: 'note', at: 'L2e', until: 'L4', x: 1210, y: 630, w: 680, h: 200, size: 30, fill: YEL, anim: 'slideU',
        en: 'Always sell what shows you a loss and keep what shows you a profit.', zh: '永远卖掉让你亏损的，留住让你盈利的。' },
      { type: 'stamp', at: 'L4@nine', x: 1550, y: 720, en: 'STAKE: 9/10 GONE', zh: '九成以上本钱没了', size: 58, rot: -8 }],
    lines: [
      N('My most asinine play: I took my whole line at once, without probing, and the market did not go my way.', '这是我职业生涯中最愚蠢的一手：我一次就买足了整个仓位，没有先试探。而市场并没有朝我的方向走。'),
      N('So I bought more to hold the price up: a hundred and fifty thousand bales. I was also long wheat, at a fine profit.', '于是我继续加仓来托住价格，一直加到十五万包。同时我还持有小麦多头，账面利润可观。'),
      N('Feeling overloaded, I kept the cotton, which showed a loss, and sold the wheat, which showed a profit. Wheat rose twenty cents.', '我觉得仓位太重，于是留下了亏损的棉花，卖掉了盈利的小麦。随后小麦涨了二十美分。'),
      N('By my reckoning, about eight million dollars never made. And I kept buying cotton, even in Liverpool, to four hundred and forty thousand bales.', '按我的估算，大约八百万美元就这样没赚到。而我还在继续买棉花，连利物浦也买，一直买到四十四万包。'),
      N('I sold out, with more than nine tenths of my stake gone. A millionaire for less than a year, I sold my two yachts.', '我清了仓，九成以上的本钱没了。当了不到一年的百万富翁，我卖掉了两艘游艇。'),
    ] });

  // ---- the sable coat: making the market pay a bill ----
  shot({ id: 'e06_sable', set: 'office', trans: 'whip', music: 'rag',
    setOpts: { board: [['BOB KEOWN', 'NEXT MAN', 'THE COAT'], ['', '', ''], ['', '', '']], ticker: false,
      boardSeq: [{ t: 'L1@sable', r: 1, c: 2, v: '$10,000 SABLE' }, { t: 'L2@five', r: 1, c: 0, v: 'SHORT 5,000 STEEL' }, { t: 'L2@two', r: 2, c: 0, v: '+2½ = $12,500?' },
        { t: 'L3@stopped', r: 2, c: 0, v: '−1½ = −$7,500' }, { t: 'L3@Union', r: 1, c: 1, v: 'LONG UNION PAC' }, { t: 'L3@eighteen', r: 2, c: 1, v: '−$1,800' },
        { t: 'L4@thirty', r: 2, c: 2, v: 'COST: $30–40,000' }, { t: 'L4@Chicago', r: 1, c: 2, v: 'SOLD TO CHICAGO' }] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L2', on: 'bob', z: 1.35, dur: 1.2 }, { t: 'L3', x: 960, y: 420, z: 1.08, dur: 1.2 }, { t: 'L4', x: 960, y: 500, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'trader', key: 'bob', x: 620, y: 890, s: 1.2, pose: 'hips', expr: 'grin',
        acts: [{ t: 'L2', pose: 'pointUp', expr: 'laugh' }, { t: 'L2@Steel', pose: 'point', expr: 'sly' }, { t: 'L3', pose: 'despair', expr: 'shock' }, { t: 'L4', pose: 'shrug', expr: 'sad' }] },
      { id: 'harding', x: 1220, y: 890, s: 1.15, flip: true, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L2e', pose: 'write', expr: 'neutral' }, { t: 'L3', pose: 'shrug', expr: 'smile' }] },
      { id: 'larry', x: 1620, y: 890, s: 1.15, flip: true, pose: 'hold', expr: 'smile', at: 'L4', prop: { t: 'money' }, acts: [{ t: 'L4@Chicago', pose: 'shrug', expr: 'laugh' }] }],
    items: [
      { type: 'note', at: 'L0', until: 'L1', x: 560, y: 120, w: 800, h: 120, size: 32, fill: PINK, align: 'center', en: 'Illness, then an urgent need: $200,000 cash', zh: '先是生病，接着急需二十万美元现金' },
      { type: 'bubble', at: 'L2', until: 'L3', x: 260, y: 60, w: 720, en: "I shall let the stock market buy it for me! Sell 5,000 Steel. It ought to go down 10 points. I'll take 2½.", zh: '我要让股市替我买单！卖空5,000股钢铁。它至少该跌10点。我只拿2½点。', tx: 620, ty: 590 }],
    lines: [
      N('Then came illness, and an urgent need for two hundred thousand dollars cash. I decided the market would pay it.', '接着我病了，又急需二十万美元现金。我决定让股市来付这笔钱。'),
      N("I had seen that game. In Harding's office, Bob Keown once wanted a ten-thousand-dollar Russian sable coat.", '这种把戏我见过。在哈丁的营业部，鲍勃·基翁曾想要一件价值一万美元的俄国紫貂皮大衣。'),
      L('trader', "I shall let the stock market buy it for me! Sell five thousand Steel. It ought to go down ten points. I'll take two and a half.", '我要让股市替我买这件大衣！卖空五千股钢铁。它至少该跌十点。我只拿两点半就好。', { speak: 'bob' }),
      N('Steel went up, and he stopped his loss at a point and a half. The next man lost eighteen hundred dollars in Union Pacific.', '钢铁却涨了，他在亏一个半点时止损。下一个人在联合太平洋上亏了一千八百美元。'),
      N('The coat cost the office thirty or forty thousand dollars. When I finally went to buy it, a Chicago man had.', '这件大衣让整个营业部赔了三四万美元。等我自己去买时，它已经被一个芝加哥人买走了。'),
    ] });

  lesson(h, { id: 'e06_bill', tag: ['WHY IT FAILS', '为什么会失败'], title: ['Never Make the Market Pay Your Bills', '永远别指望市场替你付账'], titleSize: 50, music: 'calm',
    gest: ['explain', 'point'],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 220, w: 1420, bh: 190, gap: 50, size: 28, nodes: [
        { num: 1, en: 'A bill, due by a date', zh: '一笔有期限的账单', at: 'L0@bill' },
        { num: 2, en: "Needs profit NOW: can't wait for conditions", zh: '现在就要赚钱：等不起形势', at: 'L0@wait' },
        { num: 3, en: 'Hope replaces judgment', zh: '希望取代了判断', at: 'L0@hopes', color: PINK },
        { num: 4, en: '"Risk 2 to make 2" feels even. It is not', zh: '“亏2点赚2点”看似对等，其实不然', at: 'L1', color: PINK }] },
      { type: 'chart', at: 'L1', x: 470, y: 450, w: 960, h: 390, xr: [0, 12], yr: [-4, 3], yTicks: [-2, 0, 2], ySuf: ' pts', illustrative: true, cursorLabel: false,
        title: ['Buying near a bull-market top', '在牛市顶部附近买入'],
        hlines: [{ v: 2, at: 'L1@make', color: GREEN, en: 'Hope: +2', zh: '期望：+2', labelX: 0.2 }, { v: -2, at: 'L1@risks', color: RED, en: 'Stop: −2', zh: '止损：−2', below: true, labelX: 0.2 }],
        series: [{ pts: [[0, -2.2], [1.5, -1.4], [3, 0], [4, 0.9], [5, 1.4], [6, 0.4], [7, -0.8], [8, -2], [8.6, -2.4]], color: BLUE, draw: [['L1', 2], ['L1@even', 4], ['L1@top', 8]] }],
        marks: [{ x: 3, y: 0, at: 'L1', en: 'Buys near the top', zh: '在顶部附近买入', dx: 60, dy: -150, w: 260 },
          { x: 8, y: -2, at: 'L1@top', en: 'Stopped out', zh: '止损出局', dx: 20, dy: -150, w: 260, fill: PINK }] },
      { type: 'note', at: 'L1e', x: 1470, y: 450, w: 420, h: 390, size: 30, fill: YEL, anim: 'slideU',
        en: 'Of all Wall Street hoodoos, making the market pay a bill is the busiest.', zh: '在华尔街所有的魔咒里，指望市场替你付账是最常见的一个。' }],
    lines: [
      N('Why does this fail? A man with a bill to pay needs his profit now. He cannot wait for conditions, so he hopes, and he gambles.', '为什么会失败？一个要付账的人，现在就需要利润。他等不起形势成熟，于是只能指望，只能去赌。'),
      N('He risks two points to make two, and calls it an even bet. It is not, least of all when he buys near a bull-market top.', '他冒两点的风险去赚两点，还以为这是一半对一半的赌局。其实不是，尤其是在牛市顶部附近买入的时候。'),
    ] });

  photo({ id: 'e06_debt', src: `${PD}/nyse_floor_sweeping_1908.jpg`, credit: 'Men sweeping up the floor of the stock exchange, 1908 · Library of Congress (public domain)', music: 'dark', trans: 'fade',
    cap: ['1908: men sweep up the floor of the stock exchange.', '1908年：工人在清扫证券交易所的大厅。'], capW: 600,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 9, x: 960, y: 560, z: 1.14 }],
    lines: [N('That folly finished me. I lost what the cotton had left me, kept on trading and losing, and went into debt. I stayed in debt from then on.', '这一蠢行彻底击垮了我。我输掉了棉花剩给我的那点钱，又继续交易、继续亏，最后欠下了债。从此我一直负债。')] });

  // ---- summary ----
  const R = (n, at, en, zh, row) => ({ type: 'rule', at, x: 470, y: 220 + row * 124, w: 1420, h: 110, n: String(n), size: 30, en, zh });
  lesson(h, { id: 'e06_takeaway', tag: ['TAKEAWAYS', '要点'], title: ['What Episode Six Teaches', '第六集讲了什么'], music: 'calm',
    gest: ['explain', 'pointUp'],
    items: [
      R(1, 'L0@Plan', 'Plan the exit before you enter: a big line cannot sneak out.', '进场前先想好出路：大仓位无法悄悄溜走。', 0),
      R(2, 'L0@read', 'Read the crowd: how will other traders react to what they see?', '读懂人群：别人看到这一幕会怎么做？', 1),
      R(3, 'L1', 'Play a lone hand. Never let a brilliant talker think for you.', '单枪匹马。绝不让能说会道的人替你思考。', 2),
      R(4, 'L1@Sell', 'Sell what shows a loss; keep what shows a profit.', '卖掉亏损的，留住盈利的。', 3),
      R(5, 'L1@never', 'Never ask the market to pay a bill.', '永远别指望市场替你付账。', 4)],
    lines: [
      N('Episode six in brief. Plan your way out of a big line before you need it, and read how other traders will react.', '第六集小结。大仓位要在需要之前就想好出路，还要读懂别的交易者会如何反应。'),
      N('Trust your own reading, not a magnetic talker. Sell the loser, keep the winner, and never ask the market to pay a bill.', '相信自己的判断，而不是有魅力的说客。卖掉亏损的，留住盈利的，永远别指望市场替你付账。'),
    ] });
  lesson(h, { id: 'e06_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: RED, title: ['Mistakes in Chapters XI–XII', '第十一至十二章中的错误'], music: 'dark',
    gest: ['explain', 'despair'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 220, w: 1420, widths: [0.34, 0.33, 0.33], size: 28, bottom: 840,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [[['Let Thomas think for him', '让托马斯替他思考'], ['A magnetic, plausible talker', '对方有魅力、说得头头是道'], ['Trade only your own reading', '只按自己的判断交易']],
        [['Loaded 60,000 bales at once', '一次买足6万包'], ['Skipped his own probing system', '跳过了自己的试探步骤'], ['Probe first; add only on a profit', '先试探，有盈利才加仓']],
        [['Bought more to hold the price up', '为托价不断加仓'], ['Averaging a losing game', '在亏损的仓位上摊平'], ['Never average a loser', '永远不要摊平亏损']],
        [['Sold the wheat, kept the cotton', '卖了小麦，留着棉花'], ['Lightened the wrong side', '减错了仓'], ['Sell the loss, keep the profit', '卖亏损的，留盈利的']],
        [['Made the market pay a $200,000 bill', '指望市场付20万美元的账'], ['Needed money now: hope, not judgment', '急着用钱：靠希望而非判断'], ['Never trade to meet a bill', '永远不要为了付账而交易']]],
      rowAt: ['L0@talker', 'L0@loaded', 'L0@averaged', 'L1', 'L1@asked'] }],
    lines: [
      N('Mistake review. I let a brilliant talker think for me, loaded up at once instead of probing, and averaged a losing game.', '错误复盘。我让一个能言善辩的人替我思考，一次满仓而不先试探，还在亏损的仓位上摊平。'),
      N('Then I sold the winner, kept the loser, and asked the market to pay a bill. From then on, I was in debt.', '然后我卖掉了盈利的，留下了亏损的，又指望市场替我付账。从那以后，我就一直负债。'),
    ] });
};
