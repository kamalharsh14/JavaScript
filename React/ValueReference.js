// 14. Value/Reference Types
// Call By Reference
let number = { value: 10 };

function increase(num) {
    num.value++;
}
increase(number);
console.log(number);
// Call by Value
let number = 10;

function increase(number) {
    number++;
}
increase(number);
console.log(number);