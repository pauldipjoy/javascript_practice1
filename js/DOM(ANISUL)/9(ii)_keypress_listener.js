let len = document.querySelectorAll(".my-btn").length;

for( var i = 0; i < len; i++){

    document.querySelectorAll(".my-btn")[i].addEventListener("click" , function(){

let test = this.innerHTML;

console.log(test);

audioPlay(test);

playAnimation(test);

});

}


document.addEventListener("keypress" , function(event){

    let test = event.key;
    audioPlay(test);
    playAnimation(test);
});


function audioPlay(test){

    switch(test){

        case "song1":
            let audio4 = new Audio("/sounds/music1.mp3");
            audio4.play();
            break;
    
        case "song2":
            let audio5 = new Audio("/sounds/music2.mp3");
            audio5.play();
            break;  
                
        case "song3":
            let audio6 = new Audio("/sounds/music3.mp3");
            audio6.play();
            break;
    }

}




function playAnimation(test){

let selectButton = document.querySelector("."+test);

selectButton.classList.add("PIXEL");


setTimeout(function(){
    
    selectButton.classList.remove("PIXEL")

}, 3000);




}

