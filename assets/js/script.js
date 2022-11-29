const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicebutton = ["rock", "paper", "scissors"];
const playerScore = 0;
const computerScore = 0; 

function createComSelection(){
    const randomChoice = Math.Floor(Math.random() * choicebutton);
   returnResult(choicebutton(randomChoice));


}

function play(playerChoice) {
    let computerChoice = createComSelection();
    returnResult(playerChoice, computerChoice);

}

const displayScoreResults = () => {
    let playerScoreResults = document.getElementById("playerScore");
    playerScoreResults.innerHTML = playerScore;
    let computerScoreResults = document.getElementById("computerScore");
    computerScoreResults.innerHTML = computerScore;
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
    let playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose scissors!"

})

rock.addEventListener("click", function (){
    let playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose Rock!"
})

paper.addEventListener("click", function (){
    let playerChoice = document.getElementById("playerChoice");
    playerChoice.innerHTML = "You chose Paper!"
})

document.getElementById("resetGame").addEventListener("click", function() {
    gameReset();
 });

function gameReset() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    result.innerHTML = "Game Reset!";
    document.getElementById("resetGame");
}