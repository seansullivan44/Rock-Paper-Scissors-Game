//Initialize scoreboard:
var userScore = 0;
var computerScore = 0;

//Define constant variables:
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_banner = document.querySelector(".outcome > p");
const reset_button = document.querySelector(".reset-button");
const rock_button = document.getElementById("Rock");
const paper_button = document.getElementById("Paper");
const scissors_button = document.getElementById("Scissors");


//Function generates and returns a random computer guess
function getComputerChoice(){
  const possibleChoices = ["rock", "paper", "scissors"];
  return possibleChoices[Math.floor(Math.random() * 3)]; //Choose and return random choice
}

//Function updates score and screen values for a user win
function userWins(userChoice){
  //Increment user score:
  userScore += 1; 
  userScore_span.innerHTML = userScore;

  //Generate user winning message:
  switch(userChoice){
    case "paper":
      result_banner.innerHTML = "Paper Covers Rock. You Win!";
      break;
    case "rock":
      result_banner.innerHTML = "Rock Smashes Scissors. You Win!";
      break;
    case "scissors":
      result_banner.innerHTML = "Scissors Cuts Paper. You Win!";
      break;
  }

}

//Function updates score and screen values for a computer win
function computerWins(computerChoice){
  //Increment Computer Score:
  computerScore += 1;
  computerScore_span.innerHTML = computerScore;

  //Generate computer winning message:
  switch(computerChoice){
    case "paper":
      result_banner.innerHTML = "Paper Covers Rock. Computer Wins!";
      break;
    case "rock":
      result_banner.innerHTML = "Rock Smashes Scissors. Computer Wins!";
      break;
    case "scissors":
      result_banner.innerHTML = "Scissors Cuts Paper. Computer Wins!";
      break;
  }

}

//Function resets game
function resetScoreboard(){
  //Reset scoreboard:
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  //Reset game message:
  result_p.innerHTML = "ROCK PAPER SCISSORS";
}

//Function plays game and determines outcome using user choice input
function playGame(userChoice){
  //Obtain the computers random choice:
  const computerChoice = getComputerChoice();

  //Check to see game winner:
  switch (userChoice+","+computerChoice) {
    //Situations where computer wins
    case "rock,paper":
      computerWins(computerChoice);
      break;
    case "scissors,rock":
      computerWins(computerChoice);
      break;
    case "paper,scissors":
      computerWins(computerChoice);
      break;
    //Situations where user wins
    case "paper,rock":
      userWins(userChoice);
      break;
    case "rock,scissors":
      userWins(userChoice);
      break;
    case "scissors,paper":
      userWins(userChoice);
      break;
    //Situations where there is a draw
    default:
      result_banner.innerHTML = "Tie!"
      break;
  }

}


function main(){
  //User clicks "rock"
  rock_button.addEventListener('click', function(){
    playGame("rock");
  })

  //User clicks "paper"
  paper_button.addEventListener('click', function(){
    playGame("paper");
  })

  //User clicks "scissors"
  scissors_button.addEventListener('click', function(){
    playGame("scissors");
  })

  //User resets the game
  reset_button.addEventListener('click', function(){
    resetScoreboard();
  })

}

main();
