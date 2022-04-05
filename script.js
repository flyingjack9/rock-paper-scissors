const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

const rockFilePath = "img/rock.svg";
const scissorsFilePath = "img/scissors.svg";
const paperFilePath = "img/paper.svg";
const mysteryFilePath = "img/mystery.svg";

let computerSelection;
let playerChoice;

let playerScore = 0;
let computerScore = 0;

function playerSelection(selection) {
    document.getElementById("resultScreen").style.color = "white";
    playerChoice = selection;
    console.log(playerChoice);
    game();
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    switch(getRandomInt()) {
        case 0:
            computerSelection = Rock;
            document.getElementById("computerMoveImg").src = rockFilePath;
            break;
        
        case 1:
            computerSelection = Scissors;
            document.getElementById("computerMoveImg").src = scissorsFilePath;
            break;
            
        case 2:
            computerSelection = Paper;
            document.getElementById("computerMoveImg").src = paperFilePath;
            break;         
    }
}

function detectDraw() {
    return (playerChoice === computerSelection);
}

function rockPlay() {
    return (computerSelection === Scissors);
}

function paperPlay() {
    return (computerSelection === Rock);
}

function scissorsPlay() {
    return (computerSelection === Paper);
}

function roundResult() {
    let result;

    if (detectDraw()) {
        result = "DRAW";
    } else {
        switch(playerChoice) {
            case Rock:
                result = rockPlay();
                break;
    
            case Paper:
                result = paperPlay();
                break;
                
            case Scissors:
                result = scissorsPlay();
                break;    
        }

        result = result ? "WIN" : "LOSE";
    }
    updateScoreBoard(result);
}

function updateScoreDisplay () {
    document.getElementById("playerScoreboard").innerHTML = `0${playerScore}`;
    document.getElementById("computerScoreboard").innerHTML = `0${computerScore}`;
}

function updateScoreBoard(aResult) {
    switch(aResult) {
        case "WIN":
            playerScore++;
            playerScore === 5 ? endGame() 
                : document.getElementById("resultScreen").innerHTML = "Result : You WIN!";
            break;

        case "LOSE":
            computerScore++;
            computerScore === 5 ? endGame() 
                : document.getElementById("resultScreen").innerHTML = "Result : You LOSE!";
            break;
        
        case "DRAW":
            document.getElementById("resultScreen").innerHTML = "Result : DRAW!";
            break;
    }
}

function winScoreBoard() {
    document.getElementById("resultScreen").innerHTML = "You WIN the game!";
    document.getElementById("resultScreen").style.color = "green";
}

function loseScoreBoard() {
    document.getElementById("resultScreen").innerHTML = "You LOST the game!";
    document.getElementById("resultScreen").style.color = "red";
}

function endGame() {
    playerScore === 5 ? winScoreBoard() : loseScoreBoard();
    document.getElementById("computerMoveImg").src = mysteryFilePath;
    playerScore = 0;
    computerScore = 0;
    updateScoreDisplay();
}

function game() {
    computerPlay();
    roundResult();
    updateScoreDisplay();
}