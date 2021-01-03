const Person = function () {
    let age
    let name

    function print_info() {
        console.log(this.age);
        console.log(this.name);
    }
}

let me = new Person();
me.age = 31;
me.name = 'Stas';
me.print_info();