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

// spread operator
const myPizza = {
  ...hawaiianPizza,
  ingredients: [...hawaiianPizza.ingredients, 'bacon'],
  price: 12.95
}

console.log(myPizza === hawaiianPizza)


// spread => shallow copy

// myPizza.ingredients.push('bacon')

console.log(myPizza)

