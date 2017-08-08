/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var EmployeeView = __webpack_require__(2);




var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest() ;
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}


var requestComplete = function() {
  if(this.status !== 200) return;
  var employeeString = this.responseText;
  var employees = JSON.parse(employeeString);
  var employeeView = new EmployeeView(employees); // EmployeeView is a function from employeeView.js
}

// this function will be activated on event load, it's setted with an url and a function that makes a request for 'url', and that activates the function requestComplete
var app = function(){
  var url = "http://localhost:3000/employees"; // we're accessing our own api, otherwise we could have other webaddress here
  makeRequest(url, requestComplete);
}


window.addEventListener('load', app);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var EmployeeView = function(employees){
  this.render(employees);
}

EmployeeView.prototype = {
  render: function(employees){
    
    console.log(employees);
    employees.forEach( function(employee){
      var li = document.createElement('li');
      var text = document.createElement('p');
      var ul = document.getElementById('employees');
      text.innerText = employee.name + ": " + '"' + employee.department + '"'; // name and department defined in index.html
      li.appendChild(text);
      ul.appendChild(li);
    })
  }
}

 module.exports = EmployeeView;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map