// handling players choices and playround ========================

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

//manipulating elements during the game =======================

//selecting elements & general functions

console.clear();

let btns = document.querySelectorAll('.btn');
let retryBtn = document.querySelector('.retry-btn');

let alert = document.querySelector('.alert');
let playerScore = document.querySelector('#player-score');
let compScore = document.querySelector('#comp-score');
let playerChoice = document.querySelector('#player-choice');
let compChoice = document.querySelector('#comp-choice');

let checkboxes = document.querySelectorAll('label input');
let bo3Checkbox = document.querySelector('#bo3Checkbox');
let bo5Checkbox = document.querySelector('#bo5Checkbox');

let winCondition = 3;

function hideElements(elements){
    elements.forEach(function(i){
        i.classList.add("hide");
    });
}

function showElements(elements){
    elements.forEach(function(i){
        i.classList.remove("hide");
    });
}

function hide(element){
    element.classList.add("hide");
}

function show(element){
    element.classList.remove("hide");
}

function createImg(choice) {
    let path = "img/";
    if(choice == "Rock"){
        path = path + "rock.png";
    }
    if(choice == "Paper"){
        path = path + "paper.png";
    }
    if(choice == "Scissors"){
        path = path + "scissors.png";
    }
    const choiceImg = document.createElement('img');
    choiceImg.setAttribute('src', path);
    choiceImg.setAttribute('alt', "choice");
    return choiceImg;
}

function reset(retryBtn, btns, alert, playerScore, compScore, playerChoice, compChoice){
    hide(retryBtn);
    showElements(btns);
    alert.innerHTML = "";
    playerScore.innerHTML = "0";
    compScore.innerHTML = "0";
    if (playerChoice.hasChildNodes()) {
        playerChoice.removeChild(playerChoice.children[0]);
    }
    if (compChoice.hasChildNodes()) {
        compChoice.removeChild(compChoice.children[0]);
    }
}

//choosing gamemode

checkboxes.forEach(function(i) {
    i.addEventListener('click', function() {
        if(bo5Checkbox.checked) {
            if(bo3Checkbox.checked) {
                bo3Checkbox.click();
            }
            winCondition = 3;
        }
        if(bo3Checkbox.checked) {
            if(bo5Checkbox.checked) {
                bo5Checkbox.click();
            }
            winCondition = 2;
        }
        reset(retryBtn, btns, alert, playerScore, compScore, playerChoice, compChoice);
    });
});

//handling buttons

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    const playerSelection = i.innerHTML;
    const computerSelection = getComputerChoice();

    if (playerChoice.hasChildNodes()) {
        playerChoice.removeChild(playerChoice.children[0]);
    }
    if (compChoice.hasChildNodes()) {
        compChoice.removeChild(compChoice.children[0]);
    }
    playerChoice.appendChild(createImg(playerSelection));
    compChoice.appendChild(createImg(textForm(computerSelection)));

    const result = playRound(playerSelection, computerSelection);

    let currentPlayerScore = playerScore.innerHTML*1;
    let currentCompScore = compScore.innerHTML*1;
    if(result == 1) {
        currentCompScore++;
        compScore.innerHTML = currentCompScore;
    } else if(result == 2){
        currentPlayerScore++;
        playerScore.innerHTML = currentPlayerScore;
    }

    if(currentPlayerScore == winCondition) {
        alert.innerHTML = "Player won!";
        hideElements(btns);
        show(retryBtn);
    }
    if(currentCompScore == winCondition) {
        alert.innerHTML = "Computer won!";
        hideElements(btns);
        show(retryBtn);
    }
  });
});

retryBtn.addEventListener('click', function() {
    reset(retryBtn, btns, alert, playerScore, compScore, playerChoice, compChoice);
});
