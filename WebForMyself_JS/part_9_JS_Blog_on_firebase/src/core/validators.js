export class Validators {
    static required(value = '') {
        return value && value.trim()
    }

    static minLength(length) {
        // closures 
        return value => {
            return value.length >= length
        }
    }
}