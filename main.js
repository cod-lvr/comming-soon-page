const form = document.querySelector("form");
const userEmail = document.querySelector("input");
const errMsage = document.querySelector(".err-mesg");

const formSubmitionHandler = (event) => {
  event.preventDefault();
  const userEmailValue = userEmail.value;
  if (userEmailValue.length === 0 && !userEmailValue.includes("@")) {
    userEmail.style.border = "1px solid red";
    errMsage.style.display = "block";
    errMsage.style["font-size"] = "15px";
  } else {
    errMsage.style.display = "";
  }
};

form.addEventListener("submit", formSubmitionHandler);
