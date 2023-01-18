let showText = document.querySelector("h1");
let counter = 0;
let gameStarted = false;

function clearDisply() {
  let button = document.querySelector(".button-group");
  button.style.display = "none";
}

function reloadAll() {
  location.reload();
}

function reset() {
  if (counter < 10) {
    showText.innerText = "Ops, You Lose The Game";
    showText.style.color = "red";
    setTimeout(reloadAll, 3000);
  }
}

console.log(counter);

function playGame() {
  gameStarted = true;
  setTimeout(reset, 2000);
}

function clickedCount() {
  if (gameStarted) {
    counter++;
  }

  showText.innerText = counter;
  if (counter == 10) {
    showText.innerText = "Congrass! You won the game ";
    showText.style.color = "green";
    clearDisply();
    setTimeout(reloadAll, 4000);
  }
}
