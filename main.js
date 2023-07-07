"use strict";

import { DateTime } from "./luxon.js";

// get calculations button
const calcButton = document.querySelector("#calc-btn");

// get all 3 input fields
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

// Assign 3 input fields status to make sure all fields are valid when writting to results elements.
let dayInputStatus = false;
let monthInputStatus = false;
let yearInputStatus = false;

// get all 3 labels
const dayLabel = document.querySelector("#label-day");
const monthLabel = document.querySelector("#label-month");
const yearLabel = document.querySelector("#label-year");

// get all 3 error messages
const dayErrorMessage = document.querySelector("#day-error-message");
const monthErrorMessage = document.querySelector("#month-error-message");
const yearErrorMessage = document.querySelector("#year-error-message");

// get results elements where numbers will be shown
const resultYears = document.querySelector("#result-years");
const resultMonths = document.querySelector("#result-months");
const resultDays = document.querySelector("#result-days");

// get current date ex. 7-7-2023
const dateObject = new Date();
let currentYear = dateObject.getFullYear();
// let currentMonth = dateObject.getMonth() + 1;
// let currentDay = dateObject.getDate();

// Max day in a month global variabl
let maxDayInMonth;

// evenlistener on calculation button
calcButton.addEventListener("click", function () {
  const dayInputValue = document.querySelector("#day").value;
  const monthInputValue = document.querySelector("#month").value;
  const yearInputValue = document.querySelector("#year").value;

  // First , find max allowed days in a month for the input month by user. For example , if user enter April ,
  // then day 30 is maximum allow day.  We call the function findMaxDayInMonth then assign its return value to
  // maxDayInMonth variable so we can access this variable from anywhere in our code

  maxDayInMonth = findMaxDayInMonth(monthInputValue, yearInputValue);

  // validate all dates entered by the user

  validateDayInput(dayInputValue);
  validateMonthInput(monthInputValue);
  validateYearInput(yearInputValue);

  if (dayInputStatus && monthInputStatus && yearInputStatus) {
    let finalResuls = DateTime.now().diff(
      DateTime.local(+yearInputValue, +monthInputValue, +dayInputValue),
      ["years", "months", "days"]
    ).values;
    // Remove fractions from days
    finalResuls.days = Math.trunc(finalResuls.days);

    // display final results on the DOM
    resultYears.textContent = finalResuls.years;
    resultMonths.textContent = finalResuls.months;
    resultDays.textContent = finalResuls.days;
  } else {
    return;
  }
});

/*
    ================================ Below are functions used in the program ==============================
*/

// function to change day input and label element when value is not valid
function errorColorLabelInputDay() {
  dayInput.classList.add("invalid");
  dayLabel.classList.add("invalid-label");
}
// function to change month input and label element when value is not valid
function errorColorLabelInputMonth() {
  monthInput.classList.add("invalid");
  monthLabel.classList.add("invalid-label");
}
// function to change year input and label element when value is not valid
function errorColorLabelInputYear() {
  yearInput.classList.add("invalid");
  yearLabel.classList.add("invalid-label");
}

//find max allowed days in a month function
function findMaxDayInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

// 1 - validate day input function

function validateDayInput(dayInputValue) {
  if (dayInputValue === "") {
    errorColorLabelInputDay();
    dayErrorMessage.textContent = "This field is required";
    dayInputStatus = false;
  } else if (
    +dayInputValue > 31 ||
    +dayInputValue <= 0 ||
    +dayInputValue > maxDayInMonth
  ) {
    errorColorLabelInputDay();
    dayErrorMessage.textContent = "Must be a valid day";
    dayInputStatus = false;
  } else {
    dayErrorMessage.textContent = "";
    dayInput.classList.remove("invalid");
    dayLabel.classList.remove("invalid-label");
    dayInputStatus = true;
  }
}

// 2 - validate Month input

function validateMonthInput(monthInputValue) {
  if (monthInputValue === "") {
    errorColorLabelInputMonth();
    monthErrorMessage.textContent = "This field is required";
    monthInputStatus = false;
  } else if (+monthInputValue > 12 || +monthInputValue <= 0) {
    errorColorLabelInputMonth();
    monthErrorMessage.classList.remove("hidden");
    monthErrorMessage.textContent = "Must be a valid month";
    monthInputStatus = false;
  } else {
    monthErrorMessage.textContent = "";
    monthInput.classList.remove("invalid");
    monthLabel.classList.remove("invalid-label");
    monthInputStatus = true;
  }
}

// 3 - validate year input

function validateYearInput(yearInputValue) {
  if (yearInputValue === "") {
    errorColorLabelInputYear();
    yearErrorMessage.textContent = "This field is required";
    yearInputStatus = false;
  } else if (+yearInputValue > currentYear || +yearInputValue <= 0) {
    errorColorLabelInputYear();
    yearErrorMessage.classList.remove("hidden");
    yearErrorMessage.textContent = "Must be a valid year";
    yearInputStatus = false;
  } else {
    yearErrorMessage.textContent = "";
    yearInput.classList.remove("invalid");
    yearLabel.classList.remove("invalid-label");
    yearInputStatus = true;
  }
}
