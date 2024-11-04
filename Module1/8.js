let aloitusvuosi = prompt("Anna aloitusvuosi:");
vuosi = parseInt(aloitusvuosi);
let input = prompt("Anna lopetusvuosi:");
lopetusvuosi = parseInt(input);
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
for (i = 0; i < karkausvuodet.length; i++) {
  let li = document.createElement("li");
  li.innerText = karkausvuodet[i];
  document.querySelector('#lista').appendChild(li);
}