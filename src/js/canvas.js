import plataformx from "../img/platform.png";
import hills from "../img/hills.png";
import background from "../img/background.png";
import smallBG from "../img/platformSmallTall.png";
import spriteRunRight from "../img/spriteRunRight.png";
import spriteRunLeft from "../img/spriteRunLeft.png";
import spriteStandleft from "../img/spriteStandRight.png";
import spriteStandRight from "../img/spriteStandLeft.png";

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
const gravedad = 1.2;
let scrollAlcanzado = 0;
let ultimaTecla = "";
//reinicio al ganar
let juju = document.getElementById("empezar");
const nuevo = document.querySelector(".reinicio");
nuevo.addEventListener("click",()=>{
  iniciarOtraVez()
})

const imagenplata = new Image();
imagenplata.src = plataformx;

// JUGADOR
class Jugador {
  constructor() {
    this.rapidez = 10;
    this.posicion = {
      x: 100,
      y: 100,
    };
    this.velocidad = {
      x: 0,
      y: 1,
    };
    (this.frames = 0),
      (this.image = creadorDeImagenes(spriteStandRight)),
      (this.width = 66),
      (this.height = 150);
    this.sprites = {
      ergido: {
        derecha: creadorDeImagenes(spriteStandleft),
        izquierda: creadorDeImagenes(spriteStandRight),
        cropWidth: 177,
        ancho: 66,
      },

      correr: {
        derecha: creadorDeImagenes(spriteRunRight),
        izquierda: creadorDeImagenes(spriteRunLeft),
        cropWidth: 341,
        ancho: 127.875,
      },
    };
    //algo est amal en la lectura de las posturas revisar!!

    this.correrActual = this.sprites.ergido.derecha;
    this.cropActual = this.sprites.ergido.cropWidth;
    this.width = this.sprites.ergido.ancho;
  }

  draw() {
    ctx.drawImage(
      this.correrActual,
      this.cropActual * this.frames,
      1,
      this.cropActual,
      400,
      this.posicion.x,
      this.posicion.y,
      this.width,
      this.height
    );
  }
  update() {
    this.frames++;
    if (
      this.frames > 59 &&
      (this.correrActual === jugador1.sprites.ergido.izquierda ||
        this.correrActual === jugador1.sprites.ergido.derecha)
    )
      this.frames = 0;
    else if (
      this.frames > 29 &&
      (this.correrActual === jugador1.sprites.correr.izquierda ||
        this.correrActual === jugador1.sprites.correr.derecha)
    )
      this.frames = 0;

    

    this.draw();
    this.posicion.y += this.velocidad.y;
    this.posicion.x += this.velocidad.x;

    if (this.height + this.posicion.y + this.velocidad.y <= canvas.height) {
      this.velocidad.y += gravedad;
    }
  }
}
//PLATAFORMA
class Plataforma {
  constructor({ x, y, imagen }) {
    this.posicion = {
      x,
      y,
    };

    (this.imagen = imagen),
      (this.width = imagen.width),
      (this.height = imagen.height);
  }
  draw() {
    ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y);
  }
}
//Decoraciones
class Decoraciones {
  constructor({ x, y, imagen }) {
    this.posicion = {
      x,
      y,
    };

    (this.imagen = imagen),
      (this.width = imagen.width),
      (this.height = imagen.height);
  }
  draw() {
    ctx.drawImage(this.imagen, this.posicion.x, this.posicion.y);
  }
}
// creacion de objetos a partir de las clases
function creadorDeImagenes(imgSrc) {
  const imagen = new Image();
  imagen.src = imgSrc;

  return imagen;
}
let plataSrc = creadorDeImagenes(plataformx);
let small = creadorDeImagenes(smallBG);
let jugador1 = new Jugador();

let plataformas = [];

let deco = [];

let teclas = {
  derecha: {
    presionada: false,
  },
  izquierda: {
    presionada: false,
  },
};

function iniciarOtraVez() {
  juju.classList.add("hide");
  scrollAlcanzado = 0;
  jugador1 = new Jugador();

  plataformas = [
    new Plataforma({ x: plataSrc.width * 4 + 800, y: 250, imagen: small }),
    new Plataforma({ x: -1, y: 470, imagen: plataSrc }),
    new Plataforma({ x: plataSrc.width - 3, y: 470, imagen: plataSrc }),
    new Plataforma({ x: plataSrc.width * 2 + 100, y: 470, imagen: plataSrc }),
    new Plataforma({ x: plataSrc.width * 3 + 300, y: 470, imagen: plataSrc }),
    new Plataforma({ x: plataSrc.width * 4 + 500, y: 470, imagen: plataSrc }),
    new Plataforma({ x: plataSrc.width * 5 + 750, y: 470, imagen: plataSrc }),
  ];

  deco = [
    new Decoraciones({ x: -1, y: -1, imagen: creadorDeImagenes(background) }),
    new Decoraciones({ x: -1, y: -1, imagen: creadorDeImagenes(hills) }),
    new Decoraciones({
      x: creadorDeImagenes(hills).width,
      y: -1,
      imagen: creadorDeImagenes(hills),
    }),
  ];
}

//creamos una funcion que realiza el  moviemiento de manera constante, un loop
iniciarOtraVez();
function animacion() {
  //informa al navegador que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo
  //ciclo de animación. El método acepta como argumento una función a la que llamar antes de efectuar el repintado.
  requestAnimationFrame(animacion);
  ctx.fillStyle = "white";

  ctx.fillRect(0, 0, canvas.width, canvas.height);
  deco.forEach((deco) => {
    deco.draw();
  });

  plataformas.forEach((cadaPlataforma) => {
    cadaPlataforma.draw();
  });
  jugador1.update();

  //movimiento derecha izq

  if (teclas.derecha.presionada && jugador1.posicion.x < 400) {
    jugador1.velocidad.x = 5;
  } else if (
    (teclas.izquierda.presionada && jugador1.posicion.x > 100) ||
    (teclas.izquierda.presionada &&
      scrollAlcanzado === 0 &&
      jugador1.posicion.x > 0)
  ) {
    jugador1.velocidad.x = -5;
  } else {
    jugador1.velocidad.x = 0;
    if (teclas.derecha.presionada) {
      scrollAlcanzado += 5;
      plataformas.forEach((plataforma) => (plataforma.posicion.x -= 5));
      deco.forEach((deco) => {
        deco.posicion.x -= jugador1.rapidez * 0.66;
      });
    } else if (teclas.izquierda.presionada && scrollAlcanzado > 0) {
      scrollAlcanzado -= 5;
      plataformas.forEach((plataforma) => (plataforma.posicion.x += 5));
      deco.forEach((deco) => {
        deco.posicion.x += jugador1.rapidez * 0.66;
      });
    }

    //movimiento de sprites

    if (
      teclas.derecha.presionada &&
      ultimaTecla === "derecha" &&
      jugador1.correrActual !== jugador1.sprites.correr.derecha
    ) {
      jugador1.frames = 1;
      jugador1.correrActual = jugador1.sprites.correr.derecha;
      jugador1.cropActual = jugador1.sprites.correr.cropWidth;
      jugador1.width = jugador1.sprites.correr.ancho;
    } else if (
      teclas.izquierda.presionada &&
      ultimaTecla === "izquierda" &&
      jugador1.correrActual != jugador1.sprites.correr.izquierda
    ) {
      jugador1.frames = 1;
      jugador1.correrActual = jugador1.sprites.correr.izquierda;
      jugador1.cropActual = jugador1.sprites.correr.cropWidth;
      jugador1.width = jugador1.sprites.correr.ancho;
    } else if (
      !teclas.derecha.presionada &&
      ultimaTecla === "derecha" &&
      jugador1.correrActual != jugador1.sprites.ergido.derecha
    ) {
      jugador1.correrActual = jugador1.sprites.ergido.derecha;
      jugador1.cropActual = jugador1.sprites.ergido.cropWidth;
      jugador1.width = jugador1.sprites.ergido.ancho;
    } else if (
      !teclas.izquierda.presionada &&
      ultimaTecla === "izquierda" &&
      jugador1.correrActual != jugador1.sprites.ergido.izquierda
    ) {
      jugador1.correrActual = jugador1.sprites.ergido.izquierda;
      jugador1.cropActual = jugador1.sprites.ergido.cropWidth;
      jugador1.width = jugador1.sprites.ergido.ancho;
    }

    //win condition

    if (scrollAlcanzado > plataSrc.width * 5 + 500){
      console.log("ganaste");
      
       juju.classList.remove("hide")
    }
    
      //juju.classList.toggle("hide")
    if (jugador1.posicion.y > canvas.height + 320) {
      iniciarOtraVez();
    }
  }
  //colision de plataformas rectangulares
  //la idea es que no exista velocidad en el eje y para que solo actue la gravedad
  //la velocidad se vueleve 0 cuando la posicion del jugador en x es menor o mayor a la de la plataforma,
  //asi cuando no esta en la posicion donde esta la plataforma, cae por gravedad ya qye ka velocidad es pisiutiva
  plataformas.forEach((plataforma) => {
    if (
      jugador1.posicion.y + jugador1.height <= plataforma.posicion.y &&
      jugador1.posicion.y + jugador1.height + jugador1.velocidad.y >=
        plataforma.posicion.y &&
      jugador1.posicion.x + jugador1.width >= plataforma.posicion.x &&
      jugador1.posicion.x <= plataforma.posicion.x + plataforma.width
    ) {
      jugador1.velocidad.y = 0;
    }
  });
}
//EJECUCION
animacion();

//event linstener
addEventListener("keydown", ({ keyCode }) => {
  //console.log({keyCode}  );
  switch (keyCode) {
    case 65:
      teclas.izquierda.presionada = true;
      ultimaTecla = "izquierda";

      break;
    case 68:
      teclas.derecha.presionada = true;
      ultimaTecla = "derecha";
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

addEventListener("keyup", ({ keyCode }) => {
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
