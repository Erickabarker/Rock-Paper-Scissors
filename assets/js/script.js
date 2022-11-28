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

 returnResult(playerSelection);
}

function play(computerSelection){
    let computerChoice = document.getElementById("computerChoice");
    computerChoice.innerHTML = `The Computer Selected: $(computerChoice)`;
   
    returnResult(computerSelection);
   }

function returnResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
    result.innerHTML = "It's a Draw";
   } else if (playerChoice === "rock", computerChoice === "scissors") {
    result.innerHTML = "You Win!!"
   }else if (playerChoice === "rock", computerChoice === "paper"){
    result.innerHTML = "You Lost!"
   } else if (playerChoice === "paper", computerChoice === "scissors"){
    result.innerHTML = "You Lost!"   
   } else if (playerChoice === "paper", computerChoice === "rock"){
    result.innerHTML = "You Lost!"
   } else if (playerChoice === "scissors", computerChoice === "rock"){
   result.innerHTML = "You Lost!"
   } else if (playerChoice === "scissors", computerChoice === "paper"){
    result.innerHTML = "You Win!"
   }

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