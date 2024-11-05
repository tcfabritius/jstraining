'use strict';
const vuosi = prompt("Anna vuosi: ");
if (vuosi % 4 === 0) {
  document.querySelector('#text').innerHTML = "Vuosi on karkausvuosi";
} else if (vuosi % 100 === 0) {
  if (vuosi % 400 === 0) {
    document.querySelector('#text').innerHTML = "Vuosi on karkausvuosi";
  }
} else {
  document.querySelector('#text').innerHTML = "Vuosi ei ole karkausvuosi";
}
