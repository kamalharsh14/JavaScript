// 15. Scope of Variables
let redColor = 'red'; //Global variable can be used everywhere

function blue() {
    let blueColor = 'blue'; //Local variable is limited within a function
    console.log(redColor);
    console.log(blueColor);
}

function green() {
    let greenColor = 'green'; //Local variable is limited within a function
    console.log(redColor);
    console.log(greenColor);
}

blue();
green();