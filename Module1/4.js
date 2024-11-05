'use strict';
nimi = prompt("Anna nimi");
const minCeiled = Math.ceil(1);
const maxFloored = Math.floor(4);
nro = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
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