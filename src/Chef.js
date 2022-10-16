class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    this.menus = [];
  };

  greetCustomer(customer, morning) {
    if (morning === true) {
      return `Good morning, ${customer}!`
    } else {
      return `Hello, ${customer}!`
    };
  };

  checkForFood(foodItem) {
    return `Yes, we're serving ${foodItem} today!`
  };
};

module.exports = Chef;