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