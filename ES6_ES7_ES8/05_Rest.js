// Rest 

function average(arr){
    return arr.reduce((acc, i) => acc += i, 0) / arr.length
}

console.log(average([10, 20, 30, 40, 50, 60]))

///////////////////////////////////////////////////////////

function averageRest(...args){
    return args.reduce((acc, i) => acc += i, 0) / args.length
}


console.log(averageRest(10, 20, 30, 40, 50, 60))

///////////////////////////////////////////////////////////

function averageRestV2(a, ...args){
    return (args.reduce((acc, i) => acc += i, 0) + a) / args.length
}

console.log(averageRestV2(1000, 20, 30, 40, 50, 60))