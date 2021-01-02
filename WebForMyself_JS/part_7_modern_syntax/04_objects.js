// const createCar = (name, model) => {
//     return {
//         name, 
//         model
//     }
// }

const createCar = (name, model) => ({ name, model }) 

const ford = createCar('Ford', 'Focus')
console.log(ford);


const yearField = 'year';

const bmw = {
    name: 'BMW',
    ['model' + Math.random()] : 'X6',
    [yearField]: 2018,

    // logFields() {
    //     console.log(this.name, this.model, this.year);
    // }
    // to remove repeating 'this'
    logFields() {
        const {name, year, model} = this
        console.log(name, model, year);
    }
}

console.log(bmw);
bmw.logFields();
const {year} = bmw
console.log(year);