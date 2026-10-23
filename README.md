# 股票大作手回忆录 · 漫剧 / Reminiscences of a Stock Operator · Motion Comic

This is an animated, bilingual motion comic and study film based on Edwin Lefèvre's *Reminiscences of a Stock Operator* (1923, public domain).
- **Language:** the voice-over is in English, with burned-in English and Chinese subtitles. Every chart, table and caption on screen carries both languages.
- **Narrator:** the book's narrator, Larry Livingston, is widely understood to be Jesse Livermore. Here he is voiced as an old man looking back.

一部以《股票大作手回忆录》为蓝本的漫剧兼学习资料（原书1923年出版，已进入公有领域）：
- 英文配音，中英双语字幕；画面上的所有文字、图表和表格均为中英对照。
- 旁白和主角是晚年的利文斯顿（即杰西·利弗莫尔），配音苍老、沉稳。
- 剧情严格按原书展开，不做虚构加工。每个方法和历史案例都配有逐步演算的数字、动态图表和历史背景照片。

## Two versions · 两个版本

| Version | Length | Source |
|---|---|---|
| 30-minute single video · 30分钟精华版 | ~31 min | `engine2/story/short/` |
| Full episodic version · 完整分集版 | ~125 min, prologue + 12 episodes + finale | `engine2/story/full/` |

The full version runs as follows:

| # | Episode · 集名 | Book chapters |
|---|---|---|
| 0 | Prologue · 序章 | — |
| 1 | The Bucket Shop Boy · 对赌行少年 | I–II |
| 2 | Wall Street Is Not a Bucket Shop · 华尔街不是对赌行 | III–IV |
| 3 | Sit Tight · 坐得住 | V–VI |
| 4 | Right and Busted · 看对了，却破产了 | VII–VIII |
| 5 | The Panic of 1907 · 1907年大恐慌 | IX–X |
| 6 | Cotton King, Cotton Fool · 棉花大王，棉花傻瓜 | XI–XII |
| 7 | The Comeback · 东山再起 | XIII–XIV |
| 8 | The Unexpectable and the Tip · 意外与消息 | XV–XVI |
| 9 | Warnings, Not Breaks · 留意警告，而非暴跌 | XVII–XVIII |
| 10 | Corners and Keene · 逼空与基恩 | XIX–XX |
| 11 | Making a Market · 做市 | XXI–XXII |
| 12 | Insiders, Brokers and Bull Liars · 内部人、经纪商与利好骗子 | XXIII–XXIV |
| 13 | Livermore's Rules · 利弗莫尔法则总结 | review of the whole book |

Each episode opens with the story and moves into the method, with worked numbers. It ends with a takeaway card and a mistake review table (Mistake / Cause / Rule).

## How it is made · 制作方式 (`engine2/`)

Everything is generated from source. There is no stock footage and no AI imagery.

- `engine2/web/*.js` is an animation engine that runs in headless Chromium. Each frame is drawn from the shot and the current time. It provides:
  - rigged period characters with blinking, breathing, gestures, expressions and lip-sync driven by the voice track;
  - parallax sets, camera moves and transitions;
  - animated widgets: price charts that draw in step with the narration, live P&L, tables, flows, equations, counters, quote boards and ticker tape.
- `engine2/story/` holds the scripts, one module per part or episode. `engine2/STORY_GUIDE.md` documents the authoring API and the content rules.
- `engine2/tts.py` voices every line with Kokoro TTS (Apache-2.0, synthetic speakers):
  - The narrator and Livingston use an aged, steady blend of voices.
  - Other characters get their own voices.
  - Each line returns word timestamps, so graphics can be cued to individual words.
- `engine2/sfx.py` synthesises all sound effects and ambiences procedurally. No samples are used.
- `engine2/build.py` resolves cues, renders the clips (`render.mjs`), mixes voice, effects and music with ducking, burns in ASS subtitles, and writes SRT and chapter files.

```bash
# Python 3.12 venv with kokoro, soundfile, numpy, pillow; Node 18+ with Playwright (Chromium); ffmpeg
python engine2/build.py short --workers 4          # -> output/v2/short/short.mp4
python engine2/build.py full  --workers 4          # -> output/v2/full/Reminiscences_E00…E13.mp4
python engine2/build.py full --stills              # review contact sheets only (fast)
python engine2/build.py full --only e05_           # rebuild the shots whose id contains "e05_"
```

Fonts (OFL / Apache) go in `assets/fonts/`: Bangers, Comic Neue, Oswald, Playfair Display, Noto Sans SC, Noto Serif SC, Special Elite, IM FELL English.

The first motion-comic build (v1) is kept in `engine/` for reference.

## Credits · 素材来源

All historical photographs and music are public domain or CC0. The media files are kept out of git; `assets/pd/credits.json` lists each file's source URL, creator, date and rights.

- **Photos:**
  - Library of Congress: Detroit Publishing Co., Bain News Service, National Photo Co. and Chronicling America.
  - Smithsonian Open Access (CC0).
  - Pre-1931 publications scanned on the Internet Archive: *The World's Work* 1901/1907 and *The Financial World* 1923.
- **Music:**
  - Chopin, performed by Musopen artists (CC0).
  - Pre-1923 recordings from the Library of Congress National Jukebox and the Internet Archive: Maple Leaf Rag (NORK, 1923), Desecration Rag (Felix Arndt, 1914), "1915 Rag" (Mike Bernard, 1913), Träumerei (Hans Kindler, 1916), and Rachmaninoff's Prelude in C-sharp minor (Julius Schendel, 1915).

## Accuracy notes · 准确性说明

- The book's own names are used (Larry Livingston, Fullerton, Harding Brothers, Percy Thomas, Williamson & Brown, and so on). Many company names in the later chapters are pseudonyms in the original.
- Every number spoken comes from the book, or is plain arithmetic on the book's numbers and is shown as such on screen.
- When the book gives only a few prices, the chart is marked "ILLUSTRATIVE PATH · 示意走势", and only the stated prices are exact.
- Historical background (dates of the Northern Pacific corner, the 1906 earthquake, the 1907 panic, the Lusitania, the 1914 Exchange closure) is limited to well-established facts and is labelled as a historical note.
- Where the book contradicts itself, the episode uses the figure from the main telling. For example, the earthquake profit is given as both $250,000 and $300,000.
- Manipulation techniques (wire-house tricks, pools, corners, Keene's methods) were common in that era and are illegal today. They are explained so viewers can recognise them from the buyer's side.
- This film studies a 1923 book. It is not investment advice.
