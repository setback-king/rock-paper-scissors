
// this array will allow a computer to be assigned a randomly generated choice  
const option = ["ROCK", "PAPER", "SCISSORS"];

console.log("Hello World"); //this is just a test on the console to make sure it is working properly and connected 

// this function will randomly choose a choice from the option array above 
function computerPlay() {
  return option[~~(Math.random() * option.length)];
}

let computerSelection = computerPlay();
let playerSelect; 
let playerSelection;


// this function will play the game approximately 5 times. A winner will then be declared after the rounds are over
function game() {
    let computerScore = 0
    let playerScore = 0
    
  // this for loop enables the game to be run exactly 5 times. I could change the values to make it run more times or less
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
// this compares the players score to the computers score. notice how it is outside of the for loop. this code only gets generated after the for loop completes itself 
    if(playerScore > computerScore){
        console.log('');
        console.log("Congratulations!  You beat the computer " + playerScore + " to " + computerScore);
      } else {
        console.log("Sorry!  You lost to the computer " + computerScore + " to " + playerScore);
      }
} 

// this plays a single round of rock paper scissors and evaluates who won based on the inputs 

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
  


