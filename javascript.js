const gameOutcome = document.querySelector(".game-outcome")
const cpuPick = document.querySelector(".cpu-pick")
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");


btnRock.addEventListener('click', () => playRound('rock'));
btnPaper.addEventListener('click', () => playRound('paper'));
btnScissors.addEventListener('click', () => playRound('scissors'));


function getComputerChoice() {
    switch(randomIntegerGenerator(3)) {
    case 0:
        cpuPick.src = "./images/rock.png"
        return "rock";
        break;
    case 1:
        cpuPick.src = "./images/paper.png"
        return "paper";
        break;
    case 2:
        cpuPick.src = "./images/scissor.png"
        return "scissors";
        break;
    default:
        return "";
    }
}
function randomIntegerGenerator(maxInt = "3") {
    return Math.floor(Math.random() * maxInt);
}

function playRound(playerSelection = "", computerSelection) {
    //playerSelection = playerSelection.toLowerCase();      no longer needed
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        update("draw"); 
        return "Draw!! You both pick " + playerSelection;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper") {
        update("win");
        return "Win!! " + playerSelection + " beats " + computerSelection + "!!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || 
    playerSelection === "paper" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "rock") {
        update("lose");
        return "Lose " + computerSelection + " beats " + playerSelection + "!!";
    }
    else 
        return "Invalid Input. Please only use: Rock, Paper, Scissors. NOT case-sensitive";
}


//Update text and Score
function update(outcome = "") {
    switch (outcome) {
        case "draw":
            gameOutcome.textContent = "Draw!!";
            gameOutcome.style.color = "yellow";
            break;
        case "win":
            gameOutcome.textContent = "Win!";
            gameOutcome.style.color = "green";
            break;
        case "lose":
            gameOutcome.textContent = "Lose!";
            gameOutcome.style.color = "red";
            break;
        default:
            gameOutcome.textContent = "";
    }
    updateScore(outcome);
}

let scorePlayer = 0;
let scoreCPU = 0;

function updateScore(outcome = "") {
    switch (outcome) {
        case "draw":
            break;
        case "win":
            scorePlayer++;
            playerScore.textContent = `${scorePlayer}`;
            break;
        case "lose":
            scoreCPU++;
            cpuScore.textContent = `${scoreCPU}`;
            break;
        default:
            playerScore.textContent = "0";
            cpuScore.textContent = "0";
    }
}

//~~~~~~~~~~~~Console Version~~~~~~~~~~~~//
// function game() {
//     let input;
//     let playerScore = 0;
//     let compScore = 0;
//     for (let i = 1; i <= 5; i++) {
//         input = prompt("Rock-Paper-Scissors! Pick your poison: ", "rock");
//         let temp = playRound(input);
//         switch(temp.charAt(0)) {
//             case 'L':
//                 compScore++;
//                 break;
//             case 'W':
//                 playerScore++;
//                 break;
//             default:
//                 break;
//         }
//         console.log(temp);
//     }
//     if (playerScore > compScore) {
//         console.log("Player Wins!! with a score of " + playerScore);
//     }
//     else if (playerScore < compScore) {
//         console.log("Computer Wins!! with a score of " + compScore);
//     }
//     else 
//         console.log("Draw!!!!!");
// }
