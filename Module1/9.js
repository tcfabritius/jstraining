let syote = prompt("Anna luku:")
let luku = parseInt(syote);
let jaolliset = 0;
for (let i = 0; i < syote; i++) {
  if (luku%(i+1)===0) {
    jaolliset++;
  }
}
if (jaolliset>2) {
  document.querySelector("#text").innerHTML = "Luku ei ole alkuluku";
} else {
  document.querySelector("#text").innerHTML = "Luku on alkuluku";
}