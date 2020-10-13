"use strict";

// HTML selectors

const userNum = document.querySelector(".js-num");
console.log(userNum);
const clue = document.querySelector(".js-clue");
console.log(clue);
const count = document.querySelector(".js-count");
console.log(count);
const btn = document.querySelector(".js-btn");

// Number of attempts

let attempt = 0;

// Random number function

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
console.log(`random: ${random}`);

// Number guess function

function guess() {

    // User number input
    const num = parseInt(userNum.value);
    console.log(num);

    // Attempt counter
    attempt += 1;
    count.innerHTML = `Número de intentos: ${attempt}`;

    console.log(attempt);
    
    // Clues
    if (random > num) {
        console.log("mayor");
        clue.innerHTML = "Demasiado bajo."
    }
    else if (random < num) {
        console.log("menor");
        clue.innerHTML = "Demasiado alto."
    }
    else if (random === num) {
        console.log("igual");
        clue.innerHTML = "Has ganado campeona!!!"
    }

}

// Button event listener

btn.addEventListener("click", guess);
