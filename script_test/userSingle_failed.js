const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect

describe('Users data', () => { 
    it('Get single user by id failed id not found', async () => {
        const resp = await request
        .get('/api/users/1000')
        expect(resp.status).to.eql(404)
    })
})