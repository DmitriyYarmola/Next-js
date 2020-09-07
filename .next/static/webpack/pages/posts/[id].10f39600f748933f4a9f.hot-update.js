webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Features_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Features/Posts */ "./src/Components/Features/Posts/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\pages\\posts\\[id].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var PostPage = function PostPage() {
  _s();

  var isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_Features_Posts__WEBPACK_IMPORTED_MODULE_2__["PostsSelectors"].isLoading);
  var post = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_Features_Posts__WEBPACK_IMPORTED_MODULE_2__["PostsSelectors"].post);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: 'VIEW_POST',
      payload: {
        id: router.query.id
      }
    });
  }, [dispatch, router.query.id]);
  if (id && !post && !isLoading) router.push('/');
  return !isLoading && post ? __jsx(_Features_Posts__WEBPACK_IMPORTED_MODULE_2__["Post"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 30
    }
  }) : __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_3__["Preloader"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 53
    }
  });
};

_s(PostPage, "m9nKLMeNdD/jcH4aD6jTiAAidoY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = PostPage;
/* harmony default export */ __webpack_exports__["default"] = (PostPage);

var _c;

$RefreshReg$(_c, "PostPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvLnRzeCJdLCJuYW1lcyI6WyJQb3N0UGFnZSIsImlzTG9hZGluZyIsInVzZVNlbGVjdG9yIiwiUG9zdHNTZWxlY3RvcnMiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInR5cGUiLCJwYXlsb2FkIiwiaWQiLCJxdWVyeSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBMEI7QUFBQTs7QUFDMUMsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDQyw4REFBYyxDQUFDRixTQUFoQixDQUE3QjtBQUNBLE1BQU1HLElBQUksR0FBR0YsK0RBQVcsQ0FBQ0MsOERBQWMsQ0FBQ0MsSUFBaEIsQ0FBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZkosWUFBUSxDQUFDO0FBQUVLLFVBQUksRUFBRSxXQUFSO0FBQXFCQyxhQUFPLEVBQUU7QUFBRUMsVUFBRSxFQUFFTCxNQUFNLENBQUNNLEtBQVAsQ0FBYUQ7QUFBbkI7QUFBOUIsS0FBRCxDQUFSO0FBQ0EsR0FGUSxFQUVOLENBQUNQLFFBQUQsRUFBV0UsTUFBTSxDQUFDTSxLQUFQLENBQWFELEVBQXhCLENBRk0sQ0FBVDtBQUdBLE1BQUlBLEVBQUUsSUFBSSxDQUFDUixJQUFQLElBQWUsQ0FBQ0gsU0FBcEIsRUFBK0JNLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLEdBQVo7QUFDL0IsU0FBTyxDQUFDYixTQUFELElBQWNHLElBQWQsR0FBcUIsTUFBQyxvREFBRDtBQUFNLFFBQUksRUFBRUEsSUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJCLEdBQTRDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFuRDtBQUNBLENBVkQ7O0dBQU1KLFE7VUFDYUUsdUQsRUFDTEEsdUQsRUFDSUksdUQsRUFDRkUscUQ7OztLQUpWUixRO0FBWVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uMTBmMzk2MDBmNzQ4OTMzZjRhOWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBQb3N0c1NlbGVjdG9ycywgUG9zdCB9IGZyb20gJ0BGZWF0dXJlcy9Qb3N0cydcclxuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQb3N0UGFnZSA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKFBvc3RzU2VsZWN0b3JzLmlzTG9hZGluZylcclxuXHRjb25zdCBwb3N0ID0gdXNlU2VsZWN0b3IoUG9zdHNTZWxlY3RvcnMucG9zdClcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCh7IHR5cGU6ICdWSUVXX1BPU1QnLCBwYXlsb2FkOiB7IGlkOiByb3V0ZXIucXVlcnkuaWQgfSB9KVxyXG5cdH0sIFtkaXNwYXRjaCwgcm91dGVyLnF1ZXJ5LmlkXSlcclxuXHRpZiAoaWQgJiYgIXBvc3QgJiYgIWlzTG9hZGluZykgcm91dGVyLnB1c2goJy8nKVxyXG5cdHJldHVybiAhaXNMb2FkaW5nICYmIHBvc3QgPyA8UG9zdCBwb3N0PXtwb3N0fSAvPiA6IDxQcmVsb2FkZXIgLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==