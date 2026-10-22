// Storyboard. Narration is an original adaptation in our own words of Edwin Lefèvre's
// "Reminiscences of a Stock Operator" (1923, public domain); short quotations are marked as quotes.
// Run with node to write build/story.json.
const fs = require('fs');
const path = require('path');

const WHO = {
  larry: { en: 'LARRY LIVINGSTON (JESSE LIVERMORE)', zh: '拉瑞·利文斯顿（杰西·利弗莫尔）' },
  host: { en: 'LESSON', zh: '要点讲解' },
  boy: { en: 'OFFICE BOY', zh: '办公室小弟' },
  partridge: { en: 'OLD PARTRIDGE', zh: '老帕特里奇' },
  clerk: { en: 'BUCKET-SHOP CLERK', zh: '对赌行职员' },
  broker: { en: 'J. G. DOLAN', zh: 'J.G.多兰' },
  harding: { en: 'ED HARDING', zh: '艾德·哈丁' },
  percy: { en: 'PERCY THOMAS', zh: '珀西·托马斯' },
  banker: { en: 'JOHN T. ATTERBURY', zh: '约翰·T·阿特伯里' },
  friend: { en: 'A FRIEND', zh: '朋友' },
  williamson: { en: 'DAN WILLIAMSON', zh: '丹·威廉森' },
  elmer: { en: 'ELMER HARWOOD', zh: '埃尔默·哈伍德' },
};
const shots = [];
let EP = '', CH = null;
const L = (v, en, zh, o = {}) => Object.assign({ v, en, zh, who: WHO[v] }, o);
function shot(o) { o.epLabel = EP; if (CH) { o.chapter = CH; CH = null; } shots.push(o); }
function episode(n, en, zh, chap, color, intro) {
  EP = n > 10 ? 'FINALE' : n ? `EP${n} · ${en.toUpperCase()}` : '';
  CH = n ? `EP${n} ${en} / ${zh}` : `${en} / ${zh}`;
  shot({ id: `ep${String(n).padStart(2, '0')}_title`, kind: 'title', color, kicker: n > 10 ? { en: 'FINALE', zh: '终章' } : n ? { en: `EPISODE ${n}`, zh: `第${['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][n - 1]}集` } : { en: 'A MOTION COMIC', zh: '漫剧' }, en, zh, sub: chap, lines: intro });
}
// panel layouts
const FULL = { x: 40, y: 40, w: 1840, h: 770 };
const HALF = [{ x: 40, y: 40, w: 905, h: 770 }, { x: 975, y: 40, w: 905, h: 770 }];
const BIGL = [{ x: 40, y: 40, w: 1100, h: 770 }, { x: 1170, y: 40, w: 710, h: 370 }, { x: 1170, y: 440, w: 710, h: 370 }];
const BIGR = [{ x: 780, y: 40, w: 1100, h: 770 }, { x: 40, y: 40, w: 710, h: 370 }, { x: 40, y: 440, w: 710, h: 370 }];
const THREE = [{ x: 40, y: 40, w: 593, h: 770 }, { x: 663, y: 40, w: 593, h: 770 }, { x: 1286, y: 40, w: 594, h: 770 }];
const P = (base, o) => Object.assign({}, base, o);
// character placed in a panel: head centred at ~42% of panel height
const ch = (id, pn, xf, s, o = {}) => Object.assign({ id, x: pn.w * xf, y: pn.h * (o.hy || 0.44) + 228 * s, s }, o);

// =====================================================================
// PROLOGUE
episode(0, 'Reminiscences of a Stock Operator', '股票大作手回忆录', { en: 'Edwin Lefèvre, 1923 · A study guide for traders', zh: '埃德温·勒菲弗 著（1923）· 交易者学习手册' }, '#8a5a2b', [
  L('host', 'In 1923, Edwin Lefèvre published a book narrated in the first person by a trader called Larry Livingston.', '1923年，埃德温·勒菲弗出版了一本书，由一位名叫拉瑞·利文斯顿的交易员以第一人称讲述。'),
  L('host', 'Livingston is widely understood to be Jesse Livermore. The book is even dedicated to him.', '人们普遍认为利文斯顿就是杰西·利弗莫尔。这本书正是题献给他的。'),
  L('host', 'We follow the book\'s story and names, and stop at every lesson. Comic panels tell the story; paper pages teach the method.', '我们按原书的情节与人名讲述，每到要点都停下来讲透。漫画格讲故事，纸页讲方法。'),
]);

// =====================================================================
episode(1, 'The Bucket Shop Boy', '对赌行少年', { en: 'Chapter I', zh: '原著第一章' }, '#b8322a', [
  L('host', 'Episode one. The bucket shop boy.', '第一集：对赌行少年。'),
]);
{
  const [a, b, c] = BIGL;
  shot({ id: 'e1_board', kind: 'comic', panels: [
    P(a, { bg: 'office', chars: [ch('boy', a, 0.5, 1.25, { expr: 'neutral', pose: 'chin', exprAt: { 2: 'think' } })] }),
    P(b, { at: 1, bg: 'office', bgo: { board: [['SUGAR', 'B.R.T.'], ['105¼', '72⅛'], ['105⅜', '72¼']], hl: [2, 0] } }),
    P(c, { at: 2, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(130 60)"><rect width="450" height="260" fill="#f1ead6" stroke="#16130f" stroke-width="5"/><text x="20" y="45" font-family="Special Elite" font-size="30">MON  BURL. 113½</text><text x="20" y="95" font-family="Special Elite" font-size="30">TUE? up  ✔</text><text x="20" y="145" font-family="Special Elite" font-size="30">WED? up  ✔</text><text x="20" y="195" font-family="Special Elite" font-size="30">SUGAR  down ✘</text></g>' }] }),
  ], caps: [
    { x: 70, y: 70, w: 560, en: 'Age 14. Quotation-board boy.', zh: '14岁，报价板小弟。' },
    { at: 2, x: 1190, y: 460, w: 330, en: 'His "little book"', zh: '他的"小本子"', size: 24, zsize: 22 },
  ], lines: [
    L('larry', 'I went to work right out of grammar school, as a quotation-board boy in a brokerage office.', '我小学一毕业就去工作，在一家股票经纪行当报价板小弟。'),
    L('larry', 'I was quick at figures. To me those prices weren\'t dollars per share. They were numbers, always changing.', '我对数字很敏感。那些价格对我来说不是每股多少钱，而是一串不停变化的数字。'),
    L('larry', 'I noticed prices had habits. So I wrote my predictions in a little book, and checked them against the tape.', '我发现价格是有"习惯"的。于是我把预测写在一个小本子上，再拿行情纸带来核对。'),
  ] });
}
shot({ id: 'e1_tape', kind: 'info', tag: { en: 'LESSON 1', zh: '第一课' }, title: { en: 'Tape Reading: Watch What, Not Why', zh: '读盘：看"发生了什么"，不问"为什么"' }, els: [
  { type: 'cards', x: 70, y: 270, w: 1780, ch: 150, cols: 2, items: [
    { en: 'Read behavior. The "why" comes later — too late to act on.', zh: '读价格行为。"为什么"总是事后才来——那时已来不及行动。' },
    { en: 'Hollow Tube fell 3 points in a rising market. Days later: dividend passed.', zh: '大盘上涨时霍洛管业却跌了3点。几天后：公司取消分红。', at: 1 },
    { en: 'Patterns repeat because human nature repeats. Remember precedents.', zh: '模式会重复，因为人性会重复。牢记先例。', at: 2 },
    { en: 'Record real predictions, hits and misses — not imaginary trades.', zh: '记录真实的预测，对错都记——而不是纸上谈兵。', at: 2 },
  ] },
  { type: 'quote', at: 3, x: 210, y: 630, w: 1500, size: 40, zsize: 34, en: 'There is nothing new in Wall Street.', zh: '华尔街没有新鲜事。', src: 'Ch. I' },
], lines: [
  L('host', 'Lesson one. The tape tells you what is happening, not why.', '第一课：行情纸带告诉你正在发生什么，而不是为什么。'),
  L('host', 'Hollow Tube dropped three points while the market rallied. The reason, a passed dividend, came out days later.', '大盘上涨时霍洛管业却跌了三点。几天后原因才公布：取消分红。'),
  L('host', 'By the time you know why, the move is over. So he studied how prices behaved before they moved.', '等你知道为什么，行情早已走完。所以他研究的是价格在变动之前的表现。'),
  L('larry', 'There is nothing new in Wall Street. Whatever happens in the market today has happened before, and will happen again.', '华尔街没有新鲜事。今天市场上发生的一切，以前都发生过，以后还会再发生。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e1_first', kind: 'comic', panels: [
    P(a, { bg: 'office', chars: [ch('boy', a, 0.32, 1.0, { expr: 'think', flip: true }), ch('agent', a, 0.74, 1.0, { expr: 'grin', hat: 'none' })] }),
    P(b, { at: 2, bg: 'bucketshop', bgo: { board: [['BURLINGTON'], ['113½']], crowd: true }, chars: [ch('boy', b, 0.5, 1.0, { expr: 'grin', pose: 'money', hy: 0.5 })] }),
  ], bubbles: [
    { at: 1, x: 470, y: 70, w: 440, en: 'Five dollars buys five shares at the bucket shop!', zh: '在对赌行，五块钱就能买五股！', tx: 700, ty: 250 },
  ], sfx: [{ at: 3, x: 1420, y: 230, t: '+$3.12', zh: '首笔盈利', size: 110, color: '#d9a441' }], lines: [
    L('larry', 'One day an older office boy asked if I had any money. He had a tip on Burlington.', '有一天，一个年长些的办公室小弟问我有没有钱。他得到了一个伯灵顿铁路股的消息。'),
    L('boy', 'Five dollars buys five shares, at the bucket shop!', '在对赌行，五块钱就能买五股！'),
    L('larry', 'My little book said Burlington was acting the way it usually did before a rise. So I put in all I had.', '我的小本子显示，伯灵顿正呈现它通常上涨之前的走势。于是我投进了全部的钱。'),
    L('larry', 'Two days later we sold. My profit was three dollars and twelve cents. My first trade.', '两天后我们卖出。我赚了3.12美元。这是我的第一笔交易。'),
  ] });
}
shot({ id: 'e1_bucket', kind: 'info', tag: { en: 'HOW IT WORKS', zh: '机制拆解' }, title: { en: 'What Was a Bucket Shop?', zh: '什么是对赌行？' }, els: [
  { type: 'table', x: 70, y: 270, w: 1780, widths: [0.22, 0.39, 0.39], cols: [['Item', '项目'], ['Bucket shop', '对赌行'], ['Real broker (NYSE member)', '正规经纪行（纽交所会员）']], rows: [
    [['Your order', '你的订单'], ['Never executed. You bet against the house.', '从不真正成交。你在和店家对赌。'], ['Bought or sold on the Exchange floor', '在交易所场内真实买卖']],
    [['Your price', '你的价格'], ['The last price printed on the tape', '纸带上最后打印的价格'], ['Whatever the floor gives you', '场内实际给出的价格']],
    [['Margin', '保证金'], ['Often 1 point; ticket wiped out if the price moves 1 point against you', '常为1个点；价格反向走1点即自动作废'], ['About 10%; you can be asked for more', '约10%；可能被要求追加']],
    [['Costs', '成本'], ['Small shops wrote a buy at 20 as 20¼ — both commissions up front', '小店把20的买单写成20¼——先扣两笔佣金'], ['Regular commission', '正常佣金']],
    [['When you lose', '你亏钱时'], ['The house wins', '店家赚钱'], ['Someone else on the floor wins', '场内另一方赚钱']],
  ], reveal: true, rowAt: [0, 1, 1, 2, 3] },
], lines: [
  L('host', 'A bucket shop was a betting parlor dressed up as a brokerage. It never bought a single share.', '对赌行是伪装成经纪行的赌场，它从不真正买入一股。'),
  L('host', 'You bet on the last printed price. With a one-point margin, a one-point move against you wiped out your ticket.', '你押注纸带上最后打印的价格。交一个点的保证金，价格反向走一个点，你的单子就作废。'),
  L('host', 'Small shops even wrote a buy at 20 as 20¼, taking both commissions up front.', '小店甚至把20的买单写成20¼，先把两笔佣金扣掉。'),
  L('host', 'Whenever a customer lost, the house won. The game rewarded one skill: calling the next few ticks.', '客户亏钱就是店家赚钱。这种游戏只奖励一种技能：判断接下来几笔报价。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e1_plunger', kind: 'comic', panels: [
    P(a, { bg: 'home', chars: [ch('mother', a, 0.3, 0.95, { expr: 'shock' }), ch('boy', a, 0.72, 0.95, { expr: 'smile', pose: 'money', flip: true })] }),
    P(b, { at: 1, bg: 'bucketshop', chars: [ch('clerk', b, 0.3, 0.95, { expr: 'angry', pose: 'point' }), ch('larry', b, 0.75, 0.95, { expr: 'grin', flip: true })] }),
  ], caps: [{ x: 70, y: 70, w: 420, en: 'Age 15: his first $1,000.', zh: '15岁：第一个1,000美元。' }],
  bubbles: [{ at: 1, x: 1040, y: 70, w: 420, en: 'No more trades for the Boy Plunger!', zh: '不再接"少年赌徒"的单了！', tx: 1200, ty: 300, kind: 'shout' }],
  lines: [
    L('larry', 'I beat the bucket shops so often that I made more than my salary. So I quit my job. At fifteen I brought my mother my first thousand dollars.', '我在对赌行屡屡获胜，赚得比工资还多，于是辞了工作。十五岁时，我把第一个一千美元交给了母亲。'),
    L('larry', 'Soon the shops wouldn\'t take my business. They called me the Boy Plunger. I traded under false names.', '很快各家对赌行都不接我的单了，他们叫我"少年赌徒"。我只好化名交易。'),
  ] });
}
shot({ id: 'e1_cosmo', kind: 'info', tag: { en: 'THE HANDICAP', zh: '不平等条件' }, title: { en: 'The Cosmopolitan\'s Special Terms', zh: '"大都会"对赌行的特殊条款' }, els: [
  { type: 'table', x: 70, y: 270, w: 1100, widths: [0.3, 0.35, 0.35], cols: [['Term', '条款'], ['Ordinary customer', '普通客户'], ['Livingston', '利文斯顿']], rows: [
    [['Margin', '保证金'], ['1 point', '1个点'], ['3 points', '3个点']],
    [['Premium', '溢价'], ['none', '无'], ['½ → 1 → 1½ points', '½→1→1½个点']],
    [['Buy Steel at 90', '90买入钢铁股'], ['ticket 90⅛', '单据90⅛'], ['ticket 91⅛', '单据91⅛']],
    [['Buying power', '交易能力'], ['100%', '100%'], ['cut by ⅔', '削减三分之二']],
  ], hl: [1, 2] },
  { type: 'box', at: 2, x: 1220, y: 270, w: 630, color: '#f6d77a', en: 'Steel could rise 1¼ points and he would still show a loss. He kept winning anyway.', zh: '钢铁股涨1¼点他都还是亏的。即便如此，他依然在赢。', size: 30 },
  { type: 'box', at: 3, x: 1220, y: 560, w: 630, color: '#cfe3c4', en: 'Age 20: his first $10,000 in cash.', zh: '20岁：第一笔一万美元现金。', size: 32 },
], lines: [
  L('larry', 'In the end only the Cosmopolitan, the richest bucket shop in New England, would still take me. On special terms.', '最后只剩新英格兰最有钱的对赌行"大都会"还肯接我的单——但有特殊条款。'),
  L('host', 'He had to put up three points of margin instead of one. That cut his trading power by two-thirds.', '别人交一个点保证金，他要交三个点，交易能力被砍掉三分之二。'),
  L('host', 'And a premium of up to one and a half points. Buy Steel at 90, and his ticket read 91⅛.', '还要加收最高一个半点的溢价。90买钢铁股，他的单子上写的却是91⅛。'),
  L('host', 'He still won. By twenty, he had his first ten thousand dollars.', '他依然赢钱。二十岁时，他攒下了第一笔一万美元。'),
] });
{
  const [a, b, c] = BIGL;
  shot({ id: 'e1_sugar', kind: 'comic', panels: [
    P(a, { bg: 'bucketshop', bgo: { board: [['SUGAR'], ['103']], hl: [1, 0], crowd: false }, props: [{ t: 'telegraph', x: 900, y: 650 }], chars: [ch('larry', a, 0.42, 1.15, { expr: 'worry', pose: 'ticket', ticketText: 'SHORT SUGAR 105¼', exprAt: { 2: 'shout' } })] }),
    P(b, { at: 2, bg: 'burst', bgo: { color: '#b8322a' } }),
    P(c, { at: 3, bg: 'bucketshop', bgo: { board: [['SUGAR'], ['108']], hl: [1, 0] } }),
  ], caps: [{ x: 70, y: 70, w: 480, en: 'Short 3,500 Sugar at 105¼.', zh: '在105¼做空3,500股糖业。' }],
  sfx: [{ at: 2, x: 1525, y: 220, t: 'CLOSE SUGAR!', zh: '平掉糖业！', size: 92, color: '#fff' }, { at: 3, x: 1460, y: 610, t: '108!', size: 80, color: '#f6d77a', rot: 6 }],
  lines: [
    L('larry', 'I was short thirty-five hundred Sugar at 105¼. It fell to 103, but its hesitation bothered me.', '我在105¼做空了3,500股糖业。它跌到103，但那种犹豫不决的走法让我不安。'),
    L('larry', 'I heard the shop\'s telegraph clicking. I didn\'t wait for a reason. I slapped down my tickets and shouted:', '我听到店里的电报机在响。我没等找到理由，就把单子拍在柜台上大喊：'),
    L('larry', 'Close Sugar!', '平掉糖业！'),
    L('larry', 'I was closed at 103. Seconds later Sugar printed 108. The shop had run the price up to wipe out its short customers.', '我在103平仓。几秒后糖业打出108。是店家故意拉高价格，把做空的客户全部洗掉。'),
  ] });
}
shot({ id: 'e1_drive', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例分析' }, title: { en: 'The "Bucket-Shop Drive"', zh: '"对赌行洗盘"' }, els: [
  { type: 'line', x: 70, y: 260, w: 1000, h: 560, xr: [0, 10], yr: [101, 109.5], yTicks: [102, 104, 106, 108], yLabel: ['Sugar, $', '糖业股价'],
    series: [{ pts: [[0, 105.25], [2, 104.5], [3.5, 103.4], [5, 103], [6.4, 103.1], [7.2, 108], [8.4, 104.3], [10, 103.8]], color: '#b8322a', reveal: [0, 0, 0, 0, 0, 1, 1, 1] }],
    notes: [{ x: 0, y: 105.25, en: 'Short 3,500 @ 105¼', zh: '105¼做空3,500股', dx: 20, dy: 20, w: 240 }, { x: 5, y: 103, en: 'Closed @ 103', zh: '103平仓', dx: -120, dy: 50, w: 200 }, { x: 7.2, y: 108, at: 1, en: 'Shop pushes price to 108: shorts wiped out', zh: '店家推高至108：空头被洗光', dx: 30, dy: 10, w: 300 }], illustrative: true },
  { type: 'cards', x: 1110, y: 260, w: 740, ch: 160, cols: 1, items: [
    { en: 'Shop overloaded with bears? Pay a broker to push the real price up a couple of points on a few hundred shares.', zh: '店里空头太多？就花钱让经纪人用几百股把真实价格推高几个点。', at: 1 },
    { en: 'Margins wiped out — then the price drops right back.', zh: '保证金被洗光——然后价格立即回落。', at: 1 },
    { en: 'He escaped by acting on "something is wrong" before he had a reason.', zh: '他之所以逃脱，是因为在找到理由之前，就按"不对劲"的感觉行动了。', at: 2 },
  ] },
], lines: [
  L('host', 'This was a bucket-shop drive. Margins were thin, so a small push on the real Exchange wiped out the shop\'s customers.', '这就是对赌行洗盘。客户保证金很薄，只要在真实的交易所稍稍推动价格，就能把店里客户洗光。'),
  L('host', 'The shop paid a broker to push the price up a couple of points on a few hundred shares. Then the price fell straight back.', '店家花钱让经纪人用几百股把价格推高几个点，随后价格立刻回落。'),
  L('host', 'He escaped because he acted on the feeling that something was wrong, before he could explain it.', '他之所以逃过一劫，是因为在说清楚原因之前，就按"不对劲"的感觉采取了行动。'),
  L('host', 'Within ten days, an Exchange professional beat the same shop for over seventy thousand dollars, with the same trick in reverse.', '十天之内，一位交易所老手用同样的手法反过来对付这家店，赢走了七万多美元。'),
] });

// =====================================================================
episode(2, 'Wall Street Is Not a Bucket Shop', '华尔街不是对赌行', { en: 'Chapters II – IV', zh: '原著第二至四章' }, '#2f5d8a', [
  L('host', 'Episode two. Wall Street is not a bucket shop.', '第二集：华尔街不是对赌行。'),
]);
{
  const [a, b] = HALF;
  shot({ id: 'e2_ny', kind: 'comic', panels: [
    P(a, { bg: 'street', chars: [ch('larry', a, 0.5, 1.0, { expr: 'smile', hat: 'boater', hatColor: '#e0c27a', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'office', chars: [ch('larry', b, 0.5, 1.05, { expr: 'sad', hy: 0.5 })] }),
  ], caps: [{ x: 70, y: 70, w: 460, en: 'Age 21. New York, with $2,500.', zh: '21岁，带着2,500美元来到纽约。' }, { at: 1, x: 1005, y: 70, w: 520, en: 'A. R. Fullerton & Co. — six months later.', zh: 'A.R.富勒顿公司——六个月后。' }],
  sfx: [{ at: 1, x: 1660, y: 300, t: 'BROKE', zh: '破产', size: 90 }], lines: [
    L('larry', 'At twenty-one I came to New York with twenty-five hundred dollars, and traded the same way I always had.', '二十一岁时，我带着2,500美元来到纽约，还是用老办法交易。'),
    L('larry', 'Within six months at A. R. Fullerton and Company, I was broke, and owed the firm a few hundred dollars.', '在A.R.富勒顿公司不到六个月，我就输光了，还欠公司几百美元。'),
    L('larry', 'I had been beating the bucket shops. I had not been beating the game.', '我一直赢的是对赌行，而不是这场游戏本身。'),
  ] });
}
shot({ id: 'e2_why', kind: 'info', tag: { en: 'DIAGNOSIS', zh: '病因分析' }, title: { en: 'Why the Bucket-Shop Method Failed', zh: '对赌行打法为什么失效' }, els: [
  { type: 'cards', x: 70, y: 270, w: 1780, ch: 250, cols: 2, items: [
    { en: 'TAPE LAG — the tape says 105; the floor is already at 103. The tape is "ancient history."', zh: '纸带滞后——纸带显示105，场内已是103。纸带是"古老的历史"。', at: 1 },
    { en: 'UNKNOWN FILLS — you learn your price only after the report. A $3,000 bucket-shop win might be $0.', zh: '成交未知——回报后才知道成交价。对赌行能赚三千的交易，这里可能为零。', at: 2 },
    { en: 'YOUR SIZE MOVES PRICE — selling a line pushes the price down against you.', zh: '规模冲击——大笔卖出会把价格压向对你不利的方向。', at: 3 },
    { en: 'MARGIN ~10% — no more 1-point scalps with huge leverage.', zh: '保证金约10%——不能再用巨大杠杆赚一个点的快钱。', at: 4 },
  ] },
], lines: [
  L('host', 'Why did the bucket-shop champion go broke on a real exchange? Four reasons.', '对赌行的常胜将军，为什么在真正的交易所破产？四个原因。'),
  L('host', 'One. The tape lags. When it printed 105, the price on the floor might already be 103.', '一：纸带滞后。纸带打出105时，场内价格可能已经是103。'),
  L('host', 'Two. You don\'t know your fill until it\'s reported. A trade that would make three thousand in a bucket shop might make nothing.', '二：成交价要等回报才知道。在对赌行能赚三千美元的交易，在这里可能一分不赚。'),
  L('host', 'Three. Real orders move real prices. Selling a big line pushes the price down against you.', '三：真实订单推动真实价格。大笔卖出会把价格压向对你不利的方向。'),
  L('host', 'Four. Margin was about ten percent, not one point. His quick in-and-out method simply stopped working.', '四：保证金约为10%，而不是一个点。他快进快出的打法就此失效。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e2_stl', kind: 'comic', panels: [
    P(a, { bg: 'train', chars: [ch('larry', a, 0.5, 1.0, { expr: 'determined', hat: 'bowler', hatColor: '#2a2a2a', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'bucketshop', chars: [ch('broker', b, 0.32, 1.0, { expr: 'angry', pose: 'pointL', flip: true, x: 300 }), ch('larry', b, 0.76, 0.95, { expr: 'smile', flip: true })] }),
  ], caps: [{ x: 70, y: 70, w: 460, en: 'St. Louis, alias "Horace Kent".', zh: '圣路易斯，化名"霍勒斯·肯特"。' }],
  bubbles: [{ at: 2, x: 1000, y: 70, w: 420, en: 'You\'re Livingston! Get out!', zh: '你就是利文斯顿！出去！', tx: 1290, ty: 260, kind: 'shout' }],
  sfx: [{ at: 1, x: 1700, y: 650, t: '+$2,800', zh: '两天', size: 70, color: '#d9a441' }], lines: [
    L('larry', 'I borrowed five hundred dollars from old Fullerton and went to St. Louis, where the bucket shops didn\'t know me.', '我向老富勒顿借了500美元，去了圣路易斯，那里的对赌行还不认识我。'),
    L('larry', 'In two days I made twenty-eight hundred dollars. On the third, the owner recognized me.', '两天里我赚了2,800美元。第三天，老板认出了我。'),
    L('broker', 'You\'re Livingston! Get out!', '你就是利文斯顿！出去！'),
  ] });
}
shot({ id: 'e2_fool', kind: 'info', tag: { en: 'LESSON', zh: '要点' }, title: { en: 'The Wall Street Fool', zh: '华尔街傻瓜' }, els: [
  { type: 'quote', x: 160, y: 270, w: 1600, size: 42, zsize: 34, en: 'There is the plain fool… and there is the Wall Street fool, who thinks he must trade all the time.', zh: '有一种普通傻瓜……还有一种华尔街傻瓜，他认为自己必须一直交易。', src: 'Ch. II' },
  { type: 'box', at: 1, x: 160, y: 590, w: 1600, color: '#f6d77a', anchor: 'middle', en: 'No one can have good reasons to buy or sell every day. Trade only when the odds clearly favor you.', zh: '没有人每天都有充分的买卖理由。只在胜算明显站在你这边时交易。', size: 32 },
], lines: [
  L('larry', 'There is the plain fool, who does the wrong thing at all times. And there is the Wall Street fool, who thinks he must trade all the time.', '有一种普通傻瓜，总是做错事。还有一种华尔街傻瓜，他认为自己必须一直交易。'),
  L('host', 'No one can have adequate reasons to buy or sell every day. The urge for constant action is itself a cause of losses.', '没有人每天都有充分的买卖理由。追求时时有动作的冲动，本身就是亏损的根源。'),
] });
{
  const [a, b, c] = BIGR;
  shot({ id: 'e2_1901', kind: 'comic', panels: [
    P(a, { bg: 'floor' }),
    P(b, { bg: 'street', bgo: { crowd: true } }),
    P(c, { at: 1, bg: 'office', bgo: { board: [['N. PAC'], ['110']], hl: [1, 0] }, chars: [ch('larry', c, 0.5, 0.75, { expr: 'grin', hy: 0.55 })] }),
  ], caps: [{ x: 810, y: 70, w: 560, en: '1901: the great boom. 3,000,000-share days.', zh: '1901年：大牛市。单日成交三百万股。' }],
  sfx: [{ at: 1, x: 400, y: 560, t: '~$50,000', zh: '身家', size: 64, color: '#d9a441' }], lines: [
    L('larry', 'Then came the great boom of 1901. There were days of three million shares. Everyone was making money.', '接着是1901年的大牛市，单日成交三百万股，人人都在赚钱。'),
    L('larry', 'I bought a thousand Northern Pacific against advice, and sold near 110 with a thirty-point profit. I had nearly fifty thousand dollars.', '我不顾劝告买入一千股北太平洋，在110附近卖出，赚了三十点。我的身家接近五万美元。'),
  ] });
}
{
  const [a, b] = HALF;
  shot({ id: 'e2_may9', kind: 'comic', panels: [
    P(a, { bg: 'floor', tint: '#b8322a' }),
    P(b, { at: 1, bg: 'dark', chars: [ch('larry', b, 0.5, 1.15, { expr: 'shock', pose: 'tape', exprAt: { 3: 'sad' } })] }),
  ], caps: [{ x: 70, y: 70, w: 520, en: 'May 9, 1901. The Northern Pacific corner.', zh: '1901年5月9日，北太平洋逼空事件。' }],
  sfx: [{ at: 1, x: 1180, y: 160, t: 'TAPE: 100', zh: '纸带：100', size: 64, color: '#fff', rot: -10 }, { at: 1, x: 1700, y: 240, t: 'FILL: 80', zh: '成交：80', size: 64, color: '#b8322a', rot: 8 }], lines: [
    L('larry', 'On May 9, 1901, the fight between Harriman and Morgan for Northern Pacific broke the whole market. I sold short, at the market.', '1901年5月9日，哈里曼与摩根争夺北太平洋的战争拖垮了整个市场。我以市价做空。'),
    L('larry', 'The tape said 100. My orders were filled around 80, thirty or forty points below the last close.', '纸带上是100，我的单子却在80左右成交，比前一天收盘低三四十点。'),
    L('larry', 'I covered and went long, and my brokers paid fifteen points more than I figured. In one day I was wiped out.', '我回补并转为做多，成交价又比我预计的高了十五点。一天之内，我输光了。'),
    L('larry', 'I was dead right, and I lost every cent I had.', '我判断完全正确——却输掉了我的每一分钱。'),
  ] });
}
shot({ id: 'e2_lag', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例分析' }, title: { en: 'Trading on Prices That No Longer Exist', zh: '用已不存在的价格做决策' }, els: [
  { type: 'line', x: 70, y: 260, w: 1050, h: 560, xr: [0, 10], yr: [70, 112], yTicks: [75, 85, 95, 105], yLabel: ['Price (illustrative)', '价格（示意）'],
    series: [{ pts: [[0, 108], [2, 105], [4, 100], [6, 97], [8, 94], [10, 92]], color: '#2f5d8a', label: ['Tape (lagging)', '纸带（滞后）'] }, { pts: [[0, 106], [2, 96], [4, 81], [5, 78], [6, 86], [8, 95], [10, 98]], color: '#b8322a', label: ['Real floor price', '场内真实价格'], at: 1 }],
    notes: [{ x: 4, y: 100, en: 'He sees 100 and sells', zh: '他看到100就卖出', dx: 30, dy: -10, w: 230, at: 1 }, { x: 4, y: 81, en: 'Filled ≈ 80', zh: '实际成交≈80', dx: -260, dy: 20, w: 200, at: 1 }, { x: 8, y: 95, en: 'Covers +15 pts worse than expected', zh: '回补比预期差15点', dx: -330, dy: -120, w: 280, at: 2 }], illustrative: true },
  { type: 'cards', x: 1160, y: 260, w: 690, ch: 170, cols: 1, items: [
    { en: 'In a panic the ticker falls far behind.', zh: '恐慌中行情机严重滞后。', at: 1 },
    { en: 'Tape reading is not enough. Anticipate the big move instead of betting on the next quotes.', zh: '只会读盘不够。要预判大行情，而不是赌接下来的报价。', at: 3 },
    { en: 'No limit orders: he aimed to beat the market, not a price. To get out, get out at the market.', zh: '不用限价单：他要战胜的是市场而不是某个价格。要出场就市价出场。', at: 4 },
  ] },
], lines: [
  L('host', 'Here\'s what happened.', '来看发生了什么。'),
  L('host', 'In a panic the ticker falls far behind. He made his decisions on prices that no longer existed.', '恐慌中行情机严重滞后。他是根据已经不存在的价格做的决策。'),
  L('host', 'And when he reversed, the market had already rebounded. Fifteen points worse.', '当他反手时，市场已经反弹，又差了十五点。'),
  L('host', 'His lesson: tape reading alone isn\'t enough. You must anticipate the big move, not bet on the next few quotations.', '他的教训：光会读盘是不够的。必须预判大行情，而不是赌接下来几笔报价。'),
  L('host', 'And he refused limit orders. He was trying to beat the market, not a particular price.', '他也拒绝用限价单。他要战胜的是市场，而不是某个特定价格。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e2_wire', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('larry', a, 0.62, 1.0, { expr: 'think', pose: 'chin', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'bucketshop', props: [{ t: 'sign', x: 120, y: 420, w: 660, en: 'WIRE HOUSE — "Members of all Exchanges"', zh: '电报经纪行——"各交易所会员"', size: 30, zsize: 26, color: '#5b3a1e' }], chars: [ch('clerk', b, 0.5, 0.9, { expr: 'grin', hy: 0.3 })] }),
  ], lines: [
    L('larry', 'Broke again, I went home. The local bucket shops wouldn\'t take me, so I tried the new wire houses.', '再次破产后，我回到家乡。当地对赌行不接我的单，我就去了新兴的电报经纪行。'),
    L('larry', 'They claimed to be real brokers. They were bucket shops in disguise, and their records always seemed to differ against me.', '他们自称正规经纪商，其实是伪装的对赌行，而账目上的差错总是对我不利。'),
  ] });
}
shot({ id: 'e2_trick', kind: 'info', tag: { en: 'HOW IT WORKED', zh: '手法拆解' }, title: { en: 'Turning the Wire Houses\' Rules Against Them', zh: '用电报行自己的规则反制他们' }, els: [
  { type: 'flow', x: 70, y: 270, w: 1780, bh: 290, size: 25, zsize: 22, nodes: [
    { num: 1, en: 'Pick a thin, inactive stock. Buy 100 shares at each of 5 wire houses.', zh: '选一只冷门股。在5家电报行各买100股。' },
    { num: 2, en: 'Via a real broker, SELL 100 at the market. The thin stock prints low = his "buy" price.', zh: '通过正规经纪商市价卖100股。冷门股打出低价＝他的"买入价"。' },
    { num: 3, en: 'Near the close, the real broker BUYS 100 back at any price. Price jumps.', zh: '收盘前，让正规经纪商不计价买回100股。价格跳升。' },
    { num: 4, en: 'Sell the 500 bucketed shares at the jump. ≈ $600–800 per round.', zh: '在高点卖出电报行的500股。每轮约600–800美元。' },
  ] },
  { type: 'box', at: 4, x: 70, y: 620, w: 1780, color: '#f3c6c0', anchor: 'middle', en: '⚠ This is manipulation — illegal today. The lesson: thin markets and printed prices can be gamed.', zh: '⚠ 这是操纵行为，如今违法。教训：冷门股与打印价格是可以被利用的。', size: 30 },
], lines: [
  L('host', 'So he turned their own rules against them, using a thin, inactive stock.', '于是他利用一只冷门股，用他们自己的规则反制他们。'),
  L('host', 'Step two: through a real broker, he sold a hundred shares urgently. The thin stock printed low, and that became his buying price at all five houses.', '第二步：他通过正规经纪商急卖一百股。冷门股一砸就打出低价，这个价格就成了他在五家电报行的买入价。'),
  L('host', 'Step three: near the close, the real broker bought them back at any price, and the stock jumped.', '第三步：临近收盘，正规经纪商不计价格买回，股价随之跳升。'),
  L('host', 'He sold all five hundred bucketed shares into the jump: one or two points per shop, about six to eight hundred dollars a time.', '他在跳升时卖出电报行的全部五百股：每家一到两个点，每次约六到八百美元。'),
  L('host', 'This is manipulation, and illegal today. Its value here is seeing how thin markets and printed prices can be gamed.', '这是操纵行为，如今属于违法。在这里，它的价值是让你看清冷门股和打印价格是如何被利用的。'),
] });
shot({ id: 'e2_rules', kind: 'info', tag: { en: 'TAKEAWAYS', zh: '本集要点' }, title: { en: 'What Episode Two Teaches', zh: '第二集的教训' }, els: [
  { type: 'cards', x: 70, y: 260, w: 1780, ch: 130, cols: 2, items: [
    { en: 'There is only one side to the market: the right side.', zh: '市场只有一边：正确的一边。' },
    { en: 'Real executions differ from the tape — plan for it.', zh: '真实成交与纸带不同——要事先考虑。' },
    { en: 'Don\'t trade all the time.', zh: '不要一直交易。', at: 1 },
    { en: 'Tips: if Smith tells you when to buy, you\'ll need Smith to tell you when to sell.', zh: '消息：靠史密斯告诉你何时买，你就得靠他告诉你何时卖。', at: 1 },
    { en: 'Losing everything teaches what NOT to do.', zh: '输光一切，才学会什么不该做。', at: 2 },
    { en: 'Beating the bucket shop ≠ beating the market.', zh: '赢了对赌行≠赢了市场。', at: 2 },
  ] },
], lines: [
  L('larry', 'There is only one side to the stock market. Not the bull side or the bear side, but the right side.', '股市只有一边。不是多头那边，也不是空头那边，而是正确的那边。'),
  L('host', 'Never rely on tips. If someone tells you when to buy, you\'ll need him to tell you when to sell.', '永远不要依赖消息。别人告诉你何时买，你就得靠他告诉你何时卖。'),
  L('larry', 'There is nothing like losing all you have in the world for teaching you what not to do.', '没有什么比输光一切，更能教会你什么不该做。'),
] });

// =====================================================================
episode(3, 'Sit Tight', '坐得住', { en: 'Chapter V · Old Partridge', zh: '原著第五章 · 老帕特里奇' }, '#2c4a3a', [
  L('host', 'Episode three. Sit tight.', '第三集：坐得住。'),
]);
shot({ id: 'e3_spec', kind: 'info', tag: { en: 'KEY IDEA', zh: '核心概念' }, title: { en: 'Gambling vs. Speculating', zh: '赌博 vs. 投机' }, els: [
  { type: 'table', x: 70, y: 270, w: 1780, widths: [0.24, 0.38, 0.38], headColor: '#2c4a3a', cols: [['', ''], ['Gambling', '赌博'], ['Speculating', '投机']], rows: [
    [['You bet on', '押注对象'], ['The next fluctuations', '接下来的波动'], ['Advances and declines that conditions make inevitable', '由基本状况决定、必然到来的涨跌']],
    [['You study', '研究什么'], ['The ticks on the tape', '纸带上的报价'], ['Trade reports, railroad earnings, money, statistics', '贸易报告、铁路盈利、资金、统计数据']],
    [['You hold', '持有多久'], ['Minutes to days', '几分钟到几天'], ['The whole move', '整段行情']],
    [['You exit', '何时离场'], ['On a small profit', '小赚就走'], ['When you think the bull market is ending', '当你认为牛市即将结束']],
  ], reveal: true, rowAt: [0, 1, 2, 2] },
], lines: [
  L('larry', 'On my third try in New York I made a change. Instead of betting on fluctuations, I began to anticipate the big moves.', '第三次闯纽约时，我改变了打法：不再押注波动，而是开始预判大行情。'),
  L('larry', 'I studied conditions: trade reports, railroad earnings, financial statistics.', '我研究基本状况：贸易报告、铁路盈利、金融统计。'),
  L('host', 'Gambling bets on the next fluctuation. Speculating anticipates moves that conditions make inevitable, and holds for the whole move.', '赌博押注下一个波动；投机预判由基本状况决定的必然行情，并持有整段行情。'),
] });
shot({ id: 'e3_early', kind: 'info', tag: { en: 'MISTAKE', zh: '错误' }, title: { en: 'Taking Profits Too Early', zh: '过早获利了结' }, els: [
  { type: 'bars', x: 260, y: 260, w: 1400, h: 540, max: 22000, bars: [
    { v: 2000, vl: '$2,000', en: 'Took 4 points', zh: '拿了4个点', color: '#d9a441' },
    { v: 20000, vl: '$20,000', en: 'Available: 10 more points', zh: '本可再赚10点', color: '#2f7d3a', at: 1 },
  ] },
], lines: [
  L('larry', 'But I still took my profits too soon. I\'d grab four points, then watch the stock go up ten more.', '可我还是太早获利了结。拿了四个点，然后眼睁睁看着它又涨了十点。'),
  L('host', 'Two thousand dollars made, where twenty thousand were there to be made.', '赚了两千美元，而本可以赚到两万。'),
] });
{
  const [a, b, c] = BIGL;
  shot({ id: 'e3_partridge', kind: 'comic', panels: [
    P(a, { bg: 'office', chars: [ch('partridge', a, 0.5, 1.2, { expr: 'smile' })] }),
    P(b, { at: 2, bg: 'office', chars: [ch('agent', b, 0.5, 0.8, { expr: 'worry', hat: 'none', mus: 'thin', hy: 0.55 })] }),
    P(c, { at: 1, bg: 'dark', props: [{ t: 'svg', svg: '<g transform="translate(355 190)"><text text-anchor="middle" font-family="Bangers" font-size="76" fill="#f6d77a" stroke="#16130f" stroke-width="6" paint-order="stroke">CLIMAX MOTORS</text><text y="80" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="44" fill="#fff">500 SH · +7 PTS / 10 DAYS</text><text y="130" text-anchor="middle" font-family="Noto Sans SC" font-weight="700" font-size="36" fill="#fff">500股 · 10天涨7点</text></g>' }] }),
  ], bubbles: [
    { at: 0, x: 120, y: 80, w: 460, en: 'You know, it\'s a bull market!', zh: '你知道的，这是牛市啊！', tx: 500, ty: 320 },
    { at: 3, x: 560, y: 470, w: 520, en: 'If I sold now, I\'d lose my position. And then where would I be?', zh: '我现在要是卖了，就会失去仓位。那我还剩什么？', tx: 560, ty: 330 },
  ], lines: [
    L('larry', 'In Fullerton\'s office there was an old customer we called Old Partridge. Whatever you asked him, he answered:', '富勒顿营业厅里有位老客户，我们叫他老帕特里奇。不管问他什么，他都这样回答：'),
    L('partridge', 'You know, it\'s a bull market!', '你知道的，这是牛市啊！'),
    L('larry', 'Elmer Harwood had tipped him into Climax Motors. His five hundred shares were up seven points in ten days. Elmer urged him to sell and buy back on the reaction.', '埃尔默·哈伍德曾建议他买克莱麦克斯汽车。他的五百股十天涨了七点。埃尔默劝他先卖出，回调时再买回。'),
    L('partridge', 'If I sold that stock now, I\'d lose my position. And then where would I be?', '我现在要是卖了，就会失去我的仓位。那我还剩什么？'),
  ] });
}
shot({ id: 'e3_sit', kind: 'info', tag: { en: 'THE BIG LESSON', zh: '最重要的一课' }, title: { en: 'The Big Money Is in the Big Swing', zh: '大钱在大波段里' }, els: [
  { type: 'quote', bottom: 525, x: 160, y: 260, w: 1600, size: 44, zsize: 36, en: 'It never was my thinking that made the big money for me. It always was my sitting.', zh: '让我赚大钱的从来不是我的思考，而是我的坐等。', src: 'Ch. V' },
  { type: 'cards', at: 1, x: 70, y: 540, w: 1780, ch: 120, cols: 3, items: [
    { en: 'Being right AND sitting tight is rare.', zh: '既看对又坐得住，非常罕见。', at: 1 },
    { en: 'The first and last eighths are the most expensive in the world.', zh: '最初和最后的八分之一点，是世上最贵的。', at: 2 },
    { en: 'Hold until the bull market nears its end — then get out completely.', zh: '持有到牛市接近尾声——然后彻底离场。', at: 3 },
  ] },
], lines: [
  L('larry', 'It never was my thinking that made the big money for me. It always was my sitting.', '让我赚大钱的从来不是我的思考，而是我的坐等。'),
  L('host', 'Being right is common. Being right and sitting tight is rare.', '看对很常见，看对又坐得住却很少见。'),
  L('host', 'Don\'t try to catch the first or last eighth of a point. Those are the most expensive eighths in the world.', '别去抓最初或最后那八分之一点。那是世界上最昂贵的八分之一。'),
  L('host', 'In a bull market, buy and hold until you believe it\'s nearing its end. Then get out of everything, and wait.', '牛市里买入并持有，直到你认为它接近尾声。然后全部离场，耐心等待。'),
] });
shot({ id: 'e3_suckers', kind: 'info', tag: { en: 'KNOW THE CROWD', zh: '认识众生相' }, title: { en: 'Three Grades of Losers', zh: '三种输家' }, els: [
  { type: 'table', x: 70, y: 270, w: 1780, widths: [0.25, 0.5, 0.25], cols: [['Type', '类型'], ['Behavior', '行为'], ['Survives', '存活期']], rows: [
    [['The beginner', '新手'], ['Knows nothing, and knows it', '一无所知，也自知无知'], ['3 – 30 weeks', '3–30周']],
    [['The "semi-sucker"', '"半吊子"'], ['Quotes all the rules; loves buying on declines', '满口规则，最爱逢低买入'], ['≈ 3½ years', '约3年半']],
    [['The plain sucker', '纯韭菜'], ['Buys blindly in a bull market until a reaction wipes him out', '牛市里盲目买入，直到一次回调把他清洗出局'], ['until the reaction', '直到回调']],
  ], reveal: true, rowAt: [0, 1, 2] },
], lines: [
  L('host', 'He sorts losers into three grades. The beginner, who lasts three to thirty weeks.', '他把输家分成三类。新手，能撑三到三十周。'),
  L('host', 'The semi-sucker, who quotes every rule and loves buying on declines. He lasts about three and a half years.', '"半吊子"，满口规则，最爱逢低买入，大约能撑三年半。'),
  L('host', 'And the plain sucker, who buys blindly in a bull market until a reaction wipes him out.', '还有纯粹的韭菜，在牛市里盲目买入，直到一次回调把他清洗出局。'),
] });

// =====================================================================
episode(4, 'The Earthquake and Saratoga', '地震与萨拉托加', { en: 'Chapter VI · 1906', zh: '原著第六章 · 1906年' }, '#5b3a1e', [
  L('host', 'Episode four. The earthquake, and Saratoga.', '第四集：地震与萨拉托加。'),
]);
{
  const [a, b] = HALF;
  shot({ id: 'e4_ac', kind: 'comic', panels: [
    P(a, { bg: 'boardwalk', chars: [ch('friend', a, 0.3, 0.95, { expr: 'shock' }), ch('larry', a, 0.73, 0.95, { expr: 'determined', flip: true, hat: 'boater', hatColor: '#e0c27a' })] }),
    P(b, { at: 2, bg: 'boardwalk', props: [{ t: 'svg', svg: '<g transform="translate(450 260)"><text text-anchor="middle" font-family="Bangers" font-size="90" fill="#fff" stroke="#16130f" stroke-width="8" paint-order="stroke">SELL U.P.</text><text y="90" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="52" fill="#f6d77a" stroke="#16130f" stroke-width="6" paint-order="stroke">1,000 + 1,000 + 1,000 + 2,000</text><text y="150" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="46" fill="#fff" stroke="#16130f" stroke-width="6" paint-order="stroke">卖空联合太平洋：共5,000股</text></g>' }] }),
  ], caps: [{ x: 70, y: 70, w: 520, en: 'Spring 1906. Atlantic City.', zh: '1906年春，大西洋城。' }],
  bubbles: [{ at: 1, x: 80, y: 180, w: 400, en: 'Are you crazy? Selling in a bull market?', zh: '你疯了吗？牛市里做空？', tx: 270, ty: 380 }],
  lines: [
    L('larry', 'Spring 1906. I was on vacation in Atlantic City, trading at the Harding Brothers branch on the Boardwalk. The market was bullish.', '1906年春，我在大西洋城度假，在哈丁兄弟公司的木板道分行交易。市场一片看涨。'),
    L('larry', 'Yet I felt an urge to sell Union Pacific. I had no reason. My friend thought I was crazy.', '可我却有一股冲动想卖空联合太平洋。没有任何理由。朋友觉得我疯了。'),
    L('larry', 'I sold a thousand, then another, then a third. The next day, as it slipped, I sold two thousand more. Five thousand: all my margin allowed.', '我卖了一千股，又一千股，再一千股。第二天它下滑时，我又卖了两千股。共五千股，保证金只够这么多。'),
  ] });
}
{
  const [a, b] = HALF;
  shot({ id: 'e4_quake', kind: 'comic', panels: [
    P(a, { bg: 'ruins' }),
    P(b, { bg: 'dark', props: [{ t: 'paper', x: 90, y: 90, w: 720, h: 560, en: 'SAN FRANCISCO DESTROYED BY EARTHQUAKE AND FIRE', zh: '旧金山毁于地震与大火', size: 52, rot: -2 }] }),
  ], sfx: [{ at: 2, x: 480, y: 640, t: '+$250,000', zh: '获利', size: 100, color: '#d9a441' }], lines: [
    L('larry', 'Then the news came: San Francisco had been wrecked by earthquake and fire.', '随后消息传来：旧金山被地震和大火摧毁。'),
    L('larry', 'Strangely, the market opened only a couple of points down, and recovered. As full reports came in, it began to slide. I sold five thousand more, then ten thousand more.', '奇怪的是，市场只低开了几个点就收复了。随着详细报道陆续传来，市场开始下滑。我又卖了五千股，接着再卖一万股。'),
    L('larry', 'The next day I covered everything. Profit: two hundred fifty thousand dollars, in a few days.', '第二天我全部回补。几天之内，利润二十五万美元。'),
  ] });
}
shot({ id: 'e4_pyr', kind: 'info', tag: { en: 'ANALYSIS', zh: '分析' }, title: { en: 'Adding Only as the Market Proves You Right', zh: '只在市场证明你正确时加仓' }, els: [
  { type: 'bars', x: 70, y: 260, w: 1100, h: 560, max: 22000, vsize: 26, bars: [
    { v: 3000, vl: '3,000', en: 'Day 1', zh: '第1天', color: '#2f5d8a' },
    { v: 5000, vl: '5,000', en: 'Day 2 (slips)', zh: '第2天（下滑）', color: '#2f5d8a' },
    { v: 5000, vl: '5,000', en: 'Quake news', zh: '地震消息', color: '#8a8a8a' },
    { v: 10000, vl: '10,000', en: 'Reports: slide', zh: '详细报道：下滑', color: '#b8322a', at: 1 },
    { v: 20000, vl: '20,000+', en: 'Break', zh: '暴跌', color: '#b8322a', at: 1 },
  ] },
  { type: 'cards', x: 1210, y: 260, w: 640, ch: 165, cols: 1, items: [
    { en: 'Start small; add only on confirmation.', zh: '小仓起步；确认后才加仓。' },
    { en: 'News is filtered through sentiment: a strong bull market shrugged off an earthquake for a day.', zh: '新闻经过情绪过滤：强势牛市对地震无视了一天。', at: 2 },
    { en: 'A "hunch" may be the mind adding up small signals before you can name them.', zh: '"预感"可能是大脑在你说清之前已累加了许多细小信号。', at: 3 },
  ] },
], lines: [
  L('host', 'Look at how the short was built: small at first, and larger only as the market proved him right.', '看看这笔空单是怎样建立的：起初很小，只在市场证明他正确时才加大。'),
  L('host', 'The final total isn\'t given in the book — at least twenty thousand shares.', '书中没有给出最终总数——至少两万股。'),
  L('host', 'Notice too: news is filtered through sentiment. In a strong bull market, even an earthquake was shrugged off for a day.', '还要注意：新闻会被情绪过滤。在强势牛市里，连地震都被无视了一天。'),
  L('host', 'As for hunches, he suggests they are the mind adding up many small signals before you can name them.', '至于预感，他认为那是大脑在你说出原因之前，已经累加了许多细小的信号。'),
] });
{
  const [a, b, c] = BIGL;
  shot({ id: 'e4_sara', kind: 'comic', panels: [
    P(a, { bg: 'office', bgo: { board: [['UNION PAC'], ['160 → 162']], hl: [1, 0] }, chars: [ch('larry', a, 0.45, 1.15, { expr: 'smile', pose: 'phone', exprAt: { 2: 'worry', 3: 'shock' } })] }),
    P(b, { at: 1, bg: 'study', bgo: { ticker: false }, chars: [ch('harding', b, 0.45, 0.8, { expr: 'angry', pose: 'phone', hy: 0.5 })] }),
    P(c, { at: 3, bg: 'burst', bgo: { color: '#2f7d3a' } }),
  ], caps: [{ x: 70, y: 70, w: 460, en: 'Summer 1906. Saratoga Springs.', zh: '1906年夏，萨拉托加温泉。' }],
  bubbles: [{ at: 1, x: 1200, y: 60, w: 330, en: 'You\'re a plain sucker! Insiders are unloading on you!', zh: '你就是个大傻瓜！内部人在把股票倒给你！', tx: 1450, ty: 300, size: 24, zsize: 21 }],
  sfx: [{ at: 3, x: 1525, y: 610, t: '10% DIVIDEND!', zh: '派发10%股息！', size: 70, color: '#fff' }], lines: [
    L('larry', 'That summer at Saratoga, Union Pacific acted as if it were being accumulated. I bought from about 160, in lots of five hundred.', '那年夏天在萨拉托加，联合太平洋的走势像是有人在吸筹。我从160左右开始，每次五百股买入。'),
    L('harding', 'You\'re a plain sucker! The insiders are unloading on you!', '你就是个大傻瓜！内部人正在把股票倒给你！'),
    L('larry', 'Ed Harding was smart, and my friend. So I sold my longs and went short four thousand, mostly around 162.', '艾德·哈丁很聪明，又是我的朋友。于是我卖掉多单，在162附近做空了四千股。'),
    L('larry', 'The next day the directors declared a ten percent dividend. My cover order was filled as high as 172 and 174.', '第二天董事会宣布派发10%股息。我的回补单最高在172和174成交。'),
  ] });
}
shot({ id: 'e4_cost', kind: 'info', tag: { en: 'THE PRICE OF DOUBT', zh: '动摇的代价' }, title: { en: 'Saratoga: Trust Your Own Reading', zh: '萨拉托加：相信自己的判断' }, els: [
  { type: 'table', x: 70, y: 260, w: 1000, widths: [0.45, 0.25, 0.3], cols: [['Step', '步骤'], ['Price', '价格'], ['Result', '结果']], rows: [
    [['Buy, 500-share lots', '分批买入，每次500股'], ['≈160', '约160'], ['his own read', '自己的判断']],
    [['Harding: "sucker!" → sell, short 4,000', '哈丁："傻瓜！"→卖出并做空4,000股'], ['≈162', '约162'], ['', '']],
    [['10% dividend → cover', '10%股息→回补'], ['up to 172–174', '最高172–174'], ['−$40,000', '亏4万美元']],
    [['Go long 4,000 overnight', '做多4,000股持仓一夜'], ['next morning', '次日早晨'], ['+$40,000 +≈$15,000', '收回4万并多赚约1.5万']],
  ], reveal: true, rowAt: [0, 0, 0, 1] },
  { type: 'quote', at: 2, x: 1110, y: 260, w: 740, size: 34, zsize: 28, en: 'A low price for a man to pay for not having the courage of his own convictions!', zh: '一个人没有勇气坚持自己的信念，付出这样的代价算便宜了！', src: 'Ch. VI' },
], lines: [
  L('host', 'Following a friend\'s suspicion over his own reading cost him forty thousand dollars.', '听从朋友的怀疑、放弃自己的判断，让他付出了四万美元。'),
  L('host', 'He then went long four thousand, held overnight, and got the forty thousand back plus about fifteen thousand.', '他随即做多四千股，持仓一夜，收回了四万美元，还多赚了约一万五千。'),
  L('larry', 'A low price for a man to pay for not having the courage of his own convictions!', '对一个没有勇气坚持自己信念的人来说，这个代价算便宜了！'),
  L('host', 'After this, he focused on basic conditions, not on individual stocks.', '从此以后，他关注的是基本面大势，而不是个股。'),
] });

// =====================================================================
episode(5, 'The Method', '方法论', { en: 'Chapters VII & X', zh: '原著第七、十章' }, '#1f3354', [
  L('host', 'Episode five. The method.', '第五集：方法论。'),
]);
shot({ id: 'e5_scale', kind: 'info', tag: { en: 'METHOD 1', zh: '方法一' }, title: { en: 'Buy on a Rising Scale — and Read Your Fills', zh: '上涨中逐级买入——并读懂你的成交' }, els: [
  { type: 'line', x: 70, y: 250, w: 1180, h: 580, xr: [0, 10], yr: [109, 116.5], yTicks: [110, 112, 114, 116], yLabel: ['Price', '价格'],
    series: [{ pts: [[0, 110], [1.5, 111], [3, 112.5], [4, 114], [5.5, 113], [6.4, 112.25], [7.4, 113.75], [8.3, 114.5], [9.4, 115.5]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 1, 1, 1, 3, 3] }],
    hlines: [{ v: 111.75, at: 0, label: ['Avg cost 111¾', '均价111¾'], color: '#8a5a2b', x1: 6 }],
    notes: [
      { x: 0, y: 110, en: 'Buy 2,000 @110', zh: '110买2,000', dx: 10, dy: 30, w: 190 },
      { x: 1.5, y: 111, en: '+2,000 @111', zh: '111再买2,000', dx: 10, dy: 40, w: 190 },
      { x: 4, y: 114, en: '+2,000 → 6,000 sh; stop & wait', zh: '再买2,000→共6,000股；停手等待', dx: -300, dy: -130, w: 280 },
      { x: 6.4, y: 112.25, at: 1, en: 'Reaction to 112¼', zh: '回调至112¼', dx: -70, dy: 50, w: 180 },
      { x: 7.4, y: 113.75, at: 1, en: 'Market order 4,000', zh: '市价买4,000', dx: 10, dy: 70, w: 210 },
      { x: 9.4, y: 115.5, at: 3, en: 'Fills climb 114→115½ = demand is real', zh: '成交价一路升到115½=需求真实', dx: -330, dy: -40, w: 280 },
    ] },
  { type: 'box', at: 2, x: 1290, y: 250, w: 560, color: '#f3c6c0', en: 'All 4,000 filled at 113¾? Too easy. Something is wrong → test-sell 1,000.', zh: '4,000股全在113¾成交？太容易了，有问题→卖1,000股测试。', size: 28 },
  { type: 'box', at: 3, x: 1290, y: 520, w: 560, color: '#cfe3c4', en: 'Fills at rising prices? Buyers are competing. You are right.', zh: '成交价逐步走高？买家在抢筹。你是对的。', size: 28 },
], lines: [
  L('host', 'Now the method. Buy two thousand at 110. If it rises to 111, buy two thousand more. If it keeps rising, buy a third lot.', '现在讲方法。110买两千股；涨到111，再买两千股；继续上涨，买第三批。'),
  L('host', 'With six thousand shares, averaging 111¾, he stops and waits for a reaction. It dips to 112¼, then rallies. At 113¾ he sends a market order for four thousand.', '持有六千股、均价111¾后，他停手等待回调。股价回落到112¼后反弹。在113¾时，他下了四千股的市价买单。'),
  L('host', 'If all four thousand fill at 113¾, that\'s too easy. Supply is plentiful. Something\'s wrong, so he tests by selling a thousand.', '如果四千股全部在113¾成交，那就太容易了，说明卖盘充足。有问题，于是他卖出一千股来测试。'),
  L('host', 'But if the fills climb, 114, 114½, up to 115½, buyers are competing. He is right.', '如果成交价一路上升，114、114½，直到115½，说明买家在抢筹。他是对的。'),
] });
shot({ id: 'e5_rules', kind: 'info', tag: { en: 'RULES', zh: '规则' }, title: { en: 'Position-Building Rules', zh: '建仓规则' }, els: [
  { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, items: [
    { en: 'Never put on the whole line at once. Begin with a part of it.', zh: '永远不要一次建满仓。先建一部分。' },
    { en: 'No second trade unless the first shows a profit. Wait and watch.', zh: '第一笔不盈利，就不做第二笔。等待，观察。', at: 1 },
    { en: 'Buy on a rising scale; sell short on a falling scale.', zh: '在上涨中逐级买入；在下跌中逐级卖空。', at: 1 },
    { en: '"Stocks are never too high to begin buying or too low to begin selling."', zh: '"股票永远不会高到不能开始买，也不会低到不能开始卖。"', at: 2 },
    { en: 'If the first lot shows a loss, you are wrong — at least for now.', zh: '如果第一笔亏损，你就错了——至少暂时如此。', at: 3 },
    { en: 'Timing matters more than the cheapest price.', zh: '时机比最便宜的价格更重要。', at: 3 },
  ] },
], lines: [
  L('host', 'The rules behind it. Never put on your whole line at once. Begin with a part.', '背后的规则：永远不要一次建满仓，先建一部分。'),
  L('host', 'Don\'t make a second trade unless the first shows a profit. Buy on a rising scale, sell short on a falling one.', '第一笔不盈利，就不做第二笔。上涨中逐级买入，下跌中逐级卖空。'),
  L('larry', 'Stocks are never too high to begin buying, or too low to begin selling.', '股票永远不会高到不能开始买，也不会低到不能开始卖。'),
  L('host', 'And if the first lot shows a loss, you are wrong, at least for the time being. Don\'t add.', '如果第一笔出现亏损，你就是错的，至少暂时是错的。不要加仓。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e5_white', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('keene', a, 0.6, 1.0, { expr: 'think', pose: 'chin', beard: 'goatee', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'office', bgo: { board: [['SUGAR'], ['↑ ↑ ↑']], hl: [1, 0] }, props: [{ t: 'svg', svg: '<g transform="translate(450 560)"><text text-anchor="middle" font-family="Bangers" font-size="62" fill="#fff" stroke="#16130f" stroke-width="7" paint-order="stroke">SELL 10,000 · SELL 10,000</text><text y="80" text-anchor="middle" font-family="Bangers" font-size="70" fill="#f6d77a" stroke="#16130f" stroke-width="7" paint-order="stroke">BUY 30,000!</text><text y="140" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="40" fill="#fff" stroke="#16130f" stroke-width="6" paint-order="stroke">卖1万 · 卖1万 · 买3万！</text></g>' }] }),
  ], caps: [{ x: 70, y: 70, w: 520, en: 'Deacon S. V. White tests a tip.', zh: '执事S.V.怀特检验一条消息。' }], lines: [
    L('host', 'He tells how the veteran Deacon S. V. White handled a tip that Havemeyer was buying Sugar.', '他讲到老练的执事S.V.怀特如何处理一条"哈夫迈耶在买糖业股"的消息。'),
    L('host', 'White didn\'t buy. He sold ten thousand shares, watched how the market took them, and sold ten thousand more.', '怀特没有买，而是先卖出一万股，观察市场如何承接，然后又卖了一万股。'),
    L('host', 'The market absorbed all twenty thousand and kept rising: real buying. So he bought thirty thousand, covering his short and going long ten thousand.', '市场吃下了两万股还在上涨：买盘是真的。于是他买进三万股，回补空头并净多一万股。'),
    L('host', 'A tip is something to test, not something to obey.', '消息是用来检验的，不是用来服从的。'),
  ] });
}
shot({ id: 'e5_lolr', kind: 'info', tag: { en: 'METHOD 2', zh: '方法二' }, title: { en: 'The Line of Least Resistance', zh: '最小阻力线' }, els: [
  { type: 'line', x: 70, y: 250, w: 1200, h: 580, xr: [0, 20], yr: [114, 142], yTicks: [120, 130, 140], yLabel: ['Price', '价格'],
    bands: [{ y0: 120, y1: 130, x1: 13, label: ['Trading range: wait', '震荡区间：等待'], color: '#d9a441' }],
    hlines: [{ v: 130, label: ['Resistance 130: selling > buying', '阻力130：卖压>买盘'], color: '#b8322a', x1: 13, lx: 13 }, { v: 120, below: true, label: ['Support 120: buying > selling', '支撑120：买盘>卖压'], color: '#2f7d3a', x1: 13, lx: 13 }],
    series: [{ pts: [[0, 122], [1.5, 129], [3, 121], [4.5, 129.5], [6, 120.5], [7.5, 128], [9, 121.5], [10.5, 129], [12, 124], [13, 131], [14.5, 133.5], [16, 132.5], [18, 137], [20, 140]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2] }],
    notes: [{ x: 13, y: 131, at: 2, en: 'Breakout: the wrong side must reverse', zh: '突破：站错边的人被迫反手', dx: 40, dy: 50, w: 300 }] },
  { type: 'cards', x: 1310, y: 250, w: 540, ch: 170, cols: 1, items: [
    { en: 'Don\'t guess the direction inside the range.', zh: '区间内不要猜方向。', at: 1 },
    { en: 'Act when the price breaks the limit.', zh: '价格突破边界时才行动。', at: 2 },
    { en: 'Two allies: basic conditions, and the men who are wrong.', zh: '两个盟友：基本状况，以及判断错误的人。', at: 3 },
  ] },
], lines: [
  L('larry', 'Prices, like everything else, move along the line of least resistance.', '价格和其他一切事物一样，沿着最小阻力线运动。'),
  L('host', 'Between big moves a stock may swing from 120 to 130. At 130 selling outweighs buying; at 120, buying outweighs selling. Don\'t guess which way it will break.', '大行情之间，股价可能在120到130间来回。到130卖压大于买盘，到120买盘大于卖压。不要猜它会往哪边突破。'),
  L('host', 'Wait until it breaks the limit. Then everyone who was wrong must reverse, and that pushes the price further along the line.', '等它突破边界。那时所有判断错误的人都必须反手，这会把价格沿着阻力线推得更远。'),
  L('host', 'Two forces work for the trader who is right: basic conditions, and the men who are wrong.', '有两股力量在帮助判断正确的交易者：基本状况，以及那些判断错误的人。'),
] });
shot({ id: 'e5_wheat', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Wheat Breaks Out of $1.10 – $1.20', zh: '小麦突破1.10–1.20美元区间' }, els: [
  { type: 'line', x: 70, y: 250, w: 1780, h: 580, xr: [0, 30], yr: [1.07, 1.27], yTicks: [1.10, 1.15, 1.20, 1.25], yDec: 2, yPre: '$', yLabel: ['Wheat, $/bushel', '小麦 美元/蒲式耳'],
    bands: [{ y0: 1.10, y1: 1.20, x1: 22, label: ['Months in a range', '数月横盘'] }],
    hlines: [{ v: 1.20, label: ['Buy only above $1.20', '只在1.20上方买'], color: '#b8322a', x1: 22, lx: 13 }],
    series: [{ pts: [[0, 1.12], [3, 1.18], [6, 1.11], [9, 1.17], [12, 1.12], [15, 1.14], [18, 1.17], [21, 1.192], [22, 1.205], [24, 1.21], [26, 1.22], [28, 1.23], [30, 1.25]], color: '#8a5a2b', reveal: [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2] }],
    notes: [{ x: 15, y: 1.14, en: 'Friends ask at $1.14: "wait"', zh: '朋友在1.14问："等等"', dx: -120, dy: 50, w: 240 }, { x: 22, y: 1.205, at: 1, en: 'Closes > $1.19, opens $1.20½ → BUY', zh: '收于1.19上方，开盘1.20½→买入', dx: -360, dy: -100, w: 300 }, { x: 30, y: 1.25, at: 2, en: '$1.21, 1.22, 1.23, 1.25', zh: '1.21、1.22、1.23、1.25', dx: -300, dy: 40, w: 240 }] },
], lines: [
  L('larry', 'Wheat traded between $1.10 and $1.20 for months. At $1.14, friends asked me whether to buy. I said: wait until it crosses $1.20.', '小麦在1.10到1.20美元间横盘数月。1.14美元时，朋友问我要不要买。我说：等它突破1.20再说。'),
  L('larry', 'It closed above $1.19, and opened the next day at $1.20½. I bought.', '它收在1.19上方，第二天开盘1.20½。我买入。'),
  L('larry', 'It went to $1.21, $1.22, $1.23, $1.25. Later we learned Europe had been buying quietly, and many traders were short.', '它涨到1.21、1.22、1.23、1.25。后来才知道，欧洲一直在悄悄买入，而很多交易员在做空。'),
] });
shot({ id: 'e5_cotton', kind: 'info', tag: { en: 'METHOD 3 · AND A MISTAKE', zh: '方法三 · 以及一次错误' }, title: { en: 'Probing a Market Without Forcing It', zh: '试探市场，而不是强推市场' }, els: [
  { type: 'box', x: 70, y: 260, w: 820, color: '#f3c6c0', en: 'THE MISTAKE: cotton ≈12¢ in a narrow range. He bought 50,000 bales to force a breakout. It rose while he bought and sank when he stopped. 4–5 times ≈ −$200,000.', zh: '错误：棉花在12美分附近窄幅震荡。他买五万包想强行推动突破。他买就涨，一停就跌。四五次，亏约20万美元。', size: 28 },
  { type: 'table', at: 2, x: 940, y: 260, w: 910, widths: [0.5, 0.5], cols: [['His proper system', '正确方法'], ['Action', '操作']], rows: [
    [['Start', '开始'], ['Buy 10,000 bales', '买1万包']],
    [['Up 10 points', '涨10点'], ['Buy 10,000 more', '再买1万包']],
    [['Up 20 points ($1/bale profit)', '涨20点（每包赚1美元）'], ['Buy 20,000 more', '再买2万包']],
    [['First lots show a loss', '最初几批亏损'], ['GET OUT', '离场']],
    [['Cost of probes', '试探成本'], ['$50,000–60,000 — cheap', '5–6万美元——很便宜']],
  ] },
], lines: [
  L('larry', 'I once broke my own rule in cotton. Near twelve cents, in a narrow range, I tried to push it through by buying fifty thousand bales.', '我曾在棉花上违背自己的规则。棉价在12美分附近窄幅震荡，我买了五万包，想把它推上去。'),
  L('larry', 'It rose while I bought, and sank when I stopped. I did it four or five times. It cost me about two hundred thousand dollars.', '我买它就涨，我一停它就跌。如此四五次，损失约二十万美元。'),
  L('host', 'His proper system: buy ten thousand bales. Up ten points, buy ten thousand more. At twenty points profit, buy twenty thousand more.', '他的正确方法：先买一万包；涨十点，再买一万包；盈利二十点时，再买两万包。'),
  L('host', 'If the first lots show a loss, get out. The probes may cost fifty or sixty thousand dollars: cheap, before a big bet.', '如果最初几批亏损，就离场。这些试探可能花掉五六万美元——在下重注之前，这很便宜。'),
] });
shot({ id: 'e5_hope', kind: 'info', tag: { en: 'PSYCHOLOGY', zh: '交易心理' }, title: { en: 'Hope, Fear — and Pat Hearne', zh: '希望、恐惧——以及帕特·赫恩' }, els: [
  { type: 'box', x: 70, y: 260, w: 860, color: '#fbf3df', en: 'Pat Hearne: "You can\'t tell till you bet." Buy 100; add 100 after each 1% rise; stop 1 point below the last buy.', zh: '帕特·赫恩："不下注就无从知道。"先买100股；每涨1%加100股；止损设在最后买入价下方1点。', size: 29 },
  { type: 'table', at: 2, x: 980, y: 260, w: 870, widths: [0.3, 0.35, 0.35], headColor: '#5b3a1e', cols: [['', ''], ['Instinct', '本能'], ['Discipline', '纪律']], rows: [
    [['Losing trade', '亏损时'], ['Hope it comes back', '希望它涨回来'], ['FEAR it gets worse → cut it', '恐惧亏损扩大→止损']],
    [['Winning trade', '盈利时'], ['Fear losing the profit', '害怕失去利润'], ['HOPE it grows → hold it', '期待利润扩大→持有']],
  ] },
  { type: 'quote', at: 3, x: 70, y: 590, w: 1780, size: 36, zsize: 30, en: 'Instead of hoping he must fear; instead of fearing he must hope.', zh: '他必须在想要希望时恐惧，在想要恐惧时希望。', src: 'Ch. X' },
], lines: [
  L('host', 'An old-timer\'s story about the gambler Pat Hearne: you can\'t tell till you bet.', '一位老前辈讲到赌客帕特·赫恩的名言：不下注就无从知道。'),
  L('host', 'Hearne bought a hundred shares, added a hundred after each one-percent rise, and kept a stop one point below his last purchase.', '赫恩先买一百股，每涨1%加一百股，并把止损放在最后一次买入价下方一点。'),
  L('host', 'The speculator\'s deadly enemies are inside him: hope and fear. Instinct hopes when it should fear, and fears when it should hope.', '投机者最致命的敌人在他内心：希望与恐惧。本能总在该恐惧时希望，在该希望时恐惧。'),
  L('larry', 'Instead of hoping he must fear. Instead of fearing he must hope.', '他必须在想要希望时恐惧，在想要恐惧时希望。'),
] });

// =====================================================================
episode(6, 'The Panic of 1907', '1907年大恐慌', { en: 'Chapters VIII – IX', zh: '原著第八至九章' }, '#7a1f1a', [
  L('host', 'Episode six. The panic of 1907.', '第六集：1907年大恐慌。'),
]);
{
  const [a, b] = HALF;
  shot({ id: 'e6_early', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('larry', a, 0.62, 1.0, { expr: 'determined', pose: 'paper', headline: 'BEAR!', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'dark', chars: [ch('larry', b, 0.5, 1.05, { expr: 'sad', pose: 'up', hy: 0.55 })] }),
  ], caps: [{ x: 70, y: 70, w: 500, en: '1906: "Sell stocks!"', zh: '1906年："卖出股票！"' }],
  sfx: [{ at: 2, x: 1420, y: 180, t: 'RIGHT & BUSTED', zh: '看对了，却破产了', size: 70, color: '#f6d77a' }], lines: [
    L('larry', 'In 1906 I turned bearish. The Boer War, the San Francisco earthquake: real wealth had been destroyed. Money would get tight.', '1906年我转为看空。布尔战争、旧金山地震，大量真实财富被毁，资金必将吃紧。'),
    L('larry', 'I was right about the market, but I sold too soon. It rallied, again and again, and it cleaned me out.', '我对市场的判断是对的，但我卖得太早。市场一次又一次反弹，把我清洗出局。'),
    L('larry', 'I was right and busted. I should have walked, not sprinted.', '我看对了，却破产了。我本该慢慢走，而不是拼命冲刺。'),
  ] });
}
shot({ id: 'e6_signal', kind: 'info', tag: { en: 'READING CONDITIONS', zh: '研判大势' }, title: { en: 'Right Position, Wrong Play — Then the Signal', zh: '立场对，打法错——然后信号出现' }, els: [
  { type: 'box', x: 70, y: 260, w: 860, color: '#f3c6c0', en: '"My position was right but my play was wrong." Even in a true bear market, don\'t sell in bulk too early.', zh: '"我的立场是对的，但打法错了。"即使在真正的熊市，也不要过早重仓卖出。', size: 30 },
  { type: 'flow', at: 1, x: 70, y: 500, w: 1780, bh: 180, dir: 'h', size: 24, zsize: 21, nodes: [
    { en: 'Great Northern & N. Pacific: new stock, paid in installments', zh: '大北方与北太平洋：发行分期缴款新股', at: 1 },
    { en: 'St. Paul announces an issue — payable even sooner', zh: '圣保罗铁路也宣布发行——缴款更早', at: 2 },
    { en: 'A race for scarce money = money is tight', zh: '争抢稀缺资金＝银根紧张', at: 2 },
    { en: 'Short GN pfd ≈330 → down 60–70 pts by Feb 1907', zh: '约330做空大北方优先股→1907年2月跌60–70点', at: 3 },
  ] },
  { type: 'box', at: 3, x: 980, y: 260, w: 870, color: '#cfe3c4', en: 'Also: Reading, 111 → 92 in minutes on his selling.', zh: '另外：他的卖单让雷丁铁路几分钟内从111跌到92。', size: 30 },
], lines: [
  L('host', 'His diagnosis: my position was right, but my play was wrong. Even in a real bear market, don\'t sell in bulk too early.', '他的诊断：我的立场是对的，但打法错了。即便在真正的熊市，也不要过早重仓卖出。'),
  L('host', 'Then came a signal. Great Northern and Northern Pacific advertised new stock issues, payable in installments.', '然后信号出现了：大北方铁路和北太平洋发布了分期缴款的新股发行公告。'),
  L('host', 'St. Paul announced an issue of its own, payable even earlier. To him it was a race for scarce money: a signed confession that money was tight.', '圣保罗铁路也宣布发行，缴款日更早。在他看来，这是在争抢稀缺资金——等于白纸黑字承认银根紧张。'),
  L('host', 'He shorted Great Northern preferred around 330. By February 1907 it had fallen sixty or seventy points.', '他在330附近做空大北方优先股。到1907年2月，它已经跌了六七十点。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e6_ana', kind: 'comic', panels: [
    P(a, { bg: 'beach', chars: [ch('larryHat', a, 0.55, 1.0, { expr: 'smile', hat: 'boater', hatColor: '#e0c27a', pose: 'paper', headline: 'ANACONDA 300', hy: 0.5 })] }),
    P(b, { at: 2, bg: 'night', props: [{ t: 'svg', svg: '<g transform="translate(450 330)"><text text-anchor="middle" font-family="Bangers" font-size="120" fill="#fff" stroke="#16130f" stroke-width="10" paint-order="stroke">WIRES DOWN</text><text y="100" text-anchor="middle" font-family="Noto Sans SC" font-weight="900" font-size="56" fill="#f6d77a" stroke="#16130f" stroke-width="8" paint-order="stroke">电报线中断</text><text y="200" text-anchor="middle" font-family="Special Elite" font-size="70" fill="#fff">ANA … 292</text></g>' }] }),
  ], caps: [{ x: 70, y: 70, w: 460, en: 'Palm Beach, early 1907.', zh: '1907年初，棕榈滩。' }], lines: [
    L('larry', 'In Palm Beach I saw Anaconda about to cross 300. When a stock crosses 100, 200 or 300 for the first time, it usually keeps going.', '在棕榈滩，我看到阿纳康达即将突破300。股票首次突破100、200或300时，通常会继续上涨。'),
    L('larry', 'I bought thirty-two thousand quarter shares, equal to eight thousand full shares, expecting a quick run to 340.', '我买了三万两千股四分之一面值股，相当于八千股整股，期待它很快冲到340。'),
    L('larry', 'Then a storm cut the wires. The only quote all day was Anaconda, 292.', '然后一场风暴切断了电报线。整整一天，只收到一个报价：阿纳康达，292。'),
  ] });
}
shot({ id: 'e6_anachart', kind: 'info', tag: { en: 'METHOD 4', zh: '方法四' }, title: { en: 'Decide Your Failure Point in Advance', zh: '事先设定"判错点"' }, els: [
  { type: 'line', x: 70, y: 250, w: 1200, h: 580, xr: [0, 10], yr: [288, 314], yTicks: [290, 295, 300, 305, 310], yLabel: ['Anaconda', '阿纳康达'],
    hlines: [{ v: 310, label: ['Real breakout should run to 310', '真突破应直冲310'], color: '#2f7d3a' }, { v: 301, below: true, label: ['Failure point 301', '判错点301'], color: '#b8322a' }],
    series: [{ pts: [[0, 300], [2, 292], [3.5, 298], [5, 302.75], [6.5, 301], [7.6, 299], [10, 295.5]], color: '#2f5d8a', reveal: [0, 0, 0, 0, 1, 1, 3] }],
    notes: [{ x: 0, y: 300, en: 'Buys ≈300', zh: '约300买入', dx: 10, dy: 40, w: 160 }, { x: 2, y: 292, en: 'Storm day: 292', zh: '风暴日：292', dx: 20, dy: 20, w: 180 }, { x: 5, y: 302.75, en: 'High 302¾ — stalls', zh: '高点302¾——停滞', dx: -90, dy: -100, w: 220 }, { x: 6.5, y: 301, at: 1, en: 'Touches 301 → SELL ALL at market', zh: '触及301→全部市价卖出', dx: 40, dy: -120, w: 260 }, { x: 10, y: 295.5, at: 3, en: 'Next day: below 296, keeps falling', zh: '次日：低于296，持续下跌', dx: -300, dy: -40, w: 250 }] },
  { type: 'cards', x: 1310, y: 250, w: 540, ch: 170, cols: 1, items: [
    { en: 'Define "proof of wrong" before you trade.', zh: '交易前就定义"错了的证据"。' },
    { en: 'Exit at the market: "When you want to get out, get out."', zh: '市价出场："想出场时就出场。"', at: 2 },
    { en: 'Result: out near cost, before the slide.', zh: '结果：在暴跌前以接近成本价出场。', at: 3 },
  ] },
], lines: [
  L('host', 'Next day it opened at 298 and reached 302¾. He had set a test in advance: a real breakout should run to 310 without stopping. A fall back to 301 would mean the move was a fake.', '次日开盘298，冲高至302¾。他事先设好了检验标准：真突破应一口气冲到310。若回落到301，就说明是假突破。'),
  L('host', 'It touched 301. He sold all eight thousand shares at the market, over the telegraph operator\'s protest.', '它触及301。他不顾报务员的反对，以市价卖出全部八千股。'),
  L('larry', 'The only thing to do when a man is wrong is to be right by ceasing to be wrong.', '一个人犯错时，唯一该做的就是停止犯错，从而变得正确。'),
  L('host', 'He got out near cost. The next day Anaconda opened below 296, and kept falling.', '他以接近成本价出场。第二天，阿纳康达低于296开盘，并持续下跌。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e6_euro', kind: 'comic', panels: [
    P(a, { bg: 'beach', chars: [ch('larryHat', a, 0.55, 1.0, { expr: 'think', pose: 'paper', headline: 'SMELTERS +DIV', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'yacht', chars: [ch('larryHat', b, 0.5, 0.9, { expr: 'determined', hy: 0.42 })] }),
  ], caps: [{ x: 70, y: 70, w: 460, en: 'Summer 1907, in Europe.', zh: '1907年夏，在欧洲。' }], lines: [
    L('larry', 'That summer in Europe I read that Smelters had declared an extra dividend, and the market had rallied. In a bear market, that meant cliques were trying to unload.', '那年夏天在欧洲，我读到冶炼公司宣布额外分红，市场随之反弹。在熊市里，这意味着有人想借机出货。'),
    L('larry', 'I cabled orders to sell, and sailed home a month early, with over half a million dollars in cash for margin.', '我发电报下了卖单，并提前一个月乘船回国，带着五十多万美元现金作保证金。'),
  ] });
}
shot({ id: 'e6_money', kind: 'info', tag: { en: 'CONDITIONS', zh: '基本状况' }, title: { en: 'October 1907: Money Runs Out', zh: '1907年10月：资金枯竭' }, els: [
  { type: 'bars', x: 70, y: 260, w: 900, h: 560, max: 160, bars: [
    { v: 6, vl: '6%', en: 'National City Bank\'s usual ceiling', zh: '花旗银行惯常上限', color: '#2f7d3a' },
    { v: 150, vl: '100–150%', en: 'Call money, Oct 1907', zh: '1907年10月隔夜拆借', color: '#b8322a', at: 1 },
  ] },
  { type: 'flow', at: 2, x: 1010, y: 260, w: 840, dir: 'v', bh: 150, size: 26, nodes: [
    { en: 'Money tighter', zh: '资金更紧', at: 2 },
    { en: 'Call rates higher', zh: '拆借利率更高', at: 2 },
    { en: 'Stock prices lower', zh: '股价更低', at: 2 },
  ] },
], lines: [
  L('host', 'By October 1907, brokers couldn\'t borrow. Call money, normally around six percent at the big banks, ran between one hundred and one hundred fifty percent a year.', '到1907年10月，经纪商借不到钱。大银行通常约6%的隔夜拆借，年利率涨到了100%到150%。'),
  L('host', 'His reading of it: as money got tighter, call rates went higher, and stock prices went lower.', '他的解读是：资金越紧，拆借利率越高，股价越低。'),
  L('host', 'This is what studying general conditions means.', '这就是"研究整体状况"的含义。'),
] });
{
  const [a, b, c] = BIGL;
  shot({ id: 'e6_oct24', kind: 'comic', panels: [
    P(a, { bg: 'floor', chars: [ch('banker', a, 0.5, 1.1, { expr: 'shout', pose: 'fist', hat: 'bowler', hatColor: '#1d1d1d', at: 1 })] }),
    P(b, { at: 2, bg: 'street', bgo: { crowd: true } }),
    P(c, { at: 3, bg: 'study', chars: [ch('larry', c, 0.65, 0.8, { expr: 'smile', pose: 'phone', hy: 0.5 })] }),
  ], caps: [{ x: 70, y: 70, w: 520, en: 'October 24, 1907. The Money Post.', zh: '1907年10月24日，资金柱前。' }],
  bubbles: [{ at: 1, x: 120, y: 200, w: 520, en: 'I am authorized to lend ten million dollars!', zh: '我受权放贷一千万美元！', tx: 480, ty: 420, kind: 'shout' }],
  sfx: [{ at: 4, x: 1525, y: 140, t: 'BUY 100,000!', zh: '买入十万股！', size: 70, color: '#f6d77a' }], lines: [
    L('larry', 'On October 24, 1907, about a hundred brokers crowded the Money Post. There was no money at all.', '1907年10月24日，大约一百名经纪人挤在资金柱前，却一分钱也借不到。'),
    L('banker', 'I am authorized to lend ten million dollars!', '我受权放贷一千万美元！'),
    L('larry', 'J. P. Morgan had organized the banks. At one point there wasn\'t a single bid for Union Pacific. I could have sold more, and perhaps forced the Exchange to close.', 'J.P.摩根组织了各家银行。有一刻，联合太平洋连一个买盘都没有。我本可以继续卖空，甚至可能逼得交易所关门。'),
    L('larry', 'Instead, a friend brought word from the bankers asking me not to sell any more. I covered my shorts, and bought a hundred thousand shares.', '但一位朋友带来银行家的口信，请我不要再卖了。我回补了空头，并买入十万股。'),
    L('larry', 'After the close that day, I was worth over a million dollars. For one day, I was king.', '那天收盘后，我的身家超过一百万美元。有那么一天，我是国王。'),
  ] });
}
shot({ id: 'e6_pillars', kind: 'info', tag: { en: 'FRAMEWORK', zh: '框架' }, title: { en: 'His Four Pillars', zh: '他的四大支柱' }, els: [
  { type: 'cards', x: 70, y: 260, w: 1780, ch: 135, cols: 2, items: [
    { en: 'Read the tape.', zh: '读盘。' },
    { en: 'Begin at the right time.', zh: '在正确的时机进场。' },
    { en: 'Sit tight on a correct position.', zh: '在正确的仓位上坐得住。' },
    { en: 'Study general conditions to anticipate probabilities — his greatest discovery.', zh: '研究整体状况以预判概率——他最重要的发现。', color: '#f6d77a' },
  ] },
  { type: 'quote', at: 2, x: 160, y: 590, w: 1600, size: 36, zsize: 30, en: 'What is the use of being right unless you get all the good possible out of it?', zh: '如果不能充分利用正确的判断，正确又有什么用？', src: 'Ch. IX' },
], lines: [
  L('host', 'His four pillars: read the tape; begin at the right time; sit tight; and his greatest discovery, study general conditions to anticipate probabilities.', '他的四大支柱：读盘；在正确的时机进场；坐得住；以及他最重要的发现——研究整体状况以预判概率。'),
  L('host', 'Notice too: at the climax of the panic he covered into the selling, when there were almost no other buyers.', '还要注意：恐慌高潮时，他在几乎没有其他买家的时候回补。'),
  L('larry', 'What is the use of being right, unless you get all the good possible out of it?', '如果不能把正确的判断充分利用，正确又有什么用？'),
] });

// =====================================================================
episode(7, 'The Fall', '坠落', { en: 'Chapters XI – XIII', zh: '原著第十一至十三章' }, '#3a3d46', [
  L('host', 'Episode seven. The fall.', '第七集：坠落。'),
]);
shot({ id: 'e7_corn', kind: 'info', tag: { en: 'TACTICS', zh: '战术' }, title: { en: 'Escaping a Corn Squeeze with Oats', zh: '用燕麦逃出玉米逼空' }, els: [
  { type: 'flow', x: 70, y: 260, w: 1780, bh: 270, size: 25, zsize: 22, nodes: [
    { num: 1, en: 'Short 10M bu corn. "Stratton" corners corn.', zh: '做空1000万蒲式耳玉米。"斯特拉顿"逼空玉米。' },
    { num: 2, en: 'Place orders: buy 500,000 bu at every ⅛¢ down.', zh: '挂单：每跌⅛美分买50万蒲式耳。', at: 1 },
    { num: 3, en: '4 brokers sell 50,000 oats each at once (Stratton held oats too).', zh: '4家经纪商同时各卖5万蒲式耳燕麦（燕麦也在斯特拉顿手里）。', at: 1 },
    { num: 4, en: 'Traders think Stratton is attacked; sell corn. He buys 6M bu in 10 min.', zh: '交易员以为斯特拉顿遭狙击，抛售玉米。他10分钟买进600万。', at: 2 },
  ] },
  { type: 'box', at: 3, x: 70, y: 580, w: 1780, color: '#cfe3c4', anchor: 'middle', en: 'All 10M covered within ½¢. Oats cost $3,000. Net grain loss: $25,000. Corn later rose 25¢.', zh: '一千万蒲式耳在½美分内全部回补。燕麦花了3,000美元。谷物净亏2.5万美元。玉米后来涨了25美分。', size: 32 },
], lines: [
  L('larry', 'Before the panic, I was short ten million bushels of wheat and ten million of corn in Chicago. Then a man the book calls Stratton cornered corn.', '恐慌前，我在芝加哥做空了一千万蒲式耳小麦和一千万蒲式耳玉米。后来一个书中叫斯特拉顿的人逼空了玉米。'),
  L('host', 'Bidding for ten million bushels would have driven the price up against him. So he placed buy orders at every eighth of a cent down, and had four brokers each sell fifty thousand oats at once.', '直接去买一千万蒲式耳，只会把价格推高。于是他在每跌八分之一美分处挂好买单，再让四家经纪商同时各卖五万蒲式耳燕麦。'),
  L('host', 'Traders thought someone big was attacking Stratton, and dumped corn. He bought six million bushels in ten minutes, and the rest at the market.', '交易员以为有大户在狙击斯特拉顿，纷纷抛售玉米。他十分钟内买进六百万蒲式耳，其余按市价买入。'),
  L('host', 'Net loss on the grain, after the wheat profit: just twenty-five thousand dollars. Corn later rose twenty-five cents.', '扣除小麦利润后，谷物净亏仅两万五千美元。玉米后来涨了二十五美分。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e7_july', kind: 'comic', panels: [
    P(a, { bg: 'cotton', chars: [ch('larry', a, 0.5, 0.95, { expr: 'think', pose: 'chin', hy: 0.36 })] }),
    P(b, { at: 2, bg: 'dark', props: [{ t: 'paper', x: 80, y: 80, w: 740, h: 600, paper: 'THE WORLD', en: 'JULY COTTON CORNERED BY LARRY LIVINGSTON', zh: '拉瑞·利文斯顿逼空七月棉花', size: 54, rot: 2 }] }),
  ], caps: [{ x: 70, y: 70, w: 420, en: 'Long 140,000 bales.', zh: '持有十四万包棉花。' }],
  sfx: [{ at: 2, x: 1460, y: 760, t: 'SOLD BY 10:10 A.M.', zh: '上午10:10前全部卖出', size: 60, color: '#f6d77a', rot: -4 }], lines: [
    L('larry', 'Another time, everyone was short July cotton. I bought, until I held a hundred and forty thousand bales.', '还有一次，所有人都在做空七月棉花。我一路买入，直到持有十四万包。'),
    L('larry', 'But a market that rises can still be unable to absorb a big line. How would I sell?', '但上涨的市场未必能承接大量抛售。我要怎么卖出？'),
    L('larry', 'Then the World ran a headline: July Cotton Cornered by Larry Livingston. By ten past ten I had sold all of it, mostly at the day\'s top prices.', '然后《世界报》登出头条："拉瑞·利文斯顿逼空七月棉花"。到十点十分，我已全部卖出，大部分在当日最高价附近。'),
    L('host', 'A big line must be sold when you can, not when you want to. Seize the moment the market can take it.', '大仓位要在能卖的时候卖，而不是想卖的时候卖。要抓住市场能承接的那一刻。'),
  ] });
}
{
  const [a, b] = HALF;
  shot({ id: 'e7_percy', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('percy', a, 0.5, 1.05, { expr: 'smile', pose: 'point', hy: 0.5 })] }),
    P(b, { at: 2, bg: 'study', bgo: { ticker: false }, chars: [ch('larry', b, 0.5, 1.05, { expr: 'worry', hy: 0.5, exprAt: { 3: 'sad' } })] }),
  ], bubbles: [{ at: 1, x: 80, y: 70, w: 520, en: 'My correspondents across the South all say it: cotton must go up.', zh: '我在南方各地的通讯员都这么说：棉花必涨。', tx: 380, ty: 300 }],
  sfx: [{ at: 3, x: 1420, y: 170, t: 'LONG 60,000 BALES', zh: '做多6万包', size: 66, color: '#f6d77a' }], lines: [
    L('larry', 'Then came Percy Thomas, the famous cotton operator: magnetic, brilliant, sincere, with ten thousand correspondents across the South.', '接着出现了著名的棉花作手珀西·托马斯：富有魅力、才华横溢、为人真诚，在南方各地有上万名通讯员。'),
    L('percy', 'My correspondents all across the South tell me the same thing. Cotton must go up.', '我在南方各地的通讯员都告诉我同一件事：棉花必涨。'),
    L('larry', 'I was bearish, and short cotton. He talked me out of my own judgment.', '我原本看空，并且做空棉花。他却说服我放弃了自己的判断。'),
    L('larry', 'I covered and went long sixty thousand bales: the most asinine play of my career. Then I bought more to hold the price up, to about a hundred fifty thousand.', '我回补空头，反手做多六万包——这是我职业生涯中最愚蠢的一招。接着我为了托住价格继续加仓，直到约十五万包。'),
  ] });
}
shot({ id: 'e7_reverse', kind: 'info', tag: { en: 'THE FATAL MISTAKE', zh: '致命错误' }, title: { en: 'He Sold the Winner and Kept the Loser', zh: '他卖掉了盈利的，留下了亏损的' }, els: [
  { type: 'table', x: 70, y: 260, w: 1780, widths: [0.2, 0.25, 0.25, 0.3], cols: [['Position', '仓位'], ['Status', '状态'], ['What he did', '他的做法'], ['What happened', '结果']], rows: [
    [['Wheat', '小麦'], ['Big, profitable', '大仓位，盈利'], ['SOLD it', '卖掉了'], ['Rose 20¢ without stopping — ≈$8M missed (his estimate)', '一口气涨20美分——错过约800万美元（他的估计）']],
    [['Cotton', '棉花'], ['Large, losing', '大仓位，亏损'], ['KEPT & ADDED to 440,000 bales', '保留并加到44万包'], ['Sold out; over 90% of his fortune gone', '最终清仓；九成以上财富化为乌有']],
  ], reveal: true, rowAt: [0, 2] },
  { type: 'quote', at: 3, x: 160, y: 620, w: 1600, size: 38, zsize: 32, en: 'Always sell what shows you a loss and keep what shows you a profit.', zh: '永远卖出亏损的，保留盈利的。', src: 'Ch. XII' },
], lines: [
  L('larry', 'I also held a big, profitable wheat position. Feeling unwell, I decided to lighten up. I sold the wheat, and kept the cotton.', '我还有一大笔盈利的小麦仓位。因身体不适，我决定减仓。我卖掉了小麦，留下了棉花。'),
  L('host', 'Wheat then rose twenty cents a bushel without stopping. By his own estimate, that could have made him about eight million dollars.', '此后小麦一口气涨了二十美分。按他自己的估计，这本可以让他赚到约八百万美元。'),
  L('host', 'He kept buying cotton, up to four hundred forty thousand bales, before he sold out. More than nine-tenths of his fortune was gone.', '他继续买棉花，直到四十四万包才清仓。他九成以上的财富化为乌有。'),
  L('larry', 'Always sell what shows you a loss, and keep what shows you a profit. I did the exact opposite.', '永远卖出亏损的，保留盈利的。我恰恰反着做了。'),
] });
shot({ id: 'e7_donts', kind: 'info', tag: { en: 'NEVER AGAIN', zh: '绝不再犯' }, title: { en: 'Four Don\'ts from the Cotton Disaster', zh: '棉花惨败的四条"不要"' }, els: [
  { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, items: [
    { en: 'Don\'t average a losing position.', zh: '不要摊平亏损仓位。', tagColor: '#b8322a' },
    { en: 'Don\'t buy to hold a price up.', zh: '不要为了托住价格而买入。', tagColor: '#b8322a', at: 1 },
    { en: 'Don\'t trade on another man\'s judgment — however brilliant he is.', zh: '不要按别人的判断交易——无论他多么出色。', tagColor: '#b8322a', at: 1 },
    { en: 'Don\'t make the market pay your bills. Needing quick money turns trading into gambling.', zh: '不要指望市场替你付账。急需用钱会让交易变成赌博。', tagColor: '#b8322a', at: 2 },
  ] },
], lines: [
  L('host', 'Of all speculative blunders, few are greater than trying to average a losing game.', '在所有投机错误中，很少有比摊平亏损更严重的。'),
  L('host', 'Buying to keep a price from falling is a sucker\'s play. And never trade another man\'s game, however brilliant he is.', '为了托住价格而买入是傻瓜的做法。永远不要玩别人的游戏，无论他多么出色。'),
  L('host', 'Soon after, needing two hundred thousand dollars fast, he tried to make the market pay a bill. That only leads to gambling.', '不久后，他急需二十万美元，试图让市场替他付账。这只会让交易沦为赌博。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e7_will', kind: 'comic', panels: [
    P(a, { bg: 'study', bgo: { ticker: false }, chars: [ch('williamson', a, 0.5, 1.05, { expr: 'smile', pose: 'money', hy: 0.5 })] }),
    P(b, { at: 2, bg: 'dark', chars: [ch('larry', b, 0.5, 1.05, { expr: 'sad', hy: 0.5, exprAt: { 4: 'determined' } })] }),
  ], caps: [{ x: 70, y: 70, w: 500, en: 'Williamson & Brown: $25,000 credit.', zh: '威廉森与布朗公司：两万五千美元信用额度。' }],
  bubbles: [{ at: 2, x: 80, y: 260, w: 400, en: 'Larry, I know something.', zh: '拉瑞，我知道些内情。', tx: 320, ty: 430 }],
  sfx: [{ at: 3, x: 1420, y: 170, t: 'OWES $150,000', zh: '欠债15万美元', size: 66, color: '#f6d77a' }], lines: [
    L('larry', 'Broke and in debt, I was offered a deal by Dan Williamson: a twenty-five thousand dollar credit, if I traded through his firm.', '在我破产负债之时，丹·威廉森给了我两万五千美元信用额度，条件是我通过他的公司交易。'),
    L('larry', 'In three weeks I made a hundred and twelve thousand. Then I turned bearish on a railroad run by his firm\'s biggest client, and went short.', '三周内我赚了十一万两千美元。后来我看空他公司最大客户控制的一条铁路，做了空。'),
    L('larry', 'Williamson quietly covered my short and put me long, saying he knew something. Out of gratitude, I let him.', '威廉森悄悄替我回补空头，反而让我做多，说他知道些内情。出于感激，我默许了。'),
    L('larry', 'I lost all my profit and ended up owing his firm a hundred fifty thousand dollars.', '我输光了全部利润，最后还欠了他公司十五万美元。'),
    L('larry', 'Later I understood. The firm was quietly selling a dying man\'s holdings. A famous bear\'s account made the perfect smoke screen, and keeping me in debt kept me out of the way.', '后来我才明白：这家公司正悄悄卖出一位将死之人的持股。著名空头的账户是完美的烟幕，而让我背着债，我就不会碍事。'),
  ] });
}
shot({ id: 'e7_loyal', kind: 'info', tag: { en: 'LESSON', zh: '教训' }, title: { en: 'Back Your Own Judgment — Always', zh: '永远相信自己的判断' }, els: [
  { type: 'quote', x: 160, y: 260, w: 1600, size: 44, zsize: 36, en: 'The tape is not chivalrous and moreover does not reward loyalty.', zh: '行情纸带不讲骑士风度，更不会奖励忠诚。', src: 'Ch. XIII' },
  { type: 'cards', at: 1, x: 70, y: 560, w: 1780, ch: 120, cols: 2, items: [
    { en: 'Gratitude or obligation must never override your judgment.', zh: '感激或人情绝不能凌驾于你的判断之上。', at: 1 },
    { en: 'Don\'t trade when you are sick, upset or "out of trim."', zh: '生病、心烦或状态不佳时不要交易。', at: 1 },
  ] },
], lines: [
  L('larry', 'The tape is not chivalrous, and moreover it does not reward loyalty.', '行情纸带不讲骑士风度，更不会奖励忠诚。'),
  L('larry', 'My business as a speculator is to back my own judgment, always.', '作为投机者，我的本分就是永远坚持自己的判断。'),
] });

// =====================================================================
episode(8, 'The Comeback', '东山再起', { en: 'Chapters XIV – XV', zh: '原著第十四至十五章' }, '#2f7d3a', [
  L('host', 'Episode eight. The comeback.', '第八集：东山再起。'),
]);
{
  const [a, b] = HALF;
  shot({ id: 'e8_bankrupt', kind: 'comic', panels: [
    P(a, { bg: 'dark', chars: [ch('larry', a, 0.5, 1.05, { expr: 'tired', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'court', props: [{ t: 'paper', x: 160, y: 120, w: 580, h: 420, en: 'LIVINGSTON FILES IN BANKRUPTCY', zh: '利文斯顿申请破产', size: 46 }] }),
  ], caps: [{ x: 70, y: 70, w: 460, en: '1911 – 1914: the lean years.', zh: '1911–1914：艰难岁月。' }], lines: [
    L('larry', 'Then came the lean years, 1911 to 1914. My debts grew to well over a million dollars, and worrying about them made me trade badly.', '接着是1911到1914年的艰难岁月。我的债务超过一百万美元，而对债务的焦虑让我交易失常。'),
    L('larry', 'So I went through bankruptcy. Most of my creditors released me voluntarily. Only then could I think clearly again.', '于是我申请了破产。大多数债权人主动免除了我的债务。直到那时，我才能重新清晰地思考。'),
    L('host', 'A speculator must give his whole mind to the work. Remove the burdens first.', '投机者必须全身心投入。先卸下精神负担。'),
  ] });
}
{
  const [a, b] = HALF;
  shot({ id: 'e8_wait', kind: 'comic', panels: [
    P(a, { bg: 'office', bgo: { board: [['BETHLEHEM'], ['90']], hl: [1, 0] }, chars: [ch('larryHat', a, 0.5, 1.0, { expr: 'worry', pose: 'cross', hy: 0.5 })] }),
    P(b, { at: 2, bg: 'office', bgo: { board: [['BETHLEHEM'], ['98 → 100+']], hl: [1, 0] }, chars: [ch('larryHat', b, 0.5, 1.0, { expr: 'determined', pose: 'fist', hy: 0.5 })] }),
  ], caps: [{ x: 70, y: 70, w: 460, en: 'February 1915. Only 500 shares.', zh: '1915年2月，只有500股额度。' }], lines: [
    L('larry', 'In February 1915, Williamson and Brown agreed to carry five hundred shares for me. That was all. My first trade had to win.', '1915年2月，威廉森与布朗公司同意为我承担五百股仓位。仅此而已。我的第一笔交易必须赢。'),
    L('larry', 'For six weeks I stayed away from that office and only read the tape at another broker\'s, where I couldn\'t trade.', '整整六周，我远离那家公司，只在另一家无法下单的经纪行看盘。'),
    L('larry', 'I was watching Bethlehem Steel. I meant to buy when it crossed 100.', '我盯着伯利恒钢铁，打算在它突破100时买入。'),
  ] });
}
shot({ id: 'e8_beth', kind: 'info', tag: { en: 'METHOD 5', zh: '方法五' }, title: { en: 'The Pivotal Point: Bethlehem Steel, 1915', zh: '关键点：1915年伯利恒钢铁' }, els: [
  { type: 'line', x: 70, y: 250, w: 1200, h: 580, xr: [0, 10], yr: [84, 150], yTicks: [90, 100, 115, 130, 145], yLabel: ['Bethlehem Steel', '伯利恒钢铁'],
    hlines: [{ v: 100, label: ['Par 100: pivotal point', '面值100：关键点'], color: '#b8322a' }],
    series: [{ pts: [[0, 86], [2, 90], [4, 95], [5.2, 98.5], [6.3, 114.5], [9, 145]], color: '#2f7d3a', reveal: [0, 0, 1, 1, 2, 2] }],
    notes: [{ x: 2, y: 90, en: 'At 90: "sweating blood" — waits', zh: '90："急得冒血汗"——继续等', dx: -60, dy: -250, w: 280 }, { x: 5.2, y: 98.5, at: 1, en: 'Buys 500 @ 98–99', zh: '98–99买入500股', dx: 30, dy: 30, w: 220 }, { x: 6.3, y: 114.5, at: 2, en: 'Closes ≈114–115: +500', zh: '收于约114–115：再买500', dx: -330, dy: -40, w: 260 }, { x: 9, y: 145, at: 2, en: 'Next day 145', zh: '次日145', dx: -230, dy: 20, w: 160 }] },
  { type: 'box', x: 1310, y: 250, w: 540, color: '#fbf3df', en: 'Each point of waiting cost $500 of profit (500 shares). He waited anyway.', zh: '每多等一个点，就少赚500美元（500股）。他还是等了。', size: 27 },
  { type: 'box', at: 3, x: 1310, y: 470, w: 540, color: '#f6d77a', en: 'Crossing 100, 200 or 300 for the first time → often 30–50 more points (his observation in that era).', zh: '首次突破100、200或300→常再涨30–50点（他对那个时代的观察）。', size: 27 },
], lines: [
  L('host', 'Every point he waited cost five hundred dollars of profit. At 90 he says he was sweating blood. But he waited.', '他每多等一个点，就少赚五百美元。到90时，他说自己急得冒出血汗。但他还是等了。'),
  L('host', 'At 98 the tape told him it was as good as through 100. He bought five hundred shares at 98 to 99.', '到98时，盘面告诉他突破100已成定局。他在98到99之间买入五百股。'),
  L('host', 'It closed around 114 or 115, and he bought five hundred more. The next day it was 145. He had his stake back.', '当天收在114或115左右，他又买了五百股。第二天股价到了145。他重新拥有了本钱。'),
  L('larry', 'Whenever a stock crosses 100, 200 or 300 for the first time, it nearly always keeps going up for thirty to fifty points.', '每当一只股票首次突破100、200或300时，它几乎总会继续上涨三十到五十点。'),
  L('host', 'Treat that as his observation of that era\'s markets. The lasting idea: wait for the pivotal point, then act decisively.', '这是他对那个时代市场的观察。经久不衰的是背后的原则：等待关键点，然后果断出手。'),
] });
shot({ id: 'e8_1916', kind: 'info', tag: { en: 'READING THE TOP', zh: '识别顶部' }, title: { en: '1916: When the Leaders Stop Leading', zh: '1916年：当龙头不再领涨' }, els: [
  { type: 'bars', x: 70, y: 260, w: 900, h: 560, max: 130000, vsize: 26, bars: [
    { v: 60000, vl: '60,000', en: 'Short 5,000 × 12 stocks', zh: '12只股票各空5,000股', color: '#b8322a', at: 1 },
    { v: 120000, vl: '120,000', en: 'All 12 show ≥4 pts profit → doubled', zh: '12只均盈利≥4点→加倍', color: '#7a1f1a', at: 2 },
  ] },
  { type: 'cards', x: 1010, y: 260, w: 840, ch: 128, cols: 1, items: [
    { en: 'Warning: leaders react 6–7 pts and don\'t come back, while others still rise.', zh: '警告：龙头回落6–7点后不再涨回，而其他股仍在涨。' },
    { en: 'Short the tired leaders; buy the new ones — until they stall too.', zh: '做空疲软的龙头；买新龙头——直到它们也停滞。', at: 1 },
    { en: 'Never try to sell at the top. Sell after a reaction with no rally.', zh: '永远别想卖在最高点。在回落且无反弹后卖出。', at: 3 },
    { en: '1916 result ≈ $3,000,000. Loyal to neither bulls nor bears.', zh: '1916年成绩≈300万美元。不忠于多头，也不忠于空头。', at: 4 },
  ] },
], lines: [
  L('larry', 'In 1916, a war-boom bull market, I stayed long. Late that year the leaders began to fail. They reacted six or seven points, and didn\'t come back.', '1916年战争景气带来牛市，我一直做多。到年底，领涨股开始失灵：回落六七点后就再也涨不回去。'),
  L('larry', 'I sold short five thousand shares of each tired leader, and bought the new leaders. When those stalled too, I sold them.', '我对每只疲软的龙头各做空五千股，同时买入新的领涨股。当它们也停滞时，我把它们也卖掉。'),
  L('host', 'Short sixty thousand shares across twelve stocks. When all twelve showed at least four points of profit, he doubled to a hundred twenty thousand.', '十二只股票共做空六万股。当十二只全部盈利至少四点时，他加倍到十二万股。'),
  L('host', 'A bull market doesn\'t end in a flash. Never try to sell at the top; sell after a reaction, if no rally follows.', '牛市不会瞬间结束。永远别想卖在最高点；在回落之后、反弹没有到来时卖出。'),
  L('host', 'His result for 1916: about three million dollars. He swore loyalty to neither side. His only concern was being right.', '1916年他赚了约三百万美元。他不忠于任何一方，他关心的只是做对。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e8_repay', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('larryOld', a, 0.6, 1.0, { expr: 'smile', pose: 'money', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'home', props: [{ t: 'sign', x: 140, y: 250, w: 620, en: 'ANNUITIES & TRUSTS — safe even from me', zh: '年金与信托——连我自己都动不了', size: 34, zsize: 30, color: '#2c4a3a' }] }),
  ], caps: [{ x: 70, y: 70, w: 520, en: 'Early 1917: every old debt repaid.', zh: '1917年初：还清全部旧债。' }], lines: [
    L('larry', 'Early in 1917 I paid off all my old debts, more than a million dollars, even to the creditors who had released me.', '1917年初，我还清了全部旧债，超过一百万美元，连已经免除我债务的人也还了。'),
    L('larry', 'Then I put money into annuities and trusts that I could not touch. Safe, even from me.', '然后我把钱存入我自己无法动用的年金和信托。很安全——连我自己都碰不到。'),
    L('host', 'Money management: protect part of your capital from your own future mistakes.', '资金管理：保护一部分资本，免受你未来错误的伤害。'),
  ] });
}
shot({ id: 'e8_coffee', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Coffee, 1917–18: Right, and Still Not Paid', zh: '1917–18年咖啡：判断正确，却拿不到钱' }, els: [
  { type: 'flow', x: 70, y: 255, w: 1780, bh: 245, size: 24, zsize: 21, nodes: [
    { num: 1, en: 'Thesis: everything is far above pre-war prices — except coffee. Submarines will cut imports.', zh: '逻辑：所有商品都远高于战前——除了咖啡。潜艇战将减少进口。' },
    { num: 2, en: 'Dead market for 9 months → big loss. Re-enters 3× larger, long-dated.', zh: '市场沉寂9个月→大亏。以3倍规模、用远期合约重新入场。', at: 1 },
    { num: 3, en: 'Price rises. Shorts appeal to Washington\'s price-fixing committee.', zh: '价格上涨。空头向华盛顿价格管制委员会求助。', at: 2 },
    { num: 4, en: 'Maximum price + deadline to close contracts. Forced out. Millions gone.', zh: '设定最高价并限期平仓。被迫离场。数百万利润落空。', at: 2 },
  ] },
  { type: 'bars', at: 3, x: 70, y: 540, w: 700, h: 280, max: 25, vsize: 26, bars: [{ v: 9, vl: '≈9¢', en: 'Green coffee, capped era', zh: '限价时期生咖啡' , color: '#8a5a2b'}, { v: 23, vl: '23¢', en: 'After reopening', zh: '交易恢复后', color: '#2f7d3a' }] },
  { type: 'box', at: 4, x: 820, y: 560, w: 1030, color: '#f6d77a', en: 'Add "the unexpectable" to your risks: rules can change. No profit is safe until it is banked.', zh: '把"不可预料之事"纳入风险：规则可能改变。利润落袋之前都不安全。', size: 30 },
], lines: [
  L('larry', 'In 1917 almost every commodity stood far above its pre-war price, except coffee. Submarines were sinking ships, so imports would shrink, and the price must rise.', '1917年，几乎所有商品价格都远高于战前，唯独咖啡例外。潜艇在击沉商船，进口必然减少，价格必然上涨。'),
  L('larry', 'The market was dead for nine months, and I took a big loss. I bought again, three times as much, in long-dated contracts. This time it began to rise.', '市场沉寂了九个月，我亏了一大笔。我再次买入，规模是原来的三倍，用的是远期合约。这一次，价格开始上涨。'),
  L('larry', 'The shorts went to Washington. The price-fixing committee set a maximum price and a deadline to close all contracts. My millions never came.', '空头们跑到华盛顿。价格管制委员会规定了最高价，并限期了结所有合约。我的数百万利润化为泡影。'),
  L('host', 'When trading reopened, coffee sold at 23 cents. Green coffee had been around 9.', '交易恢复后，咖啡卖到23美分，而此前生咖啡价格约9美分。'),
  L('host', 'Lesson: add the unexpectable to your risks. Regulators and exchanges can change the rules. No profit is safe until it\'s banked.', '教训：把"不可预料之事"列入风险清单。监管者和交易所可能改变规则。利润落袋之前都不安全。'),
] });

// =====================================================================
episode(9, 'Tips, Insiders and the Tape', '消息、内部人与纸带', { en: 'Chapters XVI – XVIII, XXIII – XXIV', zh: '原著第十六至十八章、第二十三至二十四章' }, '#5a2a6a', [
  L('host', 'Episode nine. Tips, insiders, and the tape.', '第九集：消息、内部人与纸带。'),
]);
{
  const [a, b] = HALF;
  shot({ id: 'e9_borneo', kind: 'comic', panels: [
    P(a, { bg: 'beach', chars: [ch('banker', a, 0.3, 0.95, { expr: 'grin', hat: 'none', flip: true }), ch('wife', a, 0.72, 0.95, { expr: 'smile', flip: true })] }),
    P(b, { at: 2, bg: 'office', bgo: { board: [['BORNEO TIN'], ['108 → 102 → 100']], hl: [1, 0] }, chars: [ch('larryHat', b, 0.5, 0.95, { expr: 'determined', hy: 0.6 })] }),
  ], bubbles: [{ at: 1, x: 80, y: 70, w: 460, en: 'Confidentially… buy Borneo Tin.', zh: '私下告诉您……买婆罗洲锡业。', tx: 320, ty: 280 }],
  sfx: [{ at: 3, x: 1420, y: 640, t: 'SHORT!', zh: '做空！', size: 90 }], lines: [
    L('larry', 'Everybody wants tips. Promoters know it, and use tips as free advertising.', '人人都想要消息。发起人深谙此道，把消息当成免费广告。'),
    L('larry', 'At Palm Beach, the president of Borneo Tin arranged to sit next to my wife at dinner, and told her, confidentially, to buy. She bought a hundred shares at about 108.', '在棕榈滩，婆罗洲锡业的总裁特意在晚宴上坐到我妻子身边，私下建议她买入。她在108左右买了一百股。'),
    L('larry', 'That same day, bearish on the whole market, I began selling Borneo short, precisely because of its unusual activity.', '就在同一天，我因看空大盘，开始做空婆罗洲锡业——正是因为它异常活跃。'),
    L('larry', 'It broke to 102, then to par. I paid back my wife\'s loss, and covered later at a handsome profit.', '它跌到102，然后跌破100。我补上了妻子的亏损，后来回补获得了可观的利润。'),
  ] });
}
shot({ id: 'e9_tips', kind: 'info', tag: { en: 'WHY TIPS FAIL', zh: '消息为何失灵' }, title: { en: 'Stories About Tips', zh: '关于消息的故事' }, els: [
  { type: 'cards', x: 70, y: 260, w: 1780, ch: 160, cols: 2, items: [
    { en: 'An insider told John W. Gates to sell Reading. Gates bought instead — it rose ≈100 pts; he made $60,000.', zh: '内部人叫约翰·W·盖茨卖出雷丁。盖茨反手买入——涨约100点，赚6万美元。' },
    { en: 'A director tipped two floor traders to buy. The board passed the dividend: −6 points in 6 minutes.', zh: '一位董事叫两位场内交易员买入。董事会随即取消分红：6分钟跌6点。', at: 1 },
    { en: 'Tips fail: promoters unload with them, insiders change plans, and the taker stops thinking.', zh: '消息失灵：发起人借此出货，内部人改变计划，听消息者放弃思考。', at: 2 },
    { en: 'One investor watched managers: the wasteful one\'s railroad went into receivership; the thrifty one\'s prospered.', zh: '一位投资者观察管理层：铺张者的铁路破产被接管；节俭者的公司蒸蒸日上。', at: 3 },
  ] },
  { type: 'box', at: 2, x: 70, y: 640, w: 1780, color: '#f6d77a', anchor: 'middle', en: 'Unusual strength in a weak market is a reason to SELL, not to buy.', zh: '弱市中的异常强势，是卖出而不是买入的理由。', size: 32 },
], lines: [
  L('host', 'An insider told John W. Gates to sell Reading. Gates did the opposite, and made sixty thousand dollars as it rose about a hundred points.', '一位内部人叫约翰·W·盖茨卖出雷丁。盖茨反着做，在它上涨约一百点的过程中赚了六万美元。'),
  L('host', 'A company director tipped two floor traders to buy. The board then passed the dividend, and the stock fell six points in six minutes.', '一位公司董事建议两位场内交易员买入。随后董事会取消分红，股价六分钟跌了六点。'),
  L('host', 'Tips fail because promoters use them to unload, insiders change their plans, and the tip-taker stops thinking.', '消息失灵，是因为发起人借它出货，内部人改变计划，而听消息的人放弃了思考。'),
  L('host', 'One old investor judged railroads by their managers. The president who wasted fine notepaper ran a road that soon went into receivership. The one who reused envelopes made him rich.', '一位老投资者通过管理层判断铁路公司：浪费高级信纸的那位总裁，公司不久就破产被接管；用旧信封打草稿的那位，让他发了财。'),
] });
shot({ id: 'e9_steel', kind: 'info', tag: { en: 'SELLING A BIG LINE', zh: '卖出大仓位' }, title: { en: 'Steel and Utah Copper: Add Only to What Acts Right', zh: '钢铁与犹他铜业：只加仓走势正确的' }, els: [
  { type: 'table', x: 70, y: 260, w: 1780, widths: [0.2, 0.25, 0.25, 0.3], cols: [['Stock', '股票'], ['Behavior', '走势'], ['Position', '仓位'], ['Exit', '离场']], rows: [
    [['Utah Copper', '犹他铜业'], ['Didn\'t act right', '走势不对'], ['5,000 sh @ ≈114 — stopped', '约114买5,000股——停止加仓'], ['Broke 5 pts as he sold', '他卖时跌了5点']],
    [['U.S. Steel', '美国钢铁'], ['Acted right', '走势正确'], ['20,000 day one → 72,000', '首日2万→7.2万股'], ['Avg 1 pt below the top', '均价仅比顶部低1点']],
  ] },
  { type: 'box', at: 1, x: 70, y: 540, w: 860, color: '#cfe3c4', en: 'Sold into a huge market able to absorb it. Profit ≈ $1.5 million.', zh: '在能承接的巨大市场中卖出。利润约150万美元。', size: 30 },
  { type: 'quote', at: 2, x: 980, y: 540, w: 870, size: 32, zsize: 27, en: 'A man may know what to do and lose money — if he doesn\'t do it quickly enough.', zh: '一个人可能知道该做什么，却仍然亏钱——如果他做得不够快。', src: 'Ch. XVII' },
], lines: [
  L('larry', 'At the start of a bull market I bought five thousand Utah Copper, and stopped, because it didn\'t act right. Steel did, so I kept buying until I had seventy-two thousand shares.', '一次牛市初期，我买了五千股犹他铜业后就停手了，因为它走势不对。钢铁股走势正确，我就一路加仓到七万二千股。'),
  L('larry', 'When I saw a huge market able to absorb it, I sold all my Steel, at an average just one point below the top. Profit: about one and a half million.', '当我看到市场巨大、足以承接时，我卖光了全部钢铁股，均价只比最高点低一个点。利润约一百五十万美元。'),
  L('larry', 'A man may know what to do and lose money, if he doesn\'t do it quickly enough.', '一个人可能知道该做什么却仍然亏钱——如果他做得不够快。'),
] });
shot({ id: 'e9_wheattest', kind: 'info', tag: { en: 'METHOD 6', zh: '方法六' }, title: { en: 'Test the Market\'s Absorbing Power', zh: '测试市场的承接力' }, els: [
  { type: 'table', x: 70, y: 260, w: 1180, widths: [0.32, 0.3, 0.38], cols: [['Wheat sold (bushels)', '卖出小麦（蒲式耳）'], ['Price drop', '价格下跌'], ['Reading', '解读']], rows: [
    [['Normal market: 1,000,000', '正常市场：100万'], ['≤ ¼¢', '≤¼美分'], ['benchmark', '基准']],
    [['Test 1: 250,000', '测试1：25万'], ['¼¢', '¼美分'], ['weak', '偏弱']],
    [['Test 2: 250,000 (in driblets)', '测试2：25万（零星承接）'], ['1¼¢', '1¼美分'], ['No buying power', '没有买盘']],
    [['Then 2,000,000 + 2,000,000', '然后200万+200万'], ['breaks 6¢, keeps falling', '暴跌6美分并续跌'], ['Confirmed', '确认']],
  ], reveal: true, rowAt: [0, 0, 1, 2] },
  { type: 'cards', at: 3, x: 1290, y: 260, w: 560, ch: 175, cols: 1, items: [
    { en: 'Probe with test lots; then increase size.', zh: '先用测试单探路；再放大规模。', at: 3 },
    { en: 'Groups move together. Beware the laggard that won\'t follow its leader.', zh: '同板块同涨跌。当心不跟随龙头的落后股。', at: 3 },
    { en: '"I don\'t look out for the breaks; I look out for the warnings."', zh: '"我不是在等暴跌，我是在留意警告。"', at: 3 },
  ] },
], lines: [
  L('host', 'Here is testing in action, in wheat, around 1922. A normal market absorbs a million bushels within a quarter of a cent.', '这是测试的实战，大约1922年的小麦。正常市场能在四分之一美分内吸收一百万蒲式耳。'),
  L('host', 'He sold two hundred fifty thousand bushels: down a quarter cent.', '他卖出二十五万蒲式耳：下跌四分之一美分。'),
  L('host', 'Another two hundred fifty thousand, taken only in driblets: down a cent and a quarter. No buying power.', '再卖二十五万，只有零星买盘承接：下跌一又四分之一美分。没有买盘力量。'),
  L('host', 'So he sold two million bushels, then two million more. Wheat broke six cents and kept falling. And watch groups: a laggard that won\'t follow its leader is a warning, not a bargain.', '于是他卖出两百万蒲式耳，接着又卖两百万。小麦暴跌六美分并持续下跌。还要观察板块：不跟随龙头的落后股是警告，而不是便宜货。'),
] });
shot({ id: 'e9_tt', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Tropical Trading: Sticking with a Short Through Squeezes', zh: '热带贸易：在轧空中坚守空单' }, els: [
  { type: 'line', x: 70, y: 250, w: 1250, h: 580, xr: [0, 20], yr: [82, 162], yTicks: [90, 100, 120, 140, 155], yLabel: ['Tropical Trading (path from the book; timing illustrative)', '热带贸易（价位据原书；时间为示意）'],
    series: [{ pts: [[0, 140], [1.5, 155], [2.5, 153], [5, 133], [6.5, 150], [8, 138], [9.5, 149], [11.5, 125], [13, 148], [15, 118], [16.5, 108], [18, 98], [20, 89]], color: '#7a1f1a', reveal: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2] }],
    notes: [{ x: 2.5, y: 153, en: 'Sells @153 and down', zh: '153起一路卖空', dx: 20, dy: -10, w: 200 }, { x: 5, y: 133, en: 'Short 30,000 by 133', zh: '到133共空3万股', dx: -60, dy: 30, w: 200 }, { x: 9.5, y: 149, at: 1, en: 'Insiders push up → he shorts Equatorial (big holder)', zh: '内部人拉抬→他做空大股东赤道公司', dx: 20, dy: -50, w: 290 }, { x: 20, y: 89, at: 2, en: 'Breaks 90 in a demoralized market: covers all. > $1M', zh: '恐慌中跌破90：全部回补。超100万美元', dx: -330, dy: -150, w: 300 }] },
  { type: 'cards', x: 1360, y: 250, w: 490, ch: 180, cols: 1, items: [
    { en: 'Judge the character of a rally, not just the price.', zh: '判断反弹的性质，不只看价格。', at: 1 },
    { en: 'Size: 30,000 was a prudent share of the floating supply.', zh: '规模：3万股是流通盘中审慎的份额。', at: 2 },
    { en: 'A year later insiders supported it: he covered at 153, went long at 156. It passed 200.', zh: '一年后内部人托盘：他在153回补，156做多。股价超过200。', at: 3 },
  ] },
], lines: [
  L('host', 'Tropical Trading\'s insiders were known for squeezing bears. He judged their mark-up in a heavy market a blunder, and sold from 153 down. By 133 he was short thirty thousand.', '热带贸易的内部人以轧空空头闻名。他判断在沉重的市场中拉抬是个错误，从153开始一路卖空。到133时，他已做空三万股。'),
  L('host', 'When insiders pushed it up, he didn\'t add to his short there. He sold its big holder, Equatorial Commercial. Equatorial broke, and traders read the rally as a smoke screen.', '当内部人拉抬股价时，他没有在热带贸易上加空，而是卖空它的大股东赤道商业公司。赤道应声下跌，交易员们把热带贸易的反弹看成了烟幕。'),
  L('host', 'On a day of general demoralization it broke 90, and he covered all thirty thousand near the lows. Profit: over a million.', '在大盘全面溃败的一天，它跌破90，他在低点附近回补全部三万股。获利一百多万。'),
  L('host', 'A year later, insiders were supporting it in a falling market. He covered at 153 and went long at 156. It went above 200. Trade the facts, not your opinion.', '一年后，他发现内部人在下跌的市场中托盘。他在153回补，在156做多。股价后来超过200。按事实交易，而不是按观点。'),
] });
shot({ id: 'e9_insider', kind: 'info', tag: { en: 'THE INSIDER CYCLE', zh: '内部人循环' }, title: { en: 'How Insiders Use the News', zh: '内部人如何利用新闻' }, els: [
  { type: 'flow', x: 70, y: 255, w: 1780, bh: 250, size: 24, zsize: 21, nodes: [
    { num: 1, en: 'Business improves. Insiders buy quietly: "We have no news."', zh: '业务好转。内部人悄悄买入："我们没有消息。"' },
    { num: 2, en: 'Holdings complete → bullish anonymous stories flood the press. Public buys.', zh: '建仓完毕→匿名利好铺天盖地。公众买入。', at: 1 },
    { num: 3, en: 'Business turns down. Insiders sell silently.', zh: '业务转差。内部人默默卖出。', at: 2 },
    { num: 4, en: 'Decline blamed on a "bear raid." A squeeze is promised — it never comes.', zh: '下跌被归咎于"空头袭击"。承诺的轧空永远不会来。', at: 2 },
  ] },
  { type: 'bars', at: 3, x: 70, y: 540, w: 760, h: 280, max: 270, vsize: 26, bars: [{ v: 255, vl: '255', en: 'New Haven, 1902', zh: '纽黑文铁路 1902年', color: '#2f5d8a' }, { v: 12, vl: '12', en: 'Later', zh: '后来', color: '#b8322a' }] },
  { type: 'quote', at: 4, x: 870, y: 540, w: 980, size: 32, zsize: 27, en: 'There is a reason — an unknown reason, but a good reason; therefore, get out.', zh: '一定有原因——一个未知但充分的原因；所以，离场。', src: 'Ch. XV' },
], lines: [
  L('host', 'His warning about insiders. When business improves, they buy silently, and tell you they have no news.', '他对内部人的警告：业务好转时，他们默默买入，并告诉你"没有消息"。'),
  L('host', 'Once they own all they want, bullish anonymous stories flood the papers, and the public buys.', '等他们买够了，匿名利好铺满报纸，公众开始买入。'),
  L('host', 'When business turns down, they sell quietly, and blame the decline on a bear raid.', '业务转差时，他们悄悄卖出，并把下跌归咎于空头袭击。'),
  L('host', 'The New Haven railroad fell from 255 to 12 while insiders blamed the bears. It was never a bear raid.', '纽黑文铁路从255跌到12，内部人一直在怪空头。但那从来都不是空头袭击。'),
  L('larry', 'When a stock keeps falling, there is a reason. An unknown reason, but a good reason. Therefore, get out.', '当一只股票持续下跌，背后一定有原因。一个未知、但充分的原因。所以，离场。'),
] });
shot({ id: 'e9_enemies', kind: 'info', tag: { en: 'THE BIG PICTURE', zh: '大局观' }, title: { en: 'The Market Looks Ahead', zh: '市场向前看' }, els: [
  { type: 'quote', x: 160, y: 260, w: 1600, size: 40, zsize: 34, en: 'The course of the market is always from six to nine months ahead of actual conditions.', zh: '市场走势总是领先实际状况六到九个月。', src: 'Ch. XXIV' },
  { type: 'cards', at: 1, x: 70, y: 530, w: 1780, ch: 120, cols: 2, items: [
    { en: 'A rising stock needs no explanation. Ride it while reactions stay small.', zh: '上涨的股票不需要解释。回调小就继续持有。', at: 1 },
    { en: 'After a long rise, small rallies + falling price = the line has changed. Don\'t ask why.', zh: '长期上涨后，反弹无力而价格下跌＝趋势已变。别问为什么。', at: 1 },
    { en: 'The enemies: ignorance, greed, fear and hope.', zh: '敌人：无知、贪婪、恐惧和希望。', at: 2, tagColor: '#b8322a' },
    { en: 'Insiders may tell you when to buy — never when to sell.', zh: '内部人也许会告诉你何时买——永远不会告诉你何时卖。', at: 2, tagColor: '#b8322a' },
  ] },
], lines: [
  L('larry', 'The course of the market is always from six to nine months ahead of actual conditions.', '市场走势总是领先实际状况六到九个月。'),
  L('host', 'A rising stock needs no explanation. But after a long rise, if it turns down with only feeble rallies, the line of least resistance has changed. Don\'t wait to learn why.', '上涨的股票不需要解释。但长期上涨后，如果它转而下跌、反弹无力，最小阻力线就已经改变。不要等到知道原因再行动。'),
  L('host', 'The speculator\'s enemies: ignorance, greed, fear and hope. And insiders may tell you when to buy, but never when to sell.', '投机者的敌人：无知、贪婪、恐惧和希望。内部人也许会告诉你何时买，但永远不会告诉你何时卖。'),
] });

// =====================================================================
episode(10, 'How Manipulation Worked', '操纵是如何运作的', { en: 'Chapters XIX – XXII', zh: '原著第十九至二十二章' }, '#16130f', [
  L('host', 'Episode ten. How manipulation worked.', '第十集：操纵是如何运作的。'),
]);
shot({ id: 'e10_def', kind: 'info', tag: { en: 'READ THIS FIRST', zh: '先读这里' }, title: { en: 'Manipulation: Legal Then, Illegal Now', zh: '操纵：当年合法，如今违法' }, els: [
  { type: 'box', x: 70, y: 260, w: 1780, color: '#f3c6c0', anchor: 'middle', en: '⚠ Learn this to RECOGNIZE it. Most of these practices are illegal in today\'s regulated markets.', zh: '⚠ 学习它是为了识别它。这些做法在当今受监管的市场中大多违法。', size: 32 },
  { type: 'quote', at: 1, x: 160, y: 420, w: 1600, size: 40, zsize: 34, en: 'Stocks are manipulated to the highest point possible and then sold to the public on the way down.', zh: '股票被操纵到尽可能高的价位，然后在下跌途中卖给公众。', src: 'Ch. XX' },
], lines: [
  L('host', 'The last chapters explain manipulation. It was legal and common then, and is illegal now. Study it to recognize it, not to do it.', '最后几章讲的是操纵。它在当年合法且常见，如今属于违法。学习它是为了识别它，而不是去做。'),
  L('larry', 'Manipulation is advertising through the tape. Stocks are manipulated to the highest point possible, and then sold to the public on the way down.', '操纵就是通过纸带做广告。股票被操纵到尽可能高的价位，然后在下跌途中卖给公众。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e10_keene', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('keene', a, 0.55, 1.05, { expr: 'determined', hy: 0.5 })] }),
    P(b, { at: 1, bg: 'floor' }),
  ], caps: [{ x: 70, y: 70, w: 420, en: 'James R. Keene.', zh: '詹姆斯·R·基恩。' }],
  sfx: [{ at: 1, x: 1420, y: 230, t: '750,000+ SHARES', zh: '75万多股美国钢铁', size: 66, color: '#fff', font: 'cond' }, { at: 3, x: 1420, y: 560, t: '$20–25 MILLION', zh: '联合铜业：2000–2500万美元', size: 62, color: '#f6d77a', font: 'cond' }], lines: [
    L('host', 'The master was James R. Keene. In 1901 he made the market for U.S. Steel, selling over seven hundred fifty thousand shares in a few weeks.', '大师是詹姆斯·R·基恩。1901年他为美国钢铁做市，几周内卖出七十五万多股。'),
    L('host', 'Steel common, which he marked up to 55 in 1901, fell to 10 by 1903 and 8⅞ in 1904.', '美国钢铁普通股，1901年被他拉到55，1903年跌到10，1904年跌到8⅞。'),
    L('host', 'For Amalgamated Copper, he sold two hundred twenty thousand shares around par.', '为联合铜业，他在面值附近卖出了二十二万股。'),
    L('host', 'That raised some twenty to twenty-five million dollars.', '筹得约两千到两千五百万美元。'),
  ] });
}
shot({ id: 'e10_process', kind: 'info', tag: { en: 'HOW IT WORKED', zh: '手法拆解' }, title: { en: 'Anatomy of a Distribution', zh: '派发的全过程' }, els: [
  { type: 'cards', x: 70, y: 255, w: 1780, ch: 130, cols: 2, items: [
    { en: 'Study the stock\'s value and market conditions first.', zh: '先研究股票价值与市场状况。' },
    { en: 'Take the fee as call options at graduated prices.', zh: '以阶梯价格的看涨期权作为报酬。' },
    { en: 'Make the stock active — activity is its own advertising.', zh: '让股票活跃——活跃本身就是广告。', at: 1 },
    { en: 'Sell to traders on the way up, never enough to stop the rise.', zh: '上涨中卖给交易员，但绝不卖到阻止上涨。', at: 2 },
    { en: 'Buy back on weak days: "stabilizing."', zh: '弱势日买回："稳定价格"。', at: 2 },
    { en: 'The real selling happens on the decline.', zh: '真正的派发发生在下跌中。', at: 3, tagColor: '#b8322a' },
  ] },
  { type: 'box', at: 4, x: 70, y: 708, w: 1780, h: 108, size: 30, color: '#f6d77a', anchor: 'middle', en: 'If buying won\'t lift the stock — stop. Don\'t argue with the tape.', zh: '如果买入推不动股价——立即停手。别和纸带争辩。', size: 30 },
], lines: [
  L('host', 'The procedure he describes. First, study the stock\'s value and the market. The fee is taken as call options at graduated prices.', '他描述的流程。首先，研究股票价值和市场状况。报酬以阶梯价格的看涨期权收取。'),
  L('host', 'Make the stock active. Activity creates its own publicity, and floor traders are the first buyers.', '让股票活跃起来。活跃本身就是宣传，场内交易员是第一批买家。'),
  L('host', 'Sell to them on the way up, but never enough to stop the rise. Buy on weak days to steady the price.', '在上涨途中卖给他们，但绝不卖到阻止上涨。在弱势日买入以稳定价格。'),
  L('larry', 'It is perfectly astonishing how much stock a man can get rid of on a decline.', '一个人在下跌中能卖掉多少股票，实在令人震惊。'),
  L('host', 'And if a stock won\'t rise on buying, stop. Don\'t argue with the tape.', '如果买入推不动股价，就停手。别和纸带争辩。'),
] });
shot({ id: 'e10_imperial', kind: 'info', tag: { en: 'CASE STUDY', zh: '案例' }, title: { en: 'Imperial Steel (Success) vs. Petroleum Products (Failure)', zh: '帝国钢铁（成功）vs. 石油产品（失败）' }, els: [
  { type: 'line', x: 70, y: 250, w: 900, h: 580, xr: [0, 10], yr: [66, 104], yTicks: [70, 80, 90, 100], yLabel: ['Imperial Steel (illustrative path)', '帝国钢铁（示意走势）'],
    series: [{ pts: [[0, 70], [1.5, 75], [2.3, 73], [4, 80], [4.8, 78], [6.5, 87], [7.3, 85], [8.6, 94], [10, 100]], color: '#2f7d3a' }],
    hlines: [{ v: 85, label: ['His avg ≈85 on only 7,000 sh', '仅7,000股，均价约85'], color: '#8a5a2b', below: true }],
    notes: [{ x: 0, y: 70, en: 'Calls: 100,000 sh, 70→100', zh: '期权：10万股，70→100', dx: 20, dy: -110, w: 240 }, { x: 10, y: 100, at: 1, en: 'Par: a bank buys all his options', zh: '到100：一家银行买走他全部期权', dx: -300, dy: 20, w: 260 }] },
  { type: 'table', at: 2, size: 24, x: 1010, y: 250, w: 840, widths: [0.26, 0.37, 0.37], cols: [['', ''], ['Imperial Steel', '帝国钢铁'], ['Pete Products', '石油产品']], rows: [
    [['Market', '大势'], ['Bull market', '牛市'], ['Bull market ending', '牛市将尽']],
    [['Big holders', '大股东'], ['70% locked in trust', '70%锁入信托'], ['Pool insists on support', '资金池坚持托盘']],
    [['Result', '结果'], ['Success', '成功'], ['Liquidated much lower', '在低得多处清仓']],
  ] },
  { type: 'box', at: 3, x: 1010, y: 690, w: 840, h: 125, color: '#f6d77a', en: 'For every 5,000 shares he buys, the public should buy 5,000 more. If you\'re the only buyer — stop.', zh: '他每买5,000股，公众应再买5,000股。如果只有你在买——停手。', size: 26 },
], lines: [
  L('larry', 'For Imperial Steel I took no cash, only calls on a hundred thousand shares, from 70 up to 100. And I had the syndicate lock its seventy percent in a trust, so no one could dump stock on me.', '为帝国钢铁做市，我不收现金，只要十万股看涨期权，行权价从70到100。并让辛迪加把它持有的70%锁进信托，免得有人把股票倒给我。'),
  L('larry', 'I bought what was offered, sold to floor traders, bought back lower, and kept working higher. At par, a banking house bought all my options at an enormous profit. I\'d needed only seven thousand shares.', '我买下卖盘，卖给场内交易员，在低位买回，不断推高。到100时，一家银行以巨额溢价买走了我全部期权。我总共只需要七千股。'),
  L('larry', 'Petroleum Products was different. The bull market was ending. I advised selling at whatever price could be had. The pool insisted on supporting it, and later liquidated much lower.', '石油产品就不同了。牛市即将结束，我建议不计价格卖出。资金池却坚持托盘，后来在低得多的价位清仓。'),
  L('host', 'His test: for every five thousand shares he buys, the public should be willing to buy five thousand more. And no manipulator can beat the general market.', '他的检验标准：他每买五千股，公众应该愿意再买五千股。而且，没有任何操纵者能战胜大势。'),
] });
{
  const [a, b] = HALF;
  shot({ id: 'e10_stove', kind: 'comic', panels: [
    P(a, { bg: 'floor', chars: [ch('trader', a, 0.5, 1.0, { expr: 'grin', pose: 'point', hy: 0.5 })] }),
    P(b, { at: 2, bg: 'office', bgo: { board: [['CONS. STOVE'], ['37 → 42 → 32']], hl: [1, 0] }, chars: [ch('larryOld', b, 0.5, 0.95, { expr: 'tired', hy: 0.58 })] }),
  ], caps: [{ x: 70, y: 690, w: 520, en: 'Consolidated Stove, pegged at 37.', zh: '联合炉具，被托在37。' }],
  bubbles: [{ at: 1, x: 420, y: 70, w: 460, en: 'Livingston\'s going to run it up 15 points!', zh: '利文斯顿要把它拉高15点！', tx: 520, ty: 300 }],
  sfx: [{ at: 2, x: 1420, y: 170, t: '100,000 SOLD', zh: '十万股全部卖出', size: 62, color: '#f6d77a' }], lines: [
    L('larry', 'A friend asked me to market Consolidated Stove. It was pegged at 37, with two hundred thousand shares in three big hands overhanging it.', '一位朋友请我为联合炉具做市。它被托在37，有二十万股集中在三个大户手里，压在上方。'),
    L('larry', 'I had them give my syndicate calls at 40 and put their stock in escrow. Before I\'d done a thing, a floor trader spread the word that I\'d run it up fifteen points.', '我让他们以40为价给我的辛迪加看涨期权，并把股票托管。我还没动手，一位场内交易员就四处散布我要把它拉高十五点。'),
    L('larry', 'Orders poured in. In a few days I sold all the bank\'s hundred thousand shares, without buying a single share myself.', '买单蜂拥而至。几天内，我卖光了银行的全部十万股，自己一股都没买。'),
    L('larry', 'Then it sagged to 32. People who bought on that tip were stuck. That is why I never give tips.', '随后它跌到32。那些听消息买入的人被套牢了。这就是我从不给别人消息的原因。'),
  ] });
}

// =====================================================================
episode(11, 'Livermore\'s Rules', '利弗莫尔法则总结', { en: 'The whole book in twelve rules', zh: '全书十二条法则' }, '#d9a441', [
  L('host', 'Finally, the whole book in twelve rules.', '最后，用十二条法则总结全书。'),
]);
shot({ id: 'f_rules1', kind: 'info', tag: { en: 'SUMMARY 1 / 2', zh: '总结 1/2' }, title: { en: 'Trading the Trend', zh: '顺势交易' }, els: [
  { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, items: [
    { n: 1, en: 'Trade along the line of least resistance.', zh: '顺着最小阻力线交易。' },
    { n: 2, en: 'Wait for the pivotal point. Don\'t anticipate the breakout.', zh: '等待关键点，不要抢跑突破。', at: 1 },
    { n: 3, en: 'Probe small. Add only when the first trade shows a profit.', zh: '小仓试探；第一笔盈利才加仓。', at: 2 },
    { n: 4, en: 'Cut losses fast. Never average down.', zh: '迅速止损；永不摊平亏损。', at: 3 },
    { n: 5, en: 'Sit tight on winners — the big money is in the big swing.', zh: '坐稳盈利仓——大钱在大波段里。', at: 4 },
    { n: 6, en: 'Study general conditions; the market moves 6–9 months ahead.', zh: '研究整体状况；市场领先6–9个月。', at: 5 },
  ] },
], lines: [
  L('host', 'One. Trade along the line of least resistance.', '一：顺着最小阻力线交易。'),
  L('host', 'Two. Wait for the pivotal point. Don\'t anticipate the breakout.', '二：等待关键点，不要抢跑突破。'),
  L('host', 'Three. Probe with a small position, and add only when the first trade shows a profit.', '三：用小仓位试探，第一笔盈利后才加仓。'),
  L('host', 'Four. Cut losses quickly. Never average down.', '四：迅速止损，永不摊平亏损。'),
  L('host', 'Five. Sit tight on winners. The big money is in the big swing.', '五：坐稳盈利仓位。大钱在大波段里。'),
  L('host', 'Six. Study general conditions. The market moves six to nine months ahead of them.', '六：研究整体状况。市场领先它六到九个月。'),
] });
shot({ id: 'f_rules2', kind: 'info', tag: { en: 'SUMMARY 2 / 2', zh: '总结 2/2' }, title: { en: 'Mastering Yourself', zh: '驾驭自己' }, els: [
  { type: 'cards', x: 70, y: 255, w: 1780, ch: 160, cols: 2, items: [
    { n: 7, en: 'Ignore tips. Back only your own judgment.', zh: '不听消息，只相信自己的判断。' },
    { n: 8, en: 'Don\'t trade all the time. Wait for the odds.', zh: '不要一直交易，等待胜算。', at: 1 },
    { n: 9, en: 'Sell a big line when the market can absorb it.', zh: '在市场能承接时卖出大仓位。', at: 2 },
    { n: 10, en: 'Hope and fear are enemies: fear the loss, hope for the profit.', zh: '希望与恐惧是敌人：对亏损恐惧，对盈利希望。', at: 3 },
    { n: 11, en: 'Protect capital from yourself; profit isn\'t safe until banked.', zh: '保护资本免受自己伤害；利润落袋才安全。', at: 4 },
    { n: 12, en: 'Turn every mistake into a new "Don\'t!"', zh: '把每个错误变成一条新的"不要！"', at: 5 },
  ] },
], lines: [
  L('host', 'Seven. Ignore tips. Back only your own judgment.', '七：不听消息，只相信自己的判断。'),
  L('host', 'Eight. Don\'t trade all the time. Wait until the odds favor you.', '八：不要一直交易，等到胜算站在你这边。'),
  L('host', 'Nine. Sell a big position when the market can absorb it, not when you wish to.', '九：在市场能承接时卖出大仓位，而不是在你想卖时。'),
  L('host', 'Ten. Reverse your instincts: fear the loss growing, hope for the profit growing.', '十：逆转本能：担心亏损扩大，期待盈利扩大。'),
  L('host', 'Eleven. Protect capital from yourself. A profit isn\'t safe until it\'s banked.', '十一：保护资本免受自己伤害。利润落袋才算安全。'),
  L('host', 'Twelve. Turn every mistake into a new rule that begins with: don\'t.', '十二：把每一个错误，都变成一条以"不要"开头的新规则。'),
] });
{
  const [a] = [FULL];
  shot({ id: 'f_end', kind: 'comic', panels: [
    P(a, { bg: 'study', chars: [ch('larryOld', a, 0.62, 1.25, { expr: 'smile', pose: 'chin' })] }),
  ], caps: [{ x: 90, y: 90, w: 640, en: 'Human nature does not change. That is why the market repeats.', zh: '人性不会改变。这就是市场不断重演的原因。', size: 34, zsize: 30 }, { at: 1, x: 90, y: 600, w: 640, color: '#f3c6c0', en: 'Educational content based on a 1923 book. Not investment advice.', zh: '本片基于1923年出版的书籍，仅供学习，不构成投资建议。', size: 24, zsize: 22 }],
  lines: [
    L('larry', 'There is nothing new in Wall Street. Speculation is as old as the hills, and human nature does not change.', '华尔街没有新鲜事。投机像山丘一样古老，而人性永远不会改变。'),
    L('host', 'Thank you for watching. Study the mistakes as carefully as the victories.', '感谢观看。请像研究胜利一样，认真研究失败。'),
  ] });
}

fs.mkdirSync(path.join(__dirname, '..', 'build'), { recursive: true });
fs.writeFileSync(path.join(__dirname, '..', 'build', 'story.json'), JSON.stringify({ shots }, null, 1));
console.log(`${shots.length} shots, ${shots.reduce((a, s) => a + s.lines.length, 0)} lines`);
