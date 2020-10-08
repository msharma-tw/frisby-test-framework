const loginPatient  = require('./LoginPatient');
const constants     = require('../resources/constants');


var payloads = {};

//Create session Request-Body
payloads.sessionPayload = new loginPatient().setUsername(process.env.FR_USERNAME)
                                .setPassword(process.env.FR_PASSWORD)
                                .setGrantType(constants.grantType);

payloads.invalidSessionPayload = new loginPatient().setUsername(constants.invalidUsername)
                                    .setPassword(process.env.FR_PASSWORD)
                                    .setGrantType(constants.grantType);





module.exports = payloads;

// function sessionPayload() {
//   return {
//     username: config.username,
//     password: config.password,
//     grantType: testdata.grantType
//   };
// }