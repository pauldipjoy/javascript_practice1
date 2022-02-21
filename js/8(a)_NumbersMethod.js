//The toString() Method


/*The toString() method returns a number as a string.

All number methods can be used on any type of numbers (literals, variables, or expressions):*/



let x = 2194;

let y = x.toString();

console.log(y);


let x1 = 2194;

let newN = x1.toString();

console.log(typeof(newN));


let x2 = 2194;

let  newn = (2194).toString();

console.log(newn);


let x3 = 21+20;

let  y2 = (21+20).toString();

console.log(y2);


let x4 = 3.1416;

let newn1 = 3.1416.toString(2);

console.log(newn1);


const x5 = 3.1416;

const x6 = x5.toString(16);

console.log(x6);






// The toExponential() Method-


/*toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:*/


let a = 9.565;

let b = a.toExponential(2);

console.log(b);


let a1 = 956500000000000;

console.log(a1.toExponential(2));

let a2 = 9.80000000000;

console.log(a2.toExponential(6));


//The parameter is optional. If you don't specify it, JavaScript will not round the number.


let a3 = 9.898;

console.log(a3.toExponential());



// The toFixed() Method-

/*toFixed() returns a string, with the number written with a specified number of decimals:*/

let b1 = 8.256;

console.log(b1.toFixed());

console.log(b1.toFixed(0));

console.log(b1.toFixed(2));

console.log(b1.toFixed(4));

console.log(b1.toFixed(6));

console.log(b1.toFixed(8));

//***toFixed(2) is perfect for working with money.***




//The toPrecision() Method-

/*toPrecision() returns a string, with a number written with a specified length:*/

let b2 = 9.7896;

console.log(b2.toPrecision());

console.log(b2.toPrecision(2));

console.log(b2.toPrecision(4));

console.log(b2.toPrecision(6));



//The valueOf() Method-

/*valueOf() returns a number as a number.*/

let b3 = 123;

let b4 = 123+2;

console.log(b3.valueOf());

console.log(b3.valueOf(123));

console.log(b4.valueOf());

// In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).

// The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

// There is no reason to use it in your code.



//Converting Variables to Numbers

/*There are 3 JavaScript methods that can be used to convert variables to numbers:


//The Number() method

//The parseInt() method

//The parseFloat() method



These methods are not number methods, but global JavaScript methods.*/



//The Number() Method-

let b5 = true;

console.log(Number(b5));

let b6 = false;

console.log(Number(b6));


let b7 = "10";

console.log(Number(b7));

let b8 = "  10";

console.log(Number(b8));


let b9 = "10  ";

console.log(Number(b9));

let b10 = "  10  ";

console.log(Number(b10));

let b11 = "10.33";

console.log(Number(b11));



let b12 = ("10 13 14") ;

console.log(Number(b12));


const l = ("10 13");

console.log(Number(l));


let b13 = ("10 , 13");

console.log(Number(b13));


let b14 = "dip";

console.log(Number(b14));

//***If the number cannot be converted, NaN (Not a Number) is returned.***





//The Number() Method Used on Dates-


//Number() can also convert a date to a number.

/*The Number() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:*/

let p = "2021-10-25"

console.log(Number(new Date(p)));


//The parseInt() Method-

//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

let q = "10";

console.log(parseInt(q));

let q1 = "-10";

console.log(parseInt(q1));

let q2 = "10.32";

console.log(parseInt(q2));

let q3 = "  50";

console.log(parseInt(q3));


let q4 = ("40,20,30");

console.log(parseInt(q4));


let q5 = ("10.24 20 30");

console.log(parseInt(q5));


let q6 = ("60 years")

console.log(parseInt(q6));


let q7 = ("years 60");

console.log(parseInt(q7));




// The parseFloat() Method-

/*parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:*/

let r = "80";

console.log(parseFloat(r));


let r1 = "80.25";

console.log(parseFloat(r1));

let r2 = " 80";

console.log(parseFloat(r2));

let r3 =  ("years 80");

console.log(parseFloat(r3));

let r4 = ("80  years");

console.log(parseFloat(r4));



//nested method-

let r5 = "3.1416";

console.log(parseFloat(r5.toString(2)));

let r6 = 4.1235;

console.log(parseInt(r6.toString()));





// ***Number Properties-***


/*Property	                        Description

MAX_VALUE	                Returns the largest number possible in JavaScript

MIN_VALUE	                Returns the smallest number possible in JavaScript

POSITIVE_INFINITY	        Represents infinity (returned on overflow)

NEGATIVE_INFINITY	        Represents negative infinity (returned on overflow)

NaN	Represents a            "Not-a-Number" value*/


//JavaScript MIN_VALUE and MAX_VALUE

//MAX_VALUE returns the largest possible number in JavaScript.

let f = Number.MAX_VALUE;

console.log(f);

let  f1 = Number.MIN_VALUE;

console.log(f1);




// JavaScript POSITIVE_INFINITY-

let i = Number.POSITIVE_INFINITY;

console.log(i);

let i1 = 1 / 0;

console.log(i1);


// JavaScript NEGATIVE_INFINITY-

let i3 = Number.NEGATIVE_INFINITY;

console.log(i3);

let i4 = -1 / 0;

console.log(i4);


let i5 = -100 / 0;

console.log(i5);



//JavaScript NaN - Not a Number-

let n = Number.NaN;

console.log(n);


//NaN is a JavaScript reserved word indicating that a number is not a legal number.

//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let n1 = 100 / "javascript";

console.log(n1);


//javascript isNaN()  method-

let n2 = "javascript";

console.log(isNaN(n2));

let n3 = 3.1416;

console.log(Number.isNaN(n3));

let n4 = 1994;

console.log(isNaN(n4));


let n5 = "1994dipjoy";

console.log(isNaN(n5));




//JavaScript Number isFinite()-

const n6 = 123;

const result = isFinite(n6);

console.log(result);


const n7 = -1 / 0;

const result1 = isFinite(n7);

console.log(result1);



const n8 = 1.7976931348623157e+310;

const result2 = isFinite(n8);

console.log(result2);




//JavaScript Number isInteger()-


const num = 29;

const res = Number.isInteger(num);

console.log(res);



const num1 = 29.36;

const res1 = Number.isInteger(num1);

console.log(res1);



const num2 = "29";

const res2 = Number.isInteger(num2);

console.log(res2);





//JavaScript Number isSafeInteger()-


//console.log(Number.MAX_SAFE_INTEGER);


const maxint = 9007199254740991;

console.log(Number.isSafeInteger(maxint));


const maxint1 = 900719925474099123;

console.log(Number.isSafeInteger(maxint1));













//Number Properties Cannot be Used on Variables


/*Number properties belongs to the JavaScript's number object wrapper called Number.

These properties can only be accessed as Number.MAX_VALUE.

Using myNumber.MAX_VALUE, where myNumber is a variable, expression, or value, will return undefined:*/

//let  n9 = 45;

//console.log(n9.MAX_VALUE());



























































