console.log("we are at tut-6");
const name = "hamza";
const greeting = "Good Morning";
// console.log(greeting + " " + name);

let html;
html = "<h1> this is heading</h1>"+
       "<p> this is my para</p>";
    
// html = html.concat("this");
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
console.log(html);


// indexing using functuin

// console.log(html[0]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(8));
console.log(html.endsWith("thiss"));
console.log(html.includes("myy"));
console.log(html.substring(1,5));
// console.log(html.substring(include,not-include));
console.log(html.slice(0,4));
console.log(html.slice(-4)); // minus value follow
console.log(html.substring(-3)); // minus value not follow
console.log(html.split('>'));
console.log(html.replace("this" , "it")); // first occurence

//templet literals
// let fuite1 = 'orange\'';
// let fruite2 = 'apple';
// let myhtml = `hello ${name}
//              <h1>This is heading</h1>
//              <p>you like ${fuite1} and ${fruite2}`;
// document.body.innerHTML = myhtml;

