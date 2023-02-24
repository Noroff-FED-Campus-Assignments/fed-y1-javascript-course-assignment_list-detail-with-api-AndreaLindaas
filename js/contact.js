const form = document.querySelector("#form");
const errorMessages = document.querySelector(".error-messages");
const fName = document.querySelector("#fname");
const mail = document.querySelector("#email");
const addressHtml = document.querySelector("#address");
const messageHtml = document.querySelector("#message");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");

form.onsubmit = function (event) {
  event.preventDefault();

  errorMessages.innerHTML = "";
  validateName(fName.value);
  validateEmail(mail.value);
  validateAddress(addressHtml.value);
  validateMessage(messageHtml.value);

  if (errorMessages.innerHTML === "") {
    modal.style.display = "block";
  }
};

closeModal.onclick = function () {
  modal.style.display = "none";
};

function validateName(name) {
  if (!name) {
    let errorMessage = "<li>Name is required</li>";
    errorMessages.innerHTML += errorMessage;
    fName.classList.add("input-error");
    fName.classList.remove("input-success");
  } else {
    fName.classList.remove("input-error");
    fName.classList.add("input-success");
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  if (!patternMatches) {
    let errorMessage = "<li>Email is required</li>";
    errorMessages.innerHTML += errorMessage;
    mail.classList.add("input-error");
    mail.classList.remove("input-success");
  } else {
    mail.classList.remove("input-error");
    mail.classList.add("input-success");
  }
}

function validateAddress(address) {
  if (!address) {
    let errorMessage = "<li>Address is required</li>";
    errorMessages.innerHTML += errorMessage;
    addressHtml.classList.add("input-error");
    addressHtml.classList.remove("input-success");
  } else if (address.trim().length < 25) {
    let errorMessage = "<li>Address is too short (min 25)</li>";
    errorMessages.innerHTML += errorMessage;
    addressHtml.classList.add("input-error");
    addressHtml.classList.remove("input-success");
  } else {
    addressHtml.classList.remove("input-error");
    addressHtml.classList.add("input-success");
  }
}

function validateMessage(message) {
  if (!message) {
    let errorMessage = "<li>Message is required</li>";
    errorMessages.innerHTML += errorMessage;
    messageHtml.classList.add("input-error");
    messageHtml.classList.remove("input-success");
  } else if (message.trim().length < 10) {
    let errorMessage = "<li>Message is too short (min 10)</li>";
    errorMessages.innerHTML += errorMessage;
    messageHtml.classList.add("input-error");
    messageHtml.classList.remove("input-success");
  } else {
    messageHtml.classList.remove("input-error");
    messageHtml.classList.add("input-success");
  }
}
