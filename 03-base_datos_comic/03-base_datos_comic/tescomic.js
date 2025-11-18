
const infoComic = document.querySelector(".info-comic");
const cardPersonajes = document.querySelector(".card.personajes");
console.log(comic.personajes);
console.log(infoComic);

infoComic.innerHTML = 
`
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>${comic.genero}</p>
`
comic.personajes.forEach(char => {
  console.log(char);
  document.body.innerHTML += `<img src="${char.imagen}" width="200">`;
});