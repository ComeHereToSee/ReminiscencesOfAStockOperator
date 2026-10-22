// Full version, episode 5: The Panic of 1907 (Book ch. IX–X)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  const RED = '#b3302a', GREEN = '#2f6b3d', YEL = '#f6d77a', PINK = '#f3c6c0', MINT = '#cfe3c4', COPPER = '#a0522d';
  const JOHN = { hat: 'bowler', hatColor: '#2a2a2a', mus: 'thin', coat: '#3a3a44' };
  const BROKER = { hat: 'bowler', hatColor: '#1d1d1d', hair: '#3a2a1a', mus: 'walrus', musColor: '#3a2a1a', coat: '#2e2a26', vest: '#4a443c' };
  const OLDGENT = { hair: '#e8e4da', hairStyle: 'gray', beard: 'chops', beardColor: '#e8e4da', mus: 'walrus', musColor: '#e8e4da', glasses: 'pince', age: 3, coat: '#3a3a40' };
  episode(5, 'Reminiscences_E05_The_Panic_of_1907');

  // ================= Chapter IX =================
  chapter('Chapter IX · The Panic of 1907', '第九章 · 1907年大恐慌');
  music('tense');
  title({ id: 'e05_title', kicker: 'EPISODE 5 · 第5集', en: 'The Panic of 1907', zh: '1907年大恐慌', color: '#5a2a6a',
    sub: ['Book chapters IX–X · 1907, and the rules that followed', '原著第九至十章 · 1907年，以及随后的规则'],
    lines: [N('Episode five. The Panic of 1907, my day as king, and the rules that followed.', '第五集：1907年大恐慌，我称王的那一天，以及随后总结的规则。')] });

  // ---- Anaconda: the buy and the storm ----
  shot({ id: 'e05_anaconda', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['ANACONDA', 'THE MARKET'], ['NEAR 300', 'RALLYING'], ['', '']],
      boardSeq: [{ t: 'L1@300', r: 1, c: 0, v: '300' }, { t: 'L2@storm', r: 1, c: 1, v: 'WIRES DOWN' }, { t: 'L2@storm', r: 1, c: 0, v: '—' }, { t: 'L2@292', r: 1, c: 0, v: '292' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L1@Anaconda', x: 620, y: 360, z: 1.25, dur: 1.2 }, { t: 'L2@292', x: 620, y: 360, z: 1.4, dur: 0.6 }, { t: 'L3', on: 'larry', z: 1.4, dur: 1 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.2, pose: 'hips', expr: 'smile',
        acts: [{ t: 'L1', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L3', pose: 'relaxed', expr: 'smile' }] },
      { id: 'generic', key: 'john', look: JOHN, x: 1250, y: 890, s: 1.15, flip: true, pose: 'idle', expr: 'neutral',
        acts: [{ t: 'L2@292', pose: 'despair', expr: 'shock' }, { t: 'L3', pose: 'grab', expr: 'worry' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Palm Beach, February 1907. Harding Brothers had a branch office there.', zh: '1907年2月，棕榈滩。哈丁兄弟在那里设有分部。' },
      { type: 'counter', at: 'L1@thirty', until: 'L2', x: 1560, y: 330, from: 0, to: 8000, suffix: ' full shares', size: 72, label: ['32,000 × $25 par = 8,000 × $100 par', '32,000股×25美元面值＝8,000股×100美元面值'] },
      { type: 'counter', at: 'L2@paper', until: 'L3', x: 1560, y: 330, from: 0, to: -100000, fmt: '$', prefix: '≈ ', size: 80, color: RED, label: ['paper loss at 292', '292时的账面亏损'] },
      { type: 'bubble', at: 'L3', x: 300, y: 80, w: 520, en: "Don't you worry, John. It will be all right tomorrow.", zh: '别担心，约翰。明天就没事了。', tx: 700, ty: 590 }],
    lines: [
      N("February 1907. A friend's paper showed a rally of ten points and more. The bear market wasn't over; I went ashore.", '1907年2月。朋友带来的报纸显示，市场反弹了十多个点，但熊市并没有结束。我上了岸。'),
      N("At Harding's office, Anaconda was about to cross 300. I bought thirty-two thousand of this quarter stock: eight thousand full shares.", '在哈丁的分部，安纳康达即将突破300。这是“四分之一股”，我买了三万二千股，相当于八千整股。'),
      N('Next day a storm took the wires down. All day, one quotation: Anaconda, 292. A paper loss of nearly a hundred thousand dollars.', '第二天，一场风暴把电报线刮断了。一整天只来了一个报价：安纳康达，292。账面亏损将近十万美元。'),
      L('larry', "Don't you worry, John. It will be all right tomorrow.", '别担心，约翰。明天就没事了。', { speak: 'larry' }),
    ] });

  lesson(h, { id: 'e05_failpoint', tag: ['METHOD · SET THE FAILURE POINT FIRST', '方法 · 事先设好认错点'], title: ['Anaconda: Right by Ceasing to Be Wrong', '安纳康达：停止犯错，就是做对'], titleSize: 50,
    gest: ['explain', 'pointUp', 'point', 'despair'],
    items: [{ type: 'chart', at: 0.3, x: 470, y: 220, w: 1000, h: 620, xr: [0, 10], yr: [287, 313], yTicks: [290, 295, 300, 305, 310], illustrative: true, cursorFmt: 'frac',
        title: ['Anaconda Copper, 1907', '安纳康达铜业，1907年'], xTicks: [[1, 'day 1', '第1天'], [4, 'day 2', '第2天'], [6.4, 'day 3', '第3天'], [9.5, 'day 4', '第4天']],
        hlines: [{ v: 310, x0: 6.3, at: 'L2', color: GREEN, en: 'Real breakout: 310 without stopping', zh: '真突破：一口气到310' },
          { v: 301, x1: 7.2, labelX: 0.1, at: 'L2@301', color: RED, en: 'Failure point: 301', zh: '认错点：301' }],
        series: [{ pts: [[0, 297], [1, 300.5], [2.5, 300], [4, 292], [5.5, 298], [6.3, 302.75], [6.8, 301.8], [7.2, 301], [8, 298.75], [9.2, 295.5], [10, 294]], color: COPPER,
          draw: [[0.5, 3], ['L1@298', 4], ['L1@302', 5], ['L1@fade', 6], ['L3', 7], ['L3@market', 8], ['L3@296', 9], ['L3@fell', 10]] }],
        marks: [{ x: 4, y: 292, at: 0.7, en: 'Only quote: 292', zh: '唯一报价：292', dx: -230, dy: 12, w: 260, fill: PINK },
          { x: 7.2, y: 301, at: 'L3', en: 'Hits 301: SELL ALL', zh: '触及301：全部卖出', dx: -42, dy: -142, w: 260, fill: YEL },
          { x: 9.2, y: 295.5, at: 'L3@296', en: 'Day 4: under 296', zh: '次日：开盘低于296', dx: -222, dy: 47, w: 260 }] },
      { type: 'note', at: 'L0', x: 1500, y: 220, w: 390, h: 265, size: 30, fill: MINT,
        en: 'Theory: first time across 100, 200 or 300, a stock usually runs well past. Target: 340.', zh: '理论：第一次突破100、200或300时，股价通常会大幅冲过。目标：340。' },
      { type: 'note', at: 'L0@quickly', x: 1500, y: 498, w: 390, h: 178, size: 28,
        en: 'Bearish overall, but 30 quick points here = "wages".', zh: '整体看空，但在这里快赚30点＝“工资”。' },
      { type: 'note', at: 'L2@cease', x: 1500, y: 690, w: 390, h: 150, size: 30, fill: YEL, anim: 'pop',
        en: '"Be right by ceasing to be wrong."', zh: '“停止犯错，就是做对。”' }],
    lines: [
      N('My theory: a stock first crossing 100, 200 or 300 usually runs well past. I expected 340, quickly.', '我的理论是：股票第一次突破100、200或300时，通常会大幅冲过去。我预计它会很快到340。'),
      N('When the wires came back it opened at 298, rose to 302¾, and began to fade. My test was set in advance.', '电报恢复后，它开盘298，涨到302¾，然后开始回落。我事先已经设好了检验标准。'),
      N('A real breakout runs to 310 without stopping. Back to 301 meant a fake, and the only thing to do is cease being wrong.', '真正的突破应该一口气冲到310。回落到301就说明是假突破；这时唯一该做的，就是停止犯错。'),
      N('It touched 301; I sold everything at the market. Next day it opened below 296, and fell until the big break that fall.', '它触及301，我按市价全部卖出。第二天它开盘就低于296，此后一路下跌，直到那年秋天的大崩盘。'),
    ] });

  shot({ id: 'e05_ollie', set: 'office', trans: 'whip', music: 'tense',
    setOpts: { board: [['ANACONDA', 'THE MARKET'], ['301', 'NOT ACTING RIGHT'], ['', '']], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'larry', z: 1.3, dur: 1.2 }, { t: 'L1', on: 'operator', z: 1.4, dur: 0.8 }, { t: 'L2', on: 'larry', z: 1.5, dur: 0.6 }, { t: 'L3', on: 'ollie', z: 1.4, dur: 1 }, { t: 'L4', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 600, y: 890, s: 1.15, pose: 'chin', expr: 'determined',
        acts: [{ t: 'L0', pose: 'explainR', expr: 'neutral' }, { t: 'L2', pose: 'fist', expr: 'shout' }, { t: 'L3', pose: 'cross', expr: 'neutral' }, { t: 'L4', pose: 'relaxed', expr: 'sly' }] },
      { id: 'clerk', key: 'operator', x: 1080, y: 890, s: 1.1, flip: true, pose: 'write', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'shrug', expr: 'shock' }, { t: 'L2e', pose: 'write', expr: 'worry' }] },
      { id: 'trader', key: 'ollie', x: 1560, y: 890, s: 1.1, flip: true, pose: 'cross', expr: 'sly',
        acts: [{ t: 'L3', pose: 'point', expr: 'grin' }, { t: 'L4', pose: 'hips', expr: 'laugh' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Day 3. The wires are back; Anaconda touches 301.', zh: '第3天。电报恢复；安纳康达触及301。' },
      { type: 'sfx', screen: true, at: 'L0@sell', until: 'L1', x: 1080, y: 420, text: 'TAP-TAP-TAP', zh: '电报声', size: 52, color: '#f6d77a' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 760, y: 80, w: 560, en: "Surely, Mr. Livingston, you don't mean at the market?", zh: '利文斯顿先生，您总不会是要按市价卖吧？', tx: 1080, ty: 615 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 220, y: 110, w: 420, kind: 'shout', size: 34, en: "Sell it! Don't argue about it!", zh: '卖！别争了！', tx: 600, ty: 600 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 1220, y: 70, w: 620, en: "You'll be sorry, Larry. Tomorrow you'll be paying 320 for it. It's going to 500.", zh: '你会后悔的，拉瑞。明天你就得花320把它买回来。它会涨到500。', tx: 1560, ty: 615 },
      { type: 'note', at: 'L4', x: 1240, y: 110, w: 640, h: 170, size: 30, fill: YEL,
        en: 'Ollie Black had learned telegraphy: he read the order from the clicks of the key.', zh: '奥利·布莱克学过电报：他从电键的嘀嗒声里听出了指令。' }],
    lines: [
      N('The moment it touched 301, I told the telegraph operator, low: sell all my Anaconda, eight thousand shares.', '它一触及301，我就低声对电报员说：把我的安纳康达全卖了，八千股。'),
      L('clerk', "Surely, Mr. Livingston, you don't mean at the market?", '利文斯顿先生，您总不会是要按市价卖吧？', { speak: 'operator' }),
      L('larry', "Sell it! Don't argue about it!", '卖！别争了！', { speak: 'larry' }),
      L('trader', "You'll be sorry, Larry. Tomorrow you'll be paying 320 for it. It's going to 500.", '你会后悔的，拉瑞。明天你就得花320把它买回来。它会涨到500。', { speak: 'ollie' }),
      N('Ollie Black, the Chicago wheat plunger, knew telegraphy and heard every word. I told him: not this trip.', '奥利·布莱克是芝加哥有名的小麦大炒家，他懂电报，听到了发出的每一个字。我对他说：这回不会。'),
    ] });

  lesson(h, { id: 'e05_fills', tag: ['EXECUTION', '执行'], title: ['When You Want to Get Out, Get Out', '想出场，就出场'],
    gest: ['explain', 'point', 'fist', 'explainR'],
    items: [
      { type: 'table', at: 'L1', x: 470, y: 225, w: 640, widths: [0.58, 0.42], size: 30, bottom: 840,
        cols: [['Fill report', '成交回报'], ['Price', '价格']],
        rows: [[['First 500', '第一批500股'], ['299¾', '']], [['Next 1,000', '接下来1,000股'], ['299⅝', '']], [['100 · 200 · 200', '100·200·200股'], ['299½ · ⅜ · ¼', '']],
          [['The rest of the 8,000', '8,000股中的其余部分'], ['down to 298¾', '直到298¾']], [['The last 100 shares', '最后100股'], ['took 15 minutes', '花了15分钟']]],
        rowAt: ['L1@299', 'L1@299+0.8', 'L1@299+1.6', 'L1@298', 'L1@fifteen'], hl: [null, null, null, 'L1@298', null] },
      { type: 'equation', at: 'L0@300', x: 1515, y: 300, size: 50, terms: [{ t: 'Cost ≈ 300', zh: '成本约300', at: 'L0@300' }, { t: '→', at: 'L0@300+0.3' }, { t: 'Out ≈ 299', zh: '卖出约299', at: 'L1@298', hl: true }] },
      { type: 'equation', at: 'L1@fifteen', x: 1515, y: 440, size: 40, terms: [{ t: '≈ 1 pt × 8,000 sh ≈ $8,000', zh: '代价：约1点×8,000股≈8,000美元', at: 'L1@fifteen' }] },
      { type: 'note', at: 'L2', x: 1140, y: 520, w: 750, h: 150, size: 30, fill: PINK, icon: '!',
        en: 'A limit at 300 would never have filled. He would still own the stock.', zh: '限价300永远不会成交。他会一直被套在里面。' },
      { type: 'note', at: 'L2@limits', x: 1140, y: 690, w: 750, h: 150, size: 30, fill: MINT,
        en: 'Next day: opened below 296, then "no market for it at all."', zh: '次日：开盘低于296，随后“根本没有市场”。' }],
    lines: [
      N("Our quotes lagged New York; I'd gladly have taken 296. My stock had cost about 300.", '我们这里的报价落后于纽约；那时有人出296我都会接受。我的成本约为300。'),
      N("The fills came back: 299¾, 299⅝, on down to 298¾. The last hundred took Harding's best floor man fifteen minutes.", '成交回报来了：299¾，299⅝，一路到298¾。最后一百股，哈丁最好的场内经纪人花了十五分钟才卖掉。'),
      N("A limit at 300 would never have filled. That's why I never trade at limits. When you want to get out, get out.", '限价300永远不会成交。这就是我从不用限价单的原因。想出场，就出场。'),
    ] });

  // ---- Smelters, from Aix-les-Bains ----
  shot({ id: 'e05_smelters', set: 'veranda', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1@insiders', on: 'larry', z: 1.35, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 880, s: 1.2, pose: 'relaxed', expr: 'smile', prop: { t: 'paper', text: 'PARIS HERALD' },
      acts: [{ t: 'L1', pose: 'hold', expr: 'think' }, { t: 'L1@insiders', expr: 'angry' }, { t: 'L2', pose: 'point', expr: 'determined' }, { t: 'L3', pose: 'hips', expr: 'smile' }, { t: 'L4', pose: 'explain', expr: 'neutral' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Aix-les-Bains, France, summer 1907.', zh: '1907年夏，法国艾克斯莱班。' },
      { type: 'counter', at: 'L0@three', until: 'L1', x: 1560, y: 300, from: 0, to: 750000, prefix: '$', suffix: '+', size: 80, color: GREEN, label: ['ahead when he sailed for Europe', '启程去欧洲时的盈利'] },
      { type: 'newspaper', screen: true, at: 'L1', until: 'L2@six', x: 1440, y: 360, w: 640, h: 420, paper: 'Paris Herald', date: 'SUMMER 1907', en: 'SMELTERS DECLARES EXTRA DIVIDEND', zh: '冶炼公司宣布派发额外股息', size: 46 },
      { type: 'stamp', screen: true, at: 'L2@six', until: 'L3', x: 1450, y: 330, en: 'FILLED 6 PTS LOWER', zh: '成交价低6点', size: 60 },
      { type: 'counter', at: 'L3@half', x: 1560, y: 300, from: 0, to: 500000, prefix: '$', suffix: '+', size: 80, color: GREEN, label: ['cash for margin, on his return', '回国时可作保证金的现金'] },
      { type: 'stamp', screen: true, at: 'L4@illegal', x: 1450, y: 610, en: 'ILLEGAL TODAY', zh: '如今违法', size: 64 }],
    lines: [
      N('After four months short in New York, I cleaned up three-quarters of a million ahead, and sailed for Europe.', '在纽约做空四个月后，我全部平仓，赚了七十五万多美元，然后乘船去了欧洲。'),
      N('In Aix-les-Bains I read that Smelters had declared an extra dividend: insiders marking prices up to unload, before a money panic.', '在艾克斯莱班，我读到冶炼公司宣布派发额外股息：资金恐慌前夕，内部人正拉抬股价好出货。'),
      N("It was a dare. I cabled orders to sell Smelters short; my fills came six points below the Herald's price.", '这简直是在激我。我发电报下单卖空冶炼股；成交价比《先驱报》上的价格低了六个点。'),
      N('I took the next fast boat home, a month early, with over half a million in cash for margin.', '我坐下一班快船回国，提前了将近一个月，带着五十多万美元现金作保证金。'),
      N('Rigging prices to unload on the public is illegal today; we study it only to recognise it.', '拉抬股价再倒给公众，如今是违法的；我们研究它，只为认出它。'),
    ] });

  photo({ id: 'e05_warnings', src: `${PD}/bank_run_19th_ward_1907_bain.jpg`, credit: 'Run on the 19th Ward Bank, New York, c.1907–14 · Bain News Service (public domain)', music: 'tense',
    cap: ['A run on a New York bank. Historical note: on Oct 22, 1907 the Knickerbocker Trust failed, and runs spread.', '纽约一家银行遭挤兑。历史注：1907年10月22日尼克博克信托倒闭，挤兑随之蔓延。'], capW: 760,
    items: [{ type: 'note', at: 'L1@greatest', x: 1160, y: 500, w: 700, h: 280, size: 30, fill: YEL,
      en: '1 Read the tape. 2 Begin at the right time. 3 Stick to your position. 4 Above all, study general conditions.', zh: '1 读纸带。2 在对的时间开始。3 守住仓位。4 最重要的：研究整体形势。' }],
    lines: [
      N('As money got tighter, call rates went higher and stocks lower. I had foreseen it, and sold more.', '资金越紧，拆借利率越高，股价越低。这一切我早已预见，于是卖空了更多。'),
      N('Tape reading, timing and sitting tight all mattered. But my greatest discovery: study general conditions, to anticipate probabilities.', '读纸带、把握时机、坐得住，都很重要。但我最大的发现是：研究整体形势，以预判概率。'),
    ] });

  lesson(h, { id: 'e05_moneypost', tag: ['HOW THE PANIC WORKED', '恐慌的机制'], title: ['The Money Post: Where the Market Borrowed', '资金柱：股市借钱的地方'], titleSize: 50,
    gest: ['explain', 'point', 'pointUp', 'despair'],
    items: [
      { type: 'flow', dir: 'v', at: 'L0', x: 470, y: 222, w: 830, bh: 130, gap: 40, size: 28, nodes: [
        { en: 'Normal: banks send cash to the Money Post. Loans are made openly', zh: '平时：银行把资金送到资金柱，公开放贷', at: 'L0' },
        { en: 'Noon: renewal rate posted. After 2:15, lend or borrow the balance', zh: '中午公布续借利率；2:15后借出或借入差额', at: 'L0@delivery' },
        { en: 'Oct 1907: two houses grab every loan. Lenders whisper "Want a hundred?"', zh: '1907年10月：两家行抢光贷款。放款人私下问“要十万吗？”', at: 'L1', color: PINK },
        { en: 'No money: stocks sold at any price, and no buyers', zh: '没有钱：股票被不计价格抛售，却没人买', at: 'L3', color: PINK }] },
      { type: 'bars', at: 'L2', x: 1330, y: 220, w: 560, h: 620, title: ['Call money, per year', '活期拆借年利率'], max: 150, vsize: 36,
        bars: [{ v: 6, vl: '6%', en: "National City's ceiling", zh: '花旗银行的上限', at: 'L2', color: GREEN }, { v: 150, vl: '100–150%', en: 'Oct 1907: borrower names it', zh: '1907年10月：借方自己报价', at: 'L2@hundred', color: RED }] }],
    lines: [
      N("Brokers carried stocks on call money, lent openly at the Money Post. After delivery time, 2:15, each lent or borrowed his balance.", '经纪商用活期借款为客户持有股票，这些钱在交易所大厅的“资金柱”旁公开借贷。下午两点一刻交割后，各家借出或借入差额。'),
      N('In October, two houses grabbed every offer and never repaid. Lenders fled the Post and whispered: want a hundred?', '到了十月，有两家经纪行抢走每一笔放款，却从不归还。放款人躲开资金柱，私下低声问：要十万吗？'),
      N('National City Bank boasted it never lent above six percent. Now borrowers named their own rate: a hundred to a hundred and fifty percent.', '花旗银行一向夸口说从不以高于6%的利率放款。如今借款人自己报利率：年息100%到150%。'),
      N('Without money, stocks had to be sold at any price, to buyers as scarce as money.', '没有钱，就只能不计价格地卖股票，而买家和钱一样稀少。'),
    ] });

  shot({ id: 'e05_mouse', set: 'floor', setOpts: { agitated: true, paperN: 30 }, trans: 'whip', music: 'tense',
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'L1', on: 'broker', z: 1.4, dur: 1 }, { t: 'L2', on: 'larry', z: 1.35, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 900, s: 1.2, pose: 'cross', expr: 'neutral', acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'chin', expr: 'worry' }] },
      { id: 'generic', key: 'broker', look: BROKER, x: 1250, y: 900, s: 1.2, flip: true, pose: 'despair', expr: 'shock',
        acts: [{ t: 'L1', pose: 'explain', expr: 'worry' }, { t: 'L1+3', pose: 'grab', expr: 'shock' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'October 24, 1907. The Money Post, Stock Exchange floor.', zh: '1907年10月24日。证券交易所大厅的资金柱。' },
      { type: 'counter', at: 'L0@hundred', until: 'L1', x: 1560, y: 300, from: 0, to: 100, suffix: ' brokers', size: 90, color: RED, label: ['at the Money Post. Money: none', '挤在资金柱旁。资金：零'] },
      { type: 'bubble', at: 'L1', until: 'L2', x: 880, y: 60, w: 720, en: "You know the mouse in a glass bell, gasping as the air is pumped out? That's the Money Post!", zh: '你知道玻璃钟罩里的老鼠吗？空气被抽走时拼命喘气。资金柱旁就是那样！', tx: 1250, ty: 600 },
      { type: 'note', at: 'L2', x: 1260, y: 110, w: 620, h: 160, size: 30, fill: PINK, en: 'No money to carry stocks. Nobody to buy them.', zh: '没钱持股，也没人接盘。' }],
    lines: [
      N("October 24, 1907. At delivery time a hundred brokers crowded the Money Post, each needing money. There wasn't a dollar in sight.", '1907年10月24日。交割时间，上百名经纪人挤在资金柱旁，个个急需借钱。可一美元也看不到。'),
      L('manager', "You know the mouse in a glass bell, gasping as the air is pumped out? That's the Money Post!", '你知道玻璃钟罩里的老鼠吗？空气被抽走时拼命喘气。资金柱旁就是那样！', { speak: 'broker' }),
      N("I'd seen a smash coming, but not the worst panic in our history.", '我预见到会有一场崩盘，却没料到是我们历史上最严重的恐慌。'),
    ] });

  lesson(h, { id: 'e05_rescue', tag: ['OCTOBER 24, 1907', '1907年10月24日'], title: ['How the Stock Market Was Saved', '股市是怎样得救的'],
    gest: ['explain', 'explainR', 'up', 'relaxed'], expr: [null, null, 'determined', 'smile'],
    items: [
      { type: 'photo', at: 'L0@Stillman', x: 500, y: 240, w: 300, h: 360, rot: -2, src: `${PD}/portrait_james_stillman_1907_worldswork.jpg`, en: 'James Stillman', zh: '詹姆斯·斯蒂尔曼（花旗银行）' },
      { type: 'photo', at: 'L0@Morgan', x: 860, y: 240, w: 300, h: 360, rot: 2, src: `${PD}/portrait_jp_morgan_1902.jpg`, en: 'J. P. Morgan', zh: 'J.P.摩根' },
      { type: 'note', at: 'L2', x: 1220, y: 222, w: 670, h: 200, size: 30, fill: YEL,
        en: 'J. T. Atterbury: "I am authorized to lend ten million dollars. Take it easy! There will be enough for everybody!"', zh: '阿特伯里：“我受权放贷一千万美元。别慌！人人都有份！”' },
      { type: 'counter', at: 'L2@ten', x: 1555, y: 520, from: 0, to: 10000000, prefix: '$', size: 74, dur: 1.4, color: GREEN, label: ['lent at the Money Post', '在资金柱放出的贷款'] },
      { type: 'counter', at: 'L2@twenty', x: 1555, y: 700, from: 0, to: 20000000, prefix: '≈ $', size: 74, dur: 1.4, color: GREEN, label: ['bank reserves released', '动用的银行准备金'] },
      { type: 'note', at: 'L3', x: 470, y: 708, w: 820, h: 132, size: 30, fill: MINT, anim: 'slideU',
        en: 'This saved the market; the bank panic came the next week.', zh: '这救了股市；银行恐慌下一周才到来。' }],
    lines: [
      N('Exchange president R. H. Thomas went to James Stillman of the National City Bank. Stillman said: we must see Mr. Morgan.', '交易所总裁R·H·托马斯去向花旗银行的詹姆斯·斯蒂尔曼求援。斯蒂尔曼说：我们得去见摩根先生。'),
      N('Morgan said there would be money. Before half past two, his man John T. Atterbury raised a hand at the Money Post.', '摩根说：会有钱的。下午两点半之前，摩根的人约翰·T·阿特伯里在资金柱旁举起了手。'),
      N('"I am authorized to lend ten million dollars. Take it easy!" Morgan also had the banks use their reserves: about twenty million.', '“我受权放贷一千万美元。别慌！”摩根还让各银行动用了准备金：大约两千万美元。'),
      N("It saved the stock market. The bank panic didn't come until the following week.", '它救了股市。银行恐慌直到下一周才到来。'),
    ] });

  // ---- king for a day ----
  shot({ id: 'e05_king1', set: 'office', trans: 'wipe', music: 'tense',
    setOpts: { board: [['UNION PAC', 'READING', 'STEEL', 'SMELTERS', 'N. PAC'], ['—', '—', '—', '—', '—'], ['', '', '', '', '']],
      boardSeq: [{ t: 'L0@single', r: 1, c: 0, v: 'NO BID' }, { t: 'L0@single+0.4', r: 1, c: 1, v: 'NO BID' }, { t: 'L0@single+0.7', r: 1, c: 2, v: 'NO BID' }, { t: 'L0@single+1.0', r: 1, c: 3, v: 'NO BID' }, { t: 'L0@single+1.3', r: 1, c: 4, v: 'NO BID' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 420, z: 1.05 }, { t: 'L0@single', x: 960, y: 360, z: 1.15, dur: 1 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.4 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.2, pose: 'point', expr: 'determined',
      acts: [{ t: 'L0@single', pose: 'pointUp', expr: 'shock' }, { t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L1@illogical', pose: 'explain', expr: 'determined' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'October 24, 1907. He is heavily short of the whole market.', zh: '1907年10月24日。他重仓做空整个市场。' },
      { type: 'note', at: 'L1', x: 1260, y: 440, w: 620, h: 170, size: 30, fill: MINT, en: 'Paper profits may never turn to cash. A worse panic hurts the country, and the recovery.', zh: '账面利润未必能变现。更大的恐慌会伤害国家，也会拖慢复苏。' },
      { type: 'stamp', screen: true, at: 'L1@buy', x: 1500, y: 720, en: 'COVER · BUY', zh: '平仓·买入', size: 64 }],
    lines: [
      N("With no money at any price, there wasn't a single bid for Union Pacific. A few more sell orders might have closed the Exchange.", '各家经纪行发现无论出多少利息都借不到钱时，联合太平洋连一个买盘都没有。再多几笔卖单，交易所可能就得关门。'),
      N('But paper profits might never become cash, and a worse panic would hurt the country. Staying short was illogical; I began to buy.', '可账面利润未必能变成现金，更严重的恐慌会伤害整个国家。继续做空不合逻辑；我开始买入。'),
    ] });

  shot({ id: 'e05_king2', set: 'office', trans: 'cut', music: 'calm',
    setOpts: { board: [['UNION PAC', 'READING', 'STEEL', 'SMELTERS', 'N. PAC'], ['BID', 'BID', 'BID', 'BID', 'BID'], ['', '', '', '', '']] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'broker', z: 1.35, dur: 1 }, { t: 'L1', on: 'larry', z: 1.45, dur: 1 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.3 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.2, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'explain', expr: 'determined' }, { t: 'L2', pose: 'up', expr: 'smile' }, { t: 'L3', pose: 'hips', expr: 'grin' }] },
      { id: 'generic', key: 'broker', look: BROKER, x: 1250, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'worry',
        acts: [{ t: 'L1', pose: 'idle', expr: 'shock' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }] }],
    items: [{ type: 'bubble', at: 'L0', until: 'L1', x: 940, y: 70, w: 640, en: "Larry, a leading banker hopes you won't sell any more stocks today. The market can't stand much more.", zh: '拉瑞，一位顶级银行家希望你今天别再卖股票了。市场再也承受不住了。', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 260, y: 70, w: 640, en: "Tell him I agree. I won't sell any more today; I'll buy as much as I can carry.", zh: '告诉他我同意。我今天不会再卖了；我要尽我所能地买进。', tx: 700, ty: 590 },
      { type: 'counter', at: 'L2@hundred', until: 'L2@million', x: 1560, y: 300, from: 0, to: 100000, suffix: ' sh', size: 84, label: ['bought for the long account', '买入做多'] },
      { type: 'counter', at: 'L2@million', x: 1560, y: 300, from: 0, to: 1000000, prefix: '$', suffix: '+', size: 84, color: GREEN, label: ['his worth after the close', '收盘后的身家'] },
      { type: 'stamp', screen: true, at: 'L3', x: 700, y: 200, en: 'KING FOR A DAY', zh: '一日之王', size: 66 }],
    lines: [
      L('manager', "Larry, a leading banker hopes you won't sell any more stocks today. The market can't stand much more.", '拉瑞，一位顶级银行家希望你今天别再卖股票了。市场再也承受不住了。', { speak: 'broker' }),
      L('larry', "Tell him I agree. I won't sell any more today; I'll buy as much as I can carry.", '告诉他我同意。我今天不会再卖了；我要尽我所能地买进。', { speak: 'larry' }),
      N('I bought a hundred thousand shares that day, and sold nothing short for nine months. After the close I was worth over a million.', '那天我买了十万股，此后九个月没有卖空过任何股票。收盘后，我的身家超过一百万美元。'),
      N('For a day, I was king.', '有那么一天，我是王者。'),
    ] });

  // ================= Chapter X =================
  chapter('Chapter X · The Line of Least Resistance', '第十章 · 最小阻力线');
  lesson(h, { id: 'e05_lolr', tag: ['METHOD · THE LINE OF LEAST RESISTANCE', '方法 · 最小阻力线'], title: ['Wait for the Market to Show Its Direction', '等市场亮明方向'], titleSize: 50, music: 'calm',
    gest: ['explain', 'shrug', 'point', 'pointUp'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 12], yr: [112, 142], yTicks: [115, 120, 125, 130, 135, 140], illustrative: true, cursorLabel: false,
        title: ['Between swings: a 120–130 range', '两段行情之间：120–130的区间'],
        bands: [{ y0: 120, y1: 130, x0: 0, x1: 8, color: '#b8862a', at: 'L1' }],
        hlines: [{ v: 130, x1: 8, labelX: 0.1, at: 'L2', color: RED, en: '130: selling beats buying', zh: '130：卖盘占上风' },
          { v: 120, x1: 8, labelX: 0.1, below: true, at: 'L2@120', color: GREEN, en: '120: buying beats selling', zh: '120：买盘占上风' }],
        series: [{ pts: [[0, 125], [1, 129.5], [2, 121], [3, 129], [4, 120.5], [5, 128], [6, 122], [7, 129.6], [8, 131.5], [9, 134], [10, 137], [11, 136], [12, 140]], color: '#2f5d8a',
          draw: [['L1', 7], ['L2@breaks', 8], ['L3', 12]] }],
        marks: [{ x: 8, y: 131.5, at: 'L2@breaks', en: 'Breaks 130: the signal', zh: '突破130：信号', dx: -267, dy: -158, w: 260, fill: YEL },
          { x: 10, y: 137, at: 'L3', en: 'Shorts from 120 must buy back', zh: '120附近的空头被迫买回', dx: -138, dy: 110, w: 260 }] },
      { type: 'note', at: 'L0', x: 1500, y: 220, w: 390, h: 250, size: 32, fill: MINT,
        en: 'Up if rising is easier than falling. Down if falling is easier.', zh: '上涨更容易就往上，下跌更容易就往下。' },
      { type: 'note', at: 'L3@allies', x: 1500, y: 495, w: 390, h: 345, size: 32, fill: YEL, anim: 'slideU',
        en: 'Two allies for the patient trader: basic conditions, and the men who are wrong.', zh: '耐心的交易者有两个盟友：基本形势，以及犯错的人。' }],
    lines: [
      N('Prices go where resistance is least: up if rising is easier, down if falling is.', '价格朝阻力最小的方向走：上涨更容易就往上，下跌更容易就往下。'),
      N("Between swings a stock may trade from 120 to 130, strong-looking at the top, weak at the bottom. Don't trade on looks.", '两段行情之间，一只股票可能在120到130之间来回，在顶部看着强，在底部看着弱。不要凭表象交易。'),
      N('At 130 selling beats buying; at 120 buying wins. Wait until the price breaks through a limit: that is your signal.', '在130，卖盘压过买盘；在120，买盘占上风。等价格突破某一边界：那就是你的信号。'),
      N('Then those short at 120 must buy back, pushing it further. Your allies: basic conditions, and the men who are wrong.', '这时在120附近卖空的人必须买回，把价格推得更远。你的盟友：基本形势，以及犯错的人。'),
    ] });

  shot({ id: 'e05_wheatparty', set: 'home', trans: 'wipe', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'f1', z: 1.3, dur: 1 }, { t: 'L2', on: 'larry', z: 1.35, dur: 0.9 }, { t: 'L3', on: 'f2', z: 1.3, dur: 0.9 }, { t: 'L4', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larry', key: 'larry', x: 960, y: 890, s: 1.15, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L0@crosses', pose: 'pointUp', expr: 'determined' }, { t: 'L1', lookX: -1, pose: 'cross', expr: 'neutral' }, { t: 'L2', pose: 'explain', expr: 'smile' }, { t: 'L3', lookX: 1, pose: 'chin', expr: 'think' }, { t: 'L4', lookX: 0, pose: 'explainR', expr: 'determined' }] },
      { id: 'friend', key: 'f1', x: 500, y: 890, s: 1.1, pose: 'relaxed', expr: 'smile', acts: [{ t: 'L1', pose: 'explain', expr: 'grin' }, { t: 'L2e', pose: 'chin', expr: 'think' }] },
      { id: 'trader', key: 'f2', x: 1420, y: 890, s: 1.1, flip: true, pose: 'cross', expr: 'frown', acts: [{ t: 'L3', pose: 'shrug', expr: 'frown' }, { t: 'L4e', pose: 'relaxed', expr: 'smile' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'A party of friends. Wheat: for months between $1.10 and $1.20.', zh: '朋友聚会。小麦：几个月来一直在1.10到1.20美元之间。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 170, y: 90, w: 440, en: 'Why not buy it now, at $1.14?', zh: '为什么不现在买，1.14美元？', tx: 500, ty: 615 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 690, y: 60, w: 540, en: "Because I don't know yet that it is going up at all.", zh: '因为我还不知道它到底会不会涨。', tx: 960, ty: 602 },
      { type: 'bubble', at: 'L3', until: 'L4', x: 1220, y: 80, w: 560, en: 'Then why buy it at $1.20? It seems a mighty high price.', zh: '那为什么要在1.20美元买？这价格看起来很高啊。', tx: 1420, ty: 615 },
      { type: 'bubble', at: 'L4', x: 520, y: 60, w: 880, en: 'Do you want to gamble blindly for a big profit, or speculate intelligently for a smaller, much more probable one?', zh: '你是想盲目赌一笔大利润，还是想明智地投机，赚一笔小一点、但可能性大得多的利润？', tx: 960, ty: 602 }],
    lines: [
      N('Friends asked about wheat, which for months had sold between $1.10 and $1.20. I said: buy the moment it crosses $1.20.', '有一次朋友们问我小麦怎么看。几个月来它一直在1.10到1.20美元之间。我说：一突破1.20美元就买。'),
      L('friend', 'Why not buy it now, at $1.14?', '为什么不现在买，1.14美元？', { speak: 'f1' }),
      L('larry', "Because I don't know yet that it is going up at all.", '因为我还不知道它到底会不会涨。', { speak: 'larry' }),
      L('trader', 'Then why buy it at $1.20? It seems a mighty high price.', '那为什么要在1.20美元买？这价格看起来很高啊。', { speak: 'f2' }),
      L('larry', 'Do you want to gamble blindly for a big profit, or speculate intelligently for a smaller, much more probable one?', '你是想盲目赌一笔大利润，还是想明智地投机，赚一笔小一点、但可能性大得多的利润？', { speak: 'larry' }),
    ] });

  lesson(h, { id: 'e05_wheat', tag: ['CASE STUDY · WHEAT', '案例 · 小麦'], title: ['Buy When It Crosses $1.20, Not at $1.14', '突破1.20美元再买，而不是在1.14'], titleSize: 50,
    gest: ['point', 'explain', 'explainR', 'up'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 12], yr: [1.06, 1.28], yTicks: [1.10, 1.15, 1.20, 1.25], yFmt: '$2', cursorFmt: '$2', illustrative: true,
        title: ['Wheat, per bushel', '小麦，每蒲式耳'],
        bands: [{ y0: 1.10, y1: 1.20, x0: 0, x1: 8.5, color: '#b8862a', at: 0.4 }],
        series: [{ pts: [[0, 1.13], [1.5, 1.19], [3, 1.11], [4.5, 1.18], [5.5, 1.14], [7, 1.17], [8, 1.195], [8.6, 1.205], [9.4, 1.21], [10.2, 1.22], [11, 1.23], [12, 1.25]], color: '#b8862a',
          draw: [[0.5, 5], ['L0', 6], ['L0@opened', 7], ['L0@went', 11]] }],
        marks: [{ x: 5.5, y: 1.14, at: 0.8, en: 'Friend: "Why not buy at $1.14?"', zh: '朋友：“为什么不在1.14买？”', dx: 20, dy: 45, w: 280 },
          { x: 8.6, y: 1.205, at: 'L0@opened', en: 'Opens $1.20½: buy', zh: '开盘1.20½：买入', dx: -309, dy: -153, w: 260, fill: YEL }] },
      { type: 'equation', at: 'L0@went', x: 1695, y: 290, size: 34, terms: [{ t: '1¢ × 1,000,000 bu', zh: '每蒲式耳1美分×100万蒲式耳', at: 'L0@went' }] },
      { type: 'equation', at: 'L0@went+0.6', x: 1695, y: 390, size: 52, terms: [{ t: '= $10,000', zh: '每涨1美分', at: 'L0@went+0.6', hl: true, color: GREEN }] },
      { type: 'note', at: 'L2', x: 1500, y: 440, w: 390, h: 172, size: 30, fill: MINT,
        en: 'Holiday here: Winnipeg +6¢. Next day, we opened +6¢ too.', zh: '我们休市：温尼伯涨6美分。次日我们也高开6美分。' },
      { type: 'note', at: 'L3', x: 1500, y: 626, w: 390, h: 214, size: 30, fill: YEL,
        en: 'Surprises help the man on the line: Saratoga\'s dividend; the submarine news.', zh: '意外帮助站在线上的人：萨拉托加的派息；潜艇消息。' }],
    lines: [
      N('One day it closed above $1.19. Next morning it opened at $1.20½, and I bought. It went to $1.21, $1.22, $1.23, $1.25.', '有一天它收在1.19美元以上。第二天早上开盘1.20½，我买入。它涨到1.21、1.22、1.23、1.25。'),
      N('Europe had been buying quietly, and many were short near $1.19. Crossing $1.20 established the line.', '欧洲一直在悄悄买入，很多人在1.19美元附近做空。突破1.20，最小阻力线就确立了。'),
      N('Once, on a holiday here, Winnipeg opened six cents up; next day, so did we.', '有一次我们这边休市，温尼伯开盘涨了六美分；第二天我们也一样。'),
      N("On that line the unexpected always helped me: short a hundred and fifty thousand shares before the war, I covered on Germany's submarine announcement.", '只要站在那条线上，意外之事总是帮我的忙。战前我做空了十五万股，德国宣布潜艇政策那天，我平了仓。'),
    ] });

  photo({ id: 'e05_levee', src: `${PD}/cotton_levee_new_orleans_1903_detroit.jpg`, credit: 'Cotton on the levee, New Orleans, c.1903 · Detroit Publishing Co. (public domain)', music: 'calm',
    cap: ['Cotton on the New Orleans levee, c. 1903.', '约1903年，新奥尔良码头上的棉花。'],
    kb: [{ t: 0, x: 960, y: 560, z: 1.02 }, { t: 12, x: 1010, y: 520, z: 1.15 }],
    lines: [
      N("I'd rather trade commodities. No clique can pass a dividend on cotton. In the end, the facts of supply and demand prevail.", '比起股票，我更愿意做商品。没有哪个小集团能让棉花停发股息。归根结底，供求的事实会占上风。'),
      N('And the trend is set before the news: a bull market ignores bear news and exaggerates bull news.', '而且趋势总在新闻之前形成：牛市里，利空被忽视，利好被夸大。'),
      N('Yet even in cotton, I once tried to anticipate the signal.', '可即便在棉花上，我也曾试图抢在信号之前。'),
    ] });

  lesson(h, { id: 'e05_push', tag: ['MISTAKE', '错误'], tagColor: RED, title: ['Trying to Start the Move: −$200,000', '试图自己启动行情：亏20万美元'], titleSize: 50,
    gest: ['explain', 'fist', 'despair'], expr: [null, 'determined', 'sad'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 12], yr: [11.4, 13.4], yTicks: [11.5, 12, 12.5, 13], yFmt: 'd2', ySuf: '¢', cursorLabel: false, illustrative: true,
        title: ['Cotton, cents per pound', '棉花，美分/磅'],
        series: [{ pts: [[0, 12], [0.7, 12.25], [1.4, 11.95], [2.1, 12.27], [2.8, 11.93], [3.5, 12.3], [4.2, 11.9], [4.9, 12.25], [5.6, 11.92], [7, 12], [8, 12.1], [9, 12.4], [10.5, 12.9], [12, 13.3]], color: '#7a4a22',
          draw: [['L0', 1], ['L1', 9], ['L2', 13]] }],
        bands: [{ x0: 0, x1: 0.7, y0: 11.4, y1: 13.4, color: GREEN, at: 'L0@fifty' }, { x0: 1.4, x1: 2.1, y0: 11.4, y1: 13.4, color: GREEN, at: 'L1+0.6' }, { x0: 2.8, x1: 3.5, y0: 11.4, y1: 13.4, color: GREEN, at: 'L1+1.2' }, { x0: 4.2, x1: 4.9, y0: 11.4, y1: 13.4, color: GREEN, at: 'L1+1.8' }],
        marks: [{ x: 0.7, y: 12.25, at: 'L1', en: 'He buys: it rises', zh: '他买：价格上涨', dx: -30, dy: -266, w: 260 },
          { x: 1.4, y: 11.95, at: 'L1@sank', en: 'He stops: it sinks', zh: '他一停：价格下跌', dx: 21, dy: 42, w: 260, fill: PINK },
          { x: 10.5, y: 12.9, at: 'L2', en: 'After he quit: the real rise', zh: '他放弃后：真正的上涨', dx: -374, dy: -110, w: 280 }] },
      { type: 'counter', at: 'L1@two', x: 1695, y: 330, from: 0, to: -200000, fmt: '$', size: 80, dur: 1.6, color: RED, label: ['cost of pushing, about', '强推的代价，约'] },
      { type: 'note', at: 'L2@narrow', x: 1500, y: 480, w: 390, h: 360, size: 32, fill: YEL, anim: 'slideU',
        en: "In a narrow market, don't guess or push. Mark the limits; act only on a break.", zh: '窄幅市场里，不猜，也不推。标出边界，突破了才行动。' }],
    lines: [
      N('Cotton hung around twelve cents in a narrow range. Very bullish, I bought fifty thousand bales to give it a push.', '棉花在十二美分附近窄幅徘徊。我非常看涨，买了五万包，想推它一把。'),
      N('It rose while I bought, and sank when I stopped. Four or five times. It cost me about two hundred thousand dollars.', '我买的时候它涨，我一停它就跌。前后四五次。这让我亏了大约二十万美元。'),
      N("Soon after I quit, it started up and never stopped. In a narrow market, don't anticipate: mark the limits, and wait.", '我放弃后不久，它开始上涨，而且一路不停。在窄幅市场里，不要抢跑。标出边界，等待突破。'),
    ] });

  // ---- systems: Pat Hearne, and his deserter ----
  shot({ id: 'e05_hearne', set: 'veranda', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'oldgent', z: 1.3, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 880, s: 1.2, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'cross', expr: 'neutral' }] },
      { id: 'generic', key: 'oldgent', look: OLDGENT, x: 1250, y: 880, s: 1.15, flip: true, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L1', pose: 'explain', expr: 'smile' }, { t: 'L1@stop', pose: 'pointUp', expr: 'neutral' }, { t: 'L2', pose: 'shrug', expr: 'sad' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Palm Beach. An old gentleman, in the Street since Civil War days.', zh: '棕榈滩。一位老先生，从南北战争时就在华尔街了。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 860, y: 60, w: 760, en: 'Pat Hearne: "You can\'t tell till you bet." Buy 100; each 1-point rise, 100 more. Stop: 1 point below the last buy.', zh: '帕特·赫恩："不下注就不知道。"先买100股；每涨1点再买100股。止损：最后一次买入价下方1点。', tx: 1250, ty: 592 },
      { type: 'bubble', at: 'L2', x: 860, y: 60, w: 760, en: 'A follower: +$100,000 in Lackawanna. Then he dropped the system, let losses run, and lost it all.', zh: '一个追随者：在拉克万纳上赚了10万多美元。后来抛弃了系统，任由亏损扩大，全部输光。', tx: 1250, ty: 592 }],
    lines: [
      N('An old gentleman in Palm Beach, in the Street since Civil War days, told me about a gambler, Pat Hearne.', '我在棕榈滩遇到一位老先生，他从南北战争时就在华尔街了。他给我讲了赌徒帕特·赫恩的故事。'),
      L('fullerton', "Pat's only tip: you can't tell till you bet. He bought a hundred, another hundred each point up, with a stop a point below his last buy.", '帕特唯一的“消息”是：不下注就不知道。他先买一百股，每涨一个点再加一百股，止损设在最后一次买入价下方一个点。', { speak: 'oldgent' }),
      L('fullerton', 'A customer using his system made over a hundred thousand in Lackawanna, then dropped it, let losses run, and lost every cent.', '有个用他这套方法的客户，在拉克万纳铁路股上赚了十多万。后来他抛弃了它，任由亏损扩大，输得一分不剩。', { speak: 'oldgent' }),
    ] });

  lesson(h, { id: 'e05_systems', tag: ['METHOD · PROBE, THEN LOAD', '方法 · 先试探，再加仓'], title: ['Big Bets Only When Winning', '只在赢的时候下大注'],
    gest: ['explain', 'pointUp', 'explainR'],
    items: [
      { type: 'bars', at: 'L1', x: 470, y: 220, w: 900, h: 620, title: ['Building a 40,000-bale cotton line', '建立4万包的棉花仓位'], max: 40000, vsize: 32,
        bars: [{ v: 10000, vl: '10,000', en: 'Probe: buy 10,000', zh: '试探：买1万包', at: 'L1@ten', color: '#c9a26a' },
          { v: 20000, vl: '20,000', en: 'Up 10 pts: +10,000', zh: '涨10点：+1万包', at: 'L1@Up', color: '#c9a26a' },
          { v: 40000, vl: '40,000', en: 'Up 20 pts ($1/bale): +20,000', zh: '涨20点（每包1美元）：+2万包', at: 'L1@twenty', color: GREEN }] },
      { type: 'note', at: 'L0', x: 1400, y: 220, w: 490, h: 215, size: 30, fill: MINT,
        en: 'First lot ≈ ⅕ of the line. No profit? Add nothing: "UP" has become "NOT YET".', zh: '第一批约占仓位⅕。没有盈利？不加仓：“上涨”变成了“还没到”。' },
      { type: 'note', at: 'L1@dollar', x: 1400, y: 450, w: 490, h: 180, size: 30,
        en: '1 cotton point = 1/100¢ a pound. 500-lb bale: 20 points = $1.', zh: '棉花1点＝每磅0.01美分。一包500磅：20点＝1美元。' },
      { type: 'note', at: 'L2', x: 1400, y: 645, w: 490, h: 195, size: 30, fill: PINK,
        en: 'First lots lose? Out. Probes cost $50–60,000, soon repaid.', zh: '最初几批亏损？离场。试探花5–6万美元，很快赚回。' }],
    lines: [
      N('Accumulate on the way up, starting with about a fifth of your line. No profit? Add nothing: the tape is saying not yet.', '在上涨途中建仓，先买大约五分之一。如果没有盈利，就不加仓：纸带是在说“还没到时候”。'),
      N('In cotton, for a forty-thousand-bale line, I bought ten thousand. Up ten points, ten thousand more; up twenty, a dollar a bale, twenty thousand.', '做棉花时，满仓若是四万包，我先买一万包。涨十个点，再买一万包。涨二十个点，也就是每包一美元，再买两万包。'),
      N('If the first lots showed a loss, out I went. Those probes cost fifty or sixty thousand dollars; the real move repaid them at once.', '如果最初几批出现亏损，我就离场。这些试探花了五六万美元；真行情一来，几乎立刻就赚回来了。'),
    ] });

  shot({ id: 'e05_hope', set: 'study', setOpts: { night: true, lampX: 1650 }, trans: 'dip', music: 'dark',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'nar', z: 1.3, dur: 1.4 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.2 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 600, y: 880, s: 1.25, pose: 'chin', expr: 'sad',
      acts: [{ t: 'L1', pose: 'explain', expr: 'neutral' }, { t: 'L1@Winning', pose: 'explainR' }, { t: 'L2', pose: 'fist', expr: 'determined' }, { t: 'L3', pose: 'relaxed', expr: 'smile' }] }],
    items: [
      { type: 'note', at: 'L0', x: 1180, y: 105, w: 700, h: 205, size: 30, fill: PINK,
        en: 'Roberts, 1875: short Lake Shore, +$15,000 in 4 days, no stop. Mid-September: borrowed $10 for a baby carriage.', zh: '罗伯茨，1875年：做空湖岸铁路，四天赚1.5万美元，不设止损。到九月中旬：借10美元买婴儿车。' },
      { type: 'table', at: 'L1', x: 1180, y: 325, w: 700, widths: [0.24, 0.38, 0.38], size: 28, bottom: 660,
        cols: [['', ''], ['Instinct', '本能'], ['The trader', '交易者']],
        rows: [[['Losing', '亏损时'], ['Hopes, and holds on', '抱着希望，死扛'], ['Fears it will grow: cuts it', '怕亏损扩大：砍掉']],
          [['Winning', '盈利时'], ['Fears, and takes it early', '心怀恐惧，早早落袋'], ['Hopes it will grow: holds', '盼利润增长：拿住']]],
        rowAt: ['L1@Losing', 'L1@Winning'], hl: ['L2', 'L2@hope'] },
      { type: 'note', at: 'L3', x: 1180, y: 665, w: 700, h: 175, size: 28, fill: MINT,
        en: 'D. G. Watts\' story: "So much cotton I can\'t sleep!" "Sell down to the sleeping point."', zh: '瓦茨讲的故事：“棉花太多，我睡不着！”“那就卖到你能睡着为止。”' }],
    lines: [
      N('That follower, Roberts, later shorted Lake Shore: fifteen thousand in four days, but no stop. By mid-September he borrowed ten dollars for a baby carriage.', '那个追随者罗伯茨后来做空湖岸铁路：四天赚了一万五千美元，却不设止损。到九月中旬，他得借十美元买婴儿车。'),
      N("He listened to hope. Our enemies are within: hope and fear. Losing, you hope, and lose more; winning, you fear, and quit too soon.", '他听信了希望。投机者的敌人来自内心：希望和恐惧。亏损时你抱着希望，于是亏得更多；盈利时你心怀恐惧，于是过早离场。'),
      N('Reverse them: fear that a loss will grow, and cut it; hope that a profit will grow, and hold it.', '把它们反过来：害怕亏损扩大，就砍掉它；期待利润增长，就拿住它。'),
      N("A loss never bothers me once I take it; being wrong and not taking it does the damage. Sell down to the sleeping point.", '亏损一旦认了，就不会再困扰我；错了却不认亏，才真正伤人。卖到你能睡着为止。'),
    ] });

  photo({ id: 'e05_racetrack', src: `${PD}/saratoga_racetrack_crowd_1913_bain.jpg`, credit: 'Race track, Saratoga, July 1913 · Bain News Service (public domain)', music: 'calm',
    cap: ['The race track at Saratoga, 1913.', '1913年的萨拉托加赛马场。'],
    kb: [{ t: 0, x: 960, y: 540, z: 1.02 }, { t: 12, x: 920, y: 500, z: 1.14 }],
    lines: [
      N('After nearly thirty years: a man may beat a stock at a certain time, but no man living can beat the stock market, or the grain market.', '近三十年后，我的结论是：一个人可以在某个时候战胜某只股票，但没有活人能战胜股市，也战胜不了谷物市场。'),
      N('A man may beat a horse race. He cannot beat horse racing.', '人可以赢一场赛马，却赢不了赛马这件事。'),
    ] });

  // ---- summary ----
  lesson(h, { id: 'e05_rules', tag: ['TAKEAWAYS', '要点'], title: ['What Episode Five Teaches', '第五集的要点'],
    gest: ['explain', 'point', 'pointUp'],
    items: [
      { type: 'rule', at: 'L0@failure', x: 470, y: 222, w: 1420, h: 112, n: '1', size: 32, tag: RED, en: 'Set your "wrong" point before you trade. Exit at the market.', zh: '交易前先设好认错点。触及就按市价离场。' },
      { type: 'rule', at: 'L1', x: 470, y: 346, w: 1420, h: 112, n: '2', size: 32, en: 'Study general conditions, above all money.', zh: '研究整体形势，尤其是资金。' },
      { type: 'rule', at: 'L1@Wait', x: 470, y: 470, w: 1420, h: 112, n: '3', size: 32, en: 'Wait for the line of least resistance. Never push it.', zh: '等待最小阻力线显现。绝不去推它。' },
      { type: 'rule', at: 'L2', x: 470, y: 594, w: 1420, h: 112, n: '4', size: 32, tag: GREEN, en: 'Probe with a fifth; bet big only when winning.', zh: '先用五分之一试探；只在赢的时候下大注。' },
      { type: 'rule', at: 'L2@reverse', x: 470, y: 718, w: 1420, h: 112, n: '5', size: 32, en: 'Fear the loss; hope for the profit.', zh: '对亏损心存恐惧，对利润抱有希望。' }],
    lines: [
      N('The rules. Set your failure point in advance, and exit at the market when it is hit.', '规则如下。事先设好认错点；一旦触及，按市价离场。'),
      N('Study conditions, money above all. Wait for the line of least resistance; never push it.', '研究形势，尤其是资金。等待最小阻力线；绝不去推它。'),
      N('Probe small, bet big only when winning, and reverse your instincts: fear the loss, hope for the profit.', '小仓试探，只在赢时下大注，把本能反过来：怕亏损，盼利润。'),
    ] });

  lesson(h, { id: 'e05_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: RED, title: ['Mistake → Cause → Rule', '错误 → 原因 → 规则'],
    gest: ['explain', 'despair'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 225, w: 1420, widths: [0.34, 0.31, 0.35], size: 30, bottom: 835,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [[['Bought a breakout that failed', '买入的突破失败了'], ['A precedent failed this time', '先例这一次失灵了'], ['Set the failure point; exit at market', '设好认错点；按市价离场']],
        [['Pushed cotton: −$200,000', '强推棉花：−20万美元'], ['Impatience: anticipated the signal', '不耐烦：抢在信号之前'], ['Mark the limits; wait for the break', '标出边界；等待突破']],
        [['Roberts dropped his system', '罗伯茨抛弃了他的系统'], ['A big win made him careless', '大赚一笔后放松了纪律'], ['Keep the system that works', '坚持有效的系统']],
        [['Held losers, cut winners', '死扛亏损，砍掉盈利'], ['Hope and fear, not reversed', '没有把希望和恐惧反过来'], ['Fear the loss; hope for the profit', '怕亏损，盼利润']]],
      rowAt: ['L0', 'L1', 'L1@Roberts', 'L1@instinct'] }],
    lines: [
      N("The mistakes. Anaconda's breakout failed; the cure was a failure point set in advance, and a market order.", '错误复盘。安纳康达的突破失败了；对策是事先设好认错点，并用市价单出场。'),
      N('Pushing cotton cost two hundred thousand dollars. Roberts abandoned a winning system. And instinct holds losers while it cuts winners.', '强推棉花亏了二十万美元。罗伯茨抛弃了赚钱的系统。而本能总是死扛亏损、砍掉盈利。'),
    ] });
};
