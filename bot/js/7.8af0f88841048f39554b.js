(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./App/Containers/CashierModal/Layout/cashier-container.jsx":
/*!******************************************************************!*\
  !*** ./App/Containers/CashierModal/Layout/cashier-container.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tt_react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tt-react-custom-scrollbars */ \"../node_modules/tt-react-custom-scrollbars/lib/index.js\");\n/* harmony import */ var tt_react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tt_react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _templates_common_components_loading_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../templates/_common/components/loading.jsx */ \"./templates/_common/components/loading.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar CashierContainer =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CashierContainer, _React$Component);\n\n  function CashierContainer() {\n    _classCallCheck(this, CashierContainer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CashierContainer).apply(this, arguments));\n  }\n\n  _createClass(CashierContainer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.props.is_loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_common_components_loading_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), this.props.iframe_url && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(tt_react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__[\"Scrollbars\"], {\n        autoHeight: true,\n        autoHide: true,\n        autoHeightMax: 550,\n        renderTrackHorizontal: function renderTrackHorizontal(props) {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", _extends({}, props, {\n            className: \"track-horizontal\",\n            style: {\n              display: 'none'\n            }\n          }));\n        },\n        renderThumbHorizontal: function renderThumbHorizontal(props) {\n          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", _extends({}, props, {\n            className: \"thumb-horizontal\",\n            style: {\n              display: 'none'\n            }\n          }));\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"iframe\", {\n        className: \"cashier__content\",\n        height: this.props.iframe_height,\n        src: this.props.iframe_url,\n        frameBorder: \"0\",\n        scrolling: \"auto\"\n      })));\n    }\n  }]);\n\n  return CashierContainer;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nCashierContainer.propTypes = {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  iframe_height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),\n  iframe_url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CashierContainer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9DYXNoaWVyTW9kYWwvTGF5b3V0L2Nhc2hpZXItY29udGFpbmVyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0FwcC9Db250YWluZXJzL0Nhc2hpZXJNb2RhbC9MYXlvdXQvY2FzaGllci1jb250YWluZXIuanN4PzFkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyAgICAgIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICd0dC1yZWFjdC1jdXN0b20tc2Nyb2xsYmFycyc7XG5pbXBvcnQgTG9hZGluZyAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vdGVtcGxhdGVzL19jb21tb24vY29tcG9uZW50cy9sb2FkaW5nLmpzeCc7XG5cbmNsYXNzIENhc2hpZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc19sb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmlmcmFtZV91cmwgJiZcbiAgICAgICAgICAgICAgICA8U2Nyb2xsYmFyc1xuICAgICAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGF1dG9IaWRlXG4gICAgICAgICAgICAgICAgICAgIGF1dG9IZWlnaHRNYXg9ezU1MH1cbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVHJhY2tIb3Jpem9udGFsPXtwcm9wcyA9PiA8ZGl2IHsuLi5wcm9wc30gY2xhc3NOYW1lPSd0cmFjay1ob3Jpem9udGFsJyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gLz59XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRodW1iSG9yaXpvbnRhbD17cHJvcHMgPT4gPGRpdiB7Li4ucHJvcHN9IGNsYXNzTmFtZT0ndGh1bWItaG9yaXpvbnRhbCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjYXNoaWVyX19jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmlmcmFtZV9oZWlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RoaXMucHJvcHMuaWZyYW1lX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPScwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsaW5nPSdhdXRvJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuQ2FzaGllckNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lICAgIDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpZnJhbWVfaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBdKSxcbiAgICBpZnJhbWVfdXJsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzX2xvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzaGllckNvbnRhaW5lcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBV0E7Ozs7QUF4QkE7QUFDQTtBQTBCQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBUEE7QUFVQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/CashierModal/Layout/cashier-container.jsx\n");

/***/ }),

/***/ "./App/Containers/CashierModal/deposit.jsx":
/*!*************************************************!*\
  !*** ./App/Containers/CashierModal/deposit.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var _error_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.jsx */ \"./App/Containers/CashierModal/error.jsx\");\n/* harmony import */ var _Layout_cashier_container_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout/cashier-container.jsx */ \"./App/Containers/CashierModal/Layout/cashier-container.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar Deposit =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Deposit, _React$Component);\n\n  function Deposit() {\n    _classCallCheck(this, Deposit);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Deposit).apply(this, arguments));\n  }\n\n  _createClass(Deposit, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.props.setActiveTab(this.props.container);\n      this.props.onMount();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.props.error.message ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_error_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        error: this.props.error\n      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Layout_cashier_container_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        iframe_height: this.props.iframe_height,\n        iframe_url: this.props.iframe_url,\n        is_loading: this.props.is_loading\n      }));\n    }\n  }]);\n\n  return Deposit;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nDeposit.propTypes = {\n  container: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  error: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,\n  iframe_height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),\n  iframe_url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,\n  is_loading: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,\n  onMount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,\n  setActiveTab: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(function (_ref) {\n  var modules = _ref.modules;\n  return {\n    container: modules.cashier.config.deposit.container,\n    error: modules.cashier.config.deposit.error,\n    iframe_height: modules.cashier.config.deposit.iframe_height,\n    iframe_url: modules.cashier.config.deposit.iframe_url,\n    is_loading: modules.cashier.is_loading,\n    onMount: modules.cashier.onMount,\n    setActiveTab: modules.cashier.setActiveTab\n  };\n})(Deposit));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9DYXNoaWVyTW9kYWwvZGVwb3NpdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvQ29udGFpbmVycy9DYXNoaWVyTW9kYWwvZGVwb3NpdC5qc3g/YjBhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzICAgICAgICBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSAgICAgIGZyb20gJ1N0b3Jlcy9jb25uZWN0JztcbmltcG9ydCBFcnJvciAgICAgICAgICAgIGZyb20gJy4vZXJyb3IuanN4JztcbmltcG9ydCBDYXNoaWVyQ29udGFpbmVyIGZyb20gJy4vTGF5b3V0L2Nhc2hpZXItY29udGFpbmVyLmpzeCc7XG5cbmNsYXNzIERlcG9zaXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnNldEFjdGl2ZVRhYih0aGlzLnByb3BzLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMucHJvcHMub25Nb3VudCgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlID9cbiAgICAgICAgICAgICAgICAgICAgPEVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5wcm9wcy5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICA8Q2FzaGllckNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lX2hlaWdodD17dGhpcy5wcm9wcy5pZnJhbWVfaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lX3VybD17dGhpcy5wcm9wcy5pZnJhbWVfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNfbG9hZGluZz17dGhpcy5wcm9wcy5pc19sb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5EZXBvc2l0LnByb3BUeXBlcyA9IHtcbiAgICBjb250YWluZXIgICAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVycm9yICAgICAgICA6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaWZyYW1lX2hlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgXSksXG4gICAgaWZyYW1lX3VybCAgOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzX2xvYWRpbmcgIDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Nb3VudCAgICAgOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzZXRBY3RpdmVUYWI6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoeyBtb2R1bGVzIH0pID0+ICh7XG4gICAgICAgIGNvbnRhaW5lciAgICA6IG1vZHVsZXMuY2FzaGllci5jb25maWcuZGVwb3NpdC5jb250YWluZXIsXG4gICAgICAgIGVycm9yICAgICAgICA6IG1vZHVsZXMuY2FzaGllci5jb25maWcuZGVwb3NpdC5lcnJvcixcbiAgICAgICAgaWZyYW1lX2hlaWdodDogbW9kdWxlcy5jYXNoaWVyLmNvbmZpZy5kZXBvc2l0LmlmcmFtZV9oZWlnaHQsXG4gICAgICAgIGlmcmFtZV91cmwgICA6IG1vZHVsZXMuY2FzaGllci5jb25maWcuZGVwb3NpdC5pZnJhbWVfdXJsLFxuICAgICAgICBpc19sb2FkaW5nICAgOiBtb2R1bGVzLmNhc2hpZXIuaXNfbG9hZGluZyxcbiAgICAgICAgb25Nb3VudCAgICAgIDogbW9kdWxlcy5jYXNoaWVyLm9uTW91bnQsXG4gICAgICAgIHNldEFjdGl2ZVRhYiA6IG1vZHVsZXMuY2FzaGllci5zZXRBY3RpdmVUYWIsXG4gICAgfSlcbikoRGVwb3NpdCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOzs7O0FBdEJBO0FBQ0E7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./App/Containers/CashierModal/deposit.jsx\n");

/***/ }),

/***/ "./App/Containers/CashierModal/error.jsx":
/*!***********************************************!*\
  !*** ./App/Containers/CashierModal/error.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deriv-components/lib/button */ \"../../components/lib/button.js\");\n/* harmony import */ var deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _common/url */ \"./_common/url.js\");\n/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_url__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Assets/icon.jsx */ \"./Assets/icon.jsx\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Error =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Error, _React$Component);\n\n  function Error() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, Error);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Error)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _this.onClickButton = function () {\n      if (_this.props.error.link) {\n        window.open(Object(_common_url__WEBPACK_IMPORTED_MODULE_3__[\"urlFor\"])(_this.props.error.link, undefined, undefined, true));\n      } else if (typeof _this.props.error.onClickButton === 'function') {\n        _this.props.error.onClickButton();\n      }\n\n      _this.props.setErrorMessage('');\n    };\n\n    return _this;\n  }\n\n  _createClass(Error, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        className: \"cashier__wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Assets_icon_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        icon: \"IconCashierError\",\n        className: \"cashier-error__icon\"\n      }), Array.isArray(this.props.error.message) ? this.props.error.message.map(function (message, idx) {\n        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n          className: \"cashier-error__text\",\n          key: idx\n        }, message);\n      }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n        className: \"cashier-error__text\"\n      }, this.props.error.message), this.props.error.button_text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(deriv_components_lib_button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        className: \"btn--secondary--default cashier-error__button\",\n        has_effect: true,\n        text: this.props.error.button_text,\n        onClick: this.onClickButton\n      }));\n    }\n  }]);\n\n  return Error;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\nError.propTypes = {\n  error: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,\n  setErrorMessage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(Stores_connect__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(function (_ref) {\n  var modules = _ref.modules;\n  return {\n    setErrorMessage: modules.cashier.setErrorMessage\n  };\n})(Error));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9DYXNoaWVyTW9kYWwvZXJyb3IuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvQ2FzaGllck1vZGFsL2Vycm9yLmpzeD9hYTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgICAgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gICAgICAgZnJvbSAnZGVyaXYtY29tcG9uZW50cy9saWIvYnV0dG9uJztcbmltcG9ydCB7IHVybEZvciB9ICAgZnJvbSAnX2NvbW1vbi91cmwnO1xuaW1wb3J0IEljb24gICAgICAgICBmcm9tICdBc3NldHMvaWNvbi5qc3gnO1xuaW1wb3J0IHsgY29ubmVjdCB9ICBmcm9tICdTdG9yZXMvY29ubmVjdCc7XG5cbmNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBvbkNsaWNrQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5lcnJvci5saW5rKSB7XG4gICAgICAgICAgICB3aW5kb3cub3Blbih1cmxGb3IodGhpcy5wcm9wcy5lcnJvci5saW5rLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmVycm9yLm9uQ2xpY2tCdXR0b24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZXJyb3Iub25DbGlja0J1dHRvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJvcHMuc2V0RXJyb3JNZXNzYWdlKCcnKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Nhc2hpZXJfX3dyYXBwZXInPlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249J0ljb25DYXNoaWVyRXJyb3InIGNsYXNzTmFtZT0nY2FzaGllci1lcnJvcl9faWNvbicgLz5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmVycm9yLm1lc3NhZ2UpID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlLm1hcCgobWVzc2FnZSwgaWR4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXNoaWVyLWVycm9yX190ZXh0JyBrZXk9e2lkeH0+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXNoaWVyLWVycm9yX190ZXh0Jz57dGhpcy5wcm9wcy5lcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJyb3IuYnV0dG9uX3RleHQgJiZcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuLS1zZWNvbmRhcnktLWRlZmF1bHQgY2FzaGllci1lcnJvcl9fYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgICBoYXNfZWZmZWN0XG4gICAgICAgICAgICAgICAgICAgIHRleHQ9e3RoaXMucHJvcHMuZXJyb3IuYnV0dG9uX3RleHR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja0J1dHRvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuRXJyb3IucHJvcFR5cGVzID0ge1xuICAgIGVycm9yICAgICAgICAgIDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzZXRFcnJvck1lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICAoeyBtb2R1bGVzIH0pID0+ICh7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZTogbW9kdWxlcy5jYXNoaWVyLnNldEVycm9yTWVzc2FnZSxcbiAgICB9KVxuKShFcnJvcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7Ozs7QUEvQkE7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/CashierModal/error.jsx\n");

/***/ }),

/***/ "./templates/_common/components/loading.jsx":
/*!**************************************************!*\
  !*** ./templates/_common/components/loading.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Loading = function Loading(_ref) {\n  var className = _ref.className,\n      is_invisible = _ref.is_invisible,\n      theme = _ref.theme,\n      id = _ref.id;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: id,\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('barspinner', \"barspinner--\".concat(theme || 'dark'), {\n      invisible: is_invisible\n    }, className)\n  }, Array.from(new Array(5)).map(function (x, inx) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      key: inx,\n      className: \"barspinner__rect barspinner__rect--\".concat(inx + 1, \" rect\").concat(inx + 1)\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90ZW1wbGF0ZXMvX2NvbW1vbi9jb21wb25lbnRzL2xvYWRpbmcuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdGVtcGxhdGVzL19jb21tb24vY29tcG9uZW50cy9sb2FkaW5nLmpzeD9jZjg3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0ICAgICAgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBMb2FkaW5nID0gKHsgY2xhc3NOYW1lLCBpc19pbnZpc2libGUsIHRoZW1lLCBpZCB9KSA9PiAoXG4gICAgPGRpdlxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBjbGFzc05hbWVzKFxuICAgICAgICAgICAgICAgICdiYXJzcGlubmVyJyxcbiAgICAgICAgICAgICAgICBgYmFyc3Bpbm5lci0tJHsgdGhlbWUgfHwgJ2RhcmsnfWAsXG4gICAgICAgICAgICAgICAgeyBpbnZpc2libGU6IGlzX2ludmlzaWJsZSB9LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgID5cbiAgICAgICAgeyBBcnJheS5mcm9tKG5ldyBBcnJheSg1KSkubWFwKCh4LCBpbngpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbnh9IGNsYXNzTmFtZT17YGJhcnNwaW5uZXJfX3JlY3QgYmFyc3Bpbm5lcl9fcmVjdC0tJHtpbnggKyAxfSByZWN0JHtpbnggKyAxfWB9IC8+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFJQTtBQUFBO0FBTkE7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBWkE7QUFDQTtBQWlCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./templates/_common/components/loading.jsx\n");

/***/ })

}]);