'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector("#target");
for (let i = 0; i < names.length; i++) {
  target.innerHTML += `<li>${names[i]}</li>`;
}