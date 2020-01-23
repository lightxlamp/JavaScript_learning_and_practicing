export const COLOR = "red"

export function sum(a, b){
    return a + b;
}

const privateVar = 'so private string variable...';

export default {
    logFromModule(){
        console.log('Printing peivate variable', privateVar);
    }
}


// https://javascript.info/import-export

// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

function sayBye(user) {
    console.log(`Bye, ${user}!`);
}
  
export {sayHi, sayBye}; // a list of exported variables