function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];

    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
};


function playRound(playerSelection) {
    let result

    console.log(playerSelection);

    computerSelection = getComputerChoice();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "paper"
    || playerSelection === 'paper' && computerSelection === "rock") {
        result = "Player wins";
        console.log(result);
    } else if (playerSelection === "rock" && computerSelection === "paper"
            || playerSelection === "scissors" && computerSelection === "rock"
            || playerSelection === "paper" && computerSelection === "scissors") {
        result = "Computer wins";
        console.log(result);
    } else {
        console.log("tie");
    }
    return result;
}

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// function game() {

//     let computerWins = 0;
//     let playerWins = 0;

//     for(i = 1; i <= 5; i++) {
//         let result = playRound();

        
//         if (result === "Player wins") {
//             ++playerWins;
//             console.log("Grats!");
//         } else {
//             ++computerWins;
//             console.log("Boo!");
//         }



//         console.log(result)

//         if (computerWins === 3 || playerWins === 3) {
//             if (computerWins == 3){
//                 console.log("Computer won 3! game over!");
//             } else {
//                 console.log("Congratulations! You won 3!");
//             }
//             break;
//         }
//     }
// }


