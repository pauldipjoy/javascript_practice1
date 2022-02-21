/*function add(){

    let myvar = document.getElementById("para-id");
    myvar.style.color ="red";
    myvar.style.fontSize = "3rem";
    myvar.style.fontStyle ="italic";
    myvar.style.fontWeight = "bolder";

}*/

// 2nd way by css class-

let myvar = document.getElementById("para2-id");

function addstyle(){


    myvar.classList.add("para-style");

}

function removestyle() {

myvar.classList.remove("para-style");

}