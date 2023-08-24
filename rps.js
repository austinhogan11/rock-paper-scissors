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
        return 0;
    } else if ((playerChoice === "rock" && cpuChoice === "scissors") || (playerChoice === "paper" && cpuChoice === "rock") || (playerChoice === "scissors" && cpuChoice === "paper"))
    {
        return 1;
    } else {
        return -1;
    }
}

function checkGameResult(playerScore, cpuScore) {
    if (playerScore === 5)
        alert('Player Wins');
    else if (cpuScore === 5)
        alert('CPU Wins');
}

function game() {
    let playerScore = 0;
    let cpuScore = 0;

    const display = document.querySelector('#display');

    // let playerChoice = "";
    const gameButtons = document.querySelectorAll('button');
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerDisplay = document.querySelector('#player-choice-display');
            playerDisplay.textContent = `Player: ${button.id}`;

            const cpuChoice = getCpuChoice();
            const cpuDisplay = document.querySelector('#cpu-choice-display');
            cpuDisplay.textContent = `CPU: ${cpuChoice}`;

            const roundResult = playRpsRound(button.id, cpuChoice);
            const header = document.querySelector('#header-text');
            if (roundResult === 1) {
                header.textContent = "Player wins the round!"
                playerScore++;
            } else if (roundResult === -1) {
                header.textContent = "CPU wins the round!"
                cpuScore++;
            } else {
                header.textContent = "DRAW! Play Again!"
            }

            const playerScoreLabel = document.querySelector('#player-score')
            playerScoreLabel.textContent = `Player: ${playerScore}`;
            const cpuScoreLabel = document.querySelector('#cpu-score')
            cpuScoreLabel.textContent = `Player: ${cpuScore}`;

            checkGameResult(playerScore, cpuScore);
        });
    });
}

game();

