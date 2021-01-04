function sleep (ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms) 
    })
}

sleep(1500).then(() => {
    console.log('1.5 sec');
})

sleep(3000).then(() => {
    console.log('3 sec');
})

// We need to sync these promises. For example to display data from different remote sources simultaneously 

Promise.all([sleep(1500), sleep(3000)]).then(() => {
    console.log('All');
})

Promise.race([sleep(1500), sleep(3000)]).then(() => {
    console.log('First promise - completed');
})