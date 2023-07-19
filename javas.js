let playerWinCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let playerSelects = "";
let computerSelects = "";


function resetGame(){
    playerWinCount = 0;
    computerWinCount = 0;
    tieCount = 0;
    playerSelects = "";
    computerSelects = "";
}

//This function randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice(){
    computerSelects = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    return computerSelects;
}



//This function plays a single round of Rock Paper Scissors. The function should take two parameters:
//the playerSelection and computerSelection - and then return a string that declares the winner of the round.
function playRound(playerSelection, computerSelection) {

    
    console.log(`You chose ${playerSelects}.`)
    console.log(`The computer chose ${computerSelects}.`)
    
    //Tie
    if (playerSelection === computerSelection) {
        tieCount++;
        return (`It's a tie! Score is Player: ${playerWinCount} | Computer: ${computerWinCount} | Tie: ${tieCount}`);
    }
    //Player wins
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")) {
        playerWinCount++;
        return (`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}! Score is Player: ${playerWinCount} | Computer: ${computerWinCount} | Tie: ${tieCount}`);
        
    }

    //Player loses
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "rock")) {
        computerWinCount++;
        return (`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}! Score is Player: ${playerWinCount} | Computer: ${computerWinCount} | Tie: ${tieCount}`);
        
    }
    else {
        return ("Someting went wrong, try again!");
    }
}

function game(){

    //Loops the game 5 times
    for (let i = 0; i < 5; i++){
        //Get the player and cmoputer choices
        getplayerChoice();
        getComputerChoice();

        //Plays a single round
        let result = playRound(playerSelects, computerSelects);
        console.log(result);
        
    }
    resetGame();
    

}

function getplayerChoice(){
    playerSelects = prompt("Rock, Paper, Scissors?: ").toLowerCase();
    return playerSelects;
}

