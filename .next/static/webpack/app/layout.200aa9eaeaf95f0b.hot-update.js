/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/[locale]/globals.css":
/*!**********************************!*\
  !*** ./app/[locale]/globals.css ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b650dde207c4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9bbG9jYWxlXS9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1tsb2NhbGVdL2dsb2JhbHMuY3NzP2ExYzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiNjUwZGRlMjA3YzRcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/[locale]/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/StoryblokProvider.ts":
/*!*****************************************!*\
  !*** ./components/StoryblokProvider.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StoryblokProvider; }\n/* harmony export */ });\n/* harmony import */ var _storyblok_react_rsc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storyblok/react/rsc */ \"(app-pages-browser)/./node_modules/@storyblok/react/dist/rsc.mjs\");\n/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.component */ \"(app-pages-browser)/./components/page.component.tsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"(app-pages-browser)/./components/header.tsx\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst components = {\n    page: _page_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    header: (_header__WEBPACK_IMPORTED_MODULE_2___default())\n};\n(0,_storyblok_react_rsc__WEBPACK_IMPORTED_MODULE_0__.storyblokInit)({\n    accessToken: \"6PqC60SMwL7f6kGT8jNNFQtt\",\n    use: [\n        _storyblok_react_rsc__WEBPACK_IMPORTED_MODULE_0__.apiPlugin\n    ],\n    components: components\n});\nfunction StoryblokProvider(param) {\n    let { children } = param;\n    return children;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RvcnlibG9rUHJvdmlkZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7NkRBRXNGO0FBQ2xEO0FBQ047QUFFOUIsTUFBTUksYUFBYTtJQUNqQkMsTUFBTUgsdURBQUlBO0lBQ1ZDLFFBQVFBLGdEQUFNQTtBQUNoQjtBQUVBSCxtRUFBYUEsQ0FBQztJQUNaTSxhQUFhQywwQkFBOEM7SUFDM0RHLEtBQUs7UUFBQ1QsMkRBQVNBO0tBQUM7SUFDaEJHLFlBQVlBO0FBQ2Q7QUFFZSxTQUFTTyxrQkFBa0IsS0FBMkM7UUFBM0MsRUFBRUMsUUFBUSxFQUFpQyxHQUEzQztJQUN4QyxPQUFPQTtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3RvcnlibG9rUHJvdmlkZXIudHM/YWNjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgc3RvcnlibG9rSW5pdCwgYXBpUGx1Z2luLCBTYlJlYWN0Q29tcG9uZW50c01hcCB9IGZyb20gXCJAc3RvcnlibG9rL3JlYWN0L3JzY1wiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vcGFnZS5jb21wb25lbnRcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIHBhZ2U6IFBhZ2UsXG4gIGhlYWRlcjogaGVhZGVyLFxufTtcblxuc3RvcnlibG9rSW5pdCh7XG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVE9SWUJMT0tfQUNDRVNTX1RPS0VOLFxuICB1c2U6IFthcGlQbHVnaW5dLFxuICBjb21wb25lbnRzOiBjb21wb25lbnRzIGFzIFNiUmVhY3RDb21wb25lbnRzTWFwLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3J5Ymxva1Byb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIl0sIm5hbWVzIjpbInN0b3J5Ymxva0luaXQiLCJhcGlQbHVnaW4iLCJQYWdlIiwiaGVhZGVyIiwiY29tcG9uZW50cyIsInBhZ2UiLCJhY2Nlc3NUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVE9SWUJMT0tfQUNDRVNTX1RPS0VOIiwidXNlIiwiU3RvcnlibG9rUHJvdmlkZXIiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/StoryblokProvider.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
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
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});