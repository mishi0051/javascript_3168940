

 /////////////////////////////////////FIN DEL PRIMER JUEFGO//////////////////////////////////////////

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
 /////////////////////////////////////FIN DEL SEGUNDO JUEFGO//////////////////////////////////////////


 /////////////////////////////////////FIN DEL SEGUNDO JUEFGO//////////////////////////////////////////
const escena = document.querySelectorAll (".escena")
const anterior = document.querySelector (".anterior")
const siguiente = document.querySelector (".siguiente")
const fondo = document.querySelector (".fondo")

let indice = 0

console.log(escena)
console.log(anterior)
console.log(siguiente)
console.log(fondo)

function mostrarEscena(i){
    for (let j = 0; j < escena.length; j++) {
        escenas[j].classList.add("escena")

    }

    escena[i].classList.add("fondo")
    indice = i
}
anterior.addEventListener("click", function(){
    indice = indice - 1
    if(indice < 0){
        indice = indice.length - 1 //va a la ultima imagen

    }
    mostrarEscena(indice)
})
siguiente.addEventListener("click", function(){
    indice = indice + 1
    if(indice < 0){
        indice = indice.length - 1 //va a la ultima imagen

    }
    mostrarEscena(indice)
})


