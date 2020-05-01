const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    createUser: () => {
        const user = {firstName: 'Stas'}
        user['lastName'] = 'Sheveliukhin'
        return user;
    },
    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/7')
            .then(res => res.data)
            .catch(err => 'error')
}

console.log(functions.fetchUser());

module.exports = functions

// function expect(value) {
//     return {
//         toBe: exp => {
//             if(value === exp) {
//                 console.log('Success');
//             }
//             else {
//                 console.error(`Value is ${value}, but expected value is ${exp}`);
//             }
//         }
//     }
// }

// const sum = (a,b) => a + b;

// const nativeNull = () => null;

// module.exports = {sum, nativeNull}


// console.log(sum(41, 2));

// expect(sum(41, 2)).toBe(42);