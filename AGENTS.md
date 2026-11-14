# AGENTS.md - Game Dev & AI Behavior Tree Wiki

## 1. 專案目的 (Project Overview)
本專案為一個靜態遊戲開發技術文件庫（Game Dev Wiki），專注於記錄 3D 潛行／動作遊戲中的系統架構、AI 行為樹（Behavior Tree）、環境查詢系統（EQS）與互動機關設計。
網站採用純靜態架構部署於 GitHub Pages，設計目標是讓開發者或 AI 協作者能透過統一的元件規範與單一資料來源，快速擴充新的技術日誌頁面與引擎實作截圖。

## 2. 技術棧與視覺設計系統 (Tech Stack & Design System)
- **核心技術**：HTML5, Vanilla CSS3, Vanilla JavaScript (ES6+)，並透過 CDN 引入 `Mermaid.js` 繪製邏輯狀態機與行為樹流程圖。不使用前端建置工具，確保零依賴與快速載入。
- **視覺風格（Dark Engine Theme）**：模仿 Unreal Engine / 現代 IDE 的深色專業介面。
  - 全站背景色：`#0B0F19` (深邃夜空黑)
  - 側邊欄與卡片背景：`#111827` (暗岩灰)
  - 邊框線條：`#1F2937`
  - 主強調色：`#38BDF8` (引擎藍，用於標題強調、Active 狀態與重點標籤)
  - 輔助強調色：`#10B981` (節點綠，用於已驗證／運作正常狀態)
  - 主要文字：`#F3F4F6`；次要說明文字：`#9CA3AF`
- **版面配置**：左側固定側邊欄（寬度 `270px`）+ 右側內容閱讀區（最大寬度 `900px` 置中）。

## 3. 目錄結構與檔案命名規範 (Directory & Naming Rules)
```text
/
├── AGENTS.md                   # AI 開發規範文件
├── index.html                  # 首頁（專案總覽與自動渲染的模組卡片列表）
├── assets/
│   ├── css/
│   │   └── style.css           # 全站共用樣式表
│   ├── js/
│   │   └── app.js              # 存放 WIKI_MODULES 陣列，動態渲染導覽列與卡片
│   └── images/                 # 存放所有引擎藍圖、C++ 程式碼與遊戲實機截圖
│       ├── 01-bt-blueprint.png
│       └── 02-trap-logic.png
└── modules/                    # 所有技術日誌子頁面皆放置於此
    ├── 01-ai-behavior-tree.html
    └── 02-interactive-traps.html