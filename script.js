'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess || guess < 1 || guess ==='') {
    document.querySelector('.message').textContent = "Pick above 0";
    } else if (secretNumber === guess && guess > 0 ){
        document.querySelector('h1').textContent = "Good choice!"
        document.querySelector('.message').textContent = "Correct number!";
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.backgroundColor = "white";
        document.querySelector('body').style.backgroundColor = "green";
        score += 5;
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.guess').value = '';
        } else if (secretNumber > guess) {
            if (score > 1) {
                document.querySelector('.message').textContent = "Too low...";
                score --;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You lost :(";
                document.querySelector('.score').textContent = "0";
            }   
        } else if (secretNumber < guess) {
            if(score > 1){
                document.querySelector('.message').textContent = "Too high";
                score --;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You lost :(";
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
    document.querySelector('.message').textContent = "Start guessing...";
 });