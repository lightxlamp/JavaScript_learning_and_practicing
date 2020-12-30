const createCounter = function(counterName) {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        printCounter: function() {
            console.log(counter);
        }
    }
}

counterA = createCounter('Counter A');
counterB = createCounter('Counter B');

counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()

counterA.printCounter()
counterB.printCounter()