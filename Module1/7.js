'use strict';
const dices = prompt("Enter amount of dices");
let summa = 0;
for (let i = 0; i < dices; i++) {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(6);
  let nro = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  summa += nro;
}
document.querySelector("#demo").innerHTML = summa;