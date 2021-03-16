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
		module.exports = factory(require("@deriv/shared"), require("@deriv/translations"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared", "@deriv/translations"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"), require("@deriv/translations"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"], root["@deriv/translations"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/currency-selector-config.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _currency_selector_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./Configs/currency-selector-schema.js\");\n\n\n\n\nvar currencySelectorConfig = function currencySelectorConfig(_ref, CurrencySelector) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  var is_dashboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  return {\n    header: {\n      active_title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Select wallet currency') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Please choose your currency'),\n      title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('CURRENCY') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Account currency')\n    },\n    body: CurrencySelector,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getDefaultFields)(real_account_signup_target, _currency_selector_schema__WEBPACK_IMPORTED_MODULE_2__.default),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.generateValidationFunction)(real_account_signup_target, _currency_selector_schema__WEBPACK_IMPORTED_MODULE_2__.default)\n    },\n    passthrough: ['legal_allowed_currencies'],\n    icon: 'IcDashboardCurrency'\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySelectorConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLWNvbmZpZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy9jdXJyZW5jeS1zZWxlY3Rvci1jb25maWcuanM/YmEzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVWYWxpZGF0aW9uRnVuY3Rpb24sIGdldERlZmF1bHRGaWVsZHMgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcbmltcG9ydCBjdXJyZW5jeV9zZWxlY3Rvcl9jb25maWcgZnJvbSAnLi9jdXJyZW5jeS1zZWxlY3Rvci1zY2hlbWEnO1xuXG5jb25zdCBjdXJyZW5jeVNlbGVjdG9yQ29uZmlnID0gKHsgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQgfSwgQ3VycmVuY3lTZWxlY3RvciwgaXNfZGFzaGJvYXJkID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogaXNfZGFzaGJvYXJkID8gbG9jYWxpemUoJ1NlbGVjdCB3YWxsZXQgY3VycmVuY3knKSA6IGxvY2FsaXplKCdQbGVhc2UgY2hvb3NlIHlvdXIgY3VycmVuY3knKSxcbiAgICAgICAgICAgIHRpdGxlOiBpc19kYXNoYm9hcmQgPyBsb2NhbGl6ZSgnQ1VSUkVOQ1knKSA6IGxvY2FsaXplKCdBY2NvdW50IGN1cnJlbmN5JyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEN1cnJlbmN5U2VsZWN0b3IsXG4gICAgICAgIGZvcm1fdmFsdWU6IGdldERlZmF1bHRGaWVsZHMocmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsIGN1cnJlbmN5X3NlbGVjdG9yX2NvbmZpZyksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWxpZGF0ZTogZ2VuZXJhdGVWYWxpZGF0aW9uRnVuY3Rpb24ocmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsIGN1cnJlbmN5X3NlbGVjdG9yX2NvbmZpZyksXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N0aHJvdWdoOiBbJ2xlZ2FsX2FsbG93ZWRfY3VycmVuY2llcyddLFxuICAgICAgICBpY29uOiAnSWNEYXNoYm9hcmRDdXJyZW5jeScsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbmN5U2VsZWN0b3JDb25maWc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Configs/currency-selector-config.js\n");

/***/ }),

/***/ "./Configs/currency-selector-schema.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  currency: {\n    supported_in: ['maltainvest', 'malta', 'svg', 'iom'],\n    default_value: '',\n    rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Select an item')]]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLXNjaGVtYS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy9jdXJyZW5jeS1zZWxlY3Rvci1zY2hlbWEuanM/MGRlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3VycmVuY3k6IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0JywgJ21hbHRhJywgJ3N2ZycsICdpb20nXSxcbiAgICAgICAgZGVmYXVsdF92YWx1ZTogJycsXG4gICAgICAgIHJ1bGVzOiBbWydyZXEnLCBsb2NhbGl6ZSgnU2VsZWN0IGFuIGl0ZW0nKV1dLFxuICAgIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Configs/currency-selector-schema.js\n");

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

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
/******/ 	return __webpack_require__("./Configs/currency-selector-config.js");
/******/ })()
.default;
});