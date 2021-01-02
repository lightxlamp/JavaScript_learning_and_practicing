function getAge(year) {
    const current = new Date().getFullYear() - year;
    return current
}
console.log(getAge(1989))


const calculateAge = year => {
    return new Date().getFullYear() - year;
}
console.log(calculateAge(1989))

// No need to write return
const calculateAge2 = year => new Date().getFullYear() - year;
console.log(calculateAge2(1989))

const logAge = year => console.log(new Date().getFullYear() - year);
logAge(1988);


const person = {
    age: 32,
    name: 'Stas',
    logNameTimeout: () => {
        setTimeout(function() {
            console.log(this.name);
        }, 1000)
    }    
}

person.logNameTimeout();