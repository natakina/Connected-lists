!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";function r(e,t){e.innerHTML="",t.innerHTML="";var n=!0,r=!1,o=void 0;try{for(var i,a=b[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var s=i.value,l=s[0],u=s[1],c=document.createElement("li");c.innerHTML='<span class="category_name">'+l+'</span><div class="delete_btn">x</div>',e.appendChild(c);for(var f=0;f<u.length;f++){y.push(u[f]);var p=document.createElement("li");p.innerHTML='<span class="category_name">'+l+'</span>: <span class="item_name">'+u[f]+'</span><div class="delete_btn">x</div>',t.appendChild(p)}}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}}function o(e,t,n,o){e.value&&t.value?(n.style.display="none",o.style.display="none",-1==y.indexOf(t.value)?(y.push(t.value),b.has(e.value)?b.get(e.value).push(t.value):b.set(e.value,[t.value]),r(u,c),e.value="",t.value=""):(o.innerHTML="The item name must be unique",o.style.display="block")):(e.value?n.style.display="none":(n.innerHTML="Please, enter the category name",n.style.display="block"),t.value?o.style.display="none":(o.innerHTML="Please, enter the item name",o.style.display="block"))}function i(e){var t=document.querySelector(".category_list .checked"),n=document.querySelectorAll(".item_list .category_name");if("LI"==e.tagName||"LI"==e.parentNode.tagName){!function(e){t&&t.classList.remove("checked"),t=e,t.classList.add("checked")}(e.closest("li"));for(var r=0;r<n.length;r++)n[r].innerHTML==e.firstChild.innerHTML||n[r].innerHTML==e.innerHTML?n[r].parentNode.classList.add("checked"):n[r].parentNode.classList.remove("checked")}else{t.classList.remove("checked");for(var o=0;o<n.length;o++)n[o].parentNode.classList.remove("checked")}}function a(e){if(e.classList.contains("delete_btn")){var t=e.previousSibling.innerHTML;b.delete(t),r(u,c)}}function s(e){if(e.classList.contains("delete_btn")){var t=e.previousSibling.innerHTML,n=!0,o=!1,i=void 0;try{for(var a,s=b[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)for(var l=a.value,f=l[0],p=l[1],d=0;d<p.length;d++)if(p[d]==t)return p.splice(d,1),0==p.length?(b.delete(f),void r(u,c)):(b.set(f,p),void r(u,c))}catch(e){o=!0,i=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}}}var l=(n(0),document.getElementById("add_btn"));l.onmousedown=function(){return l.style.boxShadow="none"},l.onmouseup=function(){return l.style.boxShadow="3px 2px 1px 0px rgba(0,0,0,0.75)"};var u=document.querySelector("ul.category_list"),c=document.querySelector("ul.item_list"),f=document.getElementById("add_item_form"),p=document.querySelector(".text_inputs"),d=document.getElementById("category_input"),m=document.getElementById("item_input"),v=document.createElement("p");v.className="warn_message",v.id="category_message",v.style.display="none",p.insertBefore(v,d);var h=document.createElement("p");h.className="warn_message",h.id="item_message",h.style.display="none",p.insertBefore(h,m);var y=[],b=new Map([["Category 1",["1","2"]],["Category 2",["3","4","5"]],["Category 3",["6"]]]);r(u,c),f.onsubmit=function(e){e.preventDefault(),o(d,m,v,h)},u.onclick=function(e){var t=e.target;i(t),a(t)},c.onclick=function(e){s(e.target)}},function(e,t,n){t=e.exports=n(3)(void 0),t.push([e.i,"*{box-sizing:border-box}.container{margin:0 auto;max-width:700px;width:100%}ul{list-style-type:none;margin:0;padding:0}.listbox{display:flex;justify-content:space-between;min-height:300px}.listbox ul{border:2px solid #000;max-height:500px;overflow:auto}.listbox ul li{position:relative;padding:5px;padding-right:17px}.listbox ul li.checked{background-color:#95bcf2}.listbox ul li .delete_btn{color:#e83737;position:absolute;top:2px;right:5px;cursor:pointer}.listbox ul.item_list{width:67%;user-select:none}.listbox ul.item_list li{padding:5px}.listbox ul.category_list{width:30%}.listbox ul.category_list li{cursor:pointer}form{margin-top:20px;position:relative}form input{border:2px solid #000;padding:5px}form .text_inputs{width:67%;display:flex;justify-content:space-between;position:relative}form .text_inputs .warn_message{color:#e83737;position:absolute;margin:0;font-size:85%;top:34px}form .text_inputs #category_message{left:0}form .text_inputs #item_message{left:55%}form .text_inputs input{width:45%}form #add_btn{background-color:#95bcf2;width:20%;right:0;top:0;position:absolute;box-shadow:3px 2px 1px 0 rgba(0,0,0,.75)}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));m[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s=i[1],l=i[2],u=i[3],c={css:s,media:l,sourceMap:u};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function i(e,t){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",u(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",u(t,e.attrs),i(e,t),t}function u(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var u=b++;n=y||(y=s(t)),r=f.bind(null,n,u,!1),o=f.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=d.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=p.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),y=null,b=0,g=[],x=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],l=m[s.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete m[l.id]}}}};var w=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}]);