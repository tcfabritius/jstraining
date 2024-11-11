'use strict';
const dices = prompt("Enter amount of dices");
let summa = 0;
for (let i = 0; i < dices; i++) {
  let nro = Math.floor(Math.random() * 6) + 1;
  summa += nro;
}
document.querySelector("#demo").innerHTML = summa;