const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect
var chai = require('chai')
chai.use(require('chai-json-schema'))

const schema_listUsers = {
    "type": "object",
    "properties": {
        "page": {"type" : "number", "minLength" : 1},
        "per_page": {"type" : "number", "minLength" : 1},
        "total": {"type" : "number", "minLength" : 1},
        "total_pages": {"type" : "number", "minLength" : 1},
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
        "required": ["page", "per_page", "total", "total_pages", "data"],
        "additionalProperties": false
    }
}

describe('Users data', () => { 
    it('Get list users success', async () => {
        const resp = await request
        .get('/api/users?page=1')
        expect(resp.status).to.eql(200)
        expect(resp.body.page).to.eql(1)
        // Ensure JSON response body is valid
        expect(resp.body).to.be.jsonSchema(schema_listUsers)
    })
})