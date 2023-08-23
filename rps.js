// Create a function to get CPU Choice
function getCpuChoice() {
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your selection: Rock, Paper, or Scissors").toLowerCase();
    return playerChoice;
}

function playRpsRound(playerChoice, cpuChoice) {
    console.log(`Player: ${playerChoice} CPU ${cpuChoice}`);
    if (playerChoice === cpuChoice) {
        console.log("It's a draw!");
        return 0;
    } else if ((playerChoice === "rock" && cpuChoice === "scissors") || (playerChoice === "paper" && cpuChoice === "rock") || (playerChoice === "scissors" && cpuChoice === "paper"))
    {
        console.log("Player Wins!")
        return 1;
    } else {
        console.log("CPU Wins");
        return -1;
    }
}

function determineWinner(userScore, cpuScore) {
    if (userScore === cpuScore) {
        alert(`DRAW! Player: ${userScore} CPU: ${cpuScore}`);
    } else if (userScore > cpuScore) {
        alert(`PLAYER WINS! Player: ${userScore} CPU: ${cpuScore}`);
    }
    alert(`CPU WINS! Player: ${userScore} CPU: ${cpuScore}`);
}

function printScore(userScore, cpuScore) {
    console.log(`User: ${userScore} CPU: ${cpuScore}`);
}

function game() {

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const sciBtn = document.querySelector("#scissors");

    let result;

    rockBtn.addEventListener('click', () => {
        return playRpsRound("rock", getCpuChoice());
    });
    paperBtn.addEventListener('click', () => {
        return playRpsRound("paper", getCpuChoice());
    });
    sciBtn.addEventListener('click', () => {
        return playRpsRound("scissors", getCpuChoice());
    });
}

let userScore = 0;
let cpuScore = 0;
let result = game();
if (result === 1) {
    userScore++;
    printScore(userScore, cpuScore);
} else if (result === -1) {
    cpuScore++;
    printScore(userScore, cpuScore);
}

