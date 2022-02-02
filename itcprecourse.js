const button = document.querySelector(".button");
let output = document.querySelector("#output");
let name = document.getElementById("name");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let comments = document.getElementById("comments");

//when submit button is clicked display info
function popUp() {
  output.innerHTML =
    "Thanks for your information: " +
    name.value +
    " " +
    lastname.value +
    ", " +
    email.value +
    ", Your Comments: " +
    comments.value;
}

// if (
//   name.value.length > 0 &&
//   email.value.length > 0 &&
//   comments.value.length > 0
// ) {
//   button.removeAttribute("disabled");
// }

document.querySelector("#InfoForm").addEventListener("input", () => {
  if (
    name.value.length > 0 &&
    email.value.length > 0 &&
    comments.value.length > 0
  ) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "disabled");
  }
});

//Gallery
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevBtn.addEventListener("click", function () {
  //syntax: element.addEventListener(event, function, useCapture);   with addEventListener you can give multiple events to click and they dont overwrite eachother.

  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected--;
  galleryImgs[currentlySelected].classList.add("active");
  nextBtn.disabled = false;

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active");
  currentlySelected++;
  galleryImgs[currentlySelected].classList.add("active");
  prevBtn.disabled = false; //everytime next was clicked you can prevBtn is abled
  if (galleryImgs.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});
