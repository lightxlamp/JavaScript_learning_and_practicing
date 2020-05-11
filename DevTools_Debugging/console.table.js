const myFriends = [
    {id: 1, name: 'Tilek'},
    {id: 2, name: 'Egor'},
    {id: 3, name: 'Elchibek'},
    {id: 4, name: 'Kapar'},
    {id: 5, name: 'Erkin'},
]

console.table(myFriends);

console.time('myTimer')
let myArr = [];
for(let i = 0; i < 1999999; i++) {
    myArr.push({el: i})
}
console.timeEnd('myTimer')