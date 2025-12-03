// info-comic.js
import { comic } from "./bs.js";

// ==================== SINOPSIS EN EL HERO ====================
const info_comic = document.querySelector("#inicio");

if (info_comic) {
  info_comic.innerHTML = `
    <div class="sinopsis">
      <h1>${comic.nombreComic || "HUELLAS DE RITMO"}</h1>
      <p>${comic.sipnosis || "Una historia épica sobre música, baile y un lobo mágico..."}</p>
      <p class="genero">${comic.genero || "Fantasía - Aventura"}</p>
      <small>Por: ${Array.isArray(comic.autores) ? comic.autores.join(", ") : "Carolina, Valentina, Jimena"}</small>
    </div>
  `;
}

// ==================== PERSONAJES ====================
const grupo_personajes = document.querySelector(".grupo_personajes");

function crear_card_personaje(char) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Si no tiene imagen, ponemos una por defecto
  const imagen = char.imagen || "https://via.placeholder.com/200x300?text=Sin+Imagen";

  card.innerHTML = `
    <a href="./personajes.html?id=${char.id}">
      <h3>${char.nombre}</h3>
      <div class="container_img">
        <img src="${imagen}" alt="${char.nombre}" class="img_personajes">
      </div>
      <p class="parrafo_cards">${char.descripcion}</p>
      ${char.edad ? `<p class="subtext">Edad: ${char.edad} años</p>` : ''}
    </a>
  `;

  return card;
}

function renderpersonajes(lista, contenedor) {
  if (!contenedor) return;
  contenedor.innerHTML = ""; // Limpiamos por si acaso
  lista.forEach((char) => {
    const card = crear_card_personaje(char);
    contenedor.appendChild(card);
  });
}

if (grupo_personajes) {
  renderpersonajes(comic.personajes, grupo_personajes);
}

// ==================== CAPÍTULOS ====================
const capitulos = document.querySelector(".capitulos");

function crear_capitulo(cap, index) {
  const capDiv = document.createElement("div");
  capDiv.classList.add("capitulo");

  // Generamos la portada según el número del capítulo
  const numeroCap = index + 1;
  const portada = `galeria ${numeroCap}.jpg`;

  // Unimos la descripción si es un array
  const descripcion = Array.isArray(cap.descripcion) 
    ? cap.descripcion.join(" ") 
    : cap.descripcion;

  capDiv.innerHTML = `
    <a href="./capitulos.html?id=${cap.id}">
      <h2>Capítulo ${numeroCap}: ${cap.nombre}</h2>
      <img src="${portada}" alt="${cap.nombre}" class="img_caps" onerror="this.src='https://via.placeholder.com/400x600?text=Capítulo+${numeroCap}'">
      <p class="resumen">${descripcion}</p>
      ${cap.personaje ? `<small class="personajes-cap">Personajes: ${cap.personaje}</small>` : ''}
    </a>
  `;

  return capDiv;
}

function render_caps(lista, contenedor) {
  if (!contenedor) return;
  contenedor.innerHTML = "";
  lista.forEach((cap, index) => {
    const capElement = crear_capitulo(cap, index);
    contenedor.appendChild(capElement);
  });
}

if (capitulos) {
  render_caps(comic.capitulos, capitulos);
}