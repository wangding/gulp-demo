const { oneUpperCaseRule } = require('../src/password-rules');

describe('one uppercase rule', () => {
  test('given no uppercase, test false', () => {
    const result = oneUpperCaseRule('abc');
    expect(result.passed).toBe(false);
  });

  test('given one uppercase, test true', () => {
    const result = oneUpperCaseRule('aBc');
    expect(result.passed).toBe(true);
  });

  test('given two uppercase, test true', () => {
    const result = oneUpperCaseRule('ABc');
    expect(result.passed).toBe(true);
  });
});
