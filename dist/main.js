/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContactPage)
/* harmony export */ });
/* harmony import */ var _img_fries_n_berg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/fries-n-berg.jpg */ "./src/img/fries-n-berg.jpg");
/* harmony import */ var _img_heisenburger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/heisenburger.jpg */ "./src/img/heisenburger.jpg");
/* harmony import */ var _img_huge_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/huge-burger.jpg */ "./src/img/huge-burger.jpg");




function buildContactPage() {
  const content = document.querySelector('#content')
  content.textContent = ''

  const headingDiv = document.createElement('div')
  const heading = document.createElement('h1')
  heading.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  heading.textContent = 'Contact us'

  const list = document.createElement('div')
  for (let i = 0; i < 3; i++) {
    const profileDiv = document.createElement('div')
    profileDiv.classList = 'grid grid-cols-2 my-8'
    const infoDiv = document.createElement('div')
    infoDiv.classList = 'flex flex-col justify-center items-center'
    const info = []
    for (let x = 0; x < 4; x++) {
      const infoLine = document.createElement('p')
      infoLine.classList = 'text-2xl'
      if (x == 0) infoLine.classList = 'text-[#502314] text-4xl'
      info.push(infoLine)
    }
    info.forEach(element => infoDiv.appendChild(element))
    profileDiv.appendChild(infoDiv)
    const img = document.createElement('img')
    img.classList = 'max-w-[324px]'
    profileDiv.appendChild(img)
    list.appendChild(profileDiv)
  }

  list.childNodes[0].childNodes[0].childNodes[0].textContent = `Fries N'Berg`
  list.childNodes[0].childNodes[0].childNodes[1].textContent = 'Manager'
  list.childNodes[0].childNodes[0].childNodes[2].textContent = `777-777-7777`
  list.childNodes[0].childNodes[0].childNodes[3].textContent = 'dfnb@bbb.com'
  list.childNodes[0].childNodes[1].src = _img_fries_n_berg_jpg__WEBPACK_IMPORTED_MODULE_0__
  list.childNodes[1].childNodes[0].childNodes[0].textContent = `Heisenburger`
  list.childNodes[1].childNodes[0].childNodes[1].textContent = 'Chief'
  list.childNodes[1].childNodes[0].childNodes[2].textContent = `555-555-5555`
  list.childNodes[1].childNodes[0].childNodes[3].textContent = 'heisenb@bbb.com'
  list.childNodes[1].childNodes[1].src = _img_heisenburger_jpg__WEBPACK_IMPORTED_MODULE_1__
  list.childNodes[2].childNodes[0].childNodes[0].textContent = `Huge Burger`
  list.childNodes[2].childNodes[0].childNodes[1].textContent = 'Waiter'
  list.childNodes[2].childNodes[0].childNodes[2].textContent = `333-333-3333`
  list.childNodes[2].childNodes[0].childNodes[3].textContent = 'bigb@bbb.com'
  list.childNodes[2].childNodes[1].src = _img_huge_burger_jpg__WEBPACK_IMPORTED_MODULE_2__

  content.appendChild(headingDiv)
  content.appendChild(list)
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHomePage)
/* harmony export */ });
function buildHomePage() {
  const content = document.querySelector('#content')
  content.textContent = ''

  const heading = document.createElement('div')
  const headingText = document.createElement('h1')
  headingText.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  headingText.textContent = 'Big Bad Burger'
  heading.appendChild(headingText);

  const reviewDiv = document.createElement('div')
  const review = document.createElement('p')
  const reviewer = document.createElement('p')
  reviewDiv.classList = 'my-[30px] mx-auto max-w-2xl'
  review.textContent = `The employees were very polite and friendly. My food was fresh and it came out quick. My burger had just the
    right amount of mayo. The sandwich was neat and wrapped to perfection. After I got my food I moved out of drive
    through. But I had to come back around because I forgot something. Drive through moved very fast and the young
    man at the window greeted me as if this was my first time. I will be visiting this store again. Thank you! ☺️
  `
  reviewer.classList = 'my-[20px] text-[#502314] text-xl font-semibold'
  reviewer.textContent = 'Minecque of Jacksonville, FL'
  reviewDiv.appendChild(review)
  reviewDiv.appendChild(reviewer)

  const timeDiv = document.createElement('div')
  const timeHeading = document.createElement('p')
  timeDiv.classList = 'my-[30px] mx-auto max-w-2xl'
  timeHeading.classList = 'my-[20px] text-[#502314] text-xl font-semibold'
  timeHeading.textContent = 'Hours'
  timeDiv.appendChild(timeHeading)
  let schedule = []
  for (let i = 0; i < 7; i++) {
    const day = document.createElement('p');
    day.classList = 'text-center'
    schedule.push(day)
  }
  schedule[0].textContent = 'Sunday: 6am - 8pm'
  schedule[1].textContent = 'Monday: 6am - 8pm'
  schedule[2].textContent = 'Tuesday: 6am - 8pm'
  schedule[3].textContent = 'Wednesday: 6am - 8pm'
  schedule[4].textContent = 'Thursday: 6am - 8pm'
  schedule[5].textContent = 'Friday: 6am - 8pm'
  schedule[6].textContent = 'Saturday: 6am - 8pm'
  schedule.forEach(element => timeDiv.appendChild(element))

  const addressDiv = document.createElement('div')
  const addressHeading = document.createElement('p')
  const address = document.createElement('p')
  addressDiv.classList = 'my-[30px] mx-auto max-w-2xl'
  addressHeading.classList = 'my-[20px] text-[#502314] text-xl font-semibold'
  addressHeading.textContent = 'Location'
  address.classList = 'text-center'
  address.textContent = '777 Saint Haven, Bart Fort, Morocco'
  addressDiv.appendChild(addressHeading)
  addressDiv.appendChild(address)

  content.appendChild(heading)
  content.appendChild(reviewDiv)
  content.appendChild(timeDiv)
  content.appendChild(addressDiv)
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMenuPage)
/* harmony export */ });
/* harmony import */ var _img_bacon_cheeseburger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/bacon-cheeseburger.png */ "./src/img/bacon-cheeseburger.png");
/* harmony import */ var _img_bacon_king_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/bacon-king.png */ "./src/img/bacon-king.png");
/* harmony import */ var _img_double_cheese_burger_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/double-cheese-burger.png */ "./src/img/double-cheese-burger.png");
/* harmony import */ var _img_single_quarter_pound_king_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/single-quarter-pound-king.png */ "./src/img/single-quarter-pound-king.png");
/* harmony import */ var _img_texas_double_whooper_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/texas-double-whooper.png */ "./src/img/texas-double-whooper.png");
/* harmony import */ var _img_whooper_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/whooper.png */ "./src/img/whooper.png");
/* harmony import */ var _img_bk_cafe_ice_coffee_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/bk-cafe-ice-coffee.png */ "./src/img/bk-cafe-ice-coffee.png");
/* harmony import */ var _img_diet_coke_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/diet-coke.png */ "./src/img/diet-coke.png");
/* harmony import */ var _img_dr_pepper_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/dr-pepper.png */ "./src/img/dr-pepper.png");










function buildMenuPage() {
  const content = document.querySelector('#content')
  content.textContent = ''

  const burgerHeadingDiv = document.createElement('div')
  const burgerHeading = document.createElement('h1')
  burgerHeading.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  burgerHeading.textContent = 'Burger'
  burgerHeadingDiv.appendChild(burgerHeading)

  const burgerMenu = document.createElement('div')
  burgerMenu.classList = 'grid grid-cols-3 gap-3 justify-items-stretch mx-auto max-w-2xl'
  let burger = []
  for (let i = 0; i < 6; i++) {
    const burgerDiv = document.createElement('div')
    const img = document.createElement('img')
    const imgName = document.createElement('p')
    imgName.classList = 'text-center'
    burgerDiv.appendChild(img)
    burgerDiv.appendChild(imgName)
    burger.push(burgerDiv)
  }
  burger[0].firstChild.src = _img_bacon_cheeseburger_png__WEBPACK_IMPORTED_MODULE_0__
  burger[0].lastChild.textContent = 'Bacon Cheeseburger'
  burger[1].firstChild.src = _img_bacon_king_png__WEBPACK_IMPORTED_MODULE_1__
  burger[1].lastChild.textContent = 'Bacon King'
  burger[2].firstChild.src = _img_double_cheese_burger_png__WEBPACK_IMPORTED_MODULE_2__
  burger[2].lastChild.textContent = 'Double Cheese Burger'
  burger[3].firstChild.src = _img_single_quarter_pound_king_png__WEBPACK_IMPORTED_MODULE_3__
  burger[3].lastChild.textContent = 'Single Quarter Pound King'
  burger[4].firstChild.src = _img_texas_double_whooper_png__WEBPACK_IMPORTED_MODULE_4__
  burger[4].lastChild.textContent = 'Texas Double Whooper'
  burger[5].firstChild.src = _img_whooper_png__WEBPACK_IMPORTED_MODULE_5__
  burger[5].lastChild.textContent = 'Whooper'
  burger.forEach(element => burgerMenu.appendChild(element));
  
  const drinkHeadingDiv = document.createElement('div')
  const drinkHeading = document.createElement('h1')
  drinkHeading.classList = 'text-[#502314] text-center text-5xl font-extrabold pt-[76px] h-[200px]'
  drinkHeading.textContent = 'Drink'
  drinkHeadingDiv.appendChild(drinkHeading)

  const drinkMenu = document.createElement('div')
  drinkMenu.classList ='grid grid-cols-3 gap-3 justify-items-stretch mx-auto max-w-2xl'

  let drink = []
  for (let n = 0; n < 3; n++) {
    const drinkDiv = document.createElement('div')
    const img = document.createElement('img')
    img.classList = 'max-w-[216px] max-h-[216px]'
    const imgName = document.createElement('p')
    imgName.classList = 'text-center'
    drinkDiv.appendChild(img)
    drinkDiv.appendChild(imgName)
    drink.push(drinkDiv)
  }
  drink[0].firstChild.src = _img_bk_cafe_ice_coffee_png__WEBPACK_IMPORTED_MODULE_6__
  drink[0].lastChild.textContent = 'Bk Cafe Ice Coffee'
  drink[1].firstChild.src = _img_diet_coke_png__WEBPACK_IMPORTED_MODULE_7__
  drink[1].lastChild.textContent = 'Diet Coke'
  drink[2].firstChild.src = _img_dr_pepper_png__WEBPACK_IMPORTED_MODULE_8__
  drink[2].lastChild.textContent = 'Dr Pepper'
  drink.forEach(element => drinkMenu.appendChild(element));

  content.appendChild(burgerHeadingDiv)
  content.appendChild(burgerMenu)
  content.appendChild(drinkHeadingDiv)
  content.appendChild(drinkMenu)

}

/***/ }),

/***/ "./src/img/bacon-cheeseburger.png":
/*!****************************************!*\
  !*** ./src/img/bacon-cheeseburger.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14088e3f0328e0c86b7f.png";

/***/ }),

/***/ "./src/img/bacon-king.png":
/*!********************************!*\
  !*** ./src/img/bacon-king.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "00a5e3a4446738847d6d.png";

/***/ }),

/***/ "./src/img/bk-cafe-ice-coffee.png":
/*!****************************************!*\
  !*** ./src/img/bk-cafe-ice-coffee.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71c7b5e6d90122ac552a.png";

/***/ }),

/***/ "./src/img/diet-coke.png":
/*!*******************************!*\
  !*** ./src/img/diet-coke.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8111b70b2f0b20d06aa7.png";

/***/ }),

/***/ "./src/img/double-cheese-burger.png":
/*!******************************************!*\
  !*** ./src/img/double-cheese-burger.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39ebfbf52f5863b516e1.png";

/***/ }),

/***/ "./src/img/dr-pepper.png":
/*!*******************************!*\
  !*** ./src/img/dr-pepper.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f5066c11032df448d4a.png";

/***/ }),

/***/ "./src/img/fries-n-berg.jpg":
/*!**********************************!*\
  !*** ./src/img/fries-n-berg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b464db889b870945fda.jpg";

/***/ }),

/***/ "./src/img/heisenburger.jpg":
/*!**********************************!*\
  !*** ./src/img/heisenburger.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55f2a575b7373ae49b78.jpg";

/***/ }),

/***/ "./src/img/huge-burger.jpg":
/*!*********************************!*\
  !*** ./src/img/huge-burger.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "966bd370ff148f11df67.jpg";

/***/ }),

/***/ "./src/img/single-quarter-pound-king.png":
/*!***********************************************!*\
  !*** ./src/img/single-quarter-pound-king.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7daa5cf0ce4e2af0b69d.png";

/***/ }),

/***/ "./src/img/texas-double-whooper.png":
/*!******************************************!*\
  !*** ./src/img/texas-double-whooper.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f17a816c4c24fc091b7.png";

/***/ }),

/***/ "./src/img/whooper.png":
/*!*****************************!*\
  !*** ./src/img/whooper.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60e49bc18d701ad5a446.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




window.addEventListener('load', setup)

function setup() {
  document.body.classList = 'bg-[#f5ebdc]'

  const headerDiv = document.createElement('div')
  headerDiv.classList = 'header h-[78px] py-[30px]'
  const headerUl = document.createElement('ul')
  headerUl.classList = 'grid grid-cols-3 gap-3 justify-items-stretch mx-auto max-w-2xl'
  let headings = []
  for (let i = 0; i < 3; i++) {
    const heading = document.createElement('li')
    heading.classList = 'text-lg font-medium text-center'
    headings.push(heading)
  }
  headings[0].textContent = 'Home'
  headings[0].classList.add('home')
  headings[1].textContent = 'Menu'
  headings[1].classList.add('menu')
  headings[2].textContent = 'Contact'
  headings[2].classList.add('contact')
  headings.forEach(heading => headerUl.appendChild(heading))
  headerDiv.appendChild(headerUl)

  const contentDiv = document.createElement('div')
  contentDiv.id = 'content'
  contentDiv.classList = 'min-h-[86%] mx-auto max-w-[648px]'

  const footerDiv = document.createElement('div')
  footerDiv.classList = 'footer h-[56px] py-[15px] grid grid-cols-2 justify-items-center'
  const bkLink = document.createElement('a')
  bkLink.classList = 'text-[#502314] font-medium'
  bkLink.href = 'https://www.bk.com'
  bkLink.textContent = `Images and colorscheme are properties of Burger King
      - www.bk.com`
  const disclaimerSpan = document.createElement('span')
  disclaimerSpan.classList = 'text-[#502314] font-medium'
  disclaimerSpan.textContent = `This website was made purely for self educational purpose and has no
      commercial value`

  footerDiv.appendChild(bkLink)
  footerDiv.appendChild(disclaimerSpan)

  document.body.appendChild(headerDiv)
  document.body.appendChild(contentDiv)
  document.body.appendChild(footerDiv)

  const homeButton = document.querySelector('.home')
  const menuButton = document.querySelector('.menu')
  const contactButton = document.querySelector('.contact')
  homeButton.addEventListener('pointerdown', getHomePage)
  menuButton.addEventListener('pointerdown', getMenuPage)
  contactButton.addEventListener('pointerdown', getContactPage)
  getHomePage()

  function getHomePage() {
    homeButton.classList.add('underline', 'underline-offset-4', 'text-[#d62300]')
    menuButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    contactButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    ;(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])()
  }

  function getMenuPage() {
    homeButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    menuButton.classList.add('underline', 'underline-offset-4', 'text-[#d62300]')
    contactButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
  }

  function getContactPage() {
    homeButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    menuButton.classList.remove('underline', 'underline-offset-4', 'text-[#d62300]')
    contactButton.classList.add('underline', 'underline-offset-4', 'text-[#d62300]')
    ;(0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])()
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNGO0FBQ0E7O0FBRTNCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0RBQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsa0RBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsaURBQU07O0FBRS9DO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwRGU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHNEO0FBQ1Y7QUFDYTtBQUNFO0FBQ0k7QUFDeEI7QUFDVTtBQUNYO0FBQ0k7O0FBRTNCO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQVc7QUFDeEM7QUFDQSw2QkFBNkIsZ0RBQVM7QUFDdEM7QUFDQSw2QkFBNkIsMERBQVk7QUFDekM7QUFDQSw2QkFBNkIsK0RBQVM7QUFDdEM7QUFDQSw2QkFBNkIsMERBQWtCO0FBQy9DO0FBQ0EsNkJBQTZCLDZDQUFPO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3REFBTTtBQUNsQztBQUNBLDRCQUE0QiwrQ0FBSTtBQUNoQztBQUNBLDRCQUE0QiwrQ0FBUTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnlCO0FBQ0E7QUFDTTs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBSTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBSTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBTztBQUNYO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9pbWcvZnJpZXMtbi1iZXJnLmpwZydcbmltcG9ydCBjaGllZiBmcm9tICcuL2ltZy9oZWlzZW5idXJnZXIuanBnJ1xuaW1wb3J0IHdhaXRlciBmcm9tICcuL2ltZy9odWdlLWJ1cmdlci5qcGcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdFBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJ1xuXG4gIGNvbnN0IGhlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoZWFkaW5nLmNsYXNzTGlzdCA9ICd0ZXh0LVsjNTAyMzE0XSB0ZXh0LWNlbnRlciB0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCBwdC1bNzZweF0gaC1bMjAwcHhdJ1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnXG5cbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgcHJvZmlsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvZmlsZURpdi5jbGFzc0xpc3QgPSAnZ3JpZCBncmlkLWNvbHMtMiBteS04J1xuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluZm9EaXYuY2xhc3NMaXN0ID0gJ2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJ1xuICAgIGNvbnN0IGluZm8gPSBbXVxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgNDsgeCsrKSB7XG4gICAgICBjb25zdCBpbmZvTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgaW5mb0xpbmUuY2xhc3NMaXN0ID0gJ3RleHQtMnhsJ1xuICAgICAgaWYgKHggPT0gMCkgaW5mb0xpbmUuY2xhc3NMaXN0ID0gJ3RleHQtWyM1MDIzMTRdIHRleHQtNHhsJ1xuICAgICAgaW5mby5wdXNoKGluZm9MaW5lKVxuICAgIH1cbiAgICBpbmZvLmZvckVhY2goZWxlbWVudCA9PiBpbmZvRGl2LmFwcGVuZENoaWxkKGVsZW1lbnQpKVxuICAgIHByb2ZpbGVEaXYuYXBwZW5kQ2hpbGQoaW5mb0RpdilcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5jbGFzc0xpc3QgPSAnbWF4LXctWzMyNHB4XSdcbiAgICBwcm9maWxlRGl2LmFwcGVuZENoaWxkKGltZylcbiAgICBsaXN0LmFwcGVuZENoaWxkKHByb2ZpbGVEaXYpXG4gIH1cblxuICBsaXN0LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50ID0gYEZyaWVzIE4nQmVyZ2BcbiAgbGlzdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9ICdNYW5hZ2VyJ1xuICBsaXN0LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzJdLnRleHRDb250ZW50ID0gYDc3Ny03NzctNzc3N2BcbiAgbGlzdC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1szXS50ZXh0Q29udGVudCA9ICdkZm5iQGJiYi5jb20nXG4gIGxpc3QuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdLnNyYyA9IG1hbmFnZXJcbiAgbGlzdC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IGBIZWlzZW5idXJnZXJgXG4gIGxpc3QuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV0udGV4dENvbnRlbnQgPSAnQ2hpZWYnXG4gIGxpc3QuY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgNTU1LTU1NS01NTU1YFxuICBsaXN0LmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLnRleHRDb250ZW50ID0gJ2hlaXNlbmJAYmJiLmNvbSdcbiAgbGlzdC5jaGlsZE5vZGVzWzFdLmNoaWxkTm9kZXNbMV0uc3JjID0gY2hpZWZcbiAgbGlzdC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9IGBIdWdlIEJ1cmdlcmBcbiAgbGlzdC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCA9ICdXYWl0ZXInXG4gIGxpc3QuY2hpbGROb2Rlc1syXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMl0udGV4dENvbnRlbnQgPSBgMzMzLTMzMy0zMzMzYFxuICBsaXN0LmNoaWxkTm9kZXNbMl0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzNdLnRleHRDb250ZW50ID0gJ2JpZ2JAYmJiLmNvbSdcbiAgbGlzdC5jaGlsZE5vZGVzWzJdLmNoaWxkTm9kZXNbMV0uc3JjID0gd2FpdGVyXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nRGl2KVxuICBjb250ZW50LmFwcGVuZENoaWxkKGxpc3QpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lUGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnXG5cbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IGhlYWRpbmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoZWFkaW5nVGV4dC5jbGFzc0xpc3QgPSAndGV4dC1bIzUwMjMxNF0gdGV4dC1jZW50ZXIgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgcHQtWzc2cHhdIGgtWzIwMHB4XSdcbiAgaGVhZGluZ1RleHQudGV4dENvbnRlbnQgPSAnQmlnIEJhZCBCdXJnZXInXG4gIGhlYWRpbmcuYXBwZW5kQ2hpbGQoaGVhZGluZ1RleHQpO1xuXG4gIGNvbnN0IHJldmlld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnN0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb25zdCByZXZpZXdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICByZXZpZXdEaXYuY2xhc3NMaXN0ID0gJ215LVszMHB4XSBteC1hdXRvIG1heC13LTJ4bCdcbiAgcmV2aWV3LnRleHRDb250ZW50ID0gYFRoZSBlbXBsb3llZXMgd2VyZSB2ZXJ5IHBvbGl0ZSBhbmQgZnJpZW5kbHkuIE15IGZvb2Qgd2FzIGZyZXNoIGFuZCBpdCBjYW1lIG91dCBxdWljay4gTXkgYnVyZ2VyIGhhZCBqdXN0IHRoZVxuICAgIHJpZ2h0IGFtb3VudCBvZiBtYXlvLiBUaGUgc2FuZHdpY2ggd2FzIG5lYXQgYW5kIHdyYXBwZWQgdG8gcGVyZmVjdGlvbi4gQWZ0ZXIgSSBnb3QgbXkgZm9vZCBJIG1vdmVkIG91dCBvZiBkcml2ZVxuICAgIHRocm91Z2guIEJ1dCBJIGhhZCB0byBjb21lIGJhY2sgYXJvdW5kIGJlY2F1c2UgSSBmb3Jnb3Qgc29tZXRoaW5nLiBEcml2ZSB0aHJvdWdoIG1vdmVkIHZlcnkgZmFzdCBhbmQgdGhlIHlvdW5nXG4gICAgbWFuIGF0IHRoZSB3aW5kb3cgZ3JlZXRlZCBtZSBhcyBpZiB0aGlzIHdhcyBteSBmaXJzdCB0aW1lLiBJIHdpbGwgYmUgdmlzaXRpbmcgdGhpcyBzdG9yZSBhZ2Fpbi4gVGhhbmsgeW91ISDimLrvuI9cbiAgYFxuICByZXZpZXdlci5jbGFzc0xpc3QgPSAnbXktWzIwcHhdIHRleHQtWyM1MDIzMTRdIHRleHQteGwgZm9udC1zZW1pYm9sZCdcbiAgcmV2aWV3ZXIudGV4dENvbnRlbnQgPSAnTWluZWNxdWUgb2YgSmFja3NvbnZpbGxlLCBGTCdcbiAgcmV2aWV3RGl2LmFwcGVuZENoaWxkKHJldmlldylcbiAgcmV2aWV3RGl2LmFwcGVuZENoaWxkKHJldmlld2VyKVxuXG4gIGNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCB0aW1lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICB0aW1lRGl2LmNsYXNzTGlzdCA9ICdteS1bMzBweF0gbXgtYXV0byBtYXgtdy0yeGwnXG4gIHRpbWVIZWFkaW5nLmNsYXNzTGlzdCA9ICdteS1bMjBweF0gdGV4dC1bIzUwMjMxNF0gdGV4dC14bCBmb250LXNlbWlib2xkJ1xuICB0aW1lSGVhZGluZy50ZXh0Q29udGVudCA9ICdIb3VycydcbiAgdGltZURpdi5hcHBlbmRDaGlsZCh0aW1lSGVhZGluZylcbiAgbGV0IHNjaGVkdWxlID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGF5LmNsYXNzTGlzdCA9ICd0ZXh0LWNlbnRlcidcbiAgICBzY2hlZHVsZS5wdXNoKGRheSlcbiAgfVxuICBzY2hlZHVsZVswXS50ZXh0Q29udGVudCA9ICdTdW5kYXk6IDZhbSAtIDhwbSdcbiAgc2NoZWR1bGVbMV0udGV4dENvbnRlbnQgPSAnTW9uZGF5OiA2YW0gLSA4cG0nXG4gIHNjaGVkdWxlWzJdLnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDZhbSAtIDhwbSdcbiAgc2NoZWR1bGVbM10udGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiA2YW0gLSA4cG0nXG4gIHNjaGVkdWxlWzRdLnRleHRDb250ZW50ID0gJ1RodXJzZGF5OiA2YW0gLSA4cG0nXG4gIHNjaGVkdWxlWzVdLnRleHRDb250ZW50ID0gJ0ZyaWRheTogNmFtIC0gOHBtJ1xuICBzY2hlZHVsZVs2XS50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogNmFtIC0gOHBtJ1xuICBzY2hlZHVsZS5mb3JFYWNoKGVsZW1lbnQgPT4gdGltZURpdi5hcHBlbmRDaGlsZChlbGVtZW50KSlcblxuICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgYWRkcmVzc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBhZGRyZXNzRGl2LmNsYXNzTGlzdCA9ICdteS1bMzBweF0gbXgtYXV0byBtYXgtdy0yeGwnXG4gIGFkZHJlc3NIZWFkaW5nLmNsYXNzTGlzdCA9ICdteS1bMjBweF0gdGV4dC1bIzUwMjMxNF0gdGV4dC14bCBmb250LXNlbWlib2xkJ1xuICBhZGRyZXNzSGVhZGluZy50ZXh0Q29udGVudCA9ICdMb2NhdGlvbidcbiAgYWRkcmVzcy5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXInXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnNzc3IFNhaW50IEhhdmVuLCBCYXJ0IEZvcnQsIE1vcm9jY28nXG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0hlYWRpbmcpXG4gIGFkZHJlc3NEaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcylcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3RGl2KVxuICBjb250ZW50LmFwcGVuZENoaWxkKHRpbWVEaXYpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdilcbn0iLCJpbXBvcnQgYmFjb25DaGVlc2UgZnJvbSAnLi9pbWcvYmFjb24tY2hlZXNlYnVyZ2VyLnBuZydcbmltcG9ydCBiYWNvbktpbmcgZnJvbSAnLi9pbWcvYmFjb24ta2luZy5wbmcnXG5pbXBvcnQgZG91YmxlQ2hlZXNlIGZyb20gJy4vaW1nL2RvdWJsZS1jaGVlc2UtYnVyZ2VyLnBuZydcbmltcG9ydCBwb3VuZEtpbmcgZnJvbSAnLi9pbWcvc2luZ2xlLXF1YXJ0ZXItcG91bmQta2luZy5wbmcnXG5pbXBvcnQgdGV4YXNEb3VibGVXaG9vcGVyIGZyb20gJy4vaW1nL3RleGFzLWRvdWJsZS13aG9vcGVyLnBuZydcbmltcG9ydCB3aG9vcGVyIGZyb20gJy4vaW1nL3dob29wZXIucG5nJ1xuaW1wb3J0IGNvZmZlZSBmcm9tICcuL2ltZy9iay1jYWZlLWljZS1jb2ZmZWUucG5nJ1xuaW1wb3J0IGNva2UgZnJvbSAnLi9pbWcvZGlldC1jb2tlLnBuZydcbmltcG9ydCBkclBlcHBlciBmcm9tICcuL2ltZy9kci1wZXBwZXIucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1lbnVQYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICBjb250ZW50LnRleHRDb250ZW50ID0gJydcblxuICBjb25zdCBidXJnZXJIZWFkaW5nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29uc3QgYnVyZ2VySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgYnVyZ2VySGVhZGluZy5jbGFzc0xpc3QgPSAndGV4dC1bIzUwMjMxNF0gdGV4dC1jZW50ZXIgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgcHQtWzc2cHhdIGgtWzIwMHB4XSdcbiAgYnVyZ2VySGVhZGluZy50ZXh0Q29udGVudCA9ICdCdXJnZXInXG4gIGJ1cmdlckhlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoYnVyZ2VySGVhZGluZylcblxuICBjb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QgPSAnZ3JpZCBncmlkLWNvbHMtMyBnYXAtMyBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggbXgtYXV0byBtYXgtdy0yeGwnXG4gIGxldCBidXJnZXIgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIGNvbnN0IGJ1cmdlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBjb25zdCBpbWdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW1nTmFtZS5jbGFzc0xpc3QgPSAndGV4dC1jZW50ZXInXG4gICAgYnVyZ2VyRGl2LmFwcGVuZENoaWxkKGltZylcbiAgICBidXJnZXJEaXYuYXBwZW5kQ2hpbGQoaW1nTmFtZSlcbiAgICBidXJnZXIucHVzaChidXJnZXJEaXYpXG4gIH1cbiAgYnVyZ2VyWzBdLmZpcnN0Q2hpbGQuc3JjID0gYmFjb25DaGVlc2VcbiAgYnVyZ2VyWzBdLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICdCYWNvbiBDaGVlc2VidXJnZXInXG4gIGJ1cmdlclsxXS5maXJzdENoaWxkLnNyYyA9IGJhY29uS2luZ1xuICBidXJnZXJbMV0ubGFzdENoaWxkLnRleHRDb250ZW50ID0gJ0JhY29uIEtpbmcnXG4gIGJ1cmdlclsyXS5maXJzdENoaWxkLnNyYyA9IGRvdWJsZUNoZWVzZVxuICBidXJnZXJbMl0ubGFzdENoaWxkLnRleHRDb250ZW50ID0gJ0RvdWJsZSBDaGVlc2UgQnVyZ2VyJ1xuICBidXJnZXJbM10uZmlyc3RDaGlsZC5zcmMgPSBwb3VuZEtpbmdcbiAgYnVyZ2VyWzNdLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICdTaW5nbGUgUXVhcnRlciBQb3VuZCBLaW5nJ1xuICBidXJnZXJbNF0uZmlyc3RDaGlsZC5zcmMgPSB0ZXhhc0RvdWJsZVdob29wZXJcbiAgYnVyZ2VyWzRdLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICdUZXhhcyBEb3VibGUgV2hvb3BlcidcbiAgYnVyZ2VyWzVdLmZpcnN0Q2hpbGQuc3JjID0gd2hvb3BlclxuICBidXJnZXJbNV0ubGFzdENoaWxkLnRleHRDb250ZW50ID0gJ1dob29wZXInXG4gIGJ1cmdlci5mb3JFYWNoKGVsZW1lbnQgPT4gYnVyZ2VyTWVudS5hcHBlbmRDaGlsZChlbGVtZW50KSk7XG4gIFxuICBjb25zdCBkcmlua0hlYWRpbmdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBkcmlua0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGRyaW5rSGVhZGluZy5jbGFzc0xpc3QgPSAndGV4dC1bIzUwMjMxNF0gdGV4dC1jZW50ZXIgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgcHQtWzc2cHhdIGgtWzIwMHB4XSdcbiAgZHJpbmtIZWFkaW5nLnRleHRDb250ZW50ID0gJ0RyaW5rJ1xuICBkcmlua0hlYWRpbmdEaXYuYXBwZW5kQ2hpbGQoZHJpbmtIZWFkaW5nKVxuXG4gIGNvbnN0IGRyaW5rTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRyaW5rTWVudS5jbGFzc0xpc3QgPSdncmlkIGdyaWQtY29scy0zIGdhcC0zIGp1c3RpZnktaXRlbXMtc3RyZXRjaCBteC1hdXRvIG1heC13LTJ4bCdcblxuICBsZXQgZHJpbmsgPSBbXVxuICBmb3IgKGxldCBuID0gMDsgbiA8IDM7IG4rKykge1xuICAgIGNvbnN0IGRyaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGltZy5jbGFzc0xpc3QgPSAnbWF4LXctWzIxNnB4XSBtYXgtaC1bMjE2cHhdJ1xuICAgIGNvbnN0IGltZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbWdOYW1lLmNsYXNzTGlzdCA9ICd0ZXh0LWNlbnRlcidcbiAgICBkcmlua0Rpdi5hcHBlbmRDaGlsZChpbWcpXG4gICAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoaW1nTmFtZSlcbiAgICBkcmluay5wdXNoKGRyaW5rRGl2KVxuICB9XG4gIGRyaW5rWzBdLmZpcnN0Q2hpbGQuc3JjID0gY29mZmVlXG4gIGRyaW5rWzBdLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICdCayBDYWZlIEljZSBDb2ZmZWUnXG4gIGRyaW5rWzFdLmZpcnN0Q2hpbGQuc3JjID0gY29rZVxuICBkcmlua1sxXS5sYXN0Q2hpbGQudGV4dENvbnRlbnQgPSAnRGlldCBDb2tlJ1xuICBkcmlua1syXS5maXJzdENoaWxkLnNyYyA9IGRyUGVwcGVyXG4gIGRyaW5rWzJdLmxhc3RDaGlsZC50ZXh0Q29udGVudCA9ICdEciBQZXBwZXInXG4gIGRyaW5rLmZvckVhY2goZWxlbWVudCA9PiBkcmlua01lbnUuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVyZ2VySGVhZGluZ0RpdilcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXJnZXJNZW51KVxuICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rSGVhZGluZ0RpdilcbiAgY29udGVudC5hcHBlbmRDaGlsZChkcmlua01lbnUpXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCJcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgc2V0dXApXG5cbmZ1bmN0aW9uIHNldHVwKCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCA9ICdiZy1bI2Y1ZWJkY10nXG5cbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaGVhZGVyRGl2LmNsYXNzTGlzdCA9ICdoZWFkZXIgaC1bNzhweF0gcHktWzMwcHhdJ1xuICBjb25zdCBoZWFkZXJVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgaGVhZGVyVWwuY2xhc3NMaXN0ID0gJ2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTMganVzdGlmeS1pdGVtcy1zdHJldGNoIG14LWF1dG8gbWF4LXctMnhsJ1xuICBsZXQgaGVhZGluZ3MgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgaGVhZGluZy5jbGFzc0xpc3QgPSAndGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlcidcbiAgICBoZWFkaW5ncy5wdXNoKGhlYWRpbmcpXG4gIH1cbiAgaGVhZGluZ3NbMF0udGV4dENvbnRlbnQgPSAnSG9tZSdcbiAgaGVhZGluZ3NbMF0uY2xhc3NMaXN0LmFkZCgnaG9tZScpXG4gIGhlYWRpbmdzWzFdLnRleHRDb250ZW50ID0gJ01lbnUnXG4gIGhlYWRpbmdzWzFdLmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxuICBoZWFkaW5nc1syXS50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuICBoZWFkaW5nc1syXS5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcbiAgaGVhZGluZ3MuZm9yRWFjaChoZWFkaW5nID0+IGhlYWRlclVsLmFwcGVuZENoaWxkKGhlYWRpbmcpKVxuICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyVWwpXG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRlbnREaXYuaWQgPSAnY29udGVudCdcbiAgY29udGVudERpdi5jbGFzc0xpc3QgPSAnbWluLWgtWzg2JV0gbXgtYXV0byBtYXgtdy1bNjQ4cHhdJ1xuXG4gIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZvb3RlckRpdi5jbGFzc0xpc3QgPSAnZm9vdGVyIGgtWzU2cHhdIHB5LVsxNXB4XSBncmlkIGdyaWQtY29scy0yIGp1c3RpZnktaXRlbXMtY2VudGVyJ1xuICBjb25zdCBia0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgYmtMaW5rLmNsYXNzTGlzdCA9ICd0ZXh0LVsjNTAyMzE0XSBmb250LW1lZGl1bSdcbiAgYmtMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuYmsuY29tJ1xuICBia0xpbmsudGV4dENvbnRlbnQgPSBgSW1hZ2VzIGFuZCBjb2xvcnNjaGVtZSBhcmUgcHJvcGVydGllcyBvZiBCdXJnZXIgS2luZ1xuICAgICAgLSB3d3cuYmsuY29tYFxuICBjb25zdCBkaXNjbGFpbWVyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICBkaXNjbGFpbWVyU3Bhbi5jbGFzc0xpc3QgPSAndGV4dC1bIzUwMjMxNF0gZm9udC1tZWRpdW0nXG4gIGRpc2NsYWltZXJTcGFuLnRleHRDb250ZW50ID0gYFRoaXMgd2Vic2l0ZSB3YXMgbWFkZSBwdXJlbHkgZm9yIHNlbGYgZWR1Y2F0aW9uYWwgcHVycG9zZSBhbmQgaGFzIG5vXG4gICAgICBjb21tZXJjaWFsIHZhbHVlYFxuXG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChia0xpbmspXG4gIGZvb3RlckRpdi5hcHBlbmRDaGlsZChkaXNjbGFpbWVyU3BhbilcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckRpdilcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KVxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3RlckRpdilcblxuICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKVxuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKVxuICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZ2V0SG9tZVBhZ2UpXG4gIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBnZXRNZW51UGFnZSlcbiAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGdldENvbnRhY3RQYWdlKVxuICBnZXRIb21lUGFnZSgpXG5cbiAgZnVuY3Rpb24gZ2V0SG9tZVBhZ2UoKSB7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd1bmRlcmxpbmUnLCAndW5kZXJsaW5lLW9mZnNldC00JywgJ3RleHQtWyNkNjIzMDBdJylcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3VuZGVybGluZScsICd1bmRlcmxpbmUtb2Zmc2V0LTQnLCAndGV4dC1bI2Q2MjMwMF0nKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndW5kZXJsaW5lJywgJ3VuZGVybGluZS1vZmZzZXQtNCcsICd0ZXh0LVsjZDYyMzAwXScpXG4gICAgaG9tZSgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNZW51UGFnZSgpIHtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3VuZGVybGluZScsICd1bmRlcmxpbmUtb2Zmc2V0LTQnLCAndGV4dC1bI2Q2MjMwMF0nKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgndW5kZXJsaW5lJywgJ3VuZGVybGluZS1vZmZzZXQtNCcsICd0ZXh0LVsjZDYyMzAwXScpXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd1bmRlcmxpbmUnLCAndW5kZXJsaW5lLW9mZnNldC00JywgJ3RleHQtWyNkNjIzMDBdJylcbiAgICBtZW51KClcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRhY3RQYWdlKCkge1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgndW5kZXJsaW5lJywgJ3VuZGVybGluZS1vZmZzZXQtNCcsICd0ZXh0LVsjZDYyMzAwXScpXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCd1bmRlcmxpbmUnLCAndW5kZXJsaW5lLW9mZnNldC00JywgJ3RleHQtWyNkNjIzMDBdJylcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3VuZGVybGluZScsICd1bmRlcmxpbmUtb2Zmc2V0LTQnLCAndGV4dC1bI2Q2MjMwMF0nKVxuICAgIGNvbnRhY3QoKVxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9