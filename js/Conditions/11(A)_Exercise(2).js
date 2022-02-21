// js using simple calculator with switch case-

console.log("please select options: \n1. Add \n2. Substract  \n3. Multifly  \n4. Divide");



let num1 = prompt("Enter first number:");

let num2 = prompt("Enter second number:");

let option = prompt("choose an operation:");

let result = null;



num1 = parseInt(num1);

num2 = parseInt(num2);

option = parseInt(option);




let num1Con = isNaN(num1);

let num2Con = isNaN(num2);

let optionCon = isNaN(option);

//console.log(num1Con); //just for checking

if (num1Con || num2Con || optionCon) {

    console.log("Invalid input!");

} else {
    switch (option) {
        case 1:
            result = num1 + num2;

            break;

        case 2:
            result = num1 - num2;

            break;

        case 3:
            result = num1 * num2;

            break;

        case 4:
            result = num1 / num2;

            break;

        default:
            break;
    }

    if (result == null) {

        console.log("no result");
    }
    else{

        console.log( "Result is :" + result );
    }
}
