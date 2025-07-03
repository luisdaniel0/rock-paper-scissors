const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

let userScore = 0
let computerScore = 0

const resultDiv = document.querySelector('#result')
const scoreDiv= document.querySelector('#score')



rockBtn.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice()
  playRound("rock", computerChoice)
})

paperBtn.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice()
  playRound("paper", computerChoice)
})

scissorsBtn.addEventListener("click", ()=>{
  const computerChoice = getComputerChoice()
  playRound("scissors", computerChoice)
})




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

function playRound(humanChoice, computerChoice) {
  

  if (humanChoice === computerChoice) {
    resultDiv.textContent= "It's a tie!"
    scoreDiv.textContent= `Your Score: ${userScore} Computer Score: ${computerScore}`
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`
    userScore = userScore + 1
    scoreDiv.textContent= `Your Score: ${userScore} Computer Score: ${computerScore}`
    
  } else {
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    computerScore = computerScore + 1
    scoreDiv.textContent= `Your Score: ${userScore} Computer Score: ${computerScore}`
    
  }

  if(userScore === 5 || computerScore === 5){
    if(userScore>computerScore){
      resultDiv.textContent= `You win! Game over`
    } else if (computerChoice>userScore){
      resultDiv.textContent=`You lose! Game over`
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } 
}


