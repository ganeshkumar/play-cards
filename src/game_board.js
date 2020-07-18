const Player = require('../src/player');
const Card = require('../src/card');
const Category = require('../src/category');
const Deck = require('../src/deck');


class GameBoard {
  constructor() {
    this.players = [];
    this.deck = '';
    this.winner = '';
  }

  reset() {
    this.players.forEach(player => {
      player.flushCards();
    });
    this.deck.reset();
  }

  start(playerNames) {
    playerNames.forEach(name => {
      this.players.push(new Player(name));
    });
    let deck = new Deck();
    this.deck = deck;
    deck.createDeck();
    deck.shuffleDeck();
    this.players.forEach(player => {
      deck.deal(player);
    });
    return this.showWinner();
  }

  showWinner() {
    let category = new Category();
    let winner = { data: '' };
    this.players.forEach(player => {
      if (player.isATrial())
      {
        category.HavingTrialCards.push(player);
      }
      else if (player.isInSequence())
      {
        category.HavingSquenceCards.push(player);
      }
      console.log('------Player details-----------');
      console.log(player);
    });

    if (category.HavingTrialCards.length > 0)
    {
      this.calCulateRank(category.HavingTrialCards, winner);
    }
    else if(category.HavingSquenceCards.length > 0)
    {
      this.calCulateRank(category.HavingSquenceCards, winner);
    }
    this.winner = winner;
    return this.winner.data === '' ? 'No Body is a winner' : this.winner;
  }


  calCulateRank(players, winner) {
    if (winner.data != '') {
      return winner;
    }

    players.forEach(player => {
      let total = player.calculateRank();
      if (winner.data === '' || winner.data.player.totalCardsRank >  total)
      {
        winner.data = player;
      }
    });
  }
}

module.exports = GameBoard;
