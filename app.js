const honguito = document.querySelectorAll('.honguito');
const contadorDeMonedas = document.querySelector('.contador-de-monedas');
const personaje = document.querySelector('.personaje');
const rectangulo = document.querySelector('.rectangulo');
let contador = 0;

let monedas = 0;
let posX = 7;  
let posY = 320;

honguito.forEach( honguito => {
   
    honguito.addEventListener('click', () => {
         honguito.style.filter = "grayscale(1)";
         honguito.classList.add('saltar');
});

})

/* personaje.forEach( personaje => {
    personaje.style.filter = "grayscale(1)";
 */
