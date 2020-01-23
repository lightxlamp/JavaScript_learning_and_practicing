// based on: https://www.youtube.com/watch?v=Ti2Q4sQkNdU

var num = 33

num = 'stas'

if(true)
{
    var a = 17;    
}

console.log(num)
console.log(a)

console.log('*************')

let b = 0

if(true)
{
    let b = 1;    
    console.log(b)
}

console.log(b)

console.log('************* Hoisting')

// https://scotch.io/tutorials/understanding-hoisting-in-javascript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope 
// before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved 
// to the top of their scope regardless of whether their scope is global or local.

let x1 = 1
let x2 = x1++
console.log('X2:', x2)
 
function hoist() {
    y = 20;
    var z = 100;
}
  
hoist();
  
console.log(y); 
//console.log(z); 
