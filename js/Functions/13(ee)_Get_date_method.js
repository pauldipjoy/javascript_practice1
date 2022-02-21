

//Get Date Methods-

//These methods can be used for getting information from a date object:

/*Method	                  Description

getFullYear()	    Get the year as a four digit number (yyyy)

getMonth()	        Get the month as a number (0-11)

getDate()	        Get the day as a number (1-31)

getHours()	        Get the hour (0-23)

getMinutes()	    Get the minute (0-59)

getSeconds()	    Get the second (0-59)

getMilliseconds()	Get the millisecond (0-999)

getTime()	        Get the time (milliseconds since January 1, 1970)

getDay()	        Get the weekday as a number (0-6)

Date.now()	        Get the time. ECMAScript 5.*/


//  example-

let val;

/*let Birthday = new Date("09/21/1994");

let Data = new Date("01/01/1994");

val = Birthday.getFullYear();

val = Birthday.getMonth();

val = Data.getMonth();*/


let today = new Date();

//val = today.getDay();

//val = today.getHours();

//val = today.getMinutes();

//val = today.getMilliseconds();

val = today.getTime();// timestamp => AMOUNT OF seconds past since January 1,1970




console.log(val);



//You can use an array of names, and getDay() to return the weekday as a name:


let  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dd = new Date();

let todaydate =days[(dd.getDay())];

alert(todaydate);

