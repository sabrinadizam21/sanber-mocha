const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect

describe('Login User', () => { 
    it('Login success', async () => {
        const resp = await request
        .post('/api/login')
        .send({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
        expect(resp.status).to.eql(200)
        expect(resp.body).to.have.property('token')
    })
})