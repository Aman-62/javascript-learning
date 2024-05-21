"use strict";

//* Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance-value");
const labelSumIn = document.querySelector(".summary-value-in");
const labelSumOut = document.querySelector(".summary-value-out");
const labelSumInterest = document.querySelector(".summary-value-interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login-btn");
const btnTransfer = document.querySelector(".form-btn-transfer");
const btnLoan = document.querySelector(".form-btn-loan");
const btnClose = document.querySelector(".form-btn-close");
const btnSort = document.querySelector(".btn-sort");

const inputLoginUsername = document.querySelector(".login-input-user");
const inputLoginPin = document.querySelector(".login-input-pin");
const inputTransferTo = document.querySelector(".form-input-to");
const inputTransferAmount = document.querySelector(".form-input-amount");
const inputLoanAmount = document.querySelector(".form-input-loan-amount");
const inputCloseUsername = document.querySelector(".form-input-user");
const inputClosePin = document.querySelector(".form-input-pin");

//* DATA
const account1 = {
    owner: "Rahul Kumar",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 100],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: "Vicky Singh",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Mohit Sharma",
    movements: [200, -200, 340, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Raj Verma",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const displayMovements = (movements) => {
    containerMovements.innerHTML = "";

    movements.forEach(function (el, i) {
        const type = el > 0 ? "deposit" : "withdraw";
        const html = `
<div class="movements-row">
    <div class="movements-type movements-type-${type}">${i + 1} ${type}</div>
    <div class="movements-date">3 days ago</div>
    <div class="movements-value">${Math.abs(el)}₹</div>
</div>`;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

displayMovements(account1.movements);

const user = "Rahul Kumar Singh";
const username = user
    .toLowerCase()
    .split(" ")
    .map((word) => word[0])
    .join("");

console.log(username);

/*


let arr = ["a", "b", "c", "d", "e"];

//* SLICE
console.log(arr.slice(2)); // c, d, e
console.log(arr.slice(2, 4)); // c, d
console.log(arr.slice(-2)); // d, e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // b, c
console.log(arr.slice());
console.log([...arr]);

//* SPLICE
// console.log(arr.splice(-1));
// console.log(arr);

// console.log(arr.splice(1, 2));
// console.log(arr);

let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//* CONTACT
const letters = arr.concat(arr2);
console.log(letters);

//* JOIN
console.log(letters.join(" - "));

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("---- forOf ----");
for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
    }
}

//* Array methods: forEach
console.log("---- forEach ----");
movements.forEach(function (el, i, arr) {
    if (el > 0) {
        console.log(`Movement ${i + 1}: You deposited ${el}`);
    } else {
        console.log(`Movement ${i + 1}: You withdrew ${Math.abs(el)}`);
    }
});

// 0: function(200, 0)
// 1: function(450, 1)
// 2: function(-400, 2)
// ...

//* MAP
const movementsUSD = [200, 450, -400, 3000, -650, -130, 70, 1300, 100];

const usdToInr = 83.29;

const movementsInr = movementsUSD.map((el, i, arr) => el * usdToInr);

console.log(movementsInr);

const movementsInr2 = [];

// for (let i = 0; i < movementsUSD.length; i++) {
//     movementsInr2.push(movementsUSD[i] * usdToInr);
// }
for (let movement of movementsUSD) {
    movementsInr2.push(movement * usdToInr);
}
console.log(movementsInr2);

*/
