document.addEventListener("keypress" , function(event){
 
    let text = event.key;

    document.querySelector("p").innerHTML = " You have pressed " + " " + text;

});



