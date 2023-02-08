// primitive data types
// String
let name = "hamza";
console.log("My name is " + name);
console.log("Data type is " + (typeof name));

// Numbers
let marks = 22;
console.log("My marks is " + marks);
console.log("Data type is " + (typeof marks));

// Boolean
let isDrive = true;
console.log("Data type is " + (typeof isDrive));

// Null
let nullVar = null;
console.log("Data type is " + (typeof nullVar));

// undefined
let varUndefined;
console.log("Data type is " + (typeof varUndefined));

// refference data types
// arrays
let myarr = [1,2,3,4,false,'string'];
console.log("Data type is " + (typeof myarr));

// object literals
let stdMarks = {
    hamza: 22,
    zaid: 33,
    waleed: 44
}
console.log("Data type is " + (typeof stdMarks));

// functions
function finalmarks() {
    
}
console.log("Data type is " + (typeof finalmarks));

// dates
let date = new Date();
console.log("Data type is " + (typeof date));