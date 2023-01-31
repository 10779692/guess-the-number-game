"use strict";

// This takes the Math.random function, removes the decimals using Math.trunc, and gives it a value somewhere between 0 and 20 with the addition of +1 otherwise it will always be under 1, which is why we add the +1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Functions for reusable querySelectors
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

// Click functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No number value defined!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("You've guessed correctly!");

    // Displays secret number when player wins
    displayNumber(secretNumber);

    // Changes width of displayed number when guessed correctly
    document.querySelector(".number").style.width = "30rem";

    // Changes background color when number is guess correctly
    document.querySelector("body").style.backgroundColor = "#60b347";

    // High score logic
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;

    // When guess is wrong
  } else if (guess !== secretNumber) {
    // This ternary operator says that if the guess is too high, display message, else display other message saying guess is too low
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber
          ? "Your number is too high. Guess again!"
          : "Your number is too low. Guess again!";

      // Decreasing the score when the guess is too high or too low
      score = score - 1;

      // This updates the score via the .querySelector method + .textContent setting it equal to score
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Reset button logic
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayNumber("?");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
