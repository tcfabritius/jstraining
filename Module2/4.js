'use strict';
let input=1;
let luvut=[];
while (input !== 0){
  input = prompt("Anna luku");

  luvut.push(input);
}
luvut.sort().reverse();
for (let x = 0; x < luvut.length; x++) {
  console.log(luvut[x]);
}