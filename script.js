function getComputerChoice(){
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

function getHumanChoice(){
    return prompt("what's your choice?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(computerChoice.toLowerCase()){
        console.log("draw");
        return;
    }
    if(humanChoice.toLowerCase()==="rock"){
        switch(computerChoice.toLowerCase()){
            case "paper":
                console.log("You lose! Paper beats Rock");
                computerScore++;
            case "scissors":
                console.log("You win! Rock beats Scissors");
                humanScore++;    
        }
    }
    if(humanChoice.toLowerCase()==="scissors"){
        switch(computerChoice.toLowerCase()){
            case "paper":
                console.log("You win! Scissors beats Paper");
                computerScore++;
            case "rock":
                console.log("You lose! Rock beats Scissors");
                humanScore++;    
        }
    }  
    if(humanChoice.toLowerCase()==="paper"){
        switch(computerChoice.toLowerCase()){
            case "rock":
                console.log("You win! Paper beats Rock");
                computerScore++;
            case "scissors":
                console.log("You lose! Scissors beats Paper");
                humanScore++;    
        }
    }        
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
