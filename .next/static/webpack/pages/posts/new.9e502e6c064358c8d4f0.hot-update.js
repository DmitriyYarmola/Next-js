webpackHotUpdate_N_E("pages/posts/new",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @UI/Organisms */ "./src/Components/UI/Organisms/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var _UI_Templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @UI/Templates */ "./src/Components/UI/Templates/index.ts");
/* harmony import */ var _UI_Molecules_SendMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @UI/Molecules/SendMessage */ "./src/Components/UI/Molecules/SendMessage.tsx");
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
})(["display:grid;justify-content:center;grid-row-gap:15px;text-align:center;"]);
_c2 = Information;
var PositionWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__PositionWrapped",
  componentId: "z17osf-2"
})(["display:grid;align-items:center;height:100%;"]);
_c3 = PositionWrapped;
var Actions = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Actions",
  componentId: "z17osf-3"
})(["display:grid;grid-template-columns:repeat(2,max-content);grid-column-gap:50px;margin-bottom:15px;justify-content:center;"]);
_c4 = Actions;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Title",
  componentId: "z17osf-4"
})(["font-weight:bold;"]);
_c5 = Title;
var Comments = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Comments",
  componentId: "z17osf-5"
})(["margin-top:20px;padding-left:20px;display:grid;grid-row-gap:10px;"]);
_c6 = Comments;
var Post = function Post(_ref) {
  _s();

  var post = _ref.post;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isEdit = _useState[0],
      setIsEdit = _useState[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = post.id,
      title = post.title,
      body = post.body,
      comments = post.comments;
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
  }, [isEdit]);
  var onGoBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    router.back();
  }, [router]);
  var onSendMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    dispatch({
      type: 'SEND_MESSAGE',
      payload: {
        body: value,
        postId: id
      }
    });
  }, [dispatch, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: function onClick() {
      return setIsEdit(!isEdit);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: onGoBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Comments:"), __jsx(_UI_Molecules_SendMessage__WEBPACK_IMPORTED_MODULE_8__["SendMessage"], {
    onSendMessage: onSendMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx(Comments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, comments.map(function (_ref2) {
    var body = _ref2.body,
        id = _ref2.id;
    return __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_6__["CommentItem"], {
      key: id,
      body: body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 18
      }
    });
  }))))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_7__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["CreatePostForm"], {
    isEdit: true,
    onSubmit: onEdit,
    initialValue: {
      title: title,
      body: body
    },
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 6
    }
  })));
};

_s(Post, "qaJeC7esvPBGQ2YzTQ+Ssib4eLE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c7 = Post;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Wrapped");
$RefreshReg$(_c2, "Information");
$RefreshReg$(_c3, "PositionWrapped");
$RefreshReg$(_c4, "Actions");
$RefreshReg$(_c5, "Title");
$RefreshReg$(_c6, "Comments");
$RefreshReg$(_c7, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJUaXRsZSIsIkNvbW1lbnRzIiwiUG9zdCIsInBvc3QiLCJ1c2VTdGF0ZSIsImlzRWRpdCIsInNldElzRWRpdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwib25FZGl0IiwidXNlQ2FsbGJhY2siLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJvbkNsb3NlIiwib25Hb0JhY2siLCJiYWNrIiwib25TZW5kTWVzc2FnZSIsInZhbHVlIiwicG9zdElkIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQWpCO01BQU1DLFc7QUFNTixJQUFNQyxlQUFlLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0RBQXJCO01BQU1FLGU7QUFLTixJQUFNQyxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0lBQWI7TUFBTUcsTztBQU9OLElBQU1DLEtBQUssR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5QkFBWDtNQUFNSSxLO0FBR04sSUFBTUMsUUFBUSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFB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QTtBQUFBO0FBQUEsS0FDRVQsUUFBUSxDQUFDWSxHQUFULENBQWEsaUJBQWtCO0FBQUEsUUFBZmIsSUFBZSxTQUFmQSxJQUFlO0FBQUEsUUFBVEYsRUFBUyxTQUFUQSxFQUFTO0FBQy9CLFdBQU8sTUFBQyxxREFBRDtBQUFhLFNBQUcsRUFBRUEsRUFBbEI7QUFBc0IsVUFBSSxFQUFFRSxJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDQSxHQUZBLENBREYsQ0FIRCxDQURELENBREQsQ0FURCxDQURELENBREQsRUEwQkVSLE1BQU0sSUFDTixNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQ0MsVUFBTSxNQURQO0FBRUMsWUFBUSxFQUFFVSxNQUZYO0FBR0MsZ0JBQVksRUFBRTtBQUFFSCxXQUFLLEVBQUxBLEtBQUY7QUFBU0MsVUFBSSxFQUFKQTtBQUFULEtBSGY7QUFJQyxXQUFPLEVBQUVPLE9BSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBM0JGLENBREQ7QUF1Q0EsQ0E5RE07O0dBQU1sQixJO1VBRUtNLHVELEVBQ0ZFLHFEOzs7TUFISFIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9uZXcuOWU1MDJlNmMwNjQzNThjOGQ0ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5pbXBvcnQgeyBDcmVhdGVQb3N0Rm9ybSwgUG9zdEluZm9ybWF0aW9uIH0gZnJvbSAnQFVJL09yZ2FuaXNtcydcclxuaW1wb3J0IHsgQ29tbWVudEl0ZW0gfSBmcm9tICdAVUkvQXRvbXMnXHJcbmltcG9ydCB7IE1vZGFsV2luZG93VGVtcGxhdGUgfSBmcm9tICdAVUkvVGVtcGxhdGVzJ1xyXG5pbXBvcnQgeyBTZW5kTWVzc2FnZSB9IGZyb20gJ0BVSS9Nb2xlY3VsZXMvU2VuZE1lc3NhZ2UnXHJcblxyXG5jb25zdCBXcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDU1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGdyaWQtcm93LWdhcDogMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuYFxyXG5jb25zdCBDb21tZW50cyA9IHN0eWxlZC5kaXZgXHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXJvdy1nYXA6IDEwcHg7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0cG9zdDogUG9zdEluZm9ybWF0aW9uVHlwZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgcG9zdCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCB7IGlkLCB0aXRsZSwgYm9keSwgY29tbWVudHMgfSA9IHBvc3RcclxuXHRjb25zdCBvbkVkaXQgPSB1c2VDYWxsYmFjayhcclxuXHRcdChkYXRhOiBQb3N0VHlwZSkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdFRElUX1BPU1QnLCBwYXlsb2FkOiB7IGlkLCBkYXRhIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2gsIGlkXVxyXG5cdClcclxuXHRjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0SXNFZGl0KCFpc0VkaXQpXHJcblx0fSwgW2lzRWRpdF0pXHJcblx0Y29uc3Qgb25Hb0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRyb3V0ZXIuYmFjaygpXHJcblx0fSwgW3JvdXRlcl0pXHJcblx0Y29uc3Qgb25TZW5kTWVzc2FnZSA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KHZhbHVlOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnU0VORF9NRVNTQUdFJywgcGF5bG9hZDogeyBib2R5OiB2YWx1ZSwgcG9zdElkOiBpZCB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxQb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdFx0PFdyYXBwZWQ+XHJcblx0XHRcdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdCghaXNFZGl0KX0+XHJcblx0XHRcdFx0XHRcdFx0RWRpdFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIG9uQ2xpY2s9e29uR29CYWNrfT5cclxuXHRcdFx0XHRcdFx0XHRHbyBiYWNrXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0XHRcdFx0PEluZm9ybWF0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8UG9zdEluZm9ybWF0aW9uIHRpdGxlPXt0aXRsZX0gYm9keT17Ym9keX0+XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUaXRsZT5Db21tZW50czo8L1RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbmRNZXNzYWdlIG9uU2VuZE1lc3NhZ2U9e29uU2VuZE1lc3NhZ2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKHsgYm9keSwgaWQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Q29tbWVudEl0ZW0ga2V5PXtpZH0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDwvSW5mb3JtYXRpb24+XHJcblx0XHRcdFx0PC9XcmFwcGVkPlxyXG5cdFx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0e2lzRWRpdCAmJiAoXHJcblx0XHRcdFx0PE1vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8Q3JlYXRlUG9zdEZvcm1cclxuXHRcdFx0XHRcdFx0aXNFZGl0XHJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXtvbkVkaXR9XHJcblx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZT17eyB0aXRsZSwgYm9keSB9fVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtvbkNsb3NlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L01vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==