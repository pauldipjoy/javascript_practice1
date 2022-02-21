//JavaScript Strings

//A JavaScript string is zero or more characters written inside quotes.

let text = "DIPJOY PAUL";

console.log(text);


//You can use single or double quotes:

let x = "JavaScript";

let x1 = 'DIPJOY';

console.log(x);

console.log(x1);


//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let text1 = "LIFE IS LIKE A BOX OF CHOCLATE"

let text2 = "LIFE IS LIKE A BOX OF 'CHOCLATE'"

let text3 = 'LIFE IS LIKE A BOX OF "CHOCLATE"'

//let  txt = "lif is a full of  "hurming""; [error]

console.log(text1);

console.log(text2);

console.log(text3);

//console.log(txt); [error]



//String Length-


// to find the length of a string, use the built-in length property:

let  x2 = "DIPJOYPAULANTIK"

console.log(x2.length);

let  x3 = "DIP JOY PAUL ANTIK!"

console.log(x3.length);

let len = "HELLO \n World!";

console.log(len.length);

let len1 = "BOHUBRIHI".length;

console.log(len1);



//Escape Character-

//Because strings must be written within quotes, JavaScript will misunderstand this string:


//let text4 =  "We are the so-called "Vikings"  from the north.";

//console.log(text4);




/*The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code	Result	Description

\'	     '	        Single quote

\"	     "	        Double quote

\\	     \	        Backslash


The sequence \"  inserts a double quote in a string:*/

let text5 =  "We are the so-called \"Vikings\"  from the north.";

console.log(text5);


//The sequence \'  inserts a single quote in a string:

let text6 = 'He\'s a good Boy.';

console.log(text6);


//The sequence \\  inserts a backslash in a string:

let text7 = "HE IS A \\GOOD\\ BOY.";

console.log(text7);


//Six other escape sequences are valid in JavaScript:

/*Code	Result

\b	   Backspace
\f	   Form Feed
\n	   New Line
\r	   Carriage Return
\t	   Horizontal Tabulator
\v	   Vertical Tabulator*/


let text8 = "MY NAME IS DIPJOY \t PAUL ANTIK";

console.log(text8);



//Breaking Long Code Lines-

//You can also break up a code line within a text string with a single backslash:

let  text9 = "Life is like a box of choclate.\
YOU never know what you are gonna get";

console.log(text9);

/* ***The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.*** */


//A safer way to break up a string, is to use string addition:

let  text10 = "Life is like a box of choclate. " + 
"YOU never know what you are gonna get";

console.log(text10);


// ***You cannot break up a code line with a backslash:***

/*let text11 = \ "life is like a biox of chocklate!!!"

console.log(text11);*/  //[error]




// Strings Can be Objects-


//JavaScript strings are primitive values, created from literals:

//let firstName = "dipjoy";


// But strings can also be defined as objects with the keyword new:

//let firstName1 = new String("dipjoy");

//example-

let a = "DIPJOY";

let b = new String("DIPJOY");

console.log(typeof(a));

console.log(typeof(b));


//When using the == operator, equal strings are equal:

let a1 = "dipjoy";

let a2 = new String("dipjoy");

console.log(a1==a2);

//When using the === operator, equal values may not be equal, because the === operator expects equality in both data type and value-

let a3 = "dipjoy";

let a4 = new String("dipjoy");

console.log(a3 === a4); 




//Objects cannot be compared:

//using the == operator

let obj = new String("java");

let obj1 = new String("java");

console.log(obj == obj1);


let obj2 = new String("java");

let obj3 = new String("javascript");

console.log(obj2 == obj3);



//using the === operator-

let obj4 = new String("JAVA");

let obj5 = new String("JAVA");

console.log(obj4 === obj5);


let obj6 = new String("JAVA");

let obj7 = new String("C++");

console.log(obj6 === obj7);


























