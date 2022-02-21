// Array itertion using  forEach-


let food = ["APPLE", "MANGO", " BANANA"];


//food.forEach(function( item,i){

/*console.log(value);

console.log(index);

console.log(array);

console.log("..........");*/


//console.log( `index: ${i} &  value: ${item}`);


//})






let printsomething = function(item, i){

    console.log( `index: ${i} &  value: ${item}`);

}

food.forEach(printsomething);
