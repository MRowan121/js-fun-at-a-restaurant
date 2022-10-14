function nameMenuItem(food) {
  return `Delicious ${food}`;
}

function createMenuItem(name, price, type) {
  return {name: name, price: price, type: type};
};


function addIngredients(food, ingredients) {
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


