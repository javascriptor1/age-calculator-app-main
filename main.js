"use strict";

const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const resultYears = document.querySelector("#result-years");
const resultMonths = document.querySelector("#result-months");
const resultDays = document.querySelector("#result-days");
const dateObject = new Date();
let currentYear = dateObject.getFullYear();
let dayMonthCheck = undefined;

dayInput.addEventListener("change", function () {
  const dayInputValue = document.querySelector("#day").value;
  if (+dayInputValue > 31 || +dayInputValue <= 0 || dayInputValue === isNaN) {
    alert(`${dayInputValue} is not valid day`);
  } else {
    resultDays.textContent = dayInputValue;
    dayMonthCheck = +dayInputValue;
    alert(dayMonthCheck);
  }
});

monthInput.addEventListener("change", function () {
  const monthInputValue = document.querySelector("#month").value;
  if (+monthInputValue > 12 || +monthInputValue <= 0) {
    alert("not valid month");
  } else {
    resultMonths.textContent = monthInputValue;
    alert(dayMonthCheck + "from winthin month");
  }
});

yearInput.addEventListener("change", function () {
  const yearInputValue = document.querySelector("#year").value;
  if (+yearInputValue > currentYear) {
    alert("not valid year");
  } else {
    resultYears.textContent = currentYear - yearInputValue;
  }
});
