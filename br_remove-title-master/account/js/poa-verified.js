/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/icon-message-content/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ Components_icon_message_content)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: ../../../node_modules/classnames/index.js\nvar classnames = __webpack_require__(\"../../../node_modules/classnames/index.js\");\nvar classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n;// CONCATENATED MODULE: ./Components/icon-message-content/icon-message-content.jsx\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar IconMessageContent = function IconMessageContent(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      icon = _ref.icon,\n      icon_row = _ref.icon_row,\n      message = _ref.message,\n      text = _ref.text;\n  return /*#__PURE__*/external_react_default().createElement(components_.Div100vhContainer, {\n    className: \"account-management__message-wrapper\",\n    is_disabled: (0,shared_.isDesktop)(),\n    height_offset: \"110px\"\n  }, /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: classnames_default()('account-management__message-content', _defineProperty({}, \"\".concat(className, \"__message-content\"), className))\n  }, icon && /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: classnames_default()('account-management__message-icon', _defineProperty({}, \"\".concat(className, \"__message-icon\"), className))\n  }, icon), icon_row && /*#__PURE__*/external_react_default().createElement(\"div\", null, icon_row), /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: classnames_default()('account-management__message', _defineProperty({}, \"\".concat(className, \"__message\"), className))\n  }, message), text && /*#__PURE__*/external_react_default().createElement(\"div\", {\n    className: \"account-management__text-container\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Text, {\n    className: classnames_default()(_defineProperty({}, \"\".concat(className, \"__text\"), className)),\n    as: \"p\",\n    size: \"xs\",\n    align: \"center\"\n  }, text)), children));\n};\n\n/* harmony default export */ const icon_message_content = (IconMessageContent);\n;// CONCATENATED MODULE: ./Components/icon-message-content/index.js\n\n/* harmony default export */ const Components_icon_message_content = (icon_message_content);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LmpzeD82ODc5Iiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pbmRleC5qcz9hY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERpdjEwMHZoQ29udGFpbmVyLCBUZXh0IH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNEZXNrdG9wIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5cbmNvbnN0IEljb25NZXNzYWdlQ29udGVudCA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGljb24sIGljb25fcm93LCBtZXNzYWdlLCB0ZXh0IH0pID0+IChcbiAgICA8RGl2MTAwdmhDb250YWluZXIgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2Utd3JhcHBlcicgaXNfZGlzYWJsZWQ9e2lzRGVza3RvcCgpfSBoZWlnaHRfb2Zmc2V0PScxMTBweCc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLWNvbnRlbnQnLCB7XG4gICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1fX21lc3NhZ2UtY29udGVudGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UtaWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlLWljb25gXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtpY29uX3JvdyAmJiA8ZGl2PntpY29uX3Jvd308L2Rpdj59XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlYF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RleHQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX3RleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1fX3RleHRgXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcz0ncCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3hzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvRGl2MTAwdmhDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTWVzc2FnZUNvbnRlbnQ7XG4iLCJpbXBvcnQgSWNvbk1lc3NhZ2VDb250ZW50IGZyb20gJy4vaWNvbi1tZXNzYWdlLWNvbnRlbnQuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lc3NhZ2VDb250ZW50O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFPQTtBQURBO0FBVUE7QUFEQTtBQVFBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBMUJBO0FBQ0E7QUEwQ0E7O0FDaERBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/icon-message-content/index.js\n");

/***/ }),

/***/ "./Components/poa-continue-trading-button/continue-trading-button.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"M\": () => (/* binding */ ContinueTradingButton)\n/* harmony export */ });\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar ContinueTradingButton = function ContinueTradingButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.Text, {\n    className: \"dc-btn__text\",\n    as: \"p\",\n    weight: \"bold\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Continue trading')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hLWNvbnRpbnVlLXRyYWRpbmctYnV0dG9uL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uLmpzeD9mZTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmssIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRpbnVlVHJhZGluZ0J1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayB0bz0nLyc+XG4gICAgICAgIDxUZXh0IGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0JyBhcz0ncCcgd2VpZ2h0PSdib2xkJz5cbiAgICAgICAgICAgIHtsb2NhbGl6ZSgnQ29udGludWUgdHJhZGluZycpfVxuICAgICAgICA8L1RleHQ+XG4gICAgPC9CdXR0b25MaW5rPlxuKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa-continue-trading-button/continue-trading-button.jsx\n");

/***/ }),

/***/ "./Components/poa-verified/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ poa_verified)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: ./Components/poi-button/poi-button.jsx\nvar poi_button = __webpack_require__(\"./Components/poi-button/poi-button.jsx\");\n// EXTERNAL MODULE: ./Components/icon-message-content/index.js + 1 modules\nvar icon_message_content = __webpack_require__(\"./Components/icon-message-content/index.js\");\n// EXTERNAL MODULE: ./Components/poa-continue-trading-button/continue-trading-button.jsx\nvar continue_trading_button = __webpack_require__(\"./Components/poa-continue-trading-button/continue-trading-button.jsx\");\n;// CONCATENATED MODULE: ./Components/poa-verified/verified.jsx\n\n\n\n\n\n\nvar Verified = function Verified(_ref) {\n  var needs_poi = _ref.needs_poi,\n      _ref$is_description_e = _ref.is_description_enabled,\n      is_description_enabled = _ref$is_description_e === void 0 ? true : _ref$is_description_e;\n  var message = (0,translations_.localize)('Your proof of address is verified');\n\n  if (needs_poi) {\n    return /*#__PURE__*/external_react_default().createElement(icon_message_content.default, {\n      message: message,\n      text: (0,translations_.localize)('To continue trading, you must also submit a proof of identity.'),\n      icon: /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n        icon: \"IcPoaVerified\",\n        size: 128\n      })\n    }, /*#__PURE__*/external_react_default().createElement(poi_button/* PoiButton */.x, null));\n  }\n\n  return /*#__PURE__*/external_react_default().createElement(icon_message_content.default, {\n    message: message,\n    icon: /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: \"IcPoaVerified\",\n      size: 128\n    })\n  }, is_description_enabled && /*#__PURE__*/external_react_default().createElement(continue_trading_button/* ContinueTradingButton */.M, null));\n};\n;// CONCATENATED MODULE: ./Components/poa-verified/index.js\n\n/* harmony default export */ const poa_verified = (Verified);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS12ZXJpZmllZC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2EtdmVyaWZpZWQvdmVyaWZpZWQuanN4PzdlNjUiLCJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvYS12ZXJpZmllZC9pbmRleC5qcz9lOGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFBvaUJ1dHRvbiB9IGZyb20gJ0NvbXBvbmVudHMvcG9pLWJ1dHRvbi9wb2ktYnV0dG9uLmpzeCc7XG5pbXBvcnQgSWNvbk1lc3NhZ2VDb250ZW50IGZyb20gJ0NvbXBvbmVudHMvaWNvbi1tZXNzYWdlLWNvbnRlbnQnO1xuaW1wb3J0IHsgQ29udGludWVUcmFkaW5nQnV0dG9uIH0gZnJvbSAnQ29tcG9uZW50cy9wb2EtY29udGludWUtdHJhZGluZy1idXR0b24vY29udGludWUtdHJhZGluZy1idXR0b24uanN4JztcblxuZXhwb3J0IGNvbnN0IFZlcmlmaWVkID0gKHsgbmVlZHNfcG9pLCBpc19kZXNjcmlwdGlvbl9lbmFibGVkID0gdHJ1ZSB9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGxvY2FsaXplKCdZb3VyIHByb29mIG9mIGFkZHJlc3MgaXMgdmVyaWZpZWQnKTtcbiAgICBpZiAobmVlZHNfcG9pKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGl6ZSgnVG8gY29udGludWUgdHJhZGluZywgeW91IG11c3QgYWxzbyBzdWJtaXQgYSBwcm9vZiBvZiBpZGVudGl0eS4nKX1cbiAgICAgICAgICAgICAgICBpY29uPXs8SWNvbiBpY29uPSdJY1BvYVZlcmlmaWVkJyBzaXplPXsxMjh9IC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQb2lCdXR0b24gLz5cbiAgICAgICAgICAgIDwvSWNvbk1lc3NhZ2VDb250ZW50PlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50IG1lc3NhZ2U9e21lc3NhZ2V9IGljb249ezxJY29uIGljb249J0ljUG9hVmVyaWZpZWQnIHNpemU9ezEyOH0gLz59PlxuICAgICAgICAgICAge2lzX2Rlc2NyaXB0aW9uX2VuYWJsZWQgJiYgPENvbnRpbnVlVHJhZGluZ0J1dHRvbiAvPn1cbiAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBWZXJpZmllZCBhcyBQb2FWZXJpZmllZCB9IGZyb20gJy4vdmVyaWZpZWQuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgUG9hVmVyaWZpZWQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FDekJBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/poa-verified/index.js\n");

/***/ }),

/***/ "./Components/poi-button/poi-button.jsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"x\": () => (/* binding */ PoiButton)\n/* harmony export */ });\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar PoiButton = function PoiButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.ButtonLink, {\n    className: \"account-management__button\",\n    to: \"/account/proof-of-identity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_0__.Text, {\n    className: \"dc-btn__text\",\n    weight: \"bold\",\n    as: \"p\"\n  }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Proof of identity')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS1idXR0b24vcG9pLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9pLWJ1dHRvbi9wb2ktYnV0dG9uLmpzeD8zZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmssIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFBvaUJ1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fYnV0dG9uJyB0bz0nL2FjY291bnQvcHJvb2Ytb2YtaWRlbnRpdHknPlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9J2RjLWJ0bl9fdGV4dCcgd2VpZ2h0PSdib2xkJyBhcz0ncCc+XG4gICAgICAgICAgICB7bG9jYWxpemUoJ1Byb29mIG9mIGlkZW50aXR5Jyl9XG4gICAgICAgIDwvVGV4dD5cbiAgICA8L0J1dHRvbkxpbms+XG4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poi-button/poi-button.jsx\n");

/***/ }),

/***/ "../../../node_modules/classnames/index.js":
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcz8zZGNkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../node_modules/classnames/index.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./Components/poa-verified/index.js");
/******/ })()
.default;
});