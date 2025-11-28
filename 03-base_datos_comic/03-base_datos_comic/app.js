/* const cabezaDePagina = document.querySelector(".hero-content");

console.log(cabezaDePagina);

cabezaDePagina.innerHTML = 
`
    <h1>${comic.nombreComic}</h1>
    <p>${comic.genero}</p>
`
 */


const galeria = document.querySelector('.personajes');

console.log(galeria);

galeria.innerHTML = '';

comic.personajes.forEach(char => {

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
<a href="personajes.html?id=${char.id}">
    <img src="${char.imagen}" alt="${char.nombre}">
    <h3>${char.nombre}</h3>
    <p>${char.edad}</p>
    <p>${char.descripcion}</p>
</a>
    `;

    galeria.appendChild(div);


}
)
const capitulos = document.querySelector('.capitulos');

console.log(capitulos);

capitulos.innerHTML = '';

comic.capitulos.forEach(cap => {

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
<a href="capitulos.html?id=${cap.id}">
    <img src="${cap.imagen}" alt="${cap.titulo}">
    <h3>${cap.id}</h3>
    <p>${cap.personaje}</p>
    <p>${cap.descripcion}</p>
</a>

    `;

    capitulos.appendChild(div);


}
)
