"use strict";

//* Default Parameters

/*


const bookings = [];

const createBooking = function (
    trainNum,
    numPassengers = 1,
    price = 400 * numPassengers
) {
    // es5
    // numPassengers = numPassengers || 1;
    // price = price || 400;

    const booking = {
        trainNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking("A110", 10);
createBooking("C110");
createBooking("B110", 3, 1200);

console.log(bookings);


//* Difference between passing value / reference

let train = "A110";
let rahul = {
    name: "Rahul Sharma",
    age: 25,
};

const checkIn = function (trainNum, passenger) {
    trainNum = "Z110";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.age >= 18) {
        alert("Checked In");
    } else {
        alert("Sorry, you are not allowed to check in");
    }
};

checkIn(train, rahul);
console.log(train);
console.log(rahul);


*/

//* First-class Vs Higher-order functions
// First-class Function
//? JavaScript treats functions as first-class citizens
//? This means that functions are simply value
//? Functions are just another "type" of object

// store functions in variable or properties:
// const add = (a, b) => a + b;

// Higher-Order Function
//? A function that receives another function as an argument, that returns a new function, or both
//? This is only possible because of first-class functions

// function that receives another function
// btnClose.addEventListener('click', greet)

// function that returns new function
function count() {
    let counter = 0;
    return function () {
        counter++;
    };
}
