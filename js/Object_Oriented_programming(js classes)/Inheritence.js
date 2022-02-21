

class Car{

    constructor(brand){

        this.carname = brand;

    }

    greeting(){

        return "I HAVE A" + " " +  this.carname + " " + "Car";

    }

}

class Model extends Car{

    constructor(brand, mod){

        super(brand);

        this.Model = mod;
    }
    present(){

        return  "MY own car" + " " + this.carname  + " " + " Which model is" + " " + this.Model;
    }
}

let text1 = new Car("BMW");

//console.log(text1);

let text2 = new Model("BMW" , "BMWZ4")

console.log(text1.greeting());

console.log(text2.present());