const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/users";

async function printAllUsersFromDB(){
    let promise = await fetch(url);

    console.log(promise);

    if(promise.ok){
        let data = await promise.json();
        console.log('Data', data);
    }

    // promise.then(async function(result) {
    //     console.log('Result', result);
    //     console.log('Result Status', result.status);
    //     let users = await result.json();
    //     console.log('Users list', users);
    // })
}

// The same functionality but like in Vladlen's case
(async () => {
    fetch(url).then((response) => {
        return response.json();
    }).then(users => console.log(users))
})()

// printAllUsersFromDB();