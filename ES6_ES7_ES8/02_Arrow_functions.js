function sum(a, b)
{
    return a + b
}

console.log(sum(4, 5))

const sumWithArrayFunction = (a, b) => {
    return a + b
}

console.log(sumWithArrayFunction(4, 5))


function double(a)
{
    return a * a
}

console.log(double(5))

const doubleArrayFunction = a => {
    return a * a
}

console.log(doubleArrayFunction(5))

const doubleArrayFunctionEvenShorter = a => a * a

console.log(doubleArrayFunctionEvenShorter(5))

setTimeout(function() {
    console.log('Hey after 1 second')
}, 1000)

 function print() {
    console.log('Hey after 1 second')
}

setTimeout(print, 1000)

setTimeout(() => console.log('Hey after 2 seconds'), 2000)

// context

function log(){
    console.log('log()', this)
}

const arrowLog = () => console.log('() =>  log', this)

const person = {
    name: 'Stas',
    age: 30,
    log: log, 
    arrowLog: arrowLog,
    delayLog: function(){
        // global.setTimeout(() => {console.log(this.name + ' ' + this.age )}, 3000)
        setTimeout(() => {console.log(this.name + ' ' + this.age )}, 3000)
    }
}

person.log()

person.arrowLog()

person.delayLog()

// console.log(global)