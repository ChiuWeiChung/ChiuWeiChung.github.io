(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[10],{311:function(e,t,n){e.exports={AuthPage:"AuthPage_AuthPage__1BF5A",Login:"AuthPage_Login__3OyBV"}},317:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(11),s=n(23),c=n(0),o=n(311),u=n.n(o),l=n(15),b=n(93),j=n(27),h=n(34),m=n(1);t.default=Object(l.b)((function(e){return{auth:e.auth}}),{signIn:j.b,signInSecond:j.c,signOut:j.d})((function(e){var t=Object(c.useState)(60),n=Object(s.a)(t,2),a=n[0],o=n[1];Object(c.useEffect)((function(){var t;return e.auth.email&&(t=setTimeout((function(){o((function(e){return e-1}))}),1e3)),0===a&&(clearTimeout(t),e.signOut(),e.history.push("/")),function(){return clearTimeout(t)}}),[a,e]);var l=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.signIn(n,o);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){return e.auth.showLoader?Object(m.jsx)(h.a,{}):e.auth.errorMessage?Object(m.jsx)("p",{style:{color:"red",fontWeight:"bold",textAlign:"center"},children:"Unable to LogIn  !!!"}):void 0};return e.auth.email?Object(m.jsxs)("div",{className:[u.a.AuthPage,"Main-Container"].join(" "),children:[Object(m.jsx)(b.b,{onSubmit:function(t){e.signInSecond(t,e.history)},render:function(e){var t=e.handleSubmit;e.form,e.invalid,e.values;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("label",{children:"Verify Number"}),Object(m.jsx)(b.a,{component:"input",type:"text",name:"verifyNumber",placeholder:""}),Object(m.jsx)("button",{className:u.a.Login,type:"submit",children:"Send"}),Object(m.jsxs)("h3",{children:[a," s"]})]})}}),j()]}):Object(m.jsxs)("div",{className:[u.a.AuthPage,"Main-Container"].join(" "),children:[Object(m.jsx)(b.b,{onSubmit:l,render:function(e){var t=e.handleSubmit;e.form,e.invalid,e.values;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("label",{children:"Email"}),Object(m.jsx)(b.a,{component:"input",type:"email",name:"email",placeholder:"Email"}),Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)(b.a,{component:"input",type:"password",name:"password",placeholder:"password"}),Object(m.jsxs)("button",{className:u.a.Login,type:"submit",children:[Object(m.jsx)("i",{className:"fas fa-sign-in-alt",style:{marginRight:"1rem"}}),"Login"]})]})}}),j()]})}))}}]);
//# sourceMappingURL=10.9b9481f9.chunk.js.map