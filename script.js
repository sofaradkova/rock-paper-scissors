const choices = ['Rock', 'Paper', 'Scissors'];
let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()===computerSelection.toLowerCase()) {
        return "Tie!";
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Paper' ||
    playerSelection.toLowerCase() === 'paper' && computerSelection === 'Scissors' ||
    playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Rock') {
        return "You Lose! " + computerSelection + " beats " + playerSelection.toLowerCase();
    } else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
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
    }
    console.log(results(playerScore, computerScore));
}

function results(player, computer) {
    if (player > computer) {
        return "You won with the score of " + player + " against " + computer;
    } else if (player < computer) {
        return "You lost with the score of " + player + " against " + computer;
    } else {
        return "It's a tie with the score of " + player + " against " + computer;
    }
}