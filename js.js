let computerSelection =  getComputerChoice();

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

 let computerSelectionLowerCase = computerSelection.toLowerCase();
 const playerSelection = 'rock'.toLowerCase();

function playRound() {
    function tieLoseWinIndex (computerSelection, playerSelection) {
        if (computerSelection === playerSelection) {
            return 0;
        } else if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper') {
            return -1;
        } else {
            return 1;
        } 
}
let index = tieLoseWinIndex(computerSelectionLowerCase, playerSelection);
    if (index === 0) {
        return 'Tie';
    } else if (index === 1) {
        return 'You won!';
    } else {
        return 'You lost.';
    }
}

console.log(playRound());