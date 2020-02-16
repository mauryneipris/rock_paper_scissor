// Your JavaScript goes here!

// let para = document.createElement("P");
// let playBtn = document.createElement("BUTTON");

function computerPlay() {
    const choiceArr = ['rock', 'paper', 'scissors'];
    return  choiceArr[Math.floor(Math.random() * choiceArr.length)];  
}

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    //code here
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++; 
        return "You Lose! Paper beats Rock. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
        
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;  
        return "You Lose! Scissors cuts Paper. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
        
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock blunts Scissors. The current score is: Player: " + playerScore + " - Computer: " + computerScore;
        
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


function runGame() {

    round = 0;
    while (round < 5) {
        
        let newChoices = prompt("rock, paper, or scissors?")
        let playerSelection = newChoices.toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        round++;
    }

    if (playerScore > computerScore) {
        console.log("You Win! Final Score: Player: " + playerScore + " - Computer: " + computerScore)
    } else if (playerScore < computerScore ) {
        console.log("You Lose! Final Score: Player: " + playerScore + " - Computer: " + computerScore)
    } else {
        console.log("It's a Draw!")
    }

};

 runGame();



// playBtn.innerText = "Play again?";
// para.innerHTML =  playRound(playerSelection, computerSelection, playerScore, computerScore);
// document.getElementById("results-div").appendChild(para);
// document.getElementById("results-div").appendChild(playBtn);




