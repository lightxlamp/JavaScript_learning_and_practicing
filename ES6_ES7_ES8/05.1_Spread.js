const array = [1, 2, 3 , 5, 8, 13]
console.log(array)
console.log(...array)
console.log(Math.max(array))
console.log(Math.max(...array)) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
console.log(Math.max.apply(null, array)) // it worked this way before. Without spread

const fib = [1, ...array]
console.log('fib', fib)
