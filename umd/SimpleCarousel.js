(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = global || self, global.SimpleCarousel = factory(global.React));
}(this, (function (react) { 'use strict';

	react = react && Object.prototype.hasOwnProperty.call(react, 'default') ? react['default'] : react;

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var classnames = createCommonjsModule(function (module) {
	/*!
	  Copyright (c) 2017 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if ( module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
	});

	var cjs = createCommonjsModule(function (module, exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(react);

	var _classnames = _interopRequireDefault(classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	var Simplecarousel = function Simplecarousel(props) {
	  var _a, _b;

	  var _c = (0, _react.useState)(0),
	      refScroll = _c[0],
	      setRefScroll = _c[1];

	  var _d = (0, _react.useState)(),
	      refWrapper = _d[0],
	      setRefWrapper = _d[1];

	  (0, _react.useEffect)(function () {
	    if (!refWrapper) return;
	    refWrapper.scrollLeft = refScroll;
	  }, [refScroll, refWrapper]);

	  var onNext = function onNext() {
	    var halfWidth = refWrapper.offsetWidth / 2;
	    var scroll = refScroll + halfWidth;
	    if (scroll > refWrapper.scrollWidth) return;
	    setRefScroll(scroll);
	  };

	  var onPrev = function onPrev() {
	    var halfWidth = refWrapper.offsetWidth / 2;
	    var scroll = refScroll - halfWidth;
	    if (scroll < 0) return setRefScroll(0);
	    setRefScroll(scroll);
	  };

	  return /*#__PURE__*/_react["default"].createElement("div", {
	    className: "simple-carousel"
	  }, /*#__PURE__*/_react["default"].createElement("div", {
	    ref: function ref(inst) {
	      return setRefWrapper(inst);
	    },
	    className: (0, _classnames["default"])('simple-carousel-wrapper', props.wrapperClasses)
	  }, props.list && props.list.length > 0 && props.list.map(function (item, i) {
	    return /*#__PURE__*/_react["default"].createElement("div", {
	      key: "simple-carousel-item-" + i,
	      className: (0, _classnames["default"])("simple-carousel-item", item.itemCustomClass),
	      onClick: function onClick(e) {
	        var _a;

	        return (_a = item.onClickItem) === null || _a === void 0 ? void 0 : _a.call(item, e);
	      }
	    }, item.content);
	  })), /*#__PURE__*/_react["default"].createElement(CustomButton, {
	    Elem: (_a = props.customButtons) === null || _a === void 0 ? void 0 : _a.prev,
	    className: (0, _classnames["default"])('btn-scroll prev', {
	      hidden: props.list && props.list.length < 2
	    }),
	    handleClick: onPrev
	  }, "Prev"), /*#__PURE__*/_react["default"].createElement(CustomButton, {
	    Elem: (_b = props.customButtons) === null || _b === void 0 ? void 0 : _b.next,
	    className: (0, _classnames["default"])('btn-scroll next', {
	      hidden: props.list && props.list.length < 2
	    }),
	    handleClick: onNext
	  }, "Next"));
	};

	var CustomButton = function CustomButton(props) {
	  if (!props.Elem) return /*#__PURE__*/_react["default"].createElement("button", {
	    className: props.className,
	    onClick: function onClick(e) {
	      return props.handleClick(e);
	    }
	  }, props.children);
	  var Btn = props.Elem;
	  return /*#__PURE__*/_react["default"].createElement(Btn, {
	    className: props.className,
	    onClick: props.handleClick
	  }, props.children);
	};

	var _default = Simplecarousel;
	exports["default"] = _default;
	});

	var index = unwrapExports(cjs);

	return index;

})));
