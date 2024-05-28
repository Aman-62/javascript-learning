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
    interestRate: 7,
    pin: 1111,
};

const account2 = {
    owner: "Vicky Singh",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 6,
    pin: 2222,
};

const account3 = {
    owner: "Mohit Sharma",
    movements: [200, -200, 340, -20, 50, 400, -460],
    interestRate: 6.7,
    pin: 3333,
};

const account4 = {
    owner: "Raj Verma",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 8,
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
const calcDisplayBalance = (acc) => {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}₹`;
};
const calcDisplaySummary = (acc) => {
    const incomes = acc.movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);

    const out = acc.movements
        .filter((mov) => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    const interest = acc.movements
        .filter((mov) => mov > 0)
        .map((deposit) => (deposit * acc.interestRate) / 100)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumIn.textContent = `${incomes}₹`;
    labelSumOut.textContent = `${out}₹`;
    labelSumInterest.textContent = `${interest}₹`;
};
const createUsernames = (accs) => {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map((name) => name[0])
            .join("");
    });
};
createUsernames(accounts);
const updateUI = function (acc) {
    // display movements
    displayMovements(acc.movements);
    // display balance
    calcDisplayBalance(acc);
    // display summary
    calcDisplaySummary(acc);
}

// Event handler
let currentAccount;

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();

    // console.log(inputLoginUsername.value);
    // console.log(inputLoginPin.value);

    currentAccount = accounts.find((acc) => {
        return acc.username === inputLoginUsername.value;
    });
    if (currentAccount.pin === Number(inputLoginPin.value)) {
        // display UI and message
        labelWelcome.textContent = `Welcome back, ${
            currentAccount.owner.split(" ")[0]
        }`;
        containerApp.style.opacity = 100;

        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();
        inputCloseUsername.blur();

        updateUI(currentAccount);
    }
});
btnTransfer.addEventListener("click", function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find((acc) => acc.username === inputTransferTo.value);

    if (amount > 0 &&
        currentAccount.balance >= amount &&
        receiverAcc.username != currentAccount.username
    ) {
        // console.log("Transfer Valid");
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        inputTransferAmount.value = inputTransferTo.value = "";
        inputTransferTo.blur();
        inputTransferAmount.blur();
        
        updateUI(currentAccount);
    }


})
btnLoan.addEventListener("click", function(e) {
    e.preventDefault();
    const loanAmount = Number(inputLoanAmount.value)
    if ( loanAmount &&
        loanAmount > 0 &&
        loanAmount <= currentAccount.balance
    ) {
        currentAccount.movements.push(loanAmount);
        updateUI(currentAccount);
        inputLoanAmount.value = "";
        inputLoanAmount.blur();
    }
})
btnClose.addEventListener("click", function(e) {
    e.preventDefault();

    if (
        currentAccount.username === inputCloseUsername.value && 
        currentAccount.pin === Number(inputClosePin.value)
    ) {
        const index = accounts.findIndex((acc) => acc.username === currentAccount.username);

        accounts.splice(index, 1);
        // display UI and message
        labelWelcome.textContent = `Log in to get started`;
        containerApp.style.opacity = 0;
    }
    inputCloseUsername.value = inputClosePin.value = "";
    inputCloseUsername.blur();
    inputClosePin.blur();
})

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// [b, a, -400, 3000, -650, -130, 70, 1300]
// [200, b, a, 3000, -650, -130, 70, 1300]
// [200, 450, b, a, -650, -130, 70, 1300]
// ...
// [200, 450, -400, 3000, -650, -130, b, a]

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


//* FILTER

const deposit = movements.filter((el, i, arr) => el > 0);
// console.log(deposit);

const depositFor = [];

for (const mov of movements) if (mov > 0) depositFor.push(mov);

// console.log(depositFor);

//* REDUCE
const balance = movements.reduce(function (acc, el, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + el;
}, 0);

console.log(balance);

//* 1. Calculate the dog age human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog > 2 years old, humanAge = 16 + dogAge * 4.
//* 2. Exclude all dogs that are less than 18 human years old( which is same as keeping dogs that are at least 18 years old)
//* 3. Calculate the average human age of all adult dogs
//* 4. Run the function for both test dataset.

// TestData 1: [5, 2, 4, 1, 15, 8, 3]
// TestData 2: [16, 6, 10, 5, 6, 1, 7]

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map((age) => {
        return age <= 2 ? 2 * age : 16 + age * 4;
    });
    const adults = humanAges.filter((age) => age >= 18);
    console.log(humanAges);
    console.log(adults);

    // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
    const average = adults.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
    );

    // 10, 20, 25, 40, 5
    // 100 / 5 => 20
    // 10/5 + 20/5 + 25/5 + 40/5 + 5/5 => 2+4+5+8+1 => 20

    console.log(average);
    return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//* Method Chaining

const usdToInr = 83.29;

const totalDepositsInr = movements
    .filter((mov, i, arr) => mov > 0)
    .map((mov, i, arr) => {
        // console.log("Map: ", arr);
        return mov * usdToInr;
    })
    .reduce((acc, mov, i, arr) => acc + mov, 0);

console.log(totalDepositsInr);


//* FIND
const firstWithdrawal = movements.find((mov) => {
    return mov < 0;
});

console.log(firstWithdrawal);

const account = accounts.find((acc) => {
    return acc.owner === "Mohit Sharma";
});

console.log(account);


console.log(movements);
console.log(movements.includes(-300));
console.log(movements.includes(450));

//* SOME
const anyWithdrew = movements.some((mov) => mov < 0);
console.log(anyWithdrew);

//* EVERY
const allWithdrew = movements.every((mov) => mov < 0);
console.log(allWithdrew);

//* FLAT

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2, 3], [4, 5, 6]], 7, 8];
console.log(arrDeep.flat(2));


const overallBalance = accounts
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, mov) => acc+mov ,0);

console.log(overallBalance);

//* FLATMAP

const overallBalance2 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, mov) => acc+mov ,0);

console.log(overallBalance2);


*/

const owners = accounts.map((acc) => acc.owner)
console.log(owners);
console.log(owners.sort());

console.log(movements);

// return < 0 ===>> a, b
// return > 0 ===>> b, a
const movArr = movements.sort((a, b) => {
    if (b < a) {
        return 1;
    } else if (b > a) {
        return -1
    }
});

console.log(movArr);
console.log(movements);