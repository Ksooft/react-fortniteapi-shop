(this["webpackJsonpshop-training"]=this["webpackJsonpshop-training"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(8),r=c.n(i),s=(c(13),c(14),c(0)),o=function(){return Object(s.jsx)("footer",{className:"page-footer light-blue accent-1",id:"keks",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/Ksooft",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})})})},l=function(){return Object(s.jsx)("nav",{className:"light-blue accent-2",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"/",className:"brand-logo",onClick:function(e){return e.preventDefault()},children:"Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/Ksooft",target:"_blank",rel:"noopener noreferrer",children:"Github"})})})]})})},d=c(6),u=c(2),j=c(3),m=function(e){var t=e.name,c=e.closeAlert,a=Object(n.useRef)(),i=Object(n.useRef)(),r=window.innerWidth;return Object(n.useEffect)((function(){return t.length<5?(a.current=setTimeout((function(){document.querySelector("#toast-container").classList.add("close")}),2800),i.current=setTimeout(c,3e3)):(document.querySelector("#toast-container").classList.add("close"),setTimeout(c,200)),function(){clearTimeout(a.current),clearTimeout(i.current)}}),[t]),Object(s.jsx)("div",{className:"toast-block",children:t.map((function(e,t){return Object(s.jsx)("div",{id:"toast-container",style:{top:"".concat(r<=400?80*t:60*t,"px")},children:Object(s.jsxs)("div",{className:"toast",children:[e.name," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"]})},e.id)}))})},h=function(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,i=e.removeBasket,r=e.changeQuantity;return Object(s.jsxs)("li",{className:"collection-item","data-basketid":n+a+t,children:[c," ",Object(s.jsx)("i",{className:"material-icons basket-quantity red-text",onClick:function(){return r({id:t,price:n,quantity:a},"-")},children:"remove"})," ","x",a," ",Object(s.jsx)("i",{className:"material-icons basket-quantity green-text",onClick:function(){return r({id:t,price:n,quantity:a},"+")},children:"add"})," = ",n*a,Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return i({id:t,price:n,quantity:a})},children:Object(s.jsx)("i",{className:"material-icons",children:"close"})})]})},b=function(e){var t=e.order,c=void 0===t?[]:t,n=e.isBasketShow,a=e.handleBasketShow,i=e.removeBasket,r=e.changeQuantity,o=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsx)("div",{className:"modal-shop".concat(n?" open":""),children:Object(s.jsxs)("ul",{className:"collection",children:[Object(s.jsxs)("li",{className:"collection-item active",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){document.querySelector(".modal-shop.open").classList.add("close"),document.querySelector(".modal-shop.open").classList.remove("open"),setTimeout((function(){document.querySelector(".modal-shop .collection").classList.add("hide"),a(),setTimeout((function(){return document.querySelector(".modal-shop .collection").classList.remove("hide")}),350)}),500)},children:Object(s.jsx)("i",{className:"material-icons",children:"close"})})]}),c.length?c.map((function(e,t){return Object(s.jsx)(h,Object(u.a)(Object(u.a)({},e),{},{removeBasket:i,changeQuantity:r}),e.id+String(t))})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",o]})]})})},f=function(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow;return Object(s.jsxs)("div",{className:"cart light-blue accent-2 white-text",onClick:n,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):""]})},O=function(e){var t=e.rarity,c={Uncommon:{name:"\u041d\u0435\u043e\u0431\u044b\u0447\u043d\u044b\u0439",color:"green"},Rare:{name:"\u0420\u0435\u0434\u043a\u0438\u0439",color:"blue darken-4"},Epic:{name:"\u042d\u043f\u0438\u0447\u0435\u0441\u043a\u0438\u0439",color:"purple"},Legendary:{name:"\u041b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u0439",color:"orange"}};return Object(s.jsx)("div",{className:"chip right card-rarity ".concat(c[t].color),children:c[t].name})},p=function(e){var t=e.desc,c=e.name,n=e.id,a=e.price,i=e.img,r=e.rarity,o=e.addToBasket,l="https://dummyimage.com/1024/".concat(["3D217A","F04482","BFA499","C27643","91C0CB","82CD99","F57A16","6B566B","0FD1E6","6AFC17","C1BE3A","FCF9A4","002FB1","F57060","8184E6"][Math.floor(0+15*Math.random())],"/ffffff.png&text=").concat(c);return Object(s.jsxs)("div",{className:"card",id:n,children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:i,alt:c,onError:function(e){return e.target.src=l}})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",style:{fontWeight:400},children:c}),Object(s.jsx)("p",{style:{marginBottom:"15px"},children:t}),Object(s.jsx)(O,{rarity:r})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return o({id:n,name:c,price:a})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[a," \u0440\u0443\u0431."]})]})]})},g=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToBasket;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return e.granted.map((function(t){return Object(s.jsx)(p,{desc:t.description,name:t.name,id:t.id,price:e.price.finalPrice,img:t.images.full_background,rarity:t.rarity.id,addToBasket:n},t.id)}))}))}):Object(s.jsx)("h2",{className:"red-text",children:"Nothing found!"})},x=function(){return Object(s.jsx)("div",{className:"progress light-blue lighten-4",children:Object(s.jsx)("div",{className:"indeterminate light-blue accent-2"})})},y=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),r=Object(j.a)(i,2),o=r[0],l=r[1],h=Object(n.useState)([]),O=Object(j.a)(h,2),p=O[0],y=O[1],v=Object(n.useState)(!1),N=Object(j.a)(v,2),k=N[0],S=N[1],q=Object(n.useState)([]),B=Object(j.a)(q,2),w=B[0],C=B[1],T=function(){return S(!k)};return Object(n.useEffect)((function(){localStorage.getItem("orders")&&y(JSON.parse(localStorage.getItem("orders"))),fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"8183a8d8-2492ee4f-e198f911-759979e1"}}).then((function(e){return e.ok?e.json():Promise.reject(e)})).then((function(e){a(e.shop),l(!1)})).catch((function(e){return alert(e)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(f,{quantity:p.length,handleBasketShow:T}),o?Object(s.jsx)(x,{}):Object(s.jsx)(g,{goods:c,addToBasket:function(e){var t=p.findIndex((function(t){return t.id===e.id&&t.price===e.price}));if(t<0){var c=Object(u.a)(Object(u.a)({},e),{},{quantity:1});y([].concat(Object(d.a)(p),[c])),localStorage.setItem("orders",JSON.stringify([].concat(Object(d.a)(p),[c])))}else{var n=p.map((function(e,c){return t===c?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e}));y(n),localStorage.setItem("orders",JSON.stringify(n))}C([].concat(Object(d.a)(w),[{name:e.name,id:e.id+Date.now()}]))}}),Object(s.jsx)(b,{order:p,isBasketShow:k,handleBasketShow:T,removeBasket:function(e){setTimeout((function(){document.querySelector('.collection-item[data-basketid="'.concat(e.price+e.quantity+e.id,'"')).classList.remove("delete"),y(p.filter((function(t){return t.id!==e.id||t.id===e.id&&t.price!==e.price})));var t=JSON.parse(localStorage.getItem("orders")).filter((function(t){return t.id!==e.id||t.id===e.id&&t.price!==e.price}));localStorage.setItem("orders",JSON.stringify(t))}),400),document.querySelector('.collection-item[data-basketid="'.concat(e.price+e.quantity+e.id,'"')).classList.add("delete")},changeQuantity:function(e,t){var c=p.map((function(c){return 1===e.quantity&&"-"===t&&c.id===e.id?(alert("\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u043e\u0434\u043d\u043e\u0433\u043e"),c):c.id===e.id&&c.price===e.price?Object(u.a)(Object(u.a)({},c),{},{quantity:"+"===t?c.quantity+1:c.quantity-1}):c}));y(c),localStorage.setItem("orders",JSON.stringify(c))}}),w.length?Object(s.jsx)(m,{name:w,closeAlert:function(){return C(w.slice(1))}}):""]})};var v=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(y,{}),Object(s.jsx)(o,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dd983709.chunk.js.map