"use strict";
// 設定回傳值型別
// Example 1
var talk; // 不限回傳值型別
talk = function (name, words) {
    console.log(name + " says " + words + " !");
};
talk('Claire', 'hi'); // Claire says hi !
// Example 2
var calc; // 回傳值為數字
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// Example 3
var logDetails; // 不限回傳值型別
logDetails = function (student) {
    console.log(student.name + " is " + student.age + " years old.");
};
logDetails({ name: 'Claire', age: 30 }); // Claire is 30 years old.
