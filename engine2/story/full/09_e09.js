// Full version, episode 9: warnings, not breaks. Hunches and ticker-sense, Steel vs. Utah, the professional attitude
// (wheat 1922), group behaviour (Chester, Guiana Gold), the cotton reversal, and Tropical Trading / Equatorial. Book chapters XVII–XVIII.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(9, 'Reminiscences_E09_Warnings_Not_Breaks');
  chapter('Chapter XVII · Warnings', '第十七章 · 预警信号');
  music('calm');
  title({ id: 'e09_title', kicker: 'EPISODE 9 · 第9集', en: 'Warnings, Not Breaks', zh: '看预警，不等暴跌', color: '#2f5d8a',
    sub: ['Book chapters XVII–XVIII · cases up to 1922', '原著第十七至十八章 · 至1922年的案例'],
    lines: [N('Episode nine. Warnings, not breaks.', '第九集：看预警，不等暴跌。')] });

  // ---- the black cat, and what a hunch really is ----
  shot({ id: 'e09_cat', set: 'home', trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'friend', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'larry', z: 1.35, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'cross', expr: 'smile',
        acts: [{ t: 'L1', pose: 'shrug', expr: 'laugh' }, { t: 'L2', pose: 'explain', expr: 'tired' }, { t: 'L3', pose: 'chin', expr: 'think' }] },
      { id: 'friend', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'grin',
        acts: [{ t: 'L1', pose: 'pointUp', expr: 'laugh' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }, { t: 'L3', pose: 'chin', expr: 'think' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'A friend\'s favourite story: the black cat.', zh: '朋友最爱讲的故事：黑猫。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 900, y: 70, w: 640, tx: 1250, ty: 590, en: 'The cat told him to sell! He was grouchy till he\'d sold every share!', zh: '是猫叫他卖的！不卖光每一股，他就一直闷闷不乐！' },
      { type: 'sfx', screen: true, at: 'L1', until: 'L2', x: 1720, y: 210, text: 'MEOW!', zh: '喵！', size: 80, color: '#3a3d46', font: 'cond', rot: 8 },
      { type: 'note', at: 'L2@Washington', x: 1220, y: 110, w: 660, h: 150, size: 30, anim: 'slideU',
        en: 'In fact: a failed trip to Washington to argue for a fair stock tax', zh: '实情：他去华盛顿为合理的股票交易税游说，无功而返' },
      { type: 'note', at: 'L3@warnings', x: 1220, y: 280, w: 660, h: 160, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'Many small warnings, none clear alone: old traders called it "ticker-sense"', zh: '许多细小预警，单看都不明确：老交易员称之为"盘感"' }],
    lines: [
      N('A friend loves to say a black cat at his breakfast table told me to sell my whole line, near the very top.', '一位朋友总爱讲：在他家早餐桌上，一只黑猫叫我卖光全部持仓，结果我几乎卖在了最高点。'),
      L('friend', 'The cat told him to sell! He was grouchy till he\'d sold every share!', '是猫叫他卖的！不卖光每一股，他就一直闷闷不乐！', { speak: 'friend' }),
      N('There was no cat. I was in Washington, failing to convince Congressmen not to tax us to death.', '根本没有什么猫。我当时在华盛顿，没能说服议员们别用重税把我们逼上绝路，心情自然不好。'),
      N('I do get sudden urges to get out. I think they come from many small warnings, none clear enough alone.', '我确实会突然产生离场的冲动。我认为那来自许多细小的预警信号，单看哪一个都不够明确。'),
    ] });
  lesson(h, { id: 'e09_steel', tag: ['ADD ONLY TO WHAT ACTS RIGHT', '只给走势正确的股票加仓'], title: ['U.S. Steel vs. Utah Copper', '美国钢铁 vs. 犹他铜业'],
    gest: ['explain', 'up', 'explainR', 'point', 'explain'], expr: [null, 'smile', null, null, 'smile'],
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 640, h: 620, title: ['Shares he held', '他的持股'], max: 72000, vsize: 32,
        bars: [{ v: 5000, vl: '5,000', en: 'Utah @ ≈114: stops', zh: '犹他≈114：停手', at: 'L0@five', color: '#9a9182' },
          { v: 20000, vl: '20,000', en: 'Steel, day 1', zh: '钢铁，第1天', at: 'L1@twenty', color: '#c9a26a' },
          { v: 72000, vl: '72,000', en: 'Steel, full line', zh: '钢铁，满仓', at: 'L1@seventy', color: '#2f6b3d' }] },
      { type: 'stamp', at: 'L2', until: 'L3', x: 1500, y: 330, en: 'NOT YET! NOT YET!', zh: '还没到！还没到！', size: 60 },
      { type: 'table', at: 'L3', x: 1140, y: 220, w: 750, widths: [0.38, 0.62], size: 30, bottom: 560,
        cols: [['Sell-out day', '清仓那天'], ['How it filled', '成交情况']],
        rows: [[['Steel, 72,000', '钢铁7.2万股'], ['Average 1 point from the top', '均价离最高点仅1个点']],
          [['Utah, 5,000', '犹他5,000股'], ['Broke 5 points as he sold', '一卖就跌了5个点']]],
        rowAt: ['L3', 'L3@Utah'], hl: ['L3+0.6', null] },
      { type: 'counter', at: 'L4', x: 1515, y: 700, from: 0, to: 1500000, prefix: '≈$', size: 96, dur: 1.6, color: '#2f6b3d', label: ['total profit', '总利润'] }],
    lines: [
      N('Early in that bull market I bought five thousand Utah Copper around 114, and stopped. It didn\'t act right.', '那轮牛市初期，我在114左右买了五千股犹他铜业，然后停手了。它的走势不对。'),
      N('Steel, near the same price, did act right: twenty thousand the first day, then on up to seventy-two thousand.', '钢铁股价格差不多，走势却对路：第一天就买了两万股，之后一路加仓到七万二千股。'),
      N('The tape kept saying: not yet! Then one morning the market could absorb anything, and I sold all my Steel.', '纸带一直在说：还没到！直到一天早上，市场什么都吞得下，我卖光了钢铁股。'),
      N('It averaged a point from the top. That same hour, my five thousand Utah broke five points.', '平均成交价离最高点只差一个点。同一个小时，我那五千股犹他铜业一卖就跌了五个点。'),
      N('Profit: about a million and a half. Big lines sell only when the market can take them.', '利润约一百五十万美元。大仓位只能在市场接得住的时候卖。'),
    ] });
  shot({ id: 'e09_doctor', set: 'study', setOpts: { ticker: true, tickerX: 300 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1@know', x: 900, y: 480, z: 1.12, dur: 2 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.5 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 720, y: 880, s: 1.2, pose: 'explain', expr: 'neutral',
      acts: [{ t: 'L0@diagnose', pose: 'pointUp', expr: 'think' }, { t: 'L1', pose: 'explainR', expr: 'neutral' }, { t: 'L1@know', pose: 'fist', expr: 'determined' }, { t: 'L2', pose: 'explain', expr: 'smile' }] }],
    items: [
      { type: 'flow', dir: 'v', at: 'L0', x: 1180, y: 110, w: 700, bh: 92, gap: 34, size: 28, nodes: [
        { en: 'Learn the theory', zh: '学习理论', at: 'L0' },
        { en: 'Observe and classify cases', zh: '观察并归类病例', at: 'L0@observing' },
        { en: 'Diagnose', zh: '诊断', at: 'L0@diagnose' },
        { en: 'Treat at once, from experience', zh: '凭经验立即施治', at: 'L1', color: '#cfe3c4' }] },
      { type: 'note', at: 'L1@know', x: 1180, y: 570, w: 700, h: 120, size: 28, fill: '#f3c6c0', anim: 'slideU',
        en: '"A man may know what to do and lose money, if he doesn\'t do it quickly enough."', zh: '"一个人可能明知该怎么做却仍然亏钱，只因做得不够快。"' },
      { type: 'note', at: 'L2', x: 1180, y: 710, w: 700, h: 110, size: 30, fill: '#f6d77a', align: 'center', anim: 'slideU',
        en: 'Observation · Experience · Memory · Mathematics', zh: '观察 · 经验 · 记忆 · 数学' }],
    lines: [
      N('A trader is trained like a doctor: years of theory, then years of observing and classifying cases, until he can diagnose.', '交易者的训练就像医生：先学多年理论，再花多年观察、归类病例，直到能够诊断。'),
      N('Then he acts at once, and people call it instinct. It is experience. A man may know what to do and lose money, if he doesn\'t do it quickly enough.', '然后他当机立断，旁人称之为本能，其实那是经验。一个人可能明知该怎么做，却还是亏钱，因为他做得不够快。'),
      N('Observation, experience, memory and mathematics. Bet on probabilities, and never stop studying general conditions.', '观察、经验、记忆和数学。押注于概率，永远不要停止研究整体形势。'),
    ] });

  // ---- wheat, 1922: from facts to a test ----
  photo({ id: 'e09_wheat', src: `${PD}/wheat_harvest_kansas_c1900.jpg`, credit: 'A Kansas wheat field, c.1900 · Library of Congress (public domain)',
    cap: ['Historical note: 1922 brought a national coal strike and a railroad shopmen\'s strike.', '历史注：1922年，美国爆发全国煤矿罢工和铁路工人罢工。'], capW: 660,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 1000, y: 520, z: 1.14 }],
    items: [{ type: 'note', at: 'L1@delayed', x: 1180, y: 600, w: 680, h: 190, size: 30, fill: '#f6d77a', anim: 'slideU',
      en: 'Late winter wheat + early spring wheat arrive together → who will buy?', zh: '迟到的冬小麦＋提前的春小麦一起上市→谁来买？' }],
    lines: [
      N('That attitude at work: wheat, in 1922. Reports showed a normal winter crop, and a bigger, earlier spring crop.', '来看这种职业态度的实战：1922年的小麦。报告显示，冬小麦产量正常，春小麦更多，收获也更早。'),
      N('I thought at once of the coal and railroad strikes. Delayed winter wheat would arrive with the early spring crop. Who would buy?', '我立刻想到了煤矿罢工和铁路工人罢工。被耽误的冬小麦，会和提前收获的春小麦一起涌进市场。谁会来买？'),
    ] });
  lesson(h, { id: 'e09_test', tag: ['METHOD · TEST THE MARKET', '方法 · 试探市场'], title: ['Take the Market\'s Pulse Before You Press', '加码之前，先给市场把脉'], titleSize: 50,
    gest: ['explain', 'point', 'pointUp', 'up'], expr: [null, 'think', 'determined', 'smile'],
    items: [
      { type: 'table', at: 'L0@million', x: 470, y: 220, w: 980, widths: [0.27, 0.37, 0.36], size: 29, bottom: 840,
        cols: [['Order', '下单'], ['Size, bushels', '数量（蒲式耳）'], ['Price response', '价格反应']],
        rows: [
          [['Normal market', '正常市场'], ['1,000,000', '100万'], ['Within ¼¢', '波动不超过¼美分']],
          [['Test 1', '试探一'], ['250,000', '25万'], ['−¼¢: not conclusive', '跌¼美分：说明不了什么']],
          [['Test 2', '试探二'], ['250,000, in 10–15,000 driblets', '25万，以1万至1.5万零星成交'], ['−1¼¢: no buying power', '跌1¼美分：没有买盘']],
          [['Press', '加码'], ['2,000,000 + 2,000,000', '200万＋200万'], ['Slumps 6¢, keeps falling', '暴跌6美分，继续下行']]],
        rowAt: ['L0@million', 'L1', 'L2', 'L3'], hl: [null, null, 'L2@power', 'L3@slumped'] },
      { type: 'equation', at: 'L1', x: 1670, y: 330, size: 54, terms: [{ t: '¼¢', zh: '试探一', at: 'L1@quarter' }, { t: '→', at: 'L2' }, { t: '1¼¢', zh: '试探二', at: 'L2@cent', hl: true }] },
      { type: 'equation', at: 'L2@power', x: 1670, y: 480, size: 48, terms: [{ t: '5× the drop', zh: '同样数量，五倍跌幅', at: 'L2@power', hl: true, color: '#b3302a' }] },
      { type: 'note', at: 'L0', x: 1480, y: 580, w: 410, h: 250, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: '"You can\'t tell till you bet." (Pat Hearne)', zh: '"不下注，就不知道。"（帕特·赫恩）' }],
    lines: [
      N('As old Pat Hearne said, you can\'t tell till you bet. Normally a million bushels trade within a quarter cent.', '但正如老帕特·赫恩所说：不下注就不知道。正常情况下，一百万蒲式耳的买卖，价格波动不超过¼美分。'),
      N('My first test: two hundred and fifty thousand bushels. The price dropped a quarter cent. Not conclusive.', '第一次试探：二十五万蒲式耳。价格跌了¼美分，还说明不了什么。'),
      N('The second quarter million went in driblets of ten or fifteen thousand, and the price fell a cent and a quarter. No buying power.', '第二批二十五万，是一万、一万五地零星成交的，价格却跌了1¼美分。没有买盘。'),
      N('So I sold two million bushels, and days later two million more. Wheat slumped six cents, and kept on down.', '于是我卖出两百万蒲式耳，几天后又卖了两百万。小麦暴跌六美分，并且继续下行。'),
    ] });

  // ---- group behaviour: Chester ----
  shot({ id: 'e09_group', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['BLACKWOOD · PTS/DAY', 'CHESTER · PTS/DAY'], ['+1', 'flat']],
      boardSeq: [{ t: 'L0@rising', r: 1, c: 0, v: '+3' }, { t: 'L0@day', r: 1, c: 0, v: '+2' }, { t: 'L2@down', r: 1, c: 1, v: 'DOWN' }] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'broker', z: 1.35, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'friend', key: 'cust', x: 650, y: 890, s: 1.15, pose: 'hips', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L1e', pose: 'up', expr: 'grin' }, { t: 'L2@down', pose: 'despair', expr: 'shock' }] },
      { id: 'manager', key: 'broker', x: 1100, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'smile',
        acts: [{ t: 'L1', pose: 'pointL', expr: 'grin' }, { t: 'L2', pose: 'shrug', expr: 'worry' }] },
      { id: 'larry', x: 1640, y: 900, s: 1.0, flip: true, z: -1, pose: 'chin', expr: 'think', lookX: -1,
        acts: [{ t: 'L2@insiders', pose: 'cross', expr: 'sly' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'A commission house during the motor boom.', zh: '汽车股热潮中的一家经纪行。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 760, y: 70, w: 640, tx: 1100, ty: 600, en: 'Buy Chester! It\'s the cheap one. It has to catch up with the group!', zh: '买切斯特！它便宜。它迟早要追上同板块！' }],
    lines: [
      N('Stocks of a group move together, so brokers push the laggard. I was long Blackwood Motors, rising one to three points a day.', '同一板块的股票往往同涨同跌，所以经纪商总劝客户买落后的那只。我当时持有黑木汽车，它每天涨一到三个点。'),
      L('manager', 'Buy Chester! It\'s the cheap one. It has to catch up with the group!', '买切斯特！它便宜。它迟早要追上同板块！', { speak: 'broker' }),
      N('The public bought Chester, and it went down. In that boom its insiders could easily have put it up. They didn\'t.', '公众买进切斯特，它却跌了。在那样的牛市里，内部人要拉抬它易如反掌。可他们没有。'),
    ] });
  lesson(h, { id: 'e09_chester', tag: ['GROUP BEHAVIOUR', '板块行为'], title: ['The Laggard Is a Warning, Not a Bargain', '落后股是预警，不是便宜货'], titleSize: 50,
    gest: ['chin', 'point', 'explainR', 'pointUp'], expr: ['think', 'determined', null, 'smile'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 960, h: 620, xr: [0, 10], yr: [50, 140], yTicks: [], illustrative: true, cursorLabel: false,
        title: ['One motor group, two stocks', '同一汽车板块的两只股票'],
        series: [
          { pts: [[0, 80], [2, 92], [4, 104], [6, 116], [8, 126], [10, 136]], color: '#2f6b3d', label: ['Blackwood: the leader', '黑木：领头股'], draw: [['L0', 5]] },
          { pts: [[0, 80], [2, 81], [4, 78], [6, 76], [7, 75], [8, 73], [9, 66], [10, 54]], color: '#b3302a', dash: '16 10', label: ['Chester: the laggard', '切斯特：落后股'], draw: [['L0', 2], ['L1', 4], ['L2', 7]] }],
        marks: [{ x: 4, y: 78, at: 'L0@volume', en: 'Public buys; it slips anyway', zh: '公众买入，它照跌不误', dx: -300, dy: 60, w: 260 },
          { x: 6, y: 76, at: 'L1@inside', en: 'Inside selling: he sells short', zh: '内部人在卖：他做空', dx: -40, dy: -170, w: 270, fill: '#f3c6c0' },
          { x: 10, y: 54, at: 'L2', en: 'Breaks wide open. The reason comes later', zh: '彻底崩盘，原因事后才公布', dx: -420, dy: -50, w: 290, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L0', x: 1460, y: 220, w: 430, h: 300, size: 29, anim: 'slideU',
        en: 'Insiders not lifting it in a boom: buying cheap? (volume says no) Or afraid of getting stock?', zh: '牛市里内部人不拉抬：想低价吸筹？（成交量说不是）还是怕接到筹码？' },
      { type: 'rule', at: 'L3', x: 1460, y: 540, w: 430, h: 300, n: '!', tag: '#b3302a', fill: '#f6d77a', size: 31,
        en: '"I don\'t look out for the breaks; I look out for the warnings."', zh: '"我不盯暴跌，我盯预警。"' }],
    lines: [
      N('Why weren\'t Chester\'s insiders putting it up? To buy cheaper? The volume said no. Or were they afraid of getting stock?', '切斯特的内部人为什么不拉抬？为了更低价地吸筹？成交量说明不是。还是他们怕接到更多筹码？'),
      N('When the men who ought to want a stock don\'t want it, why should I? There was inside selling. I sold it short.', '连最该想要这只股票的人都不要它，我凭什么要？内部人在卖。我做空了它。'),
      N('One day it broke wide open. The reason came out after the break. The warning came before it.', '有一天它彻底崩了。原因是在暴跌之后才公布的，而预警早在暴跌之前就出现了。'),
      N('I don\'t look out for the breaks. I look out for the warnings.', '我不去盯暴跌，我盯的是预警。'),
    ] });

  // ---- Guiana Gold ----
  photo({ id: 'e09_curb', src: `${PD}/broad_st_curb_brokers_1916.jpg`, credit: 'Curb brokers on Broad Street, c.1916 · Irving Underhill, Library of Congress (public domain)',
    cap: ['The Curb market on Broad Street, c.1916. Guiana Gold sold here before its listing.', '约1916年，布罗德街上的场外市场。圭亚那黄金上市前就在这里交易。'], capW: 660,
    kb: [{ t: 0, x: 960, y: 520, z: 1.02 }, { t: 12, x: 930, y: 500, z: 1.14 }],
    items: [{ type: 'note', at: 'L0@listed', x: 1200, y: 560, w: 660, h: 140, size: 32, fill: '#f6d77a', anim: 'slideU',
      en: 'Curb ≈50 → listed ≈35 → broke 20', zh: '场外≈50→上市≈35→跌破20' }],
    lines: [
      N('Guiana Gold followed the same script. It sold near 50 on the Curb, listed around 35, and finally broke 20.', '圭亚那黄金走的是同一个剧本。它在场外市场卖到50左右，上市时约35，最终跌破了20。'),
      N('Belle Isle Exploration had advanced it over ten million dollars, for bonds and two hundred and fifty thousand of its million shares.', '贝尔岛勘探公司曾预付给它一千多万美元，换来债券和它一百万股中的二十五万股。'),
    ] });
  lesson(h, { id: 'e09_guiana', tag: ['CASE STUDY · GUIANA GOLD', '案例 · 圭亚那黄金'], title: ['No Inside Buying, No Reason to Own It', '没有内部人买，就没有理由持有'], titleSize: 50,
    gest: ['explain', 'point', 'explainR', 'pointUp'], expr: [null, null, 'sly', 'determined'],
    items: [
      { type: 'flow', dir: 'v', at: 'L0', x: 470, y: 220, w: 560, bh: 132, gap: 20, size: 27, nodes: [
        { en: 'Bankers get a call on 250,000 shares at 36', zh: '银行家拿到25万股、每股36的认购权', at: 'L0' },
        { en: 'A pro would get ⅓ of profit above 36: they save his fee', zh: '职业操盘手要拿36以上利润的⅓：他们省下这笔', at: 'L0@fee' },
        { en: 'Their pool takes the stock at 41: +5 points to the bankers', zh: '自家资金池按41接手：先让银行家赚5点', at: 'L0@41' },
        { en: 'Public buys ≈400,000 shares, up to 47', zh: '公众买进约40万股，一路买到47', at: 'L1', color: '#f3c6c0' }] },
      { type: 'chart', at: 'L1', x: 1060, y: 220, w: 830, h: 620, xr: [0, 10], yr: [15, 52], yTicks: [20, 35, 47], illustrative: true, cursorLabel: false,
        title: ['Guiana Gold, listed', '上市后的圭亚那黄金'],
        series: [{ pts: [[0, 35], [1.5, 41], [3, 47], [4, 43], [5, 37], [6, 35], [7, 31], [8, 27], [9, 22], [10, 19]], color: '#b8862a',
          draw: [['L1', 2], ['L1@sagged', 4], ['L2', 6], ['L3', 9]] }],
        marks: [{ x: 5, y: 37, at: 'L1@sagged', en: '−10 pts while gold stocks are strong', zh: '黄金股走强时，它跌了10点', dx: 50, dy: -130, w: 240, fill: '#f3c6c0' },
          { x: 6, y: 35, at: 'L2@cheap', en: '"Cheap at 35", dividend still paid', zh: '"35真便宜"，股息照付', dx: -330, dy: 60, w: 240 },
          { x: 10, y: 19, at: 'L3', en: 'News: barren rock. Breaks 20', zh: '消息：挖到废石。跌破20', dx: -560, dy: -20, w: 240, fill: '#f3c6c0' }] }],
    lines: [
      N('Bankers got a call on those shares at 36. To save a professional\'s fee, they ran their own pool, putting the stock in at 41.', '银行家拿到了这批股票每股36美元的认购权。为省下职业操盘手的佣金，他们自组资金池，按41接手。'),
      N('The public bought about four hundred thousand shares, up to 47. Then, with the gold group strong, Guiana sagged ten points.', '公众一路买到47，共买了约四十万股。随后，在黄金板块走强时，圭亚那却跌了十个点。'),
      N('It acted like Chester. I sold, and it went down. I sold more. Outsiders thought it cheap at 35, with the dividend still paid.', '它的表现和切斯特如出一辙。我卖，它跌；我再卖。外行却觉得35很便宜，何况股息照付。'),
      N('Then the news: barren rock, not rich ore. I had sold long before, on behaviour. No inside buying.', '随后消息传来：挖到的是废石，而不是富矿。我早就根据走势卖出了：根本没有内部人买盘。'),
    ] });

  // ---- cotton: wrong, out, then right ----
  shot({ id: 'e09_hotsprings', set: 'veranda', trans: 'iris', music: 'dark', hold: 2.5,
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.35, dur: 1.4 }, { t: 'L1e', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.2, pose: 'hold', expr: 'neutral', prop: { t: 'paper', text: 'COTTON' },
      acts: [{ t: 'L0@neglected', pose: 'relaxed', expr: 'smile' }, { t: 'L0@loss', pose: 'hold', expr: 'worry' }, { t: 'L1', pose: 'despair', expr: 'shock' }, { t: 'L1@wrong', pose: 'chin', expr: 'think' }, { t: 'L1@covered', pose: 'fist', expr: 'determined' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Hot Springs, on holiday. A cotton short he had neglected.', zh: '温泉城度假。一笔被他冷落的棉花空单。' },
      { type: 'counter', at: 'L0@two', x: 1500, y: 300, from: 0, to: -250000, fmt: '$', size: 96, dur: 1.4, color: '#b3302a', label: ['loss on 50,000 bales short', '五万包空单的亏损'],
        steps: [{ t: 'L1@million', v: -1000000, dur: 1.4 }] },
      { type: 'equation', at: 'L1e', x: 1420, y: 640, size: 40, terms: [
        { t: '$1M', zh: '亏损', at: 'L1e' }, { t: '÷ 50,000 bales', zh: '五万包', at: 'L1e+0.4' },
        { t: '= $20/bale', zh: '每包20美元', at: 'L1e+0.8' }, { t: '≈ 400 pts', zh: '约400点（每包约500磅）', at: 'L1e+1.2', hl: true }] }],
    lines: [
      N('Another time I was short stocks and fifty thousand bales of cotton. Busy with stocks, I neglected the cotton, waiting for a reaction. The loss grew to two hundred and fifty thousand dollars.', '另一次，我同时做空股票和五万包棉花。忙着股票，我冷落了棉花，总想等回调再平仓。结果亏损涨到了二十五万美元。'),
      N('At Hot Springs I was a million to the bad. I told myself: I must be wrong. With me, feeling wrong and getting out are one act. I covered.', '到了温泉城，我已亏了一百万。我对自己说：我一定错了。对我来说，意识到错和离场是同一个动作。我平了仓。'),
    ] });
  lesson(h, { id: 'e09_cotton', tag: ['WHEN THE EVIDENCE FLIPS', '当证据反转时'], title: ['Cotton: Wrong, Out, Then Right Again', '棉花：做错，离场，再做对'], music: 'tense',
    gest: ['point', 'up', 'explainR', 'explain'], expr: ['think', 'determined', null, 'smile'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 220, w: 1000, widths: [0.3, 0.26, 0.44], size: 29, bottom: 840,
        cols: [['Where', '地点'], ['He sells', '他卖出'], ['Market response', '市场反应']],
        rows: [
          [['Hot Springs, after golf', '温泉城，打完球'], ['—', '—'], ['Off 50 pts. No rally!', '跌50点，没有反弹！']],
          [['Hot Springs', '温泉城'], ['10,000 bales', '1万包'], ['Off 50 more. No rally', '再跌50点，不反弹']],
          [['The lunch table', '午餐桌旁'], ['10,000 bales', '1万包'], ['Off 40 more', '再跌40点']],
          [['Washington', '华盛顿'], ['40,000 bales', '4万包'], ['Off 75: no support', '跌75点：毫无支撑']],
          [['Philadelphia', '费城'], ['Covers all', '全部平仓'], ['Small panic: loss made up', '小恐慌：亏损基本赚回']]],
        rowAt: ['L0', 'L1@ten', 'L1@lunch', 'L2', 'L2@Philadelphia'], hl: ['L0@didn', null, null, null, 'L3'] },
      { type: 'bars', at: 'L1@ten', x: 1500, y: 220, w: 390, h: 380, title: ['Re-short, bales', '重新做空（包）'], max: 60000, vsize: 30,
        bars: [{ v: 10000, vl: '10,000', en: '1st', zh: '第一笔', at: 'L1@ten', color: '#c9a26a' },
          { v: 20000, vl: '20,000', en: '2nd', zh: '第二笔', at: 'L1@lunch', color: '#c9a26a' },
          { v: 60000, vl: '60,000', en: 'total', zh: '合计', at: 'L2', color: '#b3302a' }] },
      { type: 'note', at: 'L3@hunch', x: 1500, y: 620, w: 390, h: 220, size: 29, fill: '#cfe3c4', anim: 'slideU',
        en: 'Not a hunch: a change in behaviour. The line of least resistance turned down.', zh: '不是直觉，而是走势变了：最小阻力线掉头向下。' }],
    lines: [
      N('Next day, after golf, cotton was off 50 points. For weeks it had always rallied after selling. This time it didn\'t.', '第二天打完高尔夫，我看到棉花跌了50点。几个星期以来，每次被卖压打下去它都会反弹。这一次没有。'),
      N('My reason for covering was gone. I sold ten thousand bales: off 50 more. At lunch I jumped up, sold ten thousand more: off 40.', '我平仓的理由不存在了。我卖出一万包：又跌50点。午饭时我跳起身，再卖一万包：又跌40点。'),
      N('In Washington I sold forty thousand: off 75. In Philadelphia I found a small panic, and covered by telephone.', '在华盛顿，我又卖了四万包：跌75点。到费城时，棉花市场已出现小恐慌，我打电话全部平仓。'),
      N('I had practically made up my million. Not a hunch: the line of least resistance had turned down.', '那一百万的亏损我基本赚了回来。这不是直觉：最小阻力线已经掉头向下。'),
    ] });

  // ---- chapter XVIII: Tropical Trading ----
  chapter('Chapter XVIII · Tropical Trading', '第十八章 · 热带贸易');
  photo({ id: 'e09_florida', src: `${PD}/florida_houseboat_miami_river_1904_detroit.jpg`, credit: 'House boating on the Miami River, Florida, c.1904 · Detroit Publishing Co. (public domain)',
    cap: ['Florida, his winter fishing holiday. Quotations came only with the semi-weekly mail.', '佛罗里达，他每年冬天的钓鱼假期。行情只能靠每周两班的邮件送来。'], capW: 660,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 1000, y: 520, z: 1.14 }],
    items: [{ type: 'note', at: 'L1@155', x: 1200, y: 600, w: 660, h: 150, size: 32, fill: '#f6d77a', anim: 'slideU',
      en: 'TT: ≈140 → 155, while the general list is heavy', zh: '热带贸易：≈140→155，而大盘沉重' }],
    lines: [
      N('History repeats in Wall Street. Tropical Trading\'s insiders loved to coax the bears in, then squeeze them like a hydraulic press.', '华尔街的历史总在重演。热带贸易公司的内部人最爱引诱空头进场，再像液压机一样把他们挤爆。'),
      N('I was fishing in Florida when the mail came: TT at 155, up from about 140, against a heavy market. A capital blunder.', '我在佛罗里达钓鱼时，邮件送来了行情：大盘沉重，热带贸易却从140左右涨到了155。这是个大错。'),
    ] });
  shot({ id: 'e09_ttsell', set: 'office', trans: 'whip', music: 'rag',
    setOpts: { board: [['TROPICAL TRADING', 'HIS SHORT'], ['155', '0']],
      boardSeq: [{ t: 'L0@153', r: 1, c: 0, v: '153' }, { t: 'L0@153+0.3', r: 1, c: 1, v: '2,000' }, { t: 'L1', r: 1, c: 1, v: '4,000' }, { t: 'L1@then', r: 1, c: 1, v: '6,000' },
        { t: 'L1@ten', r: 1, c: 1, v: '10,000' }, { t: 'L2@133', r: 1, c: 0, v: '133' }, { t: 'L2@thirty', r: 1, c: 1, v: '30,000' }], hl: [1, 1] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1@happy', on: 'larry', z: 1.35, dur: 1.2 }, { t: 'L2', x: 960, y: 500, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.2, pose: 'hold', expr: 'determined', prop: { t: 'paper', text: 'TELEGRAM' },
        acts: [{ t: 'L0@Palm', pose: 'point', expr: 'sly' }, { t: 'L1@happy', pose: 'up', expr: 'grin' }, { t: 'L2', pose: 'cross', expr: 'determined' }] },
      { id: 'clerk', x: 1300, y: 890, s: 1.1, flip: true, pose: 'write', expr: 'neutral', lookX: -0.4, acts: [{ t: 'L1', pose: 'phone', expr: 'neutral' }, { t: 'L2', pose: 'write', expr: 'worry' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Palm Beach: the direct wire to New York.', zh: '棕榈滩：直通纽约的电报线。' }],
    lines: [
      N('I couldn\'t fish. I wired my brokers to sell two thousand at the market, and got 153. Then I moved to Palm Beach, for the wire.', '我再也钓不下去了，发电报让经纪人按市价卖出两千股，成交价153。随后我搬到棕榈滩，为的是那条直通纽约的电报线。'),
      N('I sold two thousand more, then two thousand more. I was happy only when I was selling it. Soon I was short ten thousand.', '我又卖了两千股，接着再卖两千股。只有在卖它的时候我才觉得痛快。很快，我做空了一万股。'),
      N('In New York the company\'s business confirmed my view. I kept testing and selling, until at 133 I was short thirty thousand.', '回到纽约，公司的实际经营印证了我的判断。我不断试探、不断卖出，到133时，我已做空三万股。'),
    ] });
  lesson(h, { id: 'e09_squeeze', tag: ['HOLDING THROUGH THE SQUEEZE', '顶住逼空'], title: ['Tropical Trading: Squeezed, and Staying Pat', '热带贸易：遭遇逼空，稳坐不动'], titleSize: 50, music: 'tense',
    gest: ['cross', 'explainR', 'point', 'fist'], expr: ['determined', null, 'sly', 'determined'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 980, h: 620, xr: [0, 10], yr: [125, 160], yTicks: [133, 140, 150, 153], illustrative: true, cursorFmt: 'int',
        title: ['Tropical Trading', '热带贸易'],
        series: [{ pts: [[0, 153], [2, 140], [3, 133], [4.5, 150], [5.5, 144], [6.5, 139], [7.5, 149], [8.5, 141], [10, 134]], color: '#7a4a22',
          draw: [['L0', 3], ['L0@squeezed', 4], ['L2', 6], ['L2@ten', 7], ['L3', 8]] }],
        marks: [{ x: 3, y: 133, at: 'L0', en: 'Short 30,000 by 133', zh: '到133时做空3万股', dx: -40, dy: 40, w: 240 },
          { x: 4.5, y: 150, at: 'L0@squeezed', en: 'Squeezed to 150: he stays pat', zh: '被逼空到150：他按兵不动', dx: -330, dy: -125, w: 270, fill: '#f3c6c0' },
          { x: 7.5, y: 149, at: 'L2@ten', en: '+10 on bull rumours: 149', zh: '利好传闻拉高10点：149', dx: -80, dy: -170, w: 240, fill: '#f3c6c0' },
          { x: 10, y: 134, at: 'L3', en: 'Reasons stronger than ever: holds', zh: '理由比以往更充分：持有', dx: -300, dy: 60, w: 240, fill: '#cfe3c4' }] },
      { type: 'note', at: 'L1', x: 1480, y: 220, w: 410, h: 300, size: 30, anim: 'slideU',
        en: '"Courage is confidence to act on the decision of your mind." (Dickson G. Watts)', zh: '"勇气，就是按自己头脑的决定行事的信心。"（迪克森·G·瓦茨）' },
      { type: 'note', at: 'L1@character', x: 1480, y: 540, w: 410, h: 300, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'Price alone doesn\'t prove you wrong. The character of the move does.', zh: '单凭价格证明不了你错，走势的性质才能。' }],
    lines: [
      N('The public bought the dip as a bargain, the floating supply shrank, and the insiders squeezed it up to 150. I stayed pat.', '公众把回调当成捡便宜，流通筹码随之减少，内部人趁机逼空，把价格推到150。我稳坐不动。'),
      N('Dickson Watts said courage is confidence to act on your decision. A price alone doesn\'t prove me wrong. The character of the move does.', '迪克森·瓦茨说，勇气就是按自己的决定行事的信心。单凭价格证明不了我错，走势的性质才能。'),
      N('It broke 140. Then, on a flood of bull rumours, the insiders ran it up ten points, to 149.', '它跌破了140。随后，伴着满天飞的利好传闻，内部人又把它拉高了十个点，到149。'),
      N('My reasons for selling were stronger than ever. Basic conditions were fighting for me.', '我卖空的理由比以往任何时候都更充分。基本形势站在我这边。'),
    ] });
  shot({ id: 'e09_equatorial', set: 'floor', setOpts: { agitated: true, paperN: 16 }, trans: 'whip', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 't1', z: 1.35, dur: 1.0 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [
      { id: 'larryHat', key: 'larry', x: 650, y: 890, s: 1.2, pose: 'cross', expr: 'determined',
        acts: [{ t: 'L0@sold', pose: 'point', expr: 'sly' }, { t: 'L2', pose: 'hips', expr: 'smile' }] },
      { id: 'trader', key: 't1', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'neutral', prop: { t: 'tape' },
        acts: [{ t: 'L1', pose: 'pointL', expr: 'shout' }, { t: 'L2', pose: 'fist', expr: 'angry' }] },
      { id: 'friend', key: 't2', x: 1560, y: 900, s: 1.05, flip: true, z: -1, pose: 'idle', expr: 'neutral', acts: [{ t: 'L1e', pose: 'up', expr: 'shock' }] }],
    items: [
      { type: 'note', at: 'L0@thirty', until: 'L1', x: 1220, y: 110, w: 660, h: 160, size: 30, anim: 'slideU',
        en: 'Short 30,000 TT: as big a share of the floating supply as he thought wise', zh: '做空3万股热带贸易：已达他认为明智的流通盘比例上限' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 880, y: 70, w: 640, kind: 'shout', tx: 1250, ty: 590, en: 'Equatorial is breaking! The TT rally is a smoke screen. They\'re unloading!', zh: '赤道商业在暴跌！热带贸易的上涨是烟幕，他们在出货！' },
      { type: 'note', at: 'L2@tool', x: 1220, y: 110, w: 660, h: 160, size: 30, fill: '#f6d77a', anim: 'slideU',
        en: 'Same idea as selling oats to make traders bearish on corn (the Stratton corner)', zh: '与当年斯特拉顿逼空玉米时卖燕麦、让交易员看空玉米是同一招' }],
    lines: [
      N('Nobody believes a man short thirty thousand shares, but everyone believes the tape. So I sold about ten thousand Equatorial Commercial, a big holder of TT.', '没人会相信一个做空三万股的人，但人人都相信纸带。于是我没有加空热带贸易，而是卖空了约一万股赤道商业——它持有大量热带贸易股票。'),
      L('trader', 'Equatorial is breaking! The TT rally is a smoke screen. They\'re unloading!', '赤道商业在暴跌！热带贸易的上涨是烟幕，他们在出货！', { speak: 't1' }),
      N('Traders sold TT, the insiders stopped supporting it, and it fell. I covered Equatorial at a small profit. It was a tool, not a bet.', '交易员纷纷卖出热带贸易，内部人撤掉支撑，股价随之下跌。我小赚一笔平掉了赤道商业。它是工具，不是赌注。'),
    ] });
  shot({ id: 'e09_ttend', set: 'office', trans: 'wipe', music: 'tense',
    setOpts: { board: [['TROPICAL TRADING', 'THE MOVE'], ['125', 'big short interest']],
      boardSeq: [{ t: 'L0@twenty', r: 1, c: 1, v: '+20 to 25' }, { t: 'L1@120', r: 1, c: 0, v: '<120' }, { t: 'L1@120+0.2', r: 1, c: 1, v: 'first time in years' },
        { t: 'L1@110', r: 1, c: 0, v: '<110' }, { t: 'L1@par', r: 1, c: 0, v: '<100' }, { t: 'L2@90', r: 1, c: 0, v: '<90' }, { t: 'L2@90+0.2', r: 1, c: 1, v: 'demoralised' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L2@covered', on: 'larry', z: 1.35, dur: 1.2 }],
    cast: [
      { id: 'larry', x: 700, y: 890, s: 1.2, pose: 'cross', expr: 'determined',
        acts: [{ t: 'L0@cover', pose: 'hips', expr: 'determined' }, { t: 'L1', pose: 'point', expr: 'smile' }, { t: 'L2@covered', pose: 'up', expr: 'grin' }] },
      { id: 'clerk', x: 1320, y: 890, s: 1.1, flip: true, pose: 'write', expr: 'neutral', acts: [{ t: 'L1', pose: 'phone', expr: 'worry' }, { t: 'L2@covered', pose: 'write', expr: 'shock' }] }],
    items: [{ type: 'counter', at: 'L2@million', x: 1500, y: 300, from: 0, to: 1000000, prefix: '+$', suffix: '+', size: 96, dur: 1.6, color: '#2f6b3d', label: ['on 30,000 TT, for staying pat', '3万股热带贸易，靠稳坐不动'] }],
    lines: [
      N('Each time they pushed TT up, I sold Equatorial again. At 125 the short interest was so big they ran it up twenty or twenty-five points. I didn\'t cover.', '他们每次拉抬热带贸易，我就再卖空赤道商业。到125时，空头仓位大到他们能把股价拉高二十到二十五点。我没有平仓。'),
      N('Then general conditions won. TT went below 120 for the first time in years, then below 110, then below par.', '最终，整体形势占了上风。热带贸易多年来首次跌破120，接着跌破110，再跌破面值。'),
      N('One demoralised day it broke 90, and I covered all thirty thousand near the lows: over a million dollars.', '在一个人心涣散的日子里，它跌破了90，我在接近最低点处平掉了全部三万股。稳坐不动，让我赚了一百多万美元。'),
    ] });
  shot({ id: 'e09_ttlater', set: 'office', trans: 'whip', music: 'rag',
    setOpts: { board: [['TROPICAL TRADING', 'HIS POSITION'], ['150', 'none']],
      boardSeq: [{ t: 'L0@selling', r: 1, c: 1, v: 'SHORT' }, { t: 'L1@153', r: 1, c: 0, v: '153' }, { t: 'L1@153+0.2', r: 1, c: 1, v: 'COVERED' },
        { t: 'L1@156', r: 1, c: 0, v: '156' }, { t: 'L1@156+0.2', r: 1, c: 1, v: 'LONG' }, { t: 'L2@200', r: 1, c: 0, v: '200+' }], hl: [1, 1] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0@character', on: 'larry', z: 1.35, dur: 1.0 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [{ id: 'larry', x: 760, y: 890, s: 1.2, pose: 'chin', expr: 'think',
      acts: [{ t: 'L0@selling', pose: 'point', expr: 'determined' }, { t: 'L0@character', pose: 'hold', expr: 'shock' }, { t: 'L1@156', pose: 'up', expr: 'grin' }, { t: 'L2@held', pose: 'shrug', expr: 'tired' }] }],
    items: [
      { type: 'caption', at: 0.3, until: 'L1', en: 'A year later.', zh: '一年之后。' },
      { type: 'newspaper', screen: true, at: 'L2@Reports', x: 1480, y: 330, w: 560, h: 400, paper: 'The Daily Chronicle', en: 'TT ABOVE 200: LIVINGSTON SQUEEZED FOR MILLIONS?', zh: '热带贸易破200：利文斯顿被逼空损失数百万？', size: 40 },
      { type: 'stamp', screen: true, at: 'L2@long', x: 470, y: 250, en: 'LONG ALL THE WAY', zh: '其实一路做多', size: 56, color: '#2f6b3d' }],
    lines: [
      N('A year later TT hung around 150 for two weeks, in a tired market. I began selling. Then suddenly the character of the buying changed.', '一年后，热带贸易在150附近徘徊了两周，大盘疲软。我开始卖出。忽然间，买盘的性质变了。'),
      N('Insiders were buying in a falling market. There had to be a reason. At 153 I covered, and at 156 I went long.', '内部人在下跌的市场里买进，必有原因。我在153平仓，在156转为做多。'),
      N('It went above 200. Reports said I\'d been squeezed for eight or nine millions. I was long all the way, but held too long.', '它涨破了200。外面传说我被逼空，损失了八九百万。其实我一路做多，只是拿得太久，回吐了一些利润。'),
    ] });

  // ---- episode summary ----
  lesson(h, { id: 'e09_rules', tag: ['TAKEAWAYS · EPISODE 9', '第9集要点'], title: ['Five Rules: Read the Warnings', '五条规则：读懂预警'], music: 'calm',
    gest: ['explain', 'pointUp', 'explainR', 'explain'],
    items: [
      { type: 'rule', at: 'L0', x: 470, y: 220, w: 1420, h: 108, n: '1', size: 32, en: 'A hunch is experience: many small warnings adding up. Act quickly.', zh: '直觉就是经验：许多细小预警的叠加。要快速行动。' },
      { type: 'rule', at: 'L0@only', x: 470, y: 344, w: 1420, h: 108, n: '2', size: 32, en: 'Add only to what acts right. Sell a big line when the market can absorb it.', zh: '只给走势正确的加仓。大仓位要在市场接得住时卖。' },
      { type: 'rule', at: 'L1', x: 470, y: 468, w: 1420, h: 108, n: '3', size: 32, en: 'Test with small lots; let the response decide whether to press.', zh: '先小量试探，让市场反应决定是否加码。' },
      { type: 'rule', at: 'L2', x: 470, y: 592, w: 1420, h: 108, n: '4', size: 32, en: 'A laggard, or a stock its insiders won\'t buy, is a warning.', zh: '落后股，或内部人不肯买的股票，都是预警。' },
      { type: 'rule', at: 'L3', x: 470, y: 716, w: 1420, h: 108, n: '5', size: 32, tag: '#2f6b3d', fill: '#cfe3c4', en: 'Judge the character of a move, not the price alone.', zh: '判断走势的性质，而不只看价格。' }],
    lines: [
      N('Five rules. A hunch is experience adding up. Add only to what acts right; sell big lines into big markets.', '五条规则。直觉是经验的叠加。只给走势正确的加仓，大仓位要卖给大市场。'),
      N('Test with small lots, and let the market\'s response tell you whether to press.', '先小量试探，让市场的反应告诉你要不要加码。'),
      N('A laggard that won\'t follow its group, or a stock its insiders won\'t buy, is a warning.', '不跟随板块的落后股，或内部人不肯买的股票，都是预警。'),
      N('And judge the character of a move, not the price alone.', '还有，要判断走势的性质，而不只看价格。'),
    ] });
  lesson(h, { id: 'e09_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: '#b3302a', title: ['What Went Wrong, and the Rule', '错在哪里，规则是什么'],
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'table', at: 0.4, x: 470, y: 220, w: 1420, widths: [0.33, 0.33, 0.34], size: 29, bottom: 700,
        cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
        rows: [
          [['Neglected a losing cotton short', '放任亏损的棉花空单'], ['Busy with stocks: "wait for a reaction"', '忙于股票："等回调再说"'], ['A loss you ignore keeps growing', '置之不理的亏损只会扩大']],
          [['Ignored cotton\'s new highs', '无视棉花不断创新高'], ['Shut his eyes to the trend', '对趋势视而不见'], ['Respect the line of least resistance', '尊重最小阻力线']],
          [['Kept Utah, which never acted right', '留着走势一直不对的犹他'], ['Bullish on copper anyway', '照样看好铜业'], ['Hold only what acts right', '只持有走势正确的股票']],
          [['Held TT too long above 200', '在200以上把热带贸易拿太久'], ['Assumed insiders would act as he would', '以为内部人会照他的想法做'], ['Trade the facts, not what others ought to do', '依据事实，别猜别人该怎么做']]],
        rowAt: ['L0', 'L0@highs', 'L1', 'L1@TT'] },
      { type: 'note', at: 'L2', x: 470, y: 720, w: 1420, h: 110, size: 30, fill: '#f6d77a', align: 'center', anim: 'slideU',
        en: 'Following experience may fool you now and then. Ignoring it fools you every time.', zh: '听从经验，偶尔会上当；无视经验，每次都会出丑。' }],
    lines: [
      N('Mistake review. In cotton I neglected a losing short, and shut my eyes to its new highs.', '错误复盘。在棉花上，我放任一笔亏损的空单，对它不断创新高视而不见。'),
      N('I kept Utah, which never acted right. And I held TT too long, assuming insiders would do what I would do.', '我留着走势一直不对的犹他铜业。在热带贸易上，我又拿得太久，以为内部人会像我那样做。'),
      N('Following experience may fool you now and then. Not following it makes a fool of you every time.', '听从经验，偶尔会让你上当；不听从经验，每次都会让你出丑。'),
    ] });
};
