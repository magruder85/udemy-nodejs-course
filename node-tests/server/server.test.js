const request = require('supertest');

var app = require('./server.js').app;

describe('Server', () => {
  describe('GET /', () => {
    test('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body.error).toContain('Page not found.')
        })
        .end(done);
    });
  })
  describe('GET /users', () => {
    test('should return Micah as a user', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body[0].name).toContain('Micah')
      })
      .end(done);
    })
  })
})




// Make a new supertest
// Assert 200
//ToContain that your usser exists in user array
