console.log("welcome to tut-15");
let cont = document.querySelector('.no')
cont = document.querySelector(".container");
// console.log(cont.childNodes);//new line ko as a text lyta hai 
// console.log(cont.children);
// let nodename = cont.childNodes[0].nodeName;
// console.log(nodename);
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeType);
// Node types
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

let container = document.querySelector('div.container');
// console.log(container);
// console.log(container.children[1]);
// console.log(container.children[1].children);
// console.log(container.children[1].children[0].children);
console.log(cont.childNodes);
// console.log(container.firstChild);
console.log(container.firstElementChild);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.children);
// console.log(container.childElementCount);// Count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
