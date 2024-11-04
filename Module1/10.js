const nopat = prompt("Anna noppien lukumäärä:");
const noppienlkm = parseInt(nopat);
const lukuu = prompt("Anna luku:");
const luku = parseInt(lukuu);
let noppiensummat = [];
let osumat = 0;

// Run simulation 10,000 times
for (let i = 0; i < 10000; i++) {
  let summa = 0;

  // Roll `noppienlkm` dice and calculate the sum
  for (let x = 0; x < noppienlkm; x++) {
    let nro = Math.floor(Math.random() * 6) + 1;
    summa += nro;
  }

  // Store the sum of this roll
  noppiensummat.push(summa);

  // Check if the sum matches the target number `luku`
  if (summa === luku) {
    osumat++;
  }
}

// Calculate probability
const todennakoisyys = (osumat / 10000) * 100;
document.querySelector("#demo").innerHTML =
    "Probability to get sum " + luku + " with " + noppienlkm + " dice is " + todennakoisyys.toFixed(0) + "%";
