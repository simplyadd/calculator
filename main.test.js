const calculator = require('./main');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  test('adds positive numbers', () => {
    expect(calculator.add(2, 6)).toBe(8);
  });
});

describe('subtract', () => {
  test('subtracts numbers', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
});

describe('divide', () => {
  test('divide by 0', () => {
    expect(calculator.divide(8, 0)).toBe('UNDEFINED');
  });

  test('divides two numbers', () => {
    expect(calculator.divide(8, 4)).toBe(2);
  });
});

describe('operate', () => {
  test('adds 10 and 8', () => {
    expect(calculator.operate(10, '+', 8)).toBe(18);
  });

  test('subtracts 10 and 8', () => {
    expect(calculator.operate(10, '-', 8)).toBe(2);
  });

  test('multiplies 10 and 8', () => {
    expect(calculator.operate(10, '*', 8)).toBe(80);
  });

  test('divides two numbers', () => {
    expect(calculator.operate(8, '/', 4)).toBe(2);
  });
});
