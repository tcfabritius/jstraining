'use strict';
let array = [2,3,4,5,6,7,8,9,10];
function even(lista){
  let lista2 = [];
  for(let i=0;i<lista.length;i++){
    if (lista[i]%2===0){
      lista2.push(lista[i]);
    }
  }
  return lista2;
}
let array1 = even(array);
console.log(array);
console.log(array1);