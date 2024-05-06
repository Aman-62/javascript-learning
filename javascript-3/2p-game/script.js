"use strict"

//* Selecting elements
const player0El = document.querySelector(".player-0");
const player1El = document.querySelector(".player-1");
const score0El = document.querySelector("#score-0");
const score1El = document.getElementById("score-1");
const current0El = document.querySelector("#current-0");
const current1El = document.querySelector("#current-1");

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".roll");

//* Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0; //* 0 => 1st player / 1 => 2nd player

//* Handle roll dice button
btnRoll.addEventListener("click", () => {

    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    // 2. Display dice roll
    diceEl.classList.remove("hidden");
    diceEl.src = `./images/dice-${dice}.svg`

    // 3. Check for rolled 1 
    if(dice !== 1) {
        currentScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = currentScore
        // current0El.textContent = currentScore;
    } else {
        // switch to next player
        document.querySelector(`#current-${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle("player-active");
        player1El.classList.toggle("player-active");
    }
})