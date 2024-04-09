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

*/

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
