
// Replacing element-

let newheading = document.createElement("h1");

newheading.appendChild(document.createTextNode("H1 NEW-ELEMENT"));

newheading.className = "new-class";


let oldheading = document.querySelector("h3");

let parent  = document.querySelector(".container");
// parent = oldheading.parentElemnet;




parent.replaceChild(newheading , oldheading);





console.log(newheading);

console.log(oldheading);

console.log(parent);