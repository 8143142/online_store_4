const form = document.getElementById("form");
const surnameInput = document.getElementById("surnameInput");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const emailInput = document.getElementById("emailInput");
const cityInput = document.getElementById("inputCity");
const checkboxInput = document.getElementById("gridCheck");
const surnameError = document.getElementById("surnameError");
const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const cityError = document.getElementById("cityError");
const checkboxError = document.getElementById("checkboxError");

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (surnameInput.value.trim() === "") {
    isValid = false;
    surnameError.textContent = "Введите Фамилию";
  } else {
    surnameError.textContent = "";
  }

  if (nameInput.value.trim() === "") {
    isValid = false;
    nameError.textContent = "Введите Имя";
  } else {
    nameError.textContent = "";
  }

  if (addressInput.value.trim() === "") {
    isValid = false;
    addressError.textContent = "Введите Адрес";
  } else {
    addressError.textContent = "";
  }

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!emailPattern.test(emailInput.value)) {
    isValid = false;
    emailError.textContent = "Введите корректный e-mail адрес";
  } else {
    emailError.textContent = "";
  }

  if (cityInput.value.trim() === "") {
    isValid = false;
    cityError.textContent = "Введите Город";
  } else {
    nameError.textContent = "";
  }

  if (!checkboxInput.checked) {
    isValid = false;
    checkboxError.textContent = "Вы должны согласиться с соглашениями";
  } else {
    checkboxError.textContent = "";
  }

  if (!isValid) {
    event.preventDefault(); 
  } else{
        alert("Регистрация прошла успешна!"); 
      }
});
