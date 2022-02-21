//**Numbers**
/* 1. Numerical values with or witout decimals.
2. ex- 4,3.14,2.75755 */

/*let x;

x = 5;

console.log(x);

let  x1;

x1= 3.1416;

console.log(x1);


let x2;

x2 = 123e5; // e- 10**5

console.log(x2);

//or,

let x3;

x3 = 123* 10**5;

console.log(x3);

let x4;

x4 = 123e-5;

console.log(x4);


let  x5;

x5 = "34" + "36";

console.log(x5);

let x6;

x6 = "34" +  "HellowWorld";

console.log(x6);


let x7;

x7 = 34 + 35 + "HellowWorld";

console.log(x7);

let x8;

x8 = "THE RESULT:" + 34 + 36;

console.log(x8);


let  x9;

x9 = "34" - "25";

console.log(x9);



let  x10;

x10 = "34" * "36";

console.log(x10);


let  x11;

x11 = "10" / "5";

console.log(x11);


let  x12;

x12 = "30" * 2; //SPECIAL AND SAME RESULT

console.log(x12);


let  x13;

x13 = "25" % "5";

console.log(x13);


let  x14;

x14 = "25" % 5;

console.log(x14);


let  x15;

x15 = "25" % 4;

console.log(x15);



let  x16;

x16 = 34 % 5;

console.log(x16);

//only + concatination not  Arithmetic opertaors


let  y;

y = "34" + "36";

console.log(y);


let  x17;

x17 = 25 / 0;

console.log(x17);


let  x18;

x18 = "34" / "0";

console.log(x18);


let x19;

x19 = infinity;

console.log(x19);*/



//JavaScript has only one type of number. Numbers can be written with or without decimals.

let a = 3.14;    // A number with decimals

let b = 3;       // A number without decimals

console.log(a);
console.log(b);



//Precision

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.

let  x = 222222222222222;

let y = 77777777777777777777;

console.log(x);

console.log(y);


//The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:

let i = 0.2 + 0.3;

console.log(i);

let j = 0.2 + 0.1;

console.log(j);

//***To solve the problem above, it helps to multiply and divide:

let k = (0.2*10 + 0.1*10) /10;

console.log(k);


//Adding Numbers and Strings

//***special case***

let m = 10;

let n = 20;

let o = "the Result is:" + m + n;

console.log(o);

//if,

let m1 = 10;

let m2 = 20;

let m3 = m1 + m2 + " my name dip";

console.log(m3);


//Numeric Strings


//JavaScript strings can have numeric content:

/*let  n1 = 100; //[its a number]

let n2 = "100"  //[its a string]*/


let  m4 = "25";

let m5 = "5";

m6 = m4 / m5;

console.log(m6);


//***special case***


let  m7 = "25";

let  m8 = "5";

m9 = m7 + m8;

console.log(m9);



//NaN - Not a Number

// ***NaN is a JavaScript reserved word indicating that a number is not a legal number.

let  m10 = "hello";

let  m11 = "5";

m12 = m10 / m11;

console.log(m12);


//the global JavaScript function isNaN() to find out if a value is a not a number

let p = 100;

let q = "10d";

console.log(isNaN(p));
console.log(isNaN(q));


//If you use NaN in a mathematical operation, the result will also be NaN:

let  p1 = NaN;

let  p2 = 6;

p3 = p1 + p2;

console.log(p3);



let  p4 = NaN;

let  p5 = "6";

p6 = p4 + p5;

console.log(p6);


// ***NaN is a number: typeof NaN returns number:

let  p7 = NaN;

console.log(typeof(p7));

let  p8 = "NaN";

console.log(typeof(p8));



//Infinity

//Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let myNumber = 2;
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber;
}

console.log(myNumber);



//Division by 0 (zero) also generates Infinity:

let k1 = 8 / 0;

console.log(k1);

let k2 = -8 / 0;

console.log(k2);

//Infinity is a number: typeof Infinity returns number.

let k3 = Infinity;

console.log(typeof(k3));


//NUMBER SYSTEM-


//Decimal- Base 10

//0 1 2 3 4 5 6 7 8 9   //12 128 346


//Binary- Base 2

/*0    1
on   off*/


// Octal- Base 8

// 0 1 2 3 4 5 6 7


// Hexadecimal-  Base 16
   
// Hexa         Decimal                  HEXA
//              0 1 2 3 4 5 6 7 8 9 ->   A   B   C    D    E    F
//                                      10  11  12   13   14   15

// Decimal TO Binary Convert-

  // 348

  //348 / 2 = 174  Remainder-   0
 // 174 / 2 =  87  .....  -     0
//  87  / 2 =   43  ....   -    1
//  43 / 2  =   21  .....  -    1
//   21 / 2 =   10   .....  -   1 
//  10  / 2 =   5     ..... -   0
//  5 / 2   =   2    ...... -   1
//  2  / 2  =   1     ..... -   0
//  1 / 2   =  0      .....-    1  


//(348) BASE 10 - >  (1 0 1 0 1 1 1 0 0) BASE 2  

//       Successive Division called


// Decimal to  Octal Convert-

// 348 

// 348 / 8 =  43   Rmainder - 4

// 43 /  8 = 5    ......... - 3

//  5 / 8  = 0       .......  - 5 

// (348) base 10  ->   (5 3 4) base 8


// Decimal to Hexadecimal comvert-

// 348

//348 / 16 = 21 Remaider - 12 

// 21 / 16 = 1  .......... - 5

// 1 / 16 = 0    ..........- 1


// (348) base10 -  (1  5  12)  [ HEXA -  A   B   C    D    E    F
//                                      10  11  12   13   14   15 ]
//                 1  5  C **


//Hexadecimal

//let s = 0xFF;

//console.log(s);

//Never write a number with a leading zero (like 07).
//Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

/*By default, JavaScript displays numbers as base 10 decimals.

But you can use the   ***toString() method ***      to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.*/


let  s7 = 348;

let s8 = s7.toString(10);

console.log(s8);


/*let  s9 = 348;

let s10 = s9.toString(348);

console.log(s10);*/


let s1 = 38;

let s2 = s1.toString(2);

console.log(s2);


let  s3 = 348;

let s4 = s3.toString(8);

console.log(s4);


let  s5 = 348;

let s6 = s5.toString(16);

console.log(s6);



//Numbers Can be Objects

let s11 = 50;

let s12 = new Number(50);

console.log(typeof(s11));

console.log(typeof(s12));


/*Do not create Number objects. It slows down execution speed.
The new keyword complicates the code. This can produce some unexpected results:*/


//When using the == operator, equal numbers are equal:

let s13 = 50;

let s14 = new Number(50);

s15 = s13 == s14;

console.log(s15);



let s16 = 50;

let s17 = new Number(100);

s18 = s16 == s17;

console.log(s18);


//When using the === operator, equal numbers are not equal, because the === operator expects equality in both type and value.


let s19 = 50;

let s20 = new Number(100);

s21 = s19 === s20;

console.log(s21);


//Or even worse. Objects cannot be compared:


let s22 = new Number(100);

let s23 = new Number(200);

s24 = s22 == s23;

console.log(s24);


let s25 = new Number(100);

let s26 = new Number(100);

s27 = s25 === s26;

console.log(s27);


//Note the difference between (x==y) and (x===y).

//Comparing two JavaScript objects will always return false.,
















































