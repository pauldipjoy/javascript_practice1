
// the throw statement - create custom error


document.querySelector("#btn").addEventListener("click" , function(){

    let num = document.getElementById("numText").value;



    try{

        if(num < 5)
        {
            throw "input is to low";

        }
        else if (num > 10)
        
        {

        throw "input is to high";
        }



    } catch( check){

        console.log( check );

    }
});