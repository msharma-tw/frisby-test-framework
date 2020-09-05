const frisby = require('frisby');

it('should create session', function() {

    var sessionPayload = {
        username: "test.sb.005@ndhm",
        password: "Test135@",
        grantType: "password"
    };
    return frisby
        .post('http://dev.tweka.in/cm/sessions', sessionPayload)
        .expect('status', 200)
        .then(function (res) {
            var data = JSON.parse(res['body']);
            // console.log('token -> ', data.token);
            // expect(data.status).toBe('SUCCEEDED');
        });
});     