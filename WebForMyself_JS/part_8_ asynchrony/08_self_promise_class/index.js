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
        this.isRejected = false;

        function resolver (data) {
            if(this.isRejected) {
                return;
            }
            this.thens.forEach(then => {
                data = then(data)
            });
        }

        function rejected(error) {
            this.isRejected = true;
            if(this.onCatch) {
                this.onCatch(error);
            }
            if(this.onFinally) {
                this.onFinally();
            }
        }

        callback(resolver.bind(this), rejected.bind(this))
    }

    then(callbackFn) {
        this.thens.push(callbackFn);
        return this;
    }
    catch(callbackFn) {
        this.onCatch = callbackFn;
        return this;
    }
    finally(callbackFn) {
        this.onFinally = callbackFn;
        return this;
    }
}


const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Some error');
        resolve(2)
    }, 2000)
})

promise
    .then(num => num *= 2)
    .catch(e => console.log(e))
    .then(num => num *= 3)
    .finally(() => console.log('Finally'))
    .then(num => console.log('Done', num))