function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
}

function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  const status = getWinStatus(playerSelection, computerSelection);
  const resultText = getResult(playerSelection, computerSelection, status);

  const resultH3 = document.querySelector("#result h3");
  resultH3.textContent = resultText;

  switch (status) {
    case "win":
      wins++;
      break;
    case "draw":
      draws++;
      break;
    case "lose":
      losses++;
      break;
  }

  const total = `You finished with ${wins} wins, ${draws} draws and ${losses} losses!`;
  const totalString = document.getElementById("total");
  totalString.textContent = total;
}

function getResult(playerSelection, computerSelection, status) {
  const verb = getVerb(status);
  return `You ${status}! ${
    playerSelection[0].toUpperCase() + playerSelection.slice(1)
  } ${verb} ${computerSelection}!`;
}

function getWinStatus(playerSelection, computerSelection) {
  let status;
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          status = "draw";
          break;
        case "paper":
          status = "lose";
          break;
        case "scissors":
          status = "win";

          break;

        default:
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "rock":
          status = "win";
          break;
        case "paper":
          status = "draw";
          break;
        case "scissors":
          status = "lose";
          break;

        default:
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "rock":
          status = "lose";
          break;
        case "paper":
          status = "win";
          break;
        case "scissors":
          status = "draw";
          break;

        default:
          break;
      }

    // eslint-disable-next-line no-fallthrough
    default:
      break;
  }
  return status;
}

function getVerb(status) {
  switch (status) {
    case "win":
      return "beats";
    case "lose":
      return "is defeated by";
    case "draw":
      return "draws against";

    default:
      break;
  }
}

let wins = 0;
let draws = 0;
let losses = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
