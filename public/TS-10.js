"use strict";
// Function
// Example 1
var talk;
talk = function (name, words) {
    console.log(name + " says " + words + " !");
};
talk('Claire', 'hi'); // Claire says hi !
// Example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
var logDetails;
logDetails = function (student) {
    console.log(student.name + " is " + student.age + " years old.");
};
logDetails({ name: 'Claire', age: 30 }); // Claire is 30 years old.
