//JavaScript String Search-

//JavaScript methods for searching strings:

/*1. String.indexOf()

2. String.lastIndexOf()

3. String.startsWith()

4. String.endsWith()*/


//String.indexOf()

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

let str = "javascript is a 'programming' language";

console.log(str.indexOf("programming"));

console.log(str.indexOf("Programming"));  //[error]


let str1 = "javascript is a programming programming  language!";

console.log(str1.indexOf("programming"));


/*JavaScript counts positions from zero.

0 is the first position in a string, 1 is the second, 2 is the third ...*/




//String.lastIndexOf()-

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let str2 = "dipjoy paul 'antik' is a web developer!";

console.log(str2.lastIndexOf("web"));

let str3 = "dipjoy paul 'antik' is a web web developer!";

console.log(str3.lastIndexOf("web"));


let str4 = "dipjoy paul 'antik' is a web web developer!";

console.log(str4.lastIndexOf("Web"));


//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.















//String.includes()-

//The includes() method returns true if a string contains a specified value.-

let text = "JAVA SCRIPT IS A SCRIPING LANGUAGE!";

console.log(text.includes("script")); //false

let text1 = "JAVA SCRIPT IS A SCRIPING LANGUAGE!";

console.log(text1.includes("SCRIPT")); //true


//Check if a string includes "world", starting the search at position 12:

let text2 = "Hello world, welcome to the universe.";

console.log(text2.includes("world", 12));


let text3 = "Hello world, welcome to the universe.";

console.log(text3.includes("universe", 12));



let text4 = "hello world! please followme my personal activities";

console.log(text4.includes("personal",27));












//String.startsWith()-


//  The startsWith() method returns true if a string begins with a specified value, otherwise false:


let str5 = "Hello world";

console.log(str5.startsWith("Hello"));

let str6 = "Hello world";

console.log(str6.startsWith("hello")); // case sensetive

let str7 = "Hi! Are you okay?";

console.log(str7.startsWith("okay"));



//string.startsWith(seachvalue, start)

//Parameter Values-

/*Parameter	             Description

searchvalue	       Required. The value to search for.

start	          Optional. Default 0. The position to start the search.*/


//Examples

let str8 = "java script programming!";

console.log(str8.startsWith("java", 0));



let str9 = "java script programming!";

console.log(str9.startsWith("script", 5)); // true  inside


let str10 = "java script programming!";

console.log(str10.startsWith("script", 10));





//String.endsWith()-

//The endsWith() method returns true if a string ends with a specified value, otherwise false:

let strr = "java script programming!";

console.log(strr.endsWith("script"));


let strr1 = "java script programming!";

console.log(strr1.endsWith("programming"));



//Parameter Values

/*Parameter	                  Description

searchvalue	             Required. The value to search for.

length	                 Optional. The length to search.*/


let strr2 = "java script programming language";

console.log(strr2.endsWith("programming", 11)); //false


let strr3 = "java script programming language";

console.log(strr3.endsWith("script", 11));  //true







