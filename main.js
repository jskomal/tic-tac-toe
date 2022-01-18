// query selectors
var gameTiles = document.querySelectorAll('.boxes');
var turnIndicator = document.querySelector('#turnIndicator');


// data
var game = new Game();


// event listeners
window.addEventListener('load', displayTurn)

gameTiles.forEach(function (element) {
  element.addEventListener('click', takeTurn)
})


// functions
function displayTurn() {
  turnIndicator.innerText = `${game.currentPlayer}, it's your turn!`
}

function takeTurn(e) {
  game.placeToken(e);
  game.checkForWin();
  game.checkForDraw();
  game.turnEnd();
  displayTurn();
}

