"use strict";

// Document Object Model: Structures Representation of HTML Document. Allows JavaScript to access html elements and style to manipulate(change text, html attributes, and even css styles) them.

/*
console.log(document.querySelector(".second-para"));
console.log(document.querySelector(".second-para").textContent);
document.querySelector(".second-para").textContent = "Hello World";

document.querySelector(".input").value = 10;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let chances = 20;
document.querySelector(".secretNumber").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".input").value);

  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".status").textContent = "🔴 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".status").textContent = "🟢 Correct number!";
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess > secretNumber) {
    if (chances > 1) {
      document.querySelector(".status").textContent = "🟠 Too high!";
      chances--;
      document.querySelector(".chances").textContent = chances;
    } else {
      chances = 0;
      document.querySelector(".chances").textContent = chances;
      document.querySelector(".status").textContent = "🔴 Game over!";
    }
  } else if (guess < secretNumber) {
    if (chances > 1) {
      document.querySelector(".status").textContent = "🟠 Too low!";
      chances--;
      document.querySelector(".chances").textContent = chances;
    } else {
      chances = 0;
      document.querySelector(".chances").textContent = chances;
      document.querySelector(".status").textContent = "🔴 Game over!";
    }
  }
});

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!

// 1. Select the element with the 'restart' class and attach a click event handler
// 2. In the handlerFunction, restore initial values of the score and number variable
// 3. Restore the initial condition of the message, number, score and guess input field
// 4. Also restore the original background color (#222)
