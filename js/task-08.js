const formRef = document.querySelector(".login-form");
const inputEmailRef = document.querySelector("[name=email]");
const inputPasswdRef = document.querySelector("[name=password]");
const submitBtnRef = document.querySelector("button");

formRef.addEventListener("submit", onSubmitForm);
inputEmailRef.addEventListener("input", onInput);
inputPasswdRef.addEventListener("input", onInput);
submitBtnRef.addEventListener("click", onSubmitButton);

function onInput() {
  if (inputEmailRef.value === "" || inputPasswdRef.value === "") {
    submitBtnRef.disabled = true;
  } else {
    submitBtnRef.disabled = false;
  }
}

function onSubmitButton() {
  if (inputEmailRef.value === "" || inputPasswdRef.value === "") {
    alert("Все поля должны быть заполнены");
  }
}

function onSubmitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  event.currentTarget.reset();
}
