let len = document.querySelectorAll(".mybutton").length;

for( var i = 0; i < len; i++){

    document.querySelectorAll(".mybutton")[i].addEventListener("click" , function(){

let text = this.innerHTML;

console.log(text);

audioplay(text);

playanimation(text);

});

}




function audioplay(text){

    switch(text){

        case "a":
            let audio1 = new Audio("/sounds/music1.mp3");
            audio1.play();
            break;
    
        case "b":
            let audio2 = new Audio("/sounds/music2.mp3");
            audio2.play();
            break;  
                
        case "c":
            let audio3 = new Audio("/sounds/music3.mp3");
            audio3.play();
            break;
    }

}

function playanimation(text){

let selectbutton = document.querySelector("." + text);

selectbutton.classList.add("anim");


setTimeout(function(){
    
    selectbutton.classList.remove("anim")

}, 3000);




}


