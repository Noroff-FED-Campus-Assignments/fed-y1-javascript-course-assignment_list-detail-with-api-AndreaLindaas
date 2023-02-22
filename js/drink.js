const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const url = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
const drinkName = document.querySelector(".title");
const imageOfDrink = document.querySelector(".image-drink");
const ingridientHtml = document.querySelector(".ingredients");
const instructionHtml = document.querySelector(".instructions");

async function drinkDetails() {
  const response = await fetch(url);
  const result = await response.json();

  showCocktail(result.drinks[0]);
}

function showCocktail(cocktail) {
  console.log(cocktail);
  drinkName.innerHTML = cocktail["strDrink"];
  imageOfDrink.src = cocktail.strDrinkThumb;
  for (let i = 1; i <= 15; i++) {
    let measure = cocktail[`strMeasure${i}`];
    let ingredient = cocktail[`strIngredient${i}`];

    if (measure) {
      let ingridientList = `<li><span>${measure}</span><span>${ingredient}</span></li>`;

      ingridientHtml.innerHTML += ingridientList;
    }
  }
  let instructions = `
  <p>
  ${cocktail.strInstructions}
  </p>`;
  instructionHtml.innerHTML = instructions;
}

drinkDetails();
