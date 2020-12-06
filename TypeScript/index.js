// https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship
async function Authorize() {
    return true;
}
// const url = new URL('sa');
// _.pick();
let age = 23;
let budget = 100; // opt out of the type system - отказаться
let userName;
age = 'male';
budget = '100$';
userName = 'Stas';
userName = 1790;
let font;
font = 42;
font = 'bolx';
font = 'bold';
const person1 = {
    first: 'Stas',
    last: 'Sheveliukhin'
};
const person2 = {
    first: 'Nikitin',
    last: 'Viktor',
    age: 31,
    parents: 'Galina'
};
const person3 = {
    first: 'Tilek',
    age: 33
};
/// Functions 
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(3, '4');
console.log(pow(3, 4));
function noReturnValueFunction(x, y) {
    Math.pow(x, y).toString();
}
/// Arrays 
let myArray = [];
myArray.push(1);
myArray.push('Stas');
myArray.push(true);
let personArray = [];
personArray.push(person1);
personArray.push('Stas');
const arr = [];
arr.push('1');
arr.push('1');
arr.push('1');
// Generics 
class Observable {
    constructor(value) {
        this.value = value;
    }
}
let x;
let y;
export {};
// scratch the surface - deal with a matter only in the most superficial way. - пройтись по верхам XD 
