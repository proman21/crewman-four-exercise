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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n\n\nfunction cli(args) {\n    var inputPath = args[0], outputPath = args[1];\n    var inputBuffer = fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"](inputPath, 'utf-8');\n    var input = JSON.parse(inputBuffer);\n    Object(_task__WEBPACK_IMPORTED_MODULE_1__[\"validateData\"])(input);\n    var tasksOutput = Object(_task__WEBPACK_IMPORTED_MODULE_1__[\"flatToHierarchical\"])(input);\n    var outputBuffer = JSON.stringify(tasksOutput, undefined, 2);\n    fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"](outputPath, outputBuffer);\n}\nvar args = process.argv;\nif (args.length != 4) {\n    console.error(\"Invalid number of arguments\");\n    process.exitCode = 1;\n}\nelse {\n    try {\n        cli(args.slice(2));\n    }\n    catch (error) {\n        console.error(error.message);\n        process.exitCode = 1;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC50cz83MWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IHZhbGlkYXRlRGF0YSwgZmxhdFRvSGllcmFyY2hpY2FsIH0gZnJvbSAnLi90YXNrJztcbmZ1bmN0aW9uIGNsaShhcmdzKSB7XG4gICAgdmFyIGlucHV0UGF0aCA9IGFyZ3NbMF0sIG91dHB1dFBhdGggPSBhcmdzWzFdO1xuICAgIHZhciBpbnB1dEJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhpbnB1dFBhdGgsICd1dGYtOCcpO1xuICAgIHZhciBpbnB1dCA9IEpTT04ucGFyc2UoaW5wdXRCdWZmZXIpO1xuICAgIHZhbGlkYXRlRGF0YShpbnB1dCk7XG4gICAgdmFyIHRhc2tzT3V0cHV0ID0gZmxhdFRvSGllcmFyY2hpY2FsKGlucHV0KTtcbiAgICB2YXIgb3V0cHV0QnVmZmVyID0gSlNPTi5zdHJpbmdpZnkodGFza3NPdXRwdXQsIHVuZGVmaW5lZCwgMik7XG4gICAgZnMud3JpdGVGaWxlU3luYyhvdXRwdXRQYXRoLCBvdXRwdXRCdWZmZXIpO1xufVxudmFyIGFyZ3MgPSBwcm9jZXNzLmFyZ3Y7XG5pZiAoYXJncy5sZW5ndGggIT0gNCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIG51bWJlciBvZiBhcmd1bWVudHNcIik7XG4gICAgcHJvY2Vzcy5leGl0Q29kZSA9IDE7XG59XG5lbHNlIHtcbiAgICB0cnkge1xuICAgICAgICBjbGkoYXJncy5zbGljZSgyKSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMTtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flatToHierarchical\", function() { return flatToHierarchical; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateData\", function() { return validateData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkTaskProps\", function() { return checkTaskProps; });\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);\n\n/**\n * Convert flat list of tasks to a hierarchical task list.\n * @param tasks Flat list of tasks to convert\n */\nfunction flatToHierarchical(tasks) {\n    var taskIndex = new Map();\n    /// Build an index of tasks.\n    tasks.forEach(function (taskData) {\n        var task = taskData;\n        Object(_errors__WEBPACK_IMPORTED_MODULE_0__[\"invariant\"])(!taskIndex.has(task.ID), new _errors__WEBPACK_IMPORTED_MODULE_0__[\"ConflictingId\"](task.ID));\n        taskIndex.set(task.ID, { task: task, subTasks: [] });\n    });\n    // Then build the task heirarchy\n    var tasksOutput = [];\n    taskIndex.forEach(function (value) {\n        if (value.task.nextID) {\n            Object(_errors__WEBPACK_IMPORTED_MODULE_0__[\"invariant\"])(taskIndex.has(value.task.nextID), new _errors__WEBPACK_IMPORTED_MODULE_0__[\"MissingTask\"](value.task.nextID));\n        }\n        if (value.task.previousID) {\n            Object(_errors__WEBPACK_IMPORTED_MODULE_0__[\"invariant\"])(taskIndex.has(value.task.previousID), new _errors__WEBPACK_IMPORTED_MODULE_0__[\"MissingTask\"](value.task.previousID));\n        }\n        var parentID = value.task.parentID;\n        if (parentID) {\n            var parent_1 = taskIndex.get(parentID);\n            if (parent_1) {\n                parent_1.subTasks.push(value);\n            }\n            else {\n                throw new _errors__WEBPACK_IMPORTED_MODULE_0__[\"MissingTask\"](parentID);\n            }\n        }\n        else {\n            tasksOutput.push(value);\n        }\n    });\n    return tasksOutput;\n}\n/**\n * Validate the task JSON data.\n * @param data JSON data to validate\n */\nfunction validateData(data) {\n    Object(_errors__WEBPACK_IMPORTED_MODULE_0__[\"invariant\"])(Array.isArray(data), new _errors__WEBPACK_IMPORTED_MODULE_0__[\"InvalidTaskJSON\"]());\n    data.forEach(function (taskData) {\n        checkTaskProps(taskData);\n    });\n}\nvar taskProps = [\"description\", \"ID\", \"nextID\", \"previousID\", \"parentID\"];\nvar taskPropTypes = {\n    ID: \"number\",\n    description: \"string\",\n    nextID: \"number\",\n    previousID: \"number\",\n    parentID: \"number\"\n};\nvar required = ['description', 'ID'];\n/**\n * Validate the structure and types of a possible task\n * @param task Potential task to check\n * @throws If the data is not a valid task\n */\nfunction checkTaskProps(task) {\n    var props = Object.entries(task).map(function (_a) {\n        var name = _a[0], value = _a[1];\n        return [name, typeof value];\n    });\n    var unexpected = props.filter(function (_a) {\n        var name = _a[0], _ty = _a[1];\n        return !taskProps.includes(name);\n    });\n    if (unexpected.length !== 0) {\n        throw new _errors__WEBPACK_IMPORTED_MODULE_0__[\"UnexpectedTaskProperty\"](unexpected[0]);\n    }\n    var missing = required.filter(function (name) { return !props.map(function (prop) { return prop[0]; }).includes(name); });\n    if (missing.length !== 0) {\n        throw new _errors__WEBPACK_IMPORTED_MODULE_0__[\"MissingRequiredProperty\"](missing[0]);\n    }\n    for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {\n        var prop = props_1[_i];\n        var name_1 = prop[0], ty = prop[1];\n        if (ty !== taskPropTypes[name_1]) {\n            throw new _errors__WEBPACK_IMPORTED_MODULE_0__[\"UnexpectedTaskProperty\"](prop);\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90YXNrLnRzP2U0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmxpY3RpbmdJZCwgaW52YXJpYW50LCBNaXNzaW5nVGFzaywgSW52YWxpZFRhc2tKU09OLCBVbmV4cGVjdGVkVGFza1Byb3BlcnR5LCBNaXNzaW5nUmVxdWlyZWRQcm9wZXJ0eSB9IGZyb20gXCIuL2Vycm9yc1wiO1xuLyoqXG4gKiBDb252ZXJ0IGZsYXQgbGlzdCBvZiB0YXNrcyB0byBhIGhpZXJhcmNoaWNhbCB0YXNrIGxpc3QuXG4gKiBAcGFyYW0gdGFza3MgRmxhdCBsaXN0IG9mIHRhc2tzIHRvIGNvbnZlcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXRUb0hpZXJhcmNoaWNhbCh0YXNrcykge1xuICAgIHZhciB0YXNrSW5kZXggPSBuZXcgTWFwKCk7XG4gICAgLy8vIEJ1aWxkIGFuIGluZGV4IG9mIHRhc2tzLlxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2tEYXRhKSB7XG4gICAgICAgIHZhciB0YXNrID0gdGFza0RhdGE7XG4gICAgICAgIGludmFyaWFudCghdGFza0luZGV4Lmhhcyh0YXNrLklEKSwgbmV3IENvbmZsaWN0aW5nSWQodGFzay5JRCkpO1xuICAgICAgICB0YXNrSW5kZXguc2V0KHRhc2suSUQsIHsgdGFzazogdGFzaywgc3ViVGFza3M6IFtdIH0pO1xuICAgIH0pO1xuICAgIC8vIFRoZW4gYnVpbGQgdGhlIHRhc2sgaGVpcmFyY2h5XG4gICAgdmFyIHRhc2tzT3V0cHV0ID0gW107XG4gICAgdGFza0luZGV4LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS50YXNrLm5leHRJRCkge1xuICAgICAgICAgICAgaW52YXJpYW50KHRhc2tJbmRleC5oYXModmFsdWUudGFzay5uZXh0SUQpLCBuZXcgTWlzc2luZ1Rhc2sodmFsdWUudGFzay5uZXh0SUQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUudGFzay5wcmV2aW91c0lEKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQodGFza0luZGV4Lmhhcyh2YWx1ZS50YXNrLnByZXZpb3VzSUQpLCBuZXcgTWlzc2luZ1Rhc2sodmFsdWUudGFzay5wcmV2aW91c0lEKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmVudElEID0gdmFsdWUudGFzay5wYXJlbnRJRDtcbiAgICAgICAgaWYgKHBhcmVudElEKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50XzEgPSB0YXNrSW5kZXguZ2V0KHBhcmVudElEKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRfMSkge1xuICAgICAgICAgICAgICAgIHBhcmVudF8xLnN1YlRhc2tzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdUYXNrKHBhcmVudElEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tzT3V0cHV0LnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhc2tzT3V0cHV0O1xufVxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgdGFzayBKU09OIGRhdGEuXG4gKiBAcGFyYW0gZGF0YSBKU09OIGRhdGEgdG8gdmFsaWRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRGF0YShkYXRhKSB7XG4gICAgaW52YXJpYW50KEFycmF5LmlzQXJyYXkoZGF0YSksIG5ldyBJbnZhbGlkVGFza0pTT04oKSk7XG4gICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrRGF0YSkge1xuICAgICAgICBjaGVja1Rhc2tQcm9wcyh0YXNrRGF0YSk7XG4gICAgfSk7XG59XG52YXIgdGFza1Byb3BzID0gW1wiZGVzY3JpcHRpb25cIiwgXCJJRFwiLCBcIm5leHRJRFwiLCBcInByZXZpb3VzSURcIiwgXCJwYXJlbnRJRFwiXTtcbnZhciB0YXNrUHJvcFR5cGVzID0ge1xuICAgIElEOiBcIm51bWJlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcInN0cmluZ1wiLFxuICAgIG5leHRJRDogXCJudW1iZXJcIixcbiAgICBwcmV2aW91c0lEOiBcIm51bWJlclwiLFxuICAgIHBhcmVudElEOiBcIm51bWJlclwiXG59O1xudmFyIHJlcXVpcmVkID0gWydkZXNjcmlwdGlvbicsICdJRCddO1xuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgc3RydWN0dXJlIGFuZCB0eXBlcyBvZiBhIHBvc3NpYmxlIHRhc2tcbiAqIEBwYXJhbSB0YXNrIFBvdGVudGlhbCB0YXNrIHRvIGNoZWNrXG4gKiBAdGhyb3dzIElmIHRoZSBkYXRhIGlzIG5vdCBhIHZhbGlkIHRhc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVGFza1Byb3BzKHRhc2spIHtcbiAgICB2YXIgcHJvcHMgPSBPYmplY3QuZW50cmllcyh0YXNrKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBuYW1lID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XG4gICAgICAgIHJldHVybiBbbmFtZSwgdHlwZW9mIHZhbHVlXTtcbiAgICB9KTtcbiAgICB2YXIgdW5leHBlY3RlZCA9IHByb3BzLmZpbHRlcihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfYVswXSwgX3R5ID0gX2FbMV07XG4gICAgICAgIHJldHVybiAhdGFza1Byb3BzLmluY2x1ZGVzKG5hbWUpO1xuICAgIH0pO1xuICAgIGlmICh1bmV4cGVjdGVkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgVW5leHBlY3RlZFRhc2tQcm9wZXJ0eSh1bmV4cGVjdGVkWzBdKTtcbiAgICB9XG4gICAgdmFyIG1pc3NpbmcgPSByZXF1aXJlZC5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHsgcmV0dXJuIHByb3BbMF07IH0pLmluY2x1ZGVzKG5hbWUpOyB9KTtcbiAgICBpZiAobWlzc2luZy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdSZXF1aXJlZFByb3BlcnR5KG1pc3NpbmdbMF0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBfaSA9IDAsIHByb3BzXzEgPSBwcm9wczsgX2kgPCBwcm9wc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzFbX2ldO1xuICAgICAgICB2YXIgbmFtZV8xID0gcHJvcFswXSwgdHkgPSBwcm9wWzFdO1xuICAgICAgICBpZiAodHkgIT09IHRhc2tQcm9wVHlwZXNbbmFtZV8xXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFVuZXhwZWN0ZWRUYXNrUHJvcGVydHkocHJvcCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invariant\", function() { return invariant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UnexpectedTaskProperty\", function() { return UnexpectedTaskProperty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MissingRequiredProperty\", function() { return MissingRequiredProperty; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InvalidTaskJSON\", function() { return InvalidTaskJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConflictingId\", function() { return ConflictingId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MissingTask\", function() { return MissingTask; });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nfunction invariant(condition, error) {\n    if (!condition) {\n        throw error;\n    }\n}\nvar UnexpectedTaskProperty = /** @class */ (function (_super) {\n    __extends(UnexpectedTaskProperty, _super);\n    function UnexpectedTaskProperty(prop) {\n        var _this = this;\n        var name = prop[0], ty = prop[1];\n        _this = _super.call(this, \"Task has invalid prop \" + name + \" with type \" + ty) || this;\n        return _this;\n    }\n    return UnexpectedTaskProperty;\n}(Error));\n\nvar MissingRequiredProperty = /** @class */ (function (_super) {\n    __extends(MissingRequiredProperty, _super);\n    function MissingRequiredProperty(prop) {\n        return _super.call(this, \"Task is missing required prop \" + prop) || this;\n    }\n    return MissingRequiredProperty;\n}(Error));\n\nvar InvalidTaskJSON = /** @class */ (function (_super) {\n    __extends(InvalidTaskJSON, _super);\n    function InvalidTaskJSON() {\n        return _super.call(this, \"Type at JSON path '/' is not an Array.\") || this;\n    }\n    return InvalidTaskJSON;\n}(Error));\n\nvar ConflictingId = /** @class */ (function (_super) {\n    __extends(ConflictingId, _super);\n    function ConflictingId(id) {\n        return _super.call(this, \"Task already exists with ID=\" + id) || this;\n    }\n    return ConflictingId;\n}(Error));\n\nvar MissingTask = /** @class */ (function (_super) {\n    __extends(MissingTask, _super);\n    function MissingTask(id) {\n        return _super.call(this, \"Task does not exist with ID=\" + id) || this;\n    }\n    return MissingTask;\n}(Error));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lcnJvcnMudHM/YjlhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmV4cG9ydCBmdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBlcnJvcikge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cbnZhciBVbmV4cGVjdGVkVGFza1Byb3BlcnR5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVbmV4cGVjdGVkVGFza1Byb3BlcnR5LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuZXhwZWN0ZWRUYXNrUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbmFtZSA9IHByb3BbMF0sIHR5ID0gcHJvcFsxXTtcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIlRhc2sgaGFzIGludmFsaWQgcHJvcCBcIiArIG5hbWUgKyBcIiB3aXRoIHR5cGUgXCIgKyB0eSkgfHwgdGhpcztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVW5leHBlY3RlZFRhc2tQcm9wZXJ0eTtcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IFVuZXhwZWN0ZWRUYXNrUHJvcGVydHkgfTtcbnZhciBNaXNzaW5nUmVxdWlyZWRQcm9wZXJ0eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWlzc2luZ1JlcXVpcmVkUHJvcGVydHksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWlzc2luZ1JlcXVpcmVkUHJvcGVydHkocHJvcCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJUYXNrIGlzIG1pc3NpbmcgcmVxdWlyZWQgcHJvcCBcIiArIHByb3ApIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBNaXNzaW5nUmVxdWlyZWRQcm9wZXJ0eTtcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IE1pc3NpbmdSZXF1aXJlZFByb3BlcnR5IH07XG52YXIgSW52YWxpZFRhc2tKU09OID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnZhbGlkVGFza0pTT04sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW52YWxpZFRhc2tKU09OKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgXCJUeXBlIGF0IEpTT04gcGF0aCAnLycgaXMgbm90IGFuIEFycmF5LlwiKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW52YWxpZFRhc2tKU09OO1xufShFcnJvcikpO1xuZXhwb3J0IHsgSW52YWxpZFRhc2tKU09OIH07XG52YXIgQ29uZmxpY3RpbmdJZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29uZmxpY3RpbmdJZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25mbGljdGluZ0lkKGlkKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIlRhc2sgYWxyZWFkeSBleGlzdHMgd2l0aCBJRD1cIiArIGlkKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQ29uZmxpY3RpbmdJZDtcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IENvbmZsaWN0aW5nSWQgfTtcbnZhciBNaXNzaW5nVGFzayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWlzc2luZ1Rhc2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWlzc2luZ1Rhc2soaWQpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIFwiVGFzayBkb2VzIG5vdCBleGlzdCB3aXRoIElEPVwiICsgaWQpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBNaXNzaW5nVGFzaztcbn0oRXJyb3IpKTtcbmV4cG9ydCB7IE1pc3NpbmdUYXNrIH07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);