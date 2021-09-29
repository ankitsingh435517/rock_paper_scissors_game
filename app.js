// welcome to rock paper scissors game
// run the program to get started

function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];

    const random_index =  parseInt(Math.random() * 3);

    return options[random_index];
}


function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
       return computerSelection == 'paper' ? `You Lose! ${computerSelection} beats ${playerSelection}` : "You won!"
    }else if(playerSelection == 'paper'){
       return computerSelection == 'scissors' ? `You Lose! ${computerSelection} beats ${playerSelection}` : "You won"
    }else{
        return computerSelection == 'rock' ? `You Lose! ${computerSelection} beats ${playerSelection}` : "You won"
    }
}

let userInput = 'rock'
userInput = userInput.toLocaleLowerCase();
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
for(let i = 0; i < 5; i++){
        console.log(playRound(userInput, computerSelection));
        playRound(userInput, computerSelection) == "You won!" ? playerScore += 1 : computerScore += 1;
}

if(playerScore > computerScore){
    console.log("You won!");
}else{
    console.log('You loose!');
}
