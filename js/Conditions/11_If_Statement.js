
// Control statement two types-

//conditional control st.- if, else if, else

// loop control st. - for, while, do while




// IF, ELSE IF, ELSE Statement syntax -


/*if( first condition) {

    // code to be  executed (true) then stop code...... (if false then go to above condition)

} 
else if(second condition) {

    // other code
    

}

else(no condition)   {

    // some other code

}*/



/*if(false){

    console.log("If statement executed!");
}
else{
    console.log("else statement executed");
}

console.log("end of if statement!");*/





/*let age = prompt();

if( age >= 50) {

    console.log("old!");

}

else if( age < 50 && age >= 30){

    console.log("under 50 but above or equal 30!");
}

else if(age < 30 && age >= 18){

    console.log("under 30 but above or equal 18!");
}


else if(age < 18 && age > 0){

    console.log("under 18!");

}

else{

    console.log("invalid input!");
}







// greeting prog-

let time = prompt();

if ( time < 10){

    time = "Good morning!"
}

else if(time > 20) {

    time = "Good day!";
}

else {
    time = "have a good day";
}

console.log(time);*/



// even / odd -

/*input = prompt("ENTER A NUMBER");


let num;

if(input%2 == 0){

num = "Even";

}

else {
    

num= "odd";

}

console.log(num);*/



/*let num = 6;

if(num%2 == 0){

    console.log("Even");
}

else{

    console.log("Odd");
}
*/




// positive/ negative program-

/*let num = prompt();

if(num > 5) {

    console.log("Positive");

}


else if( num < 5 ) {

    console.log("Negative")
}

else {

    console.log("zero")
}*/



//letter grade-

/*let grade = prompt("Enter your marks");


let result;


if( grade <=100 &&  grade >= 80) {

    result = "A+";
}

else if( grade <=80 &&  grade >= 70) {

    result = "A";
}

else if( grade <=70 &&  grade >= 60) {

    result = "A-";
}

else if( grade <=60 &&  grade >= 50) {

    result = "B";
}

else if( grade <=50 &&  grade >= 40) {

    result = "C";
}

else if( grade <=40 &&  grade >= 30) {

    result = "D";
}
else {

    result = "FAIL";
}


console.log("FINAL RESULT IS " + result );*/





//largest number program- 


/*let num1 = prompt("Enter num1:");

let num2 = prompt("Enter num2:");

let num3 = prompt("Enter num3:"); 


num1 = parseInt(num1);

num2 = parseInt(num2);

num3 = parseInt(num3);


if(num1 > num2  &&  num1 > num3) {

    console.log(" Large number=" + num1);
}


else if(num2 > num1  &&  num2 > num3) {

    console.log("Large number =" + num2);
}


else {

    console.log("Large number=" + num3);
}*/





//  letter Vowel/ consonent -


let letter = prompt("Enter a letter:");


letter= letter.toLowerCase();


if(letter == "a" ||  letter == "e" ||  letter == "i" ||   letter == "o" ||   letter == "u" ) {


    console.log("letter is  vowel!");
}

else{

    console.log("letter is consonant!");
}






















