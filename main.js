// query selectors
var gameTiles = document.querySelectorAll('.boxes');
var turnIndicator = document.querySelector('#turnIndicator');
var winsCounterTitan = document.querySelector('#winsTitan');
var winsCounterWarlock = document.querySelector('#winsWarlock');
var endScreen = document.querySelector('#endScreen');
var endText = document.querySelector('#endText');

// data
var game = new Game();

// event listeners
window.addEventListener('load', displayTurn);

gameTiles.forEach(function (element) {
  element.addEventListener('click', gameFlow, {once:true});
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
    endScreen.classList.remove('hidden');
    endText.innerText = `Congratulations, ${
      game.currentPlayer === 'titan' ? 'Warlock' : 'Titan'
    }, 
      You've won!
      Let's go again!`;
    restart();
  } else if (game.isDraw) {
    endScreen.classList.remove('hidden');
    endText.innerText = `No winner this time, 
    Let's go again!`;
    restart();
  }
}

function restart() {
  gameTiles.forEach((element) => {
    element.classList.remove('placed-token-warlock');
    element.classList.remove('placed-token-titan');
  });
  game.restartGame();
  setTimeout(() => {
    endScreen.classList.add('hidden');
  }, 2500);
  gameTiles.forEach(function (element) {
    element.removeEventListener('click', gameFlow, { once: true });
  });
  gameTiles.forEach(function (element) {
    element.addEventListener('click', gameFlow, { once: true });
  });
}

function gameFlow(e) {
  game.takeTurn(e);
  displayToken(e);
  updateScore();
  checkForEnd();
  displayTurn();
}
