// query selectors
var gameTiles = document.querySelectorAll('.boxes');
var turnIndicator = document.querySelector('#turnIndicator');


// data
var game = new Game();


// event listeners
gameTiles.forEach(function (element) {
  element.addEventListener('click', takeTurn)
})


// functions
function takeTurn(e) {
  game.placeToken(e);
}

