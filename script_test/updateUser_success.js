const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect
var chai = require('chai')
chai.use(require('chai-json-schema'))

const schema_updateUser = {
    "type": "object",
    "properties": {
        "name": {"type" : "string", "minLength" : 1},
        "job": {"type" : "string", "minLength" : 1},
        "updatedAt": {"type" : "string", "minLength" : 1}
    },
    "required": ["name", "job", "updatedAt"],
    "additionalProperties": false
}

describe('Users data', () => { 
    it('Update user data success', async () => {
        const resp = await request
        .put('/api/users/2')
        .send({
            "name": "morpheus",
            "job": "zion resident"
        })
        expect(resp.status).to.oneOf([200, 201])
        expect(resp.body.name).to.eql("morpheus")
        expect(resp.body.job).to.eql("zion resident")
        // Ensure JSON response body is valid
        expect(resp.body).to.be.jsonSchema(schema_updateUser)
    })
})