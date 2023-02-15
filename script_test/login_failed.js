const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect

describe('Login User', () => { 
    it('Login failed with no password', async () => {
        const resp = await request
        .post('/api/login')
        .send({
            "email": "eve.holt@reqres.in"
        })
        expect(resp.status).to.eql(400)
        expect(resp.body).to.have.property('error')
        expect(resp.body.error).to.eql('Missing password')
    })
})