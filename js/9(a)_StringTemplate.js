
//Back-Tics Syntax-

//Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let x = `it's my life`;

console.log(x);



//Multiline Strings-

//Template literals allows multiline strings:


let y = `javascript is a 
programming language`;

console.log(y);





//Interpolation-

/*Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:*/

//${...};

let country = "BANGLADESH";

let text = `i love my ${country}. it is a small country`;

console.log(text);


let a = 20;

let b = 30;

let c = `MY  FAMILY MEMBER IS ${a+b}`;

console.log(c);




//Variable Substitutions-

//Template literals allow variables in strings:

let firstName = "DIPJOY";

let lastName = "PAUL";

let TOTAL = `WELCOME to  ${firstName}, ${lastName} RETURN AT BANGLADESH`;

console.log(TOTAL);







//***HTML Templates***-

let header = "Templates Literals";

let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;


for (const x of tags) {

html += `<li>${x}</li>`;

}

html += `</ul>`;

console.log(html);





