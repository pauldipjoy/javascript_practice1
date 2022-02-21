//Array Methods-


//Converting Arrays to Strings-

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits.toString());


// /*The   join()   method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:*/

// console.log(fruits.join(" & "));




// //Popping-

// //The pop() method removes the last element from an array

// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits1.pop());

// console.log(fruits1);

// //The pop() method returns the value that was "popped out":

// const text1  = ["Banana", "Orange", "Apple", "Mango"];
// let text2  = fruits.pop();

// console.log(text2);




// //Pushing-

// //The push() method adds a new element to an array (at the end):

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits2.push("pinapple"));

// console.log(fruits2);



// //Shifting Elements-


// /*Shifting is equivalent to popping, working on the first element instead of the last.

// The shift() method removes the first array element and "shifts" all other elements to a lower index.*/


// const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits3.shift());

// console.log(fruits3);


// //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements-


// const fruits4 = ["Banana", "Orange", "Apple", "Mango"];

// console.log(fruits4.unshift("pinapple"));

// console.log(fruits4);



// //Changing Elements-

// //Array elements are accessed using their index number:


// const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

// fruits5[4] = "Kiwi";

// console.log(fruits5);



// const fruits6 = ["Banana", "Orange", "Apple", "Mango"];


// fruits6[fruits6.length] = "kiwi";

// console.log(fruits6);




// //Deleting Elements-

// const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

// console.log(delete fruits7[1]);

// console.log(fruits7);




//*** Splicing an Array *** -

/*The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:*/

const fruits8 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits8.splice(2, 1, "Lemon", "Kiwi"));

console.log(fruits8);




const fruits9 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits9.splice(2, 2, "Lemon", "Kiwi"));

console.log(fruits9);



//Using splice() to Remove Elements-

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits10.splice(2, 3));

console.log(fruits10);





// //Merging (Concatenating) Arrays-


// //The concat() method creates a new array by merging (concatenating) existing arrays:


// const myGirls = ["Cecilie", "Lone"];

// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);




// const myGirl = ["Cecilie", "Lone", "Tobias"];  //[same variable used both "Tobias"]

// const myBoy = ["Emil", "Tobias", "Linus"];

// const myChildrens = myGirl.concat(myBoy);

// console.log(myChildrens);



// //The concat() method can take any number of array arguments:

// //Merging Three Arrays-

// const arr1 = ["Cecilie", "Lone"];

// const arr2 = ["Emil", "Tobias", "Linus"];

// const arr3 = ["Robin", "Morgan"];

// const myChildrenss = arr1.concat(arr2, arr3);

// console.log(myChildrenss);


// //The concat() method can also take strings as arguments:

// //Merging an Array with Values-

// const arr4 = ["Cecilie", "Lone","Emil", "Tobias", "Linus"];

// console.log(arr4.concat("dipjoy", "dipa"));





// //Slicing an Array-

// /*The slice() method slices out a piece of an array into a new array.

// This example slices out a part of an array starting from array element 1 ("Orange"):*/

// const fruitss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const citruss = fruitss.slice(1);

// console.log(citruss);


// /*The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.*/

// const fruitsss = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const citrusss = fruitsss.slice(1, 3);

// console.log(citrusss);








