const roundOutcome = document.querySelector(".round-outcome")
const cpuPick = document.querySelector(".cpu-pick")
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerScore = document.querySelector(".player-score");
const cpuScore = document.querySelector(".cpu-score");
const overlay = document.querySelector(".overlay")
const gameOutcome = document.querySelector(".game-outcome")
const playAgain = document.querySelector(".play-again")

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
            roundOutcome.textContent = "Draw!!";
            roundOutcome.style.color = "yellow";
            break;
        case "win":
            roundOutcome.textContent = "Win!";
            roundOutcome.style.color = "green";
            break;
        case "lose":
            roundOutcome.textContent = "Lose!";
            roundOutcome.style.color = "red";
            break;
        default:
            roundOutcome.textContent = "";
    }
    updateScore(outcome);
    isGameOver();
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

function isGameOver() {
    if (scoreCPU === 5 || scorePlayer === 5) {
        overlay.style.display = "block";
        if (scoreCPU > scorePlayer) {
            gameOutcome.textContent = "You WIN!";
        } else {
            gameOutcome.textContent = "You LOSE!";
        }
    }
}

playAgain.addEventListener('click', restartGame);

function restartGame() {
    overlay.style.display = "none";
    scoreCPU = 0;
    scorePlayer = 0;
    updateScore();
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
