'use strict';
const target = document.querySelector("#target");
let item = document.createElement("li");
item.innerText = "First item";
target.appendChild(item);
item = document.createElement("li");
item.innerText = "Second item";
item.classList.add('my-item');
target.appendChild(item);
item = document.createElement("li");
item.innerText = "Third item";
target.appendChild(item);
