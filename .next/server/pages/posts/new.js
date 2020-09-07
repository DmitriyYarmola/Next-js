module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/new.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Organisms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @UI/Organisms */ "./src/Components/UI/Organisms/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Features_Posts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/Features/Posts */ "./src/Components/Features/Posts/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\pages\\posts\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const CreatePostWrapped = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "new__CreatePostWrapped",
  componentId: "gr0h0v-0"
})(["display:grid;align-items:center;width:500px;height:100%;margin:0 auto;"]);

const New = () => {
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(_Components_Features_Posts__WEBPACK_IMPORTED_MODULE_5__["PostsSelectors"].isLoading);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(data => {
    dispatch({
      type: 'CREATE_POST',
      payload: {
        data,
        push: router.push
      }
    });
  }, [dispatch, router]);
  const initialValue = {
    title: '',
    body: ''
  };
  return !isLoading ? __jsx(CreatePostWrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_1__["CreatePostForm"], {
    onSubmit: onSubmit,
    initialValue: initialValue,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  })) : __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_6__["Preloader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (New);

/***/ }),

/***/ "./src/Components/API/REST/Comments/createComments.ts":
/*!************************************************************!*\
  !*** ./src/Components/API/REST/Comments/createComments.ts ***!
  \************************************************************/
/*! exports provided: createComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComments", function() { return createComments; });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const createComments = payload => {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_0__["createInstance"])().post('/comments', _objectSpread({}, payload));
};

/***/ }),

/***/ "./src/Components/API/REST/Comments/index.ts":
/*!***************************************************!*\
  !*** ./src/Components/API/REST/Comments/index.ts ***!
  \***************************************************/
/*! exports provided: createComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createComments */ "./src/Components/API/REST/Comments/createComments.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComments", function() { return _createComments__WEBPACK_IMPORTED_MODULE_0__["createComments"]; });



/***/ }),

/***/ "./src/Components/API/REST/Posts/createPost.ts":
/*!*****************************************************!*\
  !*** ./src/Components/API/REST/Posts/createPost.ts ***!
  \*****************************************************/
/*! exports provided: createPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const createPost = payload => {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_0__["createInstance"])().post('/posts', _objectSpread({}, payload));
};

/***/ }),

/***/ "./src/Components/API/REST/Posts/deletePost.ts":
/*!*****************************************************!*\
  !*** ./src/Components/API/REST/Posts/deletePost.ts ***!
  \*****************************************************/
/*! exports provided: deletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");

const deletePost = id => {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_0__["createInstance"])().delete(`/posts/${id}`);
};

/***/ }),

/***/ "./src/Components/API/REST/Posts/getPosts.ts":
/*!***************************************************!*\
  !*** ./src/Components/API/REST/Posts/getPosts.ts ***!
  \***************************************************/
/*! exports provided: getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");

const getPosts = () => {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_0__["createInstance"])().get('/posts');
};

/***/ }),

/***/ "./src/Components/API/REST/Posts/index.ts":
/*!************************************************!*\
  !*** ./src/Components/API/REST/Posts/index.ts ***!
  \************************************************/
/*! exports provided: updatePost, getPosts, deletePost, createPost, viewPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updatePost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updatePost */ "./src/Components/API/REST/Posts/updatePost.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return _updatePost__WEBPACK_IMPORTED_MODULE_0__["updatePost"]; });

/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPosts */ "./src/Components/API/REST/Posts/getPosts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return _getPosts__WEBPACK_IMPORTED_MODULE_1__["getPosts"]; });

/* harmony import */ var _deletePost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deletePost */ "./src/Components/API/REST/Posts/deletePost.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return _deletePost__WEBPACK_IMPORTED_MODULE_2__["deletePost"]; });

/* harmony import */ var _createPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createPost */ "./src/Components/API/REST/Posts/createPost.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return _createPost__WEBPACK_IMPORTED_MODULE_3__["createPost"]; });

/* harmony import */ var _viewPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewPost */ "./src/Components/API/REST/Posts/viewPost.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewPost", function() { return _viewPost__WEBPACK_IMPORTED_MODULE_4__["viewPost"]; });







/***/ }),

/***/ "./src/Components/API/REST/Posts/updatePost.ts":
/*!*****************************************************!*\
  !*** ./src/Components/API/REST/Posts/updatePost.ts ***!
  \*****************************************************/
/*! exports provided: updatePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const updatePost = (id, payload) => {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_0__["createInstance"])().put(`/posts/${id}`, _objectSpread({}, payload));
};

/***/ }),

/***/ "./src/Components/API/REST/Posts/viewPost.ts":
/*!***************************************************!*\
  !*** ./src/Components/API/REST/Posts/viewPost.ts ***!
  \***************************************************/
/*! exports provided: viewPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewPost", function() { return viewPost; });
/* harmony import */ var _API_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @API/api */ "./src/Components/API/api.ts");

const viewPost = id => {
  return Object(_API_api__WEBPACK_IMPORTED_MODULE_0__["createInstance"])().get(`/posts/${id}?_embed=comments`);
};

/***/ }),

/***/ "./src/Components/API/REST/index.ts":
/*!******************************************!*\
  !*** ./src/Components/API/REST/index.ts ***!
  \******************************************/
/*! exports provided: CommentsAPI, PostsAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments */ "./src/Components/API/REST/Comments/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "CommentsAPI", function() { return _Comments__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posts */ "./src/Components/API/REST/Posts/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PostsAPI", function() { return _Posts__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/Components/API/api.ts":
/*!***********************************!*\
  !*** ./src/Components/API/api.ts ***!
  \***********************************/
/*! exports provided: createInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const createInstance = () => {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    baseURL: 'https://simple-blog-api.crew.red/'
  });
};

/***/ }),

/***/ "./src/Components/API/index.ts":
/*!*************************************!*\
  !*** ./src/Components/API/index.ts ***!
  \*************************************/
/*! exports provided: createInstance, API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _REST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./REST */ "./src/Components/API/REST/index.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "API", function() { return _REST__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/Components/API/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return _api__WEBPACK_IMPORTED_MODULE_1__["createInstance"]; });





/***/ }),

/***/ "./src/Components/Features/Posts/Model/actions.ts":
/*!********************************************************!*\
  !*** ./src/Components/Features/Posts/Model/actions.ts ***!
  \********************************************************/
/*! exports provided: actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/Components/Features/Posts/Model/types.ts");

const actions = {
  setLoading: payload => ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_LOADING"],
    payload
  }),
  setPosts: payload => ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_POSTS"],
    payload
  }),
  setPost: payload => ({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_POST"],
    payload
  })
};

/***/ }),

/***/ "./src/Components/Features/Posts/Model/index.ts":
/*!******************************************************!*\
  !*** ./src/Components/Features/Posts/Model/index.ts ***!
  \******************************************************/
/*! exports provided: PostsSelectors, PostsRootReducer, PostsInitialValue, PostsActions, PostsRootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/Components/Features/Posts/Model/selectors.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PostsSelectors", function() { return _selectors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/Components/Features/Posts/Model/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsInitialValue", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["initialValue"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/Components/Features/Posts/Model/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_2__["actions"]; });

/* harmony import */ var _saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga */ "./src/Components/Features/Posts/Model/saga.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootSaga", function() { return _saga__WEBPACK_IMPORTED_MODULE_3__["rootSaga"]; });







/***/ }),

/***/ "./src/Components/Features/Posts/Model/reducer.ts":
/*!********************************************************!*\
  !*** ./src/Components/Features/Posts/Model/reducer.ts ***!
  \********************************************************/
/*! exports provided: initialValue, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialValue", function() { return initialValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/Components/Features/Posts/Model/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialValue = {
  isLoading: false,
  posts: null,
  post: null
};
const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_LOADING"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoading: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_POSTS"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          posts: action.payload
        });
      }

    case _types__WEBPACK_IMPORTED_MODULE_1__["SET_POST"]:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          post: action.payload
        });
      }

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/Components/Features/Posts/Model/saga.ts":
/*!*****************************************************!*\
  !*** ./src/Components/Features/Posts/Model/saga.ts ***!
  \*****************************************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _API_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @API/index */ "./src/Components/API/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/Components/Features/Posts/Model/actions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/Components/Features/Posts/Model/types.ts");





function* getPostsSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(true));

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.getPosts);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setPosts(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    console.log(error);
  }
}

function* createPostSaga({
  payload
}) {
  const {
    data,
    push
  } = payload;
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(true));

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.createPost, data);
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.getPosts);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setPosts(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(push('/'));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    console.log(error);
  }
}

function* deletePostSaga({
  payload
}) {
  const {
    id
  } = payload;
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(true));

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.deletePost, id);
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.getPosts);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setPosts(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    console.log(error);
  }
}

function* viewPostSaga({
  payload
}) {
  const {
    id
  } = payload;
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(true));

  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.viewPost, id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setPost(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    console.log(error);
  }
}

function* editPostSaga({
  payload
}) {
  const {
    id,
    data
  } = payload;
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(true));

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.updatePost, id, data);
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.viewPost, id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setPost(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    console.log(error);
  }
}

function* sendCommentPostSaga({
  payload
}) {
  console.log('se');
  const {
    postId,
    body
  } = payload;
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(true));

  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].CommentsAPI.createComments, {
      postId,
      body
    });
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.viewPost, postId);
    console.log(response);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setPost(response.data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_2__["actions"].setLoading(false));
    console.log(error);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["GET_POSTS"], getPostsSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["CREATE_POST"], createPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST"], deletePostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["VIEW_POST"], viewPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["EDIT_POST"], editPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_types__WEBPACK_IMPORTED_MODULE_3__["SEND_MESSAGE"], sendCommentPostSaga)]);
}

/***/ }),

/***/ "./src/Components/Features/Posts/Model/selectors.ts":
/*!**********************************************************!*\
  !*** ./src/Components/Features/Posts/Model/selectors.ts ***!
  \**********************************************************/
/*! exports provided: posts, post, isLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
const posts = state => state.PostsRootReducer.posts;
const post = state => state.PostsRootReducer.post;
const isLoading = state => state.PostsRootReducer.isLoading;

/***/ }),

/***/ "./src/Components/Features/Posts/Model/types.ts":
/*!******************************************************!*\
  !*** ./src/Components/Features/Posts/Model/types.ts ***!
  \******************************************************/
/*! exports provided: SET_LOADING, GET_POSTS, SET_POSTS, EDIT_POST, DELETE_POST, CREATE_POST, SET_POST, VIEW_POST, SEND_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADING", function() { return SET_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTS", function() { return SET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_POST", function() { return EDIT_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POST", function() { return SET_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_POST", function() { return VIEW_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE", function() { return SEND_MESSAGE; });
const SET_LOADING = 'SET_LOADING';
const GET_POSTS = 'GET_POSTS';
const SET_POSTS = 'SET_POSTS';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const CREATE_POST = 'CREATE_POST';
const SET_POST = 'SET_POST';
const VIEW_POST = 'VIEW_POST';
const SEND_MESSAGE = 'SEND_MESSAGE';

/***/ }),

/***/ "./src/Components/Features/Posts/Molecules/Actions.tsx":
/*!*************************************************************!*\
  !*** ./src/Components/Features/Posts/Molecules/Actions.tsx ***!
  \*************************************************************/
/*! exports provided: Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Molecules_PostActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @UI/Molecules/PostActions */ "./src/Components/UI/Molecules/PostActions.tsx");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\Features\\Posts\\Molecules\\Actions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Actions = ({
  children,
  id
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const onDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    dispatch({
      type: 'DELETE_POST',
      payload: {
        id
      }
    });
  }, [dispatch]);
  return __jsx(_UI_Molecules_PostActions__WEBPACK_IMPORTED_MODULE_2__["PostActions"], {
    onDelete: onDelete,
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, children);
};

/***/ }),

/***/ "./src/Components/Features/Posts/Molecules/ListPosts.tsx":
/*!***************************************************************!*\
  !*** ./src/Components/Features/Posts/Molecules/ListPosts.tsx ***!
  \***************************************************************/
/*! exports provided: ListPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPosts", function() { return ListPosts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @UI/Organisms */ "./src/Components/UI/Organisms/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\Features\\Posts\\Molecules\\ListPosts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Posts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ListPosts__Posts",
  componentId: "sc-1ab65y6-0"
})(["display:grid;grid-template-columns:repeat(3,1fr);grid-gap:20px;"]);
const ListPosts = ({
  posts
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const onView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    router.push(`/posts/${id}`);
  }, [router]);
  const onDelete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(id => {
    dispatch({
      type: 'DELETE_POST',
      payload: {
        id
      }
    });
  }, [dispatch]);
  return __jsx(Posts, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, posts.map(({
    title,
    body,
    id
  }) => __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_4__["PostItem"], {
    key: id,
    id: id,
    title: title,
    body: body,
    onView: onView,
    onDelete: onDelete,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  })));
};

/***/ }),

/***/ "./src/Components/Features/Posts/Molecules/index.ts":
/*!**********************************************************!*\
  !*** ./src/Components/Features/Posts/Molecules/index.ts ***!
  \**********************************************************/
/*! exports provided: ListPosts, Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListPosts */ "./src/Components/Features/Posts/Molecules/ListPosts.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPosts", function() { return _ListPosts__WEBPACK_IMPORTED_MODULE_0__["ListPosts"]; });

/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions */ "./src/Components/Features/Posts/Molecules/Actions.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return _Actions__WEBPACK_IMPORTED_MODULE_1__["Actions"]; });




/***/ }),

/***/ "./src/Components/Features/Posts/Organisms/Post.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/Features/Posts/Organisms/Post.tsx ***!
  \**********************************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Organisms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @UI/Organisms */ "./src/Components/UI/Organisms/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var _UI_Templates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @UI/Templates */ "./src/Components/UI/Templates/index.ts");
/* harmony import */ var _UI_Molecules_SendMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @UI/Molecules/SendMessage */ "./src/Components/UI/Molecules/SendMessage.tsx");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\Features\\Posts\\Organisms\\Post.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Wrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Post__Wrapped",
  componentId: "z17osf-0"
})(["display:grid;align-items:center;width:550px;margin:0 auto;"]);
const Information = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Post__Information",
  componentId: "z17osf-1"
})(["display:grid;justify-content:center;grid-row-gap:15px;text-align:center;margin:30px 0;"]);
const PositionWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Post__PositionWrapped",
  componentId: "z17osf-2"
})(["display:grid;align-items:center;height:100%;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Post__Actions",
  componentId: "z17osf-3"
})(["display:grid;grid-template-columns:repeat(2,max-content);grid-column-gap:50px;margin-bottom:15px;justify-content:center;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Post__Title",
  componentId: "z17osf-4"
})(["font-weight:bold;"]);
const Comments = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Post__Comments",
  componentId: "z17osf-5"
})(["margin-top:20px;padding-left:20px;display:grid;grid-row-gap:10px;"]);
const Post = ({
  post
}) => {
  const {
    0: isEdit,
    1: setIsEdit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    id,
    title,
    body,
    comments
  } = post;
  const onEdit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(data => {
    dispatch({
      type: 'EDIT_POST',
      payload: {
        id,
        data
      }
    });
  }, [dispatch, id]);
  const onClose = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);
  const onGoBack = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    router.back();
  }, [router]);
  const onSendMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(value => {
    dispatch({
      type: 'SEND_MESSAGE',
      payload: {
        body: value,
        postId: id
      }
    });
  }, [dispatch, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(PositionWrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }, __jsx(Wrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: () => setIsEdit(!isEdit),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Edit"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    onClick: onGoBack,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, "Go back")), __jsx(Information, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["PostInformation"], {
    title: title,
    body: body,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, "Comments:"), __jsx(_UI_Molecules_SendMessage__WEBPACK_IMPORTED_MODULE_8__["SendMessage"], {
    onSendMessage: onSendMessage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }), __jsx(Comments, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, comments.map(({
    body,
    id
  }) => {
    return __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_6__["CommentItem"], {
      key: id,
      body: body,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 18
      }
    });
  }))))))), isEdit && __jsx(_UI_Templates__WEBPACK_IMPORTED_MODULE_7__["ModalWindowTemplate"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(_UI_Organisms__WEBPACK_IMPORTED_MODULE_5__["CreatePostForm"], {
    isEdit: true,
    onSubmit: onEdit,
    initialValue: {
      title,
      body
    },
    onClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 6
    }
  })));
};

/***/ }),

/***/ "./src/Components/Features/Posts/Organisms/PostsActions.tsx":
/*!******************************************************************!*\
  !*** ./src/Components/Features/Posts/Organisms/PostsActions.tsx ***!
  \******************************************************************/
/*! exports provided: PostsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsActions", function() { return PostsActions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var _Molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Molecules */ "./src/Components/Features/Posts/Molecules/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\Features\\Posts\\Organisms\\PostsActions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Wrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostsActions__Wrapped",
  componentId: "sc-1pivswp-0"
})([""]);
const PostsWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostsActions__PostsWrapped",
  componentId: "sc-1pivswp-1"
})(["margin:30px 0;"]);
const PostsActions = ({
  posts
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(Wrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: () => {
      router.push('/posts/new');
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, "Create"), __jsx(PostsWrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }, __jsx(_Molecules__WEBPACK_IMPORTED_MODULE_4__["ListPosts"], {
    posts: posts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  })));
};

/***/ }),

/***/ "./src/Components/Features/Posts/Organisms/index.ts":
/*!**********************************************************!*\
  !*** ./src/Components/Features/Posts/Organisms/index.ts ***!
  \**********************************************************/
/*! exports provided: PostsActions, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostsActions */ "./src/Components/Features/Posts/Organisms/PostsActions.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActions", function() { return _PostsActions__WEBPACK_IMPORTED_MODULE_0__["PostsActions"]; });

/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./src/Components/Features/Posts/Organisms/Post.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _Post__WEBPACK_IMPORTED_MODULE_1__["Post"]; });




/***/ }),

/***/ "./src/Components/Features/Posts/index.ts":
/*!************************************************!*\
  !*** ./src/Components/Features/Posts/index.ts ***!
  \************************************************/
/*! exports provided: PostsActionsComponent, Post, PostsRootReducer, PostsRootSaga, PostsSelectors, PostsActions, PostsInitialValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Organisms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Organisms */ "./src/Components/Features/Posts/Organisms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActionsComponent", function() { return _Organisms__WEBPACK_IMPORTED_MODULE_0__["PostsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _Organisms__WEBPACK_IMPORTED_MODULE_0__["Post"]; });

/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ "./src/Components/Features/Posts/Model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootReducer", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsRootReducer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsRootSaga", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsRootSaga"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsSelectors", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsSelectors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsActions", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsInitialValue", function() { return _Model__WEBPACK_IMPORTED_MODULE_1__["PostsInitialValue"]; });





/***/ }),

/***/ "./src/Components/UI/Atoms/Button.tsx":
/*!********************************************!*\
  !*** ./src/Components/UI/Atoms/Button.tsx ***!
  \********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\Button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ButtonComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__ButtonComponent",
  componentId: "sc-1k787yx-0"
})(["background:transparent;cursor:pointer;outline:none;padding:7px 10px;border-style:dashed;border-radius:7px;", ";"], ({
  theme: {
    colors
  },
  danger
}) => danger ? `color: ${colors.red}; border: 1px solid ${colors.red};` : `color: ${colors.black}; border: 1px solid ${colors.black};`);
const Button = ({
  children,
  onClick,
  danger
}) => {
  return __jsx(ButtonComponent, {
    onClick: onClick,
    danger: danger,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 3
    }
  }, children);
};

/***/ }),

/***/ "./src/Components/UI/Atoms/CommentBody.tsx":
/*!*************************************************!*\
  !*** ./src/Components/UI/Atoms/CommentBody.tsx ***!
  \*************************************************/
/*! exports provided: CommentBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentBody", function() { return CommentBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\CommentBody.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "CommentBody__Body",
  componentId: "sc-18mmz00-0"
})(["font-size:24px;"]);
const CommentBody = ({
  children
}) => {
  return __jsx(Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/Components/UI/Atoms/CommentItem.tsx":
/*!*************************************************!*\
  !*** ./src/Components/UI/Atoms/CommentItem.tsx ***!
  \*************************************************/
/*! exports provided: CommentItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentItem", function() { return CommentItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\CommentItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "CommentItem__Content",
  componentId: "ndrcwh-0"
})(["max-width:250px;word-break:break-all;}"]);
const CommentItem = ({
  body
}) => {
  return __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, body);
};

/***/ }),

/***/ "./src/Components/UI/Atoms/Input.tsx":
/*!*******************************************!*\
  !*** ./src/Components/UI/Atoms/Input.tsx ***!
  \*******************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\Input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InputComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input__InputComponent",
  componentId: "xxces0-0"
})(["padding-left:10px;margin:0;border-radius:7px;&::placeholder{color:", ";}"], ({
  theme: {
    colors
  }
}) => colors.grey);
const Input = ({
  value,
  onChange
}) => {
  return __jsx(InputComponent, {
    value: value,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  });
};

/***/ }),

/***/ "./src/Components/UI/Atoms/PageTitle.tsx":
/*!***********************************************!*\
  !*** ./src/Components/UI/Atoms/PageTitle.tsx ***!
  \***********************************************/
/*! exports provided: PageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return PageTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\PageTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2.withConfig({
  displayName: "PageTitle__Title",
  componentId: "vcf2hd-0"
})(["font-size:36px;"]);
const PageTitle = ({
  children
}) => {
  return __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/Components/UI/Atoms/Post/PostBody.tsx":
/*!***************************************************!*\
  !*** ./src/Components/UI/Atoms/Post/PostBody.tsx ***!
  \***************************************************/
/*! exports provided: PostBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBody", function() { return PostBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\Post\\PostBody.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Body = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "PostBody__Body",
  componentId: "sc-1h24lrw-0"
})([""]);
const PostBody = ({
  children
}) => {
  return __jsx(Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/Components/UI/Atoms/Post/PostTitle.tsx":
/*!****************************************************!*\
  !*** ./src/Components/UI/Atoms/Post/PostTitle.tsx ***!
  \****************************************************/
/*! exports provided: PostTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTitle", function() { return PostTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\Post\\PostTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "PostTitle__Title",
  componentId: "sc-1q0kbd9-0"
})(["display:block;font-weight:", ";"], ({
  theme: {
    weights
  }
}) => weights.bold);
const PostTitle = ({
  children
}) => {
  return __jsx(Title, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./src/Components/UI/Atoms/Post/index.ts":
/*!***********************************************!*\
  !*** ./src/Components/UI/Atoms/Post/index.ts ***!
  \***********************************************/
/*! exports provided: PostTitle, PostBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostTitle */ "./src/Components/UI/Atoms/Post/PostTitle.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostTitle", function() { return _PostTitle__WEBPACK_IMPORTED_MODULE_0__["PostTitle"]; });

/* harmony import */ var _PostBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostBody */ "./src/Components/UI/Atoms/Post/PostBody.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostBody", function() { return _PostBody__WEBPACK_IMPORTED_MODULE_1__["PostBody"]; });




/***/ }),

/***/ "./src/Components/UI/Atoms/Preloader.tsx":
/*!***********************************************!*\
  !*** ./src/Components/UI/Atoms/Preloader.tsx ***!
  \***********************************************/
/*! exports provided: Preloader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return Preloader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Atoms\\Preloader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Ring = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Preloader__Ring",
  componentId: "sc-1o2ohby-0"
})(["display:inline-block;width:80px;height:80px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);&::after{content:' ';display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #fff;border-color:#fff transparent #fff transparent;animation:lds-dual-ring 1.2s linear infinite;}@keyframes lds-dual-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]);
const PositionWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Preloader__PositionWrapped",
  componentId: "sc-1o2ohby-1"
})(["position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);"]);
const Preloader = () => {
  return __jsx(PositionWrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx(Ring, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }));
};

/***/ }),

/***/ "./src/Components/UI/Atoms/index.ts":
/*!******************************************!*\
  !*** ./src/Components/UI/Atoms/index.ts ***!
  \******************************************/
/*! exports provided: PageTitle, Button, Input, Preloader, CommentBody, CommentItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageTitle */ "./src/Components/UI/Atoms/PageTitle.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return _PageTitle__WEBPACK_IMPORTED_MODULE_0__["PageTitle"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Components/UI/Atoms/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/Components/UI/Atoms/Input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_2__["Input"]; });

/* harmony import */ var _Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preloader */ "./src/Components/UI/Atoms/Preloader.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Preloader", function() { return _Preloader__WEBPACK_IMPORTED_MODULE_3__["Preloader"]; });

/* harmony import */ var _CommentBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentBody */ "./src/Components/UI/Atoms/CommentBody.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentBody", function() { return _CommentBody__WEBPACK_IMPORTED_MODULE_4__["CommentBody"]; });

/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentItem */ "./src/Components/UI/Atoms/CommentItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentItem", function() { return _CommentItem__WEBPACK_IMPORTED_MODULE_5__["CommentItem"]; });








/***/ }),

/***/ "./src/Components/UI/Molecules/PostActions.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/UI/Molecules/PostActions.tsx ***!
  \*****************************************************/
/*! exports provided: PostActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostActions", function() { return PostActions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Molecules\\PostActions.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostActions__Actions",
  componentId: "sc-1azxkle-0"
})(["display:grid;grid-template-columns:repeat(2,max-content);grid-column-gap:15px;justify-content:center;"]);
const PostActions = ({
  children,
  onDelete,
  id
}) => {
  return __jsx(Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, children, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Popconfirm"], {
    title: "Are you sure\uFF1F",
    okText: "Yes",
    cancelText: "No",
    onConfirm: () => onDelete(id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    danger: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "Delete")), ",");
};

/***/ }),

/***/ "./src/Components/UI/Molecules/PostContent.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/UI/Molecules/PostContent.tsx ***!
  \*****************************************************/
/*! exports provided: PostContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContent", function() { return PostContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Atoms_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @UI/Atoms/Post */ "./src/Components/UI/Atoms/Post/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Molecules\\PostContent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostContent__Content",
  componentId: "sc-1nndklm-0"
})(["display:grid;grid-row-gap:15px;"]);
const PostContent = ({
  title,
  body
}) => {
  return __jsx(Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(_UI_Atoms_Post__WEBPACK_IMPORTED_MODULE_2__["PostTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, title), __jsx(_UI_Atoms_Post__WEBPACK_IMPORTED_MODULE_2__["PostBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, body));
};

/***/ }),

/***/ "./src/Components/UI/Molecules/SendMessage.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/UI/Molecules/SendMessage.tsx ***!
  \*****************************************************/
/*! exports provided: SendMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessage", function() { return SendMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Molecules\\SendMessage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SendMessage__Wrapped",
  componentId: "sc-1c68xyl-0"
})(["display:grid;grid-template-columns:1fr max-content;"]);
const SendMessage = ({
  onSendMessage
}) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChange = e => {
    setValue(e.currentTarget.value);
  };

  return __jsx(Wrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    value: value,
    onChange: onChange,
    placeholder: "Enter your comment",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => onSendMessage(value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, "Send"));
};

/***/ }),

/***/ "./src/Components/UI/Molecules/index.ts":
/*!**********************************************!*\
  !*** ./src/Components/UI/Molecules/index.ts ***!
  \**********************************************/
/*! exports provided: PostContent, SendMessage, PostActionsComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostContent */ "./src/Components/UI/Molecules/PostContent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostContent", function() { return _PostContent__WEBPACK_IMPORTED_MODULE_0__["PostContent"]; });

/* harmony import */ var _SendMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendMessage */ "./src/Components/UI/Molecules/SendMessage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendMessage", function() { return _SendMessage__WEBPACK_IMPORTED_MODULE_1__["SendMessage"]; });

/* harmony import */ var _PostActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostActions */ "./src/Components/UI/Molecules/PostActions.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostActionsComponents", function() { return _PostActions__WEBPACK_IMPORTED_MODULE_2__["PostActions"]; });





/***/ }),

/***/ "./src/Components/UI/Organisms/Forms/CreatePost.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/UI/Organisms/Forms/CreatePost.tsx ***!
  \**********************************************************/
/*! exports provided: CreatePostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostForm", function() { return CreatePostForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Organisms\\Forms\\CreatePost.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Actions = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CreatePost__Actions",
  componentId: "l162y8-0"
})(["display:grid;grid-template-columns:repeat(2,max-content);grid-column-gap:15px;justify-content:center;"]);
const CreatePostForm = ({
  onSubmit,
  initialValue,
  isEdit,
  onClose
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log('router', router);
  const onCancel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (isEdit && onClose) {
      onClose();
    } else router.back();
  }, [router, isEdit, onClose]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "post",
    initialValues: initialValue,
    onFinish: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 3
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Title",
    name: "title",
    rules: [{
      required: true,
      message: 'Please enter title of post!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter title of post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    label: "Body",
    name: "body",
    rules: [{
      required: true,
      message: 'Please enter body of post!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Enter body of post",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  })), __jsx(Actions, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, isEdit ? 'Save' : 'Create'), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "dashed",
    danger: true,
    onClick: onCancel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, "Cancel")));
};

/***/ }),

/***/ "./src/Components/UI/Organisms/Forms/index.ts":
/*!****************************************************!*\
  !*** ./src/Components/UI/Organisms/Forms/index.ts ***!
  \****************************************************/
/*! exports provided: CreatePostForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreatePost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatePost */ "./src/Components/UI/Organisms/Forms/CreatePost.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostForm", function() { return _CreatePost__WEBPACK_IMPORTED_MODULE_0__["CreatePostForm"]; });



/***/ }),

/***/ "./src/Components/UI/Organisms/PostInformation.tsx":
/*!*********************************************************!*\
  !*** ./src/Components/UI/Organisms/PostInformation.tsx ***!
  \*********************************************************/
/*! exports provided: PostInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostInformation", function() { return PostInformation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @UI/Molecules */ "./src/Components/UI/Molecules/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Organisms\\PostInformation.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Information = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostInformation__Information",
  componentId: "sc-6qrri0-0"
})(["display:grid;grid-row-gap:15px;"]);
const Comments = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostInformation__Comments",
  componentId: "sc-6qrri0-1"
})([""]);
const PostInformation = ({
  children,
  title,
  body
}) => {
  return __jsx(Information, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx(_UI_Molecules__WEBPACK_IMPORTED_MODULE_2__["PostContent"], {
    title: title,
    body: body,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), __jsx(Comments, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, children));
};

/***/ }),

/***/ "./src/Components/UI/Organisms/PostItem.tsx":
/*!**************************************************!*\
  !*** ./src/Components/UI/Organisms/PostItem.tsx ***!
  \**************************************************/
/*! exports provided: PostItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostItem", function() { return PostItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Molecules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @UI/Molecules */ "./src/Components/UI/Molecules/index.ts");
/* harmony import */ var _Features_Posts_Molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Features/Posts/Molecules */ "./src/Components/Features/Posts/Molecules/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Organisms\\PostItem.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Item = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "PostItem__Item",
  componentId: "tymixj-0"
})(["display:grid;grid-row-gap:15px;text-align:center;align-items:center;border-radius:20px;padding:15px;box-shadow:1px 2px 9px -5px rgba(0,0,0,0.5);"]);
const PostItem = ({
  title,
  body,
  id,
  onView
}) => {
  return __jsx(Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, __jsx(_UI_Molecules__WEBPACK_IMPORTED_MODULE_3__["PostContent"], {
    title: title,
    body: body,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }), __jsx(_Features_Posts_Molecules__WEBPACK_IMPORTED_MODULE_4__["Actions"], {
    id: id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => onView(id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "View")));
};

/***/ }),

/***/ "./src/Components/UI/Organisms/index.ts":
/*!**********************************************!*\
  !*** ./src/Components/UI/Organisms/index.ts ***!
  \**********************************************/
/*! exports provided: PostItem, CreatePostForm, PostInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostItem */ "./src/Components/UI/Organisms/PostItem.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostItem", function() { return _PostItem__WEBPACK_IMPORTED_MODULE_0__["PostItem"]; });

/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Forms */ "./src/Components/UI/Organisms/Forms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostForm", function() { return _Forms__WEBPACK_IMPORTED_MODULE_1__["CreatePostForm"]; });

/* harmony import */ var _PostInformation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostInformation */ "./src/Components/UI/Organisms/PostInformation.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostInformation", function() { return _PostInformation__WEBPACK_IMPORTED_MODULE_2__["PostInformation"]; });





/***/ }),

/***/ "./src/Components/UI/Templates/MainTemplate.tsx":
/*!******************************************************!*\
  !*** ./src/Components/UI/Templates/MainTemplate.tsx ***!
  \******************************************************/
/*! exports provided: MainTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTemplate", function() { return MainTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Templates\\MainTemplate.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Template = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.main.withConfig({
  displayName: "MainTemplate__Template",
  componentId: "hdcajk-0"
})(["height:100vh;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "MainTemplate__Container",
  componentId: "hdcajk-1"
})(["width:100%;height:100%;max-width:1200px;margin:0 auto;"]);
const MainTemplate = ({
  children
}) => {
  return __jsx(Template, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx(Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, children));
};

/***/ }),

/***/ "./src/Components/UI/Templates/ModalWindowTemplate.tsx":
/*!*************************************************************!*\
  !*** ./src/Components/UI/Templates/ModalWindowTemplate.tsx ***!
  \*************************************************************/
/*! exports provided: ModalWindowTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowTemplate", function() { return ModalWindowTemplate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\src\\Components\\UI\\Templates\\ModalWindowTemplate.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PositionWrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ModalWindowTemplate__PositionWrapped",
  componentId: "el276r-0"
})(["position:fixed;top:0;right:0;bottom:0;left:0;background:rgba(0,0,0,0.5);"]);
const Wrapped = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ModalWindowTemplate__Wrapped",
  componentId: "el276r-1"
})(["position:absolute;z-index:5;top:50%;left:50%;transform:translate(-50%,-50%);background:rgb(255 255 255);padding:30px;border-radius:24px;"]);
const ModalWindowTemplate = ({
  children
}) => {
  return __jsx(PositionWrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, __jsx(Wrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }
  }, children));
};

/***/ }),

/***/ "./src/Components/UI/Templates/index.ts":
/*!**********************************************!*\
  !*** ./src/Components/UI/Templates/index.ts ***!
  \**********************************************/
/*! exports provided: MainTemplate, ModalWindowTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainTemplate */ "./src/Components/UI/Templates/MainTemplate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainTemplate", function() { return _MainTemplate__WEBPACK_IMPORTED_MODULE_0__["MainTemplate"]; });

/* harmony import */ var _ModalWindowTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalWindowTemplate */ "./src/Components/UI/Templates/ModalWindowTemplate.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalWindowTemplate", function() { return _ModalWindowTemplate__WEBPACK_IMPORTED_MODULE_1__["ModalWindowTemplate"]; });




/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvbmV3LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Db21tZW50cy9jcmVhdGVDb21tZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Db21tZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy9jcmVhdGVQb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL1Bvc3RzL2RlbGV0ZVBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvZ2V0UG9zdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvdXBkYXRlUG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy92aWV3UG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2RlbC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2RlbC9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9sZWN1bGVzL0FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vbGVjdWxlcy9MaXN0UG9zdHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vbGVjdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9PcmdhbmlzbXMvUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3RzQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvQ29tbWVudEJvZHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL0NvbW1lbnRJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvUGFnZVRpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Qb3N0L1Bvc3RCb2R5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Qb3N0L1Bvc3RUaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvUG9zdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9QcmVsb2FkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL01vbGVjdWxlcy9Qb3N0QWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvTW9sZWN1bGVzL1Bvc3RDb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9Nb2xlY3VsZXMvU2VuZE1lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL01vbGVjdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9PcmdhbmlzbXMvRm9ybXMvQ3JlYXRlUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL0Zvcm1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL09yZ2FuaXNtcy9Qb3N0SW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL09yZ2FuaXNtcy9Qb3N0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL1RlbXBsYXRlcy9NYWluVGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL1RlbXBsYXRlcy9Nb2RhbFdpbmRvd1RlbXBsYXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9UZW1wbGF0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJDcmVhdGVQb3N0V3JhcHBlZCIsInN0eWxlZCIsImRpdiIsIk5ldyIsImlzTG9hZGluZyIsInVzZVNlbGVjdG9yIiwiUG9zdHNTZWxlY3RvcnMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ0eXBlIiwicGF5bG9hZCIsInB1c2giLCJpbml0aWFsVmFsdWUiLCJ0aXRsZSIsImJvZHkiLCJjcmVhdGVDb21tZW50cyIsImNyZWF0ZUluc3RhbmNlIiwicG9zdCIsImNyZWF0ZVBvc3QiLCJkZWxldGVQb3N0IiwiaWQiLCJkZWxldGUiLCJnZXRQb3N0cyIsImdldCIsInVwZGF0ZVBvc3QiLCJwdXQiLCJ2aWV3UG9zdCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImFjdGlvbnMiLCJzZXRMb2FkaW5nIiwidHlwZXMiLCJzZXRQb3N0cyIsInNldFBvc3QiLCJwb3N0cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJnZXRQb3N0c1NhZ2EiLCJyZXNwb25zZSIsImNhbGwiLCJBUEkiLCJQb3N0c0FQSSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVBvc3RTYWdhIiwiZGVsZXRlUG9zdFNhZ2EiLCJ2aWV3UG9zdFNhZ2EiLCJlZGl0UG9zdFNhZ2EiLCJzZW5kQ29tbWVudFBvc3RTYWdhIiwicG9zdElkIiwiQ29tbWVudHNBUEkiLCJyb290U2FnYSIsImFsbCIsInRha2VFdmVyeSIsIlBvc3RzUm9vdFJlZHVjZXIiLCJTRVRfTE9BRElORyIsIkdFVF9QT1NUUyIsIlNFVF9QT1NUUyIsIkVESVRfUE9TVCIsIkRFTEVURV9QT1NUIiwiQ1JFQVRFX1BPU1QiLCJTRVRfUE9TVCIsIlZJRVdfUE9TVCIsIlNFTkRfTUVTU0FHRSIsIkFjdGlvbnMiLCJjaGlsZHJlbiIsIm9uRGVsZXRlIiwiUG9zdHMiLCJMaXN0UG9zdHMiLCJvblZpZXciLCJtYXAiLCJXcmFwcGVkIiwiSW5mb3JtYXRpb24iLCJQb3NpdGlvbldyYXBwZWQiLCJUaXRsZSIsIkNvbW1lbnRzIiwiUG9zdCIsImlzRWRpdCIsInNldElzRWRpdCIsInVzZVN0YXRlIiwiY29tbWVudHMiLCJvbkVkaXQiLCJvbkNsb3NlIiwib25Hb0JhY2siLCJiYWNrIiwib25TZW5kTWVzc2FnZSIsInZhbHVlIiwiUG9zdHNXcmFwcGVkIiwiUG9zdHNBY3Rpb25zIiwiQnV0dG9uQ29tcG9uZW50IiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJkYW5nZXIiLCJyZWQiLCJibGFjayIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJCb2R5IiwiaDIiLCJDb21tZW50Qm9keSIsIkNvbnRlbnQiLCJzcGFuIiwiQ29tbWVudEl0ZW0iLCJJbnB1dENvbXBvbmVudCIsImlucHV0IiwiZ3JleSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdlVGl0bGUiLCJQb3N0Qm9keSIsIndlaWdodHMiLCJib2xkIiwiUG9zdFRpdGxlIiwiUmluZyIsIlByZWxvYWRlciIsIlBvc3RBY3Rpb25zIiwiUG9zdENvbnRlbnQiLCJTZW5kTWVzc2FnZSIsInNldFZhbHVlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJDcmVhdGVQb3N0Rm9ybSIsIm9uQ2FuY2VsIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiUG9zdEluZm9ybWF0aW9uIiwiSXRlbSIsIlBvc3RJdGVtIiwiVGVtcGxhdGUiLCJtYWluIiwiQ29udGFpbmVyIiwiTWFpblRlbXBsYXRlIiwiTW9kYWxXaW5kb3dUZW1wbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOEVBQXZCOztBQU9BLE1BQU1DLEdBQUcsR0FBRyxNQUEwQjtBQUNyQyxRQUFNQyxTQUFTLEdBQUdDLCtEQUFXLENBQUNDLHlFQUFjLENBQUNGLFNBQWhCLENBQTdCO0FBQ0EsUUFBTUcsUUFBUSxHQUFHQywrREFBVyxF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QUEsZ0ZBQXJCO0FBUUEsTUFBTThFLE9BQU8sR0FBRy9FLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ0pBQWI7QUFhTyxNQUFNNEksbUJBQXdDLEdBQUcsQ0FBQztBQUN4RHBFO0FBRHdELENBQUQsS0FFOUI7QUFDekIsU0FDQyxNQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVBLFFBQVYsQ0FERCxDQUREO0FBS0EsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUN4QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcG9zdHMvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wb3N0cy9uZXcudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENyZWF0ZVBvc3RGb3JtIH0gZnJvbSAnQFVJL09yZ2FuaXNtcydcclxuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIE5leHRSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUG9zdHNTZWxlY3RvcnMgfSBmcm9tICdAQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cydcclxuaW1wb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5cclxuY29uc3QgQ3JlYXRlUG9zdFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR3aWR0aDogNTAwcHg7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmNvbnN0IE5ldyA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IGlzTG9hZGluZyA9IHVzZVNlbGVjdG9yKFBvc3RzU2VsZWN0b3JzLmlzTG9hZGluZylcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXI6IE5leHRSb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnQ1JFQVRFX1BPU1QnLCBwYXlsb2FkOiB7IGRhdGEsIHB1c2g6IHJvdXRlci5wdXNoIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2gsIHJvdXRlcl1cclxuXHQpXHJcblx0Y29uc3QgaW5pdGlhbFZhbHVlID0geyB0aXRsZTogJycsIGJvZHk6ICcnIH1cclxuXHRyZXR1cm4gIWlzTG9hZGluZyA/IChcclxuXHRcdDxDcmVhdGVQb3N0V3JhcHBlZD5cclxuXHRcdFx0PENyZWF0ZVBvc3RGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gaW5pdGlhbFZhbHVlPXtpbml0aWFsVmFsdWV9IC8+XHJcblx0XHQ8L0NyZWF0ZVBvc3RXcmFwcGVkPlxyXG5cdCkgOiAoXHJcblx0XHQ8UHJlbG9hZGVyIC8+XHJcblx0KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5ld1xyXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUgfSBmcm9tICcuLidcclxuXHJcbmludGVyZmFjZSBQYXlsb2FkVHlwZSB7XHJcblx0cG9zdElkOiBudW1iZXJcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudHMgPSAoXHJcblx0cGF5bG9hZDogUGF5bG9hZFR5cGVcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RJbmZvcm1hdGlvblR5cGU+PiA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkucG9zdDxQb3N0SW5mb3JtYXRpb25UeXBlPignL2NvbW1lbnRzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiZXhwb3J0IHsgY3JlYXRlQ29tbWVudHMgfSBmcm9tICcuL2NyZWF0ZUNvbW1lbnRzJ1xuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJ0BBUEkvYXBpJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IChwYXlsb2FkOiBQb3N0VHlwZSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxQb3N0VHlwZT4+ID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlSW5zdGFuY2UoKS5wb3N0PFBvc3RUeXBlPignL3Bvc3RzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJ0BBUEkvYXBpJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RUeXBlW10+PiA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkuZGVsZXRlPFBvc3RUeXBlW10+KGAvcG9zdHMvJHtpZH1gKVxyXG59XHJcbiIsImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UG9zdFR5cGVbXT4+ID0+IHtcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkuZ2V0PFBvc3RUeXBlW10+KCcvcG9zdHMnKVxufVxuIiwiZXhwb3J0IHsgdXBkYXRlUG9zdCB9IGZyb20gJy4vdXBkYXRlUG9zdCdcbmV4cG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi9nZXRQb3N0cydcbmV4cG9ydCB7IGRlbGV0ZVBvc3QgfSBmcm9tICcuL2RlbGV0ZVBvc3QnXG5leHBvcnQgeyBjcmVhdGVQb3N0IH0gZnJvbSAnLi9jcmVhdGVQb3N0J1xuZXhwb3J0IHsgdmlld1Bvc3QgfSBmcm9tICcuL3ZpZXdQb3N0J1xuXG5leHBvcnQgdHlwZSB7IFBvc3RUeXBlLCBQb3N0SW5mb3JtYXRpb25UeXBlLCBDb21tZW50VHlwZSB9IGZyb20gJy4vdHlwZXMnXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBQYXlsb2FkVHlwZSB7XHJcblx0dGl0bGU6IHN0cmluZ1xyXG5cdGJvZHk6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQb3N0ID0gKFxyXG5cdGlkOiBudW1iZXIsXHJcblx0cGF5bG9hZDogUGF5bG9hZFR5cGVcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RUeXBlPj4gPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLnB1dDxQb3N0VHlwZT4oYC9wb3N0cy8ke2lkfWAsIHsgLi4ucGF5bG9hZCB9KVxyXG59XHJcbiIsImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICdAQVBJL2FwaSdcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3Qgdmlld1Bvc3QgPSAoaWQ6IG51bWJlcik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxQb3N0SW5mb3JtYXRpb25UeXBlPj4gPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLmdldDxQb3N0SW5mb3JtYXRpb25UeXBlPihgL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29tbWVudHNBUEkgZnJvbSAnLi9Db21tZW50cydcbmltcG9ydCAqIGFzIFBvc3RzQVBJIGZyb20gJy4vUG9zdHMnXG5cbmV4cG9ydCB0eXBlIHsgUG9zdFR5cGUsIENvbW1lbnRUeXBlLCBQb3N0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9Qb3N0cydcblxuZXhwb3J0IHsgQ29tbWVudHNBUEkgfVxuZXhwb3J0IHsgUG9zdHNBUEkgfVxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJbnN0YW5jZSA9ICgpOiBBeGlvc0luc3RhbmNlID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuY3JlYXRlKHsgYmFzZVVSTDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkLycgfSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9SRVNUJ1xuXG5leHBvcnQgdHlwZSB7IFBvc3RUeXBlIH0gZnJvbSAnLi9SRVNUJ1xuZXhwb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICcuL2FwaSdcbmV4cG9ydCB7IEFQSSB9XG4iLCJpbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgSW5mZXJBY3Rpb25zVHlwZSB9IGZyb20gJ0BMaWIvU3RvcmUnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuXHRzZXRMb2FkaW5nOiAocGF5bG9hZDogYm9vbGVhbikgPT5cclxuXHRcdCh7XHJcblx0XHRcdHR5cGU6IHR5cGVzLlNFVF9MT0FESU5HLFxyXG5cdFx0XHRwYXlsb2FkLFxyXG5cdFx0fSBhcyBjb25zdCksXHJcblx0c2V0UG9zdHM6IChwYXlsb2FkOiBQb3N0VHlwZVtdKSA9PlxyXG5cdFx0KHtcclxuXHRcdFx0dHlwZTogdHlwZXMuU0VUX1BPU1RTLFxyXG5cdFx0XHRwYXlsb2FkLFxyXG5cdFx0fSBhcyBjb25zdCksXHJcblx0c2V0UG9zdDogKHBheWxvYWQ6IFBvc3RJbmZvcm1hdGlvblR5cGUpID0+XHJcblx0XHQoe1xyXG5cdFx0XHR0eXBlOiB0eXBlcy5TRVRfUE9TVCxcclxuXHRcdFx0cGF5bG9hZCxcclxuXHRcdH0gYXMgY29uc3QpLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb25zVHlwZSA9IEluZmVyQWN0aW9uc1R5cGU8dHlwZW9mIGFjdGlvbnM+XHJcbiIsImltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcblxuZXhwb3J0IHsgc2VsZWN0b3JzIGFzIFBvc3RzU2VsZWN0b3JzIH1cbmV4cG9ydCB7IHJlZHVjZXIgYXMgUG9zdHNSb290UmVkdWNlciwgaW5pdGlhbFZhbHVlIGFzIFBvc3RzSW5pdGlhbFZhbHVlIH0gZnJvbSAnLi9yZWR1Y2VyJ1xuZXhwb3J0IHsgYWN0aW9ucyBhcyBQb3N0c0FjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnXG5leHBvcnQgeyByb290U2FnYSBhcyBQb3N0c1Jvb3RTYWdhIH0gZnJvbSAnLi9zYWdhJ1xuZXhwb3J0IHR5cGUgeyBBY3Rpb25zVHlwZSB9IGZyb20gJy4vYWN0aW9ucydcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5pbXBvcnQgeyBBY3Rpb25zVHlwZSB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsVmFsdWUgPSB7XHJcblx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRwb3N0czogbnVsbCBhcyBQb3N0VHlwZVtdIHwgbnVsbCxcclxuXHRwb3N0OiBudWxsIGFzIFBvc3RJbmZvcm1hdGlvblR5cGUgfCBudWxsLFxyXG59XHJcblxyXG50eXBlIEluaXRpYWxWYWx1ZVR5cGUgPSB0eXBlb2YgaW5pdGlhbFZhbHVlXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFZhbHVlLCBhY3Rpb246IEFjdGlvbnNUeXBlKTogSW5pdGlhbFZhbHVlVHlwZSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG5cdFx0Y2FzZSB0eXBlcy5TRVRfTE9BRElORzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNhc2UgdHlwZXMuU0VUX1BPU1RTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cG9zdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjYXNlIHR5cGVzLlNFVF9QT1NUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cG9zdDogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIGFsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgeyBBUEksIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9pbmRleCdcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3N0c1NhZ2EoKSB7XHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5nZXRQb3N0cylcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3RzKHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgZGF0YTogUG9zdFR5cGU7IHB1c2g6IGFueSB9XHJcbn1cclxuZnVuY3Rpb24qIGNyZWF0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBDcmVhdGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgZGF0YSwgcHVzaCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmNyZWF0ZVBvc3QsIGRhdGEpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmdldFBvc3RzKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdHMocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdHlpZWxkIHB1dChwdXNoKCcvJykpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgaWQ6IG51bWJlciB9XHJcbn1cclxuZnVuY3Rpb24qIGRlbGV0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBEZWxldGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5kZWxldGVQb3N0LCBpZClcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkuZ2V0UG9zdHMpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0cyhyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFZpZXdQb3N0VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyBpZDogbnVtYmVyIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHZpZXdQb3N0U2FnYSh7IHBheWxvYWQgfTogVmlld1Bvc3RUeXBlKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIGlkKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdChyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVkaXRQb3N0VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyBpZDogbnVtYmVyOyBkYXRhOiBQb3N0VHlwZSB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0UG9zdFNhZ2EoeyBwYXlsb2FkIH06IEVkaXRQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQsIGRhdGEgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS51cGRhdGVQb3N0LCBpZCwgZGF0YSlcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIGlkKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdChyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5pbnRlcmZhY2UgU2VuZENvbW1lbnRUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGJvZHk6IHN0cmluZzsgcG9zdElkOiBudW1iZXIgfVxyXG59XHJcbmZ1bmN0aW9uKiBzZW5kQ29tbWVudFBvc3RTYWdhKHsgcGF5bG9hZCB9OiBTZW5kQ29tbWVudFR5cGUpIHtcclxuXHRjb25zb2xlLmxvZygnc2UnKVxyXG5cdGNvbnN0IHsgcG9zdElkLCBib2R5IH0gPSBwYXlsb2FkXHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgY2FsbChBUEkuQ29tbWVudHNBUEkuY3JlYXRlQ29tbWVudHMsIHsgcG9zdElkLCBib2R5IH0pXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLnZpZXdQb3N0LCBwb3N0SWQpXHJcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3QocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5HRVRfUE9TVFMsIGdldFBvc3RzU2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuQ1JFQVRFX1BPU1QsIGNyZWF0ZVBvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5ERUxFVEVfUE9TVCwgZGVsZXRlUG9zdFNhZ2EpLFxyXG5cdFx0dGFrZUV2ZXJ5KHR5cGVzLlZJRVdfUE9TVCwgdmlld1Bvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5FRElUX1BPU1QsIGVkaXRQb3N0U2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuU0VORF9NRVNTQUdFLCBzZW5kQ29tbWVudFBvc3RTYWdhKSxcclxuXHRdKVxyXG59XHJcbiIsImltcG9ydCB7IEFwcFN0YXRlVHlwZSB9IGZyb20gJ0BMaWIvU3RvcmUnXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gKHN0YXRlOiBBcHBTdGF0ZVR5cGUpOiBQb3N0VHlwZVtdIHwgbnVsbCA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIucG9zdHNcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHN0YXRlOiBBcHBTdGF0ZVR5cGUpOiBQb3N0SW5mb3JtYXRpb25UeXBlIHwgbnVsbCA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIucG9zdFxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IChzdGF0ZTogQXBwU3RhdGVUeXBlKTogYm9vbGVhbiA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIuaXNMb2FkaW5nXHJcbiIsImV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdTRVRfTE9BRElORydcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUUyA9ICdHRVRfUE9TVFMnXHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVFMgPSAnU0VUX1BPU1RTJ1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUID0gJ0VESVRfUE9TVCdcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gJ0RFTEVURV9QT1NUJ1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSAnQ1JFQVRFX1BPU1QnXHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVCA9ICdTRVRfUE9TVCdcclxuZXhwb3J0IGNvbnN0IFZJRVdfUE9TVCA9ICdWSUVXX1BPU1QnXHJcbmV4cG9ydCBjb25zdCBTRU5EX01FU1NBR0UgPSAnU0VORF9NRVNTQUdFJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUG9zdEFjdGlvbnMgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1Bvc3RBY3Rpb25zJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG5cdGlkOiBudW1iZXIgfCB1bmRlZmluZWRcclxufVxyXG5leHBvcnQgY29uc3QgQWN0aW9uczogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGNoaWxkcmVuLCBpZCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1BPU1QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2hdXHJcblx0KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc3RBY3Rpb25zIG9uRGVsZXRlPXtvbkRlbGV0ZX0gaWQ9e2lkfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9Qb3N0QWN0aW9ucz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5cclxuY29uc3QgUG9zdHMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuXHRncmlkLWdhcDogMjBweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0czogUG9zdFR5cGVbXVxyXG59XHJcbmV4cG9ydCBjb25zdCBMaXN0UG9zdHM6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0cyB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IG9uVmlldyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcclxuXHRcdFx0cm91dGVyLnB1c2goYC9wb3N0cy8ke2lkfWApXHJcblx0XHR9LFxyXG5cdFx0W3JvdXRlcl1cclxuXHQpXHJcblx0Y29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhcclxuXHRcdChpZDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9QT1NUJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoXVxyXG5cdClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQb3N0cz5cclxuXHRcdFx0e3Bvc3RzLm1hcCgoeyB0aXRsZSwgYm9keSwgaWQgfTogUG9zdFR5cGUpID0+IChcclxuXHRcdFx0XHQ8UG9zdEl0ZW1cclxuXHRcdFx0XHRcdGtleT17aWR9XHJcblx0XHRcdFx0XHRpZD17aWR9XHJcblx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XHJcblx0XHRcdFx0XHRib2R5PXtib2R5fVxyXG5cdFx0XHRcdFx0b25WaWV3PXtvblZpZXd9XHJcblx0XHRcdFx0XHRvbkRlbGV0ZT17b25EZWxldGV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L1Bvc3RzPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBMaXN0UG9zdHMgfSBmcm9tICcuL0xpc3RQb3N0cydcbmV4cG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuL0FjdGlvbnMnXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuaW1wb3J0IHsgU2VuZE1lc3NhZ2UgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1NlbmRNZXNzYWdlJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA1NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRncmlkLXJvdy1nYXA6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMzBweCAwO1xyXG5gXHJcbmNvbnN0IFBvc2l0aW9uV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuY29uc3QgQ29tbWVudHMgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3Q6IFBvc3RJbmZvcm1hdGlvblR5cGVcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3QgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGJvZHksIGNvbW1lbnRzIH0gPSBwb3N0XHJcblx0Y29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnRURJVF9QT1NUJywgcGF5bG9hZDogeyBpZCwgZGF0YSB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0Y29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldElzRWRpdCghaXNFZGl0KVxyXG5cdH0sIFtpc0VkaXRdKVxyXG5cdGNvbnN0IG9uR29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0cm91dGVyLmJhY2soKVxyXG5cdH0sIFtyb3V0ZXJdKVxyXG5cdGNvbnN0IG9uU2VuZE1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcclxuXHRcdCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1NFTkRfTUVTU0FHRScsIHBheWxvYWQ6IHsgYm9keTogdmFsdWUsIHBvc3RJZDogaWQgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHRcdDxXcmFwcGVkPlxyXG5cdFx0XHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXQoIWlzRWRpdCl9PlxyXG5cdFx0XHRcdFx0XHRcdEVkaXRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXtvbkdvQmFja30+XHJcblx0XHRcdFx0XHRcdFx0R28gYmFja1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdFx0XHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdFx0PFBvc3RJbmZvcm1hdGlvbiB0aXRsZT17dGl0bGV9IGJvZHk9e2JvZHl9PlxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZW5kTWVzc2FnZSBvblNlbmRNZXNzYWdlPXtvblNlbmRNZXNzYWdlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29tbWVudHMubWFwKCh7IGJvZHksIGlkIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnRJdGVtIGtleT17aWR9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50cz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0PC9Qb3N0SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHRcdDwvV3JhcHBlZD5cclxuXHRcdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdHtpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxNb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PENyZWF0ZVBvc3RGb3JtXHJcblx0XHRcdFx0XHRcdGlzRWRpdFxyXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25FZGl0fVxyXG5cdFx0XHRcdFx0XHRpbml0aWFsVmFsdWU9e3sgdGl0bGUsIGJvZHkgfX1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17b25DbG9zZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Nb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTGlzdFBvc3RzIH0gZnJvbSAnLi4vTW9sZWN1bGVzJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBQb3N0c1dyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbjogMzBweCAwO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3RzOiBQb3N0VHlwZVtdXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RzQWN0aW9uczogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3RzIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVkPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xyXG5cdFx0XHRcdFx0cm91dGVyLnB1c2goJy9wb3N0cy9uZXcnKVxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDxQb3N0c1dyYXBwZWQ+XHJcblx0XHRcdFx0PExpc3RQb3N0cyBwb3N0cz17cG9zdHN9IC8+XHJcblx0XHRcdDwvUG9zdHNXcmFwcGVkPlxyXG5cdFx0PC9XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgfSBmcm9tICcuL1Bvc3RzQWN0aW9ucydcbmV4cG9ydCB7IFBvc3QgfSBmcm9tICcuL1Bvc3QnXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgYXMgUG9zdHNBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQge1xuXHRQb3N0c1Jvb3RSZWR1Y2VyLFxuXHRQb3N0c1Jvb3RTYWdhLFxuXHRQb3N0c1NlbGVjdG9ycyxcblx0UG9zdHNBY3Rpb25zLFxuXHRQb3N0c0luaXRpYWxWYWx1ZSxcbn0gZnJvbSAnLi9Nb2RlbCdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQFN0eWxlZC90aGVtZSdcclxuXHJcbmludGVyZmFjZSBCdXR0b25UeXBlIHtcclxuXHRkYW5nZXI6IGJvb2xlYW4gfCB1bmRlZmluZWRcclxuXHR0aGVtZTogVGhlbWVUeXBlXHJcbn1cclxuY29uc3QgQnV0dG9uQ29tcG9uZW50ID0gc3R5bGVkLmJ1dHRvbjxCdXR0b25UeXBlPmBcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRwYWRkaW5nOiA3cHggMTBweDtcclxuXHRib3JkZXItc3R5bGU6IGRhc2hlZDtcclxuXHRib3JkZXItcmFkaXVzOiA3cHg7XHJcblx0JHsoeyB0aGVtZTogeyBjb2xvcnMgfSwgZGFuZ2VyIH0pID0+XHJcblx0XHRkYW5nZXJcclxuXHRcdFx0PyBgY29sb3I6ICR7Y29sb3JzLnJlZH07IGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3JzLnJlZH07YFxyXG5cdFx0XHQ6IGBjb2xvcjogJHtjb2xvcnMuYmxhY2t9OyBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5ibGFja307YH07XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG5cdG9uQ2xpY2s6ICgpID0+IHZvaWRcclxuXHRkYW5nZXI/OiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcblx0b25DbGljayxcclxuXHRkYW5nZXIsXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8QnV0dG9uQ29tcG9uZW50IG9uQ2xpY2s9e29uQ2xpY2t9IGRhbmdlcj17ZGFuZ2VyfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9CdXR0b25Db21wb25lbnQ+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuaDJgXHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5leHBvcnQgY29uc3QgQ29tbWVudEJvZHk6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gPEJvZHk+e2NoaWxkcmVufTwvQm9keT5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLnNwYW5gXHJcblx0bWF4LXdpZHRoOiAyNTBweDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGJvZHk6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCBDb21tZW50SXRlbTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGJvZHkgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxDb250ZW50Pntib2R5fTwvQ29udGVudD5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ0BTdHlsZWQvdGhlbWUnXHJcblxyXG5jb25zdCBJbnB1dENvbXBvbmVudCA9IHN0eWxlZC5pbnB1dGBcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHQmOjpwbGFjZWhvbGRlciB7XHJcblx0XHRjb2xvcjogJHsoeyB0aGVtZTogeyBjb2xvcnMgfSB9OiBUaGVtZVR5cGUpID0+IGNvbG9ycy5ncmV5fTtcclxuXHR9XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0dmFsdWU6IHN0cmluZ1xyXG5cdG9uQ2hhbmdlOiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWRcclxufVxyXG5leHBvcnQgY29uc3QgSW5wdXQ6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxJbnB1dENvbXBvbmVudCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcclxuXHRmb250LXNpemU6IDM2cHg7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQYWdlVGl0bGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gPFRpdGxlPntjaGlsZHJlbn08L1RpdGxlPlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc3BhbmBgXHJcblxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RCb2R5OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxCb2R5PntjaGlsZHJlbn08L0JvZHk+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdAU3R5bGVkL3RoZW1lJ1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuc3BhbmBcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXdlaWdodDogJHsoeyB0aGVtZTogeyB3ZWlnaHRzIH0gfTogVGhlbWVUeXBlKSA9PiB3ZWlnaHRzLmJvbGR9O1xyXG5gXHJcblxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RUaXRsZTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGNoaWxkcmVuIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8VGl0bGU+e2NoaWxkcmVufTwvVGl0bGU+XHJcbn1cclxuIiwiZXhwb3J0IHsgUG9zdFRpdGxlIH0gZnJvbSAnLi9Qb3N0VGl0bGUnXG5leHBvcnQgeyBQb3N0Qm9keSB9IGZyb20gJy4vUG9zdEJvZHknXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBSaW5nID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDgwcHg7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcblx0Jjo6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJyAnO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogNjRweDtcclxuXHRcdGhlaWdodDogNjRweDtcclxuXHRcdG1hcmdpbjogOHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyOiA2cHggc29saWQgI2ZmZjtcclxuXHRcdGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xyXG5cdFx0YW5pbWF0aW9uOiBsZHMtZHVhbC1yaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxuXHRAa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xyXG5cdFx0MCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdH1cclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuYFxyXG5jb25zdCBQb3NpdGlvbldyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBQcmVsb2FkZXIgPSAoKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0PFJpbmcgLz5cclxuXHRcdDwvUG9zaXRpb25XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBQYWdlVGl0bGUgfSBmcm9tICcuL1BhZ2VUaXRsZSdcbmV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJ1xuZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL0lucHV0J1xuZXhwb3J0IHsgUHJlbG9hZGVyIH0gZnJvbSAnLi9QcmVsb2FkZXInXG5leHBvcnQgeyBDb21tZW50Qm9keSB9IGZyb20gJy4vQ29tbWVudEJvZHknXG5leHBvcnQgeyBDb21tZW50SXRlbSB9IGZyb20gJy4vQ29tbWVudEl0ZW0nXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFBvcGNvbmZpcm0sIEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcblxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDE1cHg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG5cdG9uRGVsZXRlOiAoaWQ6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxyXG5cdGlkOiBudW1iZXIgfCB1bmRlZmluZWRcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdEFjdGlvbnM6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdG9uRGVsZXRlLFxyXG5cdGlkLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEFjdGlvbnM+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0PFBvcGNvbmZpcm1cclxuXHRcdFx0XHR0aXRsZT0nQXJlIHlvdSBzdXJl77yfJ1xyXG5cdFx0XHRcdG9rVGV4dD0nWWVzJ1xyXG5cdFx0XHRcdGNhbmNlbFRleHQ9J05vJ1xyXG5cdFx0XHRcdG9uQ29uZmlybT17KCkgPT4gb25EZWxldGUoaWQpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PEJ1dHRvbiBkYW5nZXI+RGVsZXRlPC9CdXR0b24+XHJcblx0XHRcdDwvUG9wY29uZmlybT5cclxuXHRcdFx0LFxyXG5cdFx0PC9BY3Rpb25zPlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFBvc3RCb2R5LCBQb3N0VGl0bGUgfSBmcm9tICdAVUkvQXRvbXMvUG9zdCdcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxNXB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHRpdGxlOiBzdHJpbmdcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdENvbnRlbnQ6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyB0aXRsZSwgYm9keSB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PENvbnRlbnQ+XHJcblx0XHRcdDxQb3N0VGl0bGU+e3RpdGxlfTwvUG9zdFRpdGxlPlxyXG5cdFx0XHQ8UG9zdEJvZHk+e2JvZHl9PC9Qb3N0Qm9keT5cclxuXHRcdDwvQ29udGVudD5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudDtcclxuYFxyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0b25TZW5kTWVzc2FnZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWRcclxufVxyXG5leHBvcnQgY29uc3QgU2VuZE1lc3NhZ2U6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdG9uU2VuZE1lc3NhZ2UsXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXHJcblx0Y29uc3Qgb25DaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuXHRcdHNldFZhbHVlKGUuY3VycmVudFRhcmdldC52YWx1ZSlcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVkPlxyXG5cdFx0XHQ8SW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGNvbW1lbnQnIC8+XHJcblx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gb25TZW5kTWVzc2FnZSh2YWx1ZSl9PlNlbmQ8L0J1dHRvbj5cclxuXHRcdDwvV3JhcHBlZD5cclxuXHQpXHJcbn1cclxuIiwiZXhwb3J0IHsgUG9zdENvbnRlbnQgfSBmcm9tICcuL1Bvc3RDb250ZW50J1xuZXhwb3J0IHsgU2VuZE1lc3NhZ2UgfSBmcm9tICcuL1NlbmRNZXNzYWdlJ1xuZXhwb3J0IHsgUG9zdEFjdGlvbnMgYXMgUG9zdEFjdGlvbnNDb21wb25lbnRzIH0gZnJvbSAnLi9Qb3N0QWN0aW9ucydcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdG9uU3VibWl0OiAoZGF0YTogUG9zdFR5cGUpID0+IHZvaWRcclxuXHRvbkNsb3NlPzogKCkgPT4gdm9pZFxyXG5cdGluaXRpYWxWYWx1ZTogUG9zdFR5cGVcclxuXHRpc0VkaXQ/OiBib29sZWFuIHwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNvbnN0IENyZWF0ZVBvc3RGb3JtOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRvblN1Ym1pdCxcclxuXHRpbml0aWFsVmFsdWUsXHJcblx0aXNFZGl0LFxyXG5cdG9uQ2xvc2UsXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc29sZS5sb2coJ3JvdXRlcicsIHJvdXRlcilcclxuXHRjb25zdCBvbkNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdGlmIChpc0VkaXQgJiYgb25DbG9zZSkge1xyXG5cdFx0XHRvbkNsb3NlKClcclxuXHRcdH0gZWxzZSByb3V0ZXIuYmFjaygpXHJcblx0fSwgW3JvdXRlciwgaXNFZGl0LCBvbkNsb3NlXSlcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZvcm0gbmFtZT0ncG9zdCcgaW5pdGlhbFZhbHVlcz17aW5pdGlhbFZhbHVlfSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG5cdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0bGFiZWw9J1RpdGxlJ1xyXG5cdFx0XHRcdG5hbWU9J3RpdGxlJ1xyXG5cdFx0XHRcdHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBlbnRlciB0aXRsZSBvZiBwb3N0IScgfV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIHRpdGxlIG9mIHBvc3QnIC8+XHJcblx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHQ8Rm9ybS5JdGVtXHJcblx0XHRcdFx0bGFiZWw9J0JvZHknXHJcblx0XHRcdFx0bmFtZT0nYm9keSdcclxuXHRcdFx0XHRydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYm9keSBvZiBwb3N0IScgfV19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8SW5wdXQgcGxhY2Vob2xkZXI9J0VudGVyIGJvZHkgb2YgcG9zdCcgLz5cclxuXHRcdFx0PC9Gb3JtLkl0ZW0+XHJcblx0XHRcdDxBY3Rpb25zPlxyXG5cdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBodG1sVHlwZT0nc3VibWl0Jz5cclxuXHRcdFx0XHRcdHtpc0VkaXQgPyAnU2F2ZScgOiAnQ3JlYXRlJ31cclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgZGFuZ2VyIG9uQ2xpY2s9e29uQ2FuY2VsfT5cclxuXHRcdFx0XHRcdENhbmNlbFxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KVxyXG59XHJcbiIsImV4cG9ydCB7IENyZWF0ZVBvc3RGb3JtIH0gZnJvbSAnLi9DcmVhdGVQb3N0J1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBQb3N0Q29udGVudCB9IGZyb20gJ0BVSS9Nb2xlY3VsZXMnXHJcblxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXJvdy1nYXA6IDE1cHg7XHJcbmBcclxuY29uc3QgQ29tbWVudHMgPSBzdHlsZWQuZGl2YGBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0RWxlbWVudFxyXG5cdHRpdGxlOiBzdHJpbmdcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdEluZm9ybWF0aW9uOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRjaGlsZHJlbixcclxuXHR0aXRsZSxcclxuXHRib2R5LFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEluZm9ybWF0aW9uPlxyXG5cdFx0XHQ8UG9zdENvbnRlbnQgdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fSAvPlxyXG5cdFx0XHQ8Q29tbWVudHM+e2NoaWxkcmVufTwvQ29tbWVudHM+XHJcblx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSAnQFVJL01vbGVjdWxlcydcclxuaW1wb3J0IHsgUG9zdEFjdGlvbnMgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1Bvc3RBY3Rpb25zJ1xyXG5pbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQEZlYXR1cmVzL1Bvc3RzL01vbGVjdWxlcydcclxuXHJcbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxNXB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0cGFkZGluZzogMTVweDtcclxuXHRib3gtc2hhZG93OiAxcHggMnB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRvblZpZXc6IChpZDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkXHJcblx0b25EZWxldGU6IChpZDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB2b2lkXHJcblx0dGl0bGU6IHN0cmluZ1xyXG5cdGJvZHk6IHN0cmluZ1xyXG5cdGlkOiBudW1iZXIgfCB1bmRlZmluZWRcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdEl0ZW06IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdHRpdGxlLFxyXG5cdGJvZHksXHJcblx0aWQsXHJcblx0b25WaWV3LFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEl0ZW0+XHJcblx0XHRcdDxQb3N0Q29udGVudCB0aXRsZT17dGl0bGV9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdDxBY3Rpb25zIGlkPXtpZH0+XHJcblx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblZpZXcoaWQpfT5WaWV3PC9CdXR0b24+XHJcblx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdDwvSXRlbT5cclxuXHQpXHJcbn1cclxuIiwiZXhwb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICcuL1Bvc3RJdGVtJ1xuZXhwb3J0IHsgQ3JlYXRlUG9zdEZvcm0gfSBmcm9tICcuL0Zvcm1zJ1xuZXhwb3J0IHsgUG9zdEluZm9ybWF0aW9uIH0gZnJvbSAnLi9Qb3N0SW5mb3JtYXRpb24nXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IHN0eWxlZC5tYWluYFxyXG5cdGhlaWdodDogMTAwdmg7XHJcbmBcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWF4LXdpZHRoOiAxMjAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBNYWluVGVtcGxhdGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFRlbXBsYXRlPlxyXG5cdFx0XHQ8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj5cclxuXHRcdDwvVGVtcGxhdGU+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFBvc2l0aW9uV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMDtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbmBcclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdGJhY2tncm91bmQ6IHJnYigyNTUgMjU1IDI1NSk7XHJcblx0cGFkZGluZzogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiAyNHB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5leHBvcnQgY29uc3QgTW9kYWxXaW5kb3dUZW1wbGF0ZTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHQ8V3JhcHBlZD57Y2hpbGRyZW59PC9XcmFwcGVkPlxyXG5cdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0KVxyXG59XHJcbiIsImV4cG9ydCB7IE1haW5UZW1wbGF0ZSB9IGZyb20gJy4vTWFpblRlbXBsYXRlJ1xuZXhwb3J0IHsgTW9kYWxXaW5kb3dUZW1wbGF0ZSB9IGZyb20gJy4vTW9kYWxXaW5kb3dUZW1wbGF0ZSdcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9