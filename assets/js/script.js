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
    console.log(randomChoice, playerChoice)
    computerChoice.innerHTML = randomChoice;
    return randomChoice
}

function displayScoreResults(winner) {
    let playerScoreResults = document.getElementById("playerScore");
    let computerScoreResults = document.getElementById("computerScore");
    if (winner = "player") {
        playerScoreResults.innerHTML = playerScore++;
    } else {
        computerScoreResults.innerHTML = computerScore++;
    }
    console.log("displayScoreResults", winner)
}

//Function checks whether player or computer will win

function returnResult(playerChoice, computerHTML) {
    (computerHTML == "rock")
    if (playerChoice == "paper") {
        returnResult.innerHTML = "You Win! Let's go Again"
        winner = "player";
    } else if (playerChoice == "rock") {
        returnResult = "It's a draw, Let's Try Again!"
    } else if (playerChoice == "scissors") {
        returnResult.innerHTML = "You Lost! Let's Try Again!"
        winner = "computer";
    }
    (computerHTML == "paper")
    if (playerChoice == "rock") {
        returnResult.innerHTML = "You Lost! Let's Try Again!"
        winner = "computer";
    } else if (playerChoice == "paper") {
        returnResult = "It's a draw, Let's Try Again!"
    } else if (playerChoice == "scissors") {
        returnResult.innerHTML = "You Win! Let's go Again"
        winner = "player";
    }
        (computerHTML == "scissors")
    if (playerChoice == "rock") {
        returnResult.innerHTML = "You Win! Let's go Again"
        winner = "player";
    } else if (playerChoice == "paper") {
        returnResult = "You Lost! Let's Try Again!"
        winner = "computer";
    } else if (playerChoice == "scissors") {
        returnResult.innerHTML = "It's a draw, Let's Try Again!"
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
    returnResult();
})


rock.addEventListener("click", function () {
    let playerHTML = document.getElementById("playerChoice");
    playerHTML.innerHTML = "You chose Rock!"
    playerChoice = "rock"

    let computerHTML = document.getElementById("computerChoice");
    computerHTML.innerHTML = "Computer chose Rock!"
    computerHTML = "rock"

    createComSelection();
    returnResult();
})

paper.addEventListener("click", function() {
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
function gameReset() {
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    returnResult.innerHTML = "Game Restarted";
    document.getElementById("gameReset");

console.log("gameReset");
}

gameResetButton.addEventListener("click", function() {
    let gameReset = document.getElementById("gameReset");
    gameReset.innerHTML = "Game Reset"

    gameReset();
});

document.getElementById("gameReset").addEventListener("click", function() {
    document.getElementById("gameResetContainer").classList.add("hide");
gameReset();
 });

