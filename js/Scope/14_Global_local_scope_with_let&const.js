
// var & let & const

// let & const (ES6)

//GLOBAL scope-

var a = 1;

let b = 2;

const c = 3;

//var d = 20; // local variable can be access in global variables

console.log(`Global scope: `, a, b, c);



function mytest(){

    var a = 4;

    let b = 5;

    const c = 6;

   // var d = 30;  // global variable can not be access in local variable

    console.log(`Function scope: `, a, b, c );

}

mytest();


console.log(`Global scope: `, a, b, c);


if(true){

    var a = 7;

    let b = 8;

    const c = 9;

    console.log(`If scope: `, a, b, c);

}

console.log(`Global scope: `, a, b, c);


for( var a = 0; a < 10; a++ ){

    console.log(`for loop scope: `, a);
}

console.log(`Global scope: `, a, b, c);






