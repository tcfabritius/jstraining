'use strict';
const start = document.querySelector('#start');
const result = document.querySelector('#result');

function calculate(){

  const num1 = parseInt(document.querySelector('#num1').value);
  const num2 = parseInt(document.querySelector('#num2').value);
  const operation = document.querySelector('#operation').value;

  if (operation === "add"){
    result.innerHTML = String(num1 + num2);
  } else if (operation === "sub"){
    result.innerHTML = String(num1 - num2);
  } else if (operation === "multi"){
    result.innerHTML = String(num1 * num2);
  } else if (operation === "div"){
    result.innerHTML = String(num1 / num2);
  }
}

start.addEventListener("click", calculate);