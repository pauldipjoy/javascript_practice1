
//Traversing the DOM-

let val;

let list = document.querySelector("ul");

let list_items = document.querySelector("ul li:first-child");

val = list;

val = list_items;



// In list get Child node-

val = list;

val = list.childNodes;
val = list.childNodes[0]; // [ text for "enter" ]
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[3];

val = list.childNodes[1].nodeName;


val = list.childNodes[1].nodeType;
val = list.childNodes[3].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype

val = list.children; // no text 
val = list.children[0];
val = list.children[0].textContent ="Hello!";

val = list.children[1].children;
val = list.children[1].children[0];

// get id using children-

val = list.children[1].children[0].id;
val = list.children[1].children[0].href;

//get 1st child list-

val = list.firstChild;

// without text-
val = list.firstElementChild;

// get last child-

val = list.lastChild;

// without text-

val = list.lastElementChild;

// child element count-

val = list.childElementCount;



// get Parent element-

val = list_items;

val = list_items.children;

val = list_items.parentElement;

val = list_items.parentNode;

val = list_items.parentElement.parentElement;

val = list_items.parentelement


// get siblings-

val = list_items.nextSibling.nextSibling;

// text avoid-
val = list_items.nextElementSibling;

//preevious siblings-

val = document.querySelector("ul li:last-child");

val = val.previousSibling;

//text avid-

val = val.previousElementSibling;


console.log(val);
