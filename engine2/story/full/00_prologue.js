// Full version, episode 0: Prologue. Who is telling the story, who is who, the shape of the story, and how each episode works.
// Sources checked: dedication page of the 1923 edition; ch. I ("at forty"), ch. III ("flat broke several times"), ch. V (Partridge),
// ch. VI (Ed Harding), ch. IX (Morgan), ch. XI–XIV (Percy Thomas, Dan Williamson, debts, 1916), ch. XX (Keene, "greatest of them all").
const { lesson } = require('../lib');
module.exports = (h) => {
  const { shot, N, L, chapter, music, episode, title, photo, PD } = h;
  episode(0, 'Reminiscences_E00_Prologue');
  chapter('Prologue', '序章');
  music('calm');

  title({ id: 'e00_title', kicker: 'PROLOGUE · 序章', en: 'Reminiscences of a Stock Operator', zh: '股票大作手回忆录', size: 100, color: '#7a4a22',
    sub: ['Edwin Lefèvre, 1923 · A study film for traders', '埃德温·勒菲弗，1923年 · 写给交易者的学习影片'],
    lines: [N('Reminiscences of a Stock Operator. A study film for traders, in twelve episodes.', '《股票大作手回忆录》。一部写给交易者的学习影片，共十二集。')] });

  // ---- the old man at his desk ----
  shot({ id: 'e00_open', set: 'study', setOpts: { night: true, ticker: true, tickerX: 300 }, trans: 'dip',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', x: 1060, y: 470, z: 1.2, dur: 4 }, { t: 'L2', on: 'nar', z: 1.38, dur: 3 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 1080, y: 870, s: 1.25, pose: 'relaxed', expr: 'neutral', lookX: -0.4,
      acts: [{ t: 'L0@forty', pose: 'chin', expr: 'think' }, { t: 'L1', pose: 'explain', expr: 'neutral' }, { t: 'L1@flat', pose: 'shrug', expr: 'sad' },
        { t: 'L2', pose: 'explainR', expr: 'smile' }] }],
    items: [{ type: 'caption', at: 0.6, en: 'The narrator, Larry Livingston, looks back on his trading life.', zh: '叙述者拉瑞·利文斯顿回顾自己的交易生涯。' }],
    lines: [
      N('I was fourteen when I first watched prices on a quotation board. I am forty now, and I have never stopped watching.', '我第一次盯着报价板上的价格，是在十四岁。如今我四十岁了，从来没有停止观察。'),
      N('I have made fortunes in the market and lost them. Several times I was flat broke.', '我在市场上赚到过大钱，也输掉过。我好几次输得精光。'),
      N('But my losses were never total losses. Each one taught me a rule, and the rules are what this series is about.', '但我的亏损从来不是彻底的损失。每一次都教会我一条规则，这部片子讲的就是这些规则。'),
    ] });

  photo({ id: 'e00_book', src: `${PD}/livermore_portrait_1923_financialworld.jpg`, credit: 'Jesse Livermore · The Financial World, Nov. 3, 1923 (public domain)',
    cap: ['Jesse Livermore (1877–1940). The book is dedicated "To Jesse Lauriston Livermore".', '杰西·利弗莫尔（1877–1940）。本书扉页题献："致杰西·劳里斯顿·利弗莫尔"。'], capW: 700,
    kb: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 12, x: 960, y: 470, z: 1.12 }],
    items: [{ type: 'note', screen: true, at: 'L1', x: 1240, y: 620, w: 620, h: 180, size: 32, align: 'center', fill: '#efe3c4', anim: 'slideU',
      en: 'Reminiscences of a Stock Operator · George H. Doran Co., 1923', zh: '《股票大作手回忆录》· 乔治·H·多兰公司，1923年' }],
    lines: [
      N('The writer Edwin Lefèvre set my story down in 1923, in my own voice, and gave me the name Larry Livingston.', '1923年，作家埃德温·勒菲弗用我自己的口吻写下了我的故事，并给我取名拉瑞·利文斯顿。'),
      N('He dedicated the book to Jesse Lauriston Livermore. Readers have known ever since who Livingston really was.', '他把这本书题献给杰西·劳里斯顿·利弗莫尔。从那以后，读者都知道利文斯顿究竟是谁。'),
    ] });

  // ---- the whole life on one chart ----
  lesson(h, { id: 'e00_fortune', tag: ['THE SHAPE OF THE STORY', '故事的轮廓'], title: ['Fortunes Made and Lost, Again and Again', '赚到又输光，一次又一次'],
    gest: ['explain', 'point', 'explainR', 'despair', 'explain'], trans: 'wipe',
    items: [{ type: 'fortune', at: 0.5, x: 470, y: 220, w: 1420, h: 610, lsize: 22, vsize: 26, items: [
      { v: 3.12, vl: '$3.12', en: 'Age 14', zh: '14岁', at: 'L0@three' },
      { v: 10000, vl: '$10,000', en: 'Age 20', zh: '20岁', at: 'L0@ten' },
      { v: 0, vl: 'broke', en: 'NY, 6 months', zh: '纽约半年', at: 'L1' },
      { v: 50000, vl: '≈$50,000', en: '1901', zh: '1901年', at: 'L1@fifty' },
      { v: 0, vl: 'wiped out', en: 'May 9, 1901', zh: '1901.5.9', at: 'L1@wiped' },
      { v: 250000, vl: '+$250,000', en: '1906', zh: '1906年', at: 'L2@quarter' },
      { v: 1000000, vl: '>$1M', en: 'Oct 1907', zh: '1907.10', at: 'L2@millionaire' },
      { v: -1000000, vl: 'debt >$1M', en: '1914', zh: '1914年', at: 'L3' },
      { v: 3000000, vl: '≈$3M', en: '1916', zh: '1916年', at: 'L3@three' }] }],
    lines: [
      N('Here is my whole trading life on one chart. Three dollars and twelve cents at fourteen. Ten thousand dollars by twenty.', '这是我整个交易生涯的一张图。十四岁时赚到3.12美元，二十岁时有了一万美元。'),
      N('Broke within six months in New York. Back up to nearly fifty thousand, then wiped out in a single day in 1901.', '到纽约不到半年就输光了。后来又涨回到将近五万美元，然后在1901年的一天之内被清零。'),
      N('An earthquake short made me a quarter of a million in 1906. The panic of 1907 made me a millionaire.', '1906年，一笔地震空单让我赚了二十五万。1907年的大恐慌让我成了百万富翁。'),
      N('By 1914 I owed over a million dollars and went through bankruptcy. In 1916 alone I cleared about three million.', '到1914年，我负债超过一百万美元，宣告破产。而仅1916年一年，我就净赚了约三百万。'),
      N('The bars use a log scale, so even three dollars shows. Watch for what changed at each turn.', '柱子用的是对数刻度，所以连三美元也看得见。请留意每一次转折背后改变了什么。'),
    ] });

  // ---- the people he meets ----
  const NAME = (x, at, en, zh) => ({ type: 'note', at, x: x - 165, y: 140, w: 330, h: 120, size: 30, align: 'center', en, zh, anim: 'pop' });
  shot({ id: 'e00_cast', set: 'office', trans: 'iris', music: 'rag',
    setOpts: { board: [['SUGAR', 'B.R.T.', 'UNION PAC', 'N. PAC', 'COTTON'], ['105¼', '72⅛', '160½', '110', '12.40'], ['105⅛', '72', '160⅝', '110⅛', '12.38']], crowd: 0 },
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 540, z: 1.03 }],
    cast: [
      { id: 'fullerton', x: 250, y: 890, s: 1.05, pose: 'idle', expr: 'neutral', at: 'L0@Fullerton', acts: [{ t: 'L0@Fullerton+0.3', pose: 'hold', expr: 'smile' }, { t: 'L1', pose: 'relaxed' }] },
      { id: 'partridge', x: 610, y: 890, s: 1.05, pose: 'hold', expr: 'smile', at: 'L1', acts: [{ t: 'L2', pose: 'explain', expr: 'smile' }, { t: 'L3', pose: 'hold' }] },
      { id: 'harding', x: 970, y: 890, s: 1.05, pose: 'idle', expr: 'neutral', at: 'L3', acts: [{ t: 'L3+0.3', pose: 'explainR', expr: 'smile' }, { t: 'L4', pose: 'relaxed' }] },
      { id: 'percy', x: 1330, y: 890, s: 1.05, flip: true, pose: 'idle', expr: 'neutral', at: 'L4@Percy', acts: [{ t: 'L4@Percy+0.3', pose: 'explain', expr: 'smile' }] },
      { id: 'williamson', x: 1690, y: 890, s: 1.05, flip: true, pose: 'idle', expr: 'neutral', at: 'L4@Williamson', acts: [{ t: 'L4@Williamson+0.3', pose: 'hold', expr: 'sly' }, { t: 'L4@judgment', expr: 'smile' }] }],
    items: [
      NAME(250, 'L0@Fullerton', 'A. R. Fullerton', '富勒顿 · 纽约经纪商'),
      NAME(610, 'L1', 'Partridge, "Turkey"', '帕特里奇 · 绰号"火鸡"'),
      NAME(970, 'L3', 'Ed Harding', '埃德·哈丁 · 经纪人、朋友'),
      NAME(1330, 'L4@Percy', 'Percy Thomas', '珀西·托马斯 · 棉花投机商'),
      NAME(1690, 'L4@Williamson', 'Dan Williamson', '丹·威廉森 · 交易所会员行'),
      { type: 'bubble', at: 'L2', until: 'L3', x: 400, y: 300, w: 420, en: 'You know, it\'s a bull market!', zh: '你知道的，这是牛市！', tx: 610, ty: 628 }],
    lines: [
      N('Along the way you will meet the men who shaped my trading. A. R. Fullerton, the broker who staked me when I was broke.', '一路上，你会见到影响了我交易的那些人。富勒顿，在我破产时资助过我的经纪商。'),
      N('Old Partridge, whom the boys called Turkey. From him I learned to sit tight.', '老帕特里奇，大伙儿背地里叫他"火鸡"。我从他那里学会了坐得住。'),
      L('partridge', 'You know, it\'s a bull market!', '你知道的，这是牛市！', { speak: 'partridge' }),
      N('Ed Harding, of my first New York brokers: clever, well informed, and a real friend.', '埃德·哈丁，来自我在纽约的第一家经纪行：聪明、消息灵通，是真正的朋友。'),
      N('Percy Thomas, the famous cotton operator, and Dan Williamson, head of a big Stock Exchange house. Both led me to set aside my own judgment.', '著名棉花投机商珀西·托马斯，以及一家大型交易所会员行的掌门人丹·威廉森。两人都让我放下了自己的判断。'),
    ] });

  // ---- the giants, under their real names ----
  shot({ id: 'e00_giants', set: 'dark', trans: 'dip', music: 'tense', cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 540, z: 1.05 }],
    items: [
      { type: 'text', at: 0.2, x: 960, y: 40, size: 50, font: 'serif', fill: '#f1ead6', zfill: '#f6d77a', en: 'The giants of the age, under their real names', zh: '时代巨头（书中用的是真名）' },
      { type: 'photo', at: 'L0@Keene', x: 330, y: 220, w: 500, h: 500, rot: -2, src: `${PD}/portrait_james_r_keene_1901_worldswork.jpg`, en: 'James R. Keene (1838–1913)', zh: '詹姆斯·R·基恩' },
      { type: 'photo', at: 'L1@Morgan', x: 1090, y: 220, w: 500, h: 500, rot: 2, src: `${PD}/portrait_jp_morgan_1902.jpg`, en: 'J. P. Morgan (1837–1913)', zh: 'J. P. 摩根' },
      { type: 'text', screen: true, at: 0.3, x: 1880, y: 1000, align: 'right', font: 'cond', size: 20, weight: 500, fill: '#e8dcc0',
        en: 'Keene: The World\'s Work, 1901 · Morgan: photograph c.1902 (both public domain)' }],
    lines: [
      N('And the giants of the age, under their real names. James R. Keene, in the book the greatest manipulator of them all.', '还有那个时代的巨头，书中用的是他们的真名。詹姆斯·R·基恩，书里称他是所有操纵者中最伟大的一位。'),
      N('And J. P. Morgan, who in the panic of 1907 made the banks find the money that saved the stock market.', '还有J.P.摩根。在1907年的恐慌中，是他让各家银行拿出钱来，救了股市。'),
    ] });

  // ---- who is who, in one table ----
  const C = (en, zh) => [en, zh];
  lesson(h, { id: 'e00_who', tag: ['WHO IS WHO', '人物表'], title: ['The People in the Book', '书中人物'], trans: 'page',
    gest: ['explain', 'explainR'],
    items: [
      { type: 'table', at: 'L0', x: 470, y: 230, w: 690, widths: [0.38, 0.62], size: 28, bottom: 830,
        cols: [C('In the book', '书中人物'), C('Who he is', '身份')],
        rows: [
          [C('Larry Livingston', '拉瑞·利文斯顿'), C('The narrator: Jesse Livermore', '叙述者，即杰西·利弗莫尔')],
          [C('A. R. Fullerton', '富勒顿'), C('NY broker; lent him $500', '纽约经纪商，借给他500美元')],
          [C('Partridge, "Turkey"', '帕特里奇（"火鸡"）'), C('Old customer: "sit tight"', '老客户："坐得住"')],
          [C('Ed Harding', '埃德·哈丁'), C('His first NY brokers; a friend', '他在纽约的第一家经纪行；朋友')]],
        rowAt: ['L0@me', 'L0@brokers', 'L0@customer', 'L0@customer+0.6'] },
      { type: 'table', at: 'L0@men', x: 1200, y: 230, w: 690, widths: [0.38, 0.62], size: 28, bottom: 830,
        cols: [C('In the book', '书中人物'), C('Who he is', '身份')],
        rows: [
          [C('Percy Thomas', '珀西·托马斯'), C('Famous cotton operator', '著名棉花投机商')],
          [C('Dan Williamson', '丹·威廉森'), C('Head of a Stock Exchange house', '交易所会员行掌门人')],
          [C('James R. Keene', '詹姆斯·R·基恩'), C('Real name. Master manipulator', '真名。操纵大师')],
          [C('J. P. Morgan', 'J. P. 摩根'), C('Real name. Banker; 1907 rescue', '真名。银行家；1907年救市')]],
        rowAt: ['L0@men', 'L0@men+0.5', 'L0@giants', 'L0@giants+0.5'] }],
    lines: [
      N('Here is the cast in one place: me, two brokers, an old customer, two men who cost me dearly, and two giants.', '整个人物表都在这里：我自己、两位经纪人、一位老客户、两个让我付出惨重代价的人，还有两位巨头。'),
      N('When a name comes back in a later episode, this is who he is.', '后面几集里再出现这些名字时，就是这些人。'),
    ] });

  // ---- how each episode works ----
  shot({ id: 'e00_watch', set: 'study', setOpts: { night: false, lampX: 1650 }, trans: 'wipeL', music: 'calm',
    cam: [{ t: 0, x: 960, y: 540, z: 1.0 }, { t: 'end', x: 960, y: 530, z: 1.03 }],
    cast: [{ id: 'larryOld', key: 'nar', x: 960, y: 880, s: 1.2, pose: 'relaxed', expr: 'smile',
      acts: [{ t: 'L0', pose: 'explain', expr: 'neutral' }, { t: 'L1', pose: 'pointUp', expr: 'smile' }, { t: 'L2', pose: 'explainR' }, { t: 'L3', pose: 'point', expr: 'think' },
        { t: 'L4', pose: 'relaxed', expr: 'neutral' }] }],
    items: [
      { type: 'flow', at: 'L1', x: 100, y: 90, w: 1720, bh: 200, gap: 50, size: 28, nodes: [
        { num: 1, en: 'Story: the book\'s events, in comic panels', zh: '故事：书中情节，漫画呈现', at: 'L1' },
        { num: 2, en: 'Method: paper pages, numbers worked out', zh: '方法：讲解页，数字逐步算出', at: 'L1@method' },
        { num: 3, en: 'Takeaway card: the rules', zh: '要点卡：规则', at: 'L2' },
        { num: 4, en: 'Mistake review: mistake · cause · rule', zh: '错误复盘：错误·原因·规则', at: 'L2@review' }] },
      { type: 'note', at: 'L3', x: 100, y: 340, w: 640, h: 170, size: 30, fill: '#efe3c4', anim: 'slideU',
        en: '"ILLUSTRATIVE PATH" charts connect the book\'s prices. Stated prices are exact.', zh: '标有"示意走势"的图只是连接书中给出的价格；书中价格本身是准确的。' },
      { type: 'note', at: 'L4', x: 1180, y: 340, w: 640, h: 170, size: 30, fill: '#f3c6c0', anim: 'slideU',
        en: 'A study of a 1923 book. Markets and laws have changed. Not investment advice.', zh: '这是对一本1923年著作的学习。市场与法律早已改变。不构成投资建议。' }],
    lines: [
      N('Each episode follows the book in order, with nothing skipped and nothing invented.', '每一集都按原书顺序讲述，不跳过，也不杜撰。'),
      N('First the story, in comic panels like this one. Then the method, on paper pages, with every number worked out on screen.', '先讲故事，用这样的漫画画面。再讲方法，用讲解页，每个数字都在屏幕上一步步算出来。'),
      N('Each episode ends with a takeaway card of rules, and a review table: each mistake, its cause, and the rule it taught me.', '每集结尾有一张规则要点卡，和一张复盘表：每个错误、它的原因，以及它教给我的规则。'),
      N('Where the book gives only a few prices, a chart marked illustrative connects them. The prices it states are exact.', '书中只给出几个价格的地方，标有"示意"的图表会把它们连起来。书中给出的价格本身是准确的。'),
      N('This is a study of a 1923 book. Markets and laws have changed since, and nothing here is investment advice.', '这是对一本1923年著作的学习。市场和法律早已改变，这里的内容都不构成投资建议。'),
    ] });
};
