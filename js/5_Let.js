
// let x; -> **declare**
// x=6;  -> **assign**

// ***let Cannot be Redeclared***

// let x = "DIPJOY PAUL";
// let x = 0;
// SyntaxError: 'x' has already been declared

// With var you can:
// var x = "John Doe";

// var x = 0;


// *** Block Scope***

// var x = 30; [global scope(FULL HOME ROOM)]

// ***function scope***

// function sleep(){  [function scope (PARTICULAR ONE HOUSE ROOM)]

// }

// if(true){ 

// }
//  sleep(); **function call**

// ***block scope***

// if(true){
//   let x = 9;
//   console.log(x);
// }

// console.log(x)  ***Variables declared inside a { } block cannot be accessed from outside the block***


// if here:
// let x= 8;  ***Variables declared inside a { } block can be accessed from outside the block***

// if(true){
//     let x = 9;
//     console.log(x);
// }

// console.log(x);


// Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.

// if(true){
//         var x = 9;
//         console.log(x);
//     }
    
//     console.log(x);



// *** Let Hoisting ***

// let myName;
// myName = "DIPJOY ";
// let myName;
// console.log(myName);



// javascript decalration first

// var myName

// myName = undefined

/*myName = "DIPJOY ";
var myName;
console.log(myName);*/


// *** Redeclaring ***

// var x = 8;
// console.log(x);  [allowed]
//  var x =9;
//  console.log(x); [allowed]


// var x = 8;
// console.log(x);
// let x = 9;
// console.log(x); [not allowed and error]


// *** block scope ***
// {
//     let x = 4;
//     let x = 8;
//     console.log(x); [not allowed and error]
// }


// {

//     let x = 2;
//     var x = 9;

//     console.log(x); [not allowed]

// }





