webpackHotUpdate_N_E("pages/index",{

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
    if (isEdit && onClose) {
      onClose();
    }

    router.back();
  }, [router, isEdit, onClose]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "post",
    initialValues: initialValue,
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter title of post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 42,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter body of post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  })), __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, isEdit ? 'Save' : 'Create'), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    danger: true,
    onClick: onCancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9VSS9PcmdhbmlzbXMvRm9ybXMvQ3JlYXRlUG9zdC50c3giXSwibmFtZXMiOlsiV3JhcHBlZCIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uIiwiUG9zaXRpb25XcmFwcGVkIiwiQWN0aW9ucyIsIlBvc3QiLCJwb3N0IiwidXNlU3RhdGUiLCJpc0VkaXQiLCJzZXRJc0VkaXQiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uRWRpdCIsInVzZUNhbGxiYWNrIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIiwib25DbG9zZSIsIm1hcCIsIkNyZWF0ZVBvc3RGb3JtIiwib25TdWJtaXQiLCJpbml0aWFsVmFsdWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwib25DYW5jZWwiLCJiYWNrIiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWI7S0FBTUYsTztBQU1OLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNQyxXO0FBQ04sSUFBTUMsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJCQUFiO01BQU1HLE87QUFNQyxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0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QUFrQkMsYUFBTyxFQUFFO0FBQTNCLEtBQUQsQ0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQywwQ0FBRDtBQUFPLGVBQVcsRUFBQyxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBUkQsRUFlQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFRLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFekIsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQURwQixDQURELEVBSUMsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFVBQU0sTUFBNUI7QUFBNkIsV0FBTyxFQUFFc0IsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELENBZkQsQ0FERDtBQTBCQSxDQXhDTTs7R0FBTVAsYztVQU1HSSxxRDs7O01BTkhKLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGIzZDc3YjEwOTI4MWQ3MmVkNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSwgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IENyZWF0ZVBvc3RGb3JtLCBQb3N0SW5mb3JtYXRpb24gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5pbXBvcnQgeyBDb21tZW50SXRlbSB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTW9kYWxXaW5kb3dUZW1wbGF0ZSB9IGZyb20gJ0BVSS9UZW1wbGF0ZXMnXHJcblxyXG5jb25zdCBXcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDU1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IFBvc2l0aW9uV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3Q6IFBvc3RJbmZvcm1hdGlvblR5cGVcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3QgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IHsgaWQsIHRpdGxlLCBib2R5LCBjb21tZW50cyB9ID0gcG9zdFxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IG9uRWRpdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGRhdGE6IFBvc3RUeXBlKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0VESVRfUE9TVCcsIHBheWxvYWQ6IHsgaWQsIGRhdGEgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRJc0VkaXQoIWlzRWRpdClcclxuXHR9LCBbXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdCghaXNFZGl0KX0+RWRpdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0XHRcdFx0PEluZm9ybWF0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8UG9zdEluZm9ybWF0aW9uIHRpdGxlPXt0aXRsZX0gYm9keT17Ym9keX0+XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKHsgYm9keSwgaWQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnRJdGVtIGtleT17aWR9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0PC9Qb3N0SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHRcdDwvV3JhcHBlZD5cclxuXHRcdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdHtpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxNb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PENyZWF0ZVBvc3RGb3JtIG9uU3VibWl0PXtvbkVkaXR9IGluaXRpYWxWYWx1ZT17e3RpdGxlLCBib2R5fX0gb25DbG9zZT17b25DbG9zZX0vPlxyXG5cdFx0XHRcdDwvTW9kYWxXaW5kb3dUZW1wbGF0ZT5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRvblN1Ym1pdDogKGRhdGE6IFBvc3RUeXBlKSA9PiB2b2lkXHJcblx0b25DbG9zZT86ICgpID0+IHZvaWRcclxuXHRpbml0aWFsVmFsdWU6IFBvc3RUeXBlXHJcblx0aXNFZGl0PzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQb3N0Rm9ybTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0b25TdWJtaXQsXHJcblx0aW5pdGlhbFZhbHVlLFxyXG5cdGlzRWRpdCxcclxuXHRvbkNsb3NlLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnNvbGUubG9nKCdyb3V0ZXInLCByb3V0ZXIpXHJcblx0Y29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoaXNFZGl0ICYmIG9uQ2xvc2UpIHtcclxuXHRcdFx0b25DbG9zZSgpXHJcblx0XHR9XHJcblx0XHRyb3V0ZXIuYmFjaygpXHJcblx0fSwgW3JvdXRlciwgaXNFZGl0LCBvbkNsb3NlXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm0gbmFtZT0ncG9zdCcgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlfSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG5cdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0bGFiZWw9J1RpdGxlJ1xyXG5cdFx0XHRcdG5hbWU9J3RpdGxlJ1xyXG5cdFx0XHRcdHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB0aXRsZSBvZiBwb3N0IScgfV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIHRpdGxlIG9mIHBvc3QnIC8+XHJcblx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0bGFiZWw9J0JvZHknXHJcblx0XHRcdFx0bmFtZT0nYm9keSdcclxuXHRcdFx0XHRydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYm9keSBvZiBwb3N0IScgfV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIGJvZHkgb2YgcG9zdCcgLz5cclxuXHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBodG1sVHlwZT0nc3VibWl0Jz5cclxuXHRcdFx0XHRcdHtpc0VkaXQgPyAnU2F2ZScgOiAnQ3JlYXRlJ31cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgZGFuZ2VyIG9uQ2xpY2s9e29uQ2FuY2VsfT5cclxuXHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=