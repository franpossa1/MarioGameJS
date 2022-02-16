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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravedad = 1.2;
var scrollAlcanzado = 0;
var imagenplata = new Image();
imagenplata.src = _img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]; // JUGADOR

var Jugador = /*#__PURE__*/function () {
  function Jugador() {
    _classCallCheck(this, Jugador);

    this.posicion = {
      x: 100,
      y: 100
    };
    this.velocidad = {
      x: 0,
      y: 1
    };
    this.width = 30, this.height = 30;
  }

  _createClass(Jugador, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = "red";
      ctx.fillRect(this.posicion.x, this.posicion.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
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
var jugador1 = new Jugador();
var plataformas = [new Plataforma({
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
})];
var deco = [new Decoraciones({
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
  } else if (teclas.izquierda.presionada && jugador1.posicion.x > 100) {
    jugador1.velocidad.x = -5;
  } else {
    jugador1.velocidad.x = 0;

    if (teclas.derecha.presionada) {
      scrollAlcanzado += 5;
      plataformas.forEach(function (plataforma) {
        return plataforma.posicion.x -= 5;
      });
      deco.forEach(function (deco) {
        deco.posicion.x -= 3;
      });
    } else if (teclas.izquierda.presionada) {
      scrollAlcanzado -= 5;
      plataformas.forEach(function (plataforma) {
        return plataforma.posicion.x += 5;
      });
      deco.forEach(function (deco) {
        deco.posicion.x += 3;
      });
    } //win condition


    if (scrollAlcanzado > 2000) console.log("Ganador del Juego");

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
      break;

    case 68:
      teclas.derecha.presionada = true;
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
      break;

    case 68:
      teclas.derecha.presionada = false;
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