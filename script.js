function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];

    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

function playRound(playerSelection, computerSelection) {
    let result;


    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelection === 'paper' && computerSelection === "rock") {
        result = "Player wins";
    } else if (playerSelection === "rock" && computerSelection === "paper"
            || playerSelection === "scissors" && computerSelection === "rock"
            || playerSelection === "paper" && computerSelection === "scissors") {
        result = "Computer wins";
    } else {
        result = "Tie";
    }
    return result;
}

function reset() {
    computerWins = 0;
    playerWins = 0;
    winner.textContent = "";
    roundResults.textContent = "";
}

function game(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    picks.textContent = `Player selected: ${playerSelection.toUpperCase()} | Computer selected ${computerSelection.toUpperCase()}`;

    if(playerWins===5||computerWins ===5) {
        reset();
    }

    if(result === "Player wins") {
        ++playerWins;
    } else if (result === "Computer wins") {
        ++computerWins;
    }

    roundResults.textContent = result;

    fullScore.textContent = `Score: Player:${playerWins} Computer:${computerWins}`;
    
    if(playerWins === 5) {
        winner.textContent = "Winner is player";
    } else if (computerWins === 5) {
        winner.textContent = "Winner is computer";
    }
    

}



let computerWins = 0;
let playerWins = 0;



const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const fullScore = document.querySelector(".fullScore")
const roundResults = document.querySelector(".roundResults");
const winner = document.querySelector(".winner")
const picks = document.querySelector(".picks");




rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorsBtn.addEventListener("click", () => game("scissors"));




