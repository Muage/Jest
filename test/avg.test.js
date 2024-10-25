const avg = require('./avg');

test('average 3 + 5 to equal 4', () => {
    expect(avg(3, 5)).toBe(4);
});