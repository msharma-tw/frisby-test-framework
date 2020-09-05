const frisby = require('frisby');

it('should be up heartbeat', function() {
    return frisby.get('http://dev.tweka.in/cm/v0.5/heartbeat')
        .expect('status', 200);
});