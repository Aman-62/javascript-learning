"use strict";

// Document Object Model: Structures Representation of HTML Document. Allows JavaScript to access html elements and style to manipulate(change text, html attributes, and even css styles) them.

/*
console.log(document.querySelector(".second-para"));
console.log(document.querySelector(".second-para").textContent);
document.querySelector(".second-para").textContent = "Hello World";

document.querySelector(".input").value = 10;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let chances = 20;
let highScore = 0;

const displayMessage = function (msg) {
    document.querySelector(".status").textContent = msg;
};

document.querySelector(".check").addEventListener("click", () => {
    const guess = Number(document.querySelector(".input").value);

    if (!guess) {
        displayMessage("🔴 No number!");
    } else if (guess === secretNumber) {
        displayMessage("🟢 Correct number!");
        document.querySelector(".secretNumber").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";

        if (chances > highScore) {
            highScore = chances;
            document.querySelector(".score").textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (chances > 1) {
            displayMessage(
                guess > secretNumber ? "🟠 Too high!" : "🟠 Too low!"
            );
            chances--;
            document.querySelector(".chances").textContent = chances;
        } else {
            displayMessage("🔴 Game over!");
            chances = 0;
            document.querySelector(".chances").textContent = chances;
        }
    }
});

document.querySelector(".restart").addEventListener("click", () => {
    chances = 20;
    document.querySelector(".chances").textContent = chances;

    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".secretNumber").textContent = "?";

    displayMessage("Game Status...");
    document.querySelector(".input").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
});

/*

Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!

1. Select the element with the 'restart' class and attach a click event handler
2. In the handlerFunction, restore initial values of the chances and number variable
3. Restore the initial condition of the message, number, chances and guess input field
4. Also restore the original background color (#222)

Events: there are multiple events in a website
> When a user clicks the mouse
> When a web page has loaded
> When an image has been loaded
> When the mouse moves over an element
> When an input field is changed
> When an HTML form is submitted
> When a user strokes a key

function hello() {}
element.addEventListener("click", hello)
element.addEventListener("click", function hello2() {})
element.addEventListener("click", function() {})
element.addEventListener("click", () => {})

*/
