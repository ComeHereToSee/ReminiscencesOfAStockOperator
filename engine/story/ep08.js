// Episode 8 — Chapters XV–XVI: the unexpectable (coffee, 1917–18), the "raid" myth, and tips.
module.exports = ({ shot, L, episode, FULL, HALF, BIGL, BIGR, THREE, P, ch }) => {
  const RED = '#b8322a', GREEN = '#2f7d3a', GOLD = '#f6d77a', PALE = '#fbf3df', BROWN = '#8a5a2b';
  const WISENSTEIN = { en: 'MR. WISENSTEIN', zh: '威森斯坦先生' };
  const GATES = { en: 'JOHN W. GATES', zh: '约翰·W·盖茨' };
  const HOOD = { en: 'J. T. HOOD', zh: 'J·T·胡德' };
  // a derby hat seen from below, lettered inside
  const derby = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="40" rx="300" ry="90" fill="#1d1d1d" stroke="#16130f" stroke-width="10"/><ellipse cx="0" cy="30" rx="210" ry="140" fill="#3a2a22" stroke="#16130f" stroke-width="8"/><ellipse cx="0" cy="30" rx="170" ry="105" fill="#7a2a22" stroke="#16130f" stroke-width="5"/><text x="0" y="62" text-anchor="middle" font-family="Georgia, serif" font-weight="900" font-size="96" fill="#f6d77a" stroke="#16130f" stroke-width="3" letter-spacing="10">WAR</text></g>`;

  episode(8, 'The Unexpectable and the Tip', '意外与消息', { en: 'Chapters XV – XVI', zh: '原著第十五至十六章' }, '#5a2a6a', [
    L('host', 'Episode eight. The unexpectable, and the tip.', '第八集：意外与消息。'),
    L('host', 'Sometimes you are right and still not paid, because the rules change. And tips, the most popular way to lose money, are everywhere.', '有时你判断对了却拿不到钱，因为规则变了。而消息——最受欢迎的亏钱方式——无处不在。'),
  ]);

  // ---------------------------------------------------------------- Ch XV
  shot({ id: 'p08_unexpect', kind: 'info', tag: { en: 'HAZARDS', zh: '风险' }, title: { en: 'The Unexpected and the Unexpectable', zh: '意外之事与不可预料之事' }, els: [
    { type: 'table', x: 70, y: 265, w: 1780, widths: [0.24, 0.4, 0.36], size: 28, cols: [['Kind of loss', '亏损类型'], ['Example', '例子'], ['His attitude', '他的态度']], rows: [
      [['The unexpected', '意外之事'], ['News nobody could foresee', '没人能预见的消息'], ['Like a badly timed storm', '就像一场不合时宜的暴雨']],
      [['Being wrong', '判断错误'], ['Missing the facts, or reasoning badly', '没看清事实，或推理有误'], ['Pay for it. No exemptions.', '认赔。没有例外。']],
      [['The unexpectable', '不可预料之事'], ['Being right, and cheated of the profit by a change in the rules', '判断正确，却因规则改变被夺走利润'], ['No profit is safe until it is in your bank', '利润存进银行之前都不安全']],
    ], reveal: true, rowAt: [1, 3, 4], hl: [2] },
    { type: 'box', at: 2, x: 70, y: 660, w: 1780, color: PALE, anchor: 'middle', en: 'Not a battlefield: "I merely differ in opinion." Stick to facts and facts only (Bernard M. Baruch\'s recipe).', zh: '这不是战场："我只是看法不同。"只看事实，只依据事实行动（伯纳德·M·巴鲁克的秘诀）。', size: 30 },
  ], lines: [
    L('larry', 'Among the hazards of speculation, the unexpected ranks high. I might even say, the unexpectable.', '在投机的种种风险中，意外之事名列前茅。我甚至要说：不可预料之事。'),
    L('larry', 'When I lose because of something no one could foresee, I think of it like a badly timed storm. Life itself is a gamble.', '如果我因为无人能预见的事而亏钱，我把它当成一场不合时宜的暴雨。人生本身就是一场赌博。'),
    L('larry', 'Wall Street isn\'t a battlefield. I don\'t fight people or cliques. I merely differ in opinion, in my reading of basic conditions.', '华尔街不是战场。我不和个人或集团争斗。我只是看法不同——对基本状况的解读不同。'),
    L('larry', 'I try to stick to facts and facts only. That is Bernard Baruch\'s recipe. When I miss the facts or reason badly, I lose, as I should.', '我尽量只看事实，只依据事实行动。这是伯纳德·巴鲁克的秘诀。当我没看清事实或推理失误时，我就亏钱，这是应该的。'),
    L('larry', 'But I object to losing money when I am right. No profit should be counted safe until it is in your bank.', '但我反对在判断正确时亏钱。利润存进银行之前，都不该算作安全。'),
  ] });
  shot({ id: 'p08_thesis', kind: 'info', tag: { en: 'CASE STUDY · COFFEE', zh: '案例 · 咖啡' }, title: { en: 'The Thesis: The One Commodity That Hadn\'t Risen', zh: '逻辑：唯一没涨的商品' }, els: [
    { type: 'bars', x: 70, y: 265, w: 760, h: 550, max: 420, vsize: 28, bars: [
      { v: 100, vl: '+100%', en: 'Others, low end', zh: '其他商品低端', color: RED, at: 1 },
      { v: 400, vl: '+400%', en: 'Others, high end', zh: '其他商品高端', color: '#7a1f1a', at: 1 },
      { v: 0, vl: 'below pre-war', en: 'Coffee', zh: '咖啡', color: BROWN, at: 1 },
    ] },
    { type: 'flow', x: 870, y: 265, w: 980, dir: 'v', bh: 150, max: 28, nodes: [
      { num: 1, en: 'War closes Europe\'s markets → cargoes flood the U.S. → big surplus, low price.', zh: '战争关闭欧洲市场→货船涌向美国→大量过剩，价格低迷。', at: 2 },
      { num: 2, en: 'Submarines sink ships → fewer ships → dwindling coffee imports.', zh: '潜艇击沉商船→船只减少→咖啡进口萎缩。', at: 3 },
      { num: 3, en: 'Same consumption, smaller supply → surplus absorbed → price must rise.', zh: '消费不变、供应减少→过剩被消化→价格必涨。', at: 3 },
    ] },
  ], lines: [
    L('larry', 'By July 1917 I had paid my debts and was well ahead. Now I had the time and money to study commodities as well as stocks.', '到1917年7月，我已还清债务，还颇有盈余。现在我有时间也有钱，在股票之外研究商品。'),
    L('larry', 'Commodities stood 100 to 400 percent above their pre-war levels. The one exception was coffee, still below its pre-war price.', '各种商品价格比战前高出100%到400%。唯一的例外是咖啡，价格仍低于战前。'),
    L('host', 'Why? The war closed Europe\'s markets, so cargoes poured into America, the one big market left, and piled up a surplus.', '为什么？战争关闭了欧洲市场，货船纷纷涌向美国这个仅存的大市场，堆出了大量过剩。'),
    L('host', 'But German and Austrian submarines were sinking ships. Imports had to dwindle, and once the surplus was absorbed, coffee had to rise.', '但德奥潜艇在击沉商船。进口必然萎缩，一旦过剩被消化，咖啡就必然上涨。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p08_coffee1', kind: 'comic', panels: [
      P(a, { bg: 'coffee', props: [{ t: 'sacks', x: 520, y: 560, n: 4 }], chars: [ch('larryHat', a, 0.35, 0.95, { expr: 'worry', pose: 'cross', hy: 0.55, exprAt: { 1: 'sad' } })] }),
      P(b, { at: 2, bg: 'coffee', props: [{ t: 'sacks', x: 40, y: 520, n: 6 }, { t: 'sacks', x: 560, y: 580, n: 4 }], chars: [ch('larryHat', b, 0.55, 0.95, { expr: 'determined', pose: 'fist', hy: 0.55, exprAt: { 3: 'grin' } })] }),
    ], caps: [
      { x: 70, y: 70, w: 520, en: 'Winter 1917: buys coffee. Then nine dead months.', zh: '1917年冬：买入咖啡。随后九个月毫无动静。' },
      { at: 2, x: 1005, y: 70, w: 520, en: 'Buys again: 3× the line, longest-dated contracts.', zh: '再次买入：三倍仓位，最远期合约。' },
    ],
    sfx: [{ at: 1, x: 470, y: 340, t: 'BIG LOSS', zh: '巨额亏损', size: 80, color: GOLD }, { at: 3, x: 1420, y: 330, t: 'RISING!', zh: '上涨！', size: 80, color: GOLD }], lines: [
      L('larry', 'I began buying in the winter of 1917. The market did nothing. For nine long months I carried my line to no purpose.', '我从1917年冬天开始买入。市场毫无动静。漫长的九个月里，我白白扛着这些仓位。'),
      L('larry', 'When the contracts expired I sold out at a whopping big loss. I had been wrong on time, not on the facts.', '合约到期时，我全部卖出，亏了一大笔。我错在时机，而不是事实。'),
      L('larry', 'So I bought again, three times as much, in deferred contracts running as far out as I could get.', '于是我再次买入，规模是原来的三倍，用的是能买到的最远期合约。'),
      L('larry', 'This time the market rose at once. My sellers were roasters who had bought coffee in Brazil and had no ships to bring it here.', '这一次市场立刻上涨。卖给我合约的是烘焙商，他们在巴西买了咖啡，却没有船运过来。'),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p08_washington', kind: 'comic', panels: [
      P(a, { bg: 'court', props: [{ t: 'sign', x: 120, y: 60, w: 665, en: 'PRICE FIXING COMMITTEE · WAR INDUSTRIES BOARD', zh: '战时工业委员会 · 价格管制委员会', size: 30, zsize: 26 }], chars: [
        ch('broker', a, 0.3, 0.85, { expr: 'worry', pose: 'point', hy: 0.62, hat: 'none' }),
        ch('trader', a, 0.72, 0.85, { expr: 'worry', hy: 0.62, hat: 'none', flip: true }),
      ] }),
      P(b, { at: 2, bg: 'dark', props: [{ t: 'paper', x: 90, y: 100, w: 720, h: 540, paper: 'WASHINGTON', en: 'MAXIMUM PRICE FIXED FOR COFFEE · ALL CONTRACTS TO BE CLOSED', zh: '咖啡限定最高价·所有合约限期了结', size: 46, rot: 2 }] }),
    ],
    bubbles: [{ at: 1, x: 90, y: 250, w: 500, en: 'A speculator, one Livingston, is cornering coffee! Protect the American breakfast!', zh: '有个叫利文斯顿的投机客要逼空咖啡！请保护美国人的早餐！', tx: 290, ty: 470 }],
    sfx: [{ at: 3, x: 1430, y: 720, t: 'SOLD OUT', zh: '被迫清仓', size: 72, color: GOLD }], lines: [
      L('larry', 'The shorts rushed to Washington, to the Price Fixing Committee of the War Industries Board. I think that was the official name.', '空头们跑到华盛顿，找到战时工业委员会的价格管制委员会——我想正式名称是这个。'),
      L('host', 'They claimed a speculator named Livingston was cornering coffee, and that the American breakfast table needed protection.', '他们声称一个叫利文斯顿的投机客正在逼空咖啡，美国人的早餐桌需要保护。'),
      L('larry', 'The committee fixed a maximum price for raw coffee and a deadline for closing all contracts. The Coffee Exchange would have to go out of business.', '委员会规定了生咖啡的最高价，并限期了结所有合约。咖啡交易所只能停业。'),
      L('larry', 'There was only one thing to do. I sold out. Profits of millions, as certain as any I ever made, never came.', '我只能做一件事：卖出全部合约。那几百万利润，本来和我赚过的任何一笔一样确定，却始终没有到手。'),
    ] });
  }
  shot({ id: 'p08_coffee', kind: 'info', tag: { en: 'CASE STUDY · COFFEE', zh: '案例 · 咖啡' }, title: { en: 'Right on the Facts, Right on the Timing, and Still Not Paid', zh: '事实对了，时机对了，还是没拿到钱' }, els: [
    { type: 'bars', x: 70, y: 265, w: 760, h: 550, max: 25, vsize: 30, bars: [
      { v: 9, vl: '≈9¢', en: 'Green coffee under the cap', zh: '限价下的生咖啡', color: BROWN, at: 0 },
      { v: 23, vl: '23¢', en: 'After the Exchange reopened', zh: '交易所复市后', color: GREEN, at: 1 },
    ] },
    { type: 'cards', x: 870, y: 265, w: 980, ch: 160, cols: 1, max: 28, items: [
      { en: 'Roasted coffee rose with everything else. Only the roasters gained.', zh: '烘焙咖啡照样随百物上涨。只有烘焙商得利。', at: 0, tagColor: BROWN },
      { en: 'A price fixed too low kept supplies away, so the public paid more later.', zh: '限价过低反而挡住了供应，公众后来付得更多。', at: 1, tagColor: RED },
      { en: 'A rise of just 2–3¢ a pound would have meant several millions for him.', zh: '每磅只要涨2–3美分，他就能赚数百万美元。', at: 2, tagColor: GREEN },
    ] },
  ], lines: [
    L('host', 'Green coffee hung around nine cents a pound under the cap. Roasted coffee went up anyway, so only the roasters benefited.', '在限价下，生咖啡徘徊在每磅九美分左右。烘焙咖啡却照涨不误，得利的只有烘焙商。'),
    L('host', 'When the Coffee Exchange reopened later, coffee sold at twenty-three cents. The price fixed too low had kept supplies away.', '后来咖啡交易所复市时，咖啡卖到二十三美分。过低的限价把供应挡在了门外。'),
    L('larry', 'A rise of two or three cents a pound would have meant several millions for me, and cost the public less than the later advance did.', '每磅只要涨两三美分，我就能赚好几百万，而公众付出的代价还比后来的涨幅小。'),
    L('host', 'He was right on the facts, right on the timing at last, and still not paid.', '事实他看对了，时机最终也对了，钱却还是没拿到。'),
  ] });
  shot({ id: 'p08_hazards', kind: 'info', tag: { en: 'RISK CHECKLIST', zh: '风险清单' }, title: { en: 'Add the Unexpectable to Your List', zh: '把"不可预料之事"列入清单' }, els: [
    { type: 'table', x: 70, y: 265, w: 1780, widths: [0.26, 0.38, 0.36], size: 27, cols: [['Hazard', '风险'], ['In his story', '在他的经历中'], ['Defence', '对策']], rows: [
      [['Wrong on the facts', '事实判断错误'], ['Missed facts or bad reasoning', '没看清事实或推理失误'], ['Take the loss; it is the price of being wrong', '认赔；这是犯错的代价']],
      [['Wrong on time', '时机错误'], ['Coffee: nine dead months, a big loss', '咖啡：九个月毫无动静，巨亏'], ['Allow for time (he switched to the longest-dated contracts)', '给时间留余地（他改用最远期合约）']],
      [['The unexpected', '意外之事'], ['Lusitania; the German submarine note', '"卢西塔尼亚号"；德国潜艇战照会'], ['Base positions on market conditions', '仓位以市场状况为依据']],
      [['The unexpectable', '不可预料之事'], ['Coffee price-fixing; two other exchange rulings that changed the rules without warning', '咖啡限价；另有两次交易所未经预告修改规则'], ['Trade within your means, with an ample margin; count no profit until banked', '量力而行、留足余地；利润落袋前不算数']],
    ], hl: [3] },
  ], lines: [
    L('larry', 'On two other occasions, exchange committees changed the trading rules without warning. You cannot be dead sure of anything in speculation.', '另有两次，交易所的委员会未经预告就修改了交易规则。投机中，你对任何事都不能百分之百确定。'),
    L('host', 'So he added the unexpectable to his list of hazards. Here is the full list, with a defence for each.', '于是他把"不可预料之事"加进了风险清单。下面是完整清单，以及各自的对策。'),
    L('host', 'Accept ordinary losses like weather. Trade within your means and leave an ample margin of safety, as he says he did even in coffee.', '像对待天气一样接受寻常的亏损。量力而行，留足安全余地——他说即使在咖啡上他也是这么做的。'),
  ] });
  shot({ id: 'p08_raid', kind: 'info', tag: { en: 'THE "BEAR RAID" MYTH', zh: '"空头袭击"的迷思' }, title: { en: 'Why a Raid Can\'t Keep a Stock Down', zh: '为什么袭击压不住股价' }, els: [
    { type: 'flow', x: 70, y: 265, w: 1780, bh: 150, max: 28, nodes: [
      { num: 1, en: 'A "raid" pushes a stock below its real value', zh: '"袭击"把股价压到真实价值以下', at: 1 },
      { num: 2, en: 'Insiders who know its worth buy at bargain prices', zh: '了解其价值的内部人以低价买入', at: 1 },
      { num: 3, en: 'The raider stops; the price rebounds', zh: '袭击者一停手，价格就反弹', at: 1 },
    ] },
    { type: 'flow', x: 70, y: 445, w: 1780, bh: 150, max: 28, nodes: [
      { num: 1, en: 'A stock breaks and fails to rally', zh: '股票暴跌且不反弹', color: '#f3d9d4', at: 2 },
      { num: 2, en: 'So insiders are not buying', zh: '说明内部人没有买', color: '#f3d9d4', at: 2 },
      { num: 3, en: 'Conditions are not bull conditions: a real decline', zh: '状况并非牛市：这是真正的下跌', color: '#f3d9d4', at: 2 },
    ] },
    { type: 'box', at: 4, x: 160, y: 640, w: 1600, color: GOLD, anchor: 'middle', size: 34, en: '“There is a reason—an unknown reason but a good reason; therefore, get out.” (Ch. XV)', zh: '「一定有原因——未知但充分的原因；所以，赶紧离场。」（第十五章）' },
  ], lines: [
    L('larry', 'After coffee, the gossips blamed my alleged raids for every break in prices. The public always wants a reason for each price movement.', '咖啡事件之后，闲言碎语把每一次下跌都归咎于我所谓的"袭击"。公众总想为每一次价格波动找个理由。'),
    L('larry', 'But no manipulation can put stocks down and keep them down. Push a stock below its value, and the insiders who know its worth will buy.', '但没有任何操纵能把股价压下去并一直压住。把股价压到价值以下，了解其价值的内部人就会买进。'),
    L('host', 'So a stock that breaks and fails to rally is telling you something: the insiders aren\'t buying, and conditions are not bull conditions.', '所以，一只暴跌后不反弹的股票是在告诉你：内部人没有买，市场状况并非牛市。'),
    L('larry', 'In ninety-nine cases out of a hundred, so-called raids are legitimate declines, perhaps hurried along, but not caused by any trader.', '一百次所谓的"袭击"里，有九十九次其实是正常的下跌，也许被加速了，但并非由哪个交易者造成。'),
    L('host', 'Blaming a raid is an inverted tip: it keeps you holding. When a stock breaks badly, there is a reason. Get out.', '归咎于"袭击"是一种反向消息：它让你继续死扛。股票大跌必有原因。离场。'),
  ] });

  // ---------------------------------------------------------------- Ch XVI
  shot({ id: 'p08_why', kind: 'info', tag: { en: 'WHY TIPS SPREAD', zh: '消息为何流行' }, title: { en: 'Everybody Wants a Tip', zh: '人人都想要消息' }, els: [
    { type: 'cards', x: 70, y: 265, w: 1780, ch: 250, cols: 2, max: 32, items: [
      { en: 'Givers and takers: greed, and vanity.', zh: '给消息的和听消息的：贪婪，加上虚荣。', at: 0 },
      { en: 'Promoters: every taker passes it on, so tips are endless-chain advertising.', zh: '发起人：每个听消息的人都会再传出去，消息就成了无穷的连锁广告。', at: 1 },
      { en: 'Takers are like drunkards: hope, bandaged by an unwillingness to think.', zh: '听消息的人像酒鬼：被希望蒙住双眼，不愿思考。', at: 2 },
      { en: 'Even floor traders want "Sell 5,000 Steel," not reasons.', zh: '连场内交易员也只要"卖五千股钢铁"，不要理由。', at: 3 },
    ] },
  ], lines: [
    L('larry', 'Tips! How people want tips! They crave not only to get them but to give them. There is greed involved, and vanity.', '消息！人们多么渴望消息！他们不仅想得到，还想给出去。这里面有贪婪，也有虚荣。'),
    L('host', 'Promoters know it. Every tip-taker passes the tip on, so tips work as free, endless-chain advertising.', '发起人深谙此道。每个听消息的人都会再传出去，于是消息成了免费的、无穷无尽的连锁广告。'),
    L('larry', 'Tip-takers are like drunkards. It is not so much greed as hope, bandaged by an unwillingness to do any thinking.', '听消息的人就像酒鬼。与其说是贪婪，不如说是希望——被不愿思考蒙住了双眼。'),
    L('larry', 'Tell a floor trader, sell five thousand Steel, and he\'ll do it. Explain your reasons, and he\'ll glare at you for wasting his time.', '你对场内交易员说"卖五千股钢铁"，他马上照办。你给他讲理由，他会瞪着你，嫌你浪费他的时间。'),
  ] });
  shot({ id: 'p08_borneo', kind: 'info', tag: { en: 'CASE STUDY · BORNEO TIN', zh: '案例 · 婆罗洲锡业' }, title: { en: 'Riding a Pool, and Leaving Before It Does', zh: '搭上资金池的车，并抢先下车' }, els: [
    { type: 'line', x: 70, y: 255, w: 1780, h: 565, xr: [0, 10], yr: [80, 160], yTicks: [120, 130, 150], yLabel: ['Borneo Tin', '婆罗洲锡业'], illustrative: true,
      xTicks: [[0.7, 'Debut', '上市'], [4, 'He sells', '他卖出'], [6.8, 'Pool marks to 150', '资金池拉到150'], [9.2, 'Distribution', '派发']],
      series: [{ pts: [[0, 100], [0.7, 104], [1.6, 97], [2.2, 99], [4, 120], [4.6, 113], [6.8, 150], [7.6, 140], [8.4, 130], [9.2, 125], [9.8, 120]], color: GREEN, reveal: [0, 0, 2, 2, 3, 3, 4, 4, 5, 5, 5] }],
      notes: [
        { x: 0.7, y: 104, at: 1, en: 'Buys 10,000 in the first hour', zh: '第一小时买入一万股', dx: -20, dy: -190, w: 300 },
        { x: 1.6, y: 97, at: 2, en: 'Pool tries to shake him out. He sits tight.', zh: '资金池想把他震出去。他坐着不动。', dx: 90, dy: 0, w: 470 },
        { x: 4, y: 120, at: 3, en: 'Sells his 10,000 at 120', zh: '在120卖出一万股', dx: -110, dy: -120, w: 260 },
        { x: 8.4, y: 130, at: 5, en: '"Cheap at 130, a bargain at 120"', zh: '"130算便宜，120是大便宜"', dx: -130, dy: 90, w: 330 },
      ] },
  ], lines: [
    L('larry', 'Borneo Tin came out at the height of the war boom. The pool marked up the opening price three times before the first recorded sale.', '婆罗洲锡业在战争景气的高峰上市。资金池在第一笔成交公布前，三次调高了开盘价。'),
    L('larry', 'I had declined to join the pool. Knowing its resources and the public\'s appetite, I bought ten thousand shares in the first hour.', '我拒绝了加入资金池。了解它的实力和公众的胃口，我在上市第一个小时就买了一万股。'),
    L('host', 'The pool tried to shake him out, so his profit wouldn\'t eat into theirs. He simply sat tight, and they went back to marking it up.', '资金池想把他震出去，免得他的利润吃掉他们的。他就是不动，他们只好继续拉抬。'),
    L('larry', 'When Borneo Tin got up to 120, I let them have my ten thousand shares. It checked the rise.', '婆罗洲锡业涨到120时，我把一万股全卖给了他们。涨势因此受阻。'),
    L('host', 'Later the pool marked it to 150. But the bloom was off the boom, so they had to sell on the way down.', '后来资金池把它拉到150。但牛市的风光已过，他们只好在下跌途中出货。'),
    L('host', 'Their buyers believed that a stock once at 150 must be cheap at 130, and a great bargain at 120.', '接盘的人以为，一只到过150的股票，130就算便宜，120更是大便宜。'),
  ] });
  {
    const [a, b, c] = BIGL;
    shot({ id: 'p08_palm', kind: 'comic', panels: [
      P(a, { bg: 'night', chars: [
        ch('banker', a, 0.3, 0.9, { hat: 'none', expr: 'grin', pose: 'chin', hy: 0.55 }),
        ch('wife', a, 0.72, 0.9, { expr: 'smile', hy: 0.55, flip: true, exprAt: { 1: 'shock' } }),
      ] }),
      P(b, { at: 2, bg: 'office', bgo: { board: [['BORNEO'], ['108']], hl: [1, 0] }, chars: [ch('wife', b, 0.3, 0.6, { expr: 'smile', pose: 'money', hy: 0.55 }), ch('clerk', b, 0.72, 0.6, { expr: 'smile', hat: 'none', flip: true, hy: 0.55 })] }),
      P(c, { at: 3, bg: 'office', bgo: { board: [['BORNEO'], ['SELL']], hl: [1, 0] }, chars: [ch('larryHat', c, 0.5, 0.55, { hat: 'boater', hatColor: '#e0c27a', expr: 'determined', hy: 0.78 })] }),
    ],
    caps: [{ x: 70, y: 70, w: 460, en: 'Palm Beach. A $500 bill.', zh: '棕榈滩。一张五百美元钞票。' }],
    bubbles: [{ at: 1, x: 120, y: 200, w: 520, en: 'Buy Borneo Tin. You are the only one I have told. Absolutely the only one!', zh: '买婆罗洲锡业吧。我只告诉了您一个人，绝对只有您！', tx: 330, ty: 400 }],
    lines: [
      L('larry', 'At Palm Beach I gave my wife a five-hundred-dollar bill from a little profit. That night Borneo\'s president, Mr. Wisenstein, arranged to sit beside her at dinner.', '在棕榈滩，我从一笔小利润里拿出一张五百美元的钞票给了妻子。当晚，婆罗洲锡业的总裁威森斯坦先生特意在晚宴上坐到她身边。'),
      L('banker', 'Buy Borneo Tin and you will make a great deal of money. You are the only person I have told.', '买婆罗洲锡业，您会赚很多钱。我只告诉了您一个人。', { who: WISENSTEIN }),
      L('larry', 'Next morning she had Haley, the branch manager, buy a hundred shares with her five hundred, in a special account so I wouldn\'t know. About 108.', '第二天早上，她让分行经理黑利用那五百美元买了一百股，开了个特别账户，好不让我知道。价格大约108。'),
      L('larry', 'That same day, bearish on the whole market, I began selling Borneo, about ten thousand shares, precisely because of its unusual activity.', '就在同一天，我因看空整个市场，开始卖空婆罗洲锡业，约一万股——正是因为它异常活跃。'),
    ] });
  }
  shot({ id: 'p08_borneo2', kind: 'info', tag: { en: 'THE TIP THAT BACKFIRED', zh: '弄巧成拙的消息' }, title: { en: 'Three Days in Borneo Tin', zh: '婆罗洲锡业的三天' }, els: [
    { type: 'line', x: 70, y: 255, w: 720, h: 565, xr: [0, 3], yr: [96, 114], yTicks: [100, 102, 108, 111], yLabel: ['Borneo Tin', '婆罗洲锡业'],
      xTicks: [[0.3, 'Day 1 open', '第1天开盘'], [1, 'Day 1 close', '第1天收盘'], [2, 'Day 2', '第2天'], [2.8, 'Day 3', '第3天']],
      series: [{ pts: [[0.3, 108], [1, 111], [2, 102], [2.8, 100]], color: RED, reveal: [0, 0, 1, 2] }],
      notes: [{ x: 0.3, y: 108, en: 'She buys 100', zh: '她买100股', dx: -20, dy: 40, w: 190 }, { x: 2.8, y: 100, at: 2, en: 'Par', zh: '面值', dx: -150, dy: -90, w: 110 }] },
    { type: 'table', x: 830, y: 255, w: 1020, widths: [0.16, 0.4, 0.44], size: 23, cols: [['Day', '天'], ['Mrs. Livingston', '利文斯顿夫人'], ['Livingston', '利文斯顿']], rows: [
      [['1', '1'], ['Buys 100 at ≈108; closes +3, delighted', '约108买入100股；收涨3点，很开心'], ['Sells ≈10,000 (else +5 or 6, he thinks)', '卖空约一万股（他认为否则会涨5–6点）']],
      [['2', '2'], ['Says nothing', '一言不发'], ['Sells 2,000 at the open, 2,000 at the close → 102', '开盘卖2,000，收盘前卖2,000→102']],
      [['3', '3'], ['Margin call; tells him all; gets her $500 back', '追加保证金；向他坦白；拿回500美元'], ['Stock at par; keeps selling, later covers at a handsome profit', '股价跌到面值；继续卖，后来回补获利可观']],
    ], reveal: true, rowAt: [0, 1, 2] },
    { type: 'box', at: 3, x: 830, y: 655, w: 1020, color: GOLD, en: 'The staged activity meant to lure him in was exactly why he picked Borneo to sell.', zh: '用来引他上钩的异常活跃，恰恰是他挑中婆罗洲来卖空的原因。', size: 26 },
  ], lines: [
    L('host', 'Borneo closed three points up that day. Without his selling, he thinks it would have risen five or six.', '那天婆罗洲收涨三点。他认为如果没有他的卖盘，会涨五六点。'),
    L('host', 'Next day he sold two thousand at the opening and two thousand before the close. It broke to 102.', '第二天，他开盘卖两千股，收盘前又卖两千股。股价跌到102。'),
    L('larry', 'On the third day Haley asked her for more margin. She came and told me everything. I gave her back her five hundred. Borneo was at par.', '第三天，黑利要她追加保证金。她来向我坦白了一切。我把五百美元还给了她。婆罗洲已跌到面值。'),
    L('larry', 'Wisenstein expected me to buy ten or twenty thousand. But the activity was what made me sell. I kept selling, then covered at a handsome profit.', '威森斯坦以为我会买进一两万股。可正是那股异常活跃让我卖空。我继续卖，后来回补，赚得可观。'),
  ] });
  {
    const [a, b] = HALF;
    shot({ id: 'p08_family', kind: 'comic', panels: [
      P(a, { bg: 'street', chars: [ch('broker', a, 0.3, 0.9, { expr: 'angry', pose: 'point', hy: 0.55 }), ch('agent', a, 0.75, 0.9, { expr: 'neutral', hy: 0.55, flip: true, hat: 'fedora' })] }),
      P(b, { at: 1, bg: 'study', chars: [ch('banker', b, 0.5, 1.0, { expr: 'smile', hy: 0.55, hat: 'none' })] }),
    ], caps: [{ x: 70, y: 70, w: 470, en: 'G.O.H.: 1,000 shares, −$3,500.', zh: 'G.O.H.：1,000股，亏3,500美元。' }, { at: 1, x: 1005, y: 70, w: 470, en: 'The source: father-in-law Westlake.', zh: '消息源：岳父韦斯特莱克。' }],
    bubbles: [{ at: 2, x: 1300, y: 560, w: 500, kind: 'shout', en: 'Why didn\'t you tell me you meant HIM!', zh: '你怎么不早说是他！', tx: 1250, ty: 470 }],
    lines: [
      L('larry', 'A Stock Exchange member I know heard from a newspaper man that G.O.H. was going up. He bought a thousand shares and lost thirty-five hundred dollars.', '我认识的一位交易所会员听一个记者说G.O.H.要涨。他买了一千股，亏了三千五百美元。'),
      L('host', 'The good source was a director on the finance committee: the broker\'s own father-in-law, Mr. Westlake.', '那个"可靠来源"是财务委员会的一位董事——正是这位经纪人自己的岳父韦斯特莱克先生。'),
      L('larry', 'He didn\'t believe in family tips. The farther away the source, the purer the tip.', '他不信自家人的消息。消息来源越远，消息就越"纯正"。'),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p08_gates', kind: 'comic', panels: [
      P(a, { bg: 'street', chars: [ch('banker', a, 0.3, 0.9, { expr: 'frown', pose: 'point', hy: 0.55 }), ch('trader', a, 0.75, 0.9, { expr: 'smile', hat: 'fedora', hatColor: '#6a5a4a', flip: true, hy: 0.55 })] }),
      P(b, { at: 1, bg: 'office', bgo: { board: [['READING'], ['≈ +100 PTS']], hl: [1, 0] }, chars: [ch('trader', b, 0.5, 0.9, { expr: 'grin', pose: 'money', hat: 'fedora', hatColor: '#6a5a4a', hy: 0.78 })] }),
    ],
    bubbles: [{ at: 0, x: 80, y: 70, w: 480, en: 'Sell Reading! Twenty-five points sure.', zh: '卖出雷丁！稳跌二十五点。', tx: 300, ty: 290 }],
    sfx: [{ at: 1, x: 1420, y: 720, t: '+$60,000', zh: '赚6万美元', size: 80, color: GOLD, font: 'cond' }], lines: [
      L('larry', 'Old Westlake, a Reading insider, once told John W. Gates to sell Reading: twenty-five points, absolutely certain.', '老韦斯特莱克是雷丁的内部人。他曾告诉约翰·W·盖茨卖出雷丁：稳跌二十五点，绝对确定。'),
      L('larry', 'Reading rose about a hundred points in a few weeks. Then Gates thanked him. He had bought instead, and made sixty thousand dollars.', '几周内雷丁涨了约一百点。盖茨跑来道谢——他反手买入，赚了六万美元。'),
      L('friend', 'I\'ve always made money coppering your tips, Westlake. Always!', '我反着做你的消息，一向赚钱，韦斯特莱克。一向如此！', { who: GATES }),
    ] });
  }
  {
    const [a, b] = HALF;
    shot({ id: 'p08_war', kind: 'comic', panels: [
      P(a, { bg: 'dark', props: [{ t: 'svg', svg: derby(452, 380) }] }),
      P(b, { at: 1, bg: 'floor', chars: [ch('broker', b, 0.5, 1.0, { expr: 'shout', pose: 'up', hy: 0.6 })] }),
    ], caps: [{ x: 70, y: 70, w: 560, en: 'Just before the war with Spain. The wrong derby.', zh: '美西战争前夕。一顶拿错的圆顶礼帽。' }, { at: 2, x: 70, y: 680, w: 560, en: 'Cartoonist W. A. Rogers: W. A. R.', zh: '漫画家W·A·罗杰斯：W·A·R。' }],
    sfx: [{ at: 1, x: 1420, y: 220, t: 'SELL!', zh: '卖！', size: 100 }], lines: [
      L('larry', 'The cartoonist W. A. Rogers of the Herald told me this. Just before the war with Spain, a broker friend ended up with Rogers\' derby after an evening at his house.', '《先驱报》的漫画家W·A·罗杰斯给我讲过这件事。美西战争前夕，一位经纪人朋友在家中聚会后，错拿走了罗杰斯的圆顶礼帽。'),
      L('larry', 'Next day the broker couldn\'t decide: war or peace? He took off his hat, saw WAR in gold letters inside, sold stocks, and made a killing.', '第二天，那位经纪人拿不定主意：打仗还是和平？他摘下帽子，看到里面烫金的"WAR"，于是卖出股票，大赚一笔。'),
      L('host', 'It was Rogers\' hat, and W. A. R. are his initials. As he put it, he never got that hat back.', '那是罗杰斯的帽子，而W.A.R.正是他名字的缩写。用他的话说，那顶帽子他再也没拿回来。'),
    ] });
  }
  shot({ id: 'p08_as', kind: 'info', tag: { en: 'THE PRIZE TIP STORY', zh: '最妙的消息故事' }, title: { en: 'Atlantic & Southern: Two Tips from a Grateful Director', zh: '大西洋与南方铁路：一位知恩董事的两次消息' }, els: [
    { type: 'table', x: 70, y: 265, w: 1780, widths: [0.18, 0.4, 0.42], size: 27, cols: [['Tip', '消息'], ['What Walker and Hood did', '沃克和胡德的做法'], ['What happened', '结果']], rows: [
      [['#1: "Buy. Up 25 points at least."', '一号："买。至少涨25点。"'], ['Each bought a couple of thousand shares; read the weakness as insider accumulation', '各买约两千股；把弱势当成内部人吸筹'], ['Directors passed the dividend: −6 points in the first 6 minutes', '董事会取消分红：开盘6分钟跌6点']],
      [['#2: "Now it\'s a cinch."', '二号："现在稳赚。"'], ['15 points lower, bought 5,000 shares on joint account', '再低15点，合伙买入5,000股'], ['Broke on obvious inside selling; Hood sold out at a heavy loss', '在明显的内部抛售中暴跌；胡德割肉清仓']],
    ], reveal: true, rowAt: [0, 2] },
    { type: 'box', at: 3, x: 70, y: 640, w: 1780, color: GOLD, anchor: 'middle', en: 'Insiders change plans and forget who they tipped. A tip is someone else\'s plan, not yours.', zh: '内部人会改变计划，也会忘了给谁透过消息。消息是别人的计划，不是你的。', size: 30 },
  ], lines: [
    L('larry', 'My prize tip story: a grateful director of the Atlantic and Southern told floor trader Bert Walker to buy. It would rise at least twenty-five points.', '我收藏的最妙的消息故事：大西洋与南方铁路一位心怀感激的董事，叫场内交易员伯特·沃克买入，说至少涨二十五点。'),
    L('host', 'Walker and his friend J. T. Hood each bought a couple of thousand. Then the directors passed the dividend. Six points down in six minutes.', '沃克和朋友J·T·胡德各买了约两千股。随后董事会取消了分红。六分钟跌了六点。'),
    L('host', 'The penitent director gave a second tip: now it\'s a cinch. Fifteen points lower, they bought five thousand jointly. It broke again on inside selling.', '懊悔的董事又给了第二个消息：现在稳赚。在低了十五点的位置，他们合伙买了五千股。股价又在内部抛售中暴跌。'),
    L('larry', 'Walker wrote the director a furious telegram. Hood stopped him, in all seriousness.', '沃克写了一封怒气冲天的电报要发给那位董事。胡德却一本正经地拦住了他。'),
    L('friend', 'Don\'t send it, Bert. We\'ll never get another tip from him!', '别发，伯特。发了，我们就再也拿不到他的消息了！', { who: HOOD }),
  ] });
  shot({ id: 'p08_dutchman', kind: 'info', tag: { en: 'WATCH WHAT THEY DO', zh: '看他们怎么做' }, title: { en: 'Rothschild\'s Recipe and the Pennsylvania Dutchman', zh: '罗斯柴尔德的秘诀与宾州荷兰人' }, els: [
    { type: 'box', x: 160, y: 260, w: 1600, color: PALE, anchor: 'middle', size: 36, en: '“I never buy at the bottom and I always sell too soon.” (Baron Rothschild)', zh: '「我从不在最低点买入，而且总是卖得太早。」（罗斯柴尔德男爵）' },
    { type: 'table', x: 70, y: 420, w: 1780, widths: [0.2, 0.42, 0.38], size: 27, cols: [['Railroad', '铁路'], ['What the president did', '总裁的做法'], ['Outcome', '结果']], rows: [
      [['Atchison (Reinhart)', '艾奇逊（莱因哈特）'], ['Denied extravagance, figuring on costly engraved notepaper, then tossing each sheet away', '否认铺张，却在昂贵的烫金信纸上演算，写几笔就扔掉'], ['Dutchman sold it all. Receivership a few months later.', '荷兰人全部卖出。几个月后公司破产被接管。']],
      [['D. L. & W. (Sam Sloan)', '特拉华-拉克万纳-西部（萨姆·斯隆）'], ['Door always open; slit used envelopes into scratch paper', '办公室门永远敞开；把旧信封拆开当草稿纸'], ['Dutchman bought all he could. Yearly dividends = his original stake.', '荷兰人能买多少买多少。年股息等于当初本金。']],
    ], reveal: true, rowAt: [2, 3] },
  ], lines: [
    L('larry', 'Tip-takers are not fools; they love hope cocktails. Old Baron Rothschild had a better recipe: I never buy at the bottom, and I always sell too soon.', '听消息的人不是傻瓜，他们只是爱喝"希望鸡尾酒"。老罗斯柴尔德男爵的秘诀更高明：我从不在最低点买入，而且总是卖得太早。'),
    L('larry', 'The wisest investor I knew was a Pennsylvania Dutchman who did his own seeing. Hearing that Atchison was run extravagantly, he went to question its president.', '我认识的最精明的投资者，是一位凡事亲眼查证的宾州荷兰人。听说艾奇逊铁路经营铺张，他亲自去质问总裁。'),
    L('host', 'President Reinhart denied it all, scribbling proof on costly engraved notepaper and tossing sheet after sheet away. The Dutchman sold all his Atchison.', '莱因哈特总裁全盘否认，一边在昂贵的烫金信纸上写数字证明，一边一张接一张地扔掉。荷兰人卖光了艾奇逊股票。'),
    L('host', 'At the Lackawanna, old Sam Sloan sat behind an open door, ripping used envelopes into scratch paper. The Dutchman bought all the stock he could.', '在拉克万纳铁路，老萨姆·斯隆坐在敞开的门后，把用过的信封拆开当草稿纸。荷兰人能买多少就买了多少。'),
    L('host', 'Atchison went into receivership a few months later. His D. L. and W. dividends grew to equal his original investment every year.', '几个月后，艾奇逊破产被接管。而他持有的拉克万纳股票，每年的股息就等于当初的全部投资。'),
  ] });
  shot({ id: 'p08_takeaways', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'Episode 8 in Six Points', zh: '第八集六个要点' }, els: [
    { type: 'cards', x: 70, y: 265, w: 1780, ch: 160, cols: 2, max: 30, items: [
      { en: 'Add the unexpectable to your hazards. No profit is safe until banked.', zh: '把不可预料之事列入风险。利润落袋前都不安全。' },
      { en: 'Right on the facts can still be wrong on time. Allow for time.', zh: '事实对了，时机仍可能错。给时间留余地。' },
      { en: 'A stock that breaks and doesn\'t rally has a reason. Get out.', zh: '暴跌后不反弹的股票必有原因。离场。', at: 1 },
      { en: 'Tips serve the giver: pools unload, insiders change plans.', zh: '消息为给消息的人服务：资金池出货，内部人变卦。', at: 1 },
      { en: 'Unusual activity in a weak market can be a reason to sell, not buy.', zh: '弱市中的异常活跃，可能是卖出而非买入的理由。', at: 2 },
      { en: 'Judge management by what it does, not what it says.', zh: '看管理层怎么做，而不是怎么说。', at: 2 },
    ] },
  ], lines: [
    L('host', 'Expect the unexpectable, and count no profit until it is in the bank. Being right on facts is not being right on time.', '要预料到不可预料之事，利润落袋前都不算数。事实看对，不等于时机看对。'),
    L('host', 'A break without a rally has a reason. And a tip is usually someone else\'s plan for your money.', '暴跌而不反弹，必有原因。而消息，通常是别人对你的钱的盘算。'),
    L('host', 'Do your own seeing, like the Pennsylvania Dutchman: watch what people do, not what they tell you.', '像宾州荷兰人那样亲眼查证：看人们做什么，而不是听他们说什么。'),
  ] });
  shot({ id: 'p08_mistakes', kind: 'info', tag: { en: 'MISTAKE REVIEW', zh: '错误复盘' }, title: { en: 'What Went Wrong, and the Rule It Teaches', zh: '错在哪里，教会了什么' }, els: [
    { type: 'table', x: 70, y: 255, w: 1780, widths: [0.38, 0.29, 0.33], size: 24, cols: [['Mistake', '错误'], ['Why', '原因'], ['Rule', '规则']], rows: [
      [['First coffee line: 9 dead months, big loss', '第一批咖啡：九个月不动，巨亏'], ['Right on facts, wrong on time', '事实对，时机错'], ['Allow for time; take the loss and reassess', '给时间留余地；认赔后重新评估']],
      [['Counted the coffee millions as certain', '把咖啡的几百万当成稳拿'], ['Rules can change mid-trade', '规则可能中途改变'], ['No profit is safe until banked', '利润落袋前都不安全']],
      [['Mrs. Livingston bought Borneo on a "confidential" tip', '利文斯顿夫人凭"私密"消息买婆罗洲'], ['Flattery plus easy money', '恭维加上意外之财'], ['Ask why an insider is telling you', '先问内部人为何告诉你']],
      [['The broker bought 1,000 G.O.H. on hearsay', '那位经纪人凭传闻买入1,000股G.O.H.'], ['A tip replaced thinking', '消息代替了思考'], ['Do your own analysis', '自己做分析']],
      [['Walker & Hood re-bought on the director\'s second tip', '沃克和胡德再次听同一位董事的消息买入'], ['Hope; trusted insiders\' plans', '心存希望；轻信内部人的计划'], ['Insiders change plans: follow the tape', '内部人会变卦：跟着盘面走']],
      [['Blaming a "raid" and holding on', '归咎于"袭击"而继续持有'], ['An inverted tip', '一种反向消息'], ['A break with no rally has a reason: get out', '暴跌不反弹必有原因：离场']],
    ], reveal: true, rowAt: [0, 0, 1, 1, 2, 2] },
  ], lines: [
    L('host', 'Coffee taught two things: being right on facts isn\'t being right on time, and no profit is safe until it\'s banked.', '咖啡一役教会两件事：事实看对不等于时机看对；利润落袋前都不安全。'),
    L('host', 'The tip-takers all made one mistake: they let someone else\'s plan replace their own thinking.', '听消息的人都犯了同一个错：让别人的盘算取代了自己的思考。'),
    L('host', 'And when a stock breaks and won\'t rally, don\'t blame a raid. There is a reason. Get out.', '当股票暴跌不反弹时，别怪"袭击"。必有原因。离场。'),
  ] });
};
