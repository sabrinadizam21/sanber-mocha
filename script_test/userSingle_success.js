const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect
var chai = require('chai')
chai.use(require('chai-json-schema'))

const schema_user = {
    "type": "object",
    "properties": {
        "data": {
            "type": ["array", "object"],
            "properties": {
                "id": {"type" : "number", "minLength" : 1},
                "email": {"type" : "string", "minLength" : 1},
                "first_name": {"type" : "string", "minLength" : 1},
                "last_name": {"type" : "string", "minLength" : 1},
                "avatar": {"type" : "string", "minLength" : 1}
            },
            "required": ["id", "email", "first_name", "last_name", "avatar"],
            "additionalProperties": false
        },
        "support": {
            "type": "object",
            "properties": {
                "url": {"type" : "string", "minLength" : 1},
                "text": {"type" : "string", "minLength" : 1}
            },
            "required": ["url", "text"],
            "additionalProperties": false
        },
    },
    "required": ["data", "support"],
    "additionalProperties": false
}

describe('Users data', () => { 
    it('Get single user by id success', async () => {
        const resp = await request
        .get('/api/users/10')
        expect(resp.status).to.eql(200)
        expect(resp.body.data.id).to.eql(10)
        // Ensure JSON response body is valid
        expect(resp.body).to.be.jsonSchema(schema_user)
    })
})