module.exports.gameState = gameState = {
  board: [[],[],[]],
  XTurn: true
};

module.exports.logic = logic = {
  play() {
    this.resetBoard();
    render(gameState);
  },
  resetBoard() {
    gameState.board.forEach(function(row) {
      for(let i = 0; i < 3; i++) {
        row[i] = '';
      }
    })
  },
  takeTurn(row, col) {
    if (board[row][col]) {
      console.log('There is already a piece here');
    } else {
      board[row][col] = gameState.XTurn ? 'X' : 'O';
      gameState.XTurn = !gameState.XTurn;
      this.checkBoard();
    }
  },
  checkBoard() {
    // Determine if row victory

    // Determine if column victory

    // Determine if diagonal victory

    // Initialize pieceCount to Reduce rows of board
      // Reduce columns of board
        // Count played pieces
    // If board is full (9 pieces)
      // Declare draw
    this.render();
  }
};
module.exports.play = logic.play.bind(logic);

module.exports.render = render = function() {
  const renderString = gameState.board.map(function(row) {
    return row.map(function(piece) {
      return piece || ' ';
    }).join(' | ');
  }).join('\n–––––––––\n');

  console.log(renderString);
};