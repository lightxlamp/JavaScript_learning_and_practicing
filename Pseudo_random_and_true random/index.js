import { arrayOfCardNames } from './cards.js'
import { API_KEY } from './key';
import axios from 'axios';

axios({
    method: 'post',
    url: 'https://api.random.org/json-rpc/2/invoke',
    data: {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": API_KEY,
            "n": 1,
            "min": 0,
            "max": 77,
            "replacement": true
        },
        "id": 42
    }
}).then((response) => {
    let n = response.data.result.random.data;
    console.log("Random number from Random.org:", n);
    console.log("Card name:", arrayOfCardNames[n]);
}, (error) => {
    console.log(error);
});

//let RandomOrg = require('random-org');
//let random = new RandomOrg({ apiKey: API_KEY });
// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest();

// let url = "https://api.random.org/json-rpc/2/invoke";
// xhr.open("POST", url, true);
// xhr.setRequestHeader("Content-Type", "application/json");
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         var json = JSON.parse(xhr.responseText);
//         console.log(json);
//     }
// };
// var data = JSON.stringify({
//     "jsonrpc": "2.0",
//     "method": "generateIntegers",
//     "params": {
//         "apiKey": API_KEY,
//         "n": 6,
//         "min": 1,
//         "max": 6,
//         "replacement": true
//     },
//     "id": 42
// });
// xhr.send(data);

// async function f() {
//     console.log(random.generateIntegers);

//     random.generateIntegers({ min: 0, max: 77, n: 1 })
//         .then(function(result) {
//             console.log(result.random.data);
//         })
//     .catch(error => {
//         console.error(error.message);
//     });
//     let n = await random.generateIntegers({ min: 0, max: 77, n: 1 })
//     console.log('My n: ', n);
// }

// f();

// var RandomJs = require('randomorg-js');
// var randomJs = new RandomJs();
// var result = randomJs
//     .apikey('API_KEY') // your apikey here
//     .headers({ 'User-Agent': 'https://github.com/tunnckoCore/randomorg-js' })
//     .method('generateStrings')
//     .params({ n: 4, length: 11 })
//     .post(function(error, stream, body) {
//         console.log('==START==')
//         console.log('==error==')
//         console.log(error)
//         console.log('==stream==')
//         console.log(stream)
//         console.log('==body==')
//         console.log(body)
//         console.log('==END==')
//     });


let pseudoRandomCardNumber = Math.floor(Math.random() * 78); // returns a random integer from 0 to 77
console.log('Card Number: ', pseudoRandomCardNumber);
console.log('Card Name: ', arrayOfCardNames[pseudoRandomCardNumber]);