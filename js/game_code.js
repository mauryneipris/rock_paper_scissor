let resultsPara = document.createElement("P");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const choiceArr = ['rock', 'paper', 'scissors'];
    return  choiceArr[Math.floor(Math.random() * choiceArr.length)];  
}

function playRound(playerSelection, computerSelection) {
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

function playAgain() {
    let playBtn = document.createElement("BUTTON");
    playBtn.innerText = "Play again?";    
    document.getElementById("results-div").appendChild(playBtn);
    playBtn.addEventListener('click', (e) => {
       resultsPara.textContent = '';
       document.getElementById("results-div").removeChild(playBtn);
       playerScore = 0;
       computerScore = 0;
    })
} 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        
        let playerSelection = button.id;
        let computerSelection = computerPlay();
        resultsPara.textContent = playRound(playerSelection, computerSelection);
        document.getElementById("results-div").appendChild(resultsPara);
        if (playerScore === 5 || computerScore == 5) {
            resultsPara.textContent = ` GAME OVER. ${(playerScore > computerScore) ? "You win!" : "You lose!" } The Final Score is: Player: ` + playerScore + ` - Computer: ` + computerScore;
            playAgain();
        } 
    })
})
// function runGame() {

//     round = 0;
//     while (round < 5) {
        
//         let newChoices = prompt("rock, paper, or scissors?")
//         let playerSelection = newChoices.toLowerCase();
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection))
//         round++;
//     }

//     if (playerScore > computerScore) {
//         console.log("You Win! Final Score: Player: " + playerScore + " - Computer: " + computerScore)
//     } else if (playerScore < computerScore ) {
//         console.log("You Lose! Final Score: Player: " + playerScore + " - Computer: " + computerScore)
//     } else {
//         console.log("It's a Draw!")
//     }

// };

//  runGame();





