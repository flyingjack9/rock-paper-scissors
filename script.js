const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

let playerSelection;
let computerSelection;


function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function computerPlay() {
    let computerMove;

    switch(getRandomInt()) {
        case 0:
            computerMove = Rock;
            break;
        
        case 1:
            computerMove = Paper;
            break;
            
        case 2:
            computerMove = Scissors;
            break;         
    }

    computerSelection = computerMove;
}

function playerPlay() {
    playerSelection = prompt("Please enter your choice: ");
}

function detectDraw() {
    return (playerSelection === computerSelection);
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

    switch(playerSelection) {
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
    return result;
}

function playRound() {
    let roundResultMsg;

    if (detectDraw()) {
        roundResultMsg = `Draw! You both chose ${playerSelection}`;
    } else {
        roundResultMsg = 
            roundResult() ? 
            `You Win! ${playerSelection} beats ${computerSelection}` :
            `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    return roundResultMsg;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerPlay();
        computerPlay();
        console.log(playRound());
    }
}