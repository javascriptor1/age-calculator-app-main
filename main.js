"use strict";

const calcButton = document.querySelector("#calc-btn");
// get all 3 input fields
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
// get all 3 labels
const dayLabel = document.querySelector("#label-day");
const monthLabel = document.querySelector("#label-month");
const yearLabel = document.querySelector("#label-year");

// get results elements where numbers will be shown
const resultYears = document.querySelector("#result-years");
const resultMonths = document.querySelector("#result-months");
const resultDays = document.querySelector("#result-days");
// code to get current date ex. 7-7-2023
const dateObject = new Date();
let currentYear = dateObject.getFullYear();
let currentMonth = dateObject.getMonth() + 1;
let currentDay = dateObject.getDate();

calcButton.addEventListener("click", function () {
  const dayInputValue = document.querySelector("#day").value;
  const monthInputValue = document.querySelector("#month").value;
  const yearInputValue = document.querySelector("#year").value;

  // validate all dates entered by the user

  if (dayInputValue == "") {
    showDayError();
  } else if (
    +dayInputValue > 31 ||
    +dayInputValue <= 0 ||
    dayInputValue === NaN
  ) {
    showDayError();
  }

  if (+monthInputValue > 12 || +monthInputValue <= 0) {
    alert("not valid month");
  }
  if (+yearInputValue > currentYear) {
    alert("not valid year");
  }
});

// function to change day input and label element when value is not valid

function showDayError() {
  dayInput.classList.add("invalid");
  dayLabel.classList.add("invalid-label");
}
