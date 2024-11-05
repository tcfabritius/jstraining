'use strict';
let diceValues = [];
let diceValue = 0;

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
while (diceValue !== 6){
  diceValue = rollDice();
  diceValues.push(diceValue);
}
for (let i = 0; i < diceValues.length; i++){
  let li = document.createElement("li");
  li.innerText = diceValues[i];
  document.querySelector('#lista').appendChild(li);
}