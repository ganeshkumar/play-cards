class Card {
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank
    }

    static sort(a, b) {
      return a.rank - b.rank;
    }
}

module.exports = Card
