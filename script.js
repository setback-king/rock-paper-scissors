
const option = ["ROCK", "PAPER", "SCISSORS"];

console.log("Hello World");

function computerPlay() {
  return option[~~(Math.random() * option.length)];
}

let computerSelection = computerPlay();
let playerSelect; 
let playerSelection;



function game() {
    let computerScore = 0
    let playerScore = 0
    
  
    for (let i = 0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
        function computerPlay() { return option[~~(Math.random() * option.length)]; }
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round === "You tied with the computer") {
            console.log("You tied")
        }
          else if (round === "Sorry, you have lost") {
            computerScore++;
            console.log("You lost");
        }
          else {
            playerScore++;
            console.log("You won");
        }
        
    }  

    if(playerScore > computerScore){
        console.log('');
        console.log("Congratulations!  You beat the computer " + playerScore + " to " + computerScore);
      } else {
        console.log("Sorry!  You lost to the computer " + computerScore + " to " + playerScore);
      }
} 



function playRound(playerSelection, computerSelection) {
  
 
    console.log("The computer played: " + computerSelection + " while the player played " + playerSelection)
  
    if (playerSelection === computerSelection) {
      return "You tied with the computer";
    
    }
    else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
    || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
    || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
      return "Sorry, you have lost";
  
    }
    else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
    || (playerSelection === "PAPER" && computerSelection === "ROCK") 
    || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
      return "Congrats! You won!";
      
    }
    else {
      return "Invalid entry entered. Refresh page and please try again.";
      
    }
   
    
  }
  


