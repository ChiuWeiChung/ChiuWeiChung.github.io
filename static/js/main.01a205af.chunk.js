(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[1],{13:function(e,t,n){"use strict";t.a="https://blooming-earth-41420.herokuapp.com"},16:function(e,t,n){e.exports={SideBar:"SideBar_SideBar__1Bj4z",Subject:"SideBar_Subject__3QCt3",Title:"SideBar_Title__16Cm3",List:"SideBar_List__1q4aL",Show:"SideBar_Show__1bMA4",ShowSideBar:"SideBar_ShowSideBar__1yNJB",expand:"SideBar_expand__2qV4f"}},21:function(e,t,n){e.exports={Hamburger:"Hamburger_Hamburger__3DGq4",Line:"Hamburger_Line__Y0eUZ"}},22:function(e,t,n){e.exports={Navbar:"Navigation_Navbar__1mbrV",Logo:"Navigation_Logo__2zcMc",HomeIcon:"Navigation_HomeIcon__2Vzqk",SignoutButton:"Navigation_SignoutButton__3dzk_"}},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return j}));var a=n(4),r=n.n(a),c=n(11),o=n(12),s=n.n(o),i=n(13),u=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"SIGN_IN_START"}),t.prev=1,t.next=4,s.a.post("".concat(i.a,"/user/login"),e);case 4:if(a=t.sent){t.next=7;break}throw new Error("Unable to Login");case 7:n({type:"SIGN_IN_FIRST",payload:{data:a.data}}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:"SIGN_IN_FAIL",payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},l=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a,c){var o,u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"SIGN_IN_START"}),n.prev=1,n.next=4,s.a.post("".concat(i.a,"/user/login2nd"),{email:c().auth.email,verifyNumber:e.verifyNumber});case 4:o=n.sent,u=new Date((new Date).getTime()+36e5),localStorage.setItem("token",o.data.token),localStorage.setItem("expirationDate",u),a(h(3600)),t.push("/"),a({type:"SIGN_IN_SUCCESS",payload:o.data}),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),a({type:"SIGN_IN_FAIL",payload:n.t0.message});case 16:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e,t){return n.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("token"))){e.next=6;break}return e.next=4,s.a.post("".concat(i.a,"/user/logout"),{},{headers:{Authorization:"Bearer ".concat(n)}});case 4:localStorage.removeItem("token"),localStorage.removeItem("expirationDate");case 6:t({type:"SIGN_OUT"});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){var t=localStorage.getItem("token");return function(n){setTimeout(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.post("".concat(i.a,"/user/logout"),{},{headers:{Authorization:"Bearer ".concat(t)}});case 2:n(d());case 3:case"end":return e.stop()}}),e)}))),1e3*e)}},j=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token")){e.next=5;break}d(),e.next=21;break;case 5:if(!((a=new Date(localStorage.getItem("expirationDate")))<new Date)){e.next=10;break}try{d()}catch(r){t({type:"CHECK_AUTH_ERROR",payload:r.message})}e.next=21;break;case 10:return e.prev=10,e.next=13,s.a.get("".concat(i.a,"/user/me"),{headers:{Authorization:"Bearer ".concat(n)}});case 13:c=e.sent,t({type:"SIGN_IN_SUCCESS",payload:{user:c.data,token:n}}),t(h((a.getTime()-(new Date).getTime())/1e3)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),t({type:"CHECK_AUTH_ERROR",payload:e.t0.message});case 21:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t){return e.apply(this,arguments)}}()}},28:function(e,t,n){e.exports={Search:"Search_Search__3wMgO",Result:"Search_Result__2I0jC",FilteredResult:"Search_FilteredResult__2UfGV"}},29:function(e,t,n){e.exports={LinkList:"NavigationItems_LinkList__L4KzC",sweep:"NavigationItems_sweep__1LwEL"}},34:function(e,t,n){"use strict";var a=n(51),r=n.n(a),c=n(1);t.a=function(){return Object(c.jsx)("div",{className:r.a.Loader})}},35:function(e,t,n){"use strict";t.a=function(e){return e.children}},36:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return j}));var a=n(4),r=n.n(a),c=n(11),o=n(12),s=n.n(o),i=n(13),u=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("".concat(i.a,"/note/all"));case 3:n=e.sent,t({type:"FETCH_NEWNOTE_SUCCESS",payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"FETCH_NOTE_FAIL",payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c,o){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.post("".concat(i.a,"/note/new"),{values:e},{headers:{Authorization:"Bearer ".concat(t)}});case 2:n.push("/"),c({type:"SUBMIT_NOTE",payload:!o().notes.render});case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},d=function(e,t,n,a){return function(){var o=Object(c.a)(r.a.mark((function c(o,u){return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.patch("".concat(i.a,"/note/edit/").concat(a.themeId,"/").concat(a.noteId),{values:e},{headers:{Authorization:"Bearer ".concat(t)}});case 2:n.push("/"),o({type:"SUBMIT_NOTE",payload:!u().notes.render});case 4:case"end":return r.stop()}}),c)})));return function(e,t){return o.apply(this,arguments)}}()},h=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark((function a(c,o){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.delete("".concat(i.a,"/note/delete/").concat(n.themeId,"/").concat(n.noteId),{headers:{Authorization:"Bearer ".concat(e)}});case 2:t.push("/"),c({type:"SUBMIT_NOTE",payload:!o().notes.render});case 4:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"FECTH_MARKDOWN_START"}),t.prev=1,t.next=4,s.a.get("".concat(i.a,"/note/").concat(e.themeId,"/").concat(e.noteId));case 4:if((a=t.sent).data){t.next=7;break}throw new Error("Markdown does not exist");case 7:n({type:"FETCH_MARKDOWN_SUCCESS",payload:a.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:"FETCH_MARKDOWN_FAIL",payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}},37:function(e,t,n){"use strict";var a=n(52),r=n.n(a),c=n(1);t.a=function(){return Object(c.jsxs)("div",{className:r.a.NoteLoader,children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]})}},51:function(e,t,n){e.exports={Loader:"Loader_Loader__2m2El",load8:"Loader_load8__2H4zI","sub-title":"Loader_sub-title__1EXxf"}},52:function(e,t,n){e.exports={NoteLoader:"NoteLoader_NoteLoader__3XzIY"}},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),s=n(3),i=n(38),u=n(39),l=n(50),d=n(48),h=n(49),j=n(23),b=n(28),f=n.n(b),p=n(15),O=n(5),m=n(1),_=Object(p.b)((function(e){return{notes:e.notes}}))(Object(O.g)((function(e){var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],o=Object(a.useRef)();Object(a.useEffect)((function(){var e=setTimeout((function(){o.current.value!==r&&c(o.current.value)}),500);return function(){return clearTimeout(e)}}),[r,o]);var s=function(){var t=[];e.notes.themes.length&&e.notes.themes.forEach((function(e){t.push.apply(t,Object(h.a)(e.noteCollection))}));var n=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())}));return!n.length|!r?null:n.map((function(t){return Object(m.jsx)("div",{onClick:function(){return n=t.themeId,a=t._id,void e.history.push("/note?themeId=".concat(n,"&noteId=").concat(a));var n,a},className:f.a.FilteredResult,children:t.title},t._id)}))};return Object(m.jsxs)("div",{className:f.a.Search,children:[Object(m.jsx)("i",{className:"fas fa-search"}),Object(m.jsx)("input",{ref:o,value:r,onChange:function(e){return c(e.target.value)},type:"text",placeholder:"Search for title..."}),Object(m.jsx)("div",{className:f.a.Result,children:s()})]})}))),g=n(21),S=n.n(g),x=function(e){return Object(m.jsxs)("div",{onClick:e.clicked,className:S.a.Hamburger,children:[Object(m.jsx)("div",{className:S.a.Line}),Object(m.jsx)("div",{className:S.a.Line}),Object(m.jsx)("div",{className:S.a.Line})]})},v=n(10),N=n(29),I=n.n(N),y=function(e){return Object(m.jsxs)("ul",{className:I.a.LinkList,children:[Object(m.jsx)("li",{className:I.a.sweep,children:Object(m.jsx)(v.c,{to:"/portfolio",children:"\u4f5c\u54c1\u96c6"})}),Object(m.jsx)("li",{className:I.a.sweep,children:Object(m.jsx)(v.c,{to:"/aboutme",children:"\u95dc\u65bc\u6211"})})]})},w=n(22),k=n.n(w),T=n(35),L=n(27),C=Object(p.b)((function(e){return{auth:e.auth}}),{signOut:L.d})((function(e){return Object(m.jsxs)("div",{className:k.a.Navbar,children:[Object(m.jsxs)("div",{className:k.a.Logo,children:[Object(m.jsx)("i",{className:"fas fa-code"}),Object(m.jsx)(v.b,{to:"/",children:" Rick \u7684\u958b\u767c\u7b46\u8a18"})]}),Object(m.jsx)(x,{clicked:e.clicked}),Object(m.jsx)(v.b,{className:k.a.HomeIcon,to:"/",children:Object(m.jsx)("i",{className:"fas fa-home"})}),Object(m.jsx)(_,{}),Object(m.jsx)(y,{}),function(){if(e.auth.isSignIn)return Object(m.jsx)(T.a,{children:Object(m.jsx)("button",{className:k.a.SignoutButton,onClick:e.signOut,children:"\u767b\u51fa"})})}()]})})),B=n(16),E=n.n(B),M=n(34);var A=Object(p.b)((function(e){return{themes:e.notes.themes,errorMessage:e.notes.errorMessage,isSignIn:e.auth.isSignIn}}))((function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),r=n[0],c=n[1],o=e.showSideBar?[E.a.SideBar,E.a.ShowSideBar].join(" "):[E.a.SideBar],s=function(e){e.target.closest(".".concat(E.a.Subject)).childNodes[1].classList.toggle(E.a.Show)};return Object(m.jsx)("div",{className:o,children:e.themes.length||e.errorMessage?e.errorMessage&&!e.themes.length?e.errorMessage:e.themes.filter((function(e){return"portfolio"!==e.type})).map((function(t){return Object(m.jsxs)("div",{className:E.a.Subject,children:[Object(m.jsxs)("div",{className:E.a.Title,onClick:s,children:[Object(m.jsx)("img",{style:r?{height:"2rem",opacity:"1"}:null,src:t.themeImg,alt:t.name,onLoad:function(){return c(!0)}}),Object(m.jsx)("p",{children:t.name}),Object(m.jsx)("i",{style:{marginLeft:"auto"},className:"fas fa-sort-down"})]}),Object(m.jsx)("ul",{className:E.a.List,children:t.noteCollection.map((function(t){return Object(m.jsx)("li",{onClick:e.sideBarToggler,children:Object(m.jsx)(v.b,{to:"/note?themeId=".concat(t.themeId,"&noteId=").concat(t._id),children:t.title})},t._id)}))})]},t._id)})):Object(m.jsx)(M.a,{})})})),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showSideBar:!1,showList:{name:null,toggle:!1}},e.sideBarToggler=function(){e.setState((function(e){return{showSideBar:!e.showSideBar}}))},e.listToggler=function(t){e.setState((function(e){var n=e.showList,a=Object(s.a)({},n);return n.name===t?a.toggle=!n.toggle:(a.name=t,a.toggle=!0),{showList:a}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(C,{clicked:this.sideBarToggler}),Object(m.jsx)(A,{showSideBar:this.state.showSideBar,showList:this.state.showList,listToggler:this.listToggler,sideBarToggler:this.sideBarToggler}),this.props.children]})}}]),n}(r.a.Component),F=(n(83),n(36)),H=n(37),z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,320))})),U=r.a.lazy((function(){return Promise.all([n.e(3),n.e(8)]).then(n.bind(null,316))})),D=r.a.lazy((function(){return n.e(5).then(n.bind(null,319))})),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,317))})),K=r.a.lazy((function(){return n.e(7).then(n.bind(null,318))})),W=r.a.lazy((function(){return n.e(6).then(n.bind(null,321))})),q=Object(p.b)((function(e){return{isSignIn:e.auth.isSignIn,renderListener:e.notes.render}}),{fetchNote:F.c,authCheckState:L.a})((function(e){Object(a.useEffect)((function(){e.fetchNote(),e.authCheckState()}),[e]);var t=Object(m.jsxs)(O.d,{children:[e.isSignIn&&Object(m.jsx)(O.b,{path:"/note/new",component:z}),e.isSignIn&&Object(m.jsx)(O.b,{path:"/note/edit",component:z}),!e.isSignIn&&Object(m.jsx)(O.b,{exact:!0,path:"/dev/auth",component:G}),Object(m.jsx)(O.b,{exact:!0,path:"/note",component:U}),Object(m.jsx)(O.b,{path:"/portfolio",component:K}),Object(m.jsx)(O.b,{path:"/aboutme",component:D}),Object(m.jsx)(O.b,{path:"/",component:W}),Object(m.jsx)(O.a,{to:"/"})]});return Object(m.jsx)("div",{children:Object(m.jsx)(R,{children:Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)("div",{className:"lazy-loader",children:Object(m.jsx)(H.a,{})}),children:t})})})})),V=(n(84),n(18)),J=n(53),P={isSignIn:!1,name:null,email:null,id:null,token:null,errorMessage:null,showLoader:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"SIGN_IN_START":return Object(s.a)(Object(s.a)({},e),{},{showLoader:!0});case"SIGN_IN_FIRST":return Object(s.a)(Object(s.a)({},e),{},{email:a.data,showLoader:!1,errorMessage:null});case"SIGN_IN_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{isSignIn:!0,name:a.user.name,id:a.user._id,email:a.user.email,token:a.token});case"SIGN_IN_FAIL":return Object(s.a)(Object(s.a)({},P),{},{errorMessage:a});case"SIGN_OUT":return Object(s.a)({},P);default:return e}},Y={errorMessage:null,themes:[],fetchedMarkdown:null,render:!1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_NEWNOTE_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{themes:t.payload,errorMessage:null});case"FETCH_NOTE_FAIL":return Object(s.a)(Object(s.a)({},e),{},{errorMessage:t.payload});case"SUBMIT_NOTE":return Object(s.a)(Object(s.a)({},e),{},{render:t.payload});case"FECTH_MARKDOWN_START":return Object(s.a)(Object(s.a)({},e),{},{errorMessage:null,fetchedMarkdown:null});case"FETCH_MARKDOWN_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{fetchedMarkdown:t.payload,errorMessage:null});case"FETCH_MARKDOWN_FAIL":return Object(s.a)(Object(s.a)({},e),{},{errorMessage:t.payload});default:return e}},Z=Object(V.b)({auth:X,notes:Q}),$=V.c,ee=Object(V.d)(Z,$(Object(V.a)(J.a)));o.a.render(Object(m.jsx)(p.a,{store:ee,children:Object(m.jsx)(v.a,{children:Object(m.jsx)(q,{})})}),document.querySelector("#root"))}},[[85,2,4]]]);
//# sourceMappingURL=main.01a205af.chunk.js.map