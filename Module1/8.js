'use strict';
const aloitusvuosi = prompt("Anna aloitusvuosi:");
let vuosi = parseInt(aloitusvuosi);
const input = prompt("Anna lopetusvuosi:");
const lopetusvuosi = parseInt(input);
let karkausvuodet = [];
while (vuosi !== lopetusvuosi+1) {
  if (vuosi % 4 === 0) {
    karkausvuodet.push(vuosi);
  } else if (vuosi % 100 === 0) {
    if (vuosi % 400 === 0) {
      karkausvuodet.push(vuosi);
    }
  }
  vuosi++;
}
for (let i = 0; i < karkausvuodet.length; i++) {
  let li = document.createElement("li");
  li.innerText = karkausvuodet[i];
  document.querySelector('#lista').appendChild(li);
}