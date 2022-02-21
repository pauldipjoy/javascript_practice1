

// Remove Element -

let listitems = document.querySelectorAll("li");

let list = document.querySelector("ul");

//remove only-
//listitems[0].remove();
//listitems[5].remove();


// removeChild() method-
// list.removeChild(listitems[2]); // error coz not in same list
//list.removeChild(listitems[5]);


// add new classList and remove-
list.classList.add("new-list");
list.classList.add("test-new");

//remove class list-
list.classList.remove("sample-class");




//check attribute-
let val = list.hasAttribute("class");
//let val = list.hasAttribute("title");


// add attribute-
list.setAttribute("title" , "new-attribute");


// remove attribute-
list.removeAttribute("title");



console.log(listitems);
console.log(list);
console.log(val);