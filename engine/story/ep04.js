// Episode 4 — Chapters VII–VIII: Right and Busted
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const T = (x, y, en, zh, o = {}) => `<g transform="translate(${x} ${y})"><text text-anchor="middle" font-family="${o.cond ? 'Oswald' : 'Bangers'}" font-weight="700" font-size="${o.size || 70}" fill="${o.fill || '#fff'}" stroke="#16130f" stroke-width="7" paint-order="stroke">${en}</text>${zh ? `<text y="${(o.size || 70) * 0.95}" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="${(o.size || 70) * 0.6}" fill="${o.zfill || '#f6d77a'}" stroke="#16130f" stroke-width="6" paint-order="stroke">${zh}</text>` : ''}</g>`;
  const RED = '#7a1f1a';
  const TIP = { who: { en: 'THE TIPSTER', zh: '报消息的人' } };
  const DEACON = { hat: 'none', glasses: true, hair: '#d8d4cc', hairStyle: 'gray', beard: 'full', beardColor: '#d8d4cc', mus: 'walrus', musColor: '#d8d4cc', suit: '#2a2a30', tie: '#2a2a2a', tieType: 'bow', age: 2 };

  episode(4, 'Right and Busted', '看对了，却破产了', { en: 'Chapters VII – VIII', zh: '原著第七至八章' }, RED, [
    L('host', 'Episode four. Right, and busted.', '第四集：看对了，却破产了。'),
    L('host', 'A method for building a position, and a costly lesson in timing.', '一套建仓方法，以及一堂代价高昂的时机课。'),
  ]);

  // ---------------- Chapter VII ----------------
  {
    const [a, b] = HALF;
    shot({ id: 'p04_general', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('larry', a, 0.5, 1.05, { expr: 'neutral', exprAt: { 1: 'frown' } })], props: [{ t: 'sign', x: 120, y: 60, w: 660, en: 'Bullish or bearish? I\'ll tell you.', zh: '看多还是看空？我会告诉你。', color: '#2f7d3a' }, { t: 'sign', at: 1, x: 120, y: 175, w: 660, en: 'Which stock? I won\'t.', zh: '买哪只？我不说。', color: '#b8322a' }] }),
      P(b, { at: 2, bg: 'dark', bgo: { color: '#2b3340' }, props: [{ t: 'svg', svg: T(452, 230, 'ONE STOCK', '个股', { size: 80, fill: '#c9c1b0' }) + T(452, 420, '→ THE GENERAL MARKET', '→ 整体市场', { size: 64, cond: true }) }] }),
    ], lines: [
      L('larry', 'I\'ll always tell a man whether I\'m bullish or bearish. I won\'t tell him which stock to buy. In a bear market all stocks go down.', '我总会告诉别人我是看多还是看空，但我不会告诉他买哪只股票。熊市里所有股票都会跌。'),
      L('larry', 'But the average man wants a name. He wants something for nothing. He doesn\'t even want to think.', '可普通人要的是一个股票名字。他想不劳而获，连思考都不愿意。'),
      L('larry', 'I wasn\'t that lazy. But I too found single stocks easier to think about than the general market. I had to change, and I did.', '我没那么懒。但我也觉得思考个股比思考整体市场容易。我必须改变，我也做到了。'),
    ] });
  }

  shot({ id: 'p04_scale', kind: 'info', tag: { en: 'METHOD', zh: '方法' }, title: { en: 'Buy on a Rising Scale — and Read Your Fills', zh: '上涨中逐级买入——并读懂你的成交' }, els: [
    { type: 'line', x: 70, y: 250, w: 1180, h: 565, xr: [0, 10], yr: [106, 117], yTicks: [110, 112, 114, 116], yLabel: ['Price', '价格'], illustrative: true,
      series: [{ pts: [[0, 110], [1.5, 111], [3, 112.5], [4, 114], [5.5, 113], [6.4, 112.25], [7.4, 113.75], [8.3, 114.5], [9.4, 115.5]], color: '#2f5d8a', reveal: [0, 1, 1, 2, 3, 3, 3, 5, 5] }],
      hlines: [{ v: 111.75, at: 2, label: ['Avg cost 111¾', '均价111¾'], color: '#8a5a2b', x1: 6, lx: 5, below: true }],
      notes: [
        { x: 0, y: 110, en: 'Buy 2,000 @110', zh: '110买2,000', dx: 20, dy: 40, w: 180 },
        { x: 1.5, y: 111, at: 1, en: '111: a profit → +2,000', zh: '111有利润→再买2,000', dx: 60, dy: 60, w: 230 },
        { x: 4, y: 114, at: 2, en: '+2,000 → 6,000 sh at 114. Stop & wait', zh: '再买2,000→共6,000股，114。停手等待', dx: -380, dy: -120, w: 320 },
        { x: 6.4, y: 112.25, at: 3, en: 'Reaction to 112¼', zh: '回调至112¼', dx: -60, dy: 50, w: 190 },
        { x: 7.4, y: 113.75, at: 3, en: 'At 113¾: market order 4,000', zh: '113¾：市价买4,000', dx: 40, dy: 60, w: 230 },
        { x: 9.4, y: 115.5, at: 5, en: 'Fills climb to 115½', zh: '成交价升到115½', dx: -380, dy: -80, w: 230 },
      ] },
    { type: 'box', at: 4, x: 1290, y: 250, w: 560, h: 270, color: '#f3c6c0', size: 30, en: 'All 4,000 filled at 113¾? Too easy: supply is plentiful. Something is wrong → test-sell 1,000.', zh: '4,000股全在113¾成交？太容易了，卖盘充足。有问题→卖出1,000股测试。' },
    { type: 'box', at: 5, x: 1290, y: 545, w: 560, h: 270, color: '#cfe3c4', size: 30, en: '2,000 @114, 500 @114½ … last 500 @115½? Buyers are competing. You are right.', zh: '2,000股@114、500股@114½……最后500股@115½？买家在抢筹。你是对的。' },
  ], lines: [
    L('host', 'Now his method. Buying on a rising market is the most comfortable way to buy. The aim is not the cheapest price, but the right time.', '现在讲他的方法。在上涨中买入是最舒服的买法。目标不是最低价，而是对的时机。'),
    L('host', 'Buy two thousand at 110. At 111 it shows a profit, so you are right for now: buy two thousand more. Still rising? A third lot.', '在110买两千股。涨到111有了利润，说明暂时是对的：再买两千股。还在涨？买第三批。'),
    L('host', 'At 114 he holds six thousand, averaging 111¾. He stops, and waits for a reaction, to see how the stock takes care of itself.', '到114时他持有六千股，均价111¾。他停手，等待回调，看这只股票如何自我支撑。'),
    L('host', 'It falls back to 112¼, then rallies. As it gets back to 113¾ he sends a market order for four thousand.', '它回落到112¼后反弹。刚回到113¾时，他下了四千股的市价买单。'),
    L('host', 'If all four thousand fill at 113¾, it was too easy. Something is wrong, so he gives a testing order: sell a thousand.', '如果四千股全在113¾成交，那就太容易了。有问题，于是他下一个测试单：卖出一千股。'),
    L('host', 'But if the fills climb, two thousand at 114, five hundred at 114½, the last five hundred at 115½, buyers are competing. He is right.', '但如果成交价一路走高，两千股114，五百股114½，最后五百股115½，说明买家在抢筹。他是对的。'),
  ] });

  shot({ id: 'p04_scaletbl', kind: 'info', tag: { en: 'STEP BY STEP', zh: '逐步拆解' }, title: { en: 'The Rising-Scale Campaign as a Checklist', zh: '逐级买入：操作清单' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, widths: [0.07, 0.31, 0.34, 0.28], size: 25, headColor: '#1f3354', cols: [['#', '#'], ['Market', '市场'], ['Action', '操作'], ['Position', '持仓']], rows: [
      [['1', ''], ['110', '110'], ['Buy 2,000', '买2,000股'], ['2,000', '2,000股']],
      [['2', ''], ['111: first lot shows a profit', '111：第一批有利润'], ['Buy 2,000', '再买2,000股'], ['4,000', '4,000股']],
      [['3', ''], ['Still rising, to 114', '继续上涨至114'], ['Buy 2,000, then STOP and wait', '再买2,000股，然后停手等待'], ['6,000 · avg 111¾', '6,000股 · 均价111¾']],
      [['4', ''], ['Reacts to 112¼, rallies to 113¾', '回调至112¼，反弹至113¾'], ['Market order: buy 4,000', '市价买4,000股'], ['up to 10,000', '最多10,000股']],
      [['5a', ''], ['All 4,000 fill at 113¾', '4,000股全在113¾成交'], ['Warning → test-sell 1,000', '警告→卖1,000股测试'], ['reconsider', '重新评估']],
      [['5b', ''], ['Fills 114 … 114½ … 115½', '成交114……114½……115½'], ['Right → hold', '正确→持有'], ['10,000', '10,000股']],
    ], hl: [5], reveal: true, rowAt: [0, 0, 0, 0, 1, 1] },
  ], lines: [
    L('host', 'The same campaign as a checklist. Each step needs the market\'s permission before the next.', '同一场操作，写成清单。每一步都要先得到市场的许可，才能走下一步。'),
    L('host', 'The test is how the order fills. Easy fills mean plentiful supply. Climbing fills mean real demand.', '检验标准是订单如何成交。成交太容易说明卖盘充足；成交价节节升高说明需求真实。'),
    L('host', 'And all of it assumes he has already checked general conditions, and they are bullish. He never wants to buy too cheap, or too easily.', '而这一切的前提是，他已经核查过基本大势，而且是看涨的。他从不想买得太便宜，或买得太容易。'),
  ] });

  shot({ id: 'p04_line', kind: 'info', tag: { en: 'RULES', zh: '规则' }, title: { en: 'A 500-Share Line, Built the Right Way', zh: '500股的仓位，正确的建法' }, els: [
    { type: 'flow', x: 70, y: 260, w: 1780, bh: 170, dir: 'h', max: 30, nodes: [
      { num: 1, en: 'Buy the first 100 only', zh: '只买第一笔100股', at: 0 },
      { num: 2, en: 'Wait and watch', zh: '等待，观察', at: 1 },
      { num: 3, en: 'Shows a loss? You\'re wrong, for now. No more', zh: '出现亏损？你暂时错了。不再加', at: 1, color: '#f3c6c0' },
      { num: 4, en: 'Shows a profit? Then the next 100', zh: '有利润？才买下一笔100股', at: 2, color: '#cfe3c4' },
    ] },
    { type: 'quote', at: 2, x: 70, y: 460, w: 1100, size: 32, bottom: 815, en: 'Stocks are never too high for you to begin buying or too low to begin selling.', zh: '股票永远不会高到不能开始买，也不会低到不能开始卖。', src: 'Ch. VII' },
    { type: 'cards', x: 1210, y: 460, w: 640, ch: 105, cols: 1, max: 26, items: [
      { at: 0, en: 'Gambling? His only advice: Don\'t!', zh: '赌博？他唯一的建议：别！', tagColor: '#b8322a', n: '!' },
      { at: 3, en: 'Timing beats the cheapest price. It cost him hundreds of thousands to learn.', zh: '时机胜过最低价。学会这点花了他数十万美元。' },
      { at: 4, en: 'Big lines: sell when you can, not when you want.', zh: '大仓位：能卖时就卖，而不是想卖时才卖。' },
    ] },
  ], lines: [
    L('host', 'Say your full line is five hundred shares. If you are speculating, don\'t buy it all at once. If you are merely gambling, his only advice is: don\'t!', '假设你的满仓是五百股。如果是投机，就不要一次买齐。如果只是赌博，他唯一的建议是：别做！'),
    L('host', 'Buy the first hundred. If it promptly shows a loss, why buy more? You are wrong, at least for now.', '先买一百股。如果马上出现亏损，为什么还要买？你错了，至少暂时错了。'),
    L('larry', 'Stocks are never too high to begin buying or too low to begin selling. But don\'t make a second trade unless the first shows a profit.', '股票永远不会高到不能开始买，也不会低到不能开始卖。但第一笔没有盈利，就别做第二笔。'),
    L('host', 'Much depends on beginning at exactly the right time. Learning that took him years, and some hundreds of thousands of dollars.', '很多事取决于是否在恰好的时机开始。学会这一点，花了他好几年，和数十万美元。'),
    L('host', 'Big lines bring one more rule. A market absorbs a hundred shares easily, fifty thousand not. You must sell when you can, not when you want.', '大仓位还有一条规则。市场能轻松吸收一百股，五万股却不行。你得在能卖时卖，而不是想卖时卖。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p04_white', kind: 'comic', panels: [
      P(a, { bg: 'office', bgo: { board: [['SUGAR'], ['↑ ↑ ↑']], hl: [1, 0] }, chars: [
        ch('keene', a, 0.3, 1.0, Object.assign({ expr: 'think', pose: 'tape', exprAt: { 4: 'smile' } }, DEACON)),
        ch('agent', a, 0.74, 1.0, { flip: true, expr: 'determined', exprAt: { 1: 'shock', 2: 'angry', 3: 'shock', 4: 'sad' } }),
      ] }),
      P(b, { at: 1, bg: 'dark', bgo: { color: '#5a1f1a' }, props: [{ t: 'svg', svg: T(355, 140, 'SELL 10,000', '卖出1万股', { size: 72 }) }, { t: 'svg', at: 2, svg: T(355, 300, '+ SELL 10,000', '再卖1万股', { size: 56, cond: true }) }] }),
      P(c, { at: 2, bg: 'burst', bgo: { color: '#2f7d3a' }, props: [{ t: 'svg', svg: T(355, 160, 'BUY 30,000!', '买入3万股！', { size: 84 }) + T(355, 290, '= LONG 10,000', '= 净多1万股', { size: 46, cond: true }) }] }),
    ], caps: [{ until: 0, x: 70, y: 70, w: 520, en: 'Deacon S. V. White tests a tip.', zh: '执事S.V.怀特检验一条消息。' }],
    bubbles: [
      { at: 0, until: 0, x: 600, y: 90, w: 470, en: 'H. O. Havemeyer is buying Sugar!', zh: 'H.O.哈夫迈耶在买糖业股！', tx: 820, ty: 320 },
      { at: 1, until: 1, x: 80, y: 90, w: 460, en: 'Make haste, Frank! Sell ten thousand Sugar.', zh: '快去，弗兰克！卖出一万股糖业。', tx: 330, ty: 320 },
      { at: 4, x: 560, y: 90, w: 520, en: 'Won\'t you sell mine when you sell yours?', zh: '您卖的时候，能顺便把我的也卖了吗？', tx: 820, ty: 320 },
    ], lines: [
      L('host', 'An old story shows the idea. A man rushed in to tell Deacon S. V. White that H. O. Havemeyer was buying Sugar.', '一个老故事说明了这个道理。有人冲进来告诉执事S.V.怀特：H.O.哈夫迈耶在买糖业股。'),
      L('host', 'The deacon said he would use it, and told his broker to sell ten thousand Sugar. The tipster was horrified.', '执事说他会用这条消息，随即让经纪人卖出一万股糖业。报消息的人吓坏了。'),
      L('host', 'White watched on the tape how the order was filled, and sold ten thousand more. Then he ordered thirty thousand bought.', '怀特在纸带上看这笔单子如何成交，又卖了一万股。接着，他下令买入三万股。'),
      L('host', 'The first lot went fairly easily. The second was absorbed by a market that kept rising. Somebody really was taking all that was offered.', '第一批卖得还算顺利。第二批被一个仍在上涨的市场吃掉了。确实有人在接下所有抛盘。'),
      L('agent', 'Won\'t you sell mine when you sell yours? I don\'t know as much as I thought I did.', '您卖的时候，能顺便把我的也卖了吗？我懂的没我以为的那么多。', TIP),
    ] });
  }

  shot({ id: 'p04_whitetbl', kind: 'info', tag: { en: 'ANALYSIS', zh: '分析' }, title: { en: 'A Tip Is a Hypothesis: Test It', zh: '消息只是假设：先检验' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.26, 0.4, 0.34], size: 27, headColor: '#1f3354', cols: [['Order', '订单'], ['How the market took it', '市场如何承接'], ['What it proved', '证明了什么']], rows: [
      [['Sell 10,000', '卖出1万股'], ['Went fairly easily', '成交还算顺利'], ['Not conclusive yet', '尚无定论']],
      [['Sell 10,000 more', '再卖1万股'], ['Absorbed; price kept rising', '被吸收，价格仍在上涨'], ['Someone takes all offered', '有人在吃下所有抛盘']],
      [['Buy 30,000', '买入3万股'], ['Covers 20,000 short', '回补2万股空头'], ['Long 10,000 on proof, not on faith', '凭证据而非信念，净多1万股']],
    ], hl: [2], reveal: true, rowAt: [0, 0, 1] },
    { type: 'box', at: 2, x: 70, y: 640, w: 1780, h: 150, color: '#cfe3c4', anchor: 'middle', size: 32, en: '"That is why I never buy stocks cheap." The way the market takes your order tells you more than any name.', zh: '"这就是我从不买便宜股票的原因。"市场如何承接你的订单，比任何内幕人名都更说明问题。' },
  ], lines: [
    L('host', 'Read it as an experiment. Selling into a rumoured buyer is the quickest way to learn whether that buyer is real.', '把它看作一次实验。向传闻中的买家卖出，是检验这个买家是否真实存在的最快方式。'),
    L('host', 'Result: shorts covered, long ten thousand shares. The tip was good, as far as it went. Only the tape could prove it.', '结果：空头回补，净多一万股。这条消息在一定程度上是对的，但只有纸带能证明它。'),
    L('host', 'His conclusion: that is why he never buys stocks cheap. How the market takes your order tells you more than any name.', '他的结论：这就是他从不买便宜股票的原因。市场如何承接你的订单，比任何人名都更说明问题。'),
  ] });

  // ---------------- Chapter VIII ----------------
  {
    const [a, b] = HALF;
    shot({ id: 'p04_tape', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('larry', a, 0.5, 1.05, { expr: 'determined', pose: 'tape' })] }),
      P(b, { at: 1, bg: 'dark', bgo: { color: '#2b3340' }, props: [{ t: 'svg', svg: T(452, 200, 'ANGRY AT THE MARKET?', '对市场发火？', { size: 66 }) + T(452, 420, '= MAD AT YOUR LUNGS', '= 因肺炎而怪罪你的肺', { size: 60, cond: true }) }] }),
    ], caps: [{ x: 70, y: 70, w: 560, en: 'After Saratoga: no more tips, no prejudice.', zh: '萨拉托加之后：不听消息，不带偏见。' }],
    lines: [
      L('larry', 'Saratoga made me independent of tips. My one steadfast prejudice is against being wrong. Many men are bullish because they own stocks. I don\'t let my holdings think for me.', '萨拉托加让我不再依赖消息。我唯一坚定的偏见，是反对犯错。很多人看多是因为手里有股票。我不让持仓替我思考。'),
      L('larry', 'I never argue with the tape. Being angry at the market is like getting mad at your lungs because you have pneumonia.', '我从不和纸带争辩。对市场发火，就像因为得了肺炎而生自己肺的气。'),
      L('larry', 'And I saw that the big money must be in the big swing. Pools may start a swing, but basic conditions decide how far it runs.', '我也看清了：大钱一定在大波段里。资金池可以发动行情，但走多远由基本状况决定。'),
    ] });
  }

  shot({ id: 'p04_list', kind: 'info', tag: { en: 'KEY IDEA', zh: '核心概念' }, title: { en: 'Trade the General List, Not One Stock', zh: '交易整个市场，而不是一只股票' }, els: [
    { type: 'table', x: 70, y: 260, w: 1780, widths: [0.24, 0.38, 0.38], size: 28, headColor: '#1f3354', cols: [['', ''], ['One stock', '单只股票'], ['The general list', '整个市场']], rows: [
      [['Short squeeze', '轧空风险'], ['Dangerous beyond a certain % of the capital stock, depending on who holds it', '卖空超过股本一定比例就很危险，取决于持股者是谁'], ['Could sell a million shares without being squeezed', '卖空一百万股也不会被轧']],
      [['Who drives it', '由谁推动'], ['Pools, insiders, fear of corners', '资金池、内部人、对垄断的恐惧'], ['Basic conditions: the main current', '基本状况：主流趋势']],
      [['The rule', '规则'], ['Study every individual play', '研究每只股票的动作'], ['Bullish in a bull market, bearish in a bear market', '牛市看多，熊市看空']],
    ], reveal: true, rowAt: [0, 1, 2] },
  ], lines: [
    L('host', 'Thinking in swings also frees you from single stocks. Short too much of one stock, and its holders can squeeze you.', '用波段思考，也让你摆脱个股的束缚。在一只股票上卖空太多，持股人就能轧你的空。'),
    L('host', 'But a man could sell a million shares of the general list without that danger. Insiders once made fortunes from shorts\' fear of corners.', '但卖空整个市场一百万股，也没有这个危险。过去，内部人靠空头对垄断的恐惧发了大财。'),
    L('host', 'So the rule: bullish in a bull market, bearish in a bear market. Simple to say. In practice, it means anticipating probabilities.', '所以规则是：牛市看多，熊市看空。说来简单，实践起来就是预判概率。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p04_1906', kind: 'comic', panels: [
      P(a, { bg: 'study', chars: [ch('larry', a, 0.6, 1.0, { expr: 'determined', pose: 'paper', headline: 'CALL MONEY UP', hy: 0.5 })], props: [{ t: 'sign', x: 40, y: 40, w: 330, en: 'Boer War · Earthquake', zh: '布尔战争 · 地震', color: '#5b3a1e', size: 26, zsize: 22 }] }),
      P(b, { at: 2, bg: 'dark', chars: [ch('larry', b, 0.5, 1.0, { expr: 'worry', exprAt: { 4: 'sad' }, pose: 'up', hy: 0.55 })] }),
    ], caps: [{ until: 1, x: 70, y: 690, w: 560, en: '1906: "Sell stocks!"', zh: '1906年："卖出股票！"' }],
    sfx: [{ at: 4, x: 1430, y: 200, t: 'RIGHT & BUSTED', zh: '看对了，却破产了', size: 76, color: '#f6d77a' }], lines: [
      L('larry', 'In 1906 the money outlook looked serious. Real wealth had been destroyed: cash burned up in the Boer War, then the San Francisco earthquake and fire.', '1906年，资金前景看起来很严峻。真实的财富被毁掉了：布尔战争烧掉了现金，接着是旧金山地震和大火。'),
      L('larry', 'Not a house traded for racehorses, but the house burned and the horses wrecked. Call money kept spiking. Only one thing to do: sell stocks!', '不是拿房子换赛马，而是房子烧了，马也毁了。拆借利率不断飙升。只有一件事可做：卖出股票！'),
      L('larry', 'I plunged. The market went off, came back, then rose steadily. Paper profits vanished. I covered. Had I held on, I couldn\'t have bought a postcard.', '我重仓杀入。市场跌了，又涨回来，接着稳步上涨。账面利润消失了。我回补了。要是硬扛下去，我连一张明信片都买不起。'),
      L('larry', 'I sold again when the rally faltered, and was right for exactly one whole day. Again and again they dipped, then rallied.', '反弹乏力时我又卖空，结果只对了整整一天。一次又一次，跌下去，又涨回来。'),
      L('larry', 'At last I sold all I could, and stocks rallied once more. It cleaned me out. I was nearly twenty-seven, twelve years in the game. Right and busted!', '最后我能卖多少就卖多少，股票却又一次反弹，把我彻底清洗出局。我快二十七岁，入行十二年。看对了，却破产了！'),
    ] });
  }

  shot({ id: 'p04_busted', kind: 'info', tag: { en: 'MISTAKE', zh: '错误' }, title: { en: 'Right Position, Wrong Play', zh: '立场对了，打法错了' }, els: [
    { type: 'line', x: 70, y: 250, w: 1780, h: 385, xr: [0, 20], yr: [0, 100], yTicks: [], yLabel: ['The market, 1906–07', '1906–07年的市场'], illustrative: true,
      bands: [{ x0: 0, x1: 13, y0: 0, y1: 100, label: ['He sells here: too soon', '他在这里卖空：太早了'], color: '#b8322a', op: 0.1 }, { x0: 13, x1: 20, y0: 0, y1: 100, at: 1, label: ['The real break', '真正的下跌'], color: '#2f7d3a', op: 0.12 }],
      series: [{ pts: [[0, 62], [1.5, 55], [3, 66], [4.5, 72], [6, 63], [6.8, 70], [8.2, 78], [9.5, 70], [11, 82], [12, 86], [13, 80], [15, 62], [16, 66], [18, 40], [20, 25]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1] }],
      notes: [
        { x: 0, y: 62, en: 'Plunges short', zh: '重仓卖空', dx: 20, dy: 40, w: 170 },
        { x: 4.5, y: 72, en: 'Rally: covers', zh: '反弹：回补', dx: -60, dy: -95, w: 170 },
        { x: 6, y: 63, en: 'Sells again: right for one day', zh: '再卖：只对了一天', dx: 10, dy: 40, w: 230 },
        { x: 12, y: 86, en: 'Rally: cleaned out', zh: '反弹：彻底出局', dx: -250, dy: -40, w: 200 },
      ] },
    { type: 'box', at: 2, x: 70, y: 655, w: 900, h: 150, color: '#fbf3df', anchor: 'middle', size: 36, en: '"My position was right but my play was wrong."', zh: '"我的立场是对的，但我的打法错了。"' },
    { type: 'box', at: 3, x: 1010, y: 655, w: 840, h: 150, color: '#cfe3c4', size: 28, en: 'Sell short only on a declining market, adding as it falls: wrong, perhaps, but not hurt.', zh: '只在下跌的市场中卖空，并逐级加码：也许会错，但不会受重伤。' },
  ], lines: [
    L('host', 'Chart the 1906 campaign. Each short was sold into a dip, and each rally took a bite. He was right on direction and wrong on timing.', '把1906年的操作画出来：每次都在下跌时卖空，每次反弹都咬掉他一块肉。方向看对了，时机错了。'),
    L('larry', 'I had been looking through a telescope. The storm was much farther off than it seemed.', '我一直在用望远镜看。风暴比看上去远得多。'),
    L('larry', 'My position was right, but my play was wrong. I had sold too soon.', '我的立场是对的，但打法错了。我卖得太早了。'),
    L('host', 'With his later system he would have sold only on a declining market, adding as it fell. He might be wrong, but not hurt.', '按他后来的方法，他只会在下跌的市场中卖空，并逐级加码。也许会错，但不会受重伤。'),
  ] });

  {
    const [a, b, c] = THREE;
    const pile = '<g transform="translate(300 600)"><path d="M -230 0 Q -150 -230 0 -260 Q 150 -230 230 0 Z" fill="#8fbf8a" stroke="#16130f" stroke-width="6"/><text x="0" y="-110" text-anchor="middle" font-family="Bangers" font-size="90" fill="#2f6a2a" stroke="#16130f" stroke-width="3">$$$</text></g>';
    const sign = '<g transform="translate(300 210)"><rect x="-6" y="40" width="12" height="160" fill="#6a4426" stroke="#16130f" stroke-width="4"/><rect x="-200" y="-40" width="400" height="110" fill="#f4e8cc" stroke="#16130f" stroke-width="6"/><text y="10" text-anchor="middle" font-family="Bangers" font-size="54" fill="#b8322a">HELP YOURSELF</text><text y="56" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="34" fill="#16130f">请随便拿</text></g>';
    const wagon = '<g transform="translate(296 260) scale(0.9)"><rect x="-250" y="-120" width="500" height="120" fill="#b8322a" stroke="#16130f" stroke-width="6"/><text y="-72" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="26" fill="#fff">LAWRENCE LIVINGSTON</text><text y="-34" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="26" fill="#fff">TRUCKING CORPORATION</text><text y="-6" text-anchor="middle" font-family="Noto Sans SC" font-weight="700" font-size="20" fill="#f6d77a">劳伦斯·利文斯顿运输公司</text><circle cx="-160" cy="30" r="48" fill="#6a4426" stroke="#16130f" stroke-width="6"/><circle cx="160" cy="30" r="48" fill="#6a4426" stroke="#16130f" stroke-width="6"/></g>';
    shot({ id: 'p04_truck', kind: 'comic', panels: [
      P(a, { bg: 'street', props: [{ t: 'svg', svg: pile + sign }] }),
      P(b, { at: 1, bg: 'street', props: [{ t: 'svg', svg: wagon }], chars: [ch('larry', b, 0.5, 0.62, { expr: 'grin', exprAt: { 2: 'determined' }, hy: 0.62 })] }),
      P(c, { at: 2, bg: 'street', chars: [ch('larry', c, 0.5, 0.8, { expr: 'tired', exprAt: { 3: 'sad' }, hy: 0.55 })], tint: '#2a2420' }),
    ], sfx: [
      { at: 2, x: 1580, y: 170, t: 'PUFF… PUFF…', zh: '喘不上气', size: 64, color: '#fff' },
      { at: 3, x: 1580, y: 690, t: 'NO SHOVEL · NO WAGON', zh: '铲子丢了·车也没了', size: 44, color: '#f6d77a', font: 'cond' },
    ], caps: [{ at: 4, x: 70, y: 700, w: 540, en: 'Lesson: walk, don\'t sprint.', zh: '教训：要走，别冲刺。' }], lines: [
      L('larry', 'Here is what it felt like. Ahead I saw a big pile of dollars, with a sign in huge letters: Help yourself.', '那种感觉是这样的：我看到前方有一大堆钞票，上面插着一块大字招牌：请随便拿。'),
      L('larry', 'Beside it stood a wagon painted Lawrence Livingston Trucking Corporation. I had a brand-new shovel, and nobody else in sight.', '旁边停着一辆车，车身漆着"劳伦斯·利文斯顿运输公司"。我手里有一把崭新的铲子，四下无人与我竞争。'),
      L('larry', 'It was the first time I had seen big money ahead, so I ran for it. My wind gave out, and I fell.', '这是我第一次看到前方有大钱，于是我拔腿就跑。结果我喘不上气，摔倒在地。'),
      L('larry', 'The pile was still there. But I had lost the shovel, and the wagon was gone. I should have walked, not sprinted.', '那堆钱还在，可我的铲子丢了，车也不见了。我本该慢慢走，而不是冲刺。'),
      L('host', 'Harding Brothers kept his credit open; they expected him to be right again soon. So he waited, watchfully, as he should have done before plunging.', '哈丁兄弟公司继续给他信用额度，他们相信他很快会再次正确。于是他警惕地等待，这本该是他重仓之前就做的事。'),
    ] });
  }

  shot({ id: 'p04_signal', kind: 'info', tag: { en: 'READING CONDITIONS', zh: '研判大势' }, title: { en: 'The Signal: A Race for Money', zh: '信号：一场抢钱竞赛' }, els: [
    { type: 'flow', x: 70, y: 255, w: 1780, bh: 175, dir: 'h', max: 27, nodes: [
      { num: 1, en: 'Great Northern & N. Pacific: new stock, payable in installments', zh: '大北方与北太平洋：新股分期缴款', at: 0 },
      { num: 2, en: 'Bankers doubt holders can pay cash: a confession', zh: '银行家怀疑股东付不起现金：等于认罪', at: 1 },
      { num: 3, en: 'St. Paul issue, payable BEFORE the other two', zh: '圣保罗发行，缴款日早于前两家', at: 2 },
      { num: 4, en: 'A race for scarce money → sell \'em!', zh: '争抢稀缺资金→卖出！', at: 3, color: '#f3c6c0' },
    ] },
    { type: 'line', at: 4, x: 70, y: 450, w: 1780, h: 365, xr: [0, 10], yr: [245, 345], yTicks: [260, 300, 330], yLabel: ['Great Northern preferred', '大北方优先股'], illustrative: true,
      hlines: [{ v: 330, label: ['Short ≈330', '约330做空'], color: '#b8322a', x1: 10, lx: 10, below: true }],
      bands: [{ y0: 260, y1: 270, x0: 8, x1: 10, label: ['Feb 1907: −60 to 70 pts', '1907年2月：跌60–70点'], lx: 5.2, color: '#2f7d3a', op: 0.3 }],
      series: [{ pts: [[0, 330], [1, 322], [2, 326], [3.5, 310], [4.5, 314], [6, 295], [7, 299], [8.5, 275], [10, 265]], color: '#2f5d8a' }] },
  ], lines: [
    L('larry', 'Then came the sign I should have waited for. Great Northern and Northern Pacific announced new stock, payable in installments. That was something new.', '接着，我本该等待的信号出现了。大北方和北太平洋宣布发行新股，可分期缴款。这可是新鲜事。'),
    L('larry', 'New rights used to be a bull item. Now the bankers doubted holders could pay cash. That ad was a signed confession that money was tight.', '过去，新股认购权是利好。如今银行家却怀疑股东付不起现金。这则广告等于白纸黑字承认银根吃紧。'),
    L('host', 'Ed Harding urged caution, since rallies come. Larry sold a little; too little. Days later St. Paul announced an issue, payable before the other two.', '艾德·哈丁劝他谨慎，因为总会有反弹。拉瑞只卖了一点，太少了。几天后，圣保罗铁路宣布发行，缴款日早于前两家。'),
    L('larry', 'St. Paul was racing the others for what little money there was. If money was that scarce now, what would it be later? Sell \'em!', '圣保罗在和那两家抢夺所剩无几的资金。如果现在钱就这么紧，以后会怎样？卖出！'),
    L('host', 'He shorted Great Northern preferred at around 330, and other stocks at high prices. By February 1907 it was down sixty or seventy points.', '他在330左右做空大北方优先股，并在高位卖空其他股票。到1907年2月，它跌了六七十点。'),
  ] });

  {
    const [a, b, c] = BIGL;
    shot({ id: 'p04_reading', kind: 'comic', panels: [
      P(a, { bg: 'floor', bgo: { crowd: true }, chars: [
        ch('broker', a, 0.28, 0.95, { at: 3, expr: 'shout', pose: 'point' }),
        ch('trader', a, 0.72, 0.95, { at: 3, flip: true, expr: 'shout', pose: 'point' }),
      ], props: [{ t: 'sign', x: 300, y: 50, w: 500, en: 'READING: "cornered"', zh: '雷丁："被垄断了"', color: '#5a2a6a' }] }),
      P(b, { at: 1, bg: 'dark', bgo: { color: '#2b3340' }, props: [{ t: 'svg', svg: T(355, 110, 'THE READING POOL', '雷丁多头资金池', { size: 54 }) + T(355, 240, 'LOW COST · BANK FRIENDS · +$3M', '低成本·银行撑腰·账面赚300万', { size: 36, cond: true }) }] }),
      P(c, { at: 3, bg: 'burst', bgo: { color: '#b8322a' }, props: [{ t: 'svg', at: 4, svg: T(355, 190, '111 → 92', '几分钟内', { size: 110, cond: true }) }] }),
    ], caps: [{ until: 2, x: 70, y: 700, w: 620, en: 'Everything breaks, except Reading.', zh: '一切都在跌，唯独雷丁不动。' }],
    sfx: [{ at: 3, x: 590, y: 640, t: 'SELL 4,000! SELL 4,000!', zh: '卖4,000！卖4,000！', size: 60, color: '#fff', font: 'cond' }], lines: [
      L('larry', 'Rallies grew feebler. I felt out weak spots and let them have a few. Everything gave way except Reading, which stood like the Rock of Gibraltar.', '反弹越来越弱。我试探薄弱之处，往那里卖一些。一切都垮了，唯独雷丁屹立如直布罗陀巨岩。'),
      L('larry', 'Everyone said it was cornered: a strong pool, low-cost stock, friendly banks, one member up over three million on paper. Selling it was "suicide."', '人人都说它被垄断了：资金池强大，持股成本低，银行友好，一位成员账面盈利三百多万。卖空它就是"自杀"。'),
      L('larry', 'I still sold a little now and then, to play no favourites. Conditions said down. If Reading didn\'t fall, my whole theory was wrong.', '我仍不时卖一点，不对任何股票偏心。基本状况说要跌。如果雷丁不跌，我的整个理论就错了。'),
      L('larry', 'The Street was simply afraid to sell it. So I gave two brokers each an order to sell four thousand shares, at the same time.', '华尔街只是不敢卖它而已。于是我同时给两个经纪人各下一个四千股的卖单。'),
      L('larry', 'The "cornered" stock took a headlong dive. It was 111 when I started selling. Within a few minutes I took in my entire short line at 92.', '那只"被垄断"的股票一头栽了下去。我开始卖时是111，几分钟之内，我就在92回补了全部空头。'),
    ] });
  }

  shot({ id: 'p04_readchart', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Reading: Attack Soft Spots, Play No Favourites', zh: '雷丁：攻击软肋，不偏爱任何股票' }, els: [
    { type: 'line', x: 70, y: 250, w: 1100, h: 565, xr: [0, 10], yr: [88, 118], yTicks: [92, 100, 111], yLabel: ['Reading', '雷丁'], illustrative: true, xTicks: [[0, 'Weeks of firmness', '数周坚挺'], [7, 'A few minutes', '几分钟']],
      hlines: [{ v: 111, label: ['111: he sells 4,000 + 4,000 at once', '111：同时卖4,000+4,000股'], color: '#b8322a', x0: 0, x1: 10, lx: 10 }, { v: 92, below: true, label: ['92: covers entire short', '92：全部回补'], color: '#2f7d3a', x0: 5, x1: 10, lx: 10 }],
      series: [{ pts: [[0, 110.5], [1, 111.5], [2, 110.75], [3, 111.25], [4, 110.5], [5, 111], [5.6, 104], [6.3, 97], [7, 92]], color: '#5a2a6a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0] }] },
    { type: 'cards', x: 1210, y: 250, w: 640, ch: 175, cols: 1, max: 27, items: [
      { en: 'Seek the soft spots, where the tape agrees with conditions.', zh: '寻找软肋：纸带与基本状况一致的地方。' },
      { en: 'Play no favourites: a stock defying conditions may be the best short of all.', zh: '不偏爱任何股票：违抗大势的股票，可能是最好的卖空对象。' },
      { at: 1, en: 'Underlying conditions: his strongest allies.', zh: '基本状况：他最强大的盟友。', color: '#cfe3c4' },
    ] },
  ], lines: [
    L('host', 'Two lessons. Attack the soft spots first. But play no favourites: a stock defying conditions is carrying stock it can\'t carry when money tightens.', '两个教训。先攻击软肋。但不要偏爱任何股票：违抗大势的股票，背着银根收紧时扛不住的筹码。'),
    L('larry', 'For the first time I felt I had allies, the strongest in the world: underlying conditions. A bit slow at times, but dependable.', '我第一次感到自己有了盟友，世上最强大的盟友：基本状况。有时慢一点，但靠得住。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p04_travers', kind: 'comic', panels: [
      P(a, { bg: 'office', chars: [ch('friend', a, 0.28, 0.95, { expr: 'worry' }), ch('larry', a, 0.72, 0.95, { flip: true, expr: 'smile', exprAt: { 1: 'grin' } })] }),
      P(b, { at: 2, bg: 'study', chars: [ch('banker', b, 0.5, 0.95, { expr: 'grin', hat: 'none' })] }),
    ], caps: [{ at: 2, x: 1005, y: 70, w: 480, en: 'William R. Travers, a famous bear.', zh: '威廉·R·特拉弗斯，著名空头。' }],
    bubbles: [
      { at: 0, until: 0, x: 70, y: 110, w: 440, en: 'Have you covered? What goes down must come up!', zh: '你回补了吗？跌下去的总要涨回来！', tx: 250, ty: 330 },
      { at: 1, until: 1, x: 420, y: 110, w: 500, en: 'Not right away. These corpses aren\'t quite dead yet.', zh: '不会马上。这些尸体还没死透呢。', tx: 650, ty: 330 },
      { at: 2, until: 2, x: 1150, y: 200, w: 420, en: 'Y-yes! Th-the s-stiffness of d-death!', zh: '是、是啊！那、那是死、死后的僵硬！', tx: 1420, ty: 360 },
      { at: 3, x: 1150, y: 200, w: 520, en: 'I sh-should say I had! I\'m sh-short twenty thousand shares!', zh: '当、当然有！我卖、卖空了两万股！', tx: 1420, ty: 360, size: 27, zsize: 23 },
    ], lines: [
      L('friend', 'Have you covered? They\'ve touched bottom, and what goes down must come up.', '你回补了吗？已经见底了，跌下去的总要涨回来。'),
      L('larry', 'First they sink to the bottom. They come up, but not right away. These corpses aren\'t quite dead yet.', '先沉到底，再浮上来，但不会马上。这些尸体还没死透呢。'),
      L('host', 'An old-timer recalled William R. Travers, a bear asked how he could be bearish with the market so stiff. His stammered reply: the stiffness of death!', '一位老前辈想起威廉·R·特拉弗斯。有人问这位空头：市场这么坚挺，你怎么还看空？他结结巴巴地回答：那是死后的僵硬！'),
      L('host', 'Travers once asked to see a company\'s books. Did he have an interest? Certainly: he was short twenty thousand shares.', '特拉弗斯有一次要求查看一家公司的账本。问他是否有利害关系？当然有：他卖空了两万股。'),
    ] });
  }

  shot({ id: 'p04_cover', kind: 'info', tag: { en: 'WHEN TO TAKE PROFITS', zh: '何时获利了结' }, title: { en: 'February 1907: Cover, and Go Fishing', zh: '1907年2月：回补，然后去钓鱼' }, els: [
    { type: 'flow', x: 70, y: 260, w: 1780, bh: 190, dir: 'h', max: 28, nodes: [
      { num: 1, en: 'GN pfd −60 to 70 pts; others in proportion', zh: '大北方优先股跌60–70点；其他股同比例下跌', at: 0 },
      { num: 2, en: 'Decline has discounted the immediate future', zh: '跌势已反映了近期前景', at: 1 },
      { num: 3, en: 'Cover: don\'t let the next rally wipe him out', zh: '回补：不让下一次反弹把自己洗掉', at: 2 },
      { num: 4, en: 'Florida: fishing, with direct wires to Wall Street', zh: '佛罗里达：钓鱼，有直通华尔街的电报线', at: 3, color: '#cfe3c4' },
    ] },
    { type: 'box', at: 2, x: 70, y: 500, w: 1780, h: 140, color: '#f3c6c0', anchor: 'middle', size: 30, en: 'His first $10,000 was lost trading in and out of season, every day. Not twice.', zh: '他在对赌行赚的第一个一万美元，就是因为天天进出、不分时节而亏掉的。不会再犯。' },
    { type: 'box', at: 3, x: 70, y: 665, w: 1780, h: 140, color: '#fbf3df', anchor: 'middle', size: 30, en: 'He expected a fair recovery but wasn\'t bullish enough to play for a turn, and he wasn\'t giving up his position entirely.', zh: '他预计会有像样的反弹，但还没看多到要赌转势；他也不打算彻底放弃自己的立场。' },
  ], lines: [
    L('larry', 'In February 1907 I cleaned up. Great Northern preferred was down sixty or seventy points, and other stocks in proportion.', '1907年2月，我全部了结。大北方优先股跌了六七十点，其他股票也同比例下跌。'),
    L('larry', 'I covered because the decline had discounted the immediate future. I expected a fair recovery, but I wasn\'t bullish enough to play for a turn.', '我回补，是因为跌势已经反映了近期前景。我预计会有像样的反弹，但还没看多到要赌转势。'),
    L('larry', 'I had lost my first ten thousand trading in and out of season. Not twice. And rallies had broken me once. The next one wouldn\'t.', '我第一个一万美元就是因为不分时节进进出出亏掉的。不会再犯。反弹已经让我破产过一次，下一次休想。'),
    L('larry', 'So instead of sitting tight, I went fishing in Florida. Besides, there are direct wires between Wall Street and Palm Beach.', '所以我没有继续坐等，而是去佛罗里达钓鱼。再说，华尔街和棕榈滩之间有直通的电报线。'),
  ] });

  shot({ id: 'p04_take', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode Four Teaches', zh: '第四集的教训' }, els: [
    { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, items: [
      { en: 'Buy on a rising scale; sell short on a falling one.', zh: '上涨中逐级买入；下跌中逐级卖空。' },
      { en: 'No second trade unless the first shows a profit.', zh: '第一笔没有盈利，不做第二笔。' },
      { en: 'Read your fills: too easy is a warning.', zh: '读懂你的成交：太容易就是警告。', at: 1 },
      { en: 'Right on direction isn\'t enough. Walk, don\'t sprint.', zh: '方向对了还不够。要走，别冲刺。', at: 1 },
      { en: 'Trade the general market; attack soft spots, play no favourites.', zh: '交易整体市场；攻击软肋，不偏爱任何股票。', at: 2 },
      { en: 'Never argue with the tape. Cash in when the move is discounted.', zh: '永远不和纸带争辩。行情已被反映时就兑现。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Episode four in brief. Build positions in steps, and let each fill tell you whether to continue.', '第四集小结：分步建仓，让每一笔成交告诉你要不要继续。'),
    L('host', 'Being right about the market is half the job. The other half is timing, and he paid for it by going broke.', '看对市场只完成了一半，另一半是时机，他为此付出了破产的代价。'),
    L('host', 'When conditions and the tape finally agree, press hard, everywhere, and step aside once the move is priced in.', '当基本状况和纸带终于一致时，就全面出击；行情被充分反映后，就退到一旁。'),
  ] });

  shot({ id: 'p04_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistake → Why → Rule', zh: '错误 → 原因 → 规则' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, widths: [0.32, 0.34, 0.34], size: 25, headColor: RED, cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['Plunged short in 1906, too soon', '1906年过早重仓卖空'], ['Saw the storm, misjudged the distance; skipped the tape', '看到了风暴，却误判了距离；没看纸带'], ['Don\'t sell in bulk until the engine can\'t backfire', '在没有反噬风险前，不要大举卖空']],
      [['Sold his full line at once', '一次建满仓'], ['Each rally hit the whole position', '每次反弹都打在全部仓位上'], ['Sell on a falling scale: wrong, but not hurt', '在下跌中逐级卖空：错了也不受重伤']],
      [['Thought in single stocks', '只盯着个股'], ['Easier, but misses the main current; squeezes', '更容易，但错过主流趋势；还有轧空风险'], ['Trade the general list on conditions', '依据基本状况交易整个市场']],
      [['Hunted the cheapest price', '追求最低价'], ['Cheap and easy fills mean no demand', '便宜又容易的成交说明缺乏需求'], ['Timing first; never too high to begin buying', '时机优先；股价永远不会高到不能开始买']],
      [['Traded in and out of season (first $10,000)', '不分时节频繁进出（第一个1万美元）'], ['Conditions weren\'t right', '时机条件不对'], ['Step aside once the move is discounted', '行情已被反映就退场']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 2] },
  ], lines: [
    L('host', 'The mistakes: plunging before the timing was right, and putting out the whole line at once.', '错误复盘：时机未到就重仓杀入，而且一次建满仓。'),
    L('host', 'Thinking in single stocks, and chasing cheap prices instead of the right moment.', '只盯着个股，以及追求低价而不是正确的时机。'),
    L('host', 'And trading when conditions weren\'t right. The cure is patience, before and after the move.', '还有在条件不对时交易。解药是耐心，行情之前要有，行情之后也要有。'),
  ] });
};
