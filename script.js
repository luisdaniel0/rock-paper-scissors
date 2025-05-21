function getComputerChoice() {
  let choice = Math.random();
  console.log("Random number: " + choice); // Moved before returns for debugging
  
  if (choice < 0.33) {
    return "rock";
  } else if (choice < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Choose between rock, paper, or scissors");
  return choice;
}

function playGame() {
  // Define scores inside playGame to track throughout the game
  let humanScore = 0;
  let computerScore = 0;
  
  // Define playRound inside playGame to access these score variables
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! Rock beats scissors. Your score: " + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! Scissors beat paper. Your score: " + humanScore);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! Paper beats rock. Your score: " + humanScore);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}. Computer score: ${computerScore}`);
    }
  }
  
  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    console.log(`\nRound ${i + 1}:`);
    alert(`\nRound ${i + 1}:`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    alert(`Current score - You: ${humanScore}, Computer: ${computerScore}`);

  }

  console.log("\n game is OVER!")

  if (humanScore > computerScore) {
    console.log("congrats, u win!")
  } else if (computerScore > humanScore) {
    console.log("sorry, u lose!")
  } else {
    console.log("its a tie!")
  }
}

playGame();