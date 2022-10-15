function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(order);
    } else {
    return;
  };
};

function refundOrder(order, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === order) {
      return deliveryOrders.splice([i], 1);
    };
  };
};

function listItems(orders) {
  var food = [];

  for (var i = 0; i < orders.length; i++) {
    food.push(orders[i].item)
  };
  var allFood = food.join(", ");
  return allFood;
};

function searchOrder(orders, itemName) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === itemName) {
      return true;
    }; 
  };
  return false;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}