(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[6],{313:function(e,t,n){e.exports={Home:"Home_Home__f2SD4",Container:"Home_Container__3-v5L",Header:"Home_Header__2aqls",Subject:"Home_Subject__1kq-9",Title:"Home_Title__1AWsY",Date:"Home_Date__3HxSS",Desc:"Home_Desc__2Pomq"}},314:function(e,t,n){e.exports={Pagination:"Pagination_Pagination__1qx5L"}},315:function(e,t,n){e.exports={Inset:"Inset_Inset__gL_TG",Item:"Inset_Item__1dp8X",Description:"Inset_Description__FeLJR"}},321:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(86),c=n(23),s=n(0),i=n(313),o=n.n(i),l=n(15),u=n(10),j=n(314),h=n.n(j),d=n(35),f=n(1),b=function(e){return Object(f.jsx)("div",{className:h.a.Pagination.concat(" my-2 "),children:function(t){var n=Math.ceil(e.itemLength/e.numPerPage),a=1===t?null:Object(f.jsxs)("div",{onClick:function(){return e.gotoPage(t-1)},children:[Object(f.jsx)("i",{style:{margin:"5px"},className:"fas fa-arrow-circle-left",children:"  "}),"Page ",t-1]}),r=t===n?null:Object(f.jsxs)("div",{onClick:function(){return e.gotoPage(t+1)},children:["Page ",t+1,Object(f.jsx)("i",{style:{margin:"5px"},className:"fas fa-arrow-circle-right",children:"  "})]});return Object(f.jsxs)(d.a,{children:[a,r]})}(e.currentPage)})},m=n(34),g=n(315),p=n.n(g),O=function(){return Object(f.jsxs)("div",{className:p.a.Inset,children:[Object(f.jsxs)("div",{className:p.a.Item,children:[Object(f.jsx)("i",{className:"fab fa-github"}),Object(f.jsx)("a",{href:"https://github.com/ChiuWeiChung",target:"_blank",rel:"noopener noreferrer",children:" Rick Chiu"})]}),Object(f.jsxs)("div",{className:p.a.Item,children:[Object(f.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(f.jsx)("p",{children:" Taiwan, Taipei"})]}),Object(f.jsx)("div",{className:p.a.Item,children:Object(f.jsx)("p",{className:p.a.Description,children:"\u552f\u6709\u52aa\u529b\u624d\u80fd\u6beb\u4e0d\u8cbb\u529b\uff0c\u5373\u4f7f\u6bcf\u5929\u52aa\u529b\u4e00\u9ede\u9ede... \u5728\u9019\u88e1\u7d00\u9304\u5b78\u7fd2\u7b46\u8a18\u548c\u958b\u767c\u5fc3\u5f97 "})})]})};t.default=Object(l.b)((function(e){var t=[];return Object(a.a)(e.notes.themes).forEach((function(e){e.noteCollection.forEach((function(t){t.themeType=e.name})),t.push.apply(t,Object(a.a)(e.noteCollection))})),t.sort((function(e,t){return new Date(t.updatedDate)-new Date(e.updatedDate)})),{notes:t,errorMessage:e.notes.errorMessage,isSignIn:e.auth.isSignIn}}))((function(e){var t=Object(s.useState)(1),n=Object(c.a)(t,2),a=n[0],i=n[1],l=Object(s.useRef)(null);Object(s.useEffect)((function(){l.current.scrollTo(0,0);var t,n=new URLSearchParams(e.history.location.search),c={},s=Object(r.a)(n);try{for(s.s();!(t=s.n()).done;){var o=t.value;c[o[0]]=o[1]}}catch(u){s.e(u)}finally{s.f()}c.page?a.toString()!==c.page&&i(Number(c.page)):i(1)}),[a,e.history.location.search]);var j=function(t){i(t),e.history.replace("/?page=".concat(t))};return Object(f.jsxs)("div",{className:[o.a.Home,"Main-Container"].join(" "),ref:l,children:[Object(f.jsx)(O,{}),function(){if(!e.notes.length&&!e.errorMessage)return Object(f.jsx)(m.a,{});if(!e.notes.length&&e.errorMessage)return Object(f.jsx)("h2",{children:e.errorMessage});var t=e.notes.slice(5*(a-1),5*a);return Object(f.jsxs)("div",{className:o.a.Container,children:[Object(f.jsxs)("header",{className:o.a.Header,children:[Object(f.jsx)("h1",{className:o.a.MainTitle,children:"\u8fd1\u671f\u767c\u5e03"}),e.isSignIn&&Object(f.jsx)(u.b,{to:"/note/new",children:Object(f.jsx)("i",{className:"fas fa-plus-circle"})})]}),t.map((function(t){return Object(f.jsxs)("div",{onClick:function(){return n=t.themeId,a=t._id,void e.history.push("/note?themeId=".concat(n,"&noteId=").concat(a));var n,a},className:o.a.Subject,children:[Object(f.jsxs)("div",{className:o.a.Date,children:[Object(f.jsxs)("span",{style:{marginRight:"1rem"},children:[Object(f.jsx)("i",{className:"far fa-calendar-alt"})," ",new Date(t.updatedDate).toLocaleDateString()]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("i",{className:"far fa-sticky-note"})," ",t.themeType]})]}),Object(f.jsx)("div",{className:o.a.Title,children:t.title}),Object(f.jsx)("div",{className:o.a.Desc,children:t.description.substring(0,120)+"..."})]},t._id)})),Object(f.jsx)(b,{gotoPage:j,itemLength:e.notes.length,numPerPage:5,currentPage:a})]})}()]})}))},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(24);function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=6.1841c203.chunk.js.map