/*
Game Flow:
player1 chooses an empty tile
code checks if tile is empty
if so, place the name for the current turn (ie. titan/warlock) in the index of current game board
increase the tokenPlaced counter
check for wins
check for draws
change turn

*/

class Game {
  constructor() {
    this.titan = new Player('one', 'titan');
    this.warlock = new Player('two', 'warlock');
    this.currentBoard = ['','','','','','','','',''];
    this.currentPlayer = null;
    this.titanTurn = this.randomizeStartTurn();
    this.tokensPlaced = 0;
  }

  randomizeStartTurn() {
    if (Date.now() % 2 === 0) {
      this.currentPlayer = 'titan';
      return true;
    } else {
      this.currentPlayer = 'warlock';
      return false;
    }
  }

  placeToken(e) {
    var id = e.target.id;
    if (!gameTiles.id) {
      this.currentBoard.splice(id, 1, this.currentPlayer);
      this.tokensPlaced++;
    }
  }
  
  turnEnd() {
    this.titanTurn = !this.titanTurn;
    this.currentPlayer = this.currentPlayer === 'titan' ? 'warlock' : 'titan';
  }
  
  checkForWin() {
    var winTopAcc = [0,1,2] //[1,1,1,0,0,0,0,0,0];
    var winMidAcc = [3,4,5] //[0,0,0,1,1,1,0,0,0];
    var winBotAcc = [6,7,8] //[0,0,0,0,0,0,1,1,1];
    var winColLef = [0,3,6] //[1,0,0,1,0,0,1,0,0];
    var winColMid = [1,4,7] //[0,1,0,0,1,0,0,1,0];
    var winColRig = [2,5,8] //[0,0,1,0,0,1,0,0,1];
    var winDiagDn = [0,4,8] //[1,0,0,0,1,0,0,0,1];
    var winDiagUp = [2,4,6] //[0,0,1,0,1,0,1,0,0];
    var wins = [winTopAcc,winMidAcc,winBotAcc,winColLef,winColMid,winColRig,winDiagDn,winDiagUp];
  }
  
  checkForDraw() {
    
  }
  
}