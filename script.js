const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
let humanScore = 0;
let computerScore = 0;
const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');

function getComputerChoice() {
  let i = Math.floor(Math.random() * 3);//i可能取 0 1 2
  switch (i) {
    case 0:
      return ("rock");
      break;
    case 1:
      return ("paper");
      break;
    case 2:
      return ("scissors");
      break;
  }
}

btnPaper.addEventListener('click',()=>playRound('paper',getComputerChoice()));
btnRock.addEventListener('click',()=>playRound('rock',getComputerChoice()));
btnScissors.addEventListener('click',()=>playRound('scissors',getComputerChoice()));




function playRound(humanChoice, computerChoice) {
  if (computerChoice.toLowerCase() === humanChoice.toLowerCase()) {
    result1.textContent="draw"
    result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
    
    return;
  }
  if (humanChoice.toLowerCase() === "rock") {
    switch (computerChoice.toLowerCase()) {
      case "paper":
        result1.textContent="You lose! Paper beats Rock";
        computerScore++;
        result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
        return;
      case "scissors":
        result1.textContent="You win! Rock beats Scissors";
        humanScore++;
        result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
        return;
    }
  }
  if (humanChoice.toLowerCase() === "scissors") {
    switch (computerChoice.toLowerCase()) {
      case "paper":
        result1.textContent="You win! Scissors beats Paper";
        humanScore++;
        result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
        return;
      case "rock":
        result1.textContent="You lose! Rock beats Scissors";
        computerScore++;
        result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
        return;
    }
  }
  if (humanChoice.toLowerCase() === "paper") {
    switch (computerChoice.toLowerCase()) {
      case "rock":
        result1.textContent="You win! Paper beats Rock";
        humanScore++;
        result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
        return;
      case "scissors":
        result1.textContent="You lose! Scissors beats Paper";
        computerScore++;
        result2.textContent="Your Score: " + humanScore + "  Computer Score: " + computerScore;
        return;
    }
  }
}