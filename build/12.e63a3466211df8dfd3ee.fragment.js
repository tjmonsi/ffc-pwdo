(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(u=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[n].concat(i).concat([r]).join("\n")}var u;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var u=e[r];"number"==typeof u[0]&&o[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),t.push(u))}},t}},124:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove=t.add=t.findOriginalTarget=t.prevent=t._fire=t.recognizers=t.gestures=void 0,t.deepTargetFind=x,t._findOriginalTarget=P,t._handleNative=k,t._handleTouchAction=L,t.addListener=T,t.removeListener=j,t._add=M,t._remove=N,t.register=X,t._findRecognizerByEvent=Y,t.setTouchAction=D,t.resetMouseCanceller=function(){b.mouse.mouseIgnoreJob&&b.mouse.mouseIgnoreJob.flush()},n(0);var o=n(10),r=n(30),i="string"==typeof document.head.style.touchAction,u="__polymerGestures",s="__polymerGesturesHandled",c="__polymerGesturesTouchAction",a=2500,f=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],d=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}(),l=!1;!function(){try{var e=Object.defineProperty({},"passive",{get:function(){l=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();var p=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),v=function(){};v.prototype.reset=function(){},v.prototype.mousedown,v.prototype.mousemove,v.prototype.mouseup,v.prototype.touchstart,v.prototype.touchmove,v.prototype.touchend,v.prototype.click;var m=function(e){var t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[s]={skip:!0},"click"===e.type)){var n=e.composedPath&&e.composedPath();if(n)for(var o=0;o<n.length;o++)if(n[o]===b.mouse.target)return;e.preventDefault(),e.stopPropagation()}};function y(e){for(var t,n=p?["click"]:f,o=0;o<n.length;o++)t=n[o],e?document.addEventListener(t,m,!0):document.removeEventListener(t,m,!0)}function g(e){var t=e.type;if(-1===f.indexOf(t))return!1;if("mousemove"===t){var n=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!d&&(n=h[e.which]||0),Boolean(1&n)}return 0===(void 0===e.button?0:e.button)}var b={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function _(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)}function w(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",function(e){b.mouse.mouseIgnoreJob||y(!0),b.mouse.target=e.composedPath()[0],b.mouse.mouseIgnoreJob=r.Debouncer.debounce(b.mouse.mouseIgnoreJob,o.timeOut.after(a),function(){y(),b.mouse.target=null,b.mouse.mouseIgnoreJob=null})},!!l&&{passive:!0});var E=t.gestures={},O=t.recognizers=[];function x(e,t){for(var n=document.elementFromPoint(e,t),o=n;o&&o.shadowRoot&&!window.ShadyDOM;){if(o===(o=o.shadowRoot.elementFromPoint(e,t)))break;o&&(n=o)}return n}function P(e){return e.composedPath?e.composedPath()[0]:e.target}function k(e){var t=void 0,n=e.type,o=e.currentTarget[u];if(o){var r=o[n];if(r){if(!e[s]&&(e[s]={},"touch"===n.slice(0,5))){var c=(e=e).changedTouches[0];if("touchstart"===n&&1===e.touches.length&&(b.touch.id=c.identifier),b.touch.id!==c.identifier)return;i||"touchstart"!==n&&"touchmove"!==n||L(e)}if(!(t=e[s]).skip){for(var a,f=0;f<O.length;f++)r[(a=O[f]).name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(var h,d=0;d<O.length;d++)r[(h=O[d]).name]&&!t[h.name]&&(t[h.name]=!0,h[n](e))}}}}function L(e){var t=e.changedTouches[0],n=e.type;if("touchstart"===n)b.touch.x=t.clientX,b.touch.y=t.clientY,b.touch.scrollDecided=!1;else if("touchmove"===n){if(b.touch.scrollDecided)return;b.touch.scrollDecided=!0;var o=function(e){var t="auto",n=e.composedPath&&e.composedPath();if(n)for(var o,r=0;r<n.length;r++)if((o=n[r])[c]){t=o[c];break}return t}(e),r=!1,i=Math.abs(b.touch.x-t.clientX),u=Math.abs(b.touch.y-t.clientY);e.cancelable&&("none"===o?r=!0:"pan-x"===o?r=u>i:"pan-y"===o&&(r=i>u)),r?e.preventDefault():r("track")}}function T(e,t,n){return!!E[t]&&(M(e,t,n),!0)}function j(e,t,n){return!!E[t]&&(N(e,t,n),!0)}function M(e,t,n){var o=E[t],r=o.deps,i=o.name,s=e[u];s||(e[u]=s={});for(var c,a,h=0;h<r.length;h++)c=r[h],p&&f.indexOf(c)>-1&&"click"!==c||((a=s[c])||(s[c]=a={_count:0}),0===a._count&&e.addEventListener(c,k),a[i]=(a[i]||0)+1,a._count=(a._count||0)+1);e.addEventListener(t,n),o.touchAction&&D(e,o.touchAction)}function N(e,t,n){var o=E[t],r=o.deps,i=o.name,s=e[u];if(s)for(var c,a,f=0;f<r.length;f++)(a=s[c=r[f]])&&a[i]&&(a[i]=(a[i]||1)-1,a._count=(a._count||1)-1,0===a._count&&e.removeEventListener(c,k));e.removeEventListener(t,n)}function X(e){O.push(e);for(var t=0;t<e.emits.length;t++)E[e.emits[t]]=e}function Y(e){for(var t,n=0;n<O.length;n++){t=O[n];for(var o=0;o<t.emits.length;o++)if(t.emits[o]===e)return t}return null}function D(e,t){i&&(e.style.touchAction=t),e[c]=t}function A(e,t,n){var o=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,e.dispatchEvent(o),o.defaultPrevented){var r=n.preventer||n.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function J(e){var t=Y(e);t.info&&(t.info.prevent=!0)}t._fire=A,t.prevent=J,X({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){w(this.info)},mousedown:function(e){if(g(e)){var t=P(e),n=this;_(this.info,function(e){g(e)||(n._fire("up",t,e),w(n.info))},function(e){g(e)&&n._fire("up",t,e),w(n.info)}),this._fire("down",t,e)}},touchstart:function(e){this._fire("down",P(e),e.changedTouches[0],e)},touchend:function(e){this._fire("up",P(e),e.changedTouches[0],e)},_fire:function(e,t,n,o){A(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(e){return J(e)}})}}),X({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,w(this.info)},hasMovedEnough:function(e,t){if(this.info.prevent)return!1;if(this.info.started)return!0;var n=Math.abs(this.info.x-e),o=Math.abs(this.info.y-t);return n>=5||o>=5},mousedown:function(e){if(g(e)){var t=P(e),n=this,o=function(e){var o=e.clientX,r=e.clientY;n.hasMovedEnough(o,r)&&(n.info.state=n.info.started?"mouseup"===e.type?"end":"track":"start","start"===n.info.state&&J("tap"),n.info.addMove({x:o,y:r}),g(e)||(n.info.state="end",w(n.info)),n._fire(t,e),n.info.started=!0)};_(this.info,o,function(e){n.info.started&&o(e),w(n.info)}),this.info.x=e.clientX,this.info.y=e.clientY}},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){var t=P(e),n=e.changedTouches[0],o=n.clientX,r=n.clientY;this.hasMovedEnough(o,r)&&("start"===this.info.state&&J("tap"),this.info.addMove({x:o,y:r}),this._fire(t,n),this.info.state="track",this.info.started=!0)},touchend:function(e){var t=P(e),n=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),this._fire(t,n,e))},_fire:function(e,t){var n=this.info.moves[this.info.moves.length-2],o=this.info.moves[this.info.moves.length-1],r=o.x-this.info.x,i=o.y-this.info.y,u=void 0,s=0;n&&(u=o.x-n.x,s=o.y-n.y),A(e,"track",{state:this.info.state,x:t.clientX,y:t.clientY,dx:r,dy:i,ddx:u,ddy:s,sourceEvent:t,hover:function(){return x(t.clientX,t.clientY)}})}}),X({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},save:function(e){this.info.x=e.clientX,this.info.y=e.clientY},mousedown:function(e){g(e)&&this.save(e)},click:function(e){g(e)&&this.forward(e)},touchstart:function(e){this.save(e.changedTouches[0],e)},touchend:function(e){this.forward(e.changedTouches[0],e)},forward:function(e,t){var n=Math.abs(e.clientX-this.info.x),o=Math.abs(e.clientY-this.info.y),r=P(t||e);(isNaN(n)||isNaN(o)||n<=25&&o<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;var t=P(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;var n=t.getBoundingClientRect(),o=e.pageX,r=e.pageY;return!(o>=n.left&&o<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(e))&&(this.info.prevent||A(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t}))}});t.findOriginalTarget=P,t.add=T,t.remove=j},179:function(e,t,n){var o=n(180);e.exports="string"==typeof o?o:o.toString()},180:function(e,t,n){(e.exports=n(100)(!1)).push([e.i,"",""])},181:function(e,t){e.exports="Not Authorized Page\n"},97:function(e,t,n){"use strict";var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(15),i=n(99),u=n(7),s=a(n(179)),c=a(n(181));function a(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,(0,i.GestureEventListeners)(r.Element)),o(t,null,[{key:"is",get:function(){return"page-not-authorized"}},{key:"template",get:function(){return"\n      <style>\n        "+s.default+"\n      </style>\n      "+c.default+"\n    "}}]),t}();u.customElements.get(f.is)?console.warn(f.is+" is already defined"):u.customElements.define(f.is,f)},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GestureEventListeners=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(o):void 0};n(0);var i=n(5);var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(124));t.GestureEventListeners=(0,i.dedupingMixin)(function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,e),o(n,[{key:"_addEventListenerToNode",value:function(e,t,o){u.addListener(e,t,o)||r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"_addEventListenerToNode",this).call(this,e,t,o)}},{key:"_removeEventListenerFromNode",value:function(e,t,o){u.removeListener(e,t,o)||r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"_removeEventListenerFromNode",this).call(this,e,t,o)}}]),n}()})}}]);
//# sourceMappingURL=12.e63a3466211df8dfd3ee.fragment.js.map