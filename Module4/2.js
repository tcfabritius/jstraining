'use strict';
const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let query = document.querySelector('input[name="q"]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (e) {
    console.log(e.message);
  }
})