
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
let computerScore = 0;
let playerScore = 0;

const computerScore_span = document.getElementById("computerResult");

const playerScore_span = document.getElementById("yourResult");

//const scoreBoard_div = document.querySelector(".results");


// this function will play the game 
function game() { 
        let round = playRound(playerSelection, computerSelection);
        if (round === "You tied with the computer") {
            computerScore++;
            playerScore++;
            computerScore--;
            playerScore--;
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
      
       
    //}  
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
    console.log(playerScore);
  
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
// allows buttons to be added to container 
const container = document.querySelector('#container');

// create variable to represent rock
const rock = document.createElement('button');
rock.textContent = "ROCK";
rock.setAttribute('id', 'ROCK');

container.appendChild(rock);

// create variable to represent paper 
const paper = document.createElement('button');
paper.textContent = "PAPER"
paper.setAttribute('id', 'PAPER');

container.appendChild(paper);

// create variable to represent scissors 
const scissors = document.createElement('button');
scissors.textContent = "SCISSORS";
scissors.setAttribute('id', 'SCISSORS');

container.appendChild(scissors);

// creates a div to display results of game
const scoreTracker = document.createElement('div');
container.appendChild(scoreTracker);


const gameOver = document.querySelector('.gameOver');

const restart = document.querySelector(".restart");



// adds text to a div that explains what got played by each user 
const gameDescription = document.querySelector('.gameDescription')


function gameDes(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You both played ${computerSelection}. You tied with the computer.`;
  }
  else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
  || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
  || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
    return `${computerSelection} beats ${playerSelection}. Sorry, you have lost this round.`;

  }
  else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
  || (playerSelection === "PAPER" && computerSelection === "ROCK") 
  || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
    return `${playerSelection} beats ${computerSelection}. Congrats! You have won this round!`;
  }
  else {
    return "Invalid entry entered. Refresh page and please try again."; 
  }
 
}


// adds event listener on buttons 
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', e => {
    playerSelection = button.id;
    computerSelection = computerPlay();
    game();
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = computerScore;
    gameDescription.textContent = `The user played ${playerSelection} and the computer played ${computerSelection}. `
    gameDescription.textContent += gameDes(playerSelection, computerSelection);
    if (playerScore === 5) {
      gameOver.textContent = "GAME OVER! You are the first to reach 5 wins, therefore you have won! :)";
      gameOver.style.color = "green";
    
      
    }
    else if (computerScore ===5) {
      gameOver.textContent = "GAME OVER! The computer reached 5 wins first, therefore you have lost :(";
      gameOver.style.color = "red";
   
      
      
    }
        
    
    



});

});