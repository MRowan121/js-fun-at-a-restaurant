function nameMenuItem(food) {
  // console.log(`Delicious ${food}`);
  return `Delicious ${food}`;
}

function createMenuItem(name, price, type) {
  // console.log({name: name, price: price, type: type});
  return {name: name, price: price, type: type};
};


function addIngredients(food, ingredients) {
  // ingredients.push(food);
  if (ingredients.includes(food)) {
    return 
    } else {
    return ingredients.push(food);
  };
};

function formatPrice(price) {
  return price = `$${price}`;
};

function decreasePrice(reducePrice) {
  return reducePrice - (reducePrice * .10);
};

function createRecipe(title, ingredients, type) {
  return {title: title, ingredients: ingredients, type: type};
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


