'use strict';
const form = document.querySelector('form');
let results = document.querySelector('#results');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  results.innerHTML = "";
  let query = document.querySelector('input[name="q"]').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    const jsonData = await response.json();
    jsonData.forEach((item) => {
      results.innerHTML += `<article>
                            <h1>${item.show.name}</h1>
                            <a href="${item.show.url}" target="_blank">${item.show.url}</a><br>
                            <img src="${item.show.image?.medium}" alt="${item.show.name}">
                            <div>${item.show.summary}</div>
                            </article>
                            `;
    })

  } catch (e) {
    console.log(e.message);
  }
})