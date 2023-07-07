/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/habit.js":
/*!****************************!*\
  !*** ./assets/js/habit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Habit = /*#__PURE__*/_createClass(function Habit(name, description) {\n  _classCallCheck(this, Habit);\n  this.name = name;\n}\n\n// Add any additional methods or properties as needed\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Habit);\n\n//# sourceURL=webpack://emprapp/./assets/js/habit.js?");

/***/ }),

/***/ "./assets/js/week.js":
/*!***************************!*\
  !*** ./assets/js/week.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _habit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./habit */ \"./assets/js/habit.js\");\n// const Habit = require('../../models/habit');\n\n_habit__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().then(function (habits) {\n  console.log('All habits:', habits);\n  // Perform other operations with the queried habits\n\n  // Code for generating the calendar\n  var startDate = new Date(); // Start from today\n  startDate.setDate(startDate.getDate() - startDate.getDay()); // Adjust to start from Sunday\n  var calendarHead = document.getElementById('calendar-head');\n  var calendarBody = document.getElementById('calendar-body');\n\n  // Function to generate the calendar head with dates\n  function generateCalendarHead() {\n    var row = document.createElement('tr');\n\n    // Loop through each day of the week\n    for (var i = 0; i < 7; i++) {\n      var cell = document.createElement('th');\n      var dateCell = new Date(startDate);\n      dateCell.setDate(startDate.getDate() + i);\n\n      // Format the date as desired (dd-mm-yyyy)\n      var formattedDate = (\"0\" + dateCell.getDate()).slice(-2) + \"-\" + (\"0\" + (dateCell.getMonth() + 1)).slice(-2) + \"-\" + dateCell.getFullYear();\n      cell.textContent = formattedDate;\n      row.appendChild(cell);\n    }\n    calendarHead.appendChild(row);\n  }\n\n  // Function to generate the calendar body with dummy text\n  // function generateCalendarBody() {\n  //   // Loop through each week\n  //   for (var i = 0; i < 7; i++) {\n  //     var row = document.createElement('tr');\n\n  //     // Loop through each day of the week\n  //     for (var j = 0; j < 7; j++) {\n  //       var cell = document.createElement('td');\n  //       cell.textContent = \"Dummy Text\"; // Replace with your desired content\n  //       row.appendChild(cell);\n  //     }\n\n  //     calendarBody.appendChild(row);\n  //     startDate.setDate(startDate.getDate() + 7);\n  //   }\n  // }\n  function generateCalendarBody() {\n    // Loop through each week\n    for (var i = 0; i < 7; i++) {\n      var row = document.createElement('tr');\n\n      // Loop through each day of the week\n      for (var j = 0; j < 7; j++) {\n        var cell = document.createElement('td');\n\n        // Get the corresponding habit for the current day (assuming habits is an array of habit objects)\n        var habit = habits.find(function (habit) {\n          // Adjust the condition based on your date comparison logic\n          var habitDate = new Date(habit.sdate);\n          var currentDate = new Date(startDate);\n          currentDate.setDate(startDate.getDate() + j + i * 7);\n          return habitDate.toDateString() === currentDate.toDateString();\n        });\n        if (habit) {\n          cell.textContent = habit.name;\n        } else {\n          cell.textContent = ''; // Set empty if no habit for the day\n        }\n\n        row.appendChild(cell);\n      }\n      calendarBody.appendChild(row);\n      startDate.setDate(startDate.getDate() + 7);\n    }\n  }\n\n  // Function to go to the previous week\n  function goToPreviousWeek() {\n    startDate.setDate(startDate.getDate() - 7);\n    generateCalendarHead();\n    generateCalendarBody();\n  }\n\n  // Function to go to the next week\n  function goToNextWeek() {\n    startDate.setDate(startDate.getDate() + 7);\n    generateNewPage(startDate);\n  }\n\n  // Function to generate a new HTML page with the next week's calendar\n  function generateNewPage(startDate) {\n    var formattedStartDate = (\"0\" + startDate.getDate()).slice(-2) + \"-\" + (\"0\" + (startDate.getMonth() + 1)).slice(-2) + \"-\" + startDate.getFullYear();\n    var nextPageUrl = window.location.href.split(\"?\")[0] + \"?start=\" + formattedStartDate;\n    window.location.href = nextPageUrl;\n  }\n\n  // Attach event listeners to the buttons\n  document.getElementById(\"prev-week-btn\").addEventListener(\"click\", goToPreviousWeek);\n  document.getElementById(\"next-week-btn\").addEventListener(\"click\", goToNextWeek);\n\n  // Check if a specific start date is provided in the URL query string\n  var urlParams = new URLSearchParams(window.location.search);\n  var startParam = urlParams.get(\"start\");\n  if (startParam) {\n    var startDateParam = new Date(startParam);\n    if (!isNaN(startDateParam.getTime())) {\n      startDate = startDateParam;\n    }\n  }\n\n  // Generate the initial calendar view\n  generateCalendarHead();\n  generateCalendarBody();\n})[\"catch\"](function (error) {\n  console.error('Error querying habits:', error);\n});\n\n//# sourceURL=webpack://emprapp/./assets/js/week.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/week.js");
/******/ 	
/******/ })()
;