const frisby = require('frisby');
var payloads = require('../../models/payloads');


it('should create session', function() {
    return frisby
        .post('http://dev.tweka.in/cm/sessions', payloads.sessionPayload())
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['body']);
            // console.log('token -> ', data.token);
            // expect(data.status).toBe('SUCCEEDED');
    });
});     