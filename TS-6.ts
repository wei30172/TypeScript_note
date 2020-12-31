// 任何型別皆可
let price: any = 100;

price = true;
console.log(price);
price = 'sale';
console.log(price);
price = { set: '250' };
console.log(price);

let mixed: any[] = [];

mixed.push(99);
mixed.push('yoyoyo');
mixed.push(false);
console.log(mixed);

let setOne: { type: any, price: any };

setOne = { type: 'Italian', price: 50 };
console.log(setOne);

setOne = { type: 1, price: '99' };
console.log(setOne);