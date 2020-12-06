// https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship

import { capitalize } from "lodash";

async function Authorize() {
    return true;
}

// const url = new URL('sa');

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

/// Objects 

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

/// Functions 

function pow(x : number, y : number) : string {
    return Math.pow(x, y).toString()
}

pow(3, '4')
console.log(pow(3, 4))

function noReturnValueFunction(x : number, y : number) : void {
    Math.pow(x, y).toString()
}

/// Arrays 

let myArray : number[] = []
myArray.push(1)
myArray.push('Stas')
myArray.push(true)

let personArray : Person[] = [] 
personArray.push(person1)
personArray.push('Stas')

/// Tuple 

type MyList = [number?, string?, boolean?]
const arr : MyList = []
arr.push('1')
arr.push('1')
arr.push('1')


// Generics 

class Observable<T> {
    constructor(public  value: T) {}
}

let x : Observable<number>;
let y : Observable<Person>;

// scratch the surface - deal with a matter only in the most superficial way. - пройтись по верхам XD 