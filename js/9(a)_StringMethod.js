//String Methods and Properties

// String Methods and Properties-

//String Length-

let len = "Javascript Language";

console.log(len.length);


let len1 = "Javascript is a Language".length;

console.log(len1);




//Extracting String Parts-


//There are 3 methods for extracting a part of a string:

/*1.slice (start, end)

2.substring (start, end)

3.substr (start, length)*/



//The slice() Method-

/*slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).*/

let str = "Javascript Language";

console.log(str.slice(4,10));


//If a parameter is negative, the position is counted from the end of the string-

let str1 = "Programming Javascript Language";

console.log(str1.slice(-19, -15));


let str2 = "d i p j o y";

console.log(str2.slice(6));


let str3 = "JAVA IS A PROGRAMMING LANGUAGE"

console.log(str3.slice(-19));



//The substring() Method-

/*substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.*/


const substn = "DIPJOY PAUL ANTIK";

console.log(substn.substring(7,11));



//The substr() Method-


/*substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.*/



const substr = "javascript";

console.log(substr.substr(4,6));


const substr1 = "javascript";

console.log(substr1.substr(-5));




//Replacing String Content-

//The replace() method replaces a specified value with another value in a string:

let text = "MY Country Name Is INDIA!";

console.log(text.replace("INDIA" , "BANGLADESH"));


//The replace() method does not change the string it is called on. It returns a new string.

let text2 = "MY Country Name Is INDIA!";

let newtext = text2.replace("INDIA" , "KOLKATA");

console.log(text2);


//By default, the replace() method replaces only the first match:

let text3 = "I love the Country Name Is INDIA AND INDIA!";

console.log(text3.replace("INDIA" , "BANGLADESH"));


//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

//let text3 = "I love the Country Name Is INDIA AND INDIA!";

//console.log(text3.replace("india" , "BANGLADESH")); [error]


//********string regular expression extra topic ******** [skip]



//Converting to Upper and Lower Case-

//A string is converted to upper case with toUpperCase():

let text4 = "dipjoy";

console.log(text4.toUpperCase());

//A string is converted to lower case with toLowerCase():


let text5 = "JAVASCRIPT";

console.log(text5.toLowerCase());



let text6 = "javaScript";

console.log(text6.toLocaleUpperCase());



//The concat() Method-

//concat() joins two or more strings:

let text7 = "DIPJOY";

let text8 = "PAUL";

let text9 = text7.concat(" ", text8);

console.log(text9);


/* ***** All string methods return a new string. They don't modify the original string.

Formally said: Strings are immutable: Strings cannot be changed, only replaced.*****/




// String.trim()-

let txt = "    BANGLADESH    ";

console.log(txt.trim());





//Converting a String to an Array-

//A string can be converted to an array with the  split() method:


let arr1 = "HELLO WORLD";


console.log(arr1.split(","));

console.log(arr1.split(" "));

console.log(arr1.split()); //If the separator is omitted, the returned array will contain the whole string in index [0].

console.log(arr1.split(""));  //If the separator is "", the returned array will be an array of single characters:

let arr2 = "Bangladesh is a country";

console.log(arr2.split("n"));

console.log(arr2.split(" "))





//Extracting String Characters-


/*There are 3 methods for extracting string characters:

1.charAt(position)

2.charCodeAt(position)

3.Property access [ ]*/


//The charAt() Method-

//The charAt() method returns the character at a specified index (position) in a string:

let txt1 = "BANGLADESH";

console.log(txt1.charAt(1));


//The charCodeAt() Method-

/*The charCodeAt() method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).*/

let txt2 = "BANGLADESH";

console.log(txt2.charCodeAt(2));


//Property Access-

//ECMAScript 5 (2009) allows property access [ ] on strings:

let txt3= "HELLO WORLD";

console.log(txt3[0]);              


/*Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)*/

let  txt4 = "HELLO world";

console.log(txt4.charAt(500));

console.log(txt4[500]);




//extra string methods here-


//JavaScript String includes()-

let new1 = "my name is dipjoy paul!";

console.log(new1.includes("name"));

//console.log(new1.includes("dipa")); [error]


//JavaScript String indexOf()-

/*The indexOf() method returns the position of the first occurrence of a specified value in a string.

indexOf() returns -1 if the value is not found.

indexOf() is case sensitive.*/

let new2  = "Hello world, welcome to the universe.";

console.log(new2.indexOf("welcome"));

console.log(new2.indexOf("Welcome"));// Returns -1



//JavaScript String lastIndexOf()-

/*The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

lastIndexOf() searches the string from the end to the beginning, but returns the index s from the beginning, starting at position 0.

lastIndexOf() returns -1 if the value is not found.

lastIndexOf() is case sensitive.*/



let new3 = "Hello planet earth, you are a great planet.";

console.log(new3.lastIndexOf("planet")); 

console.log(new3.lastIndexOf("Planet")); // Returns -1



//avaScript String repeat()-

//The repeat() method returns a new string with a specified number of copies of the string it was called on.

let new4 = "java";

console.log(new4.repeat(4));







//***next topic string serach details there***


                            //*******************************************************************//










