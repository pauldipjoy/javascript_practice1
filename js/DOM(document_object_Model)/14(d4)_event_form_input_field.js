

document.querySelector("#name").addEventListener("focus" , test);


document.querySelector("#name").addEventListener("keyup" , test2);



function test(){

    //console.log("focused!")
    this.style.background = "pink";
    
}

function test2(){

    document.getElementById("demo").innerText = this.value;
}






