const { expect } = require('chai');
const path = require('path');

const Game = require(path.join(__dirname, '../game'));

describe('Game Logic', function() {
  before(function() {
    Game.play();
  });

  it('should start with X\'s turn', function() {
    expect(Game.gameState.XTurn).to.be.true;
  });

  it('should alternate turns', function() {
    expect(false).to.be.true;
  });

  it('should detect when a player has won', function() {
    expect(false).to.be.true;
  });

  it('should detect when the game is a draw', function() {
    expect(false).to.be.true;
  });
});