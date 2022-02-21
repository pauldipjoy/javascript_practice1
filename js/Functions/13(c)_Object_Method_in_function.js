

// object method in function-

let person = {

    fastname : "Alex",

    lastname : "paul",

    dob : "21-06-1998", // number /  string / date / array / object 
    

    fullname : function() {    //method

       // return  `${this.fastname}  ${this.lastname}`;

    return `${this.fastname} ${this.lastname}`.toUpperCase();
    }

}

console.log(person.fastname);

//console.log(person.fullname); //  <- If you access the fullName property, without (), it will return the function definition

console.log("MY Name is" + " " + person.fullname());










