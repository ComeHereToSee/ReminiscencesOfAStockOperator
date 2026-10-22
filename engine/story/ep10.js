// Episode 10 — Chapters XIX–XX. Narration is an original adaptation of Lefèvre's
// "Reminiscences of a Stock Operator" (1923, public domain); short quotations are marked.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const VANDERBILT = { en: 'COMMODORE VANDERBILT', zh: '范德比尔特准将' };
  const DREW = { hat: 'top', hatColor: '#141414', hairStyle: 'gray', hair: '#d8d8d8', beard: 'goatee', beardColor: '#d8d8d8', mus: 'none', suit: '#2a2a2a', tie: '#2a2a2a', tieType: 'string', age: 2 };
  const VAND = { hat: 'top', hatColor: '#141414', hairStyle: 'gray', hair: '#f0f0f0', beard: 'full', beardColor: '#f0f0f0', mus: 'none', suit: '#1b1b1f', tie: '#f0f0f0', tieType: 'bow', age: 2, stout: false };

  episode(10, 'Corners and Keene', '逼空与基恩', { en: 'Chapters XIX – XX', zh: '原著第十九至二十章' }, '#16130f', [
    L('host', 'Episode ten. Corners and Keene.', '第十集：逼空与基恩。'),
  ]);

  // ---------------- Chapter XIX ----------------
  shot({ id: 'p10_def', kind: 'info', tag: { en: 'READ THIS FIRST', zh: '先读这里' }, title: { en: 'Manipulation: Legal Then, Illegal Now', zh: '操纵：当年常见，如今违法' }, els: [
    { type: 'box', x: 70, y: 255, w: 1780, h: 95, color: '#f3c6c0', anchor: 'middle', en: '⚠ Most practices in this episode are illegal in today\'s regulated markets. Learn them to RECOGNISE them.', zh: '⚠ 本集中的大多数做法在当今受监管的市场中属违法行为。学习它们是为了识别它们。', size: 32 },
    { type: 'cards', at: 1, x: 70, y: 370, w: 1780, ch: 96, cols: 2, max: 28, items: [
      { en: 'Selling a big block in the open market: a merchandising process.', zh: '在公开市场卖出大宗股票：一种销售过程。', at: 1 },
      { en: 'Rigging a stock to accumulate it cheaply: also manipulation, but different.', zh: '压价以便低价吸筹：也是操纵，但性质不同。', at: 1 },
      { en: 'Drew, Little and Gould\'s tricks: as obsolete as archery for a West Point cadet.', zh: '德鲁、利特尔、古尔德的老把戏：就像西点军校学射箭一样过时。', at: 2, tagColor: '#8a5a2b' },
      { en: 'Fear and hope never change: study the psychology, not the old devices.', zh: '恐惧与希望从不改变：研究心理，而不是旧手法。', at: 2, tagColor: '#8a5a2b' },
    ] },
    { type: 'quote', at: 3, x: 160, y: 600, w: 1600, size: 34, zsize: 28, en: '… people will continue in the future to make the mistakes that they have made in the past.', zh: '……人们将来还会继续犯他们过去犯过的错误。', src: 'Thomas F. Woodlock, quoted in Ch. XIX' },
  ], lines: [
    L('host', 'Chapters nineteen and twenty describe manipulation. Most of these practices are illegal in today\'s regulated markets. We study them only so you can recognise them.', '第十九、二十章讲的是操纵。这些做法在当今受监管的市场中大多违法。我们学习它们，只是为了能识别它们。'),
    L('larry', 'To me, manipulation is a merchandising process: selling a big block of stock in the open market. Rigging a stock to buy it cheaply is different.', '在我看来，操纵是一种销售过程：在公开市场卖出一大宗股票。为了低价买进而压价，则是另一回事。'),
    L('larry', 'The tricks of Drew, Little and Gould are as obsolete as archery to a West Point cadet. But human nature hasn\'t changed. Fear and hope remain the same.', '德鲁、利特尔和古尔德的把戏，对今天来说就像西点学员学射箭一样过时。但人性没变，恐惧与希望依旧。'),
    L('host', 'Thomas F. Woodlock put it best: speculation\'s principles assume people will keep making the mistakes they made in the past.', '托马斯·F·伍德洛克说得最好：投机的原则，是假设人们会继续犯过去犯过的错误。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p10_laundry', kind: 'comic', panels: [
      P(a, { bg: 'floor', props: [{ t: 'sign', x: 130, y: 40, w: 640, en: 'WASH SALES · MATCHED ORDERS', zh: '虚假对敲 · 配对成交', size: 34, zsize: 28, color: '#7a1f1a' }],
        chars: [ch('trader', a, 0.32, 0.9, { expr: 'grin', hy: 0.52 }), ch('broker', a, 0.72, 0.9, { expr: 'smile', flip: true, hy: 0.52 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['THE STOCK'], ['+25 IN MINUTES'], ['THEN BROKE']], hl: [1, 0] },
        chars: [ch('broker', b, 0.5, 0.8, { expr: 'shock', pose: 'up', hy: 0.74, exprAt: { 3: 'sad' } })] }),
    ], bubbles: [{ at: 0, until: 1, x: 300, y: 200, w: 420, en: 'The laundry is active!', zh: '"洗衣房"又开工了！', tx: 620, ty: 400 }], lines: [
      L('larry', 'When I first came to New York, wash sales and matched orders were against Exchange rules, yet common. Brokers joked that the laundry was active.', '我初到纽约时，虚假对敲和配对成交虽为交易所禁止，却很常见。经纪人们打趣说"洗衣房又开工了"。'),
      L('larry', 'There were bucket-shop drives too: a stock offered down two or three points in a jiffy, just to wipe out the shoestring traders in the bucket shops.', '还有"对赌行突袭"：瞬间把一只股票压低两三个点，专为扫掉对赌行里那些小本交易者。'),
      L('larry', 'A famous operator once cancelled the selling half of his matched orders but not the buying. An innocent broker ran the price up about twenty-five points in minutes.', '有位著名操盘手曾撤掉配对成交中的卖单，却忘了撤买单。一个不知情的经纪人几分钟内把价格推高了约二十五点。'),
      L('larry', 'When his buying stopped, it broke just as fast. You can\'t take your best brokers into your confidence, so fake trades are unreliable weapons.', '他的买单一停，价格又同样迅速地崩落。你不能把内情告诉最好的经纪人，所以虚假交易是靠不住的武器。'),
    ] });
  }

  shot({ id: 'p10_corners', kind: 'info', tag: { en: 'CORNERS', zh: '逼空' }, title: { en: 'The Great Corners: Few Paid', zh: '历史上的大逼空：赚钱的很少' }, els: [
    { type: 'table', until: 2, x: 70, y: 255, w: 1780, widths: [0.24, 0.3, 0.46], reveal: true, rowAt: [0, 1, 2, 2, 2, 0], size: 24, cols: [['Corner', '逼空'], ['Who', '人物'], ['Result', '结果']], rows: [
      [['Harlem (twice)', '哈莱姆铁路（两次）'], ['Commodore Vanderbilt', '范德比尔特准将'], ['Paid big; shorts and crooked politicians burned', '大赚；空头和背信的政客遭殃']],
      [['Northwestern', '西北铁路'], ['Jay Gould', '杰伊·古尔德'], ['Lost', '亏损']],
      [['Lackawanna', '拉卡瓦纳铁路'], ['Deacon S. V. White', 'S·V·怀特执事'], ['+ $1,000,000', '赚100万美元']],
      [['Hannibal & St. Joe', '汉尼拔与圣约瑟夫铁路'], ['James R. Keene', '詹姆斯·R·基恩'], ['− $1,000,000', '亏100万美元']],
      [['Old Southern', '老南方铁路'], ['Henry Keep, "William the Silent"', '亨利·基普（"沉默者威廉"）'], ['Squeezed Addison G. Jerome out of his millions', '把艾迪生·G·杰罗姆的数百万家产轧光']],
      [['Northern Pacific, 9 May 1901', '北太平洋铁路，1901年5月9日'], ['Competitive buying', '竞购'], ['A corner, but not manipulation', '是逼空，但不是操纵']],
    ], hl: [5] },
    { type: 'box', at: 3, x: 70, y: 300, w: 1780, h: 170, anchor: 'middle', color: '#f6d77a', en: 'A corner pays only if you can sell the hoard above cost: it needs a big short interest.', zh: '逼空只有在能高于成本卖出囤货时才赚钱：需要巨大的空头仓位。', size: 42 },
    { type: 'box', at: 4, x: 70, y: 520, w: 1780, h: 170, anchor: 'middle', color: '#f3c6c0', en: 'Aimed at professionals: the public rarely sells short. Motive: often vanity or revenge.', zh: '目标是职业交易者：公众很少做空。动机：常是虚荣或报复。', size: 42 },
  ], lines: [
    L('host', 'Corners count as manipulation, though some come from competitive buying, like Northern Pacific on May 9, 1901.', '逼空也算操纵，但有些逼空源于竞购，比如1901年5月9日的北太平洋铁路。'),
    L('larry', 'Very few of the great corners paid. Vanderbilt\'s Harlem corners paid big, but Jay Gould lost in Northwestern.', '历史上的大逼空，很少有赚钱的。范德比尔特的哈莱姆逼空大赚，杰伊·古尔德却在西北铁路上亏了。'),
    L('larry', 'Deacon White made a million in Lackawanna; Keene dropped a million in Hannibal and St. Joe. Henry Keep squeezed Addison Jerome out of his millions in Old Southern.', '怀特执事在拉卡瓦纳赚了一百万；基恩在汉尼拔与圣约瑟夫亏了一百万。亨利·基普在老南方铁路上把艾迪生·杰罗姆的数百万轧光。'),
    L('host', 'A corner pays only if you can sell the hoard above cost, which needs a big short interest. Often vanity or revenge drove them more than profit.', '逼空只有在能高于成本卖出囤货时才赚钱，这需要巨大的空头仓位。驱动它们的往往是虚荣或报复，而不是利润。'),
    L('host', 'And corners were aimed at fellow professionals, because the general public rarely sells short.', '而且逼空针对的是职业同行，因为普通公众很少做空。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p10_harlem', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, chars: [ch('trader', a, 0.27, 0.9, Object.assign({ expr: 'worry', hy: 0.55 }, DREW)), ch('banker', a, 0.74, 0.9, Object.assign({ expr: 'grin', flip: true, hy: 0.55, pose: 'point' }, VAND))] }),
      P(b, { at: 2, bg: 'street', props: [{ t: 'paper', x: 250, y: 120, w: 420, h: 300, en: 'HARLEM: TOO HIGH TO BUY?', zh: '哈莱姆：太高了不能买？', size: 36, rot: -3 }],
        chars: [ch('trader', b, 0.25, 0.85, { expr: 'sad', hy: 0.66, hat: 'bowler', exprAt: { 2: 'grin' } })] }),
    ], caps: [{ x: 70, y: 70, w: 360, en: 'Drew and Vanderbilt.', zh: '德鲁与范德比尔特。' }],
    bubbles: [{ at: 1, until: 1, x: 455, y: 50, w: 480, size: 24, zsize: 22, kind: 'speech', en: 'He that sells what isn\'t his\'n must buy it back or go to pris\'n.', zh: '卖了不属于自己的东西，要么买回，要么坐牢。', tx: 700, ty: 290 }],
    sfx: [{ at: 3, x: 1520, y: 640, t: 'WENT SHORT OF HARLEM!', zh: '做空了哈莱姆！（＝一贫如洗）', size: 56, color: '#f6d77a' }], lines: [
      L('larry', 'Old Daniel Drew often squeezed the boys in Erie. When Commodore Vanderbilt squeezed him in turn and Drew begged for mercy, the Commodore quoted Drew\'s own rhyme.', '老丹尼尔·德鲁常在伊利股票上轧空别人。后来范德比尔特准将反过来轧他，德鲁求饶时，准将念出了德鲁自己的打油诗。'),
      L('banker', '"He that sells what isn\'t his\'n, must buy it back or go to pris\'n."', '"卖出不属于自己的东西，要么买回来，要么进监狱。"', { who: VANDERBILT }),
      L('larry', 'The Harlem shorts sold because it had never been so high: too high to buy, so right to sell. They thought of price; the Commodore thought of value.', '哈莱姆的空头卖出，是因为它从没这么高过：高到不能买，所以正好卖。他们想的是价格，准将想的是价值。'),
      L('larry', 'For years afterwards, to describe abject poverty, people said: "He went short of Harlem!"', '此后多年，人们形容一贫如洗时就说："他做空了哈莱姆！"'),
    ] });
  }

  shot({ id: 'p10_gould', kind: 'info', tag: { en: 'OLD-TIME MANIPULATORS', zh: '旧时代的操纵者' }, title: { en: 'Gould, and the Cliques That Locked Up Money', zh: '古尔德，以及"锁住资金"的集团' }, els: [
    { type: 'cards', x: 70, y: 255, w: 860, ch: 165, cols: 1, max: 28, items: [
      { en: 'Jay Gould: Drew said his touch was death.', zh: '杰伊·古尔德：德鲁说他"点谁谁死"。', at: 0 },
      { en: 'Adapted fast; manipulated properties for investment, not for a market turn.', zh: '适应极快；为投资而操纵产业，而非为一时行情。', at: 0 },
      { en: 'He saw the big money was in owning the railroads, not rigging their stock.', zh: '他看到大钱在于拥有铁路，而不是炒作铁路股。', at: 0, tagColor: '#8a5a2b' },
    ] },
    { type: 'flow', at: 1, dir: 'v', x: 990, y: 255, w: 860, bh: 160, max: 28, nodes: [
      { num: 1, en: 'Clique borrows money, holds it as certified cheques', zh: '集团借入资金，以保付支票形式持有', at: 1 },
      { num: 2, en: 'Less money left for Stock Exchange borrowers', zh: '交易所借款人可借的钱变少', at: 2 },
      { num: 3, en: 'Margin traders squeezed; cliques profit', zh: '保证金交易者被挤压；集团获利', at: 2, color: '#f3c6c0' },
    ] },
  ], lines: [
    L('larry', 'Of Jay Gould, old Drew said with a shiver that his touch was death. Gould adapted fast, and cared more about owning railroads than rigging their stock.', '提起杰伊·古尔德，老德鲁不寒而栗地说，他碰谁谁死。古尔德适应极快，更在乎拥有铁路，而不是炒作铁路股。'),
    L('larry', 'An old broker recalled a crowd on Wall Street in the early sixties: a big clique operator chasing a man and yelling "Shylock" about the price of money.', '一位老经纪人回忆起六十年代初华尔街的一幕：一位大集团操盘手追着一个人，冲他大喊"夏洛克"，质问钱的价格。'),
    L('larry', 'The man was a notorious locker-up of money. Cliques borrowed money and held it as certified cheques, shrinking what Exchange borrowers could get.', '那人是出了名的"锁钱者"。集团借入资金，以保付支票形式扣着不用，让交易所借款人无钱可借。'),
    L('host', 'It was rigging, a form of manipulation we don\'t have nowadays.', '这是一种操纵手法，如今已不复存在。'),
  ] });

  // ---------------- Chapter XX ----------------
  {
    const [a, b] = HALF;
    shot({ id: 'p10_keene', kind: 'comic', panels: [
      P(a, { bg: 'study', chars: [ch('keene', a, 0.55, 1.0, { expr: 'determined', hy: 0.5 })] }),
      P(b, { at: 1, bg: 'floor' }),
    ], caps: [{ x: 70, y: 70, w: 420, en: 'James R. Keene, greatest of them all.', zh: '詹姆斯·R·基恩，最伟大的操盘手。' }, { at: 0, x: 1005, y: 70, w: 360, en: 'Sugar, for the Havemeyers.', zh: '为哈夫迈耶兄弟做糖业股。', until: 0 }],
    sfx: [{ at: 1, x: 1430, y: 300, t: 'U.S. STEEL 1901', zh: '美国钢铁 1901年', size: 64, color: '#fff', font: 'cond' }, { at: 2, x: 1430, y: 560, t: '750,000+ SHARES', zh: '几周内卖出75万多股', size: 64, color: '#f6d77a', font: 'cond' }], lines: [
      L('host', 'James R. Keene was the greatest manipulator of his day. Broke at the time, he sold his services to the Havemeyers and made Sugar a trading favourite.', '詹姆斯·R·基恩是他那个时代最伟大的操盘手。当时他身无分文，便为哈夫迈耶兄弟效力，把糖业股做成了交易热门。'),
      L('host', 'In later pools he took no fee, paying for his share like any member. His masterpiece was U.S. Steel, in the spring of 1901.', '后来主持资金池时，他不收费用，和其他成员一样出资。他的杰作是1901年春天的美国钢铁。'),
      L('host', 'In a few weeks he sold over seven hundred fifty thousand shares for the underwriters, while the Steel magnates sold hundreds of thousands more.', '几周之内，他为承销团卖出了七十五万多股，同时钢铁巨头们自己又卖出了几十万股。'),
    ] });
  }

  shot({ id: 'p10_steel', kind: 'info', tag: { en: 'AFTER THE BOOM', zh: '繁荣之后' }, title: { en: 'U.S. Steel Common: Marked Up, Then Undigested', zh: '美国钢铁普通股：拉高之后，消化不良' }, els: [
    { type: 'bars', x: 70, y: 255, w: 1000, h: 560, max: 60, vsize: 32, bars: [
      { v: 55, vl: '55', en: '1901 (Keene)', zh: '1901年（基恩）', color: '#2f5d8a' },
      { v: 10, vl: '10', en: '1903', zh: '1903年', color: '#b8322a', at: 1 },
      { v: 8.875, vl: '8⅞', en: '1904', zh: '1904年', color: '#7a1f1a', at: 1 },
    ] },
    { type: 'cards', x: 1110, y: 255, w: 740, ch: 170, cols: 1, max: 28, items: [
      { en: 'Not just a bull market: a boom, with unlimited backing.', zh: '不只是牛市：是一场繁荣，且有无限资金支持。', at: 0 },
      { en: 'Then the "undigested securities" panic.', zh: '随后是"消化不良的证券"恐慌。', at: 1, tagColor: '#b8322a' },
      { en: 'The public bought near the top, and held.', zh: '公众在高位买入，并一直持有。', at: 1, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'General conditions favoured him: not merely a bull market, but a boom, and a state of mind unlikely to be seen again.', '大环境对他有利：那不只是牛市，而是一场繁荣，一种难以再现的群体心态。'),
    L('host', 'Then came the undigested-securities panic. Steel common, marked up to 55 in 1901, sold at 10 in 1903 and eight and seven-eighths in 1904.', '随后爆发了"消化不良的证券"恐慌。1901年被拉到55的钢铁普通股，1903年跌到10，1904年跌到8⅞。'),
  ] });

  shot({ id: 'p10_amalg', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Amalgamated Copper: Selling for Rogers and Rockefeller', zh: '联合铜业：为罗杰斯与洛克菲勒出货' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 200, max: 28, nodes: [
      { num: 1, en: 'Rogers & Rockefeller fail to sell their surplus stock', zh: '罗杰斯与洛克菲勒卖不掉多余的股票' },
      { num: 2, en: 'Keene sells 220,000 sh around par: ≈ $20–25M', zh: '基恩在面值附近卖出22万股：约2000–2500万美元', at: 1 },
      { num: 3, en: 'The public keeps buying: +10 points more', zh: '公众继续买入：再涨10点', at: 1 },
      { num: 4, en: '$200,000 check sent back: "not a stockbroker"', zh: '20万美元支票被退回："我不是股票经纪人"', at: 3 },
      { num: 5, en: 'Rogers\' "friendly tip": buy at ≈130', zh: '罗杰斯的"友好建议"：在约130买入', at: 3, color: '#f3c6c0' },
    ] },
    { type: 'cards', at: 2, x: 70, y: 490, w: 1100, ch: 140, cols: 2, max: 26, items: [
      { en: 'Day 1: almost out of the stock taken while marking it up', zh: '第1天：几乎卖光拉升时被迫接下的股票', at: 2 },
      { en: 'Day 2: buys back thousands of shares', zh: '第2天：买回数千股', at: 2 },
      { en: 'Day 3: sells on balance', zh: '第3天：净卖出', at: 2 },
      { en: 'Then: leaves it alone, to see how it takes care of itself', zh: '然后：撒手不管，看它能否自己站稳', at: 2 },
    ] },
    { type: 'box', at: 4, x: 1210, y: 490, w: 640, h: 325, color: '#f6d77a', en: 'Strategy: do the big selling on the way down after the big rise. Tactics: the daily moves.', zh: '战略：大涨之后，在下跌途中大举卖出。战术：每天的具体动作。', size: 30 },
  ], lines: [
    L('host', 'Amalgamated Copper. H. H. Rogers and William Rockefeller, with vast resources, had failed to sell their surplus stock. So they went to Keene.', '联合铜业。H·H·罗杰斯和威廉·洛克菲勒资源雄厚，却卖不掉手中多余的股票。于是他们找到了基恩。'),
    L('host', 'In a bull market he sold two hundred twenty thousand shares around par, for twenty to twenty-five million dollars. The public kept buying, ten points higher.', '他在牛市中于面值附近卖出二十二万股，得款约两千到两千五百万美元。公众继续买入，又推高了十个点。'),
    L('host', 'Day to day: almost out of stock one day, buying back thousands the next, selling on balance after that, then leaving it alone to see how it behaved.', '日常操作是：某天几乎卖光，次日买回数千股，再一天净卖出，然后撒手不管，看它表现如何。'),
    L('host', 'Rogers sent a check for two hundred thousand dollars. Keene returned it: he was not a stockbroker. Soon after, Rogers tipped him to buy Amalgamated around 130.', '罗杰斯寄来一张二十万美元的支票。基恩退了回去：他不是股票经纪人。不久后，罗杰斯"好心"建议他在130左右买入联合铜业。'),
    L('host', 'Know strategy from tactics. The strategy: sell big on the way down after the big rise. The daily moves were tactics.', '要分清战略与战术。战略是：大涨之后，在下跌途中大举卖出。每天的动作只是战术。'),
  ] });

  shot({ id: 'p10_temper', kind: 'info', tag: { en: 'THE MAN', zh: '其人' }, title: { en: 'Keene\'s Temperament', zh: '基恩的性情' }, els: [
    { type: 'person', id: 'keene', x: 330, y: 760, s: 1.05, expr: 'determined' },
    { type: 'cards', x: 650, y: 255, w: 1200, ch: 120, cols: 1, max: 30, items: [
      { en: 'Winning: irritable, sardonic. Losing: charming, witty company.', zh: '赚钱时：暴躁、尖刻。亏钱时：迷人、风趣。', at: 0 },
      { en: 'Never argued with the tape.', zh: '从不和纸带争辩。', at: 1 },
      { en: 'Utterly fearless, never reckless; turned in a twinkling when wrong.', zh: '无所畏惧却从不鲁莽；发现错了，瞬间掉头。', at: 1 },
      { en: '1876: arrived from California, made $9 million in two years.', zh: '1876年：从加州来到纽约，两年赚了900万美元。', at: 2, tagColor: '#2f7d3a' },
    ] },
  ], lines: [
    L('host', 'His secretary said Keene was irritable and sardonic when the market went his way, and charming, witty company when he was losing.', '他的秘书说，市场顺他意时，基恩暴躁而尖刻；亏钱时，他反倒风度翩翩、妙语连珠。'),
    L('host', 'He never argued with the tape. Utterly fearless but never reckless, he could turn in a twinkling when he found he was wrong.', '他从不和纸带争辩。他无所畏惧却从不鲁莽，一旦发现自己错了，能瞬间掉头。'),
    L('larry', 'Arriving from California in 1876, he made nine million dollars in two years. Some men move far faster than the mob. They\'re bound to lead.', '1876年他从加州来到纽约，两年赚了九百万美元。有些人的步伐远快于大众，他们注定领先。'),
  ] });

  shot({ id: 'p10_advert', kind: 'info', tag: { en: 'WHAT IT IS FOR', zh: '目的何在' }, title: { en: 'Manipulation = Advertising Through the Tape', zh: '操纵＝通过纸带做广告' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 120, cols: 2, max: 30, items: [
      { en: 'The tape must tell a story. The truer it is, the more convincing.', zh: '纸带要讲一个故事。越真实，越有说服力。', at: 0 },
      { en: 'Not only look strong: BE strong. Sound trading principles first.', zh: '不仅要看起来强：要真的强。先要有扎实的交易原则。', at: 0 },
      { en: 'Goal: marketability, selling fair-sized blocks at any time.', zh: '目标：可销售性，随时能卖出相当规模的股票。', at: 1 },
      { en: 'Goal: distribution. A thousand holders beat one.', zh: '目标：分散持有。一千个持有人胜过一个。', at: 2 },
    ] },
    { type: 'box', at: 3, x: 70, y: 555, w: 1780, h: 120, color: '#f6d77a', anchor: 'middle', en: 'The rule: mark it up to the highest point possible, then sell to the public on the way down.', zh: '规则：拉到尽可能高的价位，然后在下跌途中卖给公众。', size: 34 },
    { type: 'box', at: 3, x: 70, y: 700, w: 1780, h: 115, color: '#f3c6c0', anchor: 'middle', en: 'Today: misleading the market with the tape is illegal. Recognise the pattern; don\'t be the buyer.', zh: '如今：用盘面误导市场属违法。认出这种模式，别当接盘者。', size: 30 },
  ], lines: [
    L('larry', 'Manipulation is the art of advertising through the tape. The truer the story, the more convincing. A stock must not only look strong, but be strong.', '操纵就是通过纸带做广告的艺术。故事越真实，越有说服力。股票不仅要看起来强，还必须真的强。'),
    L('larry', 'Usually the object is marketability: being able to sell fair-sized blocks at some price at any time.', '通常的目标是可销售性：任何时候都能以某个价格卖出相当规模的股票。'),
    L('larry', 'And distribution: a stock held by a thousand people has a better market than one held by a single man.', '还有分散持有：一千人持有的股票，比一个人持有的股票市场更好。'),
    L('host', 'The rule Keene knew: push a stock as high as possible, then sell it to the public on the way down. Today that is illegal. Learn to spot it.', '基恩深知的规则：把股票推到尽可能高，然后在下跌途中卖给公众。如今这是违法的。要学会识别它。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p10_connor', kind: 'comic', panels: [
      P(a, { bg: 'floor', chars: [ch('agent', a, 0.5, 0.95, { expr: 'determined', pose: 'up', hat: 'top', mus: 'walrus', hy: 0.5 })] }),
      P(b, { at: 1, bg: 'floor', chars: [ch('trader', b, 0.3, 0.9, { expr: 'grin', hy: 0.55 }), ch('broker', b, 0.72, 0.9, { expr: 'grin', flip: true, hy: 0.55 })] }),
    ], caps: [{ x: 70, y: 70, w: 520, en: 'Washington E. Connor at the Western Union post.', zh: '华盛顿·E·康纳出现在西联电报的交易柱前。' }],
    bubbles: [{ at: 1, until: 1, x: 1180, y: 90, w: 500, en: 'Sell him all he wants!', zh: '他要多少就卖他多少！', tx: 1300, ty: 330 }],
    sfx: [{ at: 2, x: 1430, y: 640, t: 'NO; AND YES!', zh: '不是；也是！', size: 80, color: '#f6d77a' }], lines: [
      L('larry', 'When Jay Gould wanted to cinch control of Western Union, Washington E. Connor, unseen on the floor for years, suddenly appeared and bid for the stock in person.', '杰伊·古尔德想巩固对西联电报的控制时，多年没在交易大厅露面的华盛顿·E·康纳突然现身，亲自出价买入。'),
      L('larry', 'The traders laughed at so raw a trick, acting as though Gould wanted to buy. They cheerfully sold him all the stock he wanted.', '交易员们嘲笑这把戏太拙劣，以为他是假装古尔德要买。他们高高兴兴地把他想要的股票全卖给了他。'),
      L('larry', 'Was that manipulation? I can only answer: No, and yes!', '这算操纵吗？我只能回答：不是，也是！'),
    ] });
  }

  shot({ id: 'p10_calls', kind: 'info', tag: { en: 'HOW IT WAS DONE (THEN)', zh: '当年的做法' }, title: { en: 'Graduated Calls: Paid Only If It Works', zh: '阶梯期权：成功才有报酬' }, els: [
    { type: 'table', x: 70, y: 255, w: 900, widths: [0.4, 0.6], reveal: true, rowAt: [1, 1, 1, 1, 1], size: 25, cols: [['Call price', '行权价'], ['vs. market at 40', '相对市价40']], rows: [
      [['35', '35'], ['a little below the market', '略低于市价']],
      [['37', '37'], ['below', '低于市价']],
      [['40', '40'], ['at the market', '等于市价']],
      [['45, 50 …', '45、50……'], ['above the market', '高于市价']],
      [['up to 75 or 80', '直至75或80'], ['only if the stock gets there', '只有股价涨到才有用']],
    ], hl: [2] },
    { type: 'bars', at: 1, x: 1010, y: 255, w: 840, h: 400, max: 85, vsize: 26, bars: [
      { v: 35, vl: '35', en: '', zh: '', color: '#2f7d3a' }, { v: 37, vl: '37', en: '', zh: '', color: '#2f7d3a' }, { v: 40, vl: '40', en: 'market', zh: '市价', color: '#d9a441' },
      { v: 45, vl: '45', en: '', zh: '', color: '#2f5d8a' }, { v: 50, vl: '50', en: '', zh: '', color: '#2f5d8a' }, { v: 75, vl: '75', en: '', zh: '', color: '#2f5d8a' }, { v: 80, vl: '80', en: '', zh: '', color: '#2f5d8a' },
    ] },
    { type: 'box', at: 2, x: 1010, y: 680, w: 840, h: 135, color: '#f6d77a', en: 'Calls on 100,000 shares in blocks of some thousands. Fee contingent on success.', zh: '10万股期权，分成数千股一档。报酬取决于是否成功。', size: 28 },
  ], lines: [
    L('larry', 'Say a pool asks me to market its stock. I study its value and the market first. If I accept, I usually take calls on a block, graduated in price.', '假设一个资金池请我为它的股票做市。我先研究股票价值和市场状况。如果接受，我通常要一批阶梯价格的看涨期权。'),
    L('larry', 'Say a hundred thousand shares, with the stock at 40. Calls on some thousands at 35, more at 37, at 40, 45, 50, and so on up to 75 or 80.', '比如十万股，股价40。几千股行权价35，再一批37，然后40、45、50，依次直到75或80。'),
    L('larry', 'If my work lifts the price and there\'s good demand up there, I call the stock. I make money, and so do my clients. My fee depends on success.', '如果我的操作推高了价格，高位又有不错的需求，我就行权。我赚钱，客户也赚钱。我的报酬取决于成败。'),
  ] });

  shot({ id: 'p10_active', kind: 'info', tag: { en: 'HOW IT WAS DONE (THEN)', zh: '当年的做法' }, title: { en: 'Make It Active, Then Stabilise', zh: '先让它活跃，再稳住它' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 260, max: 28, nodes: [
      { num: 1, en: 'Make the stock active and strong: the tape is the best advertising', zh: '让股票活跃而强势：纸带是最好的广告' },
      { num: 2, en: 'Activity breeds explanations; room traders are the first buyers', zh: '活跃自会引来解释；场内交易员是第一批买家', at: 1 },
      { num: 3, en: 'Public demand comes: sell on balance, even short against the calls', zh: '公众需求到来：净卖出，甚至以期权为保障卖空', at: 3 },
      { num: 4, en: 'Weak day: buy back (cover). "The stabilising process"', zh: '弱势日：买回（回补）。"稳定价格的过程"', at: 4, color: '#cfe3c4' },
    ] },
    { type: 'box', at: 2, x: 70, y: 560, w: 1780, h: 110, color: '#fbf3df', en: 'Keene used the most active room traders, sometimes with verbal calls above the market, to hide the source and spread the business.', zh: '基恩雇用最活跃的场内交易员，有时给他们高于市价的口头期权，以隐藏来源、扩散生意。', size: 28 },
    { type: 'box', at: 4, x: 70, y: 695, w: 1780, h: 120, color: '#f6d77a', anchor: 'middle', en: 'Support without accumulating: the buying only covers stock sold higher.', zh: '托盘而不增加持仓：买入只是回补在高位卖出的股票。', size: 30 },
  ], lines: [
    L('larry', 'First, advertise that a bull movement is on, by making the stock active and strong. The ticker is the greatest publicity agent in the world.', '第一步，宣告上涨行情已经开始：让股票活跃而强势。行情收报机是世上最好的宣传员。'),
    L('larry', 'When there\'s activity, explanations appear by themselves. Floor traders ask only for activity. They are the manipulator\'s first crop of buyers.', '一有活跃，解释就会自己冒出来。场内交易员只要活跃就行。他们是操盘手的第一批买家。'),
    L('host', 'Keene used the most active room traders, sometimes giving them verbal calls above the market, so they did useful work before they could cash in.', '基恩雇用最活跃的场内交易员，有时给他们高于市价的口头期权，让他们在兑现之前先出力。'),
    L('larry', 'When the public comes in, I fill the demand. If it takes more than I hold, I sell short, safely, because I\'m selling against my calls.', '公众进场后，我满足他们的需求。如果需求超过我的持股，我就卖空。这很安全，因为我有期权作保障。'),
    L('larry', 'On a weak day I buy, covering those shorts. That supports the stock without adding to my line. I call it the stabilising process.', '遇到弱势日，我就买入，回补那些空头。这样既托住了股价，又不增加持仓。我称之为"稳定价格的过程"。'),
  ] });

  shot({ id: 'p10_distrib', kind: 'info', tag: { en: 'HOW IT WAS DONE (THEN)', zh: '当年的做法' }, title: { en: 'The Real Selling Happens on the Way Down', zh: '真正的出货发生在下跌途中' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 570, xr: [0, 12], yr: [30, 82], yTicks: [40], yLabel: ['A manipulated stock (illustrative, no data)', '被操纵的股票（示意，无数据）'], illustrative: true,
      bands: [{ x0: 0, x1: 7, y0: 30, y1: 76, color: '#2f7d3a', op: 0.08, label: ['Up: sell, never enough to stop it', '上涨：卖，但绝不卖到阻止上涨'] }, { x0: 7, x1: 12, y0: 30, y1: 76, color: '#b8322a', op: 0.1, label: ['Down: main distribution', '下跌：主力出货'], at: 2 }],
      series: [{ pts: [[0, 40], [1, 46], [1.6, 43], [2.6, 52], [3.2, 49], [4.2, 58], [4.8, 55], [5.8, 66], [6.6, 72], [7.4, 66], [8, 69], [8.8, 60], [9.4, 63], [10.2, 54], [11, 56], [12, 48]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2] }],
      notes: [{ x: 1.6, y: 43, at: 1, en: 'Weak day: buys (covers)', zh: '弱势日：买入（回补）', dx: 30, dy: 25, w: 230 }, { x: 8, y: 69, at: 3, en: 'Rallies + short covering absorb stock', zh: '反弹与空头回补吸收筹码', dx: 30, dy: 60, w: 260 }] },
    { type: 'quote', at: 3, x: 1290, y: 250, w: 560, size: 32, zsize: 26, bottom: 600, en: 'It is perfectly astonishing how much stock a man can get rid of on a decline.', zh: '一个人在下跌中能卖掉多少股票，实在令人震惊。', src: 'Ch. XX' },
    { type: 'box', at: 1, x: 1290, y: 625, w: 560, h: 190, color: '#f6d77a', en: 'Always short a little = "riskless buying power" for weak days.', zh: '始终持有少量空头＝为弱势日准备的"无风险购买力"。', size: 28 },
  ], lines: [
    L('larry', 'As the market broadens I sell on the way up, but never enough to check the rise. That encourages the conservative speculators.', '随着市场扩大，我在上涨途中卖出，但绝不多到阻止上涨。这会鼓励稳健的投机者。'),
    L('larry', 'By always being short, I can support the stock on weak days without danger. I sometimes sell without a profit, just to build that riskless buying power.', '因为始终持有空头，我可以在弱势日毫无风险地托盘。有时我甚至不赚钱也卖，只为积攒这种无风险的购买力。'),
    L('larry', 'The public thinks the selling is done at the top. It isn\'t. The principal marketing is done on the way down.', '公众以为出货是在顶部完成的。不是。主要的出货是在下跌途中完成的。'),
    L('larry', 'Traders always look for a rally, and shorts cover. "It is perfectly astonishing how much stock a man can get rid of on a decline."', '交易者总在等反弹，空头也要回补。"一个人在下跌中能卖掉多少股票，实在令人震惊。"'),
  ] });

  shot({ id: 'p10_quit', kind: 'info', tag: { en: 'THE TRADER INSIDE', zh: '始终是交易者' }, title: { en: 'Even a Manipulator Obeys the Tape', zh: '操盘手也得服从纸带' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.4, 0.6], reveal: true, rowAt: [0, 1, 2], size: 30, cols: [['The tape says', '纸带显示'], ['What he does', '他怎么做']], rows: [
      [['Stock rises on my buying', '我一买它就涨'], ['Buy with confidence, own money: the line of least resistance', '放心买入，用自己的钱：这是最小阻力线']],
      [['My buying doesn\'t put it up', '我买它也不涨'], ['Stop buying; sell it down, as with any stock', '停止买入；把它卖下去，和对待任何股票一样']],
      [['Waterlogged: won\'t go up at all', '"泡了水"：怎么也涨不动'], ['Sell. It drops further than you\'d like, but can be nursed back', '卖出。跌得比你希望的多，但能慢慢养回来']],
    ] },
    { type: 'box', at: 3, x: 70, y: 640, w: 1780, h: 175, color: '#f6d77a', anchor: 'middle', en: 'When it doesn\'t act as it should: quit. Don\'t argue with the tape. Don\'t try to lure the profit back.', zh: '走势不对就收手。别和纸带争辩。别想把利润引诱回来。', size: 36 },
  ], lines: [
    L('larry', 'As long as the stock goes up on my buying, I buy with confidence, as I would any stock acting that way. That\'s the line of least resistance.', '只要我一买它就涨，我就放心买入，就像对待任何这样表现的股票。这就是最小阻力线。'),
    L('larry', 'When my buying doesn\'t put it up, I stop buying and sell it down, exactly as I would if I weren\'t manipulating it.', '当我的买入推不动它，我就停止买入并把它卖下去，和我不操纵它时的做法完全一样。'),
    L('larry', 'If a stock gets waterlogged and won\'t go up, that\'s the time to sell. It may fall further than you\'d like, but you can nurse it back.', '如果股票像泡了水一样涨不动，那就是卖出的时候。它可能跌得比你希望的多，但你可以慢慢把它养回来。'),
    L('larry', 'When the stock you\'re manipulating doesn\'t act as it should, quit. Don\'t argue with the tape. Quit while quitting is cheap.', '当你操纵的股票走势不如预期，就收手。别和纸带争辩。趁收手代价还小，赶紧收手。'),
  ] });

  shot({ id: 'p10_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'Episode 10 Takeaways', zh: '第十集要点' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { en: 'Weapons change; human nature doesn\'t. People repeat their mistakes.', zh: '武器会变，人性不变。人们会重复犯错。', at: 0 },
      { en: 'Corners rarely paid. Shorting a price because it is "too high" can ruin you.', zh: '逼空很少赚钱。仅因"价格太高"而做空可能让你破产。', at: 1 },
      { en: 'Activity is advertising: a busy tape invents its own reasons.', zh: '活跃就是广告：热闹的盘面会自己编出理由。', at: 2 },
      { en: 'The big selling happens on the way down, into hopeful rallies.', zh: '大规模出货发生在下跌途中，卖给盼反弹的人。', at: 3 },
      { en: 'Even a manipulator quits when the tape says no.', zh: '纸带说"不"时，连操盘手也会收手。', at: 3 },
      { en: 'These methods are illegal today. Study them to recognise them.', zh: '这些手法如今违法。学习它们是为了识别它们。', at: 3, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'Takeaways. Weapons change, but human nature doesn\'t. Fear, hope and the wish for easy money repeat in every era.', '本集要点。武器会变，人性不变。恐惧、希望和不劳而获的念头，每个时代都在重演。'),
    L('host', 'Corners rarely paid, and they punished professionals who sold only because a price looked too high.', '逼空很少赚钱，它惩罚的是那些只因价格看起来太高就做空的职业交易者。'),
    L('host', 'Activity is advertising. A busy tape invents its own reasons, so always ask who needs the activity.', '活跃就是广告。热闹的盘面会自己编出理由，所以永远要问：谁需要这种活跃？'),
    L('host', 'The big selling happens on the way down. And even a manipulator quits when the tape says no.', '大规模出货发生在下跌途中。纸带说"不"的时候，连操盘手也会收手。'),
  ] });

  shot({ id: 'p10_recognise', kind: 'info', tag: { en: 'HOW TO RECOGNISE IT', zh: '如何识别' }, title: { en: 'Spotting the Old Tricks Today', zh: '识别今天的老把戏' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.22, 0.36, 0.42], reveal: true, rowAt: [0, 0, 1, 1, 2], size: 24, cols: [['Practice', '手法'], ['What it looked like', '当年的样子'], ['Warning sign for you', '对你的警示信号']], rows: [
      [['Wash sales, matched orders', '虚假对敲、配对成交'], ['Heavy trading with no real change of owner', '成交很大，却没有真正换手'], ['Volume from nowhere; price snaps back when it stops', '成交量凭空出现；一停价格就回落']],
      [['Corner / squeeze', '逼空 / 轧空'], ['Shorts can\'t find stock to buy back', '空头买不到股票回补'], ['Big short interest vs. a small floating supply', '空头仓位远大于流通盘']],
      [['Activity as advertising', '以活跃做广告'], ['Sudden activity; stories follow', '突然活跃；随后故事出现'], ['Explanations arrive after the move. Ask who benefits', '解释在上涨之后才出现。问问谁受益']],
      [['Stabilising', '稳定价格'], ['Dips bought, rallies sold', '回调有人买，反弹有人卖'], ['Support appears on every weak day, while supply keeps coming', '每个弱势日都有托盘，供应却源源不断']],
      [['Distribution on the decline', '下跌中派发'], ['Top passes; each rally is sold into', '顶部已过；每次反弹都有人卖'], ['Weaker rallies while the stock stays in the news. Don\'t be the buyer', '反弹越来越弱，股票却一直上新闻。别当接盘者']],
    ] },
  ], lines: [
    L('host', 'How to recognise it. Volume from nowhere that vanishes, with the price snapping back, may be fictitious trading. A huge short interest in a thin float invites a squeeze.', '如何识别。凭空出现又消失、价格随即回落的成交量，可能是虚假交易。流通盘很小而空头很大，容易招来轧空。'),
    L('host', 'Activity first and explanations afterwards is advertising. A stock bought on every dip and sold on every rally may be being stabilised for distribution.', '先有活跃、后有解释，那是广告。每次回调有人买、每次反弹有人卖，可能是在为派发而稳定价格。'),
    L('host', 'And when rallies grow weaker while the stock stays in the news, the selling is happening on the way down. Don\'t be the buyer.', '当反弹越来越弱、股票却一直在新闻里，出货就正在下跌途中进行。别当那个接盘者。'),
  ] });
};
