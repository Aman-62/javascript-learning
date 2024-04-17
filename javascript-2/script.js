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

//* Coding Challenge #5

// Back to the two teams, the TEAM-A and the TEAM-B! There is a new discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgTeamA' and 'avgTeamB'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "avgTeamB win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time

//Test data:
// Data 1: Team-A score 44, 23 and 71. Team-B score 65, 54 and 49
// Data 2: Team-A score 85, 54 and 41. Team-B score 23, 34 and 27
// Hints:
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores

const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgA = calcAverage(85, 54, 41);
const avgB = calcAverage(23, 34, 27);

function checkWinner(avgTeamA, avgTeamB) {
  if (avgTeamA >= avgTeamB * 2) {
    console.log(`avgTeamA win (${avgTeamA} vs. ${avgTeamB})`);
  } else if (avgTeamB >= avgTeamA * 2) {
    console.log(`avgTeamB win (${avgTeamB} vs. ${avgTeamA})`);
  } else {
    console.log("No team wins the game");
  }
}

console.log(avgA, avgB);
checkWinner(avgA, avgB);
*/

//* Arrays
const friend1 = "Rahul";
const friend2 = "Vishal";
const friend3 = "Raj";
console.log(friend1, friend2, friend3);

// method 1
const friends = ["Rahul", "Vishal", "Raj"];
console.log(friends);

// method 2
const birthYears = new Array(1998, 2002, 1990, 2000);
console.log(birthYears);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
