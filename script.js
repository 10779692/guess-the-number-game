'use strict';
// .textContent is used to manipulate text from HTML fields
// .value field is used to manipulate input fields that have some sort of value

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number value defined!';
  }
});
