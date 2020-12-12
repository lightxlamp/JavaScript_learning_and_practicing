let person = {
    name: 'Stas',
    age: 31,
    job: 'frontend',
    fiends: ['Alex', 'Tilek'],
    car: {
        model: 'Toyota Prius',
        year: 2006
    }
}

let str = JSON.stringify(person);

console.log(person);
console.log(str);
console.log(JSON.parse(str));