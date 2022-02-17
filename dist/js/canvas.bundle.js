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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteRunLeft.png":
/*!***********************************!*\
  !*** ./src/img/spriteRunLeft.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c67ea51444aafa9bdcd5bdfd4f4a55bb.png");

/***/ }),

/***/ "./src/img/spriteRunRight.png":
/*!************************************!*\
  !*** ./src/img/spriteRunRight.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a2f75989924952a7e49ce0405d487c93.png");

/***/ }),

/***/ "./src/img/spriteStandLeft.png":
/*!*************************************!*\
  !*** ./src/img/spriteStandLeft.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "11514f48f22f6d8e3cf748e45e3e1ffb.png");

/***/ }),

/***/ "./src/img/spriteStandRight.png":
/*!**************************************!*\
  !*** ./src/img/spriteStandRight.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "01e8f15e899155c68950c40e0a6b8df0.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/spriteRunRight.png */ "./src/img/spriteRunRight.png");
/* harmony import */ var _img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/spriteRunLeft.png */ "./src/img/spriteRunLeft.png");
/* harmony import */ var _img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/spriteStandRight.png */ "./src/img/spriteStandRight.png");
/* harmony import */ var _img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/spriteStandLeft.png */ "./src/img/spriteStandLeft.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }









console.log(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]);
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravedad = 1.2;
var scrollAlcanzado = 0;
var teclaActual;
var imagenplata = new Image();
imagenplata.src = _img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]; // JUGADOR

var Jugador = /*#__PURE__*/function () {
  function Jugador() {
    _classCallCheck(this, Jugador);

    this.rapidez = 10;
    this.posicion = {
      x: 100,
      y: 100
    };
    this.velocidad = {
      x: 0,
      y: 1
    };
    this.frames = 0, this.image = creadorDeImagenes(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]), this.width = 66, this.height = 150;
    this.sprites = {
      ergido: {
        derecha: creadorDeImagenes(_img_spriteStandRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        cropWidth: 177,
        izquierda: creadorDeImagenes(_img_spriteStandLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        ancho: 66
      },
      correr: {
        derecha: creadorDeImagenes(_img_spriteRunRight_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        cropWidth: 341,
        ancho: 127.875,
        izquierda: creadorDeImagenes(_img_spriteRunLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"])
      }
    };
    this.correrActual = this.sprites.ergido.derecha;
    this.cropActual = this.sprites.ergido.cropWidth;
  }

  _createClass(Jugador, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.correrActual, this.cropActual * this.frames, 1, this.cropActual, 400, this.posicion.x, this.posicion.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames > 59 && this.correrActual === jugador1.sprites.ergido.derecha || this.correrActual === jugador1.sprites.ergido.izquierda) this.frames = 0;else if (this.frames > 29 && this.correrActual === jugador1.sprites.correr.derecha || this.correrActual === jugador1.sprites.correr.izquierda) {
        this.frames = 0;
      }
      console.log(this.frames);
      this.draw();
      this.posicion.y += this.velocidad.y;
      this.posicion.x += this.velocidad.x;

      if (this.height + this.posicion.y + this.velocidad.y <= canvas.height) {
        this.velocidad.y += gravedad;
      }
    }
  }]);

  return Jugador;
}(); //PLATAFORMA


var Plataforma = /*#__PURE__*/function () {
  function Plataforma(_ref) {
    var x = _ref.x,
        y = _ref.y,
        imagen = _ref.imagen;

    _classCallCheck(this, Plataforma);

    this.posicion = {
      x: x,
      y: y
    };
    this.imagen = imagen, this.width = imagen.width, this.height = imagen.height;
  }

  _createClass(Plataforma, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y);
    }
  }]);

  return Plataforma;
}(); //Decoraciones


var Decoraciones = /*#__PURE__*/function () {
  function Decoraciones(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        imagen = _ref2.imagen;

    _classCallCheck(this, Decoraciones);

    this.posicion = {
      x: x,
      y: y
    };
    this.imagen = imagen, this.width = imagen.width, this.height = imagen.height;
  }

  _createClass(Decoraciones, [{
    key: "draw",
    value: function draw() {
      ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y);
    }
  }]);

  return Decoraciones;
}(); // creacion de objetos a partir de las clases


function creadorDeImagenes(imgSrc) {
  var imagen = new Image();
  imagen.src = imgSrc;
  return imagen;
}

var plataSrc = creadorDeImagenes(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var small = creadorDeImagenes(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
var jugador1 = new Jugador();
var plataformas = [];
var deco = [];
var teclas = {
  derecha: {
    presionada: false
  },
  izquierda: {
    presionada: false
  }
};

function iniciarOtraVez() {
  jugador1 = new Jugador();
  plataformas = [new Plataforma({
    x: plataSrc.width * 4 + 800,
    y: 250,
    imagen: small
  }), new Plataforma({
    x: -1,
    y: 470,
    imagen: plataSrc
  }), new Plataforma({
    x: plataSrc.width - 3,
    y: 470,
    imagen: plataSrc
  }), new Plataforma({
    x: plataSrc.width * 2 + 100,
    y: 470,
    imagen: plataSrc
  }), new Plataforma({
    x: plataSrc.width * 3 + 300,
    y: 470,
    imagen: plataSrc
  }), new Plataforma({
    x: plataSrc.width * 4 + 500,
    y: 470,
    imagen: plataSrc
  }), new Plataforma({
    x: plataSrc.width * 5 + 750,
    y: 470,
    imagen: plataSrc
  })];
  deco = [new Decoraciones({
    x: -1,
    y: -1,
    imagen: creadorDeImagenes(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new Decoraciones({
    x: -1,
    y: -1,
    imagen: creadorDeImagenes(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new Decoraciones({
    x: creadorDeImagenes(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"]).width,
    y: -1,
    imagen: creadorDeImagenes(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
} //creamos una funcion que realiza el  moviemiento de manera constante, un loop


iniciarOtraVez();

function animacion() {
  //informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo
  //ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
  requestAnimationFrame(animacion);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  deco.forEach(function (deco) {
    deco.draw();
  });
  plataformas.forEach(function (cadaPlataforma) {
    cadaPlataforma.draw();
  });
  jugador1.update(); //movimiento derecha izq

  if (teclas.derecha.presionada && jugador1.posicion.x < 400) {
    jugador1.velocidad.x = 5;
  } else if (teclas.izquierda.presionada && jugador1.posicion.x > 100 || teclas.izquierda.presionada && scrollAlcanzado === 0 && jugador1.posicion.x > 0) {
    jugador1.velocidad.x = -5;
  } else {
    jugador1.velocidad.x = 0;

    if (teclas.derecha.presionada) {
      scrollAlcanzado += 5;
      plataformas.forEach(function (plataforma) {
        return plataforma.posicion.x -= 5;
      });
      deco.forEach(function (deco) {
        deco.posicion.x -= jugador1.rapidez * 0.66;
      });
    } else if (teclas.izquierda.presionada && scrollAlcanzado > 0) {
      scrollAlcanzado -= 5;
      plataformas.forEach(function (plataforma) {
        return plataforma.posicion.x += 5;
      });
      deco.forEach(function (deco) {
        deco.posicion.x += jugador1.rapidez * 0.66;
      });
    }

    if (teclaActual === "derecha" && jugador1.correrActual !== jugador1.sprites.correr.derecha) {
      jugador1.frames = 1;
      jugador1.correrActual = jugador1.sprites.correr.derecha;
      jugador1.cropActual = jugador1.sprites.correr.cropWidth;
      jugador1.width = jugador1.sprites.correr.ancho;
    } else if (teclaActual === "izquierda" && jugador1.correrActual !== jugador1.sprites.correr.izquierda) {
      jugador1.frames = 1;
      jugador1.correrActual = jugador1.sprites.correr.izquierda;
      jugador1.cropActual = jugador1.sprites.correr.cropWidth;
      jugador1.width = jugador1.sprites.correr.ancho;
    } else {} //win condition


    if (scrollAlcanzado > plataSrc.width * 5 + 500) console.log("Ganador del Juego");

    if (jugador1.posicion.y > canvas.height + 320) {
      iniciarOtraVez();
    }
  } //colision de plataformas rectangulares
  //la idea es que no exista velocidad en el eje y para que solo actue la gravedad
  //la velocidad se vueleve 0 cuando la posicion del jugador en x es menor o mayor a la de la plataforma,
  //asi cuando no esta en la posicion donde esta la plataforma, cae por gravedad ya qye ka velocidad es pisiutiva


  plataformas.forEach(function (plataforma) {
    if (jugador1.posicion.y + jugador1.height <= plataforma.posicion.y && jugador1.posicion.y + jugador1.height + jugador1.velocidad.y >= plataforma.posicion.y && jugador1.posicion.x + jugador1.width >= plataforma.posicion.x && jugador1.posicion.x <= plataforma.posicion.x + plataforma.width) {
      jugador1.velocidad.y = 0;
    }
  });
} //EJECUCION


animacion(); //event linstener

addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;

  //console.log({keyCode}  );
  switch (keyCode) {
    case 65:
      teclas.izquierda.presionada = true;
      teclaActual = "izquierda";
      break;

    case 68:
      teclas.derecha.presionada = true;
      teclaActual = "derecha";
      break;

    case 87:
      jugador1.velocidad.y -= 20;
      break;

    case 83:
      break;

    default:
      break;
  }
});
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 65:
      teclas.izquierda.presionada = false;
      jugador1.correrActual = jugador1.sprites.ergido.derecha;
      jugador1.cropActual = jugador1.sprites.ergido.cropWidth;
      jugador1.width = jugador1.sprites.ergido.ancho;
      break;

    case 68:
      teclas.derecha.presionada = false;
      jugador1.correrActual = jugador1.sprites.ergido.derecha;
      jugador1.cropActual = jugador1.sprites.ergido.cropWidth;
      jugador1.width = jugador1.sprites.ergido.ancho;
      break;

    case 83:
      break;

    default:
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map