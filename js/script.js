let userName = document.querySelector("#sec11-name").value;
let phoneNumber = document.querySelector("#sec11-number").value;
let email = document.querySelector("#sec11-email").value;
let survey = document.querySelector("#sec11-survey").value;
let btn = document.querySelector("#sec11-btn");
let check = document.querySelector("#sec11-check");

btn.addEventListener("click", () => {
  localStorage.setItem("user", userName);
});
