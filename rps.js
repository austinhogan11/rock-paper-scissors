// Create a function to get CPU Choice
function getCpuChoice() {
    const options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let choice = options[randomNum]
    return choice
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter your selection: Rock, Paper, or Scissors").toLowerCase();
    return playerChoice;
}

function playRpsRound(playerChoice, cpuChoice) {
    console.log(`Player: ${playerChoice} CPU ${cpuChoice}`);
    if (playerChoice === cpuChoice) {
        console.log("It's a draw!");
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

function game() {
    let userScore = 0;
    let cpuScore = 0;
    
    for (let i = 0; i < 5; i++) {
        console.log(`Score: Player: ${userScore} CPU: ${cpuScore}`)
        let result = playRpsRound(getPlayerChoice(), getCpuChoice());
        if (result === 1) {
            userScore++;
        } else if (result === -1) {
            cpuScore++;
        }
    }

    determineWinner(userScore, cpuScore);
}

game();
