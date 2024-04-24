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

//* Arrays
const friend1 = "Rahul";
const friend2 = "Vishal";
const friend3 = "Raj";

// method 1
const friends = ["Rahul", "Vishal", "Raj"];
console.log(friends);

// method 2
const birthYears = new Array(1998, 2002, 1990, 2000);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

// add an elements
friends.push("Mohit"); // last
friends.unshift("Ram"); // starting
console.log(friends);

// remove an element
friends.pop(); // last
friends.shift(); // starting
console.log(friends);

console.log(friends.indexOf("Vishal"));
console.log(friends.indexOf("Ram"));

console.log(friends.includes("Raj"));

if (friends.includes("Vishal")) {
  console.log("You have a friend called Vishal.");
}


//* Objects

const rajatArray = [
  "Rajat",
  "Kumar",
  2024 - 1998,
  "Developer",
  ["Rahul", "Vishal", "Raj"],
];
console.log(rajatArray[4][1]);

const rajatObj = {
  firstName: "Rajat",
  lastName: "Kumar",
  age: 2024 - 1998,
  job: "Developer",
  friends: ["Rahul", "Vishal", "Raj"],
};
console.log(rajatObj);

// dot notation & bracket notation
console.log(rajatObj.lastName);
console.log(rajatObj["lastName"]);

const nameKey = "Name";
console.log(rajatObj["first" + nameKey]);
console.log(rajatObj["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Rajat? Choose between firstName, lastName, age, job and friends"
// );

// if (rajatObj[interestedIn]) {
//   console.log(rajatObj[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends"
//   );
// }

// add
rajatObj.address = "Delhi";
rajatObj["twitter"] = "rajat_27";

// update
rajatObj.age = 27;

console.log(rajatObj);

console.log(
  `${rajatObj.firstName}} has ${rajatObj.friends.length} friends, and his best friend is called ${rajatObj.friends[0]}`
);

const rajatObj = {
  firstName: "Rajat",
  lastName: "Kumar",
  birthYear: 1998,
  job: "Developer",
  friends: ["Rahul", "Vishal", "Raj"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    // creating new key value pair, once the methods is called
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(rajatObj.calcAge(1998));
// console.log(rajatObj["calcAge"](1998));

console.log(rajatObj.calcAge());
console.log(rajatObj.age);
console.log(rajatObj.age);
console.log(rajatObj.age);
console.log(rajatObj.age);

// Rajat is a 46 years old developer, and he has a/no driver's license.
console.log(rajatObj.getSummary());


//* Coding Challenge #5
// Rahul is still building his tip calculator, using the same rules as before: Tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above.
// 2. And now let's use arrays! So create an array 'bills; containing the test data below.
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function function you created before.
// 4. Create an array 'total' containing the total values, bill + tip.

// Test Data: 125, 555, and 44

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

//* Coding Challenge #6

// Let's go back to Rahul and Vishal comparing their BMIs! this time. let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height).

// 1. For each of them, create an object with properties for their full name, mass and height (Rahul Sharma and Vishal Gupta)
// 2. Create a 'calBMI' method on each objects to calculate the BMI (the same method on both objects).
// 3. Log to the console who has the higher BMI, together with the full name and respective BMI. Example: "Rahul Sharma's BIM (28.3) is higher than Vishal Gupta's BMI (23.9)!"

// Test Data: Rahul weight 78 kg and 1.69 m tall Vishal weight 92 kg and 1.95 m tall

const rahul = {
  fullName: "Rahul Sharma",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const vishal = {
  fullName: "Vishal Gupta",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
rahul.calcBMI();
vishal.calcBMI();

rahul.BMI > vishal.BMI
  ? console.log(
      `${rahul.fullName}'s BIM (${rahul.BMI}) is higher than ${vishal.fullName}'s BMI (${vishal.BMI})!`
    )
  : console.log(
      `${vishal.fullName}'s BMI (${vishal.BMI}) is higher than ${rahul.fullName}'s BIM (${rahul.BMI})!`
    );

// Iteration The for Loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is true
// 1. deceleration
// 2. condition
// 3. updating

for (let x = 1; x <= 10; x++) {
  console.log("Lifting weights repetition " + x);
}

// working
// let x = 1; true; CODE; x = 2
// true; CODE; x = 3
// true; CODE; x = 4
// ....
// true; CODE; x = 9
// true; CODE; x = 10
// true; CODE; x = 11
// false; EXIT

for (let x = 2; x <= 20; x = x + 2) {
  console.log(x);
}

const rajatArray = [
  "Rajat",
  "Kumar",
  2024 - 1998,
  "Developer",
  ["Rahul", "Vishal", "Raj"],
];
const types = [];

// looping arrays
for (let i = 0; i < rajatArray.length; i++) {
  // console.log(rajatArray[i]);
  // console.log(typeof rajatArray[i]);

  // filling types array
  // types[i] = typeof rajatArray[i];
  types.push(typeof rajatArray[i]);
}
console.log(types);

const years = [1991, 2007, 1979, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);


// break and continue
const rajatArray = [
  "Rajat",
  "Kumar",
  2024 - 1998,
  "Developer",
  ["Rahul", "Vishal", "Raj"],
];

console.log("---ONLY STRING---");
for (let i = 0; i < rajatArray.length; i++) {
  if (typeof rajatArray[i] !== "string") continue;

  console.log(rajatArray[i], typeof rajatArray[i]);
}

console.log("---STOP WITH NUMBER---");
for (let i = 0; i < rajatArray.length; i++) {
  if (typeof rajatArray[i] === "number") break;

  console.log(rajatArray[i], typeof rajatArray[i]);
}

// looping backwards
// 0, 1, 2, 3, 4
// 4, 3, 2, 1, 0

for (let i = rajatArray.length - 1; i >= 0; i--) {
  console.log(rajatArray[i]);
}

for (let x = 1; x <= 5; x++) {
  console.log(`--------------- Starting exercise ${x}`);
  for (let y = 1; y <= 5; y++) {
    console.log(`Exercise ${x} Lifting weights repetition ${y}`);
  }
}

// let x = 1; true; code
//                  let y = 1; true; code; y++
//                  y = 2; true; code; y++
//                  y = 3; true; code; y++
//                  y = 4; true; code; y++
//                  y = 5; true; code; y++
//                  y = 6; false; exit; x++
// x = 2; true; code
//                  let y = 1; true; code; y++
//                  y = 2; true; code; y++
//                  y = 3; true; code; y++
//                  y = 4; true; code; y++
//                  y = 5; true; code; y++
//                  y = 6; false; exit; x++




*/

// while loop
let rep = 1;

while (rep <= 10) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);
// Math.random() =>  0.0000001, 0.99999999
// Math.random() * 6  => 0.0000006, 5.9999999
// Math.random() * 6 + 1 => 1.00000006, 6.99999999
// Math.trunc(Math.random() * 6 + 1) => 1, 6

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice == 6) console.log("Loop is ending");
}
