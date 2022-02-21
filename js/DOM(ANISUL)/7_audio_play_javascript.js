
let len = document.querySelectorAll(".my-btn").length

for( var i = 0; i < len; i++){

document.querySelectorAll(".my-btn")[i].addEventListener("click" , function(){

let text = this.innerHTML;

console.log(text);

audioplay(text);
    







});


}

function audioplay(text){


    switch(text) {

        case "music1":
            let audio1 = new Audio("/sounds/music1.mp3");
            audio1.play();
            break;
        
        case "music2":
            let audio2 = new Audio("/sounds/music2.mp3");
            audio2 .play();
            break;
        
        case "music3":
            let audio3 = new Audio("/sounds/music3.mp3");
            audio3.play();
            break;
        
        
        
        
        }

        
}
