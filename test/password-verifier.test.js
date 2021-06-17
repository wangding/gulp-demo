const { verifyPassword } = require('../src/password-verifier');

describe('verifyPassword', () => {
  test('given a failing rule, returns errors', () => {
    const fakeRule = input => ({ passed: false, reason: 'fake reason' });
    const errs = verifyPassword('abc', [fakeRule]);
    expect(errs[0]).toBe('error fake reason');
  });
});

describe('verifyPassword with mock', () => {
  test('given a failing rule, returns errors', () => {
    const fakeRule = jest.fn();
    fakeRule.mockReturnValue({ passed: false, reason: 'fake reason' });

    const errs = verifyPassword('abc', [fakeRule]);
    expect(errs[0]).toBe('error fake reason');
    expect(fakeRule).toHaveBeenCalledTimes(1);
  });
});
