const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;
const drinkName = document.querySelector(".title");
const imageOfDrink = document.querySelector(".image-drink");
const ingridientHtml = document.querySelector(".ingredients");
const instructionHtml = document.querySelector(".instructions");
const errorHtml = document.querySelector(".error");
const title = document.querySelector("title");

async function drinkDetails() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    showCocktail(result.drinks[0]);
  } catch (error) {
    errorHtml.innerText = "Something went wrong";
  }
}

function showCocktail(cocktail) {
  title.innerHTML = cocktail["strDrink"];
  drinkName.innerHTML = cocktail["strDrink"];
  imageOfDrink.src = cocktail.strDrinkThumb;
  imageOfDrink.alt = `Picture of ${cocktail.strDrink}`;
  for (let i = 1; i <= 15; i++) {
    let measure = cocktail[`strMeasure${i}`];
    let ingredient = cocktail[`strIngredient${i}`];

    if (measure) {
      let ingridientList = `<li><span class="measure">${measure}</span><span>${ingredient}</span></li>`;

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
