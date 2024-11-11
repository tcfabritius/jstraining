'use strict';
const syote = prompt("Anna luku:");
const luku = parseInt(syote);
let jaolliset = 0;
for (let i = 2; i < syote; i++) {
  if (luku%i===0) {
    jaolliset++;
  }
}
if (jaolliset>1) {
  document.querySelector("#text").innerHTML = "Luku ei ole alkuluku";
} else {
  document.querySelector("#text").innerHTML = "Luku on alkuluku";
}