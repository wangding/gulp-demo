const { transform, validate, sigma, h, roundFractional } = require('../src/entropy');

describe('transform 函数测试套件', () => {
  test('命令行参数正确，逗号分隔概率值', () =>{
    var arg = ['node', 'app', '0.4,0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(true);
    expect(result.p.length).toBe(2);
  });

  test('命令行参数正确，空格分隔概率值', () =>{
    var arg = ['node', 'app', '0.4', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(true);
    expect(result.p.length).toBe(2);
  });

  test('命令行参数错误，概率和小于 1', () =>{
    var arg = ['node', 'app', '0.3', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });

  test('命令行参数错误，概率和大于 1', () =>{
    var arg = ['node', 'app', '0.7', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });

  test('命令行参数错误，概率不是数字', () =>{
    var arg = ['node', 'app', 'a', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });

  test('命令行参数错误，概率小于 0', () =>{
    var arg = ['node', 'app', '-3', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });

  test('命令行参数错误，概率大于 1', () =>{
    var arg = ['node', 'app', '3', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });

  test('命令行参数错误，同时使用逗号和空格分隔概率值', () =>{
    var arg = ['node', 'app', '0.4,', '0.6'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });

  test('命令行参数错误，概率数据少于两个', () =>{
    var arg = ['node', 'app', '0.4'];
    var result = transform(arg);

    expect(result.isOK).toBe(false);
  });
});

describe('validate 函数测试套件', () => {
  test('概率值合法', () => {
     var result = validate(0.3);
     expect(result.isOK).toBe(true);
  });

  test('概率值合法，是特殊值 0', () => {
     var result = validate(0);
     expect(result.isOK).toBe(true);
  });

  test('概率值合法，是特殊值 1', () => {
     var result = validate(1);
     expect(result.isOK).toBe(true);
  });
  test('概率值非法，不是数字', () =>{
    var result = validate('abc');
    expect(result.isOK).toBe(false);
  });
  
  test('概率值非法，小于 0', () =>{
    var result = validate(-3);
    expect(result.isOK).toBe(false);
  });
  
  test('概率值非法，大于 1', () =>{
    var result = validate(3);
    expect(result.isOK).toBe(false);
  });
});

describe('sigma 函数测试套件', () => {
  test('概率空间封闭', () =>{
    var p = [0.7, 0.2, 0.1];
    expect(sigma(p)).toBe(1);
  });

  test('概率空间不封闭，小于 1', () =>{
    var p = [0.337, 0.1];
    expect(sigma(p) < 1).toBe(true);
    expect(sigma(p)).toBe(0.44);
  });

  test('概率空间不封闭，大于 1', () =>{
    var p = [0.8, 0.2, 0.333];
    expect(sigma(p) > 1).toBe(true);
    expect(sigma(p)).toBe(1.33);
  });
});

describe('h 函数测试套件', () => {
  test('信源等概率分布', () =>{
    var p = [0.25, 0.25, 0.25, 0.25];
    expect(h(p)).toBe(2);
  });

  test('信源不等概率分布', () =>{
    var p = [0.1, 0.2, 0.3, 0.4];
    expect(h(p)).toBe(1.8464393446710154);
  });
});

describe('roundFractional 函数测试套件', () => {
  test('保留小数点后 0 位，五入', () => {
    expect(roundFractional(3.62, 0)).toBe(4);
  });

  test('保留小数点后 1 位，四舍', () => {
    expect(roundFractional(3.32, 1)).toBe(3.3);
  });

  test('保留小数点后 2 位，五入', () => {
    expect(roundFractional(3.335, 2)).toBe(3.34);
  });

  test('保留小数点后 3 位，四舍', () => {
    expect(roundFractional(20.4484, 3)).toBe(20.448);
  });

  test('保留小数点后 4 位，五入', () => {
    expect(roundFractional(100.00001, 4)).toBe(100);
  });
});
