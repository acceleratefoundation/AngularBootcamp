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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_dashboard_js__ = __webpack_require__(1);


class App {
  constructor() {
    document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'

    let content = document.getElementById('content')

    let dashboard = new __WEBPACK_IMPORTED_MODULE_0__containers_dashboard_js__["a" /* default */]()

    dashboard.getData().then((data) => {
      content.append(dashboard.getContent(data))
      dashboard.animate()
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = App;


let app = new App()
window.app = app



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);


class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from our api (express)
    let promise = new Promise((resolve, reject) => {

      const request = new XMLHttpRequest()

      request.onload = () => {
        // Request finished. Do processing here.
        let data = JSON.parse(request.responseText)
        console.log(data)
        resolve(data)
      }

      request.open("GET", 'http://localhost:3000/api/heroes')

      request.send()
    })

    return(promise)
  }

  getContent(data) {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = '#dddddd'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'left'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '24px'

    title.append('Jarvis Web Project')

    container.appendChild(title)

    data.forEach((item) => {
      let characterCard = new __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */](item)
      container.append(characterCard.getContent())
    })

    return container
  }

  animate() {
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Dashboard;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    // Create Card
    let card = document.createElement('div')
    card.classList.add('col-6')
    card.style.height = '400px'
    card.style.margin = '1%'
    card.style.cursor = 'pointer'
    card.style.boxShadow = '0px 0px 3px #888888'
    card.style.borderWidth = '2px'
    card.style.borderStyle = 'none'
    card.style.borderColor = 'gold'
    card.style.background  = 'rgba(0, 0, 0, 0.4)'
    card.style.borderRadius = '25px'
    
    // Create Card Header
    let cardHeader = document.createElement('div')
    cardHeader.style.height = '10%'

    // Create Card Title
    let cardTitle = document.createElement('div')
    cardTitle.append(this.options.name)

    cardTitle.style.color = '#dddddd'
    cardTitle.style.margin = 'auto'
    cardTitle.style.textAlign = 'center'
    cardTitle.style.fontWeight = 'bold'
    cardTitle.style.fontSize = '24px'
    cardTitle.style.width = '100%'
    cardHeader.append(cardTitle)

    card.append(cardHeader)

    // Create Card Body
    let cardBody = document.createElement('div')
    cardBody.style.height = '80%'
    cardBody.style.display = 'flex'
    cardBody.style.margin = 'auto'

    let cardImageContainer = document.createElement('div')
    cardImageContainer.style.flex = '.5'

    let cardImage = document.createElement('img')
    cardImage.src = this.options.image
    cardImage.style.width = '200px'
    cardImageContainer.append(cardImage)
    cardBody.append(cardImageContainer)

    // Create Card Description
    let cardDescription = document.createElement('div')
    cardDescription.style.flex = '1'
    cardDescription.append(this.options.description)

    cardDescription.style.color = '#dddddd'
    cardDescription.style.fontSize = '20px'
    cardBody.append(cardDescription)

    card.append(cardBody)

    // Create Card Footer
    let cardFooter = document.createElement('div')
    cardFooter.style.height = '10%'
    cardFooter.style.textAlign = 'center'

    let cardFooterLink = document.createElement('a')
    cardFooterLink.href = this.options.link
    cardFooterLink.append('Click for more info')
    cardFooterLink.style.color = '#dddddd'
    cardFooterLink.style.margin = 'auto'
    cardFooterLink.style.fontSize = '18px'

    cardFooter.append(cardFooterLink)

    card.append(cardFooter)

    return card
  } 
  
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;



/***/ })
/******/ ]);