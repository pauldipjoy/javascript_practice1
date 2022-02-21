

//Creating Date Objects-

//Date objects are created with the new Date() constructor.

//There are 4 ways to create a new date object:

/*new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)*/



let val;

let today = new Date();

//JavaScript Date Input-

//There are generally 3 types of JavaScript date input formats:

/*Type	Example

ISO Date	"2015-03-25" (The International Standard)

Short Date	"03/25/2015"

Long Date	"Mar 25 2015" or "25 Mar 2015"*/


let birthday = new Date("09-21-1994  11:25:27"); // [internatinal formet ]

birthday = new Date("09/21/1994")  // [short date]

birthday = new Date("Sep 21 1994"); // [Long date]








val = today;

val= today.toString();

val = birthday;





console.log(val);