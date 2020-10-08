// const frisby   = require('frisby');
// const Joi      = frisby.Joi;
// const payloads = require('../../models/payloads');
// const config   = require('../../resources/config');

// let authToken;

// frisby
//     .globalSetup({
//         request: {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }  
//     });

// function getHeaders() {
//     return { 
//             headers: {
//                 'Authorization': Buffer.from(authToken).toString('ascii')
//             }
//     };
// }

// //test
// //chaining of api-calls with assertions on jsonTypes
// //drawback - if api-chain is long then test can get heavy
// it('should create session', function() {

//     //create session
//     return frisby
//         .post(config.cm_base_url + '/sessions', payloads.sessionPayload)
//         .expect('status', 200)
//         .then(function (res) {
//             var data = JSON.parse(res['body']);
//             authToken = Buffer.from(data.token);
            
//             //fetch-profile details of patient
//             return frisby
//                 .setup({
//                     request: getHeaders()
//                 })
//                 .get(config.cm_base_url + "/patients/me")
//                 .expect('status', 200)
//                 .expect('jsonTypes', 'verifiedIdentifiers.*', { // Assert *each* object in 'items' array
//                     type: Joi.string(),
//                     value: Joi.string().required()
//                 });
//         });
// });     