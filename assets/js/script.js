const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicebutton = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function createComSelection(){
    let randomChoice = choicebutton[Math.floor(Math.random() * 3)]
    console.log(randomChoice, playerChoice)
    computerChoice.innerHTML = randomChoice;
    console.log("createComSelection:", randomChoice, computerChoice)
    return randomChoice
}

function play(playerChoice) {
    let computerChoice = choicebutton[""];
    returnResult(playerChoice, computerChoice);
}

let displayScoreResults = () => {
    let playerScoreResults = document.getElementById("playerScore");
    playerScoreResults.innerHTML = playerScore++;
    let computerScoreResults = document.getElementById("computerScore");
    computerScoreResults.innerHTML = computerScore++;
}



function returnResult(playerChoice, computerChoice) {
    console.log("returnResult:", playerChoice, computerChoice)
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
    let playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose scissors!"
    createComSelection();
    returnResult(playerChoice, computerChoice);
})

rock.addEventListener("click", function (){
    let playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose Rock!"
    createComSelection();
    returnResult();
})

paper.addEventListener("click", function (){
    let playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose Paper!"
    createComSelection();
    returnResult();
})

document.getElementsByClassName("Reset").reset; {
    gameReset();
 };

 function gameReset() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    result.innerHTML = "Game Reset!";
    document.getElementsByClassName("Reset");
}