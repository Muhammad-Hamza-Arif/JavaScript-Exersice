console.log('tut63');
// variable in js
// var , let , const
// var ka scope global hota hai
var name = "harry";
var channel;
var marks = 34;
channel = "codewithharry";
console.log(name, channel, marks)

// Rules for creating javascript variable
/*
1. Cannot start with numbers
2. Can start with letters, numbers, _, $
3. Are case sensitive
*/
var city = "lahore";
const ownerName = 'hamza';
// ownerName = "zaid"; cannot do this
console.log(ownerName)
// const fruite; hmmy const ky sath variable ki value declare karni parti hai

// let ka scope block level hota hai
{
    let city = "karachi";
    city = "peshawar";
    console.log(city);
}
console.log(city);

const arr1 = [1,2,3,4,5];
// arr1 = [11,22,33,44]; const dose not redeclare variable
console.log(arr1);
arr1.push(23);
console.log(arr1);
/*
Most common programming case types
1. camelCase
2. kabab-case
3. snake_case
4. PascalCase

*/