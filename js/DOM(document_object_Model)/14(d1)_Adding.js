

// adding element in html DOM-

// create element-

let ul_list = document.createElement("li");
let linkitem = document.createElement("a")


linkitem.className = "new-text";
linkitem.appendChild(document.createTextNode("whatsapp"));
linkitem.setAttribute("href" , "www.whatsapp.com");

ul_list.appendChild(linkitem);

document.querySelector("ul").appendChild(ul_list);



console.log(ul_list);

//console.log(linkitem);


