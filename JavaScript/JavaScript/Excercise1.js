function test() {
    var a = "3";
    var b = "8";
    console.log("a is " + a);
    console.log("b is " + b);

    /***********Do not change the code above ðŸ‘†*******/
    //Write your code on lines 7 - 9:

    a = a + b;
    b = a - b;
    a = a - b;

    /***********Do not change the code below ðŸ‘‡*******/

    console.log("a is " + a);
    console.log("b is " + b)
}