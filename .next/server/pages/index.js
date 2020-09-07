module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _API_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @API/index */ "./src/Components/API/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Features_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Features/Posts */ "./src/Components/Features/Posts/index.ts");
/* harmony import */ var _UI_Atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @UI/Atoms */ "./src/Components/UI/Atoms/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\Create-Project\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ContentWrapped = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__ContentWrapped",
  componentId: "sc-5izoex-0"
})([""]);

const HomePage = ({
  posts
}) => {
  const isLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_Features_Posts__WEBPACK_IMPORTED_MODULE_3__["PostsSelectors"].isLoading);
  return !isLoading ? __jsx(ContentWrapped, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 3
    }
  }, __jsx(_Features_Posts__WEBPACK_IMPORTED_MODULE_3__["PostsActionsComponent"], {
    posts: posts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  })) : __jsx(_UI_Atoms__WEBPACK_IMPORTED_MODULE_4__["Preloader"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  });
};

const getStaticProps = async () => {
  const response = await _API_index__WEBPACK_IMPORTED_MODULE_1__["API"].PostsAPI.getPosts();
  const posts = response.data;
  return {
    props: {
      posts
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL0NvbW1lbnRzL2NyZWF0ZUNvbW1lbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL0NvbW1lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL1Bvc3RzL2NyZWF0ZVBvc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL1JFU1QvUG9zdHMvZGVsZXRlUG9zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy9nZXRQb3N0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9BUEkvUkVTVC9Qb3N0cy91cGRhdGVQb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL1Bvc3RzL3ZpZXdQb3N0LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9SRVNUL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0FQSS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQVBJL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL2FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9kZWwvcmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2RlbC9zYWdhLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL01vZGVsL3NlbGVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2RlbC90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9Nb2xlY3VsZXMvQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9sZWN1bGVzL0xpc3RQb3N0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvTW9sZWN1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVzL1Bvc3RzL09yZ2FuaXNtcy9Qb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9PcmdhbmlzbXMvUG9zdHNBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlcy9Qb3N0cy9PcmdhbmlzbXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZXMvUG9zdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Db21tZW50Qm9keS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvQ29tbWVudEl0ZW0udHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL0lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9QYWdlVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL1Bvc3QvUG9zdEJvZHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL1Bvc3QvUG9zdFRpdGxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9BdG9tcy9Qb3N0L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL0F0b21zL1ByZWxvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvQXRvbXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvTW9sZWN1bGVzL1Bvc3RBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9Nb2xlY3VsZXMvUG9zdENvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL01vbGVjdWxlcy9TZW5kTWVzc2FnZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvTW9sZWN1bGVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL09yZ2FuaXNtcy9Gb3Jtcy9DcmVhdGVQb3N0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9PcmdhbmlzbXMvRm9ybXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL1Bvc3RJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvT3JnYW5pc21zL1Bvc3RJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9VSS9PcmdhbmlzbXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvVGVtcGxhdGVzL01haW5UZW1wbGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVUkvVGVtcGxhdGVzL01vZGFsV2luZG93VGVtcGxhdGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VJL1RlbXBsYXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNvbnRlbnRXcmFwcGVkIiwic3R5bGVkIiwiZGl2IiwiSG9tZVBhZ2UiLCJwb3N0cyIsImlzTG9hZGluZyIsInVzZVNlbGVjdG9yIiwiUG9zdHNTZWxlY3RvcnMiLCJnZXRTdGF0aWNQcm9wcyIsInJlc3BvbnNlIiwiQVBJIiwiUG9zdHNBUEkiLCJnZXRQb3N0cyIsImRhdGEiLCJwcm9wcyIsImNyZWF0ZUNvbW1lbnRzIiwicGF5bG9hZCIsImNyZWF0ZUluc3RhbmNlIiwicG9zdCIsImNyZWF0ZVBvc3QiLCJkZWxldGVQb3N0IiwiaWQiLCJkZWxldGUiLCJnZXQiLCJ1cGRhdGVQb3N0IiwicHV0Iiwidmlld1Bvc3QiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJhY3Rpb25zIiwic2V0TG9hZGluZyIsInR5cGUiLCJ0eXBlcyIsInNldFBvc3RzIiwic2V0UG9zdCIsImluaXRpYWxWYWx1ZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJnZXRQb3N0c1NhZ2EiLCJjYWxsIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlUG9zdFNhZ2EiLCJwdXNoIiwiZGVsZXRlUG9zdFNhZ2EiLCJ2aWV3UG9zdFNhZ2EiLCJlZGl0UG9zdFNhZ2EiLCJzZW5kQ29tbWVudFBvc3RTYWdhIiwicG9zdElkIiwiYm9keSIsIkNvbW1lbnRzQVBJIiwicm9vdFNhZ2EiLCJhbGwiLCJ0YWtlRXZlcnkiLCJQb3N0c1Jvb3RSZWR1Y2VyIiwiU0VUX0xPQURJTkciLCJHRVRfUE9TVFMiLCJTRVRfUE9TVFMiLCJFRElUX1BPU1QiLCJERUxFVEVfUE9TVCIsIkNSRUFURV9QT1NUIiwiU0VUX1BPU1QiLCJWSUVXX1BPU1QiLCJTRU5EX01FU1NBR0UiLCJBY3Rpb25zIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25EZWxldGUiLCJ1c2VDYWxsYmFjayIsIlBvc3RzIiwiTGlzdFBvc3RzIiwicm91dGVyIiwidXNlUm91dGVyIiwib25WaWV3IiwibWFwIiwidGl0bGUiLCJXcmFwcGVkIiwiSW5mb3JtYXRpb24iLCJQb3NpdGlvbldyYXBwZWQiLCJUaXRsZSIsIkNvbW1lbnRzIiwiUG9zdCIsImlzRWRpdCIsInNldElzRWRpdCIsInVzZVN0YXRlIiwiY29tbWVudHMiLCJvbkVkaXQiLCJvbkNsb3NlIiwib25Hb0JhY2siLCJiYWNrIiwib25TZW5kTWVzc2FnZSIsInZhbHVlIiwiUG9zdHNXcmFwcGVkIiwiUG9zdHNBY3Rpb25zIiwiQnV0dG9uQ29tcG9uZW50IiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJkYW5nZXIiLCJyZWQiLCJibGFjayIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJCb2R5IiwiaDIiLCJDb21tZW50Qm9keSIsIkNvbnRlbnQiLCJzcGFuIiwiQ29tbWVudEl0ZW0iLCJJbnB1dENvbXBvbmVudCIsImlucHV0IiwiZ3JleSIsIklucHV0Iiwib25DaGFuZ2UiLCJQYWdlVGl0bGUiLCJQb3N0Qm9keSIsIndlaWdodHMiLCJib2xkIiwiUG9zdFRpdGxlIiwiUmluZyIsIlByZWxvYWRlciIsIlBvc3RBY3Rpb25zIiwiUG9zdENvbnRlbnQiLCJTZW5kTWVzc2FnZSIsInNldFZhbHVlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJDcmVhdGVQb3N0Rm9ybSIsIm9uU3VibWl0Iiwib25DYW5jZWwiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJQb3N0SW5mb3JtYXRpb24iLCJJdGVtIiwiUG9zdEl0ZW0iLCJUZW1wbGF0ZSIsIm1haW4iLCJDb250YWluZXIiLCJNYWluVGVtcGxhdGUiLCJNb2RhbFdpbmRvd1RlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsUUFBcEI7O0FBSUEsTUFBTUMsUUFBNkIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQztBQUN4RSxRQUFNQyxTQUFTLEdBQUdDLCtEQUFXLENBQUNDLDhEQUFjLENBQUNGLFNBQWhC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QUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVVBLFFBQVYsQ0FERCxDQUREO0FBS0EsQ0FSTSxDOzs7Ozs7Ozs7Ozs7QUN4QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQVBJLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvaW5kZXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFBvc3RzQWN0aW9uc0NvbXBvbmVudCwgUG9zdHNTZWxlY3RvcnMgfSBmcm9tICdARmVhdHVyZXMvUG9zdHMnXHJcbmltcG9ydCB7IFByZWxvYWRlciB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmNvbnN0IENvbnRlbnRXcmFwcGVkID0gc3R5bGVkLmRpdmBgXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3RzOiBQb3N0VHlwZVtdXHJcbn1cclxuY29uc3QgSG9tZVBhZ2U6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0cyB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBpc0xvYWRpbmcgPSB1c2VTZWxlY3RvcihQb3N0c1NlbGVjdG9ycy5pc0xvYWRpbmcpXHJcblx0cmV0dXJuICFpc0xvYWRpbmcgPyAoXHJcblx0XHQ8Q29udGVudFdyYXBwZWQ+XHJcblx0XHRcdDxQb3N0c0FjdGlvbnNDb21wb25lbnQgcG9zdHM9e3Bvc3RzfSAvPlxyXG5cdFx0PC9Db250ZW50V3JhcHBlZD5cclxuXHQpIDogKFxyXG5cdFx0PFByZWxvYWRlciAvPlxyXG5cdClcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKTogUHJvbWlzZTx7IHByb3BzOiB7IHBvc3RzOiBQb3N0VHlwZVtdIH0gfT4gPT4ge1xyXG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVBJLlBvc3RzQVBJLmdldFBvc3RzKClcclxuXHRjb25zdCBwb3N0cyA9IHJlc3BvbnNlLmRhdGFcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0cG9zdHMsXHJcblx0XHR9LFxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUgfSBmcm9tICcuLidcclxuXHJcbmludGVyZmFjZSBQYXlsb2FkVHlwZSB7XHJcblx0cG9zdElkOiBudW1iZXJcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudHMgPSAoXHJcblx0cGF5bG9hZDogUGF5bG9hZFR5cGVcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RJbmZvcm1hdGlvblR5cGU+PiA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkucG9zdDxQb3N0SW5mb3JtYXRpb25UeXBlPignL2NvbW1lbnRzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiZXhwb3J0IHsgY3JlYXRlQ29tbWVudHMgfSBmcm9tICcuL2NyZWF0ZUNvbW1lbnRzJ1xuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJ0BBUEkvYXBpJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUG9zdCA9IChwYXlsb2FkOiBQb3N0VHlwZSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxQb3N0VHlwZT4+ID0+IHtcclxuXHRyZXR1cm4gY3JlYXRlSW5zdGFuY2UoKS5wb3N0PFBvc3RUeXBlPignL3Bvc3RzJywgeyAuLi5wYXlsb2FkIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSB9IGZyb20gJ0BBUEkvYXBpJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUG9zdCA9IChpZDogbnVtYmVyKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RUeXBlW10+PiA9PiB7XHJcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkuZGVsZXRlPFBvc3RUeXBlW10+KGAvcG9zdHMvJHtpZH1gKVxyXG59XHJcbiIsImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJy4vdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICgpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UG9zdFR5cGVbXT4+ID0+IHtcblx0cmV0dXJuIGNyZWF0ZUluc3RhbmNlKCkuZ2V0PFBvc3RUeXBlW10+KCcvcG9zdHMnKVxufVxuIiwiZXhwb3J0IHsgdXBkYXRlUG9zdCB9IGZyb20gJy4vdXBkYXRlUG9zdCdcbmV4cG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi9nZXRQb3N0cydcbmV4cG9ydCB7IGRlbGV0ZVBvc3QgfSBmcm9tICcuL2RlbGV0ZVBvc3QnXG5leHBvcnQgeyBjcmVhdGVQb3N0IH0gZnJvbSAnLi9jcmVhdGVQb3N0J1xuZXhwb3J0IHsgdmlld1Bvc3QgfSBmcm9tICcuL3ZpZXdQb3N0J1xuXG5leHBvcnQgdHlwZSB7IFBvc3RUeXBlLCBQb3N0SW5mb3JtYXRpb25UeXBlLCBDb21tZW50VHlwZSB9IGZyb20gJy4vdHlwZXMnXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQEFQSS9hcGknXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmludGVyZmFjZSBQYXlsb2FkVHlwZSB7XHJcblx0dGl0bGU6IHN0cmluZ1xyXG5cdGJvZHk6IHN0cmluZ1xyXG59XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQb3N0ID0gKFxyXG5cdGlkOiBudW1iZXIsXHJcblx0cGF5bG9hZDogUGF5bG9hZFR5cGVcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFBvc3RUeXBlPj4gPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLnB1dDxQb3N0VHlwZT4oYC9wb3N0cy8ke2lkfWAsIHsgLi4ucGF5bG9hZCB9KVxyXG59XHJcbiIsImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICdAQVBJL2FwaSdcclxuaW1wb3J0IHsgUG9zdEluZm9ybWF0aW9uVHlwZSB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3Qgdmlld1Bvc3QgPSAoaWQ6IG51bWJlcik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxQb3N0SW5mb3JtYXRpb25UeXBlPj4gPT4ge1xyXG5cdHJldHVybiBjcmVhdGVJbnN0YW5jZSgpLmdldDxQb3N0SW5mb3JtYXRpb25UeXBlPihgL3Bvc3RzLyR7aWR9P19lbWJlZD1jb21tZW50c2ApXHJcbn1cclxuIiwiaW1wb3J0ICogYXMgQ29tbWVudHNBUEkgZnJvbSAnLi9Db21tZW50cydcbmltcG9ydCAqIGFzIFBvc3RzQVBJIGZyb20gJy4vUG9zdHMnXG5cbmV4cG9ydCB0eXBlIHsgUG9zdFR5cGUsIENvbW1lbnRUeXBlLCBQb3N0SW5mb3JtYXRpb25UeXBlIH0gZnJvbSAnLi9Qb3N0cydcblxuZXhwb3J0IHsgQ29tbWVudHNBUEkgfVxuZXhwb3J0IHsgUG9zdHNBUEkgfVxuIiwiaW1wb3J0IGF4aW9zLCB7IEF4aW9zSW5zdGFuY2UgfSBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVJbnN0YW5jZSA9ICgpOiBBeGlvc0luc3RhbmNlID0+IHtcclxuXHRyZXR1cm4gYXhpb3MuY3JlYXRlKHsgYmFzZVVSTDogJ2h0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkLycgfSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9SRVNUJ1xuXG5leHBvcnQgdHlwZSB7IFBvc3RUeXBlIH0gZnJvbSAnLi9SRVNUJ1xuZXhwb3J0IHsgY3JlYXRlSW5zdGFuY2UgfSBmcm9tICcuL2FwaSdcbmV4cG9ydCB7IEFQSSB9XG4iLCJpbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgSW5mZXJBY3Rpb25zVHlwZSB9IGZyb20gJ0BMaWIvU3RvcmUnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuXHRzZXRMb2FkaW5nOiAocGF5bG9hZDogYm9vbGVhbikgPT5cclxuXHRcdCh7XHJcblx0XHRcdHR5cGU6IHR5cGVzLlNFVF9MT0FESU5HLFxyXG5cdFx0XHRwYXlsb2FkLFxyXG5cdFx0fSBhcyBjb25zdCksXHJcblx0c2V0UG9zdHM6IChwYXlsb2FkOiBQb3N0VHlwZVtdKSA9PlxyXG5cdFx0KHtcclxuXHRcdFx0dHlwZTogdHlwZXMuU0VUX1BPU1RTLFxyXG5cdFx0XHRwYXlsb2FkLFxyXG5cdFx0fSBhcyBjb25zdCksXHJcblx0c2V0UG9zdDogKHBheWxvYWQ6IFBvc3RJbmZvcm1hdGlvblR5cGUpID0+XHJcblx0XHQoe1xyXG5cdFx0XHR0eXBlOiB0eXBlcy5TRVRfUE9TVCxcclxuXHRcdFx0cGF5bG9hZCxcclxuXHRcdH0gYXMgY29uc3QpLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBY3Rpb25zVHlwZSA9IEluZmVyQWN0aW9uc1R5cGU8dHlwZW9mIGFjdGlvbnM+XHJcbiIsImltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcblxuZXhwb3J0IHsgc2VsZWN0b3JzIGFzIFBvc3RzU2VsZWN0b3JzIH1cbmV4cG9ydCB7IHJlZHVjZXIgYXMgUG9zdHNSb290UmVkdWNlciwgaW5pdGlhbFZhbHVlIGFzIFBvc3RzSW5pdGlhbFZhbHVlIH0gZnJvbSAnLi9yZWR1Y2VyJ1xuZXhwb3J0IHsgYWN0aW9ucyBhcyBQb3N0c0FjdGlvbnMgfSBmcm9tICcuL2FjdGlvbnMnXG5leHBvcnQgeyByb290U2FnYSBhcyBQb3N0c1Jvb3RTYWdhIH0gZnJvbSAnLi9zYWdhJ1xuZXhwb3J0IHR5cGUgeyBBY3Rpb25zVHlwZSB9IGZyb20gJy4vYWN0aW9ucydcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5pbXBvcnQgeyBBY3Rpb25zVHlwZSB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsVmFsdWUgPSB7XHJcblx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRwb3N0czogbnVsbCBhcyBQb3N0VHlwZVtdIHwgbnVsbCxcclxuXHRwb3N0OiBudWxsIGFzIFBvc3RJbmZvcm1hdGlvblR5cGUgfCBudWxsLFxyXG59XHJcblxyXG50eXBlIEluaXRpYWxWYWx1ZVR5cGUgPSB0eXBlb2YgaW5pdGlhbFZhbHVlXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFZhbHVlLCBhY3Rpb246IEFjdGlvbnNUeXBlKTogSW5pdGlhbFZhbHVlVHlwZSA9PiB7XHJcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cdFx0Y2FzZSBIWURSQVRFOlxyXG5cdFx0XHRyZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG5cdFx0Y2FzZSB0eXBlcy5TRVRfTE9BRElORzoge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGlzTG9hZGluZzogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNhc2UgdHlwZXMuU0VUX1BPU1RTOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cG9zdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjYXNlIHR5cGVzLlNFVF9QT1NUOiB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Li4uc3RhdGUsXHJcblx0XHRcdFx0cG9zdDogYWN0aW9uLnBheWxvYWQsXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdHJldHVybiBzdGF0ZVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBjYWxsLCBwdXQsIGFsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJ1xyXG5pbXBvcnQgeyBBUEksIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9pbmRleCdcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmZ1bmN0aW9uKiBnZXRQb3N0c1NhZ2EoKSB7XHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5nZXRQb3N0cylcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3RzKHJlc3BvbnNlLmRhdGEpKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3JlYXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgZGF0YTogUG9zdFR5cGU7IHB1c2g6IGFueSB9XHJcbn1cclxuZnVuY3Rpb24qIGNyZWF0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBDcmVhdGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgZGF0YSwgcHVzaCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmNyZWF0ZVBvc3QsIGRhdGEpXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLmdldFBvc3RzKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdHMocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdHlpZWxkIHB1dChwdXNoKCcvJykpXHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdFx0Y29uc29sZS5sb2coZXJyb3IpXHJcblx0fVxyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsZXRlUG9zdFR5cGUge1xyXG5cdHR5cGU6IHN0cmluZ1xyXG5cdHBheWxvYWQ6IHsgaWQ6IG51bWJlciB9XHJcbn1cclxuZnVuY3Rpb24qIGRlbGV0ZVBvc3RTYWdhKHsgcGF5bG9hZCB9OiBEZWxldGVQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS5kZWxldGVQb3N0LCBpZClcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkuZ2V0UG9zdHMpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRQb3N0cyhyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIFZpZXdQb3N0VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyBpZDogbnVtYmVyIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHZpZXdQb3N0U2FnYSh7IHBheWxvYWQgfTogVmlld1Bvc3RUeXBlKSB7XHJcblx0Y29uc3QgeyBpZCB9ID0gcGF5bG9hZFxyXG5cdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcodHJ1ZSkpXHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIGlkKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdChyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5cclxuaW50ZXJmYWNlIEVkaXRQb3N0VHlwZSB7XHJcblx0dHlwZTogc3RyaW5nXHJcblx0cGF5bG9hZDogeyBpZDogbnVtYmVyOyBkYXRhOiBQb3N0VHlwZSB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBlZGl0UG9zdFNhZ2EoeyBwYXlsb2FkIH06IEVkaXRQb3N0VHlwZSkge1xyXG5cdGNvbnN0IHsgaWQsIGRhdGEgfSA9IHBheWxvYWRcclxuXHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKHRydWUpKVxyXG5cdHRyeSB7XHJcblx0XHR5aWVsZCBjYWxsKEFQSS5Qb3N0c0FQSS51cGRhdGVQb3N0LCBpZCwgZGF0YSlcclxuXHRcdGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChBUEkuUG9zdHNBUEkudmlld1Bvc3QsIGlkKVxyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0UG9zdChyZXNwb25zZS5kYXRhKSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldExvYWRpbmcoZmFsc2UpKVxyXG5cdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHRcdGNvbnNvbGUubG9nKGVycm9yKVxyXG5cdH1cclxufVxyXG5pbnRlcmZhY2UgU2VuZENvbW1lbnRUeXBlIHtcclxuXHR0eXBlOiBzdHJpbmdcclxuXHRwYXlsb2FkOiB7IGJvZHk6IHN0cmluZzsgcG9zdElkOiBudW1iZXIgfVxyXG59XHJcbmZ1bmN0aW9uKiBzZW5kQ29tbWVudFBvc3RTYWdhKHsgcGF5bG9hZCB9OiBTZW5kQ29tbWVudFR5cGUpIHtcclxuXHRjb25zb2xlLmxvZygnc2UnKVxyXG5cdGNvbnN0IHsgcG9zdElkLCBib2R5IH0gPSBwYXlsb2FkXHJcblx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyh0cnVlKSlcclxuXHR0cnkge1xyXG5cdFx0eWllbGQgY2FsbChBUEkuQ29tbWVudHNBUEkuY3JlYXRlQ29tbWVudHMsIHsgcG9zdElkLCBib2R5IH0pXHJcblx0XHRjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoQVBJLlBvc3RzQVBJLnZpZXdQb3N0LCBwb3N0SWQpXHJcblx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHRcdHlpZWxkIHB1dChhY3Rpb25zLnNldFBvc3QocmVzcG9uc2UuZGF0YSkpXHJcblx0XHR5aWVsZCBwdXQoYWN0aW9ucy5zZXRMb2FkaW5nKGZhbHNlKSlcclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0eWllbGQgcHV0KGFjdGlvbnMuc2V0TG9hZGluZyhmYWxzZSkpXHJcblx0XHRjb25zb2xlLmxvZyhlcnJvcilcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcblx0eWllbGQgYWxsKFtcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5HRVRfUE9TVFMsIGdldFBvc3RzU2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuQ1JFQVRFX1BPU1QsIGNyZWF0ZVBvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5ERUxFVEVfUE9TVCwgZGVsZXRlUG9zdFNhZ2EpLFxyXG5cdFx0dGFrZUV2ZXJ5KHR5cGVzLlZJRVdfUE9TVCwgdmlld1Bvc3RTYWdhKSxcclxuXHRcdHRha2VFdmVyeSh0eXBlcy5FRElUX1BPU1QsIGVkaXRQb3N0U2FnYSksXHJcblx0XHR0YWtlRXZlcnkodHlwZXMuU0VORF9NRVNTQUdFLCBzZW5kQ29tbWVudFBvc3RTYWdhKSxcclxuXHRdKVxyXG59XHJcbiIsImltcG9ydCB7IEFwcFN0YXRlVHlwZSB9IGZyb20gJ0BMaWIvU3RvcmUnXHJcbmltcG9ydCB7IFBvc3RJbmZvcm1hdGlvblR5cGUsIFBvc3RUeXBlIH0gZnJvbSAnQEFQSS9SRVNUJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gKHN0YXRlOiBBcHBTdGF0ZVR5cGUpOiBQb3N0VHlwZVtdIHwgbnVsbCA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIucG9zdHNcclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID0gKHN0YXRlOiBBcHBTdGF0ZVR5cGUpOiBQb3N0SW5mb3JtYXRpb25UeXBlIHwgbnVsbCA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIucG9zdFxyXG5cclxuZXhwb3J0IGNvbnN0IGlzTG9hZGluZyA9IChzdGF0ZTogQXBwU3RhdGVUeXBlKTogYm9vbGVhbiA9PlxyXG5cdHN0YXRlLlBvc3RzUm9vdFJlZHVjZXIuaXNMb2FkaW5nXHJcbiIsImV4cG9ydCBjb25zdCBTRVRfTE9BRElORyA9ICdTRVRfTE9BRElORydcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NUUyA9ICdHRVRfUE9TVFMnXHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVFMgPSAnU0VUX1BPU1RTJ1xyXG5leHBvcnQgY29uc3QgRURJVF9QT1NUID0gJ0VESVRfUE9TVCdcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NUID0gJ0RFTEVURV9QT1NUJ1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSAnQ1JFQVRFX1BPU1QnXHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVCA9ICdTRVRfUE9TVCdcclxuZXhwb3J0IGNvbnN0IFZJRVdfUE9TVCA9ICdWSUVXX1BPU1QnXHJcbmV4cG9ydCBjb25zdCBTRU5EX01FU1NBR0UgPSAnU0VORF9NRVNTQUdFJ1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUG9zdEFjdGlvbnMgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1Bvc3RBY3Rpb25zJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG5cdGlkOiBudW1iZXIgfCB1bmRlZmluZWRcclxufVxyXG5leHBvcnQgY29uc3QgQWN0aW9uczogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGNoaWxkcmVuLCBpZCB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCBvbkRlbGV0ZSA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1BPU1QnLCBwYXlsb2FkOiB7IGlkIH0gfSlcclxuXHRcdH0sXHJcblx0XHRbZGlzcGF0Y2hdXHJcblx0KVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc3RBY3Rpb25zIG9uRGVsZXRlPXtvbkRlbGV0ZX0gaWQ9e2lkfT5cclxuXHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0PC9Qb3N0QWN0aW9ucz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgUG9zdEl0ZW0gfSBmcm9tICdAVUkvT3JnYW5pc21zJ1xyXG5cclxuY29uc3QgUG9zdHMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuXHRncmlkLWdhcDogMjBweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRwb3N0czogUG9zdFR5cGVbXVxyXG59XHJcbmV4cG9ydCBjb25zdCBMaXN0UG9zdHM6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBwb3N0cyB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnN0IG9uVmlldyA9IHVzZUNhbGxiYWNrKFxyXG5cdFx0KGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHtcclxuXHRcdFx0cm91dGVyLnB1c2goYC9wb3N0cy8ke2lkfWApXHJcblx0XHR9LFxyXG5cdFx0W3JvdXRlcl1cclxuXHQpXHJcblx0Y29uc3Qgb25EZWxldGUgPSB1c2VDYWxsYmFjayhcclxuXHRcdChpZDogbnVtYmVyIHwgdW5kZWZpbmVkKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9QT1NUJywgcGF5bG9hZDogeyBpZCB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoXVxyXG5cdClcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxQb3N0cz5cclxuXHRcdFx0e3Bvc3RzLm1hcCgoeyB0aXRsZSwgYm9keSwgaWQgfTogUG9zdFR5cGUpID0+IChcclxuXHRcdFx0XHQ8UG9zdEl0ZW1cclxuXHRcdFx0XHRcdGtleT17aWR9XHJcblx0XHRcdFx0XHRpZD17aWR9XHJcblx0XHRcdFx0XHR0aXRsZT17dGl0bGV9XHJcblx0XHRcdFx0XHRib2R5PXtib2R5fVxyXG5cdFx0XHRcdFx0b25WaWV3PXtvblZpZXd9XHJcblx0XHRcdFx0XHRvbkRlbGV0ZT17b25EZWxldGV9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSl9XHJcblx0XHQ8L1Bvc3RzPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBMaXN0UG9zdHMgfSBmcm9tICcuL0xpc3RQb3N0cydcbmV4cG9ydCB7IEFjdGlvbnMgfSBmcm9tICcuL0FjdGlvbnMnXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBQb3N0SW5mb3JtYXRpb25UeXBlLCBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuaW1wb3J0IHsgQ3JlYXRlUG9zdEZvcm0sIFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJ0BVSS9PcmdhbmlzbXMnXHJcbmltcG9ydCB7IENvbW1lbnRJdGVtIH0gZnJvbSAnQFVJL0F0b21zJ1xyXG5pbXBvcnQgeyBNb2RhbFdpbmRvd1RlbXBsYXRlIH0gZnJvbSAnQFVJL1RlbXBsYXRlcydcclxuaW1wb3J0IHsgU2VuZE1lc3NhZ2UgfSBmcm9tICdAVUkvTW9sZWN1bGVzL1NlbmRNZXNzYWdlJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHdpZHRoOiA1NTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBJbmZvcm1hdGlvbiA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRncmlkLXJvdy1nYXA6IDE1cHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdG1hcmdpbjogMzBweCAwO1xyXG5gXHJcbmNvbnN0IFBvc2l0aW9uV3JhcHBlZCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1heC1jb250ZW50KTtcclxuXHRncmlkLWNvbHVtbi1nYXA6IDUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmBcclxuY29uc3QgQ29tbWVudHMgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxMHB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3Q6IFBvc3RJbmZvcm1hdGlvblR5cGVcclxufVxyXG5leHBvcnQgY29uc3QgUG9zdDogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3QgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0Y29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0Y29uc3QgeyBpZCwgdGl0bGUsIGJvZHksIGNvbW1lbnRzIH0gPSBwb3N0XHJcblx0Y29uc3Qgb25FZGl0ID0gdXNlQ2FsbGJhY2soXHJcblx0XHQoZGF0YTogUG9zdFR5cGUpID0+IHtcclxuXHRcdFx0ZGlzcGF0Y2goeyB0eXBlOiAnRURJVF9QT1NUJywgcGF5bG9hZDogeyBpZCwgZGF0YSB9IH0pXHJcblx0XHR9LFxyXG5cdFx0W2Rpc3BhdGNoLCBpZF1cclxuXHQpXHJcblx0Y29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHRcdHNldElzRWRpdCghaXNFZGl0KVxyXG5cdH0sIFtpc0VkaXRdKVxyXG5cdGNvbnN0IG9uR29CYWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cdFx0cm91dGVyLmJhY2soKVxyXG5cdH0sIFtyb3V0ZXJdKVxyXG5cdGNvbnN0IG9uU2VuZE1lc3NhZ2UgPSB1c2VDYWxsYmFjayhcclxuXHRcdCh2YWx1ZTogc3RyaW5nKSA9PiB7XHJcblx0XHRcdGRpc3BhdGNoKHsgdHlwZTogJ1NFTkRfTUVTU0FHRScsIHBheWxvYWQ6IHsgYm9keTogdmFsdWUsIHBvc3RJZDogaWQgfSB9KVxyXG5cdFx0fSxcclxuXHRcdFtkaXNwYXRjaCwgaWRdXHJcblx0KVxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8UG9zaXRpb25XcmFwcGVkPlxyXG5cdFx0XHRcdDxXcmFwcGVkPlxyXG5cdFx0XHRcdFx0PEFjdGlvbnM+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXQoIWlzRWRpdCl9PlxyXG5cdFx0XHRcdFx0XHRcdEVkaXRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdDxCdXR0b24gdHlwZT0nZGFzaGVkJyBvbkNsaWNrPXtvbkdvQmFja30+XHJcblx0XHRcdFx0XHRcdFx0R28gYmFja1xyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvQWN0aW9ucz5cclxuXHRcdFx0XHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0XHRcdFx0PFBvc3RJbmZvcm1hdGlvbiB0aXRsZT17dGl0bGV9IGJvZHk9e2JvZHl9PlxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8VGl0bGU+Q29tbWVudHM6PC9UaXRsZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxTZW5kTWVzc2FnZSBvblNlbmRNZXNzYWdlPXtvblNlbmRNZXNzYWdlfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENvbW1lbnRzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29tbWVudHMubWFwKCh7IGJvZHksIGlkIH0pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPENvbW1lbnRJdGVtIGtleT17aWR9IGJvZHk9e2JvZHl9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Db21tZW50cz5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0PC9Qb3N0SW5mb3JtYXRpb24+XHJcblx0XHRcdFx0XHQ8L0luZm9ybWF0aW9uPlxyXG5cdFx0XHRcdDwvV3JhcHBlZD5cclxuXHRcdFx0PC9Qb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdHtpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxNb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PENyZWF0ZVBvc3RGb3JtXHJcblx0XHRcdFx0XHRcdGlzRWRpdFxyXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25FZGl0fVxyXG5cdFx0XHRcdFx0XHRpbml0aWFsVmFsdWU9e3sgdGl0bGUsIGJvZHkgfX1cclxuXHRcdFx0XHRcdFx0b25DbG9zZT17b25DbG9zZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9Nb2RhbFdpbmRvd1RlbXBsYXRlPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUG9zdFR5cGUgfSBmcm9tICdAQVBJL1JFU1QnXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BVSS9BdG9tcydcclxuaW1wb3J0IHsgTGlzdFBvc3RzIH0gZnJvbSAnLi4vTW9sZWN1bGVzJ1xyXG5cclxuY29uc3QgV3JhcHBlZCA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBQb3N0c1dyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdG1hcmdpbjogMzBweCAwO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHBvc3RzOiBQb3N0VHlwZVtdXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RzQWN0aW9uczogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IHBvc3RzIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblx0cmV0dXJuIChcclxuXHRcdDxXcmFwcGVkPlxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0b25DbGljaz17KCk6IHZvaWQgPT4ge1xyXG5cdFx0XHRcdFx0cm91dGVyLnB1c2goJy9wb3N0cy9uZXcnKVxyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHRDcmVhdGVcclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDxQb3N0c1dyYXBwZWQ+XHJcblx0XHRcdFx0PExpc3RQb3N0cyBwb3N0cz17cG9zdHN9IC8+XHJcblx0XHRcdDwvUG9zdHNXcmFwcGVkPlxyXG5cdFx0PC9XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgfSBmcm9tICcuL1Bvc3RzQWN0aW9ucydcbmV4cG9ydCB7IFBvc3QgfSBmcm9tICcuL1Bvc3QnXG4iLCJleHBvcnQgeyBQb3N0c0FjdGlvbnMgYXMgUG9zdHNBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnLi9PcmdhbmlzbXMnXG5leHBvcnQgeyBQb3N0c1Jvb3RSZWR1Y2VyLCBQb3N0c1Jvb3RTYWdhLCBQb3N0c1NlbGVjdG9ycywgUG9zdHNBY3Rpb25zLCBQb3N0c0luaXRpYWxWYWx1ZSB9IGZyb20gJy4vTW9kZWwnXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ0BTdHlsZWQvdGhlbWUnXHJcblxyXG5pbnRlcmZhY2UgQnV0dG9uVHlwZSB7XHJcblx0ZGFuZ2VyOiBib29sZWFuIHwgdW5kZWZpbmVkXHJcblx0dGhlbWU6IFRoZW1lVHlwZVxyXG59XHJcbmNvbnN0IEJ1dHRvbkNvbXBvbmVudCA9IHN0eWxlZC5idXR0b248QnV0dG9uVHlwZT5gXHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0cGFkZGluZzogN3B4IDEwcHg7XHJcblx0Ym9yZGVyLXN0eWxlOiBkYXNoZWQ7XHJcblx0Ym9yZGVyLXJhZGl1czogN3B4O1xyXG5cdCR7KHsgdGhlbWU6IHsgY29sb3JzIH0sIGRhbmdlciB9KSA9PlxyXG5cdFx0ZGFuZ2VyXHJcblx0XHRcdD8gYGNvbG9yOiAke2NvbG9ycy5yZWR9OyBib3JkZXI6IDFweCBzb2xpZCAke2NvbG9ycy5yZWR9O2BcclxuXHRcdFx0OiBgY29sb3I6ICR7Y29sb3JzLmJsYWNrfTsgYm9yZGVyOiAxcHggc29saWQgJHtjb2xvcnMuYmxhY2t9O2B9O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuXHRvbkNsaWNrOiAoKSA9PiB2b2lkXHJcblx0ZGFuZ2VyPzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG5cdG9uQ2xpY2ssXHJcblx0ZGFuZ2VyLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PEJ1dHRvbkNvbXBvbmVudCBvbkNsaWNrPXtvbkNsaWNrfSBkYW5nZXI9e2Rhbmdlcn0+XHJcblx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdDwvQnV0dG9uQ29tcG9uZW50PlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmgyYFxyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRCb2R5OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxCb2R5PntjaGlsZHJlbn08L0JvZHk+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5zcGFuYFxyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRib2R5OiBzdHJpbmdcclxufVxyXG5leHBvcnQgY29uc3QgQ29tbWVudEl0ZW06IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBib2R5IH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8Q29udGVudD57Ym9keX08L0NvbnRlbnQ+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdAU3R5bGVkL3RoZW1lJ1xyXG5cclxuY29uc3QgSW5wdXRDb21wb25lbnQgPSBzdHlsZWQuaW5wdXRgXHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdG1hcmdpbjogMDtcclxuXHRib3JkZXItcmFkaXVzOiA3cHg7XHJcblx0Jjo6cGxhY2Vob2xkZXIge1xyXG5cdFx0Y29sb3I6ICR7KHsgdGhlbWU6IHsgY29sb3JzIH0gfTogVGhlbWVUeXBlKSA9PiBjb2xvcnMuZ3JleX07XHJcblx0fVxyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdHZhbHVlOiBzdHJpbmdcclxuXHRvbkNoYW5nZTogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkXHJcbn1cclxuZXhwb3J0IGNvbnN0IElucHV0OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8SW5wdXRDb21wb25lbnQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5leHBvcnQgY29uc3QgUGFnZVRpdGxlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIDxUaXRsZT57Y2hpbGRyZW59PC9UaXRsZT5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNwYW5gYFxyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0Qm9keTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7IGNoaWxkcmVuIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG5cdHJldHVybiA8Qm9keT57Y2hpbGRyZW59PC9Cb2R5PlxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnQFN0eWxlZC90aGVtZSdcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6ICR7KHsgdGhlbWU6IHsgd2VpZ2h0cyB9IH06IFRoZW1lVHlwZSkgPT4gd2VpZ2h0cy5ib2xkfTtcclxuYFxyXG5cclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0Y2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxyXG59XHJcbmV4cG9ydCBjb25zdCBQb3N0VGl0bGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoeyBjaGlsZHJlbiB9KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gPFRpdGxlPntjaGlsZHJlbn08L1RpdGxlPlxyXG59XHJcbiIsImV4cG9ydCB7IFBvc3RUaXRsZSB9IGZyb20gJy4vUG9zdFRpdGxlJ1xuZXhwb3J0IHsgUG9zdEJvZHkgfSBmcm9tICcuL1Bvc3RCb2R5J1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUmluZyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiA4MHB4O1xyXG5cdGhlaWdodDogODBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiA1MCU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdCY6OmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICcgJztcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0d2lkdGg6IDY0cHg7XHJcblx0XHRoZWlnaHQ6IDY0cHg7XHJcblx0XHRtYXJnaW46IDhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJvcmRlcjogNnB4IHNvbGlkICNmZmY7XHJcblx0XHRib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudDtcclxuXHRcdGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcblx0QGtleWZyYW1lcyBsZHMtZHVhbC1yaW5nIHtcclxuXHRcdDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcblx0XHR9XHJcblx0XHQxMDAlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcbmBcclxuY29uc3QgUG9zaXRpb25XcmFwcGVkID0gc3R5bGVkLmRpdmBcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5leHBvcnQgY29uc3QgUHJlbG9hZGVyID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxQb3NpdGlvbldyYXBwZWQ+XHJcblx0XHRcdDxSaW5nIC8+XHJcblx0XHQ8L1Bvc2l0aW9uV3JhcHBlZD5cclxuXHQpXHJcbn1cclxuIiwiZXhwb3J0IHsgUGFnZVRpdGxlIH0gZnJvbSAnLi9QYWdlVGl0bGUnXG5leHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbidcbmV4cG9ydCB7IElucHV0IH0gZnJvbSAnLi9JbnB1dCdcbmV4cG9ydCB7IFByZWxvYWRlciB9IGZyb20gJy4vUHJlbG9hZGVyJ1xuZXhwb3J0IHsgQ29tbWVudEJvZHkgfSBmcm9tICcuL0NvbW1lbnRCb2R5J1xuZXhwb3J0IHsgQ29tbWVudEl0ZW0gfSBmcm9tICcuL0NvbW1lbnRJdGVtJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBQb3Bjb25maXJtLCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtYXgtY29udGVudCk7XHJcblx0Z3JpZC1jb2x1bW4tZ2FwOiAxNXB4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxuXHRvbkRlbGV0ZTogKGlkOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IHZvaWRcclxuXHRpZDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RBY3Rpb25zOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRjaGlsZHJlbixcclxuXHRvbkRlbGV0ZSxcclxuXHRpZCxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxBY3Rpb25zPlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdDxQb3Bjb25maXJtXHJcblx0XHRcdFx0dGl0bGU9J0FyZSB5b3Ugc3VyZe+8nydcclxuXHRcdFx0XHRva1RleHQ9J1llcydcclxuXHRcdFx0XHRjYW5jZWxUZXh0PSdObydcclxuXHRcdFx0XHRvbkNvbmZpcm09eygpID0+IG9uRGVsZXRlKGlkKX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxCdXR0b24gZGFuZ2VyPkRlbGV0ZTwvQnV0dG9uPlxyXG5cdFx0XHQ8L1BvcGNvbmZpcm0+XHJcblx0XHRcdCxcclxuXHRcdDwvQWN0aW9ucz5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBQb3N0Qm9keSwgUG9zdFRpdGxlIH0gZnJvbSAnQFVJL0F0b21zL1Bvc3QnXHJcblxyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtcm93LWdhcDogMTVweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHR0aXRsZTogc3RyaW5nXHJcblx0Ym9keTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RDb250ZW50OiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgdGl0bGUsIGJvZHkgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDb250ZW50PlxyXG5cdFx0XHQ8UG9zdFRpdGxlPnt0aXRsZX08L1Bvc3RUaXRsZT5cclxuXHRcdFx0PFBvc3RCb2R5Pntib2R5fTwvUG9zdEJvZHk+XHJcblx0XHQ8L0NvbnRlbnQ+XHJcblx0KVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcclxuXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgbWF4LWNvbnRlbnQ7XHJcbmBcclxuXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdG9uU2VuZE1lc3NhZ2U6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNlbmRNZXNzYWdlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHRvblNlbmRNZXNzYWdlLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxyXG5cdGNvbnN0IG9uQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcblx0XHRzZXRWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcblx0fVxyXG5cdHJldHVybiAoXHJcblx0XHQ8V3JhcHBlZD5cclxuXHRcdFx0PElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBjb21tZW50JyAvPlxyXG5cdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uU2VuZE1lc3NhZ2UodmFsdWUpfT5TZW5kPC9CdXR0b24+XHJcblx0XHQ8L1dyYXBwZWQ+XHJcblx0KVxyXG59XHJcbiIsImV4cG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSAnLi9Qb3N0Q29udGVudCdcbmV4cG9ydCB7IFNlbmRNZXNzYWdlIH0gZnJvbSAnLi9TZW5kTWVzc2FnZSdcbmV4cG9ydCB7IFBvc3RBY3Rpb25zIGFzIFBvc3RBY3Rpb25zQ29tcG9uZW50cyB9IGZyb20gJy4vUG9zdEFjdGlvbnMnXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0VHlwZSB9IGZyb20gJ0BBUEkvUkVTVCdcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWF4LWNvbnRlbnQpO1xyXG5cdGdyaWQtY29sdW1uLWdhcDogMTVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRvblN1Ym1pdDogKGRhdGE6IFBvc3RUeXBlKSA9PiB2b2lkXHJcblx0b25DbG9zZT86ICgpID0+IHZvaWRcclxuXHRpbml0aWFsVmFsdWU6IFBvc3RUeXBlXHJcblx0aXNFZGl0PzogYm9vbGVhbiB8IHVuZGVmaW5lZFxyXG59XHJcbmV4cG9ydCBjb25zdCBDcmVhdGVQb3N0Rm9ybTogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0b25TdWJtaXQsXHJcblx0aW5pdGlhbFZhbHVlLFxyXG5cdGlzRWRpdCxcclxuXHRvbkNsb3NlLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cdGNvbnNvbGUubG9nKCdyb3V0ZXInLCByb3V0ZXIpXHJcblx0Y29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblx0XHRpZiAoaXNFZGl0ICYmIG9uQ2xvc2UpIHtcclxuXHRcdFx0b25DbG9zZSgpXHJcblx0XHR9IGVsc2Ugcm91dGVyLmJhY2soKVxyXG5cdH0sIFtyb3V0ZXIsIGlzRWRpdCwgb25DbG9zZV0pXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG5hbWU9J3Bvc3QnIGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZX0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuXHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdGxhYmVsPSdUaXRsZSdcclxuXHRcdFx0XHRuYW1lPSd0aXRsZSdcclxuXHRcdFx0XHRydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgdGl0bGUgb2YgcG9zdCEnIH1dfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0IHBsYWNlaG9sZGVyPSdFbnRlciB0aXRsZSBvZiBwb3N0JyAvPlxyXG5cdFx0XHQ8L0Zvcm0uSXRlbT5cclxuXHRcdFx0PEZvcm0uSXRlbVxyXG5cdFx0XHRcdGxhYmVsPSdCb2R5J1xyXG5cdFx0XHRcdG5hbWU9J2JvZHknXHJcblx0XHRcdFx0cnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGJvZHkgb2YgcG9zdCEnIH1dfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PElucHV0IHBsYWNlaG9sZGVyPSdFbnRlciBib2R5IG9mIHBvc3QnIC8+XHJcblx0XHRcdDwvRm9ybS5JdGVtPlxyXG5cdFx0XHQ8QWN0aW9ucz5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9J2Rhc2hlZCcgaHRtbFR5cGU9J3N1Ym1pdCc+XHJcblx0XHRcdFx0XHR7aXNFZGl0ID8gJ1NhdmUnIDogJ0NyZWF0ZSd9XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdkYXNoZWQnIGRhbmdlciBvbkNsaWNrPXtvbkNhbmNlbH0+XHJcblx0XHRcdFx0XHRDYW5jZWxcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9BY3Rpb25zPlxyXG5cdFx0PC9Gb3JtPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBDcmVhdGVQb3N0Rm9ybSB9IGZyb20gJy4vQ3JlYXRlUG9zdCdcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgUG9zdENvbnRlbnQgfSBmcm9tICdAVUkvTW9sZWN1bGVzJ1xyXG5cclxuY29uc3QgSW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC1yb3ctZ2FwOiAxNXB4O1xyXG5gXHJcbmNvbnN0IENvbW1lbnRzID0gc3R5bGVkLmRpdmBgXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdEVsZW1lbnRcclxuXHR0aXRsZTogc3RyaW5nXHJcblx0Ym9keTogc3RyaW5nXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RJbmZvcm1hdGlvbjogUmVhY3QuRkM8UHJvcHNUeXBlPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcblx0dGl0bGUsXHJcblx0Ym9keSxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxJbmZvcm1hdGlvbj5cclxuXHRcdFx0PFBvc3RDb250ZW50IHRpdGxlPXt0aXRsZX0gYm9keT17Ym9keX0gLz5cclxuXHRcdFx0PENvbW1lbnRzPntjaGlsZHJlbn08L0NvbW1lbnRzPlxyXG5cdFx0PC9JbmZvcm1hdGlvbj5cclxuXHQpXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyBQb3N0Q29udGVudCB9IGZyb20gJ0BVSS9Nb2xlY3VsZXMnXHJcbmltcG9ydCB7IFBvc3RBY3Rpb25zIH0gZnJvbSAnQFVJL01vbGVjdWxlcy9Qb3N0QWN0aW9ucydcclxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BGZWF0dXJlcy9Qb3N0cy9Nb2xlY3VsZXMnXHJcblxyXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdmBcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtcm93LWdhcDogMTVweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDE1cHg7XHJcblx0Ym94LXNoYWRvdzogMXB4IDJweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbmBcclxuaW50ZXJmYWNlIFByb3BzVHlwZSB7XHJcblx0b25WaWV3OiAoaWQ6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxyXG5cdG9uRGVsZXRlOiAoaWQ6IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gdm9pZFxyXG5cdHRpdGxlOiBzdHJpbmdcclxuXHRib2R5OiBzdHJpbmdcclxuXHRpZDogbnVtYmVyIHwgdW5kZWZpbmVkXHJcbn1cclxuZXhwb3J0IGNvbnN0IFBvc3RJdGVtOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHtcclxuXHR0aXRsZSxcclxuXHRib2R5LFxyXG5cdGlkLFxyXG5cdG9uVmlldyxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxJdGVtPlxyXG5cdFx0XHQ8UG9zdENvbnRlbnQgdGl0bGU9e3RpdGxlfSBib2R5PXtib2R5fSAvPlxyXG5cdFx0XHQ8QWN0aW9ucyBpZD17aWR9PlxyXG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17KCkgPT4gb25WaWV3KGlkKX0+VmlldzwvQnV0dG9uPlxyXG5cdFx0XHQ8L0FjdGlvbnM+XHJcblx0XHQ8L0l0ZW0+XHJcblx0KVxyXG59XHJcbiIsImV4cG9ydCB7IFBvc3RJdGVtIH0gZnJvbSAnLi9Qb3N0SXRlbSdcbmV4cG9ydCB7IENyZWF0ZVBvc3RGb3JtIH0gZnJvbSAnLi9Gb3JtcydcbmV4cG9ydCB7IFBvc3RJbmZvcm1hdGlvbiB9IGZyb20gJy4vUG9zdEluZm9ybWF0aW9uJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgVGVtcGxhdGUgPSBzdHlsZWQubWFpbmBcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5gXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1heC13aWR0aDogMTIwMHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5gXHJcbmludGVyZmFjZSBQcm9wc1R5cGUge1xyXG5cdGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcclxufVxyXG5leHBvcnQgY29uc3QgTWFpblRlbXBsYXRlOiBSZWFjdC5GQzxQcm9wc1R5cGU+ID0gKHsgY2hpbGRyZW4gfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxUZW1wbGF0ZT5cclxuXHRcdFx0PENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcblx0XHQ8L1RlbXBsYXRlPlxyXG5cdClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBQb3NpdGlvbldyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5gXHJcbmNvbnN0IFdyYXBwZWQgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdHRvcDogNTAlO1xyXG5cdGxlZnQ6IDUwJTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjU1IDI1NSAyNTUpO1xyXG5cdHBhZGRpbmc6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMjRweDtcclxuYFxyXG5pbnRlcmZhY2UgUHJvcHNUeXBlIHtcclxuXHRjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXHJcbn1cclxuZXhwb3J0IGNvbnN0IE1vZGFsV2luZG93VGVtcGxhdGU6IFJlYWN0LkZDPFByb3BzVHlwZT4gPSAoe1xyXG5cdGNoaWxkcmVuLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFBvc2l0aW9uV3JhcHBlZD5cclxuXHRcdFx0PFdyYXBwZWQ+e2NoaWxkcmVufTwvV3JhcHBlZD5cclxuXHRcdDwvUG9zaXRpb25XcmFwcGVkPlxyXG5cdClcclxufVxyXG4iLCJleHBvcnQgeyBNYWluVGVtcGxhdGUgfSBmcm9tICcuL01haW5UZW1wbGF0ZSdcbmV4cG9ydCB7IE1vZGFsV2luZG93VGVtcGxhdGUgfSBmcm9tICcuL01vZGFsV2luZG93VGVtcGxhdGUnXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==