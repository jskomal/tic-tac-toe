// query selectors
var gameTiles = document.querySelectorAll('.boxes');
var turnIndicator = document.querySelector('#turnIndicator');


// data
var game = new Game();


// event listeners
window.addEventListener('load', displayTurn)

gameTiles.forEach(function (element) {
  element.addEventListener('click', gameFlow)
})


// functions
function displayTurn() {
  turnIndicator.innerText = `${game.currentPlayer}, it's your turn!`
}

function displayToken(e) {
  targetTile = e.target;
  targetTile.classList.add((game.currentPlayer === 'titan' ? 'placed-token-warlock' : 'placed-token-titan'))
}

function gameFlow(e) {
  game.takeTurn(e);
  displayToken(e);
  displayTurn();
}

