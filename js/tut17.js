console.log("this is tut-17");
document.getElementById("heading").addEventListener('click',function(e){
    let variable;
    console.log('You have clicked the heading');
    variable=e.target;
    variable=e.target.className;
    variable=Array.from(e.target.classList);
    // variable.forEach(function(element)
    // {
    //     console.log(element);
    // })
    variable=e.target.id;
    variable=e.offsetX;
    variable=e.offsetY;
    console.log(variable);
    // location.href = '//codewithharry.com';
});