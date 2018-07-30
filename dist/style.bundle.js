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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/style.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/style.sass":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/sass/style.sass ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Fira+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext);\", \"\"]);\n\n// module\nexports.push([module.i, \"body {\\n  background: white;\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Fira Sans', sans-serif;\\n  overflow-x: hidden;\\n  letter-spacing: 0.06425em;\\n  color: #00082e; }\\n\\nul, ol {\\n  list-style-type: none;\\n  list-style: none; }\\n\\nh1, h2, h3, h4, h5, p {\\n  color: #00082e;\\n  line-height: 2.4em; }\\n\\na, a:active, a:hover, a:focus {\\n  text-decoration: none;\\n  color: #00082e; }\\n\\n.wrapper {\\n  padding: 30px;\\n  padding-top: 0; }\\n\\ntextarea {\\n  resize: none; }\\n\\nbutton {\\n  border: none;\\n  text-decoration: none;\\n  font-family: 'Fira Sans', sans-serif;\\n  -webkit-appearance: none;\\n  -moz-appearance: none; }\\n\\n.container {\\n  position: relative;\\n  min-height: 100vh;\\n  height: auto; }\\n\\n.container_flex {\\n  display: flex;\\n  justify-content: center;\\n  flex-flow: column; }\\n\\n.content-container {\\n  position: relative;\\n  margin-left: auto;\\n  margin-right: auto;\\n  max-width: 100%;\\n  padding-left: 40px;\\n  padding-right: 40px; }\\n  @media screen and (min-width: 992px) {\\n    .content-container {\\n      max-width: 80%;\\n      padding: 0; } }\\n\\n.wrapper {\\n  position: relative; }\\n\\n.row {\\n  display: flex;\\n  flex-direction: row;\\n  flex: 1 auto;\\n  flex-wrap: wrap; }\\n  @media screen and (min-width: 992px) {\\n    .row {\\n      flex-wrap: nowrap; } }\\n\\n.row_separated {\\n  margin-top: 1em;\\n  margin-bottom: 256px; }\\n\\n.col {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1 1 auto;\\n  flex-wrap: wrap;\\n  order: 2; }\\n  @media screen and (min-width: 992px) {\\n    .col {\\n      order: initial; } }\\n\\n.col_50 {\\n  width: 100%; }\\n  @media screen and (min-width: 992px) {\\n    .col_50 {\\n      width: 50%; } }\\n\\n.col_with-photo {\\n  order: 1; }\\n  @media screen and (min-width: 992px) {\\n    .col_with-photo {\\n      order: initial; } }\\n\\nstrong {\\n  color: #00eb7f;\\n  font-weight: 400; }\\n\\n.btn {\\n  padding: 1em 2em;\\n  background: #00eb7f;\\n  text-align: center;\\n  color: white;\\n  display: inline-block;\\n  cursor: pointer;\\n  font-weight: 700;\\n  -webkit-box-shadow: 0px 0px 30px -5px #00eb7f;\\n  -moz-box-shadow: 0px 0px 30px -5px #00eb7f;\\n  box-shadow: 0px 0px 30px -5px #00eb7f; }\\n\\n.btn_round {\\n  border-radius: 5em; }\\n\\n.btn_stable_50pt {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%); }\\n\\n.btn_center {\\n  margin-left: auto;\\n  margin-right: auto; }\\n\\n.net-background {\\n  position: absolute;\\n  width: calc(100% - 60px);\\n  height: calc(100% - 30px);\\n  z-index: -1; }\\n\\n.net-background__line {\\n  position: relative;\\n  height: 100%;\\n  border-right: 1px solid #ececec; }\\n\\n.net-background__line_first {\\n  border-left: 1px solid #ececec; }\\n\\n.photo_floating {\\n  position: -webkit-sticky;\\n  position: sticky; }\\n  .photo_floating img {\\n    width: 80%; }\\n\\n.photo_right {\\n  transform: none;\\n  text-align: right; }\\n\\n.photo_left {\\n  transform: none;\\n  text-align: left; }\\n\\n.photo_round {\\n  border-radius: 5px; }\\n\\n.photo_floating-20tp {\\n  top: 20px; }\\n\\n.icon {\\n  width: 20px;\\n  right: -10px;\\n  position: absolute;\\n  opacity: 1;\\n  background: white;\\n  z-index: 0; }\\n\\n#icon-1 {\\n  top: 10%; }\\n\\n#icon-4 {\\n  top: 18%; }\\n\\n#icon-7 {\\n  top: 27%; }\\n\\n#icon-10 {\\n  top: 37%; }\\n\\n#icon-13 {\\n  top: 45%; }\\n\\n#icon-16 {\\n  top: 54%; }\\n\\n#icon-19 {\\n  top: 60%; }\\n\\n#icon-22 {\\n  top: 66%; }\\n\\n#icon-25 {\\n  top: 73%; }\\n\\n#icon-28 {\\n  top: 79%; }\\n\\n#icon-31 {\\n  top: 86%; }\\n\\n#icon-34 {\\n  top: 94%; }\\n\\n#icon-2 {\\n  top: 5%; }\\n\\n#icon-5 {\\n  top: 20%; }\\n\\n#icon-8 {\\n  top: 31%; }\\n\\n#icon-11 {\\n  top: 40%; }\\n\\n#icon-14 {\\n  top: 48%; }\\n\\n#icon-17 {\\n  top: 57%; }\\n\\n#icon-20 {\\n  top: 63%; }\\n\\n#icon-23 {\\n  top: 70%; }\\n\\n#icon-26 {\\n  top: 76%; }\\n\\n#icon-29 {\\n  top: 82%; }\\n\\n#icon-32 {\\n  top: 89%; }\\n\\n#icon-35 {\\n  top: 96%; }\\n\\n#icon-3 {\\n  top: 3%; }\\n\\n#icon-3-1 {\\n  top: 12%; }\\n\\n#icon-3-2 {\\n  top: 17%; }\\n\\n#icon-6 {\\n  top: 24%; }\\n\\n#icon-9 {\\n  top: 32%; }\\n\\n#icon-12 {\\n  top: 42%; }\\n\\n#icon-15 {\\n  top: 48%; }\\n\\n#icon-18 {\\n  top: 59%; }\\n\\n#icon-21 {\\n  top: 67%; }\\n\\n#icon-24 {\\n  top: 73%; }\\n\\n#icon-27 {\\n  top: 80%; }\\n\\n#icon-30 {\\n  top: 87%; }\\n\\n#icon-33 {\\n  top: 92%; }\\n\\n.floating-box {\\n  text-align: center;\\n  background: white;\\n  border: 2px solid #ececec;\\n  background: white;\\n  margin-left: 16px;\\n  margin-right: 16px; }\\n\\n.floating-box_round {\\n  border-radius: 5px; }\\n\\n.floating-box__header {\\n  background: #ececec;\\n  padding-top: 12px;\\n  padding-bottom: 12px; }\\n  .floating-box__header h2 {\\n    font-size: 1em;\\n    display: inline-block; }\\n\\n.floating-box__content .btn {\\n  transform: translateY(50%); }\\n\\n.floating-box__content {\\n  padding: 16px;\\n  padding-bottom: 0; }\\n  .floating-box__content h3 {\\n    margin: 0;\\n    font-size: 1.6em; }\\n\\n.marked-element {\\n  color: #00eb7f; }\\n\\n.section-header {\\n  text-align: center; }\\n  .section-header h1 {\\n    font-size: 3em; }\\n\\n.form-group {\\n  margin-right: 1em;\\n  padding: 1em;\\n  padding-left: 0; }\\n  .form-group label {\\n    color: #00eb7f; }\\n\\n.form__input {\\n  border: none;\\n  padding-top: 12px;\\n  padding-bottom: 12px;\\n  width: 100%;\\n  color: #00eb7f; }\\n\\n.form__input_on-footer {\\n  background: transparent;\\n  border-bottom: 2px solid white; }\\n  .form__input_on-footer:active, .form__input_on-footer:focus {\\n    border: 0;\\n    outline: 0;\\n    border-bottom: 2px solid #00eb7f; }\\n\\n.img-bg {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  overflow: hidden;\\n  background-size: cover;\\n  background-position: center; }\\n\\n#main {\\n  padding-bottom: 0;\\n  margin-bottom: 72px; }\\n\\n.main__heading {\\n  max-width: 1200px;\\n  text-align: left;\\n  margin-left: auto;\\n  margin-right: auto; }\\n  .main__heading h1 {\\n    font-size: 4em;\\n    font-weight: 400;\\n    cursor: pointer;\\n    text-align: center; }\\n    @media screen and (min-width: 992px) {\\n      .main__heading h1 {\\n        font-size: 2.8em;\\n        text-align: left; } }\\n    .main__heading h1 i {\\n      font-weight: 600; }\\n\\n.main__heading_introduction h1 {\\n  font-weight: 400;\\n  font-size: 2.4em;\\n  text-align: center; }\\n\\n.main__heading_additional p {\\n  font-weight: 400;\\n  font-size: 1.4em;\\n  color: #00082e;\\n  background: white;\\n  text-align: center; }\\n  @media screen and (min-width: 992px) {\\n    .main__heading_additional p {\\n      text-align: left;\\n      font-size: 1.2em; } }\\n\\n.main__heading_list {\\n  position: relative;\\n  padding: 0; }\\n  .main__heading_list ul {\\n    padding: 0;\\n    width: 100%; }\\n    @media screen and (min-width: 992px) {\\n      .main__heading_list ul {\\n        width: auto; } }\\n  .main__heading_list li {\\n    padding-right: 3em; }\\n\\n.headers__loader {\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  left: 0;\\n  background: #00082e;\\n  height: 1px; }\\n\\n.headers__loader_progress {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  height: 1px;\\n  width: 30%;\\n  background: #00eb7f; }\\n\\n.main__h h1 {\\n  color: #d7d7ca;\\n  margin: 0; }\\n\\n.main__h_active h1 {\\n  color: #00082e; }\\n\\n.headers__item {\\n  color: #00082e !important;\\n  transition: all .3s ease;\\n  font-weight: 400; }\\n\\n.headers__item_active {\\n  color: #00eb7f !important;\\n  transition: all .3s ease;\\n  transform: translateX(20px); }\\n\\n.descriptions_hidden {\\n  height: 0; }\\n\\n.descriptions_visible {\\n  height: 100%; }\\n\\n.main-menu {\\n  position: fixed;\\n  z-index: 9999;\\n  width: 100%;\\n  top: -100%;\\n  top: 0;\\n  left: 0;\\n  background: #00082e; }\\n\\n.main-menu__opts {\\n  position: relative;\\n  text-align: center;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%); }\\n  .main-menu__opts li {\\n    padding: 2em 0;\\n    z-index: 999; }\\n    .main-menu__opts li a {\\n      font-weight: 200;\\n      font-size: 4em;\\n      position: relative;\\n      color: #00eb7f; }\\n      .main-menu__opts li a:before {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        opacity: .4;\\n        font-size: 10em; }\\n      .main-menu__opts li a:hover:before {\\n        content: attr(data-title);\\n        z-index: 0;\\n        left: 50%;\\n        top: 50%;\\n        transform: translate(-50%, 0); }\\n\\n#header {\\n  position: absolute;\\n  width: calc(100% - 60px); }\\n\\n.header__logo {\\n  margin: 40px; }\\n\\n.header__hamburger {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  background: transparent;\\n  cursor: pointer;\\n  z-index: 9999;\\n  margin: 40px;\\n  padding: 15px;\\n  width: 28px;\\n  height: 24px;\\n  border-radius: 50%;\\n  display: inline-block; }\\n  .header__hamburger span {\\n    position: relative;\\n    display: inline-block;\\n    top: -5px; }\\n    .header__hamburger span, .header__hamburger span:before, .header__hamburger span:after {\\n      background: #00082e;\\n      width: 24px;\\n      height: 2px; }\\n    .header__hamburger span:before, .header__hamburger span:after {\\n      position: absolute;\\n      content: ''; }\\n\\n.header__logo {\\n  position: relative;\\n  font-size: 1em;\\n  height: auto;\\n  overflow: hidden;\\n  width: 100%;\\n  z-index: 9999; }\\n  .header__logo a {\\n    position: relative;\\n    float: left;\\n    font-weight: 700;\\n    padding: 12px;\\n    text-decoration: none;\\n    height: 50px;\\n    line-height: 25px; }\\n    .header__logo a:before {\\n      content: '';\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 0%;\\n      height: 100%;\\n      z-index: -1; }\\n    .header__logo a:hover {\\n      background: white; }\\n      .header__logo a:hover:before {\\n        width: 100%; }\\n\\n#about {\\n  padding-top: 0;\\n  min-height: 100vh;\\n  height: auto; }\\n\\n.about__text {\\n  padding-left: 8em;\\n  padding-right: 8em; }\\n  .about__text h1 {\\n    font-size: 2.4em;\\n    font-weight: 400;\\n    line-height: 1;\\n    margin: 0; }\\n  .about__text p {\\n    font-weight: 400;\\n    color: #00082e;\\n    padding-top: 2em; }\\n\\n.about__text_separated {\\n  margin-top: 128px;\\n  margin-bottom: 1em; }\\n\\n#prices__list {\\n  margin-top: 3em;\\n  margin-bottom: 3em; }\\n\\n.price__pack {\\n  width: 33.333%; }\\n\\nfooter {\\n  background: #00082e; }\\n  footer h1 {\\n    color: white; }\\n\\n.footer__contact {\\n  padding-bottom: 128px;\\n  padding-top: 2em; }\\n\\n.footer__credentials {\\n  border-top: 1px solid #00eb7f;\\n  padding-top: 2em;\\n  padding-bottom: 2em; }\\n  .footer__credentials p {\\n    color: white; }\\n\\n.footer__header {\\n  padding: 60px;\\n  text-align: center; }\\n\\n.contact-info {\\n  padding-left: 2em; }\\n  .contact-info p {\\n    color: white;\\n    margin: 0; }\\n    .contact-info p i {\\n      color: #00eb7f;\\n      font-weight: 500; }\\n\\n#apps {\\n  padding: 0; }\\n\\n#examples {\\n  padding: 0;\\n  margin-top: 2em;\\n  margin-bottom: 3em; }\\n  #examples li {\\n    width: 50%;\\n    height: 180px;\\n    background: white;\\n    text-align: center;\\n    position: relative;\\n    overflow: hidden;\\n    margin: 3em;\\n    cursor: pointer; }\\n    #examples li:hover .examples__info {\\n      bottom: 0;\\n      transition: all .3s ease; }\\n\\n.examples__info {\\n  position: absolute;\\n  content: '';\\n  width: 100%;\\n  height: 100%;\\n  bottom: -100%;\\n  z-index: 9999;\\n  transition: all .3s ease;\\n  display: flex;\\n  flex-flow: column;\\n  justify-content: center; }\\n  .examples__info p {\\n    color: #00eb7f;\\n    font-weight: 700; }\\n\\n.photo__cover {\\n  background: #00082e;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: -1;\\n  opacity: .8; }\\n\\n.features {\\n  position: relative; }\\n\\n.features__item {\\n  margin: 3em; }\\n  .features__item h2 {\\n    margin: 0; }\\n\\n.steps__background {\\n  z-index: -1; }\\n  .steps__background:before {\\n    position: absolute;\\n    content: '';\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background: #00082e;\\n    opacity: .6; }\\n\\n#steps {\\n  height: 60vh;\\n  text-align: center; }\\n  #steps h2, #steps h1 {\\n    color: white; }\\n\\n#benefits {\\n  padding: 128px 0; }\\n\\n.benefits__info {\\n  text-align: center; }\\n  .benefits__info h1, .benefits__info h2 {\\n    margin: 0; }\\n  .benefits__info h1 {\\n    font-weight: 400; }\\n  .benefits__info h2 {\\n    color: #00eb7f; }\\n\\n#library {\\n  position: fixed;\\n  width: 100%;\\n  height: 100%; }\\n\\n.library {\\n  visibility: hidden;\\n  z-index: 9999; }\\n\\n.library_active {\\n  visibility: visible; }\\n\\n.window-pop-up__background {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: #00eb7f;\\n  opacity: .6; }\\n\\n.window-pop-up {\\n  position: fixed;\\n  width: 80%;\\n  height: 80%;\\n  background: white;\\n  border-radius: 5px;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%); }\\n\\n.library__bookmarks {\\n  padding: 0;\\n  display: inline-block;\\n  border-bottom: 2px solid #ececec; }\\n\\n.library__bookmark {\\n  position: relative;\\n  display: inline-block;\\n  float: left;\\n  padding: 1em 2em;\\n  cursor: pointer; }\\n\\n.library__bookmark_active {\\n  z-index: 9999; }\\n  .library__bookmark_active:before {\\n    content: '';\\n    position: absolute;\\n    bottom: -2px;\\n    width: 100%;\\n    height: 2px;\\n    background: #00eb7f;\\n    left: 0; }\\n\\n.main-menu {\\n  height: 0%;\\n  visibility: hidden;\\n  transition: all .2s ease; }\\n\\n.main-menu_active {\\n  height: 100%;\\n  visibility: visible;\\n  transition: all .2s ease; }\\n\\n.header__hamburger span:before {\\n  top: -6px; }\\n\\n.header__hamburger span:after {\\n  top: 6px; }\\n\\n.header__hamburger_active span {\\n  width: 0; }\\n  .header__hamburger_active span, .header__hamburger_active span:after, .header__hamburger_active span:before {\\n    z-index: 1002;\\n    background: white; }\\n  .header__hamburger_active span:after {\\n    transform: rotate(45deg);\\n    top: 50%; }\\n  .header__hamburger_active span:before {\\n    transform: rotate(-45deg);\\n    top: 50%; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/sass/style.sass?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n\t// get current location\n\tvar location = typeof window !== \"undefined\" && window.location;\n\n\tif (!location) {\n\t\tthrow new Error(\"fixUrls requires window.location\");\n\t}\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t\treturn css;\n\t}\n\n\tvar baseUrl = location.protocol + \"//\" + location.host;\n\tvar currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n This regular expression is just a way to recursively match brackets within\n a string.\n \t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n    (  = Start a capturing group\n      (?:  = Start a non-capturing group\n          [^)(]  = Match anything that isn't a parentheses\n          |  = OR\n          \\(  = Match a start parentheses\n              (?:  = Start another non-capturing groups\n                  [^)(]+  = Match anything that isn't a parentheses\n                  |  = OR\n                  \\(  = Match a start parentheses\n                      [^)(]*  = Match anything that isn't a parentheses\n                  \\)  = Match a end parentheses\n              )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n  \\)  = Match a close parens\n \t /gi  = Get all matches, not the first.  Be case insensitive.\n  */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function (fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl.trim().replace(/^\"(.*)\"$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t}).replace(/^'(.*)'$/, function (o, $1) {\n\t\t\treturn $1;\n\t\t});\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t\treturn fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t\t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/sass/style.sass":
/*!*****************************!*\
  !*** ./src/sass/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./style.sass */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/sass/style.sass\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/sass/style.sass?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./sass/style.sass */ \"./src/sass/style.sass\");\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ })

/******/ });