// Your JavaScript goes here!

// let chosen = prompt("rock, paper, or scissors");
// let playerSelection = chosen.toLowerCase();
// let computerSelection = computerPlay();

let para = document.createElement("P");
let playBtn = document.createElement("BUTTON");


function computerPlay() {
    let random =  Math.floor(Math.random() * 3) + 1 ; 
    let choice = ['rock', 'paper', 'scissors'];
    return choice[random];  
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
// console.log(playRound(playerSelection, computerSelection));

function runGame() {

//  for (let i = 0; i < 6; i++) {
//      if ( i === 5) {
//          //end game and display final score
//          console.log("The final score is: Player: " + playerScore + " - Computer: " + computerScore)
//      } else {
//          //prompt and play play another round
//          let computerSelection = computerPlay();
//          let newChoices = prompt("rock, paper, or scissors?")
//          let playerSelection = newChoices.toLowerCase();
         
//          console.log("Round:" + i)
//          console.log(playRound(playerSelection, computerSelection, playerScore, computerScore))
         
//      }

//  }

    round = 1;
    while (round < 6) {
        
        let newChoices = prompt("rock, paper, or scissors?")
        let playerSelection = newChoices.toLowerCase();
        let computerSelection = computerPlay();
        console.log("Round:" + round)
        console.log(playRound(playerSelection, computerSelection, playerScore, computerScore))
        round++;
    }

 if (playerScore > computerScore) {
     return "You Win! Final Score: Player: " + playerScore + " - Computer: " + computerScore;
 } else if (playerScore < computerScore ) {
    return "You Lose! Final Score: Player: " + playerScore + " - Computer: " + computerScore;
 } else {
     return "It's a Draw!"
 }

};

runGame();



// playBtn.innerText = "Play again?";
// para.innerHTML =  playRound(playerSelection, computerSelection, playerScore, computerScore);
// document.getElementById("results-div").appendChild(para);
// document.getElementById("results-div").appendChild(playBtn);




