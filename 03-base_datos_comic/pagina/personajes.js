// detalle.js  →  Funciona con tus clases originales y el JSON que ya tienes

import { comic } from "./personajes.js";  // o "./bs.js" si así lo tienes guardado

// Obtener el ID del personaje desde la URL (ej: detalle.html?id=1)
const params = new URLSearchParams(window.location.search);
const id = params.get("id");  // lo tomamos como string primero

// Buscar el personaje por ID (convertimos id a string porque en tu JSON los id son strings)
const personaje = comic.personajes.find(char => char.id === id);

console.log("Personaje encontrado:", personaje);

// Si no se encuentra el personaje → mostrar mensaje bonito
if (!personaje) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:100px; color:white; font-family:Arial;">
      <h1>Personaje no encontrado</h1>
      <p>Vuelve al <a href="index.html" style="color:#e50914;">inicio</a></p>
    </div>
  `;
} else {
  // Seleccionamos el contenedor (usa TU clase original)
  const container = document.querySelector(".personajes-container");

  // Insertamos la tarjeta con TUS clases originales
  container.innerHTML = `
    <div class="card">
      <img src="${personaje.imagen || 'placeholder.jpg'}" alt="${personaje.nombre}" class="card-img">
      
      <h2 class="card-title">${personaje.nombre}</h2>
      
      <p class="card-desc">${personaje.descripcion}</p>
      
      ${personaje.edad ? `<p class="card-subtext">Edad: ${personaje.edad} años</p>` : ''}
      
      <div class="card-actions">
        <button class="btn-back" onclick="history.back()">Volver</button>
      </div>
    </div>
  `;
}