async function joke(){
  try {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/random`);
    const jsonData = await response.json();
    console.log(jsonData.value);

  } catch (e) {
    console.log(e.message);
  }
}
joke();