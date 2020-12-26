// How to create an object
// Way #1
let obj = {
    //...
}

// Way #2 
// ES5 - no class, extends.. only functions 
// Capital letter - Car - is for class #styleguide 
function Car(name, year) {
    this.name = name;
    this.year = year;
    this.age = new Date().getFullYear() - year;
    this.printYear = function() {
        console.log(new Date().getFullYear() - this.year);
    }
    // return this
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
}

Car.prototype.color = 'black';

const prius = new Car('Toyota Prius', 2006); // new return "this"
prius.color = 'red';
const bmw = new Car('E34', 1989); 
console.log(prius);
console.log(bmw);

// Прелесть в том, что мы 1 раз написали метод GetAge, но он доступен для всех объектов которые мо создаем от класса Car...
// Ну и на#уя... Пока не понял. Мой Age - доступен так же всем. И функция моя print year - так же всем доступна...
// Он походу плохо объяснил.. Типо getAge может быть в другом месте.. в другой класс можно будет впихнуть, у которого тоже Year есть.
// Даже в класс Person

let Stas = {
    name: 'Stas',
    year: 1989
}

Stas.__proto__ = Car.prototype
console.log(Stas.getAge()); // А ну вот... Канает ))) Типо не надо для другого типо объека городить функцию 

//
function Moto(name, year) {
    this.name = name;
    this.year = year;
}

let enduro = new Moto('KTM 690', 2009)
enduro.__proto__ = Car.prototype
console.log(enduro.getAge());
console.log(enduro.color);

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
// Все объекты в JavaScript являются потомками Object ; все объекты наследуют методы и свойства из прототипа объекта Object.prototype ...

// https://learn.javascript.ru/prototype#
// Другими словами, прототип – это «резервное хранилище свойств и методов» объекта, автоматически используемое при поиске.

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// Prototypes are the mechanism by which JavaScript objects inherit features from one another. In this article, we explain how prototype chains 