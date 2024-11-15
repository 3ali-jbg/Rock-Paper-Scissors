const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices [randomIndex];
}
function getHumanChoice() {
    let choice = prompt("Enter your choice (Rock, Paper, or Scissors):").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:");
        choice = choice.toLowerCase();
    }
    return choice;
}
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("It's a Tie!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
}
playGame();