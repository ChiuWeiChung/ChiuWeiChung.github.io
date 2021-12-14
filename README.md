# 自製部落格網站


## [點擊進入自製部落格網站](https://chiuweichung.github.io/)


* 使用 React 建立之 SPA
* 使用 Redux 及 React Final Form 進行狀態管理
* 使用 CSS Modules 方案切版
* 開發並串接 RESTful API (Node.js / Express / Mongoose & MongoDB)
* 以 JWT-Based Authentication 進行身分認證


![myblog]()

因為平常就有撰寫 Markdown 格式的筆記，為了方便自己存取這些筆記，於是建立這個單頁應用網站 (SPA) 的部落格，另外也作為存放作品集和個人形象的網站。 但是對於分享筆記這部分，由於筆記都是透過 AJAX 存取，而非產生靜態網頁，對於 SEO 而言有許多問題需要克服，後續會再針對這塊進行研究。 未來也會考慮將筆記轉為利用 Hexo 部署產生靜態網站。

## 筆記格式

由於我的筆記都是以 Markdown 格式存放在 GitHub 的 Repository 內部，因此 Client Side 所拿到的資料為 Markdwon 格式，在這裡我透過第三方套件 [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) 將格式轉為 React 能理解的 JSX，再透過 React 將其渲染在 DOM 上面。

## 認證 & 授權機制

在之前練習過的專案中，大部分是透過 Session 和 Cookie 實作驗證機制（ Passport.js ），但這次則打算手刻JWT-Based Authentication 來符合 RESTful API，以達到無狀態請求 (Stateless Request) 的目的。

密碼的部分透過 [bcrypt 演算法](https://www.npmjs.com/package/bcrypt) 進行加密，並且搭配 [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) 套件進行 Token 的驗證，回傳的 Token 儲存在瀏覽器的 LocalStorage 內，以維持登入的效果。 

雖然把 Token 存放在 LocalStorage 會有 XSS 的疑慮，但由於 React 是接收 JSX 格式，可以幫助我們跳脫 HTML 的功能 (JSX Prevents Injection Attacks )，所以對於 XSS 而言有 "基本" 的保護作用。


