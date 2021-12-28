// 1. Ways to print in JavaScript
// console.log("Hello world")
// alert("This is an Alert")
// document.write("This is Document.Write")

// 2. JavaScript Console API
// console.log("Hello world")
// console.warn("This is a warning")
// console.error("This is an Error")

// 3. JavaScript Variables
// let name = 'Harsh';        //String Literal
// let age = 21;              //Number Literal
// let isAproved = false;     //Boolean Literal
// let firstName = undefined; //Undefined
// let lastName = null;       //Null
// console.log(name);
// console.log(age);
// console.log(isAproved);
// console.log(firstName);
// console.log(lastName);

// 4. Objects
// let person = {
//     name: 'Harsh',
//     age: 31
// };
// console.log(person);

// // Dot Notation
// person.age = 23;
// person.name = 'Yash';

// // Bracket Notation
// person['Yash'] = 'Harsh';
// person[23] = 21;

// 5. Arrays
// let arr = ['abc', 'xyz', 'qwe'];
// console.log(arr[0]);
// console.log(arr[1]);
// arr[2] = 'fgh';
// console.log(arr);
// arr[3] = true;
// console.log(arr);

// 6. Fucntions
// function display() {
//     console.log('hello world');
// }
// display(); // function Calling

// function displayname(name) {
//     console.log('hello ' + name);
// }
// displayname('Harsh'); // function Calling

// 7.Types of Functions
function square(number) {
    let square = number * number;
    return square;
}

let Squareof = square(4);
console.log(Squareof);