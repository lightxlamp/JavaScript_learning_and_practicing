// Mar 24 2021
let myObj = {
    name: 'Stas',
    age: 31,
    sex: 'sex' // =)
}

console.log(myObj);
console.dir(myObj);
console.log('myObj.length', myObj.length); // made this 'mistake' today while coding - myObj.length undefined

// 2011 helped!!!! - https://stackoverflow.com/questions/5223/length-of-a-javascript-object
console.log('Object.keys(myObj).length', Object.keys(myObj).length); // Yey! this helped me
// It's pretty logical, really. Shame on me.. No.. Good that, I've checked =) And going to realize => remember
console.log('Object.keys(myObj)', Object.keys(myObj));