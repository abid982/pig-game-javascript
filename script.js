'use strict';


// When page refresh or first time website open
// DOM Elements
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const diceElement = document.querySelector('.dice');

console.log(newButton);
console.log(rollButton);
console.log(holdButton);

diceElement.style.display = 'none';


// 1 and 20
// Math.trunc(Math.random() * 20) + 1

let sum = 0;


rollButton.addEventListener('click', function () {
    // debugger;
    console.log('Roll button was clicked!');

    // Generate random number between 1 and 6
    // Math.trunc(Math.random() * 6 ) + 1 --> 1 and 6
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(randomNumber);

    // dice-1.png
    // File name generate
    const dice = `dice-${randomNumber}.png`;
    console.log(dice);

    // Change image src
    document.querySelector('.dice').src = dice;
    diceElement.style.display = 'block';

    console.log(typeof randomNumber);

    // Check is random number 1
    if (randomNumber === 1) {
        // Switch next player
    } else {
        sum = sum + randomNumber;
        console.log(sum);

        document.querySelector('#current--0').textContent = sum;
    }
});
