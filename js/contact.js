const form = document.querySelector("#form");
const errorMessages = document.querySelector(".error-messages");
const fName = document.querySelector("#fname");
const mail = document.querySelector("#email");
const addressHtml = document.querySelector("#address");
const messageHtml = document.querySelector("#message");

form.onsubmit = function (event) {
  event.preventDefault();

  errorMessages.innerHTML = "";
  validateName(fName.value);
  validateEmail(mail.value);
  validateAddress(addressHtml.value);
  validateMessage(messageHtml.value);
};

function validateName(name) {
  if (!name) {
    let errorMessage = "<li>Name is required</li>";
    errorMessages.innerHTML += errorMessage;
    fName.classList.add("input-error");
  } else {
    fName.classList.remove("input-error");
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  if (!patternMatches) {
    let errorMessage = "<li>Email is required</li>";
    errorMessages.innerHTML += errorMessage;
    mail.classList.add("input-error");
  } else {
    mail.classList.remove("input-error");
  }
}

function validateAddress(address) {
  if (!address) {
    let errorMessage = "<li>Address is required</li>";
    errorMessages.innerHTML += errorMessage;
    addressHtml.classList.add("input-error");
  } else if (address.length < 25) {
    let errorMessage = "<li>Address is too short (min 25)</li>";
    errorMessages.innerHTML += errorMessage;
    addressHtml.classList.add("input-error");
  } else {
    addressHtml.classList.remove("input-error");
  }
}

function validateMessage(message) {
  if (!message) {
    let errorMessage = "<li>Message is required</li>";
    errorMessages.innerHTML += errorMessage;
    messageHtml.classList.add("input-error");
  } else if (message.length < 10) {
    let errorMessage = "<li>Message is too short (min 10)</li>";
    errorMessages.innerHTML += errorMessage;
    messageHtml.classList.add("input-error");
  }
}
