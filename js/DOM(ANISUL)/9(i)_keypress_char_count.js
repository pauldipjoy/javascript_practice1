
let count = 0;

document.querySelector("#new-text").addEventListener("keypress" , function(event){
  count++;
    let text = event.key;

    document.querySelector("p").innerHTML = "you have pressed" + " " + count;

});