
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
    const playerSelection = 'rock'.toLowerCase();
    let index = tieLoseWinIndex(computerSelectionLowerCase, playerSelection);
    if (index === 0) {
        return 'Tie';
    } else if (index === 1) {
        return 'You won!';
    } else {
        return 'You lost.';
    }
}

function game() {
    let tally = [0, 0];
    let playerResult = 0;
    let computerResult = 0;
    for (let i = 0; i < 5; i++) {
        playRound(computerSelectionLowerCase = getComputerChoice(), prompt('Please enter your choice'));
        if (playRound() === 'You won!') {
            playerResult++;
            console.log(`You won!`);
        } else if (playRound() === 'You lost.') {
            computerResult++;
            console.log(`You lost.`);
        } else {
            console.log(`It's a tie.`);
        }
        tally[0] = playerResult;
        tally[1] = computerResult;
    }
    console.log(tally);
    if (tally[0] > tally[1]) {
        console.log(`You won! ${tally[0]} to ${tally[1]}`);
    } else if (tally[0] < tally[1]) {
        console.log(`You have lost. ${tally[0]} to ${tally[1]}`);
    } else {
        console.log(`It was a tie. ${tally[0]} to ${tally[1]}`);
    }
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

console.log(game());