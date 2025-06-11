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

describe('Cart page', () => {
  it('should return 200 and correct message for numeric id', (done) => {
    request.get('http://localhost:7865/cart/12', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for non-numeric id', (done) => {
    request.get('http://localhost:7865/cart/hello', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('/available_payments endpoint', () => {
  it('should return correct payment methods object', (done) => {
    request.get('http://localhost:7865/available_payments', { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return welcome message with userName', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: { userName: 'Betty' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.undefined; // because response is text, not JSON
        expect(res.text || res.body || res).to.not.be.an('object'); // ensure not object
        expect(res).to.have.property('req');
        expect(res.req.method).to.equal('POST');
        expect(res.req.path).to.equal('/login');
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });
});
