
// Adding element to DOM-

// Existing element in first creating element-

// FOR ol list

let olitems = document.createElement("li");


// adding class and id -
olitems.className = "element_name";
olitems.id ="element_id";


// add attributes-
olitems.setAttribute("title" , "new-Title");

// add content-
olitems.appendChild(document.createTextNode("Javascript"));

// full insert in html dom-

document.querySelector("ol").appendChild(olitems);


console.log(olitems);




// for ul list-

let ulitems = document.createElement("li");
let link = document.createElement("a");


link.id = "new-id";
link.appendChild(document.createTextNode("Bohibrihi"));
link.setAttribute("href", "https://www.bohubrihi.com/");



// this  a portion add in li tag-
ulitems.appendChild(link);


// full insert in html DOM-
document.querySelector("ul").appendChild(ulitems);






console.log(ulitems);
//console.log(link);



