 console.log("this is tut-16");
 let element = document.createElement("li");
 let text = document.createTextNode("i am a text node");
 element.appendChild(text);
 // Add a class name to the li element
//  element.className = "childul";
//  element.id = "createdli";
//  element.setAttribute('title','mytitle');
//  element.innerText = "hello this is created by hamza";
//  element.innerHTML = "<b>hello this is created by hamza</b>";
 let ul = document.querySelector("ul.this");
 ul.appendChild(element);
//  console.log(ul);
//  console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);
element.replaceWith(elem2);

let myul = document.getElementById("myul");
myul.replaceChild(element,document.getElementById("fui"))
myul.removeChild(document.getElementById('lui'));
// let pr = elem2.hasAttribute('href');
// elem2.removeAttribute('id');
// elem2.setAttribute('title', 'myelem2title');
// console.log(elem2, pr);