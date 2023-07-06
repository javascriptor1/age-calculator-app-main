"use strict";

const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const resultYears = document.querySelector("#result-years");
const resultMonths = document.querySelector("#result-months");
const resultDays = document.querySelector("#result-days");
const dateObject = new Date();
let currentYear =  dateObject.getFullYear();

dayInput.addEventListener("change", () => {
  const dayInputValue = document.querySelector("#day").value;
  const monthInputValue = document.querySelector("#month").value;
  const yearInputValue = document.querySelector("#year").value;

  if (dayInputValue > 31) {
    alert("not valid day");
  } else {
    resultDays.textContent = dayInputValue;
  }
  if (monthInputValue > 12) {
    alert("not valid month");
  } else {
    resultMonths.textContent = monthInputValue;
  }
  if (yearInputValue > currentYear) {
    alert("year not valid 🛑");
  } else {
    resultYears.textContent = dayInputValue;
  }
});
