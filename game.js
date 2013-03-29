var fs = require('fs');
var _ = require('lodash');

// decide whether or not to merge a given PR
// default behavior is that the vote must be unanimous
// example API:
// {  }
exports.merge = function (arg) {
  // body
};

// play the game
exports.play = function () {
  var state = require('./state.json');

  // stop the game if there is already a winner
  if (winningPlayer(state.players)) {
    return;
  }

  // save changes
  fs.writeFileSync('./state.json', JSON.stringify(state));
};


// returns winning player, else undefined
var winningPlayer = function (players) {
  var winner,
    winningPoints = 0;

  _.each(players, function (state, name) {
    if (state.points > 1000 && state.winner > winningPoints) {
      winner = name;
      winningPoints = state.points;
    }
  });

  return winner;
};
