
function getComputerChoice() {
  let choice = Math.random();
  if (choice < 0.33) {
    return "rock"
  } else if (choice < 0.66) {
    return "paper"
  } else if (choice < 1) {
    return "scissors"
  }
  console.log("Choice = " + choice)
}

function getHumanChoice() {
  let choice = prompt("Choose between rock, paper, or scissors")
  return choice
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()


  if (humanChoice === computerChoice) {
    console.log("its a tie!")
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    console.log("you win! rock beats scissors. Your score: " + humanScore)
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    console.log("you win! scissors beat paper. Your score: " + humanScore)
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
    console.log("you win! paper beats rock. Your score: " + humanScore)
  } else {
    computerScore++
    console.log("you lose! Computer score: " + computerScore)
  }
  
}

playRound("rock","scissors")