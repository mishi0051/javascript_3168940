const honguitos = document.querySelectorAll('.honguito, .copia-de-honguito');
const contadorDeMonedas = document.querySelector('#monedas-contador-1');
const personaje = document.querySelector('.personaje');
let monedas = 0;

// Efecto al hacer clic en los honguitos
honguitos.forEach(honguito => {
  honguito.addEventListener('click', () => {
    honguito.style.filter = "grayscale(1)";
    honguito.classList.add('saltar');

    // Aumentar contador
    monedas++;
    contadorDeMonedas.textContent = monedas;

    // Volver al color original después de saltar
    setTimeout(() => {
      honguito.classList.remove('saltar');
      honguito.style.filter = "none";
    }, 500);
  });
});

// ...existing code...

// ==========================
// Galería: navegar entre escenarios con miniaturas y botones
// ==========================
const contenedor = document.querySelector('.galeria-container');
const escenarios = Array.from(contenedor.querySelectorAll('.escenario'));
const miniaturas = Array.from(contenedor.querySelectorAll('.miniaturas img'));
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

let indice = 0;

function mostrarEscena(i) {
  // normaliza el índice para que sea cíclico
  indice = (i + escenarios.length) % escenarios.length;
  escenarios.forEach((esc, idx) => {
    esc.classList.toggle('visible', idx === indice);
  });
  miniaturas.forEach((m, idx) => {
    m.classList.toggle('activa', idx === indice);
  });
}

// Mostrar la primera escena al iniciar
mostrarEscena(0);

// Evento para botón anterior
anterior.addEventListener('click', function () {
  indice = indice - 1;
  if (indice < 0) {
    indice = escenarios.length - 1; // va a la última escena si pasa del primero
  }
  mostrarEscena(indice);
});

// Evento para botón siguiente
siguiente.addEventListener('click', function () {
  indice = indice + 1;
  if (indice >= escenarios.length) {
    indice = 0; // vuelve al primero si pasa del último
  }
  mostrarEscena(indice);
});

// Eventos para cada miniatura
miniaturas.forEach(function (miniatura, i) {
  miniatura.addEventListener('click', function () {
    mostrarEscena(i);
  });
});

// navegación por teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') mostrarEscena(indice - 1);
  if (e.key === 'ArrowRight') mostrarEscena(indice + 1);
});
