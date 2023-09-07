function getComputerChoice(){
    //make variables for rock, paper, and scissors
    const rockPaperScissor = ["Rock", "Paper", "Scissors"]
    //return a random choice//
    function randomChoice() { return Math.floor(Math.random()*rockPaperScissor.length)};
    return rockPaperScissor[randomChoice()]
}

function playRound(playerSelection, computerSelection) {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';
if(playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection.toLowerCase() === scissors.toLowerCase()){
    return "You win"
}
else if(playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection.toLowerCase() === paper.toLowerCase()){
    return "You lose"
}
else if (playerSelection.toLowerCase() === rock.toLowerCase() && computerSelection.toLowerCase() ===rock.toLowerCase()){
    return "Tie"
}
 
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  function game(){


    
  }