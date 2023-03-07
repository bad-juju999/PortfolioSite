let playerSelection = "";
const computerOptions = ["rock", "paper", "scissors"];
let computerSelection = "";
let winCounter = 0;
let lossCounter = 0;
let tieCounter = 0;

//switch cases for all posible outcomes of game + display results
function determineWinner() {
  let computerSelection = computerOptions[Math.floor(Math.random() * computerOptions.length)];
  console.log("computer selection: " + computerSelection);

  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        console.log("Tie");
        tieResult();
        break;
      case "paper":
        console.log("you lose");
        lossResult();
        break;
      case "scissors":
        console.log("W");
        winResult();
        break;
    }
  }

  if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        console.log("You Win");
        winResult();
        break;
      case "paper":
        console.log("Tie");
        tieResult();
        break;
      case "scissors":
        console.log("Fuckin' Loser");
        lossResult();
        break;
    }
  }

  if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        console.log("Loss");
        lossResult();
        break;
      case "paper":
        console.log("Win");
        winResult();
        break;
      case "scissors":
        console.log("Tie");
        tieResult();
        break;
    }
  }

  //functions for displaying result of game + updating winCounter
  function winResult() {
    document.getElementById("displayWinner").style.display = "block";
    winCounter += 1;
    document.getElementById("displayWinCounter").innerText = "Wins: " + winCounter;
  }

  function lossResult() {
    document.getElementById("displayLoser").style.display = "block";
    lossCounter += 1;
    document.getElementById("displayLossCounter").innerText = "Losses: " + lossCounter;
  }
  function tieResult() {
    document.getElementById("displayTie").style.display = "block";
    tieCounter += 1;
    document.getElementById("displayTieCounter").innerText = "Ties: " + tieCounter;
  }

  //removes displayed result after x amount of ms
  setTimeout(clearResult, 750);
}

//functions connected to html buttons
function selectRock() {
  playerSelection = "rock";
  determineWinner();
}
function selectPaper() {
  playerSelection = "paper";
  determineWinner();
}
function selectScissors() {
  playerSelection = "scissors";
  determineWinner();
}

//next step is to maybe look at react and see how t odo an animation after clicking a button ooor try to figure out how to make random selection from array for compuerSelection var

//removes display result from view after
function clearResult() {
  document.getElementById("displayWinner").style.display = "none";
  document.getElementById("displayLoser").style.display = "none";
  document.getElementById("displayTie").style.display = "none";
}
