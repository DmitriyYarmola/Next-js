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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      return setIsEdit(!isEdit);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onGoBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_4__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
        lineNumber: 58,
        columnNumber: 17
      }
    });
  })))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_6__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_4__["CreatePostForm"], {
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
      lineNumber: 67,
      columnNumber: 6
    }
  })));
};

_s(Post, "rTLGU+inyv/QswWSmzEMnAscM+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJQb3N0IiwicG9zdCIsInVzZVN0YXRlIiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwidGl0bGUiLCJib2R5IiwiY29tbWVudHMiLCJvbkVkaXQiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIm9uQ2xvc2UiLCJvbkdvQmFjayIsImJhY2siLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWI7S0FBTUYsTztBQU1OLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNQyxXO0FBQ04sSUFBTUMsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJCQUFiO01BQU1HLE87QUFNQyxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDLEtBQUQsQ0FEc0M7QUFBQSxNQUNuRUMsTUFEbUU7QUFBQSxNQUMzREMsU0FEMkQ7O0FBRTFFLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSDBFLE1BSWxFQyxFQUprRSxHQUlwQ1IsSUFKb0MsQ0FJbEVRLEVBSmtFO0FBQUEsTUFJOURDLEtBSjhELEdBSXBDVCxJQUpvQyxDQUk5RFMsS0FKOEQ7QUFBQSxNQUl2REMsSUFKdUQsR0FJcENWLElBSm9DLENBSXZEVSxJQUp1RDtBQUFBLE1BSWpEQyxRQUppRCxHQUlwQ1gsSUFKb0MsQ0FJakRXLFFBSmlEO0FBSzFFLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0MsSUFBRCxFQUFvQjtBQUNuQlYsWUFBUSxDQUFDO0FBQUVXLFVBQUksRUFBRSxXQUFSO0FBQXFCQyxhQUFPLEVBQUU7QUFBRVIsVUFBRSxFQUFGQSxFQUFGO0FBQU1NLFlBQUksRUFBSkE7QUFBTjtBQUE5QixLQUFELENBQVI7QUFDQSxHQUh3QixFQUl6QixDQUFDVixRQUFELEVBQVdJLEVBQVgsQ0FKeUIsQ0FBMUI7QUFNQSxNQUFNUyxPQUFPLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNqQ1YsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNBLEdBRjBCLEVBRXhCLENBQUNBLE1BQUQsQ0FGd0IsQ0FBM0I7QUFHQSxNQUFNZ0IsUUFBUSxHQUFHTCx5REFBVyxDQUFDLFlBQU07QUFDbENQLFVBQU0sQ0FBQ2EsSUFBUDtBQUNBLEdBRjJCLEVBRXpCLENBQUNiLE1BQUQsQ0FGeUIsQ0FBNUI7QUFHQSxTQUNDLG1FQUNDLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNSCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBRUMsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRWdCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxDQURELEVBS0MsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZEQUFEO0FBQWlCLFNBQUssRUFBRVQsS0FBeEI7QUFBK0IsUUFBSSxFQUFFQyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsbUVBQ0VDLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLGlCQUFrQjtBQUFBLFFBQWZWLElBQWUsU0FBZkEsSUFBZTtBQUFBLFFBQVRGLEVBQVMsU0FBVEEsRUFBUztBQUMvQixXQUFPLE1BQUMscURBQUQ7QUFBYSxTQUFHLEVBQUVBLEVBQWxCO0FBQXNCLFVBQUksRUFBRUUsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0EsR0FGQSxDQURGLENBREQsQ0FERCxDQUxELENBREQsQ0FERCxFQWtCRVIsTUFBTSxJQUNOLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxZQUFRLEVBQUVVLE1BRlg7QUFHQyxnQkFBWSxFQUFFO0FBQUVILFdBQUssRUFBTEEsS0FBRjtBQUFTQyxVQUFJLEVBQUpBO0FBQVQsS0FIZjtBQUlDLFdBQU8sRUFBRU8sT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FuQkYsQ0FERDtBQStCQSxDQWhETTs7R0FBTWxCLEk7VUFFS00sdUQsRUFDRkUscUQ7OztNQUhIUixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uMmI3Y2JkNmNjYTY3MGU4OTg4NjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSwgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IENyZWF0ZVBvc3RGb3JtLCBQb3N0SW5mb3JtYXRpb24gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5pbXBvcnQgeyBDb21tZW50SXRlbSB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTW9kYWxXaW5kb3dUZW1wbGF0ZSB9IGZyb20gJ0BVSS9UZW1wbGF0ZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA1NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBQb3NpdGlvbldyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbmBcclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0OiBQb3N0SW5mb3JtYXRpb25UeXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtpc0VkaXQsIHNldElzRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IHsgaWQsIHRpdGxlLCBib2R5LCBjb21tZW50cyB9ID0gcG9zdFxyXG5cdGNvbnN0IG9uRWRpdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGRhdGE6IFBvc3RUeXBlKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0VESVRfUE9TVCcsIHBheWxvYWQ6IHsgaWQsIGRhdGEgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRJc0VkaXQoIWlzRWRpdClcclxuXHR9LCBbaXNFZGl0XSlcclxuXHRjb25zdCBvbkdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHJvdXRlci5iYWNrKClcclxuXHR9LCBbcm91dGVyXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRWRpdCghaXNFZGl0KX0+RWRpdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e29uR29CYWNrfT5HbyBiYWNrPC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHRcdFx0XHQ8SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHRcdDxQb3N0SW5mb3JtYXRpb24gdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoeyBib2R5LCBpZCB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Q29tbWVudEl0ZW0ga2V5PXtpZH0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDwvSW5mb3JtYXRpb24+XHJcblx0XHRcdFx0PC9XcmFwcGVkPlxyXG5cdFx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0e2lzRWRpdCAmJiAoXHJcblx0XHRcdFx0PE1vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8Q3JlYXRlUG9zdEZvcm1cclxuXHRcdFx0XHRcdFx0aXNFZGl0XHJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXtvbkVkaXR9XHJcblx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZT17eyB0aXRsZSwgYm9keSB9fVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtvbkNsb3NlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L01vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==