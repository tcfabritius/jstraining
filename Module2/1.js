'use strict';
let luvut = [];
for (let i = 0; i < 5; i++) {
  let syöte = prompt("Anna luku " );
  syöte = parseInt(syöte);
  luvut.push(syöte);
}
for (let x = 5; x >= 0 ; x--) {
  console.log(luvut[x]);
}