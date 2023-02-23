const form = document.querySelector("#form");
const errorMessages = document.querySelector(".error-messages");
const fName = document.querySelector("#fname");
const mail = document.querySelector("#email");
const addressHtml = document.querySelector("#address");

form.onsubmit = function (event) {
  event.preventDefault();

  errorMessages.innerHTML = "";
  validateName(fName.value);
  validateEmail(mail.value);
  validateAddress(address.value);
};

function validateName(name) {
  if (!name) {
    let message = "<li>Name is required</li>";
    errorMessages.innerHTML += message;
    fName.classList.add("input-error");
  } else {
    fName.classList.remove("input-error");
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  if (!patternMatches) {
    let message = "<li>Email is required</li>";
    errorMessages.innerHTML += message;
    mail.classList.add("input-error");
  } else {
    mail.classList.remove("input-error");
  }
}

function validateAddress(address) {
  if (!address) {
    let message = "<li>Address is required</li>";
    errorMessages.innerHTML += message;
    addressHtml.classList.add("input-error");
  } else if (address.length < 25) {
    let message = "<li>Address is too short (min 25)</li>";
    errorMessages.innerHTML += message;
    addressHtml.classList.add("input-error");
  } else {
    addressHtml.classList.remove("input-error");
  }
}
