// old way
// capital letter for class as a good manner 
const Animal = function (options) {
    // this указывает на экземпляр класса который получится в итоге 
    this.name = options.name;
    this.color = options.color;

    this.makeNoise = function() {
        console.log('Noise from ', this.name);
    }
}

// better way to add functions to class
Animal.prototype.voice = function() {
    console.log('Voice of a ', this.name);
}

const dog = new Animal({name: 'Barbi', color: '#fff'})
const dog_2 = {name: 'Barbi', color: '#fff'}

console.log(Animal.prototype);

console.log(dog.makeNoise);
console.log(dog.voice);
dog.makeNoise()
dog.voice()

console.log(dog);
console.log(dog_2);