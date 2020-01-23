function sum(a, b)
{
    return a + b
}

console.log(sum())

function sumWithDefaultParam(a, b = 30)
{
    return a + b
}

console.log(sumWithDefaultParam(10))
console.log(sumWithDefaultParam(10, 100))

///////////////////////////////////////////////////////////
defaultA = 1
defaultB = 1 

function sumWithDefaultParams(a = defaultA, b = defaultB){
    return a + b
}

console.log(sumWithDefaultParams())

///////////////////////////////////////////////////////////
getDefaultB = b => b * b

function sumWithDefaultParams2(a = 10, b = getDefaultB(a)) 
{
    return a + b
}

console.log(sumWithDefaultParams2())