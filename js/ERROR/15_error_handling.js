// Error handling -> try, catch, finally ,throw
//try.....catch handlerun time eorrors(program which is)

// error object

// The finally statement -> execute code, after try and catch


/*try{

    // code test

}catch(){

// handle error

}*/


try {

    console.log("hello javascript!");

    console.log(x);

    console.log("hello java");
}


catch(err){

    console.log("inside catch block");
    console.log(err);

    console.log(err.name);
    console.log(err.type);
    console.log(err.message);
}

finally{
    console.log("hello java!")
}






// alert(" before hello");

// alert(x);

// alert("after hello");