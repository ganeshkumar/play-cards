const Deck = require('../src/deck');
const Card = require('../src/card');
const Player = require('../src/player');

describe( 'Deck', () => {
  test(' is a object', () => {
    expect( Deck ).toBeInstanceOf( Object );
  });

  test(' should create new object', () => {
    card = new Card('Hearts', 5);
    deck = new Deck();
    deck.cards.push(card);

    expect( deck.cards.length ).toBe( 1 );

    deck_card = deck.cards.pop();
    expect( deck_card.suit ).toBe( 'Hearts' );
    expect( deck_card.value ).toBe( 5 );
  });

  test(' calling method:createDeck() should create new deck of cards', () => {
    deck = new Deck();
    deck.createDeck();

    expect( deck.cards.length ).toBe( 52 );
  });

  test(' calling method:createDeck(suit, cardValues) should create new deck of cards', () => {
    deck = new Deck();
    deck.createDeck(['hearts', 'spades'], [10, 9, 8]);

    expect( deck.cards.length ).toBe( 6 );

    expect( deck.cards[0].suit ).toBe( 'hearts' );
    expect( deck.cards[0].value ).toBe( 10 );

    expect( deck.cards[1].suit ).toBe( 'hearts' );
    expect( deck.cards[1].value ).toBe( 9 );

    expect( deck.cards[2].suit ).toBe( 'hearts' );
    expect( deck.cards[2].value ).toBe( 8 );


    expect( deck.cards[3].suit ).toBe( 'spades' );
    expect( deck.cards[3].value ).toBe( 10 );

    expect( deck.cards[4].suit ).toBe( 'spades' );
    expect( deck.cards[4].value ).toBe( 9 );

    expect( deck.cards[5].suit ).toBe( 'spades' );
    expect( deck.cards[5].value ).toBe( 8 );
  });

  test(' calling method:createDeck(suit, cardValues) should create new deck of cards', () => {
    deck = new Deck();
    deck.createDeck(['hearts', 'spades'], [10, 9, 8]);

    // before shuffle
    let before_shuffle_cards = deck.cards;
    expect( deck.cards.length ).toBe( 6 );

    deck.shuffleDeck();

    // after shuffle
    expect( deck.cards ).toEqual( expect.arrayContaining(before_shuffle_cards) );
  });

  test(' calling method:deal with player should give cards from deck', () => {
    deck = new Deck();
    deck.createDeck(['hearts', 'spades'], [10, 9, 8]);
    player = new Player('tim');

    expect( deck.cards.length ).toBe( 6 );
    expect( player.cardsInHand.length ).toBe( 0 );

    deck.deal(player);

    expect( deck.cards.length ).toBe( 3 );
    expect( player.cardsInHand.length ).toBe( 3 );
  });

  test(' calling method:deal without player should return exception', () => {
    deck = new Deck();
    deck.createDeck(['hearts', 'spades'], [10, 9, 8]);

    expect( deck.cards.length ).toBe( 6 );

    let exception = deck.deal();

    expect( exception.error ).toBe( 'PlayerNotFound' );
    expect( exception.message ).toBe( 'player not found' );
  });

  test(' calling method:deal with player having 3 cards in hand should return exception', () => {
    deck = new Deck();
    deck.createDeck(['hearts', 'spades'], [10, 9, 8]);
    player = new Player('tim', [deck.cards.pop(), deck.cards.pop(), deck.cards.pop()]);

    expect( deck.cards.length ).toBe( 3 );
    expect( player.cardsInHand.length ).toBe( 3 );

    let exception = deck.deal(player);

    expect( exception.error ).toBe( 'PlayerCardsExceed' );
    expect( exception.message ).toBe( 'player already have enough cards' );
  });

  test(' calling method:deal with player and no cards left in deck should return exception', () => {
    deck = new Deck();
    player = new Player('tim');

    expect( deck.cards.length ).toBe( 0 );

    let exception = deck.deal(player);

    expect( exception.error ).toBe( 'DeckEmpty' );
    expect( exception.message ).toBe( 'deck is empty!' );
  });

  test(' calling method:reset should clear cards from deck', () => {
    card = new Card('Hearts', 5);
    deck = new Deck();
    deck.cards.push(card);

    expect( deck.cards.length ).toBe( 1 );
    deck.reset();
    expect( deck.cards.length ).toBe( 0 );
  });
});
