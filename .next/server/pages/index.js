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

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/leonardo_barbosa/Library/Mobile Documents/com~apple~CloudDocs/Leonardo Barbosa/Programas/Marcos/Teste Git/Teste/components/Input.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Input = props => {\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], _extends({\n    height: \"50px\",\n    backgroundColor: \"gray.800\",\n    focusBorderColor: \"blue.500\",\n    borderRadius: \"sm\"\n  }, props, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0lucHV0LnRzeD9hNDZkIl0sIm5hbWVzIjpbIklucHV0IiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLEtBQWlDLEdBQUlDLEtBQUQsSUFBVztBQUNuRCxTQUNFLE1BQUMscURBQUQ7QUFDRSxVQUFNLEVBQUMsTUFEVDtBQUVFLG1CQUFlLEVBQUMsVUFGbEI7QUFHRSxvQkFBZ0IsRUFBQyxVQUhuQjtBQUlFLGdCQUFZLEVBQUM7QUFKZixLQUtNQSxLQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQVNELENBVkQ7O0FBWWVELG9FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9JbnB1dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5wdXQgYXMgQ2hha3JhSW5wdXQsIElucHV0UHJvcHMgYXMgQ2hha3JhSW5wdXRQcm9wcyB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcblxuY29uc3QgSW5wdXQ6IFJlYWN0LkZDPENoYWtyYUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENoYWtyYUlucHV0XG4gICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgIGJhY2tncm91bmRDb2xvcj1cImdyYXkuODAwXCJcbiAgICAgIGZvY3VzQm9yZGVyQ29sb3I9XCJibHVlLjUwMFwiXG4gICAgICBib3JkZXJSYWRpdXM9XCJzbVwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ \"@chakra-ui/core\");\n/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.tsx\");\nvar _jsxFileName = \"/Users/leonardo_barbosa/Library/Mobile Documents/com~apple~CloudDocs/Leonardo Barbosa/Programas/Marcos/Teste Git/Teste/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home() {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  function handleSignUpToNewsletter(event) {\n    /*\n    event.preventDefault();\n     axios.post('/api/subscribe', { email });\n    */\n    //window.confirm(email.toUpperCase()[0]);\n    if (email.length == 0) {\n      window.alert(\"Insira seu primeiro nome\");\n      return;\n    }\n\n    var date = new Date();\n    var dia = date.getDay();\n    var seconds = date.getSeconds() + date.getMinutes() * 60 + date.getHours() * 60 * 60;\n    var id = email.toUpperCase()[0] + dia + seconds;\n    window.alert(`Seu ID é ${id}`);\n  }\n\n  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    as: \"main\",\n    height: \"100vh\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    as: \"form\",\n    onSubmit: handleSignUpToNewsletter,\n    backgroundColor: \"gray.700\",\n    borderRadius: \"md\",\n    flexDir: \"column\",\n    alignItems: \"stretch\",\n    padding: 8,\n    marginTop: 4,\n    width: \"100%\",\n    maxW: \"400px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n    marginBottom: 8,\n    src: \"/creatus.svg\",\n    alt: \"Rocketseat\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    textAlign: \"center\",\n    fontSize: \"sm\",\n    color: \"gray.400\",\n    marginBottom: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Finalize seu cadastro e fa\\xE7a parte dessa turma !\"), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    placeholder: \"Seu primeiro nome\",\n    marginTop: 2,\n    value: email,\n    onChange: e => setEmail(e.target.value),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"submit\",\n    backgroundColor: \"blue.500\",\n    height: \"50px\",\n    borderRadius: \"sm\",\n    marginTop: 6 //_hover={{ backgroundColor: 'purple.600' }}\n    ,\n    _hover: {\n      backgroundColor: 'blue.600'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"GERAR\")));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwiaGFuZGxlU2lnblVwVG9OZXdzbGV0dGVyIiwiZXZlbnQiLCJsZW5ndGgiLCJ3aW5kb3ciLCJhbGVydCIsImRhdGUiLCJEYXRlIiwiZGlhIiwiZ2V0RGF5Iiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJnZXRNaW51dGVzIiwiZ2V0SG91cnMiLCJpZCIsInRvVXBwZXJDYXNlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFFQSxXQUFTQyx3QkFBVCxDQUFrQ0MsS0FBbEMsRUFBb0Q7QUFDbEQ7Ozs7QUFLRDtBQUNDLFFBQUdKLEtBQUssQ0FBQ0ssTUFBTixJQUFnQixDQUFuQixFQUNBO0FBQ0VDLFlBQU0sQ0FBQ0MsS0FBUCxDQUFhLDBCQUFiO0FBQ0E7QUFDRDs7QUFDRixRQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixFQUFYO0FBQ0EsUUFBSUMsR0FBRyxHQUFHRixJQUFJLENBQUNHLE1BQUwsRUFBVjtBQUNBLFFBQUlDLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxVQUFMLEtBQXFCTCxJQUFJLENBQUNNLFVBQUwsS0FBa0IsRUFBdkMsR0FBOENOLElBQUksQ0FBQ08sUUFBTCxLQUFnQixFQUFoQixHQUFtQixFQUEvRTtBQUVBLFFBQUlDLEVBQUUsR0FBR2hCLEtBQUssQ0FBQ2lCLFdBQU4sR0FBb0IsQ0FBcEIsSUFBeUJQLEdBQXpCLEdBQStCRSxPQUF4QztBQUVBTixVQUFNLENBQUNDLEtBQVAsQ0FBYyxZQUFXUyxFQUFHLEVBQTVCO0FBQ0E7O0FBRUQsU0FDRSxNQUFDLG9EQUFEO0FBQ0UsTUFBRSxFQUFDLE1BREw7QUFFRSxVQUFNLEVBQUMsT0FGVDtBQUdFLGtCQUFjLEVBQUMsUUFIakI7QUFJRSxjQUFVLEVBQUMsUUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxvREFBRDtBQUNFLE1BQUUsRUFBQyxNQURMO0FBRUUsWUFBUSxFQUFFYix3QkFGWjtBQUdFLG1CQUFlLEVBQUMsVUFIbEI7QUFJRSxnQkFBWSxFQUFDLElBSmY7QUFLRSxXQUFPLEVBQUMsUUFMVjtBQU1FLGNBQVUsRUFBQyxTQU5iO0FBT0UsV0FBTyxFQUFFLENBUFg7QUFRRSxhQUFTLEVBQUUsQ0FSYjtBQVNFLFNBQUssRUFBQyxNQVRSO0FBVUUsUUFBSSxFQUFDLE9BVlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVlFLE1BQUMscURBQUQ7QUFBTyxnQkFBWSxFQUFFLENBQXJCO0FBQXdCLE9BQUcsRUFBQyxjQUE1QjtBQUEyQyxPQUFHLEVBQUMsWUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBY0UsTUFBQyxvREFBRDtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUF5QixZQUFRLEVBQUMsSUFBbEM7QUFBdUMsU0FBSyxFQUFDLFVBQTdDO0FBQXdELGdCQUFZLEVBQUUsQ0FBdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFkRixFQWtCRSxNQUFDLHlEQUFEO0FBQ0UsZUFBVyxFQUFDLG1CQURkO0FBRUUsYUFBUyxFQUFFLENBRmI7QUFHRSxTQUFLLEVBQUVILEtBSFQ7QUFJRSxZQUFRLEVBQUVrQixDQUFDLElBQUlqQixRQUFRLENBQUNpQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbEJGLEVBeUJFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFlLEVBQUMsVUFGbEI7QUFHRSxVQUFNLEVBQUMsTUFIVDtBQUlFLGdCQUFZLEVBQUMsSUFKZjtBQUtFLGFBQVMsRUFBRSxDQUxiLENBTUU7QUFORjtBQU9FLFVBQU0sRUFBRTtBQUFFQyxxQkFBZSxFQUFFO0FBQW5CLEtBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpCRixDQU5GLENBREY7QUE4Q0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmxleCwgSW1hZ2UsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2lnblVwVG9OZXdzbGV0dGVyKGV2ZW50OiBGb3JtRXZlbnQpIHtcbiAgICAvKlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5wb3N0KCcvYXBpL3N1YnNjcmliZScsIHsgZW1haWwgfSk7XG4gICAgKi9cbiAgIC8vd2luZG93LmNvbmZpcm0oZW1haWwudG9VcHBlckNhc2UoKVswXSk7XG4gICAgaWYoZW1haWwubGVuZ3RoID09IDApXG4gICAge1xuICAgICAgd2luZG93LmFsZXJ0KFwiSW5zaXJhIHNldSBwcmltZWlybyBub21lXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgIHZhciBkaWEgPSBkYXRlLmdldERheSgpO1xuICAgdmFyIHNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKSArIChkYXRlLmdldE1pbnV0ZXMoKSo2MCkgKyAoZGF0ZS5nZXRIb3VycygpKjYwKjYwKTtcblxuICAgdmFyIGlkID0gZW1haWwudG9VcHBlckNhc2UoKVswXSArIGRpYSArIHNlY29uZHM7XG5cbiAgIHdpbmRvdy5hbGVydChgU2V1IElEIMOpICR7aWR9YCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBhcz1cIm1haW5cIlxuICAgICAgaGVpZ2h0PVwiMTAwdmhcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgPlxuICAgICAgPEZsZXhcbiAgICAgICAgYXM9XCJmb3JtXCJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVNpZ25VcFRvTmV3c2xldHRlcn1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiZ3JheS43MDBcIlxuICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXG4gICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwic3RyZXRjaFwiXG4gICAgICAgIHBhZGRpbmc9ezh9XG4gICAgICAgIG1hcmdpblRvcD17NH1cbiAgICAgICAgd2lkdGg9XCIxMDAlXCIgXG4gICAgICAgIG1heFc9XCI0MDBweFwiXG4gICAgICA+XG4gICAgICAgIDxJbWFnZSBtYXJnaW5Cb3R0b209ezh9IHNyYz1cIi9jcmVhdHVzLnN2Z1wiIGFsdD1cIlJvY2tldHNlYXRcIiAvPlxuXG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXkuNDAwXCIgbWFyZ2luQm90dG9tPXsyfT5cbiAgICAgICAgICBGaW5hbGl6ZSBzZXUgY2FkYXN0cm8gZSBmYcOnYSBwYXJ0ZSBkZXNzYSB0dXJtYSAhXG4gICAgICAgIDwvVGV4dD5cblxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBwcmltZWlybyBub21lXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezJ9XG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwiYmx1ZS41MDBcIlxuICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cInNtXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezZ9XG4gICAgICAgICAgLy9faG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiAncHVycGxlLjYwMCcgfX1cbiAgICAgICAgICBfaG92ZXI9e3sgYmFja2dyb3VuZENvbG9yOiAnYmx1ZS42MDAnIH19XG4gICAgICAgID5cbiAgICAgICAgICBHRVJBUlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L0ZsZXg+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2NvcmVcIj9lZTg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjaGFrcmEtdWkvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/core\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });