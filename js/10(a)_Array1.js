//JavaScript Arrays-

const cars = ["Saab", "Volvo", "BMW"];

console.log(cars);


//Spaces and line breaks are not important. A declaration can span multiple lines:

const arr = [

    "Saab",
    "Volvo",
    "BMW"
];

console.log(arr);


//You can also create an array, and then provide the elements:

let arr1 = [];

arr1[0]= "DIPJOY";

arr1[1]= "dipa";

arr1[2]= "raj";

console.log(arr1);


//Accessing Array Elements-

//You access an array element by referring to the index number:

let arr2 = ["JAVA","JS","PYHTON"];

console.log(arr2[0]);

//Changing an Array Element


let arr3 = ["JAVA","JS","PYHTON"];

arr3[1] = "html";

console.log(arr3);




//Access the Full Array-

const countries = ["BANGLADESH", "IDIA", "GERMANY"];

document.getElementById("DEMO").innerHTML = countries;

console.log(countries);


//Arrays are Objects-

let arr4 = ["JAVA","JS","PYHTON"];

console.log(typeof(arr4));




//The length Property-

//The length property of an array returns the length of an array (the number of array elements).-

const text = ["A", "B", "C", "D"];

console.log(text.length);


//Accessing the First Array Element-

const fruit = ["Apple", "Banana", "Mango", "Jackfruit"];

console.log(fruit[0]);



//Accessing the Last Array Element-


const fruit1 = ["Apple", "Banana", "Mango", "Jackfruit"];

fruit1[4] = "Orange";

fruit1[5] = "Oranges";

fruit1[6] = "Orangess";



console.log(fruit1[fruit1.length-1]); //dinamically last element





//Looping Array Elements-

//One way to loop through an array, is using a for loop-



/*const countries1 = ["BANGLADESH", "INDIA", "GERMANY", "PORLAND"];

for(i = 0; i < countries1.length; i++) {

    console.log(i);

    console.log(countries1[i]);
}

console.log("FINISHED!");*/



let countries2 =["BANGLADESH", "INDIA", "GERMANY", "AUSTRALIA"];

let ncount = countries2.length;

text1 = "<ul>";

for(i = 0; i < ncount; i++){

    text1 += "<li>" + countries2[i] + "</li>";
}
text1 += "</ul>";

console.log(text1);



//use the  Array.forEach()  function:


/*const cars1 = ["BMW", "AUDI", "LAMBOR"];

function myfunction(value) {

    console.log(value);
}

cars1.forEach(myfunction);


console.log("finished");*/



const fruits2 = ["Banana", "Orange", "Apple", "Mango"];


let text2 = "<ul>";
fruits2.forEach(myFunction);
text2 += "</ul>";

console.log(text2);

function myFunction(value) {
  text2 += "<li>" + value + "</li>";
}



//Adding Array Elements-

//The easiest way to add a new element to an array is using the push() method:


let fruits3 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.push = "pinapple";

console.log(fruits3);

//New element can also be added to an array using the length property:

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];

fruits4[fruits4.length] =  "lichi";

console.log(fruits4);  







//Associative Arrays-


/*Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.*/

const number = [1, 2, 3];

console.log(number);

const person = {Name:"Dipjoy", Age:27}

console.log(person);

//but if-

//WARNING !!

/*If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.*/

const man = [];
man["firstName"] = "John";
man["lastName"] = "Doe";
man["age"] = 46;
console.log(man.length);     // Will return 0
console.log(man);
console.log(man[0])

//otherwise-

const gender = [];

gender[0] = "JOHN";
gender[1] = 23;

console.log(gender.length);

console.log(gender);



//The Difference Between Arrays and Objects-


/*In JavaScript, arrays use  *numbered indexes*.  

In JavaScript, objects use    *named indexes.* */


//Arrays are a special kind of objects, with numbered indexes.-

let num = [1, 2, 3, 4];

console.log(num);



//How to Recognize an Array-

/*A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator  typeof  returns "object":*/

let num1 = [1, 2, 3];

console.log(typeof(num1));

let obj = {Name:"DIP", Age:27};

console.log(typeof(obj));


//Solution 1:

//To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

let num2 = [1, 2, 3];

console.log(Array.isArray(num2));

let obj1 = {Name:"DIP", Age:27};

console.log(Array.isArray(obj1));



//Solution 2:

//The instanceof operator returns true if an object is created by a given constructor:

let number1 = [1, 2, 3];

console.log(number1 instanceof Array);

console.log(number1 instanceof Object);

let person1 = {Name:"DIP", Age:27};

console.log(person1 instanceof Object);

console.log(person1 instanceof Array);








