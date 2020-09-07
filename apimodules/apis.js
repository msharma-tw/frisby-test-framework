const frisby   = require('frisby');
const config   = require('../resources/config');

function createSession(data) {
    return frisby.post(config.cm_base_url + '/sessions', data);
}

function getProfile(authHeader) {
    return frisby
            .setup({
                request: getHeaders(authHeader)
            })
            .get(config.cm_base_url + "/patients/me")
}

function getHeaders(authToken) {
    return { 
            headers: {
                'Authorization': Buffer.from(authToken).toString('ascii'),
                'Content-Type': 'application/json'
            }
    };
}

module.exports = {
    createSession,
    getProfile
}