const comicInfo = document.querySelector(".info-comic");

console.log(comicInfo);

comicInfo.innerHTML = 
`
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>${comic.genero}</p>
`
