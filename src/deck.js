const Card = require('../src/card');
const CustomException = require('../src/custom_exception');

class Deck {
    constructor() {
      this.cards = [];
    }

    createDeck(
      suits = ['spades', 'hearts', 'diamonds', 'clubs'],
      cardValues = [1, 'K', 'Q', 'J', 10, 9, 8 ,7, 6, 5, 4, 3, 2]) {

      const ranks = [1, 13, 12, 11, 10, 9, 8 ,7, 6, 5, 4, 3, 2];
      suits.forEach(suit => {
        cardValues.forEach(cardValue => {
          this.cards.push(new Card(suit, cardValue, ranks[cardValues.indexOf(cardValue)]));
        })
      })
      this.cards;
    }

    shuffleDeck() {
      let counter = this.cards.length, temp, index;
      while(counter) {
        index = Math.floor(Math.random() * counter--);
        temp = this.cards[counter];
        this.cards[counter] = this.cards[index];
        this.cards[index] = temp;
      }
      this.cards;
    }

    deal(player = null) {
      if (this.cards.length === 0)
      {
        return new CustomException('DeckEmpty', 'deck is empty!');
      }
      if (player === null)
      {
        return new CustomException('PlayerNotFound', 'player not found');
      }
      else if (player.cardsInHand.length >= 3)
      {
        return new CustomException('PlayerCardsExceed', 'player already have enough cards');
      }

      while(player.cardsInHand.length < 3)
      {
        player.cardsInHand.push(this.cards.pop());
      }
    }

    reset() {
      this.cards = [];
    }
}

module.exports = Deck
