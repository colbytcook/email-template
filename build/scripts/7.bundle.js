webpackJsonp([7,4,5,8],[,,,,,,,,,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=function e(t){n(this,e),this.el=t;var r=this.el.querySelectorAll(".copy");r.length>0&&r[0].addEventListener("click",function(e){e.preventDefault();var t=e.currentTarget.parentNode.parentNode,n=t.cloneNode(!0);t.parentNode.insertBefore(n,t.parentNode.firstChild)})}},,function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=function e(t){n(this,e),this.el=t;var r=this.el.querySelectorAll(".delete");r.length>0&&r[0].addEventListener("click",function(e){e.preventDefault();var t=e.currentTarget.parentNode.parentNode;t.parentNode.removeChild(t)})}},,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(16),i=n(28),c=n(9),u=n(11);e.exports=function e(t){r(this,e),this.el=t;var n=o([document.querySelector("#toolbarArea"),document.querySelector("#headerArea"),document.querySelector("#contentArea"),document.querySelector("#footerArea")],{copy:function e(t,n){return n===document.querySelector("#toolbarArea")},accepts:function e(t,n){return n!==document.querySelector("#toolbarArea")},invalid:function e(t,n){return!1},direction:"vertical",copySortSource:!1,revertOnSpill:!0,removeOnSpill:!0,mirrorContainer:document.body,ignoreInputTextSelection:!0});n.on("drop",function(e){var t=new i(e),n=new c(e),r=new u(e)})}},function(e,t,n){(function(t){"use strict";function r(e,t){function n(e){return fe.containers.indexOf(e)!==-1||le.isContainer(e)}function r(e){var t=e?"remove":"add";o(S,t,"mousedown",x),o(S,t,"mouseup",P)}function u(e){var t=e?"remove":"add";o(S,t,"mousemove",I)}function p(e){var t=e?"remove":"add";b[t](S,"selectstart",C),b[t](S,"click",C)}function g(){r(!0),P({})}function C(e){ae&&e.preventDefault()}function x(e){te=e.clientX,ne=e.clientY;var t=1!==i(e)||e.metaKey||e.ctrlKey;if(!t){var n=e.target,r=N(n);r&&(ae=r,u(),"mousedown"===e.type&&(m(n)?n.focus():e.preventDefault()))}}function I(e){if(ae){if(0===i(e))return void P({});if(void 0===e.clientX||e.clientX!==te||void 0===e.clientY||e.clientY!==ne){if(le.ignoreInputTextSelection){var t=y("clientX",e),n=y("clientY",e),r=E.elementFromPoint(t,n);if(m(r))return}var o=ae;u(!0),p(),k(),L(o);var a=c(W);Z=y("pageX",e)-a.left,ee=y("pageY",e)-a.top,w.add(ie||W,"gu-transit"),K(),F(e)}}}function N(e){if(!(fe.dragging&&G||n(e))){for(var t=e;v(e)&&n(v(e))===!1;){if(le.invalid(e,t))return;if(e=v(e),!e)return}var r=v(e);if(r&&!le.invalid(e,t)){var o=le.moves(e,r,t,h(e));if(o)return{item:e,source:r}}}}function O(e){return!!N(e)}function A(e){var t=N(e);t&&L(t)}function L(e){J(e.item,e.source)&&(ie=e.item.cloneNode(!0),fe.emit("cloned",ie,e.item,"copy")),Q=e.source,W=e.item,re=oe=h(e.item),fe.dragging=!0,fe.emit("drag",W,Q)}function _(){return!1}function k(){if(fe.dragging){var e=ie||W;X(e,v(e))}}function M(){ae=!1,u(!0),p(!0)}function P(e){if(M(),fe.dragging){var t=ie||W,n=y("clientX",e),r=y("clientY",e),o=a(G,n,r),i=j(o,n,r);i&&(ie&&le.copySortSource||!ie||i!==Q)?X(t,i):le.removeOnSpill?B():Y()}}function X(e,t){var n=v(e);ie&&le.copySortSource&&t===Q&&n.removeChild(W),D(t)?fe.emit("cancel",e,Q,Q):fe.emit("drop",e,t,Q,oe),q()}function B(){if(fe.dragging){var e=ie||W,t=v(e);t&&t.removeChild(e),fe.emit(ie?"cancel":"remove",e,t,Q),q()}}function Y(e){if(fe.dragging){var t=arguments.length>0?e:le.revertOnSpill,n=ie||W,r=v(n),o=D(r);o===!1&&t&&(ie?r&&r.removeChild(ie):Q.insertBefore(n,re)),o||t?fe.emit("cancel",n,Q,Q):fe.emit("drop",n,r,Q,oe),q()}}function q(){var e=ie||W;M(),U(),e&&w.rm(e,"gu-transit"),ce&&clearTimeout(ce),fe.dragging=!1,ue&&fe.emit("out",e,ue,Q),fe.emit("dragend",e),Q=W=ie=re=oe=ce=ue=null}function D(e,t){var n;return n=void 0!==t?t:G?oe:h(ie||W),e===Q&&n===re}function j(e,t,r){function o(){var o=n(i);if(o===!1)return!1;var c=z(i,e),u=H(i,c,t,r),a=D(i,u);return!!a||le.accepts(W,i,Q,u)}for(var i=e;i&&!o();)i=v(i);return i}function F(e){function t(e){fe.emit(e,l,ue,Q)}function n(){d&&t("over")}function r(){ue&&t("out")}if(G){e.preventDefault();var o=y("clientX",e),i=y("clientY",e),c=o-Z,u=i-ee;G.style.left=c+"px",G.style.top=u+"px";var l=ie||W,f=a(G,o,i),s=j(f,o,i),d=null!==s&&s!==ue;(d||null===s)&&(r(),ue=s,n());var m=v(l);if(s===Q&&ie&&!le.copySortSource)return void(m&&m.removeChild(l));var p,g=z(s,f);if(null!==g)p=H(s,g,o,i);else{if(le.revertOnSpill!==!0||ie)return void(ie&&m&&m.removeChild(l));p=re,s=Q}(null===p&&d||p!==l&&p!==h(l))&&(oe=p,s.insertBefore(l,p),fe.emit("shadow",l,s,Q))}}function R(e){w.rm(e,"gu-hide")}function $(e){fe.dragging&&w.add(e,"gu-hide")}function K(){if(!G){var e=W.getBoundingClientRect();G=W.cloneNode(!0),G.style.width=s(e)+"px",G.style.height=d(e)+"px",w.rm(G,"gu-transit"),w.add(G,"gu-mirror"),le.mirrorContainer.appendChild(G),o(S,"add","mousemove",F),w.add(le.mirrorContainer,"gu-unselectable"),fe.emit("cloned",G,W,"mirror")}}function U(){G&&(w.rm(le.mirrorContainer,"gu-unselectable"),o(S,"remove","mousemove",F),v(G).removeChild(G),G=null)}function z(e,t){for(var n=t;n!==e&&v(n)!==e;)n=v(n);return n===S?null:n}function H(e,t,n,r){function o(){var t=e.children.length,o,i,c;for(o=0;o<t;o++){if(i=e.children[o],c=i.getBoundingClientRect(),u&&c.left+c.width/2>n)return i;if(!u&&c.top+c.height/2>r)return i}return null}function i(){var e=t.getBoundingClientRect();return c(u?n>e.left+s(e)/2:r>e.top+d(e)/2)}function c(e){return e?h(t):t}var u="horizontal"===le.direction,a=t!==e?i():o();return a}function J(e,t){return"boolean"==typeof le.copy?le.copy:le.copy(e,t)}var V=arguments.length;1===V&&Array.isArray(e)===!1&&(t=e,e=[]);var G,Q,W,Z,ee,te,ne,re,oe,ie,ce,ue=null,ae,le=t||{};void 0===le.moves&&(le.moves=f),void 0===le.accepts&&(le.accepts=f),void 0===le.invalid&&(le.invalid=_),void 0===le.containers&&(le.containers=e||[]),void 0===le.isContainer&&(le.isContainer=l),void 0===le.copy&&(le.copy=!1),void 0===le.copySortSource&&(le.copySortSource=!1),void 0===le.revertOnSpill&&(le.revertOnSpill=!1),void 0===le.removeOnSpill&&(le.removeOnSpill=!1),void 0===le.direction&&(le.direction="vertical"),void 0===le.ignoreInputTextSelection&&(le.ignoreInputTextSelection=!0),void 0===le.mirrorContainer&&(le.mirrorContainer=E.body);var fe=T({containers:le.containers,start:A,end:k,cancel:Y,remove:B,destroy:g,canMove:O,dragging:!1});return le.removeOnSpill===!0&&fe.on("over",R).on("out",$),r(),fe}function o(e,n,r,o){var i={mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"},c={mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"},u={mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"};t.navigator.pointerEnabled?b[n](e,c[r],o):t.navigator.msPointerEnabled?b[n](e,u[r],o):(b[n](e,i[r],o),b[n](e,r,o))}function i(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function c(e){var t=e.getBoundingClientRect();return{left:t.left+u("scrollLeft","pageXOffset"),top:t.top+u("scrollTop","pageYOffset")}}function u(e,n){return"undefined"!=typeof t[n]?t[n]:S.clientHeight?S[e]:E.body[e]}function a(e,t,n){var r=e||{},o=r.className,i;return r.className+=" gu-hide",i=E.elementFromPoint(t,n),r.className=o,i}function l(){return!1}function f(){return!0}function s(e){return e.width||e.right-e.left}function d(e){return e.height||e.bottom-e.top}function v(e){return e.parentNode===E?null:e.parentNode}function m(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||p(e)}function p(e){return!!e&&("false"!==e.contentEditable&&("true"===e.contentEditable||p(v(e))))}function h(e){function t(){var t=e;do t=t.nextSibling;while(t&&1!==t.nodeType);return t}return e.nextElementSibling||t()}function g(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}function y(e,t){var n=g(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}var T=n(17),b=n(24),w=n(27),E=document,S=E.documentElement;e.exports=r}).call(t,function(){return this}())},function(e,t,n){"use strict";var r=n(18),o=n(19);e.exports=function e(t,n){var i=n||{},c={};return void 0===t&&(t={}),t.on=function(e,n){return c[e]?c[e].push(n):c[e]=[n],t},t.once=function(e,n){return n._once=!0,t.on(e,n),t},t.off=function(e,n){var r=arguments.length;if(1===r)delete c[e];else if(0===r)c={};else{var o=c[e];if(!o)return t;o.splice(o.indexOf(n),1)}return t},t.emit=function(){var e=r(arguments);return t.emitterSnapshot(e.shift()).apply(this,e)},t.emitterSnapshot=function(e){var n=(c[e]||[]).slice(0);return function(){var c=r(arguments),u=this||t;if("error"===e&&i.throws!==!1&&!n.length)throw 1===c.length?c[0]:c;return n.forEach(function n(r){i.async?o(r,c,u):r.apply(u,c),r._once&&t.off(e,r)}),t}},t}},function(e,t){e.exports=function e(t,n){return Array.prototype.slice.call(t,n)}},function(e,t,n){"use strict";var r=n(20);e.exports=function e(t,n,o){t&&r(function e(){t.apply(o||null,n||[])})}},function(e,t,n){(function(t){var n="function"==typeof t,r;r=n?function(e){t(e)}:function(e){setTimeout(e,0)},e.exports=r}).call(t,n(21).setImmediate)},function(e,t,n){(function(e){function r(e,t){this._id=e,this._clearFn=t}var o="undefined"!=typeof e&&e||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function t(){e._onTimeout&&e._onTimeout()},t))},n(22),t.setImmediate="undefined"!=typeof self&&self.setImmediate||"undefined"!=typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||"undefined"!=typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(t,function(){return this}())},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return m[v]=r,g(v),v++}function o(e){delete m[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function c(e){if(p)setTimeout(c,0,e);else{var t=m[e];if(t){p=!0;try{i(t)}finally{o(e),p=!1}}}}function u(){g=function(e){t.nextTick(function(){c(e)})}}function a(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function l(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),g=function(n){e.postMessage(t+n,"*")}}function f(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;c(t)},g=function(t){e.port2.postMessage(t)}}function s(){var e=h.documentElement;g=function(t){var n=h.createElement("script");n.onreadystatechange=function(){c(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function d(){g=function(e){setTimeout(c,0,e)}}if(!e.setImmediate){var v=1,m={},p=!1,h=e.document,g,y=Object.getPrototypeOf&&Object.getPrototypeOf(e);y=y&&y.setTimeout?y:e,"[object process]"==={}.toString.call(e.process)?u():a()?l():e.MessageChannel?f():h&&"onreadystatechange"in h.createElement("script")?s():d(),y.setImmediate=r,y.clearImmediate=o}}("undefined"==typeof self?"undefined"==typeof e?this:e:self)}).call(t,function(){return this}(),n(23))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function c(){m&&p&&(m=!1,p.length?v=p.concat(v):h=-1,v.length&&u())}function u(){if(!m){var e=o(c);m=!0;for(var t=v.length;t;){for(p=v,v=[];++h<t;)p&&p[h].run();h=-1,t=v.length}p=null,m=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function l(){}var f=e.exports={},s,d;!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var v=[],m=!1,p,h=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];v.push(new a(e,t)),1!==v.length||m||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";function r(e,t,n,r){return e.addEventListener(t,n,r)}function o(e,t,n){return e.attachEvent("on"+t,l(e,t,n))}function i(e,t,n,r){return e.removeEventListener(t,n,r)}function c(e,t,n){var r=f(e,t,n);if(r)return e.detachEvent("on"+t,r)}function u(e,t,n){function r(){var e;return m.createEvent?(e=m.createEvent("Event"),e.initEvent(t,!0,!0)):m.createEventObject&&(e=m.createEventObject()),e}function o(){return new d(t,{detail:n})}var i=v.indexOf(t)===-1?o():r();e.dispatchEvent?e.dispatchEvent(i):e.fireEvent("on"+t,i)}function a(e,n,r){return function n(o){var i=o||t.event;i.target=i.target||i.srcElement,i.preventDefault=i.preventDefault||function e(){i.returnValue=!1},i.stopPropagation=i.stopPropagation||function e(){i.cancelBubble=!0},i.which=i.which||i.keyCode,r.call(e,i)}}function l(e,t,n){var r=f(e,t,n)||a(e,t,n);return g.push({wrapper:r,element:e,type:t,fn:n}),r}function f(e,t,n){var r=s(e,t,n);if(r){var o=g[r].wrapper;return g.splice(r,1),o}}function s(e,t,n){var r,o;for(r=0;r<g.length;r++)if(o=g[r],o.element===e&&o.type===t&&o.fn===n)return r}var d=n(25),v=n(26),m=t.document,p=r,h=i,g=[];t.addEventListener||(p=o,h=c),e.exports={add:p,remove:h,fabricate:u}}).call(t,function(){return this}())},function(e,t){(function(t){function n(){try{var e=new r("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}var r=t.CustomEvent;e.exports=n()?r:"function"==typeof document.createEvent?function e(t,n){var r=document.createEvent("CustomEvent");return n?r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail):r.initCustomEvent(t,!1,!1,void 0),r}:function e(t,n){var r=document.createEventObject();return r.type=t,n?(r.bubbles=Boolean(n.bubbles),r.cancelable=Boolean(n.cancelable),r.detail=n.detail):(r.bubbles=!1,r.cancelable=!1,r.detail=void 0),r}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";var n=[],r="",o=/^on/;for(r in t)o.test(r)&&n.push(r.slice(2));e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=i[e];return t?t.lastIndex=0:i[e]=t=new RegExp(c+e+u,"g"),t}function r(e,t){var r=e.className;r.length?n(t).test(r)||(e.className+=" "+t):e.className=t}function o(e,t){e.className=e.className.replace(n(t)," ").trim()}var i={},c="(?:^|\\s)",u="(?:\\s|$)";e.exports={add:r,rm:o}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=function e(t){n(this,e),this.el=t;var r=this.el.querySelectorAll(".edit");r.length>0&&r[0].addEventListener("click",function(e){e.preventDefault();var t="editing",n=e.currentTarget.parentNode.parentNode;n.classList?n.classList.add(t):n.className+=" "+t})}}]);