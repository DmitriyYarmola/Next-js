webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./src/Components/Features/Posts/Organisms/Post.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/Features/Posts/Organisms/Post.tsx ***!
  \**********************************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _UI_Organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @UI/Organisms */ "./src/Components/UI/Organisms/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var _UI_Templates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @UI/Templates */ "./src/Components/UI/Templates/index.ts");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\Features\\Posts\\Organisms\\Post.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Wrapped = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Wrapped",
  componentId: "z17osf-0"
})(["display:grid;align-items:center;width:550px;margin:0 auto;"]);
_c = Wrapped;
var Information = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Information",
  componentId: "z17osf-1"
})([""]);
_c2 = Information;
var PositionWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__PositionWrapped",
  componentId: "z17osf-2"
})(["display:grid;align-items:center;height:100%;"]);
_c3 = PositionWrapped;
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Actions",
  componentId: "z17osf-3"
})(["margin-bottom:15px;"]);
_c4 = Actions;
var Post = function Post(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isEdit = _useState[0],
      setIsEdit = _useState[1];

  var id = post.id,
      title = post.title,
      body = post.body,
      comments = post.comments;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onEdit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    dispatch({
      type: 'EDIT_POST',
      payload: {
        id: id,
        data: data
      }
    });
  }, [dispatch, id]);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsEdit(!isEdit);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return setIsEdit(!isEdit);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Edit")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_4__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, comments.map(function (_ref2) {
    var body = _ref2.body,
        id = _ref2.id;
    return __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_5__["CommentItem"], {
      key: id,
      body: body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    });
  })))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_6__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_4__["CreatePostForm"], {
    isEdit: isEdit,
    onSubmit: onEdit,
    initialValue: {
      title: title,
      body: body
    },
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  })));
};

_s(Post, "7OP99MhMInJCNfnSsbqEt1mkIJ0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c5 = Post;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Wrapped");
$RefreshReg$(_c2, "Information");
$RefreshReg$(_c3, "PositionWrapped");
$RefreshReg$(_c4, "Actions");
$RefreshReg$(_c5, "Post");

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

/***/ }),

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
})(["position:absolute;z-index:5;top:50%;left:50%;transform:translate(-50%,-50%);background:rgb(255 255 255);padding:30px;border-radius:24px;"]);
_c2 = Wrapped;
var ModalWindowTemplate = function ModalWindowTemplate(_ref) {
  var children = _ref.children;
  return __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9VSS9UZW1wbGF0ZXMvTW9kYWxXaW5kb3dUZW1wbGF0ZS50c3giXSwibmFtZXMiOlsiV3JhcHBlZCIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uIiwiUG9zaXRpb25XcmFwcGVkIiwiQWN0aW9ucyIsIlBvc3QiLCJwb3N0IiwidXNlU3RhdGUiLCJpc0VkaXQiLCJzZXRJc0VkaXQiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uRWRpdCIsInVzZUNhbGxiYWNrIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIiwib25DbG9zZSIsIm1hcCIsIk1vZGFsV2luZG93VGVtcGxhdGUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTUMsVztBQUNOLElBQU1DLGVBQWUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBckI7TUFBTUUsZTtBQUtOLElBQU1DLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyQkFBYjtNQUFNRyxPO0FBTUMsSUFBTUMsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsSUFBK0IsUUFBL0JBLElBQStCOztBQUFBLGtCQUM5Q0Msc0RBQVEsQ0FBQyxLQUFELENBRHNDO0FB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QkFBMkMsT0FFOUI7QUFBQSxNQUR6QkMsUUFDeUIsUUFEekJBLFFBQ3lCO0FBQ3pCLFNBQ0MsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVQSxRQUFWLENBREQsQ0FERDtBQUtBLENBUk07TUFBTUQsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW2lkXS44YmMwZTU0OWIzNmFjODQ1NTY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogNTUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0cG9zdDogUG9zdEluZm9ybWF0aW9uVHlwZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgcG9zdCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGJvZHksIGNvbW1lbnRzIH0gPSBwb3N0XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnRURJVF9QT1NUJywgcGF5bG9hZDogeyBpZCwgZGF0YSB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0Y29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldElzRWRpdCghaXNFZGl0KVxyXG5cdH0sIFtdKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHRcdDxXcmFwcGVkPlxyXG5cdFx0XHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNFZGl0KCFpc0VkaXQpfT5FZGl0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHRcdFx0XHQ8SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHRcdDxQb3N0SW5mb3JtYXRpb24gdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoeyBib2R5LCBpZCB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Q29tbWVudEl0ZW0ga2V5PXtpZH0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDwvSW5mb3JtYXRpb24+XHJcblx0XHRcdFx0PC9XcmFwcGVkPlxyXG5cdFx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0e2lzRWRpdCAmJiAoXHJcblx0XHRcdFx0PE1vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8Q3JlYXRlUG9zdEZvcm1cclxuXHRcdFx0XHRcdFx0aXNFZGl0PXtpc0VkaXR9XHJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXtvbkVkaXR9XHJcblx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZT17eyB0aXRsZSwgYm9keSB9fVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtvbkNsb3NlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L01vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5jb25zdCBXcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogNTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0ICAgIGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IE1vZGFsV2luZG93VGVtcGxhdGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0PFdyYXBwZWQ+e2NoaWxkcmVufTwvV3JhcHBlZD5cclxuXHRcdDwvUG9zaXRpb25XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9