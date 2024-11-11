'use strict';
const trigger = document.querySelector("#trigger");
const target = document.querySelector("#target");

function e(){
  target.src = "img/picB.jpg";
}

function f(){
  target.src = "img/picA.jpg";
}

trigger.addEventListener("mouseover", e);
trigger.addEventListener("mouseout", f);