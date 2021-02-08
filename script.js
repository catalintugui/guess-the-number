'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
        if(!guess || guess < 1 || guess ==='') {
            displayMessage("Pick above 0");
        } else if (secretNumber === guess && guess > 0 ){
                document.querySelector('h1').textContent = "Good choice!"
                displayMessage("Correct number!");
                document.querySelector('.number').textContent = guess;
                document.querySelector('.number').style.backgroundColor = "white";
                document.querySelector('body').style.backgroundColor = "green";
                score += 5;
                secretNumber = Math.trunc(Math.random() * 20) + 1;
                document.querySelector('.guess').value = '';
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
        }
        } else if (secretNumber !== guess) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
                score --;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage("You lost :(");
                document.querySelector('.score').textContent = "0";
            }
        }
})


document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 10;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    displayMessage("Start guessing...");
 });