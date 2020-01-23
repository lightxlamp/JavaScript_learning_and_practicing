// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_reduce

class Person {}

class PersonV2 {
  constructor(name) {
    this.name = name;
  }

  type = "NPC";

  sayHello() {
    console.log("Hello, my name is", this.name);
  }
}

let Stas = new Person();
console.log("Stas: ", Stas);

let Viktor = new PersonV2();
console.log("Viktor", Viktor);

let Alex = new PersonV2("Alex");
console.log("Alex", Alex);
Alex.sayHello();

console.log("Prototype comparison: ", Alex.__proto__ === Person.prototype);
console.log("Prototype comparison: ", Alex.__proto__ === PersonV2.prototype);

class Student extends PersonV2 {
  constructor(name, department) {
    super(name);
    this._department = department;
  }

  get department(){
      return this._department.toUpperCase();
  }

  set department(department)
  {
      if(department.length < 3){
          console.log('! Department name should be at least 3 symbols');
      }
      else {
        this._department = department;
      }
  }

  aboutMe() {
    console.log("My type is", this.type, ". I am 24 y.o");
  }

  sayHello() {
      super.sayHello();
      console.log('Rewritten "sayHello - method');
  }
}

let sfwStudentErick = new Student("Erick", "Software Engineering");
console.log("Erick", sfwStudentErick);
sfwStudentErick.sayHello();
sfwStudentErick.aboutMe();
console.log('Get Department - ', sfwStudentErick.department);
sfwStudentErick.department = 'sfw';
console.log('Get Department - ', sfwStudentErick.department);
sfwStudentErick.department = 'IT';
console.log('Get Department - ', sfwStudentErick.department);

class Utils {
    square(num) {
        return num * num
    }
}

myUtil = new Utils();
console.log('myUtil.square(4)', myUtil.square(4));

class UtilsV2 {
    static square(num) {
        return num * num
    }
}

console.log('UtilsV2.square(5)', UtilsV2.square(5));

