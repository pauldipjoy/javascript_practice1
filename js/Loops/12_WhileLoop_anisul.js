
// 1 to 100 print-

/*let i = 1;

while(i <= 100) {

    document.write( "  " + i);

    i += 1;

}

document.write("<h2>END</h2>");




// sum using while loop-


var x = 1;

var sum = 0;


while(x <= 10)

{

    sum += x;

    x+= 1;


}

document.write(sum);


document.write("<h3> End </h3>");


//2 + 4 + 6 + 8 + ........+100

var y = 2;

var sum = 0;

while( y <= 100){

    sum += y;

    y += 2;

}

document.write(sum);


document.write("<h4> End <h4>");*/




//  sum of all the numbers that are divisible by 3 and 5 from 1-100-


var z = 1;

var sum = 0;

while( z <= 100) {

    if( z % 3 == 0 &&  z % 5 == 0) {

        document.write(" " + z);

        sum += z;
    }

    z += 1;

}

document.write( " Sum  = " + sum);
