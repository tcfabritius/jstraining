'use strict';
const result = document.querySelector("#result");
const start = document.querySelector("#start");
const calculation = document.querySelector("#calculation");

function calculate(){

  calc = calculation.value;


  if (calc.includes("+")){
    calc = calc.split("+");
    result.innerHTML = String(parseInt(calc[0])+parseInt(calc[1]));
  } else if (calc.includes("-")){
    calc = calc.split("-");
    result.innerHTML = String(parseInt(calc[0])-parseInt(calc[1]));
  } else if (calc.includes("*")){
    calc = calc.split("*");
    result.innerHTML = String(parseInt(calc[0])*parseInt(calc[1]));
  } else if (calc.includes("/")){
    calc = calc.split("/");
    result.innerHTML = String(parseInt(calc[0])/parseInt(calc[1]));
  }
}

start.addEventListener("click", calculate);