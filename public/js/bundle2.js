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
/******/ 	return __webpack_require__(__webpack_require__.s = "./classwork/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/observer/Observer.js":
/*!******************************************!*\
  !*** ./application/observer/Observer.js ***!
  \******************************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable(){\n  // Создаем список подписаных обьектов\n  const observers = [];\n  // Оповещение всех подписчиков о сообщении\n  this.sendMessage = function( msg ){\n      observers.map( ( obs ) => {\n        obs.notify(msg);\n      });\n  };\n  // Добавим наблюдателя\n  this.addObserver = function( observer ){\n    observers.push( observer );\n  };\n}\n\n// Сам наблюдатель:\nfunction Observer( behavior ){\n  // Делаем функцию, что бы через callback можно\n  // было использовать различные функции внутри\n  this.notify = function( msg ){\n    behavior( msg );\n  };\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./application/observer/Observer.js?");

/***/ }),

/***/ "./classwork/customEvent.js":
/*!**********************************!*\
  !*** ./classwork/customEvent.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  Задание:  Открыть файл task1.html в папке паблик и настроить светофоры в\n            соответсвии с правилавми ниже:\n\n  1. Написать кастомные события которые будут менять статус светофора:\n  - start: включает зеленый свет\n  - stop: включает красный свет\n  - night: включает желтый свет, который моргает с интервалом в 1с.\n  И зарегистрировать каждое через addEventListener на каждом из светофоров.\n\n  2.  Сразу после загрузки на каждом светофоре вызывать событие night, для того,\n      чтобы включить режим \"нерегулируемого перекрестка\" (моргающий желтый).\n\n  3.  По клику на любой из светофоров нунжо включать на нем поочередно красный (не первый клик)\n      или зеленый (на второй клик) цвет соотвественно.\n      Действие нужно выполнить только диспатча событие зарегистрированое в пункте 1.\n\n  4.  + Бонус: На кнопку \"Start Night\" повесить сброс всех светофоров с их текущего\n      статуса, на мигающий желтые.\n      Двойной, тройной и более клики на кнопку не должны вызывать повторную\n      инициализацию инвервала.\n\n*/\nconst customEvent = () => {\n\n  let trafficLight = document.querySelectorAll('.trafficLight')\n  let nightbtn = document.getElementById('Do')\n\n  nightbtn.addEventListener('click', function () {\n    let night = new CustomEvent(\"night\", {\n      detail: {\n        color: 'night',\n      }\n    });\n    document.dispatchEvent(night);\n  })\n  document.addEventListener('night', function (event) {\n    trafficLight.forEach(el=>{\n      el.classList.remove('active');\n      let arr = el.getElementsByClassName('trafficLight__circle');\n      arr[0].classList.remove('green');\n      arr[1].classList.add(event.detail.color);\n      arr[2].classList.remove('red');\n    });\n  })\n\n  trafficLight.forEach( (el)=> {\n    let arr = el.getElementsByClassName('trafficLight__circle');\n    arr[1].classList.add('night');\n    el.addEventListener('click', function () {\n      let start = new CustomEvent(\"start\", {\n        detail: {\n          color: 'green',\n          id: this.id\n        }\n      });\n      let stop = new CustomEvent(\"stop\", {\n        detail: {\n          color: 'red',\n          id: this.id\n        }\n      });\n      el.dispatchEvent(start);\n      el.dispatchEvent(stop);\n    });\n    el.addEventListener('start', function (event) {\n      let {color, id} = event.detail;\n      let el = document.getElementById(id);\n      let arr = el.getElementsByClassName('trafficLight__circle');\n      el.classList.toggle('active');\n      if (el.classList.contains('active')) {\n        arr[0].classList.add(color);\n        arr[1].classList.remove('night');\n        arr[2].classList.remove('red');\n      }\n    });\n    el.addEventListener('stop', function (event) {\n      let {color, id} = event.detail;\n      let el = document.getElementById(id);\n      let arr = el.getElementsByClassName('trafficLight__circle');\n      if (!el.classList.contains('active')) {\n        arr[2].classList.add(color);\n        arr[1].classList.remove('night');\n        arr[0].classList.remove('green');\n      }\n    });\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (customEvent);\n\n\n//# sourceURL=webpack:///./classwork/customEvent.js?");

/***/ }),

/***/ "./classwork/index.js":
/*!****************************!*\
  !*** ./classwork/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./classwork/observer.js\");\n/* harmony import */ var _customEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customEvent */ \"./classwork/customEvent.js\");\n// Точка входа в наше приложение\n//\n\n\n//\n// ObserverPlayList();\nObject(_customEvent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./classwork/index.js?");

/***/ }),

/***/ "./classwork/observer.js":
/*!*******************************!*\
  !*** ./classwork/observer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../application/observer/Observer */ \"./application/observer/Observer.js\");\n/*\n  Задание: Модуль создания плейлиста, используя паттерн Обсервер.\n\n  У вас есть данные о исполнителях и песнях. Задание делится на три модуля:\n    1. Список исполнителей и песен (Находится слева) - отуда можно включить\n    песню в исполнение иди добавить в плейлист.\n    Если песня уже есть в плейлисте, дважды добавить её нельзя.\n\n    2. Плейлист (Находится справа) - список выбраных песен, песню можно удалить,\n    или запустить в исполнение. Внизу списка должен выводиться блок, в котором\n    пишет суммарное время проигрывания всех песен в плейлисте.\n\n    3. Отображает песню которая проигрывается.\n\n    4. + Бонус: Сделать прогресс пар того как проигрывается песня\n    с возможностью его остановки.\n*/\n\n\nconst ObserverPlayList = () => {\n    const MusicList = [\n        {\n            title: 'Rammstain',\n            songs: [\n                {\n                    id: 1,\n                    name: 'Du Hast',\n                    time: [3, 12]\n                },\n                {\n                    id: 2,\n                    name: 'Ich Will',\n                    time: [5, 1]\n                },\n                {\n                    id: 3,\n                    name: 'Mutter',\n                    time: [4, 15]\n                },\n                {\n                    id: 4,\n                    name: 'Ich tu dir weh',\n                    time: [5, 13]\n                },\n                {\n                    id: 5,\n                    name: 'Rammstain',\n                    time: [3, 64]\n                }\n            ]\n        },\n        {\n            title: 'System of a Down',\n            songs: [\n                {\n                    id: 6,\n                    name: 'Toxicity',\n                    time: [4, 22]\n                },\n                {\n                    id: 7,\n                    name: 'Sugar',\n                    time: [2, 44]\n                },\n                {\n                    id: 8,\n                    name: 'Lonely Day',\n                    time: [3, 19]\n                },\n                {\n                    id: 9,\n                    name: 'Lost in Hollywood',\n                    time: [5, 9]\n                },\n                {\n                    id: 10,\n                    name: 'Chop Suey!',\n                    time: [2, 57]\n                }\n            ]\n        },\n        {\n            title: 'Green Day',\n            songs: [\n                {\n                    id: 11,\n                    name: '21 Guns',\n                    time: [4, 16]\n                },\n                {\n                    id: 12,\n                    name: 'Boulevard of broken dreams!',\n                    time: [6, 37]\n                },\n                {\n                    id: 13,\n                    name: 'Basket Case!',\n                    time: [3, 21]\n                },\n                {\n                    id: 14,\n                    name: 'Know Your Enemy',\n                    time: [4, 11]\n                }\n            ]\n        },\n        {\n            title: 'Linkin Park',\n            songs: [\n                {\n                    id: 15,\n                    name: 'Numb',\n                    time: [3, 11]\n                },\n                {\n                    id: 16,\n                    name: 'New Divide',\n                    time: [4, 41]\n                },\n                {\n                    id: 17,\n                    name: 'Breaking the Habit',\n                    time: [4, 1]\n                },\n                {\n                    id: 18,\n                    name: 'Faint',\n                    time: [3, 29]\n                }\n            ]\n        }\n    ]\n    const MusicBox = () => {\n        const MusicBox = document.getElementById('musicBox');\n        MusicList.map(Artist => {\n            let div = document.createElement('div');\n            let ul = document.createElement('ul');\n            div.innerHTML += `<h4>${Artist.title}</h4>`;\n            Artist.songs.map(song => {\n                let li = document.createElement('li');\n                li.innerHTML = `<a class=\"_addbtn\" data-id=${song.id} href=\"#\">${song.name} время ${song.time.join(':')}</a>`;\n                ul.appendChild(li);\n                let addbtn = li.querySelector('._addbtn');\n                addbtn.addEventListener('click', (e) => {\n                    let id = e.target.dataset.id;\n                    observable.sendMessage(id);\n                });\n            })\n            div.appendChild(ul)\n            MusicBox.appendChild(div)\n        });\n    }\n    MusicBox()\n\n    let observable = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n    let addPlayList = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (id) {\n        MusicList.forEach(Artist => {\n            let mysong = Artist.songs.filter(item => +item.id === +id);\n            if (mysong.length > 0) {\n                let newobjsong = {title: Artist.title};\n                newobjsong = Object.assign(\n                    newobjsong,\n                    mysong[0]\n                )\n                let flag = PlayList.filter(Song => Song.id == mysong[0].id);\n                if (flag.length > 0) {\n                    alert('Песня уже есть в плэйлисте')\n                } else {\n                    PlayList.push(newobjsong);\n                }\n            }\n        });\n        renderPlaylist();\n    })\n    let addPlayyer = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (id) {\n        MusicList.forEach(Artist => {\n            let mysong = Artist.songs.filter(item => Number(item.id) === Number(id));\n            if (mysong.length > 0) {\n                let player = document.getElementById('player');\n                let timer = document.getElementById('timer');\n                player.innerHTML = `<h4>   ${Artist.title} <br> ${mysong[0].name}</h4>`\n                timer.innerHTML = mysong[0].time.join(':');\n            }\n        });\n    })\n    let clearinterval = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (id) {\n        clearInterval(interval);\n        pause=false;\n    })\n    observable.addObserver(addPlayList);\n    observable.addObserver(addPlayyer);\n    observable.addObserver(clearinterval);\n    let PlayList = [];\n\n    function renderPlaylist() {\n        let playList = document.getElementById('playList');\n        let message;\n        if (PlayList.length === 0) {\n            message = 'У вас в плэйлисте пусто';\n        } else {\n            message = `У вас в плэйлисте ${PlayList.length} песен`;\n        }\n        playList.innerHTML = `<h2>${message}</h2><ul></ul>`;\n\n        let ul = playList.querySelector('ul');\n        PlayList.map(Artist => {\n            let li = document.createElement('li');\n            li.innerHTML = `<a class=\"playbtn\" data-id=${Artist.id} href=\"#\">${Artist.title} - ${Artist.name} - ${Artist.time.join(':')} </a>`;\n            ul.appendChild(li);\n            let playbtn = li.querySelector('.playbtn');\n            playbtn.addEventListener('click', (e) => {\n                let id = e.target.dataset.id;\n                console.log(id);\n                observablePlaylist.sendMessage(id);\n            });\n        });\n    }\n    let observablePlaylist = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n    observablePlaylist.addObserver(addPlayyer);\n    observablePlaylist.addObserver(clearinterval);\n\n\n\n    let interval = null;\n    let pause = false;\n    let observableTimer = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\n    let addTimer = new _application_observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"](function (time) {\n        let timeArr = time.split(':');\n        let timer = document.getElementById('timer');\n        if (!pause) {\n            interval = setInterval(count, 1000);\n            pause = true;\n        }else{\n            pause=false;\n            clearInterval(interval);\n        }\n        function count() {\n            timeArr[1]--;\n            if (timeArr[1] == -1) {\n                timeArr[0]--;\n                timeArr[1] = 59;\n            }\n            let [minutes, seconds] = timeArr;\n            if (seconds == 0 && minutes == 0) {\n                clearInterval(interval);\n            }\n            if (seconds < 10) {\n                timer.innerHTML = minutes + \": \" + \"0\" + seconds + \" \";\n            } else {\n                timer.innerHTML = minutes + \": \" + seconds + \" \";\n            }\n        }\n    })\n    observableTimer.addObserver(addTimer);\n    let playbtn = document.querySelector('.playbtn');\n    playbtn.addEventListener('click', function () {\n        let time = document.getElementById('timer').innerHTML;\n        observableTimer.sendMessage(time);\n    })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ObserverPlayList);\n\n\n//# sourceURL=webpack:///./classwork/observer.js?");

/***/ })

/******/ });