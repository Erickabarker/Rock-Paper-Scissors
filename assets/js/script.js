const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicebutton = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// function creates computer random selection
function createComSelection(){
    let randomChoice = choicebutton[Math.floor(Math.random() * 3)]
    console.log(randomChoice, playerChoice)
    computerChoice.innerHTML = randomChoice;
    console.log("createComSelection:", randomChoice, computerChoice)
    return randomChoice
}

function displayScoreResults(){
   let playerScoreResults = document.getElementById("playerScore");
    playerScoreResults.innerHTML = playerScore++;
    let computerScoreResults = document.getElementById("computerScore");
    computerScoreResults.innerHTML = computerScore++;
    console.log("displayScoreResults");
}
//Function checks whether player or computer will win

function returnResult(playerChoice, computerHTML) {
    (computerHTML == "rock")
if (playerChoice == "paper"){
returnResult.innerHTML = "You Win! Let's go Again"
} else if (playerChoice == "rock"){
    returnResult = "It's a draw, Let's Try Again!"
} else if (playerChoice == "scissors"){
    returnResult.innerHTML = "You Lost! Let's Try Again!"
}
    (computerHTML == "paper")
if (playerChoice == "rock"){
returnResult.innerHTML = "You Lost! Let's Try Again!"
} else if (playerChoice == "paper"){
    returnResult = "It's a draw, Let's Try Again!"
} else if (playerChoice == "scissors"){
    returnResult.innerHTML = "You Win! Let's go Again"
}
    (computerHTML == "scissors")
if (playerChoice == "rock"){
returnResult.innerHTML = "You Win! Let's go Again"
} else if (playerChoice == "paper"){
    returnResult = "You Lost! Let's Try Again!"
} else if (playerChoice == "scissors"){
    returnResult.innerHTML = "It's a draw, Let's Try Again!"
}

displayScoreResults();
console.log(playerScore, computerScore);
}

/*Event listeners for user choice input
* createComSelection and returnResult is called here
*/
scissors.addEventListener("click", function (){
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose scissors!"
    playerChoice = "scissors"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innHTML = "Computer chose Scissors"
    createComSelection();
    returnResult();
})


rock.addEventListener("click", function (){
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose Rock!"
    playerChoice = "rock"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innerHTML = "Computer chose Rock!"
    computerHTML = "rock"

    createComSelection();
    returnResult();
})

paper.addEventListener("click", function (){
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose Paper!"
    playerChoice = "paper"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innerHTML = "Computer chose paper!"
    computerHTML = "paper"

    createComSelection();
    returnResult();
})

//Game reset button input to restart game
document.getElementsByClassName("gameResetButton").reset; {
    gameReset();
 };

gameReset.addEventListener("button", function gameReset() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    returnResult.innerHTML = ("");
    document.getElementsByClassName("gameResetButton");
})