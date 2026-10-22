// Episode 12 · Chapters XXIII – XXIV · Insiders, Brokers and Bull Liars
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const INSIDER = { who: { en: 'AN "INSIDER"', zh: '一位"内部人"' } };

  episode(12, 'Insiders, Brokers and Bull Liars', '内部人、经纪商与利好骗子', { en: 'Chapters XXIII – XXIV', zh: '原著第二十三至二十四章' }, '#5a2a6a', [
    L('host', 'Episode twelve. Insiders, brokers and bull liars: the traps the public keeps walking into.', '第十二集：内部人、经纪商与利好骗子——公众一再落入的陷阱。'),
  ]);

  // ---------------------------------------------------------------- Ch XXIII: the setting
  {
    const [a, b] = HALF;
    shot({ id: 'p12_never', kind: 'comic', panels: [
      P(a, { bg: 'street' }),
      P(b, { at: 1, bg: 'bucketshop', props: [{ t: 'sign', x: 70, y: 430, w: 440, en: '"BROKERAGE" HOUSE', zh: '对赌式"经纪行"', color: '#7a1f1a', size: 34 }],
        chars: [ch('agent', b, 0.76, 0.8, { expr: 'grin', hy: 0.62 })] }),
    ], caps: [
      { x: 70, y: 70, w: 520, en: 'Speculation will never disappear.', zh: '投机永远不会消失。' },
      { at: 1, x: 1005, y: 700, w: 560, en: 'Bucket shops gone. Bucketeers still around.', zh: '对赌行没了，对赌式骗子还在。' },
    ], lines: [
      L('larry', 'Speculation will never disappear, and it shouldn\'t. No warning stops people guessing wrong; the unexpected, even the unexpectable, will happen.', '投机永远不会消失，也不该消失。任何警告都阻止不了人们猜错；意外，甚至无法预料的事，总会发生。'),
      L('larry', 'Wall Street has improved. The old bucket shops are gone, though bucketeering "brokerage" houses still prosper on people trying to get rich quick.', '华尔街比以前好了。老式对赌行已经消失，但对赌式的"经纪行"仍靠那些想一夜暴富的人兴旺发达。'),
      L('larry', 'Yet speculating profitably keeps getting harder. A trader once could know practically every stock on the list.', '然而，靠投机赚钱变得越来越难。过去，一个交易者几乎可以了解交易所里的每一只股票。'),
    ] });
  }

  shot({ id: 'p12_harder', kind: 'info', tag: { en: 'CONTEXT', zh: '背景' }, title: { en: 'More Stocks, More Work', zh: '股票更多，功课更多' }, els: [
    { type: 'bars', x: 70, y: 255, w: 1100, h: 560, max: 1000, vsize: 32, bars: [
      { v: 275, vl: '275', en: '1901: listed', zh: '1901年：上市', color: '#8a5a2b' },
      { v: 100, vl: '≈100', en: '1901: unlisted dept.', zh: '1901年：未上市部', color: '#8a5a2b' },
      { v: 900, vl: '≈900', en: 'His day: listed', zh: '作者当时：上市', color: '#2f5d8a', at: 1 },
      { v: 600, vl: '≈600', en: 'His day: actively traded', zh: '作者当时：活跃交易', color: '#2f5d8a', at: 1 },
    ] },
    { type: 'cards', x: 1210, y: 255, w: 640, ch: 170, cols: 1, max: 28, items: [
      { en: '1901: many listed stocks were small or inactive; some hadn\'t traded in years.', zh: '1901年：许多上市股票规模小或不活跃，有些多年无成交。' },
      { en: 'Now almost every industry in the world is represented.', zh: '如今几乎世界上每个行业都有代表。', at: 1 },
      { en: 'Keeping posted takes far more time and work.', zh: '跟踪信息需要多得多的时间和功夫。', at: 1, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'In 1901 the Stock Exchange listed 275 stocks, plus about 100 in its unlisted department. Many hadn\'t traded in years.', '1901年，纽约证券交易所上市股票275只，另有约100只在未上市部，其中许多多年没有成交。'),
    L('host', 'By the time of the book, about 900 were listed, and some 600 traded in active markets, spanning almost every industry. Keeping posted is far more work.', '到本书写作时，上市股票约900只，活跃时期约600只有成交，几乎覆盖所有行业。跟踪信息要费力得多。'),
  ] });

  shot({ id: 'p12_enemies', kind: 'info', tag: { en: 'THE ENEMIES', zh: '敌人' }, title: { en: 'The Speculator\'s Deadly Enemies', zh: '投机者的致命敌人' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 120, cols: 4, max: 36, items: [
      { en: 'Ignorance', zh: '无知', n: '1', tagColor: '#b8322a' },
      { en: 'Greed', zh: '贪婪', n: '2', tagColor: '#b8322a' },
      { en: 'Fear', zh: '恐惧', n: '3', tagColor: '#b8322a' },
      { en: 'Hope', zh: '希望', n: '4', tagColor: '#b8322a' },
    ] },
    { type: 'box', at: 1, x: 70, y: 400, w: 1780, h: 120, color: '#f3c6c0', anchor: 'middle', size: 32, en: '+ Deliberate misinformation: the more dangerous because it comes disguised.', zh: '＋ 蓄意的错误信息：因为总是乔装打扮，所以更加危险。' },
    { type: 'table', at: 2, x: 70, y: 545, w: 1780, size: 26, widths: [0.34, 0.33, 0.33], cols: [['A friend\'s honest tip', '朋友出于好意的消息'], ['The crooked tipster', '职业骗子的消息'], ['Wall Street rumours', '华尔街谣言']], rows: [
      [['Can\'t guard against it', '防不胜防'], ['As protected as against gold bricks', '和防假金砖一样只能靠自己'], ['No protection, no redress', '既无保护，也无从追索']],
    ], hl: [0] },
  ], lines: [
    L('larry', 'The speculator\'s deadly enemies are ignorance, greed, fear and hope. No law or exchange rule can remove them from the human animal.', '投机者的致命敌人是无知、贪婪、恐惧和希望。任何法律或交易所规则都无法把它们从人性中去除。'),
    L('larry', 'There is one more source of loss: deliberate misinformation. It comes disguised, which makes it the more dangerous.', '还有一个亏损来源：蓄意的错误信息。它总是乔装打扮，因而更加危险。'),
    L('larry', 'A friend\'s honest tip you can\'t guard against. But against Wall Street rumours, the public has neither protection nor redress.', '朋友出于好意的消息，你防不胜防。而面对华尔街的谣言，公众既无保护，也无从追索。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p12_anon', kind: 'comic', panels: [
      P(a, { bg: 'study', bgo: { ticker: false }, chars: [ch('larryOld', a, 0.5, 0.9, { expr: 'think', pose: 'paper', headline: 'NEWS SLIP', hy: 0.6, exprAt: { 2: 'frown' } })] }),
      P(b, { at: 1, bg: 'dark', props: [{ t: 'paper', x: 70, y: 60, w: 760, h: 620, paper: 'FINANCIAL NEWS SLIP', en: '"A LEADING BANKER SAYS IT IS TOO EARLY YET TO EXPECT A DECLINING MARKET."', zh: '"一位知名银行家表示，现在预期市场下跌还为时过早。"', size: 50, rot: -2 }] }),
    ], caps: [
      { x: 70, y: 70, w: 560, en: '"A leading insider." "A prominent director." "A high official."', zh: '"一位重要内部人"、"一位知名董事"、"一位高级官员"。' },
    ], bubbles: [
      { at: 2, x: 90, y: 250, w: 520, kind: 'thought', en: 'Who said it? Why? And why not sign his name?', zh: '谁说的？为什么说？为什么不署名？', tx: 480, ty: 420 },
    ], lines: [
      L('larry', 'Read the news slips. The statements come from "a leading insider," "a prominent director," "a high official."', '看看新闻快讯。说法总是来自"一位重要内部人"、"一位知名董事"、"一位高级官员"。'),
      L('larry', 'Here\'s one at random: a leading banker says it is too early yet to expect a declining market.', '随手挑一条："一位知名银行家表示，现在预期市场下跌还为时过早。"'),
      L('larry', 'Did he say it? Why? And why not give his name? Anonymous, nobody can be blamed for the damage it does.', '他真说过吗？为什么说？又为什么不肯署名？匿名之下，造成的损失谁也不用负责。'),
      L('host', 'Remember: some manipulation enters into practically every rise in a single stock, and it has one object only: to sell at the best possible profit.', '记住：几乎每一只个股的上涨都掺有某种操纵，目的只有一个：以最好的利润卖出。'),
    ] });
  }

  shot({ id: 'p12_cycle', kind: 'info', tag: { en: 'THE INSIDER CYCLE', zh: '内部人循环' }, title: { en: 'How Insiders Use the News', zh: '内部人如何利用新闻' }, els: [
    { type: 'flow', x: 70, y: 260, w: 1780, bh: 310, max: 27, nodes: [
      { num: 1, en: 'Business turns up. Insiders say nothing and buy all the cheap stock they can.', zh: '业务好转。内部人一言不发，尽量买进便宜股票。', at: 0 },
      { num: 2, en: 'Stock rises. "We know of no reason for the rise."', zh: '股价上涨。"我们不知道有任何上涨理由。"', at: 1 },
      { num: 3, en: 'Fully loaded: anonymous bullish items flood the tickers. Public buys; dividends raised.', zh: '买够了：匿名利好铺满报价机。公众买入；分红提高。', at: 2, color: '#cfe3c4' },
      { num: 4, en: 'Business turns down. No warnings. They sell as silently as they bought.', zh: '业务转差。毫无预警。他们像买入时一样悄悄卖出。', at: 3, color: '#f3c6c0' },
      { num: 5, en: '"A bear raid!" A squeeze is promised. It never comes; the stock keeps falling.', zh: '"空头袭击！"承诺会轧空。轧空从未到来，股价继续下跌。', at: 4, color: '#f3c6c0' },
    ] },
    { type: 'box', at: 5, x: 70, y: 620, w: 1780, h: 150, color: '#f6d77a', anchor: 'middle', size: 32, en: 'A double loss: bullish talk makes people buy too high, and "bear raid" talk keeps them from selling on the way down.', zh: '双重损失：利好言论让人们高位买入，"空头袭击"之说又让他们在下跌途中不肯卖出。' },
  ], lines: [
    L('host', 'The insider cycle. A company\'s business turns up. Who knows first? Not the public. Insiders say nothing, and buy all the cheap stock they can.', '内部人循环。公司业务好转。谁先知道？不是公众。内部人一言不发，尽可能买进便宜的股票。'),
    L('host', 'As the stock rises, reporters ask why. The insiders say they know of no reason for the rise.', '股价上涨，记者追问原因。内部人说，他们不知道有任何上涨的理由。'),
    L('host', 'Once they hold all they want, anonymous bullish items flood the tickers. The public buys, and dividends are resumed or raised.', '等他们买够了，匿名利好铺满了报价机。公众开始买入，公司恢复或提高分红。'),
    L('host', 'When business turns down, there are no warnings. They sell as silently as they bought.', '业务转差时，没有任何预警。他们像当初买入时一样，悄悄卖出。'),
    L('host', 'When it drops, a prominent director blames a bear raid and promises a squeeze. The squeeze never comes, and the stock keeps falling.', '股价下跌时，一位知名董事归咎于空头袭击，并预言会轧空。轧空从未到来，股价继续下跌。'),
    L('host', 'So the public pays twice: it buys on the bullish talk, and is talked out of selling on the way down.', '于是公众付出了两次代价：因利好言论而买入，又在下跌途中被劝住不卖。'),
  ] });

  shot({ id: 'p12_newhaven', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'The New Haven: 255 to 12', zh: '纽黑文铁路：从255到12' }, els: [
    { type: 'line', x: 70, y: 250, w: 1150, h: 565, xr: [0, 10], yr: [0, 285], yTicks: [12, 50, 100, 150, 200, 255], illustrative: true,
      yLabel: ['New York, New Haven & Hartford (255 and 12 from the book; path illustrative)', '纽黑文铁路（255与12据原书；走势为示意）'],
      xTicks: [[0, '1902', '1902年'], [10, 'Later', '后来']],
      series: [{ pts: [[0, 255], [1, 250], [2, 238], [3, 215], [4, 190], [5, 160], [6, 125], [7, 90], [8, 55], [9, 28], [10, 12]], color: '#7a1f1a', reveal: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 4] }],
      notes: [
        { x: 0, y: 255, en: 'New England\'s premier investment', zh: '新英格兰首屈一指的投资', dx: 40, dy: 10, w: 300 },
        { x: 3, y: 215, at: 1, en: 'Mellen era: trolley bought for $2M, sold to New Haven for $10M', zh: '梅伦时代：电车系统200万买入，1000万卖给纽黑文', dx: 60, dy: -80, w: 380 },
        { x: 5, y: 160, at: 2, en: 'Insiders sell; "bear selling" blamed; dividends still paid', zh: '内部人卖出；归咎"空头卖压"；分红照付', dx: 60, dy: -20, w: 380 },
        { x: 10, y: 12, at: 4, en: '$12. Never a bear drive.', zh: '12美元。从来不是空头打压。', dx: -560, dy: -60, w: 270 },
      ] },
    { type: 'cards', x: 1260, y: 250, w: 590, ch: 170, cols: 1, max: 27, items: [
      { en: 'Doubting it was like doubting the strength of Gibraltar.', zh: '怀疑它，就像怀疑直布罗陀巨岩的坚固。' },
      { en: 'Boston men who asked for the truth were called stock-jobbers and demagogues.', zh: '要求真相的波士顿人士被斥为股票贩子和煽动家。', at: 3, tagColor: '#b8322a' },
      { en: 'At 250, 100 or 25 it was still too high, and the insiders knew it.', zh: '无论250、100还是25都仍然太贵，而内部人心知肚明。', at: 4, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'The classic case: the New Haven railroad. In 1902 it sold at 255, New England\'s premier investment. Doubting it was like doubting Gibraltar.', '经典案例：纽黑文铁路。1902年它的股价是255，是新英格兰首屈一指的投资。怀疑它，就像怀疑直布罗陀巨岩。'),
    L('host', 'Under Mellen\'s policies, property after property was taken in at inflated prices. One trolley system was bought for two million and sold to the New Haven for ten.', '在梅伦的政策下，一项项资产以虚高价格并入。一个电车系统以两百万美元买下，再以一千万卖给纽黑文铁路。'),
    L('host', 'Insiders saw trouble first and sold. Asked why it fell, they blamed reckless bear selling. Dividends kept coming, so investors held on.', '内部人最先察觉问题并卖出。被问及下跌原因，他们归咎于肆无忌惮的空头卖压。分红照付，于是投资者继续持有。'),
    L('host', 'Boston men who demanded the truth were denounced as stock-jobbers and demagogues. The promised squeeze never came; new lows did.', '要求真相的波士顿人士被斥为股票贩子和煽动家。承诺的轧空始终没来，新低却接连出现。'),
    L('larry', 'That break from 255 to 12 was never a bear drive. At 250 or 100 or 25, it was still too high, and the insiders knew it.', '从255跌到12，从来不是空头打压。无论250、100还是25，它都仍然太贵，而内部人心里清楚。'),
  ] });

  shot({ id: 'p12_intervale', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Intervale Oil: Blame the Bear', zh: '因特维尔石油：怪罪空头' }, els: [
    { type: 'line', x: 70, y: 250, w: 1150, h: 565, xr: [0, 10], yr: [0, 60], yTicks: [10, 12, 35, 40, 50], illustrative: true,
      yLabel: ['Intervale Oil (stated levels exact; path illustrative)', '因特维尔石油（标注价位据原书；走势为示意）'],
      bands: [{ y0: 35, y1: 40, lx: 6.6, at: 2, label: ['Outsiders bought at 35–40', '外部人在35–40买入'], color: '#2f5d8a', op: 0.2, tc: '#2f5d8a' }],
      series: [{ pts: [[0, 22], [1.5, 32], [2.5, 40], [3.5, 46], [4.3, 50], [5, 41], [5.6, 36], [6.5, 29], [7.5, 21], [8.5, 15], [9.6, 12]], color: '#7a1f1a', reveal: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1] }],
      hlines: [{ v: 10, at: 1, lx: 4, label: ['Pool could sell to 10 and still be above cost', '资金池卖到10仍高于成本'], color: '#2f7d3a', below: true }],
      notes: [
        { x: 4.3, y: 50, en: 'Pool sells at 50', zh: '资金池在50出货', dx: -260, dy: -40, w: 230 },
        { x: 5.6, y: 36, en: '"Livingston is raiding it! We\'ll get him!"', zh: '"是利文斯顿在打压！我们要收拾他！"', dx: -330, dy: 60, w: 300 },
        { x: 9.6, y: 12, at: 1, en: '≈$12: the pool still selling', zh: '约12：资金池仍在卖', dx: -330, dy: 20, w: 250 },
      ] },
    { type: 'cards', x: 1260, y: 250, w: 590, ch: 170, cols: 1, max: 27, items: [
      { en: 'The "raid" story came from the bull pool\'s own brokers.', zh: '"打压"之说出自多头资金池自己的经纪人。' },
      { en: 'Selling on the decline was proper for insiders: they were still above cost.', zh: '对内部人来说，在下跌中卖出合情合理：仍高于成本。', at: 1 },
      { en: 'Outsiders held on, waiting for the "raider" to be punished.', zh: '外部人继续持有，等着看"打压者"受罚。', at: 2, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('larry', 'Intervale Oil: a pool ran it up to 50, sold there, and it broke fast. Asked why, the pool\'s own brokers said I was raiding it, and they\'d get me.', '因特维尔石油：一个资金池把它拉到50，在那里出货，股价迅速下跌。被问及原因，资金池自己的经纪人说是我在打压，还扬言要收拾我。'),
    L('larry', 'Meanwhile the pool kept selling. At about 12, they could sell it down to 10 and still average above cost.', '与此同时，资金池一直在卖。在12左右，他们即使卖到10，平均卖价仍高于成本。'),
    L('larry', 'That was proper for insiders. But outsiders who paid 35 or 40 believed the tickers, held on, and waited for me to get what was coming to me.', '这对内部人来说无可厚非。但那些在35或40买入的外部人相信了报价机上的消息，继续持有，等着看我遭报应。'),
    L('host', 'In a boom the public makes money at first, then loses it by overstaying. Talk of bear raids helps them overstay.', '在繁荣中，公众起初是赚钱的，后来因恋战不退又亏了回去。"空头袭击"之说正是在帮他们恋战。'),
  ] });

  shot({ id: 'p12_bears', kind: 'info', tag: { en: 'THE RULE', zh: '规则' }, title: { en: 'Long Declines Are Never Bear Raids', zh: '持续下跌从来不是空头袭击' }, els: [
    { type: 'flow', x: 70, y: 260, w: 1780, bh: 130, max: 30, nodes: [
      { en: 'Charley Woerishoffer · Addison Cammack', zh: '查理·沃里肖弗 · 艾迪生·卡马克', at: 0 },
      { en: 'James R. Keene', zh: '詹姆斯·R·基恩', at: 0 },
      { en: 'Larry Livingston, "the stock excuse"', zh: '拉瑞·利文斯顿："现成的借口"', at: 0, color: '#f6d77a' },
    ] },
    { type: 'cards', x: 70, y: 430, w: 1780, ch: 160, cols: 2, max: 29, items: [
      { en: 'A stock that keeps falling has something wrong with it: its market, or the company.', zh: '一直下跌的股票必有问题：不是它的市场，就是公司本身。', at: 1, tagColor: '#b8322a' },
      { en: 'An unjustified decline would get too cheap, and buying would stop it.', zh: '不合理的下跌会让股价过于便宜，买盘自然会止住它。', at: 2 },
      { en: 'Bears make big money only when a stock is too high. Insiders never say so.', zh: '空头只有在股价过高时才能赚大钱。内部人绝不会这么说。', at: 2 },
      { en: 'His proposal: ban anonymous bullish statements. Know what NOT to do.', zh: '他的建议：禁止匿名利好言论。要知道什么不该做。', at: 3, tagColor: '#2f7d3a' },
    ] },
  ], lines: [
    L('larry', 'Before me, they blamed Keene. Before Keene, Charley Woerishoffer or Addison Cammack. Later on, I became the stock excuse.', '在我之前，他们怪基恩。基恩之前，怪查理·沃里肖弗或艾迪生·卡马克。后来，我成了现成的借口。'),
    L('host', 'The rule: a protracted decline is never caused by bear raiding. When a stock keeps falling, something is wrong, with its market or with the company.', '规则：持续下跌从来不是空头袭击造成的。股票一直跌，必有问题，不是它的市场，就是公司本身。'),
    L('host', 'An unjustified decline would soon make the stock cheap, and buying would stop it. Bears make big money only when a stock is too high, and insiders never say so.', '不合理的下跌很快会让股价变便宜，买盘会止住跌势。空头只有在股价过高时才能赚大钱，而内部人绝不会这么说。'),
    L('larry', 'Ban anonymous bullish statements, and public losses would shrink. Knowing what not to do is almost as important as knowing what to do.', '禁止匿名利好言论，公众的亏损就会减少。知道不该做什么，几乎和知道该做什么一样重要。'),
  ] });

  // ---------------------------------------------------------------- Ch XXIV
  shot({ id: 'p12_ahead', kind: 'info', tag: { en: 'THE BIG PICTURE', zh: '大局观' }, title: { en: 'The Market Looks Ahead; Brokers Look at Commissions', zh: '市场向前看；经纪商看佣金' }, els: [
    { type: 'quote', x: 160, y: 255, w: 1600, size: 40, zsize: 34, bottom: 540, en: 'The course of the market is always from six to nine months ahead of actual conditions.', zh: '市场走势总是领先实际状况六到九个月。', src: 'Ch. XXIV' },
    { type: 'box', at: 1, x: 70, y: 575, w: 860, h: 235, color: '#cfe3c4', size: 30, en: 'The trader: will today\'s earnings still hold six to nine months from now? If not, "cheap" is an illusion.', zh: '交易者：今天的盈利六到九个月后还能维持吗？不能的话，"便宜"只是幻觉。' },
    { type: 'box', at: 2, x: 990, y: 575, w: 860, h: 235, color: '#f3c6c0', size: 30, en: 'The broker: needs commissions now, so his market letter talks up current earnings, sometimes for stocks insiders gave him to sell.', zh: '经纪商：需要眼前的佣金，于是市场通讯大谈当前盈利，有时推荐的正是内部人委托他卖出的股票。' },
  ], lines: [
    L('larry', 'The public always wants to be told. Brokers\' market letters are proper enough, but they lean too hard on current conditions.', '公众总想让人告诉他怎么做。经纪商的市场通讯本无可厚非，但过于强调眼下的状况。'),
    L('larry', 'The course of the market is always six to nine months ahead of actual conditions. Today\'s earnings justify buying only if they will hold up that far ahead.', '市场走势总是领先实际状况六到九个月。只有当今天的盈利在那么远的未来仍能维持，才构成买入的理由。'),
    L('host', 'The trader must look far ahead; the broker needs commissions now. Some urge clients to buy the very stocks insiders asked them to sell.', '交易者必须看得很远；经纪商需要的却是眼前的佣金。有些经纪商甚至劝客户买入内部人委托他们卖出的股票。'),
  ] });

  shot({ id: 'p12_brokerdeal', kind: 'info', tag: { en: 'HOW IT WORKS', zh: '手法拆解' }, title: { en: 'The Insider–Broker Deal', zh: '内部人与经纪商的交易' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, size: 24, widths: [0.2, 0.44, 0.36], reveal: true, rowAt: [0, 1, 2, 3], cols: [['Piece', '要素'], ['Terms (example from the book)', '条件（原书举例）'], ['Effect', '效果']], rows: [
      [['The ask', '请求'], ['Stock quoted at 50: "make a market for 50,000 shares"', '股价50："替我为五万股做个市场"'], ['Insider wants out', '内部人想出货']],
      [['Calls', '看涨期权'], ['5,000 sh at 45, then 5,000 more at each point up: 46, 47 … 54 (50,000 in all)', '5,000股行权价45，此后每高一点再给5,000股：46、47……54（共5万股）'], ['Broker profits as the price rises', '股价越涨，经纪商赚得越多']],
      [['Put', '看跌期权'], ['On all 50,000 sh, at the market (50)', '全部5万股，行权价为市价（50）'], ['Broker cannot lose', '经纪商稳赚不赔'], ],
      [['The sales force', '销售网络'], ['A wire house with branches across the country', '一家在全国有分支的电报网络券商'], ['Clients buy; the insider\'s 50,000 are sold', '客户买入；内部人的5万股卖出']],
    ], hl: [2] },
    { type: 'box', at: 3, x: 70, y: 705, w: 1780, h: 105, color: '#f6d77a', anchor: 'middle', size: 28, en: 'The broker plays absolutely safe. His customers carry the risk.', zh: '经纪商万无一失。风险由他的客户承担。' },
  ], lines: [
    L('host', 'How an insider uses a broker. Say his stock is at 50. He asks the head of a big wire house to make a market for fifty thousand shares.', '内部人怎样利用经纪商。假设他的股票价格是50。他请一家大型电报网络券商的老板为五万股做市。'),
    L('host', 'He gives the broker calls on five thousand shares at 45, and five thousand more at every point up, for the whole fifty thousand.', '他给经纪商五千股行权价45的看涨期权，此后每高一个点再给五千股，总计五万股。'),
    L('host', 'Plus a put on all fifty thousand at the market. Whatever happens, the broker cannot lose.', '另外再给五万股、以市价为行权价的看跌期权。无论如何，经纪商都不会亏。'),
    L('host', 'Now his branches urge customers to buy. If the public follows, he sells the whole line at a big profit, plus commissions.', '于是他的各地分支劝客户买入。如果公众跟进，他就能高价卖掉全部股票，还能赚佣金。'),
  ] });

  {
    const [a, b] = HALF;
    shot({ id: 'p12_bantam', kind: 'comic', panels: [
      P(a, { bg: 'home', chars: [ch('agent', a, 0.45, 0.9, { hat: 'none', expr: 'grin', pose: 'phone', suit: '#3a2f4a', hy: 0.6 })] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['BANTAM SHOPS'], ['72']], hl: [1, 0] }, chars: [
        ch('broker', b, 0.3, 0.8, { hat: 'none', expr: 'grin', pose: 'phone', hy: 0.66 })],
        props: [{ t: 'crowd', w: 905, y: 700, n: 5, color: '#2a221a' }] }),
    ], caps: [
      { at: 2, x: 1005, y: 700, w: 560, en: 'About a dozen head men get the same "gift".', zh: '十来位券商头面人物收到同样的"礼物"。' },
    ], bubbles: [
      { at: 1, x: 80, y: 70, w: 560, en: 'I appreciate what you\'ve done for me. I\'m sending you 500 Bantam Shops at $65. It\'s quoted at 72.', zh: '感谢你一直以来的帮忙。我给你500股班塔姆商店，每股65。现价72。', tx: 420, ty: 300 },
      { at: 3, x: 1300, y: 260, w: 520, kind: 'shout', en: 'You should buy Bantam Shops!', zh: '您该买班塔姆商店！', tx: 1250, ty: 450 },
    ], sfx: [{ at: 1, x: 480, y: 700, t: '$65 vs 72', zh: '白送7美元一股', size: 70, color: '#f6d77a', font: 'cond' }], lines: [
      L('larry', 'A well-known "insider" will call the head customers\' man of a big brokerage house, sometimes a junior partner.', '一位知名的"内部人"会打电话给大券商的首席客户经理，有时甚至是初级合伙人。'),
      L('agent', 'I want to show my appreciation. I\'m sending you 500 shares of Bantam Shops at 65. It\'s quoted at 72.', '我想表示一下谢意。我给你500股班塔姆商店，每股65。现价是72。', INSIDER),
      L('larry', 'He does the same for about a dozen head men at big houses. Each now holds a gift that already shows a profit.', '他对十来位大券商的头面人物如法炮制。每个人手里都有了一份已经浮盈的"礼物"。'),
      L('larry', 'So what do they do? Advise every man and woman they can reach to buy. They build the market he sells into.', '那他们会怎么做？劝能接触到的每一个人买入。他们替他搭好了出货的市场。'),
    ] });
  }

  shot({ id: 'p12_devices', kind: 'info', tag: { en: 'SELLING DEVICES', zh: '推销手段' }, title: { en: 'Gifts from Wall Street Philanthropists', zh: '华尔街"慈善家"的礼物' }, els: [
    { type: 'box', x: 70, y: 255, w: 860, h: 190, color: '#fbf3df', size: 28, en: 'Partial-payment plans: listed stocks sold outside on instalments. An official quotation gives any stock a kind of sanction.', zh: '分期付款：在场外分期兜售的上市股票。官方报价会给任何股票一种认可的光环。' },
    { type: 'box', at: 1, x: 70, y: 465, w: 860, h: 190, color: '#f6d77a', size: 28, en: 'Splits for market reasons only: 2, 4 or even 10 new shares for 1 = changing the colour of the certificates.', zh: '纯为市场需要而拆股：一股换二、四甚至十股＝换个颜色的股票凭证。' },
    { type: 'bars', at: 2, x: 980, y: 255, w: 870, h: 400, max: 110, vsize: 30, bars: [
      { v: 100, vl: '$1.00', en: '1 lb box: hard to move', zh: '一磅装：卖不动', color: '#8a5a2b' },
      { v: 25, vl: '25¢', en: '¼ lb box', zh: '四分之一磅装', color: '#2f5d8a' },
      { v: 30, vl: '27–30¢', en: '¼ lb, maybe', zh: '四分之一磅，或许能卖', color: '#b8322a' },
    ] },
    { type: 'box', at: 3, x: 70, y: 680, w: 1780, h: 130, color: '#f3c6c0', anchor: 'middle', size: 32, en: 'Why is the stock being made easy to buy? The wise trader bewares of Greeks bearing gifts.', zh: '为什么要让这只股票变得容易买？聪明的交易者会提防带着礼物的希腊人。' },
  ], lines: [
    L('larry', 'Exchanges shouldn\'t allow trading in listed stocks sold outside on partial-payment plans. An official quotation lends any stock a kind of sanction.', '交易所不应允许那些在场外以分期付款兜售的上市股票挂牌交易。官方报价会给任何股票一种认可的光环。'),
    L('larry', 'Another perfectly legal device: splitting a stock purely for market reasons, two, four, even ten new shares for one. It\'s changing the colour of the certificates.', '另一个完全合法的手段：纯粹出于市场需要而拆股，一股换二股、四股甚至十股。这不过是换个颜色的股票凭证。'),
    L('larry', 'A one-dollar pound package won\'t move. Sell it in quarter-pound boxes at 25 cents and it might go better, perhaps even at 27 or 30.', '一美元一磅的包装卖不动。改成四分之一磅一盒、卖25美分，也许就好卖了，甚至能卖到27或30美分。'),
    L('larry', 'Why is the stock being made easy to buy? The wise trader bewares of Greeks bearing gifts. That is all the warning he needs.', '为什么要让这只股票变得容易买？聪明的交易者会提防"带着礼物的希腊人"。这就是他需要的全部警告。'),
  ] });

  shot({ id: 'p12_bulliars', kind: 'info', tag: { en: 'THE LAW', zh: '法律' }, title: { en: 'Bear Liars Are Punished. Bull Liars Are Not.', zh: '空头骗子受罚，利好骗子逍遥' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, size: 26, widths: [0.22, 0.39, 0.39], reveal: true, rowAt: [0, 1, 1], cols: [['', ''], ['Bear liar', '散布利空的骗子'], ['Bull liar', '散布利好的骗子']], rows: [
      [['Spreads', '散布'], ['Rumours that hurt a company\'s credit, so people sell', '损害公司信用的谣言，让人卖出'], ['Unjustified bullish items, so people buy', '不实的利好消息，让人买入']],
      [['The law', '法律'], ['Punishes him', '惩罚他'], ['Nobody punishes him', '没人惩罚他']],
      [['Public loses', '公众损失'], ['Selling below value in so-called "raids"', '在所谓"袭击"中低于价值卖出'], ['MORE: buying above value on anonymous inside advice', '更多：凭匿名内幕建议高于价值买入']],
    ], hl: [2] },
    { type: 'box', at: 3, x: 70, y: 660, w: 1780, h: 150, color: '#cfe3c4', anchor: 'middle', size: 32, en: 'His proposal: if a man in a position to know wants to be believed, let him sign his name. It won\'t make it true, but it will make him careful.', zh: '他的建议：知情者若想让人相信，就请署名。署名不会让话变真，但会让他更谨慎。' },
  ], lines: [
    L('larry', 'The law punishes anyone who spreads rumours that damage a company\'s credit, the kind that make people sell.', '法律惩罚任何散布损害公司信用谣言的人，也就是那种让人卖出的谣言。'),
    L('larry', 'But who punishes the man who spreads false bullish news? Nobody. Yet the public loses more buying too high on anonymous tips than selling too low in so-called raids.', '但谁来惩罚散布虚假利好的人？没有人。然而，公众凭匿名消息高位买入的损失，比在所谓"袭击"中低位卖出更多。'),
    L('larry', 'Punish bull liars the way we punish bear liars, and the public would save millions.', '像惩罚空头骗子一样惩罚利好骗子，公众就能少亏数百万。'),
    L('larry', 'Promoters say people who trade on unsigned statements deserve their losses. Then let insiders sign. It won\'t make statements true, but it will make them careful.', '发起人说，凭匿名言论交易的人亏了活该。那就让内部人署名吧。署名不会让说法变真，但会让他们更谨慎。'),
  ] });

  shot({ id: 'p12_elementals', kind: 'info', tag: { en: 'THE ELEMENTALS', zh: '基本功' }, title: { en: 'Read the Line, Not the Explanation', zh: '看趋势，不看解释' }, els: [
    { type: 'line', x: 70, y: 250, w: 1150, h: 565, xr: [0, 20], yr: [40, 112], yTicks: [], illustrative: true,
      yLabel: ['A stock after a long rise (illustrative)', '长期上涨后的股票（示意）'],
      series: [
        { pts: [[0, 50], [1.5, 58], [2.2, 56], [3.7, 65], [4.4, 63], [6, 73], [6.7, 71], [8.3, 82], [9, 80], [10.6, 92], [11.3, 90], [12.5, 100]], color: '#2f7d3a' },
        { at: 1, pts: [[12.5, 100], [13.3, 94], [13.9, 96], [14.8, 88], [15.4, 90], [16.4, 81], [17, 83], [18, 74], [18.6, 76], [19.6, 68]], color: '#b8322a' },
      ],
      notes: [
        { x: 6, y: 73, en: 'Rising, small reactions: no explanation needed', zh: '上涨、回调小：无需解释', dx: 30, dy: 50, w: 330 },
        { x: 16.4, y: 81, at: 1, en: 'Small rallies only: the line has changed', zh: '只有小反弹：趋势已变', dx: -150, dy: 70, w: 300 },
        { x: 19.6, y: 68, at: 2, en: 'The reasons? Known only to a few', zh: '原因？只有少数人知道', dx: -230, dy: 120, w: 270 },
      ] },
    { type: 'cards', x: 1260, y: 250, w: 590, ch: 170, cols: 1, max: 27, items: [
      { en: 'It takes continuous buying to keep a stock going up.', zh: '持续上涨需要持续买盘。' },
      { en: 'When the line changes, don\'t ask why. Act.', zh: '趋势改变时，别问为什么。行动。', at: 1, tagColor: '#b8322a' },
      { en: 'Insiders may tell a pro when to buy, never when to sell.', zh: '内部人也许会告诉大户何时买，绝不会告诉他何时卖。', at: 3, tagColor: '#b8322a' },
    ] },
  ], lines: [
    L('host', 'The elementals. A rising stock needs no explanation. It takes continuous buying to keep it rising. While reactions stay small, trail along.', '基本功。上涨的股票不需要解释。持续上涨需要持续买盘。只要回调幅度小，就跟着走。'),
    L('host', 'But after a long rise, if it turns and drifts down with only small rallies, the line of least resistance has changed. Why ask for explanations?', '但在长期上涨后，如果它掉头向下、只有小幅反弹，最小阻力线就已经改变。何必问原因？'),
    L('host', 'The reasons are known only to a few, who keep quiet, or even tell the public the stock is cheap.', '原因只有少数人知道，他们要么闭口不谈，要么反而告诉公众股价便宜。'),
    L('larry', 'An insider may tell a big professional when to buy. You can bet he\'ll never tell him when to sell. Then the pro is in the public\'s shoes.', '内部人也许会告诉职业大户何时买入。但你可以肯定，他绝不会告诉对方何时卖出。那时，大户就和公众处境一样了。'),
  ] });

  {
    const p = FULL;
    shot({ id: 'p12_boulevard', kind: 'comic', panels: [
      P(p, { bg: 'street', chars: [ch('larryOld', p, 0.14, 0.95, { expr: 'determined', hy: 0.58, hat: 'fedora', hatColor: '#2a2a2a' })] }),
    ], caps: [
      { x: 470, y: 90, w: 620, en: 'No one beats the market consistently and continuously.', zh: '没有人能持续不断地战胜市场。' },
      { at: 2, x: 1180, y: 90, w: 640, en: 'Inside tips break a man faster than famine, pestilence or crop failures.', zh: '内幕消息让人破产，比饥荒、瘟疫或歉收还快。', color: '#f3c6c0' },
      { at: 3, x: 520, y: 470, w: 1080, size: 40, zsize: 34, en: '"There is no asphalt boulevard to success in Wall Street or anywhere else."', zh: '「无论在华尔街还是别处，都没有通往成功的柏油大道。」' },
    ], lines: [
      L('larry', 'Years as an operator have convinced me that no man can consistently and continuously beat the market, though he may win in single stocks at times.', '多年的操盘经历让我确信，没有人能持续不断地战胜市场，尽管他偶尔能在个股上赚钱。'),
      L('larry', 'However experienced a trader is, losing plays are always possible. Speculation can never be made one hundred percent safe.', '无论交易者多么老练，亏损的交易总有可能发生。投机永远不可能百分之百安全。'),
      L('larry', 'Professionals know inside tips will break a man faster than famine, pestilence, crop failures or political upheaval.', '职业人士都知道，内幕消息让人破产，比饥荒、瘟疫、歉收或政治动荡还要快。'),
      L('larry', 'There is no asphalt boulevard to success in Wall Street or anywhere else. Why block the traffic any further?', '无论在华尔街还是别处，都没有通往成功的柏油大道。何必再给自己添堵？'),
    ] });
  }

  // ---------------------------------------------------------------- review
  shot({ id: 'p12_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'Episode 12: What to Remember', zh: '第十二集：要记住什么' }, els: [
    { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { en: 'Your enemies: ignorance, greed, fear, hope, and deliberate misinformation.', zh: '你的敌人：无知、贪婪、恐惧、希望，以及蓄意的错误信息。' },
      { en: 'An unnamed "prominent director" is a warning sign, not a source.', zh: '匿名的"知名董事"是警示信号，而不是消息来源。' },
      { en: 'Long declines are never bear raids. Something is wrong; get out.', zh: '持续下跌从来不是空头袭击。必有问题；离场。', at: 1, tagColor: '#b8322a' },
      { en: 'The market looks 6–9 months ahead. Today\'s earnings are not a reason.', zh: '市场领先六到九个月。今天的盈利不是理由。', at: 1 },
      { en: 'A gift (cheap shares, splits, easy terms) means someone wants to sell.', zh: '"礼物"（便宜股票、拆股、宽松条件）意味着有人想卖。', at: 2, tagColor: '#b8322a' },
      { en: 'Read the line, not the explanation. There is no asphalt boulevard.', zh: '看趋势，不看解释。没有通往成功的柏油大道。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Episode twelve, the takeaways. Beware ignorance, greed, fear and hope, and treat unnamed insiders as a warning sign.', '第十二集要点：提防无知、贪婪、恐惧和希望，并把匿名内部人视为警示信号。'),
    L('host', 'A long decline is never a bear raid. And the market looks six to nine months ahead, so today\'s earnings prove nothing.', '持续下跌从来不是空头袭击。市场领先六到九个月，所以今天的盈利证明不了什么。'),
    L('host', 'Beware of gifts. Follow the line, not the explanation.', '提防"礼物"。跟随趋势，而不是解释。'),
  ] });

  shot({ id: 'p12_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'Mistakes in Chapters XXIII – XXIV', zh: '第二十三至二十四章中的错误' }, els: [
    { type: 'table', x: 70, y: 250, w: 1780, size: 24, widths: [0.3, 0.33, 0.37], cols: [['Mistake', '错误'], ['Why it fails', '原因'], ['How to recognise it · Rule', '识别与规则']], reveal: true, rowAt: [0, 0, 1, 1, 2], rows: [
      [['Holding because insiders blame a "bear raid"', '因内部人怪罪"空头袭击"而持有'], ['Insiders are the ones selling', '卖出的正是内部人'], ['Falling, with feeble rallies → sell, don\'t ask why', '下跌且反弹无力→卖出，别问为什么']],
      [['Buying on an anonymous "prominent director"', '凭匿名"知名董事"的话买入'], ['Nobody is accountable for the statement', '没人为这句话负责'], ['Ask: who said it, and why no name?', '问：谁说的？为什么不署名？']],
      [['Buying on a broker\'s letter about today\'s earnings', '凭经纪商关于当前盈利的通讯买入'], ['Broker needs commissions now; may hold insiders\' sell orders', '经纪商要的是眼前佣金；可能手握内部人卖单'], ['Look 6–9 months ahead', '向前看六到九个月']],
      [['Taking a "gift": cheap stock, splits, easy terms', '接受"礼物"：便宜股票、拆股、宽松条件'], ['Someone needs buyers for his stock', '有人需要买家来接他的股票'], ['Beware of Greeks bearing gifts', '提防带着礼物的希腊人']],
      [['A pro acting on an insider\'s buy tip', '职业交易者凭内部人的买入消息行动'], ['The insider never says when to sell', '内部人绝不会告诉你何时卖'], ['Have your own exit; the tape tells you', '自己定好退出；纸带会告诉你']],
    ] },
  ], lines: [
    L('host', 'The mistakes. Holding on because insiders blame a bear raid. If it keeps falling with feeble rallies, sell, and don\'t ask why.', '错误复盘。因为内部人怪罪空头袭击而持有。如果股价持续下跌、反弹无力，就卖出，别问为什么。'),
    L('host', 'Buying on an unnamed director or a broker\'s letter about today\'s earnings. Ask who is talking, and look six to nine months ahead.', '凭匿名董事的话或经纪商关于当前盈利的通讯买入。问问是谁在说话，并向前看六到九个月。'),
    L('host', 'And taking gifts, or an insider\'s buy tip. He will never tell you when to sell.', '还有接受"礼物"，或听内部人的买入消息。他永远不会告诉你何时卖出。'),
  ] });
};
