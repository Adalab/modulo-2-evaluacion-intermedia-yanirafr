"use strict";

const userNum = document.querySelector(".js-num");
console.log(userNum);
const clue = document.querySelector(".js-clue");
console.log(clue);
const count = document.querySelector(".js-count");
console.log(count);
const btn = document.querySelector(".js-btn");

let trys = 0;


function getRandomNumber() {
    return Math.ceil(Math.random() * 100);
}

const random = getRandomNumber();
console.log(`random:${random}`);

function guess() {

    const num = parseInt(userNum.value);
    console.log(num);

    trys += 1;
    count.innerHTML = `Número de intentos = ${trys}`;

    console.log(trys);
    
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

//console.log(guess());

btn.addEventListener("click", guess);
