!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=124)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(62))},function(t,n,e){var r=e(0),o=e(13),i=e(36),c=e(58),a=r.Symbol,u=o("wks");t.exports=function(t){return u[t]||(u[t]=c&&a[t]||(c?a:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(8),o=e(40),i=e(5),c=e(18),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(22).f,i=e(9),c=e(16),a=e(23),u=e(54),f=e(48);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,m=t.stat;if(e=h?r:m?r[d]||a(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:d+(m?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(8),o=e(6),i=e(17);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){"use strict";e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u}));var r="5ec581f3ec334307ac4c68f31dfcca51",o="https://praktikum.tk/news/v2/top-headlines",i=7,c="Eparfenova",a="news-analytics",u="https://api.github.com"},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(37),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(28),o=e(63);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(32),o=e(27);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(55),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(0),o=e(13),i=e(9),c=e(4),a=e(23),u=e(41),f=e(34),s=f.get,l=f.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,n,e,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(u?!s&&t[n]&&(f=!0):delete t[n],f?t[n]=e:i(t,n,e)):f?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(27);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(8),o=e(53),i=e(17),c=e(14),a=e(18),u=e(4),f=e(40),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),o=e(9);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports={}},function(t,n,e){var r=e(2),o=e(1),i=e(30),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e(50),e(74);var r=e(10);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,i;return n=t,i=[{key:"formatDate",value:function(){var t=new Date;return t.setDate(t.getDate()-r.d),"".concat(t.toISOString().slice(0,10))}},{key:"sliceDate",value:function(t){return new Date(t).toLocaleString("ru-ru",{year:"numeric",month:"long",day:"numeric"})}},{key:"getAnalyticsDate",value:function(t){var n=new Date(t),e=n.getDay(),r=n.getDate();return"".concat(r,", ").concat(["вс","пн","вт","ср","чт","пт","сб"][e])}}],(e=null)&&o(n.prototype,e),i&&o(n,i),t}()},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports=!1},function(t,n,e){var r=e(21);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r,o,i=e(0),c=e(51),a=i.process,u=a&&a.versions,f=u&&u.v8;f?o=(r=f.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n){t.exports={}},function(t,n,e){var r=e(2),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r,o,i,c=e(64),a=e(0),u=e(3),f=e(9),s=e(4),l=e(35),p=e(24),v=a.WeakMap;if(c){var d=new v,h=d.get,m=d.has,y=d.set;r=function(t,n){return y.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return m.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(13),o=e(36),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){"use strict";var r=e(18),o=e(6),i=e(17);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(8),o=e(2),i=e(33);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(13);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r=e(37),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(29),o=e(32),i=e(20),c=e(12),a=e(44),u=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,m){for(var y,g,x=i(v),b=o(x),w=r(d,h,3),S=c(b.length),j=0,E=m||a,C=n?E(v,S):e?E(v,0):void 0;S>j;j++)if((p||j in b)&&(g=w(y=b[j],j,x),t))if(n)C[j]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return j;case 2:u.call(C,y)}else if(s)return!1;return l?-1:f||s?s:C}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(3),o=e(19),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.d(n,"a",(function(){return o}));var o=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.storage=window.localStorage}var n,e,o;return n=t,(e=[{key:"setData",value:function(t,n){this.storage.setItem(t,JSON.stringify(n))}},{key:"getData",value:function(t){return JSON.parse(this.storage.getItem(t))}},{key:"removeData",value:function(t){this.storage.removeItem(t)}},{key:"clearData",value:function(){this.storage.clear()}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){var r=e(47),o=e(38).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(4),o=e(14),i=e(56).indexOf,c=e(24);t.exports=function(t,n){var e,a=o(t),u=0,f=[];for(e in a)!r(c,e)&&r(a,e)&&f.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=a[c(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(6).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(7),o=e(2),i=e(19),c=e(3),a=e(20),u=e(12),f=e(39),s=e(44),l=e(25),p=e(1),v=e(30),d=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),m=l("concat"),y=function(t){if(!c(t))return!1;var n=t[d];return void 0!==n?!!n:i(t)};r({target:"Array",proto:!0,forced:!h||!m},{concat:function(t){var n,e,r,o,i,c=a(this),l=s(c,0),p=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],y(i)){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,p++)e in i&&f(l,p,i[e])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,n,e){var r=e(15);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(11),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(65),i=e(22),c=e(6);t.exports=function(t,n){for(var e=o(n),a=c.f,u=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(14),o=e(12),i=e(42),c=function(t){return function(n,e,c){var a,u=r(n),f=o(u.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(15);t.exports=r("document","documentElement")},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(23),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(41),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(15),o=e(46),i=e(57),c=e(5);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(8),o=e(6).f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},function(t,n,e){var r=e(1),o=e(31),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(52),o=e(31),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(5);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r,o,i,c=e(0),a=e(2),u=e(11),f=e(29),s=e(59),l=e(33),p=e(72),v=c.location,d=c.setImmediate,h=c.clearImmediate,m=c.process,y=c.MessageChannel,g=c.Dispatch,x=0,b={},w=function(t){if(b.hasOwnProperty(t)){var n=b[t];delete b[t],n()}},S=function(t){return function(){w(t)}},j=function(t){w(t.data)},E=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};d&&h||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return b[++x]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(x),x},h=function(t){delete b[t]},"process"==u(m)?r=function(t){m.nextTick(S(t))}:g&&g.now?r=function(t){g.now(S(t))}:y&&!p?(i=(o=new y).port2,o.port1.onmessage=j,r=f(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||a(E)?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}:(r=E,c.addEventListener("message",j,!1))),t.exports={set:d,clear:h}},function(t,n,e){var r=e(51);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(21),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";var r=e(7),o=e(3),i=e(19),c=e(42),a=e(12),u=e(14),f=e(39),s=e(25),l=e(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!s("slice")},{slice:function(t,n){var e,r,s,d=u(this),h=a(d.length),m=c(t,h),y=c(void 0===n?h:n,h);if(i(d)&&("function"!=typeof(e=d.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[l])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(d,m,y);for(r=new(void 0===e?Array:e)(v(y-m,0)),s=0;m<y;m++,s++)m in d&&f(r,s,d[m]);return r.length=s,r}})},function(t,n,e){"use strict";var r=e(43).forEach,o=e(60);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},,,,function(t,n,e){"use strict";var r=e(7),o=e(43).map;r({target:"Array",proto:!0,forced:!e(25)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(16),o=e(81),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){"use strict";var r=e(52),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){"use strict";var r,o,i,c,a=e(7),u=e(28),f=e(0),s=e(15),l=e(83),p=e(16),v=e(84),d=e(13),h=e(49),m=e(85),y=e(3),g=e(21),x=e(86),b=e(11),w=e(87),S=e(70),j=e(88),E=e(71).set,C=e(89),O=e(90),T=e(91),L=e(73),P=e(92),k=e(34),_=e(48),M=e(1),A=e(30),D=M("species"),I="Promise",N=k.get,F=k.set,G=k.getterFor(I),V=l,R=f.TypeError,q=f.document,z=f.process,H=d("inspectSource"),B=s("fetch"),W=L.f,J=W,K="process"==b(z),U=!!(q&&q.createEvent&&f.dispatchEvent),Y=_(I,(function(){var t=H(V)!==String(V);if(66===A)return!0;if(!t&&!K&&"function"!=typeof PromiseRejectionEvent)return!0;if(u&&!V.prototype.finally)return!0;if(A>=51&&/native code/.test(V))return!1;var n=V.resolve(1),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[D]=e,!(n.then((function(){}))instanceof e)})),Q=Y||!S((function(t){V.all(t).catch((function(){}))})),X=function(t){var n;return!(!y(t)||"function"!=typeof(n=t.then))&&n},Z=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;C((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var a,u,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,d=s.domain;try{l?(i||(2===n.rejection&&et(t,n),n.rejection=1),!0===l?a=o:(d&&d.enter(),a=l(o),d&&(d.exit(),f=!0)),a===s.promise?v(R("Promise-chain cycle")):(u=X(a))?u.call(a,p,v):p(a)):v(o)}catch(t){d&&!f&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&tt(t,n)}))}},$=function(t,n,e){var r,o;U?((r=q.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&T("Unhandled promise rejection",e)},tt=function(t,n){E.call(f,(function(){var e,r=n.value;if(nt(n)&&(e=P((function(){K?z.emit("unhandledRejection",r,t):$("unhandledrejection",t,r)})),n.rejection=K||nt(n)?2:1,e.error))throw e.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,n){E.call(f,(function(){K?z.emit("rejectionHandled",t):$("rejectionhandled",t,n.value)}))},rt=function(t,n,e,r){return function(o){t(n,e,o,r)}},ot=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,Z(t,n,!0))},it=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw R("Promise can't be resolved itself");var o=X(e);o?C((function(){var r={done:!1};try{o.call(e,rt(it,t,r,n),rt(ot,t,r,n))}catch(e){ot(t,r,e,n)}})):(n.value=e,n.state=1,Z(t,n,!1))}catch(e){ot(t,{done:!1},e,n)}}};Y&&(V=function(t){x(this,V,I),g(t),r.call(this);var n=N(this);try{t(rt(it,this,n),rt(ot,this,n))}catch(t){ot(this,n,t)}},(r=function(t){F(this,{type:I,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(V.prototype,{then:function(t,n){var e=G(this),r=W(j(this,V));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=K?z.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&Z(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=N(t);this.promise=t,this.resolve=rt(it,t,n),this.reject=rt(ot,t,n)},L.f=W=function(t){return t===V||t===i?new o(t):J(t)},u||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new V((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof B&&a({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return O(V,B.apply(f,arguments))}}))),a({global:!0,wrap:!0,forced:Y},{Promise:V}),h(V,I,!1,!0),m(I),i=s(I),a({target:I,stat:!0,forced:Y},{reject:function(t){var n=W(this);return n.reject.call(void 0,t),n.promise}}),a({target:I,stat:!0,forced:u||Y},{resolve:function(t){return O(u&&this===i?V:this,t)}}),a({target:I,stat:!0,forced:Q},{all:function(t){var n=this,e=W(n),r=e.resolve,o=e.reject,i=P((function(){var e=g(n.resolve),i=[],c=0,a=1;w(t,(function(t){var u=c++,f=!1;i.push(void 0),a++,e.call(n,t).then((function(t){f||(f=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=W(n),r=e.reject,o=P((function(){var o=g(n.resolve);w(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(16);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(15),o=e(6),i=e(1),c=e(8),a=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[a]&&e(n,a,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(5),o=e(67),i=e(12),c=e(29),a=e(68),u=e(69),f=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,d,h,m,y,g,x=c(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=a(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((m=s?x(r(g=t[d])[0],g[1]):x(t[d]))&&m instanceof f)return m;return new f(!1)}p=v.call(t)}for(y=p.next;!(g=y.call(p)).done;)if("object"==typeof(m=u(p,x,g.value,s))&&m&&m instanceof f)return m;return new f(!1)}).stop=function(t){return new f(!0,t)}},function(t,n,e){var r=e(5),o=e(21),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,a,u,f,s,l=e(0),p=e(22).f,v=e(11),d=e(71).set,h=e(72),m=l.MutationObserver||l.WebKitMutationObserver,y=l.process,g=l.Promise,x="process"==v(y),b=p(l,"queueMicrotask"),w=b&&b.value;w||(r=function(){var t,n;for(x&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},x?c=function(){y.nextTick(r)}:m&&!h?(a=!0,u=document.createTextNode(""),new m(r).observe(u,{characterData:!0}),c=function(){u.data=a=!a}):g&&g.resolve?(f=g.resolve(void 0),s=f.then,c=function(){s.call(f,r)}):c=function(){d.call(l,r)}),t.exports=w||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(5),o=e(3),i=e(73);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){"use strict";var r=e(7),o=e(75);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){var r=e(0),o=e(95),i=e(75),c=e(9);for(var a in o){var u=r[a],f=u&&u.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);e(61);var r=e(10);e(66);function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var i=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.dataCard=n}var n,e,r;return n=t,(e=[{key:"create",value:function(){var t=document.createElement("div");t.classList.add("comments__card");var n=document.createElement("p");n.classList.add("comments__date"),n.textContent=this.dataCard.date;var e=document.createElement("div");e.classList.add("comments__about-author");var r=document.createElement("img");r.classList.add("comments__avatar"),r.setAttribute("src","".concat(this.dataCard.avatar_url)),r.setAttribute("alt","Изображение не найдено");var o=document.createElement("div");o.classList.add("comments__paragraph");var i=document.createElement("h2");i.classList.add("comments__author"),i.textContent=this.dataCard.name;var c=document.createElement("h3");c.classList.add("comments__mail"),c.textContent=this.dataCard.email;var a=document.createElement("p");a.classList.add("comments__text"),a.textContent=this.dataCard.message,t.appendChild(n),t.appendChild(e),e.appendChild(r),e.appendChild(o),o.appendChild(i),o.appendChild(c),t.appendChild(a),this.card=t}},{key:"getCard",value:function(){return this.card}}])&&o(n.prototype,e),r&&o(n,r),t}();e(93),e(94);function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n,this.createCard=e,this.githubApi=r}var n,e,r;return n=t,(e=[{key:"addCard",value:function(t){var n=document.createElement("div");n.classList.add("carousel-cell");var e=this.createCard(t,this.container);n.appendChild(e.getCard()),new Flickity(this.container,{cellAlign:"left",contain:!0}).append(e.getCard())}},{key:"render",value:function(t){this.addCard(t)}},{key:"getCards",value:function(){var t=this;this.githubApi.getCommits().then((function(n){n.forEach((function(n){return t.render(n)}))}))}}])&&c(n.prototype,e),r&&c(n,r),t}(),u=e(45),f=(e(50),e(79),e(80),e(82),e(26));function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=new(function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.config=n}var n,e,r;return n=t,(e=[{key:"getCommits",value:function(){return fetch("".concat(this.config.url,"/repos/").concat(this.config.owner,"/").concat(this.config.repo,"/commits")).then((function(t){return 200!==t.status?Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."):t})).then((function(t){return t.json()})).then((function(t){if(t){var n=t;return[].map.call(n,(function(t){return{name:t.commit.committer.name,email:t.commit.committer.email,date:f.a.sliceDate(t.commit.committer.date),message:t.commit.message,avatar_url:t.author.avatar_url}}))}return Promise.reject("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.")})).catch((function(t){console.log(t)}))}}])&&s(n.prototype,e),r&&s(n,r),t}())({url:r.c,owner:r.a,repo:r.b}),p=document.querySelector("#about");new u.a;new a(p.querySelector(".comments").querySelector(".main-carousel"),(function(t,n){var e=new i(t,n);return e.create(),e}),l).getCards()}]);