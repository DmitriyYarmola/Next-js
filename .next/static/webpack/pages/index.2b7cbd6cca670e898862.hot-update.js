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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJQb3N0IiwicG9zdCIsInVzZVN0YXRlIiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwidGl0bGUiLCJib2R5IiwiY29tbWVudHMiLCJvbkVkaXQiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIm9uQ2xvc2UiLCJvbkdvQmFjayIsImJhY2siLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWI7S0FBTUYsTztBQU1OLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNQyxXO0FBQ04sSUFBTUMsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJCQUFiO01BQU1HLE87QUFNQyxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDLEtBQUQsQ0FEc0M7QUFBQSxNQUNuRUMsTUFEbUU7QUFBQSxNQUMzREMsU0FEMkQ7O0FBRTFFLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSDBFLE1BSWxFQyxFQUprRSxHQUlwQ1IsSUFKb0MsQ0FJbEVRLEVBSmtFO0FBQUEsTUFJOURDLEtBSjhELEdBSXBDVCxJQUpvQyxDQUk5RFMsS0FKOEQ7QUFBQSxNQUl2REMsSUFKdUQsR0FJcENWLElBSm9DLENBSXZEVSxJQUp1RDtBQUFBLE1BSWpEQyxRQUppRCxHQUlwQ1gsSUFKb0MsQ0FJakRXLFFBSmlEO0FBSzFFLE1BQU1DLE1BQU0sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0MsSUFBRCxFQUFvQjtBQUNuQlYsWUFBUSxDQUFDO0FBQUVXLFVBQUksRUFBRSxXQUFSO0FBQXFCQyxhQUFPLEVBQUU7QUFBRVIsVUFBRSxFQUFGQSxFQUFGO0FBQU1NLFlBQUksRUFBSkE7QUFBTjtBQUE5QixLQUFELENBQVI7QUFDQSxHQUh3QixFQUl6QixDQUFDVixRQUFELEVBQVdJLEVBQVgsQ0FKeUIsQ0FBMUI7QUFNQSxNQUFNUyxPQUFPLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNqQ1YsYUFBUyxDQUFDLENBQUNELE1BQUYsQ0FBVDtBQUNBLEdBRjBCLEVBRXhCLENBQUNBLE1BQUQsQ0FGd0IsQ0FBM0I7QUFHQSxNQUFNZ0IsUUFBUSxHQUFHTCx5REFBVyxDQUFDLFlBQU07QUFDbENQLFVBQU0sQ0FBQ2EsSUFBUDtBQUNBLEdBRjJCLEVBRXpCLENBQUNiLE1BQUQsQ0FGeUIsQ0FBNUI7QUFHQSxTQUNDLG1FQUNDLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNSCxTQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFmO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBRUMsTUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRWdCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRCxDQURELEVBS0MsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZEQUFEO0FBQWlCLFNBQUssRUFBRVQsS0FBeEI7QUFBK0IsUUFBSSxFQUFFQyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsbUVBQ0VDLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLGlCQUFrQjtBQUFBLFFBQWZWLElBQWUsU0FBZkEsSUFBZTtBQUFBLFFBQVRGLEVBQVMsU0FBVEEsRUFBUztBQUMvQixXQUFPLE1BQUMscURBQUQ7QUFBYSxTQUFHLEVBQUVBLEVBQWxCO0FBQXNCLFVBQUksRUFBRUUsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0EsR0FGQSxDQURGLENBREQsQ0FERCxDQUxELENBREQsQ0FERCxFQWtCRVIsTUFBTSxJQUNOLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxZQUFRLEVBQUVVLE1BRlg7QUFHQyxnQkFBWSxFQUFFO0FBQUVILFdBQUssRUFBTEEsS0FBRjtBQUFTQyxVQUFJLEVBQUpBO0FBQVQsS0FIZjtBQUlDLFdBQU8sRUFBRU8sT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FuQkYsQ0FERDtBQStCQSxDQWhETTs7R0FBTWxCLEk7VUFFS00sdUQsRUFDRkUscUQ7OztNQUhIUixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJiN2NiZDZjY2E2NzBlODk4ODYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5pbXBvcnQgeyBDcmVhdGVQb3N0Rm9ybSwgUG9zdEluZm9ybWF0aW9uIH0gZnJvbSAnQFVJL09yZ2FuaXNtcydcclxuaW1wb3J0IHsgQ29tbWVudEl0ZW0gfSBmcm9tICdAVUkvQXRvbXMnXHJcbmltcG9ydCB7IE1vZGFsV2luZG93VGVtcGxhdGUgfSBmcm9tICdAVUkvVGVtcGxhdGVzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogNTUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0cG9zdDogUG9zdEluZm9ybWF0aW9uVHlwZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgcG9zdCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHRjb25zdCB7IGlkLCB0aXRsZSwgYm9keSwgY29tbWVudHMgfSA9IHBvc3RcclxuXHRjb25zdCBvbkVkaXQgPSB1c2VDYWxsYmFjayhcclxuXHRcdChkYXRhOiBQb3N0VHlwZSkgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdFRElUX1BPU1QnLCBwYXlsb2FkOiB7IGlkLCBkYXRhIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2gsIGlkXVxyXG5cdClcclxuXHRjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0c2V0SXNFZGl0KCFpc0VkaXQpXHJcblx0fSwgW2lzRWRpdF0pXHJcblx0Y29uc3Qgb25Hb0JhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRyb3V0ZXIuYmFjaygpXHJcblx0fSwgW3JvdXRlcl0pXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxQb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdFx0PFdyYXBwZWQ+XHJcblx0XHRcdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXQoIWlzRWRpdCl9PkVkaXQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtvbkdvQmFja30+R28gYmFjazwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0XHRcdFx0PEluZm9ybWF0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8UG9zdEluZm9ybWF0aW9uIHRpdGxlPXt0aXRsZX0gYm9keT17Ym9keX0+XHJcblx0XHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKHsgYm9keSwgaWQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnRJdGVtIGtleT17aWR9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0PC9Qb3N0SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHRcdDwvV3JhcHBlZD5cclxuXHRcdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdHtpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxNb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PENyZWF0ZVBvc3RGb3JtXHJcblx0XHRcdFx0XHRcdGlzRWRpdFxyXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25FZGl0fVxyXG5cdFx0XHRcdFx0XHRpbml0aWFsVmFsdWU9e3sgdGl0bGUsIGJvZHkgfX1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17b25DbG9zZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Nb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=