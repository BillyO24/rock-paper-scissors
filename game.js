

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

//Get Human Choice:
//Prompt user for their choice and return it

function getHumanChoice() {
    let choice = prompt('Enter choice (rock, paper, or scissors): ');
    return choice;
}




//Play entire game:
//5 Rounds
function playGame() {
    //Global Variables
    //Track human score
    let humanScore = 0;
    //Track computer score
    let computerScore = 0;

    //Helper function to keep user informed of score as game progresses and when it ends
    function printScore(humanScore, computerScore) {
        console.log('----Score----\nHuman: ' + humanScore + '\nComputer: ' + computerScore);
    }

    //Play a round of the game:
    //parameters are human and comp's choices
    //human's choice should be case-insensitive
    //compare choices and determine winner
    //log result and winner of round to console
    //increment score of winner accordingly
    function playRound(humanChoice, compChoice) {
        humanChoice = humanChoice.toLowerCase();

        console.log('Player choice: ' + humanChoice);
        console.log('Computer choice: ' + compChoice);

        if(humanChoice === compChoice) {
            console.log('Draw! Try again.');
        }
        else if(humanChoice == "rock" && compChoice == "scissors") {
            console.log('You win the round!');
            humanScore++;
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "rock" && compChoice == "paper") {
            console.log('You lose the round!');
            computerScore++;
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "paper" && compChoice == "rock") {
            console.log('You win the round!');
            humanScore++;
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "paper" && compChoice == "scissors") {
            console.log('You lose the round!');
            computerScore++;
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "scissors" && compChoice == "paper") {
            console.log('You win the round!');
            humanScore++;
            printScore(humanScore, computerScore);
        }
        else if(humanChoice == "scissors" && compChoice == "rock") {
            console.log('You lose the round!');
            computerScore++;
            printScore(humanScore, computerScore);
        }
    }

    //Play the game
    for(let i = 0; i < 5; i++) {
        let human = getHumanChoice();
        let comp = getComputerChoice();
        playRound(human, comp);
    }
    
    console.log('*****RESULT*****');
    printScore(humanScore, computerScore);
    if(humanScore > computerScore) {
        console.log('You win the game!');
    }
    else {
        console.log('Computer wins the game!');
    }
    
}