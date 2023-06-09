function getComputerChoice() {
    switch(randomIntegerGenerator(3)) {
    case 0:
        return "Rock";
        break;
    case 1:
        return "Paper";
        break;
    case 2:
        return "Scissors";
        break;
    default:
        return "";
    }
}

function randomIntegerGenerator(maxInt = "3") {
    return Math.floor(Math.random() * maxInt);
}

function playRound(playerSelection = "", computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!! You both pick " + playerSelection;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper") {
        return "Win!! " + playerSelection + " beats " + computerSelection + "!!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "rock") {
        return "Lose " + computerSelection + " beats " + playerSelection + "!!";
    }
    else 
        return "Invalid Input. Please only use: Rock, Paper, Scissors. NOT case-sensitive";
}

function game() {
    let input;
    let playerScore = 0;
    let compScore = 0;
    for (let i = 1; i <= 5; i++) {
        input = prompt("Rock-Paper-Scissors! Pick your poison: ", "rock");
        let temp = playRound(input);
        switch(temp.charAt(0)) {
            case 'L':
                compScore++;
                break;
            case 'W':
                playerScore++;
                break;
            default:
                break;
        }
        console.log(temp);
    }
    if (playerScore > compScore) {
        console.log("Player Wins!! with a score of " + playerScore);
    }
    else if (playerScore < compScore) {
        console.log("Computer Wins!! with a score of " + compScore);
    }
    else 
        console.log("Draw!!!!!");
}
