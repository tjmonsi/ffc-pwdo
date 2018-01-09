webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _gestureEventListeners = __webpack_require__(85);

var _window = __webpack_require__(7);

var _style = __webpack_require__(101);

var _style2 = _interopRequireDefault(_style);

var _template = __webpack_require__(103);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_GestureEventListener) {
  _inherits(Component, _GestureEventListener);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, null, [{
    key: 'is',
    get: function get() {
      return 'nav-list';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        nav: {
          type: Array,
          value: [{
            href: '/',
            label: 'Home'
          }, {
            href: '/speakers',
            label: 'Speakers'
          }, {
            href: '/schedule',
            label: 'Schedule'
          }, {
            href: '/tickets',
            label: 'Tickets'
          }, {
            href: '/sponsors',
            label: 'Sponsors'
          }, {
            href: '/about',
            label: 'About'
          }, {
            href: '/faq',
            label: 'FAQ'
          }, {
            href: '/scrapbook',
            label: 'Scrapbook'
          }]
        }
      };
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n        ' + _style2.default + '\n      </style>\n      ' + _template2.default + '\n    ';
    }
  }]);

  return Component;
}((0, _gestureEventListeners.GestureEventListeners)(_polymerElement.Element));

!_window.customElements.get(Component.is) ? _window.customElements.define(Component.is, Component) : console.warn(Component.is + ' is already defined');

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(102);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, "a {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #fff; }\n\n:host {\n  display: block; }\n\n.nav-list {\n  margin: 0;\n  list-style-type: none; }\n\n.nav-item {\n  margin: 1rem auto; }\n\n.nav-anchor {\n  border: none; }\n", ""]);

// exports


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\" role=\"navigation\">\n  <ul class=\"nav-list\">\n    <template is=\"dom-repeat\" items=\"[[nav]]\">\n      <li class=\"nav-item\">\n        <a class=\"nav-anchor\" href=\"[[item.href]]\">\n          [[item.label]]\n        </a>\n      </li>\n    </template>\n  </ul>\n</nav>"

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(105);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\nsvg {\n  width: 100%; }\n", ""]);

// exports


/***/ }),

/***/ 106:
/***/ (function(module, exports) {

module.exports = "<svg class=\"logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 505.039 237.126\">\n  <g fill=\"#EFEFEF\">\n    <path d=\"M198.318 11.002v12.571h20.685V34.54h-20.685v23.983H186.46V.036h38.605v10.966h-26.747zM227.654 35.342c0-18.723 7.399-24.162 19.971-24.162 12.66 0 20.061 5.438 20.061 24.162 0 18.812-7.4 23.805-20.061 23.805-12.571 0-19.971-4.993-19.971-23.805zm28.263 0c0-10.075-3.655-13.552-8.292-13.552-4.636 0-8.202 3.478-8.202 13.552 0 9.807 3.566 13.195 8.202 13.195 4.637 0 8.292-3.388 8.292-13.195zM306.205 12.25l-3.389 11.501h-5.527l-8.916 3.388v31.383h-11.769V12.161h10.075l1.604 5.706 4.279-2.764c3.299-2.14 7.044-3.299 10.343-3.299 1.16.001 2.765.179 3.3.446zM370.668 29.19v29.333h-11.769V29.19c0-3.566-1.783-6.509-6.509-6.509h-5.26v35.841h-11.769V29.19c0-3.566-1.783-6.509-6.509-6.509h-5.261v35.841h-11.769V12.161h10.967l.445 1.605 8.916-1.961c4.102 0 8.916.802 11.59 2.585l11.947-2.585c10.434 0 14.981 5.26 14.981 17.385zM198.318 100.17v12.571h20.685v10.966h-20.685v23.983H186.46V89.203h38.605v10.967h-26.747zM266.438 101.329v46.362h-10.967l-.445-1.693-9.361 2.05c-11.323 0-15.691-7.043-15.691-17.385V101.33h11.769v29.333c0 4.457 1.961 6.508 5.171 6.508l7.757-.802v-35.04h11.767zM313.249 118.358v29.333h-11.77v-29.333c0-4.458-1.961-6.509-5.171-6.509l-7.757.803v35.039h-11.769v-46.362h10.967l.445 1.694 9.361-2.051c11.325 0 15.694 7.044 15.694 17.386zM340.712 100.972h5.082l8.915 2.051v9.629l-10.163-1.07h-3.834c-5.617 0-7.489 4.012-7.489 13.017 0 9.184 1.872 12.75 7.489 12.75h3.834l10.163-1.07v9.629l-8.915 2.051h-5.082c-13.552 0-19.258-6.062-19.258-23.359 0-17.298 5.706-23.628 19.258-23.628zM390.287 137.17v8.203l-11.77 2.585c-7.935 0-12.036-5.438-12.036-15.514v-20.238h-5.616v-10.877h5.795V90.273l11.59-1.605v12.66h11.502v10.877H378.25v15.067c0 8.024 1.694 9.896 6.598 9.896h5.439zM410.617 80.823v14.176H397.6V83.586l13.017-2.763zm-.625 20.506v46.362h-11.769v-46.362h11.769zM419.623 124.51c0-18.723 7.399-24.162 19.971-24.162 12.66 0 20.061 5.438 20.061 24.162 0 18.812-7.4 23.805-20.061 23.805-12.572-.001-19.971-4.993-19.971-23.805zm28.263 0c0-10.075-3.655-13.552-8.292-13.552-4.636 0-8.202 3.478-8.202 13.552 0 9.808 3.566 13.195 8.202 13.195s8.292-3.388 8.292-13.195zM505.039 118.358v29.333h-11.77v-29.333c0-4.458-1.961-6.509-5.171-6.509l-7.757.803v35.039h-11.769v-46.362h10.967l.445 1.694 9.361-2.051c11.325 0 15.694 7.044 15.694 17.386zM229.523 212.696h-3.656v22.735l-6.687 1.427h-15.959c-13.374 0-18.812-4.19-18.812-16.673 0-6.241 1.962-10.521 5.35-13.284-2.051-2.496-3.21-6.151-3.21-11.323 0-11.857 5.35-17.118 14.89-17.118h9.094l6.509 1.338v9.45h-14.265c-2.942 0-4.369 2.586-4.369 6.241 0 4.102 1.783 6.419 3.923 6.419h3.478v10.788h-4.28c-3.031 0-5.26 3.389-5.26 6.776 0 4.102 2.496 6.598 6.954 6.598h11.056v-13.374h-3.655v-10.788h18.901v10.788zM277.405 178.192h11.947l8.916 2.051v10.075l-10.164-1.338h-6.687c-7.133 0-10.075 4.993-10.075 18.724 0 13.819 2.942 18.634 10.075 18.634h6.687l10.164-1.07v9.808l-8.916 2.051h-11.947c-11.145 0-17.92-8.381-17.92-29.422s6.776-29.513 17.92-29.513zM307.454 236.858v-64.461l11.769-2.407v66.868h-11.769zM364.783 205.742v31.116h-22.557c-9.985 0-14.8-4.904-14.8-13.998 0-9.272 4.814-14.443 14.8-14.443h5.617l5.171 1.07v-3.478c0-2.675-1.783-4.903-5.528-4.903h-5.171l-10.966 1.069v-9.629l10.342-2.229h9.272c7.223.001 13.82 7.044 13.82 15.425zm-22.468 20.328h10.699v-6.865h-10.699c-1.783 0-3.12 1.961-3.12 3.655 0 1.605 1.516 3.21 3.12 3.21zM394.653 200.66h-5.082c-4.102 0-5.527 1.338-5.527 3.21 0 2.407.892 3.21 5.527 3.655 14.265 1.516 18.277 4.726 18.277 15.781 0 10.698-3.745 13.819-18.188 13.819h-7.578l-8.916-2.051v-9.629l10.164 1.069h6.241c5.706 0 6.954-.98 6.954-3.031 0-2.229-1.516-3.388-6.954-4.101-12.66-1.516-16.851-5.261-16.851-14.979 0-10.164 4.992-14.354 16.851-14.354h6.419l9.629 2.14v9.54l-10.966-1.069zM436.828 200.66h-5.082c-4.102 0-5.527 1.338-5.527 3.21 0 2.407.892 3.21 5.527 3.655 14.265 1.516 18.277 4.726 18.277 15.781 0 10.698-3.745 13.819-18.188 13.819h-7.578l-8.916-2.051v-9.629l10.164 1.069h6.241c5.706 0 6.954-.98 6.954-3.031 0-2.229-1.516-3.388-6.954-4.101-12.66-1.516-16.851-5.261-16.851-14.979 0-10.164 4.993-14.354 16.851-14.354h6.419l9.629 2.14v9.54l-10.966-1.069z\"></path>\n    <g>\n        <path d=\"M0 0h13.429v147.72H0z\"></path>\n        <path d=\"M0 0h147.72v13.429H0zM0 40.287h147.72v13.429H0zM26.858 107.433h13.43v40.287h-13.43z\"></path>\n        <path d=\"M26.858 107.433h53.717v13.43H26.858zM94.004 67.146h13.429v80.574H94.004z\"></path>\n        <path d=\"M94.004 67.146h53.716v13.429H94.004zM94.004 134.291h53.716v13.429H94.004zM26.858 67.146h13.43v26.858h-13.43z\"></path>\n        <path d=\"M26.858 67.146h53.717v13.429H26.858z\"></path>\n    </g>\n  </g>\n</svg>"

/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomIf = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _templatize = __webpack_require__(92);

var _debounce = __webpack_require__(17);

var _flush = __webpack_require__(94);

var _async = __webpack_require__(8);

var _path = __webpack_require__(16);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `<dom-if>` element will stamp a light-dom `<template>` child when
 * the `if` property becomes truthy, and the template can use Polymer
 * data-binding and declarative event features when used in the context of
 * a Polymer element's template.
 *
 * When `if` becomes falsey, the stamped content is hidden but not
 * removed from dom. When `if` subsequently becomes truthy again, the content
 * is simply re-shown. This approach is used due to its favorable performance
 * characteristics: the expense of creating template content is paid only
 * once and lazily.
 *
 * Set the `restamp` property to true to force the stamped content to be
 * created / destroyed when the `if` condition changes.
 *
 * @customElement
 * @polymer
 * @extends Polymer.Element
 * @memberof Polymer
 * @summary Custom element that conditionally stamps and hides or removes
 *   template content based on a boolean flag.
 */
var DomIf = function (_Element) {
  _inherits(DomIf, _Element);

  _createClass(DomIf, null, [{
    key: 'is',


    // Not needed to find template; can be removed once the analyzer
    // can find the tag name from customElements.define call
    get: function get() {
      return 'dom-if';
    }
  }, {
    key: 'template',
    get: function get() {
      return null;
    }
  }, {
    key: 'properties',
    get: function get() {

      return {

        /**
         * Fired whenever DOM is added or removed/hidden by this template (by
         * default, rendering occurs lazily).  To force immediate rendering, call
         * `render`.
         *
         * @event dom-change
         */

        /**
         * A boolean indicating whether this template should stamp.
         */
        if: {
          type: Boolean,
          observer: '__debounceRender'
        },

        /**
         * When true, elements will be removed from DOM and discarded when `if`
         * becomes false and re-created and added back to the DOM when `if`
         * becomes true.  By default, stamped elements will be hidden but left
         * in the DOM when `if` becomes false, which is generally results
         * in better performance.
         */
        restamp: {
          type: Boolean,
          observer: '__debounceRender'
        }

      };
    }
  }]);

  function DomIf() {
    _classCallCheck(this, DomIf);

    var _this = _possibleConstructorReturn(this, (DomIf.__proto__ || Object.getPrototypeOf(DomIf)).call(this));

    _this.__renderDebouncer = null;
    _this.__invalidProps = null;
    _this.__instance = null;
    _this._lastIf = false;
    _this.__ctor = null;
    return _this;
  }

  _createClass(DomIf, [{
    key: '__debounceRender',
    value: function __debounceRender() {
      var _this2 = this;

      // Render is async for 2 reasons:
      // 1. To eliminate dom creation trashing if user code thrashes `if` in the
      //    same turn. This was more common in 1.x where a compound computed
      //    property could result in the result changing multiple times, but is
      //    mitigated to a large extent by batched property processing in 2.x.
      // 2. To avoid double object propagation when a bag including values bound
      //    to the `if` property as well as one or more hostProps could enqueue
      //    the <dom-if> to flush before the <template>'s host property
      //    forwarding. In that scenario creating an instance would result in
      //    the host props being set once, and then the enqueued changes on the
      //    template would set properties a second time, potentially causing an
      //    object to be set to an instance more than once.  Creating the
      //    instance async from flushing data ensures this doesn't happen. If
      //    we wanted a sync option in the future, simply having <dom-if> flush
      //    (or clear) its template's pending host properties before creating
      //    the instance would also avoid the problem.
      this.__renderDebouncer = _debounce.Debouncer.debounce(this.__renderDebouncer, _async.microTask, function () {
        return _this2.__render();
      });
      (0, _flush.enqueueDebouncer)(this.__renderDebouncer);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), 'disconnectedCallback', this).call(this);
      if (!this.parentNode || this.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE && !this.parentNode.host) {
        this.__teardownInstance();
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(DomIf.prototype.__proto__ || Object.getPrototypeOf(DomIf.prototype), 'connectedCallback', this).call(this);
      if (this.if) {
        this.__debounceRender();
      }
    }

    /**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     */

  }, {
    key: 'render',
    value: function render() {
      (0, _flush.flush)();
    }
  }, {
    key: '__render',
    value: function __render() {
      if (this.if) {
        if (!this.__ensureInstance()) {
          // No template found yet
          return;
        }
        this._showHideChildren();
      } else if (this.restamp) {
        this.__teardownInstance();
      }
      if (!this.restamp && this.__instance) {
        this._showHideChildren();
      }
      if (this.if != this._lastIf) {
        this.dispatchEvent(new CustomEvent('dom-change', {
          bubbles: true,
          composed: true
        }));
        this._lastIf = this.if;
      }
    }
  }, {
    key: '__ensureInstance',
    value: function __ensureInstance() {
      var _this3 = this;

      var parentNode = this.parentNode;
      // Guard against element being detached while render was queued
      if (parentNode) {
        if (!this.__ctor) {
          var template = this.querySelector('template');
          if (!template) {
            // Wait until childList changes and template should be there by then
            var observer = new MutationObserver(function () {
              if (_this3.querySelector('template')) {
                observer.disconnect();
                _this3.__render();
              } else {
                throw new Error('dom-if requires a <template> child');
              }
            });
            observer.observe(this, { childList: true });
            return false;
          }
          this.__ctor = _templatize.Templatize.templatize(template, this, {
            // dom-if templatizer instances require `mutable: true`, as
            // `__syncHostProperties` relies on that behavior to sync objects
            mutableData: true,
            /**
             * @param {string} prop Property to forward
             * @param {*} value Value of property
             * @this {this}
             */
            forwardHostProp: function forwardHostProp(prop, value) {
              if (this.__instance) {
                if (this.if) {
                  this.__instance.forwardHostProp(prop, value);
                } else {
                  // If we have an instance but are squelching host property
                  // forwarding due to if being false, note the invalidated
                  // properties so `__syncHostProperties` can sync them the next
                  // time `if` becomes true
                  this.__invalidProps = this.__invalidProps || Object.create(null);
                  this.__invalidProps[(0, _path.root)(prop)] = true;
                }
              }
            }
          });
        }
        if (!this.__instance) {
          this.__instance = new this.__ctor();
          parentNode.insertBefore(this.__instance.root, this);
        } else {
          this.__syncHostProperties();
          var c$ = this.__instance.children;
          if (c$ && c$.length) {
            // Detect case where dom-if was re-attached in new position
            var lastChild = this.previousSibling;
            if (lastChild !== c$[c$.length - 1]) {
              for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
                parentNode.insertBefore(n, this);
              }
            }
          }
        }
      }
      return true;
    }
  }, {
    key: '__syncHostProperties',
    value: function __syncHostProperties() {
      var props = this.__invalidProps;
      if (props) {
        for (var prop in props) {
          this.__instance._setPendingProperty(prop, this.__dataHost[prop]);
        }
        this.__invalidProps = null;
        this.__instance._flushProperties();
      }
    }
  }, {
    key: '__teardownInstance',
    value: function __teardownInstance() {
      if (this.__instance) {
        var c$ = this.__instance.children;
        if (c$ && c$.length) {
          // use first child parent, for case when dom-if may have been detached
          var parent = c$[0].parentNode;
          for (var i = 0, n; i < c$.length && (n = c$[i]); i++) {
            parent.removeChild(n);
          }
        }
        this.__instance = null;
        this.__invalidProps = null;
      }
    }
  }, {
    key: '_showHideChildren',
    value: function _showHideChildren() {
      var hidden = this.__hideTemplateChildren__ || !this.if;
      if (this.__instance) {
        this.__instance._showHideChildren(hidden);
      }
    }
  }]);

  return DomIf;
}(_polymerElement.Element);

customElements.define(DomIf.is, DomIf);

exports.DomIf = DomIf;

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(109);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Inovato', sans-serif; }\n\n:host {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto;\n  min-height: 100vh;\n  background: #3a3a3a;\n  color: #efefef;\n  grid-template-areas: \"sidebar main main main\"; }\n\n.main {\n  grid-area: main;\n  display: block;\n  min-height: 100vh;\n  padding: 20px; }\n\nside-bar {\n  grid-area: sidebar;\n  min-height: 100vh; }\n\na {\n  color: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #fff; }\n\n.button {\n  display: inline-block;\n  margin: 1rem auto;\n  padding: 1rem 1.5rem;\n  border: 1px solid #fff; }\n\n:host {\n  grid-template-areas: \"main main main sidebar\"; }\n\n.main {\n  display: flex;\n  align-items: center; }\n  .main .container {\n    text-align: center;\n    width: 100%; }\n\nffc-logo {\n  margin-bottom: 3rem;\n  width: 400px; }\n\n.info {\n  font-size: 1.5rem;\n  margin-bottom: 0; }\n", ""]);

// exports


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\n  <div class=\"container\">\n    <ffc-logo></ffc-logo>\n\n    <p class=\"info\">\n      Masterclass on <time class=\"date\" itemprop=\"startDate\" datetime=\"2017-08-18\">18&nbsp;August 2018</time><br>\n      <a class=\"button\" href=\"https://formfunctionclass9.eventbrite.com/#tickets\" target=\"_blank\">Register Now</a>\n    </p>\n  </div>\n</section>\n\n<side-bar></side-bar>\n"

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _gestureEventListeners = __webpack_require__(85);

var _window = __webpack_require__(7);

var _style = __webpack_require__(108);

var _style2 = _interopRequireDefault(_style);

var _template = __webpack_require__(110);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(96);

__webpack_require__(95);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_GestureEventListener) {
  _inherits(Component, _GestureEventListener);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, null, [{
    key: 'is',
    get: function get() {
      return 'page-home';
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n        ' + _style2.default + '\n      </style>\n      ' + _template2.default + '\n    ';
    }
  }]);

  return Component;
}((0, _gestureEventListeners.GestureEventListeners)(_polymerElement.Element));

!_window.customElements.get(Component.is) ? _window.customElements.define(Component.is, Component) : console.warn(Component.is + ' is already defined');

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DomRepeat = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _templatize = __webpack_require__(92);

var _debounce = __webpack_require__(17);

var _flush = __webpack_require__(94);

var _mutableData = __webpack_require__(93);

var _path = __webpack_require__(16);

var _async = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateInstanceBase = _templatize.TemplateInstanceBase; // eslint-disable-line

/**
 * @constructor
 * @implements {Polymer_OptionalMutableData}
 * @extends {Polymer.Element}
 */
var domRepeatBase = (0, _mutableData.OptionalMutableData)(_polymerElement.Element);

/**
 * The `<dom-repeat>` element will automatically stamp and binds one instance
 * of template content to each object in a user-provided array.
 * `dom-repeat` accepts an `items` property, and one instance of the template
 * is stamped for each item into the DOM at the location of the `dom-repeat`
 * element.  The `item` property will be set on each instance's binding
 * scope, thus templates should bind to sub-properties of `item`.
 *
 * Example:
 *
 * ```html
 * <dom-module id="employee-list">
 *
 *   <template>
 *
 *     <div> Employee list: </div>
 *     <template is="dom-repeat" items="{{employees}}">
 *         <div>First name: <span>{{item.first}}</span></div>
 *         <div>Last name: <span>{{item.last}}</span></div>
 *     </template>
 *
 *   </template>
 *
 *   <script>
 *     Polymer({
 *       is: 'employee-list',
 *       ready: function() {
 *         this.employees = [
 *             {first: 'Bob', last: 'Smith'},
 *             {first: 'Sally', last: 'Johnson'},
 *             ...
 *         ];
 *       }
 *     });
 *   < /script>
 *
 * </dom-module>
 * ```
 *
 * Notifications for changes to items sub-properties will be forwarded to template
 * instances, which will update via the normal structured data notification system.
 *
 * Mutations to the `items` array itself should be made using the Array
 * mutation API's on `Polymer.Base` (`push`, `pop`, `splice`, `shift`,
 * `unshift`), and template instances will be kept in sync with the data in the
 * array.
 *
 * Events caught by event handlers within the `dom-repeat` template will be
 * decorated with a `model` property, which represents the binding scope for
 * each template instance.  The model is an instance of Polymer.Base, and should
 * be used to manipulate data on the instance, for example
 * `event.model.set('item.checked', true);`.
 *
 * Alternatively, the model for a template instance for an element stamped by
 * a `dom-repeat` can be obtained using the `modelForElement` API on the
 * `dom-repeat` that stamped it, for example
 * `this.$.domRepeat.modelForElement(event.target).set('item.checked', true);`.
 * This may be useful for manipulating instance data of event targets obtained
 * by event handlers on parents of the `dom-repeat` (event delegation).
 *
 * A view-specific filter/sort may be applied to each `dom-repeat` by supplying a
 * `filter` and/or `sort` property.  This may be a string that names a function on
 * the host, or a function may be assigned to the property directly.  The functions
 * should implemented following the standard `Array` filter/sort API.
 *
 * In order to re-run the filter or sort functions based on changes to sub-fields
 * of `items`, the `observe` property may be set as a space-separated list of
 * `item` sub-fields that should cause a re-filter/sort when modified.  If
 * the filter or sort function depends on properties not contained in `items`,
 * the user should observe changes to those properties and call `render` to update
 * the view based on the dependency change.
 *
 * For example, for an `dom-repeat` with a filter of the following:
 *
 * ```js
 * isEngineer: function(item) {
 *     return item.type == 'engineer' || item.manager.type == 'engineer';
 * }
 * ```
 *
 * Then the `observe` property should be configured as follows:
 *
 * ```html
 * <template is="dom-repeat" items="{{employees}}"
 *           filter="isEngineer" observe="type manager.type">
 * ```
 *
 * @customElement
 * @polymer
 * @memberof Polymer
 * @extends {domRepeatBase}
 * @appliesMixin Polymer.OptionalMutableData
 * @summary Custom element for stamping instance of a template bound to
 *   items in an array.
 */

var DomRepeat = function (_domRepeatBase) {
  _inherits(DomRepeat, _domRepeatBase);

  _createClass(DomRepeat, null, [{
    key: 'is',


    // Not needed to find template; can be removed once the analyzer
    // can find the tag name from customElements.define call
    get: function get() {
      return 'dom-repeat';
    }
  }, {
    key: 'template',
    get: function get() {
      return null;
    }
  }, {
    key: 'properties',
    get: function get() {

      /**
       * Fired whenever DOM is added or removed by this template (by
       * default, rendering occurs lazily).  To force immediate rendering, call
       * `render`.
       *
       * @event dom-change
       */
      return {

        /**
         * An array containing items determining how many instances of the template
         * to stamp and that that each template instance should bind to.
         */
        items: {
          type: Array
        },

        /**
         * The name of the variable to add to the binding scope for the array
         * element associated with a given template instance.
         */
        as: {
          type: String,
          value: 'item'
        },

        /**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the sorted and filtered list of rendered items.
         * Note, for the index in the `this.items` array, use the value of the
         * `itemsIndexAs` property.
         */
        indexAs: {
          type: String,
          value: 'index'
        },

        /**
         * The name of the variable to add to the binding scope with the index
         * of the instance in the `this.items` array. Note, for the index of
         * this instance in the sorted and filtered list of rendered items,
         * use the value of the `indexAs` property.
         */
        itemsIndexAs: {
          type: String,
          value: 'itemsIndex'
        },

        /**
         * A function that should determine the sort order of the items.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.sort`.
         * Using a sort function has no effect on the underlying `items` array.
         */
        sort: {
          type: Function,
          observer: '__sortChanged'
        },

        /**
         * A function that can be used to filter items out of the view.  This
         * property should either be provided as a string, indicating a method
         * name on the element's host, or else be an actual function.  The
         * function should match the sort function passed to `Array.filter`.
         * Using a filter function has no effect on the underlying `items` array.
         */
        filter: {
          type: Function,
          observer: '__filterChanged'
        },

        /**
         * When using a `filter` or `sort` function, the `observe` property
         * should be set to a space-separated list of the names of item
         * sub-fields that should trigger a re-sort or re-filter when changed.
         * These should generally be fields of `item` that the sort or filter
         * function depends on.
         */
        observe: {
          type: String,
          observer: '__observeChanged'
        },

        /**
         * When using a `filter` or `sort` function, the `delay` property
         * determines a debounce time after a change to observed item
         * properties that must pass before the filter or sort is re-run.
         * This is useful in rate-limiting shuffing of the view when
         * item changes may be frequent.
         */
        delay: Number,

        /**
         * Count of currently rendered items after `filter` (if any) has been applied.
         * If "chunking mode" is enabled, `renderedItemCount` is updated each time a
         * set of template instances is rendered.
         *
         */
        renderedItemCount: {
          type: Number,
          notify: true,
          readOnly: true
        },

        /**
         * Defines an initial count of template instances to render after setting
         * the `items` array, before the next paint, and puts the `dom-repeat`
         * into "chunking mode".  The remaining items will be created and rendered
         * incrementally at each animation frame therof until all instances have
         * been rendered.
         */
        initialCount: {
          type: Number,
          observer: '__initializeChunking'
        },

        /**
         * When `initialCount` is used, this property defines a frame rate to
         * target by throttling the number of instances rendered each frame to
         * not exceed the budget for the target frame rate.  Setting this to a
         * higher number will allow lower latency and higher throughput for
         * things like event handlers, but will result in a longer time for the
         * remaining items to complete rendering.
         */
        targetFramerate: {
          type: Number,
          value: 20
        },

        _targetFrameTime: {
          type: Number,
          computed: '__computeFrameTime(targetFramerate)'
        }

      };
    }
  }, {
    key: 'observers',
    get: function get() {
      return ['__itemsChanged(items.*)'];
    }
  }]);

  function DomRepeat() {
    _classCallCheck(this, DomRepeat);

    var _this = _possibleConstructorReturn(this, (DomRepeat.__proto__ || Object.getPrototypeOf(DomRepeat)).call(this));

    _this.__instances = [];
    _this.__limit = Infinity;
    _this.__pool = [];
    _this.__renderDebouncer = null;
    _this.__itemsIdxToInstIdx = {};
    _this.__chunkCount = null;
    _this.__lastChunkTime = null;
    _this.__sortFn = null;
    _this.__filterFn = null;
    _this.__observePaths = null;
    _this.__ctor = null;
    _this.__isDetached = true;
    _this.template = null;
    return _this;
  }

  _createClass(DomRepeat, [{
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), 'disconnectedCallback', this).call(this);
      this.__isDetached = true;
      for (var i = 0; i < this.__instances.length; i++) {
        this.__detachInstance(i);
      }
    }
  }, {
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(DomRepeat.prototype.__proto__ || Object.getPrototypeOf(DomRepeat.prototype), 'connectedCallback', this).call(this);
      // only perform attachment if the element was previously detached.
      if (this.__isDetached) {
        this.__isDetached = false;
        var parent = this.parentNode;
        for (var i = 0; i < this.__instances.length; i++) {
          this.__attachInstance(i, parent);
        }
      }
    }
  }, {
    key: '__ensureTemplatized',
    value: function __ensureTemplatized() {
      var _this2 = this;

      // Templatizing (generating the instance constructor) needs to wait
      // until ready, since won't have its template content handed back to
      // it until then
      if (!this.__ctor) {
        var template = this.template = this.querySelector('template');
        if (!template) {
          // // Wait until childList changes and template should be there by then
          var observer = new MutationObserver(function () {
            if (_this2.querySelector('template')) {
              observer.disconnect();
              _this2.__render();
            } else {
              throw new Error('dom-repeat requires a <template> child');
            }
          });
          observer.observe(this, { childList: true });
          return false;
        }
        // Template instance props that should be excluded from forwarding
        var instanceProps = {};
        instanceProps[this.as] = true;
        instanceProps[this.indexAs] = true;
        instanceProps[this.itemsIndexAs] = true;
        this.__ctor = _templatize.Templatize.templatize(template, this, {
          mutableData: this.mutableData,
          parentModel: true,
          instanceProps: instanceProps,
          /**
           * @this {this}
           * @param {string} prop Property to set
           * @param {*} value Value to set property to
           */
          forwardHostProp: function forwardHostProp(prop, value) {
            var i$ = this.__instances;
            for (var i = 0, inst; i < i$.length && (inst = i$[i]); i++) {
              inst.forwardHostProp(prop, value);
            }
          },
          /**
           * @this {this}
           * @param {Object} inst Instance to notify
           * @param {string} prop Property to notify
           * @param {*} value Value to notify
           */
          notifyInstanceProp: function notifyInstanceProp(inst, prop, value) {
            if ((0, _path.matches)(this.as, prop)) {
              var idx = inst[this.itemsIndexAs];
              if (prop == this.as) {
                this.items[idx] = value;
              }
              var path = (0, _path.translate)(this.as, 'items.' + idx, prop);
              this.notifyPath(path, value);
            }
          }
        });
      }
      return true;
    }
  }, {
    key: '__getMethodHost',
    value: function __getMethodHost() {
      // Technically this should be the owner of the outermost template.
      // In shadow dom, this is always getRootNode().host, but we can
      // approximate this via cooperation with our dataHost always setting
      // `_methodHost` as long as there were bindings (or id's) on this
      // instance causing it to get a dataHost.
      return this.__dataHost._methodHost || this.__dataHost;
    }
  }, {
    key: '__sortChanged',
    value: function __sortChanged(sort) {
      var methodHost = this.__getMethodHost();
      this.__sortFn = sort && (typeof sort == 'function' ? sort : function () {
        return methodHost[sort].apply(methodHost, arguments);
      });
      if (this.items) {
        this.__debounceRender(this.__render);
      }
    }
  }, {
    key: '__filterChanged',
    value: function __filterChanged(filter) {
      var methodHost = this.__getMethodHost();
      this.__filterFn = filter && (typeof filter == 'function' ? filter : function () {
        return methodHost[filter].apply(methodHost, arguments);
      });
      if (this.items) {
        this.__debounceRender(this.__render);
      }
    }
  }, {
    key: '__computeFrameTime',
    value: function __computeFrameTime(rate) {
      return Math.ceil(1000 / rate);
    }
  }, {
    key: '__initializeChunking',
    value: function __initializeChunking() {
      if (this.initialCount) {
        this.__limit = this.initialCount;
        this.__chunkCount = this.initialCount;
        this.__lastChunkTime = performance.now();
      }
    }
  }, {
    key: '__tryRenderChunk',
    value: function __tryRenderChunk() {
      // Debounced so that multiple calls through `_render` between animation
      // frames only queue one new rAF (e.g. array mutation & chunked render)
      if (this.items && this.__limit < this.items.length) {
        this.__debounceRender(this.__requestRenderChunk);
      }
    }
  }, {
    key: '__requestRenderChunk',
    value: function __requestRenderChunk() {
      var _this3 = this;

      requestAnimationFrame(function () {
        return _this3.__renderChunk();
      });
    }
  }, {
    key: '__renderChunk',
    value: function __renderChunk() {
      // Simple auto chunkSize throttling algorithm based on feedback loop:
      // measure actual time between frames and scale chunk count by ratio
      // of target/actual frame time
      var currChunkTime = performance.now();
      var ratio = this._targetFrameTime / (currChunkTime - this.__lastChunkTime);
      this.__chunkCount = Math.round(this.__chunkCount * ratio) || 1;
      this.__limit += this.__chunkCount;
      this.__lastChunkTime = currChunkTime;
      this.__debounceRender(this.__render);
    }
  }, {
    key: '__observeChanged',
    value: function __observeChanged() {
      this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
    }
  }, {
    key: '__itemsChanged',
    value: function __itemsChanged(change) {
      if (this.items && !Array.isArray(this.items)) {
        console.warn('dom-repeat expected array for `items`, found', this.items);
      }
      // If path was to an item (e.g. 'items.3' or 'items.3.foo'), forward the
      // path to that instance synchronously (retuns false for non-item paths)
      if (!this.__handleItemPath(change.path, change.value)) {
        // Otherwise, the array was reset ('items') or spliced ('items.splices'),
        // so queue a full refresh
        this.__initializeChunking();
        this.__debounceRender(this.__render);
      }
    }
  }, {
    key: '__handleObservedPaths',
    value: function __handleObservedPaths(path) {
      if (this.__observePaths) {
        path = path.substring(path.indexOf('.') + 1);
        var paths = this.__observePaths;
        for (var i = 0; i < paths.length; i++) {
          if (path.indexOf(paths[i]) === 0) {
            this.__debounceRender(this.__render, this.delay);
            return true;
          }
        }
      }
    }

    /**
     * @param {function(this:DomRepeat)} fn Function to debounce.
     * @param {number=} delay Delay in ms to debounce by.
     */

  }, {
    key: '__debounceRender',
    value: function __debounceRender(fn) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      this.__renderDebouncer = _debounce.Debouncer.debounce(this.__renderDebouncer, delay > 0 ? _async.timeOut.after(delay) : _async.microTask, fn.bind(this));
      (0, _flush.enqueueDebouncer)(this.__renderDebouncer);
    }

    /**
     * Forces the element to render its content. Normally rendering is
     * asynchronous to a provoking change. This is done for efficiency so
     * that multiple changes trigger only a single render. The render method
     * should be called if, for example, template rendering is required to
     * validate application state.
     */

  }, {
    key: 'render',
    value: function render() {
      // Queue this repeater, then flush all in order
      this.__debounceRender(this.__render);
      (0, _flush.flush)();
    }
  }, {
    key: '__render',
    value: function __render() {
      if (!this.__ensureTemplatized()) {
        // No template found yet
        return;
      }
      this.__applyFullRefresh();
      // Reset the pool
      // TODO(kschaaf): Reuse pool across turns and nested templates
      // Now that objects/arrays are re-evaluated when set, we can safely
      // reuse pooled instances across turns, however we still need to decide
      // semantics regarding how long to hold, how many to hold, etc.
      this.__pool.length = 0;
      // Set rendered item count
      this._setRenderedItemCount(this.__instances.length);
      // Notify users
      this.dispatchEvent(new CustomEvent('dom-change', {
        bubbles: true,
        composed: true
      }));
      // Check to see if we need to render more items
      this.__tryRenderChunk();
    }
  }, {
    key: '__applyFullRefresh',
    value: function __applyFullRefresh() {
      var _this4 = this;

      var items = this.items || [];
      var isntIdxToItemsIdx = new Array(items.length);
      for (var i = 0; i < items.length; i++) {
        isntIdxToItemsIdx[i] = i;
      }
      // Apply user filter
      if (this.__filterFn) {
        isntIdxToItemsIdx = isntIdxToItemsIdx.filter(function (i, idx, array) {
          return _this4.__filterFn(items[i], idx, array);
        });
      }
      // Apply user sort
      if (this.__sortFn) {
        isntIdxToItemsIdx.sort(function (a, b) {
          return _this4.__sortFn(items[a], items[b]);
        });
      }
      // items->inst map kept for item path forwarding
      var itemsIdxToInstIdx = this.__itemsIdxToInstIdx = {};
      var instIdx = 0;
      // Generate instances and assign items
      var limit = Math.min(isntIdxToItemsIdx.length, this.__limit);
      for (; instIdx < limit; instIdx++) {
        var inst = this.__instances[instIdx];
        var itemIdx = isntIdxToItemsIdx[instIdx];
        var item = items[itemIdx];
        itemsIdxToInstIdx[itemIdx] = instIdx;
        if (inst && instIdx < this.__limit) {
          inst._setPendingProperty(this.as, item);
          inst._setPendingProperty(this.indexAs, instIdx);
          inst._setPendingProperty(this.itemsIndexAs, itemIdx);
          inst._flushProperties();
        } else {
          this.__insertInstance(item, instIdx, itemIdx);
        }
      }
      // Remove any extra instances from previous state
      for (var _i = this.__instances.length - 1; _i >= instIdx; _i--) {
        this.__detachAndRemoveInstance(_i);
      }
    }
  }, {
    key: '__detachInstance',
    value: function __detachInstance(idx) {
      var inst = this.__instances[idx];
      for (var i = 0; i < inst.children.length; i++) {
        var el = inst.children[i];
        inst.root.appendChild(el);
      }
      return inst;
    }
  }, {
    key: '__attachInstance',
    value: function __attachInstance(idx, parent) {
      var inst = this.__instances[idx];
      parent.insertBefore(inst.root, this);
    }
  }, {
    key: '__detachAndRemoveInstance',
    value: function __detachAndRemoveInstance(idx) {
      var inst = this.__detachInstance(idx);
      if (inst) {
        this.__pool.push(inst);
      }
      this.__instances.splice(idx, 1);
    }
  }, {
    key: '__stampInstance',
    value: function __stampInstance(item, instIdx, itemIdx) {
      var model = {};
      model[this.as] = item;
      model[this.indexAs] = instIdx;
      model[this.itemsIndexAs] = itemIdx;
      return new this.__ctor(model);
    }
  }, {
    key: '__insertInstance',
    value: function __insertInstance(item, instIdx, itemIdx) {
      var inst = this.__pool.pop();
      if (inst) {
        // TODO(kschaaf): If the pool is shared across turns, hostProps
        // need to be re-set to reused instances in addition to item
        inst._setPendingProperty(this.as, item);
        inst._setPendingProperty(this.indexAs, instIdx);
        inst._setPendingProperty(this.itemsIndexAs, itemIdx);
        inst._flushProperties();
      } else {
        inst = this.__stampInstance(item, instIdx, itemIdx);
      }
      var beforeRow = this.__instances[instIdx + 1];
      var beforeNode = beforeRow ? beforeRow.children[0] : this;
      this.parentNode.insertBefore(inst.root, beforeNode);
      this.__instances[instIdx] = inst;
      return inst;
    }

    // Implements extension point from Templatize mixin

  }, {
    key: '_showHideChildren',
    value: function _showHideChildren(hidden) {
      for (var i = 0; i < this.__instances.length; i++) {
        this.__instances[i]._showHideChildren(hidden);
      }
    }

    // Called as a side effect of a host items.<key>.<path> path change,
    // responsible for notifying item.<path> changes to inst for key

  }, {
    key: '__handleItemPath',
    value: function __handleItemPath(path, value) {
      var itemsPath = path.slice(6); // 'items.'.length == 6
      var dot = itemsPath.indexOf('.');
      var itemsIdx = dot < 0 ? itemsPath : itemsPath.substring(0, dot);
      // If path was index into array...
      if (itemsIdx == parseInt(itemsIdx, 10)) {
        var itemSubPath = dot < 0 ? '' : itemsPath.substring(dot + 1);
        // If the path is observed, it will trigger a full refresh
        this.__handleObservedPaths(itemSubPath);
        // Note, even if a rull refresh is triggered, always do the path
        // notification because unless mutableData is used for dom-repeat
        // and all elements in the instance subtree, a full refresh may
        // not trigger the proper update.
        var instIdx = this.__itemsIdxToInstIdx[itemsIdx];
        var inst = this.__instances[instIdx];
        if (inst) {
          var itemPath = this.as + (itemSubPath ? '.' + itemSubPath : '');
          // This is effectively `notifyPath`, but avoids some of the overhead
          // of the public API
          inst._setPendingPropertyOrPath(itemPath, value, false, true);
          inst._flushProperties();
        }
        return true;
      }
    }

    /**
     * Returns the item associated with a given element stamped by
     * this `dom-repeat`.
     *
     * Note, to modify sub-properties of the item,
     * `modelForElement(el).set('item.<sub-prop>', value)`
     * should be used.
     *
     * @param {HTMLElement} el Element for which to return the item.
     * @return {*} Item associated with the element.
     */

  }, {
    key: 'itemForElement',
    value: function itemForElement(el) {
      var instance = this.modelForElement(el);
      return instance && instance[this.as];
    }

    /**
     * Returns the inst index for a given element stamped by this `dom-repeat`.
     * If `sort` is provided, the index will reflect the sorted order (rather
     * than the original array order).
     *
     * @param {HTMLElement} el Element for which to return the index.
     * @return {*} Row index associated with the element (note this may
     *   not correspond to the array index if a user `sort` is applied).
     */

  }, {
    key: 'indexForElement',
    value: function indexForElement(el) {
      var instance = this.modelForElement(el);
      return instance && instance[this.indexAs];
    }

    /**
     * Returns the template "model" associated with a given element, which
     * serves as the binding scope for the template instance the element is
     * contained in. A template model is an instance of `Polymer.Base`, and
     * should be used to manipulate data associated with this template instance.
     *
     * Example:
     *
     *   let model = modelForElement(el);
     *   if (model.index < 10) {
     *     model.set('item.checked', true);
     *   }
     *
     * @param {HTMLElement} el Element for which to return a template model.
     * @return {TemplateInstanceBase} Model representing the binding scope for
     *   the element.
     */

  }, {
    key: 'modelForElement',
    value: function modelForElement(el) {
      return _templatize.Templatize.modelForElement(this.template, el);
    }
  }]);

  return DomRepeat;
}(domRepeatBase);

customElements.define(DomRepeat.is, DomRepeat);

exports.DomRepeat = DomRepeat;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateInstanceBase = exports.Templatize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

__webpack_require__(0);

var _propertyEffects = __webpack_require__(31);

var _mutableData = __webpack_require__(93);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Base class for HTMLTemplateElement extension that has property effects
// machinery for propagating host properties to children. This is an ES5
// class only because Babel (incorrectly) requires super() in the class
// constructor even though no `this` is used and it returns an instance.
var newInstance = null;
/**
 * @constructor
 * @extends {HTMLTemplateElement}
 */
function HTMLTemplateElementExtension() {
  return newInstance;
}
HTMLTemplateElementExtension.prototype = Object.create(HTMLTemplateElement.prototype, {
  constructor: {
    value: HTMLTemplateElementExtension,
    writable: true
  }
});
/**
 * @constructor
 * @implements {Polymer_PropertyEffects}
 * @extends {HTMLTemplateElementExtension}
 */
var DataTemplate = (0, _propertyEffects.PropertyEffects)(HTMLTemplateElementExtension);
/**
 * @constructor
 * @implements {Polymer_MutableData}
 * @extends {DataTemplate}
 */
var MutableDataTemplate = (0, _mutableData.MutableData)(DataTemplate);

// Applies a DataTemplate subclass to a <template> instance
function upgradeTemplate(template, constructor) {
  newInstance = template;
  Object.setPrototypeOf(template, constructor.prototype);
  new constructor();
  newInstance = null;
}

// Base class for TemplateInstance's
/**
 * @constructor
 * @implements {Polymer_PropertyEffects}
 */
var base = (0, _propertyEffects.PropertyEffects)(function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  return _class;
}());

/**
 * @polymer
 * @customElement
 * @appliesMixin Polymer.PropertyEffects
 * @unrestricted
 */

var TemplateInstanceBase = function (_base) {
  _inherits(TemplateInstanceBase, _base);

  function TemplateInstanceBase(props) {
    _classCallCheck(this, TemplateInstanceBase);

    var _this = _possibleConstructorReturn(this, (TemplateInstanceBase.__proto__ || Object.getPrototypeOf(TemplateInstanceBase)).call(this));

    _this._configureProperties(props);
    _this.root = _this._stampTemplate(_this.__dataHost);
    // Save list of stamped children
    var children = _this.children = [];
    for (var n = _this.root.firstChild; n; n = n.nextSibling) {
      children.push(n);
      n.__templatizeInstance = _this;
    }
    if (_this.__templatizeOwner.__hideTemplateChildren__) {
      _this._showHideChildren(true);
    }
    // Flush props only when props are passed if instance props exist
    // or when there isn't instance props.
    var options = _this.__templatizeOptions;
    if (props && options.instanceProps || !options.instanceProps) {
      _this._enableProperties();
    }
    return _this;
  }
  /**
   * Configure the given `props` by calling `_setPendingProperty`. Also
   * sets any properties stored in `__hostProps`.
   * @private
   * @param {Object} props Object of property name-value pairs to set.
   */


  _createClass(TemplateInstanceBase, [{
    key: '_configureProperties',
    value: function _configureProperties(props) {
      var options = this.__templatizeOptions;
      if (props) {
        for (var iprop in options.instanceProps) {
          if (iprop in props) {
            this._setPendingProperty(iprop, props[iprop]);
          }
        }
      }
      for (var hprop in this.__hostProps) {
        this._setPendingProperty(hprop, this.__dataHost['_host_' + hprop]);
      }
    }
    /**
     * Forwards a host property to this instance.  This method should be
     * called on instances from the `options.forwardHostProp` callback
     * to propagate changes of host properties to each instance.
     *
     * Note this method enqueues the change, which are flushed as a batch.
     *
     * @param {string} prop Property or path name
     * @param {*} value Value of the property to forward
     */

  }, {
    key: 'forwardHostProp',
    value: function forwardHostProp(prop, value) {
      if (this._setPendingPropertyOrPath(prop, value, false, true)) {
        this.__dataHost._enqueueClient(this);
      }
    }
    /**
     * @override
     */

  }, {
    key: '_addEventListenerToNode',
    value: function _addEventListenerToNode(node, eventName, handler) {
      var _this2 = this;

      if (this._methodHost && this.__templatizeOptions.parentModel) {
        // If this instance should be considered a parent model, decorate
        // events this template instance as `model`
        this._methodHost._addEventListenerToNode(node, eventName, function (e) {
          e.model = _this2;
          handler(e);
        });
      } else {
        // Otherwise delegate to the template's host (which could be)
        // another template instance
        var templateHost = this.__dataHost.__dataHost;
        if (templateHost) {
          templateHost._addEventListenerToNode(node, eventName, handler);
        }
      }
    }
    /**
     * Shows or hides the template instance top level child elements. For
     * text nodes, `textContent` is removed while "hidden" and replaced when
     * "shown."
     * @param {boolean} hide Set to true to hide the children;
     * set to false to show them.
     * @protected
     */

  }, {
    key: '_showHideChildren',
    value: function _showHideChildren(hide) {
      var c = this.children;
      for (var i = 0; i < c.length; i++) {
        var n = c[i];
        // Ignore non-changes
        if (Boolean(hide) != Boolean(n.__hideTemplateChildren__)) {
          if (n.nodeType === Node.TEXT_NODE) {
            if (hide) {
              n.__polymerTextContent__ = n.textContent;
              n.textContent = '';
            } else {
              n.textContent = n.__polymerTextContent__;
            }
          } else if (n.style) {
            if (hide) {
              n.__polymerDisplay__ = n.style.display;
              n.style.display = 'none';
            } else {
              n.style.display = n.__polymerDisplay__;
            }
          }
        }
        n.__hideTemplateChildren__ = hide;
        if (n._showHideChildren) {
          n._showHideChildren(hide);
        }
      }
    }
    /**
     * Overrides default property-effects implementation to intercept
     * textContent bindings while children are "hidden" and cache in
     * private storage for later retrieval.
     *
     * @override
     */

  }, {
    key: '_setUnmanagedPropertyToNode',
    value: function _setUnmanagedPropertyToNode(node, prop, value) {
      if (node.__hideTemplateChildren__ && node.nodeType == Node.TEXT_NODE && prop == 'textContent') {
        node.__polymerTextContent__ = value;
      } else {
        _get(TemplateInstanceBase.prototype.__proto__ || Object.getPrototypeOf(TemplateInstanceBase.prototype), '_setUnmanagedPropertyToNode', this).call(this, node, prop, value);
      }
    }
    /**
     * Find the parent model of this template instance.  The parent model
     * is either another templatize instance that had option `parentModel: true`,
     * or else the host element.
     *
     * @return {Polymer_PropertyEffects} The parent model of this instance
     */

  }, {
    key: 'parentModel',
    get: function get() {
      var model = this.__parentModel;
      if (!model) {
        var options = void 0;
        model = this;
        do {
          // A template instance's `__dataHost` is a <template>
          // `model.__dataHost.__dataHost` is the template's host
          model = model.__dataHost.__dataHost;
        } while ((options = model.__templatizeOptions) && !options.parentModel);
        this.__parentModel = model;
      }
      return model;
    }
  }]);

  return TemplateInstanceBase;
}(base);

/** @type {!DataTemplate} */


TemplateInstanceBase.prototype.__dataHost;
/** @type {!TemplatizeOptions} */
TemplateInstanceBase.prototype.__templatizeOptions;
/** @type {!Polymer_PropertyEffects} */
TemplateInstanceBase.prototype._methodHost;
/** @type {!Object} */
TemplateInstanceBase.prototype.__templatizeOwner;
/** @type {!Object} */
TemplateInstanceBase.prototype.__hostProps;

/**
 * @constructor
 * @extends {TemplateInstanceBase}
 * @implements {Polymer_MutableData}
 */
var MutableTemplateInstanceBase = (0, _mutableData.MutableData)(TemplateInstanceBase);

function findMethodHost(template) {
  // Technically this should be the owner of the outermost template.
  // In shadow dom, this is always getRootNode().host, but we can
  // approximate this via cooperation with our dataHost always setting
  // `_methodHost` as long as there were bindings (or id's) on this
  // instance causing it to get a dataHost.
  var templateHost = template.__dataHost;
  return templateHost && templateHost._methodHost || templateHost;
}

/* eslint-disable valid-jsdoc */
/**
 * @suppress {missingProperties} class.prototype is not defined for some reason
 */
function createTemplatizerClass(template, templateInfo, options) {
  // Anonymous class created by the templatize
  var base = options.mutableData ? MutableTemplateInstanceBase : TemplateInstanceBase;
  /**
   * @constructor
   * @extends {base}
   */
  var klass = function (_base2) {
    _inherits(klass, _base2);

    function klass() {
      _classCallCheck(this, klass);

      return _possibleConstructorReturn(this, (klass.__proto__ || Object.getPrototypeOf(klass)).apply(this, arguments));
    }

    return klass;
  }(base);
  klass.prototype.__templatizeOptions = options;
  klass.prototype._bindTemplate(template);
  addNotifyEffects(klass, template, templateInfo, options);
  return klass;
}

/**
 * @suppress {missingProperties} class.prototype is not defined for some reason
 */
function addPropagateEffects(template, templateInfo, options) {
  var userForwardHostProp = options.forwardHostProp;
  if (userForwardHostProp) {
    // Provide data API and property effects on memoized template class
    var klass = templateInfo.templatizeTemplateClass;
    if (!klass) {
      var _base3 = options.mutableData ? MutableDataTemplate : DataTemplate;
      klass = templateInfo.templatizeTemplateClass = function (_base4) {
        _inherits(TemplatizedTemplate, _base4);

        function TemplatizedTemplate() {
          _classCallCheck(this, TemplatizedTemplate);

          return _possibleConstructorReturn(this, (TemplatizedTemplate.__proto__ || Object.getPrototypeOf(TemplatizedTemplate)).apply(this, arguments));
        }

        return TemplatizedTemplate;
      }(_base3);
      // Add template - >instances effects
      // and host <- template effects
      var hostProps = templateInfo.hostProps;
      for (var prop in hostProps) {
        klass.prototype._addPropertyEffect('_host_' + prop, klass.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: createForwardHostPropEffect(prop, userForwardHostProp) });
        klass.prototype._createNotifyingProperty('_host_' + prop);
      }
    }
    upgradeTemplate(template, klass);
    // Mix any pre-bound data into __data; no need to flush this to
    // instances since they pull from the template at instance-time
    if (template.__dataProto) {
      // Note, generally `__dataProto` could be chained, but it's guaranteed
      // to not be since this is a vanilla template we just added effects to
      Object.assign(template.__data, template.__dataProto);
    }
    // Clear any pending data for performance
    template.__dataTemp = {};
    template.__dataPending = null;
    template.__dataOld = null;
    template._enableProperties();
  }
}
/* eslint-enable valid-jsdoc */

function createForwardHostPropEffect(hostProp, userForwardHostProp) {
  return function forwardHostProp(template, prop, props) {
    userForwardHostProp.call(template.__templatizeOwner, prop.substring('_host_'.length), props[prop]);
  };
}

function addNotifyEffects(klass, template, templateInfo, options) {
  var hostProps = templateInfo.hostProps || {};
  for (var iprop in options.instanceProps) {
    delete hostProps[iprop];
    var userNotifyInstanceProp = options.notifyInstanceProp;
    if (userNotifyInstanceProp) {
      klass.prototype._addPropertyEffect(iprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyInstancePropEffect(iprop, userNotifyInstanceProp) });
    }
  }
  if (options.forwardHostProp && template.__dataHost) {
    for (var hprop in hostProps) {
      klass.prototype._addPropertyEffect(hprop, klass.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: createNotifyHostPropEffect() });
    }
  }
}

function createNotifyInstancePropEffect(instProp, userNotifyInstanceProp) {
  return function notifyInstanceProp(inst, prop, props) {
    userNotifyInstanceProp.call(inst.__templatizeOwner, inst, prop, props[prop]);
  };
}

function createNotifyHostPropEffect() {
  return function notifyHostProp(inst, prop, props) {
    inst.__dataHost._setPendingPropertyOrPath('_host_' + prop, props[prop], true, true);
  };
}

/**
 * Module for preparing and stamping instances of templates that utilize
 * Polymer's data-binding and declarative event listener features.
 *
 * Example:
 *
 *     // Get a template from somewhere, e.g. light DOM
 *     let template = this.querySelector('template');
 *     // Prepare the template
 *     let TemplateClass = Polymer.Templatize.templatize(template);
 *     // Instance the template with an initial data model
 *     let instance = new TemplateClass({myProp: 'initial'});
 *     // Insert the instance's DOM somewhere, e.g. element's shadow DOM
 *     this.shadowRoot.appendChild(instance.root);
 *     // Changing a property on the instance will propagate to bindings
 *     // in the template
 *     instance.myProp = 'new value';
 *
 * The `options` dictionary passed to `templatize` allows for customizing
 * features of the generated template class, including how outer-scope host
 * properties should be forwarded into template instances, how any instance
 * properties added into the template's scope should be notified out to
 * the host, and whether the instance should be decorated as a "parent model"
 * of any event handlers.
 *
 *     // Customze property forwarding and event model decoration
 *     let TemplateClass = Polymer.Templatize.templatize(template, this, {
 *       parentModel: true,
 *       instanceProps: {...},
 *       forwardHostProp(property, value) {...},
 *       notifyInstanceProp(instance, property, value) {...},
 *     });
 *
 *
 * @namespace
 * @memberof Polymer
 * @summary Module for preparing and stamping instances of templates
 *   utilizing Polymer templating features.
 */

var Templatize = {

  /**
   * Returns an anonymous `Polymer.PropertyEffects` class bound to the
   * `<template>` provided.  Instancing the class will result in the
   * template being stamped into document fragment stored as the instance's
   * `root` property, after which it can be appended to the DOM.
   *
   * Templates may utilize all Polymer data-binding features as well as
   * declarative event listeners.  Event listeners and inline computing
   * functions in the template will be called on the host of the template.
   *
   * The constructor returned takes a single argument dictionary of initial
   * property values to propagate into template bindings.  Additionally
   * host properties can be forwarded in, and instance properties can be
   * notified out by providing optional callbacks in the `options` dictionary.
   *
   * Valid configuration in `options` are as follows:
   *
   * - `forwardHostProp(property, value)`: Called when a property referenced
   *   in the template changed on the template's host. As this library does
   *   not retain references to templates instanced by the user, it is the
   *   templatize owner's responsibility to forward host property changes into
   *   user-stamped instances.  The `instance.forwardHostProp(property, value)`
   *    method on the generated class should be called to forward host
   *   properties into the template to prevent unnecessary property-changed
   *   notifications. Any properties referenced in the template that are not
   *   defined in `instanceProps` will be notified up to the template's host
   *   automatically.
   * - `instanceProps`: Dictionary of property names that will be added
   *   to the instance by the templatize owner.  These properties shadow any
   *   host properties, and changes within the template to these properties
   *   will result in `notifyInstanceProp` being called.
   * - `mutableData`: When `true`, the generated class will skip strict
   *   dirty-checking for objects and arrays (always consider them to be
   *   "dirty").
   * - `notifyInstanceProp(instance, property, value)`: Called when
   *   an instance property changes.  Users may choose to call `notifyPath`
   *   on e.g. the owner to notify the change.
   * - `parentModel`: When `true`, events handled by declarative event listeners
   *   (`on-event="handler"`) will be decorated with a `model` property pointing
   *   to the template instance that stamped it.  It will also be returned
   *   from `instance.parentModel` in cases where template instance nesting
   *   causes an inner model to shadow an outer model.
   *
   * Note that the class returned from `templatize` is generated only once
   * for a given `<template>` using `options` from the first call for that
   * template, and the cached class is returned for all subsequent calls to
   * `templatize` for that template.  As such, `options` callbacks should not
   * close over owner-specific properties since only the first `options` is
   * used; rather, callbacks are called bound to the `owner`, and so context
   * needed from the callbacks (such as references to `instances` stamped)
   * should be stored on the `owner` such that they can be retrieved via `this`.
   *
   * @memberof Polymer.Templatize
   * @param {!HTMLTemplateElement} template Template to templatize
   * @param {!Polymer_PropertyEffects} owner Owner of the template instances;
   *   any optional callbacks will be bound to this owner.
   * @param {Object=} options Options dictionary (see summary for details)
   * @return {function(new:TemplateInstanceBase)} Generated class bound to the template
   *   provided
   * @suppress {invalidCasts}
   */
  templatize: function templatize(template, owner, options) {
    options = /** @type {!TemplatizeOptions} */options || {};
    if (template.__templatizeOwner) {
      throw new Error('A <template> can only be templatized once');
    }
    template.__templatizeOwner = owner;
    var templateInfo = owner.constructor._parseTemplate(template);
    // Get memoized base class for the prototypical template, which
    // includes property effects for binding template & forwarding
    var baseClass = templateInfo.templatizeInstanceClass;
    if (!baseClass) {
      baseClass = createTemplatizerClass(template, templateInfo, options);
      templateInfo.templatizeInstanceClass = baseClass;
    }
    // Host property forwarding must be installed onto template instance
    addPropagateEffects(template, templateInfo, options);
    // Subclass base class and add reference for this specific template
    var klass = function (_baseClass) {
      _inherits(TemplateInstance, _baseClass);

      function TemplateInstance() {
        _classCallCheck(this, TemplateInstance);

        return _possibleConstructorReturn(this, (TemplateInstance.__proto__ || Object.getPrototypeOf(TemplateInstance)).apply(this, arguments));
      }

      return TemplateInstance;
    }(baseClass);
    klass.prototype._methodHost = findMethodHost(template);
    klass.prototype.__dataHost = template;
    klass.prototype.__templatizeOwner = owner;
    klass.prototype.__hostProps = templateInfo.hostProps;
    return (/** @type {function(new:TemplateInstanceBase)} */klass
    );
  },


  /**
   * Returns the template "model" associated with a given element, which
   * serves as the binding scope for the template instance the element is
   * contained in. A template model is an instance of
   * `TemplateInstanceBase`, and should be used to manipulate data
   * associated with this template instance.
   *
   * Example:
   *
   *   let model = modelForElement(el);
   *   if (model.index < 10) {
   *     model.set('item.checked', true);
   *   }
   *
   * @memberof Polymer.Templatize
   * @param {HTMLTemplateElement} template The model will be returned for
   *   elements stamped from this template
   * @param {Node} node Node for which to return a template model.
   * @return {TemplateInstanceBase} Template instance representing the
   *   binding scope for the element
   */
  modelForElement: function modelForElement(template, node) {
    var model = void 0;
    while (node) {
      // An element with a __templatizeInstance marks the top boundary
      // of a scope; walk up until we find one, and then ensure that
      // its __dataHost matches `this`, meaning this dom-repeat stamped it
      if (model = node.__templatizeInstance) {
        // Found an element stamped by another template; keep walking up
        // from its __dataHost
        if (model.__dataHost != template) {
          node = model.__dataHost;
        } else {
          return model;
        }
      } else {
        // Still in a template scope, keep going up until
        // a __templatizeInstance is found
        node = node.parentNode;
      }
    }
    return null;
  }
};

exports.Templatize = Templatize;
exports.TemplateInstanceBase = TemplateInstanceBase;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionalMutableData = exports.MutableData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mixin = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Common implementation for mixin & behavior
function mutablePropertyChange(inst, property, value, old, mutableData) {
  var isObject = void 0;
  if (mutableData) {
    isObject = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
    // Pull `old` for Objects from temp cache, but treat `null` as a primitive
    if (isObject) {
      old = inst.__dataTemp[property];
    }
  }
  // Strict equality check, but return false for NaN===NaN
  var shouldChange = old !== value && (old === old || value === value);
  // Objects are stored in temporary cache (cleared at end of
  // turn), which is used for dirty-checking
  if (isObject && shouldChange) {
    inst.__dataTemp[property] = value;
  }
  return shouldChange;
}

var MutableData = exports.MutableData = (0, _mixin.dedupingMixin)(function (superClass) {

  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_MutableData}
   */
  var MutableData = function (_superClass) {
    _inherits(MutableData, _superClass);

    function MutableData() {
      _classCallCheck(this, MutableData);

      return _possibleConstructorReturn(this, (MutableData.__proto__ || Object.getPrototypeOf(MutableData)).apply(this, arguments));
    }

    _createClass(MutableData, [{
      key: '_shouldPropertyChange',

      /**
       * Overrides `Polymer.PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * This method pulls the value to dirty check against from the `__dataTemp`
       * cache (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */
      value: function _shouldPropertyChange(property, value, old) {
        return mutablePropertyChange(this, property, value, old, true);
      }
    }]);

    return MutableData;
  }(superClass);
  /** @type {boolean} */


  MutableData.prototype.mutableData = false;

  return MutableData;
});

var OptionalMutableData = exports.OptionalMutableData = (0, _mixin.dedupingMixin)(function (superClass) {

  /**
   * @mixinClass
   * @polymer
   * @implements {Polymer_OptionalMutableData}
   */
  var OptionalMutableData = function (_superClass2) {
    _inherits(OptionalMutableData, _superClass2);

    function OptionalMutableData() {
      _classCallCheck(this, OptionalMutableData);

      return _possibleConstructorReturn(this, (OptionalMutableData.__proto__ || Object.getPrototypeOf(OptionalMutableData)).apply(this, arguments));
    }

    _createClass(OptionalMutableData, [{
      key: '_shouldPropertyChange',


      /**
       * Overrides `Polymer.PropertyEffects` to provide option for skipping
       * strict equality checking for Objects and Arrays.
       *
       * When `this.mutableData` is true on this instance, this method
       * pulls the value to dirty check against from the `__dataTemp` cache
       * (rather than the normal `__data` cache) for Objects.  Since the temp
       * cache is cleared at the end of a turn, this implementation allows
       * side-effects of deep object changes to be processed by re-setting the
       * same object (using the temp cache as an in-turn backstop to prevent
       * cycles due to 2-way notification).
       *
       * @param {string} property Property name
       * @param {*} value New property value
       * @param {*} old Previous property value
       * @return {boolean} Whether the property should be considered a change
       * @protected
       */
      value: function _shouldPropertyChange(property, value, old) {
        return mutablePropertyChange(this, property, value, old, this.mutableData);
      }
    }], [{
      key: 'properties',
      get: function get() {
        return {
          /**
           * Instance-level flag for configuring the dirty-checking strategy
           * for this element.  When true, Objects and Arrays will skip dirty
           * checking, otherwise strict equality checking will be used.
           */
          mutableData: Boolean
        };
      }
    }]);

    return OptionalMutableData;
  }(superClass);

  return OptionalMutableData;
});

// Export for use by legacy behavior
MutableData._mutablePropertyChange = mutablePropertyChange;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = exports.enqueueDebouncer = undefined;

__webpack_require__(0);

var debouncerQueue = [];

var enqueueDebouncer = exports.enqueueDebouncer = function enqueueDebouncer(debouncer) {
  debouncerQueue.push(debouncer);
};

function flushDebouncers() {
  var didFlush = Boolean(debouncerQueue.length);
  while (debouncerQueue.length) {
    try {
      debouncerQueue.shift().flush();
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  return didFlush;
}

var flush = exports.flush = function flush() {
  var shadyDOM = void 0,
      debouncers = void 0;
  do {
    shadyDOM = window.ShadyDOM && ShadyDOM.flush();
    if (window.ShadyCSS && window.ShadyCSS.ScopingShim) {
      window.ShadyCSS.ScopingShim.flush();
    }
    debouncers = flushDebouncers();
  } while (shadyDOM || debouncers);
};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _gestureEventListeners = __webpack_require__(85);

var _window = __webpack_require__(7);

var _style = __webpack_require__(104);

var _style2 = _interopRequireDefault(_style);

var _template = __webpack_require__(106);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_GestureEventListener) {
  _inherits(Component, _GestureEventListener);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, null, [{
    key: 'is',
    get: function get() {
      return 'ffc-logo';
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n        ' + _style2.default + '\n      </style>\n      ' + _template2.default + '\n    ';
    }
  }]);

  return Component;
}((0, _gestureEventListeners.GestureEventListeners)(_polymerElement.Element));

!_window.customElements.get(Component.is) ? _window.customElements.define(Component.is, Component) : console.warn(Component.is + ' is already defined');

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _gestureEventListeners = __webpack_require__(85);

var _window = __webpack_require__(7);

var _style = __webpack_require__(97);

var _style2 = _interopRequireDefault(_style);

var _template = __webpack_require__(99);

var _template2 = _interopRequireDefault(_template);

__webpack_require__(100);

__webpack_require__(95);

__webpack_require__(107);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_GestureEventListener) {
  _inherits(Component, _GestureEventListener);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
  }

  _createClass(Component, null, [{
    key: 'is',
    get: function get() {
      return 'side-bar';
    }
  }, {
    key: 'properties',
    get: function get() {
      return {
        withLogo: {
          type: Boolean,
          value: false
        }
      };
    }
  }, {
    key: 'template',
    get: function get() {
      return '\n      <style>\n        ' + _style2.default + '\n      </style>\n      ' + _template2.default + '\n    ';
    }
  }]);

  return Component;
}((0, _gestureEventListeners.GestureEventListeners)(_polymerElement.Element));

!_window.customElements.get(Component.is) ? _window.customElements.define(Component.is, Component) : console.warn(Component.is + ' is already defined');

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(98);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  align-items: center;\n  min-height: 100vh; }\n\nffc-logo {\n  width: 200px;\n  margin: 20px; }\n", ""]);

// exports


/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = "<div>\n  <template is=\"dom-if\" if=\"[[withLogo]]\">\n    <ffc-logo></ffc-logo>\n  </template>\n\n  <nav-list></nav-list>\n</div>\n\n"

/***/ })

});
//# sourceMappingURL=page-home.fragment.1.js.map