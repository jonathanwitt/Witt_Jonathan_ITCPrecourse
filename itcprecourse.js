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
// //footer
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

//animation
