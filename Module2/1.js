'use strict';
let luvut = [];
for (let i = 0; i < 5; i++) {
  let syöte = prompt("Anna luku " );
  syöte = parseInt(syöte);
  luvut.push(syöte);
}
for (let i = luvut.length-1; i >= 0 ; i--) {
  console.log(luvut[i]);
}