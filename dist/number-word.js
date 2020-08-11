!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.numberWord=t(require("lodash")):n.numberWord=t(n._)}(this,(function(n){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=9)}([function(n,t){var r=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(n,t){var r=n.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,t,r){n.exports=!r(4)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n){n.exports=JSON.parse('[{"num":1,"word":"One"},{"num":2,"word":"Two"},{"num":3,"word":"Three"},{"num":4,"word":"Four"},{"num":5,"word":"Five"},{"num":6,"word":"Six"},{"num":7,"word":"Seven"},{"num":8,"word":"Eight"},{"num":9,"word":"Nine"},{"num":10,"word":"Ten"},{"num":0,"word":"Zero"}]')},function(n,t,r){var e=r(13),o=r(18);n.exports=r(3)?function(n,t,r){return e.f(n,t,o(1,r))}:function(n,t,r){return n[t]=r,n}},function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n){n.exports=JSON.parse('{"name":"webpack-library_oxn","version":"1.1.0","description":"webpack-library_oxn 使用webpack打包自己写的一个JavaScript类库，并上传至NPM","main":"dist/number.word.js","scripts":{"build":"webpack","test":"echo \\"Error: no test specified\\" && exit 1"},"repository":{"type":"git","url":"git+https://github.com/364124337/webpack-library-example.git"},"keywords":["webpack","number","word"],"bugs":{"url":"https://github.com/364124337/webpack-library-example/issues"},"author":"oxn","license":"ISC","devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-transform-runtime":"^7.11.0","@babel/polyfill":"^7.10.4","@babel/preset-env":"^7.11.0","babel-loader":"^8.1.0","lodash":"^4.17.19","webpack":"^4.44.1","webpack-cli":"^3.3.12"}}')},function(n,t,r){"use strict";r.r(t),function(n){r(11);var e=r(5),o=r(8);t.default={version:o.version,numToWord:function(t){var r=n.reduce(e,(function(n,r){return r.num===t?r.word:n}),"");return""===r?"请输入0-10中的某个整数":r},wordToNum:function(t){var r=n.reduce(e,(function(n,r){return r.word===t||t.toLowerCase()===r.word.toLowerCase()?r.num:n}),-1);return-1===r?"请输入0-10中正确的单词...":r}}}.call(this,r(10))},function(t,r){t.exports=n},function(n,t,r){"use strict";var e=r(12),o=r(26);e(e.P+e.F*!r(33)([].reduce,!0),"Array",{reduce:function(n){return o(this,n,arguments.length,arguments[1],!1)}})},function(n,t,r){var e=r(0),o=r(1),u=r(6),i=r(19),c=r(25),f=function(n,t,r){var a,p,s,l,d=n&f.F,b=n&f.G,v=n&f.S,y=n&f.P,m=n&f.B,h=b?e:v?e[t]||(e[t]={}):(e[t]||{}).prototype,w=b?o:o[t]||(o[t]={}),x=w.prototype||(w.prototype={});for(a in b&&(r=t),r)s=((p=!d&&h&&void 0!==h[a])?h:r)[a],l=m&&p?c(s,e):y&&"function"==typeof s?c(Function.call,s):s,h&&i(h,a,s,n&f.U),w[a]!=s&&u(w,a,l),y&&x[a]!=s&&(x[a]=s)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,n.exports=f},function(n,t,r){var e=r(14),o=r(15),u=r(17),i=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(n,t,r){if(e(n),t=u(t,!0),e(r),o)try{return i(n,t,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(n[t]=r.value),n}},function(n,t,r){var e=r(2);n.exports=function(n){if(!e(n))throw TypeError(n+" is not an object!");return n}},function(n,t,r){n.exports=!r(3)&&!r(4)((function(){return 7!=Object.defineProperty(r(16)("div"),"a",{get:function(){return 7}}).a}))},function(n,t,r){var e=r(2),o=r(0).document,u=e(o)&&e(o.createElement);n.exports=function(n){return u?o.createElement(n):{}}},function(n,t,r){var e=r(2);n.exports=function(n,t){if(!e(n))return n;var r,o;if(t&&"function"==typeof(r=n.toString)&&!e(o=r.call(n)))return o;if("function"==typeof(r=n.valueOf)&&!e(o=r.call(n)))return o;if(!t&&"function"==typeof(r=n.toString)&&!e(o=r.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},function(n,t,r){var e=r(0),o=r(6),u=r(20),i=r(21)("src"),c=r(22),f=(""+c).split("toString");r(1).inspectSource=function(n){return c.call(n)},(n.exports=function(n,t,r,c){var a="function"==typeof r;a&&(u(r,"name")||o(r,"name",t)),n[t]!==r&&(a&&(u(r,i)||o(r,i,n[t]?""+n[t]:f.join(String(t)))),n===e?n[t]=r:c?n[t]?n[t]=r:o(n,t,r):(delete n[t],o(n,t,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||c.call(this)}))},function(n,t){var r={}.hasOwnProperty;n.exports=function(n,t){return r.call(n,t)}},function(n,t){var r=0,e=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++r+e).toString(36))}},function(n,t,r){n.exports=r(23)("native-function-to-string",Function.toString)},function(n,t,r){var e=r(1),o=r(0),u=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(n.exports=function(n,t){return u[n]||(u[n]=void 0!==t?t:{})})("versions",[]).push({version:e.version,mode:r(24)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(n,t){n.exports=!1},function(n,t,r){var e=r(7);n.exports=function(n,t,r){if(e(n),void 0===t)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,o){return n.call(t,r,e,o)}}return function(){return n.apply(t,arguments)}}},function(n,t,r){var e=r(7),o=r(27),u=r(29),i=r(31);n.exports=function(n,t,r,c,f){e(t);var a=o(n),p=u(a),s=i(a.length),l=f?s-1:0,d=f?-1:1;if(r<2)for(;;){if(l in p){c=p[l],l+=d;break}if(l+=d,f?l<0:s<=l)throw TypeError("Reduce of empty array with no initial value")}for(;f?l>=0:s>l;l+=d)l in p&&(c=t(c,p[l],l,a));return c}},function(n,t,r){var e=r(28);n.exports=function(n){return Object(e(n))}},function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},function(n,t,r){var e=r(30);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==e(n)?n.split(""):Object(n)}},function(n,t){var r={}.toString;n.exports=function(n){return r.call(n).slice(8,-1)}},function(n,t,r){var e=r(32),o=Math.min;n.exports=function(n){return n>0?o(e(n),9007199254740991):0}},function(n,t){var r=Math.ceil,e=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?e:r)(n)}},function(n,t,r){"use strict";var e=r(4);n.exports=function(n,t){return!!n&&e((function(){t?n.call(null,(function(){}),1):n.call(null)}))}}]).default}));