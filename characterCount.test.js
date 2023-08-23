import characterCount from './module/characterCount';

test('Number of characters in "Microverse" is equal 10', () => {
    expect(characterCount('Microverse'))
    .toBe(10);
})

test('Number of characters in "Stanley" is equal 7', () => {
    expect(characterCount('Stanley'))
    .toBe(7);
})