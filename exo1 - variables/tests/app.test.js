const username = require('../app.js');

test('variable not null', () => {
  expect(username).not.toBeNull();
});

test('variable not undefined', () => {
    expect(username).not.toBeUndefined();
});

test('variable lenght more than 0', () => {
    expect(username.length).toBeGreaterThan(0);
});

test('variable is a string', () => {
    expect(typeof(username)).toEqual("string");
});

