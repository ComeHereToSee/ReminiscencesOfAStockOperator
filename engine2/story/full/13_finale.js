// Full version, finale: Livermore's Rules (the whole book reviewed)
// The capital curve (numbers as verified for short/01_open.js s_fortune, plus the book's end-1915 balance),
// a mistake → rule table with one big mistake per episode, the rules grouped, and the closing scene.
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, chapter, music, episode, title, photo, PD } = h;
  const STUDY = { night: true, ticker: true, tickerX: 300 };
  const old = (acts, o = {}) => Object.assign({ id: 'larryOld', key: 'nar', x: 1080, y: 870, s: 1.25, pose: 'relaxed', expr: 'neutral', lookX: -0.3, acts }, o);

  episode(13, 'Reminiscences_E13_Livermores_Rules');
  chapter('Finale · The Whole Book Reviewed', '终章 · 全书回顾');
  music('calm');
  title({ id: 'e13_title', kicker: 'FINALE · 终章', en: 'Livermore\'s Rules', zh: '利弗莫尔的规则', color: '#2f6b3d',
    sub: ['The whole book reviewed · c. 1891–1922', '全书回顾 · 约1891–1922年'],
    lines: [N('The finale. Livermore\'s rules: the whole book in one chart, one table of mistakes, and one set of rules.', '终章：利弗莫尔的规则。全书浓缩为一张图、一张错误表和一套规则。')] });

  shot({ id: 'e13_open', set: 'study', setOpts: STUDY, trans: 'dip',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 1060, y: 470, z: 1.2, dur: 3 }, { t: 'end', x: 1080, y: 450, z: 1.28 }],
    cast: [old([{ t: 'L0', pose: 'relaxed', expr: 'smile' }, { t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'explain', expr: 'neutral' }])],
    items: [{ type: 'caption', at: 0.5, en: 'Twelve episodes · twenty-four chapters · one story.', zh: '十二集 · 二十四章 · 一个故事。' }],
    lines: [
      N('Twelve episodes, twenty-four chapters. Let me put the whole story in one place.', '十二集，二十四章。让我把整个故事放在一起看。'),
      N('Every fortune I made and lost, every big mistake, and the rule each one taught me.', '我赚到又输掉的每一笔钱，每一个大错误，以及每个错误教给我的规则。'),
      N('Mistakes should teach no more than successes. But they hurt, so you remember them.', '错误本不该比成功教会你更多。但错误会痛，所以你记得住。'),
    ] });

  lesson(h, { id: 'e13_fortune', tag: ['THE CAPITAL CURVE', '资本曲线'], title: ['Every Fortune Stated in the Book', '书中写明的每一笔身家'],
    gest: ['explain', 'despair', 'up', 'explainR'], expr: [null, 'sad', 'smile', null],
    items: [{ type: 'fortune', at: 0.5, x: 470, y: 230, w: 1400, h: 600, lsize: 22, vsize: 26, items: [
      { v: 3.12, vl: '$3.12', en: 'Age 14', zh: '14岁', at: 'L0' }, { v: 10000, vl: '$10,000', en: 'Age 20', zh: '20岁', at: 'L0@twenty' },
      { v: 0, vl: 'broke', en: 'NY, age 21', zh: '21岁纽约', at: 'L1' }, { v: 50000, vl: '≈$50,000', en: '1901', zh: '1901', at: 'L1@fifty' },
      { v: 0, vl: 'wiped out', en: 'May 9, 1901', zh: '1901.5.9', at: 'L1@wiped' }, { v: 250000, vl: '+$250,000', en: '1906', zh: '1906', at: 'L2' },
      { v: 1000000, vl: '>$1M', en: 'Oct 1907', zh: '1907.10', at: 'L2@millionaire' }, { v: -1000000, vl: 'debt >$1M', en: '1914', zh: '1914', at: 'L3' },
      { v: 140000, vl: '≈$140,000', en: 'End 1915', zh: '1915年底', at: 'L3@hundred' }, { v: 3000000, vl: '≈$3M', en: '1916', zh: '1916', at: 'L3@three' }] }],
    lines: [
      N('At fourteen I made three dollars and twelve cents. By twenty I had ten thousand.', '十四岁时，我赚到3.12美元。二十岁时，我有了一万美元。'),
      N('In New York I went broke, climbed back to about fifty thousand in 1901, and was wiped out on May ninth.', '在纽约，我输光了，1901年又爬回到约五万美元，然后在5月9日被清零。'),
      N('The earthquake made me a quarter of a million. The panic of October 1907 made me a millionaire.', '地震让我赚了二十五万。1907年10月的恐慌让我成了百万富翁。'),
      N('By 1914 I owed over a million and went bankrupt. I ended 1915 with about a hundred and forty thousand, and made about three million in 1916.', '到1914年，我负债超过一百万，宣告破产。1915年底，我有了约十四万美元；1916年，我赚了约三百万。'),
      N('Before every fall, I had broken a rule. Before every comeback, I had kept one.', '每一次跌倒之前，我都打破了一条规则；每一次东山再起之前，我都守住了一条。'),
    ] });

  shot({ id: 'e13_why', set: 'study', setOpts: STUDY, trans: 'page',
    cam: [{ t: 0, x: 1080, y: 470, z: 1.25 }, { t: 'L1', x: 1000, y: 500, z: 1.08, dur: 2.5 }],
    cast: [old([{ t: 'L0', pose: 'chin', expr: 'think' }, { t: 'L0@collapse', pose: 'explain', expr: 'frown' }, { t: 'L1', pose: 'explainR', expr: 'neutral' }])],
    items: [{ type: 'note', at: 'L0@collapse', x: 100, y: 120, w: 640, h: 150, size: 32, fill: '#f3c6c0', anim: 'slideU', en: 'Every collapse = a rule broken.', zh: '每一次崩溃＝打破了一条规则。' }],
    lines: [
      N('Look at the pattern. Every collapse came from breaking a rule I already knew, or had not yet learned.', '看看其中的规律。每一次崩溃，都是因为打破了一条我已经懂得、或者还没学会的规则。'),
      N('So here is every big mistake, one from each episode, with its cause and the rule it taught.', '下面是每一集里最大的那个错误，连同它的原因和它教会我的规则。'),
      N('Notice how often the cause was not the market at all, but me.', '请留意：原因往往根本不在市场，而在我自己。'),
    ] });

  const TBL = (rows, rowAt) => ({ type: 'table', at: 'L0', x: 470, y: 225, w: 1400, widths: [0.38, 0.30, 0.32], size: 28, bottom: 840,
    cols: [['Mistake', '错误'], ['Cause', '原因'], ['Rule', '规则']], rows, rowAt });
  chapter('Finale · Mistakes Into Rules', '终章 · 从错误到规则');
  lesson(h, { id: 'e13_mist1', tag: ['MISTAKE → RULE · 1 / 3', '错误→规则 · 1/3'], tagColor: '#b3302a', title: ['Episodes 1–4: Learning the Game', '第1–4集：学会这门游戏'],
    gest: ['explain', 'despair', 'point', 'explainR'],
    items: [TBL([
      [['E1 · Bucket-shop habits at a real broker', '第1集 · 把对赌行习惯带进真经纪行'], ['Tape lagged; his orders moved the price', '纸带滞后；自己的单子推动价格'], ['Know which game you are in', '弄清你在玩哪种游戏']],
      [['E2 · May 9, 1901: right, yet wiped out', '第2集 · 1901年5月9日：看对却清零'], ['Sold at the market on a lagging tape', '在滞后的纸带上按市价卖出'], ['Anticipate the big move, not the next quote', '预判大行情，而非下一个报价']],
      [['E3 · Saratoga: shorted on a friend\'s fear', '第3集 · 萨拉托加：因朋友的担心而做空'], ['Doubted his own reading: −$40,000', '怀疑自己的判断：亏4万美元'], ['Trust your own judgment', '相信自己的判断']],
      [['E4 · 1906: right on direction, far too early', '第4集 · 1906年：方向对了，出手太早'], ['Plunged before the market confirmed', '市场确认之前就重仓'], ['Timing is half the job: wait for it', '时机是一半功课：等它到来']]],
      ['L0', 'L1', 'L2', 'L3'])],
    lines: [
      N('One: I carried bucket-shop habits to a real broker, where the tape lagged and my own orders moved the price. Know which game you are in.', '第一：我把对赌行的习惯带进了真正的经纪行，那里纸带滞后，我自己的单子还会推动价格。弄清你在玩哪种游戏。'),
      N('Two: on May ninth, 1901, I was right and still wiped out, selling at the market on a lagging tape.', '第二：1901年5月9日，我判断对了却被清零，因为我在滞后的纸带上按市价卖出。'),
      N('Three: at Saratoga I went short on a friend\'s fear and lost forty thousand. Trust your own judgment.', '第三：在萨拉托加，我因朋友的担心而做空，亏了四万美元。相信自己的判断。'),
      N('Four: in 1906 I was right about the market, but far too early. Timing is half the job.', '第四：1906年，我对市场的判断是对的，但出手太早了。时机是一半的功课。'),
    ] });
  lesson(h, { id: 'e13_mist2', tag: ['MISTAKE → RULE · 2 / 3', '错误→规则 · 2/3'], tagColor: '#b3302a', title: ['Episodes 5–8: The Costly Ones', '第5–8集：代价最高的错误'],
    gest: ['explain', 'despair', 'chin', 'explainR'],
    items: [TBL([
      [['E5 · Tried to push cotton: ≈ −$200,000', '第5集 · 想推动棉花：亏约20万美元'], ['Acted before the range broke', '区间突破之前就抢先行动'], ['Mark the limits; wait for the break', '标出边界，等待突破']],
      [['E6 · Sold winning wheat, kept losing cotton', '第6集 · 卖掉盈利的小麦，留下亏损的棉花'], ['Let Percy Thomas unsettle him; hope', '被珀西·托马斯动摇；心存希望'], ['Sell the loser, keep the winner', '卖掉亏损的，留住盈利的']],
      [['E7 · Let Williamson trade against his judgment', '第7集 · 任由威廉森违背自己的判断交易'], ['Gratitude, then debt and worry', '出于感激，随后负债与焦虑'], ['Never trade out of obligation', '绝不因人情而交易']],
      [['E8 · Coffee: right, but the profit never came', '第8集 · 咖啡：判断对了，利润却落空'], ['Price fixed; trading ordered closed', '价格被限，交易被勒令了结'], ['No profit is safe until it is banked', '利润进了银行才算数']]],
      ['L0', 'L1', 'L2', 'L3'])],
    lines: [
      N('Five: I tried to push cotton through its range and lost about two hundred thousand. Mark the limits, and wait for the break.', '第五：我想把棉花推出它的区间，结果亏了约二十万美元。标出边界，等待突破。'),
      N('Six: unsettled by Percy Thomas, I sold my winning wheat and kept my losing cotton. Sell the loser, keep the winner.', '第六：被珀西·托马斯动摇后，我卖掉了盈利的小麦，留下了亏损的棉花。卖掉亏损的，留住盈利的。'),
      N('Seven: out of gratitude, I let Dan Williamson trade against my judgment. Never trade out of obligation.', '第七：出于感激，我任由丹·威廉森违背我的判断去交易。绝不因人情而交易。'),
      N('Eight: in coffee I was right, but a price-fixing committee closed the market. No profit is safe until it is banked.', '第八：在咖啡上我判断对了，但一个限价委员会让市场关了门。利润进了银行才算数。'),
    ] });

  shot({ id: 'e13_still', set: 'study', setOpts: STUDY, trans: 'dip',
    cam: [{ t: 0, x: 1000, y: 500, z: 1.05 }, { t: 'L0', x: 1080, y: 460, z: 1.25, dur: 4 }],
    cast: [old([{ t: 'L0', pose: 'chin', expr: 'tired' }, { t: 'L0@Even', pose: 'relaxed', expr: 'smile' }])],
    lines: [N('It takes a man a long time to learn all the lessons of all his mistakes. Even in my best years, I kept adding to the list.', '一个人要花很长时间，才能学会他所有错误里的所有教训。即使在我最好的年头，这份清单也还在加长。')] });

  lesson(h, { id: 'e13_mist3', tag: ['MISTAKE → RULE · 3 / 3', '错误→规则 · 3/3'], tagColor: '#b3302a', title: ['Episodes 9–12: Insiders, Pools and the Public', '第9–12集：内部人、资金池与公众'], titleSize: 50,
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [TBL([
      [['E9 · Neglected a losing cotton short: ≈ −$1M', '第9集 · 放任亏损的棉花空单：亏约100万'], ['Kept waiting for a reaction to cover', '一直等回调再平仓'], ['When you are wrong, get out at once', '错了就立刻离场']],
      [['E10 · Harlem shorts sold "too high," got cornered', '第10集 · 哈莱姆空头嫌"太高"而卖空，遭逼空'], ['Thought of price, not value', '只看价格，不看价值'], ['Never sell just because it looks high', '别只因"看着太高"就卖空']],
      [['E11 · Prentiss propped up his stock in a turning market', '第11集 · 普伦蒂斯在转势时护盘'], ['Would not let it break par', '不肯让它跌破面值'], ['Only buyer? Stop. Sell on the way down', '只剩你在买？停手，下跌中卖出']],
      [['E12 · The public held on "bear raid" talk', '第12集 · 公众听信"空头打压"而死守'], ['Trusted anonymous insiders', '轻信匿名的内部人'], ['A long decline is never a raid: get out', '长期下跌绝非打压：离场']]],
      ['L0', 'L1', 'L2', 'L3'])],
    lines: [
      N('Nine: I neglected a losing cotton short while my stocks did well, and it cost me about a million. When you are wrong, get out at once.', '第九：股票做得顺手时，我放任一笔亏损的棉花空单不管，结果亏了约一百万。错了，就立刻离场。'),
      N('Ten: the Harlem shorts sold only because the price looked too high. They thought of price; the Commodore thought of value.', '第十：哈莱姆的空头只因价格看着太高就卖空。他们想的是价格，而范德比尔特准将想的是价值。'),
      N('Eleven: Prentiss propped up his stock as the market turned. If you are the only buyer, stop.', '第十一：普伦蒂斯在市场转向时护盘。如果只剩你自己在买，就停手。'),
      N('Twelve: the public held on because insiders cried bear raid. A long decline is never a raid.', '第十二：公众因为内部人喊"空头打压"而死守。长期下跌从来不是打压。'),
    ] });

  chapter('Finale · The Rules', '终章 · 规则');
  shot({ id: 'e13_torules', set: 'study', setOpts: STUDY, trans: 'dip',
    cam: [{ t: 0, x: 1080, y: 470, z: 1.25 }, { t: 'L0', x: 980, y: 510, z: 1.05, dur: 4 }],
    cast: [old([{ t: 'L0', pose: 'explain', expr: 'neutral' }, { t: 'L0@rules', pose: 'pointUp', expr: 'smile' }])],
    lines: [N('So much for the mistakes. Now the rules, grouped the way a trader uses them: first the tape and timing, then building a position.', '错误就说到这里。现在说规则，按交易者使用的顺序分组：先是纸带与时机，然后是建仓。')] });

  const COL = (x, at, en, zh) => ({ type: 'text', at, x, y: 222, size: 30, font: 'cond', align: 'left', fill: '#7a4a22', en, zh, zsize: 24, w: 690 });
  const RC = (n, at, en, zh, col, row, o = {}) => Object.assign({ type: 'rule', at, x: col ? 1180 : 470, y: 300 + row * 180, w: 690, h: 165, n: String(n), size: 30, en, zh }, o);
  lesson(h, { id: 'e13_rulesA', tag: ['THE RULES · 1 / 3', '规则 · 1/3'], title: ['The Tape, Timing, and Building a Position', '纸带、时机与建仓'], titleSize: 48,
    gest: ['explain', 'point', 'explainR', 'up'],
    items: [
      COL(470, 'L0', 'TAPE & TIMING', '纸带与时机'), COL(1180, 'L2', 'BUILDING A POSITION', '建仓'),
      RC(1, 'L0@Watch', 'Watch what prices do, not why', '看价格做了什么，别问为什么', 0, 0),
      RC(2, 'L0@Wait', 'Wait for the line of least resistance; act on the breakout', '等待最小阻力线，突破时行动', 0, 1),
      RC(3, 'L1', 'Don\'t trade every day. Wait for the odds', '不要天天交易，等待胜算', 0, 2),
      RC(4, 'L2@Probe', 'Probe small; add only when it shows a profit', '先小仓位试探，有盈利才加码', 1, 0),
      RC(5, 'L2@Never', 'Never average a losing trade', '绝不摊平亏损的交易', 1, 1, { tag: '#b3302a' }),
      RC(6, 'L3', 'Sit tight: the big money is in the big swing', '坐得住：大钱在大行情里', 1, 2, { tag: '#2f6b3d' })],
    lines: [
      N('The tape and timing. Watch what prices do, not why. Wait for the line of least resistance, and act when the price breaks out.', '纸带与时机。看价格做了什么，别问为什么。等待最小阻力线，在价格突破时行动。'),
      N('Don\'t trade every day. Only a fool thinks he must trade all the time; wait until the odds are with you.', '不要天天交易。只有傻瓜才觉得自己必须一直交易；等到胜算站在你这边。'),
      N('Building a position. Probe with a small lot, and add only when it shows a profit. Never average a losing trade.', '建仓。先用小仓位试探，有了盈利才加码。绝不摊平亏损的交易。'),
      N('And once you are right, sit tight. It never was my thinking that made the big money. It was my sitting.', '一旦做对，就坐得住。让我赚大钱的从来不是我的想法，而是我坐得住。'),
    ] });
  lesson(h, { id: 'e13_rulesB', tag: ['THE RULES · 2 / 3', '规则 · 2/3'], title: ['Risk and Exits, Conditions and Money', '风险与离场，形势与资金'], titleSize: 48,
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      COL(470, 'L0', 'RISK & EXITS', '风险与离场'), COL(1180, 'L2', 'CONDITIONS & MONEY', '形势与资金'),
      RC(7, 'L0@Decide', 'Decide in advance what proves you wrong', '事先确定什么情况证明你错了', 0, 0, { tag: '#b3302a' }),
      RC(8, 'L1', 'Sell what shows a loss; keep what shows a profit', '卖掉亏损的，留住盈利的', 0, 1),
      RC(9, 'L1@big', 'Sell a big line when the market can absorb it', '在市场接得住时卖出大仓位', 0, 2),
      RC(10, 'L2@Study', 'Study general conditions, above all money', '研究整体形势，尤其是资金', 1, 0),
      RC(11, 'L2@six', 'The market moves 6–9 months ahead of conditions', '市场领先实际形势6–9个月', 1, 1),
      RC(12, 'L3', 'Expect the unexpectable. Bank profits; guard capital', '预料意外。利润入账，守住本金', 1, 2, { tag: '#2f6b3d' })],
    lines: [
      N('Risk and exits. Decide in advance what will prove you wrong, and when it happens, get out at the market.', '风险与离场。事先确定什么情况证明你错了；一旦发生，按市价离场。'),
      N('Sell what shows a loss and keep what shows a profit. And sell a big line when the market can absorb it, not when you wish to.', '卖掉亏损的，留住盈利的。大仓位要在市场接得住的时候卖，而不是在你想卖的时候。'),
      N('Conditions and money. Study general conditions, above all the supply of money. The market moves six to nine months ahead of them.', '形势与资金。研究整体形势，尤其是资金的松紧。市场总比实际形势领先六到九个月。'),
      N('Expect the unexpectable. No profit is safe until it is banked, and some capital should be safe even from you.', '要预料到意料之外的事。利润进了银行才算数，还要有一部分本金，连你自己也动不了。'),
    ] });

  shot({ id: 'e13_enemy', set: 'study', setOpts: STUDY, trans: 'dip',
    cam: [{ t: 0, x: 1000, y: 500, z: 1.05 }, { t: 'L0', x: 1080, y: 460, z: 1.3, dur: 4 }],
    cast: [old([{ t: 'L0', pose: 'chin', expr: 'think' }, { t: 'L0@enemy', pose: 'explain', expr: 'determined' }])],
    lines: [N('The last group is the hardest, because the enemy is inside the trader: ignorance, greed, fear and hope. No statute and no exchange rule can remove them.', '最后一组最难，因为敌人就在交易者自己心里：无知、贪婪、恐惧和希望。任何法律、任何交易所规则都清除不了它们。')] });

  const R = (n, at, en, zh, row, o = {}) => Object.assign({ type: 'rule', at, x: 470, y: 222 + row * 125, w: 1400, h: 118, n: String(n), size: 32, en, zh }, o);
  lesson(h, { id: 'e13_rulesC', tag: ['THE RULES · 3 / 3', '规则 · 3/3'], title: ['Psychology and Independence', '心理与独立'],
    gest: ['explain', 'point', 'explainR', 'pointUp'],
    items: [
      R(13, 'L0', 'Trust your own judgment: no tips, no magnetic talker thinking for you', '相信自己的判断：不听消息，不让能言善辩者替你思考', 0),
      R(14, 'L1', 'Never trade out of gratitude, under worry, or to pay a bill', '不为报恩交易，不在焦虑中交易，不指望市场付账', 1),
      R(15, 'L2', 'Reverse your instincts: fear the loss, hope for the profit', '把本能反过来：对亏损恐惧，对利润抱希望', 2),
      R(16, 'L3', 'Distrust unnamed insiders, "bear raid" talk and gifts', '提防匿名内部人、"空头打压"之说和各种"礼物"', 3),
      R(17, 'L3@remember', 'No man can beat the stock market. Human nature never changes', '没有人能战胜股市。人性永远不变', 4, { tag: '#b3302a', fill: '#f6d77a' })],
    lines: [
      N('Trust your own judgment. Take no tips, and never let a brilliant talker do your thinking for you.', '相信自己的判断。不听小道消息，也绝不让能言善辩的人替你思考。'),
      N('Never trade out of gratitude or obligation, never while worry fills your mind, and never ask the market to pay a bill.', '绝不出于感激或人情去交易，绝不在满心焦虑时交易，也绝不指望市场替你付账。'),
      N('Reverse your instincts: fear that a loss will grow, and hope that a profit will.', '把本能反过来：害怕亏损会扩大，期待利润会增长。'),
      N('Distrust unnamed insiders and talk of bear raids. And remember: no man can beat the stock market.', '提防匿名的内部人和"空头打压"之说。还要记住：没有人能战胜股市。'),
    ] });

  photo({ id: 'e13_real', src: `${PD}/livermore_back_again_financialworld_1923_page.jpg`, credit: 'The Financial World, Nov. 3, 1923, p. 564 (public domain)', trans: 'dip',
    cap: ['Jesse Livermore (1877–1940), the real man behind Larry Livingston.', '杰西·利弗莫尔（1877–1940），拉瑞·利文斯顿背后的真实人物。'], capW: 640,
    kb: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 12, x: 960, y: 470, z: 1.12 }],
    lines: [N('The real Jesse Livermore. In November 1923, the year this book came out, a financial weekly ran his picture under the headline: Jesse Livermore Back Again.', '真实的杰西·利弗莫尔。1923年11月，也就是本书出版的那一年，一份金融周刊刊登了他的照片，标题是：《杰西·利弗莫尔卷土重来》。')] });

  shot({ id: 'e13_end', set: 'study', setOpts: STUDY, trans: 'dip', music: 'calm', hold: 3,
    cam: [{ t: 0, x: 1080, y: 460, z: 1.3 }, { t: 'end', x: 960, y: 520, z: 1.0, ease: 'sine' }],
    cast: [old([{ t: 'L1', pose: 'chin', expr: 'think' }, { t: 'L2', pose: 'relaxed', expr: 'smile' }], { expr: 'smile' })],
    items: [
      { type: 'text', screen: true, at: 'L2e', x: 960, y: 770, size: 24, font: 'cond', fill: '#f1ead6', zfill: '#f6d77a', w: 1700,
        en: 'A study of a 1923 book. Markets and laws have changed since. Not investment advice.', zh: '本片研读一本1923年的书。此后市场与法律都已改变。不构成投资建议。' },
      { type: 'text', screen: true, at: 'L2e', x: 960, y: 860, size: 26, font: 'cond', fill: '#f1ead6', zfill: '#f6d77a', w: 1700,
        en: 'Adapted from Edwin Lefèvre, Reminiscences of a Stock Operator (1923, public domain). Photos: Library of Congress, Detroit Publishing Co., Bain News Service. Music: Musopen (CC0), pre-1923 recordings.',
        zh: '改编自埃德温·勒菲弗《股票大作手回忆录》（1923，公有领域）。图片：美国国会图书馆等；音乐：Musopen（CC0）及1923年前录音。' }],
    lines: [
      N('Every lesson in this story cost me money. Some of them cost me everything I had.', '这个故事里的每一个教训都让我付出了金钱。有些让我输掉了全部家当。'),
      N('There is nothing new in Wall Street. Whatever happens in the market today has happened before, and will happen again.', '华尔街没有新鲜事。今天市场上发生的一切，以前都发生过，以后还会再发生。'),
      N('The faces change. Human nature does not. That is why these lessons still hold.', '面孔会变，人性不会变。这就是为什么这些教训至今依然有效。'),
    ] });
};
