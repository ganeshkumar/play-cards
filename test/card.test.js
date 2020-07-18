const Card = require('../src/card');

describe( 'Card', () => {
  test(' is a object', () => {
    expect( Card ).toBeInstanceOf( Object );
  });

  test(' should create new object', () => {
    card = new Card('Hearts', 5, 5);
    expect( card.suit ).toBe( 'Hearts' );
    expect( card.value ).toStrictEqual( 5 );
    expect( card.rank ).toStrictEqual( 5 );
  });

  test(' should sort cards based on ranks', () => {
    cards = [new Card('Hearts', 5, 5), new Card('Spades', 1, 1), new Card('Hearts', 3, 3)];

    //before sort
    expect( cards[0].value ).toBe( 5 );
    expect( cards[1].value ).toBe( 1 );
    expect( cards[2].value ).toBe( 3 );

    cards.sort(Card.sort);

    //after sort
    expect( cards[0].value ).toBe( 1 );
    expect( cards[1].value ).toBe( 3 );
    expect( cards[2].value ).toBe( 5 );
  });
});
