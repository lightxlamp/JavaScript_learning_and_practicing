const person = {
    firstname: 'Alex',
    lastname: 'Boldyrev',
    'country': 'USA',
    toString: function(){
        return Object.keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
};

// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array.

// The join() method creates and returns a new string by concatenating all of the elements in an array 
// (or an array-like object), separated by commas or a specified separator string. If the array has only one item, 
// then that item will be returned without using the separator.

console.log('*********************************************');
console.log('+ Object.keys(person)', Object.keys(person));
console.log('+ Object.keys(person).filter(key => key !== "toString")', Object.keys(person).filter(key => key !== 'toString'));
console.log('+ Object.keys(person).filter(key => key !== "toString").map(key => this[key])', 
            Object.keys(person).filter(key => key !== 'toString').map(key => person[key]));
console.log('+ Object.keys(person).filter(key => key !== "toString").map(key => this[key])', 
            Object.keys(person).filter(key => key !== 'toString').map(key => person[key]).join(' '));
console.log(person.toString());
///////////////////////////////////////////////////////////
console.log('*********************************************');

const age = 30;
const sex = 'male'

const person2 = {
    firstname: 'Stanislav',
    lastname: 'Sheveliukhin',
    age: age,
    sex,
    'country': 'Kyrgyzstan',
    sayHello: () => 'Hello!', 
    toString(){
        return Object.keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
};

console.log(person2.toString());
console.log(person2.sayHello());