// javascript object-
let student_js = {

    Name: "DIPJOY",

    age: 27,

    Hometown: "Chittagong"

}

// js object convert to json-
let student_json = JSON.stringify(student_js);

console.log(student_json);

// JSON convert to js object-
let student_jsnew = JSON.parse(student_json);

console.log(student_jsnew);

// JSON object Syntax-

/*let student_json = {

    "Name": "Dipjoy",

    "age": 27,

    "Hometown": "Chittagong"
    

}*/




