
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


module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}