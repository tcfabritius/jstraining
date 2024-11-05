'use strict';
let results = [];
let candidates = parseInt(prompt("Anna kandidaattien lkm"));
for (i = 1; i <= candidates; i++) {
  let nimi = prompt("Anna kandidaatin " +i+ " nimi");
  results.push({"name":nimi,"votes":0},);
}
let voters = parseInt(prompt("Anna äänestäjien lkm"));
for ( x = 1; x <= voters; x++) {
  let name = prompt("Äänestäjän " + x + " äänestyksen kohde");
  let aani = results.find(aani => aani.name === name);
  if (aani){
    aani.votes++;
  }
}
results.sort((a,b) => b.votes - a.votes );
console.log("The winner is "+results[0].name+" with "+results[0].votes+" votes.");
console.log("results:");
results.forEach(candidate => {
  console.log(candidate.name+": "+candidate.votes+" votes");
})