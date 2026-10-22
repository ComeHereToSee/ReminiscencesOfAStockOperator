// Full version, episode 12: Insiders, Brokers and Bull Liars (Book ch. XXIII–XXIV)
// The speculator's enemies, anonymous insider statements, the insider cycle, "bear raids" (New Haven, Intervale Oil),
// the market six to nine months ahead, the insider–broker calls-and-put deal, Bantam Shops "gifts", splits, bull liars, the elementals.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  const DIRECTOR = { hat: 'bowler', hatColor: '#1d1d1d', hair: '#9a948a', hairStyle: 'gray', mus: 'walrus', musColor: '#9a948a', stout: true, chain: true, age: 1, coat: '#1e1e24' };
  const INSIDER = { hat: 'bowler', hatColor: '#2a2a2a', hair: '#3a2a1a', mus: 'thin', musColor: '#3a2a1a', stout: true, chain: true, coat: '#3a3a40', vest: '#a08850' };
  // the insider's calls: 5,000 shares at 45, and 5,000 more at every point up (45, 46 … 54)
  const STEPS = [];
  for (let k = 0; k < 10; k++) STEPS.push([5 * k, 45 + k], [5 * k + 5, 45 + k]);

  episode(12, 'Reminiscences_E12_Insiders_Brokers_and_Bull_Liars');
  chapter('Chapter XXIII · Insiders and "Bear Raids"', '第二十三章 · 内部人与"空头打压"');
  music('calm');
  title({ id: 'e12_title', kicker: 'EPISODE 12 · 第12集', en: 'Insiders, Brokers and Bull Liars', zh: '内部人、经纪商与造谣的多头', color: '#2f5d8a', size: 96,
    sub: ['Book chapters XXIII–XXIV · looking back, c. 1922', '原著第二十三至二十四章 · 约1922年的回顾'],
    lines: [N('Episode twelve. Insiders, brokers and bull liars: the traps the public keeps walking into.', '第十二集：内部人、经纪商与造谣的多头。公众一再掉进去的陷阱。')] });

  photo({ id: 'e12_never', src: `${PD}/broker_office_quotation_board_c1910_bain.jpg`, credit: '"2 A.M. in a Wall St. broker\'s office," c.1910–15 · Bain News Service (public domain)',
    cap: ['Speculation will never disappear.', '投机永远不会消失。'],
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 12, x: 930, y: 500, z: 1.15 }],
    items: [{ type: 'note', screen: true, at: 'L1', x: 1160, y: 600, w: 700, h: 170, size: 30, fill: '#f3c6c0', anim: 'slideU', en: 'Bucket shops: gone. Bucketeering "brokerage" houses: still prospering.', zh: '对赌行：没了。对赌式"经纪行"：照样兴旺。' }],
    lines: [
      N('Speculation will never disappear, and it shouldn\'t. No warning stops people guessing wrong, and the unexpectable will happen.', '投机永远不会消失，也不应该消失。任何警告都挡不住人们猜错，而意料之外的事总会发生。'),
      N('The old bucket shops are gone, though bucketeering “brokerage” houses still prosper on people who want to get rich quick.', '老式对赌行已经消失，但对赌式的"经纪行"仍靠那些想一夜暴富的人兴旺发达。'),
    ] });

  lesson(h, { id: 'e12_harder', tag: ['CONTEXT · MORE STOCKS, MORE WORK', '背景 · 股票更多，功课更多'], title: ['Why It Keeps Getting Harder', '为什么越来越难'],
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'bars', at: 'L1', x: 470, y: 220, w: 900, h: 620, max: 900, vsize: 34, title: ['Stocks on the New York Stock Exchange', '纽约证券交易所的股票数量'],
        bars: [{ v: 275, vl: '275', en: '1901: listed', zh: '1901年：上市', at: 'L1@275', color: '#9a9182' },
          { v: 100, vl: '≈100', en: '1901: unlisted dept.', zh: '1901年：非上市部', at: 'L1@100', color: '#c9a26a' },
          { v: 900, vl: '≈900', en: 'Early 1920s: listed', zh: '20年代初：上市', at: 'L2@900', color: '#2f5d8a' },
          { v: 600, vl: '≈600', en: '…traded actively', zh: '……活跃交易', at: 'L2@600', color: '#2f6b3d' }] },
      { type: 'note', at: 'L1@years', x: 1400, y: 230, w: 470, h: 185, size: 30, anim: 'slideU', en: '1901: many listed stocks had not traded in years.', zh: '1901年：许多上市股票已多年无成交。' },
      { type: 'note', at: 'L2@industry', x: 1400, y: 430, w: 470, h: 185, size: 30, anim: 'slideU', en: 'Now almost every industry in the world is on the list.', zh: '如今几乎全世界每个行业都在榜上。' },
      { type: 'note', at: 'L2@work', x: 1400, y: 630, w: 470, h: 185, size: 30, fill: '#f6d77a', anim: 'pop', en: 'Keeping posted takes far more time and work.', zh: '要掌握行情，需要多得多的时间和功夫。' }],
    lines: [
      N('Wall Street has improved, but speculating profitably keeps getting harder. A real trader once knew practically every stock on the list.', '华尔街进步了，但投机赚钱却越来越难。过去，一个真正的交易者几乎认得榜上的每一只股票。'),
      N('In 1901, when Morgan brought out U.S. Steel, the Exchange listed 275 stocks, plus about 100 unlisted, and many hadn\'t traded in years.', '1901年摩根推出美国钢铁时，交易所上市股票275只，另有约100只在非上市部，其中许多已多年无成交。'),
      N('Today about 900 are listed and some 600 trade in active markets, from almost every industry in the world. Keeping posted takes far more work.', '如今上市股票约900只，活跃交易的约600只，几乎涵盖全世界每个行业。要掌握行情，需要多得多的功夫。'),
    ] });

  shot({ id: 'e12_enemies', set: 'office', trans: 'wipe', music: 'tense',
    setOpts: { board: [['IGNORANCE', 'GREED', 'FEAR', 'HOPE']], boardX: 220, boardW: 1480, boardH: 150, ticker: false, windows: [-260, 2000] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0e', x: 960, y: 520, z: 1.04, dur: 2 }, { t: 'L1', x: 960, y: 480, z: 1.12, dur: 1.5 }],
    cast: [
      { id: 'officeboy', x: 405, y: 890, s: 1.05, pose: 'idle', expr: 'neutral', acts: [{ t: 'L0@ignorance', pose: 'shrug', expr: 'think' }] },
      { id: 'trader', x: 775, y: 890, s: 1.05, pose: 'idle', expr: 'neutral', prop: { t: 'money' }, acts: [{ t: 'L0@greed', pose: 'hold', expr: 'grin' }] },
      { id: 'generic', key: 'fearful', x: 1145, y: 890, s: 1.05, flip: true, pose: 'idle', expr: 'neutral', acts: [{ t: 'L0@fear', pose: 'despair', expr: 'shock' }] },
      { id: 'friend', x: 1515, y: 890, s: 1.05, flip: true, pose: 'idle', expr: 'neutral', acts: [{ t: 'L0@hope', pose: 'pointUp', expr: 'smile' }] }],
    items: [
      { type: 'highlight', at: 'L0@ignorance', x: 225, y: 115, w: 360, h: 140 },
      { type: 'highlight', at: 'L0@greed', x: 595, y: 115, w: 360, h: 140 },
      { type: 'highlight', at: 'L0@fear', x: 965, y: 115, w: 360, h: 140 },
      { type: 'highlight', at: 'L0@hope', x: 1335, y: 115, w: 360, h: 140 },
      { type: 'ticket', at: 'L1@misinformation', x: 960, y: 400, lines: ['A "PROMINENT DIRECTOR"', 'SAYS ALL IS WELL', '(NO NAME GIVEN)'], head: 'NEWS SLIP · 新闻快讯', color: '#efe3c4', rot: -4 }],
    lines: [
      N('The speculator\'s deadly enemies are ignorance, greed, fear and hope. No statute book and no exchange rule can remove them from the human animal.', '投机者的致命敌人是无知、贪婪、恐惧和希望。任何法典、任何交易所规则，都无法把它们从人性中清除。'),
      N('And then there is deliberate misinformation. It comes disguised, which makes it the more dangerous.', '此外还有蓄意的误导。它总是乔装打扮而来，所以更加危险。'),
    ] });

  shot({ id: 'e12_slips', set: 'study', setOpts: { ticker: true, tickerX: 330, lampX: 1720 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 1100, y: 470, z: 1.12, dur: 1.4 }, { t: 'L2', on: 'nar', z: 1.3, dur: 1.4 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 720, y: 880, s: 1.25, pose: 'chin', expr: 'think', prop: { t: 'paper', text: 'NEWS SLIPS' }, lookX: 0.3,
      acts: [{ t: 'L0', pose: 'hold', expr: 'neutral' }, { t: 'L1', pose: 'hold', expr: 'sly' }, { t: 'L2', pose: 'explain', expr: 'frown' }, { t: 'L2@anonymous', pose: 'shrug', expr: 'neutral' }] }],
    items: [
      { type: 'note', at: 'L0@leading', until: 'L1', x: 1120, y: 140, w: 740, h: 230, size: 32, anim: 'slideU', en: '"a leading insider" · "a prominent director" · "a high official"', zh: '"一位重要内部人士"·"一位知名董事"·"一位高级官员"' },
      { type: 'note', at: 'L1', x: 1120, y: 140, w: 740, h: 230, size: 34, fill: '#efe3c4', anim: 'pop', en: '"A leading banker says it is too early yet to expect a declining market."', zh: '"一位重要银行家表示，现在预期市场下跌还为时过早。"' },
      { type: 'note', at: 'L2', x: 1120, y: 400, w: 740, h: 150, size: 32, fill: '#f6d77a', anim: 'slideU', en: 'Who said it? Why? And why no name?', zh: '是谁说的？为什么说？为什么不署名？' }],
    lines: [
      N('Read the news slips any day. The authority is always “a leading insider,” “a prominent director,” or “a high official.”', '随便哪天去读读新闻快讯。消息来源永远是"一位重要内部人士"、"一位知名董事"，或者"一位高级官员"。'),
      N('Here\'s one at random: “A leading banker says it is too early yet to expect a declining market.”', '随手挑一条："一位重要银行家表示，现在预期市场下跌还为时过早。"'),
      N('Did he say it? If so, why? And why not print his name? Anonymous, nobody can be blamed for the damage it does.', '他真说过吗？说了又是为什么？为什么不登出他的名字？匿名发言，造成损害也无人负责。'),
    ] });

  lesson(h, { id: 'e12_cycle', tag: ['THE INSIDER CYCLE', '内部人的循环'], title: ['How Insiders Use the News', '内部人怎样利用消息'],
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 215, w: 1400, h: 390, xr: [0, 12], yr: [0, 120], yTicks: [], illustrative: true, cursor: false, cursorLabel: false,
        title: ['A stock through one business cycle (schematic)', '一只股票走过一个业务周期（示意）'],
        series: [{ pts: [[0, 22], [1, 21], [2, 23], [3, 30], [4, 38], [5, 47], [6, 58], [7, 72], [8, 80], [9, 74], [10, 60], [11, 45], [12, 35]], color: '#2f5d8a',
          draw: [['L0', 2], ['L0@buy', 5], ['L1@flood', 8], ['L2', 12]] }],
        bands: [{ x0: 2, x1: 5, y0: 0, y1: 120, at: 'L0@buy', color: '#2f6b3d', en: 'Insiders buy, silently', zh: '内部人悄悄买入' },
          { x0: 5, x1: 8, y0: 0, y1: 120, at: 'L1@flood', color: '#b8862a', en: 'Bullish items; public buys', zh: '利好满天飞，公众买入' },
          { x0: 8, x1: 12, y0: 0, y1: 120, at: 'L2', color: '#b3302a', en: 'Insiders sell, silently', zh: '内部人悄悄卖出' }] },
      { type: 'flow', at: 'L0@buy', x: 470, y: 622, w: 1400, bh: 215, gap: 40, size: 27, nodes: [
        { num: 1, en: 'Business improves. Insiders buy quietly', zh: '业务好转，内部人悄悄买入', at: 'L0@buy' },
        { num: 2, en: '"We know of no reason for the rise"', zh: '"不知道为什么涨"', at: 'L1' },
        { num: 3, en: 'Bullish news floods in. Public buys', zh: '利好满天飞，公众买入', at: 'L1@flood' },
        { num: 4, en: 'Business turns. They sell, silently', zh: '业务转差，他们悄悄卖出', at: 'L2', color: '#f3c6c0' }] }],
    lines: [
      N('The insider cycle. A company\'s business turns up. Who knows first? Not the public. The insiders say nothing, and buy all the cheap stock they can.', '内部人的循环是这样的。公司业务好转，谁最先知道？不是公众。内部人一声不吭，把便宜的股票能买多少买多少。'),
      N('Asked why it\'s rising, they know of no reason. Once they hold all they want, bullish items flood the tickers, and the public buys.', '被问到股价为何上涨，他们说不知道原因。等他们吃够了货，利好消息就塞满了行情机，公众纷纷买入。'),
      N('When business turns down, there is no warning. They sell as silently as they bought.', '业务转差时，没有任何警告。他们怎么悄悄买进的，就怎么悄悄卖出。'),
      N('Trading on inside news and planting misleading statements are illegal today. Learn the pattern so you can recognise it.', '利用内幕消息交易、散布误导性言论，如今都是违法的。学会这个模式，是为了能认出它。'),
    ] });

  shot({ id: 'e12_bearraid', set: 'street', setOpts: { crowd: 5 }, trans: 'wipe', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'director', z: 1.35, dur: 1.2 }, { t: 'L1', x: 960, y: 520, z: 1.0, dur: 1.4 }],
    cast: [
      { id: 'clerk', key: 'reporter', x: 700, y: 890, s: 1.15, pose: 'write', expr: 'neutral', lookY: -0.3, prop: { t: 'pen' },
        acts: [{ t: 'L0', pose: 'write', expr: 'think', lookY: 0 }, { t: 'L1', pose: 'chin', expr: 'neutral' }] },
      { id: 'generic', key: 'director', look: DIRECTOR, x: 1250, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'smile',
        acts: [{ t: 'L0', pose: 'explain', expr: 'smile' }, { t: 'L0@trap', pose: 'pointUp', expr: 'sly' }, { t: 'L1', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'A "prominent director," name withheld, explains a sharp break.', zh: '一位不愿具名的"知名董事"解释股价急跌。' },
      { type: 'bubble', at: 'L0', until: 'L1', x: 960, y: 60, w: 600, size: 30, en: 'Today\'s decline was caused by a bear drive. Underlying conditions are unchanged!', zh: '今天的下跌是空头打压造成的。基本面毫无变化！', tx: 1250, ty: 590 },
      { type: 'note', at: 'L2', x: 80, y: 110, w: 640, h: 200, size: 29, fill: '#f3c6c0', anim: 'slideU', en: 'Loss 1: buys too high on bullish talk. Loss 2: holds on "bear raid" talk.', zh: '第一次亏：听信利好，高价买入。第二次亏：听信"空头打压"，死守不卖。' }],
    lines: [
      L('banker', 'The decline today was caused by a bear drive. Underlying conditions are unchanged. The bears will find they have sold themselves into a trap.', '今天的下跌是空头打压造成的。基本面毫无变化。空头会发现，他们卖空是自投罗网。', { speak: 'director' }),
      N('So the public holds on, waiting for the squeeze. It never comes. Too much inside stock has been fed out, and the price keeps going down.', '于是公众继续持有，等着轧空。可轧空从来不来。内部人倒出来的股票太多，价格一路下跌。'),
      N('The public pays twice: it buys on the bullish talk, and is talked out of selling on the way down.', '公众付了两次代价：听信利好而买入，又被一番说辞劝得在下跌途中不肯卖出。'),
    ] });

  photo({ id: 'e12_nhphoto', src: `${PD}/nynhh_railroad_station_torrington_1906.jpg`, credit: 'N.Y., N.H. & H. Railroad station, Torrington, Conn., 1906 · Karl Brothers postcard (public domain)', music: 'calm',
    cap: ['The New York, New Haven & Hartford: New England\'s premier railroad investment.', '纽约、纽黑文与哈特福德铁路：新英格兰首屈一指的铁路投资。'], capW: 700,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 990, y: 520, z: 1.14 }],
    items: [
      { type: 'counter', screen: true, at: 'L0@255', x: 1560, y: 330, from: 200, to: 255, prefix: '$', size: 110, dur: 1.2, panel: true, color: '#2f5d8a', label: ['New Haven, 1902', '纽黑文铁路，1902年'] },
      { type: 'note', screen: true, at: 'L1@trolley', x: 1160, y: 590, w: 700, h: 200, size: 30, fill: '#f3c6c0', anim: 'slideU', en: 'A trolley system bought for $2,000,000, sold to the New Haven for $10,000,000.', zh: '一条电车线路以200万美元买进，再以1,000万美元卖给纽黑文铁路。' }],
    lines: [
      N('The classic case is the New Haven. In 1902 it sold at 255, New England\'s premier railroad investment. Doubting it was like doubting Gibraltar.', '最经典的例子是纽黑文铁路。1902年它卖到255，是新英格兰首屈一指的铁路投资。怀疑它，就像怀疑直布罗陀的坚固。'),
      N('Under Mellen\'s policies, properties were taken in at inflated prices: one trolley system bought for two million was sold to the New Haven for ten.', '在梅伦的政策下，一项项资产以虚高价格并入：一条电车线路以两百万买进，转手以一千万卖给了纽黑文铁路。'),
    ] });

  lesson(h, { id: 'e12_newhaven', tag: ['CASE STUDY · THE NEW HAVEN', '案例 · 纽黑文铁路'], title: ['255 to 12, and Never a Bear Raid', '从255到12，从来不是空头打压'], music: 'tense',
    gest: ['explain', 'point', 'despair'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 950, h: 620, xr: [0, 10], yr: [0, 280], yTicks: [50, 100, 150, 200, 250], illustrative: true, cursorFmt: 'int',
        title: ['New Haven railroad (schematic)', '纽黑文铁路（示意）'], xTicks: [[0, '1902', ''], [10, 'the low', '低点']],
        series: [{ pts: [[0, 255], [1, 240], [2, 225], [2.6, 232], [3.4, 200], [4, 208], [4.8, 170], [5.6, 150], [6.4, 120], [7.2, 90], [8, 60], [8.8, 35], [9.5, 20], [10, 12]], color: '#b3302a',
          draw: [['L0', 4], ['L1', 9], ['L2', 13]] }],
        marks: [{ x: 0, y: 255, at: 'L0', en: '255: New England\'s pride', zh: '255：新英格兰的骄傲', dx: 30, dy: 140, w: 260 },
          { x: 2.6, y: 232, at: 'L0@bear', en: '"Reckless bear selling"', zh: '"肆无忌惮的空头卖压"', dx: 60, dy: -110, w: 240 },
          { x: 6.4, y: 120, at: 'L1@lows', en: 'New lows, no squeeze', zh: '屡创新低，轧空未至', dx: 30, dy: -150, w: 230 },
          { x: 10, y: 12, at: 'L2@12', en: '12', zh: '', dx: -120, dy: -170, w: 80, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L0@dividends', x: 1450, y: 230, w: 440, h: 160, size: 28, anim: 'slideU', en: 'Dividends kept coming, so investors held.', zh: '股息照发，投资者便继续持有。' },
      { type: 'note', at: 'L1', x: 1450, y: 405, w: 440, h: 160, size: 28, fill: '#f3c6c0', anim: 'slideU', en: 'Called "stock-jobbers and demagogues"', zh: '被骂作"股票掮客和煽动家"' },
      { type: 'note', at: 'L2@250', x: 1450, y: 580, w: 440, h: 225, size: 28, fill: '#f6d77a', anim: 'pop', en: 'At 250, 100 or 25: still too high. Only insiders knew.', zh: '250、100还是25：都还太高。只有内部人知道。' }],
    lines: [
      N('The insiders saw trouble first, and sold. Asked why, they blamed reckless bear selling. The dividends kept coming, so New England held on.', '内部人最先看出麻烦，于是卖出。被问到原因，他们归咎于肆无忌惮的空头卖压。股息照发，新英格兰人便继续持有。'),
      N('Boston men who demanded the truth were called stock-jobbers and demagogues. The squeeze never came; new lows did.', '要求说出真相的波士顿人被骂作股票掮客和煽动家。轧空始终没来，新低却接连出现。'),
      N('From 255 to 12. At 250, 100 or 25 it was still too high, and the insiders knew it. The public did not.', '从255跌到12。不管是250、100还是25，它都还太高，内部人心知肚明，公众却蒙在鼓里。'),
    ] });

  shot({ id: 'e12_intervale', set: 'office', trans: 'whip', music: 'tense',
    setOpts: { board: [['INTERVALE OIL', 'POOL SOLD AT', 'OUTSIDERS PAID'], ['50', '50', '—']], boardX: 160, boardW: 1000, boardH: 330, ticker: false,
      boardSeq: [{ t: 'L0@broke', r: 1, c: 0, v: '↓' }, { t: 'L2@12', r: 1, c: 0, v: '≈12' }, { t: 'L3@35', r: 1, c: 2, v: '35–40' }] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'poolbroker', z: 1.4, dur: 0.8 }, { t: 'L2', x: 900, y: 460, z: 1.08, dur: 1.4 }],
    cast: [
      { id: 'clerk', key: 'reporter', x: 620, y: 890, s: 1.15, pose: 'write', expr: 'neutral', prop: { t: 'pen' },
        acts: [{ t: 'L0@why', pose: 'explain', expr: 'think' }, { t: 'L1', pose: 'write', expr: 'shock' }, { t: 'L2', pose: 'chin', expr: 'neutral' }] },
      { id: 'trader', key: 'poolbroker', x: 1450, y: 890, s: 1.2, flip: true, pose: 'cross', expr: 'frown',
        acts: [{ t: 'L1', pose: 'fist', expr: 'angry' }, { t: 'L2', pose: 'hips', expr: 'sly' }] }],
    items: [
      { type: 'caption', at: 0.3, x: 1220, y: 300, w: 640, en: 'A news agency calls the brokers of the Intervale Oil pool.', zh: '一家新闻社找英特维尔石油资金池的经纪人问话。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1180, y: 70, w: 560, kind: 'shout', size: 32, en: 'Larry Livingston is raiding it! We\'re going to get him!', zh: '是拉瑞·利文斯顿在打压！我们饶不了他！', tx: 1450, ty: 590 },
      { type: 'note', at: 'L2@average', x: 1220, y: 120, w: 640, h: 170, size: 29, fill: '#cfe3c4', anim: 'slideU', en: 'Selling from 12 down to 10, the pool still averages above cost.', zh: '从12卖到10，资金池的平均卖价仍高于成本。' }],
    lines: [
      N('Then Intervale Oil. A pool ran it up to 50, sold there, and it broke fast. A news agency asked the pool\'s own brokers why.', '再看英特维尔石油。一个资金池把它拉到50，在那里出货，股价随即急跌。新闻社去问资金池自己的经纪人：为什么？'),
      L('trader', 'Larry Livingston is raiding the market! And we\'re going to get him!', '是拉瑞·利文斯顿在打压市场！我们饶不了他！', { speak: 'poolbroker' }),
      N('Meanwhile the pool kept selling. At about 12 it could sell down to 10 and still average above cost.', '与此同时，资金池一直在卖。在12左右，它就算一路卖到10，平均卖价仍高于成本。'),
      N('Outsiders who had paid 35 or 40 believed the tickers, held on, and waited for me to get what was coming to me.', '花35或40买进的外部人相信了行情机，死守不卖，等着看我遭报应。'),
    ] });

  lesson(h, { id: 'e12_neverraid', tag: ['THE RULE', '规则'], title: ['A Long Decline Is Never a Bear Raid', '长期下跌从来不是空头打压'], music: 'calm',
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      { type: 'flow', at: 'L0@Woerishoffer', x: 470, y: 225, w: 1400, bh: 150, gap: 70, size: 30, nodes: [
        { en: 'Woerishoffer · Cammack', zh: '沃里肖弗 · 卡马克', at: 'L0@Woerishoffer' },
        { en: 'James R. Keene', zh: '詹姆斯·R·基恩', at: 'L0@Keene' },
        { en: 'Livingston: "the stock excuse"', zh: '利文斯顿："现成的借口"', at: 'L0@stock', color: '#f3c6c0' }] },
      { type: 'rule', at: 'L1', x: 470, y: 405, w: 1400, h: 125, n: '1', size: 32, en: 'A stock that keeps falling has something wrong: its market, or the company.', zh: '持续下跌的股票必有问题：要么是它的市场，要么是公司本身。' },
      { type: 'rule', at: 'L2', x: 470, y: 545, w: 1400, h: 125, n: '2', size: 32, en: 'An unjustified decline soon gets cheap, and buying stops it.', zh: '没有道理的下跌很快就会跌出便宜价，买盘会让它止跌。' },
      { type: 'rule', at: 'L2@bears', x: 470, y: 685, w: 1400, h: 140, n: '3', size: 32, tag: '#b3302a', fill: '#f3c6c0', en: 'Bears make big money only when a stock is too high. Insiders never say so.', zh: '空头只有在股价过高时才能赚大钱，而内部人从不会说出这一点。' }],
    lines: [
      N('The scapegoat changes. They blamed Woerishoffer and Cammack, then Keene. Later on, I became the stock excuse.', '替罪羊换了一个又一个。先怪沃里肖弗和卡马克，后来怪基恩。再后来，我成了现成的借口。'),
      N('But a protracted decline is never caused by bear raiding. When a stock keeps going down, something is wrong, with its market or with the company.', '但长期下跌从来不是空头打压造成的。一只股票持续下跌，必定出了问题，要么是它的市场，要么是公司本身。'),
      N('An unjustified decline would soon make it cheap, and buying would stop it. Bears make big money only when a stock is too high, and insiders never say so.', '没有道理的下跌很快会让股票变便宜，买盘就会让它止跌。空头只有在股价过高时才能赚大钱，而内部人绝不会承认这一点。'),
    ] });

  // ---- chapter XXIV ----
  chapter('Chapter XXIV · Brokers, Gifts and Bull Liars', '第二十四章 · 经纪商、"礼物"与造谣的多头');
  shot({ id: 'e12_sixnine', set: 'office', trans: 'iris', music: 'calm',
    setOpts: { board: [['TODAY', '+6 MONTHS', '+9 MONTHS'], ['EARNINGS', '?', '?']], boardX: 220, boardW: 1300, boardH: 300, ticker: false,
      boardSeq: [{ t: 'L1@six', r: 1, c: 1, v: 'PRICED IN' }, { t: 'L1@nine', r: 1, c: 2, v: 'PRICED IN' }] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'broker', z: 1.3, dur: 1.2 }, { t: 'L1', x: 870, y: 400, z: 1.12, dur: 1.4 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'friend', key: 'customer', x: 680, y: 890, s: 1.15, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L0', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'shrug', expr: 'worry' }] },
      { id: 'manager', key: 'broker', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'smile', prop: { t: 'paper', text: 'MARKET LETTER' },
        acts: [{ t: 'L0', pose: 'explain', expr: 'grin' }, { t: 'L2', pose: 'hold', expr: 'sly' }] }],
    items: [
      { type: 'bubble', at: 'L0', until: 'L1', x: 990, y: 70, w: 520, en: 'Earnings are splendid. These stocks are cheap today!', zh: '盈利好极了。这些股票现在很便宜！', tx: 1250, ty: 590 },
      { type: 'note', at: 'L2', x: 260, y: 120, w: 760, h: 150, size: 30, fill: '#f6d77a', anim: 'slideU', en: 'Ask: will these earnings hold 6–9 months from now?', zh: '要问：这些盈利6–9个月后还能维持吗？' }],
    lines: [
      N('The public always wants to be told. Brokers\' market letters are proper enough, but they lean too hard on today\'s conditions.', '公众总想有人告诉他们该怎么做。经纪商的市场通讯本身无可厚非，但它们太看重眼前的状况。'),
      N('The market is always six to nine months ahead of actual conditions. Today\'s earnings matter only if they will hold up that far ahead.', '市场总是比实际状况领先六到九个月。今天的盈利，只有在那么久以后还能维持，才有意义。'),
      N('The trader must look ahead; the broker wants commissions now. Some even push the stocks that insiders gave them to sell.', '交易者必须往前看；经纪商要的却是眼前的佣金。有些人甚至向客户推销内部人交给他们出货的股票。'),
    ] });

  lesson(h, { id: 'e12_deal', tag: ['HOW IT WORKS · THE INSIDER–BROKER DEAL', '机制拆解 · 内部人与经纪商的交易'], title: ['Calls and a Put: Who Can Lose?', '看涨期权加看跌期权：谁会亏？'], titleSize: 50,
    gest: ['explain', 'pointUp', 'explainR', 'point'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 880, h: 620, xr: [0, 50], yr: [42, 57], yTicks: [45, 50, 55], cursor: false, cursorLabel: false,
        title: ['His calls: strike price per 5,000 shares', '他给的看涨期权：每5,000股的行权价'], xTicks: [[0, '0', ''], [25, '25,000 sh', ''], [50, '50,000 sh', '']],
        series: [{ pts: STEPS, color: '#2f6b3d', draw: [['L1@45', 1], ['L1@every', 19]] }],
        hlines: [{ v: 50, at: 'L0@50', color: '#2f5d8a', en: 'Quoted price: 50', zh: '市价：50', labelX: 1 }],
        bands: [{ x0: 0, x1: 50, y0: 42, y1: 50, at: 'L2@put', color: '#2f6b3d' }],
        marks: [{ x: 2.5, y: 45, at: 'L1@45', en: 'Call: 5,000 @ 45', zh: '期权：5,000股@45', dx: 20, dy: 30, w: 200 },
          { x: 47.5, y: 54, at: 'L1@every', en: '…last 5,000 @ 54', zh: '……最后5,000股@54', dx: -290, dy: -80, w: 240 },
          { x: 30, y: 50, at: 'L2@put', en: 'Put: all 50,000 back at 50', zh: '看跌期权：5万股可按50卖回', dx: -60, dy: 60, w: 260, fill: '#cfe3c4' }] },
      { type: 'table', at: 'L2@cannot', x: 1380, y: 230, w: 510, widths: [0.36, 0.64], size: 28, bottom: 632,
        cols: [['Who', '谁'], ['Can he lose?', '会亏吗？']],
        rows: [[['Broker', '经纪商'], ['No: put at 50', '不会：有50的看跌期权']], [['Insider', '内部人'], ['Gets his 50,000 sold', '五万股得以脱手']], [['Customers', '客户'], ['Yes: they carry all the risk', '会：全部风险由他们承担']]],
        rowAt: ['L2@cannot', 'L3', 'L3@customers'], hl: [null, null, 'L3@risk'] },
      { type: 'note', at: 'L3@risk', x: 1380, y: 645, w: 510, h: 185, size: 28, fill: '#f6d77a', anim: 'slideU', en: 'Illegal today. Learn to spot it from the buyer\'s side.', zh: '如今属违法。学会站在买方立场识别它。' }],
    lines: [
      N('How an insider uses a broker: his stock is at 50, and he asks a big wire house to make a market for fifty thousand shares.', '内部人怎样利用经纪商：他的股票价格是50，他请一家大型电报经纪行为五万股造市。'),
      N('He gives the broker calls on five thousand shares at 45, and five thousand more at every point up, for all fifty thousand.', '他给经纪商看涨期权：五千股行权价45，往上每高一个点再给五千股，一共五万股。'),
      N('Plus a put on all fifty thousand at the market, 50: the broker can always sell the stock back to him. He cannot lose.', '再加一份五万股的看跌期权，价格就是市价50：经纪商随时可以把股票按这个价卖回给他。经纪商不可能亏。'),
      N('Then his branches urge customers to buy. If they follow, he sells the line at a big profit. The customers carry the risk.', '于是他的各家分行劝客户买入。客户一跟进，他就以丰厚利润把整批股票卖掉。风险全由客户承担。'),
    ] });

  shot({ id: 'e12_bantam', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['BANTAM SHOPS'], ['72']], boardX: 160, boardW: 460, boardH: 300, ticker: false, windows: [2000] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'headman', z: 1.3, dur: 1.4 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [
      { id: 'manager', key: 'headman', x: 1250, y: 890, s: 1.2, flip: true, pose: 'phone', expr: 'neutral', prop: { t: 'phone' },
        acts: [{ t: 'L1', pose: 'phone', expr: 'smile' }, { t: 'L1@72', pose: 'phone', expr: 'grin' }, { t: 'L2@advise', pose: 'point', expr: 'grin' }] },
      { id: 'friend', key: 'cust1', x: 560, y: 890, s: 1.1, pose: 'chin', expr: 'think', at: 'L2', acts: [{ t: 'L2@advise', pose: 'up', expr: 'grin' }] },
      { id: 'trader', key: 'cust2', x: 860, y: 890, s: 1.1, pose: 'idle', expr: 'neutral', at: 'L2', acts: [{ t: 'L2@advise', pose: 'hold', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.3, x: 1220, y: 50, w: 640, en: 'The head customers\' man of a big brokerage house takes a call.', zh: '一家大经纪行的客户主管接到一个电话。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 700, y: 60, w: 680, size: 30, en: 'Old man, I appreciate what you\'ve done for me. I\'m sending you 500 Bantam Shops at 65. It\'s quoted at 72.', zh: '老兄，承蒙关照。我给你送500股班塔姆商店，每股65。现在市价72。', tx: 1180, ty: 560 },
      { type: 'equation', at: 'L2@seven', x: 1180, y: 230, size: 50, terms: [{ t: '500 × (72 − 65)', zh: '500股 × 7点', at: 'L2@seven' }, { t: '= $3,500', zh: '白送的账面利润', at: 'L2@seven+0.7', hl: true }] },
      { type: 'note', at: 'L2@dozen', x: 740, y: 290, w: 720, h: 115, size: 28, fill: '#efe3c4', anim: 'slideU', en: 'The same gift to about a dozen head men', zh: '同样的礼送给约十二位客户主管' },
      { type: 'stamp', at: 'L2@advise', x: 1620, y: 420, en: 'BUY BANTAM SHOPS!', zh: '快买班塔姆商店！', size: 50, color: '#2f6b3d' }],
    lines: [
      N('A well-known insider phones the head customers\' man of a big brokerage house, sometimes a junior partner.', '一位知名的内部人打电话给一家大经纪行的客户主管，有时甚至是一位初级合伙人。'),
      L('gates', 'Say, old man, I appreciate what you\'ve done for me. I\'m sending you five hundred Bantam Shops at 65. It\'s quoted at 72.', '老兄，承蒙你一向关照。我给你送五百股班塔姆商店，每股65。现在市价是72。'),
      N('He makes the same gift to a dozen head men. Each already shows seven points, so they advise everyone they can reach to buy.', '他给十来位客户主管都送了同样的礼。每份都已有七个点的账面利润，于是他们劝所有能联系上的人买入。'),
    ] });

  lesson(h, { id: 'e12_gifts', tag: ['SELLING DEVICES · "GIFTS"', '推销手法 · "礼物"'], title: ['Gifts from Wall Street Philanthropists', '华尔街"慈善家"的礼物'],
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'bars', at: 'L2', x: 470, y: 220, w: 900, h: 430, max: 120, vsize: 30, title: ['One pound, repackaged', '同一磅，换小包装'],
        bars: [{ v: 100, vl: '$1.00', en: '1 lb box', zh: '一磅装', at: 'L2', color: '#9a9182' },
          { v: 100, vl: '$1.00', en: '4 × 25¢', zh: '4盒×25美分', at: 'L2@25', color: '#c9a26a' },
          { v: 108, vl: '$1.08', en: '4 × 27¢', zh: '4盒×27美分', at: 'L2@27', color: '#b8862a' },
          { v: 120, vl: '$1.20', en: '4 × 30¢', zh: '4盒×30美分', at: 'L2@30', color: '#b3302a' }] },
      { type: 'note', at: 'L3', x: 470, y: 675, w: 900, h: 150, size: 32, fill: '#f6d77a', align: 'center', anim: 'slideU', en: '"The wise trader bewares of the Greeks bearing gifts."', zh: '"聪明的交易者会提防带着礼物的希腊人。"' },
      { type: 'note', at: 'L0@partial', x: 1400, y: 230, w: 470, h: 190, size: 28, anim: 'slideU', en: 'Partial-payment plans: listed stocks sold outside on instalments', zh: '分期付款：上市股票在场外分期出售' },
      { type: 'note', at: 'L1@splitting', x: 1400, y: 435, w: 470, h: 185, size: 28, anim: 'slideU', en: 'Splits for market reasons only: 2, 4, even 10 for 1', zh: '纯为行情拆股：一拆二、拆四，甚至拆十' },
      { type: 'note', at: 'L3@easy', x: 1400, y: 635, w: 470, h: 190, size: 30, fill: '#f3c6c0', anim: 'pop', en: 'Why is it being made easy to buy?', zh: '为什么要让它变得这么好买？' }],
    lines: [
      N('Other gifts from Wall Street philanthropists. Exchanges shouldn\'t quote listed stocks sold outside on partial payments; a quotation lends a kind of sanction.', '华尔街"慈善家"还有别的礼物。交易所不该为在场外以分期付款出售的上市股票报价；一个官方报价，就等于给了它某种认可。'),
      N('And a perfectly legal device: splitting a stock for market reasons only, two, four, even ten new shares for one. Changing the colour of the certificates.', '还有一种完全合法的手法：纯粹为了行情而拆股，一股换两股、四股，甚至十股。这不过是换一换股票凭证的颜色。'),
      N('A one-dollar pound package is hard to move. In quarter-pound boxes at 25 cents it might go better, perhaps even at 27 or 30.', '一美元一磅的大包装不好卖。改成四分之一磅一盒、每盒25美分，也许就好卖了，甚至能卖到27或30美分。'),
      N('Why is the stock being made easy to buy? The wise trader bewares of the Greeks bearing gifts.', '为什么要让这只股票变得这么好买？聪明的交易者会提防带着礼物的希腊人。'),
    ] });

  shot({ id: 'e12_liars', set: 'court', setOpts: { sign: 'THE LAW' }, trans: 'wipe', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'bull', z: 1.3, dur: 1.4 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.4 }],
    cast: [
      { id: 'trader', key: 'bear', x: 650, y: 890, s: 1.15, pose: 'idle', expr: 'neutral', acts: [{ t: 'L0@punishes', pose: 'despair', expr: 'sad' }] },
      { id: 'generic', key: 'bull', look: INSIDER, x: 1300, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'smile', prop: { t: 'cigar' },
        acts: [{ t: 'L1@Nobody', pose: 'relaxed', expr: 'sly' }, { t: 'L2@sign', pose: 'shrug', expr: 'frown' }] }],
    items: [
      { type: 'stamp', at: 'L0@punishes', until: 'L2@sign', x: 650, y: 330, en: 'BEAR LIAR: PUNISHED', zh: '造谣唱空：受罚', size: 46, color: '#b3302a' },
      { type: 'stamp', at: 'L1@Nobody', until: 'L2@sign', x: 1300, y: 330, en: 'BULL LIAR: FREE', zh: '造谣唱多：无事', size: 46, color: '#2f5d8a', rot: 8 },
      { type: 'note', at: 'L2@sign', x: 620, y: 110, w: 680, h: 150, size: 29, fill: '#f6d77a', anim: 'slideU', en: 'Signing won\'t make it true. It will make insiders careful.', zh: '署名不能保证真实，但会让内部人说话谨慎。' }],
    lines: [
      N('The law punishes anyone who spreads rumours that hurt a company\'s credit and make people sell. It was probably meant to stop bank panics.', '法律惩罚任何散布谣言、损害公司信誉、诱使人们卖出的人。这条法律的初衷，大概是防止银行挤兑。'),
      N('But who punishes the man who spreads false bullish news? Nobody. Yet the public loses more buying too high on anonymous tips than selling too low in so-called raids.', '可是谁来惩罚散布虚假利好的人？没有人。然而公众因匿名消息高价买入亏掉的钱，比在所谓的打压中低价卖出亏掉的还多。'),
      N('Punish bull liars as we punish bear liars, and the public would save millions. If an insider wants to be believed, let him sign his name.', '像惩罚造谣唱空者那样惩罚造谣唱多者，公众就能省下数以百万计的钱。内部人想让人相信，就请他署上自己的名字。'),
    ] });

  lesson(h, { id: 'e12_elementals', tag: ['THE ELEMENTALS', '基本原理'], title: ['Read the Line, Not the Explanation', '看趋势线，别听解释'],
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 14], yr: [40, 100], yTicks: [50, 70, 90], illustrative: true, cursorLabel: false,
        title: ['A long rise, then the turn', '长期上涨，然后转向'],
        series: [{ pts: [[0, 50], [1, 56], [1.6, 54], [2.8, 62], [3.4, 60], [4.6, 69], [5.2, 67], [6.4, 77], [7, 75], [8.2, 86], [9, 84], [9.8, 88], [10.4, 82], [10.9, 84], [11.6, 77], [12.1, 79], [12.8, 71], [13.3, 73], [14, 64]], color: '#2f5d8a',
          draw: [['L0', 9], ['L1', 11], ['L1@drifts', 18]] }],
        bands: [{ x0: 0, x1: 9.8, y0: 40, y1: 100, at: 'L0@trail', color: '#2f6b3d', en: 'Small reactions: trail along', zh: '回调很小：跟着走' },
          { x0: 9.8, x1: 14, y0: 40, y1: 100, at: 'L1@changed', color: '#b3302a' }],
        marks: [{ x: 1.6, y: 54, at: 'L0@reactions', en: 'Small, natural reaction', zh: '小而自然的回调', dx: 30, dy: 60, w: 240 },
          { x: 12.1, y: 79, at: 'L1@rallies', en: 'Only small rallies: the line is now down', zh: '只有小反弹：趋势线已向下', dx: -250, dy: 90, w: 260, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L1@reasons', x: 1500, y: 230, w: 390, h: 250, size: 30, fill: '#efe3c4', anim: 'slideU', en: 'Why ask for reasons? The few who know won\'t tell.', zh: '何必追问原因？知道内情的少数人不会告诉你。' },
      { type: 'rule', at: 'L2@insider', x: 1500, y: 500, w: 390, h: 330, n: '!', size: 29, tag: '#b3302a', fill: '#f3c6c0', en: 'An insider may tell you when to buy. Never when to sell.', zh: '内部人也许会告诉你何时买。但绝不会告诉你何时卖。' }],
    lines: [
      N('The elementals. A rising stock needs no explanation; it takes continuous buying to keep it rising. While reactions stay small and natural, trail along.', '基本原理。上涨的股票不需要解释；要让它一直涨，就得有持续的买盘。只要回调小而自然，就跟着走。'),
      N('But if after a long rise it drifts down with only small rallies, the line of least resistance has changed. Why ask for reasons?', '但如果长期上涨之后，它开始下滑、只有微弱的反弹，最小阻力线就已经变了。何必追问原因？'),
      N('The few who know won\'t tell, or they call it cheap. An insider may tell a big trader when to buy, but never when to sell.', '知情的少数人不会说，或者干脆说它便宜。内部人也许会告诉大户何时买，却绝不会告诉他何时卖。'),
    ] });

  shot({ id: 'e12_boulevard', set: 'study', setOpts: { night: true, ticker: true, tickerX: 330 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 1000, y: 500, z: 1.1 }, { t: 'L1', x: 1080, y: 470, z: 1.22, dur: 3 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 2 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 1080, y: 870, s: 1.25, pose: 'relaxed', expr: 'neutral', lookX: -0.3,
      acts: [{ t: 'L0', pose: 'chin', expr: 'think' }, { t: 'L1', pose: 'explain', expr: 'frown' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'note', at: 'L1', x: 80, y: 120, w: 620, h: 250, size: 29, fill: '#f3c6c0', anim: 'slideU', en: 'Never 100% safe. And inside tips break a man faster than famine, pestilence, crop failures or political upheaval.', zh: '永远不会百分之百安全。内幕消息让人破产，比饥荒、瘟疫、歉收或政治动荡还快。' },
      { type: 'stamp', at: 'L2@asphalt', x: 1500, y: 260, en: 'NO ASPHALT BOULEVARD', zh: '没有柏油大道', size: 46, color: '#7a4a22' }],
    lines: [
      N('Years as an operator have convinced me: no man can consistently and continuously beat the stock market, though he may win in single stocks.', '多年操盘让我确信：没有人能持续不断地战胜股市，尽管他可能在个别股票上赢钱。'),
      N('Speculation can never be made a hundred percent safe. And inside tips will break a man faster than famine, pestilence, crop failures or political upheaval.', '投机永远不可能百分之百安全。而内幕消息让人破产的速度，比饥荒、瘟疫、歉收或政治动荡还快。'),
      N('There is no asphalt boulevard to success in Wall Street, or anywhere else. Why block the traffic any further?', '在华尔街，或在任何地方，都没有通往成功的柏油大道。何必再给自己添堵？'),
    ] });

  // ---- summary ----
  const R = (n, at, en, zh, row, o = {}) => Object.assign({ type: 'rule', at, x: 470, y: 222 + row * 125, w: 1400, h: 118, n: String(n), size: 32, en, zh }, o);
  lesson(h, { id: 'e12_rules', tag: ['TAKEAWAYS · EPISODE 12', '第12集 · 要点'], title: ['Reading Insiders, Brokers and the News', '看懂内部人、经纪商和新闻'], titleSize: 50,
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      R(1, 'L0', 'Your enemies: ignorance, greed, fear, hope, and misinformation.', '你的敌人：无知、贪婪、恐惧、希望，还有误导。', 0),
      R(2, 'L0@unnamed', 'An unnamed "prominent director" is a warning, not a source.', '不具名的"知名董事"是警报，不是消息来源。', 1),
      R(3, 'L1', 'A long decline is never a bear raid. Something is wrong: get out.', '长期下跌绝非打压。必有问题：离场。', 2),
      R(4, 'L1@six', 'The market looks 6–9 months ahead. Today\'s earnings prove nothing.', '市场领先6–9个月。眼前的盈利说明不了什么。', 3),
      R(5, 'L2', 'Made easy to buy? Ask who is selling.', '让你买得太容易？问问是谁在卖。', 4, { tag: '#b3302a' })],
    lines: [
      N('In brief: your enemies are ignorance, greed, fear, hope, and misinformation. An unnamed insider is a warning, not a source.', '简而言之：你的敌人是无知、贪婪、恐惧、希望，还有误导。不具名的内部人是警报，不是消息来源。'),
      N('A long decline is never a bear raid. And the market looks six to nine months ahead.', '长期下跌从来不是空头打压。市场总是领先六到九个月。'),
      N('When someone makes a stock easy to buy, ask who is selling.', '当有人让一只股票变得特别好买时，问问是谁在卖。'),
    ] });
  lesson(h, { id: 'e12_mistakes', tag: ['MISTAKE REVIEW · CHAPTERS XXIII–XXIV', '错误复盘 · 第二十三至二十四章'], tagColor: '#b3302a', title: ['Mistake, Cause, Rule', '错误、原因、规则'],
    gest: ['explain', 'explainR'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 225, w: 1400, widths: [0.36, 0.30, 0.34], size: 28, bottom: 840,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [
        [['Held on because insiders blamed a "bear raid"', '因内部人说"空头打压"而死守'], ['Trusted anonymous statements', '轻信匿名的说法'], ['Falls with feeble rallies? Sell. Don\'t ask why', '下跌且反弹无力？卖出，别问原因']],
        [['Bought on a market letter about today\'s earnings', '凭市场通讯里的眼前盈利买入'], ['Looked at now, not 6–9 months ahead', '只看眼前，不看6–9个月后'], ['Ask: will earnings hold that far ahead?', '问：盈利能维持那么久吗？']],
        [['Bought what brokers were paid to push', '买了经纪商受托推销的股票'], ['Missed the calls, the put and the "gifts"', '没看穿看涨、看跌期权和"礼物"'], ['Made easy to buy? Ask who is selling', '买得太容易？问问谁在卖']],
        [['Took an insider\'s tip to buy', '听内部人的消息买入'], ['He never says when to sell', '他从不告诉你何时卖'], ['Trade your own reading of the tape', '按自己对纸带的解读交易']]],
      rowAt: ['L0@holding', 'L0@buying', 'L1', 'L1@taking'] }],
    lines: [
      N('The mistakes: holding on because insiders blamed a bear raid, and buying on today\'s earnings.', '错误复盘：因为内部人归咎于空头打压而死守，以及凭眼前的盈利买入。'),
      N('Buying what brokers were paid to push. And taking an insider\'s tip, when he will never tell you when to sell.', '买入经纪商受托推销的股票。还有听信内部人的消息，而他永远不会告诉你何时该卖。'),
    ] });
};
