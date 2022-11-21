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

console.clear();

let btns = document.querySelectorAll('button');

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    const playerSelection = i.innerHTML;
    const computerSelection = getComputerChoice();
    document.querySelector('#player-choice').innerHTML = playerSelection;
    document.querySelector('#comp-choice').innerHTML = textForm(computerSelection);
    
    const result = playRound(playerSelection, computerSelection);

    let currentPlayerScore = document.querySelector('#player-score').innerHTML*1;
    let currentCompScore = document.querySelector('#comp-score').innerHTML*1;
    if(result == 1) {
        currentCompScore++;
        document.querySelector('#comp-score').innerHTML = currentCompScore;
    } else if(result == 2){
        currentPlayerScore++;
        document.querySelector('#player-score').innerHTML = currentPlayerScore;
    }

    if(currentPlayerScore == 3) {
        document.querySelector('.alert').innerHTML = "Player won!";
    }
    if(currentCompScore == 3) {
        document.querySelector('.alert').innerHTML = "Computer won!";
    }
  });
});

