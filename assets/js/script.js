const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choicebutton = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let winner;

// function creates computer random selection
function createComSelection() {
    let randomChoice = choicebutton[Math.floor(Math.random() * 3)]
    computerChoice.innerHTML = randomChoice;    
    console.log(randomChoice, playerChoice)
    return randomChoice
}

function displayScoreResults(winner) {
    let playerScoreResults = document.getElementById("playerScore");
    let computerScoreResults = document.getElementById("computerScore");
    if (winner = "player") {
        playerScoreResults.innerHTML = playerScore ++;
    } else {
        computerScoreResults.innerHTML = computerScore ++;
    }
    console.log("displayScoreResults", winner)
}

//Function checks whether player or computer will win

function returnResult(playerChoice, computerHTML) {
   computerHTML =  createComSelection();
    if (computerHTML == "rock"){
        if (playerChoice == "paper") {
        result.innerHTML = "You Win! Let's go Again"
        winner = "player";
    } else if (playerChoice == "rock") {
        result = "It's a draw, Let's Try Again!"
        winner = "draw";
    } else if (playerChoice == "scissors") {
        returnResult.innerHTML = "You Lost! Let's Try Again!"
        winner = "computer";
    }}

    else
    if (computerHTML == "paper"){
        if (playerChoice == "rock") {
        result.innerHTML = "You Lost! Let's Try Again!"
        winner = "computer";
    } else if (playerChoice == "paper") {
        result = "It's a draw, Let's Try Again!"
        winner = "draw";
    } else if (playerChoice == "scissors") {
        result.innerHTML = "You Win! Let's go Again"
        winner = "player";}    
    } else
        if(computerHTML == "scissors"){
            if (playerChoice == "rock") {
        result.innerHTML = "You Win! Let's go Again"
        winner = "player";
    } else if (playerChoice == "paper") {
        result = "You Lost! Let's Try Again!"
        winner = "computer";
    } else if (playerChoice == "scissors") {
        result.innerHTML = "It's a draw, Let's Try Again!"
        winner = "draw";
        }
}
        displayScoreResults(winner);
    console.log(playerScore, computerScore, winner)
}

/*Event listeners for user choice input
* createComSelection and returnResult is called here
*/
scissors.addEventListener("click", function () {
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose scissors!"
    playerChoice = "scissors"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innHTML = "Computer chose Scissors"
    createComSelection();
    returnResult(playerChoice);
})

rock.addEventListener("click", function () {
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose Rock!"
    playerChoice = "rock"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innerHTML = "Computer chose Rock!"
    computerHTML = "rock"

    createComSelection();
    returnResult(playerChoice);
})

paper.addEventListener("click", function() {
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose Paper!"
    playerChoice = "paper"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innerHTML = "Computer chose paper!"
    computerHTML = "paper"

    createComSelection();
    returnResult(playerChoice);
})

//Game reset button input to restart game

const resetBtn = document.querySelector('.reset-button')

resetBtn.addEventListener('click', (e))
gameEnd();
gameReset();

function gameReset() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    returnResult.innerHTML = "Game Restarted";

console.log("gameReset");
}

 function gameEnd () {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        result.innerHTML = winner;
    }

}
