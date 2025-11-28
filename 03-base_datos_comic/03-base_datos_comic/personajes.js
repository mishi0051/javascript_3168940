
/* configuracio ESmodules 2511*/
 import { comic } from "./bd";   
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

/* comparar id con los IDs de los personajes en la base de datos */
const personaje = comic.personajes.find(p => p.id === id);
 console.log("ID del personaje:", id);
const infoComic = document.querySelector(".info-comic");
infoComic.innerHTML =
`
<h1>{personaje.nombre}</h1>
      <img src="{personaje.imagen}" alt="{personaje.nombre}">
      <p>Edad: {personaje.edad}</p>
      <p>Descripción: {personaje.descripcion}</p>
`;
