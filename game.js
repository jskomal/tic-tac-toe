class Game {
  constructor() {
    this.playerOne = new Player();
    this.playerTwo = new Player().becomePlayerTwo();
    this.currentBoard = [];
    this.currentTurn = 'Titan';
  }

  
}

