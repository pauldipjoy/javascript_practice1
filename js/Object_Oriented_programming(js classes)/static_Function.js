

//static function-


class Person{

    constructor(fname, lname){


        this.Fastname = fname;

        this.Lastname = lname;


    }

    greeting(){

        console.log(`Hello ${this.Fastname} ${this.Lastname}!`);
    }


    static test() {

        console.log("Hello I am static!")

    }
}


let person1 = new Person("DIPJOY", "PAUL");

console.log(person1.greeting());

console.log(Person.test());

console.log(Person.test());