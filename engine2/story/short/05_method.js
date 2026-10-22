// 30-minute version, part 5: the method (Book ch. VIII and X)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { N, chapter, music, title } = h;
  chapter('5 · The Method', '五 · 方法');
  music('calm');
  title({ id: 's_t5', kicker: 'PART 5 · 第五部分', en: 'The Method', zh: '交易方法', color: '#b8862a',
    sub: ['Book chapters VIII & X, in his own examples', '原著第八、十章，用他自己的例子'],
    lines: [N('Part five. The method, in my own examples and numbers.', '第五部分：交易方法，用我自己的例子和数字来讲。')] });
  lesson(h, { id: 's_scale', tag: ['METHOD 5 · BUY ON A RISING SCALE', '方法五 · 越涨越买'], title: ['Let Each Fill Tell You If You Are Right', '让每一笔成交告诉你对不对'], titleSize: 50,
    gest: ['explain', 'pointUp', 'explainR', 'shrug', 'up', 'explain'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 980, h: 620, xr: [0, 10], yr: [108.5, 116.5], yTicks: [110, 112, 114, 116], cursorFmt: 'frac',
        title: ['The book\'s own example', '原书中的例子'],
        series: [{ pts: [[0, 110], [1.5, 111], [3, 112.5], [4.2, 114], [5.5, 112.25], [6.6, 113.75], [7.6, 114.5], [8.6, 115.5], [10, 116]], color: '#2f6b3d', draw: [['L0', 1], ['L1', 3], ['L1@114', 4], ['L2', 5], ['L2@113', 6], ['L4', 8]] }],
        marks: [{ x: 0, y: 110, at: 'L0', en: 'Buy 2,000 @ 110', zh: '110买2,000股', dx: 20, dy: 40, w: 200 },
          { x: 1.5, y: 111, at: 'L0@111', en: 'Shows a profit: buy 2,000 more', zh: '有盈利：再买2,000股', dx: 30, dy: 40, w: 230 },
          { x: 4.2, y: 114, at: 'L1@114', en: 'Long 6,000, avg 111¾. Stop and wait', zh: '持有6,000股，均价111¾。暂停，等待', dx: -340, dy: -130, w: 280 },
          { x: 5.5, y: 112.25, at: 'L2', en: 'Reaction to 112¼', zh: '回调到112¼', dx: 20, dy: 40, w: 180 },
          { x: 6.6, y: 113.75, at: 'L2@113', en: 'Order: buy 4,000 at market', zh: '下单：按市价买4,000股', dx: -330, dy: 30, w: 240 }] },
      { type: 'table', at: 'L3', x: 1480, y: 220, w: 410, widths: [0.5, 0.5], size: 25, bottom: 840,
        cols: [['How the 4,000 fill', '4,000股怎么成交'], ['Meaning', '含义']],
        rows: [[['All at 113¾', '全部在113¾成交'], ['Too easy: supply is plentiful. Sell 1,000 as a test', '太容易：卖盘充足。卖1,000股试探']],
          [['2,000 @ 114, 500 @ 114½ … last 500 @ 115½', '2,000股@114，500股@114½……最后500股@115½'], ['Buyers compete: you are right', '买家在抢：你是对的']]],
        rowAt: ['L3', 'L4'], hl: ['L3@easy', 'L4@right'] }],
    lines: [
      N('Buying on a rising market is the most comfortable way to buy. Say I buy two thousand shares at 110. If it goes to 111, I am right, so I buy two thousand more.', '在上涨的市场里买入是最舒服的买法。假设我在110买入两千股。如果涨到111，说明我是对的，于是再买两千股。'),
      N('A third lot, and at 114 I am long six thousand at an average of 111 and three quarters. Then I stop, and wait for a reaction.', '再买第三批，到114时，我持有六千股，均价111¾。然后我停下来，等待回调。'),
      N('Say it falls back to 112 and a quarter, then rallies. As it gets back to 113 and three quarters, I order four thousand more, at the market.', '假设它回落到112¼，然后反弹。当它回到113¾时，我按市价再下单买四千股。'),
      N('If all four thousand fill at 113 and three quarters, it was too easy. Something is wrong, and I sell a thousand to test the market.', '如果四千股全部在113¾成交，那就太容易了。一定有问题，我会卖出一千股来试探市场。'),
      N('But if I pay 114 for some, 114 and a half for more, and 115 and a half for the last, buyers are competing with me. I am right.', '但如果有的成交在114，有的在114½，最后一笔在115½，说明有买家在和我抢。我是对的。'),
      N('I never want to buy too cheap, or too easily. And all of this assumes general conditions are already bullish.', '我从不想买得太便宜，也不想买得太容易。而这一切的前提是：整体形势已经是看涨的。'),
    ] });
  lesson(h, { id: 's_lolr', tag: ['METHOD 6 · LINE OF LEAST RESISTANCE', '方法六 · 最小阻力线'], title: ['Wait for the Market to Show Its Direction', '等市场亮明方向'], titleSize: 50,
    gest: ['explain', 'point', 'pointUp', 'explainR', 'explain'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1050, h: 620, xr: [0, 12], yr: [114, 142], yTicks: [120, 130, 140], illustrative: true, cursorLabel: false,
        title: ['Between swings: a range of 120–130', '两段行情之间：120–130的区间'],
        bands: [{ y0: 120, y1: 130, x0: 0, x1: 8, color: '#b8862a', at: 'L0', en: 'Range: wait', zh: '区间：等待' }],
        hlines: [{ v: 130, at: 'L0', color: '#2f6b3d', en: 'Selling beats buying here… until it doesn\'t', zh: '这里卖压占上风……直到被突破' }, { v: 120, at: 'L0', color: '#b3302a', en: 'Buying beats selling here', zh: '这里买盘占上风', below: true }],
        series: [{ pts: [[0, 125], [1, 129.5], [2, 121], [3, 129], [4, 120.5], [5, 128], [6, 122], [7, 129.6], [8, 131.5], [9, 134], [10, 137], [11, 136], [12, 140]], color: '#2f5d8a', draw: [['L0', 7], ['L2', 9], ['L3', 12]] }],
        marks: [{ x: 8, y: 131.5, at: 'L2', en: 'Breaks through 130: the signal', zh: '突破130：信号出现', dx: -320, dy: -130, w: 260, fill: '#f6d77a' },
          { x: 10, y: 137, at: 'L3', en: 'Shorts who sold "weak" near 120 must buy back', zh: '在120附近因"看着弱"而卖空的人被迫买回', dx: -390, dy: 60, w: 300 }] },
      { type: 'note', at: 'L4', x: 1550, y: 260, w: 330, h: 520, size: 28, fill: '#cfe3c4', en: 'Two forces work for the patient trader: basic conditions, and the people who guessed wrong.', zh: '耐心的交易者有两股力量相助：基本形势，以及那些猜错的人。', anim: 'slideU' }],
    lines: [
      N('Between big swings a market may trade back and forth between 120 and 130. At the top it looks strong, at the bottom it looks weak. Don\'t be led by looks.', '在两段大行情之间，市场可能在120到130之间来回波动。到顶部时看着很强，到底部时看着很弱。不要被表象牵着走。'),
      N('Prices go where resistance is least. Your job is to wait until that line defines itself.', '价格总是朝阻力最小的方向走。你的任务是等到这条线自己显现出来。'),
      N('When the price breaks through 130, buying has finally overpowered the selling. That is the signal.', '当价格突破130，说明买盘终于压倒了卖盘。这就是信号。'),
      N('Then everyone who sold short at 120 because it looked weak must buy back, and push it higher.', '于是，所有因为它在120看着弱而卖空的人，都必须买回，把价格推得更高。'),
      N('So the right trader has two forces working for him: the basic conditions, and the people who were wrong.', '所以，做对的交易者有两股力量为他工作：基本形势，以及那些犯错的人。'),
    ] });
  lesson(h, { id: 's_wheat', tag: ['CASE STUDY · WHEAT', '案例 · 小麦'], title: ['Buy When It Crosses $1.20, Not at $1.14', '突破1.20美元再买，而不是在1.14'], titleSize: 50,
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1050, h: 620, xr: [0, 12], yr: [1.06, 1.28], yTicks: [1.10, 1.15, 1.20, 1.25], yFmt: '$2', yPre: '', cursorFmt: '$2', illustrative: true,
        title: ['Wheat, per bushel', '小麦，每蒲式耳'],
        bands: [{ y0: 1.10, y1: 1.20, x0: 0, x1: 8.5, color: '#b8862a', at: 'L0' }],
        series: [{ pts: [[0, 1.13], [1.5, 1.19], [3, 1.11], [4.5, 1.18], [5.5, 1.14], [7, 1.17], [8, 1.195], [8.6, 1.205], [9.4, 1.21], [10.2, 1.22], [11, 1.23], [12, 1.25]], color: '#b8862a', draw: [['L0', 5], ['L1', 6], ['L2', 7], ['L2@opened', 8], ['L2@went', 11]] }],
        marks: [{ x: 5.5, y: 1.14, at: 'L1', en: 'Friend: "Why not buy now at $1.14?"', zh: '朋友："为什么不现在1.14就买？"', dx: -60, dy: 60, w: 280 },
          { x: 8.6, y: 1.205, at: 'L2@opened', en: 'Opens $1.20½: buy', zh: '开盘1.20½：买入', dx: -320, dy: -150, w: 220, fill: '#f6d77a' }] },
      { type: 'equation', at: 'L3', x: 1710, y: 330, size: 46, terms: [{ t: '1¢', zh: '每涨1美分', at: 'L3' }, { t: '×', at: 'L3' }, { t: '1M bu', zh: '100万蒲式耳', at: 'L3' }] },
      { type: 'equation', at: 'L3+0.8', x: 1710, y: 460, size: 56, terms: [{ t: '= $10,000', zh: '一万美元', at: 'L3+0.8', hl: true }] },
      { type: 'note', at: 'L4', x: 1550, y: 560, w: 330, h: 270, size: 26, fill: '#cfe3c4', en: 'A smaller profit, but a far more probable one.', zh: '利润少一点，但概率大得多。', anim: 'slideU' }],
    lines: [
      N('Wheat once sold for months between $1.10 and $1.20. Friends asked me about it.', '小麦曾经连续几个月在1.10美元到1.20美元之间徘徊。朋友们来问我。'),
      N('At $1.14 one asked: why not buy now? Because I did not know yet that it was going up.', '在1.14美元时，有人问：为什么不现在买？因为我还不知道它会涨。'),
      N('One day it closed above $1.19. Next morning it opened at $1.20 and a half, and I bought. It went to $1.21, $1.22, $1.23, $1.25.', '有一天它收在1.19美元以上。第二天早上开盘1.20½，我买入。它涨到1.21、1.22、1.23、1.25。'),
      N('To see what that means: in grain, one cent on a million bushels is ten thousand dollars.', '换算一下：在谷物市场，一百万蒲式耳每涨一美分，就是一万美元。'),
      N('Buying above the range gives up a little profit, in exchange for a far better chance of being right.', '在区间上方买入，牺牲了一点利润，换来的是大得多的胜算。'),
    ] });
  lesson(h, { id: 's_probe', tag: ['METHOD 7 · PROBE, THEN LOAD', '方法七 · 先试探，再加仓'], title: ['His Cotton System, Step by Step', '他的棉花交易系统，一步步来'], titleSize: 50,
    items: [
      { type: 'equation', at: 'L0', x: 960, y: 290, size: 46, terms: [{ t: '1 point = 1/100 ¢ per lb', zh: '1点=每磅0.01美分', at: 'L0' }, { t: '×', at: 'L0@bale' }, { t: '500 lb bale', zh: '每包约500磅', at: 'L0@bale' }, { t: '→ 20 pts = $1 / bale', zh: '20点=每包1美元', at: 'L0@twenty', hl: true }] },
      { type: 'bars', at: 'L1', x: 470, y: 360, w: 920, h: 480, title: ['Building a 40,000-bale line', '建立4万包的仓位'], max: 40000, vsize: 28,
        bars: [{ v: 10000, vl: '10,000', en: 'Probe: buy 10,000', zh: '试探：买1万包', at: 'L1', color: '#c9a26a' },
          { v: 20000, vl: '20,000', en: '+10 pts profit: 10,000 more', zh: '赚10点：再买1万包', at: 'L1@ten', color: '#c9a26a' },
          { v: 40000, vl: '40,000', en: '+20 pts ($1/bale): 20,000 more', zh: '赚20点（每包1美元）：再买2万包', at: 'L1@twenty', color: '#2f6b3d' }] },
      { type: 'rule', at: 'L2', x: 1420, y: 360, w: 470, h: 230, n: '!', tag: '#b3302a', fill: '#f3c6c0', en: 'If the first 10–20k bales show a loss: get out. It never pays to start wrong.', zh: '如果最初的1–2万包出现亏损：离场。一开始就错，永远不划算。' },
      { type: 'rule', at: 'L3', x: 1420, y: 610, w: 470, h: 230, n: '$', tag: '#2f6b3d', en: 'Probes cost $50–60k. The real move repays it almost at once.', zh: '试探要花5–6万美元。真行情一来，几乎立刻赚回。' }],
    lines: [
      N('First, the units. A cotton point is a hundredth of a cent a pound. A bale is about five hundred pounds, so twenty points is one dollar a bale.', '先说单位。棉花的一个点是每磅百分之一美分。一包棉花约五百磅，所以二十个点就是每包一美元。'),
      N('If my full line was forty thousand bales, I bought ten thousand first. Up ten points? Ten thousand more. Up twenty points, a dollar a bale? Twenty thousand more.', '如果我计划的满仓是四万包，我先买一万包。涨了十个点？再买一万包。涨了二十个点，也就是每包一美元？再买两万包。'),
      N('But if the first ten or twenty thousand showed a loss, out I went. I might only be temporarily wrong, but it never pays to start wrong.', '但如果最初的一两万包出现亏损，我就离场。也许我只是暂时错了，但一开始就错，永远不划算。'),
      N('Those probes might cost fifty or sixty thousand dollars. Once the real move started, I made it back in no time. It pays to be right at the right time.', '这些试探可能花掉五六万美元。一旦真正的行情启动，转眼就赚回来了。在正确的时间做对，永远值得。'),
    ] });
  lesson(h, { id: 's_force', tag: ['MISTAKE · 错误', '强推市场'], tagColor: '#b3302a', title: ['Trying to Push the Market: −$200,000', '试图推动市场：亏20万美元'], titleSize: 50,
    gest: ['explain', 'fist', 'despair', 'explain'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1050, h: 620, xr: [0, 12], yr: [11.4, 13.4], yTicks: [11.5, 12, 12.5, 13], yFmt: 'd2', ySuf: '¢', cursorLabel: false, illustrative: true,
        title: ['Cotton, cents per pound', '棉花，美分/磅'],
        series: [{ pts: [[0, 12], [0.7, 12.25], [1.4, 11.95], [2.1, 12.27], [2.8, 11.93], [3.5, 12.3], [4.2, 11.9], [4.9, 12.25], [5.6, 11.92], [7, 12], [8, 12.1], [9, 12.4], [10.5, 12.9], [12, 13.3]], color: '#7a4a22', draw: [['L1', 9], ['L3', 13]] }],
        bands: [{ x0: 0, x1: 0.7, y0: 11.4, y1: 13.4, color: '#2f6b3d', at: 'L1' }, { x0: 1.4, x1: 2.1, y0: 11.4, y1: 13.4, color: '#2f6b3d', at: 'L1+0.6' }, { x0: 2.8, x1: 3.5, y0: 11.4, y1: 13.4, color: '#2f6b3d', at: 'L1+1.2' }, { x0: 4.2, x1: 4.9, y0: 11.4, y1: 13.4, color: '#2f6b3d', at: 'L1+1.8' }],
        marks: [{ x: 0.7, y: 12.25, at: 'L1', en: 'He buys 50,000 bales: it rises', zh: '他买入5万包：价格上涨', dx: 30, dy: -140, w: 250 },
          { x: 1.4, y: 11.95, at: 'L1@sank', en: 'He stops: it sinks', zh: '他一停：价格下跌', dx: 30, dy: 50, w: 200, fill: '#f3c6c0' },
          { x: 10.5, y: 12.9, at: 'L3', en: 'After he quit: the real rise', zh: '他放弃后：真正的上涨', dx: -330, dy: -40, w: 250 }] },
      { type: 'counter', at: 'L2', x: 1700, y: 380, from: 0, to: -200000, fmt: '$', size: 80, dur: 1.6, color: '#b3302a', label: ['about', '大约'] },
      { type: 'note', at: 'L3e', x: 1550, y: 520, w: 330, h: 300, size: 27, fill: '#f6d77a', en: 'In a narrow market, don\'t guess or push. Mark the limits and wait for the break.', zh: '在窄幅市场里，不要猜，也不要推。标出边界，等待突破。', anim: 'slideU' }],
    lines: [
      N('Once I broke my own rule. Cotton hung around twelve cents in a narrow range, and I was very bullish. I tried to anticipate the signal instead of waiting for it.', '有一次我违反了自己的规则。棉花在十二美分左右窄幅徘徊，我非常看涨。我试图抢在信号之前行动，而不是等待它。'),
      N('I bought fifty thousand bales to give it a push. It rose while I bought, and sank when I stopped. I did that four or five times.', '我买了五万包，想推它一把。我买的时候它涨，我一停它就跌。我这样做了四五次。'),
      N('It cost me about two hundred thousand dollars.', '这让我亏了大约二十万美元。'),
      N('Not long after I quit in disgust, cotton started up, and never stopped. Mark the limits, and wait.', '在我厌倦放弃后不久，棉花开始上涨，而且一路不停。标出边界，然后等待。'),
    ] });
  lesson(h, { id: 's_hope', tag: ['THE HUMAN SIDE', '人性的一面'], title: ['Reverse Your Instincts', '把本能反过来'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 230, w: 1400, widths: [0.24, 0.38, 0.38], size: 32, bottom: 700,
        cols: [['', ''], ['Instinct says', '本能告诉你'], ['The trader must', '交易者必须']],
        rows: [[['Losing trade', '亏损的交易'], ['Hope: "tomorrow it will come back"', '希望："明天就会涨回来"'], ['Fear the loss will grow, and cut it', '害怕亏损扩大，果断止损']],
          [['Winning trade', '盈利的交易'], ['Fear: "take the profit before it goes"', '恐惧："利润跑掉前赶紧拿走"'], ['Hope the profit will grow, and hold it', '期待利润增长，坚定持有']]],
        rowAt: ['L0', 'L1'], hl: ['L0e', 'L1e'] },
      { type: 'note', at: 'L2', x: 470, y: 740, w: 1400, h: 100, size: 32, fill: '#f6d77a', align: 'center', en: '"A man may beat a stock or a group at a certain time, but no man living can beat the stock market."', zh: '"人可以在某个时候战胜某只股票或某一类股票，但没有人能战胜股市。"', anim: 'slideU' }],
    lines: [
      N('On a losing trade you hope every day will be the last bad day, and you lose more than you should.', '在亏损的交易上，你每天都希望这是最后一个坏日子，结果亏得比该亏的多。'),
      N('On a winning trade you fear the next day will take your profit, so you get out too soon. The trader must reverse both: fear the loss, hope for the profit.', '在盈利的交易上，你害怕第二天利润会跑掉，于是过早离场。交易者必须把两者都反过来：对亏损心存恐惧，对利润抱有希望。'),
      N('After nearly thirty years I know this: a man may beat a stock for a time, but no man can beat the stock market.', '近三十年后我明白了：人可以一时战胜某只股票，但没有人能战胜股市。'),
    ] });
};
