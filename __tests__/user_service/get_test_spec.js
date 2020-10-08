const core = require('@actions/core');
const github = require('@actions/github');
const frisby = require("frisby");
const config = require('../../resources/config');

//GET call with assertions on header and response body
it("should be UP for heartbeat", function () {

  console.log(">>>>>>>>>" + process.env.FR_TEST_TOKEN);

  return frisby
    .get(config.cm_base_url + "/v0.5/heartbeat")
    .expect("status", 200)
    .expect('header', 'Content-Type', 'application/json')
    .expect('json', 'status', 'UP')
    .expectNot('json', { result: 'error' });
});
