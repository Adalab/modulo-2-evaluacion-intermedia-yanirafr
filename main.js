"use strict";

const userNum = document.querySelector(".js-num");
console.log(userNum);
const clue = document.querySelector(".js-clue");
console.log(clue);
const count = document.querySelector(".js-count");
console.log(count);
const btn = document.querySelector(".js-btn");

let trys = 0;


const getRandom = function () {
    const random = parseInt(Math.random() * 100);
    return random;
};

function guess() {
    const random = getRandom();
    console.log(random);
    const num = userNum.value;
    console.log(num);

    trys += 1;
    count.innerHTML = `Número de intentos = ${trys}`;

    console.log(trys);
    
    if (random > num) {
        console.log("mayor");
        clue.innerHTML = "Demasiado bajo."
    }
    if (random < num) {
        console.log("menor");
        clue.innerHTML = "Demasiado alto."
    }
    if (random === num) {
        console.log("igual");
        clue.innerHTML = "Has ganado campeona!!!"
    }

}

//console.log(guess());

btn.addEventListener("click", guess);
