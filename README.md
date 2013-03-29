# nomic-game
A game of [Nomic](http://en.wikipedia.org/wiki/Nomic), implemented in Node.js to be played on Github. To be used with nomic-bot.

## What is Nomic?
In short:

> Nomic is a game in which changing the rules is a move. In that respect it differs from almost every other game.
> The primary activity of Nomic is proposing changes in the rules, debating the wisdom of changing them in that way, voting on the changes, deciding what can and cannot be done afterwards, and doing it.
> Even this core of the game, of course, can be changed.
> —Peter Suber, The Paradox of Self-Amendment

This implementation of Nomic is to be played on Github.
Changes to the rules are submitted as Pull Requests (PRs), and voted in the comments on Github.
A bot then tallies the votes and merges the changes accordingly.

This repo represents a starting game, with a basic set of rules.


## Initial Rules
See the implementation of these rules in `game.js`.

### PRs
1. PRs can be submitted by anyone, at any time. This includes people not even playing the game.
2. PRs are merged as soon as they receive a majority vote from players.
3. PRs are closed as soon as a majority votes against them.
4. PRs are re-opened if a revision to the code is made.

### Scoring
1. If a player's PR is merged, they receive 5 points.
2. If a player's PR is closed, they lose 3 points.
3. For every day a player doesn't vote on an open PR, they lose 1 point.
4. Each player that votes in favor of a PR that is merged receives 3 points.
5. Each player that votes against a PR that is closed receives 3 points.

### Winning
1. A player wins as soon as they obtain 100 points.


## Pro Tips
* You can modify the state of the game at any time by editing `state.json`.
    - You can add new players, or remove inactive accordingly


## Setting up a Game
1. Fork this repo
2. Clone your fork
3. `cp example-state.json state.json`
4. Add yourself and your players' Github usernames to `state.json`.
5. `git push`

X. Set up a bot via the instructions on [nomic-bot].


## Playing
Each player must fork the bot-owned repo.

## License
MIT
