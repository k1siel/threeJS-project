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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n    color: rgb(173, 176, 190);\\r\\n    background-color: rgb(4, 5, 14);\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://three-js-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://three-js-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://three-js-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://three-js-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./src/components/Animation.js":
/*!*************************************!*\
  !*** ./src/components/Animation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animation)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Animation {\r\n    constructor(mesh) {\r\n        // mesh modelu\r\n        this.mesh = mesh;\r\n        // mixer\r\n        this.mixer = new three__WEBPACK_IMPORTED_MODULE_0__.AnimationMixer(this.mesh);\r\n      \r\n    }\r\n\r\n    playAnim(animName) {\r\n        this.animName = animName\r\n        this.mixer.uncacheRoot(this.mesh)\r\n        this.mixer.clipAction(this.animName).play()\r\n        \r\n\r\n    }\r\n\r\n    // update mixer\r\n    update(delta) {\r\n        if (this.mixer) {\r\n            this.mixer.update(delta);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://three-js-project/./src/components/Animation.js?");

/***/ }),

/***/ "./src/components/Camera.js":
/*!**********************************!*\
  !*** ./src/components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Camera {\r\n    constructor(renderer) {\r\n        const width = renderer.domElement.width;\r\n        const height = renderer.domElement.height;\r\n\r\n        this.threeCamera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, width / height, 0.1, 10000);\r\n        this.threeCamera.position.set(-200, 200, -200);\r\n        this.threeCamera.lookAt(new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0))\r\n\r\n        this.updateSize(renderer);\r\n\r\n        window.addEventListener('resize', () => this.updateSize(renderer), false);\r\n    }\r\n\r\n    updateSize(renderer) {\r\n\r\n        this.threeCamera.aspect = renderer.domElement.width / renderer.domElement.height;\r\n        this.threeCamera.updateProjectionMatrix();\r\n    }\r\n}\n\n//# sourceURL=webpack://three-js-project/./src/components/Camera.js?");

/***/ }),

/***/ "./src/components/Config.js":
/*!**********************************!*\
  !*** ./src/components/Config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    rotateLeft: false,\r\n    rotateRight: false,\r\n    moveForward: false,\r\n    moveBackward: false,\r\n});\n\n//# sourceURL=webpack://three-js-project/./src/components/Config.js?");

/***/ }),

/***/ "./src/components/Ico.js":
/*!*******************************!*\
  !*** ./src/components/Ico.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ico)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Ico {\r\n\r\n    constructor(scene) {\r\n\r\n        this.scene = scene;\r\n        this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1000, 1000);\r\n        this.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshPhongMaterial({\r\n            side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,\r\n            color: 0xAAAAAA,\r\n            shininess: 50,\r\n        })\r\n        this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(this.geometry, this.material);\r\n        this.scene.add(this.mesh)\r\n        this.mesh.rotation.x = Math.PI / 2\r\n        this.mesh.position.y = -1\r\n\r\n\r\n        this.light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0x00AAff, 0.7)\r\n        this.scene.add(this.light)\r\n\r\n    \r\n    }\r\n    \r\n\r\n}\r\n\n\n//# sourceURL=webpack://three-js-project/./src/components/Ico.js?");

/***/ }),

/***/ "./src/components/Keyboard.js":
/*!************************************!*\
  !*** ./src/components/Keyboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ \"./src/components/Animation.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ \"./src/components/Config.js\");\n\r\n\r\n\r\nconst KEYS = {\r\n    \"left\": 37,\r\n    \"up\": 38,\r\n    \"right\": 39,\r\n    \"down\": 40,\r\n};\r\n\r\nclass Keyboard {\r\n    constructor(domElement, animation, modelMesh) {\r\n\r\n        this.domElement = domElement;\r\n        this.animation = animation\r\n        this.modelMesh = modelMesh\r\n\r\n        // events\r\n        this.domElement.addEventListener('keydown', event => this.onKeyDown(event), false);\r\n        this.domElement.addEventListener('keyup', event => this.onKeyUp(event), false);\r\n\r\n\r\n    }\r\n\r\n    onKeyUp(event) {\r\n        switch (event.keyCode) {\r\n            case KEYS.up:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.moveForward = false;\r\n                break;\r\n            case KEYS.left:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.rotateLeft = false;\r\n                break;\r\n            case KEYS.right:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.rotateRight = false;\r\n                break;\r\n            case KEYS.down:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.moveBackward = false;\r\n                break;\r\n\r\n\r\n        }\r\n        console.log('onKeyChange', event.keyCode)\r\n    }\r\n\r\n    onKeyDown(event) {\r\n        switch (event.keyCode) {\r\n            case KEYS.up:               \r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.moveForward = true;\r\n                break;\r\n            case KEYS.left:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.rotateLeft = true;\r\n                break;\r\n            case KEYS.right:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.rotateRight = true;\r\n                break;\r\n            case KEYS.down:\r\n                _Config__WEBPACK_IMPORTED_MODULE_1__.default.moveBackward = true;\r\n        }\r\n\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://three-js-project/./src/components/Keyboard.js?");

/***/ }),

/***/ "./src/components/MD2Loader.js":
/*!*************************************!*\
  !*** ./src/components/MD2Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MD2Loader\": () => (/* binding */ MD2Loader)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\nvar MD2Loader = function ( manager ) {\n\n\tthree__WEBPACK_IMPORTED_MODULE_0__.Loader.call( this, manager );\n\n};\n\nMD2Loader.prototype = Object.assign( Object.create( three__WEBPACK_IMPORTED_MODULE_0__.Loader.prototype ), {\n\n\tconstructor: MD2Loader,\n\n\tload: function ( url, onLoad, onProgress, onError ) {\n\n\t\tvar scope = this;\n\n\t\tvar loader = new three__WEBPACK_IMPORTED_MODULE_0__.FileLoader( scope.manager );\n\t\tloader.setPath( scope.path );\n\t\tloader.setResponseType( 'arraybuffer' );\n\t\tloader.setRequestHeader( scope.requestHeader );\n\t\tloader.setWithCredentials( scope.withCredentials );\n\t\tloader.load( url, function ( buffer ) {\n\n\t\t\ttry {\n\n\t\t\t\tonLoad( scope.parse( buffer ) );\n\n\t\t\t} catch ( e ) {\n\n\t\t\t\tif ( onError ) {\n\n\t\t\t\t\tonError( e );\n\n\t\t\t\t} else {\n\n\t\t\t\t\tconsole.error( e );\n\n\t\t\t\t}\n\n\t\t\t\tscope.manager.itemError( url );\n\n\t\t\t}\n\n\t\t}, onProgress, onError );\n\n\t},\n\n\tparse: ( function () {\n\n\t\tvar normalData = [\n\t\t\t[ - 0.525731, 0.000000, 0.850651 ], [ - 0.442863, 0.238856, 0.864188 ],\n\t\t\t[ - 0.295242, 0.000000, 0.955423 ], [ - 0.309017, 0.500000, 0.809017 ],\n\t\t\t[ - 0.162460, 0.262866, 0.951056 ], [ 0.000000, 0.000000, 1.000000 ],\n\t\t\t[ 0.000000, 0.850651, 0.525731 ], [ - 0.147621, 0.716567, 0.681718 ],\n\t\t\t[ 0.147621, 0.716567, 0.681718 ], [ 0.000000, 0.525731, 0.850651 ],\n\t\t\t[ 0.309017, 0.500000, 0.809017 ], [ 0.525731, 0.000000, 0.850651 ],\n\t\t\t[ 0.295242, 0.000000, 0.955423 ], [ 0.442863, 0.238856, 0.864188 ],\n\t\t\t[ 0.162460, 0.262866, 0.951056 ], [ - 0.681718, 0.147621, 0.716567 ],\n\t\t\t[ - 0.809017, 0.309017, 0.500000 ], [ - 0.587785, 0.425325, 0.688191 ],\n\t\t\t[ - 0.850651, 0.525731, 0.000000 ], [ - 0.864188, 0.442863, 0.238856 ],\n\t\t\t[ - 0.716567, 0.681718, 0.147621 ], [ - 0.688191, 0.587785, 0.425325 ],\n\t\t\t[ - 0.500000, 0.809017, 0.309017 ], [ - 0.238856, 0.864188, 0.442863 ],\n\t\t\t[ - 0.425325, 0.688191, 0.587785 ], [ - 0.716567, 0.681718, - 0.147621 ],\n\t\t\t[ - 0.500000, 0.809017, - 0.309017 ], [ - 0.525731, 0.850651, 0.000000 ],\n\t\t\t[ 0.000000, 0.850651, - 0.525731 ], [ - 0.238856, 0.864188, - 0.442863 ],\n\t\t\t[ 0.000000, 0.955423, - 0.295242 ], [ - 0.262866, 0.951056, - 0.162460 ],\n\t\t\t[ 0.000000, 1.000000, 0.000000 ], [ 0.000000, 0.955423, 0.295242 ],\n\t\t\t[ - 0.262866, 0.951056, 0.162460 ], [ 0.238856, 0.864188, 0.442863 ],\n\t\t\t[ 0.262866, 0.951056, 0.162460 ], [ 0.500000, 0.809017, 0.309017 ],\n\t\t\t[ 0.238856, 0.864188, - 0.442863 ], [ 0.262866, 0.951056, - 0.162460 ],\n\t\t\t[ 0.500000, 0.809017, - 0.309017 ], [ 0.850651, 0.525731, 0.000000 ],\n\t\t\t[ 0.716567, 0.681718, 0.147621 ], [ 0.716567, 0.681718, - 0.147621 ],\n\t\t\t[ 0.525731, 0.850651, 0.000000 ], [ 0.425325, 0.688191, 0.587785 ],\n\t\t\t[ 0.864188, 0.442863, 0.238856 ], [ 0.688191, 0.587785, 0.425325 ],\n\t\t\t[ 0.809017, 0.309017, 0.500000 ], [ 0.681718, 0.147621, 0.716567 ],\n\t\t\t[ 0.587785, 0.425325, 0.688191 ], [ 0.955423, 0.295242, 0.000000 ],\n\t\t\t[ 1.000000, 0.000000, 0.000000 ], [ 0.951056, 0.162460, 0.262866 ],\n\t\t\t[ 0.850651, - 0.525731, 0.000000 ], [ 0.955423, - 0.295242, 0.000000 ],\n\t\t\t[ 0.864188, - 0.442863, 0.238856 ], [ 0.951056, - 0.162460, 0.262866 ],\n\t\t\t[ 0.809017, - 0.309017, 0.500000 ], [ 0.681718, - 0.147621, 0.716567 ],\n\t\t\t[ 0.850651, 0.000000, 0.525731 ], [ 0.864188, 0.442863, - 0.238856 ],\n\t\t\t[ 0.809017, 0.309017, - 0.500000 ], [ 0.951056, 0.162460, - 0.262866 ],\n\t\t\t[ 0.525731, 0.000000, - 0.850651 ], [ 0.681718, 0.147621, - 0.716567 ],\n\t\t\t[ 0.681718, - 0.147621, - 0.716567 ], [ 0.850651, 0.000000, - 0.525731 ],\n\t\t\t[ 0.809017, - 0.309017, - 0.500000 ], [ 0.864188, - 0.442863, - 0.238856 ],\n\t\t\t[ 0.951056, - 0.162460, - 0.262866 ], [ 0.147621, 0.716567, - 0.681718 ],\n\t\t\t[ 0.309017, 0.500000, - 0.809017 ], [ 0.425325, 0.688191, - 0.587785 ],\n\t\t\t[ 0.442863, 0.238856, - 0.864188 ], [ 0.587785, 0.425325, - 0.688191 ],\n\t\t\t[ 0.688191, 0.587785, - 0.425325 ], [ - 0.147621, 0.716567, - 0.681718 ],\n\t\t\t[ - 0.309017, 0.500000, - 0.809017 ], [ 0.000000, 0.525731, - 0.850651 ],\n\t\t\t[ - 0.525731, 0.000000, - 0.850651 ], [ - 0.442863, 0.238856, - 0.864188 ],\n\t\t\t[ - 0.295242, 0.000000, - 0.955423 ], [ - 0.162460, 0.262866, - 0.951056 ],\n\t\t\t[ 0.000000, 0.000000, - 1.000000 ], [ 0.295242, 0.000000, - 0.955423 ],\n\t\t\t[ 0.162460, 0.262866, - 0.951056 ], [ - 0.442863, - 0.238856, - 0.864188 ],\n\t\t\t[ - 0.309017, - 0.500000, - 0.809017 ], [ - 0.162460, - 0.262866, - 0.951056 ],\n\t\t\t[ 0.000000, - 0.850651, - 0.525731 ], [ - 0.147621, - 0.716567, - 0.681718 ],\n\t\t\t[ 0.147621, - 0.716567, - 0.681718 ], [ 0.000000, - 0.525731, - 0.850651 ],\n\t\t\t[ 0.309017, - 0.500000, - 0.809017 ], [ 0.442863, - 0.238856, - 0.864188 ],\n\t\t\t[ 0.162460, - 0.262866, - 0.951056 ], [ 0.238856, - 0.864188, - 0.442863 ],\n\t\t\t[ 0.500000, - 0.809017, - 0.309017 ], [ 0.425325, - 0.688191, - 0.587785 ],\n\t\t\t[ 0.716567, - 0.681718, - 0.147621 ], [ 0.688191, - 0.587785, - 0.425325 ],\n\t\t\t[ 0.587785, - 0.425325, - 0.688191 ], [ 0.000000, - 0.955423, - 0.295242 ],\n\t\t\t[ 0.000000, - 1.000000, 0.000000 ], [ 0.262866, - 0.951056, - 0.162460 ],\n\t\t\t[ 0.000000, - 0.850651, 0.525731 ], [ 0.000000, - 0.955423, 0.295242 ],\n\t\t\t[ 0.238856, - 0.864188, 0.442863 ], [ 0.262866, - 0.951056, 0.162460 ],\n\t\t\t[ 0.500000, - 0.809017, 0.309017 ], [ 0.716567, - 0.681718, 0.147621 ],\n\t\t\t[ 0.525731, - 0.850651, 0.000000 ], [ - 0.238856, - 0.864188, - 0.442863 ],\n\t\t\t[ - 0.500000, - 0.809017, - 0.309017 ], [ - 0.262866, - 0.951056, - 0.162460 ],\n\t\t\t[ - 0.850651, - 0.525731, 0.000000 ], [ - 0.716567, - 0.681718, - 0.147621 ],\n\t\t\t[ - 0.716567, - 0.681718, 0.147621 ], [ - 0.525731, - 0.850651, 0.000000 ],\n\t\t\t[ - 0.500000, - 0.809017, 0.309017 ], [ - 0.238856, - 0.864188, 0.442863 ],\n\t\t\t[ - 0.262866, - 0.951056, 0.162460 ], [ - 0.864188, - 0.442863, 0.238856 ],\n\t\t\t[ - 0.809017, - 0.309017, 0.500000 ], [ - 0.688191, - 0.587785, 0.425325 ],\n\t\t\t[ - 0.681718, - 0.147621, 0.716567 ], [ - 0.442863, - 0.238856, 0.864188 ],\n\t\t\t[ - 0.587785, - 0.425325, 0.688191 ], [ - 0.309017, - 0.500000, 0.809017 ],\n\t\t\t[ - 0.147621, - 0.716567, 0.681718 ], [ - 0.425325, - 0.688191, 0.587785 ],\n\t\t\t[ - 0.162460, - 0.262866, 0.951056 ], [ 0.442863, - 0.238856, 0.864188 ],\n\t\t\t[ 0.162460, - 0.262866, 0.951056 ], [ 0.309017, - 0.500000, 0.809017 ],\n\t\t\t[ 0.147621, - 0.716567, 0.681718 ], [ 0.000000, - 0.525731, 0.850651 ],\n\t\t\t[ 0.425325, - 0.688191, 0.587785 ], [ 0.587785, - 0.425325, 0.688191 ],\n\t\t\t[ 0.688191, - 0.587785, 0.425325 ], [ - 0.955423, 0.295242, 0.000000 ],\n\t\t\t[ - 0.951056, 0.162460, 0.262866 ], [ - 1.000000, 0.000000, 0.000000 ],\n\t\t\t[ - 0.850651, 0.000000, 0.525731 ], [ - 0.955423, - 0.295242, 0.000000 ],\n\t\t\t[ - 0.951056, - 0.162460, 0.262866 ], [ - 0.864188, 0.442863, - 0.238856 ],\n\t\t\t[ - 0.951056, 0.162460, - 0.262866 ], [ - 0.809017, 0.309017, - 0.500000 ],\n\t\t\t[ - 0.864188, - 0.442863, - 0.238856 ], [ - 0.951056, - 0.162460, - 0.262866 ],\n\t\t\t[ - 0.809017, - 0.309017, - 0.500000 ], [ - 0.681718, 0.147621, - 0.716567 ],\n\t\t\t[ - 0.681718, - 0.147621, - 0.716567 ], [ - 0.850651, 0.000000, - 0.525731 ],\n\t\t\t[ - 0.688191, 0.587785, - 0.425325 ], [ - 0.587785, 0.425325, - 0.688191 ],\n\t\t\t[ - 0.425325, 0.688191, - 0.587785 ], [ - 0.425325, - 0.688191, - 0.587785 ],\n\t\t\t[ - 0.587785, - 0.425325, - 0.688191 ], [ - 0.688191, - 0.587785, - 0.425325 ]\n\t\t];\n\n\t\treturn function ( buffer ) {\n\n\t\t\tvar data = new DataView( buffer );\n\n\t\t\t// http://tfc.duke.free.fr/coding/md2-specs-en.html\n\n\t\t\tvar header = {};\n\t\t\tvar headerNames = [\n\t\t\t\t'ident', 'version',\n\t\t\t\t'skinwidth', 'skinheight',\n\t\t\t\t'framesize',\n\t\t\t\t'num_skins', 'num_vertices', 'num_st', 'num_tris', 'num_glcmds', 'num_frames',\n\t\t\t\t'offset_skins', 'offset_st', 'offset_tris', 'offset_frames', 'offset_glcmds', 'offset_end'\n\t\t\t];\n\n\t\t\tfor ( var i = 0; i < headerNames.length; i ++ ) {\n\n\t\t\t\theader[ headerNames[ i ] ] = data.getInt32( i * 4, true );\n\n\t\t\t}\n\n\t\t\tif ( header.ident !== 844121161 || header.version !== 8 ) {\n\n\t\t\t\tconsole.error( 'Not a valid MD2 file' );\n\t\t\t\treturn;\n\n\t\t\t}\n\n\t\t\tif ( header.offset_end !== data.byteLength ) {\n\n\t\t\t\tconsole.error( 'Corrupted MD2 file' );\n\t\t\t\treturn;\n\n\t\t\t}\n\n\t\t\t//\n\n\t\t\tvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();\n\n\t\t\t// uvs\n\n\t\t\tvar uvsTemp = [];\n\t\t\tvar offset = header.offset_st;\n\n\t\t\tfor ( var i = 0, l = header.num_st; i < l; i ++ ) {\n\n\t\t\t\tvar u = data.getInt16( offset + 0, true );\n\t\t\t\tvar v = data.getInt16( offset + 2, true );\n\n\t\t\t\tuvsTemp.push( u / header.skinwidth, 1 - ( v / header.skinheight ) );\n\n\t\t\t\toffset += 4;\n\n\t\t\t}\n\n\t\t\t// triangles\n\n\t\t\toffset = header.offset_tris;\n\n\t\t\tvar vertexIndices = [];\n\t\t\tvar uvIndices = [];\n\n\t\t\tfor ( var i = 0, l = header.num_tris; i < l; i ++ ) {\n\n\t\t\t\tvertexIndices.push(\n\t\t\t\t\tdata.getUint16( offset + 0, true ),\n\t\t\t\t\tdata.getUint16( offset + 2, true ),\n\t\t\t\t\tdata.getUint16( offset + 4, true )\n\t\t\t\t);\n\n\t\t\t\tuvIndices.push(\n\t\t\t\t\tdata.getUint16( offset + 6, true ),\n\t\t\t\t\tdata.getUint16( offset + 8, true ),\n\t\t\t\t\tdata.getUint16( offset + 10, true )\n\t\t\t\t);\n\n\t\t\t\toffset += 12;\n\n\t\t\t}\n\n\t\t\t// frames\n\n\t\t\tvar translation = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\t\t\tvar scale = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();\n\n\t\t\tvar frames = [];\n\n\t\t\toffset = header.offset_frames;\n\n\t\t\tfor ( var i = 0, l = header.num_frames; i < l; i ++ ) {\n\n\t\t\t\tscale.set(\n\t\t\t\t\tdata.getFloat32( offset + 0, true ),\n\t\t\t\t\tdata.getFloat32( offset + 4, true ),\n\t\t\t\t\tdata.getFloat32( offset + 8, true )\n\t\t\t\t);\n\n\t\t\t\ttranslation.set(\n\t\t\t\t\tdata.getFloat32( offset + 12, true ),\n\t\t\t\t\tdata.getFloat32( offset + 16, true ),\n\t\t\t\t\tdata.getFloat32( offset + 20, true )\n\t\t\t\t);\n\n\t\t\t\toffset += 24;\n\n\t\t\t\tvar string = [];\n\n\t\t\t\tfor ( var j = 0; j < 16; j ++ ) {\n\n\t\t\t\t\tvar character = data.getUint8( offset + j, true );\n\t\t\t\t\tif ( character === 0 ) break;\n\n\t\t\t\t\tstring[ j ] = character;\n\n\t\t\t\t}\n\n\t\t\t\tvar frame = {\n\t\t\t\t\tname: String.fromCharCode.apply( null, string ),\n\t\t\t\t\tvertices: [],\n\t\t\t\t\tnormals: []\n\t\t\t\t};\n\n\t\t\t\toffset += 16;\n\n\t\t\t\tfor ( var j = 0; j < header.num_vertices; j ++ ) {\n\n\t\t\t\t\tvar x = data.getUint8( offset ++, true );\n\t\t\t\t\tvar y = data.getUint8( offset ++, true );\n\t\t\t\t\tvar z = data.getUint8( offset ++, true );\n\t\t\t\t\tvar n = normalData[ data.getUint8( offset ++, true ) ];\n\n\t\t\t\t\tx = x * scale.x + translation.x;\n\t\t\t\t\ty = y * scale.y + translation.y;\n\t\t\t\t\tz = z * scale.z + translation.z;\n\n\t\t\t\t\tframe.vertices.push( x, z, y ); // convert to Y-up\n\t\t\t\t\tframe.normals.push( n[ 0 ], n[ 2 ], n[ 1 ] ); // convert to Y-up\n\n\t\t\t\t}\n\n\t\t\t\tframes.push( frame );\n\n\t\t\t}\n\n\t\t\t// static\n\n\t\t\tvar positions = [];\n\t\t\tvar normals = [];\n\t\t\tvar uvs = [];\n\n\t\t\tvar verticesTemp = frames[ 0 ].vertices;\n\t\t\tvar normalsTemp = frames[ 0 ].normals;\n\n\t\t\tfor ( var i = 0, l = vertexIndices.length; i < l; i ++ ) {\n\n\t\t\t\tvar vertexIndex = vertexIndices[ i ];\n\t\t\t\tvar stride = vertexIndex * 3;\n\n\t\t\t\t//\n\n\t\t\t\tvar x = verticesTemp[ stride ];\n\t\t\t\tvar y = verticesTemp[ stride + 1 ];\n\t\t\t\tvar z = verticesTemp[ stride + 2 ];\n\n\t\t\t\tpositions.push( x, y, z );\n\n\t\t\t\t//\n\n\t\t\t\tvar nx = normalsTemp[ stride ];\n\t\t\t\tvar ny = normalsTemp[ stride + 1 ];\n\t\t\t\tvar nz = normalsTemp[ stride + 2 ];\n\n\t\t\t\tnormals.push( nx, ny, nz );\n\n\t\t\t\t//\n\n\t\t\t\tvar uvIndex = uvIndices[ i ];\n\t\t\t\tstride = uvIndex * 2;\n\n\t\t\t\tvar u = uvsTemp[ stride ];\n\t\t\t\tvar v = uvsTemp[ stride + 1 ];\n\n\t\t\t\tuvs.push( u, v );\n\n\t\t\t}\n\n\t\t\tgeometry.setAttribute( 'position', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( positions, 3 ) );\n\t\t\tgeometry.setAttribute( 'normal', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( normals, 3 ) );\n\t\t\tgeometry.setAttribute( 'uv', new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( uvs, 2 ) );\n\n\t\t\t// animation\n\n\t\t\tvar morphPositions = [];\n\t\t\tvar morphNormals = [];\n\n\t\t\tfor ( var i = 0, l = frames.length; i < l; i ++ ) {\n\n\t\t\t\tvar frame = frames[ i ];\n\t\t\t\tvar attributeName = frame.name;\n\n\t\t\t\tif ( frame.vertices.length > 0 ) {\n\n\t\t\t\t\tvar positions = [];\n\n\t\t\t\t\tfor ( var j = 0, jl = vertexIndices.length; j < jl; j ++ ) {\n\n\t\t\t\t\t\tvar vertexIndex = vertexIndices[ j ];\n\t\t\t\t\t\tvar stride = vertexIndex * 3;\n\n\t\t\t\t\t\tvar x = frame.vertices[ stride ];\n\t\t\t\t\t\tvar y = frame.vertices[ stride + 1 ];\n\t\t\t\t\t\tvar z = frame.vertices[ stride + 2 ];\n\n\t\t\t\t\t\tpositions.push( x, y, z );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tvar positionAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( positions, 3 );\n\t\t\t\t\tpositionAttribute.name = attributeName;\n\n\t\t\t\t\tmorphPositions.push( positionAttribute );\n\n\t\t\t\t}\n\n\t\t\t\tif ( frame.normals.length > 0 ) {\n\n\t\t\t\t\tvar normals = [];\n\n\t\t\t\t\tfor ( var j = 0, jl = vertexIndices.length; j < jl; j ++ ) {\n\n\t\t\t\t\t\tvar vertexIndex = vertexIndices[ j ];\n\t\t\t\t\t\tvar stride = vertexIndex * 3;\n\n\t\t\t\t\t\tvar nx = frame.normals[ stride ];\n\t\t\t\t\t\tvar ny = frame.normals[ stride + 1 ];\n\t\t\t\t\t\tvar nz = frame.normals[ stride + 2 ];\n\n\t\t\t\t\t\tnormals.push( nx, ny, nz );\n\n\t\t\t\t\t}\n\n\t\t\t\t\tvar normalAttribute = new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute( normals, 3 );\n\t\t\t\t\tnormalAttribute.name = attributeName;\n\n\t\t\t\t\tmorphNormals.push( normalAttribute );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\tgeometry.morphAttributes.position = morphPositions;\n\t\t\tgeometry.morphAttributes.normal = morphNormals;\n\t\t\tgeometry.morphTargetsRelative = false;\n\n\t\t\tgeometry.animations = three__WEBPACK_IMPORTED_MODULE_0__.AnimationClip.CreateClipsFromMorphTargetSequences( frames, 10 );\n\n\t\t\treturn geometry;\n\n\t\t};\n\n\t} )()\n\n} );\n\n\n\n\n//# sourceURL=webpack://three-js-project/./src/components/MD2Loader.js?");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/components/Camera.js\");\n/* harmony import */ var _Ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ico */ \"./src/components/Ico.js\");\n/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Model */ \"./src/components/Model.js\");\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Keyboard */ \"./src/components/Keyboard.js\");\n/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Animation */ \"./src/components/Animation.js\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Config */ \"./src/components/Config.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//textures\r\n\r\n\r\nclass Main {\r\n    constructor(container) {\r\n        // właściwości klasy\r\n\r\n\r\n        this.container = container;\r\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_7__.Scene();\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(this.scene, container);\r\n        this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(this.renderer.threeRenderer);\r\n        this.ico = new _Ico__WEBPACK_IMPORTED_MODULE_2__.default(this.scene);\r\n\r\n        const gridHelper = new three__WEBPACK_IMPORTED_MODULE_7__.GridHelper(1000, 10);\r\n        this.scene.add(gridHelper);\r\n\r\n       \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n\r\n     \r\n\r\n      \r\n\r\n        this.renderer.render(this.scene, this.camera.threeCamera);\r\n\r\n    \r\n\r\n        requestAnimationFrame(this.render.bind(this));\r\n\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack://three-js-project/./src/components/Main.js?");

/***/ }),

/***/ "./src/components/Model.js":
/*!*********************************!*\
  !*** ./src/components/Model.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Model)\n/* harmony export */ });\n/* harmony import */ var _MD2Loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MD2Loader.js */ \"./src/components/MD2Loader.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\n\r\nclass Model {\r\n    constructor(scene, manager) {\r\n        this.scene = scene;\r\n        this.mesh = null;\r\n        this.manager = manager;\r\n        this.geometry = null\r\n        \r\n    }\r\n\r\n    load(path, texture) {\r\n\r\n        // Manager przekazany do loadera, pozwala na określenie czy model już się załadował, w klasie Main\r\n\r\n        new _MD2Loader_js__WEBPACK_IMPORTED_MODULE_0__.MD2Loader(this.manager).load(\r\n            path,\r\n            geometry => {\r\n\r\n                this.geometry = geometry;\r\n\r\n                this.mesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\r\n                    map: new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load(texture), // dowolny plik png, jpg\r\n                    morphTargets: true // animowanie materiału modelu\r\n                }))\r\n                this.mesh.position.y = 20\r\n                this.scene.add(this.mesh);\r\n                console.log(this.geometry.animations) // tu powinny być widoczne animacje\r\n\r\n            },\r\n\r\n        );\r\n\r\n    }\r\n\r\n    unload() {\r\n        this.scene.remove(this.mesh); // ew funkcja do usunięcia modelu ze sceny\r\n    }\r\n}\n\n//# sourceURL=webpack://three-js-project/./src/components/Model.js?");

/***/ }),

/***/ "./src/components/Renderer.js":
/*!************************************!*\
  !*** ./src/components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer {\r\n    constructor(scene, container) {\r\n\r\n        this.scene = scene;\r\n        this.container = container;\r\n        this.threeRenderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\r\n        this.threeRenderer.setClearColor(0xffffff);\r\n        this.container.appendChild(this.threeRenderer.domElement);\r\n        this.updateSize();\r\n\r\n        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        this.threeRenderer.setSize(window.innerWidth, window.innerHeight);\r\n    }\r\n\r\n    render(scene, camera) {\r\n        this.threeRenderer.render(scene, camera);\r\n    }\r\n}\n\n//# sourceURL=webpack://three-js-project/./src/components/Renderer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Main */ \"./src/components/Main.js\");\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n    //div\r\n    const container = document.getElementById('root');\r\n    //main class object\r\n    new _components_Main__WEBPACK_IMPORTED_MODULE_1__.default(container);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://three-js-project/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;