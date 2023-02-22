const form = document.querySelector("#form");
const errorMessages = document.querySelector(".error-messages");
const fName = document.querySelector("#fname");
const mail = document.querySelector("#email");
form.onsubmit = function (event) {
  event.preventDefault();

  errorMessages.innerHTML = "";
  validateName(fName.value);
  validateEmail(mail.value);
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
