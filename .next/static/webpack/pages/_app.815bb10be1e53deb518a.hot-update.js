webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/connected-next-router/es/ConnectedRouter.js":
false,

/***/ "./node_modules/connected-next-router/es/actions.js":
false,

/***/ "./node_modules/connected-next-router/es/index.js":
false,

/***/ "./node_modules/connected-next-router/es/middleware.js":
false,

/***/ "./node_modules/connected-next-router/es/patchRouter.js":
false,

/***/ "./node_modules/connected-next-router/es/reducer.js":
false,

/***/ "./node_modules/connected-next-router/es/routerMethods.js":
false,

/***/ "./node_modules/connected-next-router/es/structure/plain/getIn.js":
false,

/***/ "./node_modules/connected-next-router/es/structure/plain/index.js":
false,

/***/ "./node_modules/connected-next-router/es/utils/createInitialRouterState.js":
false,

/***/ "./node_modules/connected-next-router/es/utils/locationFromUrl.js":
false,

/***/ "./node_modules/connected-next-router/es/utils/rewriteUrlForExport.js":
false,

/***/ "./node_modules/native-url/dist/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
false,

/***/ "./node_modules/querystring-es3/encode.js":
false,

/***/ "./node_modules/querystring-es3/index.js":
false,

/***/ "./src/Components/Lib/Store/store.ts":
/*!*******************************************!*\
  !*** ./src/Components/Lib/Store/store.ts ***!
  \*******************************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-reducer */ "./src/Components/Lib/Store/root-reducer.ts");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-saga */ "./src/Components/Lib/Store/root-saga.ts");







var makeStore = function makeStore(context) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_4__["rootReducer"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware))); //@ts-ignore

  store.sagaTask = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_5__["rootSaga"]);
  return store;
}; // export an assembled wrapper


var wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(makeStore, {
  debug: true
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvTGliL1N0b3JlL3N0b3JlLnRzIl0sIm5hbWVzIjpbIm1ha2VTdG9yZSIsImNvbnRleHQiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQWtDLEdBQUcsU0FBckNBLFNBQXFDLENBQUNDLE9BQUQsRUFBc0I7QUFDaEUsTUFBTUMsY0FBYyxHQUFHQywwREFBb0IsRUFBM0M7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQ3hCQyx5REFEd0IsRUFFeEJDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDTixjQUFELENBQWhCLENBRkssQ0FBekIsQ0FGZ0UsQ0FPaEU7O0FBQ0FFLE9BQUssQ0FBQ0ssUUFBTixHQUFpQlAsY0FBYyxDQUFDUSxHQUFmLENBQW1CQyxtREFBbkIsQ0FBakI7QUFDQSxTQUFPUCxLQUFQO0FBQ0EsQ0FWRCxDLENBWUE7OztBQUNPLElBQU1RLE9BQU8sR0FBR0Msd0VBQWEsQ0FBZWIsU0FBZixFQUEwQjtBQUFFYyxPQUFLLEVBQUU7QUFBVCxDQUExQixDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjgxNWJiMTBiZTFlNTNkZWI1MThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSwgeyBUYXNrIH0gZnJvbSAncmVkdXgtc2FnYSdcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIsIE1ha2VTdG9yZSwgQ29udGV4dCB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuaW1wb3J0IHsgY3JlYXRlUm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1uZXh0LXJvdXRlcidcclxuaW1wb3J0IHsgcm9vdFJlZHVjZXIsIEFwcFN0YXRlVHlwZSB9IGZyb20gJy4vcm9vdC1yZWR1Y2VyJ1xyXG5pbXBvcnQgeyByb290U2FnYSB9IGZyb20gJy4vcm9vdC1zYWdhJ1xyXG5cclxuY29uc3QgbWFrZVN0b3JlOiBNYWtlU3RvcmU8QXBwU3RhdGVUeXBlPiA9IChjb250ZXh0OiBDb250ZXh0KSA9PiB7XHJcblx0Y29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXHJcblx0Y29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuXHRcdHJvb3RSZWR1Y2VyLFxyXG5cdFx0Y29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoc2FnYU1pZGRsZXdhcmUpKVxyXG5cdClcclxuXHJcblx0Ly9AdHMtaWdub3JlXHJcblx0c3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXHJcblx0cmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBhbiBhc3NlbWJsZWQgd3JhcHBlclxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8QXBwU3RhdGVUeXBlPihtYWtlU3RvcmUsIHsgZGVidWc6IHRydWUgfSlcclxuXHJcbnR5cGUgUHJvcGVydGllc1R5cGU8VD4gPSBUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiBpbmZlciBVIH0gPyBVIDogbmV2ZXJcclxuZXhwb3J0IHR5cGUgSW5mZXJBY3Rpb25zVHlwZTxcclxuXHRUIGV4dGVuZHMgeyBba2V5OiBzdHJpbmddOiAoLi4uYXJnczogYW55W10pID0+IGFueSB9XHJcbj4gPSBSZXR1cm5UeXBlPFByb3BlcnRpZXNUeXBlPFQ+PlxyXG4iXSwic291cmNlUm9vdCI6IiJ9