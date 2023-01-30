'use strict';
// .textContent is used to manipulate text from HTML fields
// .value field is used to manipulate input fields that have some sort of value
// Math.trunc removes the decimals and brings the number to a simple number

// This takes the Math.random function, removes the decimals using Math.trunc, and gives it a value somewhere between 0 and 20 with the addition of +1 otherwise it will always be under 1, which is why we add the +1
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Click functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number value defined!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      "You've guessed correctly!";

    // Displays secret number when player wins
    document.querySelector('.number').textContent = secretNumber;

    // Changes width of displayed number when guessed correctly
    document.querySelector('.number').style.width = '30rem';

    // Changes background color when number is guess correctly
    document.querySelector('body').style.backgroundColor = '#60b347';

    // When guess it too high
  } else if (guess > secretNumber) {
    // If score is greater than 1, then implement the following below up until the next else statement
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too high. Guess again!';

      // Decreasing the score when the guess is too high
      score = score - 1;

      // This updates the score via the .querySelector method + .textContent setting it equal to score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your number is too low. Guess again!';

      // Decreasing the score when the guess is too high
      score = score - 1;

      // This updates the score via the .querySelector method + .textContent setting it equal to score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset button logic
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
