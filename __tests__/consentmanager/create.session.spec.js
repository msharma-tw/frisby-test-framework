const frisby   = require('frisby');
const payloads = require('../../models/payloads');
const config   = require('../../resources/config')

let authToken;

//post request > parse the response 
it('should create session', function() {
    return frisby
        .post(config.cm_base_url + '/sessions', payloads.sessionPayload)
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['body']);
            authToken = Buffer.from(data.token);
            // let postId = res.json[0].id;
            // console.log('token -> ', data.token);
            // expect(data.status).toBe('SUCCEEDED');
    });
});     