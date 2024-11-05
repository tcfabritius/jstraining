'use strict';
let luvut = [];
for (i = 0; i < 5; i++) {
  let syöte = prompt("Anna luku " );
  syöte = parseInt(syöte);
  luvut.push(syöte);
}
for (x = 5; x >= 0 ; x--) {
  console.log(luvut[x]);
}