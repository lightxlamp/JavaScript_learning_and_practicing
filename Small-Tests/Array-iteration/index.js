const arr = [1, -1, 2, -2, 3];

let positiveArr = arr.filter(function(number) {
  return number > 0;
});

console.log(positiveArr);

// Vladilen's like syntax
let pa2 = arr.filter(elementInArray => {
  return elementInArray > 0;
});
console.log(pa2);

// my ex
const arrayOfLetters = ["a", "b", "c", "a", "d", "a"];
let arrayOfA = arrayOfLetters.filter(function(letter) {
  return letter === "a";
});

console.log(arrayOfA);

// map
const names = ["HTML", "CSS", "JavaScript"];

let nameLengths = names.map(function(name) {
  return name.length;
});

// получили массив с длинами
console.log(nameLengths);

//
const gamesArray = [
  "Witcher 3",
  "Darksiders 3",
  "Borderlands 3",
  "Gothic 2",
  "Sims 4",
  "GTA 5",
  "Shenmue 3",
  "Darksouls 3",
  "Torchlight 2",
  "Overwatch 2",
  "Destiny 2",
  "Life Is Strange 2"
];

let arrayOfSequels = gamesArray.filter(function(game) {
  return game.includes("2");
});

console.log("List of sequels: ", arrayOfSequels);

let gameNamesLengthArray = gamesArray.map(game => {return game.length})
console.log('Game names length: ', gameNamesLengthArray);