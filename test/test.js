const request = require('supertest');
const app = require('../server.js');

describe('GET / ', () => {
  it('should respond with hello world', function (done) {
    //navigate to root and check the the response is "hello world"
    request(app).get('/').expect('hello world', done);
  });
});
