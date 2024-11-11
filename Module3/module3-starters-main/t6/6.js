'use strict';
const button = document.querySelector('button');

function popup(){
  alert('Button was clicked');
}

button.addEventListener('click', popup);