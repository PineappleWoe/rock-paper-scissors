let playerScore = 0;
let computerScore = 0;

// HTML Elements - Updates Score and Comments on the Round Outcome
const scoreDiv = document.querySelector('.game-info');
const scoreCounter = document.createElement('p');
const resultComment = document.createElement('p');

scoreCounter.classList.add('score');
resultComment.classList.add('result');

scoreCounter.textContent = `${playerScore} : ${computerScore}`;
scoreDiv.appendChild(scoreCounter);
scoreDiv.appendChild(resultComment);

// Game Begins via HTML Buttons - Assigns the Players Choice
function playRound(option){
    let playerSelection = option.value;
    let computerSelection

    // Calculates Computers Choice
    function ComputerPlay(){
        const itemChoice = ["Rock", "Paper", "Scissors"];
        computerSelection = itemChoice[Math.floor(Math.random()*itemChoice.length)];
        return computerSelection;
    };

    // Calls the Computers Choice from Function
    ComputerPlay();

    // Outcomes
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
    } else {
        playerScore++;      // ^ Computer Scissors beats Player Paper
        scoreCounter.textContent = `${playerScore} : ${computerScore}`;
        resultComment.textContent = `Point to AI! ${computerSelection} beats ${playerSelection} Score: ${playerScore} ${computerScore}`;
    }

    // HTML Elements - Game Over
    const gameResultsDiv = document.querySelector('.game-results');
    const gameResultsMsg = document.createElement('p');

    gameResultsDiv.appendChild(gameResultsMsg);

    if (playerScore == 5 || computerScore == 5){
        if (playerScore == computerScore){
            gameResultsDiv.classList.add('game-finished');
            gameResultsMsg.textContent = "Draw!";
        } else if (playerScore > computerScore){
            gameResultsDiv.classList.add('game-finished');
            gameResultsMsg.textContent = "You Win!";
        } else {
            gameResultsDiv.classList.add('game-finished');
            gameResultsMsg.textContent = "You lose";
        }
    }
}

