module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=require("react")},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"body {\r\n    font-family: Roboto, sans-serif;\r\n}\r\n\r\n.left-active-top,\r\n.left-active-bottom {\r\n    opacity: 0;\r\n    content: \"\";\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: 100%;\r\n    margin-right: -1.25rem;\r\n    position: absolute;\r\n    right: 20px;\r\n    background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52'%3E%3Cpath data-name='Path 143' d='M259.51 259.52c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828a237.651 237.651 0 00-7.292-8.589c-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3A115.051 115.051 0 000 .081h259.51z' fill='%23e5e7eb'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.left-active .left-active-top {\r\n    opacity: 1;\r\n    top: 0;\r\n    margin-top: -30px;\r\n    transform: rotate(\r\n            90deg\r\n    ) scale(1.04);\r\n}\r\n\r\n.left-active .left-active-bottom {\r\n    opacity: 1;\r\n    top: -2px;\r\n    margin-top: 50px;\r\n    transform: scale(1.04);\r\n}\r\n\r\n.link {\r\n    @apply text-blue-600 opacity-80 hover:underline hover:opacity-100 transition cursor-pointer;\r\n}\r\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(o).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<e.length;a++){var i=e[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,a,o={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),l=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=l.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,u=0,f=[],m=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=o[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(y(r.parts[i],t))}else{var l=[];for(i=0;i<r.parts.length;i++)l.push(y(r.parts[i],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function p(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function v(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=c(e.insertAt.before,n);n.insertBefore(t,a)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return x(t,e.attrs),v(e,t),t}function x(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,a,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var i=u++;n=s||(s=b(t)),r=w.bind(null,n,i,!1),a=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",x(t,e.attrs),v(e,t),t}(t),r=j.bind(null,n,t),a=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=N.bind(null,n),a=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var i=n[a];(l=o[i.id]).refs--,r.push(l)}e&&d(p(e,t),t);for(a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var g,E=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function w(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function N(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function j(e,t,n){var r=n.css,a=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(r=m(r)),a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var i=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var a,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"Layout",(function(){return p}));var r=n(0),a=n.n(r),o=function(e){var t=e.leftMenuItems;return a.a.createElement("nav",{className:"side-nav w-64"},t())},i=function(){return a.a.createElement("div",{className:"flex-1 flex justify-end align-middle"},a.a.createElement("div",{className:"px-5 flex justify-center items-center"},a.a.createElement("a",{className:"hover:underline",href:"http://dev.indiro.ru/"},"Develop")),a.a.createElement("div",{className:"px-5 flex justify-center items-center"},a.a.createElement("a",{className:"hover:underline",href:"http://games.indiro.ru/"},"Games")),a.a.createElement("div",{className:"px-5 flex justify-center items-center"},a.a.createElement("a",{className:"hover:underline",href:"http://apps.indiro.ru/"},"Apps")),a.a.createElement("div",{className:"px-5 flex justify-center items-center"},a.a.createElement("a",{className:"hover:underline",href:"https://scanprices.ru/"},"Scanprices")))},l=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"flex-1"},a.a.createElement("div",{className:"text-xl mb-3"},"About"),a.a.createElement("div",null,a.a.createElement("a",{className:"text-blue-900 hover:text-blue-700 hover:underline transition-all",href:"https://indiro.ru/"},"Site"))),a.a.createElement("div",{className:"flex-1"},a.a.createElement("div",{className:"text-xl mb-3"},"Code"),a.a.createElement("div",null,a.a.createElement("a",{className:"text-blue-900 hover:text-blue-700 hover:underline transition-all",href:"https://github.com/indiro71"},"Github")),a.a.createElement("div",null,a.a.createElement("a",{className:"text-blue-900 hover:text-blue-700 hover:underline transition-all",href:"https://bitbucket.org/indiro/"},"Bitbucket"))),a.a.createElement("div",{className:"flex-1"},a.a.createElement("div",{className:"text-xl mb-3"},"Contact"),a.a.createElement("div",null,a.a.createElement("a",{className:"text-blue-900 hover:text-blue-700 hover:underline transition-all",href:"tel:+79207501403"},"Phone")),a.a.createElement("div",null,a.a.createElement("a",{className:"text-blue-900 hover:text-blue-700 hover:underline transition-all",href:"mailto:web@indiro.ru"},"Email"))))},c=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"intro-x flex items-center pl-5 pt-4"},a.a.createElement("span",{className:"hidden xl:block text-white text-3xl ml-3"},"Indiro")),a.a.createElement("div",{className:"h-0.5 my-6 bg-gray-200 mr-7"}))},s=function(e){var t=e.leftMenuItems;return a.a.createElement("div",null,a.a.createElement(c,null),a.a.createElement(o,{leftMenuItems:t}))},u=function(e){var t=e.project;return a.a.createElement("header",{className:"flex w-full px-5 justify-between border-b border-gray-300 pb-2 align-middle"},a.a.createElement("div",{className:"flex-1 text-3xl"},t()),a.a.createElement(i,null))},f=function(e){var t=e.content,n=e.project;return a.a.createElement("div",{className:"flex-auto py-3 px-5 bg-gray-200 w-full rounded-3xl rounded-b-none"},a.a.createElement(u,{project:n}),a.a.createElement("div",{className:"container m-auto py-3"},t))},m=function(){return a.a.createElement("footer",{className:"pt-2 w-full p-2 bg-gray-200 rounded-xl rounded-t-none mt-2"},a.a.createElement("div",{className:"container flex m-auto w-full"},a.a.createElement("div",{className:"flex-1 text-2xl"},"Indiro development."),a.a.createElement(l,null)))},d=function(e){var t=e.content,n=e.project;return a.a.createElement("div",{className:"flex min-h-full flex-col w-full"},a.a.createElement(f,{content:t,project:n}),a.a.createElement(m,null))},p=function(e){var t=e.content,n=e.leftMenuItems,r=e.project;return a.a.createElement("div",{className:"flex w-full min-h-screen bg-blue-800 px-8 py-4"},a.a.createElement(s,{leftMenuItems:n}),a.a.createElement(d,{content:t,project:r}))};n(1)}]);