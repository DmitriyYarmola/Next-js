webpackHotUpdate_N_E("pages/posts/[id]",{

/***/ "./src/Components/API/REST/Comments/createComments.ts":
/*!************************************************************!*\
  !*** ./src/Components/API/REST/Comments/createComments.ts ***!
  \************************************************************/
/*! exports provided: createComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComments", function() { return createComments; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var createComments = function createComments(payload) {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_1__["createInstance"])().post('/comments', _objectSpread({}, payload));
};

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

/***/ "./src/Components/Features/Posts/Model/saga.ts":
/*!*****************************************************!*\
  !*** ./src/Components/Features/Posts/Model/saga.ts ***!
  \*****************************************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var connected_next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-next-router */ "./node_modules/connected-next-router/es/index.js");
/* harmony import */ var _Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Features/Posts/Model/actions */ "./src/Components/Features/Posts/Model/actions.ts");
/* harmony import */ var _API_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @API/index */ "./src/Components/API/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/Components/Features/Posts/Model/types.ts");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(getPostsSaga),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(createPostSaga),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(deletePostSaga),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(viewPostSaga),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(editPostSaga),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(sendCommentPostSaga),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(rootSaga);







function getPostsSaga() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function getPostsSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 2:
          _context.prev = 2;
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.getPosts);

        case 5:
          response = _context.sent;
          _context.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPosts(response.data));

        case 8:
          _context.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 10:
          _context.next = 17;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](2);
          _context.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 16:
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[2, 12]]);
}

function createPostSaga(_ref) {
  var payload, data, push, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function createPostSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          payload = _ref.payload;
          data = payload.data, push = payload.push;
          _context2.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context2.prev = 4;
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.createPost, data);

        case 7:
          _context2.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.getPosts);

        case 9:
          response = _context2.sent;
          _context2.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPosts(response.data));

        case 12:
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context2.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(push('/'));

        case 16:
          _context2.next = 23;
          break;

        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](4);
          _context2.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 22:
          console.log(_context2.t0);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[4, 18]]);
}

function deletePostSaga(_ref2) {
  var payload, id, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function deletePostSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          payload = _ref2.payload;
          id = payload.id;
          _context3.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context3.prev = 4;
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.deletePost, id);

        case 7:
          _context3.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.getPosts);

        case 9:
          response = _context3.sent;
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPosts(response.data));

        case 12:
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context3.next = 16;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(Object(connected_next_router__WEBPACK_IMPORTED_MODULE_2__["push"])('/'));

        case 16:
          _context3.next = 23;
          break;

        case 18:
          _context3.prev = 18;
          _context3.t0 = _context3["catch"](4);
          _context3.next = 22;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 22:
          console.log(_context3.t0);

        case 23:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[4, 18]]);
}

function viewPostSaga(_ref3) {
  var payload, id, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function viewPostSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          payload = _ref3.payload;
          id = payload.id;
          _context4.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context4.prev = 4;
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.viewPost, id);

        case 7:
          response = _context4.sent;
          _context4.next = 10;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPost(response.data));

        case 10:
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 12:
          _context4.next = 19;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](4);
          _context4.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 18:
          console.log(_context4.t0);

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[4, 14]]);
}

function editPostSaga(_ref4) {
  var payload, id, data, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function editPostSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          payload = _ref4.payload;
          id = payload.id, data = payload.data;
          _context5.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context5.prev = 4;
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.updatePost, id, data);

        case 7:
          _context5.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.viewPost, id);

        case 9:
          response = _context5.sent;
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPost(response.data));

        case 12:
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context5.next = 21;
          break;

        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](4);
          _context5.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 20:
          console.log(_context5.t0);

        case 21:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[4, 16]]);
}

function sendCommentPostSaga(_ref5) {
  var payload, postId, value, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function sendCommentPostSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          payload = _ref5.payload;
          postId = payload.postId, value = payload.value;
          _context6.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(true));

        case 4:
          _context6.prev = 4;
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].CommentsAPI.createComments, {
            id: id,
            value: value
          });

        case 7:
          _context6.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_4__["API"].PostsAPI.viewPost, id);

        case 9:
          response = _context6.sent;
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setPost(response.data));

        case 12:
          _context6.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 14:
          _context6.next = 21;
          break;

        case 16:
          _context6.prev = 16;
          _context6.t0 = _context6["catch"](4);
          _context6.next = 20;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_Features_Posts_Model_actions__WEBPACK_IMPORTED_MODULE_3__["actions"].setLoading(false));

        case 20:
          console.log(_context6.t0);

        case 21:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[4, 16]]);
}

function rootSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function rootSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_5__["GET_POSTS"], getPostsSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_5__["CREATE_POST"], createPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_5__["DELETE_POST"], deletePostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_5__["VIEW_POST"], viewPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_5__["EDIT_POST"], editPostSaga)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvQ29tbWVudHMvY3JlYXRlQ29tbWVudHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL3NhZ2EudHMiXSwibmFtZXMiOlsiY3JlYXRlQ29tbWVudHMiLCJwYXlsb2FkIiwiY3JlYXRlSW5zdGFuY2UiLCJwb3N0IiwiZ2V0UG9zdHNTYWdhIiwiY3JlYXRlUG9zdFNhZ2EiLCJkZWxldGVQb3N0U2FnYSIsInZpZXdQb3N0U2FnYSIsImVkaXRQb3N0U2FnYSIsInNlbmRDb21tZW50UG9zdFNhZ2EiLCJyb290U2FnYSIsInB1dCIsImFjdGlvbnMiLCJzZXRMb2FkaW5nIiwiY2FsbCIsIkFQSSIsIlBvc3RzQVBJIiwiZ2V0UG9zdHMiLCJyZXNwb25zZSIsInNldFBvc3RzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiY3JlYXRlUG9zdCIsImlkIiwiZGVsZXRlUG9zdCIsInZpZXdQb3N0Iiwic2V0UG9zdCIsInVwZGF0ZVBvc3QiLCJwb3N0SWQiLCJ2YWx1ZSIsIkNvbW1lbnRzQVBJIiwiYWxsIiwidGFrZUV2ZXJ5IiwidHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFXTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE9BQUQsRUFBMEI7QUFDdkQsU0FBT0MsK0RBQWMsR0FBR0MsSUFBakIsQ0FBaUMsV0FBakMsb0JBQW1ERixPQUFuRCxFQUFQO0FBQ0EsQ0FGTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dDTEdHLFk7bUdBZ0JBQyxjO21HQW1CQUMsYzttR0FvQkFDLFk7bUdBa0JBQyxZO21HQWlCQUMsbUI7bUdBY09DLFE7O0FBOUdqQjtBQUNBO0FBQ0E7QUFDQTtB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dHMvW2lkXS4zM2E1ZjI2ZTk4ZGU0MzFiMDdjYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICdAQVBJL2FwaSdcclxuXHJcbmludGVyZmFjZSBQb3N0c1R5cGUge1xyXG5cdGlkOiBudW1iZXJcclxuXHR0aXRsZTogc3RyaW5nXHJcblx0Ym9keTogc3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIFBheWxvYWRUeXBlIHtcclxuXHRwb3N0SWQ6IG51bWJlclxyXG5cdGJvZHk6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50cyA9IChwYXlsb2FkOiBQYXlsb2FkVHlwZSkgPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLnBvc3Q8UG9zdHNUeXBlPignL2NvbW1lbnRzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgY2FsbCwgcHV0LCBhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHsgcHVzaCB9IGZyb20gJ2Nvbm5lY3RlZC1uZXh0LXJvdXRlcidcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJ0BGZWF0dXJlcy9Qb3N0cy9Nb2RlbC9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBBUEksIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9pbmRleCdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3N0c1NhZ2EoKSB7XHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5nZXRQb3N0cylcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3RzKHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgZGF0YTogUG9zdFR5cGU7IHB1c2g6IGFueSB9XHJcbn1cclxuZnVuY3Rpb24qIGNyZWF0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBDcmVhdGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgZGF0YSwgcHVzaCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmNyZWF0ZVBvc3QsIGRhdGEpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmdldFBvc3RzKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdHMocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdHlpZWxkIHB1dChwdXNoKCcvJykpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgaWQ6IG51bWJlciB9XHJcbn1cclxuZnVuY3Rpb24qIGRlbGV0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBEZWxldGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5kZWxldGVQb3N0LCBpZClcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkuZ2V0UG9zdHMpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0cyhyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0eWllbGQgcHV0KHB1c2goJy8nKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmludGVyZmFjZSBWaWV3UG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgaWQ6IG51bWJlciB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB2aWV3UG9zdFNhZ2EoeyBwYXlsb2FkIH06IFZpZXdQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLnZpZXdQb3N0LCBpZClcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3QocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmludGVyZmFjZSBFZGl0UG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgaWQ6IG51bWJlcjsgZGF0YTogUG9zdFR5cGUgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogZWRpdFBvc3RTYWdhKHsgcGF5bG9hZCB9OiBFZGl0UG9zdFR5cGUpIHtcclxuXHRjb25zdCB7IGlkLCBkYXRhIH0gPSBwYXlsb2FkXHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgY2FsbChBUEkuUG9zdHNBUEkudXBkYXRlUG9zdCwgaWQsIGRhdGEpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLnZpZXdQb3N0LCBpZClcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3QocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuaW50ZXJmYWNlIFNlbmRDb21tZW50VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyB2YWx1ZTogc3RyaW5nOyBwb3N0SWQ6IG51bWJlciB9XHJcbn1cclxuZnVuY3Rpb24qIHNlbmRDb21tZW50UG9zdFNhZ2EoeyBwYXlsb2FkIH06IFNlbmRDb21tZW50VHlwZSkge1xyXG5cdGNvbnN0IHsgcG9zdElkLCB2YWx1ZSB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGNhbGwoQVBJLkNvbW1lbnRzQVBJLmNyZWF0ZUNvbW1lbnRzLCB7IGlkLCB2YWx1ZSB9KVxyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS52aWV3UG9zdCwgaWQpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0KHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG5cdHlpZWxkIGFsbChbXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuR0VUX1BPU1RTLCBnZXRQb3N0c1NhZ2EpLFxyXG5cdFx0dGFrZUV2ZXJ5KHR5cGVzLkNSRUFURV9QT1NULCBjcmVhdGVQb3N0U2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuREVMRVRFX1BPU1QsIGRlbGV0ZVBvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5WSUVXX1BPU1QsIHZpZXdQb3N0U2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuRURJVF9QT1NULCBlZGl0UG9zdFNhZ2EpLFxyXG5cdF0pXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==