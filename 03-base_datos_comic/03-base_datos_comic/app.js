/* const cabezaDePagina = document.querySelector(".hero-content");

console.log(cabezaDePagina);

cabezaDePagina.innerHTML = 
`
    <h1>${comic.nombreComic}</h1>
    <p>${comic.genero}</p>
`
 */


const galeria = document.querySelector('.personajess');

console.log(galeria);

galeria.innerHTML = '';

comic.personajes.forEach(char => {
 
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    <img src="${char.imagen}" alt="${char.nombre}">
    <h3>${char.nombre}</h3>
    <p>${char.edad}</p>
    <p>${char.descripcion}</p>

    `;

    galeria.appendChild(div);


}
)
const capitulos = document.querySelector('.capitulos');

console.log(capitulos);

capitulos.innerHTML = '';

comic.capitulos.forEach(episodio => {

    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

    <img src="${episodio.imagen}" alt="${episodio.titulo}">
    <h3>${episodio.titulo}</h3>
    <p>${episodio.descripcion}</p>

    `;

    capitulos.appendChild(div);


}
)
