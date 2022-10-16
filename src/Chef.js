class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  };

  greetCustomer(customer, morning) {
    if (morning === true) {
      return `Good morning, ${customer}!`
    } else {
      return `Hello, ${customer}!`
    };
  };
};

module.exports = Chef;