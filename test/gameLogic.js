const { expect } = require('chai');
const path = require('path');

const { logic, gameState } = require(path.join(__dirname, '../game'));

describe('Game Logic', function() {
  before(function() {
    logic.play();
  });

  it('should start with X\'s turn', function() {
    expect(gameState.XTurn).to.be.true;
  });

  it('should alternate turns', function() {
    logic.takeTurn(1, 1);
    expect(gameState.XTurn).to.be.false;
    logic.takeTurn(0, 1);
    expect(gameState.XTurn).to.be.true;
    logic.takeTurn(0, 0);
    expect(gameState.XTurn).to.be.false;
  });

  it('should detect when a player has won', function() {
    expect(false).to.be.true;
  });

  it('should detect when the game is a draw', function() {
    expect(false).to.be.true;
  });
});