(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(24),c=n.n(r),o=n(12),u=n(25),i=n(10);n(33);var s=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};var m=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)},E=n(11),d=n.n(E),f={getBooks:function(){return d.a.get("/api/books")},getBook:function(e){return d.a.get("/api/books/"+e)},deleteBook:function(e){return d.a.delete("/api/books/"+e)},saveBook:function(e){return d.a.post("/api/books",e)}},h=n(8);function b(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},n)}function p(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function v(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},n)}n(52);function g(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function k(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function j(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function N(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"20"},e)))}function O(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var y=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),E=Object(i.a)(c,2),d=E[0],y=E[1];function B(){f.getBooks().then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})}function w(e){var t=e.target,n=t.name,a=t.value;y(Object(u.a)({},d,Object(o.a)({},n,a)))}return Object(a.useEffect)(function(){B()},[]),l.a.createElement(b,{fluid:!0},l.a.createElement(p,null,l.a.createElement(v,{size:"md-6"},l.a.createElement(m,null,l.a.createElement("h1",null,"What Books Should I Read?")),l.a.createElement("form",null,l.a.createElement(j,{onChange:w,name:"title",placeholder:"Title (required)"}),l.a.createElement(j,{onChange:w,name:"author",placeholder:"Author (required)"}),l.a.createElement(N,{onChange:w,name:"synopsis",placeholder:"Synopsis (Optional)"}),l.a.createElement(O,{disabled:!(d.author&&d.title),onClick:function(e){e.preventDefault(),d.title&&d.author&&f.saveBook({title:d.title,author:d.author,synopsis:d.synopsis}).then(function(e){return B()}).catch(function(e){return console.log(e)})}},"Submit Book"))),l.a.createElement(v,{size:"md-6 sm-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"Books On My List")),n.length?l.a.createElement(g,null,n.map(function(e){return l.a.createElement(k,{key:e._id},l.a.createElement(h.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(s,{onClick:function(){return t=e._id,void f.deleteBook(t).then(function(e){return B()}).catch(function(e){return console.log(e)});var t}}))})):l.a.createElement("h3",null,"No Results to Display"))))},B=n(6);var w=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(B.f)().id;return Object(a.useEffect)(function(){f.getBook(c).then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement(b,{fluid:!0},l.a.createElement(p,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,n.title," by ",n.author)))),l.a.createElement(p,null,l.a.createElement(v,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,n.synopsis)))),l.a.createElement(p,null,l.a.createElement(v,{size:"md-2"},l.a.createElement(h.b,{to:"/"},"\u2190 Back to Authors"))))};var x=function(){return l.a.createElement(b,{fluid:!0},l.a.createElement(p,null,l.a.createElement(v,{size:"md-12"},l.a.createElement(m,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var z=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"React Reading List"))};var S=function(){return l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(B.c,null,l.a.createElement(B.a,{exact:!0,path:"/"},l.a.createElement(y,null)),l.a.createElement(B.a,{exact:!0,path:"/books"},l.a.createElement(y,null)),l.a.createElement(B.a,{exact:!0,path:"/books/:id",children:l.a.createElement(w,null)}),l.a.createElement(B.a,{path:"*"},l.a.createElement(x,null)))))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.0cdc5b6f.chunk.js.map