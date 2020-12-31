var food = 'rice';
var price = 50;
var isHotProduct = false;
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
var circ2 = (function (diameter) {
    return diameter * Math.PI;
});
console.log(circ2(7.5)); // 23.561944901923447
