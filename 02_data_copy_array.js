const ingredients = ['tomato sauce', 'cheese', 'pineapple', 'ham'];
// spread operator

// const newIngredients = ingredients.concat('bacon')

const newIngredients = [...ingredients];

console.log(newIngredients);

console.log(newIngredients === ingredients);

// array methods
// map, filter, reduce

const noHam = ingredients.filter((ingredient) => ingredient !== 'ham');

const capitalize = ingredients.map(
  (ingredient) => `${ingredient.charAt(0).toUpperCase()}${ingredient.slice(1)}`
);

console.log(ingredients);
console.log(capitalize);

const count = ingredients.reduce((acc, item) => {

  // acc = 0
  // 0 + 1
  // acc = 1
  // 1 + 1
  // acc = 2
  // 2 + 1

  return acc + 1;
}, 0);

console.log({count})