(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{106:function(n,t,e){"use strict";var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),i=e(15),r=e(99),a=e(7),l=s(e(107)),c=s(e(109)),p=s(e(113));function s(n){return n&&n.__esModule?n:{default:n}}e(105);var d=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,(0,r.GestureEventListeners)(i.Element)),o(t,[{key:"_checkMarked",value:function(n){this.innerHTML=(0,p.default)(n)}}],[{key:"is",get:function(){return"marked-element"}},{key:"properties",get:function(){return{marked:{type:String,observer:"_checkMarked"}}}},{key:"template",get:function(){return"\n      <style>\n        "+l.default+"\n      </style>\n      "+c.default+"\n    "}}]),t}();a.customElements.get(d.is)?console.warn(d.is+" is already defined"):a.customElements.define(d.is,d)},107:function(n,t,e){var o=e(108);n.exports="string"==typeof o?o:o.toString()},108:function(n,t,e){(n.exports=e(100)(!1)).push([n.i,"@charset \"UTF-8\";\n.menu {\n  padding: 20px;\n  text-decoration: none;\n  background: #4C4C4C;\n  color: #EFEFEF;\n  z-index: 1000;\n  cursor: pointer;\n  border: 0; }\n  .menu:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n* {\n  color: #EFEFEF;\n  line-height: 1.4; }\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.2;\n  font-family: \"acumin-pro\", \"Acumin Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 800; }\n\nh1, h2, h3, h4, h5 {\n  max-width: 720px; }\n\nh1 {\n  font-size: 3rem; }\n\nh2 {\n  font-size: 2.5rem; }\n\nh3 {\n  font-size: 2rem; }\n\nh4 {\n  font-size: 1.75rem; }\n\nh5 {\n  font-size: 1.5rem; }\n\np {\n  max-width: 720px; }\n\n.with-text {\n  margin-left: 45px;\n  position: relative; }\n  .with-text::before {\n    position: absolute;\n    top: 0;\n    left: -65px;\n    width: 50px;\n    font-size: 0.85rem;\n    opacity: 0.6;\n    text-align: right;\n    display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text {\n      margin-left: 0; }\n      .with-text::before {\n        content: ''; } }\n\nh1.with-text::before {\n  content: 'h1';\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    h1.with-text::before {\n      content: ''; } }\n\nh2.with-text::before {\n  content: 'h2';\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    h2.with-text::before {\n      content: ''; } }\n\np.with-text::before {\n  content: 'p'; }\n  @media screen and (max-width: 420px) {\n    p.with-text::before {\n      content: ''; } }\n\nul.with-text::before {\n  content: 'ul'; }\n  @media screen and (max-width: 420px) {\n    ul.with-text::before {\n      content: ''; } }\n\nol.with-text::before {\n  content: 'ol'; }\n  @media screen and (max-width: 420px) {\n    ol.with-text::before {\n      content: ''; } }\n\ntable.with-text::before {\n  content: 'table'; }\n  @media screen and (max-width: 420px) {\n    table.with-text::before {\n      content: ''; } }\n\nsection.with-text::before {\n  content: '\\A7'; }\n  @media screen and (max-width: 420px) {\n    section.with-text::before {\n      content: ''; } }\n\n.img.with-text::before {\n  content: 'img'; }\n  @media screen and (max-width: 420px) {\n    .img.with-text::before {\n      content: ''; } }\n\n.with-text-block > * {\n  margin-left: 45px;\n  position: relative; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > * {\n      margin-left: 0; } }\n\n.with-text-block > h1::before {\n  content: 'h1';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h1::before {\n      content: ''; } }\n\n.with-text-block > h2::before {\n  content: 'h2';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h2::before {\n      content: ''; } }\n\n.with-text-block > h3::before {\n  content: 'h3';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 18px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h3::before {\n      content: ''; } }\n\n.with-text-block > h4::before {\n  content: 'h4';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h4::before {\n      content: ''; } }\n\n.with-text-block > h5::before {\n  content: 'h5';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h5::before {\n      content: ''; } }\n\n.with-text-block > p::before {\n  content: 'p';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > p::before {\n      content: ''; } }\n\n.with-text-block > ul::before {\n  content: 'ul';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ul::before {\n      content: ''; } }\n\n.with-text-block > ol::before {\n  content: 'ol';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ol::before {\n      content: ''; } }\n\n.red {\n  color: #FFB0A8; }\n\n.green {\n  color: #0AF7C2; }\n\n.blue {\n  color: #48CEFF; }\n",""])},109:function(n,t){n.exports="<slot></slot>\n"},172:function(n,t,e){"use strict";n.exports=function(n){return 0===(n=arguments.length>1?Array.from(arguments).map(function(n){return n.trim()}).filter(function(n){return n.length}).join("-"):n.trim()).length?"":1===n.length?n.toLowerCase():/^[a-z0-9]+$/.test(n)?n:(n!==n.toLowerCase()&&(n=function(n){for(var t=!1,e=!1,o=!1,i=0;i<n.length;i++){var r=n[i];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(n=n.substr(0,i)+"-"+n.substr(i),t=!1,o=e,e=!0,i++):e&&o&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(n=n.substr(0,i-1)+"-"+n.substr(i-1),o=e,e=!1,t=!0):(t=r.toLowerCase()===r,o=e,e=r.toUpperCase()===r)}return n}(n)),n.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,function(n,t){return t.toUpperCase()}))}},173:function(n,t,e){var o=e(174);n.exports="string"==typeof o?o:o.toString()},174:function(n,t,e){(n.exports=e(100)(!1)).push([n.i,"@charset \"UTF-8\";\n* {\n  color: #EFEFEF;\n  line-height: 1.4; }\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.2;\n  font-family: \"acumin-pro\", \"Acumin Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 800; }\n\nh1, h2, h3, h4, h5 {\n  max-width: 720px; }\n\nh1 {\n  font-size: 3rem; }\n\nh2 {\n  font-size: 2.5rem; }\n\nh3 {\n  font-size: 2rem; }\n\nh4 {\n  font-size: 1.75rem; }\n\nh5 {\n  font-size: 1.5rem; }\n\np {\n  max-width: 720px; }\n\n.with-text {\n  margin-left: 45px;\n  position: relative; }\n  .with-text::before {\n    position: absolute;\n    top: 0;\n    left: -65px;\n    width: 50px;\n    font-size: 0.85rem;\n    opacity: 0.6;\n    text-align: right;\n    display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text {\n      margin-left: 0; }\n      .with-text::before {\n        content: ''; } }\n\nh1.with-text::before {\n  content: 'h1';\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    h1.with-text::before {\n      content: ''; } }\n\nh2.with-text::before {\n  content: 'h2';\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    h2.with-text::before {\n      content: ''; } }\n\np.with-text::before {\n  content: 'p'; }\n  @media screen and (max-width: 420px) {\n    p.with-text::before {\n      content: ''; } }\n\nul.with-text::before {\n  content: 'ul'; }\n  @media screen and (max-width: 420px) {\n    ul.with-text::before {\n      content: ''; } }\n\nol.with-text::before {\n  content: 'ol'; }\n  @media screen and (max-width: 420px) {\n    ol.with-text::before {\n      content: ''; } }\n\ntable.with-text::before {\n  content: 'table'; }\n  @media screen and (max-width: 420px) {\n    table.with-text::before {\n      content: ''; } }\n\nsection.with-text::before {\n  content: '\\A7'; }\n  @media screen and (max-width: 420px) {\n    section.with-text::before {\n      content: ''; } }\n\n.img.with-text::before {\n  content: 'img'; }\n  @media screen and (max-width: 420px) {\n    .img.with-text::before {\n      content: ''; } }\n\n.with-text-block > * {\n  margin-left: 45px;\n  position: relative; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > * {\n      margin-left: 0; } }\n\n.with-text-block > h1::before {\n  content: 'h1';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h1::before {\n      content: ''; } }\n\n.with-text-block > h2::before {\n  content: 'h2';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h2::before {\n      content: ''; } }\n\n.with-text-block > h3::before {\n  content: 'h3';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 18px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h3::before {\n      content: ''; } }\n\n.with-text-block > h4::before {\n  content: 'h4';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h4::before {\n      content: ''; } }\n\n.with-text-block > h5::before {\n  content: 'h5';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h5::before {\n      content: ''; } }\n\n.with-text-block > p::before {\n  content: 'p';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > p::before {\n      content: ''; } }\n\n.with-text-block > ul::before {\n  content: 'ul';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ul::before {\n      content: ''; } }\n\n.with-text-block > ol::before {\n  content: 'ol';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ol::before {\n      content: ''; } }\n\n.red {\n  color: #FFB0A8; }\n\n.green {\n  color: #0AF7C2; }\n\n.blue {\n  color: #48CEFF; }\n\n.menu {\n  padding: 20px;\n  text-decoration: none;\n  background: #4C4C4C;\n  color: #EFEFEF;\n  z-index: 1000;\n  cursor: pointer;\n  border: 0; }\n  .menu:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n:host {\n  display: block;\n  background: #3A3A3A;\n  padding-top: 50px; }\n\n.main {\n  display: block;\n  min-height: calc(100vh - 200px);\n  padding: 20px 20px 120px; }\n  .main.hidden {\n    display: none; }\n\nside-bar {\n  height: 100vh;\n  display: none; }\n  side-bar.open {\n    display: block;\n    width: 100%;\n    position: fixed; }\n\nheader-bar {\n  z-index: 10000; }\n  header-bar.hidden {\n    display: none; }\n\na {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #fff; }\n\n.button {\n  display: inline-block;\n  margin: 1rem auto;\n  padding: 1rem 1.5rem;\n  border: 1px solid #fff; }\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px; }\n  .grid.ticket-schedule {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: auto; }\n\n.box {\n  border: 1px solid #fff;\n  padding: 40px 20px 20px;\n  position: relative;\n  margin-top: 40px; }\n  .box > .title {\n    position: absolute;\n    top: -50px;\n    border: 1px solid #fff;\n    background: #3a3a3a;\n    padding: 20px;\n    display: inline-block; }\n\n.small-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  padding: 20px;\n  margin: 0 40px 70px;\n  background: #4C4C4C;\n  color: #EFEFEF; }\n  .small-container .title-container {\n    margin-top: -40px;\n    margin-left: -40px; }\n\n.title {\n  margin: 0px;\n  text-align: left; }\n\nsection {\n  padding: 10px 0; }\n\n.flex-grid-2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  display: grid;\n  grid-template-columns: 1fr 1fr; }\n  @media screen and (max-width: 1100px) {\n    .flex-grid-2 {\n      display: block; } }\n  .flex-grid-2 li:first-child {\n    grid-column: 1/3; }\n\n.reset-ul {\n  list-style-type: none;\n  padding: 0; }\n  .reset-ul reset-li {\n    list-style-type: none; }\n\n.smaller-container h1, .smaller-container h2, .smaller-container h3, .smaller-container h4, .smaller-container h5 {\n  margin: 10px 0; }\n\n.anchor {\n  border-bottom: none;\n  text-decoration: underline; }\n",""])},175:function(n,t){n.exports='<side-bar on-side-bar-close="closeMenu"></side-bar>\n<header-bar on-side-bar-open="openMenu"></header-bar>\n\n<section class="main">\n\n  <h1 class="with-text">\n    Frequently Asked Questions\n  </h1>\n\n  <ul class="with-text flex-grid-2 reset-ul">\n    <template is="dom-repeat" items="[[faq.list]]">\n      <li class="small-container reset-li">\n        <div class="title-container">\n          <h3 class$="title [[item.color]]">\n            [[item.title]]\n          </h3>\n        </div>\n\n        <marked-element class="smaller-container" marked="[[camelcase(item.id, anythingElse, whyAttend, beforeYouBuy, conferencePrep, afterTheConference)]]"></marked-element>\n      </li>\n    </template>\n  </ul>\n\n\n</section>\n\n\n'},95:function(n,t,e){"use strict";var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}}(),i=e(15),r=e(99),a=e(7),l=e(101),c=e(104),p=h(e(172)),s=h(e(173)),d=h(e(175));function h(n){return n&&n.__esModule?n:{default:n}}e(102),e(106),e(112),e(111),e(103);var x=function(n){function t(){return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,(0,l.PageMixin)((0,c.FetchMixin)((0,r.GestureEventListeners)(i.Element)))),o(t,[{key:"connectedCallback",value:function(){var n=this;(function n(t,e,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,e);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:n(r,e,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.fetch("/data/faq.json").then(function(t){n.faq=t,t.list.forEach(function(t){n.fetch("/data/faq/"+t.id+".md").then(function(e){n.set((0,p.default)(t.id),e),n.set("index",n.index+1)})})})}},{key:"camelcase",value:function(n){return this[(0,p.default)(n)]}}],[{key:"is",get:function(){return"page-faq"}},{key:"properties",get:function(){return{afterTheConference:String,anythingElse:String,beforeYouBuy:String,conferencePrep:String,whyAttend:String,faq:Object,index:{type:Number,value:0}}}},{key:"template",get:function(){return"\n      <style>\n        "+s.default+"\n      </style>\n      "+d.default+"\n    "}}]),t}();a.customElements.get(x.is)?console.warn(x.is+" is already defined"):a.customElements.define(x.is,x)}}]);
//# sourceMappingURL=10.e29d8ec96fd8d0830484.fragment.js.map