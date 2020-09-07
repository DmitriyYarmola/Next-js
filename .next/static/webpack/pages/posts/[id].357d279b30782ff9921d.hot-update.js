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
      initialValue = _ref.initialValue,
      isEdit = _ref.isEdit,
      onClose = _ref.onClose;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log('router', router);
  var onCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isEdit) onClose(false);
    router.back();
  }, [router]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "post",
    initialValues: initialValue,
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter title of post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 40,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter body of post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  })), __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, isEdit ? 'Save' : 'Create'), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    danger: true,
    onClick: onCancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL0Zvcm1zL0NyZWF0ZVBvc3QudHN4Il0sIm5hbWVzIjpbIkFjdGlvbnMiLCJzdHlsZWQiLCJkaXYiLCJDcmVhdGVQb3N0Rm9ybSIsIm9uU3VibWl0IiwiaW5pdGlhbFZhbHVlIiwiaXNFZGl0Iiwib25DbG9zZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJvbkNhbmNlbCIsInVzZUNhbGxiYWNrIiwiYmFjayIsInJlcXVpcmVkIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2R0FBYjtLQUFNRixPO0FBWUMsSUFBTUcsY0FBbUMsR0FBRyxTQUF0Q0EsY0FBc0MsT0FLekI7QUFBQTs7QUFBQSxNQUp6QkMsUUFJeUIsUUFKekJBLFFBSXlCO0FBQUEsTUFIekJDLFlBR3lCLFFBSHpCQSxZQUd5QjtBQUFBLE1BRnpCQyxNQUV5QixRQUZ6QkEsTUFFeUI7QUFBQSxNQURDQyxPQUNELFFBRENBLE9BQ0Q7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUF0QjtBQUNBLE1BQU1JLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2xDLFFBQUdQLE1BQUgsRUFBV0MsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNYQyxVQUFNLENBQUNNLElBQVA7QUFDQSxHQUgyQixFQUd6QixDQUFDTixNQUFELENBSHlCLENBQTVCO0FBSUEsU0FDQyxNQUFDLHlDQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBa0IsaUJBQWEsRUFBRUgsWUFBakM7QUFBK0MsWUFBUSxFQUFFRCxRQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDQyxTQUFLLEVBQUMsT0FEUDtBQUVDLFFBQUksRUFBQyxPQUZOO0FBR0MsU0FBSyxFQUFFLENBQUM7QUFBRVcsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUFELENBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMscUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELEVBUUMsTUFBQyx5Q0FBRCxDQUFNLElBQU47QUFDQyxTQUFLLEVBQUMsTUFEUDtBQUVDLFFBQUksRUFBQyxNQUZOO0FBR0MsU0FBSyxFQUFFLENBQUM7QUFBRUQsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGFBQU8sRUFBRTtBQUEzQixLQUFELENBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtDLE1BQUMsMENBQUQ7QUFBTyxlQUFXLEVBQUMsb0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQVJELEVBZUMsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsWUFBUSxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRVYsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQURwQixDQURELEVBSUMsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFVBQU0sTUFBNUI7QUFBNkIsV0FBTyxFQUFFTSxRQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkQsQ0FmRCxDQUREO0FBMEJBLENBdENNOztHQUFNVCxjO1VBTUdNLHFEOzs7TUFOSE4sYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9baWRdLjM1N2QyNzliMzA3ODJmZjk5MjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRvblN1Ym1pdDogKGRhdGE6IFBvc3RUeXBlKSA9PiB2b2lkXHJcblx0b25DbG9zZT86IChpc0VkaXQ6IGJvb2xlYW4pID0+IHZvaWRcclxuXHRpbml0aWFsVmFsdWU6IFBvc3RUeXBlXHJcblx0aXNFZGl0PzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQb3N0Rm9ybTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0b25TdWJtaXQsXHJcblx0aW5pdGlhbFZhbHVlLFxyXG5cdGlzRWRpdCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbG9zZVxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnNvbGUubG9nKCdyb3V0ZXInLCByb3V0ZXIpXHJcblx0Y29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZihpc0VkaXQpIG9uQ2xvc2UoZmFsc2UpXHJcblx0XHRyb3V0ZXIuYmFjaygpXHJcblx0fSwgW3JvdXRlcl0pXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG5hbWU9J3Bvc3QnIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZX0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuXHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdGxhYmVsPSdUaXRsZSdcclxuXHRcdFx0XHRuYW1lPSd0aXRsZSdcclxuXHRcdFx0XHRydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdGl0bGUgb2YgcG9zdCEnIH1dfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0IHBsYWNlaG9sZGVyPSdFbnRlciB0aXRsZSBvZiBwb3N0JyAvPlxyXG5cdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdGxhYmVsPSdCb2R5J1xyXG5cdFx0XHRcdG5hbWU9J2JvZHknXHJcblx0XHRcdFx0cnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGJvZHkgb2YgcG9zdCEnIH1dfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0IHBsYWNlaG9sZGVyPSdFbnRlciBib2R5IG9mIHBvc3QnIC8+XHJcblx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgaHRtbFR5cGU9J3N1Ym1pdCc+XHJcblx0XHRcdFx0XHR7aXNFZGl0ID8gJ1NhdmUnIDogJ0NyZWF0ZSd9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIGRhbmdlciBvbkNsaWNrPXtvbkNhbmNlbH0+XHJcblx0XHRcdFx0XHRDYW5jZWxcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0PC9Gb3JtPlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9