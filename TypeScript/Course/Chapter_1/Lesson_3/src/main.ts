let arrayOfStrings = ['Stas', 'Vlad', 'John']

let arrayOfGames = ['GTA V', 'HoMM 3', 21]

let arrayOfMixedData = ['Bishkek', true, 1989]

arrayOfStrings[0] = 1 // ⚠️ Type number is not assignable to type string
arrayOfStrings[0] = 'Vika'
arrayOfStrings.push(1988) // ⚠️ Argument of type number is not assignable to parameter of type string
arrayOfStrings.push('Viktor')

arrayOfGames[0] = 1988

arrayOfStrings = arrayOfGames
arrayOfGames = arrayOfStrings

let arrayOfNumbers : number[] = []
arrayOfNumbers.push(100)
arrayOfNumbers.push('one')

// Tuple
let myTuple : [string, number, boolean]
myTuple = ['Stas', 1988, false]
myTuple = [1, 1988, false]

