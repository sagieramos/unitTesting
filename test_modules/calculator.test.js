import Calculator from "../calculator";

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two numbers. 1 + 2 = 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('adds negative and positive numbers. -1 + 2 = 1', () => {
      expect(calculator.add(-1, 2)).toBe(1);
    });

    test('adds decimals. 0.1 + 0.2 = 0.3', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    test('subract a number from another number. 1 - 2 = -1', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
      });
  });

  describe('subtract', () => {
    test('subract from a negative number. -1 - 2 = -3', () => {
        expect(calculator.subtract(-1, 2)).toBe(-3);
      });
  });

  describe('subtract', () => {
    test('subract from a decimal number. 0.1 - 0.2 = -0.1', () => {
        expect(calculator.subtract(0.1, 0.2)).toBe(-0.1);
      });
  });

  describe('divide', () => {
    test('divides two positive numbers. 10/2 = 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
      });
  });

  test('divides a negative number by a positive number. -10/2 = -5', () => {
    expect(calculator.divide(-10, 2)).toBe(-5);
  });

  test('divides a positive number by a negative number. 12/-2 = -6', () => {
    expect(calculator.divide(12, -2)).toBe(-6);
  });

  test('divides a negative number by a negative number. -12/-2 = 6', () => {
    expect(calculator.divide(-12, -2)).toBe(6);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
  });

  describe('multiply', () => {
    test('multiplies two positive numbers. 2 * 3 = 6', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });

      test('multiplies a negative number by a positive number. -2 * 4 = -8', () => {
        expect(calculator.multiply(-2, 4)).toBe(-8);
      }); 

      test('multiplies a positive number by a negative number. 3 * -4 = -12', () => {
        expect(calculator.multiply(3, -4)).toBe(-12);
      });

      test('multiplies a negative number by a negative number. -4 * -5 = 20', () => {
        expect(calculator.multiply(-4, -5)).toBe(20);
      });

      test('multiplies by zero', () => {
        expect(calculator.multiply(2, 0)).toBe(0);
        expect(calculator.multiply(0, 3)).toBe(0);
        expect(calculator.multiply(0, 0)).toBe(0);
      });
  });
});
