//JavaScript Array Iteration-

//Array forEach() Method-

const numbers = [45, 6, 3, 8, 25, 21];


function myfunction(value, index, array){

    console.log(value);
    console.log(index);
    console.log(array);
    console.log("................");

}

//array method()

numbers.forEach(myfunction);






//Array map() Method-


/*The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:*/


const num = [25, 6, 9, 8, 12, 20];



function myfunctions(value){

    return value * 2;


}

// array method()

const maps = num.map(myfunctions);

console.log(maps);

console.log(num);





//Array filter() Method-

//The filter() method creates a new array with array elements that passes a test.


const numberss = [56, 23, 4, 8, 25, 70];


function myelement(value, index, array) {

    return value > 20;

}

// array method()

const result = numberss.filter(myelement);

console.log(result);

console.log(numberss);






//************

//Array reduce() Method-


/**The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().*/


//The reduce() method does not reduce the original array.



const item = [50, 20, 30, 90, 10, 45];


function myitems(total, value, index, array){

    return total + value


}


const value = item.reduce(myitems);

console.log(value);



/*Note that the function takes 4 arguments:

The total (the initial value / previously returned value)
The item value
The item index
The array itself*/


//The reduce() method can accept an initial value:


let  items = [50, 20, 30, 90, 10, 45];


function myitems(total, value, index, array){

    return total + value


}


const values = items.reduce(myitems, 10);

console.log(values);



//Array  reduceRight() Method-

//The reduceRight() works from right-to-left in the array. See also reduce().


let  itemss = [50, 20, 30, 90, 20, 45];


function myitemss(total, value, index, array){

    return total + value


}


const valuess = itemss.reduceRight(myitems, 10);

console.log(valuess);


//************* 






//Array every() Method-

//The every() method check if all array values pass a test.

//This example check if all array values are larger than 18:  all values true return true   and all values false return false  

const type = [12, 36, 25, 70, 50];


function mytype(value, index, array){

    return value > 10


}

const news = type.every(mytype);

console.log(news);





const types = [12, 36, 25, 70, 50];


function mytypes(value, index, array){

    return value > 100


}

const newss = type.every(mytypes);

console.log(newss);






//Array some() Method-


/*The some() method check if some array values pass a test.

This example check if some array values are larger than 18:  only one value is true return true and only one value is false return false   */



const text = [20, 23, 25, 6, 19, 35]

function mytext(value, index, array){


return value > 30

}


const totalss = text.some(mytext);

console.log(totalss);







//Array indexOf() Method-

/*The indexOf() method searches an array for an element value and returns its position.

Note: The first item has position 0, the second item has position 1, and so on.*/


const fruits = ["orange", "mango", "apple", "banana"];

console.log(fruits.indexOf("apple"));


const fruitss = ["orange", "mango", "apple", "banana"];

console.log(fruits.indexOf("Apple"));  //RETURN -1 CASE SENSETIVE





//Array lastIndexOf() Method-


//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

const fruitsss = ["orange", "apple", "orange", "mango"];

console.log("Orange is found in pisition" + fruitsss.lastIndexOf("orange"));






//Array includes() Method-


//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).


const car = ["bmw", "audi", "toiota", "tatamoto", "lamborgini"];

console.log(car.includes("audi"));

console.log(car.includes("Audi"));   // case sensetive retuen false







//Array find() Method-


//The find() method returns the value of the  first array  element that passes a test function.

//This example finds (returns the value of) the first element that is larger than 18:


const texts = [20, 15, 25, 10];


function mytexts(value, index, array) {

    return value > 18

}

const amount = texts.find(mytexts);

console.log(amount);




const textss = [20, 35, 25, 10];


function mytextss(value, index, array) {

    return value < 18

}

const amounts = textss.find(mytextss);

console.log(amounts); 





//Array findIndex() Method-

//The findIndex() method returns the index of the first array element that passes a test function.

//This example finds the index of the first element that is larger than 18:


const textsss = [ 5, 15, 25, 35, 45];

function mytextsss(value, index, array){

    return value > 18


}


const amountss = textsss.findIndex(mytextsss);

console.log(amountss);





//Array.from() Method-

//The Array.from() method returns an Array object from any object with a length property or any iterable object.


const myarr = Array.from("ABCDEFGH");

console.log(myarr);

// The Array.from() method is not supported in Internet Explorer.






















