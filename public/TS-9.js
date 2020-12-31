"use strict";
var logDetails = function (item, uid) {
    console.log(item + " has a uid of " + uid);
};
logDetails('Claire', 123456); // Claire has a uid of 123
logDetails('Claire', '123xyz'); // Claire has a uid of 123
var talk = function (user) {
    console.log(user.name + " says " + user.words + " !");
};
talk({ name: 'Claire', words: 'yoyoyo' }); // Claire says yoyoyo !
var logDetails1 = function (item, uid) {
    console.log(item + " has a uid of " + uid);
};
var talk1 = function (user) {
    console.log(user.name + " says " + user.words);
};
var talkAgain = function (user) {
    console.log(user.name + " says " + user.words);
};
