const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicebutton = [rock, paper, scissors];
const playerScore = 0;
const computerScore = 0; 

let computerChoice = document.getElementById("computerChoice");
let option = document.getElementById("choicebutton")


function createComDecision(){
    const randomChoice = Math.Floor(Math.random() * 3);
    return choicebutton[randomChoice];
}

computerChoice = `Computers Choice ${createComDecision()}`;

function play(playerSelection){
 let playerChoice = document.getElementById("playerChoice");
 playerChoice.innerHTML = `You Selected: $(playerChoice)`;

 returnResult(playerSelection);
}

const displayScoreResults = () => {
    let playerScoreResults = document.getElementById("playerScore");
    playerScoreResults.innerHTML = playerScore;
    let computerScoreResults = document.getElementById("computerScore");
    computerScoreResults.innerHTML = computerScore;
}

function play(computerSelection){
    let computerChoice = document.getElementById("computerChoice");
    computerChoice.innerHTML = `The Computer Selected: $(computerChoice)`;
   
    returnResult(computerSelection);
   }

function returnResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice){
    result.innerHTML = "It's a Draw! Let's Try Again";
    displayScoreResults()
   } else if (playerChoice === "rock", computerChoice === "scissors") {
    result.innerHTML = "You Win!!"
    playerScore++;
    displayScoreResults()
   }else if (playerChoice === "rock", computerChoice === "paper"){
    result.innerHTML = "You Lost! Let's Try Again"
    computerScore++;
    displayScoreResults()
   } else if (playerChoice === "paper", computerChoice === "scissors"){
    result.innerHTML = "You Lost! Let's Try Again"  
    computerScore++; 
    displayScoreResults()
   } else if (playerChoice === "paper", computerChoice === "rock"){
    result.innerHTML = "You Win!!"
    playerScore++;
    displayScoreResults()
   } else if (playerChoice === "scissors", computerChoice === "rock"){
   result.innerHTML = "You Lost! Let's Try Again"
   computerScore++;
   displayScoreResults()
   } else if (playerChoice === "scissors", computerChoice === "paper"){
    result.innerHTML = "You Win!!"
    playerScore++;
    displayScoreResults()
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