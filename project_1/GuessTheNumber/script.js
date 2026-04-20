let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessFiled");
const guessSlot = document.querySelector(".gussess");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHI");

const startOver = document.querySelector(".resultparas");
const resetBtn = document.querySelector("#resetBtn");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// submit
submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (!playGame) return;

    const guess = parseInt(userInput.value);
    validateGuess(guess);
});

// validate
function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage("⚠️ Enter a valid number");
    } else if (guess < 1) {
        displayMessage("⚠️ Number must be > 0");
    } else if (guess > 100) {
        displayMessage("⚠️ Number must be < 100");
    } else {
        prevGuess.push(guess);

        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`💀 Game Over! Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// check
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("🎉 Congratulations! You Won 🔥");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("📉 Too low");
    } else {
        displayMessage("📈 Too high");
    }
}

// display guess
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess + 1}`;
}

// message
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// end game
function endGame() {
    playGame = false;
    userInput.setAttribute("disabled", "");
}

// 🔄 MAIN RESET FUNCTION (IMPORTANT)
function initGame() {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    playGame = true;

    guessSlot.innerHTML = '';
    remaining.innerHTML = '10';
    lowOrHi.innerHTML = '';

    userInput.value = '';
    userInput.removeAttribute("disabled");
}

// reset button
resetBtn.addEventListener("click", initGame);