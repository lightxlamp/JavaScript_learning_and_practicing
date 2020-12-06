// https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship

async function Authorize() {
    return true;
}

const url = new URL('sa');

// _.pick();

let age = 23;
let budget:any = 100; // opt out of the type system - отказаться
let userName : string

age = 'male';
budget = '100$'
userName = 'Stas'
userName = 1790

type myType = 'bold' | 'italic' | 42;

let font : myType

font = 42
font = 'bolx'
font = 'bold'


interface Person {
    first : string, // required 
    last: string, // required
    [key: string]: any
}

const person1 : Person = {
    first: 'Stas',
    last: 'Sheveliukhin'
}

const person2 : Person = {
    first: 'Nikitin',
    last: 'Viktor',
    age: 31,
    parents: 'Galina'
}
const person3 : Person = {
    first: 'Tilek',
    age: 33
}