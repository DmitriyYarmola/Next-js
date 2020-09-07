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
})([""]);
_c4 = Actions;
var Post = function Post(_ref) {
  _s();

  var post = _ref.post;
  var id = post.id,
      title = post.title,
      body = post.body,
      comments = post.comments;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var onEdit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: 'EDIT_POST',
      payload: {
        id: id
      }
    });
  }, [dispatch, id]);
  return __jsx(PositionWrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: onEdit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  }, "Edit")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_4__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
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
        lineNumber: 41,
        columnNumber: 16
      }
    });
  }))))));
};

_s(Post, "HXjrGGCJTHa/Z+SGhXPrzUNakAQ=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Il0sIm5hbWVzIjpbIldyYXBwZWQiLCJzdHlsZWQiLCJkaXYiLCJJbmZvcm1hdGlvbiIsIlBvc2l0aW9uV3JhcHBlZCIsIkFjdGlvbnMiLCJQb3N0IiwicG9zdCIsImlkIiwidGl0bGUiLCJib2R5IiwiY29tbWVudHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25FZGl0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwicGF5bG9hZCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTUMsVztBQUNOLElBQU1DLGVBQWUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBckI7TUFBTUUsZTtBQUtOLElBQU1DLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxRQUFiO01BQU1HLE87QUFJQyxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUFrQztBQUFBOztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUNsRUMsRUFEa0UsR0FDcENELElBRG9DLENBQ2xFQyxFQURrRTtBQUFBLE1BQzlEQyxLQUQ4RCxHQUNwQ0YsSUFEb0MsQ0FDOURFLEtBRDhEO0FBQUEsTUFDdkRDLElBRHVELEdBQ3BDSCxJQURvQyxDQUN2REcsSUFEdUQ7QUFBQSxNQUNqREMsUUFEaUQsR0FDcENKLElBRG9DLENBQ2pESSxRQURpRDtBQUUxRSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDaENILFlBQVEsQ0FBQztBQUFFSSxVQUFJLEVBQUUsV0FBUjtBQUFxQkMsYUFBTyxFQUFFO0FBQUVULFVBQUUsRUFBRkE7QUFBRjtBQUE5QixLQUFELENBQVI7QUFDQSxHQUZ5QixFQUV2QixDQUFDSSxRQUFELEVBQVdKLEVBQVgsQ0FGdUIsQ0FBMUI7QUFHQSxTQUNDLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVNLE1BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxDQURELEVBSUMsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZEQUFEO0FBQWlCLFNBQUssRUFBRUwsS0FBeEI7QUFBK0IsUUFBSSxFQUFFQyxJQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsbUVBQ0VDLFFBQVEsQ0FBQ08sR0FBVCxDQUFhLGlCQUFrQjtBQUFBLFFBQWZSLElBQWUsU0FBZkEsSUFBZTtBQUFBLFFBQVRGLEVBQVMsU0FBVEEsRUFBUztBQUMvQixXQUFPLE1BQUMscURBQUQ7QUFBYSxTQUFHLEVBQUVBLEVBQWxCO0FBQXNCLFVBQUksRUFBRUUsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0EsR0FGQSxDQURGLENBREQsQ0FERCxDQUpELENBREQsQ0FERDtBQWtCQSxDQXhCTTs7R0FBTUosSTtVQUVLTyx1RDs7O01BRkxQLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW2lkXS5mNTJmNzU2NmNhMjg3ZTg0OGRiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA1NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBQb3NpdGlvbldyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbmBcclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0OiBQb3N0SW5mb3JtYXRpb25UeXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHsgaWQsIHRpdGxlLCBib2R5LCBjb21tZW50cyB9ID0gcG9zdFxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IG9uRWRpdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGRpc3BhdGNoKHsgdHlwZTogJ0VESVRfUE9TVCcsIHBheWxvYWQ6IHsgaWQgfSB9KVxyXG5cdH0sIFtkaXNwYXRjaCwgaWRdKVxyXG5cdHJldHVybiAoXHJcblx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17b25FZGl0fT5FZGl0PC9CdXR0b24+XHJcblx0XHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0XHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdDxQb3N0SW5mb3JtYXRpb24gdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fT5cclxuXHRcdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0XHR7Y29tbWVudHMubWFwKCh7IGJvZHksIGlkIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8Q29tbWVudEl0ZW0ga2V5PXtpZH0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdFx0PC8+XHJcblx0XHRcdFx0XHQ8L1Bvc3RJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHQ8L1dyYXBwZWQ+XHJcblx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHQpXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==