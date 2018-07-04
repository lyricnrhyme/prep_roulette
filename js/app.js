/*From wikipedia https://en.wikipedia.org/wiki/Roulette
Roulette is a casino game named after the French word meaning little wheel. In the game, players may choose to place bets on either a single number, various groupings of numbers, the colors red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18).*/

//Objective
/*Create a web app that will generate a random number between 0 - 36.
For even numbers not including zero, give it a background color of black and a font color of white.
For odd numbers, give it a background color of red and a font color of white.
For the number 0, give it a background color of green and a font color of white.

A random number will be generated every 5 seconds.*/


// var numButton = document.createElement("button");
// numButton.id = "button";
// numButton.innerHTML = "Spin for Number";
// document.body.appendChild(numButton);
// numButton.addEventListener("click", giveNum);



var result = document.createElement("div");
result.id = "result";
document.body.appendChild(result);

var timer;
        function myFunction() {
            timer = setInterval(giveNum, 1000);
        }

function giveNum() {
    var randomNum = Math.floor(Math.random()*36);
    result.innerHTML = randomNum;
    if (randomNum > 0 && randomNum%2 === 0) {
        result.style.backgroundColor = "black";
        result.style.color = "white";
    } else if (randomNum%2 === 1) {
        result.style.backgroundColor = "red";
        result.style.color = "white";
    } else {
        result.style.backgroundColor = "green";
        result.style.color = "white";
    }
}

var startButton = document.createElement("div");
startButton.id = "startButton";
startButton.innerHTML = "START";
document.body.appendChild(startButton);
startButton.addEventListener("click", startTimer);

function startTimer() {
    myFunction();
}

var stopButton = document.createElement("div");
stopButton.id = "stopButton";
stopButton.innerHTML = "STOP";
document.body.appendChild(stopButton);
stopButton.addEventListener("click", stopTimer);

function stopTimer() {
    clearInterval(timer);
}


// Bonus
// 1) Add some additional styling to your application.
// 2) Create on and off buttons that will start and stop your application.


