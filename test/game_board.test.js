const GameBoard = require('../src/game_board');
const Player = require('../src/player');
const Deck = require('../src/deck');
const Card = require('../src/card');

describe( 'GameBoard', () => {
  test(' is a object', () => {
    expect( GameBoard ).toBeInstanceOf( Object );
  });

  test(' should create new object', () => {
    let player = new Player('Tim');
    let deck = new Deck();

    let gameBoard = new GameBoard([player], deck);

    expect( gameBoard.players.length ).toBe( 1 );
    expect( gameBoard.players[0] ).toBeInstanceOf( Player );
    expect( gameBoard.deck ).toBeInstanceOf( Deck );
  });

  test(' should reset a game', () => {
    let playerCards = [new Card('hearts', 'K'), new Card('spades', 9)]
    let deckCards = [new Card('hearts', 'Q'), new Card('spades', 2)]
    let player = new Player('Tim', playerCards);
    let deck = new Deck();
    deck.cards = deckCards;

    let gameBoard = new GameBoard([player], deck);

    //before reset
    expect( gameBoard.players[0].cardsInHand.length ).toBe( 2 );
    expect( gameBoard.deck.cards.length ).toBe( 2 );

    gameBoard.reset();

    //after reset
    expect( gameBoard.players[0].cardsInHand.length ).toBe( 0 );
    expect( gameBoard.deck.cards.length ).toBe( 0 );
  });

  test(' should return winner if player1 cards is in sequence', () => {
    let player1Cards = [new Card('hearts', '4', 4), new Card('spades', 5, 5), new Card('spades', 6, 6)];
    let player2Cards = [new Card('hearts', '8', 8), new Card('spades', 1, 1), new Card('spades', 5, 5)];
    let player3Cards = [new Card('hearts', '2', 2), new Card('spades', 7, 7), new Card('spades', 1, 1)];

    let player1 = new Player('Tim', player1Cards);
    let player2 = new Player('Jim', player2Cards);
    let player3 = new Player('Ben', player3Cards);

    deck = new Deck();
    gameBoard = new GameBoard([player1, player2, player3], deck)

    //before calling showWinner
    expect( gameBoard.winner ).toStrictEqual( '' );

    let result = gameBoard.showWinner();

    //after calling showWinner
    expect( result.data ).toBe( player1 );
  });


  test(' should return winner as player1 if player1 cards is in sequence and player3 cards is a Trial', () => {
    let player1Cards = [new Card('hearts', '4', 4), new Card('spades', 5, 5), new Card('spades', 6, 6)];
    let player2Cards = [new Card('hearts', '8', 8), new Card('spades', 1, 1), new Card('spades', 5, 5)];
    let player3Cards = [new Card('hearts', '7', 7), new Card('spades', 7, 7), new Card('spades', 7, 7)];

    let player1 = new Player('Tim', player1Cards);
    let player2 = new Player('Jim', player2Cards);
    let player3 = new Player('Ben', player3Cards);

    deck = new Deck();
    gameBoard = new GameBoard([player1, player2, player3], deck)

    //before calling showWinner
    expect( gameBoard.winner ).toStrictEqual( '' );

    let result = gameBoard.showWinner();

    // after calling showWinner
    expect( result.data.name ).toBe( 'Ben' );
  });


  test(' should return winner if player3 cards is a Trial', () => {
    let player1Cards = [new Card('hearts', '1', 1), new Card('spades', 5, 5), new Card('spades', 3, 3)];
    let player2Cards = [new Card('hearts', '8', 8), new Card('spades', 1, 1), new Card('spades', 5, 5)];
    let player3Cards = [new Card('hearts', '7', 7), new Card('spades', 7, 7), new Card('spades', 7, 7)];

    let player1 = new Player('Ben', player1Cards);
    let player2 = new Player('Jim', player2Cards);
    let player3 = new Player('Tim', player3Cards);

    deck = new Deck();
    gameBoard = new GameBoard([player1, player2, player3], deck)

    //before calling showWinner
    expect( gameBoard.winner ).toStrictEqual( '' );

    let result = gameBoard.showWinner();

    //after calling showWinner
    expect( result.data.name ).toBe( 'Tim' );
  });
});
