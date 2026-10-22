module.exports = ({ shot, N, L, title, chapter }) => {
  chapter('Test', '测试');
  title({ id: 't_title', kicker: 'EPISODE 1 · 第一集', en: 'The Bucket Shop Boy', zh: '对赌行少年', sub: ['Chapters I–II', '原著第一至二章'],
    lines: [N('Episode one. The bucket shop boy.', '第一集：对赌行少年。')] });
  shot({ id: 't_board', set: 'office', setOpts: { boardSeq: [{ t: 'L1@fell', r: 1, c: 0, v: '103' }] }, trans: 'wipe',
    cam: [{ t: 0, x: 960, y: 520, z: 1.0 }, { t: 'L1', on: 'boy', z: 1.45, dur: 1.2 }],
    cast: [{ id: 'boy', x: 760, y: 1080, s: 1.3, expr: 'neutral', acts: [{ t: 'L1@fell', pose: 'point', expr: 'shock' }] }],
    items: [{ type: 'caption', at: 0.3, en: 'Age 14. Quotation-board boy.', zh: '14岁，报价板小弟。' },
            { type: 'bubble', at: 'L2', x: 1060, y: 140, w: 440, en: 'Sugar is slipping!', zh: '糖业在跌！', tx: 900, ty: 430 }],
    lines: [N('I was fourteen when I went to work as a quotation-board boy, posting prices on the big board.', '十四岁那年，我当上了报价板小弟，把行情写到大黑板上。'),
            N('The numbers never sat still. Sugar was at a hundred and five and a quarter, then it fell to 103.', '数字从不停歇。糖业股本在105¼，接着跌到了103。'),
            L('boy', 'Sugar is slipping!', '糖业在跌！', { speak: 'boy' })] });
  shot({ id: 't_chart', set: 'paper', trans: 'whip',
    cast: [{ id: 'larryOld', key: 'nar', x: 250, y: 1190, s: 1.25, pose: 'explain' }],
    items: [{ type: 'text', at: 0.2, x: 1150, y: 50, en: 'The Sugar Trap', zh: '糖业陷阱', size: 64, anim: 'words' },
      { type: 'chart', at: 0.4, x: 520, y: 200, w: 1320, h: 640, xr: [0, 10], yr: [101, 109.5], yTicks: [102, 104, 106, 108], illustrative: true,
        series: [{ pts: [[0, 105.25], [2, 104.5], [3.5, 103.4], [5, 103], [6.4, 103.1], [7.2, 108], [8.4, 104.3], [10, 103.8]], color: '#b8322a', draw: [['L0', 4], ['L1@108', 6]] }],
        marks: [{ x: 0, y: 105.25, at: 'L0', en: 'Short 3,500 @105¼', zh: '105¼做空3,500股', dx: 20, dy: 30, w: 250 }, { x: 7.2, y: 108, at: 'L1@108', en: 'Shop pushes it to 108', zh: '店家推到108', dx: 30, dy: 20, w: 260 }],
        pnl: { entry: 105.25, shares: 3500, side: 'short', at: 'L0' } }],
    lines: [N('Here is the trade. I was short thirty-five hundred shares, and every point down was money in my pocket.', '这是那笔交易。我做空了3,500股，每跌一个点都是我的钱。'),
            N('Then the shop pushed the price to 108 and wiped out every short in the room.', '然后店家把价格推到108，把店里所有空头都洗掉了。')] });
};
