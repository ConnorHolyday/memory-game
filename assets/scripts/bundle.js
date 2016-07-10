/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Board = __webpack_require__(/*! ./Board.js */ 1);
	
	var _Board2 = _interopRequireDefault(_Board);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = function () {
	
		var board = new _Board2.default();
	}();

/***/ },
/* 1 */
/*!*********************************!*\
  !*** ./assets/scripts/Board.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Card = __webpack_require__(/*! ./Card.js */ 2);
	
	var _Card2 = _interopRequireDefault(_Card);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var cards = document.querySelectorAll('.card');
	
	var Board = function () {
		function Board() {
			_classCallCheck(this, Board);
	
			this.cardCount = 0;
			this.activeCards;
			this.container = document.getElementsByTagName('main')[0];
	
			this.loadCards();
			this.handleClick();
			this.shuffleBoard();
		}
	
		_createClass(Board, [{
			key: 'loadCards',
			value: function loadCards() {
				var _this = this;
	
				cards.forEach(function (card) {
					return _this.duplicateCard(card);
				});
	
				this.updateCards();
				this.setCards();
			}
		}, {
			key: 'updateCards',
			value: function updateCards() {
				cards = document.querySelectorAll('.card');
			}
		}, {
			key: 'duplicateCard',
			value: function duplicateCard(card) {
				card.dataset.number = this.cardCount;
				++this.cardCount;
	
				var dopple = card.cloneNode(true);
	
				card.parentNode.appendChild(dopple);
			}
		}, {
			key: 'setCards',
			value: function setCards() {
				cards.forEach(function (card) {
					return new _Card2.default(card);
				});
			}
		}, {
			key: 'handleClick',
			value: function handleClick() {
				this.container.addEventListener('click', this.checkFlipped.bind(this), false);
			}
		}, {
			key: 'shuffleBoard',
			value: function shuffleBoard() {
	
				for (var i = this.container.children.length; i >= 0; i--) {
					this.container.appendChild(this.container.children[Math.random() * i | 0]);
				}
			}
		}, {
			key: 'checkFlipped',
			value: function checkFlipped() {
				var activeCards = document.querySelectorAll('.is-active');
	
				if (activeCards.length === 2) {
					this.activeCards = activeCards;
					this.cardFlipped();
				}
			}
		}, {
			key: 'cardFlipped',
			value: function cardFlipped() {
				var _this2 = this;
	
				var isMatch = false;
				var cardNumbers = [];
	
				this.activeCards.forEach(function (card) {
					return cardNumbers.push(card.dataset.number);
				});
	
				if (cardNumbers[0] === cardNumbers[1]) {
					isMatch = true;
				}
	
				setTimeout(function () {
					_this2.clearBoard(_this2.activeCards, isMatch);
				}, 1000);
			}
		}, {
			key: 'clearBoard',
			value: function clearBoard(cards, matched) {
	
				cards.forEach(function (card) {
					return card.classList.remove('is-active');
				});
	
				if (matched) {
					cards.forEach(function (card) {
						return card.classList.add('is-match');
					});
				}
			}
		}]);
	
		return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 2 */
/*!********************************!*\
  !*** ./assets/scripts/Card.js ***!
  \********************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Card = function () {
		function Card(domNode) {
			_classCallCheck(this, Card);
	
			this.self = domNode;
			this.number = this.self.dataset.number;
	
			this.initialize();
		}
	
		_createClass(Card, [{
			key: 'initialize',
			value: function initialize() {
				this.self.addEventListener('click', this.clickHandler.bind(this));
			}
		}, {
			key: 'clickHandler',
			value: function clickHandler() {
				this.self.classList.add('is-active');
			}
		}]);
	
		return Card;
	}();
	
	exports.default = Card;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map