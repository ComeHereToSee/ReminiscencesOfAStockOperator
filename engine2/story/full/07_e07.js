// Full version, episode 7: The Comeback (Book ch. XIII–XIV, c. 1909–1917)
// Cases: Williamson & Brown and the Marquand smoke screen; the lean years; bankruptcy; Bethlehem Steel 1915 and the
// "crossing par" rule; the Lusitania; reading the 1916 top from the leaders; Palm Beach 1917 and the submarine note;
// repaying the debts; annuities and trusts.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  const RED = '#b3302a', GREEN = '#2f6b3d', BLUE = '#2f5d8a', PINK = '#f3c6c0', MINT = '#cfe3c4', YEL = '#f6d77a';
  episode(7, 'Reminiscences_E07_The_Comeback');

  // ======================= Chapter XIII =======================
  chapter('Chapter XIII · The Smoke Screen', '第十三章 · 烟幕');
  music('dark');
  title({ id: 'e07_title', kicker: 'EPISODE 7 · 第7集', en: 'The Comeback', zh: '东山再起', color: GREEN,
    sub: ['Book chapters XIII–XIV · c. 1909–1917', '原著第十三至十四章 · 约1909–1917年'],
    lines: [N('Episode seven. The comeback.', '第七集：东山再起。')] });

  shot({ id: 'e07_train', set: 'train', trans: 'dip', music: 'dark',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.35, dur: 2 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.2, pose: 'chin', expr: 'tired', lookX: 0.6,
      acts: [{ t: 'L0@sick', pose: 'despair', expr: 'sad' }, { t: 'L1', pose: 'cross', expr: 'worry' }, { t: 'L1@know', pose: 'chin', expr: 'think' }, { t: 'L1@Chicago', pose: 'relaxed', expr: 'determined' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Leaving New York, beaten by the game.', zh: '离开纽约，被投机游戏打败了。', w: 560 },
      { type: 'counter', at: 'L1@hundred', x: 1480, y: 260, from: 0, to: -100000, fmt: '$', suffix: '+', size: 84, dur: 1.4, color: RED, label: ['owed to various brokers', '欠多家经纪商的债'] }],
    lines: [
      N('Broke again, and wrong, which was worse. I was sick and nervous, unable to reason calmly. No speculator should trade in that state.', '我又破产了，而且判断错了，这更糟。我病了，心神不宁，无法冷静思考。投机者绝不该在这种状态下交易。'),
      N('I owed over a hundred thousand dollars to various brokers. A man must know himself. I went to Chicago to find a stake.', '我欠了多家经纪商十多万美元。一个人必须了解自己。我去了芝加哥，想找一笔本钱。'),
    ] });

  shot({ id: 'e07_tucker', set: 'office', trans: 'whip', music: 'calm',
    setOpts: { board: [['TELEGRAM · TO L. LIVINGSTON, CHICAGO'], [''], ['']], ticker: false,
      boardSeq: [{ t: 'L0@telegram', r: 1, c: 0, v: 'COME TO NEW YORK AT ONCE.' }, { t: 'L0@Tucker', r: 2, c: 0, v: '— L. TUCKER' }] },
    cam: [{ t: 0, x: 960, y: 460, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.35, dur: 1 }, { t: 'L2', on: 'lucius', z: 1.35, dur: 1 }],
    cast: [
      { id: 'larry', x: 620, y: 890, s: 1.2, pose: 'phone', expr: 'think', prop: { t: 'phone' }, lookX: 0.4,
        acts: [{ t: 'L0@telegram', expr: 'shock', lookX: 0 }, { t: 'L1', pose: 'phone', expr: 'frown' }, { t: 'L2', expr: 'think' }, { t: 'L2@quick', expr: 'determined' }] },
      { id: 'manager', key: 'lucius', x: 1300, y: 890, s: 1.2, flip: true, pose: 'phone', expr: 'smile', prop: { t: 'phone' }, at: 'L1',
        acts: [{ t: 'L2', pose: 'phone', expr: 'grin' }, { t: 'L2@advice', expr: 'determined' }] }],
    items: [
      { type: 'bubble', at: 'L1', until: 'L2', x: 300, y: 70, w: 560, en: 'Look here, Lucius, just tell me this much: is this a fool trip?', zh: '听着，卢修斯，你就告诉我一句：这趟是不是白跑？', tx: 620, ty: 590 },
      { type: 'bubble', at: 'L2', x: 980, y: 60, w: 640, en: 'Certainly not. A big banker in New York wants to see you. Come, and come quick.', zh: '当然不是。纽约有位大银行家要见你。快来，越快越好。', tx: 1300, ty: 590 }],
    lines: [
      N('In Chicago an old brokerage house let me trade in a small way. Then came a telegram from Lucius Tucker.', '在芝加哥，一家我以前打过交道的经纪行让我做些小额交易。后来，卢修斯·塔克发来一封电报。'),
      L('larry', 'Look here, Lucius, just tell me this much: is this a fool trip?', '听着，卢修斯，你就告诉我一句：这趟是不是白跑？', { speak: 'larry' }),
      L('manager', 'Certainly not. A big banker in New York wants to see you. Take my advice: come, and come quick.', '当然不是。纽约有位大银行家要见你。听我的：快来，越快越好。', { speak: 'lucius' }),
    ] });

  photo({ id: 'e07_stillman', src: `${PD}/portrait_james_stillman_1907_worldswork.jpg`, credit: "James Stillman · The World's Work, 1907 (public domain)", music: 'calm',
    cap: ['James Stillman (1850–1918), National City Bank, Williamson\'s close friend. He listened in silence, kept looking, and men offered better terms.', '詹姆斯·斯蒂尔曼（1850–1918），花旗银行总裁，威廉森的密友。他一声不吭地听，听完继续看着对方，对方往往就开出更好的条件。'], capW: 680,
    kb: [{ t: 0, x: 960, y: 500, z: 1.02 }, { t: 12, x: 960, y: 440, z: 1.15 }],
    lines: [
      N('Lucius took me to Dan Williamson of Williamson and Brown. Like James Stillman of the National City Bank, I let a man say everything before I decide.', '卢修斯带我去见威廉森与布朗公司的丹·威廉森。像花旗银行的詹姆斯·斯蒂尔曼那样，我总是先让对方把话说完，再做决定。'),
    ] });

  shot({ id: 'e07_offer', set: 'study', setOpts: { lampX: 1700 }, trans: 'wipe', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'williamson', z: 1.3, dur: 1.2 }, { t: 'L1', on: 'larry', z: 1.35, dur: 1 }, { t: 'L2', on: 'williamson', z: 1.3, dur: 1 },
      { t: 'L3', x: 1000, y: 520, z: 1.12, dur: 1.2 }, { t: 'L4', x: 960, y: 520, z: 1.0, dur: 1.4 }],
    cast: [
      { id: 'williamson', x: 1250, y: 890, s: 1.2, flip: true, pose: 'explain', expr: 'smile',
        acts: [{ t: 'L1', pose: 'relaxed', expr: 'smile' }, { t: 'L2', pose: 'holdR', expr: 'grin' }, { t: 'L3', pose: 'explainR', expr: 'sly' }, { t: 'L4', pose: 'cross', expr: 'smile' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'shrug', expr: 'sad' }, { t: 'L2', pose: 'chin', expr: 'shock' }, { t: 'L3', pose: 'chin', expr: 'think' }, { t: 'L4', pose: 'hold', expr: 'smile' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'Dan Williamson. His biggest customer: his brother-in-law Alvin Marquand, worth $250 million at his death.', zh: '丹·威廉森。他最大的客户是他的姻亲兄弟阿尔文·马昆德，去世时身家2.5亿美元。', w: 700 },
      { type: 'bubble', at: 'L0', until: 'L1', x: 900, y: 60, w: 620, en: 'Mr. Livingston, my firm would like to do your stock business.', zh: '利文斯顿先生，敝号想承接您的股票生意。', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 360, y: 70, w: 560, en: "I'd like to give it to you, but I can't. I haven't any money.", zh: '我倒是想给您，可是做不到。我没钱。', tx: 680, ty: 590 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 900, y: 60, w: 620, en: "That part is all right. I'll furnish it. If that money goes, I'll give you another check.", zh: '这不成问题，钱我来出。这笔没了，我再给你一张支票。', tx: 1250, ty: 590 },
      { type: 'ticket', at: 'L2@furnish', x: 960, y: 700, rot: -5, color: MINT, head: 'WILLIAMSON & BROWN', lines: ['PAY TO L. LIVINGSTON', '$25,000.00', 'D. WILLIAMSON'] },
      { type: 'bubble', at: 'L3', until: 'L4', x: 820, y: 60, w: 760, en: "With you trading here, the Street won't know whether it's your short selling or my wealthy customers' long stock.", zh: '有您在这里交易，华尔街就分不清卖出的是您的空单，还是我那些阔客户的多头股票。', tx: 1250, ty: 590 },
      { type: 'note', at: 'L4@cover', x: 80, y: 90, w: 600, h: 170, size: 28, fill: YEL, en: "His real aim: use a famous bear's name to cover an insider's selling.", zh: '他的真实目的：用著名空头的名号，掩护内部人的抛售。' }],
    lines: [
      L('williamson', 'Mr. Livingston, my firm would like to do your stock business.', '利文斯顿先生，敝号想承接您的股票生意。', { speak: 'williamson' }),
      L('larry', "I'd like to give it to you, but I can't. I haven't any money.", '我倒是想给您，可是做不到。我没钱。', { speak: 'larry' }),
      L('williamson', "That part is all right. I'll furnish it. If that money goes, I'll give you another check.", '这不成问题，钱我来出。这笔钱要是没了，我再给你一张支票。', { speak: 'williamson' }),
      L('williamson', "With you trading here, the Street won't know if it's your short selling or my wealthy customers' long stock.", '有您在这里交易，华尔街就分不清卖出的是您的空单，还是我那些阔客户的多头股票。', { speak: 'williamson' }),
      N("He wanted my plunger's reputation to cover his brother-in-law, Alvin Marquand, president of the Chesapeake and Atlantic. I took the check.", '他想借我这个“豪赌客”的名声，来掩护他的姻亲兄弟、切萨皮克与大西洋铁路总裁阿尔文·马昆德。我收下了支票。'),
    ] });

  lesson(h, { id: 'e07_threeweeks', tag: ['THE BIGGEST REGRET', '最大的遗憾'], tagColor: RED, title: ['Three Weeks, $112,000, and a Favour Unpaid', '三周、11.2万美元，和一份没还的人情'], titleSize: 50, music: 'calm',
    gest: ['explain', 'despair', 'explainR'], expr: [null, 'sad', null],
    items: [
      { type: 'bars', at: 'L0', x: 470, y: 220, w: 640, h: 620, title: ['His account, three weeks', '他的账户，三周'], max: 112000, vsize: 34,
        bars: [{ v: 25000, vl: '$25,000', en: "Williamson's check", zh: '威廉森的支票', at: 'L0@twenty', color: '#c9a26a' },
          { v: 112000, vl: '+$112,000', en: 'Profit in 3 weeks', zh: '三周利润', at: 'L0@hundred', color: GREEN }] },
      { type: 'equation', at: 'L0@fifty', x: 1500, y: 310, size: 60, terms: [{ t: '≈150%', zh: '平均每周', at: 'L0@fifty', hl: true }, { t: 'a week', at: 'L0@week' }] },
      { type: 'note', at: 'L1@waved', x: 1150, y: 400, w: 740, h: 170, size: 30, fill: MINT, anim: 'slideU', en: '"No, no, my boy! Wait until your account amounts to something."', zh: '“不不不，孩子！等你的账户像点样子再说。”' },
      { type: 'rule', at: 'L1@regret', x: 1150, y: 600, w: 740, h: 230, n: '!', tag: RED, fill: PINK, size: 30, en: 'Not insisting was his costliest mistake. Favours are repaid in kind, with no statute of limitations.', zh: '没有坚持还钱，是他代价最高的错误。人情要用人情还，而且没有诉讼时效。' }],
    lines: [
      N('In three weeks I made a hundred and twelve thousand dollars on his twenty-five thousand: a hundred and fifty percent a week, on average.', '三周之内，我用他的两万五千美元赚了十一万二千美元，平均每周百分之一百五十。'),
      N('I went to pay him back. He waved me away: wait until your account amounts to something. Not insisting is the mistake I regret most.', '我去还他钱。他摆摆手：等你的账户像点样子再说。没有坚持还钱，是我最后悔的错误。'),
      N("Since he left his money in, I felt I couldn't take my profit out. Favours must be repaid in kind, with no statute of limitations.", '既然他的钱没取走，我也觉得不好把自己的利润取出来。人情得用人情来还，而且永远没有诉讼时效。'),
    ] });

  shot({ id: 'e07_london', set: 'study', setOpts: { lampX: 1700 }, trans: 'whip', music: 'tense',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'williamson', z: 1.4, dur: 1.2 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [
      { id: 'williamson', x: 1250, y: 890, s: 1.2, flip: true, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L1', pose: 'explainR', expr: 'sly' }, { t: 'L1@know', pose: 'pointUp', expr: 'smile' }, { t: 'L2', pose: 'hold', expr: 'smile' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'explain', expr: 'determined',
        acts: [{ t: 'L1', pose: 'relaxed', expr: 'shock' }, { t: 'L2', pose: 'chin', expr: 'worry' }, { t: 'L2@owed', pose: 'despair', expr: 'sad' }] }],
    items: [
      { type: 'note', at: 'L0@eight', until: 'L1', x: 80, y: 90, w: 600, h: 110, size: 30, fill: YEL, align: 'center', en: 'Short ≈8,000 Chesapeake & Atlantic', zh: '做空约8,000股切萨皮克与大西洋' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 860, y: 60, w: 700, en: "Larry, that was a bad play. I covered your short this morning in London and went long. I know something you couldn't know.", zh: '拉瑞，那步棋走错了。今早我在伦敦替你平了空单，还做了多。我知道一些你不可能知道的事。', tx: 1250, ty: 590 },
      { type: 'stamp', screen: true, at: 'L1@London', until: 'L2', x: 470, y: 330, en: 'COVERED IN LONDON', zh: '在伦敦被平仓', size: 54, rot: -8 },
      { type: 'counter', at: 'L2@profit', x: 420, y: 260, from: 112000, to: -150000, fmt: '$', dur: 2.4, size: 84, color: RED, label: ['his profit, then his debt', '他的利润，变成了债务'] }],
    lines: [
      N('I was myself again. I turned bearish and sold several railroads short, among them about eight thousand Chesapeake and Atlantic.', '我又找回了自己。我转为看空，卖空了几只铁路股，其中有大约八千股切萨皮克与大西洋。'),
      L('williamson', "Larry, that was a bad play. I covered your short this morning in London and went long. I know something you couldn't know.", '拉瑞，那步棋走错了。今早我在伦敦替你平了空单，还做了多。我知道一些你不可能知道的事。', { speak: 'williamson' }),
      N("Advice from the chairman's brother-in-law, who had been kind to me. I gave in. Soon my profit was gone, and I owed a hundred and fifty thousand.", '这是董事长的姻亲兄弟给的建议，而且他待我不薄。我让步了。很快，我的利润化为乌有，还欠了十五万美元。'),
    ] });

  shot({ id: 'e07_slips', set: 'study', setOpts: { lampX: 1700 }, trans: 'push', music: 'dark',
    cam: [{ t: 0, x: 900, y: 520, z: 1.0 }, { t: 'L0', on: 'williamson', z: 1.3, dur: 1.2 }, { t: 'L1', x: 960, y: 520, z: 1.0, dur: 1.2 }, { t: 'L2@tumbled', on: 'larry', z: 1.4, dur: 1.2 }],
    cast: [
      { id: 'williamson', x: 600, y: 890, s: 1.2, pose: 'explain', expr: 'smile', prop: { t: 'paper', text: 'CREDIT SLIPS' },
        acts: [{ t: 'L1', pose: 'holdR', expr: 'grin' }, { t: 'L1@Southern', pose: 'explain', expr: 'smile' }, { t: 'L2', pose: 'shrug', expr: 'smile' }] },
      { id: 'larry', x: 1000, y: 890, s: 1.2, flip: true, pose: 'chin', expr: 'tired',
        acts: [{ t: 'L1', pose: 'hold', expr: 'smile' }, { t: 'L1@down', pose: 'despair', expr: 'sad' }, { t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L2@tumbled', pose: 'fist', expr: 'angry' }] }],
    items: [
      { type: 'bubble', at: 'L0', until: 'L1', x: 260, y: 60, w: 640, en: "I'll get you out of this hole, Larry. But you must lay off the market, and let me work.", zh: '我会把你从这个坑里拉出来，拉瑞。但你得别碰市场，让我来操作。', tx: 600, ty: 590 },
      { type: 'table', at: 'L0', x: 1160, y: 90, w: 720, widths: [0.56, 0.44], size: 28, bottom: 560,
        cols: [["Williamson's move", '威廉森的动作'], ['His account', '他的账户']],
        rows: [[['"Lay off the market"', '“别碰市场”'], ['Owes $150,000', '欠15万美元']],
          [['~6 months: credit slips', '约六个月后：贷记单'], ['Debt wiped out', '债务清零']],
          [['Buys him 10,000 Southern Atlantic', '替他买1万股南大西洋'], ['It falls: owes more', '下跌：欠得更多']],
          [['"Profits on 7,500 other shares"', '“另一只股票7,500股的利润”'], ['Wiped out again', '再次清零']]],
        rowAt: ['L0', 'L1', 'L1@ten', 'L2@seventy'] }],
    lines: [
      L('williamson', "I'll get you out of this hole, Larry. But you must lay off the market, and let me work.", '我会把你从这个坑里拉出来，拉瑞。但你得别碰市场，让我来操作。', { speak: 'williamson' }),
      N('Six months later he handed me credit slips: debt wiped out. Then he bought me ten thousand Southern Atlantic, another Marquand road. It went down.', '大约六个月后，他递给我几张贷记单：债务一笔勾销。接着他替我买了一万股南大西洋，那是马昆德控制的另一条铁路。它跌了。'),
      N('Again the loss was made up, with profits on seventy-five hundred shares of some other stock. It happened several times. Finally I tumbled, and quit.', '亏损又被补上了，据说用的是另一只股票七千五百股的利润。这样的事发生了好几次。我终于醒悟过来，离开了那家公司。'),
    ] });

  lesson(h, { id: 'e07_smoke', tag: ['WHAT WAS REALLY HAPPENING', '真相'], tagColor: RED, title: ['The Smoke Screen', '烟幕'], music: 'tense',
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      { type: 'flow', at: 'L0', x: 470, y: 220, w: 1420, bh: 170, gap: 50, size: 28, nodes: [
        { num: 1, en: 'Marquand falls incurably ill', zh: '马昆德身患绝症', at: 'L0@incurably' },
        { num: 2, en: "Dan quietly sells Marquand's stocks", zh: '丹悄悄卖出马昆德的股票', at: 'L1' },
        { num: 3, en: 'The Street blames the famous bear', zh: '华尔街把卖压算在著名空头头上', at: 'L1@famous' },
        { num: 4, en: 'The estate sells into a bear market', zh: '遗产在熊市中抛售', at: 'L2@estate', color: PINK }] },
      { type: 'note', at: 'L2@cheaper', x: 470, y: 450, w: 690, h: 190, size: 30, fill: MINT, anim: 'slideU', en: "Cost to Dan: now and then, wipe out Larry's debts.", zh: '丹的代价：时不时替拉瑞把债务清零。' },
      { type: 'note', at: 'L2@cheaper+0.8', x: 1200, y: 450, w: 690, h: 190, size: 30, fill: PINK, anim: 'slideU', en: 'Larry free, and short elsewhere: millions in damage to the heirs.', zh: '若拉瑞自由地在别处做空：继承人要损失数以百万计。' },
      { type: 'note', at: 'L2@tape', x: 470, y: 670, w: 690, h: 160, size: 30, fill: YEL, anim: 'pop', en: '"The tape is not chivalrous, and does not reward loyalty."', zh: '“纸带不讲骑士风度，也不奖励忠诚。”' },
      { type: 'note', at: 'L3', x: 1200, y: 670, w: 690, h: 160, size: 28, fill: PINK, anim: 'pop', en: 'Unauthorized trades and hidden insider selling are illegal today.', zh: '擅自替客户交易、掩盖内部人抛售，如今都是违法的。' }],
    lines: [
      N('Here is what I think happened. Marquand fell incurably ill soon after I came in, and Dan knew it long before Marquand did.', '我认为真相是这样的。我进那家公司后不久，马昆德就得了不治之症，而丹比马昆德本人早得多就知道了。'),
      N("So Dan began selling his brother-in-law's stocks, and covered my short. With a famous bear in the office, nobody knew whose selling it was.", '于是丹开始卖出他姻亲兄弟的股票，并替我平了空单。有一个著名空头在公司里，华尔街就分不清到底是谁在卖。'),
      N('Keeping me in debt was cheaper than having me short elsewhere while the estate sold into a bear market. The tape does not reward loyalty.', '让我背着债，比让我在别处做空要便宜得多，因为遗产正要在熊市里抛售。纸带从不奖励忠诚。'),
      N("Much of this is illegal today: trading a client's account against his wishes, and hiding insider selling. Learn it only to recognise it.", '这里面很多做法如今都是违法的：违背客户意愿动他的账户，掩盖内部人的抛售。学习它，只是为了识别它。'),
    ] });

  // ======================= Chapter XIV =======================
  chapter('Chapter XIV · The Comeback', '第十四章 · 东山再起');
  photo({ id: 'e07_lean', src: `${PD}/wallst_crowd_trinity_1911_bain.jpg`, credit: 'Crowd on Wall Street before Trinity Church, 1911 · Bain News Service (public domain)', music: 'dark',
    cap: ['1911–1914: the four lean years.', '1911–1914年：四个低谷之年。'], capW: 520,
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 12, x: 1000, y: 520, z: 1.16 }],
    items: [{ type: 'counter', screen: true, panel: true, at: 'L1@million', x: 1480, y: 320, from: 0, to: -1000000, fmt: '$', suffix: '+', size: 84, dur: 1.6, color: RED, label: ['his debts', '他的债务'] }],
    lines: [
      N('Then came the lean years: 1911, 1912, 1913 and 1914. As Billy Henriquez said, not even a skunk could make a scent.', '接着是低谷岁月：1911、1912、1913和1914年。正如比利·亨利克斯所说，那种市场里连臭鼬都放不出味儿来。'),
      N("I lost in every office I tried, forcing the market to give what it didn't have. When I stopped trading on credit, I owed over a million.", '我在每一家营业部都亏钱，硬要市场给出它没有的东西。等我停止赊账交易时，已经欠下一百多万美元。'),
    ] });

  shot({ id: 'e07_creditor', set: 'home', trans: 'wipe', music: 'dark',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'creditor', z: 1.35, dur: 1 }, { t: 'L2', on: 'larry', z: 1.4, dur: 1.4 }],
    cast: [
      { id: 'generic', key: 'creditor', look: { hat: 'bowler', hatColor: '#2a2a2a', mus: 'walrus', musColor: '#3a2a1a', stout: true, coat: '#5a4a3a', age: 1 }, x: 1250, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'frown',
        acts: [{ t: 'L1', pose: 'point', expr: 'angry' }, { t: 'L1e', pose: 'fist', expr: 'angry' }, { t: 'L2', pose: 'cross', expr: 'frown' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'cross', expr: 'tired',
        acts: [{ t: 'L1', pose: 'despair', expr: 'worry' }, { t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L2@worry', pose: 'pointUp', expr: 'determined' }] }],
    items: [
      { type: 'note', at: 'L0@eight', until: 'L1', x: 80, y: 90, w: 520, h: 110, size: 30, fill: PINK, align: 'center', en: 'One creditor: owed $800', zh: '一位债主：被欠800美元' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 940, y: 70, w: 600, kind: 'shout', en: "Pay me my eight hundred, or I'll sue and seize your furniture!", zh: '把我那八百块还来，不然我就告你，把你的家具搬走！', tx: 1250, ty: 590 },
      { type: 'bubble', at: 'L2@worry', x: 320, y: 70, w: 560, kind: 'thought', en: 'The trouble is not the market. It is worry.', zh: '问题不在市场，而在焦虑。', tx: 680, ty: 590 }],
    lines: [
      N('Most of my creditors were kind. Two hounded me. One, owed eight hundred dollars, threatened to sue me and seize my furniture.', '我的大多数债主都很宽厚，但有两个紧追不放。其中一个我只欠他八百美元，他却扬言要告我，还要扣押我的家具。'),
      L('banker', "Pay me my eight hundred, or I'll sue and seize your furniture!", '把我那八百块还来，不然我就告你，把你的家具搬走！', { speak: 'creditor' }),
      N('So I studied myself like a market. The trouble was not the market. It was worry over what I owed.', '于是我像研究市场一样研究自己。问题不在市场，而在于我对欠债的焦虑。'),
    ] });

  lesson(h, { id: 'e07_bankrupt', tag: ['CLEAR THE MIND', '清空头脑'], title: ['Bankruptcy: Removing the Worry', '破产：卸下焦虑'], music: 'calm',
    gest: ['explain', 'point', 'explainR', 'chin'],
    items: [
      { type: 'bars', at: 'L1', x: 470, y: 220, w: 620, h: 620, title: ['What he owed, 1914', '他的债务，1914年'], max: 1000000, vsize: 30,
        bars: [{ v: 1000000, vl: '>$1,000,000', en: 'Owed in all', zh: '总债务', at: 'L1@million', color: RED },
          { v: 100000, vl: '≈$100,000', en: 'Bankruptcy schedule', zh: '破产清单', at: 'L2', color: '#c9a26a' }] },
      { type: 'table', at: 'L1@Two', x: 1130, y: 220, w: 760, widths: [0.62, 0.38], size: 28, bottom: 480,
        cols: [['Would not sign a release', '拒绝签署免责书'], ['Owed', '欠款']],
        rows: [[['The man who threatened to sue', '扬言起诉的那个人'], ['$800', '800美元']], [['Receivers of a failed brokerage', '一家倒闭经纪行的破产管理人'], ['$60,000', '6万美元']]],
        rowAt: ['L1@eight', 'L1@receivers'] },
      { type: 'photo', at: 'L3', x: 1150, y: 530, w: 380, h: 210, rot: -2, src: `${PD}/nyse_exterior_c1904_detroit.jpg`, en: 'Closed: Jul 31 – mid-Dec. 1914', zh: '停市：1914年7月31日至12月中' },
      { type: 'note', at: 'L0e', x: 1580, y: 520, w: 310, h: 320, size: 28, fill: YEL, anim: 'slideU', en: 'A speculator must give his whole mind to his business.', zh: '投机者必须把全部心思放在自己的生意上。' }],
    lines: [
      N('I told my creditors frankly: I cannot be my old self while these debts harass me. I must be free to make money.', '我坦白地告诉债主们：只要这些债务还缠着我，我就不可能找回从前的自己。我必须腾出身来去赚钱。'),
      N('Most signed releases on debts of over a million. Two would not: the eight-hundred-dollar man, and receivers who wanted sixty thousand.', '大多数债主签了免责书，涉及一百多万美元的债务。有两个不肯：那位八百美元的债主，还有一家要我还六万美元的破产管理人。'),
      N('So my bankruptcy schedule was only about a hundred thousand. Seeing it in print was mortifying, but the relief was enormous.', '所以我的破产清单上只有大约十万美元。在报上看到这条消息让我羞愧难当，但那份解脱感无比强烈。'),
      N('Then the war closed the Stock Exchange from July thirty-first to mid-December, 1914. Nobody could give anybody a stake.', '可接着战争让证券交易所从7月31日一直关闭到1914年12月中旬。谁也没法给谁一笔本钱。'),
    ] });

  shot({ id: 'e07_feb1915', set: 'study', setOpts: { lampX: 1700 }, trans: 'whip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'williamson', z: 1.3, dur: 1.2 }, { t: 'L2', on: 'larry', z: 1.35, dur: 1.4 }],
    cast: [
      { id: 'williamson', x: 1250, y: 890, s: 1.2, flip: true, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L1', pose: 'explainR', expr: 'smile' }, { t: 'L2', pose: 'cross', expr: 'neutral' }] },
      { id: 'larry', x: 680, y: 890, s: 1.2, pose: 'explain', expr: 'determined',
        acts: [{ t: 'L1', pose: 'relaxed', expr: 'neutral' }, { t: 'L1e', pose: 'chin', expr: 'frown' }, { t: 'L2@six', pose: 'cross', expr: 'determined' }] }],
    items: [
      { type: 'caption', at: 0.3, en: 'February 1915. Debts gone, but no stake.', zh: '1915年2月。债务没了，本钱也没有。', w: 560 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 860, y: 60, w: 680, en: 'When you see something that looks good and want to buy 500 shares, go ahead. It will be all right.', zh: '你看到中意的机会，想买500股，就买吧。没问题。', tx: 1250, ty: 590 },
      { type: 'note', at: 'L2', x: 1160, y: 100, w: 720, h: 150, size: 30, fill: PINK, en: 'Then: $25,000, unasked. Now: credit for 500 shares.', zh: '当年：不请自来的2.5万美元。如今：500股的额度。' },
      { type: 'stamp', screen: true, at: 'L2@six', x: 1500, y: 420, en: '6 WEEKS · NO TRADES', zh: '六周 · 一笔未做', size: 50, rot: -6 }],
    lines: [
      N('In February 1915 I went back to Dan Williamson. When he needed me, he had offered twenty-five thousand dollars without my asking.', '1915年2月，我又去找丹·威廉森。当年他需要我时，曾不请自来地给了我两万五千美元。'),
      L('williamson', 'When you see something that looks good and want to buy five hundred shares, go ahead. It will be all right.', '你看到中意的机会，想买五百股，就尽管买。没问题。', { speak: 'williamson' }),
      N('No room for even a small loss: my first trade had to win. For six weeks I stayed away from his office, reading the tape elsewhere.', '我连一点小亏都承受不起：第一笔交易必须赢。整整六个星期，我没去他的营业部，而是在别处盯着纸带。'),
    ] });

  photo({ id: 'e07_bethphoto', src: `${PD}/bethlehem_steel_postcard_c1905.jpg`, credit: 'Bethlehem Steel Company plant, c.1904–09 · Hugh C. Leighton Co. postcard (public domain)', music: 'tense',
    cap: ['Historical note: in 1915 Bethlehem Steel was filling huge Allied war orders.', '历史注：1915年，伯利恒钢铁正承接大量协约国战争订单。'], capW: 700,
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 12, x: 930, y: 520, z: 1.15 }],
    items: [
      { type: 'note', screen: true, at: 'L1', x: 1160, y: 520, w: 720, h: 150, size: 30, fill: YEL, en: 'First cross of 100, 200 or 300 → often 30 to 50 points more (faster after 300)', zh: '首次突破100、200或300→往往再涨30到50点（过300后更快）' },
      { type: 'note', screen: true, at: 'L2', x: 1160, y: 690, w: 720, h: 140, size: 30, fill: MINT, en: 'Anaconda: bought as it crossed 200, sold next day at 260', zh: '安纳康达：突破200时买入，次日在260卖出' }],
    lines: [
      N('For reasons the whole world knew, I was most bullish on Bethlehem Steel. But to make sure of winning, I would wait until it crossed par.', '出于全世界都知道的原因，我最看好伯利恒钢铁。但为了确保赢，我决定等它突破面值再动手。'),
      N('A stock crossing 100, 200 or 300 for the first time nearly always runs thirty to fifty points more.', '一只股票第一次突破100、200或300时，几乎总会再涨三十到五十点。'),
      N('One of my first big coups: I bought Anaconda as it crossed 200, and sold it a day later at 260.', '我早年的一次大手笔：安纳康达突破200时我买进，一天后在260卖出。'),
    ] });

  lesson(h, { id: 'e07_bethlehem', tag: ['THE PIVOTAL POINT · 1915', '关键点 · 1915年'], title: ['Bethlehem Steel: Waiting for Par', '伯利恒钢铁：等它突破面值'],
    gest: ['explain', 'despair', 'pointUp', 'up'], expr: [null, 'worry', 'determined', 'smile'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 10], yr: [80, 150], yTicks: [90, 100, 110, 120, 130, 140], illustrative: true, cursorFmt: 'int',
        title: ['Bethlehem Steel, 1915', '伯利恒钢铁，1915年'],
        xTicks: [[2, 'six weeks of waiting', '六周的等待'], [6.9, 'day 1', '第1天'], [9.2, 'day 2', '第2天']],
        hlines: [{ v: 100, at: 'L0', color: GREEN, en: 'Par: 100, his trigger', zh: '面值100：他的触发点', below: true, labelX: 0.3 }],
        series: [{ pts: [[0, 84], [1.2, 85.5], [2.4, 87], [3.6, 88.5], [4.6, 90], [5.4, 93], [6.2, 96], [6.8, 98], [7.1, 98.75], [8, 114.5], [9.2, 145], [10, 146]], color: GREEN,
          draw: [['L0', 3], ['L1', 4], ['L2', 7], ['L2@bought', 8], ['L3', 9], ['L3@next', 10]] }],
        marks: [
          { x: 4.6, y: 90, at: 'L1', en: 'At 90: "sweating blood"', zh: '到90："急得冒血汗"', dx: -110, dy: -170, w: 260, fill: PINK },
          { x: 6.8, y: 98, at: 'L2@bought', en: 'Buys 500 at 98–99', zh: '在98–99买入500股', dx: 20, dy: 30, w: 260 },
          { x: 8, y: 114.5, at: 'L3', en: 'Closes ≈114–115: buys 500 more', zh: '收于约114–115：再买500股', dx: -360, dy: -130, w: 280 },
          { x: 9.2, y: 145, at: 'L3@next', en: 'Next day: 145', zh: '次日：145', dx: -330, dy: -10, w: 260, fill: YEL }] },
      { type: 'note', at: 'L0', x: 1500, y: 230, w: 390, h: 290, size: 28, fill: PINK, anim: 'slideU',
        en: 'Each point he waited: 500 sh × $1 = $500 not made. At 1,000 shares: $1,000 a point.', zh: '每等一个点：500股×1美元＝少赚500美元。若有1,000股：每点1,000美元。' },
      { type: 'note', at: 'L3@stake', x: 1500, y: 550, w: 390, h: 280, size: 28, fill: MINT, anim: 'slideU',
        en: 'Six weeks of patience rebuilt his stake. Fix the point in advance, wait, then act at once.', zh: '六周的耐心换回了本钱。事先定好关键点，等待，然后立刻行动。' }],
    lines: [
      N('Every point it rose while I waited was five hundred dollars not made. After ten points I could have pyramided to a thousand shares.', '我等待时它每涨一个点，就是少赚五百美元。涨十个点后，我本可以金字塔加码到一千股。'),
      N('At 90 I began to sweat blood. But I listened to experience, not to my loud hopes.', '涨到90时，我急得冒血汗。但我听从的是经验，而不是心里喧嚣的希望。'),
      N('At 98 I saw 100 on the tape while the ticker still printed 98. That was instinct, not hope. I bought five hundred at 98 to 99.', '到98时，行情机上还打着98，我却已在纸带上看到了100。那是读盘的本能，不是希望。我在98到99之间买了五百股。'),
      N('It closed that night around 114 or 115, and I bought five hundred more. The next day Bethlehem was 145. I had my stake.', '当天它收在114或115左右，我又买了五百股。第二天，伯利恒到了145。我有了本钱。'),
    ] });

  photo({ id: 'e07_lusitania', src: `${PD}/newspaper_nytribune_lusitania_1915-05-08.jpg`, credit: 'New-York Tribune, May 8, 1915 · Library of Congress, Chronicling America (public domain)', music: 'dark', trans: 'flash',
    cap: ['May 7, 1915: a German submarine sinks the Lusitania. Stocks break.', '1915年5月7日：德国潜艇击沉卢西塔尼亚号。股市暴跌。'], capW: 640,
    kb: [{ t: 0, x: 960, y: 420, z: 1.05 }, { t: 10, x: 960, y: 360, z: 1.22 }],
    items: [{ type: 'counter', screen: true, panel: true, at: 'L1@hundred', x: 1480, y: 640, from: 0, to: 140000, prefix: '$', size: 84, dur: 1.6, color: GREEN, label: ['his balance, end of 1915', '1915年底的余额'] }],
    lines: [
      N('After that I was at ease, right, and winning. Then came the Lusitania break, and one or two reverses I did not foresee.', '此后我心态从容，判断正确，一路赢钱。接着卢西塔尼亚号事件让市场暴跌，还有一两次我没能预见的挫折。'),
      N('I ended 1915 with about a hundred and forty thousand dollars, though I had been right most of the year. No one is beyond accidents.', '1915年底，我账上约有十四万美元，尽管这一年大部分时间我都判断正确。没有人能躲开意外。'),
    ] });

  lesson(h, { id: 'e07_1916', tag: ['READING THE TOP · 1916', '判断顶部 · 1916年'], title: ['When the Leaders Stop Leading', '当龙头股不再领涨'], music: 'tense',
    gest: ['explain', 'point', 'explainR', 'pointUp', 'up', 'explain'],
    items: [
      { type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 500, xr: [0, 12], yr: [80, 135], yTicks: [90, 100, 110, 120, 130], illustrative: true, cursorLabel: false,
        title: ['Old leaders (red) and new leaders (green)', '老龙头（红）与新龙头（绿）'],
        bands: [{ x0: 10.3, x1: 12, y0: 80, y1: 135, at: 'L4', color: RED, en: 'The "leak"', zh: '“泄密”' }],
        series: [
          { pts: [[0, 88], [1.5, 100], [2.3, 95], [3.5, 110], [4.3, 105], [5.5, 118], [6.3, 111.5], [7.5, 112], [8.5, 111], [9.5, 108], [10.5, 100], [11.3, 92], [12, 88]], color: RED,
            draw: [['L0', 5], ['L1', 6], ['L1@come', 8], ['L3', 9], ['L4', 12]] },
          { pts: [[0, 84], [2, 88], [4, 93], [5.5, 98], [6.3, 103], [7.5, 110], [8.5, 112], [9.5, 107], [10.5, 100], [11.3, 93], [12, 89]], color: GREEN, cursor: false,
            draw: [['L0', 3], ['L1', 5], ['L2', 6], ['L2@stalled', 7], ['L4', 10]] }],
        marks: [
          { x: 6.3, y: 111.5, at: 'L1', en: 'Old leaders: −6 to 7 pts, no comeback', zh: '老龙头：回调6–7点，不再涨回', dx: -430, dy: -130, w: 300, fill: PINK },
          { x: 8.5, y: 112, at: 'L2@stalled', en: 'New leaders stall: short them too', zh: '新龙头也停滞：一并做空', dx: -200, dy: -150, w: 280 },
          { x: 9.5, y: 108, at: 'L3@doubled', en: 'All 12 show ≥4 pts: double', zh: '12只都赚≥4点：加倍', dx: -250, dy: 60, w: 280, fill: YEL }] },
      { type: 'equation', at: 'L2@five', x: 1695, y: 320, size: 44, terms: [{ t: '5,000 each', zh: '每只5,000股', at: 'L2@five' }] },
      { type: 'equation', at: 'L3@sixty', x: 1695, y: 430, size: 44, terms: [{ t: '× 12 = 60,000', zh: '12只股票共做空6万股', at: 'L3@sixty' }] },
      { type: 'equation', at: 'L3@doubled', x: 1695, y: 540, size: 44, terms: [{ t: '× 2 = 120,000', zh: '全部赚≥4点后加倍', at: 'L3@doubled', hl: true }] },
      { type: 'counter', at: 'L4@three', x: 1695, y: 690, from: 0, to: 3000000, prefix: '≈$', size: 64, dur: 1.6, color: GREEN, label: ['cleared in 1916', '1916年净赚'] },
      { type: 'note', at: 'L5', x: 470, y: 740, w: 1000, h: 100, size: 28, fill: YEL, align: 'center', anim: 'slideU', en: 'Never try to sell at the top. Sell after a reaction, if there is no rally.', zh: '永远别想卖在最高点。回调之后若无反弹，再卖。' }],
    lines: [
      N('1916 was a wild war-boom bull market, and I rode it. But a man does not marry the bull side. I watched for the warning.', '1916年是战争繁荣带来的疯狂牛市，我顺势而为。但人不必和多头厮守终身。我一直留意着警报。'),
      N('Then the leaders, one after another, reacted six or seven points and, for the first time in months, did not come back.', '接着，龙头股一只接一只回调了六七个点，而且几个月来第一次没有再涨回去。'),
      N('I sold five thousand of each tired leader and bought the new ones. When those stalled, I shorted them too.', '我把每只走弱的老龙头各卖空五千股，同时买入新龙头。等新龙头也停滞了，我把它们也做空。'),
      N('In about a month I was short sixty thousand shares in twelve stocks. When all twelve showed four points profit, I doubled.', '大约一个月后，我在十二只股票上共做空了六万股。当十二只都有了四个点的盈利，我把仓位加倍。'),
      N('Seven weeks later came the famous leak of a peace note from President Wilson. Stocks broke, I covered, and cleared about three million for 1916.', '七周之后，威尔逊总统和平照会的消息走漏，引发著名的“泄密”事件。股市暴跌，我顺势平仓，1916年净赚约三百万美元。'),
      N('Never try to sell at the top. Sell after a reaction, if there is no rally.', '永远别想卖在最高点。回调之后若无反弹，再卖。'),
    ] });

  shot({ id: 'e07_palm1917', set: 'veranda', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.4 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 0.8 }, { t: 'L2@offered', on: 'captain', z: 1.35, dur: 1.2 }],
    cast: [
      { id: 'larryHat', key: 'larry', x: 680, y: 890, s: 1.2, pose: 'relaxed', expr: 'smile', lookX: 0.3,
        acts: [{ t: 'L0@peace', pose: 'chin', expr: 'think' }, { t: 'L1@2:25', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'despair', expr: 'shock' }, { t: 'L2@Nobody', pose: 'chin', expr: 'worry' }] },
      { id: 'trader', key: 'captain', look: { hat: 'top', hatColor: '#141414', hair: '#d8d8d2', mus: 'walrus', musColor: '#d8d8d2', stout: true, age: 2 }, x: 1260, y: 890, s: 1.2, flip: true, pose: 'hips', expr: 'determined', at: 'L2@night',
        acts: [{ t: 'L2@offered', pose: 'pointUp', expr: 'shout' }, { t: 'L2@Nobody', pose: 'shrug', expr: 'frown' }] }],
    items: [
      { type: 'caption', at: 0.3, en: "Palm Beach, 1917. A broker's branch office keeps him in touch.", zh: '1917年，棕榈滩。经纪行分部让他与市场保持联系。', w: 600 },
      { type: 'table', at: 'L0@short', until: 'L2@night', x: 1180, y: 90, w: 700, widths: [0.55, 0.45], size: 28, bottom: 380,
        cols: [['Position', '仓位'], ['Based on', '依据']],
        rows: [[['Short stocks and wheat', '做空股票和小麦'], ['Market conditions', '市场形势']], [['Long 15,000 bales cotton', '做多1.5万包棉花'], ['A hope of peace', '对和平的期望']]],
        rowAt: ['L0@short', 'L1@2:25'] },
      { type: 'stamp', screen: true, at: 'L2@unrestricted', until: 'L2@night', x: 1400, y: 560, en: 'U-BOAT WARFARE', zh: '无限制潜艇战', size: 64, rot: -8 },
      { type: 'bubble', at: 'L2@offered', x: 940, y: 60, w: 620, kind: 'shout', en: 'Any amount of Steel, five points under the close!', zh: '钢铁要多少有多少，比收盘价低五点！', tx: 1260, ty: 590 }],
    lines: [
      N("Winter 1917, Palm Beach. I was short stocks and wheat, at a handsome profit. Everyone talked of President Wilson's peace efforts.", '1917年冬，棕榈滩。我做空股票和小麦，账面利润可观。人人都在谈论威尔逊总统的和平努力。'),
      N('Peace should send stocks and wheat down, and cotton up. At 2:20 one afternoon I owned no cotton. At 2:25 I had fifteen thousand bales.', '和平会让股票和小麦下跌、棉花上涨。一天下午2:20，我手上一包棉花都没有；到2:25，我已买进一万五千包。'),
      N("After the close came Germany's note: unrestricted submarine warfare. That night a great industrialist offered Steel five points under the close. Nobody took it.", '收盘后，德国发出照会：无限制潜艇战。当晚，一位工业巨头愿以低于收盘价五点的价格卖出钢铁股。没有人接。'),
    ] });

  lesson(h, { id: 'e07_1917', tag: ['ONE SHOCK, TWO KINDS OF POSITION', '同一冲击，两种仓位'], title: ['Conditions vs. an Outside Bet', '依据形势 vs. 押注外部事件'], music: 'tense', trans: 'zoom',
    gest: ['explain', 'point', 'explainR'],
    items: [
      { type: 'table', at: 'L0@fifty', x: 470, y: 220, w: 1000, widths: [0.38, 0.27, 0.35], size: 28, bottom: 570,
        cols: [['Position', '仓位'], ['Based on', '依据'], ['Next morning', '次日早晨']],
        rows: [[['Short stocks (50,000 Steel alone)', '做空股票（仅钢铁就5万股）'], ['Conditions', '市场形势'], ['Covered into the panic', '在恐慌中平仓']],
          [['Short wheat', '做空小麦'], ['Conditions', '市场形势'], ['With stocks: ≈ +$1.5M', '连同股票约赚150万']],
          [['Long 15,000 bales cotton', '做多1.5万包棉花'], ['Hope of peace', '对和平的期望'], ['Opened −500 points', '开盘跌500点']]],
        rowAt: ['L0@fifty', 'L1', 'L1@Cotton'], hl: [null, null, 'L2@hope'] },
      { type: 'bars', at: 'L1', x: 1510, y: 220, w: 380, h: 400, title: ['Net result', '净结果'], max: 1500000, vsize: 28,
        bars: [{ v: 1500000, vl: '+$1.5M', en: 'Stocks, wheat', zh: '股票和小麦', at: 'L1', color: GREEN },
          { v: -375000, vl: '−$375K', en: 'Cotton', zh: '棉花', at: 'L1@seventy', color: RED }] },
      { type: 'equation', at: 'L1@Cotton', x: 1180, y: 680, size: 44, terms: [
        { t: '15,000 bales', zh: '1.5万包', at: 'L1@Cotton' }, { t: '× 500 pts', zh: '跌500点', at: 'L1@five' },
        { t: '× $0.05', zh: '每点每包5美分', at: 'L1@five+0.5' }, { t: '= −$375,000', zh: '一夜亏损', at: 'L1@seventy', hl: true }] },
      { type: 'note', at: 'L2', x: 470, y: 730, w: 1420, h: 100, size: 30, fill: YEL, align: 'center', anim: 'slideU',
        en: 'Positions built on conditions survived the shock. The bet on an outside event lost.', zh: '依据形势建立的仓位扛住了冲击；押注外部事件的那一笔亏了。' }],
    lines: [
      N('Next morning some stocks opened eight points down. When complete demoralisation hits a bear market, you cover. I was short fifty thousand Steel alone.', '第二天早上，有些股票开盘就跌了八点。熊市里一旦出现彻底的恐慌，就该平仓。光是钢铁我就做空了五万股。'),
      N('I covered stocks and wheat into the panic, about a million and a half profit. Cotton opened five hundred points down: three hundred seventy-five thousand lost overnight.', '我在恐慌中平掉了股票和小麦，获利约一百五十万美元。棉花开盘就跌了五百点：一夜之间亏了三十七万五千美元。'),
      N('I took the loss. My stocks and wheat rested on conditions, and the shock helped them. The cotton rested on a hope of peace, and lost.', '我认了这笔亏损。我的股票和小麦仓位建立在市场形势上，这次冲击反而帮了它们；棉花仓位建立在对和平的期望上，结果亏了。'),
    ] });

  shot({ id: 'e07_repaid', set: 'home', trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 900, y: 500, z: 1.12, dur: 2 }, { t: 'L2', x: 960, y: 520, z: 1.0, dur: 1.6 }],
    cast: [
      { id: 'larry', x: 760, y: 890, s: 1.2, pose: 'hold', expr: 'smile', prop: { t: 'paper', text: 'PAID IN FULL' },
        acts: [{ t: 'L1', pose: 'explain', expr: 'sly' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }, { t: 'L2@trust', pose: 'explainR', expr: 'smile' }] },
      { id: 'wife', x: 1200, y: 890, s: 1.15, flip: true, pose: 'relaxed', expr: 'smile', at: 'L2', acts: [{ t: 'L2@safe', pose: 'hold', expr: 'laugh' }] }],
    items: [
      { type: 'stamp', screen: true, at: 'L0@full', x: 1450, y: 300, en: 'PAID IN FULL', zh: '全部还清', size: 64, rot: -8 },
      { type: 'counter', at: 'L0@million', until: 'L2', x: 1450, y: 580, from: 0, to: 1000000, prefix: '>$', size: 72, dur: 1.6, color: GREEN, label: ['old debts repaid, all at once', '旧债一次还清'] },
      { type: 'note', at: 'L1', until: 'L2', x: 80, y: 90, w: 560, h: 110, size: 30, fill: PINK, align: 'center', en: 'Paid last: the $800 man', zh: '最后才还：那位800美元的债主' },
      { type: 'note', at: 'L2@annuities', x: 80, y: 90, w: 640, h: 170, size: 28, fill: MINT, en: 'Annuities and trusts: capital beyond the reach of his own future mistakes.', zh: '年金和信托：让一部分资本远离他自己将来的错误。' }],
    lines: [
      N('Back in New York early in 1917, I paid every old debt in full, over a million dollars, to everyone at once.', '1917年初回到纽约，我把所有旧债全部还清，一百多万美元，一次性还给了所有债主。'),
      N('Those who had signed releases refused interest. The eight-hundred-dollar man I paid last, to teach him consideration.', '那些签过免责书的债主都拒收利息。那位八百美元的债主，我最后才还，好让他学会体谅别人。'),
      N('Then I bought annuities, and put money in trust for my wife and my son: safe from my market needs, safe even from me.', '然后我买了年金，又为妻子和儿子设立了信托：不受我交易需要的影响，连我自己也动不了。'),
    ] });

  // ---- summary ----
  const R = (n, at, en, zh, row) => ({ type: 'rule', at, x: 470, y: 220 + row * 124, w: 1420, h: 110, n: String(n), size: 30, en, zh });
  lesson(h, { id: 'e07_takeaway', tag: ['TAKEAWAYS', '要点'], title: ['What Episode Seven Teaches', '第七集讲了什么'], music: 'calm',
    gest: ['explain', 'pointUp'],
    items: [
      R(1, 'L0@gratitude', 'Never let gratitude trade for you. Repay favours at once.', '绝不让感激替你交易。人情要立刻还清。', 0),
      R(2, 'L0@worry', 'Remove the worry first: a speculator needs his whole mind.', '先消除焦虑：投机者需要全神贯注。', 1),
      R(3, 'L1', 'With a small stake, fix the pivotal point and wait for it.', '本钱少时，先定好关键点，然后耐心等待。', 2),
      R(4, 'L1@leaders', 'A top shows when the leaders react and do not come back.', '龙头股回调后不再涨回，就是见顶的信号。', 3),
      R(5, 'L1@conditions', 'Bet on market conditions, not on hoped-for outside events.', '依据市场形势下注，而不是押注期待中的外部事件。', 4)],
    lines: [
      N('Episode seven in brief. Never let gratitude trade for you, and clear the worry from your mind before you trade.', '第七集小结。绝不让感激替你交易；交易之前，先把焦虑从脑子里清除出去。'),
      N('With a small stake, wait for the pivotal point. Read the top from the leaders, and bet on conditions, not on outside events.', '本钱少时，等待关键点。从龙头股判断顶部，依据市场形势下注，而不是押注外部事件。'),
    ] });
  lesson(h, { id: 'e07_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: RED, title: ['Mistakes in Chapters XIII–XIV', '第十三至十四章中的错误'], music: 'dark',
    gest: ['explain', 'despair'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 220, w: 1420, widths: [0.34, 0.33, 0.33], size: 28, bottom: 840,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [[["Didn't insist on repaying $25,000", '没坚持还那2.5万美元'], ['Politeness: a favour accepted', '碍于情面，接受了人情'], ['Repay favours at once', '人情立刻还清']],
        [['Let Williamson overrule his reading', '让威廉森推翻自己的判断'], ['Gratitude over judgment', '感激压倒了判断'], ['Back your own judgment, always', '永远坚持自己的判断']],
        [['Forced trades in a dead market', '在死水般的市场里硬做'], ['Impatience to win it back', '急于翻本'], ['No opportunity? Wait', '没有机会，就等待']],
        [['Traded with debts on his mind', '背着债务焦虑交易'], ['Worry, not the market', '问题在焦虑，不在市场'], ['Clear the worry first', '先消除焦虑']],
        [['Bought cotton on a hope of peace', '押注和平买入棉花'], ['A bet on an outside event', '押注外部事件'], ['Trade conditions, not hopes', '依据形势，而非希望']]],
      rowAt: ['L0@repaying', 'L0@obeying', 'L1@forcing', 'L1@debts', 'L1@hope'] }],
    lines: [
      N('Mistake review. Two came from decency: not repaying a favour, and then obeying it against my own reading of the tape.', '错误复盘。有两个错误出于体面：没有偿还人情，后来又为了这份人情，违背了自己对纸带的判断。'),
      N('Two came from pressure: forcing trades in a dead market, and trading with debts on my mind. One came from hope: betting on peace.', '有两个出于压力：在死水般的市场里硬做，以及背着债务焦虑去交易。还有一个出于希望：押注和平。'),
    ] });
};
