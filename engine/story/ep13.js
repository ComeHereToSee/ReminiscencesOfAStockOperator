// Finale: the whole capital curve, every major mistake in one review, and the twelve rules.
module.exports = ({ shot, L, episode, FULL, P, ch }) => {
  episode(13, 'Livermore\'s Rules', '利弗莫尔法则总结', { en: 'The whole book, reviewed', zh: '全书复盘' }, '#d9a441', [
    L('host', 'Finale. The whole book, reviewed.', '终章：全书复盘。'),
  ]);

  shot({ id: 'p13_curve', kind: 'info', tag: { en: 'CAPITAL CURVE', zh: '资金曲线' }, title: { en: 'Every Fortune Stated in the Book', zh: '书中提到的每一笔身家与盈亏' }, els: [
    { type: 'timeline', x: 70, y: 245, w: 1780, h: 570, lsize: 15, vsize: 18, items: [
      { v: 3.12, vl: '$3.12', en: '14: first trade', zh: '14岁首笔' },
      { v: 1000, vl: '$1,000', en: '15', zh: '15岁' },
      { v: 10000, vl: '$10,000', en: '20', zh: '20岁' },
      { v: 2500, vl: '$2,500', en: '21: to NY', zh: '21岁赴纽约', at: 1 },
      { v: 0, vl: 'broke', en: 'Fullerton', zh: '富勒顿', at: 1 },
      { v: 50000, vl: '≈$50,000', en: '1901 boom', zh: '1901牛市', at: 1 },
      { v: 0, vl: 'wiped out', en: 'May 9, 1901', zh: '1901.5.9', at: 1 },
      { v: 250000, vl: '+$250,000', en: '1906 quake', zh: '1906地震', at: 2 },
      { v: 750000, vl: '>$750,000', en: 'Summer 1907', zh: '1907夏', at: 2 },
      { v: 1000000, vl: '>$1M', en: 'Oct 24, 1907', zh: '1907.10.24', at: 2 },
      { v: -100000, vl: '−$100,000+', en: 'After cotton', zh: '棉花惨败后', at: 3 },
      { v: -150000, vl: '−$150,000', en: 'Williamson', zh: '威廉森', at: 3 },
      { v: -1000000, vl: '−$1M+', en: '1914: bankrupt', zh: '1914破产', at: 3 },
      { v: 140000, vl: '≈$140,000', en: 'End 1915', zh: '1915年末', at: 4 },
      { v: 3000000, vl: '+$3M', en: '1916', zh: '1916年', at: 4 },
    ] },
  ], lines: [
    L('host', 'Every fortune the book states, in order. From three dollars and twelve cents to ten thousand by twenty.', '书中提到的每一笔身家与盈亏，按时间排列。从3.12美元，到二十岁时的一万美元。'),
    L('host', 'Twenty-five hundred dollars to New York, broke; fifty thousand in the 1901 boom; wiped out on May 9.', '带着2,500美元来到纽约，输光；1901年牛市中赚到五万；5月9日又被清零。'),
    L('host', 'Two hundred fifty thousand on the earthquake, over three-quarters of a million in 1907, and over a million on the day of the panic.', '地震时赚了二十五万，1907年夏超过七十五万，恐慌那天身家超过一百万。'),
    L('host', 'Then the cotton disaster, the Williamson trap, and over a million in debts, ending in bankruptcy.', '然后是棉花惨败、威廉森陷阱，负债超过一百万，最终破产。'),
    L('host', 'Bethlehem rebuilt his stake, and 1916 brought about three million. Notice that every collapse came from breaking his own rules.', '伯利恒钢铁让他重建本金，1916年又赚了约三百万。请注意：每一次崩塌，都源于违背了他自己的规则。'),
  ] });

  const mistakeCols = [['Mistake', '错误'], ['Why it failed', '原因'], ['Rule', '规则']];
  shot({ id: 'p13_mist1', kind: 'info', tag: { en: 'MISTAKE REVIEW 1 / 2', zh: '错误复盘 1/2' }, title: { en: 'The Mistakes That Cost Him Fortunes', zh: '让他损失惨重的错误' }, els: [
    { type: 'table', x: 70, y: 240, w: 1780, size: 22, widths: [0.34, 0.33, 0.33], cols: mistakeCols, rows: [
      [['Bucket-shop tape trading on a real exchange (1900s)', '在真实交易所用对赌行的读盘打法'], ['Tape lag, unknown fills, his size moved price', '纸带滞后、成交未知、自身规模冲击价格'], ['Know the mechanics of your market', '弄清你所在市场的运作机制']],
      [['Selling on the May 9, 1901 panic at the market', '1901年5月9日恐慌中市价做空'], ['Traded prices that no longer existed', '依据已不存在的价格交易'], ['Anticipate big moves; don\'t bet on the next quote', '预判大行情，别赌下一笔报价']],
      [['Taking 4 points when 14 were there', '只拿4点，错过14点'], ['Impatience', '缺乏耐心'], ['The money is in the sitting', '钱是坐等出来的']],
      [['Following Harding\'s doubt at Saratoga (−$40,000)', '萨拉托加听从哈丁的怀疑（亏4万）'], ['Abandoned his own reading', '放弃了自己的判断'], ['Have the courage of your convictions', '要有坚持信念的勇气']],
      [['Shorting 1906 too early: "right and busted"', '1906年过早做空："看对了却破产"'], ['Position right, timing wrong', '方向对，时机错'], ['Walk, don\'t sprint; wait for confirmation', '慢慢走，别冲刺；等待确认']],
      [['Forcing cotton through resistance (≈−$200,000)', '强推棉花突破阻力（约亏20万）'], ['Fought the line of least resistance', '与最小阻力线作对'], ['Wait for the market to break out itself', '等市场自己突破']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 2, 2] },
  ], lines: [
    L('host', 'Now every major mistake in one place. First, bringing bucket-shop habits to a real exchange, and selling into the May 1901 panic on a lagging tape.', '现在把所有重大错误集中复盘。首先，把对赌行的习惯带到真正的交易所，以及在1901年5月的恐慌中依据滞后的纸带卖空。'),
    L('host', 'Then impatience, taking four points out of fourteen, and doubt, following Ed Harding at Saratoga instead of his own reading.', '接着是缺乏耐心，十四点只拿了四点；还有动摇，在萨拉托加听了艾德·哈丁而不是自己的判断。'),
    L('host', 'Then timing: right about 1906 but too early, and trying to force cotton through resistance.', '然后是时机：对1906年的判断正确却出手太早；还有试图强推棉花突破阻力。'),
  ] });

  shot({ id: 'p13_mist2', kind: 'info', tag: { en: 'MISTAKE REVIEW 2 / 2', zh: '错误复盘 2/2' }, title: { en: 'Mistakes of Judgment and Character', zh: '判断与性格上的错误' }, els: [
    { type: 'table', x: 70, y: 240, w: 1780, size: 22, widths: [0.34, 0.33, 0.33], cols: mistakeCols, rows: [
      [['Trading on Percy Thomas\'s view', '按珀西·托马斯的观点交易'], ['A magnetic personality overrode his own reading', '富有魅力的人压倒了他的判断'], ['Play a lone hand', '独来独往']],
      [['Sold the winning wheat, kept and added to the losing cotton', '卖掉盈利的小麦，留下并加码亏损的棉花'], ['Hope on the loser, fear on the winner', '对亏损抱希望，对盈利起恐惧'], ['Cut losses; let profits run; never average down', '止损；让利润奔跑；永不摊平']],
      [['Making the market pay a $200,000 bill', '指望市场替他付20万美元的账'], ['Need turns trading into gambling', '急需用钱让交易变成赌博'], ['Never trade under financial pressure', '绝不在财务压力下交易']],
      [['Loyalty to Williamson', '对威廉森的忠诚'], ['Gratitude overrode judgment; he was a smoke screen', '感激压倒判断；他成了烟幕弹'], ['The tape does not reward loyalty', '纸带不奖励忠诚']],
      [['Betting on peace in 1917 (cotton −$375,000)', '1917年押注和平（棉花亏37.5万）'], ['A bet on an outside event, not market conditions', '押注场外事件，而非市场状况'], ['Trade conditions, not hopes about news', '按市场状况交易，而不是对新闻的期望']],
      [['Holding Tropical Trading too long', '热带贸易持有过久'], ['Assumed insiders would act as he would', '以为内部人会像他那样行事'], ['Trade the facts before you', '按眼前的事实交易']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 2, 2] },
  ], lines: [
    L('host', 'The costliest mistakes were of judgment and character. Trading on Percy Thomas\'s view, then selling the winner and adding to the loser.', '代价最大的错误出在判断和性格上：按珀西·托马斯的观点交易，然后卖掉盈利仓、加码亏损仓。'),
    L('host', 'Trying to make the market pay a bill, and letting gratitude to Dan Williamson override his judgment.', '试图让市场替他付账，以及让对丹·威廉森的感激压倒了自己的判断。'),
    L('host', 'And even late in his career: a cotton bet on peace in 1917, and holding Tropical Trading too long because he expected insiders to think like him.', '即便在职业生涯后期也犯过错：1917年押注和平的棉花仓，以及因为以为内部人会和他想法一样，热带贸易持有过久。'),
  ] });

  shot({ id: 'p13_rules1', kind: 'info', tag: { en: 'THE RULES 1 / 2', zh: '法则 1/2' }, title: { en: 'Trading the Trend', zh: '顺势交易' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, items: [
      { n: 1, en: 'Trade along the line of least resistance.', zh: '顺着最小阻力线交易。' },
      { n: 2, en: 'Wait for the pivotal point. Don\'t anticipate the breakout.', zh: '等待关键点，不要抢跑突破。', at: 1 },
      { n: 3, en: 'Probe small. Add only when the first trade shows a profit.', zh: '小仓试探；第一笔盈利才加仓。', at: 2 },
      { n: 4, en: 'Cut losses fast. Never average down.', zh: '迅速止损；永不摊平亏损。', at: 3 },
      { n: 5, en: 'Sit tight on winners — the big money is in the big swing.', zh: '坐稳盈利仓——大钱在大波段里。', at: 4 },
      { n: 6, en: 'Study general conditions; the market moves 6–9 months ahead.', zh: '研究整体状况；市场领先6–9个月。', at: 5 },
    ] },
  ], lines: [
    L('host', 'Twelve rules from the whole book. One. Trade along the line of least resistance.', '全书十二条法则。一：顺着最小阻力线交易。'),
    L('host', 'Two. Wait for the pivotal point. Don\'t anticipate the breakout.', '二：等待关键点，不要抢跑突破。'),
    L('host', 'Three. Probe with a small position, and add only when the first trade shows a profit.', '三：用小仓位试探，第一笔盈利后才加仓。'),
    L('host', 'Four. Cut losses quickly. Never average down.', '四：迅速止损，永不摊平亏损。'),
    L('host', 'Five. Sit tight on winners. The big money is in the big swing.', '五：坐稳盈利仓位。大钱在大波段里。'),
    L('host', 'Six. Study general conditions. The market moves six to nine months ahead of them.', '六：研究整体状况。市场领先它六到九个月。'),
  ] });

  shot({ id: 'p13_rules2', kind: 'info', tag: { en: 'THE RULES 2 / 2', zh: '法则 2/2' }, title: { en: 'Mastering Yourself', zh: '驾驭自己' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, items: [
      { n: 7, en: 'Ignore tips. Back only your own judgment.', zh: '不听消息，只相信自己的判断。' },
      { n: 8, en: 'Don\'t trade all the time. Wait for the odds.', zh: '不要一直交易，等待胜算。', at: 1 },
      { n: 9, en: 'Sell a big line when the market can absorb it.', zh: '在市场能承接时卖出大仓位。', at: 2 },
      { n: 10, en: 'Hope and fear are enemies: fear the loss, hope for the profit.', zh: '希望与恐惧是敌人：对亏损恐惧，对盈利希望。', at: 3 },
      { n: 11, en: 'Protect capital from yourself; profit isn\'t safe until banked.', zh: '保护资本免受自己伤害；利润落袋才安全。', at: 4 },
      { n: 12, en: 'Turn every mistake into a new "Don\'t!"', zh: '把每个错误变成一条新的"不要！"', at: 5 },
    ] },
  ], lines: [
    L('host', 'Seven. Ignore tips. Back only your own judgment.', '七：不听消息，只相信自己的判断。'),
    L('host', 'Eight. Don\'t trade all the time. Wait until the odds favor you.', '八：不要一直交易，等到胜算站在你这边。'),
    L('host', 'Nine. Sell a big position when the market can absorb it, not when you wish to.', '九：在市场能承接时卖出大仓位，而不是在你想卖时。'),
    L('host', 'Ten. Reverse your instincts: fear the loss growing, hope for the profit growing.', '十：逆转本能：担心亏损扩大，期待盈利扩大。'),
    L('host', 'Eleven. Protect capital from yourself. A profit isn\'t safe until it\'s banked.', '十一：保护资本免受自己伤害。利润落袋才算安全。'),
    L('host', 'Twelve. Turn every mistake into a new rule that begins with: don\'t.', '十二：把每一个错误，都变成一条以"不要"开头的新规则。'),
  ] });

  shot({ id: 'p13_end', kind: 'comic', panels: [
    P(FULL, { bg: 'study', chars: [ch('larryOld', FULL, 0.62, 1.25, { expr: 'smile', pose: 'chin' })] }),
  ], caps: [
    { x: 90, y: 90, w: 640, en: 'Human nature does not change. That is why the market repeats.', zh: '人性不会改变。这就是市场不断重演的原因。', size: 34, zsize: 30 },
    { at: 1, x: 90, y: 600, w: 640, color: '#f3c6c0', en: 'Educational content based on a 1923 book. Not investment advice.', zh: '本片基于1923年出版的书籍，仅供学习，不构成投资建议。', size: 24, zsize: 22 },
  ], lines: [
    L('larry', 'There is nothing new in Wall Street. Speculation is as old as the hills, and human nature does not change.', '华尔街没有新鲜事。投机像山丘一样古老，而人性永远不会改变。'),
    L('host', 'Thank you for watching. Study the mistakes as carefully as the victories.', '感谢观看。请像研究胜利一样，认真研究失败。'),
  ] });
};
