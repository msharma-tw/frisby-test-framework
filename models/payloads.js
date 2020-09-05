const config = require('../resources/config');
const testdata = require('../resources/constants');
const loginPatient = require('./loginPatient');


var login = new loginPatient();
login.s

function sessionPayload() {
  return {
    username: config.username,
    password: config.password,
    grantType: testdata.grantType
  };
}
