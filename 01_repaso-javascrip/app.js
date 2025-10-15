const gato = document.querySelector("#gato");
const btnBN = document.querySelector("#btnBlancoNegro");
const btnDesenfoque = document.querySelector("#btnDesenfoque");
const btnZoomRotar = document.querySelector("#btnZoomRotar");

// Variables de control
let enBlancoNegro = false;
let desenfocado = false;
let zoomRotado = false;

// Evento: Blanco y negro
btnBN.addEventListener("click", function() {
  if (!enBlancoNegro) {
    gato.style.filter = "grayscale(200%)";
    enBlancoNegro = true;
  } else {
    gato.style.filter = "none";
    enBlancoNegro = false;
  }
});

// Evento: Desenfoque
btnDesenfoque.addEventListener("click", function() {
  if (!desenfocado) {
    gato.style.filter = "blur(4px)";
    desenfocado = true;
  } else {
    gato.style.filter = "none";
    desenfocado = false;
  }
});

// Evento: Zoom y rotar
btnZoomRotar.addEventListener("click", function() {
  if (!zoomRotado) {
    gato.style.transform = "scale(1.3) rotate(15deg)";
    zoomRotado = true;
  } else {
    gato.style.transform = "scale(1) rotate(0deg)";
    zoomRotado = false;
  }
});
