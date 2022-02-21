
// break-

for(  let i = 1 ; i<=5 ; i++) {

    if( i === 3){

        break;
    }

    console.log(i);
}


console.log(".........");



for( let i = 1 ; i<=5 ; i++) {

    console.log(i);

    if( i === 3){

        break;
    }

    
}


console.log("end break");


console.log("continue statement");


//continue statement- skip 

for( var x = 1; x <= 7; x++){

    if ( x == 5){

        continue;
    }

    console.log(x);
}

console.log("..........");



// odd even no check using continue statement-

for( var y = 1; y <= 10; y++) {

    if( y % 2 == 1) {

        continue;
    }

    console.log("Even no :" + y);

}

 console.log(".......");



for( var y = 1; y <= 10; y++) {

    if( y % 2 == 0) {

        continue;
    }

    console.log( "Odd no :" + y);
}



