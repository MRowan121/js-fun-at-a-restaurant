
function createRestaurant(restaurant) {
  // console.log({name: name, menus: {breakfast: [], lunch: [], dinner: []}});
  return {name: restaurant, menus: {breakfast: [], lunch: [], dinner: []}};
};

function addMenuItem(restaurant, pizza) {
  if (pizza.type === "breakfast" && !restaurant.menus.breakfast.includes(pizza)) {
  return restaurant.menus.breakfast.push(pizza);
  } else if (pizza.type === "lunch" && !restaurant.menus.lunch.includes(pizza)) {
  return restaurant.menus.lunch.push(pizza);
  } else if (pizza.type === "dinner" && !restaurant.menus.dinner.includes(pizza)) {
  return restaurant.menus.dinner.push(pizza);
  };
};

function removeMenuItem(restaurant, pizza, menuType) {
  for (var i = 0; i < restaurant.menus[menuType].length; i++) {
    if (pizza === restaurant.menus[menuType][i].name) {
      restaurant.menus[menuType].splice([i],1)
      return `No one is eating our ${pizza} - it has been removed from the ${menuType} menu!`
    };
  };
  return `Sorry, we don't sell ${pizza}, try adding a new recipe!`
};


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}