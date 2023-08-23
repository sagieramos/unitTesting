import characterCount from '../characterCount';

test('characterCount(\'Microverse\') returns 10', () => {
  expect(characterCount('Microverse'))
  .toBe(10);
})

test('characterCount(\'Hello World\') returns 10', () => {
  expect(characterCount('Hello World'))
  .toBe(10);
})

test('characterCount(\'\') throw an error for empty string', () => {
  expect(() => characterCount(''))
  .toThrow('String length should be between 1 and 10 characters!');
})

test('characterCount(\'this string is longer than 10\') throw an error for string >10', () => {
  expect(() => characterCount('This string is longer than 10'))
  .toThrow('String length should be between 1 and 10 characters!');
})

