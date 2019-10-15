// mail input and button

const mailInput = document.querySelector(".sign-up__form--input input");
const mailButton = document.querySelector(".sign-up__form--input button");
const inputContainer = document.querySelector(".sign-up__form--input");
const newAlert = document.createElement("h5");

const inputValidator = () => {
  if (
    mailInput.value.indexOf("@") !== -1 &&
    mailInput.value.indexOf(".") !== -1 &&
    mailInput.value.length > 6
  ) {
    mailInput.style.border = "1px solid green";
  } else {
    mailInput.style.removeProperty("border");
  }

  if (mailButton.nextElementSibling === newAlert) {
    newAlert.parentElement.removeChild(newAlert);
  }
};

mailInput.addEventListener("input", inputValidator);
let counter = 0; // counter of clicks
const buttonValidator = () => {
  counter++;
  if (
    mailInput.value.indexOf("@") === -1 ||
    mailInput.value.indexOf(".") === -1 ||
    (mailInput.value.length <= 6 && counter >= 1)
  ) {
    mailInput.value = "";
    mailInput.style.border = "1px solid red";
    inputContainer.appendChild(newAlert);
    newAlert.innerText = "Type your email correctly!";
    newAlert.style.color = "red";
  } else if (
    mailInput.value.indexOf("@") !== -1 &&
    mailInput.value.indexOf(".") !== -1 &&
    mailInput.value.length > 6
  ) {
    mailInput.value = "";
    alert("Congratulations! You've just signed up!");
  }
};

mailButton.addEventListener("click", buttonValidator);
