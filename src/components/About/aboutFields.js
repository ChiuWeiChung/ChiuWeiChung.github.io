import skill from "./Skill/skill";


// const selfIntroduction = `
// 你好，我是 Rick，工程師出身，具備跨部門溝通協調能力。

// * 研究所接觸程式語言 (Fortran)，以分子動力學完成陶瓷材料模擬。
// * 2020 年利用工作之餘在 Udemy 上面自學前端開發。
// * 現今專注於 React.js 開發。
// * 具備強勁的學習心，期待未來工作上挑戰及帶來的成就感
// `

const FIELDS = [
    { id: 1, type: "skills", label: "具備技能", content: skill() },
    { id: 2, type: "about", label: "關於我", content: '你好，我是 Rick，工程師出生，一位樂觀開朗，勇於挑戰自我的人，2020 年利用工作之餘在 Udemy 上面自學前端開發，具備強勁的學習心讓自己能夠外掛更多的技能，現今專注前端 React.js 開發，也具備後端開發技術 ( Node.js & Express) ，因此不排斥後端技術的工作，期待未來可以在前端領域上發展，也期許團隊有自己的加入，能夠更茁壯更好。' },
];

export default FIELDS;

