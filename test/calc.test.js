const add = require('../src/calc');

describe('加法函数的测试', () => {
  test('0 + 0 = 0', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('1 + 0 = 1', () => {
    expect(add(1, 0)).toBe(1);
  });
});

/*
describe('加法函数的动态测试', () => {
  const tests_normal = [
    {args: [0,          0], expected: 0},
    {args: [2,          3], expected: 5},
    {args: [-4,        -2], expected: -6},
    {args: [-4,        10], expected: 6},
    {args: [1,       1023], expected: 1024},
    {args: [2.6,      3.8], expected: 6.4},
    {args: ['2e2', '3e-2'], expected: 200.03}
  ];

  tests_normal.forEach((t) => {
    test(`${t.args[0]} + ${t.args[1]} = ${t.expected}`, () => {
      expect(add(t.args[0], t.args[1])).toBe(t.expected);
    });
  });

  const tests_ugily = [
    {args: ['a', 'b'], expected: NaN},
    {args: [2,   'a'], expected: NaN},
    {args: [',',   3], expected: NaN}
  ];

  tests_ugily.forEach((t) => {
    test(`${t.args[0]} + ${t.args[1]} = ${t.expected}`, () => {
      expect(add(t.args[0], t.args[1])).toBeNaN();
    });
  });
});
*/
