// let len = document.querySelectorAll(".mybutton").length;

// for( var i = 0 ; i < len; i++){

//     document.querySelectorAll(".mybutton")[i].addEventListener("click",function(){ // [i] - access button index

//         let myvar = this.innerHTML;
    
//         document.querySelector("h1").innerHTML = myvar  + "is clicked";
        
//     });

// }

let len = document.querySelectorAll(".mybutton").length;

for( let i = 0; i < len ; i++){

    document.querySelectorAll(".mybutton")[i].addEventListener("click" , function(){

        let text = this.innerHTML;
    
    document.querySelector("h1").innerHTML = text  + " " +  "is clicked";
    
    
    
    });
    

}

