
// primitive Types -

// number, string, Boolean

//deals with value

// different address

let a = 9;

let b = a;  // b = 7

a = 15;

console.log(b);

// string-

let Name = "dipjoy";

let newName = Name;

Name = "dip";

console.log(newName);




// Reference Types-

// array , object


// Deals with address

// same address


let number = [ 1, 2, 6];

let newnumber = number;

console.log(newnumber);


number[2] = 100;

console.log(number);

console.log(newnumber);



//object

const obj = { posi1:"left", posi2:"top", posi3:"right", posi4:"bottom" };

const newobject = obj;

console.log(newobject);

obj.posi3 = "leftbottom";

console.log(newobject);






