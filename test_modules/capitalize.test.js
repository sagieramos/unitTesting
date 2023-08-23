import capitalize from "../capitalize";

test('capitalize function capitalizes the first character', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});