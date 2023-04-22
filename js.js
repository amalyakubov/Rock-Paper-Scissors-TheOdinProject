let playerSelection = '';
let results = document.querySelector("#results-child");

let score =  document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = 0;
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1) {
        return 'Paper';
    } else if (choice === 2) {
        return 'Scissors';
    }
 }

function playRound() {
    let computerSelection =  getComputerChoice();
    let computerSelectionLowerCase = computerSelection.toLowerCase();
    let index = tieLoseWinIndex(computerSelectionLowerCase, playerSelection);
    if (playerScore === 5 || computerScore === 5) {
        if (computerScore === 5) {
            results.textContent = `Computer has won ${computerScore} to ${playerScore}`;
        } else if (playerScore === 5) {
            results.textContent = `Player has won ${playerScore} to ${computerScore}`;
        }
    } else if (index === 0) {
        results.textContent = `Tie!`;
    } else if (index === 1) {
        results.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
    } else {
        results.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
    }
    score.textContent = `${playerScore} ${computerScore}`;
}

function tieLoseWinIndex (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 0;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper') {
        return -1;
    } else {
        return 1;
    } 
}

const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection =  document.getElementById(button.id).textContent.toLowerCase();
        console.log(playerSelection);
        playRound();
    })
})

