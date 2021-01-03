const Person = function () {
    let age = 31;
    let name = 'Stas';

    let print_info = function () {
        console.log(this.age);
        console.log(this.name);
    }
}

Person.print_info();