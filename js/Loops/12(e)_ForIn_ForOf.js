
// for in -

/* to iterate through String/Array/object*/

// for of - 

/* to iterate through String/Array*/


let text = "I love my country Bangladesh";

let food = ["Choclate", "Cake", "Cookies", "coffee"];

let person = {

    Name: "Dipjoy Paul Antik",

    profession: "Student",

    Age: 27,
}




// string for in-

for(var i in text) {

    //console.log(`Index: ${i}  and items: ${text[i]}`);

    console.log(i); //[ we will get only index using string forin]
}

console.log(".............................")


// string for of-

for ( var j of text){

    console.log(j); // [we will get value or item using string for of ]
}



console.log("##################");


// Array for in - 

for( var k in food){

    console.log(`index: ${k} ; and items: ${food[k]}`);

    //console.log(k) // [ we will get index using array for in]
}


console.log(".................");



// Array for of - 

for( var  x of food){


    console.log(x) // [ we will get values/items using array for of]

}


console.log("##################");





// object for in-

for( var y in person){

   // console.log(`properties ${y} ; items ${person[y]}`);

    console.log(`properties: ${y} ; items: ${person.y}`);



    //console.log(y); // [ we will get properties]

}


console.log("..............");


//object for of-

for( var z of person){

    console.log(z); //     [ "not supported for of in object- "type error" ]
}




































