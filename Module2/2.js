'use strict';
let lkm = prompt("Anna osallistujien lukumäärä: ");
lkm = parseInt(lkm);
let osallistujat = [];
for (let i = 0; i < lkm; i++) {
  let osallistuja = prompt("Anna osallistujan nimi")
  osallistujat.push(osallistuja);
}
osallistujat = osallistujat.sort();
for (let i = 0; i < osallistujat.length; i++) {
  let li = document.createElement("li");
  li.innerText = osallistujat[i];
  document.querySelector('#lista').appendChild(li);
}