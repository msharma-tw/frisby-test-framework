const config        = require('../resources/config');
const loginPatient  = require('./LoginPatient');
const constants     = require('../resources/constants');


var payloads = {};

//Create session Request-Body
payloads.sessionPayload = new loginPatient().setUsername(config.username)
                                .setPassword(config.password)
                                .setGrantType(constants.grantType);

payloads.invalidSessionPayload = new loginPatient().setUsername(testdata.invalidHealthId)
                                    .setPassword(config.password)
                                    .setGrantType(constants.grantType);





module.exports = payloads;

// function sessionPayload() {
//   return {
//     username: config.username,
//     password: config.password,
//     grantType: testdata.grantType
//   };
// }