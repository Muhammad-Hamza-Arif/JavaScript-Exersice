console.log("We are in tut-7");
let marks = [22,33,44,55,66,77,88,99];
const fruite = ["apple" , "orange" , "banana"];
const mixed = ["hamza" , 77 , [2,3]];

// array make a array constructor
const arr = new Array(1,2,3,4,5,"orange");
console.log(marks);
console.log(fruite);
console.log(mixed);
console.log(arr);
console.log(Array.isArray(mixed));//array hai ya ni mixed name sy
arr[0] = "hamza";
let arrayelement = arr[0];
console.log("element :",arrayelement);
console.log(arr);

let value = marks.indexOf(22);
console.log(value);

// mutating and modifying
console.log(marks);
marks.push(34);
console.log(marks);
marks.unshift(786);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
// marks.splice(0,3);
// console.log(marks);
marks.reverse();
console.log(marks);;
marks.splice(0,3);

console.log(marks);

// let marks2 = [1,2,3,4,45];
// marks = marks.concat(marks2);
// console.log(marks);

// let myobj = {
//     name: "hamza",
//     sapid: 70077855,
//     section: [1,2,3,4,5]
// }
// console.log(myobj);
// console.log(myobj['name']);
// console.log(myobj.name);

