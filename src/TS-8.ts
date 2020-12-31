let greet = () => {
  console.log('hello world!');
}

// 上方寫法如同下方(定義greet為Function)
// let greet: Function = () => {
//   console.log('hello, world!');
// }

// greet = 'hello';

greet = () => {
  console.log('hello, again!');
}

// 限定參數的型別
const add1 = (a: number, b: number) => {
  console.log(a + b);
}

add1(5, 10); // 15

const add2 = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
}

add2(5, 10, '10'); // 15 10
add2(5, 10 ); // 若參數c沒有加上問號，則必須要有三個參數 // 15 undefined

const add3 = (a: number, b: number, c: number | string = 8) => {
  console.log(a + b);
  console.log(c);
}

add3(5, 10, 20); // 15 20
add3(5, 10 ); // 參數c加上= 8，若沒有放第三個參數則預設為8 // 15 8

// c:? 以及 = '預設值'，只能擇一加。

const minus = (a: number, b: number) => {
  return a - b;
}

// 上方寫法如同下方(minus參數型別為數字)
// const minus = (a: number, b: number): number => {
//   return a - b;
// }

let result = minus(10, 7);
// result = 'else' // result 型別為數字
console.log(result)