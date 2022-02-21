

// EVENTS of javacsript-

// https://www.w3schools.com/JS/js_events_examples.asp

// onclick-
/*function message(){

    console.log("javascript");
}*/

// Events listener-

/*let  btn = document.getElementById("sample-btn");



console.log(btn);*/

//document.getElementById("sample-btn").addEventListener("click" , message); // parameter-( "event" , non declare function  ....no parenthesis used second parameter) 

document.getElementById("sample-btn").addEventListener("dblclick" , message);


function message() {

    console.log("Button clicked");
}

