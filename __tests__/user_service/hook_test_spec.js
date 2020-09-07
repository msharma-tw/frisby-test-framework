const frisby = require('frisby');
var payloads = require('../../models/payloads');
const config = require('../../resources/config');

let authToken;

// usage of hooks
beforeAll (function() {
    return frisby
        .post(config.cm_base_url + '/sessions', payloads.sessionPayload)
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['body']);
            authToken = Buffer.from(data.token);
            // expect(data.status).toBe('SUCCEEDED');
        }); 
});

function getHeaders() {
    return { 
            headers: {
                'Authorization': Buffer.from(authToken).toString('ascii'),
                'Content-Type': 'application/json'
            }
    };
}

it('should get link accounts', function() {
    return frisby
        .setup({
            request: getHeaders()
        })
        .get(config.cm_base_url + '/patients/links')
        // .inspectRequest()
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['body']);
        });
});     

afterAll (function() {
    // console.log("in after all");
});