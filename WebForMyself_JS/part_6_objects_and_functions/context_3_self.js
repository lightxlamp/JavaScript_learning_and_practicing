function printKeys(obj) {
    console.log(obj);
    for(key in obj) {
        console.log('[' + key + ']', obj[key]);
    }
}

const Box = {
    width: 40,
    height: 40
}

const Circle = {
    radius: 100
}

printKeys(Box)
printKeys(Circle)

// Lol XD 
// Rewrite file context_2.js from memory... We don't need context if write in this way... May be - bad example
// Not practical... Just use for(key in obj) { not     for(key in this) {
// Example for example XD ... Need to find a real life usage. Helpful 
