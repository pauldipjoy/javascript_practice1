

// Function parameter/argument-



function saysomething(param) {


    console.log(`Hello ${param}!`);


}

let  val = "DIPJOY"

saysomething(val);



// MULTIPLE parameter-


/*function  mydocument ( file1 , file2) {


    alert(`This is my ${file1} & ${file2}!`);
    
}


let folder1 = "java project";

let folder2 = "python project";



mydocument(folder1,folder2);*/




// default parameter-



function myhouse(color = "blue", room = 4){

alert(`My home color is ${color} & room is ${room}`);

}

let x = "white";

let  y  = 8;


myhouse( x, y);




// Mathmetic  two number add using function-


function addnum(a = 0, b= 0) // by default 0
{


    console.log(a + b);
}


addnum( 4 ,10);

addnum( 2.5, 6.5);





// return value-


function addnum1(x = 0, y= 0) // by default 0
{

return x + y;

}


//console.log(addnum1( 4 ,10));

let sum = (addnum1( 2.5, 6.5));

console.log(sum);





// After return value then no code execute-


function  minus( i= 0, j=0) {

    console.log(` ${i} - ${j} = ${i-j}`);

    return i - j;

    console.log(" line after return ");    //after return no code execute


}

let result = minus(12,4); 


console.log(result);
 








