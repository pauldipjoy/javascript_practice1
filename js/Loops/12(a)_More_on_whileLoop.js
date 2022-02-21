//  print 1 to 10 using while loop-

let i = 1; // initialization

while(i <= 10){  // condition

    console.log(i);

    i++; //updated
}


// while loop using if control statement-

let x = 1;

while( x <= 10){

    if( x === 5){

        console.log("the result is" + x);
    }

    console.log(x);

    x++;
}


// while loop using 1 to 10 sum-

let a = 1;

let sum = 0;



while(  a <= 10){

    sum = sum + a;

    a++;


}

console.log("Result is:" + sum);


// while loop using 1 to 10 multify-

let  b = 1;

let product = 1;


while( b <= 10){

product += b;

b++;

}

console.log("Total:" + b);



// uses a while loop to collect the car names from the cars array:

const  cars = ["BMW", "Volvo", "Saab", "Ford"];

let x = 0;

let text = "";

while( cars[x]) {

    text += cars[x];

    x++;
}

console.log(text);