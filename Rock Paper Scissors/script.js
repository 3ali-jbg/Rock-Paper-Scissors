
const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let playerName = "Human";

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice().toLowerCase();
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        displayResult("It's a Tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        displayResult(`You Win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        displayResult(`You Lose! ${computerChoice} beats ${humanChoice}`);
    }
    updateScore();
    checkWinner();
}

function displayResult(message) {
    const resultElement = document.getElementById("round-result");
    resultElement.textContent = message;
}

function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${playerName} ${humanScore} - ${computerScore} Computer`;
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Human" : "Computer";
        displayResult(`Game Over! ${winner} wins the game!`);
        disableButtons();
        showRestButton();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => button.disabled = true);
}

function showRestButton() {
    const resetContainer = document.createElement("div");
    resetContainer.id = "reset-container";

    const resetButton = document.createElement("button");
    resetButton.textContent = "Resest Game";
    resetButton.addEventListener("click", resetGame);

    resetContainer.appendChild(resetButton);
    document.body.appendChild(resetContainer);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    displayResult("Make Your Move!");
    enableButtons();
}

function enableButtons() {
    const buttons =  document.querySelectorAll("#choices button");
    buttons.forEach(button => button.disabled = false);
}

function setUpGame() {
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const humanChoice = event.target.getAttribute("data-choice");
            playRound(humanChoice);
        });
    });

    const resetButton = document.getElementById("reset-btn");
    resetButton.addEventListener("click", resetGame);
}

document.getElementById("start-game").addEventListener("click", function() {
    const playerInput = document.getElementById("player-name").value;
    if (playerInput) {
        playerName = playerInput;
        document.getElementById("player-name-display").textContent = playerName;
        document.querySelector("div input").style.display = "none";
        document.querySelector("div button").style.display = "none";
        setUpGame();
    } else {
        alert("Please enter your name");
    }
})

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

setUpGame();