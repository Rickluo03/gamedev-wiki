# AGENTS.md - Game Dev & AI Behavior Tree Wiki

## 1. 專案目的 (Project Overview)
本專案為一個靜態遊戲開發技術文件庫（Game Dev Wiki），專注於記錄 3D 潛行／動作遊戲中的系統架構、AI 行為樹（Behavior Tree）、環境查詢系統（EQS）與互動機關設計。
網站採用純靜態架構部署於 GitHub Pages，設計目標是讓開發者或 AI 協作者能透過統一的元件規範，快速擴充新的技術日誌頁面。

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
- `index.html`：首頁，負責顯示專案簡介與所有開發模組的索引卡片。
- `assets/css/style.css`：全站唯一樣式表，所有頁面共用。
- `assets/js/app.js`：存放全站資料清單 `WIKI_MODULES` 陣列，並負責動態生成側邊欄與首頁卡片。
- `modules/`：所有技術日誌子頁面必須存放在此資料夾。
- **檔案命名強制規範**：`modules/` 內的 HTML 檔案必須採用 `兩位數流水號-英文小寫短橫線命名.html`（例如：`01-ai-behavior-tree.html`、`03-eqs-cover-system.html`）。

## 4. 新增日誌頁面的標準結構 (Standard Page Template)
每當新增一篇開發日誌（`modules/XX-name.html`）時，`<main class="content">` 內部必須嚴格按照以下 4 個核心區塊順序撰寫，不得省略或調換：
1. **Header 區塊 (`.module-header`)**：包含模組編號徽章（`<span class="badge">`）、主標題（`<h1>`）、適用引擎/版本資訊與最後更新日期。
2. **區塊一：機制設計目標 (`<h2>1. 機制設計目標</h2>`)**：使用 `.callout-box` 說明該系統解決的遊戲體驗問題與核心設計指標。
3. **區塊二：邏輯流程圖 (`<h2>2. 邏輯流程圖</h2>`)**：使用 `<div class="mermaid">` 撰寫狀態機（FSM）或行為樹（Behavior Tree）的節點流向圖。
4. **區塊三：關鍵參數設定表 (`<h2>3. 關鍵參數設定表</h2>`)**：使用標準 `<table>` 列出變數名稱（`<code>` 包覆）、資料型別、預設值與設計用途說明。
5. **區塊四：測試與平衡性調整紀錄 (`<h2>4. 測試與平衡性調整紀錄</h2>`)**：使用 `.changelog-list` 記錄版本迭代中發現的 Bug 或數值調整原因（格式：`[v1.X] 問題現象 -> 調整方案`）。

## 5. AI 協作與修改絕對規則 (Strict Rules for AI Agents)
當 AI 收到「新增一篇關於 [某機制] 的開發日誌」或「修改現有文件」的指令時，必須嚴格遵守以下步驟：
1. **單一資料來源同步（Single Source of Truth）**：建立新的 `modules/XX-name.html` 後，**必須同步在 `assets/js/app.js` 的 `WIKI_MODULES` 陣列中新增該筆資料物件**（包含 `id`, `title`, `category`, `summary`, `path`, `date`）。側邊欄與首頁卡片會自動讀取此陣列渲染，嚴禁在 HTML 中寫死側邊欄連結。
2. **相對路徑規範**：`modules/` 底下的子頁面在引入資源時，必須使用 `../assets/css/style.css` 與 `../assets/js/app.js`；而 `WIKI_MODULES` 中的 `path` 屬性統一填寫相對於根目錄的路徑（例如：`modules/03-stealth-sound.html`），由 `app.js` 自動處理跨層級路徑前綴。
3. **禁止破壞全站樣式**：除非使用者明確要求修改外觀，否則禁止更動 `assets/css/style.css` 的 `:root` 色票與版面寬度變數。
4. **語言與術語規範**：一律使用「繁體中文」撰寫說明，遊戲開發專有名詞首次出現時需括號加註英文原文（例如：環境查詢系統 (Environment Query System, EQS)、黑板變數 (Blackboard)）。