const array = ['a', 'b', 'c', 'd', 'f'];
const str = 'Stas';

console.log(array[Symbol.iterator]);
console.log(str[Symbol.iterator]);

const iterator = array[Symbol.iterator]();

console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for (letter in str){
    console.log('letter:', letter);
}

for (letter of str){
    console.log('letter:', letter);
}