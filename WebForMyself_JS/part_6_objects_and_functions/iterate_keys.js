let stas = {
    name: 'Stas',
    year: 1989
}

for(let key in stas) {
    console.log(key);
}

console.log('-----------------------------------');

let myArr = [1, 2, 3]
for(let key in myArr) {
    console.log(key);
}

console.log('-----------------------------------');

let name = 'Stas' 
for(let key in name) {
    console.log(key);
}

let stasKeys = Object.keys(stas)
console.log(stasKeys);

// Или вот так...

Object.keys(stas).forEach(key => { 
    console.log(key);
})

// This method has adventage. It iterates through objects key only (not keys of prototype)
// So we don't need to write if(ford.hasOwnProperty(key)) 