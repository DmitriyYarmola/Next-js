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
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Title",
  componentId: "z17osf-4"
})([""]);
_c5 = Title;
var Comments = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Post__Comments",
  componentId: "z17osf-5"
})(["padding-left:20px;"]);
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 58,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: onGoBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 8
    }
  }, "Comments"), __jsx(Comments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
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
        lineNumber: 70,
        columnNumber: 17
      }
    });
  })))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_7__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 6
    }
  })));
};

_s(Post, "rTLGU+inyv/QswWSmzEMnAscM+M=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJUaXRsZSIsIkNvbW1lbnRzIiwiUG9zdCIsInBvc3QiLCJ1c2VTdGF0ZSIsImlzRWRpdCIsInNldElzRWRpdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInRpdGxlIiwiYm9keSIsImNvbW1lbnRzIiwib25FZGl0IiwidXNlQ2FsbGJhY2siLCJkYXRhIiwidHlwZSIsInBheWxvYWQiLCJvbkNsb3NlIiwib25Hb0JhY2siLCJiYWNrIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTUMsVztBQUNOLElBQU1DLGVBQWUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBckI7TUFBTUUsZTtBQUtOLElBQU1DLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBYjtNQUFNRyxPO0FBTU4sSUFBTUMsS0FBSyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQVg7TUFBTUksSztBQUNOLElBQU1DLFFBQVEsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBZDtNQUFNSyxRO0FBTUMsSUFBTUMsSUFBeUIsR0FB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LFlBQVEsRUFBRVUsTUFGWDtBQUdDLGdCQUFZLEVBQUU7QUFBRUgsV0FBSyxFQUFMQSxLQUFGO0FBQVNDLFVBQUksRUFBSkE7QUFBVCxLQUhmO0FBSUMsV0FBTyxFQUFFTyxPQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQXhCRixDQUREO0FBb0NBLENBckRNOztHQUFNbEIsSTtVQUVLTSx1RCxFQUNGRSxxRDs7O01BSEhSLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jYTQ3OGI2MDM3ZWEyNGUxN2ZmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSwgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IENyZWF0ZVBvc3RGb3JtLCBQb3N0SW5mb3JtYXRpb24gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5pbXBvcnQgeyBDb21tZW50SXRlbSB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTW9kYWxXaW5kb3dUZW1wbGF0ZSB9IGZyb20gJ0BVSS9UZW1wbGF0ZXMnXHJcblxyXG5jb25zdCBXcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDU1MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmNvbnN0IEluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IFBvc2l0aW9uV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBDb21tZW50cyA9IHN0eWxlZC5kaXZgXHJcbnBhZGRpbmctbGVmdDogMjBweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0OiBQb3N0SW5mb3JtYXRpb25UeXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtpc0VkaXQsIHNldElzRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IHsgaWQsIHRpdGxlLCBib2R5LCBjb21tZW50cyB9ID0gcG9zdFxyXG5cdGNvbnN0IG9uRWRpdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGRhdGE6IFBvc3RUeXBlKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0VESVRfUE9TVCcsIHBheWxvYWQ6IHsgaWQsIGRhdGEgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRJc0VkaXQoIWlzRWRpdClcclxuXHR9LCBbaXNFZGl0XSlcclxuXHRjb25zdCBvbkdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHJvdXRlci5iYWNrKClcclxuXHR9LCBbcm91dGVyXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0KCFpc0VkaXQpfT5cclxuXHRcdFx0XHRcdFx0XHRFZGl0XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgb25DbGljaz17b25Hb0JhY2t9PlxyXG5cdFx0XHRcdFx0XHRcdEdvIGJhY2tcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHRcdFx0XHQ8SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHRcdDxQb3N0SW5mb3JtYXRpb24gdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8VGl0bGU+Q29tbWVudHM8L1RpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdDxDb21tZW50cz5cclxuXHRcdFx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKHsgYm9keSwgaWQgfSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnRJdGVtIGtleT17aWR9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0XHQ8L0NvbW1lbnRzPlxyXG5cdFx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDwvSW5mb3JtYXRpb24+XHJcblx0XHRcdFx0PC9XcmFwcGVkPlxyXG5cdFx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0e2lzRWRpdCAmJiAoXHJcblx0XHRcdFx0PE1vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8Q3JlYXRlUG9zdEZvcm1cclxuXHRcdFx0XHRcdFx0aXNFZGl0XHJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXtvbkVkaXR9XHJcblx0XHRcdFx0XHRcdGluaXRpYWxWYWx1ZT17eyB0aXRsZSwgYm9keSB9fVxyXG5cdFx0XHRcdFx0XHRvbkNsb3NlPXtvbkNsb3NlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L01vZGFsV2luZG93VGVtcGxhdGU+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==