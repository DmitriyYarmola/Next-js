webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Components/UI/Templates/ModalWindowTemplate.tsx":
/*!*************************************************************!*\
  !*** ./src/Components/UI/Templates/ModalWindowTemplate.tsx ***!
  \*************************************************************/
/*! exports provided: ModalWindowTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowTemplate", function() { return ModalWindowTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Templates\\ModalWindowTemplate.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PositionWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ModalWindowTemplate__PositionWrapped",
  componentId: "el276r-0"
})(["position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.5);"]);
_c = PositionWrapped;
var Wrapped = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ModalWindowTemplate__Wrapped",
  componentId: "el276r-1"
})(["position:absolute;z-index:5;top:50%;left:50%;transform:translate(-50%,-50%);"]);
_c2 = Wrapped;
var ModalWindowTemplate = function ModalWindowTemplate(_ref) {
  var children = _ref.children;
  return __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 3
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, children));
};
_c3 = ModalWindowTemplate;

var _c, _c2, _c3;

$RefreshReg$(_c, "PositionWrapped");
$RefreshReg$(_c2, "Wrapped");
$RefreshReg$(_c3, "ModalWindowTemplate");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/Components/UI/Templates/index.ts":
/*!**********************************************!*\
  !*** ./src/Components/UI/Templates/index.ts ***!
  \**********************************************/
/*! exports provided: MainTemplate, ModalWindowTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _MainTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainTemplate */ "./src/Components/UI/Templates/MainTemplate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTemplate", function() { return _MainTemplate__WEBPACK_IMPORTED_MODULE_0__["MainTemplate"]; });

/* harmony import */ var _ModalWindowTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalWindowTemplate */ "./src/Components/UI/Templates/ModalWindowTemplate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalWindowTemplate", function() { return _ModalWindowTemplate__WEBPACK_IMPORTED_MODULE_1__["ModalWindowTemplate"]; });




;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvVUkvVGVtcGxhdGVzL01vZGFsV2luZG93VGVtcGxhdGUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9VSS9UZW1wbGF0ZXMvaW5kZXgudHMiXSwibmFtZXMiOlsiUG9zaXRpb25XcmFwcGVkIiwic3R5bGVkIiwiZGl2IiwiV3JhcHBlZCIsIk1vZGFsV2luZG93VGVtcGxhdGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxlQUFlLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQXJCO0tBQU1GLGU7QUFRTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0ZBQWI7TUFBTUMsTztBQVVDLElBQU1DLG1CQUF3QyxHQUFHLFNBQTNDQSxtQkFBMkMsT0FFOUI7QUFBQSxNQUR6QkMsUUFDeUIsUUFEekJBLFFBQ3lCO0FBQ3pCLFNBQ0MsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVQSxRQUFWLENBREQsQ0FERDtBQUtBLENBUk07TUFBTUQsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yNWU3YjU0YTEwMzg0Njg3MDdmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5jb25zdCBXcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogNTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBNb2RhbFdpbmRvd1RlbXBsYXRlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRjaGlsZHJlbixcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxQb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdDxXcmFwcGVkPntjaGlsZHJlbn08L1dyYXBwZWQ+XHJcblx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHQpXHJcbn1cclxuIiwiZXhwb3J0IHsgTWFpblRlbXBsYXRlIH0gZnJvbSAnLi9NYWluVGVtcGxhdGUnXG5leHBvcnQge01vZGFsV2luZG93VGVtcGxhdGV9IGZyb20gJy4vTW9kYWxXaW5kb3dUZW1wbGF0ZSciXSwic291cmNlUm9vdCI6IiJ9