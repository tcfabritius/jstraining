'use strict';
let koirat = [];
for (let i = 1; i <= 6; i++) {
  let nimi=prompt("Anna koiran nimi");
  koirat.push(nimi);
}
koirat = koirat.sort().reverse();
for (let j = 0; j < koirat.length; j++) {
  let li = document.createElement("li");
  li.innerText = koirat[j];
  document.querySelector('#lista').appendChild(li);
}