/*
Game Flow:
player1 takes a turn, places token
turn ends, check for wins and change turn
player2 takes a turn, places token
rinse and repeat until checkForWin returns true or CheckForDraw returns true

*/

class Game {
  constructor() {
    this.titan = new Player('one', 'titan');
    this.warlock = new Player('two', 'warlock');
    this.currentBoard = [];
    this.titanTurn = this.randomizeStartTurn();
  }

  randomizeStartTurn() {
    if (Date.now() % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  placeToken(e) {
    if (this.titanTurn) {
      this.currentBoard.splice(e.target.id, 0, this.tokensPlaced);
    }
  }

  turnEnd() {
    this.titanTurn = !this.titanTurn;
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

