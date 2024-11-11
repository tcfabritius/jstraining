'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.querySelector("#target");
for (let i = 0; i < students.length; i++) {
  let item = document.createElement("option");
  item.value = `${students[i].id}`;
  item.innerText = students[i].name;
  target.appendChild(item);
}
