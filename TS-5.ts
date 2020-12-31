// explicit types 明確型別宣告

let food: string;
let price: number;
let isHotProduct: boolean;

// price = 'noodle';
price = 15;
// food = 10;
food = 'noodle';

// isHotProduct = 100;
isHotProduct = true;

// arrays
// let meal: string[];
let meal: string[] = [];  // 宣告為空陣列，才可操作陣列

// meal = [99, 150, 200];

meal.push('bread');
meal.push('noodle');
console.log(meal);

// union types 複合型別 or 聯合型別
let mixed: (string|number|boolean)[] = [];
mixed.push('yoyoyo');
mixed.push(false);
mixed.push(99);
console.log(mixed);

let uid: string|number;
// uid = true;
uid = '123';
uid = 123;
console.log(uid);

// objects
let setOne: object;
setOne = { type: 'Italian', price: 500 };

let setTwo: {
  type: string,
  price: number,
  description: string
};
setTwo = { type: 'American', price: 250, description: 'popular' };