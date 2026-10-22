// Full version, episode 3: Sit Tight (Book ch. V–VI, c. 1901–1906)
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  const RED = '#b3302a', GREEN = '#2f6b3d', YEL = '#f6d77a', PINK = '#f3c6c0', MINT = '#cfe3c4', TICKET = '#efe3c4';
  episode(3, 'Reminiscences_E03_Sit_Tight');

  // ================= Chapter V =================
  chapter('Chapter V · Sit Tight', '第五章 · 坐得住');
  music('calm');
  title({ id: 'e03_title', kicker: 'EPISODE 3 · 第3集', en: 'Sit Tight', zh: '坐得住', color: GREEN,
    sub: ['Book chapters V–VI · c. 1901–1906', '原著第五至六章 · 约1901–1906年'],
    lines: [N('Episode three. Sit tight: the lesson that took me longest to learn, and paid me best.', '第三集：坐得住。这个教训我学得最久，回报也最大。')] });

  // ---- behaviour, charts and their limits ----
  lesson(h, { id: 'e03_charts', tag: ['BEHAVIOUR & CHARTS', '走势与图表'], title: ['Charts Help. Conditions Decide.', '图表有用，形势才是关键'],
    gest: ['explain', 'explainR', 'point', 'despair', 'up'],
    items: [
      { type: 'note', at: 'L0', x: 470, y: 220, w: 1420, h: 165, size: 34, fill: YEL, align: 'center', anim: 'slideU',
        en: '"If a stock doesn\'t act right, don\'t touch it." No diagnosis, no prognosis. No prognosis, no profit.', zh: '“走得不对劲的股票，别碰。”没有诊断，就没有预判；没有预判，就没有利润。' },
      { type: 'note', at: 'L1', x: 470, y: 405, w: 460, h: 295, size: 30,
        en: 'A Frenchman\'s curves "explained" Keene\'s Atchison win and Southern Pacific miss. Keene: right, but too slow.', zh: '法国人的曲线“解释”了基恩在艾奇逊优先股上的成功和在南太平洋上的失手。基恩：对，但太慢。' },
      { type: 'note', at: 'L2', x: 950, y: 405, w: 460, h: 295, size: 30,
        en: 'Daily charts used to check whether a tip "deserved" a rise: a tipster in another form.', zh: '用每日走势图核对一条消息“配不配”上涨：换了个样子的荐股人。' },
      { type: 'note', at: 'L3', x: 1430, y: 405, w: 460, h: 295, size: 30, fill: PINK,
        en: 'A mathematician, ex-Stock Exchange partner, won for years. The World War broke the precedents: millions lost.', zh: '一位数学家，曾是交易所会员公司合伙人，赢了多年。世界大战打破先例：亏损数百万。' },
      { type: 'note', at: 'L4', x: 470, y: 720, w: 1420, h: 118, size: 32, fill: MINT, align: 'center', anim: 'slideU',
        en: 'Patterns can fail. Conditions decide: bullish conditions make a bull market, even in a war.', zh: '图形会失灵，形势才是关键：形势看涨就是牛市，战争也改变不了。' }],
    lines: [
      N("Tape reading is more than arithmetic. My rule: if a stock doesn't act right, don't touch it.", '读纸带不只是算术。我的规则是：一只股票走得不对劲，就别碰它。'),
      N("Charts are old, too. A Frenchman's curves claimed to explain Keene's campaigns; Keene found them right, but too slow.", '图表也由来已久。有个法国人声称他的曲线能解释基恩的战役；据说基恩认为图表是对的，只是太慢。'),
      N('One office used daily charts to check whether a tip deserved a rise: one more tipster.', '有家营业部用每日走势图核对某条消息配不配上涨：不过是又多了一个荐股人。'),
      N('A trained mathematician won with charts for years, until the World War broke the precedents. His following lost millions.', '一位训练有素的数学家靠图表赢了好多年，直到世界大战打破了先例。他和追随者们亏掉了数百万。'),
      N("Yet even a war can't stop a bull market when conditions are bullish. To make money, appraise conditions.", '然而形势看涨时，连战争也挡不住牛市。要赚钱，就去判断形势。'),
    ] });

  // ---- third try in New York: gambling vs speculating ----
  shot({ id: 'e03_third', set: 'office', trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.3, dur: 1.4 }, { t: 'L2', x: 900, y: 500, z: 1.06, dur: 1.2 }],
    cast: [{ id: 'larry', x: 640, y: 890, s: 1.2, pose: 'relaxed', expr: 'smile', prop: { t: 'paper', text: 'RAILROAD EARNINGS' },
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'hold', expr: 'determined' }] },
      { id: 'clerk', x: 1500, y: 890, s: 1.05, flip: true, pose: 'write', expr: 'neutral', z: -1, acts: [{ t: 'L2', pose: 'idle', lookX: -0.6 }] }],
    items: [{ type: 'caption', at: 0.3, en: "New York, Fullerton's office: his third try at a real broker.", zh: '纽约，富勒顿的营业部：他第三次在正规经纪行交易。' },
      { type: 'table', at: 'L2', x: 1250, y: 110, w: 640, widths: [0.5, 0.5], size: 28, bottom: 600,
        cols: [['Gambling', '赌博'], ['Speculating', '投机']],
        rows: [[['Watches the last hour of tape', '只看最近一小时的纸带'], ['Studies trade reports, earnings, statistics', '研究贸易报告、收益与统计']],
          [['Bets on the next fluctuation', '押注下一次波动'], ['Anticipates what conditions make inevitable', '预判形势必然带来的涨跌']]],
        rowAt: ['L2', 'L2@Gambling'] }],
    lines: [
      N('On my third try in New York, with seven years of tape reading behind me, I won on balance, and spent as fast.', '第三次回到纽约时，我已有七年读纸带的经验。总体上我是赢的，可赚多少就花多少。'),
      N("My first change was about time. I couldn't wait for a sure thing and take a point; I had to start earlier.", '我的第一个改变是关于时间。我不能再等十拿九稳的机会去赚一个点，而必须更早动手。'),
      N('So I studied trade reports, railroad earnings and statistics. Gambling bets on fluctuations; speculating anticipates what conditions make inevitable.', '于是我研究贸易报告、铁路收益和各种统计。赌博是押注波动；投机是预判形势必然带来的涨跌。'),
    ] });

  // ---- four points in a bull market ----
  lesson(h, { id: 'e03_fourpts', tag: ['MISTAKE', '错误'], tagColor: RED, title: ['Four Points in a Bull Market', '牛市里只赚四个点'],
    gest: ['explain', 'shrug', 'despair', 'explainR'], expr: [null, 'worry', 'sad', null],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 960, h: 620, xr: [0, 10], yr: [96, 120], yTicks: [100, 105, 110, 115], illustrative: true, cursorLabel: false,
        title: ['A bull-market advance', '牛市中的一段上涨'],
        series: [{ pts: [[0, 100], [1, 101.5], [2, 102.8], [3, 104], [3.6, 103.4], [4.6, 105.5], [5.6, 107.5], [6.4, 107], [7.4, 110], [8.4, 112], [9.2, 111.6], [10, 114]], color: GREEN,
          draw: [['L0', 3], ['L2', 11]] }],
        bands: [{ x0: 3, x1: 10, y0: 104, y1: 114, color: RED, at: 'L2' }],
        marks: [{ x: 0, y: 100, at: 'L0', en: 'Bullish: buys', zh: '看涨：买入', dx: 20, dy: 30, w: 260 },
          { x: 3, y: 104, at: 'L1@four', en: 'Sells: +4 pts', zh: '赚4点卖出', dx: -230, dy: -170, w: 260 },
          { x: 10, y: 114, at: 'L2@ten', en: '+10 more, without him', zh: '甩下他又涨10点', dx: -340, dy: -110, w: 280, fill: PINK }] },
      { type: 'bars', at: 'L2', x: 1460, y: 220, w: 430, h: 400, title: ['His own tally', '他自己的账'], max: 20000, vsize: 32,
        bars: [{ v: 20000, vl: '$20,000', en: 'should have made', zh: '本该赚', at: 'L2@twenty', color: GREEN }, { v: 2000, vl: '$2,000', en: 'did make', zh: '实际赚', at: 'L2@two', color: RED }] },
      { type: 'note', at: 'L3', x: 1460, y: 640, w: 430, h: 200, size: 30, fill: YEL, anim: 'slideU',
        en: '"You don\'t grow rich taking a four-point profit in a bull market."', zh: '“在牛市里只赚四个点，你富不起来。”' }],
    lines: [
      N("Still, I wasn't making what my rightness deserved. I was bullish from the start of a bull market, and it rose as I foresaw.", '可我赚到的钱仍配不上我判断的正确。牛市一开始我就看涨，行情也如我所料地上涨了。'),
      N('But I listened to the elder statesmen: take profits, buy back on reactions. I took four points and waited. The reaction never came.', '可我听了老前辈们的话：获利了结，等回调再买回来。我赚了四个点就走，然后等。回调始终没来。'),
      N('The stock went ten points higher without me. Where I should have made twenty thousand dollars, I made two thousand.', '股票甩下我又涨了十个点。本该赚两万美元的地方，我只赚了两千。'),
      N("You never grow poor taking profits. But you don't grow rich taking four points in a bull market.", '获利了结不会让你变穷。可在牛市里只赚四个点，你也富不起来。'),
    ] });

  // ---- old Partridge, "Turkey" ----
  shot({ id: 'e03_turkey', set: 'office', trans: 'whip', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'cust', z: 1.35, dur: 1.2 }, { t: 'L2', on: 'partridge', z: 1.5, dur: 1.0 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [{ id: 'partridge', x: 760, y: 890, s: 1.2, pose: 'hold', expr: 'smile', acts: [{ t: 'L1', pose: 'chin', expr: 'smile' }, { t: 'L2', pose: 'explain', expr: 'smile' }, { t: 'L3', pose: 'relaxed', expr: 'smile' }] },
      { id: 'generic', key: 'cust', x: 1250, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'worry', until: 'L3',
        acts: [{ t: 'L1', pose: 'shrug', expr: 'worry' }, { t: 'L2', pose: 'idle', expr: 'think' }] },
      { id: 'trader', key: 'fanning', look: { hat: 'none', hatColor: '#222' }, x: 1250, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'sad', at: 'L3',
        acts: [{ t: 'L3+1.5', pose: 'despair', expr: 'sad' }] },
      { id: 'larry', x: 1660, y: 900, s: 1.0, flip: true, pose: 'chin', expr: 'think', lookX: -1, z: -1 }],
    items: [{ type: 'caption', at: 0.3, en: 'Old Mr. Partridge, nicknamed "Turkey": thick-chested, chin on his chest, strutting.', zh: '老帕特里奇先生，绰号“火鸡”：胸膛厚实，下巴抵着胸口，踱来踱去。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 980, y: 70, w: 580, en: 'I got this tip from a friend of an insider. What do you think I ought to do?', zh: '我从一个内部人的朋友那儿得到这条消息。您看我该怎么办？', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 360, y: 90, w: 600, size: 40, en: "You know, it's a bull market!", zh: '你知道的，这是牛市！', tx: 760, ty: 590 },
      { type: 'note', at: 'L3', x: 1250, y: 110, w: 630, h: 205, size: 30, fill: PINK,
        en: 'Fanning\'s tale: took 3 points on a Keene tip. The stock then rose 24 points in 3 days.', zh: '范宁的故事：靠基恩的消息赚了3点就跑。随后那只股票三天涨了24点。' }],
    lines: [
      N('One old customer was different: he never gave advice or bragged. They called him Turkey, for his thick chest and strut.', '有一位老客户与众不同：他从不给人建议，也从不吹嘘。大家叫他“火鸡”，因为他胸膛厚实、走路昂首阔步。'),
      L('manager', 'I got this tip from a friend of an insider. What do you think I ought to do?', '我从一个内部人的朋友那儿得到这条消息。您看我该怎么办？', { speak: 'cust' }),
      L('partridge', "You know, it's a bull market!", '你知道的，这是牛市！', { speak: 'partridge' }),
      N("He heard John Fanning's tale just as politely, for the fourth time: three points taken on a Keene tip, then a twenty-four point rise.", '他同样礼貌地第四次听约翰·范宁讲那段往事：靠基恩的消息赚了三个点就跑，结果那只股票随后涨了二十四个点。'),
    ] });

  // ---- the grades of sucker ----
  lesson(h, { id: 'e03_grades', tag: ['KNOW THE CROWD', '认识人群'], title: ['Three Grades of Sucker', '三个等级的“傻瓜”'],
    gest: ['explain', 'explainR', 'point', 'chin'], expr: [null, null, null, 'smile'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 225, w: 1420, widths: [0.24, 0.5, 0.26], size: 30, bottom: 700,
        cols: [['Grade', '等级'], ['How he trades', '交易方式'], ['Lasts', '寿命']],
        rows: [[['Tyro', '新手'], ['Knows nothing, and everyone knows it', '一无所知，人人都知道'], ['3–30 weeks', '3–30周']],
          [['Semi-sucker', '半吊子傻瓜'], ['Studies remarks, not the market. Buys on declines', '研究议论而非市场；逢跌就买'], ['About 3½ years', '约3年半']],
          [['Plain sucker, bull market', '牛市里的纯傻瓜'], ['Buys blindly; makes most of the money', '盲目买入，反而赚得最多'], ['Until a healthy reaction', '直到一次正常回调']]],
        rowAt: ['L0', 'L1', 'L2'], hl: [null, 'L3', null] },
      { type: 'note', at: 'L3@except', x: 470, y: 722, w: 1420, h: 116, size: 34, fill: YEL, align: 'center', anim: 'slideU',
        en: 'He knows every "Don\'t!", except the main one: Don\'t be a sucker!', zh: '他知道所有的“不要”，唯独不知道最重要的一条：别当傻瓜！' }],
    lines: [
      N('Suckers come in grades. The tyro knows nothing, and everybody knows it. He lasts one season: three to thirty weeks.', '傻瓜也分等级。新手什么都不懂，所有人都知道。他只能撑一季：三到三十周。'),
      N('The semi-sucker studies remarks about the market, not the market. He buys on declines, and lasts about three and a half years.', '半吊子傻瓜研究的是别人对市场的议论，而不是市场本身。他逢跌就买，平均能撑三年半。'),
      N('In a big bull market the plain sucker buys blindly and makes most of the money, until one healthy reaction takes it away.', '在大牛市里，纯粹的傻瓜盲目买入，反而赚得最多，直到一次正常的回调把钱一下子拿走。'),
      N("The careful semi-sucker, playing by other men's rules, was me. He knows every don't, except the main one: don't be a sucker!", '那个谨小慎微、按别人的规则行事的半吊子傻瓜，就是我。他知道所有的“不要”，唯独不知道最重要的那条：别当傻瓜！'),
    ] });

  // ---- Elmer Harwood and Climax Motors ----
  shot({ id: 'e03_climax', set: 'office', trans: 'wipe', music: 'rag',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'elmer', z: 1.35, dur: 1.0 }, { t: 'L2', on: 'partridge', z: 1.5, dur: 1.1 }, { t: 'L3', x: 900, y: 500, z: 1.15, dur: 1.2 }],
    cast: [{ id: 'partridge', x: 700, y: 890, s: 1.2, pose: 'idle', expr: 'smile',
        acts: [{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'explain', expr: 'worry' }, { t: 'L3', pose: 'explainR', expr: 'smile' }] },
      { id: 'trader', key: 'elmer', x: 1950, y: 890, s: 1.15, flip: true, pose: 'point', expr: 'grin',
        acts: [{ t: 0.3, x: 1250, dur: 1.3 }, { t: 'L1', pose: 'explain', expr: 'grin' }, { t: 'L2', pose: 'shrug', expr: 'shock' }, { t: 'L3', pose: 'despair', expr: 'angry' }] },
      { id: 'larry', x: 1680, y: 900, s: 1.0, flip: true, pose: 'chin', expr: 'think', lookX: -1, z: -1 }],
    items: [{ type: 'caption', at: 0.3, en: 'Climax Motors: Partridge holds 500 shares, up 7 points in 10 days.', zh: '克莱麦克斯汽车：帕特里奇持有500股，十天涨了7点。' },
      { type: 'counter', at: 'L0@seven', until: 'L1', x: 1560, y: 320, from: 0, to: 3500, prefix: '$', size: 80, color: GREEN, label: ['500 shares × 7 points, on paper', '500股×7点＝账面利润'] },
      { type: 'bubble', at: 'L1', until: 'L2', x: 960, y: 70, w: 620, en: "Take your profit now, and buy it back on the next dip! I've just sold every share I owned!", zh: '现在就获利了结，等下次回调再买回来！我刚把手里的股票全卖了！', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 300, y: 70, w: 640, en: "My dear boy, if I sold that stock now I'd lose my position. And then where would I be?", zh: '亲爱的孩子，我要是现在卖了那只股票，就会丢掉我的仓位。那我还剩什么？', tx: 700, ty: 590 },
      { type: 'bubble', at: 'L3', x: 300, y: 70, w: 640, en: "I paid a high price for my experience. I won't pay a second tuition fee. It's a bull market, you know.", zh: '我的经验是花高价买来的，我可不想再交第二次学费。这是牛市，你知道的。', tx: 700, ty: 590 }],
    lines: [
      N('One day Elmer Harwood rushed in. He had tipped Partridge into Climax Motors: five hundred shares, up seven points in ten days.', '一天，埃尔默·哈伍德冲了进来。是他推荐帕特里奇买了克莱麦克斯汽车：五百股，十天涨了七个点。'),
      L('trader', "Take your profit now, and buy it back on the next dip! I've just sold every share I owned!", '现在就获利了结，等下次回调再买回来！我刚把手里的股票全卖了！', { speak: 'elmer' }),
      L('partridge', "My dear boy, if I sold that stock now I'd lose my position. And then where would I be?", '亲爱的孩子，我要是现在卖了那只股票，就会丢掉我的仓位。那我还剩什么？', { speak: 'partridge' }),
      L('partridge', "I paid a high price for my experience. I won't pay a second tuition fee. It's a bull market, you know.", '我的经验是花高价买来的，我可不想再交第二次学费。这是牛市，你知道的。', { speak: 'partridge' }),
    ] });

  // ---- what "it's a bull market" meant ----
  lesson(h, { id: 'e03_position', tag: ['THE BIG LESSON', '最大的教训'], title: ['What "It\'s a Bull Market" Really Meant', '“这是牛市”的真正含义'],
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [{ type: 'chart', at: 0.4, x: 470, y: 220, w: 1000, h: 620, xr: [0, 12], yr: [92, 168], yTicks: [100, 120, 140, 160], illustrative: true, cursorLabel: false,
        title: ['A bull market: main movement and reactions', '牛市：主要趋势与回调'],
        series: [{ pts: [[0, 100], [1, 108], [1.6, 104], [3, 118], [3.7, 112], [5, 128], [5.7, 121], [7, 138], [7.8, 131], [9.5, 152], [10.3, 146], [11.2, 158], [12, 150]], color: GREEN,
          draw: [['L0', 5], ['L1', 9], ['L2', 12]] }],
        marks: [{ x: 0, y: 100, at: 'L0', en: 'Bull market starts: buy', zh: '牛市启动：买入', dx: 20, dy: 16, w: 330 },
          { x: 1.6, y: 104, at: 'L1', en: "Reaction: hold. Don't trade it away", zh: '回调：拿住，别交出仓位', dx: -93, dy: -364, w: 280, fill: PINK },
          { x: 5.7, y: 121, at: 'L1@never', en: 'Another reaction: still hold', zh: '又一次回调：继续持有', dx: 20, dy: 25, w: 280, fill: PINK },
          { x: 11.2, y: 158, at: 'L2@sell', en: 'Near the end: sell all', zh: '接近尾声：全部卖出', dx: -420, dy: -53, w: 330, fill: YEL }] },
      { type: 'note', at: 'L0@main', x: 1500, y: 220, w: 390, h: 290, size: 32, fill: MINT,
        en: 'The big money is in the main movement, not in the fluctuations.', zh: '大钱在主要趋势里，不在波动里。' },
      { type: 'note', at: 'L3', x: 1500, y: 535, w: 390, h: 305, size: 32, fill: YEL, anim: 'slideU',
        en: 'The first ⅛ and the last ⅛: "the most expensive eighths in the world."', zh: '最初的⅛和最后的⅛：“世界上最昂贵的八分之一点。”' }],
    lines: [
      N('It took me years to get his meaning: the big money is not in the fluctuations, but in the main movement.', '我花了好多年才懂他的意思：大钱不在波动里，而在主要的趋势里。'),
      N('Sell for a reaction, and the market may never let you back in cheaper. That is what losing your position means.', '为了等回调而卖出，市场可能再也不给你更便宜的价格买回来。这就是“丢掉仓位”。'),
      N('So in a bull market, buy and hold until you think it is near its end. Then sell everything, for keeps.', '所以在牛市里，买入并持有，直到你认为它快结束了。然后全部卖出，彻底离场。'),
      N('And stop trying to catch the first eighth or the last. They are the most expensive eighths in the world.', '别再想抓住最初的八分之一点或最后的八分之一点。它们是世界上最昂贵的八分之一点。'),
    ] });

  // ---- "It was always my sitting" ----
  shot({ id: 'e03_sitting', set: 'study', setOpts: { night: true, lampX: 1650 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0@sitting', on: 'nar', z: 1.4, dur: 1.0 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 620, y: 880, s: 1.25, pose: 'relaxed', expr: 'neutral',
      acts: [{ t: 'L0', pose: 'explain' }, { t: 'L0@sitting', pose: 'fist', expr: 'determined' }, { t: 'L1', pose: 'explainR', expr: 'neutral' }, { t: 'L2', pose: 'chin', expr: 'think' }, { t: 'L3', pose: 'cross', expr: 'determined' }] }],
    items: [
      { type: 'note', at: 'L0@sitting', x: 1180, y: 110, w: 700, h: 190, size: 34, fill: YEL,
        en: '"It never was my thinking that made the big money for me. It always was my sitting."', zh: '“让我赚大钱的从来不是我的想法，而始终是我坐得住。”' },
      { type: 'counter', at: 'L2@million', x: 1530, y: 420, from: 0, to: -1000000, fmt: '$', size: 84, dur: 1.6, color: RED, label: ['paper profit a rally would cost', '一波反弹会吃掉的账面利润'] },
      { type: 'note', at: 'L3', x: 1180, y: 590, w: 700, h: 150, size: 30, fill: MINT,
        en: 'He stood pat. Covering to sell again higher could cost him his position.', zh: '他按兵不动。平仓后想在更高处再卖，可能会丢掉仓位。' }],
    lines: [
      N('After making and losing millions, I tell you: it never was my thinking that made the big money. It always was my sitting.', '赚过也赔过几百万之后，我告诉你：让我赚大钱的从来不是我的想法，而始终是我坐得住。'),
      N('Being right is no trick; every bull market has early bulls. Men who are right and sit tight are uncommon.', '判断正确不算本事，每个牛市都有早早看涨的人。既判断正确又坐得住的人，很少。'),
      N('Once I was short a hundred thousand shares and saw a rally coming. I figured it would cost me a million dollars of paper profit.', '有一次我做空了十万股，看到一波反弹要来。我算过，它会让我少掉一百万美元的账面利润。'),
      N('I stood pat and saw half my paper profit go. Covering to resell higher, I might have lost my position.', '我按兵不动，眼看一半的账面利润没了。若平仓想在更高处再卖空，我可能就丢掉了仓位。'),
    ] });

  // ================= Chapter VI =================
  chapter('Chapter VI · The Hunch and the Tip', '第六章 · 直觉与小道消息');
  photo({ id: 'e03_ac', src: `${PD}/atlantic_city_boardwalk_1904_detroit.jpg`, credit: 'Atlantic City boardwalk, c.1904 · Detroit Publishing Co. (public domain)', music: 'rag',
    cap: ['Spring 1906, Atlantic City. Harding Brothers had a branch office on the Boardwalk.', '1906年春，大西洋城。哈丁兄弟在木板路上设有分部。'],
    kb: [{ t: 0, x: 960, y: 560, z: 1.02 }, { t: 14, x: 900, y: 520, z: 1.15 }],
    lines: [
      N('Spring 1906. I was in Atlantic City for a rest, out of stocks, trading again through Harding Brothers.', '1906年春天，我在大西洋城休养，手上没有持仓。那时我又回到哈丁兄弟公司交易。'),
      N('I often had hunches. Perhaps many little things, each insignificant, together powerful. Whenever I argued one away, I regretted it.', '我常有直觉。也许是许多小事，各自微不足道，合起来却很有力。每当我说服自己不理会直觉，事后总会后悔。'),
    ] });

  shot({ id: 'e03_hunch', set: 'office', trans: 'wipe', music: 'rag',
    setOpts: { board: [['UNION PAC', 'READING', 'N. PAC', 'STEEL', 'SUGAR'], ['+⅞', '+½', '+1', '+¼', '+⅜'], ['+½', '+⅜', '+¾', '+⅛', '+¼']], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 500, z: 1.0 }, { t: 'L0@Union', x: 420, y: 350, z: 1.3, dur: 1.2 }, { t: 'L1', on: 'friend', z: 1.4, dur: 1 }, { t: 'L2', on: 'larry', z: 1.45, dur: 1 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.3 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 760, y: 890, s: 1.2, pose: 'chin', expr: 'think',
        acts: [{ t: 'L0@Union', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'shrug', expr: 'neutral' }, { t: 'L3', pose: 'cross', expr: 'determined' }, { t: 'L4', pose: 'hips', expr: 'smile' }] },
      { id: 'friend', x: 1250, y: 890, s: 1.15, flip: true, pose: 'relaxed', expr: 'smile',
        acts: [{ t: 'L1', pose: 'grab', expr: 'shock' }, { t: 'L2e', pose: 'shrug', expr: 'frown' }, { t: 'L4', pose: 'cross', expr: 'sly' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'The Boardwalk branch. A strong bull market; he can swing 3,000–4,000 shares.', zh: '木板路分部。强劲的牛市；他能做三四千股的仓位。' },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1000, y: 70, w: 540, en: 'What did you hear? Then why in blazes are you selling?', zh: '你听到什么了？那你到底为什么要卖？', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 330, y: 80, w: 520, en: "I don't know. I just feel that something is going to happen.", zh: '我不知道。我只是觉得要出事了。', tx: 760, ty: 590 },
      { type: 'ticket', screen: true, at: 'L3', until: 'L4', x: 1560, y: 330, lines: ['UNION PACIFIC', 'SELL 1,000 @ MKT', '× 3'], head: 'HARDING BROS. · BOARDWALK', color: TICKET, rot: 6 },
      { type: 'counter', at: 'L4@two', x: 1560, y: 330, from: 3000, to: 5000, suffix: ' sh', size: 96, label: ['short Union Pacific', '做空联合太平洋'] }],
    lines: [
      N("At their Boardwalk branch one morning, the market was strong. I looked at Union Pacific and felt I must sell it. I couldn't say why.", '一天早上在他们木板路的分部，市场很强。我看着联合太平洋，觉得非卖不可。可我说不出为什么。'),
      L('friend', 'What did you hear? Then why in blazes are you selling?', '你听到什么了？那你到底为什么要卖？', { speak: 'friend' }),
      L('larry', "I don't know. I just feel that something is going to happen.", '我不知道。我只是觉得要出事了。', { speak: 'larry' }),
      N('I sold a thousand, another, then a third, and walked out short three thousand in a rising market, unworried.', '我卖了一千股，又一千，再一千，在上涨的市场里做空了三千股走了出去，一点也不担心。'),
      N('Next afternoon it slipped below my average, so I sold two thousand more: five thousand, all my margin allowed.', '第二天下午，它跌破了我的平均卖价，我又卖了两千股：一共五千股，这是我的保证金所能允许的上限。'),
    ] });

  photo({ id: 'e03_quake', src: `${PD}/sf_earthquake_cityhall_1906_detroit.jpg`, credit: 'San Francisco City Hall after the 1906 earthquake · Detroit Publishing Co. (public domain)', music: 'tense',
    cap: ['April 18, 1906: the San Francisco earthquake and fire.', '1906年4月18日：旧金山大地震与大火。'],
    lines: [
      N('I went back to New York that very night. The next day came news of the San Francisco earthquake.', '我当晚就回了纽约。第二天，旧金山大地震的消息传来。'),
      N("Yet the market opened only a couple of points down, and came back by the close. A bullish Street didn't want to see the damage.", '可市场开盘只跌了几个点，收盘前又涨了回来。一片看涨的华尔街，不愿看见这场破坏。'),
    ] });

  shot({ id: 'e03_tape', set: 'office', trans: 'whip', music: 'tense',
    setOpts: { board: [['UNION PAC', 'SO. PAC', 'READING', 'STEEL', 'N. PAC'], ['−2', '−2', '−1', '−1', '−1'], ['', '', '', '', '']], boardSeq: [{ t: 0.8, r: 1, c: 0, v: 'BACK' }, { t: 1.0, r: 1, c: 1, v: 'BACK' }], hl: [1, 0] },
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'friend', z: 1.3, dur: 1 }, { t: 'L1', on: 'larry', z: 1.5, dur: 0.8 }, { t: 'L2', x: 960, y: 520, z: 1.05, dur: 1.3 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 700, y: 890, s: 1.2, pose: 'cross', expr: 'neutral',
        acts: [{ t: 'L1', pose: 'point', expr: 'determined' }, { t: 'L2', pose: 'explain', expr: 'neutral' }, { t: 'L2@cover', pose: 'cross', expr: 'determined' }] },
      { id: 'friend', x: 1250, y: 890, s: 1.15, flip: true, pose: 'explain', expr: 'smile',
        acts: [{ t: 'L0@tape', pose: 'pointUp', expr: 'grin' }, { t: 'L2', pose: 'shrug', expr: 'frown' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'New York, the day of the earthquake news. Short 5,000 Union Pacific.', zh: '纽约，地震消息传来当天。做空5,000股联合太平洋。' },
      { type: 'bubble', at: 'L0', until: 'L1', x: 960, y: 70, w: 620, en: "That was some hunch, kid. But the talent and the money are all on the bull side. The tape doesn't lie, does it?", zh: '这直觉真神，小子。可行家和资金全站在多头那边。纸带不会说谎，对吧？', tx: 1250, ty: 600 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 300, y: 90, w: 520, size: 36, en: "It doesn't always tell the truth on the instant.", zh: '它并不总是当下就说出真相。', tx: 700, ty: 590 },
      { type: 'note', at: 'L2', x: 1250, y: 110, w: 630, h: 235, size: 30, fill: PINK,
        en: 'His reasoning: the damage is enormous; Union Pacific is among the worst hit. Where will dividends come from?', zh: '他的推理：损失巨大；联合太平洋是受灾最重的之一。股息从哪里来？' }],
    lines: [
      L('friend', "That was some hunch, kid. But the talent and the money are all on the bull side. The tape doesn't lie, does it?", '这直觉真神，小子。可行家和资金全站在多头那边。纸带不会说谎，对吧？', { speak: 'friend' }),
      L('larry', "It doesn't always tell the truth on the instant.", '它并不总是当下就说出真相。', { speak: 'larry' }),
      N('The damage was enormous, and Union Pacific would be among the worst sufferers. Where would its dividends come from? I would not cover.', '损失巨大，联合太平洋会是受害最重的之一。它的股息从哪里来？我不会平仓。'),
    ] });

  // ---- pyramiding on confirmation ----
  lesson(h, { id: 'e03_pyramid', tag: ['ANALYSIS', '分析'], title: ['How the Earthquake Short Was Built', '地震空单是怎样建立的'], music: 'tense',
    gest: ['explain', 'chin', 'point', 'up', 'explainR'], expr: [null, null, 'determined', 'smile', null],
    items: [
      { type: 'bars', at: 0.4, x: 470, y: 220, w: 960, h: 620, title: ['Shares short, Union Pacific, 1906', '联合太平洋空头持股，1906年'], max: 20000, vsize: 30,
        bars: [{ v: 3000, vl: '3,000', en: 'Day 1: a feeling', zh: '第1天：直觉', at: 'L0@Three', color: '#c9a26a' },
          { v: 5000, vl: '5,000', en: 'Day 2: below his average', zh: '第2天：跌破均价', at: 'L0@Two', color: '#c9a26a' },
          { v: 5000, vl: '5,000', en: 'Quake day: adds nothing', zh: '地震当天：不加仓', at: 'L1', color: '#9a9182' },
          { v: 10000, vl: '10,000', en: 'Prices slide: +5,000', zh: '价格下滑：+5,000', at: 'L2@five', color: RED },
          { v: 20000, vl: '20,000+', en: 'The break: +10,000, more', zh: '暴跌：+10,000，再加', at: 'L2@ten', color: RED }] },
      { type: 'counter', at: 'L3@two', x: 1665, y: 330, from: 0, to: 250000, prefix: '+$', size: 92, dur: 1.8, color: GREEN, label: ['in a few days', '短短几天内'] },
      { type: 'note', at: 'L4', x: 1460, y: 500, w: 430, h: 330, size: 34, fill: YEL, anim: 'pop',
        en: 'Small while unproven. Bigger only as the market proves you right.', zh: '未经证实时仓位要小；只有市场证明你对了，才加大。' }],
    lines: [
      N('Look at how it was built. Three thousand on a feeling. Two thousand more only when the stock broke below my average.', '看看这个仓位是怎么建起来的：凭感觉先卖三千股；直到股价跌破我的均价，才再加两千股。'),
      N('On the earthquake day I added nothing. The market had not confirmed me yet.', '地震当天我一股没加。市场还没有确认我的判断。'),
      N('When fuller reports came and prices slid, I doubled with five thousand more. When the market broke, ten thousand more.', '更完整的报道传来、价格下滑时，我加倍，再卖五千股。等市场真正崩跌，又卖一万股。'),
      N('I sold still more, then cleaned up: two hundred and fifty thousand dollars in a few days.', '我继续卖，然后全部平仓：几天之内赚了二十五万美元，是我当时最大的一笔盈利。'),
      N('The pattern: small while unproven, bigger only as the market proves you right.', '规律是：未经证实时仓位要小，只有市场证明你对了，才加大。'),
    ] });

  // ---- Saratoga ----
  photo({ id: 'e03_saratoga', src: `${PD}/saratoga_broadway_grand_union_c1905_detroit.jpg`, credit: 'Broadway, Saratoga Springs, c.1900–10 · Detroit Publishing Co. (public domain)', music: 'calm',
    cap: ['Saratoga Springs, the summer resort (photo c. 1900–1910). Summer 1906.', '萨拉托加温泉度假地（照片约摄于1900–1910年）。1906年夏。'],
    kb: [{ t: 0, x: 960, y: 540, z: 1.03 }, { t: 14, x: 1010, y: 500, z: 1.16 }],
    lines: [
      N('That summer I went to Saratoga. Harding Brothers had a branch there too: a wonderful place for tips of every kind.', '那年夏天我去了萨拉托加。哈丁兄弟在那里也有分部：那是各种小道消息的绝佳去处。'),
      N('I took none. But Union Pacific acted as if somebody big, who knew what was what, were quietly accumulating it.', '我一条也不听。但联合太平洋的走势，就像有个懂行的大户在悄悄吸筹。'),
    ] });

  shot({ id: 'e03_harding', set: 'veranda', trans: 'iris', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'larry', z: 1.4, dur: 1.2 }, { t: 'L3', x: 960, y: 520, z: 1.05, dur: 1.4 }],
    cast: [{ id: 'larryHat', key: 'larry', x: 820, y: 880, s: 1.2, pose: 'chin', expr: 'smile', prop: { t: 'phone' },
      acts: [{ t: 'L0@160', pose: 'point', expr: 'determined' }, { t: 'L1', pose: 'phone', expr: 'shock' }, { t: 'L2', pose: 'phone', expr: 'determined' }, { t: 'L3', pose: 'despair', expr: 'worry' }] }],
    items: [{ type: 'caption', at: 0.3, en: "Harding Brothers' Saratoga branch, summer 1906.", zh: '1906年夏，哈丁兄弟萨拉托加分部。' },
      { type: 'ticket', screen: true, at: 'L0@160', until: 'L1', x: 1520, y: 330, lines: ['UNION PACIFIC', 'BUY 500 @ ~160', 'again… and again'], head: 'HARDING BROS. · SARATOGA', color: TICKET, rot: 5 },
      { type: 'bubble', at: 'L1', until: 'L2', x: 1060, y: 110, w: 700, kind: 'shout', size: 30, en: "Ed Harding, long distance: It isn't a case of margin, but of being a plain sucker! The insiders are feeding it out to you. Get out!", zh: '埃德·哈丁的长途电话：这不是保证金的问题，是你当了冤大头！内部人在把股票倒给你。快出来！', tx: 900, ty: 560 },
      { type: 'bubble', at: 'L2', until: 'L3', x: 280, y: 120, w: 460, en: "The tape says they're buying it.", zh: '纸带显示他们在买。', tx: 820, ty: 580 },
      { type: 'stamp', screen: true, at: 'L3@short', x: 1450, y: 330, en: 'SHORT 4,000 @ ~162', zh: '约162做空4,000股', size: 64 }],
    lines: [
      N('Once sure, I began buying at about 160, five hundred at a clip. The more I bought, the stronger it got.', '一旦确定，我就从160左右开始买入，每次五百股。我越买它越强，而且没有任何急涨。'),
      L('harding', "It isn't a case of margin, but of being a plain sucker! The insiders are feeding it out to you. Get out!", '这不是保证金的问题，是你当了冤大头！内部人在把股票倒给你。快出来！'),
      L('larry', "The tape says they're buying it.", '纸带显示他们在买。', { speak: 'larry' }),
      N('Ed was clever, well informed, and a real friend. I let him shake me: I sold out, and went short four thousand, mostly around 162.', '埃德聪明、消息灵通，是真正的朋友。我被他说动了：我卖光多头，又做空了四千股，大部分在162左右。'),
    ] });

  lesson(h, { id: 'e03_cost', tag: ['THE PRICE OF DOUBT', '怀疑的代价'], tagColor: RED, title: ['Saratoga: The Tape Said Up', '萨拉托加：纸带说要涨'],
    gest: ['explain', 'point', 'despair', 'up'], expr: [null, 'worry', 'sad', 'smile'],
    items: [{ type: 'chart', at: 0.3, x: 470, y: 220, w: 900, h: 500, xr: [0, 10], yr: [154, 180], yTicks: [160, 165, 170, 175], illustrative: true, cursorFmt: 'frac',
        title: ['Union Pacific, summer 1906', '联合太平洋，1906年夏'],
        series: [{ pts: [[0, 158], [1.5, 160], [3, 161], [4, 162], [4.6, 162], [5.4, 165], [6.4, 169], [7.2, 172], [8, 174], [9, 175], [10, 176]], color: '#2f5d8a',
          draw: [[0.4, 4], ['L0', 5], ['L1@172', 8], ['L3', 10]] }],
        marks: [{ x: 4, y: 162, at: 0.9, en: 'Short 4,000 ~162', zh: '约162做空4,000股', dx: -160, dy: 61, w: 260, fill: PINK },
          { x: 5.4, y: 165, at: 'L1', en: 'Cover order ~165', zh: '约165下平仓单', dx: 30, dy: 40, w: 260 },
          { x: 8, y: 174, at: 'L1@172', en: 'Fills: 172–174', zh: '成交172–174', dx: -300, dy: -90, w: 260, fill: PINK }],
        pnl: { entry: 162, shares: 4000, side: 'short', at: 0.9, exitAt: 'L2', exit: 172, x: 600, y: 420 } },
      { type: 'table', at: 0.5, x: 1400, y: 220, w: 490, widths: [0.62, 0.38], size: 28, bottom: 840,
        cols: [['Step', '步骤'], ['Price', '价格']],
        rows: [[['His own read: buy', '自己的判断：买入'], ['~160', '约160']],
          [["Friend's fear: short 4,000", '朋友的担心：做空4,000股'], ['~162', '约162']],
          [['10% dividend: cover order', '10%股息：下平仓单'], ['~165', '约165']],
          [['Fills', '成交'], ['172–174', '172–174']],
          [['Loss', '亏损'], ['−$40,000', '−4万美元']]],
        rowAt: [0.5, 0.9, 'L1', 'L1@172', 'L2@forty'], hl: [null, null, null, null, 'L2@forty'] },
      { type: 'note', at: 'L0@specialist', until: 'L3', x: 470, y: 734, w: 900, h: 106, size: 28, fill: MINT,
        en: 'New high. One specialist\'s mistake made him $350,000.', zh: '创出新高。一位专家经纪人的失误让他赚了35万美元。' },
      { type: 'equation', at: 'L3', x: 920, y: 790, size: 46, terms: [{ t: '−$40,000', zh: '平空亏损', at: 'L3', color: RED }, { t: '→', at: 'L3+0.4' },
        { t: '+$40,000', zh: '做多赚回', at: 'L3@forty' }, { t: '+ ≈$15,000', zh: '另赚约1.5万', at: 'L3@fifteen', hl: true }] }],
    lines: [
      N("Next day came a ten percent dividend. Union Pacific made a new high; one specialist's mistake made him three hundred and fifty thousand.", '第二天，董事会宣布派发10%的股息。联合太平洋创出新高；有个专家经纪人因为一次失误赚了三十五万美元。'),
      N('I sent the order to cover with the stock near 165. My brokers paid as high as 172 and 174.', '股价在165附近时我发出平仓指令。我的经纪人最后付出了高达172和174的价格。'),
      N("Ed's kindly meant advice cost me forty thousand dollars: a low price for not having the courage of my own convictions.", '埃德的好心劝告让我亏了四万美元：对一个没有勇气坚持自己信念的人来说，这代价算便宜的。'),
      N('Then I followed the tape: bought four thousand, held overnight, and made back the forty thousand, plus about fifteen thousand.', '然后我跟着纸带走：买入四千股，持有一夜，赚回了那四万美元，还多赚了约一万五千。'),
    ] });

  shot({ id: 'e03_school', set: 'study', setOpts: { lampX: 1650 }, trans: 'dip', music: 'calm',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L0', on: 'nar', z: 1.35, dur: 2 }, { t: 'L1', x: 960, y: 520, z: 1.05, dur: 1.5 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 760, y: 880, s: 1.25, pose: 'relaxed', expr: 'smile',
      acts: [{ t: 'L0', pose: 'chin', expr: 'smile' }, { t: 'L1', pose: 'explain', expr: 'determined' }] }],
    items: [{ type: 'note', at: 'L1@basic', x: 1240, y: 120, w: 640, h: 160, size: 32, fill: MINT,
      en: 'From then on: basic conditions, not individual stocks.', zh: '从此以后：看基本形势，而不是个别股票。' }],
    lines: [
      N("Had Ed not tried to save me money, I'd have made a killing. But that lesson completed my education.", '要不是埃德想帮我省钱，我本可以大赚一笔。但正是这一课，完成了我的交易教育。'),
      N('I gained confidence in myself. From then on, I thought about basic conditions instead of individual stocks.', '我对自己有了信心。从那以后，我思考的是基本形势，而不是个别股票。'),
    ] });

  // ---- summary ----
  lesson(h, { id: 'e03_rules', tag: ['TAKEAWAYS', '要点'], title: ['What Episode Three Teaches', '第三集的要点'],
    gest: ['explain', 'point', 'pointUp', 'explainR'],
    items: [
      { type: 'rule', at: 'L1', x: 470, y: 222, w: 1420, h: 112, n: '1', size: 32, en: "If a stock doesn't act right, don't touch it.", zh: '股票走得不对劲，就别碰。' },
      { type: 'rule', at: 'L1@Speculate', x: 470, y: 346, w: 1420, h: 112, n: '2', size: 32, en: "Speculate on conditions; don't gamble on fluctuations.", zh: '基于形势去投机，不要押注波动。' },
      { type: 'rule', at: 'L2', x: 470, y: 470, w: 1420, h: 112, n: '3', size: 32, tag: GREEN, en: 'The big money is in the big swing. Once right, sit tight.', zh: '大钱在大行情里。判断对了，就坐得住。' },
      { type: 'rule', at: 'L2@Add', x: 470, y: 594, w: 1420, h: 112, n: '4', size: 32, en: 'Add only as the market proves you right.', zh: '只在市场证明你对了时加码。' },
      { type: 'rule', at: 'L3', x: 470, y: 718, w: 1420, h: 112, n: '5', size: 32, tag: RED, en: "Trust your own reading over a friend's suspicion.", zh: '相信自己的判断，胜过朋友的疑虑。' }],
    lines: [
      N('Every loss I understood became a brand-new "Don\'t!" on my list. Here are this episode\'s.', '每弄懂一次亏损，我的清单上就多一条新的“不要！”。下面是这一集的。'),
      N("If a stock doesn't act right, don't touch it. Speculate on conditions; don't gamble on fluctuations.", '股票走得不对，就别碰。基于形势去投机，别去押注波动。'),
      N("The big money is in the big swing, so once you're right, sit tight. Add only as the market proves you right.", '大钱在大行情里，所以一旦判断正确，就要坐得住。只在市场证明你对了的时候加码。'),
      N("And trust your own reading over anybody's suspicions.", '还有，相信自己的判断，胜过任何人的疑虑。'),
    ] });

  lesson(h, { id: 'e03_mistakes', tag: ['MISTAKE REVIEW', '错误复盘'], tagColor: RED, title: ['Mistake → Cause → Rule', '错误 → 原因 → 规则'],
    gest: ['explain', 'chin', 'despair'],
    items: [{ type: 'table', at: 'L0', x: 470, y: 225, w: 1420, widths: [0.34, 0.31, 0.35], size: 30, bottom: 835,
      cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']],
      rows: [[['Took 4 points in a bull market', '牛市里赚4点就跑'], ['Fear of losing the profit', '怕利润跑掉'], ['Hold the main movement; sit tight', '守住主要趋势，坐得住']],
        [["Traded on others' rules", '靠别人的规则交易'], ['Borrowed wisdom, not study', '借来的智慧，而非研究'], ['Study conditions yourself', '自己研究形势']],
        [["Saratoga: short on a friend's fear (−$40,000)", '萨拉托加：因朋友担心而做空（−4万美元）'], ['Doubted his own tape reading', '怀疑自己的读盘'], ['Trust your evidence; if wrong, exit fast', '相信自己的证据；错了就快撤']]],
      rowAt: ['L0', 'L1', 'L2'] }],
    lines: [
      N('The mistakes. I took four points in a bull market, because I feared losing the profit.', '错误复盘。我在牛市里只赚四个点就跑，因为我怕利润跑掉。'),
      N("I traded as a careful semi-sucker, on other men's rules instead of my own study.", '我像个谨小慎微的半吊子傻瓜一样交易，靠别人的规则，而不是自己的研究。'),
      N("And at Saratoga I set aside my own reading for a friend's suspicion. It cost forty thousand dollars.", '在萨拉托加，我为了朋友的怀疑放弃了自己的判断，付出了四万美元。'),
    ] });
};
