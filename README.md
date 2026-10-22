# 股票大作手回忆录 · 漫剧 / Reminiscences of a Stock Operator · Motion Comic

A bilingual (English voice-over, English + Chinese subtitles) motion comic and study guide based on
Edwin Lefèvre's *Reminiscences of a Stock Operator* (1923, public domain). The book's narrator,
Larry Livingston, is widely understood to be Jesse Livermore.

一部以《股票大作手回忆录》（1923年出版，已进入公有领域）为蓝本的漫剧兼学习资料：英文配音，中英双语字幕，
画面上的所有文字、图表和表格均为中英对照。剧情严格按原书展开，不做虚构加工；方法论、历史案例和经验教训配有图表和表格详解。

## Contents · 内容

| # | Episode | 集名 | Chapters |
|---|---------|------|----------|
| 0 | Prologue | 序章 | — |
| 1 | The Bucket Shop Boy | 对赌行少年 | I |
| 2 | Wall Street Is Not a Bucket Shop | 华尔街不是对赌行 | II–IV |
| 3 | Sit Tight | 坐得住 | V |
| 4 | The Earthquake and Saratoga | 地震与萨拉托加 | VI |
| 5 | The Method | 方法论 | VII, X |
| 6 | The Panic of 1907 | 1907年大恐慌 | VIII–IX |
| 7 | The Fall | 坠落 | XI–XIII |
| 8 | The Comeback | 东山再起 | XIV–XV |
| 9 | Tips, Insiders and the Tape | 消息、内部人与纸带 | XVI–XVIII, XXIII–XXIV |
| 10 | How Manipulation Worked | 操纵是如何运作的 | XIX–XXII |
| — | Livermore's Rules (Finale) | 利弗莫尔法则总结 | — |

Outputs (in `output/`, produced by the build):

- `Reminiscences_of_a_Stock_Operator_Motion_Comic.mp4`: the full video, 1080p, with burned-in bilingual subtitles
- `*.bilingual.srt`, `*.en.srt`, `*.zh.srt`: subtitle files for players and upload platforms
- `chapters.txt`: episode timestamps (paste into a video description)

## How it is made · 制作方式

Everything is generated from source. There is no stock footage and no image generation.

- `engine/story.js`: the storyboard. It holds every shot, panel, chart, table and voiced line in English and Chinese.
- `engine/lib.js`: an original vector comic renderer (characters, backgrounds, speech bubbles, captions, line/bar charts, tables, flow diagrams) that runs in headless Chromium.
- `engine/render.js`: renders one 1920×1080 frame per voiced line, revealing panels and chart elements step by step.
- `engine/build.py`: generates the TTS voices (Microsoft Edge neural voices via `edge-tts`), encodes each shot with a slow zoom, burns in subtitles, writes the SRT files and mixes in a procedurally synthesized piano bed.

### Build

```bash
pip install edge-tts numpy
# fonts (OFL / Apache) from google/fonts into assets/fonts/:
#   Bangers, Comic Neue (Regular/Bold), Oswald[wght], Playfair Display[wght],
#   Noto Sans SC[wght], Noto Serif SC[wght], Special Elite
python3 engine/build.py              # full build -> output/
python3 engine/build.py --only e5_   # rebuild just the shots whose id contains "e5_"
```

Requirements: Node 18+ with Playwright (Chromium), ffmpeg with libx264, Python 3.10+.

## Accuracy notes · 准确性说明

- The book's own names are used (Larry Livingston, Fullerton, Harding Brothers, Percy Thomas, Williamson & Brown, and so on). Many company names in the later chapters are pseudonyms in the original.
- Every number shown comes from the book. Where the book gives only a few price points, the chart says "ILLUSTRATIVE · 示意图" and only the stated levels are exact.
- Where the book contradicts itself (for example, the earthquake profit is given as both $250,000 and $300,000), the video uses the figure stated in the main telling.
- Manipulation techniques (Episode 10, and the wire-house trick in Episode 2) were legal and common in that era and are illegal today. They are explained so viewers can recognise them.
- Educational content only. Not investment advice. 仅供学习，不构成投资建议。
