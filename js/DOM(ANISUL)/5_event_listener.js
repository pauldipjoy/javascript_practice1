
//  event listener-
/*document.getElementById("test").addEventListener("click" , mytest);



function mytest(){

    console.log("lacasa de papel!");

}*/



// h1 tag access by mouseover

let myval = document.querySelector("h1");


myval.addEventListener("mouseover" ,function(){

    myval.classList.add("my-style");


});

myval.addEventListener("mouseout" ,function(){

    myval.classList.remove("my-style");


});

