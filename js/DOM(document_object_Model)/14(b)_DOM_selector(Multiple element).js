
// Multiselector-

// document.getElementByClassName()



let list = document.getElementsByClassName('sample-class');

list[0].style.background = 'green';

list[0].style.color = 'red';

list[0].style.padding = '10px';


list[0].textContent = "Programming language!";

//console.log(list[0]);



//document.getElementByTagName()-


list = document.getElementsByTagName('li');

list = document.querySelector('ol').getElementsByTagName('li');

//for each function -


let lis = Array.from(list)

lis.forEach(function(items){

 //console.log(items);

});



//document.querySelectorAll()-

// id- #
//class- .
//tagname- nothing

list = document.querySelectorAll(".sample-class");

list = document.querySelectorAll("li");

list = document.querySelectorAll("ul li");

// in queryselector all for each function-

list.forEach(function(item1){

    console.log(item1); //[no array convert in query selector]
});

//odd even-

let lisodd = document.querySelectorAll("li:nth-child(odd)");

let liseve = document.querySelectorAll("li:nth-child(even)");

//for each

lisodd.forEach(function(item2){

    item2.style.background = "green";

    item2.style.color = "red";
});

liseve.forEach(function(item3){

    item3.style.background = "black";

    item3.style.color = "white";
});


console.log(list);

