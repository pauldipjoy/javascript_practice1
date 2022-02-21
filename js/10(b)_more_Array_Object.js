
// Array in Array place-


let arr = [12, 5, ["a", "b"], 6, 9, 8, 20];

console.log(arr);



// ACCESS array list value-

let arr1 =  [12, 5, ["a", "b", "c"], 6, 9, 8, 20];

console.log(arr1[2]);

console.log(arr1[2][0]);


// Nested array access-

let arr2 = [1, 2, ["a",["word1", "word2"], "b", ["word3", "word4"],"c"], 8, 9];

console.log(arr2);

console.log(arr2[2][1]);

console.log(arr2[2][3][1]);




//Array in objects Property-

let arr4 = [1, 2, [ "word5", "word6"], {prop1:"item1", prop2:"item2"}];

console.log(arr4);

console.log(arr4[3]["prop1"]);

console.log(arr4[3].prop1);




let arr5 = ["item1", "item2", { prop3: "item1", prop4: [1, 2 ,[ "a", "b" ] ] } ];

console.log(arr5);

console.log(arr5[2].prop4[2][1]);

console.log(arr5[2].prop4[1]);

console.log(arr5[2].prop3);



// Object in Array Property-

let obj = {prop5:"item1", prop6:"item2", prop7:[ "items of prop8", "items of prop9" ], };

console.log(obj);

console.log(obj.prop7[0]);

console.log(obj.prop6);












