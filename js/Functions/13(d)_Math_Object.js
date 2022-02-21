

// math object-

let val;


// Math Properties (Constants)-

//The syntax for any Math property is :  Math.property

/*Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E*/


/*val = Math.PI;

val = Math.E;*/



//Math Methods-

//The syntax for Math any methods is :   Math.method(number)

/*Math.round(x)	- Returns x rounded to its nearest integer
Math.ceil(x)	- Returns x rounded up to its nearest integer
Math.floor(x)	- Returns x rounded down to its nearest integer
Math.trunc(x)	- Returns the integer part of x (new in ES6)*/


//val = Math.round(1.1);
//val = Math.round(1.4);
//val = Math.round(1.5);
//val = Math.round(-1.5);


//val = Math.ceil(2.1);
//val = Math.ceil(2.4);
//val = Math.ceil(2.5);

//val = Math.ceil(-2.6); // return -2


//val = Math.floor(3.1);
//val = Math.floor(3.4);
//val = Math.floor(3.5);

//val = Math.floor(-3.6);  // return -4



//val = Math.trunc(4.1);
//val = Math.trunc(4.5);

//val = Math.trunc(-4.9);  // return -4



// OTHERS MATH OBJECTS()-


//val = Math.sqrt(64);  // Math.sqrt(x) returns the square root of x
//val = Math.sqrt(24);


//val = Math.pow( 2, 3 );  // Math.pow(x, y) returns the value of x to the power of y
//val = Math.pow( 4 , 4);



//val = Math.abs(-5.1);  //Math.abs(x) returns the absolute (positive) value of x

//val = Math.abs(5.1); // positive always positive



//Math.min() and Math.max()-

//Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments

//val = Math.min(1, 3, -12, -21, 7);
//val = Math.min(1, 8, -8, 1, 15);

//val = Math.max(35,12,-80,29,45);



//Math.random()-

//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)

//val = Math.random();



//JavaScript Random Integers

//Math.random() used with Math.floor() can be used to return random integers.

//val = Math.random() * 50; // return 0-49 numbers print here

//val = Math.floor(Math.random() * 100 + 1) // Returns a random integer from 1 to 100:

//Math.random() used with Math.ceil() can be used to return random integers.

//val = Math.ceil(Math.random() * 100 + 1) // // Returns a random integer from 1 to 101:





console.log(val)





