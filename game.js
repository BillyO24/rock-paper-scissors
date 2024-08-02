//Helper function to keep user informed of score as game progresses and when it ends
function printWinner(humanScore, computerScore, humanChoice, compChoice, roundWinner, result) {
    //Game not over. Show choices, round winner, and running score.
    if(humanScore < 5 && computerScore < 5) {
        result.innerText = `You chose: ${humanChoice}. Computer chose: ${compChoice}.
                            ${roundWinner} wins the round!
                            ----Score----
                            Player: ${humanScore} 
                            Computer: ${computerScore}`;
    }
    //Game over, print choices of last round, game winner, and final score.
    else {
        let gameWinner = '';
        if(humanScore > computerScore) {
            gameWinner = 'Player';
        }
        else {
            gameWinner = 'Computer';
        }
        result.innerText = `You chose: ${humanChoice}. Computer chose: ${compChoice}.
                            ${gameWinner} wins the game!
                            ----Score----
                            Player: ${humanScore} 
                            Computer: ${computerScore}`;
        
    }
}

function printDraw(result, humanScore, computerScore) {
    result.innerText = `Draw! Try again.
                        ----Score----
                        Player: ${humanScore} 
                        Computer: ${computerScore}`;
}

//Get Computer Choice:
//Randomly returns 'rock', 'paper', or 'scissors'
//Use Math.random & multiply by 100 to get "choice"
//Determine 'which' choice by segmenting 100 by 3
//0 - 32: Rock
//33 - 65: Scissors
//66 - 99: Paper
//return choice

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    let choice;
    if (num >= 0 && num <= 32) {
        choice = 'rock';
    } else if(num >= 33 && num <= 65) {
        choice = 'paper';
    } else if (num >= 66 && num <= 99) {
        choice = 'scissors';
    }

    return choice;
}

function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result = document.querySelector(".result");

    if(humanChoice === compChoice) {
        printDraw(result, humanScore, computerScore);
    }
    else if(humanChoice == "rock" && compChoice == "scissors") {
        humanScore++;
        printWinner(humanScore, computerScore, humanChoice, compChoice, 'Player', result);
    }
    else if(humanChoice == "rock" && compChoice == "paper") {
        computerScore++;
        printWinner(humanScore, computerScore, humanChoice, compChoice, 'Computer', result);
    }
    else if(humanChoice == "paper" && compChoice == "rock") {
        humanScore++;
        printWinner(humanScore, computerScore, humanChoice, compChoice, 'Player', result);
    }
    else if(humanChoice == "paper" && compChoice == "scissors") {
        computerScore++;
        printWinner(humanScore, computerScore, humanChoice, compChoice, 'Computer', result);
    }
    else if(humanChoice == "scissors" && compChoice == "paper") {
        humanScore++;
        printWinner(humanScore, computerScore, humanChoice, compChoice, 'Player', result);
    }
    else if(humanChoice == "scissors" && compChoice == "rock") {
        computerScore++;
        printWinner(humanScore, computerScore, humanChoice, compChoice, 'Computer', result);
    }
}

//Global Variables
//Track human score
let humanScore = 0;
//Track computer score
let computerScore = 0;

let playerChoice = document.querySelector(".player-choice");
let reset = document.querySelector("#reset");

playerChoice.addEventListener("click", function (event) {
    let choice = event.target;
    
    switch(choice.id) {
        case "rock":
            if(humanScore >= 5 || computerScore >= 5) {
                break;
            }
            playRound("rock", getComputerChoice(), playerChoice);
            break;
        case "paper":
            if(humanScore >= 5 || computerScore >= 5) {
                break;
            }
            playRound("paper", getComputerChoice(), playerChoice);
            break;
        case "scissors":
            if(humanScore >= 5 || computerScore >= 5) {
                break;
            }
            playRound("scissors", getComputerChoice(), playerChoice);
            break;
    }
});

reset.addEventListener("click", function () {
    let result = document.querySelector(".result");
    result.innerText = '';
    humanScore = 0;
    computerScore = 0;
});