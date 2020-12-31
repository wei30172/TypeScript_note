let food = 'rice';
let price = 50;
let isHotProduct = false;

// food = 20;
food = 'noddle';

// price = 'cookie';
price = 40;

// isHotProduct = 'yes';
isHotProduct = true;

// const circ = (diameter => {
//   return diameter * Math.PI;
// });

// console.log(circ('Yo')); // NaN

// 指定type
const circ2 = ((diameter: number) => {
  return diameter * Math.PI;
});

console.log(circ2(7.5)); // 23.561944901923447
