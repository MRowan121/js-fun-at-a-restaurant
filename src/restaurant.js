
function createRestaurant(name) {
  // console.log({name: name, menus: {breakfast: [], lunch: [], dinner: []}});
  return {name: name, menus: {breakfast: [], lunch: [], dinner: []}};
};

module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem
}