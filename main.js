// query selectors
var gameTiles = document.querySelectorAll('.boxes');
var turnIndicator = document.querySelector('#turnIndicator');
var winsCounterTitan = document.querySelector('#winsTitan');
var winsCounterWarlock = document.querySelector('#winsWarlock');
var endModal = document.querySelector('#endModal');
var endText = document.querySelector('#endText');

// data
var game = new Game();

// event listeners
window.addEventListener('load', displayTurn);

gameTiles.forEach(function (element) {
  element.addEventListener('click', gameFlow, { once: true });
});

// functions
function displayTurn() {
  turnIndicator.innerText = `${game.currentPlayer}, it's your turn!`;
}

function displayToken(e) {
  targetTile = e.target;
  targetTile.classList.add(
    game.currentPlayer === 'titan'
      ? 'placed-token-warlock'
      : 'placed-token-titan'
  );
}

function updateScore() {
  winsCounterTitan.innerText = game.titan.wins;
  winsCounterWarlock.innerText = game.warlock.wins;
}

function checkForEnd() {
  if (game.isWon) {
    endModal.classList.add('active');
    endText.innerText = `Congratulations, ${
      game.currentPlayer === 'titan' ? 'Warlock' : 'Titan'
    }! 
      You've won!
      
      Get ready for the next game!`;
    restart();
  } else if (game.isDraw) {
    endModal.classList.add('active');
    endText.innerText = `No winner this time, 

    Get ready for the next game!`;
    restart();
  }
}

function restart() {
  gameTiles.forEach((element) => {
    element.classList.remove('placed-token-warlock');
    element.classList.remove('placed-token-titan');
  });
  game.restartGame();
  endModal.classList.add('active');
  gameTiles.forEach(function (element) {
    element.removeEventListener('click', gameFlow, { once: true });
  });
  gameTiles.forEach(function (element) {
    element.addEventListener('click', gameFlow, { once: true });
  });
  setTimeout(() => {
    endModal.classList.remove('active');
  }, 3500);
}

function gameFlow(e) {
  game.takeTurn(e);
  displayToken(e);
  updateScore();
  checkForEnd();
  displayTurn();
}
