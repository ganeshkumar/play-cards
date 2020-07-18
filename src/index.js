const GameBoard = require('../src/game_board');

console.log('-------- Welcome to Poker Game ---------');

const players = [];
const times = x => f => {
  if (x > 0) {
    f()
    times (x - 1) (f)
  }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('player1 name:', name => {
  players.push(name);
  rl.question('player2 name:', name => {
    players.push(name);
    rl.question('player3 name:', name => {
      players.push(name);
      rl.question('player4 name:', name => {
        players.push(name);
        rl.close();
      });
    });
  });
});



rl.on("close", function() {
    gameBoard = new GameBoard();
    console.log(gameBoard.start(players));
    process.exit(0);
});
