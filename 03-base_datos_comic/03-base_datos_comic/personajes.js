
/* configuracio ESmodules 2511*/
 import { comic } from "./bd";   
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
 console.log("ID del personaje:", id);
