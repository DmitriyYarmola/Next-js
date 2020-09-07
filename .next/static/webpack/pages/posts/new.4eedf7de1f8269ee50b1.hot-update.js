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
})(["display:grid;grid-template-columns:repeat(2,max-content);grid-column-gap:50px;margin-bottom:15px;"]);
_c4 = Actions;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Title",
  componentId: "z17osf-4"
})(["font-weight:bold;"]);
_c5 = Title;
var Comments = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Comments",
  componentId: "z17osf-5"
})(["padding-left:20px;display:grid;grid-row-gap:10px;"]);
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
      lineNumber: 66,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
      lineNumber: 69,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: onGoBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, "Comments:"), __jsx(_UI_Molecules_SendMessage__WEBPACK_IMPORTED_MODULE_8__["SendMessage"], {
    onSendMessage: onSendMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx(Comments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
        lineNumber: 83,
        columnNumber: 18
      }
    });
  }))))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_7__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJUaXRsZSIsIkNvbW1lbnRzIiwiUG9zdCIsInBvc3QiLCJ1c2VTdGF0ZSIsImlzRWRpdCIsInNldElzRWRpdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwib25FZGl0IiwidXNlQ2FsbGJhY2siLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJvbkNsb3NlIiwib25Hb0JhY2siLCJiYWNrIiwib25TZW5kTWVzc2FnZSIsInZhbHVlIiwicG9zdElkIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTUMsVztBQUNOLElBQU1DLGVBQWUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBckI7TUFBTUUsZTtBQUtOLElBQU1DLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBYjtNQUFNRyxPO0FBTU4sSUFBTUMsS0FBSyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlCQUFYO01BQU1JLEs7QUFHTixJQUFNQyxRQUFRLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFB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O0FBQUE7QUFBQSxLQUNFVCxRQUFRLENBQUNZLEdBQVQsQ0FBYSxpQkFBa0I7QUFBQSxRQUFmYixJQUFlLFNBQWZBLElBQWU7QUFBQSxRQUFURixFQUFTLFNBQVRBLEVBQVM7QUFDL0IsV0FBTyxNQUFDLHFEQUFEO0FBQWEsU0FBRyxFQUFFQSxFQUFsQjtBQUFzQixVQUFJLEVBQUVFLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNBLEdBRkEsQ0FERixDQUhELENBREQsQ0FERCxDQVRELENBREQsQ0FERCxFQTBCRVIsTUFBTSxJQUNOLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxZQUFRLEVBQUVVLE1BRlg7QUFHQyxnQkFBWSxFQUFFO0FBQUVILFdBQUssRUFBTEEsS0FBRjtBQUFTQyxVQUFJLEVBQUpBO0FBQVQsS0FIZjtBQUlDLFdBQU8sRUFBRU8sT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0EzQkYsQ0FERDtBQXVDQSxDQTlETTs7R0FBTWxCLEk7VUFFS00sdUQsRUFDRkUscUQ7OztNQUhIUixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL25ldy40ZWVkZjdkZTFmODI2OWVlNTBiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSwgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IENyZWF0ZVBvc3RGb3JtLCBQb3N0SW5mb3JtYXRpb24gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5pbXBvcnQgeyBDb21tZW50SXRlbSB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTW9kYWxXaW5kb3dUZW1wbGF0ZSB9IGZyb20gJ0BVSS9UZW1wbGF0ZXMnXHJcbmltcG9ydCB7IFNlbmRNZXNzYWdlIH0gZnJvbSAnQFVJL01vbGVjdWxlcy9TZW5kTWVzc2FnZSdcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogNTUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5gXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuYFxyXG5jb25zdCBDb21tZW50cyA9IHN0eWxlZC5kaXZgXHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0cG9zdDogUG9zdEluZm9ybWF0aW9uVHlwZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgcG9zdCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCB7IGlkLCB0aXRsZSwgYm9keSwgY29tbWVudHMgfSA9IHBvc3RcclxuXHRjb25zdCBvbkVkaXQgPSB1c2VDYWxsYmFjayhcclxuXHRcdChkYXRhOiBQb3N0VHlwZSkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdFRElUX1BPU1QnLCBwYXlsb2FkOiB7IGlkLCBkYXRhIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2gsIGlkXVxyXG5cdClcclxuXHRjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0SXNFZGl0KCFpc0VkaXQpXHJcblx0fSwgW2lzRWRpdF0pXHJcblx0Y29uc3Qgb25Hb0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRyb3V0ZXIuYmFjaygpXHJcblx0fSwgW3JvdXRlcl0pXHJcblx0Y29uc3Qgb25TZW5kTWVzc2FnZSA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KHZhbHVlOiBzdHJpbmcpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnU0VORF9NRVNTQUdFJywgcGF5bG9hZDogeyBib2R5OiB2YWx1ZSwgcG9zdElkOiBpZCB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxQb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdFx0PFdyYXBwZWQ+XHJcblx0XHRcdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdCghaXNFZGl0KX0+XHJcblx0XHRcdFx0XHRcdFx0RWRpdFxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIG9uQ2xpY2s9e29uR29CYWNrfT5cclxuXHRcdFx0XHRcdFx0XHRHbyBiYWNrXHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0XHRcdFx0PEluZm9ybWF0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8UG9zdEluZm9ybWF0aW9uIHRpdGxlPXt0aXRsZX0gYm9keT17Ym9keX0+XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdDxUaXRsZT5Db21tZW50czo8L1RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlbmRNZXNzYWdlIG9uU2VuZE1lc3NhZ2U9e29uU2VuZE1lc3NhZ2V9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Q29tbWVudHM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKHsgYm9keSwgaWQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Q29tbWVudEl0ZW0ga2V5PXtpZH0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzPlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDwvSW5mb3JtYXRpb24+XHJcblx0XHRcdFx0PC9XcmFwcGVkPlxyXG5cdFx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0e2lzRWRpdCAmJiAoXHJcblx0XHRcdFx0PE1vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8Q3JlYXRlUG9zdEZvcm1cclxuXHRcdFx0XHRcdFx0aXNFZGl0XHJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXtvbkVkaXR9XHJcblx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZT17eyB0aXRsZSwgYm9keSB9fVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtvbkNsb3NlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L01vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==