
// switch

/*console.log(" Select an option:\na. option  \nb. option 2  \nc. option 3 ");

choice = prompt();

let text;

if (choice == "a"){

    text = "you have selected option 1";
}

else if(choice == "b"){

    text = "you have selected option 2";
}

else if(choice == "c"){

    text = "you have selected option 3";
}

else {

    text = "no option selected";
}

console.log(text);*/



// switch case -

console.log(" Select an item:\na. item 1  \nb. item 2  \nc. item 3 ");


chosen = prompt("Enter a item");

let  value;

switch(chosen) {

    case "a": 

    value = "item 1  selected";

    break;

    case "b": 

    value = "item 2  selected";

    break;

    case "c": 

    value = "item 3  selected";
    
    break;

    default:

    value = "no item selected";

    break;

}

console.log(value);
