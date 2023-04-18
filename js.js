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