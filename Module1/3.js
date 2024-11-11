'use strict';
let luku1 = +prompt("Anna luku1");
let luku2 = +prompt("Anna luku2");
let luku3 = +prompt("Anna luku3");

document.querySelector("#sum").innerHTML = `Summa ${luku1 + luku2 + luku3}`;
document.querySelector("#product").innerHTML = `Tulo ${luku1 * luku2 * luku3}`;
document.querySelector("#average").innerHTML = `Keskiarvo ${(luku1 + luku2 + luku3)/3}`;