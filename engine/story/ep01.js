// Episode 1 — Chapters I–II. Narration is an original adaptation of Lefèvre's text; short quotes are marked.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const TYPE = "'Special Elite', 'Noto Serif SC', monospace";
  const ZH = "'Noto Sans SC', sans-serif";

  episode(1, 'The Bucket Shop Boy', '对赌行少年', { en: 'Chapters I – II', zh: '原著第一至二章' }, '#b8322a', [
    L('host', 'Episode one. The bucket shop boy.', '第一集：对赌行少年。'),
  ]);

  // ------------------------------------------------------------------ CHAPTER I
  {
    const [a, b, c] = BIGL;
    const book = `<g transform="translate(150 18)"><rect width="520" height="262" fill="#f1ead6" stroke="#16130f" stroke-width="5"/>
      <line x1="40" y1="0" x2="40" y2="262" stroke="#b8322a" stroke-width="3" opacity="0.6"/>
      <text x="60" y="44" font-family="${TYPE}" font-size="26">MON: acts like before a break</text>
      <text x="60" y="74" font-family="${ZH}" font-size="21" fill="#5a4a36">周一：走势和以往暴跌前一样</text>
      <text x="60" y="122" font-family="${TYPE}" font-size="26">TUE? ... WED? ...</text>
      <text x="60" y="152" font-family="${ZH}" font-size="21" fill="#5a4a36">周二应当如何？周三呢？</text>
      <text x="60" y="200" font-family="${TYPE}" font-size="26">CHECK THE TAPE: hit / miss</text>
      <text x="60" y="230" font-family="${ZH}" font-size="21" fill="#5a4a36">对照纸带：猜中／猜错</text></g>`;
    shot({ id: 'p01_board', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('boy', a, 0.5, 1.25, { expr: 'neutral', pose: 'chin', exprAt: { 2: 'think', 3: 'think' } })] }),
      P(b, { at: 1, bg: 'office', bgo: { board: [['SUGAR', 'B.R.T.'], ['105¼', '72⅛'], ['105⅜', '72¼']], hl: [2, 0] } }),
      P(c, { at: 3, bg: 'dark', props: [{ t: 'svg', svg: book }] }),
    ], caps: [
      { x: 70, y: 70, w: 560, en: 'Age 14. Quotation-board boy.', zh: '14岁，报价板小弟。' },
      { at: 3, x: 1185, y: 745, w: 300, en: 'His "little book"', zh: '他的"小本子"', size: 24, zsize: 22 },
    ], lines: [
      L('larry', 'Straight out of grammar school, I became quotation-board boy in a brokerage office. I was quick at figures.', '我小学一毕业就去一家股票经纪行当报价板小弟。我对数字很敏感。'),
      L('larry', 'Those quotations weren\'t dollars per share to me. They were numbers, always changing. I didn\'t ask why.', '那些报价对我来说不是每股多少钱，而是一串不停变化的数字。我不问为什么。'),
      L('larry', 'I noticed that prices had habits, so to speak. Before a rise or a break, a stock tended to act the way it had before.', '我发现价格可以说是有"习惯"的。上涨或下跌之前，股票往往会重演以前的走法。'),
      L('larry', 'So I kept a little book. I wrote down what I expected a stock to do, then checked it against the tape.', '于是我记了一个小本子。我写下自己预计某只股票会怎么走，再拿行情纸带来核对。'),
    ] });
  }

  shot({ id: 'p01_book', kind: 'info', tag: { en: 'LESSON 1', zh: '第一课' }, title: { en: 'Keep Score: The Little Book', zh: '记分：那个小本子' }, els: [
    { type: 'flow', x: 70, y: 270, w: 1780, bh: 260, max: 30, nodes: [
      { num: 1, at: 0, en: 'Study every move of an active stock during the day.', zh: '研究一只活跃股当天的每一次波动。' },
      { num: 2, at: 1, en: 'Monday: note the stock and price. "Acting as it did before an 8–10 point break."', zh: '周一：记下股票和价格。"走势和以往跌8–10点之前一样。"' },
      { num: 3, at: 2, en: 'Write down what it ought to do on Tuesday and Wednesday.', zh: '写下它周二、周三应当怎么走。' },
      { num: 4, at: 2, en: 'Check against the real tape later. Hit or miss?', zh: '事后拿真实纸带核对：猜中还是猜错？' },
    ] },
    { type: 'box', at: 2, x: 70, y: 600, w: 1780, h: 150, anchor: 'middle', color: '#f6d77a', size: 34, en: 'Not imaginary trades. A record of hits and misses, kept for about six months. The only question: was I right?', zh: '不是纸上交易，而是约六个月的猜中与猜错记录。唯一的问题：我判断对了吗？' },
  ], lines: [
    L('host', 'His little book was a scorecard, not a fantasy portfolio. He recorded forecasts, then graded them.', '他的小本子是一张记分卡，而不是幻想中的投资组合。他记录预测，然后给自己打分。'),
    L('host', 'Say a stock acted the way it always had before an eight- or ten-point break. He would note the stock and its price on Monday.', '比如某只股票的走势和它以往跌八到十点之前一模一样，他就在周一记下股票和价格。'),
    L('host', 'Then what it ought to do on Tuesday and Wednesday. Later he checked the tape. The only question: was he right?', '再写下它周二、周三应当怎么走，事后核对纸带。唯一的问题是：他判断对了吗？'),
  ] });

  shot({ id: 'p01_tape', kind: 'info', tag: { en: 'LESSON 2', zh: '第二课' }, title: { en: 'Reading the Tape: What, Not Why', zh: '读盘：看"发生了什么"，不问"为什么"' }, els: [
    { type: 'line', x: 70, y: 260, w: 1020, h: 555, xr: [0, 10], yr: [-6.5, 7], yTicks: [-3, 0, 3], yPre: '', ySuf: ' pts', yLabel: ['Change, points', '涨跌（点）'],
      xTicks: [[1.5, '"The other day"', '那天'], [8.8, 'Following Monday', '下周一']],
      series: [
        { pts: [[0, 0], [1, 1.2], [2, 2.1], [3, 3], [4, 3.6], [5, 3.6], [8.8, 3.6]], color: '#2f7d3a', label: ['Rest of the market', '大盘'], at: 2 },
        { pts: [[0, 0], [1, -0.8], [2, -1.6], [3, -2.4], [4, -3], [5, -3], [8.8, -3]], color: '#b8322a', label: ['Hollow Tube', '霍洛管业'], labelBelow: true, at: 2 },
      ],
      notes: [
        { x: 4, y: -3, at: 2, en: 'Down 3 points while the market rallied: the fact', zh: '大盘上涨，它跌3点：这是事实', dx: -380, dy: 22, w: 330 },
        { x: 8.8, y: -3, at: 3, en: 'Dividend passed: the reason', zh: '取消分红：这才是原因', dx: -270, dy: -150, w: 250 },
      ], illustrative: true },
    { type: 'cards', x: 1120, y: 260, w: 730, ch: 120, cols: 1, max: 28, items: [
      { at: 0, en: 'Find where buying is only a trifle better than selling. "The tape is your telescope."', zh: '找出买盘只比卖盘略强一点的地方。"纸带就是你的望远镜。"' },
      { at: 1, en: 'Dependable in about 7 cases out of 10.', zh: '十次里大约有七次靠得住。' },
      { at: 3, en: 'Insiders knew. They didn\'t buy, so nothing held the price up.', zh: '内部人早就知道。他们不买，股价就没有支撑。' },
      { at: 4, en: 'Act now. The reason can wait; it may come days, weeks or months later.', zh: '马上行动。原因可以等，可能几天、几周甚至几个月后才出现。' },
    ] },
  ], lines: [
    L('larry', 'A battle goes on in the market, and the tape is your telescope. Look for where buying is only a trifle better than selling.', '市场里一直在打仗，纸带就是你的望远镜。找出买盘只比卖盘略强一点的地方。'),
    L('host', 'A small edge, but a readable one. He said you could depend on it in seven cases out of ten.', '优势不大，但看得出来。他说十次里大约有七次靠得住。'),
    L('host', 'An example. Hollow Tube fell three points while the rest of the market rallied sharply. That was the fact.', '举个例子：大盘大涨，霍洛管业却跌了三点。这是事实。'),
    L('host', 'The next Monday, the directors passed the dividend. That was the reason. Insiders knew, and didn\'t buy.', '到了下周一，董事会宣布取消分红。这才是原因。内部人早就知道，所以不买。'),
    L('larry', 'The tape doesn\'t explain. Your business with it is now. The reason can wait; you must act at once or be left.', '纸带从不解释。你跟它打交道是现在。原因可以等，但你必须立即行动，否则就被甩下。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p01_first', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('boy', a, 0.32, 1.0, { expr: 'think', flip: true, exprAt: { 2: 'determined' } }), ch('agent', a, 0.74, 1.0, { expr: 'grin', hat: 'none', youth: true })] }),
      P(b, { at: 3, bg: 'bucketshop', bgo: { board: [['BURLINGTON'], ['▲'], ['▲']], crowd: true }, chars: [ch('boy', b, 0.5, 1.0, { expr: 'grin', pose: 'money', hy: 0.5 })] }),
    ], bubbles: [
      { at: 1, x: 470, y: 70, w: 440, en: 'Five dollars buys five shares at the bucket shop!', zh: '在对赌行，五块钱就能买五股！', tx: 700, ty: 250 },
    ], sfx: [{ at: 3, x: 1420, y: 230, t: '+$3.12', zh: '第一笔盈利', size: 110, color: '#d9a441', font: 'cond' }], lines: [
      L('larry', 'One day an older office boy asked me, on the quiet, whether I had any money. He had a dandy tip on Burlington.', '有一天，一个年长些的办公室小弟悄悄问我有没有钱。他得到了一个伯灵顿铁路股的好消息。'),
      L('boy', 'I can trade five shares by putting up five dollars, at the bucket shop!', '在对赌行，交五块钱就能做五股！'),
      L('larry', 'My little book said Burlington was acting as it usually did before a rise. A chance to test my figuring.', '我翻开小本子：伯灵顿的走势正像它以往上涨之前那样。这是检验我那套算法的好机会。'),
      L('larry', 'I gave him all I had. Two days later we cashed in. My profit: three dollars and twelve cents.', '我把所有的钱都给了他。两天后我们兑现，我赚了3.12美元。'),
    ] });
  }

  {
    const [a, b] = HALF;
    shot({ id: 'p01_mother', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', chars: [ch('boy', a, 0.5, 1.0, { expr: 'determined', pose: 'ticket', ticketText: 'BUY / SELL', hy: 0.5 })] }),
      P(b, { at: 1, bg: 'home', chars: [ch('mother', b, 0.3, 0.95, { expr: 'shock' }), ch('boy', b, 0.72, 0.95, { expr: 'smile', pose: 'money', flip: true })] }),
    ], caps: [
      { x: 70, y: 70, w: 460, en: 'Lunch hour: the bucket shop.', zh: '午休时间：对赌行。' },
      { at: 1, x: 1005, y: 70, w: 420, en: 'Age 15: his first $1,000.', zh: '15岁：第一个1,000美元。' },
    ], bubbles: [
      { at: 1, x: 1430, y: 90, w: 420, en: 'Put it in the savings bank, out of reach of temptation!', zh: '存进储蓄银行，别让自己受诱惑！', tx: 1290, ty: 300 },
    ], lines: [
      L('larry', 'After that I traded on my lunch hour, playing a system, not a favourite stock. Soon I made more than my job paid, so I quit.', '从那以后，我利用午休去对赌行交易，靠的是一套方法，而不是偏爱哪只股票。很快赚的就超过了工资，于是我辞了职。'),
      L('larry', 'At fifteen I laid my first thousand dollars in cash in front of my mother. She wanted it in the savings bank.', '十五岁时，我把第一笔一千美元现金摆在母亲面前。她要我把钱存进储蓄银行。'),
    ] });
  }

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p01_plunger', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', chars: [ch('clerk', a, 0.3, 1.05, { expr: 'angry', pose: 'point' }), ch('boy', a, 0.75, 1.05, { expr: 'grin', flip: true, hat: 'none', exprAt: { 1: 'think' } })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['HOTEL BRANCH'], ['—']] }, chars: [ch('agent', b, 0.24, 0.55, { expr: 'worry', pose: 'phone', hat: 'none', hy: 0.6, exprAt: { 3: 'angry' } }), ch('boy', b, 0.8, 0.55, { expr: 'grin', flip: true, hat: 'none', hy: 0.6 })] }),
      P(c, { at: 3, bg: 'burst', bgo: { color: '#b8322a' } }),
    ], caps: [
      { x: 70, y: 70, w: 420, en: '"The Boy Plunger"', zh: '"少年赌徒"' },
      { at: 2, x: 1185, y: 330, w: 340, en: 'Alias: Edward Robinson, of Cambridge', zh: '化名：剑桥的爱德华·罗宾逊', size: 22, zsize: 20 },
    ], bubbles: [
      { at: 0, x: 520, y: 80, w: 380, en: 'Nothing doing. Take your business elsewhere!', zh: '不接！去别家做吧！', tx: 380, ty: 300, kind: 'shout' },
      { at: 2, x: 1430, y: 55, w: 435, size: 22, zsize: 19, en: 'Tell him I\'m a short fat man with dark hair and a bushy beard!', zh: '告诉他，我是个黑头发、大胡子的矮胖子！', tx: 1730, ty: 215 },
    ], sfx: [{ at: 3, x: 1525, y: 600, t: '−$700', zh: '连锁店被赢走', size: 110, color: '#fff', font: 'cond' }], lines: [
      L('larry', 'The shops got sore at me for beating them, and stopped taking my money. They called me the Boy Plunger.', '各家对赌行被我赢得恼火了。他们看着我递上的保证金，就是不收，还叫我"少年赌徒"。'),
      L('larry', 'I moved from shop to shop under false names. I\'d start light, and sometimes lose on purpose before stinging them.', '我只好用假名一家家地换。开始只做小单，有时故意先输，再狠狠赢他们一把。'),
      L('larry', 'At a hotel branch of one big chain, I said I was Edward Robinson, of Cambridge. Head office asked what I looked like.', '在一家大连锁对赌行的酒店分店，我自称剑桥的爱德华·罗宾逊。总部问我长什么样。'),
      L('larry', 'The manager described me. His face went red and he threw me out. I had trimmed them for seven hundred dollars.', '经理照实描述了我，随即脸涨得通红，把我赶了出去。我已经从他们那儿赢走了七百美元。'),
    ] });
  }

  shot({ id: 'p01_bucket', kind: 'info', tag: { en: 'HOW IT WORKS', zh: '机制拆解' }, title: { en: 'What Was a Bucket Shop?', zh: '什么是对赌行？' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, size: 22, widths: [0.16, 0.46, 0.38], cols: [['Step', '环节'], ['Bucket shop', '对赌行'], ['Real broker (Exchange member)', '正规经纪行（交易所会员）']], rows: [
      [['Placing an order', '下单'], ['Hand cash to a clerk. He writes the last tape price and the time on a ticket.', '把现金交给职员，他把纸带上最后的价格和时间写在单据上。'], ['Order goes to the Exchange floor and is executed there', '订单送到交易所场内真实成交']],
      [['Your price', '你的价格'], ['The last printed price, known before you bet', '最后打印的价格，下注前就知道'], ['Whatever the floor gives, known only after the report', '场内给出的价格，回报后才知道']],
      [['Closing', '平仓'], ['Clerk marks the next price; the cashier pays the ticket', '职员标上最新价，凭单到出纳处领钱'], ['Broker sells on the floor', '经纪人在场内卖出']],
      [['Margin', '保证金'], ['A shoestring. When it runs out, the ticket closes itself.', '极薄。一旦耗尽，单子自动平仓作废。'], ['About 10%; you can be asked for more', '约10%；可能被要求追加']],
      [['Commission', '佣金'], ['Small shops in hot bull markets: a buy at 20 written as 20¼', '小店在火热牛市中：20的买单写成20¼'], ['A regular commission', '正常佣金']],
      [['When you lose', '你亏钱时'], ['The house wins', '店家赚钱'], ['Another trader wins', '另一位交易者赚钱']],
    ], reveal: true, rowAt: [0, 1, 2, 2, 3, 4], hl: [4] },
  ], lines: [
    L('host', 'How did it work? You handed a clerk your money; he wrote the last tape price and the time on a ticket.', '对赌行怎么运作？你把钱交给职员，他把纸带上最后的价格和时间写在单据上。'),
    L('host', 'No share was ever bought. You bet against the house on the printed price, known before you bet.', '它从不真正买入一股。你是在跟店家赌打印出来的价格，下注前就知道这个价。'),
    L('host', 'To close, the clerk marked the next price and the cashier paid. If the price ran past your margin, the ticket closed itself.', '平仓时，职员标上最新价，出纳付钱。价格一旦超出保证金，单子就自动平仓。'),
    L('host', 'In boiling bull markets, small shops took both commissions up front. A buy at 20 was written as 20¼.', '在火热的牛市里，小店会先把买卖两笔佣金都扣掉：20的买单写成20¼。'),
    L('host', 'So a one-point rise paid only three quarters. And thin margins let ordinary swings wipe customers out, for the house.', '于是涨一个点你只拿到四分之三。保证金这么薄，正常波动就足以替店家把客户洗掉。'),
  ] });

  {
    const tk = (y, label, zl, txt, color, stamp) => `<g transform="translate(1210 ${y}) rotate(-1.5)" filter="url(#shadow)"><rect width="620" height="150" fill="${color}" stroke="#16130f" stroke-width="5"/>
      <text x="24" y="38" font-family="'Oswald', sans-serif" font-weight="700" font-size="22" fill="#5a4a36">${label}</text>
      <text x="${24 + label.length * 11.5}" y="38" font-family="${ZH}" font-weight="700" font-size="20" fill="#5a4a36">${zl}</text>
      <text x="24" y="104" font-family="${TYPE}" font-size="46">${txt}</text>${stamp || ''}</g>`;
    const t1 = tk(270, 'ORDINARY TICKET ', '普通客户', 'Bot ten Steel at 90⅛', '#e9e2cf');
    const t2 = tk(450, 'HIS TICKET ', '他的单据', 'Bot Steel at 91⅛', '#f5b8c6', '<g transform="translate(470 110) rotate(-12)"><rect x="-80" y="-30" width="170" height="50" fill="none" stroke="#b8322a" stroke-width="5"/><text x="5" y="8" text-anchor="middle" font-family="\'Oswald\', sans-serif" font-weight="700" font-size="26" fill="#b8322a">+1½ PREMIUM</text></g>');
    shot({ id: 'p01_cosmo', kind: 'info', tag: { en: 'THE HANDICAP', zh: '不平等条件' }, title: { en: 'The Cosmopolitan\'s Special Terms', zh: '"大都会"对赌行的特殊条款' }, els: [
      { type: 'table', x: 70, y: 265, w: 1080, size: 24, widths: [0.32, 0.3, 0.38], cols: [['Term', '条款'], ['Ordinary customer', '普通客户'], ['Livingston', '利文斯顿']], rows: [
        [['Margin', '保证金'], ['1 point', '1个点'], ['3 points', '3个点']],
        [['Trading power', '交易能力'], ['full', '全额'], ['cut by two-thirds', '削减三分之二']],
        [['Premium', '溢价'], ['none', '无'], ['½ → 1 → 1½ points', '½→1→1½个点']],
        [['Buy Steel at 90', '90买入钢铁股'], ['ticket 90⅛', '单据90⅛'], ['ticket 91⅛', '单据91⅛']],
      ], reveal: true, rowAt: [1, 1, 2, 2], hl: [3] },
      { type: 'svg', at: 2, svg: t1 + t2 },
      { type: 'box', at: 3, x: 1210, y: 640, w: 620, h: 150, color: '#f6d77a', size: 28, en: 'Steel could rise 1¼ points and he would still be losing.', zh: '钢铁股涨了1¼点，他平仓仍然是亏的。' },
      { type: 'box', at: 4, x: 70, y: 690, w: 1080, h: 110, color: '#cfe3c4', size: 32, anchor: 'middle', en: 'Still a winner on balance. Age 20: his first $10,000 in cash.', zh: '总体依然赢钱。20岁：第一笔一万美元现金。' },
    ], lines: [
      L('larry', 'In the end only the Cosmopolitan, the richest shop in New England, would take me. It didn\'t refuse me outright.', '最后只剩新英格兰最有钱的"大都会"肯接我的单。它没有直接拒绝我。'),
      L('host', 'Instead it set special terms. Three points of margin instead of one, which cut his trading power by two-thirds.', '它改为开出特殊条款：保证金三个点而不是一个点，交易能力被砍掉三分之二。'),
      L('host', 'Plus a premium: first half a point, then a point, finally a point and a half. Buy Steel at 90, and his ticket read 91⅛.', '还要加溢价：先是半个点，然后一个点，最后一个半点。90买钢铁股，他的单子上写的是91⅛。'),
      L('host', 'So Steel could rise 1¼ points and he\'d still lose. He won on balance anyway.', '所以钢铁股涨了一又四分之一点，他仍然是亏的。即便如此，他总体还是赢。'),
      L('larry', 'I was only twenty when I first had ten thousand dollars in cash. My mother told me to settle into some regular business.', '我二十岁时第一次攒下一万美元现金。母亲劝我知足，去做点正经生意。'),
    ] });
  }

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p01_sugar', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', bgo: { board: [['SUGAR'], ['103']], hl: [1, 0], crowd: false }, props: [{ t: 'telegraph', x: 900, y: 650 }], chars: [ch('larry', a, 0.42, 1.15, { expr: 'determined', pose: 'ticket', ticketText: 'SHORT SUGAR 105¼', exprAt: { 1: 'worry', 2: 'worry', 3: 'shout', 4: 'grin' } })] }),
      P(b, { at: 3, bg: 'burst', bgo: { color: '#b8322a' } }),
      P(c, { at: 4, bg: 'bucketshop', bgo: { board: [['SUGAR'], ['108']], hl: [1, 0] } }),
    ], caps: [{ x: 70, y: 70, w: 480, en: 'Short 3,500 Sugar at 105¼.', zh: '在105¼做空3,500股糖业。' }],
    sfx: [
      { at: 2, x: 930, y: 520, t: 'CLICK-CLICK', zh: '电报声', size: 46, color: '#f6d77a', rot: -8, font: 'cond' },
      { at: 3, x: 1525, y: 220, t: 'CLOSE SUGAR!', zh: '平掉糖业！', size: 92, color: '#fff' },
      { at: 4, x: 1460, y: 610, t: '108!', size: 80, color: '#f6d77a', rot: 6, font: 'cond' },
    ],
    lines: [
      L('larry', 'One day I was short thirty-five hundred Sugar at 105¼: seven big pink tickets. Henry Williams was short twenty-five hundred.', '有一天，我在105¼做空了3,500股糖业，七张粉红色的大单子。亨利·威廉斯也空了2,500股。'),
      L('larry', 'Sugar dropped to 103. But I didn\'t like the way it was hesitating. Something was wrong; I couldn\'t say what.', '糖业跌到了103。可它那种犹豫不决的样子让我不舒服。肯定哪里不对，我却说不上来。'),
      L('larry', 'I asked Dave Wyman to take my place at the ticker. Then I heard a telegraph clicking, and the clerk turned to listen.', '我请戴夫·怀曼替我坐到行情机旁。接着我听见电报机在响，职员转过头去听。'),
      L('larry', 'Close Sugar!', '平掉糖业！'),
      L('larry', 'The clerk had to close me at 103. Before I reached the cashier, Dave yelled: Sugar, 108! Henry Williams was wiped out.', '职员只能按103给我平仓。我还没走到出纳那儿，戴夫就喊：糖业，108！亨利·威廉斯被洗光了。'),
    ] });
  }

  shot({ id: 'p01_drive', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例分析' }, title: { en: 'Anatomy of a "Bucket-Shop Drive"', zh: '拆解"对赌行洗盘"' }, els: [
    { type: 'line', x: 70, y: 260, w: 1000, h: 555, xr: [0, 10], yr: [101, 109.5], yTicks: [102, 104, 106, 108], yLabel: ['Sugar, $', '糖业股价'],
      series: [{ pts: [[0, 105.25], [2, 104.5], [3.5, 103.4], [5, 103], [6.4, 103.1], [7.2, 108], [8.4, 104.3], [10, 103.8]], color: '#b8322a', reveal: [0, 0, 0, 0, 0, 2, 2, 2] }],
      notes: [
        { x: 0, y: 105.25, en: 'Short 3,500 @ 105¼', zh: '105¼做空3,500股', dx: 20, dy: 30, w: 250 },
        { x: 5, y: 103, en: 'He closes @ 103', zh: '他在103平仓', dx: -150, dy: 50, w: 220 },
        { x: 7.2, y: 108, at: 2, en: 'Run up to 108: shorts wiped out', zh: '拉到108：空头被洗光', dx: -360, dy: -30, w: 280 },
        { x: 8.4, y: 104.3, at: 2, en: 'Falls right back', zh: '随即回落', dx: 20, dy: 90, w: 200 },
      ], illustrative: true },
    { type: 'cards', x: 1110, y: 260, w: 740, ch: 120, cols: 1, max: 26, items: [
      { at: 0, en: 'Too many customers on one side: maybe 8–10,000 shares of Sugar shorts.', zh: '客户一边倒：糖业空单可能有八千到一万股。' },
      { at: 1, en: 'Say $20,000 of their margins sit in the shop.', zh: '假设店里压着两万美元的保证金。' },
      { at: 2, en: 'Its brokers move the real price on the Exchange: a couple of points, a few hundred shares.', zh: '店家的经纪人在交易所用几百股把真实价格推动几个点。' },
      { at: 2, en: 'Thin margins vanish; the price falls back. Newspapers: a "bucket-shop drive".', zh: '薄保证金被吃掉，价格回落。报纸称之为"对赌行洗盘"。' },
    ] },
  ], lines: [
    L('host', 'A put-up job. The shop held all the Sugar shorts\' margins, perhaps eight or ten thousand shares in all.', '这是设计好的局。所有糖业空头的保证金都在店家手里，总共可能有八千到一万股。'),
    L('host', 'Say twenty thousand dollars of margin: enough to pay for a raid on the real price in New York.', '假设有两万美元保证金。这足以让店家出钱，在纽约证券交易所拉动真实价格。'),
    L('host', 'It cost a couple of points on a few hundred shares. Sugar ran to 108, the margins vanished, and the price fell back. A bucket-shop drive.', '代价不过是几百股、几个点。糖业被拉到108，保证金被吃掉，价格随即回落。这就是"对赌行洗盘"。'),
    L('host', 'He escaped by acting on his discomfort before he had a reason. The stock wasn\'t behaving the way it should.', '他之所以逃过一劫，是因为在找到理由之前就按"不对劲"的感觉行动了。股价的表现不对。'),
  ] });

  shot({ id: 'p01_raid', kind: 'info', tag: { en: 'THE COUNTER-RAID', zh: '反向突袭' }, title: { en: 'An Exchange Member Robs the Robbers', zh: '交易所会员反抢对赌行' }, els: [
    { type: 'flow', x: 70, y: 265, w: 1780, bh: 250, max: 30, nodes: [
      { num: 1, at: 1, en: '35 agents pose as customers at the main office and bigger branches.', zh: '35名代理人扮成客户，进入总店和各大分店。' },
      { num: 2, at: 1, en: 'At a fixed hour, all buy as much of one stock as the managers allow.', zh: '在约定时刻，同时尽量买入同一只股票。' },
      { num: 3, at: 2, en: 'He bids it up 3–4 points on the Exchange floor, helped by room traders.', zh: '他在交易所场内把它抬高3–4点，场内交易员也来帮忙。' },
      { num: 4, at: 2, en: 'Agents sell at a set profit. Net: over $70,000.', zh: '代理人按预定利润卖出。净赚七万多美元。', color: '#cfe3c4' },
    ] },
    { type: 'cards', x: 70, y: 545, w: 1780, ch: 100, cols: 2, max: 26, items: [
      { at: 3, en: 'Repeated in New York, Boston, Philadelphia, Chicago, Cincinnati, St. Louis.', zh: '在纽约、波士顿、费城、芝加哥、辛辛那提、圣路易斯反复上演。' },
      { at: 3, en: 'Favourite: Western Union. Buy, sell 2 points up, go short, take 3 more.', zh: '最爱：西联电报。买入，涨2点卖出，再做空，又赚3点。' },
    ] },
    { type: 'box', at: 4, x: 70, y: 680, w: 1780, h: 120, anchor: 'middle', color: '#f6d77a', size: 34, en: '"There is nothing new in Wall Street." Today\'s market has happened before, and will happen again.', zh: '"华尔街没有新鲜事。"今天的行情以前发生过，以后还会再发生。' },
  ], lines: [
    L('host', 'Within ten days, the Cosmopolitan got a dose of its own medicine, from a Stock Exchange member.', '不到十天，"大都会"就尝到了自己的药。出手的是一位纽约证券交易所会员。'),
    L('host', 'He sent thirty-five men into its main office and bigger branches. At a fixed hour, they all bought the same stock.', '他派了三十五个人进入它的总店和各大分店。在约定时刻，他们同时买入同一只股票。'),
    L('host', 'Then he went onto the Exchange floor and bid the price up three or four points. The agents cashed in.', '然后他走进交易所场内，把价格抬高三四个点。代理人随即兑现。'),
    L('host', 'He netted over seventy thousand, then hit shops in other cities. A favourite was Western Union: buy, sell two points up, go short, take three more.', '他净赚七万多美元，又去别的城市如法炮制。他最爱西联电报：买入，涨两点卖出，再做空，又赚三点。'),
    L('larry', 'There is nothing new in Wall Street. Whatever happens in the market today has happened before, and will happen again.', '华尔街没有新鲜事。今天市场上发生的一切，以前都发生过，以后还会再发生。'),
  ] });

  // ------------------------------------------------------------------ CHAPTER II
  {
    const [a, b] = HALF;
    shot({ id: 'p01_ny', kind: 'comic', panels: [
      P(a, { bg: 'street', chars: [ch('larry', a, 0.5, 1.0, { expr: 'smile', hat: 'boater', hatColor: '#e0c27a', hy: 0.5 })] }),
      P(b, { at: 1, bg: 'office', chars: [ch('larry', b, 0.5, 1.05, { expr: 'worry', hy: 0.5, exprAt: { 2: 'sad' } })] }),
    ], caps: [
      { x: 70, y: 70, w: 460, en: 'Chapter II. Age 21. New York, with $2,500.', zh: '第二章。21岁，带着2,500美元来到纽约。' },
      { at: 1, x: 1005, y: 70, w: 520, en: 'A. R. Fullerton & Co. Within six months:', zh: 'A.R.富勒顿公司。不到六个月：' },
    ],
    sfx: [{ at: 1, x: 1660, y: 300, t: 'BROKE', zh: '输光', size: 90 }], lines: [
      L('larry', 'At twenty-one I came to New York with all I had: twenty-five hundred dollars.', '二十一岁时，我带着全部家当两千五百美元来到纽约。'),
      L('larry', 'At A. R. Fullerton and Company they called me the Boy Trader. Within six months I was broke, and owed the firm a few hundred.', '在A.R.富勒顿公司，大家叫我"少年交易员"。不到六个月我就输光了，还欠公司几百美元。'),
      L('larry', 'I had played carefully. I lost because of my remarkable success in the bucket shops.', '我打得很小心。我之所以输，恰恰是因为我在对赌行太成功了。'),
    ] });
  }

  shot({ id: 'p01_why', kind: 'info', tag: { en: 'DIAGNOSIS', zh: '病因分析' }, title: { en: 'Why the Bucket-Shop Method Failed', zh: '对赌行打法为什么失效' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, size: 28, widths: [0.18, 0.4, 0.42], cols: [['Factor', '因素'], ['Bucket shop', '对赌行'], ['Fullerton\'s (real Exchange house)', '富勒顿（真正的交易所会员行）']], rows: [
      [['Your price', '你的价格'], ['Known before you trade: the board price', '交易前就知道：报价板上的价'], ['Unknown until the clerk\'s report', '要等职员回报才知道']],
      [['The tape', '纸带'], ['Is the price you get', '就是你的成交价'], ['Lags the floor: tape 105, floor may be 104 or 103', '落后于场内：纸带105，场内可能已是104或103']],
      [['Your own size', '你自己的单量'], ['Doesn\'t move anything', '不影响价格'], ['A big sale pushes the price down against you', '大笔卖出会把价格压向对你不利的方向']],
      [['Margin', '保证金'], ['A point or less; double your money on a 1-point move', '一个点甚至更少；涨一点就能翻倍'], ['About 10%: $1,000 per 100 shares', '约10%：每100股要1,000美元']],
      [['Same call', '同样的判断'], ['About $3,000 on a 1,000-share, 3-point drop', '1,000股、跌3点，约赚3,000美元'], ['Might not make a cent', '可能一分钱也赚不到']],
    ], reveal: true, rowAt: [1, 2, 3, 4, 4], hl: [4] },
  ], lines: [
    L('host', 'Why did the bucket-shop champion go broke? The game was different, and he played it ignorantly.', '对赌行的常胜将军，为什么在正规经纪行输光？因为游戏变了，而他对新游戏一无所知。'),
    L('host', 'In the shop, he knew his price before he traded. At Fullerton\'s, he learned it only when the report came back.', '在对赌行，交易前就知道价格。在富勒顿，要等回报回来才知道。'),
    L('host', 'And the tape lagged. When it printed Sugar at 105, the floor might already be at 104 or 103.', '而且纸带滞后。纸带打出糖业105时，场内可能已是104或103。'),
    L('host', 'His own orders now moved prices. A big sale pushed the price down against him.', '现在他自己的订单会推动价格，大笔卖出会把价格压向对他不利的方向。'),
    L('host', 'And margin was about ten percent. A call that made three thousand dollars in a shop might not make a cent here.', '保证金约为百分之十。在对赌行能赚三千美元的判断，在这里可能一分不赚。'),
  ] });

  shot({ id: 'p01_fool', kind: 'info', tag: { en: 'LESSON 3', zh: '第三课' }, title: { en: 'The Wall Street Fool', zh: '华尔街傻瓜' }, els: [
    { type: 'cards', x: 70, y: 265, w: 1780, ch: 110, cols: 2, max: 28, items: [
      { at: 0, n: '✔', tagColor: '#2f7d3a', en: 'Made money: when he was sure he was right before he began.', zh: '赚钱：动手之前就确信自己是对的。' },
      { at: 0, n: '✘', tagColor: '#b8322a', en: 'Lost money: trading for excitement when precedents didn\'t favour him.', zh: '亏钱：先例并不支持，却为了刺激而交易。' },
    ] },
    { type: 'quote', at: 1, x: 160, y: 405, w: 1600, size: 40, zsize: 34, bottom: 650, en: 'There is the plain fool… but there is the Wall Street fool, who thinks he must trade all the time.', zh: '有一种普通傻瓜……还有一种华尔街傻瓜，他认为自己必须一直交易。', src: 'Ch. II' },
    { type: 'box', at: 3, x: 160, y: 665, w: 1600, h: 135, anchor: 'middle', color: '#cfe3c4', size: 30, en: '1915, broke and rebuilding: he waited two weeks while a stock he liked rose 30 points, then bought. He had to be right.', zh: '1915年，破产后重新起步：他看好一只股票，却等了两周、看它涨了30点才买。因为他必须做对。' },
  ], lines: [
    L('larry', 'When I was sure I was right before I began, I made money. What beat me was trading when precedents didn\'t favour me.', '凡是动手前就确信自己对的时候，我都赚钱。打败我的，是在先例并不支持时也去交易。'),
    L('larry', 'There\'s the plain fool, who always does the wrong thing. And there\'s the Wall Street fool, who thinks he must trade all the time.', '有一种普通傻瓜，总是做错事。还有一种华尔街傻瓜，认为自己必须一直交易。'),
    L('host', 'No one has good reasons to trade every day. Wanting daily action, like a wage, causes many losses.', '没有人每天都有充分的交易理由。像领工资一样天天要有进账，这种念头让很多人亏钱。'),
    L('larry', 'In 1915, broke and trying to get back, I waited two weeks while a stock I liked rose thirty points. I had to be right.', '多年以后的1915年，我破产后想翻身，看好一只股票，却等了两周，看它涨了三十点才买。因为我必须做对。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p01_stl', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('banker', a, 0.28, 1.0, { hat: 'none', expr: 'frown', exprAt: { 1: 'neutral' } }), ch('larry', a, 0.72, 1.0, { expr: 'determined', flip: true, exprAt: { 1: 'grin' } })] }),
      P(b, { at: 2, bg: 'bucketshop', chars: [ch('broker', b, 0.26, 0.6, { expr: 'angry', hy: 0.55 }), ch('larry', b, 0.76, 0.58, { expr: 'worry', flip: true, hy: 0.55 })] }),
      P(c, { at: 4, bg: 'bucketshop', chars: [ch('clerk', c, 0.2, 0.58, { expr: 'angry', hair: '#b8322a', hat: 'none', hy: 0.55 }), ch('larry', c, 0.5, 0.58, { expr: 'frown', flip: true, hy: 0.55 })] }),
    ], caps: [
      { x: 70, y: 735, w: 340, en: 'Old A. R. Fullerton', zh: '老A.R.富勒顿' },
      { at: 1, x: 1190, y: 60, w: 400, en: 'St. Louis · J. G. Dolan Co. · alias "Horace Kent"', zh: '圣路易斯·多兰公司·化名"霍勒斯·肯特"', size: 22, zsize: 20 },
      { at: 4, x: 1185, y: 455, w: 260, en: 'H. S. Teller & Co.', zh: 'H.S.特勒公司', size: 22, zsize: 20 },
    ],
    bubbles: [
      { at: 0, x: 70, y: 70, w: 560, size: 26, zsize: 22, en: 'They\'d expect a 10% margin: a thousand dollars on a hundred shares.', zh: '这里要求10%的保证金：一百股就得一千美元。', tx: 330, ty: 300 },
      { at: 4, x: 1560, y: 470, w: 305, size: 21, zsize: 18, en: 'Say, Livingston, we don\'t want your business.', zh: '喂，利文斯顿，我们不做你的生意。', tx: 1370, ty: 610 },
    ],
    sfx: [{ at: 2, x: 1535, y: 215, t: '+$2,800', zh: '两天', size: 46, color: '#d9a441', font: 'cond' }],
    lines: [
      L('larry', 'I borrowed five hundred dollars from old A. R. Fullerton, to win a stake back in the bucket shops.', '我向老A.R.富勒顿借了五百美元，要去对赌行把本钱赢回来。'),
      L('larry', 'In St. Louis I walked into J. G. Dolan\'s shop as Horace Kent. In two days I made twenty-eight hundred dollars.', '在圣路易斯，我化名霍勒斯·肯特走进J.G.多兰的对赌行。两天里我赚了两千八百美元。'),
      L('larry', 'On the third morning Dolan called me in, by my real name, and pointed at the crowd in his customers\' room.', '第三天早上，多兰叫我进去，直呼我的真名，然后指着客户大厅里的人群。'),
      L('broker', 'Three hundred suckers feed me. You took more in two days than I get from them in two weeks. Toddle along!', '三百个傻瓜养活我一家。你两天拿走的，比我从他们身上两周赚的还多。走吧！', { who: { en: 'J. G. DOLAN', zh: 'J.G.多兰' } }),
      L('larry', 'Teller\'s shop, in the same block, wouldn\'t let me make a single trade. So I went back to New York.', '同一条街上特勒的店，连一笔交易都不让我做。于是我回了纽约。'),
    ] });
  }

  shot({ id: 'p01_rules', kind: 'info', tag: { en: 'THE HOUSE RULES', zh: '店家规矩' }, title: { en: 'What the Shops Did Better, and Worse', zh: '对赌行的长处与短处' }, els: [
    { type: 'table', x: 70, y: 265, w: 1780, size: 27, widths: [0.27, 0.43, 0.3], cols: [['Rule', '规则'], ['What it meant', '意味着什么'], ['Lesson', '启示']], rows: [
      [['Automatic close-out when the margin is gone', '保证金耗尽自动平仓'], ['You can never lose more than you put up, and there is no rotten execution', '亏损永远不超过投入，也没有糟糕的成交'], ['"The best kind of stop-loss order"', '"最好的止损单"']],
      [['New York shops: profit capped at 2 points per ticket on wild stocks like Sugar and Tennessee Coal & Iron', '纽约对赌行：糖业、田纳西煤铁等剧烈波动股，每张单最多赚2点'], ['Even a 10-point move in 10 minutes paid 2. Risk $1 to make $2, not $10.', '十分钟涨十点也只付2点。冒1美元风险只能赚2美元，而不是10美元。'], ['The house sets the odds', '赔率由店家定']],
      [['1900, the day before Election Day: odds 3 to 1 on McKinley', '1900年大选前一天：麦金莱胜率3比1'], ['Buying stocks meant 3–6 points or more, close to sure money', '买股票几乎稳赚3–6点甚至更多'], ['Every shop refused buy orders all day', '所有对赌行整天拒收买单']],
    ], reveal: true, rowAt: [0, 1, 3] },
  ], lines: [
    L('larry', 'The old bucket shop had one real advantage. When your margin ran out, the trade closed itself: the best kind of stop-loss order.', '老式对赌行有一个真正的好处：保证金耗尽时，交易自动平仓。这是最好的止损单。'),
    L('host', 'But New York shops capped the profit on wild stocks like Sugar and Tennessee Coal and Iron: two points a ticket, even on a ten-point move.', '但纽约的对赌行给糖业、田纳西煤铁这类剧烈波动股设了上限：每张单最多两点，哪怕涨了十点。'),
    L('host', 'So the customer risked one dollar to make two, instead of ten. The house set the odds.', '于是客户冒一美元风险只能赚两美元，而不是十美元。赔率由店家说了算。'),
    L('host', 'On the eve of the 1900 election, McKinley was a 3-to-1 favourite. Buying stocks was nearly sure money, so no shop took buy orders.', '1900年大选前夕，麦金莱胜率三比一，买股票几乎稳赚。没有一家对赌行肯接买单。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p01_hoboken', kind: 'comic', panels: [
      P(a, { bg: 'bucketshop', chars: [ch('agent', a, 0.3, 1.0, { hat: 'none', expr: 'grin', pose: 'idle', exprAt: { 3: 'worry', 4: 'worry' } }), ch('larry', a, 0.74, 1.0, { expr: 'neutral', flip: true, exprAt: { 2: 'determined', 3: 'grin', 4: 'grin' } })] }),
      P(b, { at: 2, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(220 185)"><circle r="140" fill="#f1ead6" stroke="#16130f" stroke-width="8"/>' + [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => `<line x1="0" y1="-118" x2="0" y2="-132" stroke="#16130f" stroke-width="6" transform="rotate(${i * 30})"/>`).join('') + '<line x1="0" y1="0" x2="-27" y2="-66" stroke="#16130f" stroke-width="12" stroke-linecap="round"/><line x1="0" y1="0" x2="108" y2="0" stroke="#16130f" stroke-width="7" stroke-linecap="round"/><circle r="11" fill="#b8322a"/></g>' }] }),
      P(c, { at: 3, bg: 'bucketshop', bgo: { crowd: false }, props: [{ t: 'money', x: 300, y: 300, n: 4 }] }),
    ], caps: [
      { x: 70, y: 70, w: 520, en: 'Teller\'s new shop, Hoboken. Saturday: the market closes at noon.', zh: '特勒在霍博肯新开的店。周六：市场中午收盘。', size: 24, zsize: 21 },
    ],
    bubbles: [
      { at: 1, x: 560, y: 160, w: 380, size: 24, zsize: 20, en: 'Hurry! The market closes at twelve on Saturdays.', zh: '快点！周六十二点就收盘了。', tx: 380, ty: 330 },
    ],
    sfx: [
      { at: 2, x: 1735, y: 170, t: '11:15', zh: '下单做空', size: 72, color: '#fff', font: 'cond' },
      { at: 3, x: 1525, y: 560, t: '$5,100 DUE', zh: '应付5,100美元', size: 62, color: '#d9a441', font: 'cond' },
    ],
    lines: [
      L('larry', 'Old McDevitt told me Teller had opened a bucket shop in Hoboken, with no limit on the play.', '在富勒顿公司，老麦克德维特告诉我，特勒在霍博肯开了一家对赌行，下注不设上限。'),
      L('larry', 'That Saturday I went over. The manager kept pitching me, and urged me to hurry: the market closed at noon.', '那个周六我过去了。经理一个劲儿地游说我，还催我快点：中午就收盘了。'),
      L('larry', 'At 11:15 I said all right, put up two thousand dollars in cash, and gave him selling orders in several stocks.', '十一点一刻，我说"好吧"，交了两千美元现金，下了好几只股票的卖空单。'),
      L('larry', 'Prices slid off, just as I\'d figured. I closed out just before the last-minute rally. Fifty-one hundred dollars was coming to me.', '价格果然如我所料下滑。我在最后几分钟的反弹之前平了仓。他们应付我五千一百美元。'),
      L('larry', 'He couldn\'t pay it all. I took my two thousand back plus about eight hundred, all he had, and got the rest on Monday.', '他付不出全部。我先拿回自己的两千，再加上大约八百，那是店里全部的现金。余下的周一再来取。'),
    ] });
  }

  shot({ id: 'p01_saturday', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例分析' }, title: { en: 'Reading the Saturday Setup', zh: '看懂周六的局面' }, els: [
    { type: 'line', x: 70, y: 260, w: 1000, h: 555, xr: [0, 120], yr: [94, 103.5], yTicks: [], yLabel: ['Price (illustrative)', '价格（示意）'],
      xTicks: [[0, '10:00', ''], [30, '10:30', ''], [60, '11:00', ''], [75, '11:15', ''], [90, '11:30', ''], [120, '12:00', '收盘']],
      bands: [{ x0: 90, x1: 120, y0: 94, y1: 103.5, label: ['Last half hour', '最后半小时'], lx: 90, at: 1 }],
      series: [{ pts: [[0, 100], [15, 100.8], [30, 101.2], [45, 101.6], [60, 101.8], [75, 102], [85, 101.4], [95, 100], [105, 98.2], [113, 96.6], [115, 96.4], [120, 98.6]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 3, 3] }],
      notes: [
        { x: 75, y: 102, at: 2, en: '11:15: sells short, $2,000 up', zh: '11:15做空，交2,000美元', dx: -300, dy: 50, w: 280 },
        { x: 115, y: 96.4, at: 3, en: 'Closes out before the final rally', zh: '在最后反弹前平仓', dx: -330, dy: -10, w: 270 },
      ], illustrative: true },
    { type: 'cards', x: 1110, y: 260, w: 740, ch: 125, cols: 1, max: 26, items: [
      { at: 0, en: 'Market up all week, so the Saturday bank statement would show a big drop in surplus reserve.', zh: '大盘涨了一整周，所以周六的银行报表必然显示超额准备金大降。' },
      { at: 1, en: 'The usual excuse for room traders to hammer stocks and shake out weak accounts.', zh: '这是场内交易员打压股价、震出弱势账户的惯常借口。' },
      { at: 2, en: 'They hit the public\'s favourites, where most stops sat. Teller\'s customers were long those.', zh: '他们专打散户最爱、止损单最多的股票，正是特勒的客户做多的那些。' },
      { at: 3, en: 'Then the traders cover: a rally in the last five minutes.', zh: '然后交易员回补：最后五分钟出现反弹。' },
    ] },
  ], lines: [
    L('host', 'Why that Saturday? After a week-long rise, the Saturday bank statement was sure to show a big drop in surplus reserve.', '为什么选那个周六？大盘涨了一整周，周六的银行报表必然显示超额准备金大幅减少。'),
    L('host', 'That gave the room traders their usual excuse to hammer stocks in the last half hour and shake out weak accounts.', '这正好给了场内交易员惯常的借口：在最后半小时打压股价，震出弱势账户。'),
    L('host', 'They\'d hit the public\'s favourites, where most stop orders sat: exactly what Teller\'s customers were long of.', '他们会专打散户最爱、止损单最多的股票，而这些恰恰是特勒的客户重仓做多的。'),
    L('host', 'So he sold short at 11:15, rode the slide, and closed out before the traders\' own covering rally in the final five minutes.', '于是他在十一点一刻做空，吃下这段下跌，并在最后五分钟交易员回补反弹之前平仓。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p01_mac', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('larry', a, 0.3, 1.0, { expr: 'smile', pose: 'money' }), ch('friend', a, 0.72, 1.0, { hat: 'bowler', hatColor: '#2a2a2a', hair: '#bdb6aa', musColor: '#bdb6aa', mus: 'walrus', age: 2, expr: 'grin', flip: true })] }),
      P(b, { at: 2, bg: 'street', bgo: { crowd: false }, props: [{ t: 'sign', x: 160, y: 250, w: 580, en: 'CLOSED: Teller\'s Hoboken branch', zh: '已关门：特勒霍博肯分店', color: '#b8322a', size: 34, zsize: 28 }] }),
    ], caps: [
      { x: 70, y: 70, w: 420, en: 'Old McDevitt: $1,000 stake.', zh: '老麦克德维特：本金1,000美元。' },
    ],
    sfx: [{ at: 1, x: 700, y: 720, t: '+$2,800', zh: '净赚', size: 70, color: '#d9a441', font: 'cond' }],
    lines: [
      L('larry', 'Next I gave McDevitt a thousand dollars to trade at Teller\'s in twenty- and thirty-share lots, until he was one of the regulars.', '接着我给了麦克德维特一千美元，让他在特勒店里做二三十股的小单，直到成了常客。'),
      L('larry', 'When I saw a break coming, I tipped him off and he sold all they\'d let him. I cleared twenty-eight hundred net.', '一看到要跌，我就给他递话，他能卖多少就卖多少。扣掉他的分成和开销，我净赚两千八百美元。'),
      L('larry', 'Within a month, Teller closed the Hoboken branch. A crazy bull market was busting shops all over the country.', '不到一个月，特勒关掉了霍博肯分店。一场疯狂的牛市让全国各地的对赌行纷纷倒闭。'),
    ] });
  }

  shot({ id: 'p01_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode One Teaches', zh: '第一集的要点' }, els: [
    { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { at: 0, en: 'Watch what prices do. The reason comes later, often too late to act on.', zh: '看价格在做什么。原因总是后来才出现，常常已来不及行动。' },
      { at: 0, en: 'Keep an honest scorecard of real forecasts: hits and misses.', zh: '为真实预测记一本诚实的账：猜中和猜错都记。' },
      { at: 0, en: 'Look for where buying is a trifle better than selling. It works about 7 times in 10, not 10 in 10.', zh: '找买盘略强于卖盘的地方。大约十次对七次，不是十次全对。' },
      { at: 1, en: 'Know the mechanics of the game you are in. A bucket shop is not a market.', zh: '弄清你所在游戏的机制。对赌行不是市场。' },
      { at: 1, en: 'Trade only when precedents favour you. Don\'t be the Wall Street fool.', zh: '只在先例支持你时交易。别做华尔街傻瓜。' },
      { at: 1, en: 'If something feels wrong, get out first. Find the reason later.', zh: '感觉不对就先离场，原因以后再找。' },
    ] },
  ], lines: [
    L('host', 'In brief: watch what prices do, keep an honest scorecard, and act on evidence. The explanation comes later.', '第一集小结：看价格在做什么，诚实地记分。按证据行动，解释总是后来才有。'),
    L('host', 'Know which game you are in, trade only when the odds favour you, and when something feels wrong, step aside.', '弄清自己在玩哪种游戏。只在胜算站在你这边时交易。感觉不对时，先退出来。'),
  ] });

  shot({ id: 'p01_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistakes of Chapters I – II', zh: '第一、二章的错误' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, size: 25, widths: [0.3, 0.37, 0.33], cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Trading all the time in the shops, for excitement', '在对赌行为了刺激而频繁交易'], ['Most days there was no edge; he gambled instead of waiting for form', '大多数日子并无优势；他没等到形态出现就去赌'], ['Trade only when precedents favour you', '只在先例支持你时交易']],
      [['Using the bucket-shop method at Fullerton\'s', '把对赌行打法搬到富勒顿'], ['Tape lag, unknown fills, his own size, 10% margin', '纸带滞后、成交价未知、自身单量、10%保证金'], ['Learn the mechanics of the market you trade in', '先弄懂你所交易市场的机制']],
      [['Thinking that beating the shops meant beating the market', '以为赢了对赌行就是赢了市场'], ['He knew only one part of the game: short-term fluctuations', '他只懂游戏的一部分：短线波动'], ['Beating the shop ≠ beating the game', '赢了对赌行≠赢了这场游戏']],
      [['Trusting a house that profits when you lose', '信任靠你亏钱赚钱的店家'], ['The Cosmopolitan could run the real price to wipe out margins', '"大都会"可以拉动真实价格洗掉保证金'], ['Know who is on the other side of your trade', '弄清你交易的对手方是谁']],
    ], reveal: true, rowAt: [0, 1, 1, 1] },
  ], lines: [
    L('host', 'The mistakes of these two chapters, each with its cause and the rule it teaches.', '这两章的错误，以及各自的原因和教训。'),
    L('host', 'The big one: beating the bucket shops was not beating the market. Name a loss\'s cause, and it becomes a rule.', '最大的一条：赢了对赌行，不等于赢了市场。说清亏损的原因，亏损才会变成规则。'),
  ] });
};
