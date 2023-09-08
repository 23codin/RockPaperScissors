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

  function game(){
    //play a 5 round game using prompt
 
   for(let i=0;i<5;i++){
    let five = prompt("Rock, paper, scissors?", "")
    alert(playRound(five, computerSelection));
     computerSelection = getComputerChoice()
   }
   if ( playerScore > compScore){
    alert("Winner!")
   }
   else if (compScore > playerScore){
    alert("Loser!")
   }
   else {alert("Tie..")}
   playerScore = 0;
   compScore = 0;


  }