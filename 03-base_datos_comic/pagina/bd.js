// bs.js  ←  SOLO cambia esta parte de los personajes y capítulos
export const comic = {
  nombreComic: "Super Hero: HUELLAS DE RITMO",
  sipnosis: "narra la historia de Isabel, una niña prodigiosa en el baile...",
  genero: "Fantasía - Aventura",
  autores: ["Carolina", "Valentina", "Jimena"],

  personajes: [
    { 
      id: "1", 
      nombre: "Isabel (Shakira)", 
      edad: "10", 
      imagen: "shakira.png",                    // ← así
      descripcion: "Isabel es una niña de 10 años..." 
    },
    { 
      id: "2", 
      nombre: "Lobo", 
      edad: "55", 
      imagen: "lobo.png",                       // ← así
      descripcion: "Lobo es el guardián del pueblo..." 
    },
    { 
      id: "3", 
      nombre: "Oscuridad", 
      edad: "indefinida", 
      imagen: "SOMBRAA.png",                    // ← así
      descripcion: "Oscuridad es una entidad misteriosa..." 
    }
  ],

  capitulos: [
    { id: "1", nombre: "Los ritmos de las maracas...", personaje: "Isabel", descripcion: ["..."] },
    { id: "2", nombre: "El canto que se desvanece...", personaje: "Isabel, Lobo", descripcion: ["..."] },
    { id: "3", nombre: "Las sombras y el ritual final...", personaje: "Isabel, Lobo", descripcion: ["..."] }
  ]
};