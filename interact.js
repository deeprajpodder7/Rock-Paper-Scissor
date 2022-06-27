function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors"
    }
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function results(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection === playerSelection) {
        return `It's a tie!`;
    }
    else {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game(selection) {
    if ((selection !== "rock") && (selection !== "paper") && (selection !== "scissors")) {
        alert("You entered an incorrect selection!\nYou need to select either rock, paper or scissors");
    }
    else {
        return results(selection, computerPlay());
    }
  }
  
  let i = 0;
  
  while (i < 5) {
      let result = prompt("Type rock, paper or scissors!");
      result = result.toLowerCase();
      console.log(game(result));
      console.log(`Player score : ${playerScore} & Computer score : ${computerScore}`);
      i++;
  }
  if (playerScore > computerScore) {
      console.log("YOU ARE THE WINNER! 😄");
  }
  else if(playerScore < computerScore){
      console.log("The computer won!");
  }
  else {
      console.log("It's a draw!");
  }