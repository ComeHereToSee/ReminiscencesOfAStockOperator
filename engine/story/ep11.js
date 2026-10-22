// Episode 11 · Chapters XXI – XXII · Making a Market
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const PRENTISS = { who: { en: 'JOHN PRENTISS', zh: '约翰·普伦蒂斯' } };
  const BARNES = { who: { en: 'JIM BARNES', zh: '吉姆·巴恩斯' } };

  episode(11, 'Making a Market', '做市', { en: 'Chapters XXI – XXII', zh: '原著第二十一至二十二章' }, '#16130f', [
    L('host', 'Episode eleven. Making a market: two jobs that worked, one that failed, and why.', '第十一集：做市。两次成功，一次失败，以及背后的原因。'),
  ]);

  // ---------------------------------------------------------------- how he got into it
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p11_origin', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, chars: [ch('larryOld', a, 0.3, 0.95, { expr: 'smile', pose: 'paper', headline: 'PAID IN FULL' })],
        props: [{ t: 'paper', x: 520, y: 70, w: 520, h: 330, en: 'LIVINGSTON PAYS BACK MILLIONS', zh: '利文斯顿偿还数百万旧债', size: 42, rot: 3 }] }),
      P(b, { at: 1, bg: 'dark', chars: [ch('keene', b, 0.5, 0.5, { expr: 'tired', hy: 0.42 })], tint: '#000' }),
      P(c, { at: 2, bg: 'floor' }),
    ], caps: [
      { x: 70, y: 70, w: 420, en: '1915: the comeback.', zh: '1915年：东山再起。' },
      { at: 1, x: 1190, y: 290, w: 330, en: 'Keene: gone.', zh: '基恩：已故。' },
      { at: 2, x: 1190, y: 700, w: 560, en: 'The plunging Westerners: quiet.', zh: '西部豪赌客：沉寂。' },
    ], lines: [
      L('larry', 'After my 1915 comeback in Bethlehem Steel, I repaid my old debts in full, and the papers made a big story of it.', '1915年我靠伯利恒钢铁东山再起后，全额还清了旧债，报纸对此大做文章。'),
      L('larry', 'The Street always wants new leaders. Promoters had hired Keene to sell big blocks because of his fame as a trader.', '华尔街总想找到新的领袖。当年发起人请基恩推销大宗股票，正是看中他作为交易者的名声。'),
      L('larry', 'But Keene was dead, and the plunging Westerners of the 1901 Steel days had gone quiet. So promoters came to me.', '但基恩已经去世，1901年靠钢铁股发家的那批西部豪赌客也已沉寂。于是发起人们找上了我。'),
    ] });
  }

  // ---------------------------------------------------------------- Imperial Steel
  {
    const [a, b] = HALF;
    shot({ id: 'p11_imp_setup', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { board: [['IMPERIAL STEEL'], ['70']], hl: [1, 0] }, chars: [
        ch('banker', a, 0.28, 0.85, { expr: 'smile', hat: 'none', hy: 0.62 }),
        ch('larryOld', a, 0.74, 0.85, { expr: 'think', pose: 'chin', hy: 0.62 })] }),
      P(b, { at: 1, bg: 'office', bgo: { board: [['INDUSTRIAL', 'COMMERCIAL', 'FINANCIAL'], ['✓', '✓', '✓']] }, chars: [
        ch('larryOld', b, 0.24, 0.85, { expr: 'determined', pose: 'paper', headline: 'REPORTS', hy: 0.64 })] }),
    ], caps: [
      { x: 70, y: 690, w: 560, en: 'Imperial Steel: sound, but nobody traded it.', zh: '帝国钢铁：公司扎实，却无人交易。' },
    ], bubbles: [
      { at: 1, x: 90, y: 230, w: 520, en: 'Sell our holdings for us, at better prices than we could get?', zh: '能替我们出货吗？卖个比我们自己卖更好的价？', tx: 270, ty: 420, until: 2 },
    ], sfx: [
      { at: 3, x: 1620, y: 420, t: 'NO CASH', zh: '不要现金', size: 70, color: '#fff', font: 'cond', rot: -6 },
      { at: 3, x: 1500, y: 600, t: 'CALLS: 100,000 SH · 70 → 100', zh: '十万股看涨期权 · 70→100', size: 50, color: '#f6d77a', font: 'cond', rot: -4 },
    ], lines: [
      L('larry', 'Imperial Steel was sound, but nobody traded it. About 30 percent was with the public; the syndicate controlled the other 70.', '帝国钢铁公司扎实，却无人交易。约30%在公众手里，其余70%由辛迪加控制。'),
      L('larry', 'Its leading member asked me to sell their holdings for them, at better prices. First, I had experts examine the company.', '辛迪加的头号人物请我替他们以更好的价格出货。我先请专家对公司做了全面调查。'),
      L('larry', 'The reports said it was valuable; a rise would simply be the market discounting the future. So I took the job.', '报告显示它很有价值；上涨不过是市场在贴现未来。于是我接下了这份活。'),
      L('larry', 'My fee: no cash. Only calls on a hundred thousand shares, at prices running from 70 up to 100.', '我的报酬：不要现金，只要十万股的看涨期权，行权价从70一路排到100。'),
      L('host', 'Not greedy: the insiders couldn\'t sell even fifty thousand shares at 70, and he\'d earn nothing unless they made millions first.', '这并不贪：内部人连五万股都无法在70卖出；而且除非他们先赚到几百万，他一分钱也拿不到。'),
    ] });
  }

  shot({ id: 'p11_imp_steps', kind: 'info', tag: { en: 'HOW IT WORKED', zh: '手法拆解' }, title: { en: 'Imperial Steel, Step by Step', zh: '帝国钢铁：一步一步' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, size: 23, widths: [0.15, 0.47, 0.38], cols: [['Step', '步骤'], ['What he did', '做法'], ['Why', '目的']], reveal: true, rows: [
      [['1 · Lock up', '1 · 锁仓'], ['Syndicate\'s 70% deposited under a trust agreement', '辛迪加的70%股份存入信托协议'], ['Big holders can\'t dump stock on him', '大户无法把股票倒给他']],
      [['2 · Scout', '2 · 摸底'], ['Brokers find what is for sale at or just above 70', '经纪人摸清70及略高价位的卖盘'], ['"Nominally 70": not 1,000 sh could sell there', '名义70：在那里连1,000股都卖不掉']],
      [['3 · Absorb', '3 · 吸筹'], ['Quietly takes all stock offered at 70 and higher', '悄悄买下70及以上的全部卖盘'], ['Line of least resistance is now clearly up', '最小阻力线明显向上']],
      [['4 · Supply', '4 · 供货'], ['Floor traders see the rise and buy; he sells to them', '场内交易员看到上涨买入；他卖给他们'], ['Fill demand only; no over-fast advance', '只满足需求；不让涨得太快']],
      [['5 · Buy back', '5 · 回补'], ['Rise stalls, bulls sell; he buys back a couple of points lower', '涨势停顿、多头抛售；他低一两个点买回'], ['Checks the dip; the selling dries up', '止住回落；卖盘随之消失']],
      [['6 · Repeat', '6 · 重复'], ['Buy on dips, sell on rises, plus brief "bull flurries"', '回落时买、上涨时卖，偶尔急拉造势'], ['Always working higher; builds a free market', '始终逐步推高；培育自由买卖的市场']],
    ] },
  ], lines: [
    L('host', 'Step one: protection. The syndicate deposited its 70 percent under a trust agreement, so nobody could dump stock on him.', '第一步：自我保护。辛迪加把70%的股份存入信托协议，这样就没人能把股票倒给他。'),
    L('host', 'Step two: scout the supply. The price was nominally 70, but he couldn\'t have sold a thousand shares there.', '第二步：摸清卖盘。名义价格是70，但在那里他连一千股都卖不掉。'),
    L('host', 'Step three: he quietly bought everything offered at 70 and up. With that supply gone, the line of least resistance was plainly up.', '第三步：他悄悄买下70及以上的全部卖盘。卖压一除，最小阻力线明显向上。'),
    L('host', 'Step four: floor traders saw it and bought. He sold them the stock he had just bought, only as much as they wanted.', '第四步：场内交易员看到后开始买入。他把刚买进的股票卖给他们，只按他们想要的量供应。'),
    L('host', 'Step five: their buying stopped, and disappointed bulls sold. He bought back a couple of points lower.', '第五步：他们停止买入，失望的多头开始抛售。他低一两个点把股票买回。'),
    L('host', 'Step six: repeat, buying and selling, but always working higher, until anyone could trade the stock freely.', '第六步：重复，买卖交替，但始终逐步推高，直到任何人都能自由买卖这只股票。'),
  ] });

  shot({ id: 'p11_imp_chart', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Imperial Steel: From 70 to Par', zh: '帝国钢铁：从70到100' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 565, xr: [0, 10], yr: [64, 106], yTicks: [70, 85, 100], illustrative: true,
      yLabel: ['Imperial Steel (70, 85 and 100 from the book; path illustrative)', '帝国钢铁（70、85、100据原书；走势为示意）'],
      series: [{ pts: [[0, 70], [1, 74], [1.6, 72], [2.6, 78], [3.2, 76], [4.2, 83], [4.8, 81], [5.8, 88], [6.4, 86], [7.4, 93], [8, 91], [9.4, 100]], color: '#2f7d3a', reveal: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1] }],
      hlines: [{ v: 85, label: ['His own line: only 7,000 sh, avg ≈85', '他自己的持仓：仅7,000股，均价约85'], color: '#8a5a2b', below: true }],
      notes: [
        { x: 1, y: 74, en: 'Sells to traders', zh: '卖给交易员', dx: -60, dy: -120, w: 200 },
        { x: 1.6, y: 72, en: 'Buys back lower', zh: '低位买回', dx: 40, dy: 40, w: 190 },
        { x: 9.4, y: 100, at: 1, en: 'Par: everybody wants it', zh: '到100：人人都想买', dx: -380, dy: -10, w: 310 },
      ] },
    { type: 'cards', x: 1290, y: 250, w: 560, ch: 170, cols: 1, max: 28, items: [
      { en: 'Fee: calls on 100,000 sh, graduated from 70 to 100.', zh: '报酬：十万股看涨期权，行权价70至100分级排列。' },
      { en: 'A banking house wanting control bought ALL his options: an enormous profit.', zh: '一家想取得控制权的银行买下他全部期权：利润巨大。', at: 2, tagColor: '#2f7d3a' },
      { en: 'Rises on your buying = O.K. Stops responding = sell.', zh: '随你的买入而涨＝正常。买不动了＝卖出。', at: 3, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('larry', 'Marking it up thirty points, I accumulated only seven thousand shares, averaging almost exactly 85.', '在推高三十点的过程中，我只积累了七千股，均价几乎正好85。'),
    L('larry', 'At par everybody wanted it. The rise was the proof: if it went thirty points from 70, why not thirty more?', '到了100，人人都想买。上涨就是证明：既然从70涨了三十点，为什么不能再涨三十点？'),
    L('larry', 'Then a banking house in the syndicate, wanting control of the company, bought all my options. An enormous profit; I took it instantly.', '随后，辛迪加中一家想取得公司控制权的银行买下了我全部期权。利润巨大，我当即接受。'),
    L('host', 'His check: while the price rose on his buying, all was well. When it stops responding to buying, sell.', '他的检验标准：只要股价随他的买入而上涨，一切正常。买入推不动了，就卖出。'),
  ] });

  // ---------------------------------------------------------------- Petroleum Products
  {
    const [a, b] = HALF;
    const pren = (pn, xf, o) => ch('banker', pn, xf, 0.85, Object.assign({ hat: 'none', hy: 0.62, suit: '#2b2b33' }, o));
    shot({ id: 'p11_prentiss', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { board: [['PETE PRODUCTS'], ['102 – 103']], hl: [1, 0] }, chars: [
        pren(a, 0.28, { expr: 'worry' }),
        ch('larryOld', a, 0.74, 0.85, { expr: 'frown', pose: 'cross', hy: 0.62 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['PETE PRODUCTS'], ['107']], hl: [1, 0] }, chars: [
        ch('larryOld', b, 0.28, 0.85, { expr: 'determined', pose: 'point', hy: 0.62 }),
        pren(b, 0.74, { expr: 'neutral', exprAt: { 4: 'shout', 5: 'angry' } })] }),
    ], caps: [
      { x: 70, y: 690, w: 560, en: 'Petroleum Products: a pool of 100,000+ shares it couldn\'t sell.', zh: '石油产品：资金池手握十万多股，卖不出去。' },
    ], bubbles: [
      { at: 1, x: 80, y: 250, w: 480, en: 'Take charge of it, as a favour to me!', zh: '就当帮我个忙，接手吧！', tx: 250, ty: 420, until: 2 },
      { at: 3, x: 1000, y: 70, w: 520, en: 'Sell for what you can get. The only way to sell is to sell.', zh: '能卖什么价就卖什么价。卖出的唯一办法就是卖。', tx: 1220, ty: 400 },
      { at: 4, x: 1460, y: 200, w: 380, kind: 'shout', en: 'Oh, no! Never!', zh: '不行！绝对不行！', tx: 1640, ty: 410 },
    ], lines: [
      L('larry', 'John Prentiss, a friend and top promoter, ran a Petroleum Products pool stuck with over a hundred thousand shares, at 102 to 103.', '约翰·普伦蒂斯是我的朋友，也是顶尖发起人。他操盘的石油产品资金池被十万多股套住，股价102到103。'),
      L('larry', 'I declined, but he made it personal, so I agreed against my judgment. I felt the bull swing was nearly over.', '我婉拒了，但他打出交情牌，我只好违背判断答应下来。我感觉这轮牛市已近尾声。'),
      L('larry', 'I got it to about 107 and sold a little on balance. But the public wasn\'t following.', '我把它推到107左右，还净卖出了一点。但公众没有跟进。'),
      L('larry', 'So I told him: when you\'re the only buyer, stop. Sell for what you can get. The only way to sell is to sell.', '所以我告诉他：只有你在买时，就停手。能卖什么价就卖什么价。卖出的唯一办法就是卖。'),
      L('friend', 'Let it break through par? Oh, no! Never!', '让它跌破100？不行！绝对不行！', PRENTISS),
      L('larry', 'He insisted I support it. So, as a bear market began, I was buying stock for his pool, on his orders.', '他坚持要我托盘。于是在熊市初起时，我奉他之命为资金池买进股票。'),
    ] });
  }

  shot({ id: 'p11_pete_chart', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Petroleum Products: Supporting a Stock in a Bear Market', zh: '石油产品：在熊市中托盘' }, els: [
    { type: 'line', x: 70, y: 250, w: 1100, h: 565, xr: [0, 10], yr: [82, 134], yTicks: [90, 100, 107, 125, 130], illustrative: true,
      yLabel: ['Pete Products (stated levels exact; path illustrative)', '石油产品（标注价位据原书；走势为示意）'],
      bands: [{ y0: 125, y1: 130, label: ['125–130: "can\'t be done"', '125–130：做不到'], color: '#b8322a', op: 0.18, tc: '#b8322a' }],
      series: [
        { pts: [[0, 102.5], [1, 103], [2, 105.5], [3, 107], [3.8, 105], [4.5, 106]], color: '#2f5d8a' },
        { at: 2, pts: [[4.5, 106], [5.5, 101], [6.2, 102], [7, 96], [7.6, 97], [8.6, 90], [9.6, 86]], color: '#b8322a', dash: '16 10' },
      ],
      hlines: [{ v: 100, label: ['Par', '面值100'], color: '#6b6b6b', lx: 10, below: true }],
      notes: [
        { x: 0, y: 102.5, en: 'Pool: 100,000+ sh at 102–103', zh: '资金池：十万多股，102–103', dx: 30, dy: 40, w: 300 },
        { x: 3, y: 107, en: 'He gets it to ≈107', zh: '他推到约107', dx: -40, dy: -125, w: 230 },
        { x: 9.6, y: 86, at: 2, en: 'Pool liquidates "much lower" (no figure given)', zh: '资金池在"低得多"处清仓（原书未给数字）', dx: -420, dy: -30, w: 330 },
      ] },
    { type: 'cards', x: 1210, y: 250, w: 640, ch: 170, cols: 1, max: 27, items: [
      { en: 'His forecast: a 15–20 point break, because the whole market was turning down.', zh: '他的预测：下跌15–20点，因为整个市场正在转跌。', at: 1 },
      { en: 'Prentiss insisted on support; the pool bought more on the way down.', zh: '普伦蒂斯坚持托盘；资金池在下跌中越买越多。', at: 2, tagColor: '#b8322a' },
      { en: 'Charge: "he was short other stocks." Answer: short because bearish, not bearish because short.', zh: '指控：他做空了别的股票。回答：因看空才做空，而非因做空才看空。', at: 3 },
    ] },
  ], lines: [
    L('larry', 'I couldn\'t put it up to 125 or 130. You put a stock up in order to sell it, but the big selling is done on the way down.', '我没法把它推到125或130。拉高股票是为了卖出，但大量卖出是在下跌途中完成的。'),
    L('larry', 'With the whole market turning, nothing could stop a fifteen to twenty point break. Better the pool sells now than someone else next month.', '整个市场都在转跌，什么也挡不住它下跌十五到二十点。与其下个月被别人卖下去，不如现在由资金池自己卖。'),
    L('larry', 'The pool stayed hung up, with its stock plus what it bought to hold the price, and finally liquidated much lower.', '资金池被套住了：原有的股票，加上为托价而买进的，最终在低得多的价位清仓。'),
    L('larry', 'Prentiss says I advised it because I was short other stocks. Nonsense. I went short only after I turned bearish.', '普伦蒂斯说我那样建议是因为我做空了别的股票。胡说。我是先看空，后做空。'),
  ] });

  shot({ id: 'p11_rules', kind: 'info', tag: { en: 'THE RULES', zh: '规则' }, title: { en: 'Rules for Running a Pool', zh: '资金池操盘规则' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 150, cols: 2, max: 30, items: [
      { en: 'For every 5,000 shares he buys, the public should buy 5,000 more.', zh: '他每买5,000股，公众应再买5,000股。' },
      { en: 'Buy your own stock only when you have company. The only buyer? Stop.', zh: '有人一起买时才买自己的股票。只有你在买？停手。', at: 1 },
      { en: 'No manipulator can beat the general market. Keene\'s 1901 Steel success: chiefly market and public mood.', zh: '没有操纵者能战胜大势。基恩1901年钢铁之胜：主要靠大势与公众心态。', at: 2, tagColor: '#b8322a' },
      { en: 'Bond houses sell to investors; a manipulator sells to speculators. Lies make it crooked.', zh: '债券商卖给投资者；操纵者卖给投机者。虚假陈述才让它变成欺诈。', at: 3 },
    ] },
    { type: 'box', at: 3, x: 70, y: 610, w: 1780, h: 110, color: '#f3c6c0', anchor: 'middle', size: 30, en: '⚠ Study this to RECOGNISE it. Pools and price-rigging of this kind are illegal in today\'s regulated markets.', zh: '⚠ 学习它是为了识别它。这类资金池与操纵价格的做法在当今受监管市场中属于违法。' },
  ], lines: [
    L('host', 'His pool rule: for every five thousand shares he buys, the public should be willing to buy five thousand more.', '他的资金池规则：他每买五千股，公众就应该愿意再买五千股。'),
    L('host', 'Buy your own stock when you have company. If you\'re the only buyer, stop, or you\'ll be soaked with stock you don\'t want.', '有人一起买时才买自己的股票。如果只有你在买，就停手，否则只会被一堆不想要的股票套住。'),
    L('host', 'And no manipulator can beat the general market. Keene\'s 1901 Steel triumph came chiefly because the market and the public mood were right.', '而且，没有操纵者能战胜大势。基恩1901年在钢铁股上的胜利，主要是因为大势和公众心态都对。'),
    L('larry', 'Without deliberate misrepresentation, selling stock this way isn\'t crooked. A bond house sells to investors; a manipulator sells to speculators.', '只要没有蓄意的虚假陈述，这样卖股票并不邪门。债券商卖给投资者，操纵者卖给投机者。'),
  ] });

  // ---------------------------------------------------------------- war boom and the "top"
  {
    const [a, b] = HALF;
    shot({ id: 'p11_boom', kind: 'comic', panels: [
      P(a, { bg: 'floor', props: [{ t: 'sign', x: 200, y: 70, w: 500, en: 'WAR BRIDES', zh: '战争新娘股', color: '#7a1f1a', size: 44 }] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['NEW ISSUES'], ['NO BIDS']], hl: [1, 0] }, tint: '#1f3354', chars: [
        ch('trader', b, 0.5, 0.8, { expr: 'tired', hy: 0.76 })] }),
    ], caps: [
      { x: 70, y: 700, w: 560, en: '1915: Allied purchases run into billions.', zh: '1915年：协约国采购高达数十亿美元。' },
      { at: 2, x: 1005, y: 700, w: 520, en: 'After the boom: nothing moves.', zh: '繁荣之后：一潭死水。' },
    ], sfx: [{ at: 1, x: 500, y: 430, t: '$ MILLIONS $', zh: '数百万', size: 80, color: '#f6d77a', font: 'cond' }], lines: [
      L('larry', 'In 1915, as Allied purchases reached billions, a boom began. Nobody had to lift a finger to make a market for a "war bride."', '1915年，协约国的采购高达数十亿美元，繁荣开始了。为"战争新娘"股做市，根本不用费吹灰之力。'),
      L('larry', 'Promoters made millions capitalizing contracts, or mere promises of contracts. The public bought anything adequately touted.', '发起人把合同、甚至只是合同的承诺包装上市，赚了几百万。公众买进任何吹捧到位的东西。'),
      L('larry', 'When the boom faded, the blind buying stopped. Prices needn\'t even fall to make people gloomy; a long dull spell will do it.', '繁荣褪去，盲目买入就停止了。价格甚至不必下跌，人们就会悲观；市场沉闷一段时间就够了。'),
    ] });
  }

  shot({ id: 'p11_top', kind: 'info', tag: { en: 'PSYCHOLOGY', zh: '心理' }, title: { en: 'Where Is the Top? The Average Man\'s Answer', zh: '顶在哪里？普通人的答案' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 565, xr: [0, 7.4], yr: [0, 95], yTicks: [15, 30, 50, 60, 70, 85], illustrative: true,
      yLabel: ['A boom stock (prices from the book; timing illustrative)', '繁荣期的股票（价格据原书；时间为示意）'],
      series: [{ pts: [[0, 13], [1, 30], [2, 50], [3, 60], [4, 70], [5, 75], [6, 80], [7, 85]], color: '#b8322a', reveal: [0, 1, 2, 3, 3, 3, 4, 4] }],
      notes: [
        { x: 1, y: 30, at: 1, en: '"Surely the top"', zh: '"肯定到顶了"', dx: 30, dy: 10, w: 220 },
        { x: 2, y: 50, at: 2, en: '"Absolutely the end"', zh: '"绝对到头了"', dx: 30, dy: 10, w: 230 },
        { x: 5, y: 75, at: 3, en: '"Can\'t go any higher"', zh: '"不可能再涨了"', dx: -20, dy: 40, w: 240 },
        { x: 7, y: 85, at: 4, en: 'Stops believing in any limit', zh: '不再相信有上限', dx: -340, dy: -40, w: 260 },
      ] },
    { type: 'quote', at: 5, x: 1290, y: 250, w: 560, size: 34, zsize: 29, en: 'The top is never in sight when the vision is vitiated by hope.', zh: '当视线被希望蒙蔽时，顶部永远看不见。', src: 'Ch. XXI' },
    { type: 'box', at: 5, x: 1290, y: 650, w: 560, h: 160, color: '#f6d77a', size: 26, en: 'Boom profits are made first by the public, on paper. And they stay on paper.', zh: '繁荣中的利润，公众最先赚到，但在纸面上，而且一直停留在纸面上。' },
  ], lines: [
    L('host', 'Promoters launch too late because they won\'t see the boom\'s end. Here is the average man\'s idea of the top.', '发起人上市太晚，是因为不愿看到繁荣结束。来看看普通人心目中的顶部。'),
    L('host', 'A stock nobody wanted under 15 jumps to 30. Surely that\'s the top.', '一只不到15元都没人要的股票涨到了30。这肯定是顶了。'),
    L('host', 'Then 50. That is absolutely the end.', '然后涨到50。这下绝对到头了。'),
    L('host', 'Then 60, 70, 75. Now it certainly can\'t go any higher.', '然后60、70、75。这下肯定不可能再涨了。'),
    L('host', 'Then 80, 85. Now he stops believing there\'s any limit at all. He thinks of prices, never of values.', '然后80、85。这时他干脆不再相信有任何上限。他只看价格，从不看价值。'),
    L('larry', 'The top is never in sight when the vision is vitiated by hope. The public\'s boom profits are made on paper, and stay there.', '"当视线被希望蒙蔽时，顶部永远看不见。"公众在繁荣中的利润是纸上的，而且一直留在纸上。'),
  ] });

  // ---------------------------------------------------------------- Consolidated Stove
  {
    const [a, b] = HALF;
    shot({ id: 'p11_barnes', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { board: [['CONS. STOVE'], ['37']], hl: [1, 0] }, chars: [
        ch('broker', a, 0.28, 0.85, { expr: 'worry', hat: 'none', hy: 0.62 }),
        ch('larryOld', a, 0.74, 0.85, { expr: 'think', pose: 'chin', hy: 0.62 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['MARSHALL NAT\'L BANK'], ['LOANS: $$$']] },
        chars: [ch('larry', b, 0.5, 0.75, { expr: 'grin', pose: 'money', hair: '#3a2a1a', suit: '#5a4a6a', hy: 0.64 })] }),
    ], bubbles: [
      { at: 0, x: 80, y: 220, w: 470, en: 'I want you to do me a great favour.', zh: '我想请你帮个大忙。', tx: 250, ty: 420, until: 1 },
    ], caps: [
      { at: 2, x: 1005, y: 720, w: 420, en: 'The boy banker.', zh: '少年银行家。' },
    ], lines: [
      L('friend', 'Larry, do me a great favour. Market a big block of Consolidated Stove for my firm.', '拉瑞，帮我个大忙。替我的公司推销一大批联合炉具的股票。', BARNES),
      L('larry', 'Jim Barnes was my broker and close friend. I owed him, and his firm was in deep, so I agreed.', '吉姆·巴恩斯是我的经纪人和挚友。我欠他人情，他的公司又陷得很深，于是我答应了。'),
      L('larry', 'It was the age of the boy banker. Banks lent freely to promoters, and youth was a bank president\'s chief qualification.', '那是"少年银行家"的时代。银行慷慨地借钱给发起人，年轻成了银行行长的首要资格。'),
      L('larry', 'Barnes\'s group, friends of the Marshall National Bank\'s young president, merged three stove companies to sell the stock to the public.', '巴恩斯一伙与马歇尔国民银行的年轻行长交好，合并了三家炉具公司，准备向公众卖股票。'),
    ] });
  }

  shot({ id: 'p11_stove_deal', kind: 'info', tag: { en: 'THE STRUCTURE', zh: '交易结构' }, title: { en: 'Building Consolidated Stove', zh: '联合炉具是怎样拼出来的' }, els: [
    { type: 'table', x: 70, y: 255, w: 1080, size: 25, widths: [0.3, 0.38, 0.32], cols: [['Company', '公司'], ['Old price', '原股价'], ['Swap', '换股']], rows: [
      [['Gray Stove', '格雷炉具'], ['≈125, pays dividends', '约125，有分红'], ['4 new for 1 old', '一股换四股新股']],
      [['Midland Stove', '米德兰炉具'], ['25–30 on the Curb', '场外市场25–30'], ['1 for 1', '一换一']],
      [['Western Stove', '西部炉具'], ['25–30 on the Curb', '场外市场25–30'], ['1 for 1', '一换一']],
    ] },
    { type: 'box', at: 1, x: 70, y: 615, w: 1080, h: 200, color: '#f6d77a', size: 28, en: '"Changing the colour of the certificates": quadruple the shares, sell the new ones at 30 or 35, and the old stock fetches the equivalent of 120 to 140, a price it could never reach.', zh: '"换个颜色的股票凭证"：股份翻四倍，新股卖30或35，旧股就相当于卖到120到140，这是它自己永远到不了的价位。' },
    { type: 'bars', at: 2, x: 1190, y: 255, w: 660, h: 400, max: 60, vsize: 30, bars: [
      { v: 35, vl: '$35', en: 'Bank loan per share', zh: '每股贷款', color: '#2f5d8a' },
      { v: 50, vl: '50', en: '"Won\'t go below"', zh: '"不会跌破"', color: '#2f7d3a', at: 3 },
    ] },
    { type: 'box', at: 2, x: 1190, y: 680, w: 660, h: 130, color: '#fbf3df', size: 26, en: 'Marshall National lends $3,500,000 on 100,000 new shares.', zh: '马歇尔国民银行以十万股新股为抵押，放贷350万美元。' },
  ], lines: [
    L('host', 'Gray Stove, around 125, came in at four new shares for one. Midland and Western, 25 to 30 on the Curb, came in share for share.', '格雷炉具股价约125，按一股换四股新股并入。米德兰和西部在场外报25到30，按一换一并入。'),
    L('host', 'An old device: change the colour of the certificates. Quadruple the shares, sell them at 30 or 35, and the old stock fetches 120 to 140.', '老把戏：换个颜色的股票凭证。股份翻四倍，新股卖30或35，旧股就相当于卖到120到140。'),
    L('host', 'To raise cash, the bank lent the syndicate three and a half million dollars on a hundred thousand shares: thirty-five dollars a share.', '为筹集现金，银行以十万股为抵押，借给辛迪加三百五十万美元：合每股三十五美元。'),
    L('host', 'And the syndicate assured the president, he was told, that the price would not go below 50.', '而且据他所闻，辛迪加还向行长保证，股价不会跌破50。'),
  ] });

  shot({ id: 'p11_stove_ipo', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'The Offering: Two Capital Blunders', zh: '发行：两大致命失误' }, els: [
    { type: 'line', x: 70, y: 250, w: 1100, h: 565, xr: [0, 10], yr: [31, 54], yTicks: [35, 37, 40, 50], illustrative: true,
      yLabel: ['Consolidated Stove (stated levels exact; path illustrative)', '联合炉具（标注价位据原书；走势为示意）'],
      series: [{ pts: [[0, 50], [0.7, 50.4], [1.5, 48.5], [2.3, 49], [3.2, 45], [4, 42], [4.6, 40.3], [5.3, 41], [6, 40.2], [6.8, 38.5], [7.5, 37], [10, 37]], color: '#7a1f1a', reveal: [0, 0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3] }],
      hlines: [
        { v: 50, label: ['Offered at $50 · 25% oversubscribed', '以50发行 · 超额认购25%'], color: '#2f7d3a', below: true },
        { v: 40, x0: 3, x1: 7, lx: 3, label: ['Barnes supports at 40', '巴恩斯在40托盘'], color: '#2f5d8a', at: 3 },
        { v: 37, x0: 7, x1: 10, lx: 10, label: ['Pegged at 37', '钉在37'], color: '#8a5a2b', at: 3 },
        { v: 35, label: ['Bank loan: $35/sh', '银行贷款：每股35'], color: '#b8322a', below: true, at: 3 },
      ],
      notes: [{ x: 0.7, y: 50.4, at: 2, en: 'Never more than a fraction over 50', zh: '从未高出50多少', dx: 250, dy: 15, w: 280 }] },
    { type: 'cards', x: 1210, y: 250, w: 640, ch: 168, cols: 1, max: 26, items: [
      { en: 'Blunder 1 · Timing: the market was saturated with new issues, and they expected the boom to last.', zh: '失误一 · 时机：新股已饱和，他们却以为牛市还会持续。', tagColor: '#b8322a' },
      { en: 'Blunder 2 · Underallotting. Allot in full = short 25% = free support.', zh: '失误二 · 少配股。足额配售＝做空25%＝零成本托盘。', at: 1, tagColor: '#b8322a' },
      { en: 'Insiders didn\'t support it. No inside support is a pretty good bear tip.', zh: '内部人不托盘。缺乏内部支撑，本身就是不错的看空信号。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Heavily advertised, it was offered at 50 and oversubscribed by 25 percent. The promoters got greedy and underallotted it.', '在大肆宣传下，新股以50发行，超额认购25%。发起人贪心起来，竟少配了股。'),
    L('host', 'Allotting in full would have left them short a quarter of the issue, able to support the price at no cost to themselves.', '足额配售的话，他们就等于做空了四分之一的发行量，可以零成本托住股价。'),
    L('host', 'Then the market turned, and insiders didn\'t support it. It never sold more than a fraction above 50.', '随后大势转弱，内部人也不托盘。它的成交价从未高出50多少。'),
    L('host', 'Barnes\'s group had to buy to hold 40, then pegged it at 37 to protect the bank\'s loan at 35 a share.', '巴恩斯一伙不得不买入守住40，后来又把它钉在37，以保护银行每股35的贷款。'),
    L('larry', 'When the boy-banker days ended, the bank wanted its money, and Jim asked me to sell those hundred thousand shares.', '少年银行家的时代结束后，银行要求还钱，吉姆请我卖掉那十万股。'),
  ] });

  shot({ id: 'p11_stove_plan', kind: 'info', tag: { en: 'THE PLAN', zh: '对策' }, title: { en: 'The Overhang, and How He Tied It Up', zh: '上方抛压，以及他如何锁住它' }, els: [
    { type: 'bars', x: 70, y: 255, w: 860, h: 440, max: 110000, vsize: 28, bars: [
      { v: 70000, vl: '70,000', en: 'Kane & Co.', zh: '凯恩公司', color: '#8a5a2b' },
      { v: 70000, vl: '70,000', en: 'Sen. Gordon', zh: '戈登参议员', color: '#8a5a2b' },
      { v: 60000, vl: '60,000', en: 'Joshua Wolff', zh: '约书亚·沃尔夫', color: '#8a5a2b' },
      { v: 100000, vl: '100,000', en: 'The bank\'s block', zh: '银行那批', color: '#2f5d8a', at: 4 },
    ] },
    { type: 'box', x: 70, y: 715, w: 860, h: 100, color: '#f3c6c0', anchor: 'middle', size: 26, en: '200,000 shares in three hands', zh: '二十万股握在三人手里' },
    { type: 'cards', x: 980, y: 255, w: 870, ch: 92, cols: 1, max: 28, items: [
      { en: 'A syndicate raises $6,000,000 in cash', zh: '组建辛迪加，筹集600万美元现金', at: 2 },
      { en: 'It gets calls on their 200,000 sh at 40', zh: '辛迪加获得20万股、行权价40的看涨期权', at: 2 },
      { en: 'All their stock goes into escrow', zh: '全部股票交由第三方托管', at: 2 },
      { en: '300,000 shares tied up in all', zh: '共计30万股被锁住', at: 4, color: '#f6d77a', tagColor: '#2f5d8a' },
    ] },
    { type: 'box', at: 3, x: 980, y: 715, w: 870, h: 100, color: '#fbf3df', anchor: 'middle', size: 24, en: 'Gates\'s verse: tarantula vs. centipede. Protect yourself, even among friends.', zh: '盖茨的打油诗：狼蛛与蜈蚣。即使在朋友之间，也要保护自己。' },
  ], lines: [
    L('larry', 'The danger: two hundred thousand shares in three hands. Kane\'s firm and Senator Gordon had seventy thousand each, Joshua Wolff sixty thousand.', '危险在于：二十万股集中在三人手里。凯恩的公司和戈登参议员各有七万股，约书亚·沃尔夫有六万股。'),
    L('larry', 'Make it active, and they\'d unload on me. My offer: hold off while I sell the bank\'s stock, and I\'ll make a market for us all.', '一旦股票活跃起来，他们就会把货倒给我。我的提议：我卖银行的股票时你们按兵不动，我为大家做一个市场。'),
    L('larry', 'They formed a syndicate to raise six million in cash, gave it calls on their shares at 40, and put all the stock in escrow.', '他们组建辛迪加筹集六百万现金，以40为价给辛迪加看涨期权，并把全部股票交给第三方托管。'),
    L('larry', 'Why escrow among friends? A verse credited to John W. Gates: a tarantula jumps a centipede, planning to poison him before he gets poisoned.', '朋友之间为何还要托管？据说约翰·W·盖茨写过一首诗：狼蛛跳上蜈蚣的背，盘算先毒死对方，免得自己被毒死。'),
    L('larry', 'Counting the bank\'s block, three hundred thousand shares were now tied up.', '加上银行那批，三十万股都被锁住了。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p11_stove_rise', kind: 'comic', panels: [
      P(a, { bg: 'floor', chars: [ch('trader', a, 0.3, 0.9, { at: 3, hat: 'none', expr: 'grin', pose: 'point', hy: 0.55 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['CONS. STOVE'], ['42']], hl: [1, 0] } }),
      P(c, { at: 4, bg: 'office', bgo: { board: [['BUY ORDERS'], ['!!!']] }, props: [{ t: 'paper', x: 90, y: 30, w: 530, h: 320, en: 'LIVINGSTON TO BULL CONSOLIDATED STOVE', zh: '利文斯顿将做多联合炉具', size: 36, rot: -2 }] }),
    ], sfx: [
      { x: 560, y: 120, t: '37 → 39', zh: '我还没动手', size: 96, color: '#f6d77a', font: 'cond' },
      { at: 5, x: 790, y: 620, t: '100,000 SOLD', zh: '十万股全部卖出', size: 88, color: '#fff', font: 'cond' },
    ], caps: [
      { at: 2, x: 1190, y: 300, w: 560, en: 'Sold 30,000. Still rising.', zh: '卖出三万股，仍在上涨。' },
    ], bubbles: [
      { at: 3, x: 520, y: 290, w: 520, en: 'Livingston\'s going to rush it up fifteen or twenty points!', zh: '利文斯顿要把它一口气拉高十五到二十点！', tx: 420, ty: 380 },
    ], lines: [
      L('larry', 'With about four million in hand, I was ready. Next morning, before I did anything, the stock jumped from 37 to 39.', '手里有了约四百万，我准备好了。第二天早上，我还什么都没做，股价就从37跳到39。'),
      L('larry', 'The first hour\'s volume beat the whole previous half year. Insiders were buying, and wouldn\'t say why.', '第一个小时的成交量超过了此前整整半年。内部人在买，却不肯说原因。'),
      L('larry', 'Next day it crossed 40 and touched 42. I began selling the bank\'s stock. Thirty thousand shares later, it was still rising.', '第二天它突破40，触及42。我开始卖出银行的股票。卖了三万股，它还在涨。'),
      L('larry', 'The reason: Joshua Wolff had tipped floor traders that I\'d rush it up fifteen or twenty points. His own buying started the rise.', '原因是：约书亚·沃尔夫向场内交易员放风，说我要把它拉高十五到二十点。最初的上涨就是他自己买起来的。'),
      L('larry', 'Next morning the papers said Livingston would bull Consolidated Stove. Orders poured in from all over the country.', '第二天早上，报纸说利文斯顿要做多联合炉具。买单从全国各地涌来。'),
      L('larry', 'By the fifth day I\'d sold all the bank\'s hundred thousand shares. I never bought a share, and never touched the four million.', '到第五天，我已卖光银行的全部十万股。我一股没买，那四百万也一分没动。'),
    ] });
  }

  shot({ id: 'p11_commission', kind: 'info', tag: { en: 'COMPARE', zh: '对比' }, title: { en: 'The Cheapest Distribution of His Career', zh: '他生涯中成本最低的一次派发' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, size: 25, widths: [0.4, 0.22, 0.22, 0.16], cols: [['Operation', '操作'], ['Shares traded', '成交股数'], ['Shares actually sold', '实际卖出'], ['Ratio', '倍数']], reveal: true, rowAt: [0, 1, 1], hl: [2], rows: [
      [['Gov. Flower\'s pool in B.R.T.', '弗劳尔州长的布鲁克林捷运资金池'], ['250,000+ (commissions)', '25万股以上（佣金）'], ['50,000', '5万'], ['5×+', '5倍以上']],
      [['Keene, Amalgamated Copper (per W. P. Hamilton)', '基恩派发联合铜业（据W·P·汉密尔顿）'], ['≥ 700,000', '至少70万'], ['220,000', '22万'], ['≈ 3×', '约3倍']],
      [['Livingston, Consolidated Stove', '利文斯顿派发联合炉具'], ['100,000', '10万'], ['100,000', '10万'], ['1×', '1倍']],
    ] },
    { type: 'quote', at: 2, x: 220, y: 610, w: 1480, size: 36, zsize: 31, en: 'The only way I know of making a stock go up is to buy it.', zh: '我所知道的让股票上涨的唯一办法，就是买它。', src: 'Governor Flower, Ch. XXII' },
  ], lines: [
    L('host', 'Compare. A Governor Flower pool in B.R.T. sold fifty thousand shares, but his firm earned commissions on over two hundred fifty thousand.', '比一比。弗劳尔州长的布鲁克林捷运资金池卖出五万股，他的公司却收了二十五万多股的佣金。'),
    L('host', 'Keene traded at least seven hundred thousand Amalgamated Copper to distribute two hundred twenty thousand. Livingston traded only what he sold.', '基恩为派发二十二万股联合铜业，至少交易了七十万股。而利文斯顿只交易了他卖出的那些。'),
    L('larry', 'Flower used to say the only way he knew to make a stock go up was to buy it. This time Wolff\'s crowd did my buying.', '弗劳尔常说，他所知道的让股票上涨的唯一办法就是买它。这一次，沃尔夫那帮人替我买了。'),
  ] });

  {
    const p = FULL;
    shot({ id: 'p11_wolff', kind: 'comic', panels: [
      P(p, { bg: 'study', props: [{ t: 'board', x: 1150, y: 60, w: 600, h: 200, rows: [['CONS. STOVE'], ['31¼']], hl: [1, 0] }], chars: [
        ch('larryOld', p, 0.3, 0.85, { expr: 'neutral', pose: 'cross', hy: 0.66, exprAt: { 5: 'determined' } }),
        ch('trader', p, 0.66, 0.72, { hat: 'none', expr: 'angry', pose: 'fist', hy: 0.72, exprAt: { 4: 'worry' } })] }),
    ], caps: [
      { x: 70, y: 70, w: 560, en: 'Below 40 · down to 32 · then 31¼.', zh: '跌破40 · 跌到32 · 再到31¼。' },
    ], bubbles: [
      { at: 1, x: 700, y: 300, w: 480, kind: 'shout', en: 'Look at the price! I bought more, some as high as 40!', zh: '看看这价格！我又买了好多，有的买在40！', tx: 1230, ty: 520, until: 2 },
      { at: 2, x: 140, y: 160, w: 480, en: 'I didn\'t buy a share. The syndicate hasn\'t lost a cent.', zh: '我一股都没买。辛迪加一分钱也没亏。', tx: 560, ty: 440, until: 3 },
      { at: 4, x: 720, y: 330, w: 460, en: 'Aw, be a sport. What would you do in our place?', zh: '别这样，够意思点。换了你，你会怎么做？', tx: 1230, ty: 520, until: 4 },
      { at: 5, x: 200, y: 200, w: 380, kind: 'shout', en: 'I\'d sell out!', zh: '我会卖光！', tx: 560, ty: 440 },
    ], lines: [
      L('larry', 'Once I stopped, it sagged below the call price of 40. With no support, it slid to 32, its lowest ever.', '我一停手，它就跌破了40的期权价。没有支撑，它一路滑到32，创下历史最低。'),
      L('wolff', 'What are you doing to it? Look at the price! I bought more, some as high as 40!', '你对它做了什么？看看这价格！我又买了好多，有的买在40！'),
      L('larry', 'It was 31¼. I hadn\'t bought a share or touched the money, and the syndicate hadn\'t lost a cent.', '当时是31¼。我一股没买，钱也没动，辛迪加一分钱都没亏。'),
      L('larry', 'He\'d bought below 40 to unload on me, and tipped everyone so somebody else would hold the bag.', '他在40以下买进，想倒给我；还四处放风，好让别人来接盘。'),
      L('wolff', 'Aw, be a sport. What would you do in our place?', '别这样，够意思点。换了你是我们，你会怎么做？'),
      L('larry', 'I\'d sell out!', '我会卖光！'),
    ] });
  }

  shot({ id: 'p11_stove_end', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Consolidated Stove: The Whole Campaign', zh: '联合炉具：整个战役' }, els: [
    { type: 'line', x: 70, y: 250, w: 1150, h: 565, xr: [0, 12], yr: [22, 50], yTicks: [25.5, 30, 32, 37, 40, 42, 44], illustrative: true,
      yLabel: ['Consolidated Stove (stated levels exact; path illustrative)', '联合炉具（标注价位据原书；走势为示意）'],
      series: [{ pts: [[0, 37], [1, 37], [1.6, 39], [2.4, 42], [3.3, 43.8], [4.2, 41.5], [5, 39.5], [5.8, 38], [6.6, 35], [7.4, 32], [8, 31.25], [8.8, 30], [10, 28.5], [11, 27.5], [11.8, 26.5]], color: '#7a1f1a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2] }],
      hlines: [
        { v: 40, label: ['Syndicate call price 40', '辛迪加期权价40'], color: '#2f5d8a', lx: 12 },
        { v: 25.5, at: 1, label: ['New pool price 25½', '新资金池价25½'], color: '#2f7d3a', below: true, lx: 7 },
      ],
      notes: [
        { x: 1.6, y: 39, en: 'Wolff\'s buying: 37 → 39', zh: '沃尔夫买盘：37→39', dx: 30, dy: 40, w: 250 },
        { x: 3.3, y: 43.8, en: 'Sells from 42; "close to 44"', zh: '42起卖出；"接近44"', dx: 60, dy: -80, w: 260 },
        { x: 8, y: 31.25, en: 'Wolff storms in at 31¼', zh: '31¼时沃尔夫冲进来', dx: 30, dy: -130, w: 250 },
      ] },
    { type: 'cards', x: 1260, y: 250, w: 590, ch: 170, cols: 1, max: 26, items: [
      { en: 'Gordon & Kane: "You didn\'t sell for us at 44!" (The book also gives 42 as where he began selling.)', zh: '戈登和凯恩："你没在44替我们卖！"（原书另说他在42开始卖出。）' },
      { en: 'New deal: pooled at 25½; his fee = half of everything above it.', zh: '新协议：按25½集中股票；他的报酬＝超出部分的一半。', at: 1, tagColor: '#2f7d3a' },
      { en: 'Sold on the way down, to bargain hunters.', zh: '在下跌途中卖给抄底者。', at: 2, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('larry', 'Gordon and Kane complained too. They remembered it active at 44 while I held the syndicate\'s millions. Now it was 30.', '戈登和凯恩也来抱怨。他们只记得我手握辛迪加数百万时股价活跃在44，而现在只有30。'),
    L('larry', 'They asked for help. I had them pool their stock at 25½, my fee half of whatever I got above that. The last sale was about 30.', '他们回头求助。我让他们以25½把股票集中起来，报酬是超出部分的一半。最近一笔成交约在30。'),
    L('larry', 'In a falling market you can\'t put it up first. I sold on the way down, to bargain hunters who think fifteen or twenty points under a recent top is cheap.', '在下跌的市场里，你没法先拉高。我在下跌途中卖出，卖给觉得比近期高点低十五到二十点就算便宜的抄底者。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p11_dressmaker', kind: 'comic', panels: [
      P(a, { bg: 'home', chars: [
        ch('wife', a, 0.3, 0.85, { expr: 'worry', hy: 0.55 }),
        ch('mother', a, 0.72, 0.85, { expr: 'smile', hy: 0.55, suit: '#7a5a3a', hair: '#4a3020' })] }),
      P(b, { at: 1, bg: 'study', chars: [ch('larryOld', b, 0.55, 0.9, { expr: 'sad', hy: 0.58 })] }),
    ], bubbles: [
      { x: 330, y: 70, w: 560, en: 'I hope Mr. Livingston puts up Consolidated Stove soon. We bought some because we were told he would.', zh: '真希望利文斯顿先生快点把联合炉具拉上去。我们听说他要拉，就买了一些。', tx: 690, ty: 330 },
    ], caps: [
      { x: 70, y: 700, w: 400, en: 'His wife\'s dressmaker.', zh: '他妻子的裁缝。' },
    ], lines: [
      L('larry', 'Later, my wife\'s new dressmaker told her she\'d bought Consolidated Stove because she\'d heard I was going to put it up.', '后来，我妻子新找的裁缝告诉她，她买了联合炉具，因为听说我要把它拉上去。'),
      L('larry', 'It isn\'t pleasant to think innocent people lose money on a tip like that. That is why I never give tips myself.', '想到无辜的人因为这样的消息亏钱，心里很不好受。这就是我自己从不给人消息的原因。'),
    ] });
  }

  // ---------------------------------------------------------------- review
  shot({ id: 'p11_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'Episode 11: What to Remember', zh: '第十一集：要记住什么' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { en: 'No manipulator can beat the general market. Check the trend first.', zh: '没有操纵者能战胜大势。先看大趋势。' },
      { en: 'Before you start, lock up whoever could dump stock on you.', zh: '动手之前，先锁住可能向你倒货的人。' },
      { en: 'Rising on your buying = right. The only buyer = stop. The only way to sell is to sell.', zh: '随你的买入而涨＝对了。只有你在买＝停手。卖出的唯一办法就是卖。', at: 1 },
      { en: 'Big selling happens on the way down, to people who think it\'s cheap.', zh: '大量卖出发生在下跌途中，卖给觉得便宜的人。', at: 1 },
      { en: 'Hope hides the top. Boom profits stay on paper unless you take them.', zh: '希望遮住顶部。繁荣的利润不兑现，就只是纸上富贵。', at: 2, tagColor: '#b8322a' },
      { en: 'A tip can ruin people you\'ll never meet. Don\'t give them; don\'t take them.', zh: '一条消息可能毁掉素不相识的人。不给消息，也不听消息。', at: 2, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'Episode eleven, the takeaways. No manipulator can beat the general market. Check the trend first, and lock up the big holders.', '第十一集要点：没有操纵者能战胜大势。先看大趋势，并锁住大股东。'),
    L('host', 'If a stock rises on your buying, you\'re right. If you\'re the only buyer, stop. The big selling is done on the way down.', '股票随你的买入上涨，说明你对了。如果只有你在买，就停手。大量卖出是在下跌途中完成的。'),
    L('host', 'Hope hides the top. And a tip can ruin people you will never meet.', '希望会遮住顶部。而一条消息，可能毁掉你永远不会见到的人。'),
  ] });

  shot({ id: 'p11_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistakes in Chapters XXI – XXII', zh: '第二十一至二十二章中的错误' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, size: 25, widths: [0.3, 0.33, 0.37], cols: [['Mistake', '错误'], ['Why it failed', '原因'], ['How to recognise it · Rule', '识别与规则']], reveal: true, rowAt: [0, 0, 1, 1, 2], rows: [
      [['Prentiss: supporting his stock as a bear market began', '普伦蒂斯：熊市初起时托盘'], ['The whole market was falling; the pool only got more stock', '整个市场在跌；资金池只会越套越多'], ['You are the only buyer → stop; sell for what you can get', '只有你在买→停手；能卖什么价就卖']],
      [['Stove promoters: launching at the saturation point', '炉具发起人：在饱和点发行'], ['They expected the bull market to last', '他们以为牛市会持续'], ['After a boom, dullness alone turns the public pessimistic', '繁荣之后，单是沉闷就会让公众悲观']],
      [['Stove promoters: underallotting an oversubscribed issue', '炉具发起人：超额认购却少配股'], ['Lost a free 25% short position to support the price', '失去了托盘用的免费25%空头头寸'], ['No inside support on dips is a bear tip', '回落时内部人不托盘＝看空信号']],
      [['Wolff: buying below 40 to unload on the manipulator', '沃尔夫：40以下买进，想倒给操盘者'], ['Nobody was obliged to buy from him above 50', '没人有义务在50以上接他的货'], ['A rise built on tips has no real buyer behind it', '靠消息推起的上涨背后没有真买家']],
      [['The public: buying on "Livingston will put it up"', '公众：凭"利文斯顿要拉它"买入'], ['A name is not a reason; tips pass down to the last buyer', '名字不是理由；消息层层传到最后的接盘者'], ['If you only know who, not why, stay out', '只知道"谁"不知道"为什么"，就别碰']],
    ] },
  ], lines: [
    L('host', 'The mistakes. Prentiss supported his stock as a bear market began. If you\'re the only buyer, stop.', '错误复盘。普伦蒂斯在熊市初起时托盘。如果只有你在买，就停手。'),
    L('host', 'The stove promoters launched late and underallotted. No inside support on dips is a bear tip.', '炉具发起人上市太晚，又少配了股。回落时内部人不托盘，就是看空信号。'),
    L('host', 'And Wolff\'s tip-takers bought on a name. If you know who, but not why, stay out.', '沃尔夫和听他消息的人凭一个名字就买入。只知道"谁"、不知道"为什么"，就别碰。'),
  ] });
};
