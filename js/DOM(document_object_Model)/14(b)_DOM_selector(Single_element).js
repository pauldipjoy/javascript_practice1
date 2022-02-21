
//document.getElementId()

//let val

// Getting element-

val = document.getElementById("document-title");

val = document.getElementById("document-title").id;

val = document.getElementById("document-title").className;


//Chnging style-

val = document.getElementById("document-title").style.background = "#000000";

val = document.getElementById("document-title").style.color = "White";

val = document.getElementById("document-title").style.padding = "10px";

val = document.getElementById("document-title").style.display = "block";


//changing content - 

val = document.getElementById("document-title").textContent = "New Content";


val = document.getElementById("document-title").innerText = "Again New Content";

val = document.getElementById("document-title").innerText = "<i>Again Again New Content</i>";

val = document.getElementById("document-title").innerHTML = "<i>Again Again New Content</i>";

//this shotcart way-
/*val = document.getElementById("document-title");

val.innerHTML = "This is my content";*/


//document.querySelector()

val = document.querySelector("#document-title"); // by id call using  "#"

val = document.querySelector(".document-title"); // by class call using "."

val = document.querySelector("h3") // by tag call


// list-
val = document.querySelector("ol");

val =document.querySelector("ol li");

val = document.querySelector("ul li");

// list style-

val =document.querySelector("ol li");

val.style.background = "blue";

val.style.color = "white";


val = document.querySelector("li:last-child");
val = document.querySelector("li:nth-child(3)");


val = document.querySelector("li:nth-child(3)");

val.innerHTML = "Javascript";

val = document.querySelector("li:nth-child(odd)");

val.innerHTML = ".net";

val = document.querySelector("li:nth-child(even)");

val.innerHTML = "react";






console.log(val);
