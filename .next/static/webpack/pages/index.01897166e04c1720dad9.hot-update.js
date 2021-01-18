webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Character__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Character */ \"./components/Character.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/aleksandar77np/Desktop/harry-potter/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(props.data),\n      characters = _useState[0],\n      setCharacters = _useState[1];\n\n  var fetchStudents = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('http://hp-api.herokuapp.com/api/characters/students');\n\n            case 2:\n              res = _context.sent;\n              _context.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context.sent;\n              setCharacters(data);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function fetchStudents() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var fetchStaff = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return fetch('http://hp-api.herokuapp.com/api/characters/staff');\n\n            case 2:\n              res = _context2.sent;\n              _context2.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context2.sent;\n              setCharacters(data);\n\n            case 7:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function fetchStaff() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var fetchAll = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.next = 2;\n              return fetch('http://hp-api.herokuapp.com/api/characters/staff');\n\n            case 2:\n              res = _context3.sent;\n              _context3.next = 5;\n              return res.json();\n\n            case 5:\n              data = _context3.sent;\n              setCharacters(data);\n\n            case 7:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function fetchAll() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    fStudents: fetchStudents,\n    fStaff: fetchStaff,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"row text-center mx-auto\",\n      children: characters.map(function (elem) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-sm-12 col-md-4 col-lg-2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Character__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            character: elem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 29\n          }, _this)\n        }, elem.name, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Index, \"rpm1UTjJ74uLn5XtcyaWqMAOe3I=\");\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJkYXRhIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJmZXRjaFN0dWRlbnRzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZmV0Y2hTdGFmZiIsImZldGNoQWxsIiwibWFwIiwiZWxlbSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBRWVDLHNEQUFRLENBQUNELEtBQUssQ0FBQ0UsSUFBUCxDQUZ2QjtBQUFBLE1BRWRDLFVBRmM7QUFBQSxNQUVGQyxhQUZFOztBQUlyQixNQUFNQyxhQUFhO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDQUMsS0FBSyxDQUFDLHFEQUFELENBREw7O0FBQUE7QUFDWkMsaUJBRFk7QUFBQTtBQUFBLHFCQUVDQSxHQUFHLENBQUNDLElBQUosRUFGRDs7QUFBQTtBQUVaTixrQkFGWTtBQUdsQkUsMkJBQWEsQ0FBQ0YsSUFBRCxDQUFiOztBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFiRyxhQUFhO0FBQUE7QUFBQTtBQUFBLEtBQW5COztBQU1BLE1BQU1JLFVBQVU7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNHSCxLQUFLLENBQUMsa0RBQUQsQ0FEUjs7QUFBQTtBQUNUQyxpQkFEUztBQUFBO0FBQUEscUJBRUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUZKOztBQUFBO0FBRVROLGtCQUZTO0FBR2ZFLDJCQUFhLENBQUNGLElBQUQsQ0FBYjs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWTyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQU1BLE1BQU1DLFFBQVE7QUFBQSxpTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNLSixLQUFLLENBQUMsa0RBQUQsQ0FEVjs7QUFBQTtBQUNQQyxpQkFETztBQUFBO0FBQUEscUJBRU1BLEdBQUcsQ0FBQ0MsSUFBSixFQUZOOztBQUFBO0FBRVBOLGtCQUZPO0FBR2JFLDJCQUFhLENBQUNGLElBQUQsQ0FBYjs7QUFIYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUSxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBTUEsc0JBQ0kscUVBQUMsMERBQUQ7QUFBUSxhQUFTLEVBQUVMLGFBQW5CO0FBQWtDLFVBQU0sRUFBRUksVUFBMUM7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLGdCQUVRTixVQUFVLENBQUNRLEdBQVgsQ0FBZSxVQUFBQyxJQUFJO0FBQUEsNEJBQ2Y7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQUEsaUNBQ0kscUVBQUMsNkRBQUQ7QUFBVyxxQkFBUyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBa0RBLElBQUksQ0FBQ0MsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQW5CO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBbkNEOztHQUFNZCxLOztLQUFBQSxLOztBQStDU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcmFjdGVyJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW2NoYXJhY3RlcnMsIHNldENoYXJhY3RlcnNdID0gdXNlU3RhdGUocHJvcHMuZGF0YSlcblxuICAgIGNvbnN0IGZldGNoU3R1ZGVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vaHAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL2NoYXJhY3RlcnMvc3R1ZGVudHMnKVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgICBzZXRDaGFyYWN0ZXJzKGRhdGEpXG4gICAgfVxuXG4gICAgY29uc3QgZmV0Y2hTdGFmZiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9ocC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvY2hhcmFjdGVycy9zdGFmZicpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIHNldENoYXJhY3RlcnMoZGF0YSlcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaEFsbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9ocC1hcGkuaGVyb2t1YXBwLmNvbS9hcGkvY2hhcmFjdGVycy9zdGFmZicpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIHNldENoYXJhY3RlcnMoZGF0YSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0IGZTdHVkZW50cz17ZmV0Y2hTdHVkZW50c30gZlN0YWZmPXtmZXRjaFN0YWZmfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMubWFwKGVsZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTQgY29sLWxnLTJcIiBrZXk9e2VsZW0ubmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYXJhY3RlciBjaGFyYWN0ZXI9e2VsZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vaHAtYXBpLmhlcm9rdWFwcC5jb20vYXBpL2NoYXJhY3RlcnMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge2RhdGF9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})