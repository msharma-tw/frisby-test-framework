const frisby   = require('frisby');
const Joi      = frisby.Joi;
const payloads = require('../../models/payloads');
const apis = require('../../apimodules/apis');

//chaining of api-calls with assertions on jsonTypes
//drawback - if api-chain is long then test can get heavy
it('should create session', function() {
    // arrange
    var data = payloads.sessionPayload;

    // act
    var response = apis.createSession(data)

    // assert
    response.expect('status', 200);
});  

it("should return profile", async function() {
    // arrange
    var data = payloads.sessionPayload;
    var res = await apis.createSession(data);
    var data = JSON.parse(res['body']);
    var authToken = Buffer.from(data.token);

    // act
    var response = apis.getProfile(authToken);

    // assert
    response
    .expect('status', 200)
    .expect('jsonTypes', 'verifiedIdentifiers.*', { // Assert *each* object in 'items' array
        type: Joi.string(),
        value: Joi.string().required()
    });
})