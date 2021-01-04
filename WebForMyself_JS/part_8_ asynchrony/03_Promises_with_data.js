let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Server: asking a list of available pizzas from DB');
        console.log('....');         
        resolve();
    }, 1000);
});

promise.then(function() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('DB: preparing list');
            console.log('....');
            const users = [
                {uid: 218216, name: 'Stas'},
                {uid: 912778, name: 'Alex'}
            ]
            resolve(users);
        }, 500);
    })
}).then(function(dbUsers) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('Server: transforming format of data');
            console.log('....');
            reject('DB is not responding. This text will be handled by catch');
            console.log(dbUsers);
            let formattedDbUsers = dbUsers.map(user => {
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            });
            resolve(formattedDbUsers);
        }, 500);
    })
}).then(function(users) {
    setTimeout(() => {
        console.log('Client: receiving data and displaying it');
        console.log('....');
        console.log(users);
    }, 1000);
}).catch(function(e) {
    console.error(e);
})
.finally(function() {
    console.log('Finaly');
})

// Finally displayed "incorrectly", because we have async code inside the latest 'then'