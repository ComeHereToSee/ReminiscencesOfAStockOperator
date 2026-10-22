// Full version, episode 1: The Bucket Shop Boy (Book ch. I–II, c. 1891–1900).
// Every number below is from the book; computed figures (e.g. 3,500 × 2¼ pts, the Hoboken payout) are arithmetic on the book's numbers.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(1, 'Reminiscences_E01_The_Bucket_Shop_Boy');
  chapter('Chapter I · The Bucket Shop Boy', '第一章 · 对赌行少年');
  music('rag');
  title({ id: 'e01_title', kicker: 'EPISODE 1 · 第一集', en: 'The Bucket Shop Boy', zh: '对赌行少年', color: '#b3302a',
    sub: ['Book chapters I–II · c. 1891–1900', '原著第一至二章 · 约1891–1900年'],
    lines: [N('Episode one. The bucket shop boy.', '第一集：对赌行少年。')] });

  // ---- quotation-board boy, and the little book ----
  shot({ id: 'e01_board', set: 'office', trans: 'wipe', music: 'calm',
    setOpts: { time: 15.2, board: [['BURLINGTON', 'SUGAR', 'WEST. UNION', 'ST. PAUL', 'READING'], ['113½', '105¼', '86⅛', '112¾', '36½'], ['113⅜', '105⅛', '86', '112½', '36⅜']],
      boardSeq: [{ t: 'L0@chalking', r: 1, c: 1, v: '105⅜' }, { t: 'L0@ticker', r: 1, c: 0, v: '113⅝' }, { t: 'L1', r: 1, c: 2, v: '86¼' }, { t: 'L1@habits', r: 1, c: 3, v: '112⅞' }] },
    cam: [{ t: 0, x: 960, y: 470, z: 1.0 }, { t: 'L1', on: 'boy', z: 1.3, dur: 2 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.2 }],
    cast: [{ id: 'boy', x: 600, y: 900, s: 1.25, pose: 'pointUp', expr: 'determined', lookY: -1,
        acts: [{ t: 'L1', pose: 'relaxed', expr: 'think', lookY: 0 }, { t: 'L2', pose: 'write', expr: 'neutral', lookY: 0.6 }, { t: 'L3@checked', pose: 'pointUp', expr: 'smile', lookY: 0 }] },
      { id: 'trader', key: 'cust', x: 1480, y: 900, s: 1.1, flip: true, pose: 'hold', expr: 'neutral', prop: { t: 'tape' }, until: 'L2', acts: [{ t: 'L0@ticker', pose: 'explain' }] }],
    items: [
      { type: 'caption', at: 0.4, until: 'L2', en: 'Age 14 · Quotation-board boy, 10 A.M. to 3 P.M.', zh: '14岁 · 报价板小弟，上午10点到下午3点' },
      { type: 'note', at: 'L2', x: 1000, y: 100, w: 860, h: 120, size: 30, fill: '#efe3c4', anim: 'slideU',
        en: 'A scorecard, not imaginary trades: hits and misses, kept about six months.', zh: '是记分卡，不是假想交易：记录猜中与猜错，坚持了约半年。' },
      { type: 'table', at: 'L3', x: 1000, y: 250, w: 860, widths: [0.26, 0.74], size: 28, bottom: 700,
        cols: [['When', '何时'], ['What he wrote', '记下什么']],
        rows: [
          [['Monday', '周一'], ['Stock + price: "acting as before an 8–10 pt break"', '股票与价格："走势如同以往下跌8–10点之前"']],
          [['Tue · Wed', '周二·周三'], ['What it ought to do', '它接下来应该怎么走']],
          [['Later', '之后'], ['Check the real tape: hit or miss?', '对照真实纸带：猜中还是猜错？']]],
        rowAt: ['L3', 'L3@Monday+0.8', 'L3@checked'] }],
    lines: [
      N('At fourteen I was quotation-board boy in a brokerage office, chalking up the prices called out from the ticker.', '十四岁时，我在一家经纪行当报价板小弟，有人从行情机上念出价格，我就用粉笔写上黑板。'),
      N('To me they were just numbers, always changing. And they had habits: before a move, a stock acted as it had before.', '在我眼里，它们只是不停变化的数字，而且有"习惯"：一只股票在变动之前，总会重复以前的表现。'),
      N('So I kept a little book: a record of my hits and misses.', '于是我准备了一个小本子：记录我猜中和猜错的次数。'),
      N('If a stock acted as it did before an eight- or ten-point break, I noted it Monday, and later checked the tape.', '如果一只股票的表现和它以往下跌八到十个点之前一样，我就在周一记下来，之后再对照纸带核对。'),
    ] });

  lesson(h, { id: 'e01_hollow', tag: ['METHOD 1 · READ THE TAPE', '方法一 · 读纸带'], title: ['What, Not Why', '只看"是什么"，不问"为什么"'],
    gest: ['explain', 'pointUp', 'point', 'explainR'],
    items: [
      { type: 'chart', at: 'L1', x: 470, y: 220, w: 900, h: 610, xr: [0, 6], yr: [-4, 4], yTicks: [-3, 0, 3], yFmt: 'int', ySuf: ' pts', illustrative: true, cursorLabel: false,
        title: ['Hollow Tube vs. the market (points)', '霍洛管业与大盘（点数变化）'], xTicks: [[0, 'start', '起点'], [4, 'that day', '当天'], [5.5, 'next Monday', '下周一']],
        series: [
          { pts: [[0, 0], [1, 0.6], [2, 1.3], [3, 2.0], [4, 2.6]], color: '#2f6b3d', label: ['Rest of the market', '大盘其他股票'], draw: [['L1@rallied', 4]] },
          { pts: [[0, 0], [1, -0.7], [2, -1.5], [3, -2.3], [4, -3]], color: '#b3302a', label: ['Hollow Tube', '霍洛管业'], draw: [['L1@Hollow', 4]] }],
        bands: [{ x0: 5, x1: 6, y0: -4, y1: 4, at: 'L2', color: '#d6a441' }],
        marks: [{ x: 4, y: -3, at: 'L1@fact', en: 'The fact: −3 pts while the market rose', zh: '事实：大盘涨，它跌3点', dx: -420, dy: -20, w: 320, fill: '#f3c6c0' },
          { x: 5.5, y: 3.2, at: 'L2', en: 'Reason: no dividend', zh: '原因：不派息', dx: -180, dy: 10, w: 260, fill: '#f6d77a' }] },
      { type: 'note', at: 'L0', x: 1400, y: 220, w: 490, h: 200, size: 30, anim: 'slideU',
        en: 'Buying a trifle better than selling. "The tape is your telescope."', zh: '买盘只比卖盘稍强一点。"纸带就是你的望远镜。"' },
      { type: 'counter', at: 'L0@seven', x: 1645, y: 500, from: 0, to: 7, suffix: ' in 10', size: 100, dur: 1.2, label: ['cases you can depend on', '可以依靠的比例'] },
      { type: 'note', at: 'L2@business', x: 1400, y: 650, w: 490, h: 170, size: 29, fill: '#f6d77a', anim: 'pop',
        en: 'Act on WHAT happens. The WHY may come weeks later.', zh: '根据"发生了什么"行动。"为什么"可能几周后才出来。' }],
    lines: [
      N('That was tape reading: spotting where the buying is a trifle better than the selling. It works seven times in ten.', '这就是读盘：找出买盘只比卖盘稍强一点的地方。十次里能对七次。'),
      N('And never ask why. Hollow Tube once fell three points while the market rallied. That was the fact.', '而且从不问为什么。有一次，大盘反弹时霍洛管业却跌了三个点。这是事实。'),
      N('The next Monday the dividend was passed: the reason. Insiders knew, and didn\'t buy. Your business with the tape is now.', '下一个周一，公司宣布取消分红：这才是原因。内部人早就知道，所以没有买。你跟纸带打交道，看的是现在。'),
    ] });

  // ---- the first trade ----
  shot({ id: 'e01_burlington', set: 'office', trans: 'whip', music: 'rag',
    setOpts: { time: 12.3, board: [['BURLINGTON', 'SUGAR', 'WEST. UNION', 'ST. PAUL', 'READING'], ['113½', '105¼', '86⅛', '112¾', '36½'], ['113⅜', '105⅛', '86', '112½', '36⅜']], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0', on: 'ob', z: 1.25, dur: 1.2 }, { t: 'L1', on: 'boy', z: 1.3, dur: 1.2 }, { t: 'L2', x: 960, y: 480, z: 1.05, dur: 1 }],
    cast: [{ id: 'officeboy', key: 'ob', x: 1250, y: 900, s: 1.15, flip: true, pose: 'explain', expr: 'grin', acts: [{ t: 'L1', pose: 'hips', expr: 'smile' }, { t: 'L2', pose: 'up', expr: 'laugh' }] },
      { id: 'boy', x: 720, y: 900, s: 1.15, pose: 'relaxed', expr: 'think', prop: { t: 'paper', text: 'MY BOOK' },
        acts: [{ t: 'L1', pose: 'hold', expr: 'think' }, { t: 'L1@chance', pose: 'point', expr: 'determined' }, { t: 'L2@profit', pose: 'up', expr: 'laugh' }] }],
    items: [
      { type: 'bubble', at: 'L0', until: 'L1', x: 1020, y: 70, w: 520, en: 'Five dollars buys five shares at the bucket shop!', zh: '在对赌行，五块钱就能做五股！', tx: 1250, ty: 612 },
      { type: 'note', at: 'L0@five', until: 'L2', x: 80, y: 110, w: 540, h: 150, size: 29, fill: '#efe3c4', anim: 'slideL',
        en: '$5 for 5 shares = $1 a share: a one-point margin.', zh: '5股交5美元＝每股1美元：1个点的保证金。' },
      { type: 'sfx', at: 'L2@profit', x: 960, y: 300, text: '+$3.12', zh: '第一笔盈利', size: 130, color: '#d6a441', font: 'cond' }],
    lines: [
      L('clerk', 'I\'ve got a dandy tip on Burlington. At the bucket shop I can trade five shares by putting up five dollars!', '我得到一个伯灵顿的绝妙消息。在对赌行，交五美元就能做五股！', { speak: 'ob' }),
      N('My little book said Burlington was acting as before a rise. A chance to test my figuring! I gave him all I had.', '我的小本子显示，伯灵顿正呈现上涨前的走势。这是检验我计算的好机会！我把全部的钱都给了他。'),
      N('Two days later we cashed in. My profit: three dollars and twelve cents.', '两天后我们兑现了。我赚了3.12美元。'),
    ] });

  lesson(h, { id: 'e01_ticket', tag: ['HOW IT WORKED', '机制拆解'], title: ['What Was a Bucket Shop?', '什么是对赌行？'], music: 'calm',
    gest: ['explain', 'explainR', 'point', 'pointUp', 'explain'],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 220, w: 1420, bh: 200, gap: 50, size: 27, nodes: [
        { num: 1, en: 'Hand the clerk your margin', zh: '把保证金交给职员', at: 'L0' },
        { num: 2, en: 'Ticket: last tape price + time', zh: '单据：纸带最后价格＋时间', at: 'L0@ticket' },
        { num: 3, en: 'No share is bought: a bet on the print', zh: '不买任何股票：赌的是打印价', at: 'L1', color: '#f3c6c0' },
        { num: 4, en: 'Close at the last price (next, if quiet). Margin gone = ticket dead', zh: '按最后价格平仓（冷门股等下一个）。保证金耗尽＝单据作废', at: 'L2' }],
        tokens: [{ from: 0, to: 1, at: 'L0@ticket', dur: 1.4, label: '$' }] },
      { type: 'ticket', at: 'L3@ticket', x: 680, y: 620, lines: ['BOUGHT 100', '@ 20¼', 'tape said 20'], head: 'A SMALLER SHOP', color: '#f3b9c6', rot: -5 },
      { type: 'equation', at: 'L3@20', x: 1330, y: 580, size: 46, terms: [
        { t: 'Buy at 20', zh: '20买入', at: 'L3@20' }, { t: '→', at: 'L3@20' }, { t: 'ticket 20¼', zh: '单据写20¼', at: 'L3@ticket', hl: true, color: '#b3302a' }] },
      { type: 'equation', at: 'L3@rise', x: 1330, y: 710, size: 46, terms: [
        { t: 'tape 21', zh: '纸带涨到21', at: 'L3@rise' }, { t: '→', at: 'L3@rise' }, { t: 'you get ¾', zh: '你只赚¾点', at: 'L3@three', hl: true }] },
      { type: 'note', at: 'L3e', x: 470, y: 760, w: 1420, h: 70, size: 26, fill: '#efe3c4', anim: 'slideU',
        en: 'Margins were shoestrings, as thin as ¾ point. The shop\'s profit lay in your being wiped.', zh: '保证金极薄，可能只有¾点。店家的利润就来自你被洗掉。' }],
    lines: [
      N('In a bucket shop you gave the clerk your money. He wrote the last price on the tape, and the time, on a ticket.', '在对赌行，你把钱交给职员，他把纸带上最后一个价格和时间写在一张单子上。'),
      N('No share was ever bought. You were betting against the house.', '从来没有真正买过一股。你是在跟店家对赌。'),
      N('To close, he marked the last price on your ticket, and the cashier paid. If the price ran past your margin, the ticket closed itself.', '平仓时，职员在单子上记下最后一个价格，出纳照单付钱。如果价格反向走完你的保证金，单子就自动作废。'),
      N('Small shops sometimes took both commissions up front: buy at 20, and your ticket read 20¼. A point\'s rise paid only three quarters.', '小店有时会预先扣掉买卖两笔佣金：20买入，单子上写的是20¼。涨一个点，你只拿到四分之三。'),
    ] });

  // ---- the boy plunger ----
  shot({ id: 'e01_mother', set: 'home', trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 500, z: 1.05 }, { t: 'L1', on: 'boy', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'mother', z: 1.35, dur: 1 }],
    cast: [{ id: 'mother', x: 650, y: 880, s: 1.15, pose: 'idle', expr: 'neutral', acts: [{ t: 'L1', expr: 'shock' }, { t: 'L2', pose: 'point', expr: 'worry' }] },
      { id: 'boy', x: 1250, y: 880, s: 1.15, flip: true, pose: 'relaxed', expr: 'smile', prop: { t: 'money' },
        acts: [{ t: 'L1', pose: 'hold', expr: 'grin' }, { t: 'L2', pose: 'shrug', expr: 'sad' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Lunch hours in the bucket shops. Then he quit his job.', zh: '午休时间泡在对赌行。后来他辞掉了工作。' },
      { type: 'counter', at: 'L1@thousand', x: 1560, y: 250, from: 0, to: 1000, prefix: '$', size: 100, dur: 1.4, label: ['his first thousand, age 15', '十五岁的第一个一千美元'] },
      { type: 'bubble', at: 'L2', x: 330, y: 80, w: 520, en: 'Put it in the savings bank, out of reach of temptation!', zh: '把它存进储蓄银行，别让诱惑够着它！', tx: 650, ty: 593 }],
    lines: [
      N('After that I traded on my lunch hour, playing a system, not a favourite stock. Soon I made more than my wages, so I quit.', '从那以后，我利用午休去交易，靠的是一套方法，而不是偏爱哪只股票。很快我赚的就比工资多，于是辞了工作。'),
      N('At fifteen I laid my first thousand dollars in cash in front of my mother.', '十五岁时，我把第一个一千美元现金放在了母亲面前。'),
      L('mother', 'Put it in the savings bank, out of reach of temptation!', '把它存进储蓄银行，别让诱惑够着它！', { speak: 'mother' }),
    ] });

  shot({ id: 'e01_robinson', set: 'office', trans: 'push', music: 'rag',
    setOpts: { windows: [-260, 2000], board: [['SUGAR', 'BURLINGTON', 'WEST. UNION', 'ST. PAUL', 'READING'], ['105¼', '113½', '86⅛', '112¾', '36½'], ['105⅛', '113⅜', '86', '112½', '36⅜']] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'manager', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'larry', z: 1.4, dur: 1 }, { t: 'L3', x: 960, y: 500, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'manager', x: 1250, y: 890, s: 1.2, flip: true, pose: 'idle', expr: 'neutral', prop: { t: 'phone' },
        acts: [{ t: 'L1@Head', pose: 'phone', expr: 'think' }, { t: 'L3', pose: 'pointL', expr: 'angry' }] },
      { id: 'larry', x: 720, y: 890, s: 1.2, pose: 'hips', expr: 'sly',
        acts: [{ t: 'L1', pose: 'explain', expr: 'smile' }, { t: 'L2', pose: 'hips', expr: 'grin' }, { t: 'L3@trimmed', pose: 'shrug', expr: 'laugh' }] }],
    items: [
      { type: 'stamp', at: 'L0@Plunger', until: 'L1', x: 1450, y: 330, en: 'THE BOY PLUNGER', zh: '少年赌徒', size: 70, rot: -8 },
      { type: 'note', at: 'L0@false', until: 'L1@Head', x: 80, y: 110, w: 560, h: 160, size: 29, fill: '#efe3c4', anim: 'slideL',
        en: 'Start light: 15–20 shares. Sometimes lose on purpose, then sting them.', zh: '先轻仓：15–20股。有时故意输几把，再狠狠赢一笔。' },
      { type: 'bubble', at: 'L2', until: 'L3', x: 450, y: 70, w: 540, en: 'Tell him I\'m a short fat man with dark hair and a bushy beard!', zh: '告诉他，我是个矮胖子，黑头发，满脸大胡子！', tx: 720, ty: 590 },
      { type: 'counter', at: 'L3@seven', x: 1560, y: 260, from: 0, to: 700, prefix: '+$', size: 100, dur: 1.2, color: '#2f6b3d', label: ['trimmed from the chain', '从连锁店赢走'] }],
    lines: [
      N('The shops called me the Boy Plunger and refused my money, so I used false names.', '对赌行管我叫"少年赌徒"，拒收我的钱，我只好用化名。'),
      N('At a hotel branch I was Edward Robinson, of Cambridge. Head office asked what I looked like.', '在一家酒店分店，我自称剑桥来的爱德华·罗宾逊。总部问我长什么样。'),
      L('larry', 'Tell him I\'m a short fat man with dark hair and a bushy beard!', '告诉他，我是个矮胖子，黑头发，满脸大胡子！', { speak: 'larry' }),
      N('He described me instead, and threw me out. I had trimmed them for seven hundred dollars.', '他却照实描述了我，然后把我轰了出去。我已经从他们那儿赢走了七百美元。'),
    ] });

  lesson(h, { id: 'e01_cosmo', tag: ['THE HANDICAP', '不平等条件'], title: ['The Cosmopolitan\'s Special Terms', '"大都会"对他的特殊条款'],
    gest: ['explain', 'point', 'explainR', 'relaxed'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 230, w: 880, widths: [0.3, 0.35, 0.35], size: 30, bottom: 540,
        cols: [['Term', '条款'], ['Other customers', '其他客户'], ['Livingston', '利文斯顿']],
        rows: [[['Margin', '保证金'], ['1 point', '1个点'], ['3 points', '3个点']], [['Premium', '溢价'], ['none', '无'], ['½ → 1 → 1½ pts', '½→1→1½点']]],
        rowAt: ['L0@three', 'L1@premium'], hl: ['L0@three', 'L1@premium'] },
      { type: 'bars', at: 'L1', x: 1390, y: 230, w: 500, h: 420, title: ['Shares $10,000 can carry', '1万美元能做多少股'], max: 10000, vsize: 30,
        bars: [{ v: 10000, vl: '10,000', en: '1-pt margin', zh: '1点保证金', at: 'L1', color: '#2f6b3d' }, { v: 3333, vl: '3,333', en: '3-pt margin', zh: '3点保证金', at: 'L1+0.6', color: '#b3302a' }] },
      { type: 'equation', at: 'L2', x: 910, y: 630, size: 48, terms: [
        { t: 'Steel 90', zh: '钢铁股90', at: 'L2' }, { t: 'normal 90⅛', zh: '普通单据', at: 'L2@not' }, { t: 'his 91⅛', zh: '他的单据', at: 'L2@but', hl: true, color: '#b3302a' }] },
      { type: 'note', at: 'L2@rise', x: 470, y: 710, w: 880, h: 120, size: 29, fill: '#f3c6c0', anim: 'slideU',
        en: 'Steel +1¼ → 91¼, and closing still showed him a loss.', zh: '钢铁股涨1¼点到91¼，他平仓仍然亏损。' },
      { type: 'counter', at: 'L3@ten', x: 1640, y: 715, from: 0, to: 10000, prefix: '$', size: 84, dur: 1.4, color: '#2f6b3d', label: ['cash, by age 20', '20岁时的现金'] }],
    lines: [
      N('At last only the Cosmopolitan, New England\'s richest shop, would take me: on three points of margin, not one.', '最后，只剩新英格兰最有钱的对赌行"大都会"还肯接我的单：保证金三个点，而不是一个点。'),
      N('That cut my trading power by two-thirds. Plus a premium: half a point, then a point, then a point and a half.', '这让我的交易能力减少了三分之二。再加上溢价：先是半个点，后来一个点，最后一个半点。'),
      N('With Steel at 90, my ticket read not 90⅛ but 91⅛. Steel could rise a point and a quarter and I\'d still lose.', '钢铁股在90时，我的单子上写的不是90⅛，而是91⅛。钢铁股涨了一又四分之一个点，我平仓还是亏的。'),
      N('Still, I won on balance. By twenty I had ten thousand in cash, and Mother wanted me in some regular business.', '即便如此，总体上我还是赢的。二十岁时，我有了一万美元现金，母亲却希望我去做份正经生意。'),
    ] });

  // ---- the Sugar trap ----
  shot({ id: 'e01_sugar', set: 'bucketshop', trans: 'whip', music: 'tense',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'WEST. UNION', 'STEEL'], ['105¼', '72⅛', '86', '44⅞'], ['105⅛', '72', '85⅞', '44¾']], hl: [1, 0], crowd: 6, tickets: true,
      boardSeq: [{ t: 'L1', r: 1, c: 0, v: '104' }, { t: 'L1@103', r: 1, c: 0, v: '103' }, { t: 'L4@108', r: 1, c: 0, v: '108' }] },
    cam: [{ t: 0, x: 960, y: 480, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.4, dur: 1.4 }, { t: 'L2@clicking', on: 'tom', z: 1.3, dur: 0.8 }, { t: 'L3', on: 'larry', z: 1.5, dur: 0.4 },
      { t: 'L4', x: 960, y: 500, z: 1.05, dur: 0.8 }],
    cast: [
      { id: 'friend', key: 'dave', x: 260, y: 900, s: 1.05, pose: 'hold', expr: 'neutral', prop: { t: 'tape' }, at: 'L2', acts: [{ t: 'L4@yelled', pose: 'up', expr: 'shock' }] },
      { id: 'larry', x: 640, y: 890, s: 1.2, pose: 'holdR', expr: 'neutral', prop: { t: 'ticket', text: 'SHORT SUGAR', sub: '3,500 @ 105¼' },
        acts: [{ t: 'L1@hesitated', pose: 'chin', expr: 'worry' }, { t: 'L2', pose: 'holdR', expr: 'think' }, { t: 'L3', pose: 'fist', expr: 'shout' }, { t: 'L4@yelled', pose: 'relaxed', expr: 'laugh' }] },
      { id: 'trader', key: 'henry', x: 1020, y: 900, s: 1.1, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L4@wiped', pose: 'despair', expr: 'shock' }] },
      { id: 'clerk', key: 'tom', x: 1420, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral',
        acts: [{ t: 'L2@clicking', pose: 'idle', expr: 'think', lookX: 0.6 }, { t: 'L3', expr: 'shock', lookX: 0 }, { t: 'L4', pose: 'write', expr: 'frown' }] }],
    items: [
      { type: 'caption', at: 0.3, w: 760, en: 'The Cosmopolitan. Short 3,500 Sugar @ 105¼, on seven 500-share tickets. Over $10,000 margin up.', zh: '大都会对赌行。在105¼做空3,500股糖业，七张500股的单子，押着一万多美元保证金。' },
      { type: 'sfx', at: 'L2@clicking', x: 1560, y: 320, text: 'CLICK-CLICK', zh: '电报声', size: 70, color: '#f3d27a' },
      { type: 'bubble', at: 'L3', until: 'L4', x: 420, y: 60, w: 420, kind: 'shout', en: 'Close Sugar!', zh: '平掉糖业！', tx: 640, ty: 590 },
      { type: 'bubble', at: 'L4@yelled', x: 100, y: 120, w: 400, kind: 'shout', en: 'Gosh! Sugar, 108!', zh: '天哪！糖业，108！', tx: 260, ty: 637 },
      { type: 'sfx', at: 'L4@108', x: 1100, y: 250, text: '108!', size: 150, color: '#b3302a', font: 'cond', shake: true }],
    lines: [
      N('One day I was short thirty-five hundred Sugar at 105¼, on seven pink tickets. Henry Williams was short twenty-five hundred.', '有一天，我在105¼做空了3,500股糖业，开了七张粉色单子。亨利·威廉斯做空了2,500股。'),
      N('Sugar dropped to 103, but I didn\'t like the way it hesitated. Something was wrong, and I couldn\'t say what.', '糖业跌到了103，可我不喜欢它那种犹豫的样子。肯定有什么不对劲，我却说不出来。'),
      N('I gave Dave Wyman my seat at the ticker. At the counter I heard a telegraph clicking, and the clerk turned to listen.', '我把行情机旁的座位让给戴夫·怀曼。走到柜台前，我听见电报机响了起来，职员转过头去听。'),
      L('larry', 'Close Sugar!', '平掉糖业！', { speak: 'larry' }),
      N('He had to close me at 103. Before I reached the cashier, Dave yelled: Sugar, 108! Henry Williams was wiped out.', '他只能按103给我平仓。我还没走到出纳那儿，戴夫就喊了起来：糖业，108！亨利·威廉斯被洗光了。'),
    ] });

  lesson(h, { id: 'e01_drive', tag: ['CASE STUDY', '案例分析'], title: ['Anatomy of a "Bucket-Shop Drive"', '拆解"对赌行洗盘"'], music: 'tense',
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 900, h: 610, xr: [0, 10], yr: [101, 110], yTicks: [102, 104, 106, 108], illustrative: true, cursorFmt: 'frac',
        title: ['Sugar, that day', '糖业，当天'],
        series: [{ pts: [[0, 105.25], [2, 104.5], [3.5, 103.4], [5, 103], [6.4, 103.1], [7.2, 108], [8.4, 104.3], [10, 103.8]], color: '#b8322a', draw: [['L0', 3], ['L2', 5], ['L2@108', 6], ['L2@back', 7]] }],
        marks: [{ x: 0, y: 105.25, at: 'L0', en: 'Short 3,500 @ 105¼', zh: '105¼做空3,500股', dx: 20, dy: -140, w: 200 },
          { x: 5, y: 103, at: 'L0@103', en: 'Closed @ 103', zh: '103平仓', dx: 20, dy: 40, w: 260 },
          { x: 7.2, y: 108, at: 'L2@108', en: 'Run up to 108: shorts wiped out', zh: '推到108：空头被洗光', dx: -300, dy: -80, w: 270, fill: '#f3c6c0' }],
        pnl: { entry: 105.25, shares: 3500, side: 'short', at: 'L0', exitAt: 'L0@103+0.6', exit: 103, x: 600, y: 665 } },
      { type: 'rule', at: 'L1', x: 1400, y: 220, w: 490, h: 185, n: '1', size: 28, en: 'Too many shorts in the shop: 8–10,000 sh, say $20,000 of margin.', zh: '店里空头太多：8,000–10,000股，约2万美元保证金。' },
      { type: 'rule', at: 'L2', x: 1400, y: 425, w: 490, h: 185, n: '2', size: 28, en: 'Its brokers bid the real price up: a couple of points on a few hundred shares.', zh: '它的经纪人在真实市场推高价格：只花几百股上的两三个点。' },
      { type: 'rule', at: 'L3', x: 1400, y: 630, w: 490, h: 185, n: '3', size: 28, tag: '#2f6b3d', fill: '#cfe3c4', en: 'Something feels wrong? Get out first. Find the reason later.', zh: '感觉不对劲？先出场，原因以后再找。' }],
    lines: [
      N('At 103 I had two and a quarter points on thirty-five hundred shares: about seventy-eight hundred dollars.', '在103平仓，我的3,500股每股赚了2¼个点：大约7,800美元。'),
      N('It was a put-up job. The shop held all the Sugar shorts\' margins: say twenty thousand dollars.', '这是个圈套。店里押着所有糖业空头的保证金：假设有两万美元。'),
      N('That paid its New York brokers to run the real price up to 108. Thin margins vanished, and the price fell right back.', '这笔钱足够让它在纽约的经纪人把真实价格推到108。薄薄的保证金瞬间蒸发，价格随即跌了回去。'),
      N('The papers called it a bucket-shop drive. I escaped on a feeling, before I had a reason.', '报纸管这叫"对赌行洗盘"。我是凭感觉逃出来的，那时还说不出理由。'),
    ] });

  shot({ id: 'e01_raid', set: 'floor', setOpts: { agitated: true, paperN: 18 }, trans: 'zoom', music: 'tense',
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'L1@bid', on: 'bear', z: 1.25, dur: 1.2 }, { t: 'L2', x: 960, y: 540, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'trader', key: 'bear', x: 960, y: 900, s: 1.2, pose: 'idle', expr: 'sly',
      acts: [{ t: 'L1@bid', pose: 'up', expr: 'shout' }, { t: 'L1@cashed', pose: 'fist', expr: 'grin' }, { t: 'L2', pose: 'hips', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.4, until: 'L1', w: 700, en: 'A Stock Exchange member, famous as a bear in the Bryan panic of 1896.', zh: '一位证券交易所会员，曾在1896年"布莱恩恐慌"中以做空成名。' },
      { type: 'flow', at: 'L1', x: 100, y: 90, w: 1720, bh: 170, gap: 50, size: 26, nodes: [
        { num: 1, en: '35 agents in the shop\'s offices', zh: '35名代理人进入店铺', at: 'L1' },
        { num: 2, en: 'At a fixed hour, all buy one stock', zh: '约定时刻同时买入同一只股票', at: 'L1@fixed' },
        { num: 3, en: 'He bids it up 3–4 pts on the floor', zh: '他在场内把价格推高3–4点', at: 'L1@bid' },
        { num: 4, en: 'Agents sell at a set profit', zh: '代理人按预定利润卖出', at: 'L1@cashed' }] },
      { type: 'note', at: 'L2', x: 100, y: 320, w: 620, h: 230, size: 28, fill: '#efe3c4', anim: 'slideL',
        en: 'Repeated in six cities. Favourite: Western Union. Buy · sell 2 up · go short · take 3 more.', zh: '在六个城市如法炮制。最爱西联电报：买入·涨2点卖出·反手做空·再赚3点。' },
      { type: 'counter', at: 'L2@seventy', x: 1560, y: 400, from: 0, to: 70000, prefix: '$', suffix: '+', size: 90, dur: 1.4, color: '#2f6b3d', label: ['his net from the raid', '他这次突袭的净利'] },
      { type: 'stamp', at: 'L2@illegal', x: 1560, y: 680, en: 'ILLEGAL TODAY', zh: '如今违法', size: 60, rot: -8 }],
    lines: [
      N('Within ten days, a Stock Exchange member gave the Cosmopolitan a dose of its own medicine.', '不到十天，一位证券交易所会员就让大都会尝到了自己的苦药。'),
      N('His thirty-five men bought one stock in its offices at a fixed hour. He bid it up three or four points on the floor, and they cashed in.', '他的三十五个人在约定时刻于店里同时买进同一只股票。他在场内把价格抬高三四个点，他们随即兑现。'),
      N('He netted over seventy thousand. Raids like this, and the shops\' drives, are illegal today; study them only to recognise them.', '他净赚七万多美元。这类突袭，以及对赌行的洗盘，如今都是违法的；学习它们，只为识别它们。'),
    ] });

  // ---- chapter II: New York ----
  chapter('Chapter II · New York, and Back to the Bucket Shops', '第二章 · 去纽约，又回到对赌行');
  photo({ id: 'e01_newyork', src: `${PD}/wallst_trinity_1903_detroit.jpg`, credit: 'Wall St. and Trinity Church, c.1903 · Detroit Publishing Co. (public domain)', music: 'rag',
    cap: ['Wall Street and Trinity Church, around 1903.', '约1903年的华尔街与三一教堂。'],
    kb: [{ t: 0, x: 960, y: 560, z: 1.02 }, { t: 12, x: 940, y: 480, z: 1.16 }],
    items: [{ type: 'counter', screen: true, panel: true, at: 'L1@hundred', x: 1560, y: 330, from: 0, to: 2500, prefix: '$', size: 100, dur: 1.4, label: ['all he had, age 21', '21岁时的全部家当'] }],
    lines: [
      N('So I went to New York, to trade with a member of the Stock Exchange, close to the source.', '于是我去了纽约，要在证券交易所的会员行交易，离行情的源头近一些。'),
      N('I was twenty-one, and I brought all I had: twenty-five hundred dollars.', '那年我二十一岁，带着全部家当：两千五百美元。'),
    ] });

  lesson(h, { id: 'e01_fool', tag: ['LESSON · 教训', '华尔街的傻瓜'], title: ['The Wall Street Fool', '华尔街的傻瓜'],
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'note', at: 'L0', x: 470, y: 220, w: 690, h: 190, size: 30, fill: '#cfe3c4', anim: 'slideU',
        en: 'MADE money: when he was sure he was right before he began.', zh: '赚钱：在动手之前就确信自己是对的时候。' },
      { type: 'note', at: 'L1', x: 1200, y: 220, w: 690, h: 190, size: 30, fill: '#f3c6c0', anim: 'slideU',
        en: 'LOST money: trading for excitement, when precedents didn\'t favour him.', zh: '亏钱：先例不支持时，为了刺激而交易。' },
      { type: 'note', at: 'L1@Wall', x: 470, y: 440, w: 560, h: 390, size: 32, fill: '#f6d77a', anim: 'pop',
        en: '"There is the plain fool, who does the wrong thing at all times… but there is the Wall Street fool, who thinks he must trade all the time."',
        zh: '"有一种普通的傻瓜，任何时候都做错事……还有一种华尔街的傻瓜，认为自己必须一直交易。"' },
      { type: 'chart', at: 'L2', x: 1060, y: 440, w: 830, h: 390, xr: [0, 14], yr: [-3, 34], yTicks: [0, 10, 20, 30], yFmt: 'int', ySuf: ' pts', illustrative: true, cursorLabel: false,
        title: ['1915: waiting until it was safe', '1915年：等到有把握'], xTicks: [[0, 'day 0', '第0天'], [14, 'two weeks', '两周后']],
        bands: [{ x0: 0, x1: 14, y0: -3, y1: 34, at: 'L2@watched', color: '#d6a441' }],
        series: [{ pts: [[0, 0], [2, 3], [4, 5], [6, 9], [8, 13], [10, 18], [12, 24], [14, 30]], color: '#2f6b3d', draw: [['L2@watched', 7]] }],
        marks: [{ x: 14, y: 30, at: 'L2@bought', en: '+30 pts: only now he buys', zh: '涨30点后才买', dx: -600, dy: -20, w: 260 }] }],
    lines: [
      N('My method won more often than not. I made money whenever I was sure I was right before I began.', '我的方法赢多输少。凡是我在动手之前就确信自己是对的，我总能赚钱。'),
      N('What beat me was trading for excitement. The Wall Street fool thinks he must trade all the time.', '打败我的，是为了刺激而交易。华尔街的傻瓜总觉得自己必须一直交易。'),
      N('In 1915, coming back from broke, I watched a stock I liked rise thirty points for two weeks before I bought.', '1915年，我从破产中重新起步，眼看着一只我看好的股票连涨两周、涨了三十个点，才买进。'),
    ] });

  shot({ id: 'e01_fullerton', set: 'office', trans: 'wipe', music: 'calm',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'OMAHA', 'T.C.&I.', 'ST. PAUL'], ['105', '72⅛', '110', '88', '112¾'], ['104⅞', '72', '109⅞', '87½', '112½']] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.35, dur: 1 }, { t: 'L2', on: 'fullerton', z: 1.35, dur: 1 }, { t: 'L3', on: 'larry', z: 1.4, dur: 1 }],
    cast: [{ id: 'larry', x: 720, y: 890, s: 1.2, pose: 'chin', expr: 'think',
        acts: [{ t: 'L0@broke', pose: 'despair', expr: 'sad' }, { t: 'L1', pose: 'explain', expr: 'determined' }, { t: 'L3', pose: 'fist', expr: 'determined' }] },
      { id: 'fullerton', x: 1250, y: 890, s: 1.2, flip: true, pose: 'hold', expr: 'smile',
        acts: [{ t: 'L1', pose: 'idle', expr: 'think' }, { t: 'L2', pose: 'explain', expr: 'frown' }, { t: 'L2@Trade', pose: 'pointL', expr: 'smile' }, { t: 'L3e', pose: 'shrug', expr: 'smile' }] }],
    items: [
      { type: 'counter', at: 'L0@broke', until: 'L1', x: 1560, y: 260, from: 2500, to: 0, prefix: '$', size: 100, dur: 1.6, color: '#b3302a', label: ['his stake, six months later', '六个月后的本金'] },
      { type: 'bubble', at: 'L1', until: 'L2', x: 470, y: 70, w: 480, en: 'Say, A. R., lend me five hundred dollars.', zh: '我说，A.R.，借我五百美元。', tx: 720, ty: 590 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 960, y: 60, w: 580, en: 'Ten per cent margin: a thousand dollars on a hundred shares. Trade here!', zh: '保证金一成：一百股要一千美元。就在这儿做吧！', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L3', x: 440, y: 70, w: 560, en: 'I\'m sure I can take money out of the bucket shops.', zh: '我有把握从对赌行赢到钱。', tx: 720, ty: 590 }],
    lines: [
      N('At A. R. Fullerton\'s they called me the Boy Trader. Within six months I was broke, and owed the firm a few hundred dollars.', '在A.R.富勒顿公司，大家叫我"少年交易员"。不到六个月我就输光了，还欠公司几百美元。'),
      L('larry', 'Say, A. R., lend me five hundred dollars.', '我说，A.R.，借我五百美元。', { speak: 'larry' }),
      L('fullerton', 'They\'d expect a ten per cent margin, a thousand dollars on a hundred shares. Trade here!', '人家会要求一成的保证金，一百股就是一千美元。就在这儿做吧！', { speak: 'fullerton' }),
      L('larry', 'Not in this office, not yet. But I\'m sure I can take money out of the bucket shops.', '在这儿，我还没把握。但我有把握从对赌行赢到钱。', { speak: 'larry' }),
    ] });

  lesson(h, { id: 'e01_games', tag: ['DIAGNOSIS', '诊断'], title: ['Why the Bucket-Shop Method Failed', '对赌行打法为什么失灵'],
    gest: ['explain', 'point', 'explainR', 'despair'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 900, h: 610, xr: [0, 10], yr: [100, 107], yTicks: [101, 103, 105], illustrative: true, cursor: false,
        title: ['Sugar: the tape vs. the floor', '糖业：纸带与场内'], xTicks: [[1, 'he sees 105', '他看到105'], [8, 'his fill', '他的成交']],
        series: [
          { pts: [[0, 105], [1, 103.5], [3, 102.8], [5, 102.3], [8, 101.5], [10, 101.2]], color: '#b3302a', label: ['Real price on the floor', '场内真实价格'], draw: [['L1', 1], ['L2', 4], ['L2@lower', 5]] },
          { pts: [[0, 106], [1, 105], [3, 104], [5, 103.2], [8, 102.3], [10, 101.8]], color: '#2f5d8a', dash: '16 10', width: 5, cursor: false, label: ['Printed tape', '纸带报价'], labelBelow: true, draw: [['L1', 1], ['L2', 4], ['L2@lower', 5]] }],
        marks: [{ x: 1, y: 105, at: 'L1@105', en: 'Tape: 105', zh: '纸带：105', dx: 30, dy: -80, w: 260 },
          { x: 1, y: 103.5, at: 'L1@104', en: 'Floor: 104 or 103', zh: '场内：104或103', dx: -40, dy: 80, w: 260, fill: '#f3c6c0' },
          { x: 8, y: 101.5, at: 'L2@lower', en: 'His 1,000 sell fills lower still', zh: '他卖1,000股，成交价更低', dx: -180, dy: -279, w: 300, fill: '#f3c6c0' }] },
      { type: 'note', at: 'L0', x: 1400, y: 220, w: 490, h: 160, size: 28, fill: '#cfe3c4', anim: 'slideU',
        en: 'Bucket shop: price known before you trade; out in a second.', zh: '对赌行：下单前就知道价格；一秒钟就能离场。' },
      { type: 'equation', at: 'L2@Three', x: 1645, y: 450, size: 38, terms: [{ t: '1,000 × 3 pts', zh: '对赌行', at: 'L2@Three' }, { t: '= $3,000', at: 'L2@Three+0.4', hl: true, color: '#2f6b3d' }] },
      { type: 'equation', at: 'L2@nothing', x: 1645, y: 570, size: 38, terms: [{ t: 'real broker:', zh: '真正的经纪行', at: 'L2@nothing' }, { t: '$0?', at: 'L2@nothing+0.3', hl: true, color: '#b3302a' }] },
      { type: 'note', at: 'L3', x: 1400, y: 650, w: 490, h: 170, size: 28, fill: '#f3c6c0', anim: 'slideU',
        en: 'His own big orders moved the price against him.', zh: '他自己的大单把价格推向不利方向。' }],
    lines: [
      N('In a bucket shop I knew my price before I traded, and could get out in a second.', '在对赌行，我下单前就知道成交价，而且一秒钟就能离场。'),
      N('At Fullerton\'s, when the tape printed Sugar at 105, the real price on the floor might already be 104, or 103.', '在富勒顿那里，当纸带打出糖业105时，场内的真实价格可能已经是104，甚至103。'),
      N('When my order to sell a thousand reached the floor, the price was lower still. A sure three thousand in a bucket shop might be nothing here.', '等我卖一千股的指令到达场内，价格已经更低了。在对赌行稳赚三千美元的交易，在这里可能一分不赚。'),
      N('And my own orders moved the price. I was playing the game ignorantly.', '而且我自己的订单会推动价格。我是在稀里糊涂地玩这个游戏。'),
    ] });

  // ---- St. Louis ----
  shot({ id: 'e01_dolan', set: 'bucketshop', trans: 'whip', music: 'rag',
    setOpts: { shopName: 'J. G. DOLAN CO.', crowd: 9, board: [['OMAHA', 'B.R.T.', 'WHEAT', 'COTTON', 'SUGAR'], ['110', '72⅛', '74¼', '8.12', '105¼'], ['109⅞', '72', '74⅛', '8.10', '105⅛']], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'dolan', z: 1.3, dur: 1.2 }, { t: 'L2@Toddle', on: 'larry', z: 1.35, dur: 0.8 }, { t: 'L3', x: 1050, y: 500, z: 1.05, dur: 1 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.15, pose: 'hips', expr: 'sly',
        acts: [{ t: 'L1', pose: 'idle', expr: 'worry' }, { t: 'L2@Toddle', pose: 'shrug', expr: 'smile' }, { t: 'L3', pose: 'cross', expr: 'frown' }] },
      { id: 'manager', key: 'dolan', x: 1300, y: 890, s: 1.25, flip: true, pose: 'hips', expr: 'neutral', until: 'L3',
        acts: [{ t: 'L2', pose: 'pointL', expr: 'angry' }, { t: 'L2@Toddle', pose: 'explain', expr: 'smile' }] },
      { id: 'generic', key: 'red', x: 1300, y: 890, s: 1.15, flip: true, pose: 'pointL', expr: 'angry', at: 'L3', look: { hair: '#b5452a' } }],
    items: [
      { type: 'caption', at: 0.3, w: 700, en: 'St. Louis · J. G. Dolan Co. · alias "Horace Kent" · first trade: 200 Omaha', zh: '圣路易斯 · J.G.多兰公司 · 化名"霍勒斯·肯特" · 第一笔：200股奥马哈' },
      { type: 'counter', at: 'L0@twenty', until: 'L2', x: 380, y: 420, from: 0, to: 2800, prefix: '+$', size: 96, dur: 1.4, color: '#2f6b3d', label: ['in two days', '两天之内'] },
      { type: 'bubble', at: 'L2', until: 'L3', x: 960, y: 60, w: 640, size: 28, en: 'Three hundred suckers feed me. You cop more in two days than I get from them in two weeks. Toddle along, sonny!', zh: '三百个傻瓜养活我。你两天拿走的，比我从他们身上两周赚的还多。走吧，小子！', tx: 1300, ty: 577 },
      { type: 'caption', at: 'L3', until: 'end', en: 'H. S. Teller & Co., in the same block', zh: '同一街区的H.S.特勒公司' },
      { type: 'bubble', at: 'L3+0.4', x: 1000, y: 120, w: 560, en: 'Say, Livingston, you go back to Dolan\'s. We don\'t want your business.', zh: '喂，利文斯顿，回多兰那儿去吧。我们不做你的生意。', tx: 1300, ty: 602 }],
    lines: [
      N('With his five hundred I went to St. Louis. As Horace Kent, I made twenty-eight hundred dollars in two days at Dolan\'s shop.', '我拿着他的五百美元去了圣路易斯。我化名霍勒斯·肯特，在多兰的店里两天赚了两千八百美元。'),
      N('On the third morning Dolan called me in, by my real name.', '第三天早上，多兰把我叫了进去，叫的是我的真名。'),
      L('manager', 'Three hundred suckers feed me and my family. You cop more in two days than I get out of them in two weeks. Toddle along, sonny!', '三百个傻瓜养活我和我一家。你两天拿走的，比我从他们身上两周赚的还多。走吧，小子！', { speak: 'dolan' }),
      N('At Teller\'s, in the same block, they wouldn\'t take a single order.', '同一街区的特勒公司，连一笔单子都不肯接。'),
    ] });

  // ---- Hoboken ----
  shot({ id: 'e01_hoboken', set: 'office', trans: 'wipeL', music: 'rag',
    setOpts: { time: 10.98, crowd: 4, board: [['SUGAR', 'B.R.T.', 'T.C.&I.', 'ST. PAUL', 'UNION PAC'], ['106¼', '73⅛', '89', '113¼', '58½'], ['106⅛', '73', '88⅞', '113', '58⅜']],
      boardSeq: [{ t: 'L2@slid', r: 1, c: 0, v: '105⅜' }, { t: 'L2@slid+0.5', r: 1, c: 1, v: '72¼' }, { t: 'L2@slid+1', r: 1, c: 3, v: '112⅜' }, { t: 'L3', r: 1, c: 4, v: '57¾' }] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1', on: 'manager', z: 1.3, dur: 1.2 }, { t: 'L2', x: 1500, y: 300, z: 1.25, dur: 1.2 }, { t: 'L2@two', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L3', x: 960, y: 500, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 720, y: 890, s: 1.2, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2@two', pose: 'hold', expr: 'determined' }, { t: 'L3', pose: 'hips', expr: 'grin' }] },
      { id: 'manager', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'grin',
        acts: [{ t: 'L1', pose: 'explainR', expr: 'smile' }, { t: 'L2@two', pose: 'hold', expr: 'grin' }, { t: 'L3@coming', pose: 'despair', expr: 'shock' }] }],
    items: [
      { type: 'caption', at: 0.3, w: 680, en: 'Hoboken, a Saturday. About 25 customers and a special policeman in gray.', zh: '霍博肯，一个星期六。大约25位客户，还有一名穿灰制服的保安。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1000, y: 70, w: 520, en: 'Hurry! The market closes at twelve on Saturdays!', zh: '快点！周六市场十二点收盘！', tx: 1250, ty: 590 },
      { type: 'counter', at: 'L2@two', until: 'L3', x: 380, y: 330, from: 0, to: 2000, prefix: '$', size: 90, dur: 1.2, label: ['margin, selling at 11:15', '11:15卖出所押的保证金'] },
      { type: 'counter', at: 'L3@Fifty', x: 380, y: 330, from: 0, to: 5100, prefix: '+$', size: 96, dur: 1.4, color: '#2f6b3d', label: ['profit coming to him', '应得的利润'] }],
    lines: [
      N('Back in New York, old McDevitt told me Teller had opened a shop in Hoboken, with no limit. That Saturday I went over.', '回到纽约后，老麦克德维特告诉我，特勒在霍博肯开了一家对赌行，交易不设上限。那个星期六，我过去了。'),
      L('manager', 'You ought to hurry. The market closes at twelve on Saturdays!', '你得抓紧。周六市场十二点就收盘了！', { speak: 'manager' }),
      N('I watched the clock. At 11:15 I put up two thousand dollars and sold several stocks. Prices slid, just as I\'d figured.', '我盯着钟。十一点十五分，我押上两千美元，卖空了好几只股票。价格果然如我所料滑落。'),
      N('I closed out before the last-minute rally. Fifty-one hundred dollars was coming to me.', '我在最后时刻的反弹之前平了仓。我应得五千一百美元。'),
    ] });

  lesson(h, { id: 'e01_saturday', tag: ['CASE STUDY', '案例分析'], title: ['Reading the Saturday Setup', '读懂周六的局面'], music: 'calm',
    gest: ['explain', 'point', 'explainR', 'relaxed'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 900, h: 400, xr: [0, 120], yr: [0, 10], yTicks: [], illustrative: true, cursorLabel: false,
        title: ['A Saturday session, 10:00 to noon', '周六半日交易，10点到12点'], xTicks: [[0, '10:00', ''], [75, '11:15', ''], [112, 'closes out', '平仓']],
        bands: [{ x0: 115, x1: 120, y0: 0, y1: 10, at: 'L2@five', color: '#2f6b3d' }],
        series: [{ pts: [[0, 5], [20, 5.6], [45, 6.4], [75, 7], [90, 6], [100, 4.4], [110, 3.2], [115, 3], [120, 4.2]], color: '#7a4a22', draw: [['L0', 3], ['L1', 4], ['L1@hammer', 7], ['L2', 7], ['L2@five', 8]] }],
        marks: [{ x: 75, y: 7, at: 'L0e', en: '11:15: sells, $2,000 up', zh: '11:15卖出', dx: -420, dy: 70, w: 320 }] },
      { type: 'flow', dir: 'v', at: 'L0', x: 1400, y: 220, w: 490, bh: 120, gap: 40, size: 25, nodes: [
        { en: 'Up all week', zh: '整周上涨', at: 'L0@risen' },
        { en: 'Saturday bank statement: surplus reserve down', zh: '周六银行报表：超额准备金大减', at: 'L0@bank' },
        { en: 'Room traders hammer the favourites, hitting stops', zh: '场内交易员打压热门股，触发止损单', at: 'L1@hammer' },
        { en: 'Teller\'s customers were long those', zh: '特勒的客户正好做多这些股票', at: 'L1@customers', color: '#f3c6c0' }] },
      { type: 'equation', at: 'L3', x: 920, y: 700, size: 42, terms: [
        { t: '$2,000', zh: '退回保证金', at: 'L3@two' }, { t: '+ ≈$800', zh: '周六店里全部现金', at: 'L3@eight' }, { t: '+ $4,300', zh: '周一', at: 'L3@Monday' }] },
      { type: 'equation', at: 'L3e', x: 920, y: 800, size: 38, terms: [
        { t: '= $7,100', zh: '合计', at: 'L3e' }, { t: '− $2,000 margin', zh: '减去保证金', at: 'L3e+0.4' }, { t: '= $5,100 profit', zh: '利润', at: 'L3e+0.8', hl: true, color: '#2f6b3d' }] }],
    lines: [
      N('Why that Saturday? Stocks had risen all week, so the Saturday bank statement was sure to show a big drop in surplus reserve.', '为什么选那个星期六？股票涨了一整周，所以周六的银行报表肯定会显示超额准备金大幅减少。'),
      N('That was the room traders\' usual excuse to hammer the public\'s favourites, where the stops sat. Teller\'s customers were long those.', '这正是场内交易员惯用的借口，去打压公众最热衷的股票，那里聚集着止损单。而特勒的客户恰好做多这些股票。'),
      N('And I closed out before the traders\' own covering rally in the last five minutes.', '而且我在交易员们最后五分钟回补空头引发的反弹之前就平了仓。'),
      N('He paid two thousand and about eight hundred that day, all he had, and forty-three hundred on Monday.', '他当天付了两千美元，外加约八百美元，那是他店里的全部现金；周一又付了四千三百美元。'),
    ] });

  photo({ id: 'e01_mcdevitt', src: `${PD}/hoboken_lackawanna_ferry_c1900_detroit.jpg`, credit: 'Lackawanna ferry terminal, Hoboken, c.1900 · Detroit Publishing Co. (public domain)', music: 'rag',
    cap: ['Hoboken. McDevitt traded in 20- and 30-share lots. Soon a crazy bull market was busting shops all over the country.', '霍博肯。麦克德维特每次只做二三十股。不久，一轮疯狂的牛市让全国各地的对赌行纷纷倒闭。'], capW: 720,
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 1000, y: 520, z: 1.14 }],
    items: [
      { type: 'counter', screen: true, panel: true, at: 'L1@twenty', x: 1560, y: 330, from: 0, to: 2800, prefix: '+$', size: 96, dur: 1.4, color: '#2f6b3d', label: ['net, after McDevitt\'s cut', '扣除麦克德维特的分成后净赚'] },
      { type: 'stamp', screen: true, at: 'L1@closed', x: 1560, y: 640, en: 'CLOSED', zh: '关门', size: 70, rot: -10 }],
    lines: [
      N('Then McDevitt traded at Teller\'s for me in small lots, with my thousand dollars, until he was a regular.', '后来，麦克德维特拿着我的一千美元，在特勒的店里小笔小笔地替我交易，直到成了那里的熟客。'),
      N('When I saw a break coming, he sold all they\'d let him. I cleared twenty-eight hundred. Within a month the shop was closed.', '当我看到要跌了，他就按店里允许的上限卖空。我净赚两千八百美元。不到一个月，那家店就关门了。'),
    ] });

  shot({ id: 'e01_house', set: 'bucketshop', trans: 'iris', music: 'calm',
    setOpts: { shopName: 'STOCKS · GRAIN', crowd: 7, cageX: 1560, board: [['SUGAR', 'T.C.&I.', 'B.R.T.', 'ST. PAUL', 'WHEAT'], ['112½', '74', '78⅛', '121', '74¼'], ['112¼', '73¾', '78', '120¾', '74⅛']] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L2', on: 'clerk', z: 1.25, dur: 1.2 }, { t: 'end', x: 960, y: 520, z: 1.05 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.15, pose: 'chin', expr: 'think', acts: [{ t: 'L1', pose: 'cross', expr: 'frown' }, { t: 'L2@buy', pose: 'shrug', expr: 'smile' }] },
      { id: 'clerk', x: 1250, y: 890, s: 1.15, flip: true, pose: 'write', expr: 'neutral', acts: [{ t: 'L1', pose: 'explain', expr: 'sly' }, { t: 'L2', pose: 'pointL', expr: 'frown' }] }],
    items: [
      { type: 'note', at: 'L0', x: 80, y: 100, w: 600, h: 180, size: 29, fill: '#cfe3c4', anim: 'slideL',
        en: 'Margin gone = trade closed. You can\'t lose more than you put up.', zh: '保证金耗尽＝自动平仓。亏损不会超过你押上的钱。' },
      { type: 'note', at: 'L1', x: 1240, y: 90, w: 640, h: 230, size: 28, fill: '#f3c6c0', anim: 'slideR',
        en: 'Sugar, T.C.&I.: max 2 pts a ticket, even on a 10-pt move. Risk $1 to make 2, not 10.', zh: '糖业、田纳西煤铁：每张单最多赚2点，哪怕涨10点。冒1美元险只赚2美元，不是10美元。' },
      { type: 'bubble', at: 'L2@buy', x: 1020, y: 345, w: 460, kind: 'shout', en: 'No buy orders today!', zh: '今天不接买单！', tx: 1250, ty: 602 },
      { type: 'stamp', at: 'L2@three', x: 380, y: 420, en: '3 TO 1 ON McKINLEY', zh: '麦金莱胜率3比1', size: 52, rot: -8 }],
    lines: [
      N('The old shops had one virtue: when your margin ran out, the trade closed itself. The best stop-loss order there is.', '老式对赌行有一个优点：保证金一用完，交易就自动结束。那是最好的止损单。'),
      N('But New York shops capped profits on wild stocks like Sugar at two points a ticket. No risking a dollar to make ten.', '但纽约的对赌行对糖业这类剧烈波动的股票，每张单子最多只让你赚两个点。别想冒一块钱的险去赚十块。'),
      N('And before the 1900 election, with McKinley a three-to-one favourite, not one shop would let customers buy stocks.', '而在1900年大选前一天，麦金莱的胜率是三比一，没有一家对赌行肯让客户买股票。'),
    ] });

  // ---- takeaways ----
  const R = (n, at, y, en, zh, tag, fill) => ({ type: 'rule', at, x: 470, y, w: 1420, h: 112, n: String(n), size: 30, en, zh, tag, fill });
  lesson(h, { id: 'e01_rules', tag: ['TAKEAWAYS', '要点'], title: ['What Episode One Teaches', '第一集的要点'], music: 'calm',
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      R(1, 'L0@Watch', 220, 'Watch what prices do. The reason comes later, often too late to act on.', '看价格做了什么。原因总是事后才来，往往来不及行动。'),
      R(2, 'L0@honest', 342, 'Keep an honest scorecard of real forecasts: hits and misses.', '为真实的预测记一本诚实的账：猜中与猜错。'),
      R(3, 'L1', 464, 'Know the mechanics of your game: your price, your fill, your margin, your exit.', '弄清你所玩游戏的机制：成交价、实际成交、保证金、出场方式。'),
      R(4, 'L1@Trade', 586, 'Trade only when precedents favour you. Don\'t be the Wall Street fool.', '只在先例对你有利时交易。别做华尔街的傻瓜。'),
      R(5, 'L2', 708, 'If something feels wrong, get out first. Find the reason later.', '感觉不对劲，先出场，原因以后再找。', '#2f6b3d', '#cfe3c4')],
    lines: [
      N('Episode one, in five rules. Watch what prices do, and keep an honest score of your forecasts.', '第一集的五条规则。看价格做了什么，并诚实地记录你的预测。'),
      N('Know the mechanics of the game you are in. Trade only when precedents favour you, not every day.', '弄清你所在游戏的机制。只在先例对你有利时交易，而不是天天交易。'),
      N('If something feels wrong, get out first. And remember: there is nothing new in Wall Street.', '感觉不对劲，先出场。还要记住：华尔街没有新鲜事。'),
    ] });

  const T = (en, zh) => [en, zh];
  lesson(h, { id: 'e01_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: '#b3302a', title: ['Mistakes of Chapters I–II', '第一、二章的错误'], music: 'calm',
    gest: ['explain', 'point'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 220, w: 1420, widths: [0.36, 0.32, 0.32], size: 28, bottom: 840,
      cols: [T('Mistake', '错误'), T('Cause', '原因'), T('Rule', '规则')],
      rows: [
        [T('Took the bucket-shop method to a real broker', '把对赌行打法带到真正的经纪行'), T('Tape lags; fills differ; his orders move prices', '纸带滞后；成交价不同；自己的单子推动价格'), T('Learn the mechanics before you trade', '先弄懂机制再交易')],
        [T('Traded for excitement, not on precedent', '为了刺激而交易，而非依据先例'), T('Wanted constant action, like a wage', '想要持续的刺激，像领工资一样'), T('Trade only when precedents favour you', '只在先例对你有利时交易')],
        [T('Took beating the shops for beating the market', '把赢对赌行当成赢了市场'), T('Early success hid the flaw', '早期的成功掩盖了缺陷'), T('Ask what your edge depends on', '弄清你的优势依赖什么')],
        [T('Henry Williams stayed short as Sugar stalled', '糖业停滞时亨利·威廉斯仍持空单'), T('A thin margin; the shop ran the price', '保证金太薄；店家拉抬价格'), T('Can\'t see the danger? Be out', '看不清危险？就离场')]],
      rowAt: ['L0+0.4', 'L0@big', 'L0@big+0.8', 'L1'], hl: [null, null, 'L0@beating', null] }],
    lines: [
      N('And the mistakes, with their causes. The big one: beating the bucket shops was not beating the market.', '还有错误及其原因。最大的一个：赢了对赌行，并不等于赢了市场。'),
      N('Name the cause of a loss, and it becomes a rule.', '找出亏损的原因，它就成了一条规则。'),
    ] });
};
