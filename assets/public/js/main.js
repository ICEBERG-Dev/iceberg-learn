/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("let themesBtn = document.getElementById(\"themes\");\r\nlet body = document.querySelector(\"body\");\r\nlet images = document.querySelectorAll('img');\r\nlet sources = document.querySelectorAll('source');\r\n// console.log(body.classList.contains('dark'))\r\n// console.log('exit-dark'.split('-dark').join(''))\r\nfunction imageChanger (item, change, type) {\r\n    if (item.length > 1) {\r\n            item.forEach(e => {\r\n                // console.log(e.getAttribute(type).split('/')[1].split('.')[0])\r\n                let olo = 'img/' + e.getAttribute(type).split('/')[1].split('.')[0];\r\n                if (olo.includes('-dark')) {\r\n                    e.setAttribute(type,olo.split('-dark').join('') + '.svg');\r\n                } else {\r\n                    e.setAttribute(type,olo + change);\r\n                }\r\n            })\r\n    } else {\r\n        console.log('nice')\r\n    }\r\n}\r\n\r\nthemesBtn.addEventListener('click', () => {\r\n    imageChanger(images, '-dark.svg', 'src');\r\n    imageChanger(sources, '-dark.svg', 'srcset');\r\n    body.classList.toggle('dark');\r\n})\r\n\r\nlet taskBtn = document.querySelector('.back-icon');\r\nlet taskList = document.querySelectorAll(\".main-nav-item\");\r\nlet navIcons = document.querySelectorAll(\".nav-icon\");\r\nlet whiteSolids = document.querySelectorAll('.white-solid');\r\nlet container = document.querySelector('.main .container');\r\n\r\ntaskBtn.addEventListener('click', () => {\r\n    for (let i = 0; i < navIcons.length; i++) {\r\n        if (container.classList.contains('container_active') === false && navIcons[i].classList.contains('nav-icon_active') === false) {\r\n            taskList[i].style.display = 'none';\r\n            whiteSolids.forEach(item => {\r\n                item.style.display = 'none';\r\n            })\r\n        } else if (container.classList.contains('container_active') === true) {\r\n            taskList[i].style.display = 'block';\r\n            whiteSolids.forEach(item => {\r\n                item.style.display = 'block';\r\n            })\r\n        }\r\n    }\r\n    container.classList.toggle('container_active');\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://mygulp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;