function expect(value) {
    return {
        toBe: exp => {
            if(value === exp) {
                console.log('Success');
            }
            else {
                console.error(`Value is ${value}, but expected value is ${exp}`);
            }
        }
    }
}

const sum = (a,b) => a + b;

const nativeNull = () => null;

module.exports = {sum, nativeNull}

console.log(sum(41, 2));

expect(sum(41, 2)).toBe(42);