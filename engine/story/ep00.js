// Prologue: what the book is, who is who, and the shape of the story.
module.exports = ({ shot, L, episode, FULL, P, ch }) => {
  episode(0, 'Reminiscences of a Stock Operator', '股票大作手回忆录', { en: 'Edwin Lefèvre, 1923 · A study guide for traders', zh: '埃德温·勒菲弗 著（1923）· 交易者学习手册' }, '#8a5a2b', [
    L('host', 'In 1923, Edwin Lefèvre published a book narrated in the first person by a trader called Larry Livingston.', '1923年，埃德温·勒菲弗出版了一本书，由一位名叫拉瑞·利文斯顿的交易员以第一人称讲述。'),
    L('host', 'Livingston is widely understood to be Jesse Livermore. The book is even dedicated to him.', '人们普遍认为利文斯顿就是杰西·利弗莫尔。这本书正是题献给他的。'),
    L('host', 'Twelve episodes follow the book\'s twenty-four chapters in order, with the book\'s own names. Nothing is skipped and nothing is invented.', '十二集按原书二十四章依次展开，沿用原书人名。不跳章，不虚构。'),
  ]);

  shot({ id: 'p00_how', kind: 'info', tag: { en: 'HOW TO WATCH', zh: '观看指南' }, title: { en: 'Story Panels and Lesson Pages', zh: '漫画讲故事，纸页讲方法' }, els: [
    { type: 'cards', x: 70, y: 260, w: 1780, ch: 165, cols: 2, items: [
      { en: 'Comic panels: the story, told by Livingston himself.', zh: '漫画格：故事，由利文斯顿本人讲述。' },
      { en: 'Paper pages: methods, case studies, charts and tables.', zh: '纸页：方法、案例、图表与表格。', at: 1 },
      { en: 'Every episode ends with key takeaways and a review of the mistakes.', zh: '每集结尾有本集要点和错误复盘。', at: 2 },
      { en: '"ILLUSTRATIVE" charts connect prices stated in the book; the stated levels are exact.', zh: '标有"示意图"的图表连接原书给出的价位；所标价位均为原书数据。', at: 3 },
    ] },
    { type: 'box', at: 4, x: 70, y: 660, w: 1780, h: 120, color: '#f3c6c0', anchor: 'middle', size: 30, en: 'Educational content based on a 1923 book. Markets and laws have changed. Not investment advice.', zh: '本片基于1923年出版的书籍，仅供学习。市场与法规早已变化。不构成投资建议。' },
  ], lines: [
    L('host', 'Comic panels tell the story, in Livingston\'s own voice.', '漫画格讲故事，用利文斯顿自己的口吻。'),
    L('host', 'Paper pages like this one teach the method, with charts and tables.', '像这样的纸页讲方法，配有图表和表格。'),
    L('host', 'Every episode ends with its key takeaways and a review of the mistakes: what went wrong, why, and the rule he drew from it.', '每集结尾都有本集要点和错误复盘：错在哪里、为什么错、他从中得出了什么规则。'),
    L('host', 'Where the book gives only a few prices, charts marked illustrative connect them. The stated prices themselves are exact.', '原书只给出几个价位时，标有"示意图"的图表会把它们连起来，但所标价位本身都是原书数据。'),
    L('host', 'This is a study of a 1923 book. Markets and laws have changed since then, and nothing here is investment advice.', '这是对一本1923年著作的学习。此后市场与法规都已改变，本片内容不构成投资建议。'),
  ] });

  shot({ id: 'p00_cast', kind: 'info', tag: { en: 'WHO IS WHO', zh: '人物表' }, title: { en: 'The People in the Book', zh: '书中人物' }, els: [
    { type: 'table', x: 70, y: 250, w: 870, size: 24, widths: [0.34, 0.66], cols: [['Name', '姓名'], ['Who he is', '身份']], rows: [
      [['Larry Livingston', '拉瑞·利文斯顿'], ['Narrator (Livermore): bucket-shop boy turned great speculator', '叙述者（利弗莫尔）：从对赌行少年到大作手']],
      [['A. R. Fullerton', 'A.R.富勒顿'], ['His NY broker, where he first went broke', '他的纽约经纪商，他首次破产之地']],
      [['Old Partridge', '老帕特里奇'], ['Old customer: "It\'s a bull market!" Sit tight', '老客户："这是牛市啊！"坐得住']],
      [['Ed Harding', '艾德·哈丁'], ['Head of Harding Brothers, his main broker', '哈丁兄弟公司负责人，他的主要经纪商']],
    ], reveal: true, rowAt: [0, 1, 1, 1] },
    { type: 'table', x: 980, y: 250, w: 870, size: 24, widths: [0.34, 0.66], cols: [['Name', '姓名'], ['Who he is', '身份']], rows: [
      [['Percy Thomas', '珀西·托马斯'], ['Cotton operator who talked him out of his judgment', '说服他放弃判断的棉花大作手']],
      [['Dan Williamson', '丹·威廉森'], ['Banker-broker who used him as a smoke screen', '把他当作烟幕弹的银行家兼经纪商']],
      [['James R. Keene', '詹姆斯·R·基恩'], ['Master manipulator: U.S. Steel, Amalgamated', '操纵大师：美国钢铁、联合铜业']],
      [['J. P. Morgan', 'J.P.摩根'], ['Banker (historical) who organised money in 1907', '在1907年组织资金救市的银行家（真实人物）']],
    ], reveal: true, rowAt: [2, 2, 3, 3] },
  ], lines: [
    L('host', 'The cast. Larry Livingston, the narrator, is the figure readers identify with Jesse Livermore.', '人物表。叙述者拉瑞·利文斯顿，就是读者心目中的杰西·利弗莫尔。'),
    L('host', 'His brokers, Fullerton and Ed Harding. Old Partridge, who taught him to sit tight.', '他的经纪商富勒顿和艾德·哈丁；还有教会他"坐得住"的老帕特里奇。'),
    L('host', 'Percy Thomas and Dan Williamson, the two men whose influence cost him the most.', '珀西·托马斯和丹·威廉森，这两个人的影响让他损失最为惨重。'),
    L('host', 'And the giants of the age: James R. Keene, the master manipulator, and J. P. Morgan.', '还有那个时代的巨头：操纵大师詹姆斯·R·基恩，以及J.P.摩根。'),
  ] });

  shot({ id: 'p00_curve', kind: 'info', tag: { en: 'THE SHAPE OF THE STORY', zh: '故事全貌' }, title: { en: 'Fortunes Made and Lost, Again and Again', zh: '一次次赚到，又一次次输光' }, els: [
    { type: 'timeline', x: 70, y: 250, w: 1780, h: 560, lsize: 17, items: [
      { v: 3.12, vl: '$3.12', en: 'Age 14', zh: '14岁' },
      { v: 10000, vl: '$10,000', en: 'Age 20', zh: '20岁' },
      { v: 0, vl: '$0', en: 'NY, 6 mo.', zh: '纽约半年', at: 1 },
      { v: 50000, vl: '≈$50,000', en: '1901', zh: '1901年', at: 1 },
      { v: 0, vl: '$0', en: 'May 9, 1901', zh: '1901.5.9', at: 1 },
      { v: 1000000, vl: '>$1M', en: 'Oct 1907', zh: '1907年10月', at: 2 },
      { v: -1000000, vl: '−$1M+', en: '1914 debts', zh: '1914年负债', at: 3 },
      { v: 3000000, vl: '+$3M', en: '1916', zh: '1916年', at: 4 },
    ] },
  ], lines: [
    L('host', 'Here is the shape of the story. Three dollars and twelve cents at fourteen. Ten thousand dollars at twenty.', '这是整个故事的轮廓。十四岁时的3.12美元，二十岁时的一万美元。'),
    L('host', 'Then broke in New York, back to fifty thousand, and wiped out again in a single day.', '然后在纽约输光，又回到五万美元，再在一天之内被清零。'),
    L('host', 'A million dollars in the panic of 1907.', '1907年恐慌中，身家一百万美元。'),
    L('host', 'Debts of over a million and bankruptcy by 1914.', '到1914年，负债超过一百万美元，宣告破产。'),
    L('host', 'And about three million dollars made in 1916. How each turn happened, and what he learned, is what this film is about.', '再到1916年赚了约三百万美元。每一次转折如何发生、他学到了什么，就是本片要讲的内容。'),
  ] });
};
