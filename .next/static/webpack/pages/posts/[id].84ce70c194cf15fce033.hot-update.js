webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./src/Components/Features/Posts/Model/index.ts":
/*!******************************************************!*\
  !*** ./src/Components/Features/Posts/Model/index.ts ***!
  \******************************************************/
/*! exports provided: PostsSelectors, PostsRootReducer, PostsInitialValue, PostsActions, PostsRootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/Components/Features/Posts/Model/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PostsSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/Components/Features/Posts/Model/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsInitialValue", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["initialValue"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/Components/Features/Posts/Model/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["actions"]; });

/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ "./src/Components/Features/Posts/Model/saga.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["rootSaga"]; });







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

/***/ "./src/Components/Features/Posts/index.ts":
/*!************************************************!*\
  !*** ./src/Components/Features/Posts/index.ts ***!
  \************************************************/
/*! exports provided: PostsActionsComponent, Post, PostsRootReducer, PostsRootSaga, PostsSelectors, PostsActions, PostsInitialValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Organisms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Organisms */ "./src/Components/Features/Posts/Organisms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActionsComponent", function() { return _Organisms__WEBPACK_IMPORTED_MODULE_0__["PostsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _Organisms__WEBPACK_IMPORTED_MODULE_0__["Post"]; });

/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ "./src/Components/Features/Posts/Model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootReducer", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsRootReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootSaga", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsRootSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsSelectors", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActions", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsInitialValue", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsInitialValue"]; });





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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9baWRdLjg0Y2U3MGMxOTRjZjE1ZmNlMDMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnXG5cbmV4cG9ydCB7IHNlbGVjdG9ycyBhcyBQb3N0c1NlbGVjdG9ycyB9XG5leHBvcnQgeyByZWR1Y2VyIGFzIFBvc3RzUm9vdFJlZHVjZXIsIGluaXRpYWxWYWx1ZSBhcyBQb3N0c0luaXRpYWxWYWx1ZSB9IGZyb20gJy4vcmVkdWNlcidcbmV4cG9ydCB7IGFjdGlvbnMgYXMgUG9zdHNBY3Rpb25zIH0gZnJvbSAnLi9hY3Rpb25zJ1xuZXhwb3J0IHsgcm9vdFNhZ2EgYXMgUG9zdHNSb290U2FnYSB9IGZyb20gJy4vc2FnYSdcbmV4cG9ydCB0eXBlIHsgQWN0aW9uc1R5cGUgfSBmcm9tICcuL2FjdGlvbnMnXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgYXMgUG9zdHNBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0c1Jvb3RSZWR1Y2VyLCBQb3N0c1Jvb3RTYWdhLCBQb3N0c1NlbGVjdG9ycywgUG9zdHNBY3Rpb25zLCBQb3N0c0luaXRpYWxWYWx1ZSB9IGZyb20gJy4vTW9kZWwnXG4iXSwic291cmNlUm9vdCI6IiJ9