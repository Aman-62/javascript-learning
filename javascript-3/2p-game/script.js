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
const btnHold = document.querySelector(".hold");
const btnNew = document.querySelector(".restart");

//* Starting condition

let totalScore, currentScore, activePlayer, isPlaying;

const init = function () {
    totalScore = [0, 0];
    currentScore = 0;
    activePlayer = 0; //* 0 => 1st player / 1 => 2nd player
    isPlaying = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0; 
    current1El.textContent = 0;

    player0El.classList.remove("player-winner");
    player1El.classList.remove("player-winner");
    player0El.classList.add("player-active");
    player1El.classList.remove("player-active");

    diceEl.classList.add("hidden");
}
init();
const switchPlayer = function () {
    document.querySelector(`#current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player-active");
    player1El.classList.toggle("player-active");
}

//* Handle roll dice button
btnRoll.addEventListener("click", () => {
    if (isPlaying) {
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
            switchPlayer();
        }
    }

})

//* Handle hold button
btnHold.addEventListener("click", () => {
    if (isPlaying) {
        // 1. Add current score to active player's total score
        totalScore[activePlayer] += currentScore;
        document.querySelector(`#score-${activePlayer}`).textContent = totalScore[activePlayer];
        
        // 2. Check if player's total score is >= 100
        if(totalScore[activePlayer] >= 20) {
            // finish the game
            isPlaying = false;
            document.querySelector(`.player-${activePlayer}`).classList.add("player-winner")
            document.querySelector(`.player-${activePlayer}`).classList.remove("player-active")
        } else {
            // switch the player
            switchPlayer();
        }
    }
})

//* New Game button
btnNew.addEventListener("click", init);