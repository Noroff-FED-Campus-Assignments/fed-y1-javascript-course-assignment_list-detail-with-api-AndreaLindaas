const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const urlSearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const drinksHtml = document.querySelector(".drinks");
const numberOfDrinks = document.querySelector(".drinks-number");
const errorHtml = document.querySelector(".error");
const searchHtml = document.querySelector(".search-bar");
const alphabetHtml = document.querySelector(".alphabet");
const nonAlcoHtml = document.querySelector("#non-alcoholic");
const sortHtml = document.querySelector("#sort");

let currentLetter = "A";

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
  currentLetter = letter;
  getCocktails(currentLetter);
}

async function getCocktails(letter) {
  try {
    errorHtml.innerText = "";
    const response = await fetch(url + letter);
    const result = await response.json();
    showCocktails(result.drinks);
  } catch (error) {
    errorHtml.innerText =
      "Something went wrong when fetching cocktails. Please try again";
  }
}

async function searchCocktail(searchUrl) {
  try {
    errorHtml.innerText = "";
    const response = await fetch(searchUrl);
    const result = await response.json();
    showCocktails(result.drinks);
  } catch (error) {
    errorHtml.innerText =
      "Something went wrong when searching for cocktails. Please try again";
  }
}

function showCocktails(drinks) {
  drinksHtml.innerHTML = "";
  let drinksCounter = 0;
  let sort = sortHtml.value;

  if (sort === "asc") {
    drinks = drinks.sort(compare);
  } else if (sort === "desc") {
    drinks = drinks.sort(compare);
    drinks = drinks.reverse();
  }

  for (let i = 0; i < drinks.length; i++) {
    if (nonAlcoHtml.checked) {
      if (drinks[i].strAlcoholic != "Alcoholic") {
        drinksCounter++;
        createAndAddDrinkCard(drinks[i]);
      }
    } else {
      drinksCounter = drinks.length;
      createAndAddDrinkCard(drinks[i]);
    }
  }

  let drinksText = `Showing <strong>${drinksCounter}</strong> drinks`;
  numberOfDrinks.innerHTML = drinksText;
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
    getCocktails(currentLetter);
  }
};
nonAlcoHtml.onchange = function () {
  if (searchHtml.value) {
    searchCocktail(urlSearch + searchHtml.value);
  } else {
    getCocktails(currentLetter);
  }
};

sortHtml.onchange = function () {
  if (searchHtml.value) {
    searchCocktail(urlSearch + searchHtml.value);
  } else {
    getCocktails(currentLetter);
  }
};

//borrowed from the internet (stackoverflow)
function compare(a, b) {
  if (a.strDrink < b.strDrink) {
    return -1;
  }
  if (a.strDrink > b.strDrink) {
    return 1;
  }
  return 0;
}

createAlphabet();
getCocktails(currentLetter);
