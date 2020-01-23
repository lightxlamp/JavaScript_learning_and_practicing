// https://javascript.info/symbol
// https://learn.javascript.ru/symbol

const s1 = Symbol('Stas');
const s2 = Symbol('Stas');

console.log(s1);
console.log(s2);
console.log(s1 === s2);
console.log(s2.description);

const testObj = {
    class: 'Game',
    [s1]: 'keyVal',
    Stas: 'Stas'
}

console.log(testObj.class);
console.log(testObj[s1]);

for(let key in testObj){
    console.log('key:', key);
}