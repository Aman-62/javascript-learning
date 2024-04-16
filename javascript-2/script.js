//* Activating Strict mode

"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = 100;
// const private = 1000;

//* Functions

// creation of function
function logger() {
  console.log("My name is Rahul.");
}

// calling / invoking / running a function
logger();
logger();

function sum(a, b) {
  let x = a,
    y = b;

  return x + y;
}
function subtract(a, b) {
  return a + b;
}

const addNum = sum(50, 100);
const subNum = subtract(15, 16);
console.log(addNum, subNum);

// function to validate password
function validatePassword(password) {
  // if (password.length >= 8) return true;
  // else return false;

  // return password.length >= 8 ? true : false;

  return password.length >= 8;
}
console.log(validatePassword("root123"));

//* Function Declarations vs Expressions

// Function Declaration
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1998);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(2002);

// Arrow Function (one liner function)
const calcAge3 = (birthYear) => 2024 - birthYear;

const age3 = calcAge3(1990);

console.log(age1, age2, age3);
*/

//* Function calling other functions
function greet(name) {
  return "Hello, " + name + "!";
}

function welcome() {
  const userName = "Mohit";
  const greetingMessage = greet(userName);
  return greetingMessage;
}

console.log(welcome());

function calcRectangleArea(width, height) {
  return width * height;
}
function calcRectanglePerimeter(width, height) {
  return 2 * (width + height);
}

function displayRectangleInfo(a, b) {
  const area = calcRectangleArea(a, b);
  const perimeter = calcRectanglePerimeter(a, b);

  console.log("Rectangle Info:");
  console.log("Width: " + a);
  console.log("Height: " + b);
  console.log("Area: " + area);
  console.log("Perimeter: " + perimeter);
}

displayRectangleInfo(5, 3);
displayRectangleInfo(10, 20);
