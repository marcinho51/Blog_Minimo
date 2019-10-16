// sign-in input validator

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

// sign-in button validator

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

// loading more posts

const loadMoreButton = document.querySelector(
  ".posts-second__load-more button"
);
const loadMoreContainer = document.querySelector(".posts-second__load-more");
const postsSecondSection = document.querySelector(".posts-second .row");

const loadMore = () => {
  // new elements to create
  const newLink = document.createElement("a");
  const newPostDiv = document.createElement("div");
  const newImg = document.createElement("img");
  const newHeadline5 = document.createElement("h5");
  const newHeadline1 = document.createElement("h1");
  const newParagraph = document.createElement("p");

  // appending those elements to the website

  postsSecondSection.insertBefore(newLink, loadMoreContainer);
  newLink.setAttribute("href", "#");
  newLink.classList.add("col-sm-12", "col-md-6", "col-lg-4");
  newLink.appendChild(newPostDiv);
  newPostDiv.classList.add("posts-second__post");
  newPostDiv.appendChild(newImg);
  newImg.setAttribute("src", "./images/image8.jpg");
  newImg.setAttribute("alt", "Dog");
  newPostDiv.appendChild(newHeadline5);
  newHeadline5.innerText = "Lifestyle";
  newPostDiv.appendChild(newHeadline1);
  newHeadline1.innerText = "Lorem ipsum, lorem ipsum";
  newPostDiv.appendChild(newParagraph);
  newParagraph.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed nibh ac mi accumsan malesuada eu eget mauris. Suspendisse viverra, ligula et euismod hendrerit, massa dolor bibendum leo, ac pulvinar quam diam sit amet mauris.";
  loadMoreButton.parentElement.removeChild(loadMoreButton);
  loadMoreContainer.style.padding = "3rem 0 0 0";
};

loadMoreButton.addEventListener("click", loadMore);
