(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},103:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DomRepeat=void 0;var o=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(15),s=n(125),a=n(30),u=n(126),c=n(127),l=n(16),h=n(10);s.TemplateInstanceBase;var f=(0,c.OptionalMutableData)(i.Element),_=function(t){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var t=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.__instances=[],t.__limit=1/0,t.__pool=[],t.__renderDebouncer=null,t.__itemsIdxToInstIdx={},t.__chunkCount=null,t.__lastChunkTime=null,t.__sortFn=null,t.__filterFn=null,t.__observePaths=null,t.__ctor=null,t.__isDetached=!0,t.template=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,f),r(e,null,[{key:"is",get:function(){return"dom-repeat"}},{key:"template",get:function(){return null}},{key:"properties",get:function(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}},{key:"observers",get:function(){return["__itemsChanged(items.*)"]}}]),r(e,[{key:"disconnectedCallback",value:function(){o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"disconnectedCallback",this).call(this),this.__isDetached=!0;for(var t=0;t<this.__instances.length;t++)this.__detachInstance(t)}},{key:"connectedCallback",value:function(){if(o(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.__isDetached){this.__isDetached=!1;for(var t=this.parentNode,n=0;n<this.__instances.length;n++)this.__attachInstance(n,t)}}},{key:"__ensureTemplatized",value:function(){var t=this;if(!this.__ctor){var e=this.template=this.querySelector("template");if(!e){var n=new MutationObserver(function(){if(!t.querySelector("template"))throw new Error("dom-repeat requires a <template> child");n.disconnect(),t.__render()});return n.observe(this,{childList:!0}),!1}var o={};o[this.as]=!0,o[this.indexAs]=!0,o[this.itemsIndexAs]=!0,this.__ctor=s.Templatize.templatize(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:o,forwardHostProp:function(t,e){for(var n,o=this.__instances,r=0;r<o.length&&(n=o[r]);r++)n.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if((0,l.matches)(this.as,e)){var o=t[this.itemsIndexAs];e==this.as&&(this.items[o]=n);var r=(0,l.translate)(this.as,"items."+o,e);this.notifyPath(r,n)}}})}return!0}},{key:"__getMethodHost",value:function(){return this.__dataHost._methodHost||this.__dataHost}},{key:"__sortChanged",value:function(t){var e=this.__getMethodHost();this.__sortFn=t&&("function"==typeof t?t:function(){return e[t].apply(e,arguments)}),this.items&&this.__debounceRender(this.__render)}},{key:"__filterChanged",value:function(t){var e=this.__getMethodHost();this.__filterFn=t&&("function"==typeof t?t:function(){return e[t].apply(e,arguments)}),this.items&&this.__debounceRender(this.__render)}},{key:"__computeFrameTime",value:function(t){return Math.ceil(1e3/t)}},{key:"__initializeChunking",value:function(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}},{key:"__tryRenderChunk",value:function(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}},{key:"__requestRenderChunk",value:function(){var t=this;requestAnimationFrame(function(){return t.__renderChunk()})}},{key:"__renderChunk",value:function(){var t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}},{key:"__observeChanged",value:function(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}},{key:"__itemsChanged",value:function(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}},{key:"__handleObservedPaths",value:function(t){if(this.__observePaths){t=t.substring(t.indexOf(".")+1);for(var e=this.__observePaths,n=0;n<e.length;n++)if(0===t.indexOf(e[n]))return this.__debounceRender(this.__render,this.delay),!0}}},{key:"__debounceRender",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.__renderDebouncer=a.Debouncer.debounce(this.__renderDebouncer,e>0?h.timeOut.after(e):h.microTask,t.bind(this)),(0,u.enqueueDebouncer)(this.__renderDebouncer)}},{key:"render",value:function(){this.__debounceRender(this.__render),(0,u.flush)()}},{key:"__render",value:function(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}},{key:"__applyFullRefresh",value:function(){for(var t=this,e=this.items||[],n=new Array(e.length),o=0;o<e.length;o++)n[o]=o;this.__filterFn&&(n=n.filter(function(n,o,r){return t.__filterFn(e[n],o,r)})),this.__sortFn&&n.sort(function(n,o){return t.__sortFn(e[n],e[o])});for(var r=this.__itemsIdxToInstIdx={},i=0,s=Math.min(n.length,this.__limit);i<s;i++){var a=this.__instances[i],u=n[i],c=e[u];r[u]=i,a&&i<this.__limit?(a._setPendingProperty(this.as,c),a._setPendingProperty(this.indexAs,i),a._setPendingProperty(this.itemsIndexAs,u),a._flushProperties()):this.__insertInstance(c,i,u)}for(var l=this.__instances.length-1;l>=i;l--)this.__detachAndRemoveInstance(l)}},{key:"__detachInstance",value:function(t){for(var e=this.__instances[t],n=0;n<e.children.length;n++){var o=e.children[n];e.root.appendChild(o)}return e}},{key:"__attachInstance",value:function(t,e){var n=this.__instances[t];e.insertBefore(n.root,this)}},{key:"__detachAndRemoveInstance",value:function(t){var e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}},{key:"__stampInstance",value:function(t,e,n){var o={};return o[this.as]=t,o[this.indexAs]=e,o[this.itemsIndexAs]=n,new this.__ctor(o)}},{key:"__insertInstance",value:function(t,e,n){var o=this.__pool.pop();o?(o._setPendingProperty(this.as,t),o._setPendingProperty(this.indexAs,e),o._setPendingProperty(this.itemsIndexAs,n),o._flushProperties()):o=this.__stampInstance(t,e,n);var r=this.__instances[e+1],i=r?r.children[0]:this;return this.parentNode.insertBefore(o.root,i),this.__instances[e]=o,o}},{key:"_showHideChildren",value:function(t){for(var e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}},{key:"__handleItemPath",value:function(t,e){var n=t.slice(6),o=n.indexOf("."),r=o<0?n:n.substring(0,o);if(r==parseInt(r,10)){var i=o<0?"":n.substring(o+1);this.__handleObservedPaths(i);var s=this.__itemsIdxToInstIdx[r],a=this.__instances[s];if(a){var u=this.as+(i?"."+i:"");a._setPendingPropertyOrPath(u,e,!1,!0),a._flushProperties()}return!0}}},{key:"itemForElement",value:function(t){var e=this.modelForElement(t);return e&&e[this.as]}},{key:"indexForElement",value:function(t){var e=this.modelForElement(t);return e&&e[this.indexAs]}},{key:"modelForElement",value:function(t){return s.Templatize.modelForElement(this.template,t)}}]),e}();customElements.define(_.is,_),e.DomRepeat=_},124:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.remove=e.add=e.findOriginalTarget=e.prevent=e._fire=e.recognizers=e.gestures=void 0,e.deepTargetFind=T,e._findOriginalTarget=k,e._handleNative=E,e._handleTouchAction=C,e.addListener=x,e.removeListener=j,e._add=M,e._remove=I,e.register=D,e._findRecognizerByEvent=F,e.setTouchAction=N,e.resetMouseCanceller=function(){b.mouse.mouseIgnoreJob&&b.mouse.mouseIgnoreJob.flush()},n(0);var o=n(10),r=n(30),i="string"==typeof document.head.style.touchAction,s="__polymerGestures",a="__polymerGesturesHandled",u="__polymerGesturesTouchAction",c=2500,l=["mousedown","mousemove","mouseup","click"],h=[0,1,4,2],f=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}(),_=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){_=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();var p=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),d=function(){};d.prototype.reset=function(){},d.prototype.mousedown,d.prototype.mousemove,d.prototype.mouseup,d.prototype.touchstart,d.prototype.touchmove,d.prototype.touchend,d.prototype.click;var v=function(t){var e=t.sourceCapabilities;if((!e||e.firesTouchEvents)&&(t[a]={skip:!0},"click"===t.type)){var n=t.composedPath&&t.composedPath();if(n)for(var o=0;o<n.length;o++)if(n[o]===b.mouse.target)return;t.preventDefault(),t.stopPropagation()}};function m(t){for(var e,n=p?["click"]:l,o=0;o<n.length;o++)e=n[o],t?document.addEventListener(e,v,!0):document.removeEventListener(e,v,!0)}function y(t){var e=t.type;if(-1===l.indexOf(e))return!1;if("mousemove"===e){var n=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!f&&(n=h[t.which]||0),Boolean(1&n)}return 0===(void 0===t.button?0:t.button)}var b={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function g(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function P(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){b.mouse.mouseIgnoreJob||m(!0),b.mouse.target=t.composedPath()[0],b.mouse.mouseIgnoreJob=r.Debouncer.debounce(b.mouse.mouseIgnoreJob,o.timeOut.after(c),function(){m(),b.mouse.target=null,b.mouse.mouseIgnoreJob=null})},!!_&&{passive:!0});var O=e.gestures={},w=e.recognizers=[];function T(t,e){for(var n=document.elementFromPoint(t,e),o=n;o&&o.shadowRoot&&!window.ShadyDOM;){if(o===(o=o.shadowRoot.elementFromPoint(t,e)))break;o&&(n=o)}return n}function k(t){return t.composedPath?t.composedPath()[0]:t.target}function E(t){var e=void 0,n=t.type,o=t.currentTarget[s];if(o){var r=o[n];if(r){if(!t[a]&&(t[a]={},"touch"===n.slice(0,5))){var u=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(b.touch.id=u.identifier),b.touch.id!==u.identifier)return;i||"touchstart"!==n&&"touchmove"!==n||C(t)}if(!(e=t[a]).skip){for(var c,l=0;l<w.length;l++)r[(c=w[l]).name]&&!e[c.name]&&c.flow&&c.flow.start.indexOf(t.type)>-1&&c.reset&&c.reset();for(var h,f=0;f<w.length;f++)r[(h=w[f]).name]&&!e[h.name]&&(e[h.name]=!0,h[n](t))}}}}function C(t){var e=t.changedTouches[0],n=t.type;if("touchstart"===n)b.touch.x=e.clientX,b.touch.y=e.clientY,b.touch.scrollDecided=!1;else if("touchmove"===n){if(b.touch.scrollDecided)return;b.touch.scrollDecided=!0;var o=function(t){var e="auto",n=t.composedPath&&t.composedPath();if(n)for(var o,r=0;r<n.length;r++)if((o=n[r])[u]){e=o[u];break}return e}(t),r=!1,i=Math.abs(b.touch.x-e.clientX),s=Math.abs(b.touch.y-e.clientY);t.cancelable&&("none"===o?r=!0:"pan-x"===o?r=s>i:"pan-y"===o&&(r=i>s)),r?t.preventDefault():r("track")}}function x(t,e,n){return!!O[e]&&(M(t,e,n),!0)}function j(t,e,n){return!!O[e]&&(I(t,e,n),!0)}function M(t,e,n){var o=O[e],r=o.deps,i=o.name,a=t[s];a||(t[s]=a={});for(var u,c,h=0;h<r.length;h++)u=r[h],p&&l.indexOf(u)>-1&&"click"!==u||((c=a[u])||(a[u]=c={_count:0}),0===c._count&&t.addEventListener(u,E),c[i]=(c[i]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,n),o.touchAction&&N(t,o.touchAction)}function I(t,e,n){var o=O[e],r=o.deps,i=o.name,a=t[s];if(a)for(var u,c,l=0;l<r.length;l++)(c=a[u=r[l]])&&c[i]&&(c[i]=(c[i]||1)-1,c._count=(c._count||1)-1,0===c._count&&t.removeEventListener(u,E));t.removeEventListener(e,n)}function D(t){w.push(t);for(var e=0;e<t.emits.length;e++)O[t.emits[e]]=t}function F(t){for(var e,n=0;n<w.length;n++){e=w[n];for(var o=0;o<e.emits.length;o++)if(e.emits[o]===t)return e}return null}function N(t,e){i&&(t.style.touchAction=e),t[u]=e}function H(t,e,n){var o=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(o.detail=n,t.dispatchEvent(o),o.defaultPrevented){var r=n.preventer||n.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function R(t){var e=F(t);e.info&&(e.info.prevent=!0)}e._fire=H,e.prevent=R,D({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){P(this.info)},mousedown:function(t){if(y(t)){var e=k(t),n=this;g(this.info,function(t){y(t)||(n._fire("up",e,t),P(n.info))},function(t){y(t)&&n._fire("up",e,t),P(n.info)}),this._fire("down",e,t)}},touchstart:function(t){this._fire("down",k(t),t.changedTouches[0],t)},touchend:function(t){this._fire("up",k(t),t.changedTouches[0],t)},_fire:function(t,e,n,o){H(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:o,prevent:function(t){return R(t)}})}}),D({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,P(this.info)},hasMovedEnough:function(t,e){if(this.info.prevent)return!1;if(this.info.started)return!0;var n=Math.abs(this.info.x-t),o=Math.abs(this.info.y-e);return n>=5||o>=5},mousedown:function(t){if(y(t)){var e=k(t),n=this,o=function(t){var o=t.clientX,r=t.clientY;n.hasMovedEnough(o,r)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&R("tap"),n.info.addMove({x:o,y:r}),y(t)||(n.info.state="end",P(n.info)),n._fire(e,t),n.info.started=!0)};g(this.info,o,function(t){n.info.started&&o(t),P(n.info)}),this.info.x=t.clientX,this.info.y=t.clientY}},touchstart:function(t){var e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){var e=k(t),n=t.changedTouches[0],o=n.clientX,r=n.clientY;this.hasMovedEnough(o,r)&&("start"===this.info.state&&R("tap"),this.info.addMove({x:o,y:r}),this._fire(e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){var e=k(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),this._fire(e,n,t))},_fire:function(t,e){var n=this.info.moves[this.info.moves.length-2],o=this.info.moves[this.info.moves.length-1],r=o.x-this.info.x,i=o.y-this.info.y,s=void 0,a=0;n&&(s=o.x-n.x,a=o.y-n.y),H(t,"track",{state:this.info.state,x:e.clientX,y:e.clientY,dx:r,dy:i,ddx:s,ddy:a,sourceEvent:e,hover:function(){return T(e.clientX,e.clientY)}})}}),D({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},save:function(t){this.info.x=t.clientX,this.info.y=t.clientY},mousedown:function(t){y(t)&&this.save(t)},click:function(t){y(t)&&this.forward(t)},touchstart:function(t){this.save(t.changedTouches[0],t)},touchend:function(t){this.forward(t.changedTouches[0],t)},forward:function(t,e){var n=Math.abs(t.clientX-this.info.x),o=Math.abs(t.clientY-this.info.y),r=k(e||t);(isNaN(n)||isNaN(o)||n<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;var e=k(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;var n=e.getBoundingClientRect(),o=t.pageX,r=t.pageY;return!(o>=n.left&&o<=n.right&&r>=n.top&&r<=n.bottom)}return!1}(t))&&(this.info.prevent||H(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}});e.findOriginalTarget=k,e.add=x,e.remove=j},125:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateInstanceBase=e.Templatize=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(0);var r=n(31),i=n(127);function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=null;function l(){return c}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});var h=(0,r.PropertyEffects)(l),f=(0,i.MutableData)(h);var _=(0,r.PropertyEffects)(function(){return function t(){u(this,t)}}()),p=function(t){function e(t){u(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));n._configureProperties(t),n.root=n._stampTemplate(n.__dataHost);for(var o=n.children=[],r=n.root.firstChild;r;r=r.nextSibling)o.push(r),r.__templatizeInstance=n;n.__templatizeOwner.__hideTemplateChildren__&&n._showHideChildren(!0);var i=n.__templatizeOptions;return(t&&i.instanceProps||!i.instanceProps)&&n._enableProperties(),n}return a(e,_),o(e,[{key:"_configureProperties",value:function(t){var e=this.__templatizeOptions;if(t)for(var n in e.instanceProps)n in t&&this._setPendingProperty(n,t[n]);for(var o in this.__hostProps)this._setPendingProperty(o,this.__dataHost["_host_"+o])}},{key:"forwardHostProp",value:function(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}},{key:"_addEventListenerToNode",value:function(t,e,n){var o=this;if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,function(t){t.model=o,n(t)});else{var r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,n)}}},{key:"_showHideChildren",value:function(t){for(var e=this.children,n=0;n<e.length;n++){var o=e[n];Boolean(t)!=Boolean(o.__hideTemplateChildren__)&&(o.nodeType===Node.TEXT_NODE?t?(o.__polymerTextContent__=o.textContent,o.textContent=""):o.textContent=o.__polymerTextContent__:o.style&&(t?(o.__polymerDisplay__=o.style.display,o.style.display="none"):o.style.display=o.__polymerDisplay__)),o.__hideTemplateChildren__=t,o._showHideChildren&&o._showHideChildren(t)}}},{key:"_setUnmanagedPropertyToNode",value:function(t,n,o){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==n?t.__polymerTextContent__=o:function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0}(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_setUnmanagedPropertyToNode",this).call(this,t,n,o)}},{key:"parentModel",get:function(){var t=this.__parentModel;if(!t){var e=void 0;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}}]),e}();p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;var d=(0,i.MutableData)(p);function v(t,e,n){var o=n.mutableData?d:p,r=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,o),e}();return r.prototype.__templatizeOptions=n,r.prototype._bindTemplate(t),function(t,e,n,o){var r=n.hostProps||{};for(var i in o.instanceProps){delete r[i];var s=o.notifyInstanceProp;s&&t.prototype._addPropertyEffect(i,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:b(i,s)})}if(o.forwardHostProp&&e.__dataHost)for(var a in r)t.prototype._addPropertyEffect(a,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(r,t,e,n),r}function m(t,e,n){var o=n.forwardHostProp;if(o){var r=e.templatizeTemplateClass;if(!r){var i=n.mutableData?f:h;r=e.templatizeTemplateClass=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,i),e}();var l=e.hostProps;for(var _ in l)r.prototype._addPropertyEffect("_host_"+_,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:y(_,o)}),r.prototype._createNotifyingProperty("_host_"+_)}!function(t,e){c=t,Object.setPrototypeOf(t,e.prototype),new e,c=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function y(t,e){return function(t,n,o){e.call(t.__templatizeOwner,n.substring("_host_".length),o[n])}}function b(t,e){return function(t,n,o){e.call(t.__templatizeOwner,t,n,o[n])}}var g={templatize:function(t,e,n){if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;var o=e.constructor._parseTemplate(t),r=o.templatizeInstanceClass;r||(r=v(t,o,n),o.templatizeInstanceClass=r),m(t,o,n);var i=function(t){function e(){return u(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,r),e}();return i.prototype._methodHost=function(t){var e=t.__dataHost;return e&&e._methodHost||e}(t),i.prototype.__dataHost=t,i.prototype.__templatizeOwner=e,i.prototype.__hostProps=o.hostProps,i},modelForElement:function(t,e){for(var n=void 0;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=e.parentNode;return null}};e.Templatize=g,e.TemplateInstanceBase=p},126:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flush=e.enqueueDebouncer=void 0,n(0);var o=[];e.enqueueDebouncer=function(t){o.push(t)};function r(){for(var t=Boolean(o.length);o.length;)try{o.shift().flush()}catch(t){setTimeout(function(){throw t})}return t}e.flush=function(){var t=void 0,e=void 0;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=r()}while(t||e)}},127:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.OptionalMutableData=e.MutableData=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(5);function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e,n,o,i){var s=void 0;i&&(s="object"===(void 0===n?"undefined":r(n))&&null!==n)&&(o=t.__dataTemp[e]);var a=o!==n&&(o==o||n==n);return s&&a&&(t.__dataTemp[e]=n),a}var l=e.MutableData=(0,i.dedupingMixin)(function(t){var e=function(e){function n(){return s(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),o(n,[{key:"_shouldPropertyChange",value:function(t,e,n){return c(this,t,e,n,!0)}}]),n}();return e.prototype.mutableData=!1,e});e.OptionalMutableData=(0,i.dedupingMixin)(function(t){return function(e){function n(){return s(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),o(n,[{key:"_shouldPropertyChange",value:function(t,e,n){return c(this,t,e,n,this.mutableData)}}],[{key:"properties",get:function(){return{mutableData:Boolean}}}]),n}()});l._mutablePropertyChange=c},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GestureEventListeners=void 0;var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var s=r.get;return void 0!==s?s.call(o):void 0};n(0);var i=n(5);var s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(124));e.GestureEventListeners=(0,i.dedupingMixin)(function(t){return function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,t),o(n,[{key:"_addEventListenerToNode",value:function(t,e,o){s.addListener(t,e,o)||r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"_addEventListenerToNode",this).call(this,t,e,o)}},{key:"_removeEventListenerFromNode",value:function(t,e,o){s.removeListener(t,e,o)||r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"_removeEventListenerFromNode",this).call(this,t,e,o)}}]),n}()})}}]);
//# sourceMappingURL=0.4450db51e4d65c998192.fragment.js.map