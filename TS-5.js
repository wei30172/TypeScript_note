// explicit types 明確型別宣告
var food;
var price;
var isHotProduct;
// price = 'noodle';
price = 15;
// food = 10;
food = 'noodle';
// isHotProduct = 100;
isHotProduct = true;
// arrays
// let meal: string[];
var meal = []; // 宣告為空陣列，才可操作陣列
// meal = [99, 150, 200];
meal.push('bread');
meal.push('noodle');
console.log(meal);
// union types 複合型別 or 聯合型別
var mixed = [];
mixed.push('yoyoyo');
mixed.push(false);
mixed.push(99);
console.log(mixed);
var uid;
// uid = true;
uid = '123';
uid = 123;
console.log(uid);
// objects
var setOne;
setOne = { type: 'Italian', price: 500 };
var setTwo;
setTwo = { type: 'American', price: 250, description: 'popular' };
