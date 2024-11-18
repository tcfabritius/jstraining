'use strict';
function rollDice(size) {
  return Math.floor(Math.random() * size) + 1;
}

let diceValues = [];
let diceValue = 0;
let sizes = parseInt(prompt("Anna tahkojen lkm: "));

while (diceValue !== sizes){
  diceValue = rollDice(sizes);
  diceValues.push(diceValue);
}
for (let i = 0; i < diceValues.length; i++){
  let li = document.createElement("li");
  li.innerText = diceValues[i];
  document.querySelector('#lista').appendChild(li);
}