const CustomException = require('../src/custom_exception');

describe( 'CustomException', () => {
  test(' is a object', () => {
    expect( CustomException ).toBeInstanceOf( Object );
  });

  test(' should create new object', () => {
    let exception = new CustomException('CustomException', 'custom exception');
    expect( exception.error ).toBe( 'CustomException' );
    expect( exception.message ).toBe( 'custom exception' );
  });
});
