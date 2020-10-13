"use strict";

const userNum = document.querySelector(".js-num");
console.log(userNum);
const clue = document.querySelector(".js-clue");
console.log(clue);
const count = document.querySelector(".js-count");
console.log(count);
const btn = document.querySelector(".js-btn");


const getRandom = function () {
    const random = parseInt(Math.random() * 100);
    return random;
};

function updateClick() {
    const random = getRandom();
    console.log(random);
    const num = userNum.value;
    console.log(num);
    
    if (random > num) {
        console.log("mayor");
    }
    if (random < num) {
        console.log("menor");
    }
    if (random === num) {
        console.log("igual");
    }
}

btn.addEventListener("click", updateClick);
