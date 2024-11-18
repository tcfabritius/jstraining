'use strict';
const form = document.querySelector('form');
let results = document.querySelector('#results');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  results.innerHTML = "";
  let query = document.querySelector('input[name="q"]').value;
  try {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`);
    const jsonData = await response.json();
    if (jsonData.result.length === 0) {
      results.innerHTML = `<p>No jokes found for "${query}".</p>`;
    }else{
      jsonData.result.forEach((item) => {
        results.innerHTML += `<article>
                            <p>${item.value}</p>
                            </article>
                            `;
      })
    }


  } catch (e) {
    console.log(e.message);
  }
})