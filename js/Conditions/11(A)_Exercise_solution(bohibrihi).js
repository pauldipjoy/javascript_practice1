// Grade count-

let number = prompt("What is your number?");

number = parseInt(number);

let grade;

if( number <= 100 && number >= 80 ){

    grade = "A+";
}

else if( number <= 80 && number >= 70 ){

    grade = "A";
}


else if( number <= 70 && number >= 60 ){

    grade = "A-";
}


else if( number <= 60 && number >= 50 ){

    grade = "B";
}


else if( number <= 50 && number >= 40 ){

    grade = "C";
}

else if( number <= 40 && number >= 33 ){

    grade = "D";
}

else if( number <= 33 && number >= 0 ){

    grade = "F";
}

else {

    grade = "Invalid Input";
}

console.log("GRADE IS " + grade);