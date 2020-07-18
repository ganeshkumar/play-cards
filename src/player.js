class Player {
    constructor(name, cardsInHand = []) {
        this.name = name;
        this.cardsInHand = cardsInHand;
        this.totalCardsRank = 0;
    }

    flushCards() {
      if(this.cardsInHand.length > 0)
      {
        this.cardsInHand = [];
      }
    }

    isInSequence() {
      return ((this.cardsInHand[0].rank + 1) === this.cardsInHand[1].rank &&
              (this.cardsInHand[1].rank + 1) === this.cardsInHand[2].rank)
    }

    isATrial() {
      return (this.cardsInHand[0].rank === this.cardsInHand[1].rank &&
              this.cardsInHand[1].rank === this.cardsInHand[2].rank)
    }

    calculateRank() {
      let count = 0;
      this.cardsInHand.forEach(card => {
          count += card.rank;
      });
      this.totalCardsRank = count;
      return this.totalCardsRank;
    }
}

module.exports = Player
