webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9VSS9PcmdhbmlzbXMvRm9ybXMvQ3JlYXRlUG9zdC50c3giXSwibmFtZXMiOlsiV3JhcHBlZCIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uIiwiUG9zaXRpb25XcmFwcGVkIiwiQWN0aW9ucyIsIlBvc3QiLCJwb3N0IiwidXNlU3RhdGUiLCJpc0VkaXQiLCJzZXRJc0VkaXQiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uRWRpdCIsInVzZUNhbGxiYWNrIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIiwib25DbG9zZSIsIm1hcCIsIkNyZWF0ZVBvc3RGb3JtIiwib25TdWJtaXQiLCJpbml0aWFsVmFsdWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwib25DYW5jZWwiLCJiYWNrIiwicmVxdWlyZWQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWI7S0FBTUYsTztBQU1OLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNQyxXO0FBQ04sSUFBTUMsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJCQUFiO01BQU1HLE87QUFNQyxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0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QUFrQkMsYUFBTyxFQUFFO0FBQTNCLEtBQUQsQ0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQywwQ0FBRDtBQUFPLGVBQVcsRUFBQyxvQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBUkQsRUFlQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFRLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFekIsTUFBTSxHQUFHLE1BQUgsR0FBWSxRQURwQixDQURELEVBSUMsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFVBQU0sTUFBNUI7QUFBNkIsV0FBTyxFQUFFc0IsUUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpELENBZkQsQ0FERDtBQTBCQSxDQXhDTTs7R0FBTVAsYztVQU1HSSxxRDs7O01BTkhKLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kYjNkNzdiMTA5MjgxZDcyZWQ0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogNTUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0cG9zdDogUG9zdEluZm9ybWF0aW9uVHlwZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgcG9zdCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGJvZHksIGNvbW1lbnRzIH0gPSBwb3N0XHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnRURJVF9QT1NUJywgcGF5bG9hZDogeyBpZCwgZGF0YSB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0Y29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldElzRWRpdCghaXNFZGl0KVxyXG5cdH0sIFtdKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHRcdDxXcmFwcGVkPlxyXG5cdFx0XHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0SXNFZGl0KCFpc0VkaXQpfT5FZGl0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHRcdFx0XHQ8SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHRcdDxQb3N0SW5mb3JtYXRpb24gdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoeyBib2R5LCBpZCB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Q29tbWVudEl0ZW0ga2V5PXtpZH0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDwvSW5mb3JtYXRpb24+XHJcblx0XHRcdFx0PC9XcmFwcGVkPlxyXG5cdFx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0e2lzRWRpdCAmJiAoXHJcblx0XHRcdFx0PE1vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8Q3JlYXRlUG9zdEZvcm0gb25TdWJtaXQ9e29uRWRpdH0gaW5pdGlhbFZhbHVlPXt7dGl0bGUsIGJvZHl9fSBvbkNsb3NlPXtvbkNsb3NlfS8+XHJcblx0XHRcdFx0PC9Nb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdG9uU3VibWl0OiAoZGF0YTogUG9zdFR5cGUpID0+IHZvaWRcclxuXHRvbkNsb3NlPzogKCkgPT4gdm9pZFxyXG5cdGluaXRpYWxWYWx1ZTogUG9zdFR5cGVcclxuXHRpc0VkaXQ/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3RGb3JtOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRvblN1Ym1pdCxcclxuXHRpbml0aWFsVmFsdWUsXHJcblx0aXNFZGl0LFxyXG5cdG9uQ2xvc2UsXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc29sZS5sb2coJ3JvdXRlcicsIHJvdXRlcilcclxuXHRjb25zdCBvbkNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGlmIChpc0VkaXQgJiYgb25DbG9zZSkge1xyXG5cdFx0XHRvbkNsb3NlKClcclxuXHRcdH1cclxuXHRcdHJvdXRlci5iYWNrKClcclxuXHR9LCBbcm91dGVyLCBpc0VkaXQsIG9uQ2xvc2VdKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBuYW1lPSdwb3N0JyBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWV9IG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcblx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRsYWJlbD0nVGl0bGUnXHJcblx0XHRcdFx0bmFtZT0ndGl0bGUnXHJcblx0XHRcdFx0cnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIHRpdGxlIG9mIHBvc3QhJyB9XX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxJbnB1dCBwbGFjZWhvbGRlcj0nRW50ZXIgdGl0bGUgb2YgcG9zdCcgLz5cclxuXHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdDxGb3JtLkl0ZW1cclxuXHRcdFx0XHRsYWJlbD0nQm9keSdcclxuXHRcdFx0XHRuYW1lPSdib2R5J1xyXG5cdFx0XHRcdHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciBib2R5IG9mIHBvc3QhJyB9XX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxJbnB1dCBwbGFjZWhvbGRlcj0nRW50ZXIgYm9keSBvZiBwb3N0JyAvPlxyXG5cdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIGh0bWxUeXBlPSdzdWJtaXQnPlxyXG5cdFx0XHRcdFx0e2lzRWRpdCA/ICdTYXZlJyA6ICdDcmVhdGUnfVxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBkYW5nZXIgb25DbGljaz17b25DYW5jZWx9PlxyXG5cdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdDwvRm9ybT5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==