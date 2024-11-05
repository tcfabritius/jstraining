'use strict';
lkm = prompt("Anna osallistujien lukumäärä: ");
lkm = parseInt(lkm);
osallistujat = [];
for (i = 0; i < lkm; i++) {
  osallistuja = prompt("Anna osallistujan nimi")
  osallistujat.push(osallistuja);
}
osallistujat = osallistujat.sort();
for (let x = 0; x < osallistujat.length; x++) {
  let li = document.createElement("li");
  li.innerText = osallistujat[x];
  document.querySelector('#lista').appendChild(li);
}