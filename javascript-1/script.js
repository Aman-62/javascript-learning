/*

// comment syntax

let js = 'boring'
if (js == 'amazing') alert('JavaScript is FUN!')

console.log(40 + 8 + 23 + 10)
console.log('Hello World')

//* Values and Variables

//* Variables
let firstName = 'Mohit'

console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

// let 6years = 6;
let year6s = 6
let years7 = 7
let first_name = 'Rahul'

// do not use reserved keyword for variables name
let $function = 'hello'
let name = 'Raj'
console.log(name)

let PI = 3.1415

let job1 = 'programmer'
let job2 = 'teacher'

let myFirstJob = 'programmer'
let myCurrentJob = 'teacher'


//* 7 Primitive Data types

let age = 23 // number
console.log(age)
console.log(typeof age)

let lastName = 'Sharma'
console.log(lastName)
console.log(typeof lastName)

let isAdult = true
console.log(isAdult)
console.log(typeof isAdult)

let job
console.log(job)
console.log(typeof job)

let newJob = null
console.log(newJob)
console.log(typeof newJob)


//* let vs const vs var

let age = 30
age = 31

console.log(age)

const birthYear = 1991
// birthYear = 1992
// console.log(birthYear)

var job = 'teacher'
job = 'developer'

console.log(job)

lastName = 'Sharma'
console.log(lastName)


//* Basic Operators

const now = 2024
let ageRahul = now - 1998
let ageVishal = now - 2000

console.log(ageRahul, ageVishal)

console.log(ageRahul * 2, ageVishal / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 => 2 * 2 * 2

const firstName = 'Raj'
const lastName = 'Sharma'

// concatenation
console.log(firstName + ' ' + lastName)

// addition
let x = 10 + 5
console.log(x)

console.log(10 + 20 + 'Hello')

// Assignment operators
// x = x + 5
x += 5
x *= 2
x /= 4
x -= 5
x++
x--

console.log(x)

// Comparison operators
console.log(ageRahul > ageVishal)
console.log(ageRahul < ageVishal)

let age = 18
console.log(age >= 18)

//* Operator Precedence

const now = 2024
let ageRahul = now - 1998
let ageVishal = now - 2000

console.log(now - 2000 > now - 2002)

console.log(10 * 4 - 2)

// *, /, ** ==> 12
// +, - ==> 11
// >, >=, <, <= ==> 9
// = ==> 2

let x, y

x = y = 25 - 10 - 5
console.log(x, y)

const averageAge = (ageRahul + ageVishal) / 2

console.log(averageAge)

//* Coding Challenge #1

// Rahul and Vishal are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height).

// 1. Store Rahul's and Vishal's mass and height in variable (massRahul, heightRahul, massVishal, heightVishal).
// 2. Calculate both their BMI's using the formula (BMIRahul, BMIVishal)
// 3. Create a boolean variable 'rahulHigherBMI' containing information about wether Rahul has a higher BMI than Vishal.

// Test DATA 1: Rahul mass = 78 kg and height = 1.69 m tall, Vishal mass = 92 kg and height = 1.95 m tall
// Test DATA 2: Rahul mass = 85 kg and height = 1.88 m tall, Vishal mass = 85 kg and height = 1.76 m tall

//* SOLUTION

// const massRahul = 78,
//   heightRahul = 1.69,
//   massVishal = 92,
//   heightVishal = 1.95

const massRahul = 85,
  heightRahul = 1.88,
  massVishal = 85,
  heightVishal = 1.76

const BMIRahul = massRahul / heightRahul ** 2
const BMIVishal = massVishal / (heightVishal * heightVishal)

const rahulHigherBMI = BMIRahul > BMIVishal

console.log(BMIRahul, BMIVishal, rahulHigherBMI)


//* Strings and Template Literals

const firstName = 'Amit'
const job = 'Developer'
const birthYear = 1997
const now = 2024

const amit = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job + '!'

console.log(amit)

const amitNew = `I'm ${firstName}, a ${now - birthYear} years old ${job}!`

console.log(amitNew)

console.log('String with \nmultiple \nlines')

console.log(`String with 
multiple 
lines`)

//* Taking Decisions using if_else statements

let age = 16
// const isOldEnough = age >= 18

if (age >= 18) {
  console.log('User can start driving license.')
} else {
  const yearsLeft = 18 - age
  console.log(`User is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1999

let century
if (birthYear <= 2000) {
  century = 20
} else {
  century = 21
}
console.log(century)


//* Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote,

// 1. Print a nice output to the console, saying who has the higher BMI. The message can either be "Rahul's BMI is higher than Vishal's!" or "Vishal's BMI is higher than Rahul's!"
// 2. Use a template string to include the BMI values in the output. Example: "Rahul's BMI (28.3) is higher that Vishal's (23.9)!"

//* SOLUTION

const massRahul = 78,
  heightRahul = 1.69,
  massVishal = 92,
  heightVishal = 1.95

// const massRahul = 85,
//   heightRahul = 1.88,
//   massVishal = 85,
//   heightVishal = 1.76

const BMIRahul = massRahul / heightRahul ** 2
const BMIVishal = massVishal / (heightVishal * heightVishal)

if (BMIRahul > BMIVishal) {
  console.log(`Rahul's BMI (${BMIRahul}) is higher that Vishal's (${BMIVishal})!`)
} else {
  console.log(`Vishal's BMI (${BMIVishal}) is higher that Rahul's (${BMIRahul})!`)
}

//* Multiple if_else statement

let marks = 50

if (marks >= 90) {
  console.log('Grade A')
} else if (marks >= 80) {
  console.log('Grade B')
} else if (marks >= 70) {
  console.log('Grade C')
} else if (marks >= 60) {
  console.log('Grade D')
} else {
  console.log('FAIL!')
}

//* Nested if_else statement

//* Question: A store gives discounts based on membership status and the amount spent. Members spending over Rs.100 get a 10% discount, non-members spending over Rs.150 get a 5% discount, and all others get no discount.

let isMember = 0 // 1 for member, 0 for non-member
let purchaseAmount = 160

// check if the customer is a member
if (isMember == 1) {
  // member is true, check if the purchase amount is over rs.100
  if (purchaseAmount > 100) {
    console.log(`Discount: 10% = ${purchaseAmount * 0.1}`)
  } else {
    // purchase amount is rs.100 or less for a member
    console.log('Discount: 0%')
  }
} else {
  // customer is not a member
  if (purchaseAmount > 150) {
    console.log(`Discount: 5% = ${purchaseAmount * 0.05}`)
  } else {
    // purchase amount is rs.100 or less for a member
    console.log('Discount: 0%')
  }
}

//* Type Conversion and Coercion

//* Type Conversion
const inputYear = "1998";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Rahul"));
console.log(typeof Number("Rahul"));

console.log(String(23), 23);

//* Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" + "10");
console.log("23" - "10" - 3);
console.log("A23" - "10");

console.log("23" < "18");

let n = "1" + 1; // '11'
n = n - 1; // '11' - 1
console.log(n);

//* 5 Falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money = 0;
if (Boolean(money)) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 198;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//* == vs ===

const age = "18";

//* Check value as well as data type
if (age === 18) console.log("You just become an adult (strict)");

//* Only check value
if (age == 18) console.log("You just become an adult (loose)");

const msg = prompt("Enter you message");
console.log(msg);

if (msg == 10) {
  console.log("You entered 10");
}


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log("==AND (&&)==");
console.log(hasDriversLicense && hasGoodVision);

console.log("==OR (||)==");
console.log(hasDriversLicense || hasGoodVision);

console.log("==NOT (!)==");
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("You are able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = false; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive");
} else {
  console.log("Someone else should drive");
}

//* Coding Challenge #3

// There are two teams, TEAM-A and TEAM-B. They compete against each other 3 times. The winner with the highest **AVERAGE SCORE** wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

// TEST DATA:
// Data 1: TEAM-A score 96, 108 and 89. TEAM-B score 88, 91 and 110

// ------------------------------------------------------------------------------------------------

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// TEST DATA:
// Data Bonus 1: TEAM-A score 97, 112 and 101. TEAM-B score 109, 95 and 123
// Data Bonus 2: TEAM-A score 97, 112 and 101. TEAM-B score 109, 95 and 106

// const scoreTeamA = (96 + 108 + 89) / 3;
// const scoreTeamB = (88 + 91 + 110) / 3;

// console.log(scoreTeamA, scoreTeamB);

// if (scoreTeamA > scoreTeamB) {
//   console.log("Team A is the winner");
// } else if (scoreTeamA < scoreTeamB) {
//   console.log("Team B is the winner");
// } else if (scoreTeamA === scoreTeamB) {
//   console.log("Both win the trophy!");
// }

const scoreTeamA = (97 + 112 + 101) / 3;
const scoreTeamB = (109 + 95 + 106) / 3;

console.log(scoreTeamA, scoreTeamB);

if (scoreTeamA > scoreTeamB && scoreTeamA >= 100) {
  console.log("Team A is the winner");
} else if (scoreTeamA < scoreTeamB && scoreTeamB >= 100) {
  console.log("Team B is the winner");
} else if (scoreTeamA === scoreTeamB && scoreTeamA >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the games");
}

//* The switch Statement

const day = 5;

switch (day) {
  case 1:
    console.log("Go to school");
    console.log("Learn JavaScript");
    break;
  case 2:
    console.log("prepare notes");
    break;
  case 3:
  case 4:
    console.log("do Practice");
    break;
  case 5:
    console.log("Give test");
    break;
  case 6:
  case 7:
    console.log("Enjoy");
    break;
  default:
    console.log("Not a valid day");
}

if (day == 1) {
  console.log("Go to school");
  console.log("Learn JavaScript");
} else if (day == 2) {
  console.log("prepare notes");
} else if (day == 3 && day == 4) {
  console.log("do Practice");
} else if (day == 5) {
  console.log("Give test");
} else if (day == 6 && day == 7) {
  console.log("Enjoy");
} else {
  console.log("Not a valid day");
}


//* Statements and Expressions

//* Expressions (word)
3 + 4; // 7
1991;
true && false && !false; // false

//* Statements (line made with words)
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Rahul";
console.log(
  `I'm ${2024 - 1991} years old ${me}. and ${true && false && !false}`
);

//* Ternary Operator

const age = 16;

if (age >= 18) {
  console.log("I am an adult");
} else {
  console.log("I am minor");
}

age >= 18 ? console.log("I am an adult") : console.log("I am minor");

// condition ? if true : if false

const drive = age >= 18 ? "can drive" : "can not drive";
console.log(drive);

const meAge = 16;
const me = "Rahul";

console.log(
  `I'm ${2024 - 1991} years old ${me}. and I ${
    meAge >= 18 ? "can" : "can not"
  } drive a car.`
);

/* 

//* Coding Challenge #4

Rahul wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/ else statement (If it's easier for you, you can start with an if/ else statement, and then try to convert it to a ternary operator!)

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total is 316.25.

TEST DATA:
value 316.25, 275, 40 and 430

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total is ${bill + tip}.`
);

*/
