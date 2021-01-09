// Реализуйте класс MyPromise, который будет работать точно так же, как и Promise.
// Достаточно реализовать методы: then, catch, finally
// Методы all, race делать не нужно

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2)
//     }, 2000)
// })
// promise
//     .then(num => num * 2)
//     .catch(e => console.log(e))
//     .then(num => num *= 3)
//     .then(console.log(num))

class MyPromise {
    constructor(callback) {

        this.onCatch = null; 
        this.onFinally = null;
        this.thens = [];

        function resolver (data) {
            this.thens.forEach(then => {
                data = then(data)
            });
        }

        function rejected(error) {
            if(this.onCatch) {
                this.onCatch(error);
            }
            if(this.onFinally) {
                this.onFinally();
            }
        }

        callback(resolver, rejected )
    }

    then(callbackFn) {
        this.thens.push(callbackFn);
    }
    catch(callbackFn) {
        this.onCatch = callbackFn;
    }
    finally(callbackFn) {
        this.onFinally = callbackFn;
    }
}


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})
promise
    .then(num => num * 2)
    .catch(e => console.log(e))
    .then(num => num *= 3)
    .then(console.log(num))