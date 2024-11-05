'use strict';
let match = false;
let luvut = [];
while (!match) {
  let luku = prompt("Anna luku");
  if (luvut.includes(luku)===true){
    match = true;
    break;
  }
  luvut.push(luku)
}
luvut.sort();
for (let x = 0; x < luvut.length; x++) {
  console.log(luvut[x]);
}