let val;

val = this;  // [full html document interface indicate]
val = window; // [ built in object]
val = window.document;
val = document;
val = document.all; // array
val = document.all[2];
val = document.all.length;

// individual property
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//form
val = document.forms;
val = document.forms[0];
val = document.forms[1];
//val = document.forms[2]; // undefined

// form option
val = document.forms[0].method;
val = document.forms[0].classList;
val = document.forms[0].action;


// links

val = document.links;
val = document.links[0];
val = document.links[1];
val = document.links[0].href;
val = document.links[0].className;
val =  document.links[0].classList;


//image-

val = document.images;


//scripts-
val = document.scripts;
val = document.scripts[0].src;
val = document.scripts[0].getAttribute("src");

console.log(val);





// link for each array-

links = document.links

let arrlink = Array.from(links);

arrlink.forEach(function(link){

    console.log(link);

    //console.log(link.getAttribute("src"));
});

//console.log(links);