const http = require('http');

describe('矩形计算器 HTTP API 接口测试', () => {
  test('正确请求格式测试', (done) => {
    http.get('http://localhost:8080/rectangle/?width=20&height=20', (res) => {
      let result = '';

      res.on('data', (chunk) =>{ result += chunk; });
      res.on('end', () =>{
        let r= JSON.parse(result);
        expect(r.area).toBe(400);
        expect(r.perimeter).toBe(80);
        done();
      })
    });
  });
});
