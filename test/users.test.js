const request = require('supertest')
const app = require('../index')

it('debe devolver un json con todos los usuarios', (done) => {
    request(app).get('/users').expect('Content-Type', /json/).expect(200, done)
})