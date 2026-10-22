// Episode 7 — Chapters XIII–XIV: the Williamson trap, the lean years, bankruptcy and the comeback.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const RED = '#b8322a', GREEN = '#2f7d3a', GOLD = '#f6d77a', PALE = '#fbf3df';

  episode(7, 'The Comeback', '东山再起', { en: 'Chapters XIII – XIV', zh: '原著第十三至十四章' }, '#2f7d3a', [
    L('host', 'Episode seven. The comeback.', '第七集：东山再起。'),
    L('host', 'Broke, in debt, and tied up by a favour, Livingston loses four years. Then he climbs back, and pays everyone.', '破产、负债，又被一份人情捆住手脚，利文斯顿失去了四年。然后他东山再起，还清了所有人的钱。'),
  ]);

  // ---------------------------------------------------------------- Ch XIII
  {
    const [a, b] = HALF;
    shot({ id: 'p07_broke', kind: 'comic', panels: [
      P(a, { bg: 'dark', chars: [ch('larry', a, 0.5, 1.05, { expr: 'tired', hy: 0.5, exprAt: { 1: 'think' } })] }),
      P(b, { at: 2, bg: 'train', chars: [ch('larryHat', b, 0.5, 1.0, { expr: 'determined', hy: 0.6 })] }),
    ], caps: [
      { x: 70, y: 70, w: 520, en: 'After the cotton disaster.', zh: '棉花惨败之后。' },
      { at: 2, x: 1005, y: 70, w: 520, en: 'Owing over $100,000. Off to Chicago.', zh: '欠债逾十万美元。前往芝加哥。' },
    ],
    sfx: [{ at: 1, x: 500, y: 700, t: 'SWELLED HEAD?', zh: '自大症？', size: 62, color: GOLD, rot: -5 }], lines: [
      L('larry', 'After the cotton disaster I was broke again, and worse, I was trading badly. I was sick, nervous, and unable to reason calmly.', '棉花惨败后，我又破产了。更糟的是，我交易失常：我病了，紧张不安，无法冷静思考。'),
      L('larry', 'A speculator must know himself thoroughly. I now knew what folly I was capable of. The swelled head is the costliest disease in Wall Street.', '投机者必须彻底了解自己。如今我知道自己能蠢到什么程度。自大，是华尔街代价最高的病。'),
      L('larry', 'I owed over a hundred thousand dollars to various brokers. Out of trim, I left New York to find a stake somewhere else.', '我欠各家经纪商十万多美元。状态不佳，我离开纽约，去别处筹本钱。'),
      L('larry', 'In Chicago, an old brokerage house trusted me enough to let me trade in a small way. I began very conservatively.', '在芝加哥，一家老经纪行信任我，让我小规模交易。我开始得非常保守。'),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p07_tucker', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, props: [
        { t: 'telegraph', x: 450, y: 640 },
        { t: 'sign', x: 150, y: 170, w: 600, en: 'COME TO NEW YORK AT ONCE. — L. TUCKER', zh: '速来纽约。——L·塔克', size: 40, zsize: 32, color: '#6a4426' },
      ] }),
      P(b, { at: 1, bg: 'study', bgo: { ticker: false }, chars: [ch('larry', b, 0.45, 1.0, { expr: 'think', pose: 'phone', hy: 0.55 })] }),
    ],
    bubbles: [{ at: 1, x: 1400, y: 80, w: 440, en: 'Come, and come quick.', zh: '来吧，快来。', tx: 1430, ty: 330 }],
    caps: [{ at: 2, x: 1005, y: 640, w: 840, en: 'Williamson & Brown · client: Alvin Marquand, Chesapeake & Atlantic', zh: '威廉森与布朗公司 · 大客户：阿尔文·马昆德，切萨皮克与大西洋铁路', size: 26, zsize: 22 }],
    lines: [
      L('larry', 'Then a telegram came from Lucius Tucker, a former office manager I knew. Come to New York at once.', '这时，我认识的前办公室经理卢修斯·塔克发来电报：速来纽约。'),
      L('larry', 'I phoned him. He would only say that a big banker wanted to see me, and that it was no fool\'s trip.', '我打电话给他。他只肯说一位大银行家要见我，而且这趟绝不会白跑。'),
      L('larry', 'The banker was Dan Williamson of Williamson and Brown. The firm\'s great customer was his brother-in-law, Alvin Marquand.', '这位银行家是威廉森与布朗公司的丹·威廉森。公司的头号客户是他的妹夫阿尔文·马昆德。'),
      L('host', 'Marquand was president of the Chesapeake and Atlantic Railroad and the leader of a banking clique known as the Fort Dawson gang.', '马昆德是切萨皮克与大西洋铁路公司的总裁，也是"道森堡帮"这一银行家集团的领袖。'),
    ] });
  }
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p07_offer', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, chars: [
        ch('williamson', a, 0.3, 0.9, { expr: 'smile', pose: 'point', hy: 0.5, exprAt: { 3: 'grin' } }),
        ch('larryHat', a, 0.76, 0.9, { expr: 'neutral', pose: 'cross', hy: 0.5, flip: true, exprAt: { 4: 'think' } }),
      ] }),
      P(b, { bg: 'dark', props: [{ t: 'sign', x: 60, y: 90, w: 590, en: 'James Stillman: listen in silence to the whole proposition.', zh: '詹姆斯·斯蒂尔曼：沉默地听完整个提议。', size: 30, zsize: 26, color: '#2c4a3a' }] }),
      P(c, { at: 3, bg: 'dark', props: [{ t: 'sign', x: 90, y: 90, w: 530, en: 'PAY TO L. LIVINGSTON  $25,000', zh: '付给L·利文斯顿 25,000美元', size: 36, zsize: 28, color: GREEN }] }),
    ],
    bubbles: [{ at: 2, x: 120, y: 70, w: 520, en: 'My firm would like to do your stock business. I\'ll furnish the money.', zh: '我们想做你的股票经纪。钱我来出。', tx: 300, ty: 300 }],
    lines: [
      L('larry', 'I said nothing. I always let the other man finish first. James Stillman of the National City Bank was famous for listening that way.', '我一言不发。我总是让对方先把话说完。国民城市银行的詹姆斯·斯蒂尔曼就以这样倾听而著称。'),
      L('host', 'Hearing the whole proposition lets you say yes or no at once. It saves time and avoids pointless debate.', '听完整个提议，你就能立刻说"是"或"不"。省时间，也免去无谓的争论。'),
      L('williamson', 'My firm would like to do your stock business. And I\'ll furnish the money.', '我们公司想做你的股票经纪。本钱我来出。'),
      L('larry', 'He wrote me a personal check for twenty-five thousand dollars. If I lost it, there would be another.', '他给我开了一张两万五千美元的私人支票。要是亏光了，还会再给一张。'),
      L('larry', 'His reason: with a famous bear trading in his office, nobody could tell when his wealthy clients were selling. I took the check.', '他的理由是：有个著名空头在他公司交易，就没人分得清他那几位富客户何时在卖出。我收下了支票。'),
    ] });
  }
  shot({ id: 'p07_regret', kind: 'info', tag: { en: 'THE BIGGEST REGRET', zh: '最大的遗憾' }, title: { en: 'Three Weeks, $112,000, and a Debt He Wasn\'t Allowed to Repay', zh: '三周、十一万二千美元，以及一笔不让还的人情' }, els: [
    { type: 'bars', x: 70, y: 265, w: 760, h: 545, max: 120000, vsize: 30, bars: [
      { v: 25000, vl: '$25,000', en: 'Williamson\'s check', zh: '威廉森的支票', color: '#8a5a2b' },
      { v: 112000, vl: '+$112,000', en: 'Profit in 3 weeks', zh: '三周利润', color: GREEN },
    ] },
    { type: 'box', at: 0, x: 870, y: 265, w: 980, color: PALE, en: 'Average profit ≈ 150% per week for three weeks.', zh: '三周平均每周盈利约150%。', size: 30 },
    { type: 'box', at: 1, x: 870, y: 395, w: 980, color: '#fff', en: '"I\'ve come to pay you back that $25,000." — "No, no! Wait until your account amounts to something."', zh: '"我来还你那两万五千美元。"——"不，不！等你的账户像点样子再说。"', size: 28 },
    { type: 'box', at: 2, x: 870, y: 570, w: 980, color: GOLD, en: 'His most regretted mistake: he did not insist. The unpaid favour bound him, and favours must be repaid in kind.', zh: '他最后悔的错误：没有坚持还钱。未还的人情捆住了他，而人情只能用人情来还。', size: 28 },
  ], lines: [
    L('larry', 'In three weeks I turned his twenty-five thousand into a profit of a hundred and twelve thousand dollars.', '三周内，我用他的两万五千美元赚了十一万二千美元。'),
    L('larry', 'I went to pay him back. He waved me away: wait until your account amounts to something.', '我去还钱，他却摆手拒绝：等你的账户像点样子再说。'),
    L('larry', 'Not insisting was the mistake I have regretted more than any other in my Wall Street career.', '没有坚持还钱，是我华尔街生涯中最后悔的错误。'),
    L('host', 'Since Williamson left his money in, Livingston felt he couldn\'t take his own profit out. A favour can cost far more than money.', '既然威廉森没有取回那笔钱，利文斯顿觉得自己也不好提走利润。人情的代价可能远高于金钱。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p07_will', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, chars: [ch('williamson', a, 0.5, 1.05, { expr: 'smile', pose: 'point', hy: 0.5 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['C. & A.', 'SO. ATL.'], ['LONG', 'LONG']], hl: [1, 0] }, chars: [ch('larryHat', b, 0.5, 1.0, { expr: 'sad', hy: 0.55, exprAt: { 3: 'worry', 4: 'think' } })] }),
    ], caps: [{ x: 70, y: 690, w: 560, en: 'Short ≈8,000 Chesapeake & Atlantic.', zh: '做空约8,000股切萨皮克与大西洋。' }],
    bubbles: [{ at: 1, x: 70, y: 60, w: 560, en: 'I covered it for you this morning in London and went long. I know something.', zh: '今早我在伦敦替你平了空仓，还做了多。我知道些内情。', tx: 470, ty: 280 }],
    sfx: [{ at: 2, x: 1430, y: 690, t: 'OWES $150,000', zh: '欠债15万美元', size: 64, color: GOLD, font: 'cond' }], lines: [
      L('larry', 'Then I turned bearish and sold several railroads short, among them about eight thousand Chesapeake and Atlantic.', '后来我转为看空，做空了几只铁路股，其中包括约八千股切萨皮克与大西洋。'),
      L('williamson', 'Larry, I covered your short this morning in London and went long. I know something you couldn\'t know.', '拉瑞，今早我在伦敦替你平了空仓，还做了多。我知道一些你不可能知道的事。'),
      L('larry', 'It came from the chairman\'s brother-in-law, and he had been kind to me. I gave in. Soon my profit was gone and I owed a hundred fifty thousand.', '这话出自董事长的妹夫之口，而且他待我不薄。我让步了。很快利润全没了，我还欠了十五万美元。'),
      L('larry', 'He told me to lay off the market. About six months later he handed me credit slips: the debt was wiped out.', '他叫我别再交易。大约六个月后，他交给我几张入账单：债务一笔勾销。'),
      L('larry', 'Then he bought me ten thousand Southern Atlantic, another Marquand road. It went down. Again the loss was quietly made up through other accounts.', '接着他替我买了一万股南大西洋——又一条马昆德控制的铁路。它跌了。亏损又一次通过别的账户悄悄补上。'),
    ] });
  }
  shot({ id: 'p07_smoke', kind: 'info', tag: { en: 'WHAT WAS REALLY HAPPENING', zh: '真相' }, title: { en: 'The Smoke Screen', zh: '烟幕弹' }, els: [
    { type: 'flow', x: 70, y: 265, w: 1780, bh: 290, max: 30, nodes: [
      { num: 1, en: 'Marquand falls incurably ill. Dan knows before Marquand does.', zh: '马昆德身患不治之症。丹比马昆德本人更早知道。' },
      { num: 2, en: 'Dan starts selling Marquand\'s holdings, so he covers Larry\'s short.', zh: '丹开始卖出马昆德的持股，所以替拉瑞平掉空仓。', at: 0 },
      { num: 3, en: 'A famous bear\'s account hides whose selling it really is.', zh: '著名空头的账户掩盖了真正的卖家。', at: 1 },
      { num: 4, en: 'A grateful debtor won\'t go short elsewhere while the estate liquidates into a bear market.', zh: '心怀感激的债务人不会去别处做空，而遗产正趁熊市清仓。', at: 2 },
    ] },
    { type: 'box', at: 3, x: 70, y: 600, w: 1780, color: GOLD, anchor: 'middle', en: 'Cheaper to let him run up debts and erase them than to have him short in another office.', zh: '让他欠债再替他抹账，比让他在别家公司做空便宜得多。', size: 32 },
  ], lines: [
    L('larry', 'Finally I understood. Marquand had fallen incurably ill, and Dan knew it first. He had begun selling his brother-in-law\'s holdings.', '我终于明白了。马昆德得了不治之症，丹最先知道。他已开始卖出妹夫的持股。'),
    L('host', 'A well-known bear\'s account made the perfect smoke screen. The Street couldn\'t tell whose selling it was.', '一个知名空头的账户是完美的烟幕。华尔街分不清到底是谁在卖。'),
    L('host', 'And a debtor tied by gratitude would not be shorting in another office while the estate liquidated into a bear market.', '而一个被人情捆住的债务人，不会在遗产趁熊市清仓时，跑去别家公司做空。'),
    L('larry', 'Keeping me in debt was cheaper than having me loose. The lost money didn\'t hurt. The lost opportunity did.', '让我欠着债，比放我自由更划算。亏的钱不伤我，错过的机会才伤我。'),
  ] });
  shot({ id: 'p07_loyal', kind: 'info', tag: { en: 'LESSON', zh: '教训' }, title: { en: 'Back Your Own Judgment — Always', zh: '永远坚持自己的判断' }, els: [
    { type: 'quote', x: 160, y: 260, w: 1600, size: 44, zsize: 36, bottom: 540, en: 'The tape is not chivalrous and moreover does not reward loyalty.', zh: '行情纸带不讲骑士风度，更不会奖励忠诚。', src: 'Ch. XIII' },
    { type: 'cards', at: 1, x: 70, y: 560, w: 1780, ch: 110, cols: 2, items: [
      { en: 'Gratitude must never override your judgment.', zh: '感激之情绝不能凌驾于判断之上。', at: 1 },
      { en: 'Repay favours at once. Stay free of obligations.', zh: '人情立刻还清，别背义务。', at: 1 },
      { en: 'Don\'t trade when sick or "out of trim."', zh: '生病或状态不佳时不要交易。', at: 2 },
      { en: 'Lean years 1911–1914: no opportunity was there.', zh: '1911–1914艰难岁月：市场根本没有机会。', at: 2 },
    ] },
  ], lines: [
    L('larry', 'The tape is not chivalrous, and moreover it does not reward loyalty.', '行情纸带不讲骑士风度，更不会奖励忠诚。'),
    L('larry', 'As a man, I acted decently. As a speculator, it was foolish. My business is to back my own judgment, always.', '作为一个人，我做得体面；作为投机者，却很愚蠢。我的本分是：永远坚持自己的判断。'),
    L('host', 'Then came the lean years, 1911 to 1914. The great opportunity had passed, and the market went flat.', '接着是1911到1914年的艰难岁月。大好机会已经过去，市场陷入沉寂。'),
  ] });

  // ---------------------------------------------------------------- Ch XIV
  {
    const [a, b] = HALF;
    shot({ id: 'p07_debts', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { board: [['NO MOVE', 'NO MOVE'], ['—', '—']] }, chars: [ch('larryHat', a, 0.5, 1.0, { expr: 'tired', hy: 0.55, exprAt: { 2: 'worry' } })] }),
      P(b, { at: 3, bg: 'home', chars: [ch('broker', b, 0.35, 1.0, { expr: 'angry', pose: 'point', hy: 0.55 }), ch('larry', b, 0.8, 0.95, { expr: 'worry', hy: 0.55, flip: true })] }),
    ], caps: [{ x: 70, y: 70, w: 520, en: 'Every brokerage office: another loss.', zh: '每家经纪行：又是亏损。' }],
    sfx: [{ at: 1, x: 500, y: 690, t: 'DEBTS > $1,000,000', zh: '债务超过一百万美元', size: 60, color: GOLD, font: 'cond' }],
    bubbles: [{ at: 3, x: 1020, y: 70, w: 520, kind: 'shout', en: 'Pay up, or I\'ll sue and seize your furniture!', zh: '还钱，不然我就告你，查封你的家具！', tx: 1290, ty: 300 }],
    lines: [
      L('larry', 'I tried other brokers\' offices and lost in every one. I was trying to force the market to give what it didn\'t have.', '我换了别的经纪行，家家都亏。我是在逼市场给出它根本没有的东西。'),
      L('larry', 'When I finally stopped trading on credit, I owed well over a million dollars.', '等我终于不再赊账交易时，我已欠下远超一百万美元。'),
      L('larry', 'I studied myself as I would study a market. The trouble wasn\'t the market. It was worry about the money I owed.', '我像研究市场一样研究自己。问题不在市场，而在于对欠款的忧虑。'),
      L('larry', 'One man I owed eight hundred dollars threatened to sue and seize my furniture. Receivers of a failed firm hounded me for sixty thousand.', '有个人我只欠他八百美元，他却威胁要告我、查封我的家具。一家倒闭公司的破产管理人为六万美元整天追着我。'),
    ] });
  }
  shot({ id: 'p07_bankrupt', kind: 'info', tag: { en: 'CLEAR THE MIND', zh: '清空头脑' }, title: { en: 'Bankruptcy: Removing the Worry', zh: '破产：卸下焦虑' }, els: [
    { type: 'table', x: 70, y: 265, w: 1780, widths: [0.34, 0.24, 0.42], cols: [['Creditor', '债权人'], ['Owed', '欠款'], ['Response', '态度']], size: 24, rows: [
      [['Most creditors (friends, big firms)', '大多数债权人（朋友、大公司）'], ['Over $1,000,000 in all', '合计超过100万美元'], ['Signed releases: "we understand"', '签署免责书："我们理解"']],
      [['The $800 man', '那位"八百美元先生"'], ['$800', '800美元'], ['Refused to sign', '拒绝签字']],
      [['Receivers of a bankrupt broker', '某破产经纪行的管理人'], ['$60,000', '6万美元'], ['Couldn\'t sign off', '无法免除']],
      [['Bankruptcy schedule', '破产清单'], ['≈ $100,000', '约10万美元'], ['Though he owed well over $1M', '尽管他欠款远超100万']],
    ], reveal: true, rowAt: [1, 1, 1, 1], hl: [3] },
    { type: 'box', at: 3, x: 70, y: 725, w: 1780, color: GOLD, anchor: 'middle', size: 26, en: 'Stock Exchange closed July 31 – mid-December 1914. Nobody could give anybody a stake.', zh: '证券交易所1914年7月31日至12月中旬休市。谁也没法给谁本钱。' },
  ], lines: [
    L('larry', 'So I went through bankruptcy. I told my creditors frankly: I cannot be my old self while these debts harass me.', '于是我申请了破产。我坦白告诉债权人：被这些债务纠缠着，我就无法恢复原来的我。'),
    L('host', 'Most of them simply signed releases. Only the holdouts went on the schedule: about a hundred thousand, though he owed over a million.', '大多数人干脆签了免责书。只有不肯签的进入了破产清单：约十万美元，而他实际欠款超过一百万。'),
    L('host', 'The point isn\'t dodging debts. A speculator must give his whole mind to the work, and worry steals it.', '重点不是逃债。投机者必须全神贯注，而焦虑会偷走专注。'),
    L('host', 'But the Stock Exchange had been shut from July thirty-first to mid-December 1914. Nobody had a stake to give.', '但证券交易所从1914年7月31日一直关到12月中旬。谁都拿不出本钱给他。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p07_wait', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, chars: [ch('williamson', a, 0.5, 1.0, { expr: 'smile', hy: 0.5 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['BETHLEHEM'], ['90']], hl: [1, 0] }, chars: [ch('larryHat', b, 0.5, 1.0, { expr: 'worry', pose: 'cross', hy: 0.55, exprAt: { 3: 'determined' } })] }),
    ], caps: [{ x: 70, y: 70, w: 480, en: 'February 1915. Only 500 shares.', zh: '1915年2月，只有500股额度。' }, { at: 2, x: 1005, y: 70, w: 480, en: 'Six weeks. Not one trade.', zh: '六周。一笔也没做。' }],
    bubbles: [{ at: 0, x: 100, y: 560, w: 760, en: 'When you see something good and want to buy 500 shares, go ahead.', zh: '看到好机会，想买五百股，尽管买。', tx: 450, ty: 470 }],
    lines: [
      L('larry', 'In February 1915 I went back to Dan Williamson. He said: buy five hundred shares when you see something good.', '1915年2月，我又去找丹·威廉森。他说：看到好机会，就买五百股吧。'),
      L('larry', 'Only five hundred shares, with no room for even a small setback. My very first trade had to make real money.', '只有五百股，连一点小挫折都承受不起。我的第一笔交易必须真正赚到钱。'),
      L('larry', 'For six weeks I stayed away from his office and read the tape where I couldn\'t trade a share. I was guarding against my own weakness.', '整整六周，我远离他的公司，在一家无法下单的经纪行看盘。我在提防自己的弱点。'),
      L('larry', 'I was most bullish on Bethlehem Steel. But to make sure of winning, I decided to wait until it crossed par.', '我最看好伯利恒钢铁。但为确保赢，我决定等它突破面值100再说。'),
    ] });
  }
  shot({ id: 'p07_beth', kind: 'info', tag: { en: 'THE PIVOTAL POINT', zh: '关键点' }, title: { en: 'Bethlehem Steel, 1915: Waiting for Par', zh: '1915年伯利恒钢铁：等待突破面值' }, els: [
    { type: 'line', x: 70, y: 255, w: 1180, h: 565, xr: [0, 10], yr: [80, 152], yTicks: [90, 98, 115, 145], yLabel: ['Bethlehem Steel', '伯利恒钢铁'], illustrative: true,
      hlines: [{ v: 100, label: ['Par 100: pivotal point', '面值100：关键点'], color: RED, x0: 0, x1: 4.2, lx: 4.2 }],
      series: [{ pts: [[0, 84], [1.5, 87], [3, 90], [4.6, 98], [5.2, 99], [6.4, 114.5], [9.4, 145]], color: GREEN, reveal: [0, 0, 0, 1, 2, 2, 3] }],
      notes: [
        { x: 3, y: 90, en: 'At 90: "sweating blood", still waits', zh: '90：急得冒血汗，仍在等', dx: -300, dy: -230, w: 290 },
        { x: 4.6, y: 98, at: 1, en: 'At 98 the tape "says" 100', zh: '98时盘面已"说"100', dx: 30, dy: 25, w: 270 },
        { x: 6.4, y: 114.5, at: 2, en: 'Bought 500 @ 98–99; closes ≈114–115: +500', zh: '98–99买500股；收约114–115：再买500', dx: -420, dy: -215, w: 330 },
        { x: 9.4, y: 145, at: 3, en: 'Next day: 145', zh: '次日：145', dx: -60, dy: 100, w: 160 },
      ] },
    { type: 'box', x: 1290, y: 255, w: 560, color: PALE, en: 'Each point he waited = $500 of profit not made (500 shares).', zh: '每多等一个点 = 少赚500美元（500股）。', size: 28 },
    { type: 'box', at: 1, x: 1290, y: 430, w: 560, color: '#fff', en: 'Why wait? Without a stake he could not afford even one small loss. The first trade had to be "as nearly a cinch" as possible.', zh: '为何要等？没有本钱，他连一次小亏都承受不起。第一笔交易必须尽可能稳操胜券。', size: 26 },
    { type: 'box', at: 3, x: 1290, y: 660, w: 560, color: GOLD, en: 'Six weeks of patience rebuilt his stake.', zh: '六周的耐心，换回了本钱。', size: 30 },
  ], lines: [
    L('host', 'Every point he waited cost five hundred dollars. At 90, he says, he was sweating blood. But he held himself in check.', '他每多等一个点，就少赚五百美元。他说到90时急得冒血汗。但他还是忍住了。'),
    L('larry', 'At 98 I saw 100 on the tape before the ticker printed it. That was tape-reading instinct, not hope. It was as good as through par.', '到98时，我在纸带上看到了100，尽管报价机还只打出98。那是看盘的直觉，不是希望。它等于已经突破面值。'),
    L('host', 'He bought five hundred at 98 to 99. It shot up and closed around 114 or 115, and he bought five hundred more.', '他在98到99之间买入五百股。股价飙升，收在114或115左右，他又买了五百股。'),
    L('host', 'The next day Bethlehem was 145. The hardest six weeks of his life had given him his stake back.', '第二天伯利恒钢铁到了145。他一生中最煎熬的六周，换回了本钱。'),
  ] });
  shot({ id: 'p07_par', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'The Trade Step by Step, and the "Round Number" Rule', zh: '交易分解，以及"整数关口"法则' }, els: [
    { type: 'table', x: 70, y: 265, w: 1130, widths: [0.2, 0.36, 0.44], size: 26, cols: [['Price', '价格'], ['Action', '动作'], ['Reason', '理由']], rows: [
      [['Rising → 90', '上涨→90'], ['Wait. Buy nothing.', '等待，不买。'], ['First trade must be a near-cinch', '第一笔必须近乎稳赢']],
      [['98', '98'], ['Buy 500 at 98–99', '98–99买500股'], ['Tape says par is as good as crossed', '盘面显示破100已成定局']],
      [['≈114–115 (close)', '约114–115（收盘）'], ['Buy 500 more', '再买500股'], ['The trade has proved itself', '交易已证明正确']],
      [['145 (next day)', '145（次日）'], ['Stake rebuilt', '本钱回来了'], ['Now he can trade fair-sized lots', '现在可以做像样的仓位']],
    ], reveal: true, rowAt: [0, 0, 0, 0] },
    { type: 'cards', x: 1240, y: 265, w: 610, ch: 170, cols: 1, max: 28, items: [
      { en: 'First cross of 100, 200 or 300 → often 30–50 more points.', zh: '首次突破100、200或300 → 常再涨30–50点。', at: 0, tagColor: RED },
      { en: 'After 300 it moves faster than after 100 or 200.', zh: '突破300后比突破100或200涨得更快。', at: 0, tagColor: RED },
      { en: 'Anaconda: bought as it crossed 200, sold next day at 260.', zh: '阿纳康达：突破200时买入，次日260卖出。', at: 1, tagColor: GREEN },
    ] },
  ], lines: [
    L('larry', 'Whenever a stock crosses 100, 200 or 300 for the first time, it nearly always goes on 30 to 50 points, and faster after 300.', '每当一只股票首次突破100、200或300，它几乎总会再涨30到50点，突破300后涨得更快。'),
    L('larry', 'One of my first big coups was in Anaconda. I bought it when it crossed 200 and sold it a day later at 260.', '我早期的一次大胜是阿纳康达。它突破200时我买入，第二天在260卖出。'),
    L('host', 'Treat the numbers as his observation of that era. The lasting method: fix the pivotal point in advance, wait for it, then act at once.', '这些数字是他对那个时代的观察。经久不衰的方法是：预先定好关键点，等它到来，然后立刻行动。'),
  ] });
  shot({ id: 'p07_1915', kind: 'info', tag: { en: 'RIGHT ≠ PAID', zh: '判断对≠赚到钱' }, title: { en: 'From Over $1 Million in Debt to $3 Million in Profit', zh: '从负债逾百万到盈利三百万' }, els: [
    { type: 'timeline', x: 70, y: 265, w: 1100, h: 550, vsize: 26, lsize: 21, minLog: 4, items: [
      { v: -1000000, vl: '> −$1M', en: 'Debts, 1914', zh: '1914年债务' },
      { v: 140000, vl: '≈$140,000', en: 'Balance, end 1915', zh: '1915年底余额', at: 1 },
      { v: 3000000, vl: '≈$3,000,000', en: 'Cleared in 1916', zh: '1916年盈利', at: 3 },
    ] },
    { type: 'box', at: 0, x: 1210, y: 265, w: 640, color: PALE, en: 'Lusitania break + "one or two other reverses" in 1915.', zh: '1915年："卢西塔尼亚号"暴跌，外加一两次挫折。', size: 28 },
    { type: 'box', at: 2, x: 1210, y: 430, w: 640, color: GOLD, en: 'Being right is not the same as being paid. Nobody is beyond the reach of accidents.', zh: '判断正确不等于赚到钱。没有人能免于意外。', size: 28 },
    { type: 'box', at: 3, x: 1210, y: 620, w: 640, color: '#fff', en: 'H. H. Rogers: some times you can no more help making money than help getting wet in the rain.', zh: 'H·H·罗杰斯：有时候你想不赚钱都难，就像淋雨不可能不湿。', size: 26 },
  ], lines: [
    L('larry', 'From then on I traded well. Then came the Lusitania break, and one or two other reverses I wasn\'t wise enough to foresee.', '此后我交易顺手。接着遇上"卢西塔尼亚号"引发的暴跌，以及一两次我没能预见的挫折。'),
    L('larry', 'I ended 1915 with about a hundred and forty thousand dollars, though I had been consistently right for most of the year.', '1915年底，我账上只有约十四万美元，尽管这一年大部分时间我的判断都是对的。'),
    L('host', 'Being right is not the same as being paid. No trader is beyond the reach of accidents.', '判断正确不等于赚到钱。没有哪个交易者能免于意外。'),
    L('larry', '1916 was a war-boom bull market. As H. H. Rogers said, sometimes you can no more help making money than help getting wet in the rain.', '1916年是战争景气带来的牛市。正如H·H·罗杰斯所说，有时候你想不赚钱都难，就像不打伞走进雨里不可能不湿。'),
  ] });
  shot({ id: 'p07_1916', kind: 'info', tag: { en: 'READING THE TOP', zh: '识别顶部' }, title: { en: '1916: When the Leaders Stop Leading', zh: '1916年：当龙头不再领涨' }, els: [
    { type: 'bars', x: 70, y: 265, w: 860, h: 550, max: 130000, vsize: 28, bars: [
      { v: 60000, vl: '60,000', en: 'Short 5,000 × 12 tired leaders', zh: '12只疲软龙头各空5,000股', color: RED, at: 1 },
      { v: 120000, vl: '120,000', en: 'All 12 show ≥4 pts → doubled', zh: '12只均盈利≥4点→加倍', color: '#7a1f1a', at: 2 },
    ] },
    { type: 'cards', x: 970, y: 265, w: 880, ch: 118, cols: 1, max: 30, items: [
      { en: 'Warning: leaders react 6–7 points and don\'t come back, while the rest still rise.', zh: '警告：龙头回落6–7点后不再涨回，其他股仍在涨。', at: 0 },
      { en: 'Short the tired leaders; go long the new ones, until they stall too.', zh: '做空疲软龙头；做多新龙头，直到它们也停滞。', at: 1 },
      { en: 'Cover into the "leak" break: a big market to buy back 120,000 shares.', zh: '在"泄密"暴跌中回补：市场够大，才能买回12万股。', at: 3 },
      { en: 'Never try to sell at the top. Sell after a reaction if there is no rally.', zh: '永远别想卖在最高点。回落后若无反弹，就卖。', at: 4 },
    ] },
  ], lines: [
    L('larry', 'Late in 1916 the leaders began to fail. One after another they reacted six or seven points, and for the first time in months, didn\'t come back.', '1916年末，领涨股开始失灵。它们一只接一只回落六七点，几个月来第一次没有涨回去。'),
    L('larry', 'I sold five thousand shares of each tired leader and bought the new leaders. When those stalled too, I sold them short as well.', '我对每只疲软的龙头各做空五千股，同时买入新龙头。等新龙头也停滞了，我把它们也做空了。'),
    L('host', 'After about a month: short sixty thousand shares across twelve stocks. When all twelve showed at least four points of profit, he doubled to a hundred twenty thousand.', '约一个月后，他在十二只股票上共做空六万股。当十二只全部盈利至少四点时，他加倍到十二万股。'),
    L('host', 'Seven weeks later came the famous leak about a Wilson peace message. Stocks broke, and he covered: a big market to buy back in.', '七周后，传出威尔逊将发表和平讲话的著名"泄密"。股市暴跌，他趁机回补：市场够大，才买得回来。'),
    L('host', 'Result for 1916: about three million dollars. A man does not swear allegiance to bull or bear. His concern is being right.', '1916年成绩：约三百万美元。一个人不必对多头或空头宣誓效忠。他只关心做对。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p07_palm', kind: 'comic', panels: [
      P(a, { bg: 'beach', chars: [ch('larryHat', a, 0.5, 1.0, { hat: 'boater', hatColor: '#e0c27a', expr: 'think', pose: 'chin', hy: 0.55, exprAt: { 2: 'determined' } })] }),
      P(b, { at: 3, bg: 'night', props: [{ t: 'paper', x: 90, y: 110, w: 720, h: 520, paper: 'EXTRA', en: 'GERMANY ANNOUNCES UNRESTRICTED SUBMARINE WARFARE', zh: '德国宣布无限制潜艇战', size: 50, rot: -2 }] }),
    ], caps: [{ x: 70, y: 70, w: 560, en: 'Palm Beach, 1917. Short stocks and wheat.', zh: '1917年，棕榈滩。做空股票和小麦。' }],
    sfx: [{ at: 2, x: 500, y: 680, t: '2:25 PM — BUY 15,000 BALES', zh: '下午2:25——买入1.5万包棉花', size: 52, color: GOLD, font: 'cond', rot: -4 }], lines: [
      L('larry', 'Winter of 1917, Palm Beach. I was short stocks and wheat, and both showed me a handsome profit.', '1917年冬，棕榈滩。我做空了股票和小麦，两边都有可观的利润。'),
      L('larry', 'There was much talk of President Wilson\'s peace efforts. With peace, stocks and wheat should fall, and cotton should rise.', '到处都在谈威尔逊总统的和平努力。若和平到来，股票和小麦该跌，棉花该涨。'),
      L('larry', 'At 2:20 that afternoon I owned no cotton. At 2:25 I bought fifteen thousand bales as a starter.', '那天下午2点20分，我一包棉花也没有。2点25分，我先买了一万五千包作为首批。'),
      L('larry', 'After the close came Germany\'s unrestricted submarine warfare note. That night a great industrialist offered Steel five points under the close. Nobody took it.', '收盘后，德国发出无限制潜艇战照会。当晚，一位工业巨头愿以低于收盘价五点卖出钢铁股，却无人接手。'),
    ] });
  }
  shot({ id: 'p07_shock', kind: 'info', tag: { en: 'KEY LESSON', zh: '核心教训' }, title: { en: 'One Shock, Two Kinds of Position', zh: '同一场冲击，两种仓位' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, widths: [0.24, 0.27, 0.21, 0.28], size: 24, cols: [['Position', '仓位'], ['Based on', '依据'], ['Next morning', '次日早晨'], ['Result', '结果']], rows: [
      [['Short stocks (incl. 50,000 U.S. Steel) and wheat', '做空股票（含5万股美国钢铁）和小麦'], ['Market conditions: a bear market', '市场状况：熊市'], ['Some stocks open 8 pts lower', '部分股票低开8点'], ['Covered all: ≈ +$1,500,000', '全部回补：约+150万美元']],
      [['Long 15,000 bales cotton', '做多1.5万包棉花'], ['An outside event: Wilson\'s peace bid', '场外事件：威尔逊的和平努力'], ['Opens 500 points down', '低开500点'], ['≈ −$375,000 overnight (book also says $400,000)', '一夜约−37.5万美元（书中另一处说40万）']],
      [['Net', '净额'], ['', ''], ['', ''], ['A little over $1,000,000', '略多于100万美元']],
    ], reveal: true, rowAt: [0, 2, 3], hl: [2] },
    { type: 'box', at: 4, x: 70, y: 700, w: 1780, color: GOLD, anchor: 'middle', size: 28, en: 'Positions based on market conditions survived the shock, and even profited. The bet on an outside event lost.', zh: '基于市场状况的仓位扛住了冲击，甚至因此获利；押注场外事件的那笔却亏了。' },
  ], lines: [
    L('larry', 'Next morning some stocks opened eight points down. In a demoralised bear market you cover. I bought back everything, including fifty thousand U.S. Steel.', '第二天早上，部分股票低开八点。熊市中一旦出现恐慌就该回补。我全部买回，包括五万股美国钢铁。'),
    L('host', 'His profit on stocks and wheat was about one and a half million dollars.', '他在股票和小麦上的利润约为一百五十万美元。'),
    L('host', 'Cotton opened five hundred points down: an overnight loss of three hundred seventy-five thousand. A page later he calls it four hundred thousand.', '棉花低开五百点：一夜亏损三十七万五千美元。书中稍后一页又说成四十万美元。'),
    L('larry', 'I took the cotton loss, and figured my profit at a little over one million instead of a million and a half.', '我认赔了棉花，把这次利润算成一百多万，而不是一百五十万。'),
    L('host', 'The key lesson: positions built on market conditions survived the shock. The bet on an outside event, peace, was the one that lost.', '核心教训：建立在市场状况上的仓位扛住了冲击；押注场外事件——和平——的那笔，恰恰亏了。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p07_repay', kind: 'comic', panels: [
      P(a, { bg: 'study', chars: [ch('larryOld', a, 0.45, 1.0, { expr: 'smile', pose: 'money', hy: 0.5, exprAt: { 1: 'grin' } })] }),
      P(b, { at: 2, bg: 'home', props: [{ t: 'sign', x: 140, y: 230, w: 620, en: 'ANNUITIES & TRUSTS — safe even from me', zh: '年金与信托——连我自己都动不了', size: 34, zsize: 30, color: '#2c4a3a' }] }),
    ], caps: [{ x: 70, y: 70, w: 520, en: 'Early 1917: over $1,000,000 repaid, all at once.', zh: '1917年初：一次性还清百万余元。' }],
    sfx: [{ at: 1, x: 470, y: 700, t: '$800 MAN: LAST', zh: '八百美元先生：最后一个', size: 56, color: GOLD, font: 'cond' }], lines: [
      L('larry', 'Back in New York in 1917, I paid every old debt in full, over a million dollars, to everyone at once.', '1917年回到纽约，我一次性向所有人还清了全部旧债，超过一百万美元。'),
      L('larry', 'The creditors who had signed releases refused interest. The eight-hundred-dollar man I paid last, on purpose, to teach him consideration.', '签过免责书的债权人拒收利息。那位八百美元先生，我故意最后才还，让他学会体谅别人。'),
      L('larry', 'Then I bought annuities and set up trusts for my wife and son. They are safe from my market needs, safe even from me.', '然后我买了年金，并为妻子和儿子设立信托。它们不受我交易需要的影响——连我自己都碰不到。'),
      L('host', 'Money management: protect part of your capital from your own future mistakes.', '资金管理：保护一部分资本，免受你自己未来错误的伤害。'),
    ] });
  }
  shot({ id: 'p07_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'Episode 7 in Six Points', zh: '第七集六个要点' }, els: [
    { type: 'cards', x: 70, y: 265, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { en: 'Hear the whole proposition before you answer.', zh: '先听完全部提议，再作答。' },
      { en: 'Never let gratitude override your judgment. Repay favours at once.', zh: '绝不让感激压倒判断。人情要立刻还清。' },
      { en: 'Don\'t trade sick, worried or out of trim. Remove the worry first.', zh: '生病、焦虑或状态不佳时不交易。先卸下焦虑。', at: 1 },
      { en: 'With a small stake, wait for the pivotal point. The first trade must win.', zh: '本钱少时，等待关键点。第一笔必须赢。', at: 1 },
      { en: 'A top shows when leaders react and don\'t come back.', zh: '龙头回落后不再涨回，就是顶部的信号。', at: 2 },
      { en: 'Base positions on market conditions, not hoped-for outside events.', zh: '仓位要基于市场状况，而非期盼的场外事件。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Listen fully, then decide. And never let gratitude or obligation trade for you.', '先听完，再决定。永远不要让感激或人情替你交易。'),
    L('host', 'Clear your mind before you trade, and with a small stake, wait for a near-certain first trade.', '交易前先清空头脑；本钱少时，等一笔近乎稳赢的首战。'),
    L('host', 'Watch the leaders for the top, and build positions on market conditions, not on outside events.', '从龙头股看顶部；仓位要建立在市场状况上，而不是场外事件上。'),
  ] });
  shot({ id: 'p07_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'What Went Wrong, and the Rule It Teaches', zh: '错在哪里，教会了什么' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.36, 0.3, 0.34], size: 25, cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Didn\'t insist on repaying the $25,000', '没有坚持还那两万五千美元'], ['Gratitude; felt obliged', '感激，觉得欠人情'], ['Repay favours at once; stay free', '人情立刻还清，保持自由']],
      [['Let Williamson cover his C&A short and put him long', '任由威廉森平掉他的空仓并替他做多'], ['Trusted an insider over his own reading', '信内部人胜过信自己的判断'], ['Back your own judgment, always', '永远坚持自己的判断']],
      [['Kept forcing trades in the dead market of 1911–14', '1911–14年在死寂市场里硬做'], ['Asked the market for what it didn\'t have', '向市场索取它没有的东西'], ['No opportunity, no trade', '没有机会就不交易']],
      [['Traded while hounded by debts', '被债务纠缠时仍在交易'], ['Worry clouded his thinking', '焦虑蒙蔽了思考'], ['Remove the burden before trading', '先卸下负担再交易']],
      [['Bought 15,000 bales on peace hopes', '凭和平期望买入1.5万包棉花'], ['Bet on an outside event', '押注场外事件'], ['Trade market conditions, not news hopes', '交易市场状况，不赌消息']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 2] },
  ], lines: [
    L('host', 'Two mistakes came from decency: not repaying the favour, and then obeying it against his own reading of the tape.', '有两个错误源于厚道：没有还清人情，之后又为了人情违背自己对盘面的判断。'),
    L('host', 'Two came from pressure: forcing trades in a dead market, and trading while debts filled his mind.', '有两个错误源于压力：在死寂的市场里硬做，以及在满脑子债务时交易。'),
    L('host', 'And one came from hope: betting on peace instead of on the market itself.', '还有一个源于希望：押注和平，而不是押注市场本身。'),
  ] });
};
