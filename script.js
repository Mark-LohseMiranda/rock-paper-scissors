let playBtn = document.querySelector("#play");
let gamesPlayed = 0;
let cpuScore = 0;
let playerScore = 0;
let ties = 0;
let initialAnswer = "";

function start() {
  initialAnswer = "";
  initialAnswer = prompt("(R)ock (P)aper or (S)cissors");
  if (!initialAnswer == "" || !initialAnswer == null) {
    checkAnswer();
  } 
}

function checkAnswer() {

  check = initialAnswer.toLowerCase();
  if (check === "r" || check === "p" || check === "s") {
    initialAnswer = check;
    compare();
  } else {
    alert("please use r p or s");
    start();
  }
}


function convert(change) {
  
  if (change === "r") {
    initialAnswer = 0;
  } else if (change === "p") {
    initialAnswer = 1;
  } else {
    initialAnswer = 2;
  }
 
}

function youWin() {
    playerScore++;
    alert(
      "You win!\nGames Played: " +
        gamesPlayed + "\n" +
        "Computer: " + cpuScore + "\n" +
        "You: " +
        playerScore + "\n" +
        "Ties: " +
        ties
    );
    start();
}

function youLose() {
    cpuScore++;
    alert(
        "You lose!\nGames Played: " +
          gamesPlayed + "\n" +
          "Computer: " + cpuScore + "\n" +
          "You: " +
          playerScore + "\n" +
          "Ties: " +
          ties
      );
    start();
}

function youTie() {
    ties++;
    alert(
        "Tie!\nGames Played: " +
          gamesPlayed + "\n" +
          "Computer: " + cpuScore + "\n" +
          "You: " +
          playerScore + "\n" +
          "Ties: " +
          ties
      );
    start();
}
// computerChoice: 0 is rock; 1 is paper; 2 is scissors

function compare() {
  gamesPlayed++;
  convert(initialAnswer);
  let computerChoice = Math.floor(Math.random() * 3);
  if (initialAnswer === computerChoice) {
    youTie();
  } else if ((initialAnswer === 0 && computerChoice === 1) || (initialAnswer === 1 && computerChoice === 2) || (initialAnswer === 2 && computerChoice === 0)) {
    youLose();
  } else {
    youWin();
  }
}

// start();
playBtn.addEventListener("click", start);
