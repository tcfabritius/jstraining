'use strict';
let array = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
function concat(names){
  let nimet = "";
  for(let i=0; i < names.length; i++){
    nimet = nimet + names[i];
  }
  return nimet;
}
let jono = concat(array);
document.querySelector("#demo").innerHTML = jono;