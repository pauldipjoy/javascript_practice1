//JavaScript Sorting Arrays

//Sorting an Array-

//The sort() method sorts an array alphabetically:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.sort());



//Reversing an Array-

const fruitss = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruitss.sort());

console.log(fruitss.reverse());




//Numeric Sort-

/*By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:*/


const number = [40, 100, 1, 5, 25, 10];

number.sort(function(a,b) {

    return a - b;
});

console.log(number);



//Use the same trick to sort an array descending:

const number1 = [40, 100, 1, 5, 25, 10];

number1.sort(function(a,b){

return b - a;

});

console.log(number1);





//Sorting an Array in Random Order-

const cal = [40, 100, 1, 5, 25, 10];

cal.sort(function(a,b){

return 0.5 - Math.random();

});

console.log(cal);




//Find the Highest (or Lowest) Array Value-

//lowest-

const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){

    return a - b;

});

console.log(points[0]);


//heighest-

const pointss = [40, 100, 1, 5, 25, 10];

pointss.sort(function(a, b) {

    return b - a;

});

console.log(pointss[pointss.length-1]);




















