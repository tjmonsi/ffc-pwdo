/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 75);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // eslint-disable-line no-unused-vars


var _cssParse = __webpack_require__(5);

var _styleUtil = __webpack_require__(6);

var StyleUtil = _interopRequireWildcard(_styleUtil);

var _styleSettings = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Transforms ShadowDOM styling into ShadyDOM styling

* scoping:

  * elements in scope get scoping selector class="x-foo-scope"
  * selectors re-written as follows:

    div button -> div.x-foo-scope button.x-foo-scope

* :host -> scopeName

* :host(...) -> scopeName...

* ::slotted(...) -> scopeName > ...

* ...:dir(ltr|rtl) -> [dir="ltr|rtl"] ..., ...[dir="ltr|rtl"]

* :host(:dir[rtl]) -> scopeName:dir(rtl) -> [dir="rtl"] scopeName, scopeName[dir="rtl"]

*/
var SCOPE_NAME = 'style-scope';

var StyleTransformer = function () {
  function StyleTransformer() {
    _classCallCheck(this, StyleTransformer);
  }

  _createClass(StyleTransformer, [{
    key: 'dom',

    // Given a node and scope name, add a scoping class to each node
    // in the tree. This facilitates transforming css into scoped rules.
    value: function dom(node, scope, shouldRemoveScope) {
      // one time optimization to skip scoping...
      if (node['__styleScoped']) {
        node['__styleScoped'] = null;
      } else {
        this._transformDom(node, scope || '', shouldRemoveScope);
      }
    }
  }, {
    key: '_transformDom',
    value: function _transformDom(node, selector, shouldRemoveScope) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        this.element(node, selector, shouldRemoveScope);
      }
      var c$ = node.localName === 'template' ? (node.content || node._content).childNodes : node.children || node.childNodes;
      if (c$) {
        for (var i = 0; i < c$.length; i++) {
          this._transformDom(c$[i], selector, shouldRemoveScope);
        }
      }
    }
  }, {
    key: 'element',
    value: function element(_element, scope, shouldRemoveScope) {
      // note: if using classes, we add both the general 'style-scope' class
      // as well as the specific scope. This enables easy filtering of all
      // `style-scope` elements
      if (scope) {
        // note: svg on IE does not have classList so fallback to class
        if (_element.classList) {
          if (shouldRemoveScope) {
            _element.classList.remove(SCOPE_NAME);
            _element.classList.remove(scope);
          } else {
            _element.classList.add(SCOPE_NAME);
            _element.classList.add(scope);
          }
        } else if (_element.getAttribute) {
          var c = _element.getAttribute(CLASS);
          if (shouldRemoveScope) {
            if (c) {
              var newValue = c.replace(SCOPE_NAME, '').replace(scope, '');
              StyleUtil.setElementClassRaw(_element, newValue);
            }
          } else {
            var _newValue = (c ? c + ' ' : '') + SCOPE_NAME + ' ' + scope;
            StyleUtil.setElementClassRaw(_element, _newValue);
          }
        }
      }
    }
  }, {
    key: 'elementStyles',
    value: function elementStyles(element, styleRules, callback) {
      var cssBuildType = element['__cssBuild'];
      // no need to shim selectors if settings.useNativeShadow, also
      // a shady css build will already have transformed selectors
      // NOTE: This method may be called as part of static or property shimming.
      // When there is a targeted build it will not be called for static shimming,
      // but when the property shim is used it is called and should opt out of
      // static shimming work when a proper build exists.
      var cssText = '';
      if (_styleSettings.nativeShadow || cssBuildType === 'shady') {
        cssText = StyleUtil.toCssText(styleRules, callback);
      } else {
        var _StyleUtil$getIsExten = StyleUtil.getIsExtends(element),
            is = _StyleUtil$getIsExten.is,
            typeExtension = _StyleUtil$getIsExten.typeExtension;

        cssText = this.css(styleRules, is, typeExtension, callback) + '\n\n';
      }
      return cssText.trim();
    }

    // Given a string of cssText and a scoping string (scope), returns
    // a string of scoped css where each selector is transformed to include
    // a class created from the scope. ShadowDOM selectors are also transformed
    // (e.g. :host) to use the scoping selector.

  }, {
    key: 'css',
    value: function css(rules, scope, ext, callback) {
      var hostScope = this._calcHostScope(scope, ext);
      scope = this._calcElementScope(scope);
      var self = this;
      return StyleUtil.toCssText(rules, function ( /** StyleNode */rule) {
        if (!rule.isScoped) {
          self.rule(rule, scope, hostScope);
          rule.isScoped = true;
        }
        if (callback) {
          callback(rule, scope, hostScope);
        }
      });
    }
  }, {
    key: '_calcElementScope',
    value: function _calcElementScope(scope) {
      if (scope) {
        return CSS_CLASS_PREFIX + scope;
      } else {
        return '';
      }
    }
  }, {
    key: '_calcHostScope',
    value: function _calcHostScope(scope, ext) {
      return ext ? '[is=' + scope + ']' : scope;
    }
  }, {
    key: 'rule',
    value: function rule(_rule, scope, hostScope) {
      this._transformRule(_rule, this._transformComplexSelector, scope, hostScope);
    }

    /**
     * transforms a css rule to a scoped rule.
     *
     * @param {StyleNode} rule
     * @param {Function} transformer
     * @param {string=} scope
     * @param {string=} hostScope
     */

  }, {
    key: '_transformRule',
    value: function _transformRule(rule, transformer, scope, hostScope) {
      // NOTE: save transformedSelector for subsequent matching of elements
      // against selectors (e.g. when calculating style properties)
      rule['selector'] = rule.transformedSelector = this._transformRuleCss(rule, transformer, scope, hostScope);
    }

    /**
     * @param {StyleNode} rule
     * @param {Function} transformer
     * @param {string=} scope
     * @param {string=} hostScope
     */

  }, {
    key: '_transformRuleCss',
    value: function _transformRuleCss(rule, transformer, scope, hostScope) {
      var p$ = rule['selector'].split(COMPLEX_SELECTOR_SEP);
      // we want to skip transformation of rules that appear in keyframes,
      // because they are keyframe selectors, not element selectors.
      if (!StyleUtil.isKeyframesSelector(rule)) {
        for (var i = 0, l = p$.length, p; i < l && (p = p$[i]); i++) {
          p$[i] = transformer.call(this, p, scope, hostScope);
        }
      }
      return p$.join(COMPLEX_SELECTOR_SEP);
    }

    /**
     * @param {string} selector
     * @return {string}
     */

  }, {
    key: '_twiddleNthPlus',
    value: function _twiddleNthPlus(selector) {
      return selector.replace(NTH, function (m, type, inside) {
        if (inside.indexOf('+') > -1) {
          inside = inside.replace(/\+/g, '___');
        } else if (inside.indexOf('___') > -1) {
          inside = inside.replace(/___/g, '+');
        }
        return ':' + type + '(' + inside + ')';
      });
    }

    /**
     * @param {string} selector
     * @param {string} scope
     * @param {string=} hostScope
     */

  }, {
    key: '_transformComplexSelector',
    value: function _transformComplexSelector(selector, scope, hostScope) {
      var _this = this;

      var stop = false;
      selector = selector.trim();
      // Remove spaces inside of selectors like `:nth-of-type` because it confuses SIMPLE_SELECTOR_SEP
      var isNth = NTH.test(selector);
      if (isNth) {
        selector = selector.replace(NTH, function (m, type, inner) {
          return ':' + type + '(' + inner.replace(/\s/g, '') + ')';
        });
        selector = this._twiddleNthPlus(selector);
      }
      selector = selector.replace(SLOTTED_START, HOST + ' $1');
      selector = selector.replace(SIMPLE_SELECTOR_SEP, function (m, c, s) {
        if (!stop) {
          var info = _this._transformCompoundSelector(s, c, scope, hostScope);
          stop = stop || info.stop;
          c = info.combinator;
          s = info.value;
        }
        return c + s;
      });
      if (isNth) {
        selector = this._twiddleNthPlus(selector);
      }
      return selector;
    }
  }, {
    key: '_transformCompoundSelector',
    value: function _transformCompoundSelector(selector, combinator, scope, hostScope) {
      // replace :host with host scoping class
      var slottedIndex = selector.indexOf(SLOTTED);
      if (selector.indexOf(HOST) >= 0) {
        selector = this._transformHostSelector(selector, hostScope);
        // replace other selectors with scoping class
      } else if (slottedIndex !== 0) {
        selector = scope ? this._transformSimpleSelector(selector, scope) : selector;
      }
      // mark ::slotted() scope jump to replace with descendant selector + arg
      // also ignore left-side combinator
      var slotted = false;
      if (slottedIndex >= 0) {
        combinator = '';
        slotted = true;
      }
      // process scope jumping selectors up to the scope jump and then stop
      var stop = void 0;
      if (slotted) {
        stop = true;
        if (slotted) {
          // .zonk ::slotted(.foo) -> .zonk.scope > .foo
          selector = selector.replace(SLOTTED_PAREN, function (m, paren) {
            return ' > ' + paren;
          });
        }
      }
      selector = selector.replace(DIR_PAREN, function (m, before, dir) {
        return '[dir="' + dir + '"] ' + before + ', ' + before + '[dir="' + dir + '"]';
      });
      return { value: selector, combinator: combinator, stop: stop };
    }
  }, {
    key: '_transformSimpleSelector',
    value: function _transformSimpleSelector(selector, scope) {
      var p$ = selector.split(PSEUDO_PREFIX);
      p$[0] += scope;
      return p$.join(PSEUDO_PREFIX);
    }

    // :host(...) -> scopeName...

  }, {
    key: '_transformHostSelector',
    value: function _transformHostSelector(selector, hostScope) {
      var m = selector.match(HOST_PAREN);
      var paren = m && m[2].trim() || '';
      if (paren) {
        if (!paren[0].match(SIMPLE_SELECTOR_PREFIX)) {
          // paren starts with a type selector
          var typeSelector = paren.split(SIMPLE_SELECTOR_PREFIX)[0];
          // if the type selector is our hostScope then avoid pre-pending it
          if (typeSelector === hostScope) {
            return paren;
            // otherwise, this selector should not match in this scope so
            // output a bogus selector.
          } else {
            return SELECTOR_NO_MATCH;
          }
        } else {
          // make sure to do a replace here to catch selectors like:
          // `:host(.foo)::before`
          return selector.replace(HOST_PAREN, function (m, host, paren) {
            return hostScope + paren;
          });
        }
        // if no paren, do a straight :host replacement.
        // TODO(sorvell): this should not strictly be necessary but
        // it's needed to maintain support for `:host[foo]` type selectors
        // which have been improperly used under Shady DOM. This should be
        // deprecated.
      } else {
        return selector.replace(HOST, hostScope);
      }
    }

    /**
     * @param {StyleNode} rule
     */

  }, {
    key: 'documentRule',
    value: function documentRule(rule) {
      // reset selector in case this is redone.
      rule['selector'] = rule['parsedSelector'];
      this.normalizeRootSelector(rule);
      this._transformRule(rule, this._transformDocumentSelector);
    }

    /**
     * @param {StyleNode} rule
     */

  }, {
    key: 'normalizeRootSelector',
    value: function normalizeRootSelector(rule) {
      if (rule['selector'] === ROOT) {
        rule['selector'] = 'html';
      }
    }

    /**
     * @param {string} selector
     */

  }, {
    key: '_transformDocumentSelector',
    value: function _transformDocumentSelector(selector) {
      return selector.match(SLOTTED) ? this._transformComplexSelector(selector, SCOPE_DOC_SELECTOR) : this._transformSimpleSelector(selector.trim(), SCOPE_DOC_SELECTOR);
    }
  }, {
    key: 'SCOPE_NAME',
    get: function get() {
      return SCOPE_NAME;
    }
  }]);

  return StyleTransformer;
}();

var NTH = /:(nth[-\w]+)\(([^)]+)\)/;
var SCOPE_DOC_SELECTOR = ':not(.' + SCOPE_NAME + ')';
var COMPLEX_SELECTOR_SEP = ',';
var SIMPLE_SELECTOR_SEP = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g;
var SIMPLE_SELECTOR_PREFIX = /[[.:#*]/;
var HOST = ':host';
var ROOT = ':root';
var SLOTTED = '::slotted';
var SLOTTED_START = new RegExp('^(' + SLOTTED + ')');
// NOTE: this supports 1 nested () pair for things like
// :host(:not([selected]), more general support requires
// parsing which seems like overkill
var HOST_PAREN = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
// similar to HOST_PAREN
var SLOTTED_PAREN = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/;
var DIR_PAREN = /(.*):dir\((?:(ltr|rtl))\)/;
var CSS_CLASS_PREFIX = '.';
var PSEUDO_PREFIX = ':';
var CLASS = 'class';
var SELECTOR_NO_MATCH = 'should_not_match';

exports.default = new StyleTransformer();

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var VAR_ASSIGN = exports.VAR_ASSIGN = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
var MIXIN_MATCH = exports.MIXIN_MATCH = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
var VAR_CONSUMED = exports.VAR_CONSUMED = /(--[\w-]+)\s*([:,;)]|$)/gi;
var ANIMATION_MATCH = exports.ANIMATION_MATCH = /(animation\s*:)|(animation-name\s*:)/;
var MEDIA_MATCH = exports.MEDIA_MATCH = /@media\s(.*)/;
var IS_VAR = exports.IS_VAR = /^--/;
var BRACKETED = exports.BRACKETED = /\{[^}]*\}/g;
var HOST_PREFIX = exports.HOST_PREFIX = '(?:^|[^.#[:])';
var HOST_SUFFIX = exports.HOST_SUFFIX = '($|[.:[\\s>+~])';

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cssParse = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line no-unused-vars

/** @const {string} */
var infoKey = '__styleInfo';

var StyleInfo = function () {
  _createClass(StyleInfo, null, [{
    key: 'get',

    /**
     * @param {Element} node
     * @return {StyleInfo}
     */
    value: function get(node) {
      if (node) {
        return node[infoKey];
      } else {
        return null;
      }
    }
    /**
     * @param {!Element} node
     * @param {StyleInfo} styleInfo
     * @return {StyleInfo}
     */

  }, {
    key: 'set',
    value: function set(node, styleInfo) {
      node[infoKey] = styleInfo;
      return styleInfo;
    }
    /**
     * @param {StyleNode} ast
     * @param {Node=} placeholder
     * @param {Array<string>=} ownStylePropertyNames
     * @param {string=} elementName
     * @param {string=} typeExtension
     * @param {string=} cssBuild
     */

  }]);

  function StyleInfo(ast, placeholder, ownStylePropertyNames, elementName, typeExtension, cssBuild) {
    _classCallCheck(this, StyleInfo);

    /** @type {StyleNode} */
    this.styleRules = ast || null;
    /** @type {Node} */
    this.placeholder = placeholder || null;
    /** @type {!Array<string>} */
    this.ownStylePropertyNames = ownStylePropertyNames || [];
    /** @type {Array<Object>} */
    this.overrideStyleProperties = null;
    /** @type {string} */
    this.elementName = elementName || '';
    /** @type {string} */
    this.cssBuild = cssBuild || '';
    /** @type {string} */
    this.typeExtension = typeExtension || '';
    /** @type {Object<string, string>} */
    this.styleProperties = null;
    /** @type {?string} */
    this.scopeSelector = null;
    /** @type {HTMLStyleElement} */
    this.customStyle = null;
  }

  _createClass(StyleInfo, [{
    key: '_getStyleRules',
    value: function _getStyleRules() {
      return this.styleRules;
    }
  }]);

  return StyleInfo;
}();

exports.default = StyleInfo;


StyleInfo.prototype['_getStyleRules'] = StyleInfo.prototype._getStyleRules;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/**
 * @const {!Object<string, !HTMLTemplateElement>}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
var templateMap = {};
exports.default = templateMap;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});
var nativeShadow = exports.nativeShadow = !(window['ShadyDOM'] && window['ShadyDOM']['inUse']);
var nativeCssVariables = exports.nativeCssVariables = void 0;

/**
 * @param {(ShadyCSSOptions | ShadyCSSInterface)=} settings
 */
function calcCssVariables(settings) {
  if (settings && settings['shimcssproperties']) {
    exports.nativeCssVariables = nativeCssVariables = false;
  } else {
    // chrome 49 has semi-working css vars, check if box-shadow works
    // safari 9.1 has a recalc bug: https://bugs.webkit.org/show_bug.cgi?id=155782
    // However, shim css custom properties are only supported with ShadyDOM enabled,
    // so fall back on native if we do not detect ShadyDOM
    // Edge 15: custom properties used in ::before and ::after will also be used in the parent element
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12414257/
    exports.nativeCssVariables = nativeCssVariables = nativeShadow || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports('box-shadow', '0 0 0 var(--foo)'));
  }
}

if (window.ShadyCSS && window.ShadyCSS.nativeCss !== undefined) {
  exports.nativeCssVariables = nativeCssVariables = window.ShadyCSS.nativeCss;
} else if (window.ShadyCSS) {
  calcCssVariables(window.ShadyCSS);
  // reset window variable to let ShadyCSS API take its place
  window.ShadyCSS = undefined;
} else {
  calcCssVariables(window['WebComponents'] && window['WebComponents']['flags']);
}

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/** @type {Promise<void>} */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = documentWait;
var readyPromise = null;

/** @type {?function(?function())} */
var whenReady = window['HTMLImports'] && window['HTMLImports']['whenReady'] || null;

/** @type {function()} */
var resolveFn = void 0;

/**
 * @param {?function()} callback
 */
function documentWait(callback) {
  requestAnimationFrame(function () {
    if (whenReady) {
      whenReady(callback);
    } else {
      if (!readyPromise) {
        readyPromise = new Promise(function (resolve) {
          resolveFn = resolve;
        });
        if (document.readyState === 'complete') {
          resolveFn();
        } else {
          document.addEventListener('readystatechange', function () {
            if (document.readyState === 'complete') {
              resolveFn();
            }
          });
        }
      }
      readyPromise.then(function () {
        callback && callback();
      });
    }
  });
}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/*
Extremely simple css parser. Intended to be not more than what we need
and definitely not necessarily correct =).
*/



/** @unrestricted */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.stringify = stringify;
exports.removeCustomPropAssignment = removeCustomPropAssignment;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleNode = function StyleNode() {
  _classCallCheck(this, StyleNode);

  /** @type {number} */
  this['start'] = 0;
  /** @type {number} */
  this['end'] = 0;
  /** @type {StyleNode} */
  this['previous'] = null;
  /** @type {StyleNode} */
  this['parent'] = null;
  /** @type {Array<StyleNode>} */
  this['rules'] = null;
  /** @type {string} */
  this['parsedCssText'] = '';
  /** @type {string} */
  this['cssText'] = '';
  /** @type {boolean} */
  this['atRule'] = false;
  /** @type {number} */
  this['type'] = 0;
  /** @type {string} */
  this['keyframesName'] = '';
  /** @type {string} */
  this['selector'] = '';
  /** @type {string} */
  this['parsedSelector'] = '';
};

exports.StyleNode = StyleNode;

// given a string of css, return a simple rule tree
/**
 * @param {string} text
 * @return {StyleNode}
 */

function parse(text) {
  text = clean(text);
  return parseCss(lex(text), text);
}

// remove stuff we don't care about that may hinder parsing
/**
 * @param {string} cssText
 * @return {string}
 */
function clean(cssText) {
  return cssText.replace(RX.comments, '').replace(RX.port, '');
}

// super simple {...} lexer that returns a node tree
/**
 * @param {string} text
 * @return {StyleNode}
 */
function lex(text) {
  var root = new StyleNode();
  root['start'] = 0;
  root['end'] = text.length;
  var n = root;
  for (var i = 0, l = text.length; i < l; i++) {
    if (text[i] === OPEN_BRACE) {
      if (!n['rules']) {
        n['rules'] = [];
      }
      var p = n;
      var previous = p['rules'][p['rules'].length - 1] || null;
      n = new StyleNode();
      n['start'] = i + 1;
      n['parent'] = p;
      n['previous'] = previous;
      p['rules'].push(n);
    } else if (text[i] === CLOSE_BRACE) {
      n['end'] = i + 1;
      n = n['parent'] || root;
    }
  }
  return root;
}

// add selectors/cssText to node tree
/**
 * @param {StyleNode} node
 * @param {string} text
 * @return {StyleNode}
 */
function parseCss(node, text) {
  var t = text.substring(node['start'], node['end'] - 1);
  node['parsedCssText'] = node['cssText'] = t.trim();
  if (node['parent']) {
    var ss = node['previous'] ? node['previous']['end'] : node['parent']['start'];
    t = text.substring(ss, node['start'] - 1);
    t = _expandUnicodeEscapes(t);
    t = t.replace(RX.multipleSpaces, ' ');
    // TODO(sorvell): ad hoc; make selector include only after last ;
    // helps with mixin syntax
    t = t.substring(t.lastIndexOf(';') + 1);
    var s = node['parsedSelector'] = node['selector'] = t.trim();
    node['atRule'] = s.indexOf(AT_START) === 0;
    // note, support a subset of rule types...
    if (node['atRule']) {
      if (s.indexOf(MEDIA_START) === 0) {
        node['type'] = types.MEDIA_RULE;
      } else if (s.match(RX.keyframesRule)) {
        node['type'] = types.KEYFRAMES_RULE;
        node['keyframesName'] = node['selector'].split(RX.multipleSpaces).pop();
      }
    } else {
      if (s.indexOf(VAR_START) === 0) {
        node['type'] = types.MIXIN_RULE;
      } else {
        node['type'] = types.STYLE_RULE;
      }
    }
  }
  var r$ = node['rules'];
  if (r$) {
    for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
      parseCss(r, text);
    }
  }
  return node;
}

/**
 * conversion of sort unicode escapes with spaces like `\33 ` (and longer) into
 * expanded form that doesn't require trailing space `\000033`
 * @param {string} s
 * @return {string}
 */
function _expandUnicodeEscapes(s) {
  return s.replace(/\\([0-9a-f]{1,6})\s/gi, function () {
    var code = arguments[1],
        repeat = 6 - code.length;
    while (repeat--) {
      code = '0' + code;
    }
    return '\\' + code;
  });
}

/**
 * stringify parsed css.
 * @param {StyleNode} node
 * @param {boolean=} preserveProperties
 * @param {string=} text
 * @return {string}
 */
function stringify(node, preserveProperties) {
  var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  // calc rule cssText
  var cssText = '';
  if (node['cssText'] || node['rules']) {
    var r$ = node['rules'];
    if (r$ && !_hasMixinRules(r$)) {
      for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
        cssText = stringify(r, preserveProperties, cssText);
      }
    } else {
      cssText = preserveProperties ? node['cssText'] : removeCustomProps(node['cssText']);
      cssText = cssText.trim();
      if (cssText) {
        cssText = '  ' + cssText + '\n';
      }
    }
  }
  // emit rule if there is cssText
  if (cssText) {
    if (node['selector']) {
      text += node['selector'] + ' ' + OPEN_BRACE + '\n';
    }
    text += cssText;
    if (node['selector']) {
      text += CLOSE_BRACE + '\n\n';
    }
  }
  return text;
}

/**
 * @param {Array<StyleNode>} rules
 * @return {boolean}
 */
function _hasMixinRules(rules) {
  var r = rules[0];
  return Boolean(r) && Boolean(r['selector']) && r['selector'].indexOf(VAR_START) === 0;
}

/**
 * @param {string} cssText
 * @return {string}
 */
function removeCustomProps(cssText) {
  cssText = removeCustomPropAssignment(cssText);
  return removeCustomPropApply(cssText);
}

/**
 * @param {string} cssText
 * @return {string}
 */
function removeCustomPropAssignment(cssText) {
  return cssText.replace(RX.customProp, '').replace(RX.mixinProp, '');
}

/**
 * @param {string} cssText
 * @return {string}
 */
function removeCustomPropApply(cssText) {
  return cssText.replace(RX.mixinApply, '').replace(RX.varApply, '');
}

/** @enum {number} */
var types = exports.types = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7,
  MEDIA_RULE: 4,
  MIXIN_RULE: 1000
};

var OPEN_BRACE = '{';
var CLOSE_BRACE = '}';

// helper regexp's
var RX = {
  comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
  port: /@import[^;]*;/gim,
  customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
  mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
  mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
  varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
  keyframesRule: /^@[^\s]*keyframes/,
  multipleSpaces: /\s+/g
};

var VAR_START = '--';
var MEDIA_START = '@media';
var AT_START = '@';

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toCssText = toCssText;
exports.rulesForStyle = rulesForStyle;
exports.isKeyframesSelector = isKeyframesSelector;
exports.forEachRule = forEachRule;
exports.applyCss = applyCss;
exports.createScopeStyle = createScopeStyle;
exports.applyStylePlaceHolder = applyStylePlaceHolder;
exports.applyStyle = applyStyle;
exports.isTargetedBuild = isTargetedBuild;
exports.getCssBuildType = getCssBuildType;
exports.processVariableAndFallback = processVariableAndFallback;
exports.setElementClassRaw = setElementClassRaw;
exports.getIsExtends = getIsExtends;

var _styleSettings = __webpack_require__(3);

var _cssParse = __webpack_require__(5);

var _commonRegex = __webpack_require__(14);

/**
 * @param {string|StyleNode} rules
 * @param {function(StyleNode)=} callback
 * @return {string}
 */
function toCssText(rules, callback) {
  if (!rules) {
    return '';
  }
  if (typeof rules === 'string') {
    rules = (0, _cssParse.parse)(rules);
  }
  if (callback) {
    forEachRule(rules, callback);
  }
  return (0, _cssParse.stringify)(rules, _styleSettings.nativeCssVariables);
}

/**
 * @param {HTMLStyleElement} style
 * @return {StyleNode}
 */
// eslint-disable-line no-unused-vars
function rulesForStyle(style) {
  if (!style['__cssRules'] && style.textContent) {
    style['__cssRules'] = (0, _cssParse.parse)(style.textContent);
  }
  return style['__cssRules'] || null;
}

// Tests if a rule is a keyframes selector, which looks almost exactly
// like a normal selector but is not (it has nothing to do with scoping
// for example).
/**
 * @param {StyleNode} rule
 * @return {boolean}
 */
function isKeyframesSelector(rule) {
  return Boolean(rule['parent']) && rule['parent']['type'] === _cssParse.types.KEYFRAMES_RULE;
}

/**
 * @param {StyleNode} node
 * @param {Function=} styleRuleCallback
 * @param {Function=} keyframesRuleCallback
 * @param {boolean=} onlyActiveRules
 */
function forEachRule(node, styleRuleCallback, keyframesRuleCallback, onlyActiveRules) {
  if (!node) {
    return;
  }
  var skipRules = false;
  var type = node['type'];
  if (onlyActiveRules) {
    if (type === _cssParse.types.MEDIA_RULE) {
      var matchMedia = node['selector'].match(_commonRegex.MEDIA_MATCH);
      if (matchMedia) {
        // if rule is a non matching @media rule, skip subrules
        if (!window.matchMedia(matchMedia[1]).matches) {
          skipRules = true;
        }
      }
    }
  }
  if (type === _cssParse.types.STYLE_RULE) {
    styleRuleCallback(node);
  } else if (keyframesRuleCallback && type === _cssParse.types.KEYFRAMES_RULE) {
    keyframesRuleCallback(node);
  } else if (type === _cssParse.types.MIXIN_RULE) {
    skipRules = true;
  }
  var r$ = node['rules'];
  if (r$ && !skipRules) {
    for (var i = 0, l = r$.length, r; i < l && (r = r$[i]); i++) {
      forEachRule(r, styleRuleCallback, keyframesRuleCallback, onlyActiveRules);
    }
  }
}

// add a string of cssText to the document.
/**
 * @param {string} cssText
 * @param {string} moniker
 * @param {Node} target
 * @param {Node} contextNode
 * @return {HTMLStyleElement}
 */
function applyCss(cssText, moniker, target, contextNode) {
  var style = createScopeStyle(cssText, moniker);
  applyStyle(style, target, contextNode);
  return style;
}

/**
 * @param {string} cssText
 * @param {string} moniker
 * @return {HTMLStyleElement}
 */
function createScopeStyle(cssText, moniker) {
  var style = /** @type {HTMLStyleElement} */document.createElement('style');
  if (moniker) {
    style.setAttribute('scope', moniker);
  }
  style.textContent = cssText;
  return style;
}

/**
 * Track the position of the last added style for placing placeholders
 * @type {Node}
 */
var lastHeadApplyNode = null;

// insert a comment node as a styling position placeholder.
/**
 * @param {string} moniker
 * @return {!Comment}
 */
function applyStylePlaceHolder(moniker) {
  var placeHolder = document.createComment(' Shady DOM styles for ' + moniker + ' ');
  var after = lastHeadApplyNode ? lastHeadApplyNode['nextSibling'] : null;
  var scope = document.head;
  scope.insertBefore(placeHolder, after || scope.firstChild);
  lastHeadApplyNode = placeHolder;
  return placeHolder;
}

/**
 * @param {HTMLStyleElement} style
 * @param {?Node} target
 * @param {?Node} contextNode
 */
function applyStyle(style, target, contextNode) {
  target = target || document.head;
  var after = contextNode && contextNode.nextSibling || target.firstChild;
  target.insertBefore(style, after);
  if (!lastHeadApplyNode) {
    lastHeadApplyNode = style;
  } else {
    // only update lastHeadApplyNode if the new style is inserted after the old lastHeadApplyNode
    var position = style.compareDocumentPosition(lastHeadApplyNode);
    if (position === Node.DOCUMENT_POSITION_PRECEDING) {
      lastHeadApplyNode = style;
    }
  }
}

/**
 * @param {string} buildType
 * @return {boolean}
 */
function isTargetedBuild(buildType) {
  return _styleSettings.nativeShadow ? buildType === 'shadow' : buildType === 'shady';
}

/**
 * @param {Element} element
 * @return {?string}
 */
function getCssBuildType(element) {
  return element.getAttribute('css-build');
}

/**
 * Walk from text[start] matching parens and
 * returns position of the outer end paren
 * @param {string} text
 * @param {number} start
 * @return {number}
 */
function findMatchingParen(text, start) {
  var level = 0;
  for (var i = start, l = text.length; i < l; i++) {
    if (text[i] === '(') {
      level++;
    } else if (text[i] === ')') {
      if (--level === 0) {
        return i;
      }
    }
  }
  return -1;
}

/**
 * @param {string} str
 * @param {function(string, string, string, string)} callback
 */
function processVariableAndFallback(str, callback) {
  // find 'var('
  var start = str.indexOf('var(');
  if (start === -1) {
    // no var?, everything is prefix
    return callback(str, '', '', '');
  }
  //${prefix}var(${inner})${suffix}
  var end = findMatchingParen(str, start + 3);
  var inner = str.substring(start + 4, end);
  var prefix = str.substring(0, start);
  // suffix may have other variables
  var suffix = processVariableAndFallback(str.substring(end + 1), callback);
  var comma = inner.indexOf(',');
  // value and fallback args should be trimmed to match in property lookup
  if (comma === -1) {
    // variable, no fallback
    return callback(prefix, inner.trim(), '', suffix);
  }
  // var(${value},${fallback})
  var value = inner.substring(0, comma).trim();
  var fallback = inner.substring(comma + 1).trim();
  return callback(prefix, value, fallback, suffix);
}

/**
 * @param {Element} element
 * @param {string} value
 */
function setElementClassRaw(element, value) {
  // use native setAttribute provided by ShadyDOM when setAttribute is patched
  if (_styleSettings.nativeShadow) {
    element.setAttribute('class', value);
  } else {
    window['ShadyDOM']['nativeMethods']['setAttribute'].call(element, 'class', value);
  }
}

/**
 * @param {Element | {is: string, extends: string}} element
 * @return {{is: string, typeExtension: string}}
 */
function getIsExtends(element) {
  var localName = element['localName'];
  var is = '',
      typeExtension = '';
  /*
  NOTE: technically, this can be wrong for certain svg elements
  with `-` in the name like `<font-face>`
  */
  if (localName) {
    if (localName.indexOf('-') > -1) {
      is = localName;
    } else {
      typeExtension = localName;
      is = element.getAttribute && element.getAttribute('is') || '';
    }
  } else {
    is = /** @type {?} */element.is;
    typeExtension = /** @type {?} */element.extends;
  }
  return { is: is, typeExtension: typeExtension };
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(76);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



var _scopingShim = __webpack_require__(77);

var _scopingShim2 = _interopRequireDefault(_scopingShim);

var _styleSettings = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @const {ScopingShim} */
var scopingShim = new _scopingShim2.default();

var ApplyShim = void 0,
    CustomStyleInterface = void 0;

if (window['ShadyCSS']) {
  ApplyShim = window['ShadyCSS']['ApplyShim'];
  CustomStyleInterface = window['ShadyCSS']['CustomStyleInterface'];
}

window.ShadyCSS = {
  ScopingShim: scopingShim,
  /**
   * @param {!HTMLTemplateElement} template
   * @param {string} elementName
   * @param {string=} elementExtends
   */
  prepareTemplate: function prepareTemplate(template, elementName, elementExtends) {
    scopingShim.flushCustomStyles();
    scopingShim.prepareTemplate(template, elementName, elementExtends);
  },


  /**
   * @param {!HTMLElement} element
   * @param {Object=} properties
   */
  styleSubtree: function styleSubtree(element, properties) {
    scopingShim.flushCustomStyles();
    scopingShim.styleSubtree(element, properties);
  },


  /**
   * @param {!HTMLElement} element
   */
  styleElement: function styleElement(element) {
    scopingShim.flushCustomStyles();
    scopingShim.styleElement(element);
  },


  /**
   * @param {Object=} properties
   */
  styleDocument: function styleDocument(properties) {
    scopingShim.flushCustomStyles();
    scopingShim.styleDocument(properties);
  },


  /**
   * @param {Element} element
   * @param {string} property
   * @return {string}
   */
  getComputedStyleValue: function getComputedStyleValue(element, property) {
    return scopingShim.getComputedStyleValue(element, property);
  },


  nativeCss: _styleSettings.nativeCssVariables,

  nativeShadow: _styleSettings.nativeShadow
};

if (ApplyShim) {
  window.ShadyCSS.ApplyShim = ApplyShim;
}

if (CustomStyleInterface) {
  window.ShadyCSS.CustomStyleInterface = CustomStyleInterface;
}

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cssParse = __webpack_require__(5);

var _styleSettings = __webpack_require__(3);

var _styleTransformer = __webpack_require__(13);

var _styleTransformer2 = _interopRequireDefault(_styleTransformer);

var _styleUtil = __webpack_require__(6);

var StyleUtil = _interopRequireWildcard(_styleUtil);

var _styleProperties = __webpack_require__(78);

var _styleProperties2 = _interopRequireDefault(_styleProperties);

var _stylePlaceholder = __webpack_require__(79);

var _stylePlaceholder2 = _interopRequireDefault(_stylePlaceholder);

var _styleInfo = __webpack_require__(28);

var _styleInfo2 = _interopRequireDefault(_styleInfo);

var _styleCache = __webpack_require__(80);

var _styleCache2 = _interopRequireDefault(_styleCache);

var _documentWatcher = __webpack_require__(81);

var _templateMap = __webpack_require__(29);

var _templateMap2 = _interopRequireDefault(_templateMap);

var _applyShimUtils = __webpack_require__(82);

var ApplyShimUtils = _interopRequireWildcard(_applyShimUtils);

var _documentWait = __webpack_require__(30);

var _documentWait2 = _interopRequireDefault(_documentWait);

var _commonUtils = __webpack_require__(83);

var _customStyleInterface = __webpack_require__(84);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line no-unused-vars

/**
 * @const {StyleCache}
 */
var styleCache = new _styleCache2.default();

var ScopingShim = function () {
  function ScopingShim() {
    var _this = this;

    _classCallCheck(this, ScopingShim);

    this._scopeCounter = {};
    this._documentOwner = document.documentElement;
    var ast = new _cssParse.StyleNode();
    ast['rules'] = [];
    this._documentOwnerStyleInfo = _styleInfo2.default.set(this._documentOwner, new _styleInfo2.default(ast));
    this._elementsHaveApplied = false;
    this._applyShim = null;
    /** @type {?CustomStyleInterfaceInterface} */
    this._customStyleInterface = null;
    (0, _documentWait2.default)(function () {
      _this._ensure();
    });
  }

  _createClass(ScopingShim, [{
    key: 'flush',
    value: function flush() {
      (0, _documentWatcher.flush)();
    }
  }, {
    key: '_generateScopeSelector',
    value: function _generateScopeSelector(name) {
      var id = this._scopeCounter[name] = (this._scopeCounter[name] || 0) + 1;
      return name + '-' + id;
    }
  }, {
    key: 'getStyleAst',
    value: function getStyleAst(style) {
      return StyleUtil.rulesForStyle(style);
    }
  }, {
    key: 'styleAstToString',
    value: function styleAstToString(ast) {
      return StyleUtil.toCssText(ast);
    }
  }, {
    key: '_gatherStyles',
    value: function _gatherStyles(template) {
      var styles = template.content.querySelectorAll('style');
      var cssText = [];
      for (var i = 0; i < styles.length; i++) {
        var s = styles[i];
        cssText.push(s.textContent);
        s.parentNode.removeChild(s);
      }
      return cssText.join('').trim();
    }
  }, {
    key: '_getCssBuild',
    value: function _getCssBuild(template) {
      var style = template.content.querySelector('style');
      if (!style) {
        return '';
      }
      return style.getAttribute('css-build') || '';
    }
    /**
     * Prepare the styling and template for the given element type
     *
     * @param {HTMLTemplateElement} template
     * @param {string} elementName
     * @param {string=} typeExtension
     */

  }, {
    key: 'prepareTemplate',
    value: function prepareTemplate(template, elementName, typeExtension) {
      if (template._prepared) {
        return;
      }
      template._prepared = true;
      template.name = elementName;
      template.extends = typeExtension;
      _templateMap2.default[elementName] = template;
      var cssBuild = this._getCssBuild(template);
      var cssText = this._gatherStyles(template);
      var info = {
        is: elementName,
        extends: typeExtension,
        __cssBuild: cssBuild
      };
      if (!_styleSettings.nativeShadow) {
        _styleTransformer2.default.dom(template.content, elementName);
      }
      // check if the styling has mixin definitions or uses
      this._ensure();
      var hasMixins = (0, _commonUtils.detectMixin)(cssText);
      var ast = (0, _cssParse.parse)(cssText);
      // only run the applyshim transforms if there is a mixin involved
      if (hasMixins && _styleSettings.nativeCssVariables && this._applyShim) {
        this._applyShim['transformRules'](ast, elementName);
      }
      template['_styleAst'] = ast;
      template._cssBuild = cssBuild;

      var ownPropertyNames = [];
      if (!_styleSettings.nativeCssVariables) {
        ownPropertyNames = _styleProperties2.default.decorateStyles(template['_styleAst'], info);
      }
      if (!ownPropertyNames.length || _styleSettings.nativeCssVariables) {
        var root = _styleSettings.nativeShadow ? template.content : null;
        var placeholder = _stylePlaceholder2.default[elementName];
        var style = this._generateStaticStyle(info, template['_styleAst'], root, placeholder);
        template._style = style;
      }
      template._ownPropertyNames = ownPropertyNames;
    }
  }, {
    key: '_generateStaticStyle',
    value: function _generateStaticStyle(info, rules, shadowroot, placeholder) {
      var cssText = _styleTransformer2.default.elementStyles(info, rules);
      if (cssText.length) {
        return StyleUtil.applyCss(cssText, info.is, shadowroot, placeholder);
      }
    }
  }, {
    key: '_prepareHost',
    value: function _prepareHost(host) {
      var _StyleUtil$getIsExten = StyleUtil.getIsExtends(host),
          is = _StyleUtil$getIsExten.is,
          typeExtension = _StyleUtil$getIsExten.typeExtension;

      var placeholder = _stylePlaceholder2.default[is];
      var template = _templateMap2.default[is];
      var ast = void 0;
      var ownStylePropertyNames = void 0;
      var cssBuild = void 0;
      if (template) {
        ast = template['_styleAst'];
        ownStylePropertyNames = template._ownPropertyNames;
        cssBuild = template._cssBuild;
      }
      return _styleInfo2.default.set(host, new _styleInfo2.default(ast, placeholder, ownStylePropertyNames, is, typeExtension, cssBuild));
    }
  }, {
    key: '_ensureApplyShim',
    value: function _ensureApplyShim() {
      if (this._applyShim) {
        return;
      } else if (window.ShadyCSS && window.ShadyCSS.ApplyShim) {
        this._applyShim = window.ShadyCSS.ApplyShim;
        this._applyShim['invalidCallback'] = ApplyShimUtils.invalidate;
      }
    }
  }, {
    key: '_ensureCustomStyleInterface',
    value: function _ensureCustomStyleInterface() {
      var _this2 = this;

      if (this._customStyleInterface) {
        return;
      } else if (window.ShadyCSS && window.ShadyCSS.CustomStyleInterface) {
        this._customStyleInterface = /** @type {!CustomStyleInterfaceInterface} */window.ShadyCSS.CustomStyleInterface;
        /** @type {function(!HTMLStyleElement)} */
        this._customStyleInterface['transformCallback'] = function (style) {
          _this2.transformCustomStyleForDocument(style);
        };
        this._customStyleInterface['validateCallback'] = function () {
          requestAnimationFrame(function () {
            if (_this2._customStyleInterface['enqueued'] || _this2._elementsHaveApplied) {
              _this2.flushCustomStyles();
            }
          });
        };
      }
    }
  }, {
    key: '_ensure',
    value: function _ensure() {
      this._ensureApplyShim();
      this._ensureCustomStyleInterface();
    }
    /**
     * Flush and apply custom styles to document
     */

  }, {
    key: 'flushCustomStyles',
    value: function flushCustomStyles() {
      this._ensure();
      if (!this._customStyleInterface) {
        return;
      }
      var customStyles = this._customStyleInterface['processStyles']();
      // early return if custom-styles don't need validation
      if (!this._customStyleInterface['enqueued']) {
        return;
      }
      if (!_styleSettings.nativeCssVariables) {
        this._updateProperties(this._documentOwner, this._documentOwnerStyleInfo);
        this._applyCustomStyles(customStyles);
      } else {
        this._revalidateCustomStyleApplyShim(customStyles);
      }
      this._customStyleInterface['enqueued'] = false;
      // if custom elements have upgraded and there are no native css variables, we must recalculate the whole tree
      if (this._elementsHaveApplied && !_styleSettings.nativeCssVariables) {
        this.styleDocument();
      }
    }
    /**
     * Apply styles for the given element
     *
     * @param {!HTMLElement} host
     * @param {Object=} overrideProps
     */

  }, {
    key: 'styleElement',
    value: function styleElement(host, overrideProps) {
      var _StyleUtil$getIsExten2 = StyleUtil.getIsExtends(host),
          is = _StyleUtil$getIsExten2.is;

      var styleInfo = _styleInfo2.default.get(host);
      if (!styleInfo) {
        styleInfo = this._prepareHost(host);
      }
      // Only trip the `elementsHaveApplied` flag if a node other that the root document has `applyStyle` called
      if (!this._isRootOwner(host)) {
        this._elementsHaveApplied = true;
      }
      if (overrideProps) {
        styleInfo.overrideStyleProperties = styleInfo.overrideStyleProperties || {};
        Object.assign(styleInfo.overrideStyleProperties, overrideProps);
      }
      if (!_styleSettings.nativeCssVariables) {
        this._updateProperties(host, styleInfo);
        if (styleInfo.ownStylePropertyNames && styleInfo.ownStylePropertyNames.length) {
          this._applyStyleProperties(host, styleInfo);
        }
      } else {
        if (styleInfo.overrideStyleProperties) {
          (0, _commonUtils.updateNativeProperties)(host, styleInfo.overrideStyleProperties);
        }
        var template = _templateMap2.default[is];
        // bail early if there is no shadowroot for this element
        if (!template && !this._isRootOwner(host)) {
          return;
        }
        if (template && template._style && !ApplyShimUtils.templateIsValid(template)) {
          // update template
          if (!ApplyShimUtils.templateIsValidating(template)) {
            this._ensure();
            this._applyShim && this._applyShim['transformRules'](template['_styleAst'], is);
            template._style.textContent = _styleTransformer2.default.elementStyles(host, styleInfo.styleRules);
            ApplyShimUtils.startValidatingTemplate(template);
          }
          // update instance if native shadowdom
          if (_styleSettings.nativeShadow) {
            var root = host.shadowRoot;
            if (root) {
              var style = root.querySelector('style');
              style.textContent = _styleTransformer2.default.elementStyles(host, styleInfo.styleRules);
            }
          }
          styleInfo.styleRules = template['_styleAst'];
        }
      }
    }
  }, {
    key: '_styleOwnerForNode',
    value: function _styleOwnerForNode(node) {
      var root = node.getRootNode();
      var host = root.host;
      if (host) {
        if (_styleInfo2.default.get(host)) {
          return host;
        } else {
          return this._styleOwnerForNode(host);
        }
      }
      return this._documentOwner;
    }
  }, {
    key: '_isRootOwner',
    value: function _isRootOwner(node) {
      return node === this._documentOwner;
    }
  }, {
    key: '_applyStyleProperties',
    value: function _applyStyleProperties(host, styleInfo) {
      var is = StyleUtil.getIsExtends(host).is;
      var cacheEntry = styleCache.fetch(is, styleInfo.styleProperties, styleInfo.ownStylePropertyNames);
      var cachedScopeSelector = cacheEntry && cacheEntry.scopeSelector;
      var cachedStyle = cacheEntry ? cacheEntry.styleElement : null;
      var oldScopeSelector = styleInfo.scopeSelector;
      // only generate new scope if cached style is not found
      styleInfo.scopeSelector = cachedScopeSelector || this._generateScopeSelector(is);
      var style = _styleProperties2.default.applyElementStyle(host, styleInfo.styleProperties, styleInfo.scopeSelector, cachedStyle);
      if (!_styleSettings.nativeShadow) {
        _styleProperties2.default.applyElementScopeSelector(host, styleInfo.scopeSelector, oldScopeSelector);
      }
      if (!cacheEntry) {
        styleCache.store(is, styleInfo.styleProperties, style, styleInfo.scopeSelector);
      }
      return style;
    }
  }, {
    key: '_updateProperties',
    value: function _updateProperties(host, styleInfo) {
      var owner = this._styleOwnerForNode(host);
      var ownerStyleInfo = _styleInfo2.default.get(owner);
      var ownerProperties = ownerStyleInfo.styleProperties;
      var props = Object.create(ownerProperties || null);
      var hostAndRootProps = _styleProperties2.default.hostAndRootPropertiesForScope(host, styleInfo.styleRules);
      var propertyData = _styleProperties2.default.propertyDataFromStyles(ownerStyleInfo.styleRules, host);
      var propertiesMatchingHost = propertyData.properties;
      Object.assign(props, hostAndRootProps.hostProps, propertiesMatchingHost, hostAndRootProps.rootProps);
      this._mixinOverrideStyles(props, styleInfo.overrideStyleProperties);
      _styleProperties2.default.reify(props);
      styleInfo.styleProperties = props;
    }
  }, {
    key: '_mixinOverrideStyles',
    value: function _mixinOverrideStyles(props, overrides) {
      for (var p in overrides) {
        var v = overrides[p];
        // skip override props if they are not truthy or 0
        // in order to fall back to inherited values
        if (v || v === 0) {
          props[p] = v;
        }
      }
    }
    /**
     * Update styles of the whole document
     *
     * @param {Object=} properties
     */

  }, {
    key: 'styleDocument',
    value: function styleDocument(properties) {
      this.styleSubtree(this._documentOwner, properties);
    }
    /**
     * Update styles of a subtree
     *
     * @param {!HTMLElement} host
     * @param {Object=} properties
     */

  }, {
    key: 'styleSubtree',
    value: function styleSubtree(host, properties) {
      var root = host.shadowRoot;
      if (root || this._isRootOwner(host)) {
        this.styleElement(host, properties);
      }
      // process the shadowdom children of `host`
      var shadowChildren = root && (root.children || root.childNodes);
      if (shadowChildren) {
        for (var i = 0; i < shadowChildren.length; i++) {
          var c = /** @type {!HTMLElement} */shadowChildren[i];
          this.styleSubtree(c);
        }
      } else {
        // process the lightdom children of `host`
        var children = host.children || host.childNodes;
        if (children) {
          for (var _i = 0; _i < children.length; _i++) {
            var _c = /** @type {!HTMLElement} */children[_i];
            this.styleSubtree(_c);
          }
        }
      }
    }
    /* Custom Style operations */

  }, {
    key: '_revalidateCustomStyleApplyShim',
    value: function _revalidateCustomStyleApplyShim(customStyles) {
      for (var i = 0; i < customStyles.length; i++) {
        var c = customStyles[i];
        var s = this._customStyleInterface['getStyleForCustomStyle'](c);
        if (s) {
          this._revalidateApplyShim(s);
        }
      }
    }
  }, {
    key: '_applyCustomStyles',
    value: function _applyCustomStyles(customStyles) {
      for (var i = 0; i < customStyles.length; i++) {
        var c = customStyles[i];
        var s = this._customStyleInterface['getStyleForCustomStyle'](c);
        if (s) {
          _styleProperties2.default.applyCustomStyle(s, this._documentOwnerStyleInfo.styleProperties);
        }
      }
    }
  }, {
    key: 'transformCustomStyleForDocument',
    value: function transformCustomStyleForDocument(style) {
      var _this3 = this;

      var ast = StyleUtil.rulesForStyle(style);
      StyleUtil.forEachRule(ast, function (rule) {
        if (_styleSettings.nativeShadow) {
          _styleTransformer2.default.normalizeRootSelector(rule);
        } else {
          _styleTransformer2.default.documentRule(rule);
        }
        if (_styleSettings.nativeCssVariables) {
          _this3._ensure();
          _this3._applyShim && _this3._applyShim['transformRule'](rule);
        }
      });
      if (_styleSettings.nativeCssVariables) {
        style.textContent = StyleUtil.toCssText(ast);
      } else {
        this._documentOwnerStyleInfo.styleRules.rules.push(ast);
      }
    }
  }, {
    key: '_revalidateApplyShim',
    value: function _revalidateApplyShim(style) {
      if (_styleSettings.nativeCssVariables && this._applyShim) {
        var ast = StyleUtil.rulesForStyle(style);
        this._ensure();
        this._applyShim['transformRules'](ast);
        style.textContent = StyleUtil.toCssText(ast);
      }
    }
  }, {
    key: 'getComputedStyleValue',
    value: function getComputedStyleValue(element, property) {
      var value = void 0;
      if (!_styleSettings.nativeCssVariables) {
        // element is either a style host, or an ancestor of a style host
        var styleInfo = _styleInfo2.default.get(element) || _styleInfo2.default.get(this._styleOwnerForNode(element));
        value = styleInfo.styleProperties[property];
      }
      // fall back to the property value from the computed styling
      value = value || window.getComputedStyle(element).getPropertyValue(property);
      // trim whitespace that can come after the `:` in css
      // example: padding: 2px -> " 2px"
      return value ? value.trim() : '';
    }
    // given an element and a classString, replaces
    // the element's class with the provided classString and adds
    // any necessary ShadyCSS static and property based scoping selectors

  }, {
    key: 'setElementClass',
    value: function setElementClass(element, classString) {
      var root = element.getRootNode();
      var classes = classString ? classString.split(/\s/) : [];
      var scopeName = root.host && root.host.localName;
      // If no scope, try to discover scope name from existing class.
      // This can occur if, for example, a template stamped element that
      // has been scoped is manipulated when not in a root.
      if (!scopeName) {
        var classAttr = element.getAttribute('class');
        if (classAttr) {
          var k$ = classAttr.split(/\s/);
          for (var i = 0; i < k$.length; i++) {
            if (k$[i] === _styleTransformer2.default.SCOPE_NAME) {
              scopeName = k$[i + 1];
              break;
            }
          }
        }
      }
      if (scopeName) {
        classes.push(_styleTransformer2.default.SCOPE_NAME, scopeName);
      }
      if (!_styleSettings.nativeCssVariables) {
        var styleInfo = _styleInfo2.default.get(element);
        if (styleInfo && styleInfo.scopeSelector) {
          classes.push(_styleProperties2.default.XSCOPE_NAME, styleInfo.scopeSelector);
        }
      }
      StyleUtil.setElementClassRaw(element, classes.join(' '));
    }
  }, {
    key: '_styleInfoForNode',
    value: function _styleInfoForNode(node) {
      return _styleInfo2.default.get(node);
    }
  }]);

  return ScopingShim;
}();

/* exports */


exports.default = ScopingShim;
ScopingShim.prototype['flush'] = ScopingShim.prototype.flush;
ScopingShim.prototype['prepareTemplate'] = ScopingShim.prototype.prepareTemplate;
ScopingShim.prototype['styleElement'] = ScopingShim.prototype.styleElement;
ScopingShim.prototype['styleDocument'] = ScopingShim.prototype.styleDocument;
ScopingShim.prototype['styleSubtree'] = ScopingShim.prototype.styleSubtree;
ScopingShim.prototype['getComputedStyleValue'] = ScopingShim.prototype.getComputedStyleValue;
ScopingShim.prototype['setElementClass'] = ScopingShim.prototype.setElementClass;
ScopingShim.prototype['_styleInfoForNode'] = ScopingShim.prototype._styleInfoForNode;
ScopingShim.prototype['transformCustomStyleForDocument'] = ScopingShim.prototype.transformCustomStyleForDocument;
ScopingShim.prototype['getStyleAst'] = ScopingShim.prototype.getStyleAst;
ScopingShim.prototype['styleAstToString'] = ScopingShim.prototype.styleAstToString;
ScopingShim.prototype['flushCustomStyles'] = ScopingShim.prototype.flushCustomStyles;
Object.defineProperties(ScopingShim.prototype, {
  'nativeShadow': {
    get: function get() {
      return _styleSettings.nativeShadow;
    }
  },
  'nativeCss': {
    get: function get() {
      return _styleSettings.nativeCssVariables;
    }
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // eslint-disable-line no-unused-vars


var _cssParse = __webpack_require__(5);

var _styleSettings = __webpack_require__(3);

var _styleTransformer = __webpack_require__(13);

var _styleTransformer2 = _interopRequireDefault(_styleTransformer);

var _styleUtil = __webpack_require__(6);

var StyleUtil = _interopRequireWildcard(_styleUtil);

var _commonRegex = __webpack_require__(14);

var RX = _interopRequireWildcard(_commonRegex);

var _styleInfo = __webpack_require__(28);

var _styleInfo2 = _interopRequireDefault(_styleInfo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: dedupe with shady
/**
 * @const {function(string):boolean}
 */
var matchesSelector = function (p) {
  return p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
}(window.Element.prototype);

var IS_IE = navigator.userAgent.match('Trident');

var XSCOPE_NAME = 'x-scope';

var StyleProperties = function () {
  function StyleProperties() {
    _classCallCheck(this, StyleProperties);
  }

  _createClass(StyleProperties, [{
    key: 'decorateStyles',

    /**
     * decorates styles with rule info and returns an array of used style property names
     *
     * @param {StyleNode} rules
     * @return {Array<string>}
     */
    value: function decorateStyles(rules) {
      var self = this,
          props = {},
          keyframes = [],
          ruleIndex = 0;
      StyleUtil.forEachRule(rules, function (rule) {
        self.decorateRule(rule);
        // mark in-order position of ast rule in styles block, used for cache key
        rule.index = ruleIndex++;
        self.collectPropertiesInCssText(rule.propertyInfo.cssText, props);
      }, function onKeyframesRule(rule) {
        keyframes.push(rule);
      });
      // Cache all found keyframes rules for later reference:
      rules._keyframes = keyframes;
      // return this list of property names *consumes* in these styles.
      var names = [];
      for (var i in props) {
        names.push(i);
      }
      return names;
    }

    // decorate a single rule with property info

  }, {
    key: 'decorateRule',
    value: function decorateRule(rule) {
      if (rule.propertyInfo) {
        return rule.propertyInfo;
      }
      var info = {},
          properties = {};
      var hasProperties = this.collectProperties(rule, properties);
      if (hasProperties) {
        info.properties = properties;
        // TODO(sorvell): workaround parser seeing mixins as additional rules
        rule['rules'] = null;
      }
      info.cssText = this.collectCssText(rule);
      rule.propertyInfo = info;
      return info;
    }

    // collects the custom properties from a rule's cssText

  }, {
    key: 'collectProperties',
    value: function collectProperties(rule, properties) {
      var info = rule.propertyInfo;
      if (info) {
        if (info.properties) {
          Object.assign(properties, info.properties);
          return true;
        }
      } else {
        var m = void 0,
            rx = RX.VAR_ASSIGN;
        var cssText = rule['parsedCssText'];
        var value = void 0;
        var any = void 0;
        while (m = rx.exec(cssText)) {
          // note: group 2 is var, 3 is mixin
          value = (m[2] || m[3]).trim();
          // value of 'inherit' or 'unset' is equivalent to not setting the property here
          if (value !== 'inherit' || value !== 'unset') {
            properties[m[1].trim()] = value;
          }
          any = true;
        }
        return any;
      }
    }

    // returns cssText of properties that consume variables/mixins

  }, {
    key: 'collectCssText',
    value: function collectCssText(rule) {
      return this.collectConsumingCssText(rule['parsedCssText']);
    }

    // NOTE: we support consumption inside mixin assignment
    // but not production, so strip out {...}

  }, {
    key: 'collectConsumingCssText',
    value: function collectConsumingCssText(cssText) {
      return cssText.replace(RX.BRACKETED, '').replace(RX.VAR_ASSIGN, '');
    }
  }, {
    key: 'collectPropertiesInCssText',
    value: function collectPropertiesInCssText(cssText, props) {
      var m = void 0;
      while (m = RX.VAR_CONSUMED.exec(cssText)) {
        var name = m[1];
        // This regex catches all variable names, and following non-whitespace char
        // If next char is not ':', then variable is a consumer
        if (m[2] !== ':') {
          props[name] = true;
        }
      }
    }

    // turns custom properties into realized values.

  }, {
    key: 'reify',
    value: function reify(props) {
      // big perf optimization here: reify only *own* properties
      // since this object has __proto__ of the element's scope properties
      var names = Object.getOwnPropertyNames(props);
      for (var i = 0, n; i < names.length; i++) {
        n = names[i];
        props[n] = this.valueForProperty(props[n], props);
      }
    }

    // given a property value, returns the reified value
    // a property value may be:
    // (1) a literal value like: red or 5px;
    // (2) a variable value like: var(--a), var(--a, red), or var(--a, --b) or
    // var(--a, var(--b));
    // (3) a literal mixin value like { properties }. Each of these properties
    // can have values that are: (a) literal, (b) variables, (c) @apply mixins.

  }, {
    key: 'valueForProperty',
    value: function valueForProperty(property, props) {
      // case (1) default
      // case (3) defines a mixin and we have to reify the internals
      if (property) {
        if (property.indexOf(';') >= 0) {
          property = this.valueForProperties(property, props);
        } else {
          // case (2) variable
          var self = this;
          var fn = function fn(prefix, value, fallback, suffix) {
            if (!value) {
              return prefix + suffix;
            }
            var propertyValue = self.valueForProperty(props[value], props);
            // if value is "initial", then the variable should be treated as unset
            if (!propertyValue || propertyValue === 'initial') {
              // fallback may be --a or var(--a) or literal
              propertyValue = self.valueForProperty(props[fallback] || fallback, props) || fallback;
            } else if (propertyValue === 'apply-shim-inherit') {
              // CSS build will replace `inherit` with `apply-shim-inherit`
              // for use with native css variables.
              // Since we have full control, we can use `inherit` directly.
              propertyValue = 'inherit';
            }
            return prefix + (propertyValue || '') + suffix;
          };
          property = StyleUtil.processVariableAndFallback(property, fn);
        }
      }
      return property && property.trim() || '';
    }

    // note: we do not yet support mixin within mixin

  }, {
    key: 'valueForProperties',
    value: function valueForProperties(property, props) {
      var parts = property.split(';');
      for (var i = 0, p, m; i < parts.length; i++) {
        if (p = parts[i]) {
          RX.MIXIN_MATCH.lastIndex = 0;
          m = RX.MIXIN_MATCH.exec(p);
          if (m) {
            p = this.valueForProperty(props[m[1]], props);
          } else {
            var colon = p.indexOf(':');
            if (colon !== -1) {
              var pp = p.substring(colon);
              pp = pp.trim();
              pp = this.valueForProperty(pp, props) || pp;
              p = p.substring(0, colon) + pp;
            }
          }
          parts[i] = p && p.lastIndexOf(';') === p.length - 1 ?
          // strip trailing ;
          p.slice(0, -1) : p || '';
        }
      }
      return parts.join(';');
    }
  }, {
    key: 'applyProperties',
    value: function applyProperties(rule, props) {
      var output = '';
      // dynamically added sheets may not be decorated so ensure they are.
      if (!rule.propertyInfo) {
        this.decorateRule(rule);
      }
      if (rule.propertyInfo.cssText) {
        output = this.valueForProperties(rule.propertyInfo.cssText, props);
      }
      rule['cssText'] = output;
    }

    // Apply keyframe transformations to the cssText of a given rule. The
    // keyframeTransforms object is a map of keyframe names to transformer
    // functions which take in cssText and spit out transformed cssText.

  }, {
    key: 'applyKeyframeTransforms',
    value: function applyKeyframeTransforms(rule, keyframeTransforms) {
      var input = rule['cssText'];
      var output = rule['cssText'];
      if (rule.hasAnimations == null) {
        // Cache whether or not the rule has any animations to begin with:
        rule.hasAnimations = RX.ANIMATION_MATCH.test(input);
      }
      // If there are no animations referenced, we can skip transforms:
      if (rule.hasAnimations) {
        var transform = void 0;
        // If we haven't transformed this rule before, we iterate over all
        // transforms:
        if (rule.keyframeNamesToTransform == null) {
          rule.keyframeNamesToTransform = [];
          for (var keyframe in keyframeTransforms) {
            transform = keyframeTransforms[keyframe];
            output = transform(input);
            // If the transform actually changed the CSS text, we cache the
            // transform name for future use:
            if (input !== output) {
              input = output;
              rule.keyframeNamesToTransform.push(keyframe);
            }
          }
        } else {
          // If we already have a list of keyframe names that apply to this
          // rule, we apply only those keyframe name transforms:
          for (var i = 0; i < rule.keyframeNamesToTransform.length; ++i) {
            transform = keyframeTransforms[rule.keyframeNamesToTransform[i]];
            input = transform(input);
          }
          output = input;
        }
      }
      rule['cssText'] = output;
    }

    // Test if the rules in these styles matches the given `element` and if so,
    // collect any custom properties into `props`.
    /**
     * @param {StyleNode} rules
     * @param {Element} element
     */

  }, {
    key: 'propertyDataFromStyles',
    value: function propertyDataFromStyles(rules, element) {
      var props = {},
          self = this;
      // generates a unique key for these matches
      var o = [];
      // note: active rules excludes non-matching @media rules
      StyleUtil.forEachRule(rules, function (rule) {
        // TODO(sorvell): we could trim the set of rules at declaration
        // time to only include ones that have properties
        if (!rule.propertyInfo) {
          self.decorateRule(rule);
        }
        // match element against transformedSelector: selector may contain
        // unwanted uniquification and parsedSelector does not directly match
        // for :host selectors.
        var selectorToMatch = rule.transformedSelector || rule['parsedSelector'];
        if (element && rule.propertyInfo.properties && selectorToMatch) {
          if (matchesSelector.call(element, selectorToMatch)) {
            self.collectProperties(rule, props);
            // produce numeric key for these matches for lookup
            addToBitMask(rule.index, o);
          }
        }
      }, null, true);
      return { properties: props, key: o };
    }

    /**
     * @param {Element} scope
     * @param {StyleNode} rule
     * @param {string|undefined} cssBuild
     * @param {function(Object)} callback
     */

  }, {
    key: 'whenHostOrRootRule',
    value: function whenHostOrRootRule(scope, rule, cssBuild, callback) {
      if (!rule.propertyInfo) {
        this.decorateRule(rule);
      }
      if (!rule.propertyInfo.properties) {
        return;
      }

      var _StyleUtil$getIsExten = StyleUtil.getIsExtends(scope),
          is = _StyleUtil$getIsExten.is,
          typeExtension = _StyleUtil$getIsExten.typeExtension;

      var hostScope = is ? _styleTransformer2.default._calcHostScope(is, typeExtension) : 'html';
      var parsedSelector = rule['parsedSelector'];
      var isRoot = parsedSelector === ':host > *' || parsedSelector === 'html';
      var isHost = parsedSelector.indexOf(':host') === 0 && !isRoot;
      // build info is either in scope (when scope is an element) or in the style
      // when scope is the default scope; note: this allows default scope to have
      // mixed mode built and unbuilt styles.
      if (cssBuild === 'shady') {
        // :root -> x-foo > *.x-foo for elements and html for custom-style
        isRoot = parsedSelector === hostScope + ' > *.' + hostScope || parsedSelector.indexOf('html') !== -1;
        // :host -> x-foo for elements, but sub-rules have .x-foo in them
        isHost = !isRoot && parsedSelector.indexOf(hostScope) === 0;
      }
      if (cssBuild === 'shadow') {
        isRoot = parsedSelector === ':host > *' || parsedSelector === 'html';
        isHost = isHost && !isRoot;
      }
      if (!isRoot && !isHost) {
        return;
      }
      var selectorToMatch = hostScope;
      if (isHost) {
        // need to transform :host under ShadowDOM because `:host` does not work with `matches`
        if (_styleSettings.nativeShadow && !rule.transformedSelector) {
          // transform :host into a matchable selector
          rule.transformedSelector = _styleTransformer2.default._transformRuleCss(rule, _styleTransformer2.default._transformComplexSelector, _styleTransformer2.default._calcElementScope(is), hostScope);
        }
        selectorToMatch = rule.transformedSelector || hostScope;
      }
      callback({
        selector: selectorToMatch,
        isHost: isHost,
        isRoot: isRoot
      });
    }
    /**
     * @param {Element} scope
     * @param {StyleNode} rules
     * @return {Object}
     */

  }, {
    key: 'hostAndRootPropertiesForScope',
    value: function hostAndRootPropertiesForScope(scope, rules) {
      var hostProps = {},
          rootProps = {},
          self = this;
      // note: active rules excludes non-matching @media rules
      var cssBuild = rules && rules['__cssBuild'];
      StyleUtil.forEachRule(rules, function (rule) {
        // if scope is StyleDefaults, use _element for matchesSelector
        self.whenHostOrRootRule(scope, rule, cssBuild, function (info) {
          var element = scope._element || scope;
          if (matchesSelector.call(element, info.selector)) {
            if (info.isHost) {
              self.collectProperties(rule, hostProps);
            } else {
              self.collectProperties(rule, rootProps);
            }
          }
        });
      }, null, true);
      return { rootProps: rootProps, hostProps: hostProps };
    }

    /**
     * @param {Element} element
     * @param {Object} properties
     * @param {string} scopeSelector
     */

  }, {
    key: 'transformStyles',
    value: function transformStyles(element, properties, scopeSelector) {
      var self = this;

      var _StyleUtil$getIsExten2 = StyleUtil.getIsExtends(element),
          is = _StyleUtil$getIsExten2.is,
          typeExtension = _StyleUtil$getIsExten2.typeExtension;

      var hostSelector = _styleTransformer2.default._calcHostScope(is, typeExtension);
      var rxHostSelector = element.extends ? '\\' + hostSelector.slice(0, -1) + '\\]' : hostSelector;
      var hostRx = new RegExp(RX.HOST_PREFIX + rxHostSelector + RX.HOST_SUFFIX);
      var rules = _styleInfo2.default.get(element).styleRules;
      var keyframeTransforms = this._elementKeyframeTransforms(element, rules, scopeSelector);
      return _styleTransformer2.default.elementStyles(element, rules, function (rule) {
        self.applyProperties(rule, properties);
        if (!_styleSettings.nativeShadow && !StyleUtil.isKeyframesSelector(rule) && rule['cssText']) {
          // NOTE: keyframe transforms only scope munge animation names, so it
          // is not necessary to apply them in ShadowDOM.
          self.applyKeyframeTransforms(rule, keyframeTransforms);
          self._scopeSelector(rule, hostRx, hostSelector, scopeSelector);
        }
      });
    }

    /**
     * @param {Element} element
     * @param {StyleNode} rules
     * @param {string} scopeSelector
     * @return {Object}
     */

  }, {
    key: '_elementKeyframeTransforms',
    value: function _elementKeyframeTransforms(element, rules, scopeSelector) {
      var keyframesRules = rules._keyframes;
      var keyframeTransforms = {};
      if (!_styleSettings.nativeShadow && keyframesRules) {
        // For non-ShadowDOM, we transform all known keyframes rules in
        // advance for the current scope. This allows us to catch keyframes
        // rules that appear anywhere in the stylesheet:
        for (var i = 0, keyframesRule = keyframesRules[i]; i < keyframesRules.length; keyframesRule = keyframesRules[++i]) {
          this._scopeKeyframes(keyframesRule, scopeSelector);
          keyframeTransforms[keyframesRule['keyframesName']] = this._keyframesRuleTransformer(keyframesRule);
        }
      }
      return keyframeTransforms;
    }

    // Generate a factory for transforming a chunk of CSS text to handle a
    // particular scoped keyframes rule.
    /**
     * @param {StyleNode} keyframesRule
     * @return {function(string):string}
     */

  }, {
    key: '_keyframesRuleTransformer',
    value: function _keyframesRuleTransformer(keyframesRule) {
      return function (cssText) {
        return cssText.replace(keyframesRule.keyframesNameRx, keyframesRule.transformedKeyframesName);
      };
    }

    /**
     * Transforms `@keyframes` names to be unique for the current host.
     * Example: @keyframes foo-anim -> @keyframes foo-anim-x-foo-0
     *
     * @param {StyleNode} rule
     * @param {string} scopeId
     */

  }, {
    key: '_scopeKeyframes',
    value: function _scopeKeyframes(rule, scopeId) {
      rule.keyframesNameRx = new RegExp(rule['keyframesName'], 'g');
      rule.transformedKeyframesName = rule['keyframesName'] + '-' + scopeId;
      rule.transformedSelector = rule.transformedSelector || rule['selector'];
      rule['selector'] = rule.transformedSelector.replace(rule['keyframesName'], rule.transformedKeyframesName);
    }

    // Strategy: x scope shim a selector e.g. to scope `.x-foo-42` (via classes):
    // non-host selector: .a.x-foo -> .x-foo-42 .a.x-foo
    // host selector: x-foo.wide -> .x-foo-42.wide
    // note: we use only the scope class (.x-foo-42) and not the hostSelector
    // (x-foo) to scope :host rules; this helps make property host rules
    // have low specificity. They are overrideable by class selectors but,
    // unfortunately, not by type selectors (e.g. overriding via
    // `.special` is ok, but not by `x-foo`).
    /**
     * @param {StyleNode} rule
     * @param {RegExp} hostRx
     * @param {string} hostSelector
     * @param {string} scopeId
     */

  }, {
    key: '_scopeSelector',
    value: function _scopeSelector(rule, hostRx, hostSelector, scopeId) {
      rule.transformedSelector = rule.transformedSelector || rule['selector'];
      var selector = rule.transformedSelector;
      var scope = '.' + scopeId;
      var parts = selector.split(',');
      for (var i = 0, l = parts.length, p; i < l && (p = parts[i]); i++) {
        parts[i] = p.match(hostRx) ? p.replace(hostSelector, scope) : scope + ' ' + p;
      }
      rule['selector'] = parts.join(',');
    }

    /**
     * @param {Element} element
     * @param {string} selector
     * @param {string} old
     */

  }, {
    key: 'applyElementScopeSelector',
    value: function applyElementScopeSelector(element, selector, old) {
      var c = element.getAttribute('class') || '';
      var v = c;
      if (old) {
        v = c.replace(new RegExp('\\s*' + XSCOPE_NAME + '\\s*' + old + '\\s*', 'g'), ' ');
      }
      v += (v ? ' ' : '') + XSCOPE_NAME + ' ' + selector;
      if (c !== v) {
        StyleUtil.setElementClassRaw(element, v);
      }
    }

    /**
     * @param {HTMLElement} element
     * @param {Object} properties
     * @param {string} selector
     * @param {HTMLStyleElement} style
     * @return {HTMLStyleElement}
     */

  }, {
    key: 'applyElementStyle',
    value: function applyElementStyle(element, properties, selector, style) {
      // calculate cssText to apply
      var cssText = style ? style.textContent || '' : this.transformStyles(element, properties, selector);
      // if shady and we have a cached style that is not style, decrement
      var styleInfo = _styleInfo2.default.get(element);
      var s = styleInfo.customStyle;
      if (s && !_styleSettings.nativeShadow && s !== style) {
        s['_useCount']--;
        if (s['_useCount'] <= 0 && s.parentNode) {
          s.parentNode.removeChild(s);
        }
      }
      // apply styling always under native or if we generated style
      // or the cached style is not in document(!)
      if (_styleSettings.nativeShadow) {
        // update existing style only under native
        if (styleInfo.customStyle) {
          styleInfo.customStyle.textContent = cssText;
          style = styleInfo.customStyle;
          // otherwise, if we have css to apply, do so
        } else if (cssText) {
          // apply css after the scope style of the element to help with
          // style precedence rules.
          style = StyleUtil.applyCss(cssText, selector, element.shadowRoot, styleInfo.placeholder);
        }
      } else {
        // shady and no cache hit
        if (!style) {
          // apply css after the scope style of the element to help with
          // style precedence rules.
          if (cssText) {
            style = StyleUtil.applyCss(cssText, selector, null, styleInfo.placeholder);
          }
          // shady and cache hit but not in document
        } else if (!style.parentNode) {
          if (IS_IE && cssText.indexOf('@media') > -1) {
            // @media rules may be stale in IE 10 and 11
            // refresh the text content of the style to revalidate them.
            style.textContent = cssText;
          }
          StyleUtil.applyStyle(style, null, styleInfo.placeholder);
        }
      }
      // ensure this style is our custom style and increment its use count.
      if (style) {
        style['_useCount'] = style['_useCount'] || 0;
        // increment use count if we changed styles
        if (styleInfo.customStyle != style) {
          style['_useCount']++;
        }
        styleInfo.customStyle = style;
      }
      return style;
    }

    /**
     * @param {Element} style
     * @param {Object} properties
     */

  }, {
    key: 'applyCustomStyle',
    value: function applyCustomStyle(style, properties) {
      var rules = StyleUtil.rulesForStyle( /** @type {HTMLStyleElement} */style);
      var self = this;
      style.textContent = StyleUtil.toCssText(rules, function ( /** StyleNode */rule) {
        var css = rule['cssText'] = rule['parsedCssText'];
        if (rule.propertyInfo && rule.propertyInfo.cssText) {
          // remove property assignments
          // so next function isn't confused
          // NOTE: we have 3 categories of css:
          // (1) normal properties,
          // (2) custom property assignments (--foo: red;),
          // (3) custom property usage: border: var(--foo); @apply(--foo);
          // In elements, 1 and 3 are separated for efficiency; here they
          // are not and this makes this case unique.
          css = (0, _cssParse.removeCustomPropAssignment)( /** @type {string} */css);
          // replace with reified properties, scenario is same as mixin
          rule['cssText'] = self.valueForProperties(css, properties);
        }
      });
    }
  }, {
    key: 'XSCOPE_NAME',
    get: function get() {
      return XSCOPE_NAME;
    }
  }]);

  return StyleProperties;
}();

/**
 * @param {number} n
 * @param {Array<number>} bits
 */


function addToBitMask(n, bits) {
  var o = parseInt(n / 32, 10);
  var v = 1 << n % 32;
  bits[o] = (bits[o] || 0) | v;
}

exports.default = new StyleProperties();

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styleUtil = __webpack_require__(6);

var _styleSettings = __webpack_require__(3);

/** @type {Object<string, !Node>} */
var placeholderMap = {};

/**
 * @const {CustomElementRegistry}
 */
var ce = window['customElements'];
if (ce && !_styleSettings.nativeShadow) {
  /**
   * @const {function(this:CustomElementRegistry, string,function(new:HTMLElement),{extends: string}=)}
   */
  var origDefine = ce['define'];
  /**
   * @param {string} name
   * @param {function(new:HTMLElement)} clazz
   * @param {{extends: string}=} options
   * @return {function(new:HTMLElement)}
   */
  var wrappedDefine = function wrappedDefine(name, clazz, options) {
    placeholderMap[name] = (0, _styleUtil.applyStylePlaceHolder)(name);
    return origDefine.call( /** @type {!CustomElementRegistry} */ce, name, clazz, options);
  };
  ce['define'] = wrappedDefine;
}

exports.default = placeholderMap;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleCache = function () {
  function StyleCache() {
    var typeMax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

    _classCallCheck(this, StyleCache);

    // map element name -> [{properties, styleElement, scopeSelector}]
    this.cache = {};
    this.typeMax = typeMax;
  }

  _createClass(StyleCache, [{
    key: '_validate',
    value: function _validate(cacheEntry, properties, ownPropertyNames) {
      for (var idx = 0; idx < ownPropertyNames.length; idx++) {
        var pn = ownPropertyNames[idx];
        if (cacheEntry.properties[pn] !== properties[pn]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'store',
    value: function store(tagname, properties, styleElement, scopeSelector) {
      var list = this.cache[tagname] || [];
      list.push({ properties: properties, styleElement: styleElement, scopeSelector: scopeSelector });
      if (list.length > this.typeMax) {
        list.shift();
      }
      this.cache[tagname] = list;
    }
  }, {
    key: 'fetch',
    value: function fetch(tagname, properties, ownPropertyNames) {
      var list = this.cache[tagname];
      if (!list) {
        return;
      }
      // reverse list for most-recent lookups
      for (var idx = list.length - 1; idx >= 0; idx--) {
        var entry = list[idx];
        if (this._validate(entry, properties, ownPropertyNames)) {
          return entry;
        }
      }
    }
  }]);

  return StyleCache;
}();

exports.default = StyleCache;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = undefined;

var _styleSettings = __webpack_require__(3);

var _styleTransformer = __webpack_require__(13);

var _styleTransformer2 = _interopRequireDefault(_styleTransformer);

var _styleUtil = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flush = exports.flush = function flush() {};

/**
 * @param {HTMLElement} element
 * @return {!Array<string>}
 */
function getClasses(element) {
  var classes = [];
  if (element.classList) {
    classes = Array.from(element.classList);
  } else if (element instanceof window['SVGElement'] && element.hasAttribute('class')) {
    classes = element.getAttribute('class').split(/\s+/);
  }
  return classes;
}

/**
 * @param {HTMLElement} element
 * @return {string}
 */
function getCurrentScope(element) {
  var classes = getClasses(element);
  var idx = classes.indexOf(_styleTransformer2.default.SCOPE_NAME);
  if (idx > -1) {
    return classes[idx + 1];
  }
  return '';
}

/**
 * @param {Array<MutationRecord|null>|null} mxns
 */
function handler(mxns) {
  for (var x = 0; x < mxns.length; x++) {
    var mxn = mxns[x];
    if (mxn.target === document.documentElement || mxn.target === document.head) {
      continue;
    }
    for (var i = 0; i < mxn.addedNodes.length; i++) {
      var n = mxn.addedNodes[i];
      if (n.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }
      n = /** @type {HTMLElement} */n; // eslint-disable-line no-self-assign
      var root = n.getRootNode();
      var currentScope = getCurrentScope(n);
      // node was scoped, but now is in document
      if (currentScope && root === n.ownerDocument) {
        _styleTransformer2.default.dom(n, currentScope, true);
      } else if (root.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        var newScope = void 0;
        var host = /** @type {ShadowRoot} */root.host;
        // element may no longer be in a shadowroot
        if (!host) {
          continue;
        }
        newScope = (0, _styleUtil.getIsExtends)(host).is;
        if (currentScope === newScope) {
          // make sure all the subtree elements are scoped correctly
          var unscoped = window['ShadyDOM']['nativeMethods']['querySelectorAll'].call(n, ':not(.' + _styleTransformer2.default.SCOPE_NAME + ')');
          for (var j = 0; j < unscoped.length; j++) {
            _styleTransformer2.default.element(unscoped[j], currentScope);
          }
          continue;
        }
        if (currentScope) {
          _styleTransformer2.default.dom(n, currentScope, true);
        }
        _styleTransformer2.default.dom(n, newScope);
      }
    }
  }
}

if (!_styleSettings.nativeShadow) {
  var observer = new MutationObserver(handler);
  var start = function start(node) {
    observer.observe(node, { childList: true, subtree: true });
  };
  var nativeCustomElements = window['customElements'] && !window['customElements']['polyfillWrapFlushCallback'];
  // need to start immediately with native custom elements
  // TODO(dfreedm): with polyfilled HTMLImports and native custom elements
  // excessive mutations may be observed; this can be optimized via cooperation
  // with the HTMLImports polyfill.
  if (nativeCustomElements) {
    start(document);
  } else {
    var delayedStart = function delayedStart() {
      start(document.body);
    };
    // use polyfill timing if it's available
    if (window['HTMLImports']) {
      window['HTMLImports']['whenReady'](delayedStart);
      // otherwise push beyond native imports being ready
      // which requires RAF + readystate interactive.
    } else {
      requestAnimationFrame(function () {
        if (document.readyState === 'loading') {
          var listener = function listener() {
            delayedStart();
            document.removeEventListener('readystatechange', listener);
          };
          document.addEventListener('readystatechange', listener);
        } else {
          delayedStart();
        }
      });
    }
  }

  exports.flush = flush = function flush() {
    handler(observer.takeRecords());
  };
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invalidate = invalidate;
exports.invalidateTemplate = invalidateTemplate;
exports.isValid = isValid;
exports.templateIsValid = templateIsValid;
exports.isValidating = isValidating;
exports.templateIsValidating = templateIsValidating;
exports.startValidating = startValidating;
exports.startValidatingTemplate = startValidatingTemplate;
exports.elementsAreInvalid = elementsAreInvalid;

var _templateMap = __webpack_require__(29);

var _templateMap2 = _interopRequireDefault(_templateMap);

var _cssParse = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-unused-vars

/*
 * Utilities for handling invalidating apply-shim mixins for a given template.
 *
 * The invalidation strategy involves keeping track of the "current" version of a template's mixins, and updating that count when a mixin is invalidated.
 * The template
 */

/** @const {string} */
var CURRENT_VERSION = '_applyShimCurrentVersion';

/** @const {string} */
var NEXT_VERSION = '_applyShimNextVersion';

/** @const {string} */
var VALIDATING_VERSION = '_applyShimValidatingVersion';

/**
 * @const {Promise<void>}
 */
var promise = Promise.resolve();

/**
 * @param {string} elementName
 */
function invalidate(elementName) {
  var template = _templateMap2.default[elementName];
  if (template) {
    invalidateTemplate(template);
  }
}

/**
 * This function can be called multiple times to mark a template invalid
 * and signal that the style inside must be regenerated.
 *
 * Use `startValidatingTemplate` to begin an asynchronous validation cycle.
 * During that cycle, call `templateIsValidating` to see if the template must
 * be revalidated
 * @param {HTMLTemplateElement} template
 */
function invalidateTemplate(template) {
  // default the current version to 0
  template[CURRENT_VERSION] = template[CURRENT_VERSION] || 0;
  // ensure the "validating for" flag exists
  template[VALIDATING_VERSION] = template[VALIDATING_VERSION] || 0;
  // increment the next version
  template[NEXT_VERSION] = (template[NEXT_VERSION] || 0) + 1;
}

/**
 * @param {string} elementName
 * @return {boolean}
 */
function isValid(elementName) {
  var template = _templateMap2.default[elementName];
  if (template) {
    return templateIsValid(template);
  }
  return true;
}

/**
 * @param {HTMLTemplateElement} template
 * @return {boolean}
 */
function templateIsValid(template) {
  return template[CURRENT_VERSION] === template[NEXT_VERSION];
}

/**
 * @param {string} elementName
 * @return {boolean}
 */
function isValidating(elementName) {
  var template = _templateMap2.default[elementName];
  if (template) {
    return templateIsValidating(template);
  }
  return false;
}

/**
 * Returns true if the template is currently invalid and `startValidating` has been called since the last invalidation.
 * If false, the template must be validated.
 * @param {HTMLTemplateElement} template
 * @return {boolean}
 */
function templateIsValidating(template) {
  return !templateIsValid(template) && template[VALIDATING_VERSION] === template[NEXT_VERSION];
}

/**
 * the template is marked as `validating` for one microtask so that all instances
 * found in the tree crawl of `applyStyle` will update themselves,
 * but the template will only be updated once.
 * @param {string} elementName
*/
function startValidating(elementName) {
  var template = _templateMap2.default[elementName];
  startValidatingTemplate(template);
}

/**
 * Begin an asynchronous invalidation cycle.
 * This should be called after every validation of a template
 *
 * After one microtask, the template will be marked as valid until the next call to `invalidateTemplate`
 * @param {HTMLTemplateElement} template
 */
function startValidatingTemplate(template) {
  // remember that the current "next version" is the reason for this validation cycle
  template[VALIDATING_VERSION] = template[NEXT_VERSION];
  // however, there only needs to be one async task to clear the counters
  if (!template._validating) {
    template._validating = true;
    promise.then(function () {
      // sync the current version to let future invalidations cause a refresh cycle
      template[CURRENT_VERSION] = template[NEXT_VERSION];
      template._validating = false;
    });
  }
}

/**
 * @return {boolean}
 */
function elementsAreInvalid() {
  for (var elementName in _templateMap2.default) {
    var template = _templateMap2.default[elementName];
    if (!templateIsValid(template)) {
      return true;
    }
  }
  return false;
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNativeProperties = updateNativeProperties;
exports.getComputedStyleValue = getComputedStyleValue;
exports.detectMixin = detectMixin;

var _commonRegex = __webpack_require__(14);

/**
 * @param {Element} element
 * @param {Object=} properties
 */
function updateNativeProperties(element, properties) {
  // remove previous properties
  for (var p in properties) {
    // NOTE: for bc with shim, don't apply null values.
    if (p === null) {
      element.style.removeProperty(p);
    } else {
      element.style.setProperty(p, properties[p]);
    }
  }
}

/**
 * @param {Element} element
 * @param {string} property
 * @return {string}
 */
function getComputedStyleValue(element, property) {
  /**
   * @const {string}
   */
  var value = window.getComputedStyle(element).getPropertyValue(property);
  if (!value) {
    return '';
  } else {
    return value.trim();
  }
}

/**
 * return true if `cssText` contains a mixin definition or consumption
 * @param {string} cssText
 * @return {boolean}
 */
function detectMixin(cssText) {
  var has = _commonRegex.MIXIN_MATCH.test(cssText) || _commonRegex.VAR_ASSIGN.test(cssText);
  // reset state of the regexes
  _commonRegex.MIXIN_MATCH.lastIndex = 0;
  _commonRegex.VAR_ASSIGN.lastIndex = 0;
  return has;
}

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomStyleInterfaceInterface = exports.CustomStyleProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _documentWait = __webpack_require__(30);

var _documentWait2 = _interopRequireDefault(_documentWait);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @typedef {HTMLStyleElement | {getStyle: function():HTMLStyleElement}}
 */
var CustomStyleProvider = exports.CustomStyleProvider = void 0;

var SEEN_MARKER = '__seenByShadyCSS';
var CACHED_STYLE = '__shadyCSSCachedStyle';

/** @type {?function(!HTMLStyleElement)} */
var transformFn = null;

/** @type {?function()} */
var validateFn = null;

/**
This interface is provided to add document-level <style> elements to ShadyCSS for processing.
These styles must be processed by ShadyCSS to simulate ShadowRoot upper-bound encapsulation from outside styles
In addition, these styles may also need to be processed for @apply rules and CSS Custom Properties

To add document-level styles to ShadyCSS, one can call `ShadyCSS.addDocumentStyle(styleElement)` or `ShadyCSS.addDocumentStyle({getStyle: () => styleElement})`

In addition, if the process used to discover document-level styles can be synchronously flushed, one should set `ShadyCSS.documentStyleFlush`.
This function will be called when calculating styles.

An example usage of the document-level styling api can be found in `examples/document-style-lib.js`

@unrestricted
*/

var CustomStyleInterface = function () {
  function CustomStyleInterface() {
    _classCallCheck(this, CustomStyleInterface);

    /** @type {!Array<!CustomStyleProvider>} */
    this['customStyles'] = [];
    this['enqueued'] = false;
  }
  /**
   * Queue a validation for new custom styles to batch style recalculations
   */


  _createClass(CustomStyleInterface, [{
    key: 'enqueueDocumentValidation',
    value: function enqueueDocumentValidation() {
      if (this['enqueued'] || !validateFn) {
        return;
      }
      this['enqueued'] = true;
      (0, _documentWait2.default)(validateFn);
    }
    /**
     * @param {!HTMLStyleElement} style
     */

  }, {
    key: 'addCustomStyle',
    value: function addCustomStyle(style) {
      if (!style[SEEN_MARKER]) {
        style[SEEN_MARKER] = true;
        this['customStyles'].push(style);
        this.enqueueDocumentValidation();
      }
    }
    /**
     * @param {!CustomStyleProvider} customStyle
     * @return {HTMLStyleElement}
     */

  }, {
    key: 'getStyleForCustomStyle',
    value: function getStyleForCustomStyle(customStyle) {
      if (customStyle[CACHED_STYLE]) {
        return customStyle[CACHED_STYLE];
      }
      var style = void 0;
      if (customStyle['getStyle']) {
        style = customStyle['getStyle']();
      } else {
        style = customStyle;
      }
      return style;
    }
    /**
     * @return {!Array<!CustomStyleProvider>}
     */

  }, {
    key: 'processStyles',
    value: function processStyles() {
      var cs = this['customStyles'];
      for (var i = 0; i < cs.length; i++) {
        var customStyle = cs[i];
        if (customStyle[CACHED_STYLE]) {
          continue;
        }
        var style = this.getStyleForCustomStyle(customStyle);
        if (style) {
          // HTMLImports polyfill may have cloned the style into the main document,
          // which is referenced with __appliedElement.
          var styleToTransform = /** @type {!HTMLStyleElement} */style['__appliedElement'] || style;
          if (transformFn) {
            transformFn(styleToTransform);
          }
          customStyle[CACHED_STYLE] = styleToTransform;
        }
      }
      return cs;
    }
  }]);

  return CustomStyleInterface;
}();

exports.default = CustomStyleInterface;


CustomStyleInterface.prototype['addCustomStyle'] = CustomStyleInterface.prototype.addCustomStyle;
CustomStyleInterface.prototype['getStyleForCustomStyle'] = CustomStyleInterface.prototype.getStyleForCustomStyle;
CustomStyleInterface.prototype['processStyles'] = CustomStyleInterface.prototype.processStyles;

Object.defineProperties(CustomStyleInterface.prototype, {
  'transformCallback': {
    /** @return {?function(!HTMLStyleElement)} */
    get: function get() {
      return transformFn;
    },

    /** @param {?function(!HTMLStyleElement)} fn */
    set: function set(fn) {
      transformFn = fn;
    }
  },
  'validateCallback': {
    /** @return {?function()} */
    get: function get() {
      return validateFn;
    },

    /**
     * @param {?function()} fn
     * @this {CustomStyleInterface}
     */
    set: function set(fn) {
      var needsEnqueue = false;
      if (!validateFn) {
        needsEnqueue = true;
      }
      validateFn = fn;
      if (needsEnqueue) {
        this.enqueueDocumentValidation();
      }
    }
  }
});

/** @typedef {{
 * customStyles: !Array<!CustomStyleProvider>,
 * addCustomStyle: function(!CustomStyleProvider),
 * getStyleForCustomStyle: function(!CustomStyleProvider): HTMLStyleElement,
 * findStyles: function(),
 * transformCallback: ?function(!HTMLStyleElement),
 * validateCallback: ?function()
 * }}
 */
var CustomStyleInterfaceInterface = exports.CustomStyleInterfaceInterface = void 0;

/***/ })

/******/ });
//# sourceMappingURL=shady.js.map