'use strict';
const text = document.querySelector('#text');
const vuosi = prompt("Anna vuosi: ");
if (vuosi % 4 === 0) {
  text.innerHTML = "Vuosi on karkausvuosi";
} else if (vuosi % 100 === 0) {
  if (vuosi % 400 === 0) {
    text.innerHTML = "Vuosi on karkausvuosi";
  }
} else {
  text.innerHTML = "Vuosi ei ole karkausvuosi";
}
