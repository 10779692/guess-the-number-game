'use strict';
// .textContent is used to manipulate text from HTML fields
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

// .value field is used to manipulate input fields that have some sort of value
document.querySelector('.guess').value = 23;
