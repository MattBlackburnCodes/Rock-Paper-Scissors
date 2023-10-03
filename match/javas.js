let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let playerSelects = "";
let computerSelects = "";

const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const playerOutput = document.querySelector('.playerOutput');
const compOutput = document.querySelector('.compOutput');
const gameOutcome = document.querySelector('.gameOutcome');

const playerScore = document.querySelector('.playerScore');
const compScore = document.querySelector('.compScore');
const tieScore = document.querySelector('.tieScore');
const gameResult = document.querySelector('.gameResult');

function resetGame(){
    playerWinCount = 0;
    playerScore.textContent = playerWinCount;
    computerWinCount = 0;
    compScore.textContent = computerWinCount;
    tieCount = 0;
    tieScore.textContent = tieCount;
    
    playerSelects = "";
    computerSelects = "";
}

//This function randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
    computerSelects = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    compOutput.textContent = `The computer chose ${computerSelects}.`;
    console.log(`The computer chose ${computerSelects}.`)
    return computerSelects;
}


function getPlayerChoice(choice){
    //const playerOutput = document.querySelector('.playerOutput');
        
    playerSelects = choice;
    playerOutput.textContent = `You chose ${playerSelects}.`;
    return playerSelects;

}
        
// Below are a list of event listeners for the options
paper.addEventListener('click', () => {
    getPlayerChoice("paper");
    getComputerChoice();
    playRound(playerSelects, computerSelects);
    gameResults();
})

rock.addEventListener('click', () => {
    console.log("Clicked");
    getPlayerChoice("rock");
    getComputerChoice();
    playRound(playerSelects, computerSelects);
    gameResults();
})

scissors.addEventListener('click', () => {
    console.log("Clicked");
    getPlayerChoice("scissors");
    getComputerChoice();
    playRound(playerSelects, computerSelects);
    gameResults();
})



//This function plays a single round of Rock Paper Scissors. The function should take two parameters:
//the playerSelection and computerSelection - and then return a string that declares the winner of the round.
function playRound(playerSelection, computerSelection) {

    
    //Tie
    if (playerSelection === computerSelection) {
        tieCount++;
        tieScore.textContent = tieCount;
        gameOutcome.textContent = (`It's a tie!`);
        return (`It's a tie!`);
    }
    //Player wins
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        playerWinCount++;
        playerScore.textContent = playerWinCount;
        gameOutcome.textContent = (`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`);
        return (`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}! Score is Player: ${playerWinCount} | Computer: ${computerWinCount} | Tie: ${tieCount}`);
        
    }

    //Player loses
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
        computerWinCount++;
        compScore.textContent = computerWinCount;
        gameOutcome.textContent = (`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`);
        
        return (`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}! Score is Player: ${playerWinCount} | Computer: ${computerWinCount} | Tie: ${tieCount}`);
        
    }
    else {
        return ("Someting went wrong, try again!");
    }
    

    
}

function gameResults(){
    if (playerWinCount === 5){
        gameResult.textContent = ("You won the game! You are the champion of the world!");
        window.location.href = "../results/playerWins.html"
        resetGame();
    }
    else if (computerWinCount === 5){
        gameResult.textContent = ("You have lost the game to the computer! All hope for humanity is lost!");
        window.location.href = "../results/compWins.html"
        resetGame();
    }
    else {
        gameResult.textContent = ("");
    }
    
}

/*function game(){

    //Loops the game 5 times
    for (let i = 0; i < 5; i++){
        //Get the player and computer choices
        //getPlayerChoice();
        getComputerChoice();

        //Plays a single round
        let result = playRound(playerSelects, computerSelects);
        console.log(result);
        
    }
    resetGame();
    

}*/



