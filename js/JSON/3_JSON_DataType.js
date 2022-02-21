// https://jsonlint.com

//string
//number
//object(JSON OBJECT)
//array
//boolean
//null

// json object doesn't suport  undefined, date(coz convert string), function

let  person = {

    Name : "DIPJOY", // string

    age : 27,   // number

    hometown : "Chittagong",

    married : false, // boolean

    dob : 21-09-1994, // date

    test_null : null, //null

    test_undefined : undefined, // undefined

    greet : function(){ // function

        console.log(`hello ${this.Name}`);
    }
}

//person.greet();

let person_json = JSON.stringify(person);

console.log(person_json);

let person_new = JSON.parse(person_json);

console.log(person_new);

