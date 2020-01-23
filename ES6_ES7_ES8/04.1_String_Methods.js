const str = 'Hello'

console.log(str.startsWith('H'))
console.log(str.startsWith('E'))
console.log(str.endsWith('o'))
console.log(str.endsWith('w'))
console.log(str.includes('ell'))
console.log(str.repeat(5))
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())

console.log(str.padStart(25, '%*%*'))
console.log(str.padEnd(10, '*'))