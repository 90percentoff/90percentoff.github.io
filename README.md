# Web 基本原理與技術 Lab 2：個人網頁範例

這是供學習與修改的起始專案，不是完成的作業報告。請將個人介紹、連結、心得與內容改成自己的資訊，實際操作並自行截圖。

## 檔案
- `index.html`：網頁內容與按鈕
- `style.css`：排版外觀
- `script.js`：jQuery `slideToggle()` 互動與 `$.getJSON()` Ajax 請求
- `data.json`：要讀取的學習清單

## 本機預覽
請用 VS Code 的 Live Server 擴充套件開啟 `index.html`，或在已安裝 Python 時於這個資料夾輸入 `python -m http.server 8000`，瀏覽 `http://localhost:8000`。

直接雙擊 index.html 會以 file:// 開啟，Ajax 可能因瀏覽器安全限制無法讀取 JSON。上傳 GitHub Pages 後可使用正式網址測試。

## GitHub Pages
新建公開儲存庫 `YOURUSERNAME.github.io`（請改成 GitHub 帳號），將檔案放在 main 分支根目錄，在 Settings → Pages 將來源設為 Deploy from a branch，Branch 選 main，資料夾選 /(root)，按 Save。

保留自己的實作及練習截圖，並於報告說明使用 AI 的範圍與自行修改的部分。
