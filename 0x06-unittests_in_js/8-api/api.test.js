const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status 200', (done) => {
    request.get(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(url, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
