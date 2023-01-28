'use strict';
// .textContent is used to manipulate text from HTML fields
// .value field is used to manipulate input fields that have some sort of value
// Math.trunc removes the decimals and brings the number to a simple number

// This takes the Math.random function, removes the decimals using Math.trunc, and gives it a value somewhere between 0 and 20 with the addition of +1 otherwise it will always be under 1, which is why we add the +1.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

// Click functionality
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number value defined!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      "You've guessed correctly!";
  }
});
