const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let computerChoice = document.getElementById("computer-choice");


function createComDecision(){
    const choiceOptions = ['rock', 'paper', 'scissors'];
    const randomChoice = (Math.random()*3);
    return choiceOptions[randomChoice];
}

computerChoice = `Computers Choice ${createComDecision()}`;

scissors.addEventListener("click", function (){
    var userChoice = document.getElementById("userChoice");
    userChoice.innerHTML = "You chose scissors!"

})

rock.addEventListener("click", function (){
    var userChoice = document.getElementById("userChoice");
    userChoice.innerHTML = "You chose Rock!"

})

paper.addEventListener("click", function (){
    var userChoice = document.getElementById("userChoice");
    userChoice.innerHTML = "You chose Paper!"

})