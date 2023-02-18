const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");
console.log(id);

const url = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

async function drinkDetails() {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
}
drinkDetails();
