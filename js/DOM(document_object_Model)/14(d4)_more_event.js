
//document.querySelector("#btn-text").addEventListener("mouseover" , text);

document.querySelector(".container").addEventListener("mousemove" ,text);

document.querySelector(".container").style.background = "blue";

function text( a ) {

    let val = a;

    val = a.target;
    val = a.target.id; // this keyword used for current existing element

    val = a.timeStamp; // [ to be page load milisecond count]
    val = a.type;

    val = a.clientY; // TOP TO BOTTOM PIXEL 
    val = a.clientX; // LEFT TO RIGHT PIXEL

    val = a.offsetY; // entire element pixel
    val = a.offsetX; // entire element pixel

    val = this;

    this.style.background = `#${a.offsetX}`;




//console.log(val);

    console.log(a.offsetY);
    console.log(a.offsetX);
    console.log(val);

}