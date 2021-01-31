const exo2 = require('../app.js');

test('age == 18', () => {
  expect(exo2(18)).toBe(true);
});

test('age > 18', () => {
    expect(exo2(35)).toBe(true);
  });

test('age < 18', () => {
    expect(exo2(5)).toBe(false);
});



