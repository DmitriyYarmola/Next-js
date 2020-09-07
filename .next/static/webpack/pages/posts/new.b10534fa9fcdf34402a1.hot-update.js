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
})(["margin-top:20px;padding-left:20px;display:grid;grid-row-gap:10px;"]);
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
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: onGoBack,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["PostInformation"], {
    title: title,
    body: body,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, "Comments:"), __jsx(_UI_Molecules_SendMessage__WEBPACK_IMPORTED_MODULE_8__["SendMessage"], {
    onSendMessage: onSendMessage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(Comments, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
        lineNumber: 84,
        columnNumber: 18
      }
    });
  }))))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_7__["ModalWindowTemplate"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
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
      lineNumber: 94,
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

/***/ }),

/***/ "./src/Components/UI/Atoms/CommentItem.tsx":
/*!*************************************************!*\
  !*** ./src/Components/UI/Atoms/CommentItem.tsx ***!
  \*************************************************/
/*! exports provided: CommentItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentItem", function() { return CommentItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\CommentItem.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "CommentItem__Content",
  componentId: "ndrcwh-0"
})([""]);
_c = Content;
var CommentItem = function CommentItem(_ref) {
  var body = _ref.body;
  return __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, body);
};
_c2 = CommentItem;

var _c, _c2;

$RefreshReg$(_c, "Content");
$RefreshReg$(_c2, "CommentItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3QudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Db21tZW50SXRlbS50c3giXSwibmFtZXMiOlsiV3JhcHBlZCIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uIiwiUG9zaXRpb25XcmFwcGVkIiwiQWN0aW9ucyIsIlRpdGxlIiwiQ29tbWVudHMiLCJQb3N0IiwicG9zdCIsInVzZVN0YXRlIiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwidGl0bGUiLCJib2R5IiwiY29tbWVudHMiLCJvbkVkaXQiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsIm9uQ2xvc2UiLCJvbkdvQmFjayIsImJhY2siLCJvblNlbmRNZXNzYWdlIiwidmFsdWUiLCJwb3N0SWQiLCJtYXAiLCJDb250ZW50Iiwic3BhbiIsIkNvbW1lbnRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtFQUFiO0tBQU1GLE87QUFNTixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakI7TUFBTUMsVztBQUNOLElBQU1DLGVBQWUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvREFBckI7TUFBTUUsZTtBQUtOLElBQU1DLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5R0FBYjtNQUFNRyxPO0FBTU4sSUFBTUMsS0FBSyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlCQUFYO01BQU1JLEs7QUFHTixJQUFNQyxRQUFRLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQWQ7TUFBTUssUTtBQVNDLElBQU1DLElBQXlCLEdBQUcsU0FBNUJBLElBQTRCLE9BQWtDO0FBQUE7O0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjs7QUFBQSxrQkFDOUNDLHNEQUFRLENBQUMsS0FBRCxDQURzQztBQUFBLE1BQ25FQyxNQURtRTtBQUFBLE1BQzNEQyxTQUQyRDs7QUFFMUUsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFIMEUsTUFJbEVDLEVBSmtFLEdBSXBDUixJQUpvQyxDQUlsRVEsRUFKa0U7QUFBQSxNQUk5REMsS0FKOEQsR0FJcENULElBSm9DLENBSTlEUyxLQUo4RDtBQUFBLE1BSXZEQyxJQUp1RCxHQUlwQ1YsSUFKb0MsQ0FJdkRVLElBSnVEO0FBQUEsTUFJakRDLFFBSmlELEdBSXBDWCxJQUpvQyxDQUlqRFcsUUFKaUQ7QUFLMUUsTUFBTUMsTUFBTSxHQUFHQyx5REFBVyxDQUN6QixVQUFDQyxJQUFELEVBQW9CO0FBQ25CVixZQUFRLENBQUM7QUFBRVcsVUFBSSxFQUFFLFdBQVI7QUFBcUJDLGFBQU8sRUFBRTtBQUFFUixVQUFFLEVBQUZBLEVBQUY7QUFBTU0sWUFBSSxFQUFKQTtBQUFOO0FBQTlCLEtBQUQsQ0FBUjtBQUNBLEdBSHdCLEVBSXpCLENBQUNWLFFBQUQsRUFBV0ksRUFBWCxDQUp5QixDQUExQjtBQU1BLE1BQU1TLE9BQU8sR0FBR0oseURBQVcsQ0FBQyxZQUFNO0FBQ2pDVixhQUFTLENBQUMsQ0FBQ0QsTUFBRixDQUFUO0FBQ0EsR0FGMEIsRUFFeEIsQ0FBQ0EsTUFBRCxDQUZ3QixDQUEzQjtBQUdBLE1BQU1nQixRQUFRLEdBQUdMLHlEQUFXLENBQUMsWUFBTTtBQUNsQ1AsVUFBTSxDQUFDYSxJQUFQO0FBQ0EsR0FGMkIsRUFFekIsQ0FBQ2IsTUFBRCxDQUZ5QixDQUE1QjtBQUdBLE1BQU1jLGFBQWEsR0FBR1AseURBQVcsQ0FDaEMsVUFBQ1EsS0FBRCxFQUFtQjtBQUNsQmpCLFlBQVEsQ0FBQztBQUFFVyxVQUFJLEVBQUUsY0FBUjtBQUF3QkMsYUFBTyxFQUFFO0FBQUVOLFlBQUksRUFBRVcsS0FBUjtBQUFlQyxjQUFNLEVBQUVkO0FBQXZCO0FBQWpDLEtBQUQsQ0FBUjtBQUNBLEdBSCtCLEVBSWhDLENBQUNKLFFBQUQsRUFBV0ksRUFBWCxDQUpnQyxDQUFqQztBQU1BLFNBQ0MsbUVBQ0MsTUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyQ0FBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRTtBQUFBLGFBQU1MLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFJQyxNQUFDLDJDQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFZ0IsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpELENBREQsRUFTQyxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBaUIsU0FBSyxFQUFFVCxLQUF4QjtBQUErQixRQUFJLEVBQUVDLElBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxtRUFDQyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxFQUVDLE1BQUMscUVBQUQ7QUFBYSxpQkFBYSxFQUFFVSxhQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQyxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFVCxRQUFRLENBQUNZLEdBQVQsQ0FBYSxpQkFBa0I7QUFBQSxRQUFmYixJQUFlLFNBQWZBLElBQWU7QUFBQSxRQUFURixFQUFTLFNBQVRBLEVBQVM7QUFDL0IsV0FBTyxNQUFDLHFEQUFEO0FBQWEsU0FBRyxFQUFFQSxFQUFsQjtBQUFxQixVQUFJLEVBQUVFLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNBLEdBRkEsQ0FERixDQUhELENBREQsQ0FERCxDQVRELENBREQsQ0FERCxFQTBCRVIsTUFBTSxJQUNOLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNERBQUQ7QUFDQyxVQUFNLE1BRFA7QUFFQyxZQUFRLEVBQUVVLE1BRlg7QUFHQyxnQkFBWSxFQUFFO0FBQUVILFdBQUssRUFBTEEsS0FBRjtBQUFTQyxVQUFJLEVBQUpBO0FBQVQsS0FIZjtBQUlDLFdBQU8sRUFBRU8sT0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0EzQkYsQ0FERDtBQXVDQSxDQTlETTs7R0FBTWxCLEk7VUFFS00sdUQsRUFDRkUscUQ7OztNQUhIUixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNiO0FBQ0E7QUFFQSxJQUFNeUIsT0FBTyxHQUFHaEMseURBQU0sQ0FBQ2lDLElBQVY7QUFBQTtBQUFBO0FBQUEsUUFBYjtLQUFNRCxPO0FBSUMsSUFBTUUsV0FBZ0MsR0FBRyxTQUFuQ0EsV0FBbUMsT0FBa0M7QUFBQSxNQUEvQmhCLElBQStCLFFBQS9CQSxJQUErQjtBQUNqRixTQUFPLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVBLElBQVYsQ0FBUDtBQUNBLENBRk07TUFBTWdCLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvbmV3LmIxMDUzNGZhOWZjZGYzNDQwMmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuaW1wb3J0IHsgU2VuZE1lc3NhZ2UgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1NlbmRNZXNzYWdlJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA1NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBQb3NpdGlvbldyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbmBcclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiA1MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmBcclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gXHJcbmNvbnN0IENvbW1lbnRzID0gc3R5bGVkLmRpdmBcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMjBweDtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtcm93LWdhcDogMTBweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0OiBQb3N0SW5mb3JtYXRpb25UeXBlXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFtpc0VkaXQsIHNldElzRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IHsgaWQsIHRpdGxlLCBib2R5LCBjb21tZW50cyB9ID0gcG9zdFxyXG5cdGNvbnN0IG9uRWRpdCA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGRhdGE6IFBvc3RUeXBlKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0VESVRfUE9TVCcsIHBheWxvYWQ6IHsgaWQsIGRhdGEgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdGNvbnN0IG9uQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRzZXRJc0VkaXQoIWlzRWRpdClcclxuXHR9LCBbaXNFZGl0XSlcclxuXHRjb25zdCBvbkdvQmFjayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHJvdXRlci5iYWNrKClcclxuXHR9LCBbcm91dGVyXSlcclxuXHRjb25zdCBvblNlbmRNZXNzYWdlID0gdXNlQ2FsbGJhY2soXHJcblx0XHQodmFsdWU6IHN0cmluZykgPT4ge1xyXG5cdFx0XHRkaXNwYXRjaCh7IHR5cGU6ICdTRU5EX01FU1NBR0UnLCBwYXlsb2FkOiB7IGJvZHk6IHZhbHVlLCBwb3N0SWQ6IGlkIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2gsIGlkXVxyXG5cdClcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0KCFpc0VkaXQpfT5cclxuXHRcdFx0XHRcdFx0XHRFZGl0XHJcblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgb25DbGljaz17b25Hb0JhY2t9PlxyXG5cdFx0XHRcdFx0XHRcdEdvIGJhY2tcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHRcdFx0XHQ8SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHRcdDxQb3N0SW5mb3JtYXRpb24gdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFRpdGxlPkNvbW1lbnRzOjwvVGl0bGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VuZE1lc3NhZ2Ugb25TZW5kTWVzc2FnZT17b25TZW5kTWVzc2FnZX0gLz5cclxuXHRcdFx0XHRcdFx0XHRcdDxDb21tZW50cz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoeyBib2R5LCBpZCB9KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxDb21tZW50SXRlbSBrZXk9e2lkfWJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50cz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0PC9Qb3N0SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHRcdDwvV3JhcHBlZD5cclxuXHRcdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdHtpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxNb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PENyZWF0ZVBvc3RGb3JtXHJcblx0XHRcdFx0XHRcdGlzRWRpdFxyXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25FZGl0fVxyXG5cdFx0XHRcdFx0XHRpbml0aWFsVmFsdWU9e3sgdGl0bGUsIGJvZHkgfX1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17b25DbG9zZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Nb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuc3BhbmBgXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGJvZHk6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCBDb21tZW50SXRlbTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGJvZHkgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxDb250ZW50Pntib2R5fTwvQ29udGVudD5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9