const frisby = require('frisby');

let authToken;

beforeAll (function() {
    console.log("in before all");
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
            authToken = Buffer.from(data.token);
            // expect(data.status).toBe('SUCCEEDED');
        }); 
});

it('should get links', function() {
    console.log("in test");

    return frisby
        // .use(withBasicAuth)
        .setup({
            request: {
                headers: {
                    'Authorization': Buffer.from(authToken).toString('ascii'),
                    'Content-Type': 'application/json'
                }
            }
        })
        .get('http://dev.tweka.in/cm/patients/links')
        // .inspectRequest()
        .expect('status', 200)
        .expect('header', 'Content-Type', 'application/json')
        .then(function (res) {
            var data = JSON.parse(res['body']);
            console.log('links -> ', data);
            // expect(data.status).toBe('SUCCEEDED');
        });
});     

afterAll (function() {
    console.log("in after all");
});







///// --------------->

// function withBasicAuth(spec) {
//     spec.setup({
//         request: {
//             headers : {
//                 'Authorization': Buffer.from(authToken).toString('base64') ,
//                 'Content-Type': 'application/json'
//             }
//         }
//     });
// }

// frisby.globalSetup ({
//     request: {
//         headers : {
//             'Authorization': Buffer.from(authToken).toString(),
//             'Content-Type': 'application/json'
//         }
//     }
// });