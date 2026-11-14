// 【單一資料來源】未來新增任何頁面，只需在此陣列新增一筆物件，側邊欄與首頁卡片即會自動更新
const WIKI_MODULES = [
    {
        id: "01",
        title: "敵人巡邏與警戒 AI 行為樹",
        category: "AI Architecture",
        summary: "基於 Behavior Tree 與 Blackboard 實作三段式警戒狀態機（巡邏、疑慮調查、追擊交戰）。",
        path: "modules/01-ai-behavior-tree.html",
        date: "2026-11-10"
    },
    {
        id: "02",
        title: "環境互動陷阱觸發機制",
        category: "Gameplay Mechanics",
        summary: "模組化感應器與執行器分離設計，支援雷射絆線、壓力板與冷卻重置狀態機。",
        path: "modules/02-interactive-traps.html",
        date: "2026-11-14"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const isSubPage = window.location.pathname.includes("/modules/");
    const prefix = isSubPage ? "../" : "";
    const currentFile = window.location.pathname.split("/").pop() || "index.html";

    // 1. 動態渲染側邊導覽列
    const navContainer = document.getElementById("sidebar-nav");
    if (navContainer) {
        let navHTML = `
      <li><a href="${prefix}index.html" class="nav-link ${currentFile === "index.html" ? "active" : ""}">🏠 專案總覽 (Home)</a></li>
      <div class="nav-section-title">開發日誌模組 (Modules)</div>
    `;

        WIKI_MODULES.forEach((mod) => {
            const modFileName = mod.path.split("/").pop();
            const isActive = currentFile === modFileName ? "active" : "";
            navHTML += `
        <li>
          <a href="${prefix}${mod.path}" class="nav-link ${isActive}">
            <strong>#${mod.id}</strong> ${mod.title}
          </a>
        </li>
      `;
        });

        navContainer.innerHTML = navHTML;
    }

    // 2. 若在首頁，動態渲染模組卡片
    const cardGrid = document.getElementById("module-cards");
    if (cardGrid) {
        cardGrid.innerHTML = WIKI_MODULES.map((mod) => `
      <a href="${mod.path}" class="module-card">
        <div>
          <span class="badge">${mod.category} · #${mod.id}</span>
          <h3>${mod.title}</h3>
          <p>${mod.summary}</p>
        </div>
        <div class="card-footer">閱讀技術文件 → (${mod.date})</div>
      </a>
    `).join("");
    }

    // 3. 初始化 Mermaid 流程圖（若頁面有載入 Mermaid）
    if (typeof mermaid !== "undefined") {
        mermaid.initialize({ startOnLoad: true, theme: "dark" });
    }
});