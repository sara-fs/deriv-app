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

/***/ "./Configs/address-details-config.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar address_details_config = function address_details_config(_ref) {\n  var _account_settings$add, _account_settings$add2, _account_settings$add3, _account_settings$add4, _account_settings$add5;\n\n  var account_settings = _ref.account_settings,\n      is_svg = _ref.is_svg;\n\n  if (!account_settings) {\n    return {};\n  }\n\n  return {\n    address_line_1: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$add = account_settings.address_line_1) !== null && _account_settings$add !== void 0 ? _account_settings$add : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Address line 1 is required')], ['address', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Address is not in a proper format')], ['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('This should not exceed {{max}} characters.', {\n        max: 70\n      }), {\n        max: 70\n      }], ['po_box', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getErrorMessages)().po_box()]].filter(function (x) {\n        return is_svg ? x.indexOf('po_box') !== 0 : x;\n      })\n    },\n    address_line_2: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$add2 = account_settings.address_line_2) !== null && _account_settings$add2 !== void 0 ? _account_settings$add2 : '',\n      rules: [['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('This should not exceed {{max}} characters.', {\n        max: 70\n      }), {\n        max: 70\n      }], ['po_box', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getErrorMessages)().po_box()]].filter(function (x) {\n        return is_svg ? x.indexOf('po_box') !== 0 : x;\n      })\n    },\n    address_city: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$add3 = account_settings.address_city) !== null && _account_settings$add3 !== void 0 ? _account_settings$add3 : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('City is required')], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('City field is not in a proper format'), {\n        regex: /^[a-zA-Z\\s\\W'.-]{1,35}$/\n      }]]\n    },\n    address_state: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$add4 = account_settings.address_state) !== null && _account_settings$add4 !== void 0 ? _account_settings$add4 : '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('State is required')], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('State is not in a proper format'), {\n        regex: /^[\\w\\s\\W'.-;,]{0,60}$/\n      }]]\n    },\n    address_postcode: {\n      supported_in: ['svg', 'iom', 'malta', 'maltainvest'],\n      default_value: (_account_settings$add5 = account_settings.address_postcode) !== null && _account_settings$add5 !== void 0 ? _account_settings$add5 : '',\n      rules: [['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Please enter a {{field_name}} under {{max_number}} characters.', {\n        field_name: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('postal/ZIP code'),\n        max_number: 20,\n        interpolation: {\n          escapeValue: false\n        }\n      }), {\n        min: 0,\n        max: 20\n      }], ['postcode', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getErrorMessages)().postcode()]]\n    }\n  };\n};\n\nvar addressDetailsConfig = function addressDetailsConfig(_ref2, AddressDetails) {\n  var upgrade_info = _ref2.upgrade_info,\n      real_account_signup_target = _ref2.real_account_signup_target,\n      residence = _ref2.residence,\n      account_settings = _ref2.account_settings;\n  var is_dashboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  var is_svg = (upgrade_info === null || upgrade_info === void 0 ? void 0 : upgrade_info.can_upgrade_to) === 'svg';\n  var config = address_details_config({\n    account_settings: account_settings,\n    is_svg: is_svg\n  });\n  return {\n    header: {\n      active_title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Where do you live?') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Complete your address details'),\n      title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('ADDRESS') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Address')\n    },\n    body: AddressDetails,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getDefaultFields)(real_account_signup_target, config),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.generateValidationFunction)(real_account_signup_target, transformConfig(transformForResidence(config, residence), real_account_signup_target)),\n      is_svg: is_svg\n    },\n    passthrough: ['residence_list', 'is_fully_authenticated'],\n    icon: 'IcDashboardAddress'\n  };\n};\n/**\n * Transform general rules based on residence\n *\n * @param {object} rules - Original rules\n * @param {string} residence - Client's residence\n * @return {object} rules - Transformed rules\n */\n\n\nvar transformForResidence = function transformForResidence(rules, residence) {\n  // Isle of Man Clients do not need to fill out state since API states_list is empty.\n  if (residence === 'im') {\n    rules.address_state.rules.shift();\n  } // GB residence are required to fill in the post code.\n\n\n  if (/^(im|gb)$/.test(residence)) {\n    rules.address_postcode.rules.splice(0, 0, ['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Postal/ZIP code is required')]);\n  }\n\n  return rules;\n};\n\nvar transformConfig = function transformConfig(config, _ref3) {\n  var real_account_signup_target = _ref3.real_account_signup_target;\n\n  // Remove required rule for svg clients\n  if (!real_account_signup_target || real_account_signup_target === 'svg') {\n    config.address_state.rules.shift();\n  }\n\n  return config;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addressDetailsConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2FkZHJlc3MtZGV0YWlscy1jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbmZpZ3MvYWRkcmVzcy1kZXRhaWxzLWNvbmZpZy5qcz8zYWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbiwgZ2V0RGVmYXVsdEZpZWxkcywgZ2V0RXJyb3JNZXNzYWdlcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG5jb25zdCBhZGRyZXNzX2RldGFpbHNfY29uZmlnID0gKHsgYWNjb3VudF9zZXR0aW5ncywgaXNfc3ZnIH0pID0+IHtcbiAgICBpZiAoIWFjY291bnRfc2V0dGluZ3MpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZHJlc3NfbGluZV8xOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ2lvbScsICdtYWx0YScsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5hZGRyZXNzX2xpbmVfMSA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydyZXEnLCBsb2NhbGl6ZSgnQWRkcmVzcyBsaW5lIDEgaXMgcmVxdWlyZWQnKV0sXG4gICAgICAgICAgICAgICAgWydhZGRyZXNzJywgbG9jYWxpemUoJ0FkZHJlc3MgaXMgbm90IGluIGEgcHJvcGVyIGZvcm1hdCcpXSxcbiAgICAgICAgICAgICAgICBbJ2xlbmd0aCcsIGxvY2FsaXplKCdUaGlzIHNob3VsZCBub3QgZXhjZWVkIHt7bWF4fX0gY2hhcmFjdGVycy4nLCB7IG1heDogNzAgfSksIHsgbWF4OiA3MCB9XSxcbiAgICAgICAgICAgICAgICBbJ3BvX2JveCcsIGdldEVycm9yTWVzc2FnZXMoKS5wb19ib3goKV0sXG4gICAgICAgICAgICBdLmZpbHRlcih4ID0+IChpc19zdmcgPyB4LmluZGV4T2YoJ3BvX2JveCcpICE9PSAwIDogeCkpLFxuICAgICAgICB9LFxuICAgICAgICBhZGRyZXNzX2xpbmVfMjoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdpb20nLCAnbWFsdGEnLCAnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MuYWRkcmVzc19saW5lXzIgPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIFsnbGVuZ3RoJywgbG9jYWxpemUoJ1RoaXMgc2hvdWxkIG5vdCBleGNlZWQge3ttYXh9fSBjaGFyYWN0ZXJzLicsIHsgbWF4OiA3MCB9KSwgeyBtYXg6IDcwIH1dLFxuICAgICAgICAgICAgICAgIFsncG9fYm94JywgZ2V0RXJyb3JNZXNzYWdlcygpLnBvX2JveCgpXSxcbiAgICAgICAgICAgIF0uZmlsdGVyKHggPT4gKGlzX3N2ZyA/IHguaW5kZXhPZigncG9fYm94JykgIT09IDAgOiB4KSksXG4gICAgICAgIH0sXG4gICAgICAgIGFkZHJlc3NfY2l0eToge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdpb20nLCAnbWFsdGEnLCAnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MuYWRkcmVzc19jaXR5ID8/ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdDaXR5IGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ3JlZ3VsYXInLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZSgnQ2l0eSBmaWVsZCBpcyBub3QgaW4gYSBwcm9wZXIgZm9ybWF0JyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiAvXlthLXpBLVpcXHNcXFcnLi1dezEsMzV9JC8sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmFkZHJlc3Nfc3RhdGUgPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIFsncmVxJywgbG9jYWxpemUoJ1N0YXRlIGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ3JlZ3VsYXInLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZSgnU3RhdGUgaXMgbm90IGluIGEgcHJvcGVyIGZvcm1hdCcpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleDogL15bXFx3XFxzXFxXJy4tOyxdezAsNjB9JC8sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZHJlc3NfcG9zdGNvZGU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnaW9tJywgJ21hbHRhJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmFkZHJlc3NfcG9zdGNvZGUgPz8gJycsXG4gICAgICAgICAgICBydWxlczogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ2xlbmd0aCcsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCdQbGVhc2UgZW50ZXIgYSB7e2ZpZWxkX25hbWV9fSB1bmRlciB7e21heF9udW1iZXJ9fSBjaGFyYWN0ZXJzLicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX25hbWU6IGxvY2FsaXplKCdwb3N0YWwvWklQIGNvZGUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heF9udW1iZXI6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogeyBlc2NhcGVWYWx1ZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHsgbWluOiAwLCBtYXg6IDIwIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbJ3Bvc3Rjb2RlJywgZ2V0RXJyb3JNZXNzYWdlcygpLnBvc3Rjb2RlKCldLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuY29uc3QgYWRkcmVzc0RldGFpbHNDb25maWcgPSAoXG4gICAgeyB1cGdyYWRlX2luZm8sIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LCByZXNpZGVuY2UsIGFjY291bnRfc2V0dGluZ3MgfSxcbiAgICBBZGRyZXNzRGV0YWlscyxcbiAgICBpc19kYXNoYm9hcmQgPSBmYWxzZVxuKSA9PiB7XG4gICAgY29uc3QgaXNfc3ZnID0gdXBncmFkZV9pbmZvPy5jYW5fdXBncmFkZV90byA9PT0gJ3N2Zyc7XG4gICAgY29uc3QgY29uZmlnID0gYWRkcmVzc19kZXRhaWxzX2NvbmZpZyh7IGFjY291bnRfc2V0dGluZ3MsIGlzX3N2ZyB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogaXNfZGFzaGJvYXJkID8gbG9jYWxpemUoJ1doZXJlIGRvIHlvdSBsaXZlPycpIDogbG9jYWxpemUoJ0NvbXBsZXRlIHlvdXIgYWRkcmVzcyBkZXRhaWxzJyksXG4gICAgICAgICAgICB0aXRsZTogaXNfZGFzaGJvYXJkID8gbG9jYWxpemUoJ0FERFJFU1MnKSA6IGxvY2FsaXplKCdBZGRyZXNzJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEFkZHJlc3NEZXRhaWxzLFxuICAgICAgICBmb3JtX3ZhbHVlOiBnZXREZWZhdWx0RmllbGRzKHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LCBjb25maWcpLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdmFsaWRhdGU6IGdlbmVyYXRlVmFsaWRhdGlvbkZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUNvbmZpZyh0cmFuc2Zvcm1Gb3JSZXNpZGVuY2UoY29uZmlnLCByZXNpZGVuY2UpLCByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBpc19zdmcsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N0aHJvdWdoOiBbJ3Jlc2lkZW5jZV9saXN0JywgJ2lzX2Z1bGx5X2F1dGhlbnRpY2F0ZWQnXSxcbiAgICAgICAgaWNvbjogJ0ljRGFzaGJvYXJkQWRkcmVzcycsXG4gICAgfTtcbn07XG5cbi8qKlxuICogVHJhbnNmb3JtIGdlbmVyYWwgcnVsZXMgYmFzZWQgb24gcmVzaWRlbmNlXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHJ1bGVzIC0gT3JpZ2luYWwgcnVsZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNpZGVuY2UgLSBDbGllbnQncyByZXNpZGVuY2VcbiAqIEByZXR1cm4ge29iamVjdH0gcnVsZXMgLSBUcmFuc2Zvcm1lZCBydWxlc1xuICovXG5jb25zdCB0cmFuc2Zvcm1Gb3JSZXNpZGVuY2UgPSAocnVsZXMsIHJlc2lkZW5jZSkgPT4ge1xuICAgIC8vIElzbGUgb2YgTWFuIENsaWVudHMgZG8gbm90IG5lZWQgdG8gZmlsbCBvdXQgc3RhdGUgc2luY2UgQVBJIHN0YXRlc19saXN0IGlzIGVtcHR5LlxuICAgIGlmIChyZXNpZGVuY2UgPT09ICdpbScpIHtcbiAgICAgICAgcnVsZXMuYWRkcmVzc19zdGF0ZS5ydWxlcy5zaGlmdCgpO1xuICAgIH1cbiAgICAvLyBHQiByZXNpZGVuY2UgYXJlIHJlcXVpcmVkIHRvIGZpbGwgaW4gdGhlIHBvc3QgY29kZS5cbiAgICBpZiAoL14oaW18Z2IpJC8udGVzdChyZXNpZGVuY2UpKSB7XG4gICAgICAgIHJ1bGVzLmFkZHJlc3NfcG9zdGNvZGUucnVsZXMuc3BsaWNlKDAsIDAsIFsncmVxJywgbG9jYWxpemUoJ1Bvc3RhbC9aSVAgY29kZSBpcyByZXF1aXJlZCcpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xufTtcblxuY29uc3QgdHJhbnNmb3JtQ29uZmlnID0gKGNvbmZpZywgeyByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCB9KSA9PiB7XG4gICAgLy8gUmVtb3ZlIHJlcXVpcmVkIHJ1bGUgZm9yIHN2ZyBjbGllbnRzXG4gICAgaWYgKCFyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCB8fCByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCA9PT0gJ3N2ZycpIHtcbiAgICAgICAgY29uZmlnLmFkZHJlc3Nfc3RhdGUucnVsZXMuc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkcmVzc0RldGFpbHNDb25maWc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBREE7QUFSQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFEQTtBQVJBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFYQTtBQS9DQTtBQWdFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBTEE7QUFPQTtBQUNBO0FBZkE7QUFpQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/address-details-config.js\n");

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
/******/ 	return __webpack_require__("./Configs/address-details-config.js");
/******/ })()
.default;
});