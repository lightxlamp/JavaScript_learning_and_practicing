let myName: string = "Stas"
let yearOfBirth: number;
let isLoading: boolean;
let album: any; // ℹ️ In some way it will defeat TypeScript :p
// ℹ️ If you are not sure - what type of data you will be receiving
let sex: number | string
let postId: string | number
let isActive: boolean | number // True / False. 1 / 0
let megaUnionTypeVariable: boolean | string | number
const re: RegExp = /ab+c/;

// ⚠️ myName = 34; // Type number is not assignable to type string
myName = "Viktor"
console.log(myName)
yearOfBirth = 1989
isLoading = true
album = 321
sex = 1
console.log(sex)
sex = 'male'
// ⚠️ sex = true // Type boolean is not assignable to type string | number

const sum = (a:number, b:number) => {
    return a + b
}

const sum2 = (a:number, b:string) => {
    return a + b
}