// arrays
let names = ['bread', 'noodle', 'soup'];

names.push('friut');
// names.push(5);
// names[1] = 5;

let price = [70, 100, 60, 200];

price.push(25);
// price.push('cake');
// price[0] = 'cake';

let mixed = ['bread', 70, 'soup', 60, 150];

mixed.push('cake');
mixed.push(80);
mixed[0] = 55;

// objects
let meal = {
  type: 'Italian',  
  description: 'special',
  price: 500
};

meal.price = 450;
meal.description = 'recommend';
// meal.price = '600';
// meal.ingredient = ['tomato', 'noodle']

meal = {
  type: 'American',
  description: 'popular',
  price: 250,
  // ingredient: ['bacon'],
};