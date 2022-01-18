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
    this.currentBoard = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = null;
    this.titanTurn = this.randomizeStartTurn();
    this.tokensPlaced = 0;
    this.isWon = false;
    this.isDraw = false;
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

  takeTurn(e) {
    var id = e.target.id;
    if (!gameTiles.id) {
      this.currentBoard.splice(id, 1, this.currentPlayer);
      this.tokensPlaced++;
      this.checkForWin();
      this.checkForDraw();
      this.turnEnd();
    }
  }

  turnEnd() {
    this.titanTurn = !this.titanTurn;
    this.currentPlayer = this.currentPlayer === 'titan' ? 'warlock' : 'titan';
  }

  checkForWin() {
    var winTopAcc = [0, 1, 2]; //[1,1,1,0,0,0,0,0,0];
    var winMidAcc = [3, 4, 5]; //[0,0,0,1,1,1,0,0,0];
    var winBotAcc = [6, 7, 8]; //[0,0,0,0,0,0,1,1,1];
    var winColLef = [0, 3, 6]; //[1,0,0,1,0,0,1,0,0];
    var winColMid = [1, 4, 7]; //[0,1,0,0,1,0,0,1,0];
    var winColRig = [2, 5, 8]; //[0,0,1,0,0,1,0,0,1];
    var winDiagDn = [0, 4, 8]; //[1,0,0,0,1,0,0,0,1];
    var winDiagUp = [2, 4, 6]; //[0,0,1,0,1,0,1,0,0];
    var wins = [
      winTopAcc,
      winMidAcc,
      winBotAcc,
      winColLef,
      winColMid,
      winColRig,
      winDiagDn,
      winDiagUp,
    ];

    var titanIncrementer = -1;
    var titanWins = this.currentBoard.map((index) => {
      if (index === 'titan') {
        titanIncrementer++;
        return titanIncrementer;
      } else {
        titanIncrementer++;
        return '';
      }
    });

    var warlockIncrementer = -1;
    var warlockWins = this.currentBoard.map((index) => {
      if (index === 'warlock') {
        warlockIncrementer++;
        return warlockIncrementer;
      } else {
        warlockIncrementer++;
        return '';
      }
    });

    for (var i = 0; i < wins.length; i++) {
      if (
        wins[i].every((possibleWins) => {
          return titanWins.includes(possibleWins);
        })
      ) {
        this.isWon = true;
        this.titan.wins++;
      }
    }

    for (var i = 0; i < wins.length; i++) {
      if (
        wins[i].every((possibleWins) => {
          return warlockWins.includes(possibleWins);
        })
      ) {
        this.isWon = true;
        this.warlock.wins++;
      }
    }
  }

  checkForDraw() {
    if (this.tokensPlaced === 9 && !this.isWon) {
      this.isDraw = true;
    }
  }

  restartGame() {
    
  }
}


