let btn = document.querySelector("#sec11-btn");

btn.addEventListener("click", () => {
  let userName = document.querySelector("#sec11-name").value;
  let phoneNumber = document.querySelector("#sec11-number").value;
  let email = document.querySelector("#sec11-email").value;
  let survey = document.querySelector("#sec11-survey").value;

  let user = {
    name: userName,
    phone: phoneNumber,
    email: email,
    survey: survey
  };  

  localStorage.setItem("user", JSON.stringify(user));
});