function sleep (ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms) 
    })
}

let promise1 = sleep(1500).then(() => {
    return {
        name: 'Promise 1.5'
    }
})

let promise2 = sleep(3000).then(() => {
    return {
        name: 'Promise 3'
    }
})

let promise3 = sleep(5000).then(() => {
    return {
        name: 'Promise 3'
    }
})

// We need to sync these promises. For example to display data from different remote sources simultaneously 

Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log('All', data);
})

Promise.race([promise1, promise2, promise3]).then((data) => {
    console.log('Race promise', data);
})