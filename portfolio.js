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
//footer
let codingLanguages = ["HTML", "CSS", "JavaScript"];
// document.getElementById("arrPrint").innerHTML =
//   "This page was built using:" + codingLanguages;

let fullSentence;

if (codingLanguages.length > 1) {
  let last = codingLanguages.pop();
  languages = codingLanguages.join(", ") + " and " + last;
} else {
  countries = "" + codingLanguages;
}
document
  .getElementById("arrPrint")
  .append("This Website was built with: " + languages);

//errors wit footer currently: +not working on index because of js file +not working if only one item in array
