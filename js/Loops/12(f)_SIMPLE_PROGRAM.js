
// sum of the series and their square number using loop-

let n = parseInt(prompt("Enter the number of terms:"));

let sum = 0;

let series = "";


for( var i = 1; i <= n; i++ ){

    sum += i**2;

    series += (i**2).toString();

    console.log(series);

    if( i == n){

        continue;
    }
    
    series  += " + ";

    //console.log(series);

    
}


//console.log(`${series} = ${sum} `);

//console.log(series);

//console.log(sum)



