import { comic } from "./bd.js";

const app = document.querySelector(".hero");

// 1. GENERAR HEADER + HERO COMPLETO
app.innerHTML = `
<div class="fondo-hero">
    <img src="img/fondo1.jpg" class="fondo-img activa">
    <img src="img/fondo2.jpg" class="fondo-img">
    <img src="img/fondo3.jpg" class="fondo-img">
  </div>

   <div class="hero-content">
        <h1>${comic.nombreComic}</h1>
        <p>Una historia épica de amistad, batallas y superación</p>
        <a href="#personajes" class="btn-primary">Explorar</a>
    </div>

`;

let foto = 0;
const fotos = document.querySelectorAll(".fondo-img");

function cambiarFoto() {
  fotos.forEach(img => img.classList.remove("activa"));
  foto = (foto + 1) % fotos.length;
  fotos[foto].classList.add("activa");
}

// Cambiar cada 5 segundos
setInterval(cambiarFoto, 5000);


// 2. GENERAR SECCIÓN DE PERSONAJES
const personajesSection = document.querySelector("#personajes");
personajesSection.innerHTML = `
  <div class="container">
    <h2>Personajes</h2>
    <div class="gallery"></div>
  </div>
`;

const gallery = document.querySelector("#personajes .gallery");
comic.personajes.forEach(char => {
  const link = document.createElement("a");
  link.href = `personaje.html?id=${char.id}`;
  link.className = "card-link";

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${char.imagen}" alt="${char.nombre}">
    <h3>${char.nombre}</h3>
    <p>${char.descripcion}</p>
  `;

  link.appendChild(card);
  gallery.appendChild(link);
});


const capitulosSection = document.querySelector("#capitulos");
capitulosSection.innerHTML = `
  <div class="container">
    <h2>Capítulos</h2>
    <div class="chapters"></div>
  </div>
`;

// Ahora sí existe el .chapters
const chapters = document.querySelector("#capitulos .chapters");
comic.capitulos.forEach(cap => {
  const link = document.createElement("a");
  link.href = `capitulos.html?id=${cap.id}`;
  link.className = "chapter-link";

  const div = document.createElement("div");
  div.className = "chapter-card";
  div.innerHTML = `
    <div class="chapter-thumb">
      <img src="${cap.portada}" alt="${cap.nombre}">
    </div>
    <div class="chapter-content">
      <h3>Capítulo ${cap.id}</h3>
      <p>${cap.nombre}</p>
    </div>
  `;

  link.appendChild(div);
  chapters.appendChild(link);
});
