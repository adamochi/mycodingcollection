console.log("ROCK PAPER SCISSORS LIZARD SPOCK");
// Extended version of ROCK PAPER SCISSORS

const rpsls = (pl1, pl2) => {
  if (pl1 === pl2) {
    return "Draw!";
  }
  if (pl1 === "rock") {
    if (pl2 === "paper" || pl2 === "spock") {
      return "Player 2 Won!";
    } else {
      return "Player 1 Won!";
    }
  }
  if (pl1 === "paper") {
    if (pl2 === "scissors" || pl2 === "lizard") {
      return "Player 2 Won!";
    } else {
      return "Player 1 Won!";
    }
  }
  if (pl1 === "scissors") {
    if (pl2 === "spock" || pl2 === "rock") {
      return "Player 2 Won!";
    } else {
      return "Player 1 Won!";
    }
  }
  if (pl1 === "lizard") {
    if (pl2 === "rock" || pl2 === "scissors") {
      return "Player 2 Won!";
    } else {
      return "Player 1 Won!";
    }
  }
  if (pl1 === "spock") {
    if (pl2 === "lizard" || pl2 === "paper") {
      return "Player 2 Won!";
    } else {
      return "Player 1 Won!";
    }
  }
};

console.log(rpsls("rock", "paper"));
