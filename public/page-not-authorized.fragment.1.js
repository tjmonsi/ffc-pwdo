webpackJsonp([1],{

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _polymerElement = __webpack_require__(15);

var _gestureEventListeners = __webpack_require__(85);

var _window = __webpack_require__(7);

__webpack_require__(94);

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
      return 'page-not-authorized';
    }
  }]);

  return Component;
}((0, _gestureEventListeners.GestureEventListeners)(_polymerElement.Element));

!_window.customElements.get(Component.is) ? _window.customElements.define(Component.is, Component) : console.warn(Component.is + ' is already defined');

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var RegisterHtmlTemplate = __webpack_require__(86);

RegisterHtmlTemplate.register("<dom-module id=page-not-authorized> <template> <style>" + __webpack_require__(95) + "</style> Example Page </template> </dom-module>");

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(96);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(87)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

});
//# sourceMappingURL=page-not-authorized.fragment.1.js.map