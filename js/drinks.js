const url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const urlSearch = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const drinksHtml = document.querySelector(".drinks");
const numberOfDrinks = document.querySelector(".drinks-number");
const errorHtml = document.querySelector(".error");
const searchHtml = document.querySelector(".search-bar");
const alphabetHtml = document.querySelector(".alphabet");
const nonAlcoHtml = document.querySelector("#non-alcoholic");

function createAlphabet() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  for (let i = 0; i < alphabet.length; i++) {
    let letter = `<span onclick="letterClick('${alphabet[i]}')">${alphabet[i]}</span>`;
    alphabetHtml.innerHTML += letter;
  }
}
function letterClick(letter) {
  getCocktails(letter);
}

async function getCocktails(letter) {
  try {
    errorHtml.innerText = "";
    const response = await fetch(url + letter);
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
  let drinksText = `Showing <strong>${drinks.length}</strong> drinks`;
  numberOfDrinks.innerHTML = drinksText;
  drinksHtml.innerHTML = "";

  for (let i = 0; i < drinks.length; i++) {
    if (nonAlcoHtml.checked) {
      if (drinks[i].strAlcoholic != "Alcoholic") {
        createAndAddDrinkCard(drinks[i]);
      }
    } else {
      createAndAddDrinkCard(drinks[i]);
    }
  }
}

function createAndAddDrinkCard(drinks) {
  let drink = `
  <div class="drink-image">
      <a href="details.html?id=${drinks.idDrink}">
      <img src="${drinks.strDrinkThumb}" />
      <div class="drink-name">${drinks.strDrink}</div>
      </a>
  </div>`;

  drinksHtml.innerHTML += drink;
}

searchHtml.onkeyup = function (event) {
  let searchWord = event.target.value;
  if (searchWord) {
    searchCocktail(urlSearch + searchWord);
  } else {
    getCocktails("A");
  }
};

createAlphabet();
getCocktails("A");
