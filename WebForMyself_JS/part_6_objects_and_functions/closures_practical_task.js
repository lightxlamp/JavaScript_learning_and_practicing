let a = [1, 2, 3]
let b = [5, 'Hello', 6]

Array.prototype.double = function() {
    console.log(this);

    return this.map(x => {
        if(typeof x === "number")
            return x * x
        else if(typeof x === "string")
            return x.concat(x)
    })
}

let newA = a.double();
let newB = b.double();

console.log(newA);
console.log(newB);