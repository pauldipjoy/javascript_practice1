
//sub classes

//inheritence-


class Person{

    constructor( fname, lname ){

        this.Fastname = fname;

        this.Lastname = lname;


    }

    greeting() {

        return `hello ${this.Fastname} ${this.Lastname}`;
    }


}


class Customer extends Person {


    constructor(fname, lname, phone, id){

        super(fname, lname);

        this.phone = phone;

        this.id =  id;


    }

fullname(){

    console.log(`${this.Fastname} ${this.Lastname}`);

}


}


let person1 = new Person("Dipjoy", "Paul")

console.log(person1);

console.log(person1.greeting());

//console.log(person1.fullname()); // error



let customer1 = new Customer("john", "Haging", "01857569692", "12345");

console.log(customer1);

console.log(customer1.greeting());





