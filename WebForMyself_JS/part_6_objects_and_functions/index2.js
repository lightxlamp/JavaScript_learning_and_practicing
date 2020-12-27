// How to create an object
// Way #3

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/creates
let ford = Object.create({
    calculatedMilesPerYear: function() {
        // this.milesPerYear = this.mileage / this.age;
        Object.defineProperty(this, 'milesPerYear', {
            value: Math.ceil(this.mileage / this.age),
            enumerable: false, 
            writable: false,
            configurable: false  
        }  )  // defineProperties(objectToWhichPropNeedsToBeAdded, nameOfAKey/Prop)
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false // we don't want this field to be deleted. Default is already false, but this of for example only
    },
    model: {
        value: 'Focus',
        enumerable: true, 
        writable: false,
        configurable: false 
    },
    year: {
        value: 2012,
        enumerable: true,
        writable: false,
        configurable: false 
    },
    mileage: {
        value: 120789,
        writable: true,
        configurable: false 
    },
    age: {
        enumerable: true,
        get: function() {
            return new Date().getFullYear() - this.year;
        },
        set: function() {
            console.log('set Age');
        }
    }
})  // create accepts 1-2 params. 1st param - proto.  2nd - props 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
// ford.mileage = 100
// console.log(ford.mileage) == 120789
// writable
// true if and only if the value associated with the property may be changed (data descriptors only).
// У нас False по дефолту стоит. Поэтому не получилось поменять значение пробега.

ford.calculatedMilesPerYear();

for (var key in ford) {
    if(ford.hasOwnProperty(key))  // to remove key from prototype
        console.log(key, ford[key]);
}