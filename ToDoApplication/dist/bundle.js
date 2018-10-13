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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ul = document.getElementById('list');
var li = void 0;
var undoList = [];
var toDoList = [];
var redoList = [];
var addButton = document.getElementById('add');
addButton.addEventListener('click', addTodo);
document.addEventListener('keydown', function (event) {
    //ctrl-z
    if (event.code == "KeyZ" && event.ctrlKey) {
        alert("Hello");
        var popValue = undoList.pop();
        var str = popValue[0](popValue[1]);
        //redolist push
        if (str == "add") {
            redoList.push([toDO.removeItem, popValue[1]]);
        } else {
            redoList.push([toDO.addItem, popValue[1]]);
        }
        resetItem();
        toDoList.forEach(function (element) {

            displayToDo(element);
        });
    }
    //ctrl-y
    if (event.code == "KeyY" && event.ctrlKey) {
        event.preventDefault();
        var _popValue = redoList.pop();
        var _str = _popValue[0](_popValue[1]);
        //undolist push
        if (_str == "add") {
            undoList.push([toDO.removeItem, _popValue[1]]);
        } else {
            undoList.push([toDO.addItem, _popValue[1]]);
        }
        resetItem();
        toDoList.forEach(function (element) {

            displayToDo(element);
        });
    }
});
//remove button
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeTodo);

var TodoOperation = function () {
    function TodoOperation() {
        _classCallCheck(this, TodoOperation);
    }

    _createClass(TodoOperation, [{
        key: 'addItem',

        //add item in array
        value: function addItem(value) {

            var value1 = toDoList.push(value);

            return "add";
        }
        //remove item

    }, {
        key: 'removeItem',
        value: function removeItem(value) {
            console.log(value);

            toDoList = toDoList.filter(function (element) {
                return element !== value;
            });
            console.log(toDoList);
            return "remove";
        }
    }]);

    return TodoOperation;
}();

var toDO = new TodoOperation();

function addTodo() {

    var input = document.getElementById('input');
    var value = input.value;

    if (value === '') {
        var para = document.createElement('p');
        para.textContent = 'Please enter valid ToDo';
        para.style = "color:red";
        ul.insertBefore(para, ul.childNodes[0]);
    } else {
        toDO.addItem(value);
        resetItem();
        undoList.push([toDO.removeItem, value]);
        console.log(undoList);
        toDoList.forEach(function (element) {

            displayToDo(element);
        });
    }
    input.value = '';
    redoList = [];
}
//reset item
function resetItem() {
    var lt = ul.children;
    var input = document.createElement('input');
    input.setAttribute('id', 'input');
    for (var index = 0; index < lt.length; index++) {

        while (lt[index]) {
            ul.removeChild(lt[index]);
        }
    }
}
//remove
function removeTodo() {
    li = ul.children;

    for (var index = 0; index < li.length; index++) {

        while (li[index] && li[index].children[0].checked) {
            var value = li[index].children[1].innerHTML;

            toDO.removeItem(value);
            undoList.push([toDO.addItem, value]);
            console.log(undoList);
            ul.removeChild(li[index]);
        }
    }

    redoList = [];
}

function displayToDo(value) {

    var textnode = document.createTextNode(value);

    //Create New Li
    var li = document.createElement('li');
    li.setAttribute('class', 'mycheck');

    //Create input
    var inp = document.createElement('input');
    inp.type = 'checkbox';
    inp.setAttribute('id', 'check');

    //Create Label
    var label = document.createElement('label');
    label.appendChild(textnode);

    li.appendChild(inp);
    li.appendChild(label);

    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(function () {
        li.className = 'visual';
    }, 5);
}

/***/ })
/******/ ]);