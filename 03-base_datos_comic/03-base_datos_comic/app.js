/* const cabezaDePagina = document.querySelector(".hero-content");

console.log(cabezaDePagina);

cabezaDePagina.innerHTML = 
`
    <h1>${comic.nombreComic}</h1>
    <p>${comic.genero}</p>
`
 */


const galeria = document.querySelector('.track')

console.log(comic)

galeria.innerHTML = '';

comic.personajes.forEach(char => {
 
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `

 

    `


}
)
