'use strict';
const calc = confirm("Should I calculate the square root?");
if (calc === true){
  const nro = parseInt(prompt("Anna luku:"));
  if (nro >= 0){
    const answer = Math.sqrt(nro);
    document.querySelector("#text").innerHTML = toString(answer);
  } else {
    document.querySelector("#text").innerHTML = "The square root of a negative number is not defined";
  }
} else {
  document.querySelector("#text").innerHTML = "The square root is not calculated.";
}