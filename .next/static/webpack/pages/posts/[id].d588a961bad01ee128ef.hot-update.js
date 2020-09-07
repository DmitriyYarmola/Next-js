webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./src/Components/UI/Organisms/Forms/CreatePost.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/UI/Organisms/Forms/CreatePost.tsx ***!
  \**********************************************************/
/*! exports provided: CreatePostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostForm", function() { return CreatePostForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Organisms\\Forms\\CreatePost.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CreatePost__Actions",
  componentId: "l162y8-0"
})(["display:grid;grid-template-columns:repeat(2,max-content);grid-column-gap:15px;justify-content:center;"]);
_c = Actions;
var CreatePostForm = function CreatePostForm(_ref) {
  _s();

  var onSubmit = _ref.onSubmit,
      initialValue = _ref.initialValue;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log('router', router);
  var onCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    router.back();
  }, [router]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "post",
    initialValues: initialValue,
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Title",
    name: "title",
    rules: [{
      required: true,
      message: 'Please enter title of post!'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter title of post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Body",
    name: "body",
    rules: [{
      required: true,
      message: 'Please enter body of post!'
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter body of post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  })), __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "Create"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    danger: true,
    onClick: onCancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "Cancel")));
};

_s(CreatePostForm, "NDBqGsGzNQg1dWDswCrI2G20/WQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c2 = CreatePostForm;

var _c, _c2;

$RefreshReg$(_c, "Actions");
$RefreshReg$(_c2, "CreatePostForm");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL0Zvcm1zL0NyZWF0ZVBvc3QudHN4Il0sIm5hbWVzIjpbIkFjdGlvbnMiLCJzdHlsZWQiLCJkaXYiLCJDcmVhdGVQb3N0Rm9ybSIsIm9uU3VibWl0IiwiaW5pdGlhbFZhbHVlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsIm9uQ2FuY2VsIiwidXNlQ2FsbGJhY2siLCJiYWNrIiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZHQUFiO0tBQU1GLE87QUFVQyxJQUFNRyxjQUFtQyxHQUFHLFNBQXRDQSxjQUFzQyxPQUd6QjtBQUFBOztBQUFBLE1BRnpCQyxRQUV5QixRQUZ6QkEsUUFFeUI7QUFBQSxNQUR6QkMsWUFDeUIsUUFEekJBLFlBQ3lCO0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkgsTUFBdEI7QUFDQSxNQUFNSSxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0wsVUFBTSxDQUFDTSxJQUFQO0FBQ0EsR0FGMkIsRUFFekIsQ0FBQ04sTUFBRCxDQUZ5QixDQUE1QjtBQUdBLFNBQ0MsTUFBQyx5Q0FBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQWtCLGlCQUFhLEVBQUVELFlBQWpDO0FBQStDLFlBQVEsRUFBRUQsUUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0MsU0FBSyxFQUFDLE9BRFA7QUFFQyxRQUFJLEVBQUMsT0FGTjtBQUdDLFNBQUssRUFBRSxDQUFDO0FBQUVTLGNBQVEsRUFBRSxJQUFaO0FBQWtCQyxhQUFPLEVBQUU7QUFBM0IsS0FBRCxDQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQyxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLHFCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERCxFQVFDLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0MsU0FBSyxFQUFDLE1BRFA7QUFFQyxRQUFJLEVBQUMsTUFGTjtBQUdDLFNBQUssRUFBRSxDQUFDO0FBQUVELGNBQVEsRUFBRSxJQUFaO0FBQWtCQyxhQUFPLEVBQUU7QUFBM0IsS0FBRCxDQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLQyxNQUFDLDBDQUFEO0FBQU8sZUFBVyxFQUFDLG9CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FSRCxFQWVDLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFlBQVEsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsRUFJQyxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsVUFBTSxNQUE1QjtBQUE2QixXQUFPLEVBQUVKLFFBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRCxDQWZELENBREQ7QUEwQkEsQ0FuQ007O0dBQU1QLGM7VUFJR0kscUQ7OztNQUpISixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uZDU4OGE5NjFiYWQwMWVlMTI4ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdG9uU3VibWl0OiAoZGF0YTogUG9zdFR5cGUpID0+IHZvaWRcclxuXHRpbml0aWFsVmFsdWU6IFBvc3RUeXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3RGb3JtOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRvblN1Ym1pdCxcclxuXHRpbml0aWFsVmFsdWUsXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc29sZS5sb2coJ3JvdXRlcicsIHJvdXRlcilcclxuXHRjb25zdCBvbkNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHJvdXRlci5iYWNrKClcclxuXHR9LCBbcm91dGVyXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm0gbmFtZT0ncG9zdCcgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlfSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG5cdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0bGFiZWw9J1RpdGxlJ1xyXG5cdFx0XHRcdG5hbWU9J3RpdGxlJ1xyXG5cdFx0XHRcdHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB0aXRsZSBvZiBwb3N0IScgfV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIHRpdGxlIG9mIHBvc3QnIC8+XHJcblx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0bGFiZWw9J0JvZHknXHJcblx0XHRcdFx0bmFtZT0nYm9keSdcclxuXHRcdFx0XHRydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYm9keSBvZiBwb3N0IScgfV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIGJvZHkgb2YgcG9zdCcgLz5cclxuXHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBodG1sVHlwZT0nc3VibWl0Jz5cclxuXHRcdFx0XHRcdENyZWF0ZVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBkYW5nZXIgb25DbGljaz17b25DYW5jZWx9PlxyXG5cdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdDwvRm9ybT5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==