
let monedas = 0;
let posX = 7;  
let posY = 320;




  setInterval(() => {
    posicion += direccion * velocidad;
    honguito.style.left = posicion + 'px';
    if (posicion >= posicionInicial + rango || posicion <= posicionInicial - rango) {
      direccion *= -1;
    }
  }, 30);

  honguito.addEventListener('click', () => {
    const objeto = document.createElement('img');
    objeto.src = 'objecto.png';
    objeto.className = 'objeto';
    objeto.style.position = 'absolute';
    objeto.style.left = honguito.style.left;
    objeto.style.top = honguito.style.top;
    objeto.style.width = '50px';
    objeto.style.height = '50px';
    objeto.style.transition = 'top 1s ease-in';
    document.body.appendChild(objeto);


    const rectanguloTop = rectangulo.offsetTop;
    setTimeout(() => {
      objeto.style.top = rectanguloTop - 50 + 'px';
    }, 100);


    const intervalo = setInterval(() => {
      const personajeRect = personaje.getBoundingClientRect();
      const objetoRect = objeto.getBoundingClientRect();

      if (
        personajeRect.left < objetoRect.right &&
        personajeRect.right > objetoRect.left &&
        personajeRect.top < objetoRect.bottom &&
        personajeRect.bottom > objetoRect.top
      ) {
        objeto.remove();
        monedas++;
        contadorMonedas.textContent = monedas;
        clearInterval(intervalo);
      }
    }, 100);
  });
});


document.addEventListener('keydown', (event) => {
  const step = 10; 

  if (event.key === 'ArrowRight') {
    posX += step;
  } else if (event.key === 'ArrowLeft') {
    posX -= step;
  }

  
  posX = Math.max(0, Math.min(posX, window.innerWidth - 100));

  personaje.style.left = posX + 'px';
  personaje.style.top = posY + 'px';
});
