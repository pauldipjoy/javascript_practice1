

// Array iteration  using Mapping-


let numbers = [ 2, 12, 5, 25, 80];




function addSomething(value){

    return value * 2


}


let arr_res = numbers.map(addSomething);


console.log(arr_res);





// array items-


let food = ["Cake", "Cookies", "Polao", "chikenkavab"];



function additem(item){

    return ` ${item} is a food`;


}


let arr_item = food.map(additem);

console.log(arr_item);





// ANOTHER WAY- 


let food1 = [2, 12, 5, 25, 80];



let arr_square = food1.map(function( item) {

    return item * item;


})

console.log(arr_square);




