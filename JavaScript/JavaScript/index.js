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
// function square(number) {
//     let square = number * number;
//     return square;
// }
// let Squareof = square(4);
// console.log(Squareof);

// 8. String
// const name = 'Harsh Kamal Singh';
// console.log(name.length);
// console.log(name);

// 9. If - Else
// let hour = 20;
// if (hour > 0 && hour <= 12) {
//     console.log('Good Morning!');
// } else if (hour > 12 && hour <= 6) {
//     console.log('Good Afternoon!');
// } else {
//     console.log('Good Evening!');
// }

// 10. Loops
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// 11. Factory Functions
// function createcircle(radius) {
//     return {
//         radius,
//         area() {
//             console.log((3.142 * radius * radius));
//         }
//     }
// };

// const circle1 = createcircle(2);
// const circle2 = createcircle(4);
// console.log(circle1);
// console.log(circle2);

// 12. Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.area = function() {
//         console.log((3.142 * radius * radius));
//     }
// };

// 13. Getters and Setters
// const person = {
//     firstName: 'Harsh',
//     midName: 'Kamal',
//     lastName: 'Singh',
//     get fullName() {
//         return `${person.firstName} ${person.midName} ${person.lastName}`
//     },
//     set fullName(name) {
//         const parts = name.split(' ');
//         this.firstName = parts[0];
//         this.midName = parts[1];
//         this.lastName = parts[2];
//     }
// };
// console.log(person.fullName);
// person.fullName = 'Yash Kamal Singh';
// console.log(person);

// 14. Value/Reference Types
//Call By Reference
// let number = { value: 10 };
// function increase(num) {
//     num.value++;
// }
// increase(number);
// console.log(number);
//Call by Value
// let number = 10;
// function increase(number) {
//     number++;
// }
// increase(number);
// console.log(number);

// 15. Scope of Variables
// let redColor = 'red';         //Global variable can be used everywhere

// function blue() {
//     let blueColor = 'blue';   //Local variable is limited within a function
//     console.log(redColor);
//     console.log(blueColor);
// }

// function green() {
//     let greenColor = 'green'; //Local variable is limited within a function
//     console.log(redColor);
//     console.log(greenColor);
// }

// blue();
// green();

// 16. let vs var
// function varscope() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('\n' + i);
// }
// varscope();

// function letscope() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('\n' + i);
// }
// letscope();

// 17. Cloning an Object
// const circle = {
//     radius: 3,
//     area() {
//         let area = 3.142 * radius * radius;
//         console.log(area);
//     }
// }

// const another = {...circle };

// console.log(another);

// 18.