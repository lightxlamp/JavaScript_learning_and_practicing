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
//     ,then(console.log(num))

class MyPromise {
    constructor(callback) {
        function resolver () {

        }

        function rejected() {

        }

        callback(resolver, rejected )
    }

    then(callbackFn) {

    }
    catch(callbackFn) {

    }
    finally(callbackFn) {

    }
}
