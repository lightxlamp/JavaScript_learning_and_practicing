window.setTimeout(() => {
    window.alert('Timeout');
}, 2000) 

let i = 0;

const counterInterval = window.setInterval(() => {
    i++;
    console.log('Hey ', i);
}, 1000)

setTimeout(() => {
    window.clearInterval(counterInterval)
}, 5000)

