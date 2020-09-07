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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/posts/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Features_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Features/Posts */ "./src/Components/Features/Posts/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\pages\\posts\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PostPage = () => {
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_Features_Posts__WEBPACK_IMPORTED_MODULE_2__["PostsSelectors"].isLoading);
  const post = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_Features_Posts__WEBPACK_IMPORTED_MODULE_2__["PostsSelectors"].post);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    query: {
      id
    }
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch({
      type: 'VIEW_POST',
      payload: {
        id
      }
    });
  }, [dispatch, id]);
  return !isLoading && post ? __jsx(_Features_Posts__WEBPACK_IMPORTED_MODULE_2__["Post"], {
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 30
    }
  }) : __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_3__["Preloader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 53
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (PostPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Db21tZW50cy9jcmVhdGVDb21tZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Db21tZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy9jcmVhdGVQb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL1Bvc3RzL2RlbGV0ZVBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvZ2V0UG9zdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvdXBkYXRlUG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy92aWV3UG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2RlbC9hY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvc2FnYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2RlbC9zZWxlY3RvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9sZWN1bGVzL0FjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vbGVjdWxlcy9MaXN0UG9zdHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vbGVjdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9PcmdhbmlzbXMvUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL1Bvc3RzQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvT3JnYW5pc21zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvQ29tbWVudEJvZHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL0NvbW1lbnRJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvUGFnZVRpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Qb3N0L1Bvc3RCb2R5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Qb3N0L1Bvc3RUaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvUG9zdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9QcmVsb2FkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL01vbGVjdWxlcy9Qb3N0QWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvTW9sZWN1bGVzL1Bvc3RDb250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9Nb2xlY3VsZXMvU2VuZE1lc3NhZ2UudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL01vbGVjdWxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9PcmdhbmlzbXMvRm9ybXMvQ3JlYXRlUG9zdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL0Zvcm1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL09yZ2FuaXNtcy9Qb3N0SW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL09yZ2FuaXNtcy9Qb3N0SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL1RlbXBsYXRlcy9NYWluVGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL1RlbXBsYXRlcy9Nb2RhbFdpbmRvd1RlbXBsYXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9UZW1wbGF0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJQb3N0UGFnZSIsImlzTG9hZGluZyIsInVzZVNlbGVjdG9yIiwiUG9zdHNTZWxlY3RvcnMiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInF1ZXJ5IiwiaWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwicGF5bG9hZCIsImNyZWF0ZUNvbW1lbnRzIiwiY3JlYXRlSW5zdGFuY2UiLCJjcmVhdGVQb3N0IiwiZGVsZXRlUG9zdCIsImRlbGV0ZSIsImdldFBvc3RzIiwiZ2V0IiwidXBkYXRlUG9zdCIsInB1dCIsInZpZXdQb3N0IiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYWN0aW9ucyIsInNldExvYWRpbmciLCJ0eXBlcyIsInNldFBvc3RzIiwic2V0UG9zdCIsImluaXRpYWxWYWx1ZSIsInBvc3RzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsImdldFBvc3RzU2FnYSIsInJlc3BvbnNlIiwiY2FsbCIsIkFQSSIsIlBvc3RzQVBJIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVBvc3RTYWdhIiwicHVzaCIsImRlbGV0ZVBvc3RTYWdhIiwidmlld1Bvc3RTYWdhIiwiZWRpdFBvc3RTYWdhIiwic2VuZENvbW1lbnRQb3N0U2FnYSIsInBvc3RJZCIsImJvZHkiLCJDb21tZW50c0FQSSIsInJvb3RTYWdhIiwiYWxsIiwidGFrZUV2ZXJ5IiwiUG9zdHNSb290UmVkdWNlciIsIlNFVF9MT0FESU5HIiwiR0VUX1BPU1RTIiwiU0VUX1BPU1RTIiwiRURJVF9QT1NUIiwiREVMRVRFX1BPU1QiLCJDUkVBVEVfUE9TVCIsIlNFVF9QT1NUIiwiVklFV19QT1NUIiwiU0VORF9NRVNTQUdFIiwiQWN0aW9ucyIsImNoaWxkcmVuIiwib25EZWxldGUiLCJ1c2VDYWxsYmFjayIsIlBvc3RzIiwic3R5bGVkIiwiZGl2IiwiTGlzdFBvc3RzIiwicm91dGVyIiwib25WaWV3IiwibWFwIiwidGl0bGUiLCJXcmFwcGVkIiwiSW5mb3JtYXRpb24iLCJQb3NpdGlvbldyYXBwZWQiLCJUaXRsZSIsIkNvbW1lbnRzIiwiUG9zdCIsImlzRWRpdCIsInNldElzRWRpdCIsInVzZVN0YXRlIiwiY29tbWVudHMiLCJvbkVkaXQiLCJvbkNsb3NlIiwib25Hb0JhY2siLCJiYWNrIiwib25TZW5kTWVzc2FnZSIsInZhbHVlIiwiUG9zdHNXcmFwcGVkIiwiUG9zdHNBY3Rpb25zIiwiQnV0dG9uQ29tcG9uZW50IiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJkYW5nZXIiLCJyZWQiLCJibGFjayIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJCb2R5IiwiaDIiLCJDb21tZW50Qm9keSIsIkNvbnRlbnQiLCJzcGFuIiwiQ29tbWVudEl0ZW0iLCJJbnB1dENvbXBvbmVudCIsImlucHV0IiwiZ3JleSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdlVGl0bGUiLCJQb3N0Qm9keSIsIndlaWdodHMiLCJib2xkIiwiUG9zdFRpdGxlIiwiUmluZyIsIlByZWxvYWRlciIsIlBvc3RBY3Rpb25zIiwiUG9zdENvbnRlbnQiLCJTZW5kTWVzc2FnZSIsInNldFZhbHVlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJDcmVhdGVQb3N0Rm9ybSIsIm9uU3VibWl0Iiwib25DYW5jZWwiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJQb3N0SW5mb3JtYXRpb24iLCJJdGVtIiwiUG9zdEl0ZW0iLCJUZW1wbGF0ZSIsIm1haW4iLCJDb250YWluZXIiLCJNYWluVGVtcGxhdGUiLCJNb2RhbFdpbmRvd1RlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQTBCO0FBQzFDLFFBQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQ0MsOERBQWMsQ0FBQ0YsU0FBaEIsQ0FBN0I7QUFDQSxRQUFNRyxJQUFJLEdBQUdGLCtEQUFXLENBQUNDLDhEQUFjLENBQUNDLElBQWhCLENBQXhCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU07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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVBLFFBQVYsQ0FERCxDQUREO0FBS0EsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUN4QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcG9zdHMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcG9zdHMvW2lkXS50c3hcIik7XG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUG9zdHNTZWxlY3RvcnMsIFBvc3QgfSBmcm9tICdARmVhdHVyZXMvUG9zdHMnXHJcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgUG9zdFBhZ2UgPSAoKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihQb3N0c1NlbGVjdG9ycy5pc0xvYWRpbmcpXHJcblx0Y29uc3QgcG9zdCA9IHVzZVNlbGVjdG9yKFBvc3RzU2VsZWN0b3JzLnBvc3QpXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblx0Y29uc3Qge1xyXG5cdFx0cXVlcnk6IHsgaWQgfSxcclxuXHR9ID0gdXNlUm91dGVyKClcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goeyB0eXBlOiAnVklFV19QT1NUJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcblx0fSwgW2Rpc3BhdGNoLCBpZF0pXHJcblx0cmV0dXJuICFpc0xvYWRpbmcgJiYgcG9zdCA/IDxQb3N0IHBvc3Q9e3Bvc3R9IC8+IDogPFByZWxvYWRlciAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZVxyXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUgfSBmcm9tICcuLidcclxuXHJcbmludGVyZmFjZSBQYXlsb2FkVHlwZSB7XHJcblx0cG9zdElkOiBudW1iZXJcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudHMgPSAoXHJcblx0cGF5bG9hZDogUGF5bG9hZFR5cGVcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RJbmZvcm1hdGlvblR5cGU+PiA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkucG9zdDxQb3N0SW5mb3JtYXRpb25UeXBlPignL2NvbW1lbnRzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiZXhwb3J0IHsgY3JlYXRlQ29tbWVudHMgfSBmcm9tICcuL2NyZWF0ZUNvbW1lbnRzJ1xuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJ0BBUEkvYXBpJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IChwYXlsb2FkOiBQb3N0VHlwZSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxQb3N0VHlwZT4+ID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlSW5zdGFuY2UoKS5wb3N0PFBvc3RUeXBlPignL3Bvc3RzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJ0BBUEkvYXBpJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RUeXBlW10+PiA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkuZGVsZXRlPFBvc3RUeXBlW10+KGAvcG9zdHMvJHtpZH1gKVxyXG59XHJcbiIsImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UG9zdFR5cGVbXT4+ID0+IHtcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkuZ2V0PFBvc3RUeXBlW10+KCcvcG9zdHMnKVxufVxuIiwiZXhwb3J0IHsgdXBkYXRlUG9zdCB9IGZyb20gJy4vdXBkYXRlUG9zdCdcbmV4cG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi9nZXRQb3N0cydcbmV4cG9ydCB7IGRlbGV0ZVBvc3QgfSBmcm9tICcuL2RlbGV0ZVBvc3QnXG5leHBvcnQgeyBjcmVhdGVQb3N0IH0gZnJvbSAnLi9jcmVhdGVQb3N0J1xuZXhwb3J0IHsgdmlld1Bvc3QgfSBmcm9tICcuL3ZpZXdQb3N0J1xuXG5leHBvcnQgdHlwZSB7IFBvc3RUeXBlLCBQb3N0SW5mb3JtYXRpb25UeXBlLCBDb21tZW50VHlwZSB9IGZyb20gJy4vdHlwZXMnXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBQYXlsb2FkVHlwZSB7XHJcblx0dGl0bGU6IHN0cmluZ1xyXG5cdGJvZHk6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQb3N0ID0gKFxyXG5cdGlkOiBudW1iZXIsXHJcblx0cGF5bG9hZDogUGF5bG9hZFR5cGVcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RUeXBlPj4gPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLnB1dDxQb3N0VHlwZT4oYC9wb3N0cy8ke2lkfWAsIHsgLi4ucGF5bG9hZCB9KVxyXG59XHJcbiIsImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICdAQVBJL2FwaSdcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3Qgdmlld1Bvc3QgPSAoaWQ6IG51bWJlcik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxQb3N0SW5mb3JtYXRpb25UeXBlPj4gPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLmdldDxQb3N0SW5mb3JtYXRpb25UeXBlPihgL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29tbWVudHNBUEkgZnJvbSAnLi9Db21tZW50cydcbmltcG9ydCAqIGFzIFBvc3RzQVBJIGZyb20gJy4vUG9zdHMnXG5cbmV4cG9ydCB0eXBlIHsgUG9zdFR5cGUsIENvbW1lbnRUeXBlLCBQb3N0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9Qb3N0cydcblxuZXhwb3J0IHsgQ29tbWVudHNBUEkgfVxuZXhwb3J0IHsgUG9zdHNBUEkgfVxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJbnN0YW5jZSA9ICgpOiBBeGlvc0luc3RhbmNlID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuY3JlYXRlKHsgYmFzZVVSTDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkLycgfSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9SRVNUJ1xuXG5leHBvcnQgdHlwZSB7IFBvc3RUeXBlIH0gZnJvbSAnLi9SRVNUJ1xuZXhwb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICcuL2FwaSdcbmV4cG9ydCB7IEFQSSB9XG4iLCJpbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgSW5mZXJBY3Rpb25zVHlwZSB9IGZyb20gJ0BMaWIvU3RvcmUnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuXHRzZXRMb2FkaW5nOiAocGF5bG9hZDogYm9vbGVhbikgPT5cclxuXHRcdCh7XHJcblx0XHRcdHR5cGU6IHR5cGVzLlNFVF9MT0FESU5HLFxyXG5cdFx0XHRwYXlsb2FkLFxyXG5cdFx0fSBhcyBjb25zdCksXHJcblx0c2V0UG9zdHM6IChwYXlsb2FkOiBQb3N0VHlwZVtdKSA9PlxyXG5cdFx0KHtcclxuXHRcdFx0dHlwZTogdHlwZXMuU0VUX1BPU1RTLFxyXG5cdFx0XHRwYXlsb2FkLFxyXG5cdFx0fSBhcyBjb25zdCksXHJcblx0c2V0UG9zdDogKHBheWxvYWQ6IFBvc3RJbmZvcm1hdGlvblR5cGUpID0+XHJcblx0XHQoe1xyXG5cdFx0XHR0eXBlOiB0eXBlcy5TRVRfUE9TVCxcclxuXHRcdFx0cGF5bG9hZCxcclxuXHRcdH0gYXMgY29uc3QpLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb25zVHlwZSA9IEluZmVyQWN0aW9uc1R5cGU8dHlwZW9mIGFjdGlvbnM+XHJcbiIsImltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcblxuZXhwb3J0IHsgc2VsZWN0b3JzIGFzIFBvc3RzU2VsZWN0b3JzIH1cbmV4cG9ydCB7IHJlZHVjZXIgYXMgUG9zdHNSb290UmVkdWNlciwgaW5pdGlhbFZhbHVlIGFzIFBvc3RzSW5pdGlhbFZhbHVlIH0gZnJvbSAnLi9yZWR1Y2VyJ1xuZXhwb3J0IHsgYWN0aW9ucyBhcyBQb3N0c0FjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnXG5leHBvcnQgeyByb290U2FnYSBhcyBQb3N0c1Jvb3RTYWdhIH0gZnJvbSAnLi9zYWdhJ1xuZXhwb3J0IHR5cGUgeyBBY3Rpb25zVHlwZSB9IGZyb20gJy4vYWN0aW9ucydcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5pbXBvcnQgeyBBY3Rpb25zVHlwZSB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsVmFsdWUgPSB7XHJcblx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRwb3N0czogbnVsbCBhcyBQb3N0VHlwZVtdIHwgbnVsbCxcclxuXHRwb3N0OiBudWxsIGFzIFBvc3RJbmZvcm1hdGlvblR5cGUgfCBudWxsLFxyXG59XHJcblxyXG50eXBlIEluaXRpYWxWYWx1ZVR5cGUgPSB0eXBlb2YgaW5pdGlhbFZhbHVlXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFZhbHVlLCBhY3Rpb246IEFjdGlvbnNUeXBlKTogSW5pdGlhbFZhbHVlVHlwZSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG5cdFx0Y2FzZSB0eXBlcy5TRVRfTE9BRElORzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNhc2UgdHlwZXMuU0VUX1BPU1RTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cG9zdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjYXNlIHR5cGVzLlNFVF9QT1NUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cG9zdDogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIGFsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgeyBBUEksIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9pbmRleCdcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3N0c1NhZ2EoKSB7XHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5nZXRQb3N0cylcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3RzKHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgZGF0YTogUG9zdFR5cGU7IHB1c2g6IGFueSB9XHJcbn1cclxuZnVuY3Rpb24qIGNyZWF0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBDcmVhdGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgZGF0YSwgcHVzaCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmNyZWF0ZVBvc3QsIGRhdGEpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmdldFBvc3RzKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdHMocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdHlpZWxkIHB1dChwdXNoKCcvJykpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgaWQ6IG51bWJlciB9XHJcbn1cclxuZnVuY3Rpb24qIGRlbGV0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBEZWxldGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5kZWxldGVQb3N0LCBpZClcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkuZ2V0UG9zdHMpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0cyhyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFZpZXdQb3N0VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyBpZDogbnVtYmVyIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHZpZXdQb3N0U2FnYSh7IHBheWxvYWQgfTogVmlld1Bvc3RUeXBlKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIGlkKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdChyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVkaXRQb3N0VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyBpZDogbnVtYmVyOyBkYXRhOiBQb3N0VHlwZSB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0UG9zdFNhZ2EoeyBwYXlsb2FkIH06IEVkaXRQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQsIGRhdGEgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS51cGRhdGVQb3N0LCBpZCwgZGF0YSlcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIGlkKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdChyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5pbnRlcmZhY2UgU2VuZENvbW1lbnRUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGJvZHk6IHN0cmluZzsgcG9zdElkOiBudW1iZXIgfVxyXG59XHJcbmZ1bmN0aW9uKiBzZW5kQ29tbWVudFBvc3RTYWdhKHsgcGF5bG9hZCB9OiBTZW5kQ29tbWVudFR5cGUpIHtcclxuXHRjb25zb2xlLmxvZygnc2UnKVxyXG5cdGNvbnN0IHsgcG9zdElkLCBib2R5IH0gPSBwYXlsb2FkXHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgY2FsbChBUEkuQ29tbWVudHNBUEkuY3JlYXRlQ29tbWVudHMsIHsgcG9zdElkLCBib2R5IH0pXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLnZpZXdQb3N0LCBwb3N0SWQpXHJcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3QocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5HRVRfUE9TVFMsIGdldFBvc3RzU2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuQ1JFQVRFX1BPU1QsIGNyZWF0ZVBvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5ERUxFVEVfUE9TVCwgZGVsZXRlUG9zdFNhZ2EpLFxyXG5cdFx0dGFrZUV2ZXJ5KHR5cGVzLlZJRVdfUE9TVCwgdmlld1Bvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5FRElUX1BPU1QsIGVkaXRQb3N0U2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuU0VORF9NRVNTQUdFLCBzZW5kQ29tbWVudFBvc3RTYWdhKSxcclxuXHRdKVxyXG59XHJcbiIsImltcG9ydCB7IEFwcFN0YXRlVHlwZSB9IGZyb20gJ0BMaWIvU3RvcmUnXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gKHN0YXRlOiBBcHBTdGF0ZVR5cGUpOiBQb3N0VHlwZVtdIHwgbnVsbCA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIucG9zdHNcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHN0YXRlOiBBcHBTdGF0ZVR5cGUpOiBQb3N0SW5mb3JtYXRpb25UeXBlIHwgbnVsbCA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIucG9zdFxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IChzdGF0ZTogQXBwU3RhdGVUeXBlKTogYm9vbGVhbiA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIuaXNMb2FkaW5nXHJcbiIsImV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdTRVRfTE9BRElORydcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUUyA9ICdHRVRfUE9TVFMnXHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVFMgPSAnU0VUX1BPU1RTJ1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUID0gJ0VESVRfUE9TVCdcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gJ0RFTEVURV9QT1NUJ1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSAnQ1JFQVRFX1BPU1QnXHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVCA9ICdTRVRfUE9TVCdcclxuZXhwb3J0IGNvbnN0IFZJRVdfUE9TVCA9ICdWSUVXX1BPU1QnXHJcbmV4cG9ydCBjb25zdCBTRU5EX01FU1NBR0UgPSAnU0VORF9NRVNTQUdFJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUG9zdEFjdGlvbnMgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1Bvc3RBY3Rpb25zJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG5cdGlkOiBudW1iZXIgfCB1bmRlZmluZWRcclxufVxyXG5leHBvcnQgY29uc3QgQWN0aW9uczogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGNoaWxkcmVuLCBpZCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1BPU1QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2hdXHJcblx0KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc3RBY3Rpb25zIG9uRGVsZXRlPXtvbkRlbGV0ZX0gaWQ9e2lkfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9Qb3N0QWN0aW9ucz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5cclxuY29uc3QgUG9zdHMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuXHRncmlkLWdhcDogMjBweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0czogUG9zdFR5cGVbXVxyXG59XHJcbmV4cG9ydCBjb25zdCBMaXN0UG9zdHM6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0cyB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IG9uVmlldyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcclxuXHRcdFx0cm91dGVyLnB1c2goYC9wb3N0cy8ke2lkfWApXHJcblx0XHR9LFxyXG5cdFx0W3JvdXRlcl1cclxuXHQpXHJcblx0Y29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhcclxuXHRcdChpZDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9QT1NUJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoXVxyXG5cdClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQb3N0cz5cclxuXHRcdFx0e3Bvc3RzLm1hcCgoeyB0aXRsZSwgYm9keSwgaWQgfTogUG9zdFR5cGUpID0+IChcclxuXHRcdFx0XHQ8UG9zdEl0ZW1cclxuXHRcdFx0XHRcdGtleT17aWR9XHJcblx0XHRcdFx0XHRpZD17aWR9XHJcblx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XHJcblx0XHRcdFx0XHRib2R5PXtib2R5fVxyXG5cdFx0XHRcdFx0b25WaWV3PXtvblZpZXd9XHJcblx0XHRcdFx0XHRvbkRlbGV0ZT17b25EZWxldGV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L1Bvc3RzPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBMaXN0UG9zdHMgfSBmcm9tICcuL0xpc3RQb3N0cydcbmV4cG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuL0FjdGlvbnMnXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuaW1wb3J0IHsgU2VuZE1lc3NhZ2UgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1NlbmRNZXNzYWdlJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA1NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRncmlkLXJvdy1nYXA6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMzBweCAwO1xyXG5gXHJcbmNvbnN0IFBvc2l0aW9uV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuY29uc3QgQ29tbWVudHMgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3Q6IFBvc3RJbmZvcm1hdGlvblR5cGVcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3QgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGJvZHksIGNvbW1lbnRzIH0gPSBwb3N0XHJcblx0Y29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnRURJVF9QT1NUJywgcGF5bG9hZDogeyBpZCwgZGF0YSB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0Y29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldElzRWRpdCghaXNFZGl0KVxyXG5cdH0sIFtpc0VkaXRdKVxyXG5cdGNvbnN0IG9uR29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0cm91dGVyLmJhY2soKVxyXG5cdH0sIFtyb3V0ZXJdKVxyXG5cdGNvbnN0IG9uU2VuZE1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcclxuXHRcdCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1NFTkRfTUVTU0FHRScsIHBheWxvYWQ6IHsgYm9keTogdmFsdWUsIHBvc3RJZDogaWQgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHRcdDxXcmFwcGVkPlxyXG5cdFx0XHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXQoIWlzRWRpdCl9PlxyXG5cdFx0XHRcdFx0XHRcdEVkaXRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXtvbkdvQmFja30+XHJcblx0XHRcdFx0XHRcdFx0R28gYmFja1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdFx0XHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdFx0PFBvc3RJbmZvcm1hdGlvbiB0aXRsZT17dGl0bGV9IGJvZHk9e2JvZHl9PlxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZW5kTWVzc2FnZSBvblNlbmRNZXNzYWdlPXtvblNlbmRNZXNzYWdlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29tbWVudHMubWFwKCh7IGJvZHksIGlkIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnRJdGVtIGtleT17aWR9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50cz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0PC9Qb3N0SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHRcdDwvV3JhcHBlZD5cclxuXHRcdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdHtpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxNb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PENyZWF0ZVBvc3RGb3JtXHJcblx0XHRcdFx0XHRcdGlzRWRpdFxyXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25FZGl0fVxyXG5cdFx0XHRcdFx0XHRpbml0aWFsVmFsdWU9e3sgdGl0bGUsIGJvZHkgfX1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17b25DbG9zZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Nb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTGlzdFBvc3RzIH0gZnJvbSAnLi4vTW9sZWN1bGVzJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBQb3N0c1dyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbjogMzBweCAwO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3RzOiBQb3N0VHlwZVtdXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RzQWN0aW9uczogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3RzIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVkPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xyXG5cdFx0XHRcdFx0cm91dGVyLnB1c2goJy9wb3N0cy9uZXcnKVxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDxQb3N0c1dyYXBwZWQ+XHJcblx0XHRcdFx0PExpc3RQb3N0cyBwb3N0cz17cG9zdHN9IC8+XHJcblx0XHRcdDwvUG9zdHNXcmFwcGVkPlxyXG5cdFx0PC9XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgfSBmcm9tICcuL1Bvc3RzQWN0aW9ucydcbmV4cG9ydCB7IFBvc3QgfSBmcm9tICcuL1Bvc3QnXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgYXMgUG9zdHNBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0c1Jvb3RSZWR1Y2VyLCBQb3N0c1Jvb3RTYWdhLCBQb3N0c1NlbGVjdG9ycywgUG9zdHNBY3Rpb25zLCBQb3N0c0luaXRpYWxWYWx1ZSB9IGZyb20gJy4vTW9kZWwnXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ0BTdHlsZWQvdGhlbWUnXHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uVHlwZSB7XHJcblx0ZGFuZ2VyOiBib29sZWFuIHwgdW5kZWZpbmVkXHJcblx0dGhlbWU6IFRoZW1lVHlwZVxyXG59XHJcbmNvbnN0IEJ1dHRvbkNvbXBvbmVudCA9IHN0eWxlZC5idXR0b248QnV0dG9uVHlwZT5gXHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0cGFkZGluZzogN3B4IDEwcHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xyXG5cdCR7KHsgdGhlbWU6IHsgY29sb3JzIH0sIGRhbmdlciB9KSA9PlxyXG5cdFx0ZGFuZ2VyXHJcblx0XHRcdD8gYGNvbG9yOiAke2NvbG9ycy5yZWR9OyBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5yZWR9O2BcclxuXHRcdFx0OiBgY29sb3I6ICR7Y29sb3JzLmJsYWNrfTsgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuYmxhY2t9O2B9O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuXHRvbkNsaWNrOiAoKSA9PiB2b2lkXHJcblx0ZGFuZ2VyPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdG9uQ2xpY2ssXHJcblx0ZGFuZ2VyLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJ1dHRvbkNvbXBvbmVudCBvbkNsaWNrPXtvbkNsaWNrfSBkYW5nZXI9e2Rhbmdlcn0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvQnV0dG9uQ29tcG9uZW50PlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmgyYFxyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRCb2R5OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxCb2R5PntjaGlsZHJlbn08L0JvZHk+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5zcGFuYFxyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgQ29tbWVudEl0ZW06IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBib2R5IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8Q29udGVudD57Ym9keX08L0NvbnRlbnQ+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdAU3R5bGVkL3RoZW1lJ1xyXG5cclxuY29uc3QgSW5wdXRDb21wb25lbnQgPSBzdHlsZWQuaW5wdXRgXHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRib3JkZXItcmFkaXVzOiA3cHg7XHJcblx0Jjo6cGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICR7KHsgdGhlbWU6IHsgY29sb3JzIH0gfTogVGhlbWVUeXBlKSA9PiBjb2xvcnMuZ3JleX07XHJcblx0fVxyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHZhbHVlOiBzdHJpbmdcclxuXHRvbkNoYW5nZTogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXHJcbn1cclxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8SW5wdXRDb21wb25lbnQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5leHBvcnQgY29uc3QgUGFnZVRpdGxlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxUaXRsZT57Y2hpbGRyZW59PC9UaXRsZT5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNwYW5gYFxyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0Qm9keTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGNoaWxkcmVuIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8Qm9keT57Y2hpbGRyZW59PC9Cb2R5PlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQFN0eWxlZC90aGVtZSdcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6ICR7KHsgdGhlbWU6IHsgd2VpZ2h0cyB9IH06IFRoZW1lVHlwZSkgPT4gd2VpZ2h0cy5ib2xkfTtcclxuYFxyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0VGl0bGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gPFRpdGxlPntjaGlsZHJlbn08L1RpdGxlPlxyXG59XHJcbiIsImV4cG9ydCB7IFBvc3RUaXRsZSB9IGZyb20gJy4vUG9zdFRpdGxlJ1xuZXhwb3J0IHsgUG9zdEJvZHkgfSBmcm9tICcuL1Bvc3RCb2R5J1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUmluZyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGhlaWdodDogODBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdCY6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcgJztcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDY0cHg7XHJcblx0XHRoZWlnaHQ6IDY0cHg7XHJcblx0XHRtYXJnaW46IDhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XHJcblx0XHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcclxuXHRcdGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcblx0QGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR9XHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcbmBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxQb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdDxSaW5nIC8+XHJcblx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHQpXHJcbn1cclxuIiwiZXhwb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSAnLi9QYWdlVGl0bGUnXG5leHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbidcbmV4cG9ydCB7IElucHV0IH0gZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCB7IFByZWxvYWRlciB9IGZyb20gJy4vUHJlbG9hZGVyJ1xuZXhwb3J0IHsgQ29tbWVudEJvZHkgfSBmcm9tICcuL0NvbW1lbnRCb2R5J1xuZXhwb3J0IHsgQ29tbWVudEl0ZW0gfSBmcm9tICcuL0NvbW1lbnRJdGVtJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBQb3Bjb25maXJtLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuXHRvbkRlbGV0ZTogKGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWRcclxuXHRpZDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RBY3Rpb25zOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRjaGlsZHJlbixcclxuXHRvbkRlbGV0ZSxcclxuXHRpZCxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBY3Rpb25zPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDxQb3Bjb25maXJtXHJcblx0XHRcdFx0dGl0bGU9J0FyZSB5b3Ugc3VyZe+8nydcclxuXHRcdFx0XHRva1RleHQ9J1llcydcclxuXHRcdFx0XHRjYW5jZWxUZXh0PSdObydcclxuXHRcdFx0XHRvbkNvbmZpcm09eygpID0+IG9uRGVsZXRlKGlkKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCdXR0b24gZGFuZ2VyPkRlbGV0ZTwvQnV0dG9uPlxyXG5cdFx0XHQ8L1BvcGNvbmZpcm0+XHJcblx0XHRcdCxcclxuXHRcdDwvQWN0aW9ucz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBQb3N0Qm9keSwgUG9zdFRpdGxlIH0gZnJvbSAnQFVJL0F0b21zL1Bvc3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtcm93LWdhcDogMTVweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHR0aXRsZTogc3RyaW5nXHJcblx0Ym9keTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RDb250ZW50OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgdGl0bGUsIGJvZHkgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250ZW50PlxyXG5cdFx0XHQ8UG9zdFRpdGxlPnt0aXRsZX08L1Bvc3RUaXRsZT5cclxuXHRcdFx0PFBvc3RCb2R5Pntib2R5fTwvUG9zdEJvZHk+XHJcblx0XHQ8L0NvbnRlbnQ+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XHJcbmBcclxuXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdG9uU2VuZE1lc3NhZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRvblNlbmRNZXNzYWdlLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcblx0XHRzZXRWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0PElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBjb21tZW50JyAvPlxyXG5cdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VuZE1lc3NhZ2UodmFsdWUpfT5TZW5kPC9CdXR0b24+XHJcblx0XHQ8L1dyYXBwZWQ+XHJcblx0KVxyXG59XHJcbiIsImV4cG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSAnLi9Qb3N0Q29udGVudCdcbmV4cG9ydCB7IFNlbmRNZXNzYWdlIH0gZnJvbSAnLi9TZW5kTWVzc2FnZSdcbmV4cG9ydCB7IFBvc3RBY3Rpb25zIGFzIFBvc3RBY3Rpb25zQ29tcG9uZW50cyB9IGZyb20gJy4vUG9zdEFjdGlvbnMnXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRvblN1Ym1pdDogKGRhdGE6IFBvc3RUeXBlKSA9PiB2b2lkXHJcblx0b25DbG9zZT86ICgpID0+IHZvaWRcclxuXHRpbml0aWFsVmFsdWU6IFBvc3RUeXBlXHJcblx0aXNFZGl0PzogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG59XHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQb3N0Rm9ybTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0b25TdWJtaXQsXHJcblx0aW5pdGlhbFZhbHVlLFxyXG5cdGlzRWRpdCxcclxuXHRvbkNsb3NlLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnNvbGUubG9nKCdyb3V0ZXInLCByb3V0ZXIpXHJcblx0Y29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoaXNFZGl0ICYmIG9uQ2xvc2UpIHtcclxuXHRcdFx0b25DbG9zZSgpXHJcblx0XHR9IGVsc2Ugcm91dGVyLmJhY2soKVxyXG5cdH0sIFtyb3V0ZXIsIGlzRWRpdCwgb25DbG9zZV0pXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG5hbWU9J3Bvc3QnIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZX0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuXHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdGxhYmVsPSdUaXRsZSdcclxuXHRcdFx0XHRuYW1lPSd0aXRsZSdcclxuXHRcdFx0XHRydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdGl0bGUgb2YgcG9zdCEnIH1dfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0IHBsYWNlaG9sZGVyPSdFbnRlciB0aXRsZSBvZiBwb3N0JyAvPlxyXG5cdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdGxhYmVsPSdCb2R5J1xyXG5cdFx0XHRcdG5hbWU9J2JvZHknXHJcblx0XHRcdFx0cnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGJvZHkgb2YgcG9zdCEnIH1dfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0IHBsYWNlaG9sZGVyPSdFbnRlciBib2R5IG9mIHBvc3QnIC8+XHJcblx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgaHRtbFR5cGU9J3N1Ym1pdCc+XHJcblx0XHRcdFx0XHR7aXNFZGl0ID8gJ1NhdmUnIDogJ0NyZWF0ZSd9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIGRhbmdlciBvbkNsaWNrPXtvbkNhbmNlbH0+XHJcblx0XHRcdFx0XHRDYW5jZWxcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0PC9Gb3JtPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBDcmVhdGVQb3N0Rm9ybSB9IGZyb20gJy4vQ3JlYXRlUG9zdCdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgUG9zdENvbnRlbnQgfSBmcm9tICdAVUkvTW9sZWN1bGVzJ1xyXG5cclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxNXB4O1xyXG5gXHJcbmNvbnN0IENvbW1lbnRzID0gc3R5bGVkLmRpdmBgXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnRcclxuXHR0aXRsZTogc3RyaW5nXHJcblx0Ym9keTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RJbmZvcm1hdGlvbjogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcblx0dGl0bGUsXHJcblx0Ym9keSxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0PFBvc3RDb250ZW50IHRpdGxlPXt0aXRsZX0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0PENvbW1lbnRzPntjaGlsZHJlbn08L0NvbW1lbnRzPlxyXG5cdFx0PC9JbmZvcm1hdGlvbj5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0Q29udGVudCB9IGZyb20gJ0BVSS9Nb2xlY3VsZXMnXHJcbmltcG9ydCB7IFBvc3RBY3Rpb25zIH0gZnJvbSAnQFVJL01vbGVjdWxlcy9Qb3N0QWN0aW9ucydcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BGZWF0dXJlcy9Qb3N0cy9Nb2xlY3VsZXMnXHJcblxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtcm93LWdhcDogMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0Ym94LXNoYWRvdzogMXB4IDJweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0b25WaWV3OiAoaWQ6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxyXG5cdG9uRGVsZXRlOiAoaWQ6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxyXG5cdHRpdGxlOiBzdHJpbmdcclxuXHRib2R5OiBzdHJpbmdcclxuXHRpZDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RJdGVtOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHR0aXRsZSxcclxuXHRib2R5LFxyXG5cdGlkLFxyXG5cdG9uVmlldyxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxJdGVtPlxyXG5cdFx0XHQ8UG9zdENvbnRlbnQgdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fSAvPlxyXG5cdFx0XHQ8QWN0aW9ucyBpZD17aWR9PlxyXG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gb25WaWV3KGlkKX0+VmlldzwvQnV0dG9uPlxyXG5cdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHQ8L0l0ZW0+XHJcblx0KVxyXG59XHJcbiIsImV4cG9ydCB7IFBvc3RJdGVtIH0gZnJvbSAnLi9Qb3N0SXRlbSdcbmV4cG9ydCB7IENyZWF0ZVBvc3RGb3JtIH0gZnJvbSAnLi9Gb3JtcydcbmV4cG9ydCB7IFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJy4vUG9zdEluZm9ybWF0aW9uJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgVGVtcGxhdGUgPSBzdHlsZWQubWFpbmBcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5gXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1heC13aWR0aDogMTIwMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5leHBvcnQgY29uc3QgTWFpblRlbXBsYXRlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxUZW1wbGF0ZT5cclxuXHRcdFx0PENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcblx0XHQ8L1RlbXBsYXRlPlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBQb3NpdGlvbldyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5gXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUpO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjRweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IE1vZGFsV2luZG93VGVtcGxhdGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0PFdyYXBwZWQ+e2NoaWxkcmVufTwvV3JhcHBlZD5cclxuXHRcdDwvUG9zaXRpb25XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBNYWluVGVtcGxhdGUgfSBmcm9tICcuL01haW5UZW1wbGF0ZSdcbmV4cG9ydCB7IE1vZGFsV2luZG93VGVtcGxhdGUgfSBmcm9tICcuL01vZGFsV2luZG93VGVtcGxhdGUnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==