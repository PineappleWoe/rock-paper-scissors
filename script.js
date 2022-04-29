let playerScore = 0;
let computerScore = 0;

const scoreDiv = document.querySelector('.game-info');
const scoreCounter = document.createElement('p');
const resultComment = document.createElement('p');

scoreCounter.classList.add('score');
resultComment.classList.add('result');

scoreCounter.textContent = `${playerScore} : ${computerScore}`;
scoreDiv.appendChild(scoreCounter);
scoreDiv.appendChild(resultComment);

function playRound(option){
    let playerSelection = option.value;
    let computerSelection

    function ComputerPlay(){
        const itemChoice = ["Rock", "Paper", "Scissors"];
        computerSelection = itemChoice[Math.floor(Math.random()*itemChoice.length)];
        return computerSelection;
    };

    ComputerPlay();

    if (computerSelection === playerSelection){
        playerScore++;
        computerScore++;
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Draw! Score: ${playerScore} ${computerScore}`;
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore++;      // ^ Player Paper beats Computer Rock
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to you! ${playerSelection} beats ${computerSelection}! Score: ${playerScore} ${computerScore}`;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerScore++;    // ^ Computer Rock beats Player Scissors
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to AI! ${computerSelection} beats ${playerSelection} Score: ${playerScore} ${computerScore}`;
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerScore++;    // ^ Computer Paper beats Player Rock
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to AI! ${computerSelection} beats ${playerSelection} Score: ${playerScore} ${computerScore}`;
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore++;      // ^ Player Scissors beats Computer Paper
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to you! ${playerSelection} beats ${computerSelection} Score: ${playerScore} ${computerScore}`;
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore++;      // ^ Player Rock beats Computer Scissors
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to you! ${playerSelection} beats ${computerSelection} Score: ${playerScore} ${computerScore}`;                  
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        playerScore++;      // ^ Computer Scissors beats Player Paper
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to AI! ${computerSelection} beats ${playerSelection} Score: ${playerScore} ${computerScore}`;
    } else {
        gameRound = 0;      // Resets the Game - Need to change this to not reset halfway through a Game
        alert("Please refresh and input a valid input.");
        playerSelection = prompt("Rock, Paper or Scissors?");
    }
}