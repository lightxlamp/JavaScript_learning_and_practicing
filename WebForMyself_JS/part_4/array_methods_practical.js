// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
const myArray = ['1', '2', '3', '4', '5', '6', '7', '8']

console.warn(myArray);

myArray.splice(1, 3)

console.warn(myArray);

myArray.splice(1, 0, 'x') // let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

console.warn(myArray);

let newArray = myArray.concat(1, 2)

console.log(newArray)

friends = [
    {name: 'Tilek', age : 33},
    {name: 'Talgat', age : 29},
    {name: 'Masha', age : 30},
    {name: 'Suriah', age : 28}
]

// The find() method returns the value of the first element in the provided array that satisfies the provided 
// testing function. If no values satisfies the testing function, undefined is returned.
let friendWithAge28 = friends.find(function(friend) {
    // console.log(friend);
    return friend.age === 28;
})

console.log(friendWithAge28);

// The filter() method creates a new array with all elements that pass the test implemented
var oddArray = ['1', '2', '3', '4', '5', '6', '7', '8'].filter(function(i) {
    return i % 2 !== 0;
});

console.log(oddArray);

newArray.splice(1, 1)

console.log(newArray);

numericArray = newArray.map(function(i){
    return parseInt(i) * 2
})

console.log(numericArray);