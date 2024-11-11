'use strict';
const nimi = prompt("Anna nimi");
const nro = Math.floor(Math.random() * 4 + 1);
if (nro === 1){
  document.querySelector("#text").innerHTML = nimi + ", Olet Rohkelikko";
} else if (nro === 2){
  document.querySelector("#text").innerHTML = nimi + ", Olet Puuskupuh";
} else if (nro === 3){
  document.querySelector("#text").innerHTML = nimi + ", Korpinkynsi";
} else if (nro === 4){
  document.querySelector("#text").innerHTML = nimi + ", Luihuinen";
} else {
  document.querySelector("#text").innerHTML = "Error";
}