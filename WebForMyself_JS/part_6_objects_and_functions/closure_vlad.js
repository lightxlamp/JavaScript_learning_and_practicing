const createCounter = function(counterName) {
    let counter = 0;

    return function() {
        console.log(counterName, counter++);
    }
}

counterA = createCounter('Counter A');
counterB = createCounter('Counter B');

counterA();
counterA();
counterA();
counterB();