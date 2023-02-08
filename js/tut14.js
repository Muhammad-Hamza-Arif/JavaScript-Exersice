console.log("Welcome to tutorial 14");
/*
1. Single Element Selector
2. Multi Element Selector
*/

// Single Element Selector
// DOM mae sy ak element ko select karta hai only first
let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
// element.style.background = "black";
// element.innerText = "hamza is a good boy";
element.innerHTML = "<b>hamza is a good boy</b>";
// console.log(element.innerText);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel.style.color = "green";
// console.log(sel);

// Multi Element Selector
// DOM mae sy multi element ko select karta hai
let elems = document.getElementsByClassName('child');
// console.log(elems[0]);
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);
Array.from(elems).forEach(function(element){
    console.log(element);
    element.style.color = "blue";
});
// console.log(elems[0].getElementsByClassName('child'));
