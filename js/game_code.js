// Your JavaScript goes here!

let chosen = prompt("rock, paper, or scissors");
let playerSelection = chosen.toLowerCase();
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let para = document.createElement("P");
let playBtn = document.createElement("BUTTON");


function computerPlay() {
    let random =  Math.floor(Math.random() * 3) + 1 ; 
    
    if (random == 1) {
        return "rock";
    } else if (random == 2) {
        return "paper";
    } else {
        return "scissors";
    }
    
}
/*  let choice = new Array('rock', 'paper', 'scissors');
computerChoice = choice[random];
*/
function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    //code here

if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    
    return "You Lose! Paper beats Rock. The current score is: Player: " + playerScore + " - Computer: " + computerScore ;
    
} else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    
    return "You Lose! Scissors cuts Paper. The current score is: Player: " + playerScore + " - Computer: " + computerScore ;
    
} else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    
    return "You Lose! Rock blunts Scissors. The current score is: Player: " + playerScore + " - Computer: " + computerScore ;
    
} else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    
    return "You Win! Rock blunts Scissors. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
} else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    
    return "You Win! Scissors cuts Paper. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
} else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    
    return "You Win! Paper covers Rock. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
} else if (playerSelection == computerSelection) {
    return "It's a Draw. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
}

}

function game(playerSelection, computerSelection, playerScore, computerScore) {
    for (i = 0; i < 5; i++) {
        if (playAgain == "yes") {
            console.log(playRound(playerSelection, computerSelection, playerScore, computerScore));
        } else {
            return "Thanks for playing. The final score is: Player: " + playerScore + " - Computer: " + computerScore;
        }
    }
}


playBtn.innerText = "Play again?";
para.innerHTML =  playRound(playerSelection, computerSelection, playerScore, computerScore);
document.getElementById("results-div").appendChild(para);
document.getElementById("results-div").appendChild(playBtn);




