const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect

describe('Register User', () => { 
    it('Register success', async () => {
        const resp = await request
        .post('/api/register')
        .send({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        })
        expect(resp.status).to.eql(200)
        expect(resp.body).to.have.property('id')
        expect(resp.body).to.have.property('token')
    })
})