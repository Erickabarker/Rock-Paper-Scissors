const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicebutton = [rock, paper, scissors];


let computerChoice = document.getElementById("computerChoice");
let option = document.getElementById("choicebutton")


function createComDecision(){
    const selection = ['rock', 'paper', 'scissors'];
    const randomChoice = (Math.random()*3);
    return selection[randomChoice];
}

computerChoice = `Computers Choice ${createComDecision()}`;

function play(playerSelection){
 let playerChoice = document.getElementById("playerChoice");
 playerChoice.innerHTML = `You Selected: $(playerChoice)`;

 return playerSelection
}


scissors.addEventListener("click", function (){
    var playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose scissors!"

})

rock.addEventListener("click", function (){
    var playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose Rock!"

})

paper.addEventListener("click", function (){
    var playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose Paper!"

})