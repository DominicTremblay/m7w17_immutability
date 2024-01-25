const hawaiianPizza = {
  name: 'Hawaiian pizza',
  ingredients: ['tomato sauce', 'cheese', 'pineapple', 'ham'],
  nutrition: {
    calories: 246,
    fat: {
      saturatedFat: 9,
      transFat: 0.2,
      monosaturatedFat: 2.7,
    },
    protein: 11,
    carbohydrates: 30,
  },
  size: 'medium',
  price: 14.95,
};

// Is this object mutable?

hawaiianPizza.price = 16.95

console.log(hawaiianPizza)

// const => it cannot be reassigned

// will this work?
// hawaiianPizza = {};


// What would happen?

// copying the Hawaiian pizza value?
const myPizza = hawaiianPizza;

myPizza.price = 12.95;

console.log(myPizza)
console.log(hawaiianPizza)

console.log (myPizza === hawaiianPizza);



