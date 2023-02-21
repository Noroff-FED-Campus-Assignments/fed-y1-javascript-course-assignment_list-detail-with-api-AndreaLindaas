const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const drinksHtml = document.querySelector(".drinks");
const numberOfDrinks = document.querySelector(".drinks-number");
const errorHtml = document.querySelector(".error");
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

function showCocktails(drinks) {
  let drinksText = `Number of drinks:${drinks.length}`;
  numberOfDrinks.innerHTML = drinksText;
  drinksHtml.innerHTML = "";

  for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);

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

getCocktails();
