function printObj(objName) {
    console.log('objName: ', objName);
    for(let key in this) {
        if(this.hasOwnProperty(key)){
            console.log('[' + key + ']', this[key]);
        }
    }
    console.log('=========================================');
}

const person = {
    age: 31,
    name: 'Stas',
    job: 'Frontend',
    friends: ['Tilek', 'Kairat', 'Masha']
}

const car = {
    name: 'Prius',
    make: 'Toyota',
    year: 2006
}

let printPerson = printObj.bind(person) // as per bind return a new function with passed context 
printPerson('Person')
printObj.bind(car)('Car')

printObj.call(car, 'Car') // The same as bind but call immediately 

printObj.apply(person, ['Person']) // like a call, but has only 2 arguments 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// The for...in statement iterates over all enumerable properties of an object that are keyed by strings 
// (ignoring ones keyed by Symbols), including inherited enumerable properties.

// bind, call, apply used to be used before EcmaScript 6. But lost their actuality after it. Will now later why 