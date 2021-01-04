// Based on https://www.youtube.com/watch?v=AYVYxezrMWA&t=142s
let sum = function(c) {
    console.log(this.a + this.b + c);
}

const myObj = {
    a : 1,
    b : 2
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// The call() method calls a function with a given this value and arguments provided individually.
sum.call(myObj, 5)

sumWithObject = sum.bind(myObj)
sumWithObject(10)