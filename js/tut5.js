// Type conversion 
console.log('Welcome to tut5');
let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  [1,2,3,4,5];
// console.log(arr.length, (typeof arr));

let i = 8;
// console.log(i.toString());

let stri = Number("3434");
stri = Number("34d34");
stri = Number(true);
stri = Number([1,2,3,4,5,6,7,8]);
// console.log(stri,(typeof stri))

// let number = 34.989;
// let number = parseInt("34.989");
// console.log(number);
let number = parseFloat("34.989");
console.log(number);

// toFixed bu defauly zero dekhata hai
// console.log(number.toFixed(2), (typeof number));

// Type coercion

// let mystr = "689";
let mystr = Number("689");
let munum = 34;
// number ko string mae convert kar ky concatenate kar dy ga
console.log(mystr + munum);