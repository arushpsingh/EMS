"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/signup/route";
exports.ids = ["app/api/signup/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Farush%2Fdata%2FRMS-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farush%2Fdata%2FRMS-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Farush%2Fdata%2FRMS-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farush%2Fdata%2FRMS-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_arush_data_RMS_main_src_app_api_signup_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/signup/route.js */ \"(rsc)/./src/app/api/signup/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/signup/route\",\n        pathname: \"/api/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/signup/route\"\n    },\n    resolvedPagePath: \"/home/arush/data/RMS-main/src/app/api/signup/route.js\",\n    nextConfigOutput,\n    userland: _home_arush_data_RMS_main_src_app_api_signup_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzaWdudXAlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNpZ251cCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNpZ251cCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGYXJ1c2glMkZkYXRhJTJGUk1TLW1haW4lMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZhcnVzaCUyRmRhdGElMkZSTVMtbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNLO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm1zLz9iMWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2FydXNoL2RhdGEvUk1TLW1haW4vc3JjL2FwcC9hcGkvc2lnbnVwL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zaWdudXAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zaWdudXBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NpZ251cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2FydXNoL2RhdGEvUk1TLW1haW4vc3JjL2FwcC9hcGkvc2lnbnVwL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NpZ251cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Farush%2Fdata%2FRMS-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farush%2Fdata%2FRMS-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/signup/route.js":
/*!*************************************!*\
  !*** ./src/app/api/signup/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _helper_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helper/db */ \"(rsc)/./src/helper/db.js\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n(0,_helper_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\nasync function GET() {\n    let users = [];\n    try {\n        users = await _model_User__WEBPACK_IMPORTED_MODULE_1__.User.find().select(\"-password\");\n    } catch (error) {\n        console.log(error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            message: \"Failed to get user\",\n            success: false\n        });\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n        status: 200,\n        statusText: \"Success\",\n        data: users\n    });\n}\nasync function POST(request) {\n    // const payload = await request.body();\n    // const data = JSON.parse(payload);\n    const payload = await request.json();\n    let data = new _model_User__WEBPACK_IMPORTED_MODULE_1__.User(payload);\n    try {\n        data.password = bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hashSync(data.password, 10);\n        const createUser = await data.save();\n        const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            status: 201,\n            statusText: \"User added successfully\",\n            data: createUser\n        });\n        return response;\n    } catch (error) {\n        console.log(\"Failed to add user:\", error);\n        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {\n            // MongoDB duplicate key error (11000) for the unique email field\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                status: false,\n                statusText: \"Bad Request\",\n                message: \"Email already exists. Please use a different email.\"\n            }, {\n                status: 409\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            message: \"Failed to add user\",\n            status: false\n        }, {\n            status: 400\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zaWdudXAvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNKO0FBQ087QUFDZjtBQUU1QkEscURBQVNBO0FBRUYsZUFBZUk7SUFDcEIsSUFBSUMsUUFBUSxFQUFFO0lBQ2QsSUFBSTtRQUNGQSxRQUFRLE1BQU1KLDZDQUFJQSxDQUFDSyxJQUFJLEdBQUdDLE1BQU0sQ0FBQztJQUNuQyxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9OLGtGQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFDdkJDLFNBQVM7WUFDVEMsU0FBUztRQUNYO0lBQ0Y7SUFDQSxPQUFPWCxrRkFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1FBQ3ZCRyxRQUFRO1FBQ1JDLFlBQVk7UUFDWkMsTUFBTVg7SUFDUjtBQUNGO0FBRU8sZUFBZVksS0FBS0MsT0FBTztJQUNoQyx3Q0FBd0M7SUFDeEMsb0NBQW9DO0lBQ3BDLE1BQU1DLFVBQVUsTUFBTUQsUUFBUVAsSUFBSTtJQUNsQyxJQUFJSyxPQUFPLElBQUlmLDZDQUFJQSxDQUFDa0I7SUFDcEIsSUFBSTtRQUNGSCxLQUFLSSxRQUFRLEdBQUdqQixzREFBZSxDQUM3QmEsS0FBS0ksUUFBUSxFQUFDO1FBR2hCLE1BQU1FLGFBQWEsTUFBTU4sS0FBS08sSUFBSTtRQUNsQyxNQUFNQyxXQUFXdEIsa0ZBQVlBLENBQUNTLElBQUksQ0FBQztZQUNqQ0csUUFBUTtZQUNSQyxZQUFZO1lBQ1pDLE1BQU1NO1FBQ1I7UUFDQSxPQUFPRTtJQUNULEVBQUUsT0FBT2hCLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkY7UUFDbkMsSUFBSUEsTUFBTWlCLElBQUksS0FBSyxTQUFTakIsTUFBTWtCLFVBQVUsSUFBSWxCLE1BQU1rQixVQUFVLENBQUNDLEtBQUssRUFBRTtZQUN0RSxpRUFBaUU7WUFDakUsT0FBT3pCLGtGQUFZQSxDQUFDUyxJQUFJLENBQ3RCO2dCQUNFRyxRQUFRO2dCQUNSQyxZQUFZO2dCQUNaSCxTQUFTO1lBQ1gsR0FDQTtnQkFBRUUsUUFBUTtZQUFJO1FBRWxCO1FBQ0EsT0FBT1osa0ZBQVlBLENBQUNTLElBQUksQ0FDdEI7WUFDRUMsU0FBUztZQUNURSxRQUFRO1FBQ1YsR0FDQTtZQUFFQSxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jtcy8uL3NyYy9hcHAvYXBpL3NpZ251cC9yb3V0ZS5qcz84MDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gJ0AvaGVscGVyL2RiJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAL21vZGVsL1VzZXInO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuXG5jb25uZWN0REIoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgbGV0IHVzZXJzID0gW107XG4gIHRyeSB7XG4gICAgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoKS5zZWxlY3QoJy1wYXNzd29yZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgbWVzc2FnZTogJ0ZhaWxlZCB0byBnZXQgdXNlcicsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgIHN0YXR1czogMjAwLFxuICAgIHN0YXR1c1RleHQ6ICdTdWNjZXNzJyxcbiAgICBkYXRhOiB1c2VycyxcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcbiAgLy8gY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlcXVlc3QuYm9keSgpO1xuICAvLyBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShwYXlsb2FkKTtcbiAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICBsZXQgZGF0YSA9IG5ldyBVc2VyKHBheWxvYWQpO1xuICB0cnkge1xuICAgIGRhdGEucGFzc3dvcmQgPSBiY3J5cHQuaGFzaFN5bmMoXG4gICAgICBkYXRhLnBhc3N3b3JkLDEwXG4gICAgKTtcblxuICAgIGNvbnN0IGNyZWF0ZVVzZXIgPSBhd2FpdCBkYXRhLnNhdmUoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgIHN0YXR1czogMjAxLFxuICAgICAgc3RhdHVzVGV4dDogJ1VzZXIgYWRkZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGRhdGE6IGNyZWF0ZVVzZXIsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gYWRkIHVzZXI6JywgZXJyb3IpO1xuICAgIGlmIChlcnJvci5jb2RlID09PSAxMTAwMCAmJiBlcnJvci5rZXlQYXR0ZXJuICYmIGVycm9yLmtleVBhdHRlcm4uZW1haWwpIHtcbiAgICAgIC8vIE1vbmdvREIgZHVwbGljYXRlIGtleSBlcnJvciAoMTEwMDApIGZvciB0aGUgdW5pcXVlIGVtYWlsIGZpZWxkXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0dXM6IGZhbHNlLFxuICAgICAgICAgIHN0YXR1c1RleHQ6ICdCYWQgUmVxdWVzdCcsXG4gICAgICAgICAgbWVzc2FnZTogJ0VtYWlsIGFscmVhZHkgZXhpc3RzLiBQbGVhc2UgdXNlIGEgZGlmZmVyZW50IGVtYWlsLicsXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDkgfVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiAnRmFpbGVkIHRvIGFkZCB1c2VyJyxcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNDAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiVXNlciIsIk5leHRSZXNwb25zZSIsImJjcnlwdCIsIkdFVCIsInVzZXJzIiwiZmluZCIsInNlbGVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJtZXNzYWdlIiwic3VjY2VzcyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiUE9TVCIsInJlcXVlc3QiLCJwYXlsb2FkIiwicGFzc3dvcmQiLCJoYXNoU3luYyIsImNyZWF0ZVVzZXIiLCJzYXZlIiwicmVzcG9uc2UiLCJjb2RlIiwia2V5UGF0dGVybiIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/signup/route.js\n");

/***/ }),

/***/ "(rsc)/./src/helper/db.js":
/*!**************************!*\
  !*** ./src/helper/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { MONGO_URI } = process.env;\nconst connectDB = async ()=>{\n    try {\n        const connection = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI);\n        console.log(\"Db connected\");\n    } catch (error) {\n        console.log(\"Failed to connect\", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVyL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNLEVBQUNDLFNBQVMsRUFBQyxHQUFHQyxRQUFRQyxHQUFHO0FBRXhCLE1BQU1DLFlBQVk7SUFDckIsSUFBRztRQUNDLE1BQU1DLGFBQWEsTUFBTUwsdURBQWdCLENBQUNDO1FBQzFDTSxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBQyxPQUFNQyxPQUFNO1FBQ1RGLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJDO0lBQ3JDO0FBQ0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jtcy8uL3NyYy9oZWxwZXIvZGIuanM/ODdjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHtNT05HT19VUkl9ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBjb25zdCBjb25uZWN0REIgPSBhc3luYygpID0+e1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkRiIGNvbm5lY3RlZFwiKTtcbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjb25uZWN0XCIsIGVycm9yKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJJIiwicHJvY2VzcyIsImVudiIsImNvbm5lY3REQiIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/helper/db.js\n");

/***/ }),

/***/ "(rsc)/./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\nconst { Schema, default: mongoose } = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst UserSchema = new Schema({\n    firstname: {\n        type: String,\n        required: [\n            true,\n            \"First name is required\"\n        ]\n    },\n    lastname: {\n        type: String,\n        required: [\n            true,\n            \"Last name is required\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email id is required\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    }\n});\n//TestResource\nconst User = mongoose.models.Users || mongoose.model(\"Users\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxFQUFFQSxNQUFNLEVBQUVDLFNBQVNDLFFBQVEsRUFBRSxHQUFHQyxtQkFBT0EsQ0FBQywwQkFBVTtBQUV4RCxNQUFNQyxhQUFhLElBQUlKLE9BQU87SUFDMUJLLFdBQVc7UUFDUEMsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBeUI7SUFDOUM7SUFDQUMsVUFBVTtRQUNOSCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF3QjtJQUM3QztJQUNBRSxPQUFPO1FBQ0hKLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO1FBQ3hDRyxRQUFRO0lBQ1o7SUFDQUMsVUFBUztRQUNMTixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtJQUM1QztBQUNKO0FBQ0EsY0FBYztBQUNQLE1BQU1LLE9BQU9YLFNBQVNZLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJYixTQUFTYyxLQUFLLENBQUMsU0FBU1osWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jtcy8uL3NyYy9tb2RlbC9Vc2VyLmpzPzJkM2YiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBTY2hlbWEsIGRlZmF1bHQ6IG1vbmdvb3NlIH0gPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBmaXJzdG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiRmlyc3QgbmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICB9LFxuICAgIGxhc3RuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkxhc3QgbmFtZSBpcyByZXF1aXJlZFwiXSxcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIkVtYWlsIGlkIGlzIHJlcXVpcmVkXCJdLFxuICAgICAgICB1bmlxdWU6IHRydWVcbiAgICB9LFxuICAgIHBhc3N3b3JkOntcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGFzc3dvcmQgaXMgcmVxdWlyZWRcIl0sXG4gICAgfVxufSlcbi8vVGVzdFJlc291cmNlXG5leHBvcnQgY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VycyB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJzXCIsIFVzZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJkZWZhdWx0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwiVXNlclNjaGVtYSIsImZpcnN0bmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3RuYW1lIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIlVzZXIiLCJtb2RlbHMiLCJVc2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsignup%2Froute&page=%2Fapi%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsignup%2Froute.js&appDir=%2Fhome%2Farush%2Fdata%2FRMS-main%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Farush%2Fdata%2FRMS-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();