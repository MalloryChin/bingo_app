webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
var _jsxFileName = "/Users/mallory.chin/Documents/bingo_app/pages/post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Content = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, router.query.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "This is the blog post content."));
};

const Page = () => __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx(Content, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ })

})
//# sourceMappingURL=post.js.f0de93db01839c630f97.hot-update.js.map