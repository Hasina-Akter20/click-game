let showText = document.querySelector("h1");
let indicator = document.querySelector("p");
let button = document.querySelector(".button-group");
let counter = 0;
let gameStarted = false;

function reloadAll() {
  location.reload();
}

function started() {
  indicator.innerText = "GO...";
  gameStarted = true;
}
function gameOver() {
  indicator.innerText = "Game over.";
  gameStarted = false;
  button.style.display = "none";
  setTimeout(reloadAll, 4000);
}
function reset() {
  if (counter < 10) {
    showText.innerText = "OPS, You Lose The Game.";
    showText.style.color = "red";

    gameOver();
  }
}

function playGame() {
  started();
  setTimeout(reset, 2000);
}

function clickedCount() {
  if (gameStarted) {
    counter++;
  }
  showText.innerText = counter;
  if (counter == 10) {
    showText.innerText = "Congrass! You Won The Game.";
    showText.style.color = "green";
    gameOver();
  }
}
