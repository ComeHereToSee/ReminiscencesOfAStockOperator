// Episode 3 — Chapters V–VI: Sit Tight
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const T = (x, y, en, zh, o = {}) => `<g transform="translate(${x} ${y})"><text text-anchor="middle" font-family="${o.cond ? 'Oswald' : 'Bangers'}" font-weight="700" font-size="${o.size || 70}" fill="${o.fill || '#fff'}" stroke="#16130f" stroke-width="7" paint-order="stroke">${en}</text>${zh ? `<text y="${(o.size || 70) * 0.95}" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="${(o.size || 70) * 0.6}" fill="${o.zfill || '#f6d77a'}" stroke="#16130f" stroke-width="6" paint-order="stroke">${zh}</text>` : ''}</g>`;
  const GREEN = '#2c4a3a';

  episode(3, 'Sit Tight', '坐得住', { en: 'Chapters V – VI', zh: '原著第五至六章' }, GREEN, [
    L('host', 'Episode three. Sit tight.', '第三集：坐得住。'),
    L('host', 'Being right is not enough. The money comes from staying right, and from trusting your own reading.', '光看对还不够。钱来自于一直坐在正确的一边，并相信自己的判断。'),
  ]);

  // ---------------- Chapter V ----------------
  shot({ id: 'p03_charts', kind: 'info', tag: { en: 'CHARTS & THEIR LIMITS', zh: '图表及其局限' }, title: { en: 'Behaviour, Charts — and Precedents That Break', zh: '股性、图表——以及会失效的先例' }, els: [
    { type: 'quote', x: 70, y: 255, w: 1780, size: 40, bottom: 480, en: 'If a stock doesn\'t act right don\'t touch it.', zh: '如果一只股票表现不对劲，就别碰它。', src: 'Ch. V' },
    { type: 'cards', x: 70, y: 497, w: 1780, ch: 185, cols: 3, max: 26, items: [
      { at: 1, en: 'The Frenchman: his curves "explained" Keene\'s Atchison preferred win and Southern Pacific miss. Keene: right, but too slow.', zh: '法国人：他的曲线"解释"了基恩在艾奇逊优先股上的成功和在南太平洋上的失败。基恩：对，但太慢。' },
      { at: 2, en: 'One office kept daily charts to check whether a tip "deserved" a rise: a tipster in another form.', zh: '某营业厅保存每日走势图，用来核对一条消息"配不配"上涨：换了个形式的荐股人。' },
      { at: 3, en: 'A mathematician, ex-NYSE partner, won for years with charts. The World War broke the precedents: millions lost.', zh: '一位数学家、前交易所合伙人，靠图表赢了多年。一战打破了所有先例：他和追随者亏了数百万。', color: '#f3c6c0' },
    ] },
    { type: 'box', at: 4, x: 70, y: 703, w: 1780, h: 105, color: '#cfe3c4', anchor: 'middle', size: 30, en: 'Patterns can fail. Conditions decide: bullish conditions make a bull market, even in a war.', zh: '形态会失效。决定一切的是基本状况：状况看涨，即使打仗也是牛市。' },
  ], lines: [
    L('larry', 'Tape reading is more than arithmetic. A stock has a behaviour, and my rule is simple: "If a stock doesn\'t act right don\'t touch it."', '看盘不只是算术。股票有它的"股性"，我的规则很简单："如果一只股票表现不对劲，就别碰它。"'),
    L('host', 'Charting is old too. A Frenchman claimed his curves explained Keene\'s success in Atchison preferred and his failure in Southern Pacific. Keene called the chart right, but too slow.', '图表分析也由来已久。一个法国人声称他的曲线能解释基恩在艾奇逊优先股上的成功和在南太平洋上的失败。基恩说图表是对的，但太慢了。'),
    L('host', 'Another office kept daily charts so customers could check whether a tip deserved a rise. The chart became just another tipster.', '另一家营业厅保存每日走势图，让客户核对某条消息是否"配得上"上涨。图表成了另一种荐股人。'),
    L('host', 'A trained mathematician, once a Stock Exchange partner, won with charts for years. Then the World War broke the precedents, and he and his following lost millions.', '一位受过训练的数学家、前交易所合伙人，靠图表赢了多年。后来一战打破了所有先例，他和追随者亏掉了数百万。'),
    L('host', 'Past patterns can fail. What does not fail: bullish conditions make a bull market, and bearish conditions a bear market.', '过去的形态可能失效。不会失效的是：看涨的基本状况造就牛市，看跌的基本状况造就熊市。'),
  ] });

  shot({ id: 'p03_spec', kind: 'info', tag: { en: 'KEY IDEA', zh: '核心概念' }, title: { en: 'Third Try in New York: Gambling vs. Speculating', zh: '第三次闯纽约：赌博 vs. 投机' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, widths: [0.22, 0.36, 0.42], headColor: GREEN, cols: [['', ''], ['Gambling', '赌博'], ['Speculating', '投机']], rows: [
      [['Timing', '时机'], ['Wait for the sure thing, grab a point or two', '等十拿九稳时再抢一两个点'], ['Start earlier: anticipate the move', '更早动手：预判行情']],
      [['You study', '研究什么'], ['The last hour of tape', '最近一小时的纸带'], ['Trade reports, railroad earnings, financial and commercial statistics', '贸易报告、铁路盈利、金融与商业统计']],
      [['You bet on', '押注对象'], ['The next fluctuation', '下一个波动'], ['Advances and declines that conditions make inevitable', '由基本状况决定、必然到来的涨跌']],
      [['Proof', '如何验证'], ['Hope', '靠希望'], ['Test the idea with your own money', '用自己的钱检验想法']],
    ], reveal: true, rowAt: [1, 2, 3, 4] },
  ], lines: [
    L('larry', 'Back in New York for a third try, I had seven years of tape reading behind me. I was winning on balance, and spending it as fast.', '第三次回到纽约，我已有七年看盘经验。总体上我在赢钱，也花得一样快。'),
    L('larry', 'My first change was about time. I couldn\'t wait for a sure thing and take a point. I had to start earlier and anticipate the move.', '我的第一个改变是时间。我不能再等十拿九稳时抢一个点，而必须更早动手，预判行情。'),
    L('larry', 'So I looked further back than the last hour: trade reports, railroad earnings, financial and commercial statistics.', '于是我把目光放到最近一小时之外：贸易报告、铁路盈利、金融与商业统计。'),
    L('host', 'That is the line between gambling and speculating. Gambling bets on fluctuations. Speculating anticipates the moves that conditions make inevitable.', '这就是赌博与投机的分界。赌博押注波动；投机预判由基本状况决定的必然行情。'),
    L('host', 'And every idea got tested the only way he trusted: with his own money.', '每个想法，他都用他唯一信任的方式检验：用自己的钱。'),
  ] });

  shot({ id: 'p03_early', kind: 'info', tag: { en: 'MISTAKE', zh: '错误' }, title: { en: 'Four Points in a Bull Market', zh: '牛市里只赚四个点' }, els: [
    { type: 'line', x: 70, y: 250, w: 1120, h: 565, xr: [0, 10], yr: [-5, 16], yTicks: [0, 4, 14], yLabel: ['Points above his buy', '高于买入价的点数'], illustrative: true,
      hlines: [{ v: 4, at: 1, label: ['Sold: +4', '卖出：+4'], color: '#d9a441', x1: 10, lx: 10 }],
      series: [{ pts: [[0, 0], [1, 1.5], [2, 2.5], [3, 4], [4, 3.6], [5, 5.5], [6, 7.5], [7, 8.5], [8, 10.5], [9, 12], [10, 14]], color: '#2f7d3a', reveal: [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2] }],
      notes: [
        { x: 0, y: 0, en: 'Bullish from the start: buys', zh: '牛市一开始就看涨：买入', dx: 30, dy: 30, w: 260 },
        { x: 4, y: 3.6, at: 1, en: 'Waits for a reaction… that never comes', zh: '等回调……回调始终没来', dx: 20, dy: 40, w: 280 },
        { x: 10, y: 14, at: 2, en: '+10 more points without him', zh: '又涨了10点，与他无关', dx: -330, dy: 0, w: 260 },
      ] },
    { type: 'bars', at: 3, x: 1230, y: 250, w: 620, h: 565, max: 22000, bars: [
      { v: 2000, vl: '$2,000', en: 'What he made', zh: '实际赚到', color: '#d9a441' },
      { v: 20000, vl: '$20,000', en: 'What he should have made', zh: '本该赚到', color: '#2f7d3a' },
    ] },
  ], lines: [
    L('larry', 'Even so, I wasn\'t making what my rightness deserved. I was bullish from the very start of a bull market, and the advance came as I foresaw.', '即便如此，我赚的钱配不上我的判断。牛市一开始我就看涨，行情也如我所料地来了。'),
    L('larry', 'But I listened to the elder statesmen: take profits, buy back on reactions. I took four points and waited for a reaction that never came.', '但我听了老前辈的话：获利了结，回调再买回。我拿了四个点，然后等一个始终没来的回调。'),
    L('larry', 'The stock went ten points higher without me. You never grow poor taking profits. But you don\'t grow rich on four points in a bull market.', '股票在没有我的情况下又涨了十点。获利了结永远不会让你变穷，但在牛市里只拿四个点也不会让你变富。'),
    L('host', 'His own tally: where he should have made twenty thousand dollars, he made two thousand.', '他自己算过：本该赚两万美元的地方，他只赚了两千。'),
  ] });

  shot({ id: 'p03_suckers', kind: 'info', tag: { en: 'KNOW THE CROWD', zh: '认识众生相' }, title: { en: 'Three Grades of Sucker', zh: '三个等级的"傻瓜"' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, size: 25, widths: [0.2, 0.55, 0.25], headColor: GREEN, cols: [['Grade', '等级'], ['How he plays', '怎么玩'], ['Lasts', '能撑多久']], rows: [
      [['The tyro', '新手'], ['Knows nothing, and everybody, including himself, knows it', '一无所知，所有人（包括他自己）都知道'], ['One season: 3–30 weeks', '一季：3–30周']],
      [['The semi-sucker', '半吊子'], ['Studies remarks about the market, not the market. Quotes every rule. Loves buying on declines', '研究别人对市场的评论，而非市场本身。满口规则。最爱逢低买入'], ['≈ 3½ years', '约3年半']],
      [['The plain sucker', '纯傻瓜'], ['Buys blindly, hopes blindly; makes most of the money in a big bull market', '盲目希望、盲目买入；在大牛市里赚得最多'], ['Until one healthy reaction', '直到一次健康的回调']],
    ], reveal: true, rowAt: [0, 1, 3] },
    { type: 'box', at: 4, x: 70, y: 700, w: 1780, h: 105, color: '#f3c6c0', anchor: 'middle', size: 30, en: 'They know every "don\'t" — except the main one: Don\'t be a sucker!', zh: '他们知道所有的"别"——唯独不知道最重要的那条：别当傻瓜！' },
  ], lines: [
    L('host', 'Around then he noticed that suckers come in grades. The tyro knows nothing, and everyone knows it. He lasts a single season: three to thirty weeks.', '那时他发现，"傻瓜"也分等级。新手一无所知，人人都看得出来。他只能撑一季：三到三十周。'),
    L('host', 'The semi-sucker studies remarks about the market, not the market itself. He quotes every rule, and lasts about three and a half years.', '半吊子研究的是别人对市场的评论，而不是市场本身。他满口规则，平均能撑三年半。'),
    L('host', 'His pride is buying on declines. He measures a bargain by how many points it has fallen from the top.', '他最得意的是逢低买入，用离高点跌了多少点来衡量是否便宜。'),
    L('host', 'The plain sucker buys blindly in a big bull market and makes most of the money, until one healthy reaction takes it away at a stroke.', '纯傻瓜在大牛市里盲目买入，反而赚得最多，直到一次健康的回调一下子把钱全拿走。'),
    L('larry', 'And the careful semi-sucker playing by other people\'s wisdom? That was me. They know every don\'t, except the main one: don\'t be a sucker.', '那个小心翼翼、照搬别人智慧的半吊子？就是我。他们知道所有的"别"，唯独不知道最重要的一条：别当傻瓜。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p03_partridge', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [
        ch('partridge', a, 0.3, 1.1, { expr: 'smile', exprAt: { 4: 'worry' } }),
        ch('agent', a, 0.74, 1.0, { at: 3, flip: true, expr: 'determined', exprAt: { 4: 'angry' }, hat: 'none', hair: '#6a3e22', mus: 'thin', suit: '#3e4a5a' }),
      ] }),
      P(b, { at: 2, bg: 'dark', bgo: { color: '#2b3340' }, props: [{ t: 'svg', svg: T(355, 100, 'JOHN FANNING', '约翰·范宁', { size: 54 }) + T(355, 230, 'TOOK 3 PTS · THEN +24 IN 3 DAYS', '拿了3点 · 随后3天涨24点', { size: 40, cond: true }) }] }),
      P(c, { at: 3, bg: 'dark', props: [{ t: 'svg', svg: T(355, 120, 'CLIMAX MOTORS', '克莱麦克斯汽车', { size: 66 }) + T(355, 260, '500 SH · +7 PTS IN 10 DAYS', '500股 · 10天涨7点', { size: 42, cond: true }) }] }),
    ], caps: [{ until: 2, x: 70, y: 70, w: 520, en: 'Fullerton\'s office. Old Partridge, "Turkey".', zh: '富勒顿营业厅。老帕特里奇，绰号"火鸡"。' }],
    bubbles: [
      { at: 1, until: 3, x: 90, y: 200, w: 420, en: 'You know, it\'s a bull market!', zh: '你知道的，这是牛市啊！', tx: 330, ty: 330 },
      { at: 3, until: 3, x: 560, y: 190, w: 520, en: 'Take your profit and get in again on the next dip!', zh: '先把利润落袋，下次回调再买回来！', tx: 820, ty: 330, size: 27, zsize: 23 },
      { at: 4, x: 80, y: 150, w: 560, en: 'If I sold that stock now I\'d lose my position. And then where would I be?', zh: '我要是现在卖了，就会失去我的仓位。那我还剩什么？', tx: 330, ty: 330, size: 27, zsize: 23 },
    ], lines: [
      L('larry', 'Fullerton\'s office had one customer unlike the rest: old Partridge, nicknamed Turkey. He never gave advice or bragged. Ask him what to do, and he had one answer.', '富勒顿营业厅有位与众不同的客户：老帕特里奇，绰号"火鸡"。他从不给建议，也不吹嘘。问他该怎么办，他只有一个回答。'),
      L('partridge', 'You know, it\'s a bull market!', '你知道的，这是牛市啊！'),
      L('larry', 'He listened politely to John Fanning\'s sad tale, yet again: Fanning overheard Keene give an order, took three points, and watched the stock rise twenty-four in three days.', '他又一次礼貌地听约翰·范宁诉苦：范宁偷听到基恩下单，只赚了三个点，随后眼看那只股票三天涨了二十四点。'),
      L('larry', 'Then Elmer Harwood rushed in. He had tipped Partridge into Climax Motors: five hundred shares, up seven points in ten days. Now he urged him to sell and rebuy lower.', '这时埃尔默·哈伍德冲了进来。是他推荐帕特里奇买了克莱麦克斯汽车：五百股，十天涨了七点。现在他催他卖掉，等回调再买回。'),
      L('partridge', 'My dear boy, if I sold that stock now I\'d lose my position. And then where would I be?', '我亲爱的孩子，我要是现在卖了，就会失去我的仓位。那我还剩什么？'),
    ] });
  }

  shot({ id: 'p03_position', kind: 'info', tag: { en: 'THE BIG LESSON', zh: '最重要的一课' }, title: { en: 'What "It\'s a Bull Market" Really Meant', zh: '"这是牛市"的真正含义' }, els: [
    { type: 'line', x: 70, y: 250, w: 1780, h: 565, xr: [0, 20], yr: [-25, 100], yTicks: [], yLabel: ['Price', '价格'], illustrative: true,
      bands: [{ x0: 0, x1: 1.2, y0: -25, y1: 100, label: ['First ⅛', '最初⅛'], at: 3, color: '#b8322a', op: 0.15 }, { x0: 18.4, x1: 20, y0: -25, y1: 100, label: ['Last ⅛', '最后⅛'], at: 3, color: '#b8322a', op: 0.15 }],
      series: [{ pts: [[0, 10], [2, 22], [3, 18], [5, 33], [6, 28], [8, 45], [9, 40], [11, 57], [12, 52], [14, 68], [15, 63], [17, 80], [18, 84], [19, 78], [20, 66]], color: '#2f7d3a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }],
      notes: [
        { x: 3, y: 18, at: 1, en: 'Sell for the "reaction"? You may never get back in', zh: '为"回调"卖出？可能再也上不了车', dx: 30, dy: 40, w: 330 },
        { x: 11, y: 57, at: 2, en: 'Hold the main movement', zh: '持有主要趋势', dx: 40, dy: 60, w: 240 },
        { x: 18, y: 84, at: 2, en: 'Near the end: sell everything, for keeps', zh: '接近尾声：全部卖出，彻底离场', dx: -420, dy: -20, w: 300 },
      ] },
  ], lines: [
    L('larry', 'Years later I understood him. "It\'s a bull market" meant the big money isn\'t in the fluctuations. It\'s in the main movement.', '多年后我才懂他。"这是牛市"的意思是：大钱不在波动里，而在主要趋势里。'),
    L('host', 'Nobody can catch every fluctuation. Step out for a reaction, and you may never get back in. That is what losing your position means.', '没人能抓住每一个波动。为了等回调而下车，你可能再也上不了车。这就是"失去仓位"的意思。'),
    L('host', 'So in a bull market, buy and hold until you believe it is near its end. Then sell everything, for keeps, and wait for the turn.', '所以牛市里要买入并持有，直到你认为它接近尾声。然后全部卖出，彻底离场，等待转折。'),
    L('host', 'And give up the first eighth and the last. He calls them the most expensive eighths in the world.', '放弃最初和最后的那八分之一点。他说那是世界上最昂贵的八分之一。'),
  ] });

  shot({ id: 'p03_sit', kind: 'info', tag: { en: 'THE BIG LESSON', zh: '最重要的一课' }, title: { en: 'It Was Always My Sitting', zh: '靠的永远是"坐得住"' }, els: [
    { type: 'quote', x: 70, y: 255, w: 1780, size: 42, bottom: 500, en: 'It never was my thinking that made the big money for me. It always was my sitting.', zh: '让我赚大钱的从来不是我的思考，而是我的坐等。', src: 'Ch. V' },
    { type: 'box', at: 2, x: 70, y: 515, w: 1000, h: 295, color: '#fbf3df', size: 30, en: 'Short 100,000 shares. He saw a wholesome rally coming that would cost $1,000,000 of paper profit, half of it. He stood pat: covering to resell higher risked losing his position.', zh: '空头10万股。他预见到一次健康的反弹，会抹掉100万美元账面利润，也就是一半。他按兵不动：回补后再高位卖出，可能会失去仓位。' },
    { type: 'cards', x: 1110, y: 515, w: 740, ch: 135, cols: 1, max: 28, items: [
      { at: 1, en: 'Right is common. Right AND sitting tight is rare.', zh: '看对很常见。看对又坐得住，很少见。' },
      { at: 4, en: 'First trades seldom lost → start big, before others spoil your judgment.', zh: '第一笔很少亏→出手就大，免得判断被别人干扰。' },
    ] },
  ], lines: [
    L('larry', '"It never was my thinking that made the big money for me. It always was my sitting." My sitting tight!', '"让我赚大钱的从来不是我的思考，而是我的坐等。"是坐得住！'),
    L('host', 'Being right is no trick: every bull market has early bulls. Men who are right and sit tight are rare, because the market takes its time.', '看对并不难：每个牛市都有早早看多的人。既看对又坐得住的人却很少，因为市场总是不慌不忙。'),
    L('larry', 'Once I was short a hundred thousand shares and saw a rally coming. I knew it would cost a million dollars of paper profit. I didn\'t cover.', '有一次我空了十万股，预见到一次反弹会来。我知道它会让我损失一百万美元的账面利润。我没有回补。'),
    L('larry', 'Half my paper profit went. But if I had covered to sell again higher, I might have lost my position, and the big killing with it.', '账面利润没了一半。但如果我回补、想在更高处再卖，就可能失去仓位，连同那笔大钱一起失去。'),
    L('host', 'He also noticed his first trades seldom lost. So he decided to start big, trusting his judgment before others could spoil it.', '他还发现自己的第一笔交易很少亏损。于是他决定一开始就下大注，在别人干扰之前相信自己的判断。'),
  ] });

  shot({ id: 'p03_donts', kind: 'info', tag: { en: 'HOW HE LEARNED', zh: '他如何学习' }, title: { en: 'Every Mistake Becomes a "Don\'t!"', zh: '每个错误都变成一条"别！"' }, els: [
    { type: 'flow', x: 70, y: 280, w: 1780, bh: 200, dir: 'h', nodes: [
      { num: 1, en: 'Make a mistake', zh: '犯错', at: 0 },
      { num: 2, en: 'Realize it (takes time)', zh: '意识到（需要时间）', at: 0 },
      { num: 3, en: 'Pin down exactly why (more time)', zh: '准确找出原因（更多时间）', at: 0 },
      { num: 4, en: 'Add a brand-new "Don\'t!"', zh: '新增一条"别！"', at: 2, color: '#cfe3c4' },
    ] },
    { type: 'box', at: 1, x: 70, y: 560, w: 1780, h: 150, color: '#f3c6c0', anchor: 'middle', size: 34, en: 'Broke three times in less than two years.', zh: '不到两年，破产三次。' },
  ], lines: [
    L('larry', 'I learned slowly, because time passes between making a mistake and realizing it, and more before you pin it down exactly.', '我学得很慢，因为从犯错到意识到错误需要时间，要准确找出原因还需要更多时间。'),
    L('larry', 'I had been broke three times in less than two years. Being broke is a very efficient teacher.', '我不到两年破产了三次。破产是非常高效的老师。'),
    L('larry', 'Each time I found the why of a loss, I added a brand-new "Don\'t!" to my list of assets.', '每当我找到一次亏损的原因，就在我的资产清单上新添一条"别！"。'),
  ] });

  // ---------------- Chapter VI ----------------
  {
    const [a, b] = HALF;
    shot({ id: 'p03_ac', kind: 'comic', panels: [
      P(a, { bg: 'boardwalk', chars: [ch('friend', a, 0.28, 0.95, { expr: 'smile', exprAt: { 2: 'shock', 3: 'shock', 4: 'worry' } }), ch('larry', a, 0.72, 0.95, { flip: true, expr: 'think', exprAt: { 2: 'determined', 3: 'determined', 4: 'determined' }, hat: 'boater', hatColor: '#e0c27a' })] }),
      P(b, { at: 3, bg: 'dark', bgo: { color: '#2b3340' }, props: [{ t: 'svg', svg: T(452, 150, 'SELL U.P.', '卖空联合太平洋', { size: 96 }) + T(452, 330, '1,000 + 1,000 + 1,000 = 3,000', '第一天：3,000股', { size: 56, cond: true }) }, { t: 'svg', at: 4, svg: T(452, 520, '+2,000 = 5,000 · ALL MY MARGIN', '第二天：共5,000股·保证金用尽', { size: 52, cond: true, fill: '#f6d77a', zfill: '#fff' }) }] }),
    ], caps: [{ until: 1, x: 70, y: 70, w: 520, en: 'Spring 1906. Atlantic City.', zh: '1906年春，大西洋城。' }],
    bubbles: [{ at: 2, x: 90, y: 170, w: 400, en: 'What did you hear? Then why in blazes are you selling?', zh: '你听到什么了？那你到底为什么要卖？', tx: 250, ty: 330, size: 27, zsize: 23 }],
    lines: [
      L('larry', 'Spring 1906. I was on vacation in Atlantic City, out of stocks. A friend and I dropped into the Harding Brothers branch on the Boardwalk.', '1906年春，我在大西洋城度假，手上没有股票。我和朋友顺路走进哈丁兄弟公司在木板道上的分行。'),
      L('larry', 'The market was strong and he was bullish. I looked at Union Pacific and felt I ought to sell it. I could not find a single reason.', '市场强劲，他也看多。我看着联合太平洋，觉得应该卖掉它。可我找不到任何理由。'),
      L('friend', 'What did you hear? Then why in blazes are you selling?', '你听到什么了？那你到底为什么要卖？'),
      L('larry', 'I sold a thousand at the market, then a second thousand, then a third. I walked out short three thousand in a rising market, not worried a bit.', '我按市价卖了一千股，又一千股，再一千股。我在上涨的市场里空着三千股走了出来，一点也不担心。'),
      L('larry', 'Next afternoon UP stopped climbing and slipped below my average. I sold two thousand more: five thousand, all my margin allowed. I went back to New York that very night.', '第二天下午，联合太平洋停止上涨，跌破了我的均价。我又卖了两千股：共五千股，保证金用尽。当晚我就回了纽约。'),
    ] });
  }

  {
    const [a, b] = HALF;
    shot({ id: 'p03_quake', kind: 'comic', panels: [
      P(a, { bg: 'ruins' }),
      P(b, { bg: 'office', bgo: { board: [['UNION PAC'], ['−2 … BACK UP']], hl: [1, 0] }, chars: [ch('friend', b, 0.27, 0.85, { expr: 'smile', hy: 0.5 }), ch('larry', b, 0.73, 0.85, { flip: true, expr: 'determined', hy: 0.5 })] }),
    ], caps: [{ x: 70, y: 70, w: 560, en: '1906: the San Francisco earthquake and fire.', zh: '1906年：旧金山地震与大火。' }],
    bubbles: [
      { at: 2, until: 2, x: 1010, y: 90, w: 380, en: 'The tape doesn\'t lie, does it?', zh: '纸带不会说谎，对吧？', tx: 1220, ty: 330 },
      { at: 3, until: 3, x: 1420, y: 90, w: 430, en: 'It doesn\'t always tell the truth on the instant.', zh: '它并不总是当场说真话。', tx: 1620, ty: 330 },
    ],
    sfx: [{ at: 4, x: 1430, y: 600, t: '+$250,000', zh: '几天内获利', size: 110, color: '#d9a441', font: 'cond' }], lines: [
      L('larry', 'The next day came news of the San Francisco earthquake. Yet the market opened down only a couple of points, and before the close prices came back.', '第二天传来旧金山地震的消息。可市场只低开了几个点，收盘前价格就收复了。'),
      L('host', 'Sentiment filters news. When the Street is bullish it doesn\'t want to see a disaster, so at first it doesn\'t.', '情绪会过滤新闻。当华尔街看多时，它不愿看见灾难，于是起初就真的视而不见。'),
      L('friend', 'The tape doesn\'t lie, does it?', '纸带不会说谎，对吧？'),
      L('larry', 'It doesn\'t always tell the truth on the instant. The damage was enormous, and Union Pacific would be among the worst sufferers. I would not cover.', '它并不总是当场说真话。损失极其惨重，联合太平洋会是受害最深的之一。我不回补。'),
      L('larry', 'Fuller reports came and prices slid. I doubled with five thousand more, then ten thousand more, and kept selling. Then I cleaned up: a quarter of a million.', '更完整的报道传来，价格开始下滑。我加倍卖出五千股，接着再卖一万股，还在继续卖。然后我全部了结：二十五万美元。'),
    ] });
  }

  shot({ id: 'p03_pyr', kind: 'info', tag: { en: 'ANALYSIS', zh: '分析' }, title: { en: 'Pyramiding on Confirmation', zh: '确认之后才加码' }, els: [
    { type: 'bars', x: 70, y: 250, w: 1150, h: 565, max: 22000, vsize: 30, bars: [
      { v: 3000, vl: '3,000', en: 'Day 1: hunch', zh: '第1天：预感', color: '#2f5d8a' },
      { v: 5000, vl: '5,000', en: 'Day 2: below avg', zh: '第2天：跌破均价', color: '#2f5d8a' },
      { v: 5000, vl: '5,000', en: 'Quake day: hold', zh: '地震日：不加', color: '#8a8a8a', at: 1 },
      { v: 10000, vl: '10,000', en: 'Day 4: slide', zh: '第4天：下滑', color: '#b8322a', at: 2 },
      { v: 20000, vl: '20,000+', en: 'Day 5: break', zh: '第5天：大跌', color: '#b8322a', at: 2 },
    ] },
    { type: 'text', x: 100, y: 268, w: 600, size: 24, zsize: 21, en: 'Total short, shares', zh: '累计空头股数' },
    { type: 'cards', x: 1260, y: 250, w: 590, ch: 175, cols: 1, max: 27, items: [
      { at: 3, en: 'Small while unproven; bigger only as the market confirms.', zh: '未经证明时小仓；市场确认后才加大。' },
      { at: 3, en: 'News is filtered through sentiment.', zh: '新闻要经过情绪的过滤。' },
      { at: 4, en: 'A hunch may be many small signals, adding up.', zh: '预感可能是许多细小信号累加的结果。' },
    ] },
  ], lines: [
    L('host', 'Look at how the short was built. Three thousand on a hunch, then two thousand more only after the stock broke below his average.', '看看这笔空单是怎么建立的。凭预感空三千股，股价跌破均价后才再加两千股。'),
    L('host', 'On the earthquake day itself he added nothing. The market had not confirmed him yet.', '地震当天他一股没加。市场还没有确认他是对的。'),
    L('host', 'When prices began to slide, he doubled, then doubled again. The book gives no final total: at least twenty thousand shares.', '价格开始下滑后，他加倍，再加倍。书中没有给出最终总数：至少两万股。'),
    L('host', 'Small while unproven, big once proven. That is pyramiding on confirmation.', '未经证明时小，得到证明后大。这就是"确认后加码"。'),
    L('larry', 'Was it a hunch? Perhaps many little things, each insignificant alone, collectively powerful. I only know I followed it.', '那是预感吗？也许是许多小事，单独看微不足道，合起来却很有力量。我只知道我听从了它。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p03_sara', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { board: [['UNION PAC'], ['160 · 161 · 162']], hl: [1, 0] }, chars: [ch('larry', a, 0.45, 1.1, { expr: 'smile', pose: 'phone', exprAt: { 2: 'worry', 3: 'worry', 4: 'shock', 5: 'sad' } })] }),
      P(b, { at: 1, bg: 'study', bgo: { ticker: false }, chars: [ch('harding', b, 0.45, 0.8, { expr: 'angry', pose: 'phone', hy: 0.5 })] }),
      P(c, { at: 4, bg: 'burst', bgo: { color: '#2f7d3a' }, props: [{ t: 'svg', at: 5, svg: T(355, 280, 'A SPECIALIST: +$350,000', '某专家意外赚了35万', { size: 42, cond: true }) }] }),
    ], caps: [{ x: 70, y: 70, w: 460, en: 'Summer 1906. Saratoga Springs.', zh: '1906年夏，萨拉托加温泉。' }],
    bubbles: [{ at: 2, until: 3, x: 1190, y: 60, w: 340, en: 'It isn\'t margin. It\'s being a plain sucker!', zh: '不是保证金的问题，是你当了大傻瓜！', tx: 1450, ty: 300, size: 25, zsize: 21 }],
    sfx: [{ at: 4, x: 1525, y: 530, t: '10% DIVIDEND!', zh: '派发10%股息！', size: 72, color: '#fff', font: 'cond' }], lines: [
      L('larry', 'That summer at Saratoga, Union Pacific acted as if someone big were accumulating it. I began buying at about 160, five hundred shares at a time.', '那年夏天在萨拉托加，联合太平洋的走势像是有大户在吸筹。我从160左右开始买，每次五百股。'),
      L('larry', 'The more I bought, the stronger it got, without any spurt. Then Ed Harding telephoned from New York.', '我买得越多，它就越强，而且没有急涨。这时艾德·哈丁从纽约打来电话。'),
      L('harding', 'It isn\'t a case of margin, but of being a plain sucker! The insiders are feeding it out to you.', '这不是保证金的问题，而是你当了大傻瓜！内部人正在把股票倒给你。'),
      L('larry', 'Ed was clever, well informed and a real friend. I let him shake me. I sold out, then went short four thousand, mostly around 162.', '艾德聪明、消息灵通，又是真朋友。我被他动摇了。我卖光多单，又做空四千股，大部分在162附近。'),
      L('larry', 'Next day the directors declared a ten percent dividend. Union Pacific made a new high. My cover order was filled as high as 172 and 174.', '第二天，董事会宣布派发10%股息。联合太平洋创下新高。我的回补单最高在172和174成交。'),
      L('host', 'Room traders made fortunes in an hour. One dull-witted specialist made three hundred fifty thousand by a mistake, sold his seat, and became a gentleman farmer.', '场内交易员一小时内发了财。一个笨拙的专家因一次失误赚了三十五万美元，随即卖掉席位，当起了乡绅。'),
    ] });
  }

  shot({ id: 'p03_cost', kind: 'info', tag: { en: 'THE PRICE OF DOUBT', zh: '动摇的代价' }, title: { en: 'Saratoga: Trust Your Own Reading', zh: '萨拉托加：相信自己的判断' }, els: [
    { type: 'line', x: 70, y: 250, w: 1140, h: 565, xr: [0, 10], yr: [154, 178], yTicks: [155, 160, 165, 170, 175], yLabel: ['Union Pacific', '联合太平洋'], illustrative: true,
      hlines: [{ v: 162, at: 0, color: '#b8322a', x0: 3.6, x1: 10 }],
      bands: [{ y0: 172, y1: 174, x0: 5.4, x1: 7.2, at: 1, color: '#b8322a', op: 0.25 }],
      series: [{ pts: [[0, 159.5], [1, 160], [2, 160.8], [3, 161.5], [3.6, 162], [4.6, 163], [5.4, 165], [6.2, 172], [7.2, 174], [8.4, 175.5], [10, 177]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2] }],
      notes: [
        { x: 1, y: 160, en: 'His read: buys 500-lots ≈160', zh: '自己的判断：约160分批买', dx: 20, dy: 40, w: 290 },
        { x: 3.6, y: 162, en: 'Harding\'s call: sells, shorts 4,000 ≈162', zh: '哈丁来电：卖出并在约162做空4,000股', dx: -290, dy: -150, w: 300 },
        { x: 5.4, y: 165, at: 1, en: 'Dividend: cover order ≈165', zh: '股息公布：约165下回补单', dx: 50, dy: -30, w: 280 },
        { x: 7.2, y: 174, at: 1, en: 'Filled up to 172–174: −$40,000', zh: '最高172–174成交：亏4万', dx: -390, dy: -40, w: 290 },
        { x: 10, y: 177, at: 2, en: 'Long 4,000 overnight', zh: '做多4,000股持仓一夜', dx: -300, dy: 30, w: 250 },
      ] },
    { type: 'quote', at: 3, x: 1250, y: 250, w: 600, size: 32, bottom: 640, en: 'A low price for a man to pay for not having the courage of his own convictions!', zh: '对一个没有勇气坚持自己信念的人来说，这代价算便宜了！', src: 'Ch. VI' },
    { type: 'box', at: 4, x: 1250, y: 655, w: 600, h: 160, color: '#cfe3c4', size: 26, en: 'From then on: basic conditions, not individual stocks.', zh: '从此以后：看基本大势，而不是个股。' },
  ], lines: [
    L('host', 'Trace the damage. He bought from about 160 on his own reading, then went short four thousand near 162 on a friend\'s suspicion.', '复盘一下损失。他凭自己的判断从160左右买入，又因朋友的怀疑在162附近做空四千股。'),
    L('host', 'He sent the cover order with the stock near 165, a three-point loss. Fills came as high as 172 and 174. Cost: forty thousand dollars.', '他在股价约165时下回补单，亏三个点。成交价最高到172和174。代价：四万美元。'),
    L('host', 'Then he followed the tape: bought four thousand, held overnight, and sold. He made back the forty thousand, plus about fifteen thousand.', '随后他顺着纸带操作：买入四千股，持仓一夜后卖出。不仅赚回四万，还多赚了约一万五千。'),
    L('larry', '"A low price for a man to pay for not having the courage of his own convictions!" A cheap lesson.', '"对一个没有勇气坚持自己信念的人来说，这代价算便宜了！"这是很便宜的一课。'),
    L('larry', 'It completed my education. I gained confidence in myself. From then on I thought of basic conditions, not individual stocks.', '它完成了我的教育。我有了自信。从那以后，我考虑的是基本大势，而不是个股。'),
  ] });

  shot({ id: 'p03_take', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode Three Teaches', zh: '第三集的教训' }, els: [
    { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, items: [
      { en: 'If a stock doesn\'t act right, don\'t touch it.', zh: '股票表现不对劲，就别碰它。' },
      { en: 'Speculate on conditions; don\'t gamble on fluctuations.', zh: '依据基本状况投机，不要赌波动。' },
      { en: 'The big money is in the big swing. Sit tight.', zh: '大钱在大波段里。坐得住。', at: 1 },
      { en: 'Don\'t trade away your position for a few points.', zh: '别为几个点丢掉仓位。', at: 1 },
      { en: 'Add only when the market proves you right.', zh: '只在市场证明你正确时加仓。', at: 2 },
      { en: 'Trust your own reading over a friend\'s suspicion.', zh: '相信自己的判断，而不是朋友的怀疑。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Episode three in brief. Read behaviour and conditions, not just patterns or ticks.', '第三集小结：看股性和基本状况，而不只是形态或报价。'),
    L('host', 'Once you\'re right, sit tight. Keep your position through healthy reactions.', '一旦判断正确，就坐得住，在健康的回调中守住仓位。'),
    L('host', 'Build in steps as the market confirms you, and never let someone else\'s doubts replace your own evidence.', '随市场确认逐步加仓，永远不要让别人的怀疑取代你自己的证据。'),
  ] });

  shot({ id: 'p03_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistake → Why → Rule', zh: '错误 → 原因 → 规则' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, widths: [0.32, 0.34, 0.34], size: 25, headColor: '#7a1f1a', cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Took 4 points in a bull market', '牛市里只拿4个点'], ['Borrowed "caution": wait for a reaction that never came', '借来的"谨慎"：等一个永远不来的回调'], ['Hold until the bull market nears its end', '持有到牛市接近尾声']],
      [['Bought on declines, quoted rules', '逢低买入、照搬规则'], ['Played by others\' intelligence, not his own', '按别人的智慧而非自己的判断操作'], ['Study conditions yourself', '自己研究基本状况']],
      [['Jumped in and out of the swing', '在波段中频繁进出'], ['Nobody catches every fluctuation', '没人能抓住每一个波动'], ['Don\'t lose your position', '不要失去仓位']],
      [['Trusted chart precedents blindly (the mathematician)', '盲信图表先例（那位数学家）'], ['A war broke the precedents', '战争打破了先例'], ['Conditions outrank patterns', '基本状况高于形态']],
      [['Dropped his UP read for Harding\'s warning', '因哈丁警告放弃自己对联合太平洋的判断'], ['Friend was able and kind, so he deferred', '朋友能干又好心，于是他让步了'], ['Act on your own convictions', '按自己的信念行动']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 2] },
  ], lines: [
    L('host', 'The mistakes: grabbing small profits in a big move, and trading on borrowed wisdom.', '错误复盘：在大行情里抢小利润，以及靠借来的智慧交易。'),
    L('host', 'Jumping in and out, and trusting precedents that a world event can break.', '频繁进出，以及迷信会被世界大事打破的先例。'),
    L('host', 'And at Saratoga, setting aside his own reading for a friend\'s suspicion.', '还有在萨拉托加，为了朋友的怀疑而放弃自己的判断。'),
  ] });
};
