import React from 'react';
import classes from './skill.module.css';
const skill = () => {
    return (
        <div className={classes.Skill}>
            <ul>
                <div className={classes.Title}><i style={{ color: 'orangered' }} className="fab fa-html5"></i> HTML5 &amp; <i style={{ color: 'cornflowerblue' }} className="fab fa-css3-alt"></i> CSS3</div>
                <li>熟悉 網頁版面切版</li>
                <li>熟悉 RWD 網頁開發</li>
                <li>使用 Bootstrap 4 開發經驗</li>
                <li>使用 CSS 預處理器 (Sass/SCSS) </li>
            </ul>
            <ul>
                <div className={classes.Title}><i style={{ color: 'yellow' }} className="fab fa-js-square"></i> JavaScript</div>
                <li>熟悉 JavaScript 基礎與 ES6 標準</li>
                <li>熟悉 AJAX / JSON 串接 RESTful API</li>
                <li>MVC 模式實作經驗</li>
                <li>使用 TypeScript 開發經驗</li>
            </ul>
            <ul>
                <div className={classes.Title}><i style={{ color: 'deepskyblue' }} className="fab fa-react"></i> React</div>
                <li>熟悉 Component 生命週期</li>
                <li>使用 Redux 狀態管理</li>
                <li>使用 React Hook (useState, useEffect...etc)</li>
                <li> SPA 網頁開發</li>
            </ul>
            <ul>
                <div className={classes.Title}><i style={{ color: 'limegreen' }} className="fab fa-node-js"></i> Node.js</div>
                <li>使用 Express 框架</li>
                <li>使用 Mongoose 進行 MongoDB 資料庫操作</li>
                <li>RESTful API 開發經驗</li>
                <li>JWT &amp; Passport.js 實作驗證機制 </li>
            </ul>
            <ul>
                <div className={classes.Title}><i className="fas fa-layer-group"></i> Development Tool</div>
                <li>Webpack 自動編譯與打包</li>
                <li>Git 版本控制 (Git Flow 開發流程)</li>
                <li>GitHub 遠端版本控制</li>
                <li>VS Code 開發環境</li>
            </ul>
        </div>
    )
}

export default skill