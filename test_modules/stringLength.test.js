import stringLength from '../stringLength';

test('stringLength(\'Microverse\') returns 10', () => {
  expect(stringLength('Microverse'))
  .toBe(10);
})

test('stringLength(\'Hello World\') returns 10', () => {
  expect(stringLength('Hello World'))
  .toBe(10);
})

test('stringLength(\'\') throw an error for empty string', () => {
  expect(() => stringLength(''))
  .toThrow('String length should be between 1 and 10 characters!');
})

test('stringLength(\'this string is longer than 10\') throw an error for string >10', () => {
  expect(() => stringLength('This string is longer than 10'))
  .toThrow('String length should be between 1 and 10 characters!');
})

