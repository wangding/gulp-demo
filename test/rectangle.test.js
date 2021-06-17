import {Rectangle} from '../src/rectangle.js'

describe('矩形面积函数的测试', () => {
  test('area(10, 5) = 50', () => {
    const r = new Rectangle(10, 5);
    expect(r.area).toBe(50);
  });

  test('area("10", "5") = 50', () => {
    const r = new Rectangle("10", "5");
    expect(r.area).toBe(50);
  });
});
