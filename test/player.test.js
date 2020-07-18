const Player = require('../src/player');
const Card = require('../src/card');

describe( 'Player', () => {
  test(' is a object', () => {
    expect( Player ).toBeInstanceOf( Object );
  });

  test(' should create new object', () => {
    player = new Player('Tim', []);
    expect( player.name ).toBe( 'Tim' );
    expect( player.cardsInHand ).toStrictEqual( [] );
  });

  test(' should flushCards for player', () => {
    cards = [new Card('hearts', 'K'), new Card('spades', 9)]
    player = new Player('Tim', cards);
    expect( player.cardsInHand.length ).toBe( 2 );

    player.flushCards();

    expect( player.cardsInHand.length ).toBe( 0 );
  });
});
