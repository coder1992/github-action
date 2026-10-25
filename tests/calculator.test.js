const { add, subtract, multiply, divide } = require('../src/calculator');

test('1 + 1 = 2', () => {
  expect(add(1, 1)).toBe(2);
});

test('5 - 3 = 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('3 * 4 = 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('除以 0 应该抛出异常', () => {
  expect(() => divide(1, 0)).toThrow('除数不能为 0');
});