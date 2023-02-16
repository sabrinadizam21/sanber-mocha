const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect
var chai = require('chai')
chai.use(require('chai-json-schema'))

const schema_createUser = {
    "type": "object",
    "properties": {
        "name": {"type" : "string", "minLength" : 1},
        "job": {"type" : "string", "minLength" : 1},
        "id": {"type" : "string", "minLength" : 1},
        "createdAt": {"type" : "string", "minLength" : 1}
    },
    "required": ["name", "job", "id", "createdAt"],
    "additionalProperties": false
}

describe('Users data', () => { 
    it('Create user success', async () => {
        const resp = await request
        .post('/api/users')
        .send({
            "name": "morpheus",
            "job": "leader"
        })
        expect(resp.status).to.oneOf([200, 201])
        expect(resp.body.name).to.eql("morpheus")
        expect(resp.body.job).to.eql("leader")
        // Ensure JSON response body is valid
        expect(resp.body).to.be.jsonSchema(schema_createUser)
    })
})