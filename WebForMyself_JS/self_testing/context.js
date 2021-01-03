const Person = {
    age : 31,
    name : 'Stas',

    print_info: function () {
        setTimeout(function () {
            console.log(this.age);
            console.log(this.name);
        }.bind(Person), 2000)
    }
}

Person.print_info()