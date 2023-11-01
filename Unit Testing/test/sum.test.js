const sumNumber = require('../src/sum');

test('sumNumber(3,2) must be 5', () => {
    const result = sumNumber(3, 2);
    expect(result).toBe(5);
});