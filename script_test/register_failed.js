const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect

describe('Register User', () => { 
    it('Register failed with no password', async () => {
        const resp = await request
        .post('/api/register')
        .send({
            "email": "eve.holt@reqres.in"
        })
        expect(resp.status).to.eql(400)
        expect(resp.body).to.have.property('error')
        expect(resp.body.error).to.eql('Missing password')
    })
})