'use strict';
let lkm = prompt("Anna osallistujien lukumäärä: ");
lkm = parseInt(lkm);
let osallistujat = [];
for (let i = 0; i < lkm; i++) {
  let osallistuja = prompt("Anna osallistujan nimi")
  osallistujat.push(osallistuja);
}
osallistujat = osallistujat.sort();
for (let x = 0; x < osallistujat.length; x++) {
  let li = document.createElement("li");
  li.innerText = osallistujat[x];
  document.querySelector('#lista').appendChild(li);
}