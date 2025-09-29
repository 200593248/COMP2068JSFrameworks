// lab2.js


const input = require("readline-sync");

let rps = ["rock", "paper", "scissors"];

let userChoice = input.question(
  "Welcome to Rock Paper Scissors!\nPlease enter rock, paper, scissors or @ to quit:\n>> "
);

while (userChoice !== "@") {
  userChoice = userChoice.toLowerCase();

  let computerChoice = rps[Math.floor(Math.random() * rps.length)];

  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`Computer won! Computer choice: ${computerChoice}\n`);
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You won! Computer choice: ${computerChoice}\n`);
  } else if (userChoice === computerChoice) {
    console.log(`It's a tie! Computer choice: ${computerChoice}\n`);
  } else {
    console.log(" Invalid input. Please try again with rock, paper, or scissors.\n");
  }

  // Ask again
  userChoice = input.question(
    "Welcome to Rock Paper Scissors!\nPlease enter rock, paper, scissors or @ to quit:\n>> "
  );
}

console.log("Thank you for playing!");
