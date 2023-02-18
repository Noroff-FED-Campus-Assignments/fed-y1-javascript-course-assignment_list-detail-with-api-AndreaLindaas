const url = "http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
const drinksHtml = document.querySelector(".drinks");

async function getCoctails() {
  const response = await fetch(url);
  const result = await response.json();
  showCoctails(result.drinks);
}

function showCoctails(drinks) {
  drinksHtml.innerHTML = "";
  for (let i = 0; i < drinks.length; i++) {
    console.log(drinks[i]);

    let drink = `
    <div>
        <a href="details.html?id=${drinks[i].idDrink}">
        <img src="${drinks[i].strDrinkThumb}" />
        </a>
    </div>`;

    drinksHtml.innerHTML += drink;
  }
}

getCoctails();
