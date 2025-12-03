// capitulos.js
import { comic } from "./bs.js";  // o "./personajes.js" si ahí está el JSON

// Obtener el ID del capítulo desde la URL (ej: capitulos.html?id=1)
const params = new URLSearchParams(window.location.search);
const capituloId = params.get("id");  // Lo dejamos como string porque tus IDs son texto

// Buscar el capítulo (tus IDs son como "capitulo nuumero 1")
const capitulo = comic.capitulos.find(cap => cap.id === capituloId);

console.log("Capítulo encontrado:", capitulo);

const container = document.querySelector(".capitulos_container");

if (!capitulo || !capituloId) {
  container.innerHTML = `
    <div style="text-align:center; padding:100px; color:#fff; font-size:1.5rem;">
      <h1>Capítulo no encontrado</h1>
      <p>Vuelve al <a href="index.html" style="color:#e50914;">inicio</a></p>
    </div>
  `;
} else {
  // Unimos las descripciones si es un array (como tienes ahora)
  const descripcionCompleta = Array.isArray(capitulo.descripcion) 
    ? capitulo.descripcion.join(" ") 
    : capitulo.descripcion;

  container.innerHTML = `
    <div class="card">
      <!-- Imagen de portada (usa galeria según el número del capítulo) -->
      <img 
        src="galeria ${capituloId.split(" ").pop()}.jpg" 
        alt="${capitulo.nombre}" 
        class="card-img"
        onerror="this.src='https://via.placeholder.com/400x600?text=Portada+Capítulo+${capituloId}'"
      >

      <h2 class="card-title">${capitulo.nombre}</h2>

      <p class="card-desc">
        ${descripcionCompleta}
      </p>

      <p class="card-subtext">
        Personajes principales: ${capitulo.personaje || "Desconocidos"}
      </p>

      <div style="margin-top: 25px; text-align:center;">
        <a href="index.html" style="
          background: #e50914;
          color: white;
          padding: 14px 30px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
        ">
          ← Volver a la galería
        </a>
      </div>
    </div>
  `;
}