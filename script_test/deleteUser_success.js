const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect

describe('Users data', () => { 
    it('Delete user data success', async () => {
        const resp = await request
        .delete('/api/users/2')
        expect(resp.status).to.eql(204)
    })
})