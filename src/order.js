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
      return deliveryOrders.splice(i, 1);
    };
  };
  
  // if (deliveryOrders.includes(orderNumber)) {
  //   return deliveryOrders.splice(deliveryOrders);
};

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}