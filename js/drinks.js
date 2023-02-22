const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const urlSearch = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const drinksHtml = document.querySelector(".drinks");
const numberOfDrinks = document.querySelector(".drinks-number");
const errorHtml = document.querySelector(".error");
const searchHtml = document.querySelector(".search-bar");

async function getCocktails() {
  try {
    errorHtml.innerText = "";
    const response = await fetch(url);
    const result = await response.json();
    showCocktails(result.drinks);
  } catch (error) {
    errorHtml.innerText = "Something went wrong";
  }
}

async function searchCocktail(searchUrl) {
  try {
    errorHtml.innerText = "";
    const response = await fetch(searchUrl);
    const result = await response.json();
    showCocktails(result.drinks);
  } catch (error) {
    errorHtml.innerText = "Something went wrong";
  }
}

function showCocktails(drinks) {
  let drinksText = `Number of drinks:${drinks.length}`;
  numberOfDrinks.innerHTML = drinksText;
  drinksHtml.innerHTML = "";

  for (let i = 0; i < drinks.length; i++) {
    let drink = `
    <div class="drink-image">
        <a href="details.html?id=${drinks[i].idDrink}">
        <img src="${drinks[i].strDrinkThumb}" />
        <div class="drink-name">${drinks[i].strDrink}</div>
        </a>
    </div>`;

    drinksHtml.innerHTML += drink;
  }
}

searchHtml.onkeyup = function (event) {
  console.log(event.target.value);

  let searchWord = event.target.value;

  searchCocktail(urlSearch + searchWord);
};

getCocktails();
