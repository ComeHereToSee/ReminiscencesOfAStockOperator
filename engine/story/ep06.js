// Episode 6 — Chapters XI–XII. Cotton King, Cotton Fool.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const CAMMACK = { who: { en: 'ADDISON CAMMACK', zh: '艾迪生·卡马克' } };
  const JOSEPH = { who: { en: 'J. ARTHUR JOSEPH', zh: 'J·阿瑟·约瑟夫' } };
  const KEOWN = { who: { en: 'BOB KEOWN', zh: '鲍勃·基翁' } };

  episode(6, 'Cotton King, Cotton Fool', '棉花之王与棉花之殇', { en: 'Chapters XI – XII', zh: '原著第十一至十二章' }, '#3a3d46', [
    L('host', 'Episode six. Cotton king, cotton fool.', '第六集：棉花之王与棉花之殇。'),
  ]);

  // ---------------------------------------------------------------- Ch XI: corn squeeze
  {
    const [a, b] = HALF;
    shot({ id: 'p06_squeeze', kind: 'comic', panels: [
      P(a, { bg: 'yacht', chars: [ch('larry', a, 0.5, 1.0, { expr: 'worry', hat: 'boater', hatColor: '#e0c27a', hy: 0.42 })] }),
      P(b, { at: 1, bg: 'wheat', props: [{ t: 'sign', x: 150, y: 90, w: 600, en: 'SHORT: 10M bu WHEAT · 10M bu CORN', zh: '空头：小麦1000万蒲式耳 · 玉米1000万蒲式耳', color: '#5b3a1e', size: 32 }] }),
    ], caps: [{ x: 70, y: 70, w: 460, en: 'After the panic, late 1907.', zh: '恐慌之后，1907年末。' }],
    sfx: [{ at: 2, x: 1430, y: 560, t: 'CORN CORNERED!', zh: '玉米被逼空！', size: 80, color: '#f6d77a' }], lines: [
      L('larry', 'After the panic I bought a yacht for a cruise in Southern waters. But at the last moment, corn held me back.', '恐慌过后，我买了一艘游艇，准备去南方海域巡游。但临出发前，玉米把我拖住了。'),
      L('larry', 'In Chicago I was short ten million bushels of wheat and ten million of corn. Both started down, and wheat kept falling.', '我在芝加哥做空了一千万蒲式耳小麦和一千万蒲式耳玉米。两者都开始下跌，小麦一路走低。'),
      L('larry', 'But the biggest operator there, I\'ll call him Stratton, ran a corner in corn. Bad roads kept the farmers\' corn from market. I prayed for a freeze.', '但那里最大的作手——我叫他斯特拉顿——逼空了玉米。道路泥泞，农民的玉米运不进市场。我祈祷来一场冰冻。'),
      L('larry', 'I closed the wheat at a good profit. But bidding for ten million bushels of corn myself would only run the price up against me.', '我平掉小麦，赚了不少。但要是我自己去买一千万蒲式耳玉米，只会把价格推高，自己割自己的喉咙。'),
    ] });
  }
  shot({ id: 'p06_oats', kind: 'info', tag: { en: 'TACTICS', zh: '战术' }, title: { en: 'Escaping a Corn Corner with Oats as Bait', zh: '以燕麦为饵，逃出玉米逼空' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 280, max: 28, nodes: [
      { num: 1, en: 'Stratton also runs oats. Rumor: Armour is against him.', zh: '斯特拉顿也在操纵燕麦。传闻：阿穆尔与他作对。', at: 0 },
      { num: 2, en: 'Bids in: 500,000 bu corn at every ⅛¢ down', zh: '挂好买单：每跌⅛美分买50万蒲式耳玉米', at: 1 },
      { num: 3, en: '4 houses each sell 50,000 bu oats at once', zh: '4家经纪行同时各卖5万蒲式耳燕麦', at: 1 },
      { num: 4, en: 'Oats break. "Armour is attacking!" Traders dump corn.', zh: '燕麦下跌。"阿穆尔出手了！"交易员抛售玉米。', at: 2 },
      { num: 5, en: '6M bu bought in 10 minutes; last 4M at market', zh: '10分钟买进600万；剩下400万市价买入', at: 3 },
    ] },
    { type: 'cards', at: 3, x: 70, y: 575, w: 1780, ch: 150, cols: 4, max: 28, items: [
      { en: 'All 10M bu within ½¢', zh: '1000万全部在½美分内回补', n: '½', at: 3 },
      { en: 'Oats bait cost: $3,000', zh: '燕麦诱饵成本：3,000美元', n: '$', at: 4 },
      { en: 'Net grain loss: $25,000', zh: '谷物净亏：2.5万美元', n: '−', at: 4, tagColor: '#b8322a' },
      { en: 'Corn later: +25¢ a bushel', zh: '玉米后来：每蒲式耳涨25美分', n: '↑', at: 4, tagColor: '#2f7d3a' },
    ] },
  ], lines: [
    L('host', 'Stratton was also running oats, and the pit heard the powerful Armour interests were against him. Livingston saw how traders would read an oats break.', '斯特拉顿同时在操纵燕麦，而交易场传闻实力雄厚的阿穆尔集团与他作对。利文斯顿看出了交易员会怎么解读燕麦的下跌。'),
    L('host', 'First he put in bids for five hundred thousand bushels of corn at every eighth of a cent down. Then four houses each sold fifty thousand oats at once.', '他先在每跌八分之一美分处挂好五十万蒲式耳玉米的买单，然后让四家经纪行同时各卖五万蒲式耳燕麦。'),
    L('host', 'Oats broke. Traders assumed Armour was gunning for Stratton, expected corn to break next, and sold it with enthusiasm.', '燕麦应声下跌。交易员以为阿穆尔在狙击斯特拉顿，料定玉米会接着跌，于是争相抛售。'),
    L('host', 'He bought six million bushels in ten minutes. When their selling stopped, he took the last four million at the market. All ten million came within half a cent.', '他十分钟内买进六百万蒲式耳。抛盘一停，他就按市价买下剩余四百万。一千万蒲式耳全部在半美分之内回补。'),
    L('host', 'The oats bait cost three thousand dollars. With the wheat profit, his total grain loss was just twenty-five thousand. Corn later rose twenty-five cents.', '燕麦诱饵只花了三千美元。算上小麦利润，谷物交易总共只亏两万五千美元。后来玉米涨了二十五美分。'),
  ] });

  // ---------------------------------------------------------------- Ch XI: Cammack
  {
    const [a, b] = HALF;
    shot({ id: 'p06_cammack', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('agent', a, 0.5, 1.0, { expr: 'shock', pose: 'point', hat: 'none', hair: '#3a2a1a', mus: 'thin', hy: 0.52 })] }),
      P(b, { at: 2, bg: 'study', chars: [ch('keene', b, 0.5, 1.0, { expr: 'smile', pose: 'chin', beard: 'goatee', hair: '#7a7a7a', hy: 0.52 })] }),
    ], caps: [{ x: 70, y: 70, w: 520, en: 'Late in a bull market. Cammack is bearish.', zh: '牛市末期。卡马克看空。', size: 26, zsize: 22 }],
    bubbles: [
      { at: 1, x: 120, y: 200, w: 560, en: 'The Old Man is selling 1,500 St. Paul every ⅜ up!', zh: '老头子每涨⅜点就卖1,500股圣保罗！', tx: 420, ty: 380 },
      { at: 2, x: 1010, y: 70, w: 560, en: 'Billy, buy 1,500 St. Paul every ⅜ up.', zh: '比利，每涨⅜点买1,500股圣保罗。', tx: 1380, ty: 300, kind: 'shout' },
    ], lines: [
      L('host', 'A professional plays for position, like a billiard player looking several shots ahead. Livingston tells a story about Addison Cammack.', '职业交易者为布局而下注，就像台球高手会预先看好后面几杆。利文斯顿讲了艾迪生·卡马克的故事。'),
      L('host', 'Late in a bull market, bearish Cammack got a tip: William Rockefeller was selling fifteen hundred St. Paul every three-eighths of a point up.', '在一轮牛市的末期，看空的卡马克得到一条消息：威廉·洛克菲勒每涨八分之三点就卖出一千五百股圣保罗。'),
      L('keene', 'Billy, go over and buy fifteen hundred St. Paul every three-eighths up.', '比利，去每涨八分之三点买一千五百股圣保罗。', CAMMACK),
      L('agent', 'Don\'t you mean sell? Aren\'t you bearish?', '你是说卖吧？你不是看空吗？', JOSEPH),
    ] });
  }
  shot({ id: 'p06_stpaul', kind: 'info', tag: { en: 'USING INFORMATION', zh: '如何利用信息' }, title: { en: 'Cammack Turns a Bear Tip into Ammunition', zh: '卡马克把利空消息变成弹药' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 250, max: 28, nodes: [
      { num: 1, en: 'Insider sells 1,500 every ⅜ up', zh: '内部人每涨⅜卖1,500股', at: 0 },
      { num: 2, en: 'Cammack quietly takes it all', zh: '卡马克悄悄全部接下', at: 0 },
      { num: 3, en: 'Selling stops: he holds ≈60,000 shares', zh: '卖盘停止：他持有约6万股', at: 1 },
      { num: 4, en: 'Dumps them — and more — to hammer the list', zh: '抛出这些股票并加空，打压大盘', at: 1, color: '#f3c6c0' },
      { num: 5, en: 'St. Paul: from the 90s to 44', zh: '圣保罗：从90多跌到44', at: 2, color: '#cfe3c4' },
    ] },
    { type: 'quote', at: 3, x: 160, y: 550, w: 1600, size: 40, zsize: 34, en: 'Don\'t sell stocks when the sap is running up the trees!', zh: '树液正往上涌的时候，别卖股票！', src: 'Addison Cammack, Ch. XI' },
  ], lines: [
    L('host', 'Why buy? The insider\'s steady selling was a supply of stock. Cammack collected it, and when the selling stopped he held about sixty thousand shares.', '为什么要买？内部人源源不断的卖盘就是一批筹码。卡马克全部收入囊中，等卖盘停止时，他手里已有约六万股。'),
    L('host', 'He sold them all and more, using St. Paul as a lever on the whole market. It fell from the nineties to forty-four.', '他把这些股票连同更多空单一起抛出，以圣保罗为杠杆撬动整个市场。它从九十多跌到四十四。'),
    L('host', 'The tip didn\'t tell him what to do. It handed him the right moment, and the best ammunition, for his bear campaign.', '这条消息没有告诉他该做什么，而是给了他做空战役的最佳时机和最好的弹药。'),
    L('host', 'Yet Cammack was no chronic bear. His own warning: "Don\'t sell stocks when the sap is running up the trees." He traded conditions, not prejudices.', '但卡马克并非死空头。他自己的警句是："树液正往上涌的时候，别卖股票。"他依据形势交易，而不是凭成见。'),
  ] });

  // ---------------------------------------------------------------- Ch XI: July cotton
  {
    const [a, b] = HALF;
    shot({ id: 'p06_percyhist', kind: 'comic', panels: [
      P(a, { bg: 'beach', chars: [ch('larry', a, 0.3, 0.85, { expr: 'shock', hat: 'boater', hatColor: '#e0c27a', hy: 0.48 }), ch('friend', a, 0.72, 0.85, { expr: 'grin', hy: 0.48, flip: true })] }),
      P(b, { at: 1, bg: 'dark', props: [{ t: 'paper', x: 90, y: 90, w: 720, h: 560, paper: 'EXTRA', en: 'SHELDON & THOMAS FAIL FOR MILLIONS', zh: '谢尔登与托马斯公司倒闭，亏损数百万', size: 50, rot: -2 }] }),
    ], caps: [{ x: 70, y: 70, w: 400, en: 'Palm Beach gossip.', zh: '棕榈滩的传闻。' }],
    sfx: [{ at: 2, x: 1430, y: 690, t: 'PAID IN FULL + INTEREST', zh: '连本带息全额偿还', size: 58, color: '#f6d77a', font: 'cond' }], lines: [
      L('larry', 'Cruising Florida again, I heard in Palm Beach that Percy Thomas, the famous cotton operator, had lost every cent in March cotton.', '再次在佛罗里达巡游时，我在棕榈滩听说，著名棉花作手珀西·托马斯在三月棉花上输光了。'),
      L('larry', 'I admired him. His firm, Sheldon and Thomas, had failed for millions trying to corner cotton. He came back alone, trading only cotton.', '我一直很佩服他。他的谢尔登与托马斯公司曾因逼空棉花失败，亏损数百万。之后他单枪匹马、专做棉花东山再起。'),
      L('larry', 'He paid his creditors in full, with interest, though the law didn\'t require it. That ranked with Deacon S. V. White paying off a million in one year.', '他连本带息还清了债主，尽管法律并不要求他这么做。这可以和执事S·V·怀特一年还清一百万美元相提并论。'),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p06_july', kind: 'comic', panels: [
      P(a, { bg: 'floor', bgo: { crowd: true }, props: [{ t: 'sign', x: 160, y: 120, w: 580, en: 'EVERYBODY SELLS JULY COTTON', zh: '人人都在卖七月棉花', color: '#7a1f1a' }] }),
      P(b, { at: 1, bg: 'cotton', props: [{ t: 'bales', x: 90, y: 650, n: 15 }], chars: [ch('larry', b, 0.5, 0.85, { expr: 'determined', pose: 'fist', hy: 0.36 })] }),
    ], caps: [{ at: 1, x: 1005, y: 70, w: 470, en: 'Late May: 100,000 → 120,000 bales.', zh: '五月下旬：10万→12万包。', size: 26, zsize: 22 }], lines: [
      L('larry', 'Back in New York I studied cotton. Everybody was bearish and selling July. They saw only one side, and a big profit.', '回到纽约，我研究棉花。人人看空，都在卖七月合约。他们只看到一面，和一大笔利润。'),
      L('larry', 'But the shorts didn\'t have much time to cover. In late May I bought a hundred thousand bales. It came easily, from so many sellers.', '但空头没有多少时间回补。五月下旬，我买进十万包，毫不费力——卖家实在太多了。'),
      L('larry', 'I kept buying until I held every floating contract, a hundred twenty thousand bales. Then it rose, forty to fifty points a day.', '我继续买，直到吃下所有流通合约，共十二万包。随后价格开始上涨，每天涨四五十点。'),
    ] });
  }
  shot({ id: 'p06_test', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'Test for Supply in the Last Ten Minutes', zh: '收盘前十分钟测试卖盘' }, els: [
    { type: 'flow', x: 70, y: 255, w: 860, dir: 'v', bh: 110, max: 28, nodes: [
      { en: 'Saturday, last 10 minutes: shorts are exposed', zh: '周六收盘前10分钟：空头最脆弱', at: 0 },
      { en: '4 orders × 5,000 bales, at market, at once', zh: '4张单×5,000包，市价，同时下', at: 1 },
      { en: '+30 points; closes at the top', zh: '上涨30点；收在最高', at: 1, color: '#cfe3c4' },
      { en: 'Now long 140,000 bales', zh: '此时持有14万包', at: 3, color: '#f6d77a' },
    ] },
    { type: 'bars', at: 2, x: 980, y: 255, w: 870, h: 400, max: 60, bars: [
      { v: 20, vl: '+20', en: 'Liverpool expected (parity)', zh: '利物浦预期（对齐纽约）', color: '#8a8a8a' },
      { v: 50, vl: '+50', en: 'Liverpool actual, Monday', zh: '周一利物浦实际', color: '#2f7d3a' },
    ] },
    { type: 'box', at: 3, x: 980, y: 680, w: 870, color: '#f3c6c0', en: 'A rising market may still be unable to absorb a big line.', zh: '上涨的市场，未必承接得了大仓位。', size: 28 },
  ], lines: [
    L('host', 'About ten days in, he needed to know: was any July cotton still for sale? On Saturday he waited for the last ten minutes, when the shorts would be hooked if it closed up.', '大约十天后，他需要弄清：还有没有七月棉花可买？周六他等到收盘前最后十分钟——若收高，空头就被套牢了。'),
    L('host', 'He sent four orders to buy five thousand bales each, at the market, at the same time. The price jumped thirty points and closed at the top.', '他同时下了四张市价单，各买五千包。价格跳涨三十点，收在最高。'),
    L('host', 'On Monday, Liverpool should have opened twenty points up to match New York. It opened fifty up. He was on the line of least resistance.', '周一，利物浦本应高开二十点与纽约看齐，结果高开了五十点。他正顺着最小阻力线。'),
    L('host', 'But he now held a hundred forty thousand bales, and he saw no stampede of shorts. A rising market may still be unable to absorb a big line.', '但他此时持有十四万包，却看不到空头恐慌回补。上涨的市场，未必承接得了大仓位。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p06_world', kind: 'comic', panels: [
      P(a, { bg: 'street', chars: [ch('friend', a, 0.3, 0.9, { expr: 'grin', hy: 0.5 }), ch('larryHat', a, 0.72, 0.9, { expr: 'shock', hy: 0.5, flip: true })] }),
      P(b, { at: 1, bg: 'dark', props: [{ t: 'paper', x: 80, y: 80, w: 740, h: 600, paper: 'THE WORLD', en: 'JULY COTTON CORNERED BY LARRY LIVINGSTON', zh: '拉瑞·利文斯顿逼空七月棉花', size: 54, rot: 2 }] }),
    ], bubbles: [{ x: 80, y: 70, w: 470, en: 'Quite a story in the World this morning!', zh: '今天《世界报》那篇报道可真精彩！', tx: 280, ty: 300 }],
    sfx: [{ at: 2, x: 1440, y: 760, t: 'ALL SOLD BY 10:10 A.M.', zh: '上午10:10前全部卖出', size: 58, color: '#f6d77a', rot: -4, font: 'cond' }], lines: [
      L('larry', 'On Tuesday a friend stopped me at my office door. Had I seen the story in the World?', '周二，一位朋友在我办公楼门口拦住我：看到《世界报》那篇报道了吗？'),
      L('larry', 'Front page: July Cotton Cornered by Larry Livingston. I hadn\'t seen it, and had nothing to do with it. It was cabled all over, and Liverpool went wild.', '头版："拉瑞·利文斯顿逼空七月棉花"。我没看过，也与此毫无关系。消息传遍各地，利物浦市场一片疯狂。'),
      L('larry', 'The market opened at ten. By ten past ten I didn\'t own a bale. I sold all hundred forty thousand, mostly at the day\'s top prices.', '市场十点开盘。十点十分，我手里一包也不剩。十四万包全部卖出，大部分在当日最高价附近。'),
    ] });
  }
  shot({ id: 'p06_absorb', kind: 'info', tag: { en: 'SELLING A BIG LINE', zh: '卖出大仓位' }, title: { en: 'Get Out When the Market Can Take It', zh: '在市场能承接时离场' }, els: [
    { type: 'bars', x: 70, y: 255, w: 860, h: 555, max: 150, bars: [
      { v: 140, vl: '140,000', en: 'His line (bales)', zh: '他的持仓（包）', color: '#2f5d8a' },
      { v: 60, vl: '50–60,000', en: 'What the market could absorb', zh: '市场能承接的量', color: '#b8322a', at: 0 },
    ] },
    { type: 'cards', x: 980, y: 255, w: 870, ch: 160, cols: 1, items: [
      { en: 'A big line can\'t sneak out. Sell when the market can absorb it, not when you wish.', zh: '大仓位溜不出去。要在市场能承接时卖，而不是想卖时卖。', at: 1 },
      { en: 'Hesitate, and the chance is gone. Don\'t bid up the price either: it shrinks absorbing power.', zh: '一犹豫，机会就没了。也别抬价，那会削弱承接力。', at: 1 },
      { en: '"Cotton King": a crown he said he didn\'t earn.', zh: '"棉花之王"：他说这顶王冠名不副实。', at: 2, tagColor: '#d9a441' },
    ] },
  ], lines: [
    L('host', 'A leading cotton man told him the market couldn\'t take more than fifty or sixty thousand bales without breaking. He was sure the story was Livingston\'s trick.', '一位棉花业大佬对他说，市场最多只能承接五六万包而不下跌。他认定那篇报道是利文斯顿的计谋。'),
    L('host', 'The lesson: a big line can\'t sneak out. You sell when the market can absorb it. Hesitate, and you are lost.', '教训是：大仓位溜不出去。你要在市场能承接时卖出。一犹豫，就全完了。'),
    L('host', 'Papers called him the Cotton King. He said he didn\'t deserve it. The newspaper, not his skill, had found his buyers.', '报纸称他为"棉花之王"。他说自己不配：是那份报纸、而不是他的本事，替他找到了买家。'),
  ] });

  // ---------------------------------------------------------------- Ch XII: Percy Thomas
  {
    const [a, b] = HALF;
    shot({ id: 'p06_alliance', kind: 'comic', panels: [
      P(a, { bg: 'study', chars: [ch('percy', a, 0.5, 1.0, { expr: 'smile', pose: 'point', hy: 0.5 })] }),
      P(b, { at: 1, bg: 'office', chars: [ch('larry', b, 0.5, 1.0, { expr: 'determined', pose: 'cross', hy: 0.5 })] }),
    ], bubbles: [
      { x: 80, y: 70, w: 560, en: 'Let us work together. My information, your trading.', zh: '我们联手吧。我出情报，你来操作。', tx: 420, ty: 300 },
      { at: 1, x: 1010, y: 70, w: 560, en: 'If I fool myself, I alone pay the bill.', zh: '如果我自欺，只由我一人买单。', tx: 1400, ty: 300 },
    ], lines: [
      L('larry', 'The notoriety brought Percy Thomas to my office. He proposed an alliance: he would pass me his information first, and I would do the trading.', '这番名声把珀西·托马斯引到了我的办公室。他提议结盟：他把情报先交给我，由我来交易。'),
      L('larry', 'I refused. I play a lone hand. If I fool myself, I alone suffer, and I pay at once. And I don\'t want to influence other people\'s trading.', '我拒绝了。我一向单打独斗。如果我自欺，只有我自己受苦，而且当场付账。我也不想影响别人的交易。'),
    ] });
  }
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p06_book', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('agent', a, 0.32, 1.0, { expr: 'grin', pose: 'paper', headline: 'WALTER SCOTT $500', hy: 0.5 }), ch('larry', a, 0.75, 1.0, { expr: 'shock', hy: 0.5, flip: true, exprAt: { 1: 'think', 2: 'smile', 3: 'smile', 4: 'think' } })] }),
      P(b, { at: 1, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(355 190)"><g transform="rotate(-12) translate(-150 -80)"><rect width="200" height="230" fill="#f1ead6" stroke="#16130f" stroke-width="5"/><text x="20" y="50" font-family="Special Elite" font-size="26">CONTRACT</text><text x="20" y="90" font-family="Special Elite" font-size="22">SCOTT $500</text></g><g transform="rotate(14) translate(60 -60)"><rect width="200" height="230" fill="#f1ead6" stroke="#16130f" stroke-width="5"/><text x="20" y="50" font-family="Special Elite" font-size="26">…ACT</text></g><text y="170" text-anchor="middle" font-family="Bangers" font-size="70" fill="#f6d77a" stroke="#16130f" stroke-width="8" paint-order="stroke">RIP!</text></g>' }] }),
      P(c, { at: 3, bg: 'office', chars: [ch('harding', c, 0.5, 0.75, { expr: 'smile', pose: 'money', hy: 0.42 })] }),
    ], bubbles: [{ at: 2, x: 80, y: 70, w: 420, en: 'You did not whine.', zh: '你没有抱怨。', tx: 380, ty: 300, size: 30 }],
    caps: [{ at: 3, x: 1190, y: 740, w: 470, en: 'Ed Harding: $2,000 of books.', zh: '艾德·哈丁：买了2,000美元的书。', size: 24, zsize: 20 }],
    lines: [
      L('larry', 'I should have been on guard. Not long before, a book agent got past my door and talked me into signing for a five-hundred-dollar set of Walter Scott.', '我本该提防的。不久前，一个推销员闯进我的房间，三言两语就让我签下一套五百美元的司各特全集。'),
      L('larry', 'I offered him two hundred dollars cash to give back the contract. He refused the money, then tore the contract up anyway.', '我出两百美元现金，请他退还合同。他不收钱，却还是把合同撕了。'),
      L('agent', 'Because you did not whine. You took it the way I would have taken it myself.', '因为你没有抱怨。你就像我自己会做的那样，坦然认了。'),
      L('larry', 'He asked for three minutes with Ed Harding, and sold him two thousand dollars of books. Personality can make a man buy what he doesn\'t want.', '他只求跟艾德·哈丁谈三分钟，就卖给他两千美元的书。人格魅力能让人买下自己不想要的东西。'),
      L('host', 'His rule: a man can excuse his mistakes only by capitalising them, learning from each one so it pays later.', '他的准则：一个人只有把错误"资本化"——从中学到东西、让它日后带来回报——才能为错误开脱。'),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p06_percy', kind: 'comic', panels: [
      P(a, { bg: 'study', chars: [ch('percy', a, 0.5, 1.05, { expr: 'smile', pose: 'point', hy: 0.5 })] }),
      P(b, { at: 2, bg: 'study', bgo: { ticker: false }, chars: [ch('larry', b, 0.5, 1.05, { expr: 'worry', hy: 0.5, exprAt: { 3: 'sad' } })] }),
    ], bubbles: [{ at: 1, x: 80, y: 70, w: 540, en: 'My ten thousand correspondents across the South are never wrong.', zh: '我在南方的一万名通讯员从不出错。', tx: 380, ty: 300 }],
    sfx: [{ at: 3, x: 1420, y: 170, t: 'LONG 60,000 BALES', zh: '做多6万包', size: 66, color: '#f6d77a', font: 'cond' }], lines: [
      L('larry', 'Then I saw a great deal of Thomas, the most magnetic man I ever met. He was bullish on cotton. I was bearish, and short.', '后来我常和托马斯见面，他是我见过最有魅力的人。他看多棉花，而我看空，并且持有空单。'),
      L('larry', 'He kept citing the proven reliability of his ten thousand correspondents throughout the South. His figures were his alone; mine were public.', '他反复强调他在南方的一万名通讯员屡经验证、十分可靠。他的数据是独家的，我的却是公开的。'),
      L('larry', 'He couldn\'t convince me, but he made me unsure, which is worse. I stopped doing my own thinking.', '他没能说服我，却让我变得犹豫——这更糟。我不再独立思考了。'),
      L('larry', 'I covered and went long sixty thousand bales, the "most asinine play" of my career. Then I bought more to hold the price up, to about a hundred fifty thousand.', '我回补空头，反手做多六万包——这是我生涯中"最愚蠢的一招"。接着为了托住价格不断加仓，直到约十五万包。'),
    ] });
  }
  shot({ id: 'p06_reverse', kind: 'info', tag: { en: 'THE FATAL MISTAKE', zh: '致命错误' }, title: { en: 'He Sold the Winner and Kept the Loser', zh: '卖掉赢家，留下输家' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.12, 0.18, 0.26, 0.44], reveal: true, rowAt: [1, 1], size: 24, cols: [['Position', '仓位'], ['Status', '状态'], ['At Bayshore he…', '在贝肖尔，他…'], ['What followed', '后来']], rows: [
      [['Wheat', '小麦'], ['Big, profitable', '大仓位，盈利'], ['SOLD it', '卖掉了'], ['Rose 20¢ without stopping: ≈$8 million foregone (his estimate)', '一口气涨20美分：错失约800万美元（他的估计）']],
      [['Cotton', '棉花'], ['Large, losing', '大仓位，亏损'], ['KEPT it, and bought more', '留着，还继续买'], ['Sold out at 440,000 bales; over nine-tenths of his stake gone', '加到44万包才清仓；九成以上本钱化为乌有']],
    ], hl: [1] },
    { type: 'bars', at: 2, x: 70, y: 585, w: 860, h: 230, max: 440, vsize: 24, bars: [
      { v: 60, vl: '60,000', en: 'First line', zh: '初始仓位', color: '#d9a441' },
      { v: 150, vl: '~150,000', en: 'Holding it up', zh: '托价', color: '#c8762a' },
      { v: 440, vl: '440,000', en: 'Incl. Liverpool', zh: '含利物浦', color: '#b8322a' },
    ] },
    { type: 'quote', at: 3, x: 970, y: 585, w: 880, size: 32, zsize: 28, en: 'Always sell what shows you a loss and keep what shows you a profit.', zh: '永远卖出亏损的，留住盈利的。', src: 'Ch. XII' },
  ], lines: [
    L('larry', 'I also carried a heavy line of wheat, showing a handsome profit. Feeling unwell, I went to Bayshore to rest, and decided my commitments were too large.', '我还持有大量小麦，利润可观。身体不适，我去贝肖尔休养，觉得自己仓位过重，决定减仓。'),
    L('larry', 'The cotton showed a loss, and I kept it. The wheat showed a profit, and I sold it. Wheat then rose twenty cents, about eight million dollars, by my estimate.', '棉花亏着，我留下了；小麦赚着，我卖掉了。随后小麦涨了二十美分——按我的估计，约八百万美元。'),
    L('host', 'He bought cotton every day, even in Liverpool, just to keep the price from falling. He reached four hundred forty thousand bales before he sold out.', '他天天买棉花，连利物浦也买，只为不让价格下跌。直到四十四万包，他才清仓。'),
    L('larry', 'Always sell what shows you a loss and keep what shows you a profit. I did the reverse.', '永远卖出亏损的，留住盈利的。我却反其道而行。'),
  ] });
  shot({ id: 'p06_fall', kind: 'info', tag: { en: 'THE COST', zh: '代价' }, title: { en: 'Millionaire for Less Than a Year', zh: '百万富翁，不到一年' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 250, max: 30, nodes: [
      { num: 1, en: 'Oct. 1907: worth over $1 million', zh: '1907年10月：身家超过百万', at: 0, color: '#cfe3c4' },
      { num: 2, en: 'After cotton: over nine-tenths gone', zh: '棉花之后：九成以上化为乌有', at: 0, color: '#f3c6c0' },
      { num: 3, en: 'Sells his two yachts', zh: '卖掉两艘游艇', at: 1 },
      { num: 4, en: 'Illness, then needs $200,000 cash fast', zh: '生病，接着急需20万美元现金', at: 1 },
    ] },
    { type: 'box', at: 1, x: 70, y: 560, w: 1780, color: '#f6d77a', anchor: 'middle', en: 'His choice: not from his trading margin, but "out of the stock market."', zh: '他的选择：不动用交易保证金，而是"从股市里赚出来"。', size: 32 },
  ], lines: [
    L('host', 'More than nine-tenths of his stake was gone. He had been a millionaire for less than a year. He sold his two yachts.', '他九成以上的本钱没了。他当百万富翁还不到一年。他卖掉了两艘游艇。'),
    L('host', 'Then came illness, and an urgent need for two hundred thousand dollars. Rather than drain his trading margin, he decided to take it out of the market.', '接着又生了病，还急需二十万美元。他不愿动用交易保证金，决定从股市里把这笔钱赚出来。'),
  ] });
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p06_coat', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('friend', a, 0.45, 1.0, { expr: 'grin', pose: 'up', hat: 'none', hair: '#6a4a2a', suit: '#5a3a2a', hy: 0.5 })] }),
      P(b, { at: 1, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(355 160)"><text text-anchor="middle" font-family="Oswald" font-weight="700" font-size="58" fill="#fff" stroke="#16130f" stroke-width="8" paint-order="stroke">SHORT 5,000 STEEL</text><text y="70" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="44" fill="#f6d77a" stroke="#16130f" stroke-width="7" paint-order="stroke">aim: +2½ points</text><text y="140" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="52" fill="#ff8a7a" stroke="#16130f" stroke-width="8" paint-order="stroke">stopped: −1½</text></g>' }] }),
      P(c, { at: 2, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(355 150)"><text text-anchor="middle" font-family="Oswald" font-weight="700" font-size="52" fill="#fff" stroke="#16130f" stroke-width="8" paint-order="stroke">UNION PACIFIC: −$1,800</text><text y="80" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="52" fill="#ff8a7a" stroke="#16130f" stroke-width="8" paint-order="stroke">OFFICE: −$30–40,000</text><text y="150" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="36" fill="#fff" stroke="#16130f" stroke-width="6" paint-order="stroke">大家一共亏了三四万美元</text></g>' }] }),
    ], bubbles: [{ x: 80, y: 70, w: 520, en: 'I shall let the stock market buy it for me!', zh: '就让股市给我买单吧！', tx: 450, ty: 260, kind: 'shout' }],
    caps: [{ x: 640, y: 720, w: 470, en: 'A $10,000 Russian sable coat.', zh: '一件一万美元的俄罗斯紫貂大衣。', size: 24, zsize: 20 }], lines: [
      L('host', 'He tells a story from Harding\'s office. Bob Keown wanted a Russian sable coat costing ten thousand dollars, and decided the market would buy it for him.', '他讲了哈丁公司里的一个故事。鲍勃·基翁想要一件价值一万美元的俄罗斯紫貂大衣，决定让股市替他买单。'),
      L('friend', 'I\'ll sell five thousand Steel. It ought to go down ten points. I\'ll take just two and a half.', '我要卖空五千股钢铁。它至少该跌十点，我只赚两点半就行。', KEOWN),
      L('host', 'Steel went up, and he stopped his loss at a point and a half. Another man bought Union Pacific for the coat, and lost eighteen hundred dollars.', '钢铁却涨了，他在亏损一点半时止损。另一个人买联合太平洋想赚这件大衣，亏了一千八百美元。'),
      L('host', 'One after another they tried. The coat cost them thirty or forty thousand dollars. When Livingston went to buy it himself, a Chicago man already had.', '大家一个接一个地尝试，为这件大衣总共亏了三四万美元。等利文斯顿亲自去买时，它已被一个芝加哥人买走了。'),
    ] });
  }
  shot({ id: 'p06_bills', kind: 'info', tag: { en: 'WHY IT FAILS', zh: '为何必败' }, title: { en: 'Never Make the Market Pay Your Bills', zh: '别指望股市替你付账' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 230, max: 30, nodes: [
      { num: 1, en: 'A bill to pay, by a date', zh: '有账要付，还有期限', at: 0 },
      { num: 2, en: 'Needs profit NOW; can\'t wait for conditions', zh: '必须马上赚钱，等不起时机', at: 0 },
      { num: 3, en: 'Hope replaces judgment', zh: '希望取代判断', at: 1 },
      { num: 4, en: '"Risk 2 to make 2" feels even — it isn\'t', zh: '"亏2点赚2点"看似公平——其实不然', at: 1, color: '#f3c6c0' },
    ] },
    { type: 'box', at: 2, x: 70, y: 540, w: 1780, color: '#f3c6c0', en: 'Result: he lost what cotton had left him, kept trading and losing, and went into debt to his brokers — and stayed in debt.', zh: '结果：他输光了棉花之后剩下的钱，继续交易、继续亏损，欠下经纪商的债——而且从此一直负债。', size: 32 },
  ], lines: [
    L('host', 'Why does a market-paid bill fail? You need the profit now. You can\'t wait for conditions, so you hope, and you gamble.', '为什么让股市替你付账注定失败？你急着要利润，等不起时机，于是只能指望运气，变成赌博。'),
    L('host', 'A man risking two points to make two thinks it\'s an even bet. It isn\'t, least of all when he buys near a top.', '一个人亏两点止损、赚两点就走，以为这是五五开的赌局。其实不是，在高位买入时更不是。'),
    L('larry', 'That folly finished me. I lost what cotton had left me, kept trading and losing, and went into debt. I stayed in debt from then on.', '那次愚行彻底击垮了我。我输光了棉花剩下的钱，继续交易、继续亏损，欠下了债，而且从此一直负债。'),
  ] });

  // ---------------------------------------------------------------- wrap-up
  shot({ id: 'p06_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode Six Teaches', zh: '第六集的教训' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, items: [
      { en: 'Big positions need a plan to get out, not just a way in.', zh: '大仓位需要退出计划，而不只是进场办法。' },
      { en: 'Use other traders\' psychology; read how they will react.', zh: '利用其他交易者的心理，预判他们的反应。' },
      { en: 'Sell when the market can absorb it — then don\'t hesitate.', zh: '在市场能承接时卖出——然后毫不犹豫。', at: 1 },
      { en: 'Play a lone hand. Don\'t let a brilliant talker do your thinking.', zh: '单打独斗。别让能言善辩的人替你思考。', at: 1 },
      { en: 'Sell what shows a loss; keep what shows a profit.', zh: '卖出亏损的，留住盈利的。', at: 2 },
      { en: 'Never trade to meet a bill.', zh: '永远不要为了付账而交易。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Episode six in brief. Plan your exit as carefully as your entry, and use the crowd\'s psychology, as he did with oats and as Cammack did with St. Paul.', '第六集小结：像规划进场一样规划退场，并善用大众心理——就像他用燕麦、卡马克用圣保罗那样。'),
    L('host', 'Sell a big line when the market can take it. Trust your own reading, not a magnetic personality.', '在市场能承接时卖出大仓位。相信你自己的判断，而不是有魅力的人。'),
    L('host', 'Cut the loser, keep the winner, and never ask the market to pay a bill.', '砍掉亏损，留住盈利，永远别指望股市替你付账。'),
  ] });
  shot({ id: 'p06_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistakes in Chapters XI – XII', zh: '第十一至十二章中的错误' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, widths: [0.34, 0.31, 0.35], reveal: true, rowAt: [0, 0, 1, 1, 1, 1], size: 25, zsize: 22, cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Let Percy Thomas talk him out of his bear view', '让珀西·托马斯说服自己放弃看空'], ['Persuasive personality; stopped thinking for himself', '被魅力打动；不再独立思考'], ['Play a lone hand; trade only your own conclusions', '单打独斗；只按自己的结论交易']],
      [['Went long 60,000 bales at once', '一次性做多6万包'], ['Ignored his own probing method', '无视自己的试探建仓法'], ['Build a line only as the market proves you right', '只在市场证明你正确时建仓']],
      [['Bought cotton to hold the price up (to 440,000)', '为托价而买棉花（直到44万包）'], ['Hope; refused to take the loss', '心存侥幸；不肯认亏'], ['Never average a losing game', '永远不要摊平亏损']],
      [['Sold profitable wheat, kept losing cotton', '卖掉盈利的小麦，留下亏损的棉花'], ['Nervous and unwell; lightened the wrong side', '紧张又生病；减错了仓'], ['Sell what shows a loss, keep what shows a profit', '卖出亏损的，留住盈利的']],
      [['Tried to make the market pay $200,000', '想让股市替他付20万美元'], ['A deadline turns speculation into gambling', '期限让投机变成赌博'], ['Never trade to meet a bill', '不要为了付账而交易']],
      [['Signed for books he didn\'t want', '签下了不想要的书'], ['A salesman\'s personality', '推销员的个人魅力'], ['Excuse a mistake only by capitalising it', '只有从错误中获益，才能为错误开脱']],
    ] },
  ], lines: [
    L('host', 'Mistake review. He let a brilliant talker think for him, and loaded up at once instead of probing.', '错误复盘：他让一位能言善辩的人替他思考，又一次性满仓，而不是先试探。'),
    L('host', 'He averaged a losing game, sold the winner, kept the loser, then asked the market to pay a bill. From then on, he stayed in debt.', '他摊平亏损，卖掉赢家、留下输家，又指望股市替他付账。从那以后，他一直负债。'),
  ] });
};
