function getComputerChoice(){
    //make variables for rock, paper, and scissors
    const rockPaperScissor = ["Rock", "Paper", "Scissors"]
    //return a random choice//
    function randomChoice() { return Math.floor(Math.random()*rockPaperScissor.length)};
    return rockPaperScissor[randomChoice()]
}

let playerScore = 0;
let compScore = 0;
function playRound(playerSelection, computerSelection) {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
if((playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection.toLowerCase() === scissors.toLowerCase()) ||
    (playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection.toLowerCase() === rock.toLowerCase()) ||
    (playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection.toLowerCase() === paper.toLowerCase())){
    playerScore+=1
    return `You win!
Your score = ${playerScore}
Opponents score = ${compScore}`
}
else if(playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection.toLowerCase() === paper.toLowerCase() ||
        playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection.toLowerCase() === scissors.toLowerCase() ||
        playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection.toLowerCase() === rock.toLowerCase()){
    compScore+=1
    return `You lose!
Your score = ${playerScore}
Opponents score = ${compScore}`
}
else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection.toLowerCase() ===rock.toLowerCase() ||
         playerSelection.toLowerCase() === paper.toLowerCase() && computerSelection.toLowerCase() ===paper.toLowerCase() ||
         playerSelection.toLowerCase() === scissors.toLowerCase() && computerSelection.toLowerCase() ===scissors.toLowerCase()){
    return `Tie!
Your score = ${playerScore}
Opponents score = ${compScore}`
}
 
}

   
  const playerSelection = "rock";
  let computerSelection = getComputerChoice();

  const buttonGrp = document.querySelector('.buttonGrp')


 //Play a 5 round game with button and DOM
  const result = document.querySelector('.result')
  let turn = 0
  function buttonChoice() {
    result.textContent = playRound(this.className, computerSelection);
    computerSelection = getComputerChoice();
    turn+=1;
    if (turn >= 5){
        if ( playerScore > compScore){
            result.textContent = "Winner!"
           }
           else if (compScore > playerScore){
            result.textContent = "Loser!"
           }
           else {result.textContent = "Tie.."}
           playerScore = 0;
           compScore = 0;
           turn = 0
    }
  }

  

  const rockButton = document.querySelector(".rock")
  rockButton.addEventListener("click", buttonChoice)

  const paperButton = document.querySelector(".paper")
  paperButton.addEventListener("click", buttonChoice)

  const scissorsButton = document.querySelector('.scissors')
  scissorsButton.addEventListener('click', buttonChoice)


 


 