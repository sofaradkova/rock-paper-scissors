const choices = ['rock', 'paper', 'scissors'];
let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        if (playerScore < 5 && computerScore < 5) {
            playRound(button.id)
        }
        else {
            results(playerScore, computerScore);
        }
    });
});

const body = document.querySelector('body');
const roundResult = document.createElement('div');
const gameResult = document.createElement('div');

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection===computerSelection) {
        roundResult.textContent = "Tie! Score:" + computerScore + " vs " + playerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        roundResult.textContent = "You Lose! " + computerSelection + " beats " + playerSelection + "Score:" + computerScore + " vs " + playerScore;
    } else {
        playerScore++;
        roundResult.textContent = "You Win! " + playerSelection + " beats " + computerSelection + "Score:" + computerScore + " vs " + playerScore;
    }
    body.appendChild(roundResult);
}

function results(player, computer) {
    if (player > computer) {
        gameResult.textContent = "You won with the score of " + player + " against " + computer;
    } else if (player < computer) {
        gameResult.textContent = "You lost with the score of " + player + " against " + computer;
    } else {
        gameResult.textContent = "It's a tie with the score of " + player + " against " + computer;
    }
    body.appendChild(gameResult);
}


/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
        const playerSelection = "scissors";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
            computerScore+=1;
        } else if (playerSelection.toLowerCase()!==computerSelection.toLowerCase()){
            playerScore+=1;
        }
    console.log(results(playerScore, computerScore));
}

*/