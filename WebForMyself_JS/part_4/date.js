// moment.js 

let date = new Date()
console.log(date);
console.log(date.getSeconds());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth()); // December is 11ths month. June is 0th month
// Current Date Dec 13 2020. Displayed as a 11 13 2020
console.log(date.setDate(19)); // Setting new day 
console.log(date.getDate());
console.log(date.getUTCDate()); // Without timeZone. Without +3/+6. Just 0
console.log(date.getTime()); // milliseconds from 1st Jan of 1970