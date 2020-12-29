function test() {
    let x = 10;

    function printX() {
        console.log(x);
    }

    return printX
}

let closure = test();
closure();