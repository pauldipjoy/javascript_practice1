

//JavaScript Class Syntax

//Use the keyword class to create a class.

//Always add a method named constructor():

// class is a template or blueprint

//Syntax-

/*class ClassName {

constructor() { ... }

}*/



/*let person1 = {

    Fastname: "Dipjoy",

    Lastname: "Paul",

    dob: "09-21-1994"


    fullname: function() {

    console.log(`${this.Fastname} ${this.Lastname}`);

    
    }
}

let person2 = {

    Fastname: "john",

    Lastname: "carry",

    dob: "08-25-1996"

    fullname: function() {

    console.log(`${this.Fastname} ${this.Lastname}`);
        
    }
}

console.log(person1);

console.log(person2);*/



//create a class-

// class name always fast letter capital


class Person{

    constructor( fname, lname, Birthday){

        this.firstname = fname;

        this.lastname = lname;

        this.dob = Birthday;

    }

    calculateage(){

        let birthday = new Date(this.dob);

        let diff = Date.now() - birthday.getTime();

        let agedate = new Date(diff);

        return Math.abs(agedate.getUTCFullYear()-1970);


    }

    fullname(){

        console.log(this.firstname,this.lastname);
    }

}

let person1 = new Person("DIPJOY", "PAUL", "09-21-1994"); // new date

let person2 = new Person("RIO", "CARRY", "11-28-1996");

let person3 = new Person("OSLO", "HAGING", "10-25-1992");


console.log(person1.calculateage());

console.log(person2.calculateage());

console.log(person3.calculateage());



console.log(person1.fullname());

console.log(person2.fullname());

console.log(person3.fullname());