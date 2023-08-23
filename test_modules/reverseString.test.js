import reverseString from "../reverseString";

test('reverseString(\'hello world\') returns \'dlrow olleh\'', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });