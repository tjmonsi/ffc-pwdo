(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{106:function(n,e,t){"use strict";var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),o=t(15),r=t(99),a=t(7),l=d(t(107)),c=d(t(109)),s=d(t(113));function d(n){return n&&n.__esModule?n:{default:n}}t(105);var p=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,(0,r.GestureEventListeners)(o.Element)),i(e,[{key:"_checkMarked",value:function(n){this.innerHTML=(0,s.default)(n)}}],[{key:"is",get:function(){return"marked-element"}},{key:"properties",get:function(){return{marked:{type:String,observer:"_checkMarked"}}}},{key:"template",get:function(){return"\n      <style>\n        "+l.default+"\n      </style>\n      "+c.default+"\n    "}}]),e}();a.customElements.get(p.is)?console.warn(p.is+" is already defined"):a.customElements.define(p.is,p)},107:function(n,e,t){var i=t(108);n.exports="string"==typeof i?i:i.toString()},108:function(n,e,t){(n.exports=t(100)(!1)).push([n.i,"@charset \"UTF-8\";\n.menu {\n  padding: 20px;\n  text-decoration: none;\n  background: #4C4C4C;\n  color: #EFEFEF;\n  z-index: 1000;\n  cursor: pointer;\n  border: 0; }\n  .menu:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n* {\n  color: #EFEFEF;\n  line-height: 1.4; }\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.2;\n  font-family: \"acumin-pro\", \"Acumin Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 800; }\n\nh1, h2, h3, h4, h5 {\n  max-width: 720px; }\n\nh1 {\n  font-size: 3rem; }\n\nh2 {\n  font-size: 2.5rem;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em; }\n\nh3 {\n  font-size: 2rem; }\n\nh4 {\n  font-size: 1.75rem; }\n\nh5 {\n  font-size: 1.5rem; }\n\np {\n  max-width: 720px; }\n\nol, ul {\n  padding-left: 20px; }\n\nli ul li {\n  list-style: square; }\n\n.with-text {\n  margin-left: 45px;\n  position: relative; }\n  .with-text::before {\n    position: absolute;\n    top: 0;\n    left: -65px;\n    width: 50px;\n    font-size: 0.85rem;\n    opacity: 0.6;\n    text-align: right;\n    display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text {\n      margin-left: 0; }\n      .with-text::before {\n        content: ''; } }\n\nh1.with-text::before {\n  content: 'h1';\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    h1.with-text::before {\n      content: ''; } }\n\nh2.with-text::before {\n  content: 'h2';\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    h2.with-text::before {\n      content: ''; } }\n\np.with-text::before {\n  content: 'p'; }\n  @media screen and (max-width: 420px) {\n    p.with-text::before {\n      content: ''; } }\n\nul.with-text::before {\n  content: 'ul'; }\n  @media screen and (max-width: 420px) {\n    ul.with-text::before {\n      content: ''; } }\n\nol.with-text::before {\n  content: 'ol'; }\n  @media screen and (max-width: 420px) {\n    ol.with-text::before {\n      content: ''; } }\n\ntable.with-text::before {\n  content: 'table'; }\n  @media screen and (max-width: 420px) {\n    table.with-text::before {\n      content: ''; } }\n\nsection.with-text::before {\n  content: '\\A7';\n  line-height: 4.5em; }\n  @media screen and (max-width: 420px) {\n    section.with-text::before {\n      content: ''; } }\n\n.img.with-text::before {\n  content: 'img'; }\n  @media screen and (max-width: 420px) {\n    .img.with-text::before {\n      content: ''; } }\n\n.with-text-block > * {\n  margin-left: 45px;\n  position: relative; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > * {\n      margin-left: 0; } }\n\n.with-text-block > h1::before {\n  content: 'h1';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h1::before {\n      content: ''; } }\n\n.with-text-block > h2::before {\n  content: 'h2';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h2::before {\n      content: ''; } }\n\n.with-text-block > h3::before {\n  content: 'h3';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 18px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h3::before {\n      content: ''; } }\n\n.with-text-block > h4::before {\n  content: 'h4';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h4::before {\n      content: ''; } }\n\n.with-text-block > h5::before {\n  content: 'h5';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h5::before {\n      content: ''; } }\n\n.with-text-block > p::before {\n  content: 'p';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > p::before {\n      content: ''; } }\n\n.with-text-block > ul::before {\n  content: 'ul';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ul::before {\n      content: ''; } }\n\n.with-text-block > ol::before {\n  content: 'ol';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ol::before {\n      content: ''; } }\n\n.red {\n  color: #FFB0A8; }\n\n.green {\n  color: #0AF7C2; }\n\n.blue {\n  color: #48CEFF; }\n",""])},109:function(n,e){n.exports="<slot></slot>\n"},165:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.flush=void 0,e.beforeNextRender=function(n,e,t){i||a();o.push([n,e,t])},e.afterNextRender=function(n,e,t){i||a();r.push([n,e,t])},t(0);var i=!1,o=[],r=[];function a(){i=!0,requestAnimationFrame(function(){i=!1,l(o),setTimeout(function(){!function(n){for(var e=0,t=n.length;e<t;e++)c(n.shift())}(r)})})}function l(n){for(;n.length;)c(n.shift())}function c(n){var e=n[0],t=n[1],i=n[2];try{t.apply(e,i)}catch(n){setTimeout(function(){throw n})}}e.flush=function(){for(;o.length||r.length;)l(o),l(r);i=!1}},166:function(n,e,t){var i=t(167);n.exports="string"==typeof i?i:i.toString()},167:function(n,e,t){(n.exports=t(100)(!1)).push([n.i,"@charset \"UTF-8\";\n* {\n  color: #EFEFEF;\n  line-height: 1.4; }\n\nh1, h2, h3, h4, h5 {\n  line-height: 1.2;\n  font-family: \"acumin-pro\", \"Acumin Pro\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 800; }\n\nh1, h2, h3, h4, h5 {\n  max-width: 720px; }\n\nh1 {\n  font-size: 3rem; }\n\nh2 {\n  font-size: 2.5rem;\n  margin-top: 1.5em;\n  margin-bottom: 0.5em; }\n\nh3 {\n  font-size: 2rem; }\n\nh4 {\n  font-size: 1.75rem; }\n\nh5 {\n  font-size: 1.5rem; }\n\np {\n  max-width: 720px; }\n\nol, ul {\n  padding-left: 20px; }\n\nli ul li {\n  list-style: square; }\n\n.with-text {\n  margin-left: 45px;\n  position: relative; }\n  .with-text::before {\n    position: absolute;\n    top: 0;\n    left: -65px;\n    width: 50px;\n    font-size: 0.85rem;\n    opacity: 0.6;\n    text-align: right;\n    display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text {\n      margin-left: 0; }\n      .with-text::before {\n        content: ''; } }\n\nh1.with-text::before {\n  content: 'h1';\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    h1.with-text::before {\n      content: ''; } }\n\nh2.with-text::before {\n  content: 'h2';\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    h2.with-text::before {\n      content: ''; } }\n\np.with-text::before {\n  content: 'p'; }\n  @media screen and (max-width: 420px) {\n    p.with-text::before {\n      content: ''; } }\n\nul.with-text::before {\n  content: 'ul'; }\n  @media screen and (max-width: 420px) {\n    ul.with-text::before {\n      content: ''; } }\n\nol.with-text::before {\n  content: 'ol'; }\n  @media screen and (max-width: 420px) {\n    ol.with-text::before {\n      content: ''; } }\n\ntable.with-text::before {\n  content: 'table'; }\n  @media screen and (max-width: 420px) {\n    table.with-text::before {\n      content: ''; } }\n\nsection.with-text::before {\n  content: '\\A7';\n  line-height: 4.5em; }\n  @media screen and (max-width: 420px) {\n    section.with-text::before {\n      content: ''; } }\n\n.img.with-text::before {\n  content: 'img'; }\n  @media screen and (max-width: 420px) {\n    .img.with-text::before {\n      content: ''; } }\n\n.with-text-block > * {\n  margin-left: 45px;\n  position: relative; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > * {\n      margin-left: 0; } }\n\n.with-text-block > h1::before {\n  content: 'h1';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 34px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h1::before {\n      content: ''; } }\n\n.with-text-block > h2::before {\n  content: 'h2';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 24px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h2::before {\n      content: ''; } }\n\n.with-text-block > h3::before {\n  content: 'h3';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block;\n  padding-top: 18px; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h3::before {\n      content: ''; } }\n\n.with-text-block > h4::before {\n  content: 'h4';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h4::before {\n      content: ''; } }\n\n.with-text-block > h5::before {\n  content: 'h5';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > h5::before {\n      content: ''; } }\n\n.with-text-block > p::before {\n  content: 'p';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > p::before {\n      content: ''; } }\n\n.with-text-block > ul::before {\n  content: 'ul';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ul::before {\n      content: ''; } }\n\n.with-text-block > ol::before {\n  content: 'ol';\n  position: absolute;\n  top: 0;\n  left: -65px;\n  width: 50px;\n  font-size: 0.85rem;\n  opacity: 0.6;\n  text-align: right;\n  display: block; }\n  @media screen and (max-width: 420px) {\n    .with-text-block > ol::before {\n      content: ''; } }\n\n.red {\n  color: #FFB0A8; }\n\n.green {\n  color: #0AF7C2; }\n\n.blue {\n  color: #48CEFF; }\n\n.menu {\n  padding: 20px;\n  text-decoration: none;\n  background: #4C4C4C;\n  color: #EFEFEF;\n  z-index: 1000;\n  cursor: pointer;\n  border: 0; }\n  .menu:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n:host {\n  display: block;\n  background: #3A3A3A;\n  padding-top: 50px; }\n\n.main {\n  display: block;\n  min-height: calc(100vh - 200px);\n  padding: 20px 20px 120px; }\n  .main.hidden {\n    display: none; }\n\nside-bar {\n  height: 100vh;\n  display: none; }\n  side-bar.open {\n    display: block;\n    width: 100%;\n    position: fixed; }\n\nheader-bar {\n  z-index: 10000; }\n  header-bar.hidden {\n    display: none; }\n\na {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #fff;\n  border-color: currentColor; }\n\n.button {\n  display: inline-block;\n  margin: 1rem auto;\n  padding: 1rem 1.5rem;\n  border: 1px solid #fff; }\n\n.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px; }\n  .grid.ticket-schedule {\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: auto; }\n\n.box {\n  border: 1px solid #fff;\n  padding: 40px 20px 20px;\n  position: relative;\n  margin-top: 40px; }\n  .box > .title {\n    position: absolute;\n    top: -50px;\n    border: 1px solid #fff;\n    background: #3a3a3a;\n    padding: 20px;\n    display: inline-block; }\n\n.small-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  position: relative;\n  padding: 20px 20px 30px;\n  margin: 0 40px 70px;\n  background: #4C4C4C;\n  color: #EFEFEF; }\n  .small-container .title-container {\n    margin-top: -40px;\n    margin-left: -40px; }\n\n.title {\n  margin: 0px;\n  text-align: left; }\n\n.flex-grid-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr; }\n  @media screen and (max-width: 1000px) {\n    .flex-grid-3 {\n      grid-template-columns: 1fr 1fr; } }\n  @media screen and (max-width: 700px) {\n    .flex-grid-3 {\n      display: block; } }\n\n.flex-grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr; }\n  @media screen and (max-width: 1100px) {\n    .flex-grid-2 {\n      display: block; } }\n\n.reset-ul {\n  list-style-type: none;\n  padding: 0; }\n  .reset-ul reset-li {\n    list-style-type: none; }\n\n.disable {\n  opacity: 0.5; }\n\n.date-price {\n  padding-top: 20px; }\n  .date-price .date, .date-price .price {\n    font-size: 24px;\n    margin: 0 0 5px; }\n  .date-price .price {\n    margin: 0 0 20px; }\n\n.ticket-button {\n  color: inherit;\n  display: inline-block;\n  padding: 10px 20px;\n  text-align: center;\n  border: 1px solid #EFEFEF;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.button-container {\n  padding: 20px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.grid.perks {\n  list-style-type: none;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 0; }\n  @media screen and (max-width: 1000px) {\n    .grid.perks {\n      grid-template-columns: 1fr 1fr 1fr; } }\n  @media screen and (max-width: 700px) {\n    .grid.perks {\n      grid-template-columns: 1fr 1fr; } }\n  @media screen and (max-width: 500px) {\n    .grid.perks {\n      display: block; } }\n  .grid.perks .grid-item {\n    list-style-type: none;\n    text-align: center; }\n\n.with-text-block {\n  max-width: 720px;\n  display: block; }\n  .with-text-block li {\n    margin-top: 12px; }\n\n.anchor {\n  border-bottom: none;\n  text-decoration: underline; }\n\n.item-discount p {\n  margin: 0; }\n",""])},168:function(n,e){n.exports='<side-bar on-side-bar-close="closeMenu"></side-bar>\n<header-bar on-side-bar-open="openMenu"></header-bar>\n\n<section class="main">\n\n  <h1 class="with-text">\n    Tickets\n  </h1>\n\n  <ul class="with-text flex-grid-3 reset-ul">\n    <template is="dom-repeat" items="[[ticketsObject.tickets.list]]">\n      <li class$="small-container reset-li [[_disable(item.disable)]]">\n        <div class="title-container">\n          <h2 class$="[[item.color]] title">\n            [[item.title]]\n          </h2>\n        </div>\n\n        <div class="date-price">\n          <h3 class="date">\n            [[item.date]]\n          </h3>\n          <h3 class="price">\n            [[item.price]]\n          </h3>\n        </div>\n\n        <template is="dom-if" if="[[item.link]]">\n          <div class="button-container">\n            <a class="ticket-button" href="[[item.link.href]]" disabled="[[item.disable]]">\n              [[item.link.name]]\n            </a>\n          </div>\n        </template>\n      </li>\n    </template>\n  </ul>\n\n  <marked-element class="with-text-block" marked="[[ticketsObject.tickets.note]]"></marked-element>\n\n  <marked-element class="with-text-block" marked="[[whyAttend]]"></marked-element>\n\n  <h2 class="with-text">\n    [[ticketsObject.perks.title]]\n  </h2>\n\n  <ul class="with-text grid perks">\n    <template is="dom-repeat" items="[[ticketsObject.perks.list]]">\n      <li class="grid-item">\n        <template is="dom-repeat" items="[[item.icons]]" as="icon">\n          <img src="/images/[[icon]]" class="icon">\n        </template>\n        <h3 class="blue perk">[[item.title]]</h3>\n      </li>\n    </template>\n  </ul>\n\n  <marked-element class="with-text-block" marked="[[wantToWin]]"></marked-element>\n\n  <marked-element class="with-text-block" marked="[[scholarship]]"></marked-element>\n\n  <h2 class="with-text">\n    [[ticketsObject.specialDiscounts.title]]\n  </h2>\n\n  <ul class="with-text flex-grid-2 reset-ul">\n    <template is="dom-repeat" items="[[ticketsObject.specialDiscounts.list]]">\n      <li class$="small-container reset-li [[_disable(item.disable)]]">\n        <div class="title-container">\n          <h2 class$="[[item.color]] title">\n            [[item.title]]\n          </h2>\n        </div>\n\n        <div class="date-price">\n          <h3 class="date">\n            [[item.date]]\n          </h3>\n          <h3 class="price">\n            [[item.price]]\n          </h3>\n        </div>\n\n        <marked-element marked="[[item.description]]"></marked-element>\n\n        <ul>\n          <template is="dom-repeat" items="[[item.list]]" as="listItem">\n            <li class="item-discount">\n              <marked-element marked="[[listItem]]"></marked-element>\n            </li>\n          </template>\n        </ul>\n\n        <marked-element marked="[[item.note]]"></marked-element>\n\n        <template is="dom-if" if="[[item.link]]">\n          <div class="button-container">\n            <template is="dom-if" if="[[!item.disable]]">\n              <a class="ticket-button" target="_blank" rel="noopener" href="[[item.link.href]]">\n                [[item.link.name]]\n              </a>\n            </template>\n\n            <template is="dom-if" if="[[item.disable]]">\n              <a class="ticket-button">\n                [[item.link.name]]\n              </a>\n            </template>\n          </div>\n        </template>\n      </li>\n    </template>\n  </ul>\n\n\n  <h2 class="with-text" id="how-to-pay">\n    How to Pay\n  </h2>\n\n  <ul class="with-text flex-grid-2 reset-ul">\n    <li class="small-container reset-li">\n      <div class="title-container">\n        <h3 class="title blue">\n          Online\n        </h3>\n      </div>\n\n      <marked-element marked="[[online]]"></marked-element>\n    </li>\n\n    <li class="small-container reset-li">\n      <div class="title-container">\n        <h3 class="title blue">\n          Offline\n        </h3>\n      </div>\n\n      <marked-element marked="[[offline]]"></marked-element>\n    </li>\n  </ul>\n</section>\n\n<footer-bar></footer-bar>\n'},93:function(n,e,t){"use strict";var i=function(){function n(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),o=t(15),r=t(99),a=t(165),l=t(1),c=t(7),s=t(104),d=t(101),p=m(t(166)),h=m(t(168));function m(n){return n&&n.__esModule?n:{default:n}}t(102),t(106),t(112),t(111),t(103),t(105);var f=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,(0,l.ReduxMixin)((0,d.PageMixin)((0,s.FetchMixin)((0,r.GestureEventListeners)(o.Element))))),i(e,[{key:"connectedCallback",value:function(){var n=this;(function n(e,t,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:n(r,t,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),this.fetch("/data/tickets.json").then(function(e){return n.ticketsObject=e}),this.fetch("/data/tickets/why-attend.md").then(function(e){return n.whyAttend=e}),this.fetch("/data/tickets/want-to-win-a-ticket.md").then(function(e){return n.wantToWin=e}),this.fetch("/data/tickets/scholarship.md").then(function(e){return n.scholarship=e}),this.fetch("/data/tickets/online.md").then(function(e){return n.online=e}),this.fetch("/data/tickets/offline.md").then(function(e){return n.offline=e})}},{key:"_focusOnId",value:function(n){var e=this.shadowRoot.querySelector("#"+n);e&&(0,a.afterNextRender)(this,function(){setTimeout(function(){e.scrollIntoView({behavior:"smooth",block:"start"})},200)})}},{key:"_disable",value:function(n){return n?"disable":""}}],[{key:"is",get:function(){return"page-tickets"}},{key:"properties",get:function(){return{ticketsObject:Object,online:String,offline:String,whyAttend:String,wantToWin:String,scholarship:String,queryParams:{type:String,statePath:"query.params"}}}},{key:"template",get:function(){return"\n      <style>\n        "+p.default+"\n      </style>\n      "+h.default+"\n    "}},{key:"observers",get:function(){return["_focusOnId(queryParams.id, ticketsObject, whyAttend, online, offline, scholarship, wantToWin)"]}}]),e}();c.customElements.get(f.is)?console.warn(f.is+" is already defined"):c.customElements.define(f.is,f)}}]);
//# sourceMappingURL=8.6c1d85e14851678c2a6d.fragment.js.map