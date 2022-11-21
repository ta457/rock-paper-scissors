//1 = rock, 2 = paper, 3 = scissors
function textForm(choice){
    if(choice == 1) {
        return "Rock";
    } else if(choice == 2){
        return "Paper";
    } else if(choice == 3) {
        return "Scissors";
    } else {
        return null;
    }
}

function getMessage(result, playerSelection, computerSelection){
    if(result == 0) {
        return "You're even.";
    } else if(result == 1) {
        return "You lose! " + textForm(computerSelection) + " beats " + playerSelection;
    } else {
        return "You win! " + playerSelection + " beats " + textForm(computerSelection);
    }
}

function getComputerChoice(){
    return Math.floor(Math.random()*(3 - 1 + 1) + 1);
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let result = 0;
    let cptSltTxt = "";
    if(playerSelection == "rock"){
        if(computerSelection == 2){
            result = 1;
        } else if (computerSelection == 3) {
            result = 2;
        }
    }
    if(playerSelection == "paper"){
        if(computerSelection == 1){
            result = 2;
        } else if (computerSelection == 3) {
            result = 1;
        }
    }
    if(playerSelection == "scissors"){
        if(computerSelection == 1){
            result = 1;
        } else if (computerSelection == 2) {
            result = 2;
        }
    }
    return result;
}

// function game(){
//     for(let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Your choice is:");
//         const computerSelection = getComputerChoice();
//         console.log(getMessage(playRound(playerSelection, computerSelection), playerSelection, computerSelection));
//     }
// }

// game();

