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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @UI/Organisms */ "./src/Components/UI/Organisms/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var _UI_Templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @UI/Templates */ "./src/Components/UI/Templates/index.ts");
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: onGoBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 8
    }
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, comments.map(function (_ref2) {
    var body = _ref2.body,
        id = _ref2.id;
    return __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_6__["CommentItem"], {
      key: id,
      body: body,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    });
  })))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_7__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
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
      lineNumber: 75,
      columnNumber: 6
    }
  })));
};

_s(Post, "rTLGU+inyv/QswWSmzEMnAscM+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJQb3N0IiwicG9zdCIsInVzZVN0YXRlIiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwidGl0bGUiLCJib2R5IiwiY29tbWVudHMiLCJvbkVkaXQiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIm9uQ2xvc2UiLCJvbkdvQmFjayIsImJhY2siLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQWI7S0FBTUYsTztBQU1OLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNQyxXO0FBQ04sSUFBTUMsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9EQUFyQjtNQUFNRSxlO0FBS04sSUFBTUMsT0FBTyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlHQUFiO01BQU1HLE87QUFTQyxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7O0FBQUEsa0JBQzlDQyxzREFBUSxDQUFDLEtBQUQsQ0FEc0M7QUFBQSxNQUNuRUMsTUFEbUU7QUFBQSxNQUMzREMsU0FEMkQ7O0FBRTFFLE1BQU1DLFFBQVEsR0FBR0Ms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SFIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9baWRdLmQyNzU2YWI5MzRlMzExYmFmYjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogNTUwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YGBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogNTBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3Q6IFBvc3RJbmZvcm1hdGlvblR5cGVcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3QgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGJvZHksIGNvbW1lbnRzIH0gPSBwb3N0XHJcblx0Y29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnRURJVF9QT1NUJywgcGF5bG9hZDogeyBpZCwgZGF0YSB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0Y29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldElzRWRpdCghaXNFZGl0KVxyXG5cdH0sIFtpc0VkaXRdKVxyXG5cdGNvbnN0IG9uR29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0cm91dGVyLmJhY2soKVxyXG5cdH0sIFtyb3V0ZXJdKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHRcdDxXcmFwcGVkPlxyXG5cdFx0XHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXQoIWlzRWRpdCl9PlxyXG5cdFx0XHRcdFx0XHRcdEVkaXRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXtvbkdvQmFja30+XHJcblx0XHRcdFx0XHRcdFx0R28gYmFja1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdFx0XHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdFx0PFBvc3RJbmZvcm1hdGlvbiB0aXRsZT17dGl0bGV9IGJvZHk9e2JvZHl9PlxyXG5cdFx0XHRcdFx0XHRcdDxUaXRsZT48L1RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHR7Y29tbWVudHMubWFwKCh7IGJvZHksIGlkIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxDb21tZW50SXRlbSBrZXk9e2lkfSBib2R5PXtib2R5fSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0fSl9XHJcblx0XHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHRcdDwvUG9zdEluZm9ybWF0aW9uPlxyXG5cdFx0XHRcdFx0PC9JbmZvcm1hdGlvbj5cclxuXHRcdFx0XHQ8L1dyYXBwZWQ+XHJcblx0XHRcdDwvUG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHR7aXNFZGl0ICYmIChcclxuXHRcdFx0XHQ8TW9kYWxXaW5kb3dUZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDxDcmVhdGVQb3N0Rm9ybVxyXG5cdFx0XHRcdFx0XHRpc0VkaXRcclxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9e29uRWRpdH1cclxuXHRcdFx0XHRcdFx0aW5pdGlhbFZhbHVlPXt7IHRpdGxlLCBib2R5IH19XHJcblx0XHRcdFx0XHRcdG9uQ2xvc2U9e29uQ2xvc2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvTW9kYWxXaW5kb3dUZW1wbGF0ZT5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9