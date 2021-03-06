var fs = require('fs');
var _ = require('lodash');

// decide whether or not to merge a given PR
// default behavior is that the vote must be unanimous
// example API:
// {  }
exports.canMerge = function (arg) {
  // body
};

// decide whether or not to merge a given PR
// default behavior is that the vote must be unanimous
// example API:
// {  }
exports.canClose = function (arg) {
  // body
};

// decide whether or not to open a given PR
// default behavior is whenever the code changes
// example API:
// {  }
exports.canOpen = function (arg) {
  // body
};


// play the game
var play = exports.play = function () {
  var state = require('./state.json');

  /*
  if (!canPlay(state)) {
    return;
  }

  // stop the game if there is already a winner
  if (winningPlayer(state)) {
    return;
  }
  */

  _.each(state.players, function (data, name) {
    data.points += 1;
    console.log(name + ' now has ' + data.points + ' points');
  });

  // bookkeeping
  state.turn += 1;
  state.lastTurn = Date.now();

  // save changes
  fs.writeFileSync('./state.json', JSON.stringify(state));
};


// determines when next move runs
// move every 5 minutes
var canPlay = exports.canPlay = function (state) {
  return Date.now() - state.lastTurn >= (1000 * 60 * 5);
}

// returns winning player, else undefined
var winningPlayer = exports.winner = function (state) {
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

play();
