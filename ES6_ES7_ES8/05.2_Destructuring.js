// Destructuring simply implies breaking down a complex structure into simpler parts.
// In JavaScript, this complex structure is usually an object or an array. 
// You can also handle nested structures by using nested destructuring syntax.

const array = [1, 2, 3 , 5, 8, 13]

const a = array[0]
const b = array[1]

console.log(a, b);

const [a1, b1] = array
console.log(a1, b1);

const [a2, b2, ...c2] = array
console.log(a2, b2, c2);

const [a3, , , , c3] = array
console.log(a3, c3);

///////////////////////////////////////////////////////////

const person = {
    firstname: 'Stanislav',
    lastname: 'Sheveliukhin',
    country: 'Kyrgyzstan'
};

// Object Destructuring
const { x, lastname, country } = person;

console.log('......', x, lastname, country); 