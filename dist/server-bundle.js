!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){e.exports=require("express")},function(e,r,t){(function(r){var n=t(2),o=t(0),u=t(3),s=t(4),i=t(5),c=t(6),f=t(7),p=t(8),a=t(9),l=o();l.set("views",u.join(r,"views")),l.set("view engine","jade"),l.use(c()),l.use(i("dev")),l.use(o.json()),l.use(o.urlencoded({extended:!1})),l.use(s()),l.use(o.static(u.join(r,"public"))),l.use("/",f),l.use("/users",p),l.use("/testAPI",a),l.use((function(e,r,t){t(n(404))})),l.use((function(e,r,t,n){t.locals.message=e.message,t.locals.error="development"===r.app.get("env")?e:{},t.status(e.status||500),t.render("error")})),e.exports=l}).call(this,"/")},function(e,r){e.exports=require("http-errors")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("cors")},function(e,r,t){var n=t(0).Router();n.get("/",(function(e,r,t){r.render("index",{title:"Express"})})),e.exports=n},function(e,r,t){var n=t(0).Router();n.get("/",(function(e,r,t){r.send("respond with a resource")})),e.exports=n},function(e,r,t){var n=t(0).Router();n.get("/",(function(e,r,t){r.send("API is working properly")})),e.exports=n}]);