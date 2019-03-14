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
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/hoc.js":
/*!****************************!*\
  !*** ./application/hoc.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/*\n\n  Higher Order Functions\n  function is a values\n\n*/\nlet hofDemo = () => {\n\n  // let multiply = x => x * x;\n  // let nine = multiply(3);\n  // console.log( 'multiply:', nine );\n\n  /*\n\n    Array.filter (так же как map, forEach, etc...) пример использования HOF в нативном js\n    Паттерн позворялет использовать композцицию что бы собрать из маленьких функций одну большую\n\n  */\n\n  // let zoo = [\n  //   {id:0, name:\"WoofMaker\", species: 'dog'},\n  //   {id:1, name:\"WhiteFurr\", species: 'rabbit'},\n  //   {id:2, name:\"MeowMaker\", species: 'cat'},\n  //   {id:3, name:\"PoopMaker\", species: 'dog'},\n  //   {id:4, name:\"ScratchMaker\", species: 'cat'},\n  // ];\n\n  // let isDog = animal => animal.species === 'dog';\n  // let isCat = animal => animal.species === 'cat';\n  // //\n  // let dogs = zoo.filter( isDog );\n  // let cats = zoo.filter( isCat );\n  // //\n  // console.log('Here dogs:', dogs);\n  // console.log('Here cats:', cats);\n\n  // // - - - - - - - - - - - - - - - - - -\n\n  // function compose(func_a, func_b){\n  //   return function(c){\n  //     return func_a( func_b(c) );\n  //   }\n  // }\n\n  // const addTwo = value => {\n  //   console.log('Add', value);\n  //   return value + 2\n  // }\n  // const multiplyTwo = value => {\n  //   console.log('Mulitple', value);\n  //   return value * 2;\n  // }\n\n  // const addTwoAndMultiplayTwo = compose( multiplyTwo, addTwo );\n\n  // console.log( addTwoAndMultiplayTwo );\n  // console.log( addTwoAndMultiplayTwo( 10 ) );\n\n  /*\n    В данном случае происходит следующее:\n    - Вызывается ф-я compose которая принимает ф-и addTwo, multiplyTwo как аргументы\n    - Вызывается функция которая передана как аргумент func_b\n    - Результат её выполнения передается в функция func_a\n    - Общий результат возвращается в ф-ю которая нам возвращается в переменную\n  */\n\n  // console.log(\n  //   addTwoAndMultiplayTwo(2),\n  //   addTwoAndMultiplayTwo(6),\n  //   addTwoAndMultiplayTwo(40)\n  // );\n\n\n\n\n\n  class Item {\n    constructor(id){\n      this.id = id;\n\n      this.clickHandler = this.clickHandler.bind(this);\n    }\n\n    clickHandler(param){\n      return function(e){\n        console.log('event', e, 'param', param, this );\n      }\n    }\n\n    clickHandler2(e){\n      let id = Number( e.target.closest('.item').dataset.id );\n      console.log('id from dom', id );\n    }\n\n    render(){\n      const item = document.getElementById('class-item');\n      let node = document.createElement('div');\n          node.innerHTML = `\n            <div class=\"item\" data-id=\"${this.id}\">\n                <h2>${this.id}</h2>\n                <button class=\"_btn\"> Like </button>\n            </div>\n          `;  \n\n          // node.querySelector('._btn').addEventListener('click', this.clickHandler( this.id ) );\n          node.querySelector('._btn').addEventListener('click', this.clickHandler2 );\n\n          item.appendChild(node);  \n    }\n  }\n\n  let firstItem = new Item(1);\n  firstItem.render();\n\n  let secondItem = new Item(2);\n  secondItem.render();\n\n  let thirdItem = new Item(3);\n  thirdItem.render();\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hofDemo);\n\n\n//# sourceURL=webpack:///./application/hoc.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./application/observer/index.js\");\n/* harmony import */ var _hoc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hoc */ \"./application/hoc.js\");\n/* harmony import */ var _observer_CustomEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer/CustomEvents */ \"./application/observer/CustomEvents.js\");\n// Точка входа в наше приложение\n\n\n\n// import obs from '../classworks/observer';\n\n// 0. HOC\n// HOF();\n// 1. Observer ->\n// console.log( Observer );\n// Observer();\n// console.log('INDEX');\n// 2. CustomEvents ->\nObject(_observer_CustomEvents__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/observer/CustomEvents.js":
/*!**********************************************!*\
  !*** ./application/observer/CustomEvents.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst CustomEvents = () => {\n\n  /*\n    JS позволяет нам создавать собственные события.\n    Синтаксис:\n      Обязательное только имя события:\n      new Event('eventName', {bubbles: true, cancelable: false});\n\n      Кастом ивент еще имеет доп. поле \"detail\", через которое можно\n      передать данные:\n      new CustomEvent(\"userLogin\", { detail: {...} });\n\n  */\n\n  // let itea_event = new Event('build');\n\n  // let itea_customEvent = new CustomEvent(\"userLogin\", {\n  //   detail: {\n  //     username: \"davidwalsh\",\n  //     itea: {\n  //       woohoo: true\n  //     }\n  //   }\n  // });\n\n\n  // console.log( 'itea_event', itea_event, 'itea_customEvent', itea_customEvent)\n\n  // Абстрактный пример:\n  // let myElement = document.createElement('button');\n  //     myElement.innerText = 'Custom Event!';\n  //     myElement.addEventListener(\"userLogin\", function(e) {\n  //       console.info(\"Event is: \", e);\n  //       console.info(\"Custom data is: \", e.detail);\n  //       myElement.style.backgroundColor = 'blue';\n  //     });\n  \n  //     myElement.addEventListener('click', function(){\n  //       myElement.dispatchEvent(itea_customEvent);\n  //     });\n  //     document.body.appendChild(myElement);\n\n  // Реальный пример:\n\n  let message__container = document.getElementById('message__container');\n  let messageAuthor = document.getElementById('messageAuthor');\n  let messageText = document.getElementById('messageText');\n  let messageSendBtn = document.getElementById('messageSendBtn');\n\n      messageSendBtn.addEventListener('click', function(){\n        let author = messageAuthor.value;\n        let text = messageText.value;\n        let MessageSendEvent = new CustomEvent(\"messageSend\", {\n          detail: {\n            author: author,\n            message: text\n          }\n        });\n        message__container.dispatchEvent(MessageSendEvent);\n      });\n\n      message__container.addEventListener('messageSend', function(event){\n        let { author, message } = event.detail;\n        console.log(event);\n        let messageNode = document.createElement('div');\n            messageNode.innerHTML = `<div class=\"message\"><b>${author}:</b> ${message}</div>`;\n        message__container.appendChild(messageNode);\n      });\n\n}; // custom events end!\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomEvents);\n\n\n//# sourceURL=webpack:///./application/observer/CustomEvents.js?");

/***/ }),

/***/ "./application/observer/Observer.js":
/*!******************************************!*\
  !*** ./application/observer/Observer.js ***!
  \******************************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable(){\n  // Создаем список подписаных обьектов\n  const observers = [];\n  // Оповещение всех подписчиков о сообщении\n  this.sendMessage = function( msg ){\n      observers.map( ( obs ) => {\n        obs.notify(msg);\n      });\n  };\n  // Добавим наблюдателя\n  this.addObserver = function( observer ){\n    observers.push( observer );\n  };\n}\n\n// Сам наблюдатель:\nfunction Observer( behavior ){\n  // Делаем функцию, что бы через callback можно\n  // было использовать различные функции внутри\n  this.notify = function( msg ){\n    behavior( msg );\n  };\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./application/observer/Observer.js?");

/***/ }),

/***/ "./application/observer/demo1.js":
/*!***************************************!*\
  !*** ./application/observer/demo1.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/observer/Observer.js\");\n\n\nconst Demo1 = () => {\n  console.log( 'DEMO 1 ONLINE');\n  let observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n  let obs1 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (msg) => console.log(msg));\n  let obs2 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (msg) => console.warn(msg));\n  let obs3 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (msg) => console.error(msg));\n\n  observable.addObserver( obs1 );\n  observable.addObserver( obs2 );\n  observable.addObserver( obs3 );\n\n  // console.log( observable );\n  observable.sendMessage('hello');\n  //  Проверим абстрактно как оно работает:\n  setTimeout(\n    ()=>{\n      // оправим сообщение, с текущей датой:\n      observable.sendMessage('Now is' + new Date());\n    }, 2000\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo1);\n\n\n//# sourceURL=webpack:///./application/observer/demo1.js?");

/***/ }),

/***/ "./application/observer/demo2.js":
/*!***************************************!*\
  !*** ./application/observer/demo2.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/observer/Observer.js\");\n\n\nconst Demo2 = () => {\n\n  /*\n    Рассмотрим на примере интернет магазина:\n  */\n  console.log( 'DEMO 2');\n  let Products = [\n    {\n      id: 1,\n      name: 'Samsung Galaxy S8 ',\n      price: 21999,\n      imageLink: 'https://i1.rozetka.ua/goods/1894533/samsung_galaxy_s8_64gb_black_images_1894533385.jpg'\n    },\n    {\n      id: 2,\n      name: 'Apple AirPort Capsule',\n      price: 10700,\n      imageLink: 'https://i1.rozetka.ua/goods/3330569/apple_a1470_me177_images_3330569615.jpg'\n    },\n    {\n      id: 3,\n      name: 'Apple iPhone X',\n      price: 35999,\n      imageLink: 'https://i1.rozetka.ua/goods/2433231/apple_iphone_x_64gb_silver_images_2433231297.jpg'\n    },\n    {\n      id: 4,\n      name: 'LG G6 Black ',\n      price: 15999,\n      imageLink: 'https://i1.rozetka.ua/goods/1892329/copy_lg_lgh845_acistn_58d8fc4a87d51_images_1892329834.jpg'\n    }\n  ];\n\n  // Создадим наблюдателя:\n  let observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n  // Трех обсерверов:\n  let basketObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( function(id){\n    let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );\n        Cart.push( filtredToBasket[0] );\n        renderBasket();\n  });\n  let serverObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (id) => {\n      let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );\n      let msg = `Товар ${filtredToBasket[0].name} добавлен в корзину`;\n      console.log( msg );\n  });\n  let iconObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (id) => {\n      let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );\n      let products__cart = document.getElementById('products__cart');\n          products__cart.innerText = Cart.length;\n  });\n\n  let warnObs = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (id) => {\n    console.warn('WARN:', id);\n  })\n\n  observable.addObserver( basketObs );\n  observable.addObserver( serverObs );\n  observable.addObserver( iconObs );\n  observable.addObserver( warnObs );\n\n  // Render Data - - - - - - - - - - - -\n  let Cart = [];\n  let products__row = document.getElementById('products__row');\n\n  function renderBasket(){\n    let cartElem = document.getElementById('cart');\n    let message;\n        if( Cart.length === 0 ){\n          message = 'У вас в корзине пусто';\n        } else {\n          let Sum = Cart.reduce( (prev, current) => {\n            return prev += Number(current.price);\n          }, 0);\n          message = `У вас в корзине ${Cart.length} товаров, на сумму: ${Sum} грн.`;\n        }\n        cartElem.innerHTML = `<h2>${message}</h2><ol></ol>`;\n\n        let ol = cartElem.querySelector('ol');\n        Cart.map( item => {\n          let li = document.createElement('li');\n              li.innerText = `${item.name} (${item.price} грн.)`;\n              ol.appendChild(li);\n        });\n  }\n\n  Products.map( item => {\n    let product = document.createElement('div');\n        product.className = \"product\";\n        product.innerHTML =\n        `<div class=\"product__image\">\n            <img src=\"${item.imageLink}\"/>\n          </div>\n          <div class=\"product__name\">${item.name}</div>\n          <div class=\"product__price\">${item.price} грн.</div>\n          <div class=\"product__action\">\n            <button class=\"product__buy\" data-id=${item.id}> Купить </button>\n          </div>`;\n        let buyButton = product.querySelector('.product__buy');\n            buyButton.addEventListener('click', (e) => {\n              let id = e.target.dataset.id;\n              observable.sendMessage(id);\n            });\n        products__row.appendChild(product);\n  });\n\n  renderBasket();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo2);\n\n\n//# sourceURL=webpack:///./application/observer/demo2.js?");

/***/ }),

/***/ "./application/observer/index.js":
/*!***************************************!*\
  !*** ./application/observer/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _demo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo1 */ \"./application/observer/demo1.js\");\n/* harmony import */ var _demo2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo2 */ \"./application/observer/demo2.js\");\n\n\n\nconst ObserverDemo = () => {\n  // Abstract Demo 2\n  // console.log('demo 1');\n  // Demo1();\n\n  // Functional Demo:\n  Object(_demo2__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n}; //observer Demo\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ObserverDemo);\n\n\n//# sourceURL=webpack:///./application/observer/index.js?");

/***/ })

/******/ });